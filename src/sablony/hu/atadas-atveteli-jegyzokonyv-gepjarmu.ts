/** Gépjármű átadás-átvételi jegyzőkönyv – Magyarország. Állapot, kulcsok, okmányok, az átadás időpontja. Kitölthető az adásvételi szerződésből. */
import type { Sablona } from '../typy';
import { PTK, TIP_SZEMELYAZONOSSAG } from './forrasok';

export const jegyzokonyvGepjarmu: Sablona = {
  kod: 'HU-AUTO-JEGYZOKONYV',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Gépjármű átadás-átvételi jegyzőkönyv',
  podnadpis: 'a gépjármű birtokbaadásának és átvételének igazolása',
  souborPdf: 'atadas-atveteli-jegyzokonyv-gepjarmu',
  paticka: 'Ingyenesen készült · HU-AUTO-JEGYZOKONYV v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek, ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'atadas_datum',
  podpisy: { vlevo: 'átadó', vpravo: 'átvevő' },
  cislovatClanky: false,
  slovo: { n: 'jegyzőkönyv', g: 'jegyzőkönyv', a: 'jegyzőkönyvet', l: 'jegyzőkönyvben' },
  coDal: ['Nyomtassa ki két példányban, és mindketten írják alá.', 'Fényképezze le az autót és a kilométerórát, a képeket őrizze meg.'],
  kontrola: [
    'A kilométeróra állását és az üzemanyagszintet együtt olvassák le.',
    'A sérüléseket konkrétan írja le (hely, mérték), és fényképezze le dátummal.',
    'Az átadás pontos időpontja a traffipaxos büntetéseknél és baleseteknél számít – ettől a vevő felel az autóért.',
    TIP_SZEMELYAZONOSSAG,
  ],
  zdroje: [PTK],
  prevzit: {
    kod: 'HU-AUTO',
    nazev: 'a gépjármű adásvételi szerződésből',
    mapuj: (d) => ({
      p_jmeno: d.p_jmeno, p_adresa: d.p_adresa, k_jmeno: d.k_jmeno, k_adresa: d.k_adresa,
      znacka: d.znacka, vin: d.vin, spz: d.spz, km: d.km, klice: d.klice,
      szerzodes_datum: d.datum_podpisu, atadas_datum: d.birtok_datum ?? d.datum_podpisu, atadas_ido: d.birtok_ido, misto: d.misto,
    }),
  },
  kroky: [
    {
      id: 'felek',
      nazev: 'Felek és jármű',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Átadó neve', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Átadó lakcíme', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Átvevő neve', sirka: 34 },
        { id: 'k_adresa', typ: 'text', popis: 'Átvevő lakcíme', sirka: 46 },
        { id: 'znacka', typ: 'text', popis: 'Gyártmány és típus', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'Alvázszám (VIN)', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Forgalmi rendszám', sirka: 12, polovina: true },
        { id: 'szerzodes_datum', typ: 'datum', popis: 'Az adásvételi szerződés kelte (ha van)', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'allapot',
      nazev: 'Állapot és tartozékok',
      pole: [
        { id: 'km', typ: 'cislo', popis: 'Kilométeróra állása', jednotka: 'km', sirka: 12, polovina: true },
        { id: 'klice', typ: 'cislo', popis: 'Kulcsok száma', sirka: 4, polovina: true },
        {
          id: 'uzemanyag',
          typ: 'volba',
          popis: 'Üzemanyagszint',
          moznosti: [
            { hodnota: 'tartalek', popis: 'Tartalék' },
            { hodnota: 'negyed', popis: '1/4' },
            { hodnota: 'fel', popis: '1/2' },
            { hodnota: 'haromnegyed', popis: '3/4' },
            { hodnota: 'tele', popis: 'Tele' },
          ],
        },
        {
          id: 'okmanyok',
          typ: 'vice',
          popis: 'Átadott okmányok és tartozékok',
          moznosti: [
            { hodnota: 'forgalmi', popis: 'Forgalmi engedély' },
            { hodnota: 'torzskonyv', popis: 'Törzskönyv' },
            { hodnota: 'szerviz', popis: 'Szervizkönyv' },
            { hodnota: 'gumi', popis: 'Téli/nyári gumigarnitúra' },
            { hodnota: 'kotelezo', popis: 'Elsősegélycsomag, elakadásjelző háromszög' },
          ],
        },
        { id: 'serules', typ: 'textarea', popis: 'Sérülések, megjegyzések', placeholder: 'pl. karc a jobb első ajtón', sirka: 64 },
        { id: 'misto', typ: 'text', popis: 'Helység', sirka: 18, polovina: true },
        { id: 'atadas_datum', typ: 'datum', popis: 'Az átadás napja', sirka: 14, polovina: true, vychozi: 'dnes' },
        { id: 'atadas_ido', typ: 'text', popis: 'Az átadás időpontja (óra, perc)', placeholder: 'pl. 14:30', sirka: 8, polovina: true },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Felek',
      odstavce: ['**Átadó:** {{p_jmeno}}, lakcím: {{p_adresa}}', '**Átvevő:** {{k_jmeno}}, lakcím: {{k_adresa}}'],
    },
    {
      nadpis: 'A gépjármű',
      odstavce: [
        '{{znacka}}, alvázszám: {{vin}}, forgalmi rendszám: {{spz}}. Az átadás a {{szerzodes_datum}} napján kelt adásvételi szerződés alapján történik.',
        'A kilométeróra állása: {{km}}. Átadott kulcsok száma: {{klice}}.',
        {
          volba: 'uzemanyag',
          uvod: 'Üzemanyagszint:',
          moznosti: { tartalek: 'tartalék', negyed: '1/4', fel: '1/2', haromnegyed: '3/4', tele: 'tele' },
        },
        {
          vice: 'okmanyok',
          uvod: 'Az átadó a gépjárművel együtt átadja:',
          moznosti: {
            forgalmi: 'forgalmi engedély',
            torzskonyv: 'törzskönyv',
            szerviz: 'szervizkönyv',
            gumi: 'téli/nyári gumigarnitúra',
            kotelezo: 'elsősegélycsomag, elakadásjelző háromszög',
          },
        },
        'Sérülések, megjegyzések: {{serules}}',
      ],
    },
    {
      nadpis: 'Átadás',
      odstavce: [
        'Az átvevő a gépjárművet {{atadas_datum}} napján {{atadas_ido}} órakor a fenti állapotban átvette. Ettől az időponttól a gépjárművel kapcsolatos felelősség és kárveszély az átvevőt terheli.',
      ],
    },
  ],
};
