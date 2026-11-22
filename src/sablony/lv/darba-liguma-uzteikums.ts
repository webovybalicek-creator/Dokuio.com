/** Darbinieka uzteikums – Latvija (Darba likuma 100. p.: rakstveidā vienu mēnesi iepriekš, ja nav noteikts īsāks termiņš). */
import type { Sablona } from '../typy';
import { pridejMesice, naDatum, isoDatum } from '../terminy';
import { DL, KAJENE } from './avoti';

export const darbaUzteikums: Sablona = {
  kod: 'LV-DARBA-UZTEIKUMS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Darbinieka uzteikums', podnadpis: 'darba līguma uzteikums pēc darbinieka iniciatīvas (Darba likuma 100. pants)',
  souborPdf: 'darba-liguma-uzteikums', paticka: KAJENE('LV-DARBA-UZTEIKUMS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'darbinieks', vpravo: 'saņēma (darba devējs, datums)' },
  cislovatClanky: false,
  slovo: { n: 'uzteikums', g: 'uzteikuma', a: 'uzteikumu', l: 'uzteikumā' },
  pripominky: (d) => {
    const iesn = naDatum(d.datum);
    const out = typeof d.pedeja === 'string' && d.pedeja ? [{ nazev: 'Pēdējā darba diena', datum: d.pedeja, popis: 'Pārbaudiet gala norēķinu un kompensāciju par neizmantoto atvaļinājumu.' }] : [];
    if (iesn) out.unshift({ nazev: 'Uzteikuma termiņa beigas (1 mēnesis)', datum: isoDatum(pridejMesice(iesn, 1)), popis: 'Ja uzteikums tiek iesniegts šajā dienā un nav nolīgts īsāks termiņš.' });
    return out;
  },
  coDal: ['Iesniedziet uzteikumu darba devējam un lūdziet uz jūsu eksemplāra apliecināt saņemšanu, vai nosūtiet to ar eParakstu pa e-pastu.', 'Darba devējs paziņo VID par darba attiecību izbeigšanu.', 'Pārbaudiet gala norēķinu: darba samaksu un kompensāciju par neizmantoto ikgadējo atvaļinājumu.'],
  kontrola: [
    `Darbinieks var rakstveidā uzteikt darba līgumu vienu mēnesi iepriekš, ja darba koplīgumā vai darba līgumā nav noteikts īsāks uzteikuma termiņš ([Darba likuma 100. pants](${DL.url})).`,
    'Uzteikums stājas spēkā, kad tas rakstveidā paziņots darba devējam; no šīs dienas skaita uzteikuma termiņu.',
    'Vienojoties ar darba devēju, darba attiecības var izbeigt arī pirms uzteikuma termiņa beigām – tad ierakstiet nolīgto datumu.',
    'Pēc jūsu pieprasījuma pārejošas darbnespējas laiku uzteikuma termiņā neieskaita.',
  ],
  zdroje: [DL],
  kroky: [{ id: 'dati', nazev: 'Darbinieks un darba devējs', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Darbinieks – vārds, uzvārds', sirka: 34, autocomplete: 'name' },
    { id: 'p_ik', typ: 'text', popis: 'Personas kods', sirka: 14, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Adrese', sirka: 46 },
    { id: 'amats', typ: 'text', popis: 'Amats', sirka: 30 },
    { id: 'k_jmeno', typ: 'text', popis: 'Darba devējs', placeholder: 'piem., Paraugs SIA', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Darba devēja adrese', sirka: 46 },
    { id: 'ligums', typ: 'datum', popis: 'Darba līgums noslēgts', sirka: 14, polovina: true },
    { id: 'pedeja', typ: 'datum', popis: 'Pēdējā darba diena', napoveda: 'Vismaz vienu mēnesi pēc uzteikuma iesniegšanas, ja nav nolīgts citādi.', sirka: 14, polovina: true },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Darba līguma uzteikums', odstavce: [
    '**Darbinieks:** {{p_jmeno}}, personas kods {{p_ik}}, {{p_adresa}}, amats {{amats}}',
    '**Darba devējs:** {{k_jmeno}}, {{k_adresa}}',
    'Saskaņā ar Darba likuma 100. panta pirmo daļu uzsaku {{ligums}} noslēgto darba līgumu.',
    'Mana pēdējā darba diena ir {{pedeja}}.',
    'Lūdzu izmaksāt gala norēķinu, tostarp kompensāciju par neizmantoto ikgadējo atvaļinājumu.',
  ] }],
};
