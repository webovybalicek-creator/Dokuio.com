/**
 * Reklamace zboží (uplatnění práv z vadného plnění) – Česko, spotřebitel vůči obchodu.
 * Podle § 2161 a násl. OZ ve znění zákona č. 374/2022 Sb. (24 měsíců, vyřízení do 30 dnů).
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { OZ, COI, PORTAL_REKLAMACE } from './zdroje';

export const reklamace: Sablona = {
  kod: 'CZ-REKLAMACE',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Reklamace zboží',
  podnadpis: 'uplatnění práv z vadného plnění podle § 2161 a násl. zákona č. 89/2012 Sb., občanský zákoník',
  souborPdf: 'reklamace',
  paticka: 'Vytvořeno zdarma · šablona CZ-REKLAMACE v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'kupující', vpravo: 'převzal za prodávajícího (datum a podpis)' },
  slovo: { n: 'reklamace', g: 'reklamace', a: 'reklamaci', l: 'reklamaci' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  coDal: [
    'Reklamaci předejte se zbožím a dokladem o koupi v obchodě, nebo ji pošlete e-shopu podle jeho reklamačního řádu.',
    'Chtějte písemné potvrzení: kdy jste reklamovali, co je vadou a co požadujete. Na to máte nárok.',
    'Obchod musí reklamaci vyřídit do 30 dnů od uplatnění, pokud se s vámi nedohodne na delší lhůtě.',
    'Nevyřídí ji včas nebo ji neoprávněně zamítne? Můžete odstoupit od smlouvy a obrátit se na Českou obchodní inspekci.',
  ],
  kontrola: [
    'Vady můžete uplatnit do 24 měsíců od převzetí (u použitého zboží může být lhůta zkrácena na 12 měsíců).',
    'Vada, která se projeví do 1 roku od převzetí, se považuje za vadu, kterou zboží mělo už při převzetí – obchod by musel dokázat opak.',
    'Nejdřív obvykle oprava nebo výměna; slevu nebo odstoupení můžete chtít, když oprava ani výměna nejde, obchod ji odmítne, nestihne nebo se vada opakuje.',
    'Vadu popište konkrétně a vyfoťte ji. Uschovejte si doklad o koupi (stačí i výpis z účtu nebo potvrzení objednávky).',
    'Reklamace platí jen u nákupu od podnikatele. Mezi soukromými lidmi se řeší podle kupní smlouvy.',
    'Vyřízení do 30 dnů je zákonná lhůta – delší jen s vaším souhlasem. Nic vám nevnucujte podpisem.',
  ],
  zdroje: [OZ, PORTAL_REKLAMACE, COI],

  kroky: [
    {
      id: 'obchod',
      nazev: 'Obchod',
      pole: [
        { id: 'pr_nazev', typ: 'text', popis: 'Prodávající (název firmy)', napoveda: 'Podle dokladu o koupi nebo obchodních podmínek.', placeholder: 'např. Datart International, a.s.', sirka: 34 },
        { id: 'pr_ico', typ: 'text', popis: 'IČO (nepovinné)', napoveda: 'Najdete na účtence nebo faktuře.', placeholder: 'např. 63080249', sirka: 12, polovina: true },
        { id: 'pr_adresa', typ: 'text', popis: 'Adresa provozovny nebo pro reklamace', napoveda: 'Kde reklamujete – obchod, kde jste koupili, nebo adresa z reklamačního řádu e-shopu.', placeholder: 'např. Nákupní 1, 251 01 Říčany', sirka: 46 },
      ],
    },
    {
      id: 'zbozi',
      nazev: 'Zboží a vada',
      pole: [
        { id: 'zbozi', typ: 'text', popis: 'Reklamované zboží', napoveda: 'Značka, model, případně výrobní číslo.', placeholder: 'např. pračka Bosch WAN28264BY, výr. č. FD9803', sirka: 46 },
        { id: 'doklad', typ: 'text', popis: 'Číslo dokladu nebo objednávky', napoveda: 'Účtenka, faktura nebo číslo objednávky.', placeholder: 'např. 2026045678', sirka: 18, polovina: true },
        { id: 'koupeno', typ: 'datum', popis: 'Datum koupě / převzetí', napoveda: 'Od převzetí běží 24 měsíců na reklamaci.', sirka: 14, polovina: true },
        { id: 'vada', typ: 'textarea', popis: 'Popis vady', napoveda: 'Co přesně nefunguje a kdy k tomu dochází. Čím konkrétněji, tím lépe.', placeholder: 'např. pračka při odstřeďování hlasitě bouchá a zastaví se s chybou E18', sirka: 64 },
        { id: 'projevila', typ: 'datum', popis: 'Kdy se vada projevila', napoveda: 'Přibližné datum stačí.', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'pozadavek',
      nazev: 'Co požadujete',
      pole: [
        {
          id: 'pozadavek',
          typ: 'volba',
          popis: 'Způsob vyřízení',
          napoveda: 'Zákon dává přednost opravě nebo výměně. Slevu nebo vrácení peněz můžete chtít hlavně tehdy, když oprava ani výměna nejde nebo selže.',
          moznosti: [
            { hodnota: 'oprava', popis: 'Oprava' },
            { hodnota: 'vymena', popis: 'Výměna za nový kus' },
            { hodnota: 'sleva', popis: 'Přiměřená sleva' },
            { hodnota: 'odstoupeni', popis: 'Odstoupení od smlouvy a vrácení peněz' },
          ],
        },
        { id: 'p_jmeno', typ: 'text', popis: 'Vaše jméno a příjmení', napoveda: 'Kupující.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Vaše adresa', napoveda: 'Pro zaslání vyřízení.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
        { id: 'p_kontakt', typ: 'text', popis: 'E-mail nebo telefon', napoveda: 'Obchod vás musí o vyřízení informovat.', placeholder: 'např. jan.novak@email.cz', sirka: 30 },
        { id: 'ucet', typ: 'text', popis: 'Účet pro vrácení peněz (nepovinné)', napoveda: 'Při slevě nebo odstoupení.', placeholder: '123456789/0100', sirka: 24, zobrazitKdyz: { pole: 'pozadavek', je: ['sleva', 'odstoupeni'] } },
        { id: 'misto', typ: 'text', popis: 'Místo (obec)', napoveda: 'Předvyplníme podle vaší adresy.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum uplatnění', napoveda: 'Předvyplnili jsme dnešek. Od tohoto dne běží 30 dnů na vyřízení.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Prodávající',
      vysvetleni: 'U koho reklamujete.',
      odstavce: ['{{pr_nazev}}, IČO {{pr_ico}}, {{pr_adresa}}'],
    },
    {
      nadpis: 'Reklamace',
      vysvetleni: 'Co je vadné a co požadujete. Konkrétní popis zrychlí vyřízení.',
      odstavce: [
        'Uplatňuji práva z vadného plnění u tohoto zboží: {{zbozi}}, doklad č. {{doklad}}, zakoupeno / převzato dne {{koupeno}}.',
        'Popis vady: {{vada}}',
        'Vada se projevila dne {{projevila}}.',
        {
          volba: 'pozadavek',
          uvodVzor: 'Požaduji (zaškrtněte):',
          uvod: 'Požaduji',
          moznosti: {
            oprava: 'odstranění vady opravou.',
            vymena: 'odstranění vady dodáním nové věci bez vady.',
            sleva: 'přiměřenou slevu z kupní ceny, zaslanou na účet č. {{ucet}}.',
            odstoupeni: 'odstoupení od kupní smlouvy a vrácení kupní ceny na účet č. {{ucet}}.',
          },
        },
        'Žádám o písemné potvrzení o uplatnění reklamace s uvedením data, obsahu reklamace a požadovaného způsobu vyřízení, a o vyřízení reklamace ve lhůtě 30 dnů podle občanského zákoníku.',
      ],
    },
    {
      nadpis: 'Kupující',
      vysvetleni: 'Kdo reklamuje.',
      odstavce: ['{{p_jmeno}}, {{p_adresa}}, kontakt: {{p_kontakt}}'],
    },
  ],
};
