/** Proces-verbal de predare-primire a locuinței – România. Indexuri, chei, dotări și deteriorări la mutare sau la eliberare. */
import type { Sablona } from '../typy';
import { COD_CIVIL, SUBSOL } from './surse';

export const procesVerbalLocuinta: Sablona = {
  kod: 'RO-PV-LOCUINTA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Proces-verbal de predare-primire a locuinței', podnadpis: 'starea locuinței și indexurile contoarelor',
  souborPdf: 'proces-verbal-predare-locuinta', paticka: SUBSOL('RO-PV-LOCUINTA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'proprietar', vpravo: 'chiriaș' },
  cislovatClanky: false,
  slovo: { n: 'proces-verbal', g: 'procesului-verbal', a: 'procesul-verbal', l: 'proces-verbal' },
  coDal: ['Fotografiați locuința și contoarele, cu data.', 'Fiecare parte păstrează un exemplar.'],
  kontrola: ['La eliberare starea se compară cu procesul-verbal de la mutare – ce nu e scris, e greu de dovedit ulterior.', 'Uzura normală nu este o pagubă.'],
  zdroje: [COD_CIVIL],
  kroky: [{ id: 'date', nazev: 'Predarea', pole: [
    { id: 'tip', typ: 'volba', popis: 'Predare la', moznosti: [ { hodnota: 'mutare', popis: 'mutare' }, { hodnota: 'eliberare', popis: 'eliberarea locuinței' } ] },
    { id: 'p_jmeno', typ: 'text', popis: 'Proprietar', sirka: 34, autocomplete: 'name' },
    { id: 'k_jmeno', typ: 'text', popis: 'Chiriaș', sirka: 34 },
    { id: 'adresa_locuinta', typ: 'text', popis: 'Adresa locuinței', sirka: 46 },
    { id: 'curent', typ: 'text', popis: 'Contor energie electrică', sirka: 14, polovina: true },
    { id: 'apa', typ: 'text', popis: 'Contor apă', sirka: 14, polovina: true },
    { id: 'gaz', typ: 'text', popis: 'Contor gaz sau repartitoare', sirka: 14, polovina: true },
    { id: 'chei', typ: 'text', popis: 'Chei', placeholder: 'de ex. 2× ușă, 1× cutie poștală', sirka: 30 },
    { id: 'dotari', typ: 'textarea', popis: 'Dotări și stare', placeholder: 'de ex. bucătărie fără deteriorări, mașina de spălat funcționează', sirka: 64 },
    { id: 'deteriorari', typ: 'textarea', popis: 'Deteriorări și observații', sirka: 64 },
    { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Proces-verbal', odstavce: [
    { volba: 'tip', uvodVzor: 'Predarea (bifați o variantă):', moznosti: { mutare: 'Proprietarul {{p_jmeno}} predă chiriașului {{k_jmeno}} locuința de la adresa {{adresa_locuinta}}, la mutare.', eliberare: 'Chiriașul {{k_jmeno}} predă proprietarului {{p_jmeno}} locuința de la adresa {{adresa_locuinta}}, la eliberare.' } },
    'Indexurile contoarelor – energie electrică: {{curent}}, apă: {{apa}}, gaz sau repartitoare: {{gaz}}.',
    'Chei: {{chei}}.',
    'Dotări și stare: {{dotari}}',
    'Deteriorări și observații: {{deteriorari}}',
  ] }],
};
