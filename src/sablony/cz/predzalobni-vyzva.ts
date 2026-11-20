/**
 * Předžalobní výzva (výzva k zaplacení) – Česko. § 142a OSŘ (výzva nejméně 7 dnů před podáním žaloby,
 * odeslaná na adresu pro doručování / poslední známou adresu), § 1970 OZ a NV 351/2013 Sb. (úrok z prodlení).
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { castkaSlovy } from '../dokument';
import { OZ, OSR, NV_UROK } from './zdroje';
import { naDatum, pridejDny, isoDatum } from '../terminy';

export const predzalobniVyzva: Sablona = {
  kod: 'CZ-PREDZALOBNI-VYZVA',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Předžalobní výzva k zaplacení',
  podnadpis: 'podle § 142a zákona č. 99/1963 Sb., občanský soudní řád',
  souborPdf: 'predzalobni-vyzva',
  paticka: 'Vytvořeno zdarma · šablona CZ-PREDZALOBNI-VYZVA v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídá odesílatel, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'věřitel', vpravo: 'převzal dlužník (při osobním předání)' },
  slovo: { n: 'výzva', g: 'výzvy', a: 'výzvu', l: 'výzvě' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const lhuta = naDatum(d.zaplatit_do);
    const odeslano = naDatum(d.datum);
    return [
      ...(lhuta ? [{ nazev: 'Konec lhůty k zaplacení z předžalobní výzvy', datum: isoDatum(lhuta), popis: 'Zkontrolujte, zda dlužník zaplatil. Pokud ne, můžete podat žalobu (nejdříve 7 dnů po odeslání výzvy).' }] : []),
      ...(odeslano && !lhuta ? [{ nazev: 'Nejdřívější podání žaloby (7 dnů od odeslání výzvy)', datum: isoDatum(pridejDny(odeslano, 7)) }] : []),
    ];
  },
  coDal: [
    'Podepište výzvu a pošlete ji doporučeně s dodejkou (nebo datovou schránkou). Podací lístek si schovejte – dokazuje odeslání.',
    'Pošlete ji na adresu dlužníka pro doručování, a když ji neznáte, na poslední známou adresu. Kopii klidně i e-mailem.',
    'Žalobu podejte nejdříve 7 dnů po odeslání výzvy – jinak vám soud nemusí přiznat náhradu nákladů řízení.',
    'Když dlužník zaplatí jen část, vyžádejte si uznání zbytku dluhu písemně.',
  ],
  kontrola: [
    'Výzvu odešlete nejméně 7 dnů před podáním žaloby, jinak vám soud zpravidla nepřizná náhradu nákladů řízení (§ 142a OSŘ).',
    'Adresa: použijte adresu pro doručování (u firmy sídlo z obchodního rejstříku), jinak poslední známou adresu dlužníka. Stačí, že výzvu prokazatelně odešlete – nemusí ji převzít.',
    'Uveďte přesně, co a z jakého důvodu dlužník dluží (faktura, smlouva, datum splatnosti) a kolik.',
    'Lhůta k zaplacení: aspoň 7 dnů od odeslání, rozumné je 10–15 dnů.',
    'Úrok z prodlení stanoví nařízení vlády č. 351/2013 Sb. (repo sazba ČNB + 8 procentních bodů ročně) – nemusíte ho počítat, stačí ho požadovat.',
    'Nevyhrožujte ničím jiným než soudem – výhrůžky zveřejněním nebo nátlakem mohou být protiprávní.',
  ],
  zdroje: [OSR, OZ, NV_UROK],

  kroky: [
    {
      id: 'strany',
      nazev: 'Věřitel a dlužník',
      popis: 'Věřitel výzvu posílá, dlužník ji dostává.',
      pole: [
        { id: 'k_jmeno', typ: 'text', popis: 'Věřitel – jméno a příjmení nebo firma', napoveda: 'Kdo peníze požaduje.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'k_ico', typ: 'text', popis: 'IČO nebo datum narození věřitele', napoveda: 'U podnikatele IČO, u soukromé osoby datum narození.', placeholder: 'např. 12345678', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa věřitele', napoveda: 'Kam vám může dlužník odpovědět.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
        { id: 'k_kontakt', typ: 'text', popis: 'Telefon nebo e-mail (nepovinné)', placeholder: 'např. jan.novak@email.cz', sirka: 30 },
        { id: 'p_jmeno', typ: 'text', popis: 'Dlužník – jméno a příjmení nebo firma', napoveda: 'U firmy přesný název z obchodního rejstříku.', placeholder: 'např. Petr Dvořák', sirka: 34 },
        { id: 'p_ico', typ: 'text', popis: 'IČO nebo datum narození dlužníka', napoveda: 'Pomůže dlužníka jednoznačně určit.', placeholder: 'např. 87654321', sirka: 14, polovina: true, ares: { nazev: 'p_jmeno', adresa: 'p_adresa' } },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa dlužníka pro doručování', napoveda: 'U firmy sídlo, jinak adresa pro doručování nebo poslední známá adresa.', placeholder: 'např. Masarykova 5, 602 00 Brno', sirka: 46 },
      ],
    },
    {
      id: 'dluh',
      nazev: 'Co dlužník dluží',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Dlužná částka (Kč)', napoveda: 'Jistina bez úroků. Slovy doplníme sami.', placeholder: 'např. 25000', sirka: 14, polovina: true },
        { id: 'splatnost', typ: 'datum', popis: 'Původní splatnost', napoveda: 'Kdy měl dlužník zaplatit (např. podle faktury).', sirka: 14, polovina: true },
        {
          id: 'duvod',
          typ: 'volba',
          popis: 'Z čeho dluh vznikl',
          moznosti: [
            { hodnota: 'faktura', popis: 'Nezaplacená faktura' },
            { hodnota: 'zapujcka', popis: 'Nevrácená půjčka' },
            { hodnota: 'kupni', popis: 'Nezaplacená kupní cena' },
            { hodnota: 'jine', popis: 'Jiný důvod' },
          ],
        },
        { id: 'duvod_popis', typ: 'text', popis: 'Upřesnění', napoveda: 'Číslo faktury nebo smlouvy a datum.', placeholder: 'např. faktura č. 2026015 ze dne 1. 10. 2026', sirka: 56 },
        {
          id: 'urok',
          typ: 'volba',
          popis: 'Požadovat úrok z prodlení?',
          napoveda: 'Zákonný úrok podle nařízení vlády č. 351/2013 Sb. Nemusíte ho počítat.',
          moznosti: [
            { hodnota: 'ano', popis: 'Ano, zákonný úrok z prodlení' },
            { hodnota: 'ne', popis: 'Ne, jen dlužnou částku' },
          ],
        },
      ],
    },
    {
      id: 'zaplaceni',
      nazev: 'Lhůta a platba',
      pole: [
        { id: 'zaplatit_do', typ: 'datum', popis: 'Zaplatit nejpozději do', napoveda: 'Aspoň 7 dnů od odeslání výzvy, rozumné je 10–15 dnů.', sirka: 14, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'Číslo účtu', napoveda: 'Kam má dlužník zaplatit.', placeholder: '123456789/0100', sirka: 24, polovina: true },
        { id: 'vs', typ: 'text', popis: 'Variabilní symbol (nepovinné)', placeholder: 'např. 2026015', sirka: 12, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Místo (obec)', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum odeslání', napoveda: 'Předvyplnili jsme dnešek.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    castka_slovy: (d) => castkaSlovy(d.castka),
  },

  clanky: [
    {
      nadpis: 'Odesílatel a adresát',
      vysvetleni: 'Kdo výzvu posílá a komu.',
      odstavce: [
        '**Věřitel:** {{k_jmeno}}, IČO / datum narození {{k_ico}}, {{k_adresa}}, kontakt {{k_kontakt}}',
        '**Dlužník:** {{p_jmeno}}, IČO / datum narození {{p_ico}}, {{p_adresa}}',
      ],
    },
    {
      nadpis: 'Výzva k zaplacení',
      vysvetleni: 'Co dlužník dluží, z jakého důvodu a odkdy je v prodlení.',
      odstavce: [
        'Vážená paní, vážený pane,',
        {
          volba: 'duvod',
          uvodVzor: 'důvod dluhu (zaškrtněte jednu možnost):',
          moznosti: {
            faktura: 'evidujeme za Vámi neuhrazenou fakturu – {{duvod_popis}}.',
            zapujcka: 'dosud jste nevrátil(a) zápůjčku – {{duvod_popis}}.',
            kupni: 'dosud jste nezaplatil(a) kupní cenu – {{duvod_popis}}.',
            jine: 'evidujeme za Vámi tento dluh: {{duvod_popis}}.',
          },
        },
        'Dlužná částka činí {{castka}} (slovy: {{castka_slovy}}) a byla splatná dne {{splatnost}}. Do dnešního dne nebyla zaplacena.',
        'Tímto Vás vyzývám, abyste uvedenou částku zaplatil(a) nejpozději do {{zaplatit_do}} na účet č. {{ucet}}, variabilní symbol {{vs}}.',
        {
          volba: 'urok',
          uvodVzor: 'Úrok z prodlení (zaškrtněte jednu možnost):',
          moznosti: {
            ano: 'Zároveň požaduji zaplacení zákonného úroku z prodlení ode dne následujícího po dni splatnosti do zaplacení, ve výši stanovené nařízením vlády č. 351/2013 Sb.',
            ne: 'Úrok z prodlení touto výzvou nepožaduji, pokud dlužnou částku zaplatíte ve stanovené lhůtě.',
          },
        },
      ],
    },
    {
      nadpis: 'Upozornění',
      vysvetleni: 'Výzva podle § 142a OSŘ – bez ní by věřitel u soudu nemusel dostat náhradu nákladů.',
      odstavce: [
        'Tato výzva je výzvou k plnění před podáním žaloby podle § 142a občanského soudního řádu.',
        'Pokud dlužnou částku ve stanovené lhůtě nezaplatíte, podám bez dalšího upozornění žalobu u příslušného soudu. Vystavujete se tak povinnosti nahradit i náklady soudního řízení, včetně soudního poplatku a případně nákladů zastoupení advokátem.',
        'Pokud jste mezitím zaplatil(a), považujte tuto výzvu za bezpředmětnou. V případě nejasností mě prosím kontaktujte.',
      ],
    },
  ],
};
