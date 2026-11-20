/**
 * Výpověď z pracovního poměru daná zaměstnancem (nebo návrh dohody o rozvázání) – Česko.
 * Ověřeno v zákoníku práce č. 262/2006 Sb. ve znění od 1. 6. 2025 (flexinovela): § 49 (dohoda, písemně),
 * § 50 odst. 1, 3, 5 (písemná forma, zaměstnanec bez udání důvodu, odvolání jen se souhlasem),
 * § 51 (výpovědní doba nejméně 2 měsíce, začíná dnem doručení, končí dnem shodným číslem; prodloužení jen písemně,
 * stejně pro obě strany), § 337 (doručování zaměstnancem), § 313 (potvrzení o zaměstnání), § 314 (posudek do 15 dnů).
 * Jen zaměstnanec → zaměstnavatel.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { ZAKONIK_PRACE, MPSV_FLEXINOVELA } from './zdroje';
import { naDatum, pridejMesice, isoDatum } from '../terminy';

export const vypovedPracovniPomer: Sablona = {
  kod: 'CZ-VYPOVED-PRACE',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Výpověď z pracovního poměru',
  podnadpis: 'výpověď zaměstnance, případně návrh dohody o rozvázání pracovního poměru podle zákona č. 262/2006 Sb., zákoník práce',
  souborPdf: 'vypoved-z-pracovniho-pomeru',
  paticka: 'Vytvořeno zdarma · šablona CZ-VYPOVED-PRACE v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'zaměstnanec', vpravo: 'za zaměstnavatele – převzal dne (u dohody: souhlasím)' },
  slovo: { n: 'výpověď', g: 'výpovědi', a: 'výpověď', l: 'výpovědi' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    if (d.zpusob === 'dohoda') {
      return typeof d.dohoda_k === 'string' && d.dohoda_k
        ? [{ nazev: 'Poslední den v práci (dohoda)', datum: d.dohoda_k, popis: 'Vyzvedněte si potvrzení o zaměstnání a vraťte svěřené věci.' }]
        : [];
    }
    const doruceni = naDatum(d.datum);
    if (!doruceni) return [];
    const zeSmlouvy = parseInt(String(d.vd_mesice ?? ''), 10);
    const mesice = d.vd === 'smlouva' && zeSmlouvy >= 2 && zeSmlouvy <= 24 ? zeSmlouvy : 2;
    // § 51 odst. 1: začíná dnem doručení, končí dnem, který se s ním číslem shoduje (jinak posledním dnem měsíce)
    const konec = pridejMesice(doruceni, mesice);
    return [
      {
        nazev: 'Konec pracovního poměru po výpovědi (orientačně)',
        datum: isoDatum(konec),
        popis: 'Počítáno s doručením výpovědi v den podpisu. Při pozdějším doručení se konec posune.',
      },
    ];
  },
  coDal: [
    'Výpověď podepište vlastní rukou. Bez písemné formy se k ní nepřihlíží.',
    'Doručte ji zaměstnavateli osobně (v sídle nebo nadřízenému/personálnímu) a na kopii si nechte potvrdit datum převzetí. Jde to i do datové schránky zaměstnavatele, nebo podepsanou elektronicky na adresu, kterou k tomu zaměstnavatel určil.',
    'Výpovědní doba začíná dnem doručení. Až do jejího konce normálně pracujete a dostáváte mzdu.',
    'Domluvte se na předání práce, vrácení svěřených věcí a vyčerpání nebo proplacení dovolené.',
    'Při skončení vám zaměstnavatel vydá potvrzení o zaměstnání (zápočtový list) – budete ho potřebovat u nového zaměstnavatele nebo na úřadu práce.',
  ],
  kontrola: [
    'Výpověď musí být písemná a musí zaměstnavateli dojít. Rozhoduje den doručení, ne den sepsání.',
    'Jako zaměstnanec můžete dát výpověď z jakéhokoli důvodu nebo bez udání důvodu – důvod psát nemusíte.',
    'Výpovědní doba je nejméně 2 měsíce. Od 1. 6. 2025 začíná dnem doručení výpovědi a končí dnem, který se s ním číslem shoduje (doručeno 15. 3. → konec 15. 5.). Podrobnosti k novele vysvětluje [MPSV](https://mpsv.gov.cz/jake-zmeny-prinasi-flexibilni-novela-zakoniku-prace-).',
    'Delší výpovědní dobu jen tehdy, když je písemně sjednaná v pracovní smlouvě (musí platit stejně pro vás i pro zaměstnavatele). Zkontrolujte pracovní smlouvu.',
    'Chcete skončit dřív? Navrhněte dohodu o rozvázání pracovního poměru k určitému dni – ta musí být písemná a platí jen se souhlasem zaměstnavatele.',
    'Jste ve zkušební době? Pracovní poměr můžete ve zkušební době zrušit z jakéhokoli důvodu nebo bez udání důvodu (§ 66 zákoníku práce) – na to je jiný text než výpověď.',
    'Odeslanou výpověď nelze vzít zpět jednostranně – odvolat ji jde jen písemně a se souhlasem zaměstnavatele.',
  ],
  zdroje: [ZAKONIK_PRACE, MPSV_FLEXINOVELA],

  kroky: [
    {
      id: 'zamestnanec',
      nazev: 'Zaměstnanec',
      popis: 'Vaše údaje, jak je má zaměstnavatel v pracovní smlouvě.',
      pole: [
        { id: 'z_jmeno', typ: 'text', popis: 'Jméno a příjmení', napoveda: 'Jak je uvedeno v pracovní smlouvě.', placeholder: 'např. Petra Svobodová', sirka: 34, autocomplete: 'name' },
        { id: 'z_narozeni', typ: 'datum', popis: 'Datum narození', napoveda: 'Pomůže jednoznačně určit, o koho jde. Osobní číslo stačí místo něj.', sirka: 14, polovina: true },
        { id: 'z_osobni', typ: 'text', popis: 'Osobní číslo (nepovinné)', napoveda: 'Pokud ho u zaměstnavatele máte (najdete na výplatní pásce).', placeholder: 'např. 10452', sirka: 10, polovina: true },
        { id: 'z_adresa', typ: 'text', popis: 'Adresa', napoveda: 'Adresa bydliště, kam vám zaměstnavatel může poslat písemnosti.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46, autocomplete: 'street-address' },
        { id: 'z_pozice', typ: 'text', popis: 'Pracovní pozice (nepovinné)', napoveda: 'Druh práce podle pracovní smlouvy.', placeholder: 'např. účetní', sirka: 28 },
      ],
    },
    {
      id: 'zamestnavatel',
      nazev: 'Zaměstnavatel',
      popis: 'Údaje najdete v pracovní smlouvě nebo na výplatní pásce.',
      pole: [
        { id: 'f_nazev', typ: 'text', popis: 'Zaměstnavatel (název firmy)', napoveda: 'Přesný název podle pracovní smlouvy.', placeholder: 'např. Stavby Novák s.r.o.', sirka: 34 },
        { id: 'f_ico', typ: 'text', popis: 'IČO', napoveda: 'Tlačítkem doplníte název a sídlo z registru.', placeholder: 'např. 12345678', sirka: 12, polovina: true, ares: { nazev: 'f_nazev', adresa: 'f_sidlo' } },
        { id: 'f_sidlo', typ: 'text', popis: 'Sídlo', napoveda: 'Výpověď se zaměstnavateli zpravidla doručuje osobně v místě jeho sídla.', placeholder: 'např. Masarykova 5, 602 00 Brno', sirka: 46 },
        { id: 'smlouva_datum', typ: 'datum', popis: 'Datum pracovní smlouvy (nepovinné)', napoveda: 'Kdy jste pracovní smlouvu podepsali.', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'skonceni',
      nazev: 'Skončení',
      pole: [
        {
          id: 'zpusob',
          typ: 'volba',
          popis: 'Jak chcete skončit',
          napoveda: 'Výpověď nepotřebuje souhlas zaměstnavatele, ale běží výpovědní doba. Dohoda může skončit kdykoli, ale zaměstnavatel s ní musí souhlasit.',
          moznosti: [
            { hodnota: 'vypoved', popis: 'Výpověď (s výpovědní dobou)' },
            { hodnota: 'dohoda', popis: 'Návrh dohody o skončení k určitému dni' },
          ],
        },
        {
          id: 'vd',
          typ: 'volba',
          popis: 'Výpovědní doba',
          napoveda: 'Zákonná doba je 2 měsíce. Delší platí jen tehdy, když je písemně sjednaná v pracovní smlouvě.',
          moznosti: [
            { hodnota: 'zakonna', popis: '2 měsíce (podle zákona)' },
            { hodnota: 'smlouva', popis: 'Delší, sjednaná v pracovní smlouvě' },
          ],
          zobrazitKdyz: { pole: 'zpusob', je: 'vypoved' },
        },
        { id: 'vd_mesice', typ: 'text', popis: 'Délka podle smlouvy', napoveda: 'Opište ze smlouvy, např. „3 měsíce“.', placeholder: 'např. 3 měsíce', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'vd', je: 'smlouva' } },
        { id: 'dohoda_k', typ: 'datum', popis: 'Skončit ke dni', napoveda: 'Poslední den pracovního poměru, který navrhujete.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'zpusob', je: 'dohoda' } },
        {
          id: 'zadosti',
          typ: 'vice',
          popis: 'Co ještě chcete (nepovinné)',
          napoveda: 'Potvrzení o zaměstnání musí zaměstnavatel vydat vždy, připomenutí nevadí. Posudek vydá do 15 dnů od žádosti.',
          moznosti: [
            { hodnota: 'prevzeti', popis: 'Písemné potvrzení převzetí' },
            { hodnota: 'potvrzeni', popis: 'Potvrzení o zaměstnání (zápočtový list)' },
            { hodnota: 'posudek', popis: 'Posudek o pracovní činnosti' },
          ],
        },
        { id: 'misto', typ: 'text', popis: 'Místo (obec)', napoveda: 'Předvyplníme podle vaší adresy.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'z_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Předvyplnili jsme dnešek. Výpovědní doba ale běží až od doručení.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Zaměstnanec',
      vysvetleni: 'Kdo výpověď dává.',
      odstavce: ['{{z_jmeno}}, datum narození {{z_narozeni}}, osobní číslo {{z_osobni}}, bytem {{z_adresa}}, pracovní pozice: {{z_pozice}}'],
    },
    {
      nadpis: 'Zaměstnavatel',
      vysvetleni: 'Komu výpověď doručujete.',
      odstavce: ['{{f_nazev}}, IČO {{f_ico}}, se sídlem {{f_sidlo}}'],
    },
    {
      nadpis: 'Skončení pracovního poměru',
      vysvetleni: 'Výpověď ukončí pracovní poměr uplynutím výpovědní doby, dohoda sjednaným dnem.',
      odstavce: [
        {
          volba: 'zpusob',
          uvodVzor: 'Způsob skončení (zaškrtněte jednu možnost):',
          moznosti: {
            vypoved: 'Dávám Vám výpověď z pracovního poměru založeného pracovní smlouvou ze dne {{smlouva_datum}}, a to podle § 50 odst. 3 zákona č. 262/2006 Sb., zákoník práce, bez uvedení důvodu.',
            dohoda: 'Navrhuji Vám, abychom pracovní poměr založený pracovní smlouvou ze dne {{smlouva_datum}} rozvázali dohodou podle § 49 zákona č. 262/2006 Sb., zákoník práce, ke dni {{dohoda_k}}.',
          },
        },
        {
          volba: 'vd',
          kdyz: { pole: 'zpusob', je: 'vypoved' },
          uvodVzor: 'U výpovědi – výpovědní doba (zaškrtněte jednu možnost):',
          moznosti: {
            zakonna: 'Výpovědní doba činí 2 měsíce. Začíná dnem doručení této výpovědi a končí dnem, který se s ním číslem shoduje (§ 51 zákoníku práce). Uplynutím výpovědní doby pracovní poměr skončí.',
            smlouva: 'Výpovědní doba činí {{vd_mesice}} podle pracovní smlouvy. Začíná dnem doručení této výpovědi (§ 51 zákoníku práce). Uplynutím výpovědní doby pracovní poměr skončí.',
          },
        },
        {
          volba: 'zpusob',
          kdyz: { pole: 'zpusob', je: 'dohoda' },
          uvodVzor: 'U dohody:',
          moznosti: {
            dohoda: 'Pokud s návrhem souhlasíte, potvrďte to prosím podpisem na tomto listu. Podpisem obou stran vzniká písemná dohoda o rozvázání pracovního poměru a pracovní poměr skončí sjednaným dnem.',
          },
        },
      ],
    },
    {
      nadpis: 'Další žádosti',
      vysvetleni: 'Doklady, které se vám po skončení hodí. Vše je nepovinné.',
      odstavce: [
        {
          vice: 'zadosti',
          uvod: 'Současně Vás žádám o:',
          moznosti: {
            prevzeti: 'písemné potvrzení převzetí této písemnosti (§ 337 odst. 1 zákoníku práce)',
            potvrzeni: 'vydání potvrzení o zaměstnání při skončení pracovního poměru (§ 313 zákoníku práce)',
            posudek: 'vydání posudku o pracovní činnosti (§ 314 zákoníku práce)',
          },
        },
        'Děkuji za dosavadní spolupráci.',
      ],
    },
  ],
};
