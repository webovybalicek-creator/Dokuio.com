/** Dzīvojamās telpas pieņemšanas-nodošanas akts – Latvija. Skaitītāju rādījumi, atslēgas, stāvoklis. */
import type { Sablona } from '../typy';
import { DZTIL, KAJENE } from './avoti';

export const dzivoklaAkts: Sablona = {
  kod: 'LV-AKTS-DZIVOKLIS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Dzīvojamās telpas pieņemšanas-nodošanas akts', podnadpis: 'dzīvojamās telpas stāvoklis, skaitītāji un atslēgas',
  souborPdf: 'dzivokla-nodosanas-akts', paticka: KAJENE('LV-AKTS-DZIVOKLIS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'izīrētājs', vpravo: 'īrnieks' },
  cislovatClanky: false,
  slovo: { n: 'akts', g: 'akta', a: 'aktu', l: 'aktā' },
  prevzit: { kod: 'LV-IRE', nazev: 'dzīvojamās telpas īres līgums', mapuj: (d) => ({ p_jmeno: d.p_jmeno, k_jmeno: d.k_jmeno, byt: d.byt, misto: d.misto }) },
  coDal: ['Katra puse patur vienu eksemplāru.', 'Nofotografējiet skaitītājus un katru telpu.', 'Paziņojiet skaitītāju rādījumus pakalpojumu sniedzējiem vai apsaimniekotājam.'],
  kontrola: [
    'Nodošanas dienā ierakstiet visu skaitītāju (elektrība, ūdens, gāze, siltums) rādījumus.',
    'Atzīmējiet esošos bojājumus un iekārtojumu – tas palīdz īres beigās, atdodot drošības naudu.',
    'Parasto nolietojumu īrnieks nesedz; par bojājumiem, kas radušies nolaidības dēļ, atbild īrnieks.',
  ],
  zdroje: [DZTIL],
  kroky: [
    { id: 'puses', nazev: 'Puses un dzīvojamā telpa', pole: [
      { id: 'veids', typ: 'volba', popis: 'Kad akts tiek sastādīts', moznosti: [ { hodnota: 'sakums', popis: 'īres sākumā (nodošana īrniekam)' }, { hodnota: 'beigas', popis: 'īres beigās (atdošana izīrētājam)' } ] },
      { id: 'p_jmeno', typ: 'text', popis: 'Izīrētājs – vārds, uzvārds', sirka: 34 },
      { id: 'k_jmeno', typ: 'text', popis: 'Īrnieks – vārds, uzvārds', sirka: 34 },
      { id: 'byt', typ: 'text', popis: 'Dzīvojamās telpas adrese', sirka: 46 },
    ] },
    { id: 'stavoklis', nazev: 'Skaitītāji, atslēgas, stāvoklis', pole: [
      { id: 'elektriba', typ: 'text', popis: 'Elektrības skaitītājs', placeholder: 'piem., 012345 kWh', sirka: 18, polovina: true },
      { id: 'udens', typ: 'text', popis: 'Ūdens skaitītāji', placeholder: 'piem., aukstais 234,5 m³, karstais 98,1 m³', sirka: 30 },
      { id: 'gaze', typ: 'text', popis: 'Gāzes vai siltuma skaitītājs', sirka: 18, polovina: true },
      { id: 'atslegas', typ: 'text', popis: 'Atslēgas', placeholder: 'piem., 2 ārdurvju atslēgas, 1 pastkastītes atslēga', sirka: 40 },
      { id: 'iekartojums', typ: 'textarea', popis: 'Iekārtojums', placeholder: 'piem., ledusskapis, plīts, veļas mašīna, dīvāns', sirka: 56 },
      { id: 'bojajumi', typ: 'textarea', popis: 'Bojājumi un piezīmes', placeholder: 'piem., traips uz viesistabas sienas', sirka: 56 },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Akts', odstavce: [
    '**Izīrētājs:** {{p_jmeno}} · **Īrnieks:** {{k_jmeno}}',
    { volba: 'veids', uvodVzor: 'Akts tiek sastādīts (atzīmējiet vienu variantu):', moznosti: { sakums: 'Izīrētājs nodod un īrnieks pieņem dzīvojamo telpu adresē {{byt}}.', beigas: 'Īrnieks atdod un izīrētājs pieņem dzīvojamo telpu adresē {{byt}}.' } },
    'Skaitītāju rādījumi – elektrība: {{elektriba}}, ūdens: {{udens}}, gāze/siltums: {{gaze}}.',
    'Nodotās atslēgas: {{atslegas}}.',
    'Iekārtojums: {{iekartojums}}',
    'Bojājumi un piezīmes: {{bojajumi}}',
    'Puses apliecina, ka dzīvojamās telpas stāvoklis atbilst iepriekš aprakstītajam.',
  ] }],
};
