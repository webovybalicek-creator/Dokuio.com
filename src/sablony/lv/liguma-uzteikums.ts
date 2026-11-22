/** Līguma uzteikums – Latvija. Pakalpojuma, abonementa vai dalības līguma izbeigšana saskaņā ar līguma noteikumiem. */
import type { Sablona } from '../typy';
import { CL, KAJENE } from './avoti';

export const ligumaUzteikums: Sablona = {
  kod: 'LV-UZTEIKUMS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Līguma uzteikums', podnadpis: 'pakalpojuma, abonementa vai dalības līguma izbeigšana',
  souborPdf: 'liguma-uzteikums', paticka: KAJENE('LV-UZTEIKUMS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'klients', vpravo: '' },
  cislovatClanky: false,
  slovo: { n: 'uzteikums', g: 'uzteikuma', a: 'uzteikumu', l: 'uzteikumā' },
  pripominky: (d) => (typeof d.beigas === 'string' && d.beigas ? [{ nazev: 'Līguma izbeigšanās', datum: d.beigas, popis: 'Pārbaudiet, vai pēc šī datuma vairs neizraksta rēķinus.' }] : []),
  coDal: ['Nosūtiet uzteikumu pa e-pastu (vēlams ar eParakstu), pašapkalpošanās portālā vai ierakstītā vēstulē.', 'Lūdziet apstiprināt uzteikumu un līguma izbeigšanās datumu.', 'Atceliet automātiskos maksājumus tikai pēc pēdējā rēķina apmaksas.'],
  kontrola: [
    'Pārbaudiet līgumā vai vispārīgajos noteikumos uzteikuma termiņu un iespējamo minimālo līguma termiņu.',
    'Termiņa līguma pirmstermiņa izbeigšana var radīt līgumsodu vai atlaides atmaksu – izlasiet noteikumus.',
    'Saglabājiet pierādījumu, ka un kad uzteikums tika nogādāts.',
    'Ja līgums noslēgts internetā vai ārpus tirdzniecības telpām pirms mazāk nekā 14 dienām, labāk izmantojiet atteikuma tiesības.',
  ],
  zdroje: [CL],
  kroky: [{ id: 'dati', nazev: 'Klients un līgums', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Vārds, uzvārds', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Adrese', sirka: 46 },
    { id: 'p_kontakts', typ: 'text', popis: 'E-pasts vai tālrunis', sirka: 30 },
    { id: 'k_jmeno', typ: 'text', popis: 'Pakalpojuma sniedzējs', placeholder: 'piem., Sporta klubs SIA', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Pakalpojuma sniedzēja adrese', sirka: 46 },
    { id: 'ligums', typ: 'text', popis: 'Līgums / klienta numurs', placeholder: 'piem., dalības līgums Nr. 12345 no 01.02.2025.', sirka: 46 },
    { id: 'beigas', typ: 'datum', popis: 'Līgums izbeidzas', napoveda: 'Ņemiet vērā līgumā noteikto uzteikuma termiņu.', sirka: 14, polovina: true },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Līguma uzteikums', odstavce: [
    '**Sūtītājs:** {{p_jmeno}}, {{p_adresa}}, {{p_kontakts}}',
    '**Adresāts:** {{k_jmeno}}, {{k_adresa}}',
    'Uzsaku līgumu: {{ligums}}.',
    'Lūdzu izbeigt līgumu {{beigas}} vai, ja līgumā noteiktais uzteikuma termiņš beidzas vēlāk, šī termiņa beigās.',
    'Lūdzu rakstveidā apstiprināt uzteikuma saņemšanu un līguma izbeigšanās datumu. Pēc izbeigšanās dienas lūdzu man vairs neizrakstīt rēķinus.',
  ] }],
};
