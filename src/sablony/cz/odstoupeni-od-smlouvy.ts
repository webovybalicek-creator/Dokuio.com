/**
 * Odstoupení od smlouvy uzavřené na dálku (e-shop) do 14 dnů – Česko.
 * Obsah podle vzorového formuláře z nařízení vlády č. 29/2023 Sb. (ve znění NV č. 66/2026 Sb.), § 1829 OZ.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { OZ, NV_ODSTOUPENI, COI } from './zdroje';
import { naDatum, pridejPracovniDny, pridejDny, pridejMesice, isoDatum, cislo, splatkovyKalendar, pripominkySplatek } from '../terminy';

export const odstoupeniOdSmlouvy: Sablona = {
  kod: 'CZ-ODSTOUPENI-14',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  pripominky: (d) => {
    const odeslano = naDatum(d.datum);
    if (!odeslano) return [];
    return [{ nazev: 'Prodávající má vrátit peníze (orientačně)', datum: isoDatum(pridejDny(odeslano, 14)), popis: 'Do 14 dnů od doručení odstoupení. Počítáno od data odstoupení – při pozdějším doručení se lhůta posune.' }];
  },
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Odstoupení od smlouvy',
  podnadpis: 'uzavřené distančním způsobem (na dálku), podle § 1829 zákona č. 89/2012 Sb., občanský zákoník',
  souborPdf: 'odstoupeni-od-smlouvy',
  paticka: 'Vytvořeno zdarma · šablona CZ-ODSTOUPENI-14 v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'spotřebitel', vpravo: 'převzal za prodávajícího (při osobním podání)' },
  slovo: { n: 'odstoupení', g: 'odstoupení', a: 'odstoupení', l: 'odstoupení' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  coDal: [
    'Odešlete odstoupení e-mailem, doporučeně nebo přes formulář či tlačítko pro odstoupení na webu obchodu – a schovejte si doklad o odeslání.',
    'Zboží pošlete zpět nejpozději do 14 dnů od odstoupení; obal stačí přiměřený, nemusí být originální.',
    'Obchod vám musí vrátit peníze (včetně nejlevnější nabízené dopravy) do 14 dnů od odstoupení; může počkat, až zboží dostane zpět nebo mu doložíte odeslání.',
    'Nevrací peníze? Obraťte se na Českou obchodní inspekci (mimosoudní řešení sporů je zdarma).',
  ],
  kontrola: [
    'Lhůta je 14 dnů od převzetí zboží (u služeb od uzavření smlouvy). Rozhoduje datum odeslání odstoupení, ne doručení.',
    'Platí jen pro nákup na dálku (e-shop, telefon) nebo mimo provozovnu od podnikatele. V kamenném obchodě a mezi soukromými lidmi zákonné právo na vrácení není.',
    'Výjimky: zboží na míru, rychle se kazící, rozbalené hygienické zboží, otevřené nosiče a software, ubytování a doprava na konkrétní termín.',
    'Náklady na vrácení zboží nesete vy jen tehdy, když vás o tom obchod předem informoval – zkontrolujte obchodní podmínky.',
    'Zboží vracejte nepoškozené; za snížení hodnoty kvůli jinému než nutnému zacházení může obchod chtít náhradu.',
    'Pokud vás obchod o právu na odstoupení vůbec nepoučil, lhůta se prodlužuje až o 12 měsíců.',
  ],
  zdroje: [OZ, NV_ODSTOUPENI, COI],

  kroky: [
    {
      id: 'obchod',
      nazev: 'Obchod',
      popis: 'Údaje najdete v obchodních podmínkách nebo v patičce e-shopu.',
      pole: [
        { id: 'pr_nazev', typ: 'text', popis: 'Prodávající (název firmy)', napoveda: 'Název podle obchodních podmínek nebo faktury, ne jen název webu.', placeholder: 'např. Alza.cz a.s.', sirka: 34 },
        { id: 'pr_ico', typ: 'text', popis: 'IČO (nepovinné)', napoveda: 'Najdete na faktuře nebo v obchodních podmínkách.', placeholder: 'např. 27082440', sirka: 12, polovina: true, ares: { nazev: 'pr_nazev', adresa: 'pr_adresa' } },
        { id: 'pr_adresa', typ: 'text', popis: 'Adresa pro odstoupení', napoveda: 'Adresa nebo e-mail uvedený v obchodních podmínkách pro odstoupení a vrácení zboží.', placeholder: 'např. Jankovcova 1522/53, 170 00 Praha 7', sirka: 46 },
      ],
    },
    {
      id: 'nakup',
      nazev: 'Nákup',
      pole: [
        { id: 'zbozi', typ: 'textarea', popis: 'Zboží nebo služba', napoveda: 'Co vracíte, ideálně jak je uvedeno na faktuře.', placeholder: 'např. bezdrátová sluchátka Sony WH-1000XM5, černá', sirka: 64 },
        { id: 'objednavka', typ: 'text', popis: 'Číslo objednávky nebo faktury', napoveda: 'Podle něj obchod nákup dohledá.', placeholder: 'např. 2026112345', sirka: 18, polovina: true },
        { id: 'objednano', typ: 'datum', popis: 'Datum objednání', napoveda: 'Z potvrzovacího e-mailu.', sirka: 14, polovina: true },
        { id: 'prevzato', typ: 'datum', popis: 'Datum převzetí', napoveda: 'Kdy jste zboží převzali. Od tohoto dne běží 14 dnů.', sirka: 14, polovina: true },
        { id: 'cena', typ: 'castka', popis: 'Zaplacená cena (Kč, nepovinné)', napoveda: 'Včetně dopravy, pokud jste ji platili.', placeholder: 'např. 7990', sirka: 12, polovina: true },
      ],
    },
    {
      id: 'vy',
      nazev: 'Vaše údaje a vrácení peněz',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Jméno a příjmení', napoveda: 'Jak je uvedeno v objednávce.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa', napoveda: 'Adresa z objednávky.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
        { id: 'p_kontakt', typ: 'text', popis: 'E-mail nebo telefon', napoveda: 'Pro komunikaci s obchodem.', placeholder: 'např. jan.novak@email.cz', sirka: 30 },
        { id: 'ucet', typ: 'text', popis: 'Číslo účtu pro vrácení peněz', napoveda: 'Nevyplníte-li, obchod vrátí peníze stejným způsobem, jakým jste platili.', placeholder: '123456789/0100', sirka: 24 },
        { id: 'duvod', typ: 'text', popis: 'Důvod (nepovinné)', napoveda: 'Důvod uvádět nemusíte. Obchodu ale může pomoct.', placeholder: 'např. velikost nesedí', sirka: 46 },
        { id: 'misto', typ: 'text', popis: 'Místo (obec)', napoveda: 'Předvyplníme podle vaší adresy.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Předvyplnili jsme dnešek – musí být do 14 dnů od převzetí.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Adresát',
      vysvetleni: 'Komu odstoupení posíláte.',
      odstavce: ['{{pr_nazev}}, IČO {{pr_ico}}, {{pr_adresa}}'],
    },
    {
      nadpis: 'Oznámení o odstoupení od smlouvy',
      vysvetleni: 'Samotné odstoupení podle vzorového formuláře z nařízení vlády. Důvod uvádět nemusíte.',
      odstavce: [
        'Oznamuji, že tímto odstupuji od smlouvy o nákupu tohoto zboží / o poskytnutí této služby: {{zbozi}}.',
        'Číslo objednávky: {{objednavka}} · Datum objednání: {{objednano}} · Datum obdržení: {{prevzato}} · Cena: {{cena}}',
        'Důvod (nepovinný): {{duvod}}',
        'Žádám o vrácení zaplacených peněz na účet č. {{ucet}}.',
      ],
    },
    {
      nadpis: 'Spotřebitel',
      vysvetleni: 'Kdo odstupuje.',
      odstavce: ['{{p_jmeno}}, {{p_adresa}}, kontakt: {{p_kontakt}}'],
    },
  ],
};
