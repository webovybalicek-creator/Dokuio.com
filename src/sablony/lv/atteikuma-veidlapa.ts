/** Paziņojums par atteikuma tiesību izmantošanu – Latvija. No distances līguma (e-veikals, telefons) patērētājs var atkāpties 14 dienu laikā. */
import type { Sablona } from '../typy';
import { PTAL, ATTEIKUMS, KAJENE } from './avoti';

export const atteikums: Sablona = {
  kod: 'LV-ATTEIKUMS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Paziņojums par atteikuma tiesību izmantošanu', podnadpis: 'atkāpšanās no distances līguma (e-veikals, telefons) 14 dienu laikā',
  souborPdf: 'atteikuma-veidlapa', paticka: KAJENE('LV-ATTEIKUMS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'patērētājs', vpravo: 'saņēma (tirgotājs, pēc izvēles)' },
  cislovatClanky: false,
  slovo: { n: 'paziņojums', g: 'paziņojuma', a: 'paziņojumu', l: 'paziņojumā' },
  coDal: ['Nosūtiet paziņojumu pa e-pastu vai ierakstītā vēstulē pirms 14 dienu beigām un saglabājiet nosūtīšanas pierādījumu.', 'Nosūtiet preci atpakaļ 14 dienu laikā pēc atteikuma.'],
  kontrola: [
    `No līguma, kas noslēgts attālināti (internetā, pa telefonu) vai ārpus tirdzniecības telpām, patērētājs var atkāpties 14 dienu laikā bez iemesla norādīšanas ([Your Europe](${ATTEIKUMS.url})).`,
    'Precēm termiņš sākas dienā, kad preci saņēmāt.',
    'Pietiek, ja paziņojumu nosūtāt pirms termiņa beigām.',
    'Tirgotājs atmaksā visus maksājumus, arī parastās piegādes izmaksas, 14 dienu laikā pēc tam, kad uzzināja par atteikumu.',
    'Preces atpakaļ sūtīšanas tiešās izmaksas parasti sedz patērētājs, ja tirgotājs par to informēja.',
  ],
  zdroje: [ATTEIKUMS, PTAL],
  kroky: [{ id: 'dati', nazev: 'Atteikums', pole: [
    { id: 'k_jmeno', typ: 'text', popis: 'Tirgotājs', placeholder: 'piem., e-veikala nosaukums', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Tirgotāja adrese vai e-pasts', sirka: 46 },
    { id: 'prece', typ: 'textarea', popis: 'Prece vai pakalpojums', placeholder: 'piem., ziemas jaka, izmērs M', sirka: 56 },
    { id: 'pasutijums', typ: 'text', popis: 'Pasūtījuma numurs', sirka: 18, polovina: true },
    { id: 'pasutits', typ: 'datum', popis: 'Pasūtīšanas datums', sirka: 14, polovina: true },
    { id: 'sanemts', typ: 'datum', popis: 'Saņemšanas datums', sirka: 14, polovina: true },
    { id: 'p_jmeno', typ: 'text', popis: 'Jūsu vārds, uzvārds', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Jūsu adrese', sirka: 46 },
    { id: 'iban', typ: 'text', popis: 'IBAN naudas atmaksai (pēc izvēles)', placeholder: 'LV80 …', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
    { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Paziņojums par atteikumu', odstavce: [
    '**Adresāts:** {{k_jmeno}}, {{k_adresa}}',
    'Paziņoju, ka izmantoju atteikuma tiesības un atkāpjos no līguma par šādas preces pirkumu vai pakalpojuma sniegšanu: {{prece}}.',
    'Pasūtījuma numurs: {{pasutijums}}. Pasūtīts {{pasutits}}, saņemts {{sanemts}}.',
    '**Patērētājs:** {{p_jmeno}}, {{p_adresa}}',
    'Lūdzu atmaksāt samaksāto summu uz kontu IBAN {{iban}}.',
  ] }],
};
