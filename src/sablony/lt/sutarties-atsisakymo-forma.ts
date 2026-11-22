/** Pranešimas apie sutarties atsisakymą – Lietuva. Iš nuotolinės sutarties (e. parduotuvė, telefonu) vartotojas gali atsisakyti per 14 dienų. */
import type { Sablona } from '../typy';
import { CK, ATSISAKYMAS, PORASTE } from './saltiniai';

export const atsisakymas: Sablona = {
  kod: 'LT-ATSISAKYMAS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Pranešimas apie sutarties atsisakymą', podnadpis: 'nuotolinės sutarties (e. parduotuvė, telefonu) atsisakymas per 14 dienų',
  souborPdf: 'sutarties-atsisakymo-forma', paticka: PORASTE('LT-ATSISAKYMAS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'vartotojas', vpravo: 'gavo (prekiautojas, neprivaloma)' },
  cislovatClanky: false,
  slovo: { n: 'pranešimas', g: 'pranešimo', a: 'pranešimą', l: 'pranešime' },
  coDal: ['Siųskite pranešimą el. paštu arba registruotu laišku iki 14 dienų pabaigos ir išsaugokite išsiuntimo įrodymą.', 'Grąžinkite prekę per 14 dienų nuo atsisakymo.'],
  kontrola: [
    `Iš sutarties, sudarytos nuotoliniu būdu (internetu, telefonu) arba ne prekybos patalpose, vartotojas gali atsisakyti per 14 dienų nenurodydamas priežasties ([Your Europe](${ATSISAKYMAS.url})).`,
    'Prekių atveju terminas pradedamas skaičiuoti nuo dienos, kai prekę gavote.',
    'Pakanka pranešimą išsiųsti iki termino pabaigos.',
    'Prekiautojas grąžina visus mokėjimus, įskaitant įprasto pristatymo išlaidas, per 14 dienų nuo sužinojimo apie atsisakymą.',
    'Tiesiogines prekės grąžinimo išlaidas paprastai apmoka vartotojas, jei prekiautojas apie tai informavo.',
  ],
  zdroje: [ATSISAKYMAS, CK],
  kroky: [{ id: 'duomenys', nazev: 'Atsisakymas', pole: [
    { id: 'k_jmeno', typ: 'text', popis: 'Prekiautojas', placeholder: 'pvz., e. parduotuvės pavadinimas', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Prekiautojo adresas arba el. paštas', sirka: 46 },
    { id: 'prece', typ: 'textarea', popis: 'Prekė arba paslauga', placeholder: 'pvz., žieminė striukė, dydis M', sirka: 56 },
    { id: 'pasutijums', typ: 'text', popis: 'Užsakymo numeris', sirka: 18, polovina: true },
    { id: 'pasutits', typ: 'datum', popis: 'Užsakymo data', sirka: 14, polovina: true },
    { id: 'sanemts', typ: 'datum', popis: 'Gavimo data', sirka: 14, polovina: true },
    { id: 'p_jmeno', typ: 'text', popis: 'Jūsų vardas, pavardė', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Jūsų adresas', sirka: 46 },
    { id: 'iban', typ: 'text', popis: 'IBAN pinigams grąžinti (neprivaloma)', placeholder: 'LT12 …', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Pranešimas apie sutarties atsisakymą', odstavce: [
    '**Adresatas:** {{k_jmeno}}, {{k_adresa}}',
    'Pranešu, kad atsisakau sutarties dėl šios prekės pirkimo arba paslaugos teikimo: {{prece}}.',
    'Užsakymo numeris: {{pasutijums}}. Užsakyta {{pasutits}}, gauta {{sanemts}}.',
    '**Vartotojas:** {{p_jmeno}}, {{p_adresa}}',
    'Prašau grąžinti sumokėtą sumą į sąskaitą IBAN {{iban}}.',
  ] }],
};
