/** Transportlīdzekļa pieņemšanas-nodošanas akts – Latvija. Precīzs nodošanas laiks – līdz īpašnieka maiņai par īpašnieku uzskata pēdējo reģistrēto. */
import type { Sablona } from '../typy';
import { CL, CSDD, KAJENE } from './avoti';

export const autoAkts: Sablona = {
  kod: 'LV-AKTS-AUTO', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Transportlīdzekļa pieņemšanas-nodošanas akts', podnadpis: 'transportlīdzekļa stāvoklis nodošanas brīdī un precīzs nodošanas laiks',
  souborPdf: 'auto-nodosanas-akts', paticka: KAJENE('LV-AKTS-AUTO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'nodeva', vpravo: 'pieņēma' },
  cislovatClanky: false,
  slovo: { n: 'akts', g: 'akta', a: 'aktu', l: 'aktā' },
  prevzit: {
    kod: 'LV-AUTO',
    nazev: 'transportlīdzekļa pirkuma līgums',
    mapuj: (d) => ({ p_jmeno: d.p_jmeno, p_adresa: d.p_adresa, k_jmeno: d.k_jmeno, k_adresa: d.k_adresa, znacka: d.znacka, vin: d.vin, spz: d.spz, km: d.km, atslegas: d.atslegas, laiks: d.predavane_ora, misto: d.misto, datum: d.predavane_datum }),
  },
  coDal: ['Katra puse patur vienu eksemplāru.', 'Nofotografējiet mērinstrumentu paneli ar nobraukumu un transportlīdzekli no visām pusēm.'],
  kontrola: [
    `Ierakstiet precīzu nodošanas laiku – līdz īpašnieka maiņai reģistrā par īpašnieku uzskata pēdējo reģistrēto, un sodi var pienākt viņam ([CSDD](${CSDD.url})).`,
    'Atzīmējiet visus redzamos bojājumus un to, kas tika nodots (atslēgas, reģistrācijas apliecība, servisa grāmatiņa, ziemas riepas).',
    'VIN aktā jābūt tādam pašam kā līgumā un reģistrācijas apliecībā.',
  ],
  zdroje: [CL, CSDD],
  kroky: [
    { id: 'personas', nazev: 'Kas nodod un kas pieņem', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Nodevējs – vārds, uzvārds', placeholder: 'piem., Anna Kalniņa', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Adrese', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Pieņēmējs – vārds, uzvārds', placeholder: 'piem., Jānis Bērziņš', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Adrese', sirka: 46 },
    ] },
    { id: 'transportlidzeklis', nazev: 'Transportlīdzeklis un stāvoklis', pole: [
      { id: 'znacka', typ: 'text', popis: 'Marka un modelis', placeholder: 'piem., Toyota Corolla', sirka: 30 },
      { id: 'vin', typ: 'vin', popis: 'Identifikācijas numurs (VIN)', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Valsts reģistrācijas numurs', sirka: 12, polovina: true },
      { id: 'km', typ: 'cislo', popis: 'Nobraukums', jednotka: 'km', sirka: 10, polovina: true },
      { id: 'degviela', typ: 'text', popis: 'Degviela tvertnē', placeholder: 'piem., puse tvertnes', sirka: 18, polovina: true },
      { id: 'atslegas', typ: 'cislo', popis: 'Atslēgu skaits', sirka: 6, polovina: true },
      { id: 'dokumenti', typ: 'text', popis: 'Nodotie dokumenti', placeholder: 'piem., reģistrācijas apliecība, servisa grāmatiņa', sirka: 46 },
      { id: 'bojajumi', typ: 'textarea', popis: 'Bojājumi un piezīmes', placeholder: 'piem., skrāpējums uz aizmugurējā bampera', sirka: 56 },
      { id: 'laiks', typ: 'text', popis: 'Nodošanas laiks', placeholder: 'piem., 14:30', sirka: 8, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Nodošanas datums', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Akts', odstavce: [
    '**Nodeva:** {{p_jmeno}}, {{p_adresa}}',
    '**Pieņēma:** {{k_jmeno}}, {{k_adresa}}',
    'Transportlīdzeklis {{znacka}}, identifikācijas numurs (VIN) {{vin}}, valsts reģistrācijas numurs {{spz}}, nodots {{datum}} plkst. **{{laiks}}**.',
    'Nobraukums: {{km}} km. Degviela: {{degviela}}. Atslēgu skaits: {{atslegas}}. Nodotie dokumenti: {{dokumenti}}.',
    'Bojājumi un piezīmes: {{bojajumi}}',
    'No šī brīža pieņēmējs atbild par transportlīdzekļa lietošanu, jo īpaši par ceļu satiksmes noteikumu pārkāpumiem.',
  ] }],
};
