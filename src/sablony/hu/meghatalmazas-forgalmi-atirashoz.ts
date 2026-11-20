/** Meghatalmazás gépjármű forgalmi átírásához / tulajdonosváltozás bejelentéséhez – Magyarország. Ptk. képviselet; teljes bizonyító erejű magánokirat (Pp.) két tanúval. */
import type { Sablona } from '../typy';
import { PTK, PP, KKNYT, KORMANYABLAK, TIP_SZEMELYAZONOSSAG, TIP_TANUK_ATIRAS } from './forrasok';

export const meghatalmazasAtiras: Sablona = {
  kod: 'HU-MEGHATALMAZAS-ATIRAS',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Meghatalmazás forgalmi átíráshoz',
  podnadpis: 'gépjárművel kapcsolatos közlekedési igazgatási ügyek intézésére',
  souborPdf: 'meghatalmazas-forgalmi-atirashoz',
  paticka: 'Ingyenesen készült · HU-MEGHATALMAZAS-ATIRAS v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek, ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'meghatalmazó', vpravo: 'meghatalmazott (elfogadom)' },
  cislovatClanky: false,
  podpisNaZarizeni: false,
  podpisPoznamka: 'A hatóság eredeti, saját kezűleg aláírt meghatalmazást kér két tanúval – nyomtassa ki, és tollal írják alá.',
  slovo: { n: 'meghatalmazás', g: 'meghatalmazás', a: 'meghatalmazást', l: 'meghatalmazásban' },
  coDal: ['Nyomtassa ki, írja alá tollal, és írassa alá két tanúval.', 'A meghatalmazott vigye magával a kormányablakba a saját személyi igazolványát is.'],
  kontrola: [
    TIP_TANUK_ATIRAS,
    'A jármű adatai (rendszám, alvázszám) egyezzenek a forgalmi engedéllyel.',
    'Az ügyintézés előtt nézze meg a [kormányablak.hu](https://kormanyablak.hu/) oldalon, milyen további okmányok kellenek.',
    TIP_SZEMELYAZONOSSAG,
  ],
  zdroje: [PTK, PP, KKNYT, KORMANYABLAK],
  prevzit: {
    kod: 'HU-AUTO',
    nazev: 'a gépjármű adásvételi szerződésből',
    mapuj: (d) => ({ m_jmeno: d.k_jmeno, m_adresa: d.k_adresa, m_szul: d.k_szul, m_anyja: d.k_anyja, znacka: d.znacka, vin: d.vin, spz: d.spz, misto: d.misto }),
  },
  kroky: [
    {
      id: 'szemelyek',
      nazev: 'Ki kit hatalmaz meg',
      pole: [
        { id: 'm_jmeno', typ: 'text', popis: 'Meghatalmazó neve', napoveda: 'Aki az ügyet nem tudja személyesen intézni.', sirka: 34, autocomplete: 'name' },
        { id: 'm_anyja', typ: 'text', popis: 'Anyja neve', sirka: 26, polovina: true },
        { id: 'm_szul', typ: 'text', popis: 'Születési hely, idő', sirka: 26, polovina: true },
        { id: 'm_adresa', typ: 'text', popis: 'Lakcím', sirka: 46 },
        { id: 'z_jmeno', typ: 'text', popis: 'Meghatalmazott neve', sirka: 34 },
        { id: 'z_anyja', typ: 'text', popis: 'Anyja neve', sirka: 26, polovina: true },
        { id: 'z_szul', typ: 'text', popis: 'Születési hely, idő', sirka: 26, polovina: true },
        { id: 'z_adresa', typ: 'text', popis: 'Lakcím', sirka: 46 },
      ],
    },
    {
      id: 'ugy',
      nazev: 'Jármű és ügy',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Gyártmány és típus', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'Alvázszám (VIN)', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Forgalmi rendszám', sirka: 12, polovina: true },
        {
          id: 'ugyek',
          typ: 'vice',
          popis: 'Mire szól a meghatalmazás',
          moznosti: [
            { hodnota: 'atiras', popis: 'Forgalmi átírás (tulajdonjog bejegyzése)' },
            { hodnota: 'bejelentes', popis: 'Tulajdonosváltozás bejelentése' },
            { hodnota: 'okmany', popis: 'Okmányok, rendszámtábla átvétele' },
            { hodnota: 'illetek', popis: 'Illeték és díjak megfizetése' },
          ],
        },
        { id: 't1_jmeno', typ: 'text', popis: '1. tanú neve', sirka: 30, polovina: true },
        { id: 't1_adresa', typ: 'text', popis: '1. tanú lakcíme', sirka: 40, polovina: true },
        { id: 't2_jmeno', typ: 'text', popis: '2. tanú neve', sirka: 30, polovina: true },
        { id: 't2_adresa', typ: 'text', popis: '2. tanú lakcíme', sirka: 40, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Helység', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Kelte', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Meghatalmazás',
      odstavce: [
        'Alulírott **{{m_jmeno}}** (anyja neve: {{m_anyja}}, születési hely, idő: {{m_szul}}, lakcím: {{m_adresa}}) meghatalmazom',
        '**{{z_jmeno}}** (anyja neve: {{z_anyja}}, születési hely, idő: {{z_szul}}, lakcím: {{z_adresa}}) meghatalmazottat,',
        {
          vice: 'ugyek',
          uvod: 'hogy a(z) {{znacka}} típusú, {{spz}} forgalmi rendszámú, {{vin}} alvázszámú gépjárművel kapcsolatban helyettem és nevemben a közlekedési igazgatási hatóság (kormányablak) előtt eljárjon, különösen:',
          moznosti: {
            atiras: 'a forgalmi átírás (tulajdonjog bejegyzése) kérelmezésében,',
            bejelentes: 'a tulajdonosváltozás bejelentésében,',
            okmany: 'az okmányok és rendszámtábla átvételében,',
            illetek: 'az illetékek és díjak megfizetésében.',
          },
        },
        'A meghatalmazott jogosult az ügyben nyilatkozatokat tenni, iratokat aláírni és átvenni.',
      ],
    },
    {
      nadpis: 'Tanúk',
      odstavce: [
        '**1. tanú:** {{t1_jmeno}}, lakcím: {{t1_adresa}}, aláírás: ………………………………',
        '**2. tanú:** {{t2_jmeno}}, lakcím: {{t2_adresa}}, aláírás: ………………………………',
      ],
    },
  ],
};
