/**
 * Výzva na zaplatenie (predžalobná výzva) – Slovensko. § 517 OZ (omeškanie dlžníka, úroky z omeškania
 * vo výške podľa vykonávacieho predpisu). Pozn.: OZ zrušený zákonom č. 260/2026 Z. z. s účinnosťou neskôr – sledovať.
 */
import type { Sablona } from '../typy';
import { sumaSlovom } from './cisla';
import { naDatum } from '../terminy';
import { OZ_SK } from './zdroje';

export const vyzvaNaZaplatenie: Sablona = {
  kod: 'SK-VYZVA-NA-ZAPLATENIE',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Výzva na zaplatenie',
  podnadpis: 'predžalobná výzva podľa zákona č. 40/1964 Zb., Občiansky zákonník',
  souborPdf: 'vyzva-na-zaplatenie',
  paticka: 'Vytvorené zadarmo · šablóna SK-VYZVA-NA-ZAPLATENIE v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedá odosielateľ',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'veriteľ', vpravo: 'prevzal dlžník (pri osobnom odovzdaní)' },
  slovo: { n: 'výzva', g: 'výzvy', a: 'výzvu', l: 'výzve' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => (naDatum(d.zaplatit_do) ? [{ nazev: 'Koniec lehoty z výzvy na zaplatenie', datum: String(d.zaplatit_do), popis: 'Skontrolujte platbu. Ak neprišla, môžete podať žalobu alebo návrh na platobný rozkaz.' }] : []),
  coDal: [
    'Podpíšte výzvu a pošlite ju doporučene s doručenkou. Podací lístok si odložte – dokazuje odoslanie.',
    'Pošlite ju na adresu trvalého pobytu dlžníka, firme do sídla podľa obchodného registra.',
    'Ak dlžník nezaplatí, môžete podať žalobu alebo návrh na vydanie platobného rozkazu na súde.',
  ],
  kontrola: [
    'Ak dlžník nezaplatí včas, je v omeškaní a veriteľ môže požadovať úroky z omeškania vo výške podľa vykonávacieho predpisu ([§ 517 OZ](https://static.slov-lex.sk/static/SK/ZZ/1964/40/)).',
    'Presne uveďte, čo a z akého dôvodu dlžník dlhuje (faktúra, zmluva, dátum splatnosti) a koľko.',
    'Lehota na zaplatenie: primeraná, obvykle 7–15 dní od doručenia.',
    'Pošlite výzvu tak, aby ste vedeli preukázať doručenie (doporučene s doručenkou).',
    'Nevyhrážajte sa ničím iným než súdom – nátlak alebo zverejňovanie dlžníka môže byť protiprávne.',
    'Občiansky zákonník bol zrušený zákonom č. 260/2026 Z. z. a nahradí ho nový – pred použitím po jeho účinnosti si overte aktuálne znenie.',
  ],
  zdroje: [OZ_SK],

  kroky: [
    {
      id: 'strany',
      nazev: 'Veriteľ a dlžník',
      pole: [
        { id: 'k_jmeno', typ: 'text', popis: 'Veriteľ – meno a priezvisko alebo firma', placeholder: 'napr. Ján Kováč', sirka: 34, autocomplete: 'name' },
        { id: 'k_ico', typ: 'text', popis: 'IČO alebo dátum narodenia veriteľa', placeholder: 'napr. 12345678', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa veriteľa', placeholder: 'napr. Hlavná 12, 811 01 Bratislava', sirka: 46 },
        { id: 'k_kontakt', typ: 'text', popis: 'Telefón alebo e-mail (nepovinné)', sirka: 30 },
        { id: 'p_jmeno', typ: 'text', popis: 'Dlžník – meno a priezvisko alebo firma', placeholder: 'napr. Peter Horváth', sirka: 34 },
        { id: 'p_ico', typ: 'text', popis: 'IČO alebo dátum narodenia dlžníka', placeholder: 'napr. 87654321', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa dlžníka', napoveda: 'Trvalý pobyt, u firmy sídlo z obchodného registra.', placeholder: 'napr. Mlynská 5, 040 01 Košice', sirka: 46 },
      ],
    },
    {
      id: 'dlh',
      nazev: 'Dlh',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Dlžná suma (€)', napoveda: 'Istina bez úrokov. Slovom doplníme sami.', placeholder: 'napr. 1200', sirka: 14, polovina: true },
        { id: 'splatnost', typ: 'datum', popis: 'Pôvodná splatnosť', sirka: 14, polovina: true },
        {
          id: 'duvod',
          typ: 'volba',
          popis: 'Z čoho dlh vznikol',
          moznosti: [
            { hodnota: 'faktura', popis: 'Nezaplatená faktúra' },
            { hodnota: 'pozicka', popis: 'Nevrátená pôžička' },
            { hodnota: 'kupna', popis: 'Nezaplatená kúpna cena' },
            { hodnota: 'ine', popis: 'Iný dôvod' },
          ],
        },
        { id: 'duvod_popis', typ: 'text', popis: 'Spresnenie', placeholder: 'napr. faktúra č. 2026015 zo dňa 1. 10. 2026', sirka: 56 },
        {
          id: 'urok',
          typ: 'volba',
          popis: 'Požadovať úroky z omeškania?',
          moznosti: [
            { hodnota: 'ano', popis: 'Áno, zákonné úroky z omeškania' },
            { hodnota: 'nie', popis: 'Nie, len dlžnú sumu' },
          ],
        },
      ],
    },
    {
      id: 'platba',
      nazev: 'Lehota a platba',
      pole: [
        { id: 'zaplatit_do', typ: 'datum', popis: 'Zaplatiť najneskôr do', napoveda: 'Obvykle 7–15 dní.', sirka: 14, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'IBAN', placeholder: 'SK12 3456 7890 1234 5678 9012', sirka: 30 },
        { id: 'vs', typ: 'text', popis: 'Variabilný symbol (nepovinné)', sirka: 12, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Miesto', placeholder: 'napr. Bratislava', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: { castka_slovy: (d) => sumaSlovom(d.castka) },

  clanky: [
    {
      nadpis: 'Odosielateľ a adresát',
      odstavce: [
        '**Veriteľ:** {{k_jmeno}}, IČO / dátum narodenia {{k_ico}}, {{k_adresa}}, kontakt {{k_kontakt}}',
        '**Dlžník:** {{p_jmeno}}, IČO / dátum narodenia {{p_ico}}, {{p_adresa}}',
      ],
    },
    {
      nadpis: 'Výzva na zaplatenie',
      odstavce: [
        'Vážená pani, vážený pán,',
        {
          volba: 'duvod',
          uvodVzor: 'dôvod dlhu (zaškrtnite jednu možnosť):',
          moznosti: {
            faktura: 'evidujeme voči Vám neuhradenú faktúru – {{duvod_popis}}.',
            pozicka: 'doteraz ste nevrátili pôžičku – {{duvod_popis}}.',
            kupna: 'doteraz ste nezaplatili kúpnu cenu – {{duvod_popis}}.',
            ine: 'evidujeme voči Vám tento dlh: {{duvod_popis}}.',
          },
        },
        'Dlžná suma je {{castka}} (slovom: {{castka_slovy}}) a bola splatná dňa {{splatnost}}. Do dnešného dňa nebola zaplatená.',
        'Týmto Vás vyzývam, aby ste uvedenú sumu zaplatili najneskôr do {{zaplatit_do}} na účet IBAN {{ucet}}, variabilný symbol {{vs}}.',
        {
          volba: 'urok',
          uvodVzor: 'Úroky z omeškania (zaškrtnite jednu možnosť):',
          moznosti: {
            ano: 'Zároveň požadujem zaplatenie úrokov z omeškania odo dňa nasledujúceho po dni splatnosti až do zaplatenia vo výške podľa § 517 ods. 2 Občianskeho zákonníka a jeho vykonávacieho predpisu.',
            nie: 'Ak dlžnú sumu zaplatíte v stanovenej lehote, úroky z omeškania nebudem požadovať.',
          },
        },
        'Ak dlžnú sumu v stanovenej lehote nezaplatíte, budem svoj nárok uplatňovať na súde bez ďalšieho upozornenia. Vystavujete sa tak aj povinnosti nahradiť trovy konania.',
        'Ak ste medzitým zaplatili, považujte túto výzvu za bezpredmetnú.',
      ],
    },
  ],
};
