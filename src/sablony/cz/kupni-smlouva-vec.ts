/**
 * Kupní smlouva na movitou věc – Česko, prodej mezi soukromými osobami (bazar, kolo, telefon, nábytek…).
 * § 2079 a násl. OZ. Ne na vozidla (vlastní šablony s přepisem) ani nemovitosti.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { castkaSlovy } from '../dokument';
import { OZ, ZAKON_HOTOVOST, NEPLATNE_DOKLADY, TIP_TOTOZNOST, TIP_HOTOVOST } from './zdroje';

export const kupniSmlouvaVec: Sablona = {
  kod: 'CZ-KUPNI-VEC',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Kupní smlouva',
  podnadpis: 'na movitou věc, uzavřená podle § 2079 a násl. zákona č. 89/2012 Sb., občanský zákoník',
  souborPdf: 'kupni-smlouva-vec',
  paticka: 'Vytvořeno zdarma · šablona CZ-KUPNI-VEC v1.0 · vzor k vyplnění, nejde o právní poradenství',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'prodávající', vpravo: 'kupující' },
  coDal: [
    'Vytiskněte smlouvu dvakrát, obě strany podepíší oba výtisky.',
    'Předejte věc s příslušenstvím a doklady (účtenka, záruční list, návod).',
    'Schovejte si smlouvu – je to doklad o koupi i o tom, odkud věc máte.',
  ],
  kontrola: [
    'Věc si před podpisem vyzkoušejte – zapněte, projeďte, prohlédněte.',
    'Výrobní číslo (u telefonu IMEI, u kola číslo rámu) ve smlouvě souhlasí s tím na věci.',
    'Původ věci: nechte si ukázat účtenku nebo doklad o koupi. Velmi nízká cena bývá varování.',
    'Telefon nebo tablet musí být odhlášený z účtu výrobce (iCloud, Google) – jinak ho nepoužijete.',
    TIP_TOTOZNOST,
    TIP_HOTOVOST,
    'Záruka výrobce obvykle přechází na nového majitele s dokladem o koupi – předejte ho.',
  ],
  zdroje: [OZ, ZAKON_HOTOVOST, NEPLATNE_DOKLADY],

  kroky: [
    {
      id: 'strany',
      nazev: 'Prodávající a kupující',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Prodávající – jméno a příjmení', napoveda: 'Ten, kdo věc prodává a je jejím vlastníkem.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Datum narození prodávajícího', napoveda: 'Rodné číslo psát nemusíte.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa prodávajícího', napoveda: 'Adresa trvalého bydliště.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Kupující – jméno a příjmení', napoveda: 'Ten, kdo věc kupuje. Neznáte ho? Nechte prázdné.', placeholder: 'např. Petra Svobodová', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Datum narození kupujícího', napoveda: 'Podle občanského průkazu.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa kupujícího', napoveda: 'Adresa trvalého bydliště.', placeholder: 'např. Masarykova 5, 602 00 Brno', sirka: 46 },
      ],
    },
    {
      id: 'vec',
      nazev: 'Věc',
      popis: 'Popište věc tak, aby ji nešlo zaměnit.',
      pole: [
        { id: 'vec', typ: 'text', popis: 'Co se prodává', napoveda: 'Druh, značka a model.', placeholder: 'např. jízdní kolo Trek Marlin 7, velikost L', sirka: 46 },
        { id: 'vyrobni_cislo', typ: 'text', popis: 'Výrobní číslo (nepovinné)', napoveda: 'U telefonu IMEI (*#06#), u kola číslo rámu (pod šlapáním), u elektroniky štítek na spodku.', placeholder: 'např. WTU123A4567B', sirka: 24 },
        { id: 'prislusenstvi', typ: 'text', popis: 'Příslušenství (nepovinné)', napoveda: 'Nabíječka, krabice, obal, náhradní díly…', placeholder: 'např. nabíječka, původní krabice', sirka: 46 },
        {
          id: 'vady',
          typ: 'volba',
          popis: 'Vady',
          napoveda: 'Co do smlouvy napíšete, to kupující později nemůže reklamovat. Uveďte i drobnosti.',
          moznosti: [
            { hodnota: 'bez', popis: 'Prodávajícímu nejsou známy žádné vady' },
            { hodnota: 's', popis: 'Věc má vady, o kterých prodávající ví' },
          ],
        },
        { id: 'vady_popis', typ: 'textarea', popis: 'Popis vad', placeholder: 'např. škrábanec na rámu, slabší baterie', sirka: 64, zobrazitKdyz: { pole: 'vady', je: 's' } },
      ],
    },
    {
      id: 'cena',
      nazev: 'Cena a předání',
      pole: [
        { id: 'cena', typ: 'castka', popis: 'Kupní cena (Kč)', napoveda: 'Celá dohodnutá cena. Slovy doplníme sami.', placeholder: 'např. 12000', sirka: 14, polovina: true },
        {
          id: 'platba',
          typ: 'volba',
          popis: 'Jak se platí',
          napoveda: 'Vlastníkem se kupující stane, až zaplatí celou cenu.',
          moznosti: [
            { hodnota: 'hotove', popis: 'V hotovosti při podpisu' },
            { hodnota: 'prevod', popis: 'Převodem na účet do určitého data' },
          ],
        },
        { id: 'ucet', typ: 'text', popis: 'Číslo účtu prodávajícího', napoveda: 'Kam má kupující zaplatit.', placeholder: '123456789/0100', sirka: 24, zobrazitKdyz: { pole: 'platba', je: 'prevod' } },
        { id: 'splatnost', typ: 'datum', popis: 'Zaplatit do', napoveda: 'Poslední den platby.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'platba', je: 'prevod' } },
        {
          id: 'predani',
          typ: 'volba',
          popis: 'Kdy se věc předá',
          napoveda: 'Nejjednodušší je hned při podpisu.',
          moznosti: [
            { hodnota: 'hned', popis: 'Při podpisu smlouvy' },
            { hodnota: 'pozdeji', popis: 'Později, do určitého data' },
          ],
        },
        { id: 'predani_do', typ: 'datum', popis: 'Předat do', napoveda: 'Poslední den předání.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'predani', je: 'pozdeji' } },
        { id: 'misto', typ: 'text', popis: 'Místo podpisu (obec)', napoveda: 'Předvyplníme podle adresy prodávajícího.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum podpisu', napoveda: 'Předvyplnili jsme dnešek.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    cena_slovy: (d) => castkaSlovy(d.cena),
  },

  clanky: [
    {
      nadpis: 'Smluvní strany',
      vysvetleni: 'Kdo prodává a kdo kupuje.',
      odstavce: [
        '**Prodávající:** {{p_jmeno}}, datum narození {{p_narozeni}}, trvale bytem {{p_adresa}} (dále jen „prodávající“)',
        '**Kupující:** {{k_jmeno}}, datum narození {{k_narozeni}}, trvale bytem {{k_adresa}} (dále jen „kupující“)',
      ],
    },
    {
      nadpis: 'Předmět koupě',
      vysvetleni: 'Co přesně se prodává a v jakém stavu.',
      odstavce: [
        'Prodávající prodává kupujícímu tuto věc: {{vec}}, výrobní číslo {{vyrobni_cislo}}, včetně příslušenství: {{prislusenstvi}} (dále jen „věc“).',
        'Prodávající prohlašuje, že je výlučným vlastníkem věci a že na ní nevázne žádné právo třetí osoby.',
        {
          volba: 'vady',
          uvodVzor: 'Vady věci (zaškrtněte jednu možnost):',
          moznosti: {
            bez: 'Prodávajícímu nejsou známy žádné vady věci.',
            s: 'Prodávající upozornil kupujícího na tyto vady: {{vady_popis}}',
          },
        },
        'Kupující prohlašuje, že si věc prohlédl, vyzkoušel a v tomto stavu ji kupuje.',
      ],
    },
    {
      nadpis: 'Kupní cena',
      vysvetleni: 'Kolik a jak se platí. Vlastnictví přechází zaplacením.',
      odstavce: [
        'Kupní cena činí {{cena}} (slovy: {{cena_slovy}}).',
        {
          volba: 'platba',
          uvodVzor: 'Platba (zaškrtněte jednu možnost):',
          moznosti: {
            hotove: 'Kupující zaplatil kupní cenu v hotovosti při podpisu této smlouvy a prodávající svým podpisem potvrzuje její převzetí.',
            prevod: 'Kupující zaplatí kupní cenu převodem na účet prodávajícího č. {{ucet}} nejpozději do {{splatnost}}.',
          },
        },
        'Vlastnické právo k věci přechází na kupujícího úplným zaplacením kupní ceny.',
      ],
    },
    {
      nadpis: 'Předání a závěrečná ustanovení',
      vysvetleni: 'Kdy kupující věc dostane a běžné formální body.',
      odstavce: [
        {
          volba: 'predani',
          uvodVzor: 'Předání (zaškrtněte jednu možnost):',
          moznosti: {
            hned: 'Prodávající předal věc kupujícímu při podpisu této smlouvy.',
            pozdeji: 'Prodávající předá věc kupujícímu nejpozději do {{predani_do}}.',
          },
        },
        'Práva a povinnosti neupravené touto smlouvou se řídí zákonem č. 89/2012 Sb., občanský zákoník.',
        'Smlouva je vyhotovena ve dvou stejnopisech, každá strana obdrží jeden. Nabývá účinnosti podpisem obou stran.',
      ],
    },
  ],
};
