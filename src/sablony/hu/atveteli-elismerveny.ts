/** Átvételi elismervény (pénz átvételéről) – Magyarország. A teljesítő nyugtát követelhet (Ptk.). */
import type { Sablona } from '../typy';
import { osszegBetuvel } from './szamok';
import { PTK, TIP_SZEMELYAZONOSSAG, TIP_KESZPENZ } from './forrasok';

export const atveteliElismerveny: Sablona = {
  kod: 'HU-ELISMERVENY',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Átvételi elismervény',
  podnadpis: 'készpénz átvételének igazolása',
  souborPdf: 'atveteli-elismerveny',
  paticka: 'Ingyenesen készült · HU-ELISMERVENY v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek, ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'átadó', vpravo: 'átvevő' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  slovo: { n: 'elismervény', g: 'elismervény', a: 'elismervényt', l: 'elismervényben' },
  coDal: ['Számolja meg a pénzt aláírás előtt.', 'Mindkét fél tartson meg egy aláírt példányt.'],
  kontrola: [
    'Az összeget számmal és betűvel is tüntesse fel – a betűs alakot automatikusan kiírjuk.',
    'A jogcímet írja le konkrétan (pl. „a Suzuki Vitara, alvázszám … vételára”).',
    'Aki fizet, nyugtát (elismervényt) követelhet attól, aki a pénzt átveszi.',
    TIP_SZEMELYAZONOSSAG,
    TIP_KESZPENZ,
  ],
  zdroje: [PTK],
  kroky: [
    {
      id: 'adatok',
      nazev: 'Ki, mennyit, miért',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Átvevő neve', napoveda: 'Aki a pénzt átveszi és az elismervényt aláírja.', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Átvevő lakcíme', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Átadó neve', sirka: 34 },
        { id: 'k_adresa', typ: 'text', popis: 'Átadó lakcíme', sirka: 46 },
        { id: 'castka', typ: 'castka', popis: 'Összeg (Ft)', sirka: 12, polovina: true },
        { id: 'jogcim', typ: 'text', popis: 'Jogcím', placeholder: 'pl. a Suzuki Vitara vételára, alvázszám …', sirka: 56 },
        { id: 'misto', typ: 'text', popis: 'Helység', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Kelte', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { osszeg_betuvel: (d) => osszegBetuvel(d.castka) },
  clanky: [
    {
      nadpis: 'Elismervény',
      odstavce: [
        'Alulírott **{{p_jmeno}}** (lakcím: {{p_adresa}})',
        'elismerem, hogy a mai napon **{{k_jmeno}}** (lakcím: {{k_adresa}}) részéről készpénzben **{{castka}}**, azaz {{osszeg_betuvel}} összeget átvettem a következő jogcímen: {{jogcim}}.',
        'Az összeget megszámoltam, és a fenti összegben hiánytalanul átvettem.',
      ],
    },
  ],
};
