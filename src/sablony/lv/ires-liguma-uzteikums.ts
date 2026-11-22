/** Īrnieka paziņojums par atkāpšanos no dzīvojamās telpas īres līguma – Latvija (Dzīvojamo telpu īres likuma 20., 27. p.: vismaz mēnesi iepriekš). */
import type { Sablona } from '../typy';
import { naDatum, pridejMesice, isoDatum } from '../terminy';
import { DZTIL, KAJENE } from './avoti';

export const iresUzteikums: Sablona = {
  kod: 'LV-IRE-UZTEIKUMS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Īres līguma uzteikums', podnadpis: 'īrnieka paziņojums par atkāpšanos no dzīvojamās telpas īres līguma',
  souborPdf: 'ires-liguma-uzteikums', paticka: KAJENE('LV-IRE-UZTEIKUMS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'īrnieks', vpravo: 'saņēma (izīrētājs, pēc izvēles)' },
  cislovatClanky: false,
  slovo: { n: 'uzteikums', g: 'uzteikuma', a: 'uzteikumu', l: 'uzteikumā' },
  pripominky: (d) => {
    const od = naDatum(d.datum);
    return od ? [{ nazev: 'Agrākā līguma izbeigšanās diena (1 mēnesis)', datum: isoDatum(pridejMesice(od, 1)), popis: 'Ja izīrētājs uzteikumu saņem šajā dienā; pārbaudiet, vai līgumā nav noteikts garāks termiņš.' }] : [];
  },
  coDal: ['Nosūtiet uzteikumu rakstveidā – ierakstītā vēstulē vai pa e-pastu ar eParakstu – un saglabājiet nosūtīšanas pierādījumu.', 'Vienojieties par atslēgu nodošanas dienu un sastādiet pieņemšanas-nodošanas aktu.', 'Paziņojiet skaitītāju rādījumus un izbeidziet savā vārdā noslēgtos līgumus (elektrība, internets).'],
  kontrola: [
    `Īrnieks var vienpusēji atkāpties no īres līguma, rakstveidā brīdinot izīrētāju vismaz vienu mēnesi iepriekš ([Dzīvojamo telpu īres likuma 20. un 27. pants](${DZTIL.url})).`,
    'Ja līguma termiņš ir ilgāks par 10 gadiem, līgumā var būt noteikts garāks uzteikuma termiņš – pārbaudiet savu līgumu.',
    'Drošības naudu automātiski neieskaita pēdējā mēneša īres maksā – vienojieties par to rakstveidā.',
    'Ātrāks un drošāks risinājums bieži ir vienošanās par īres līguma izbeigšanu.',
  ],
  zdroje: [DZTIL],
  kroky: [{ id: 'dati', nazev: 'Uzteikums', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Izīrētājs – vārds, uzvārds', sirka: 34 },
    { id: 'p_adresa', typ: 'text', popis: 'Izīrētāja adrese', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Īrnieks – vārds, uzvārds', sirka: 34, autocomplete: 'name' },
    { id: 'byt', typ: 'text', popis: 'Dzīvojamās telpas adrese', sirka: 46 },
    { id: 'liguma_datums', typ: 'datum', popis: 'Īres līguma datums', sirka: 14, polovina: true },
    { id: 'beigas', typ: 'datum', popis: 'Līgums izbeidzas', napoveda: 'Vismaz vienu mēnesi pēc tam, kad izīrētājs saņem uzteikumu.', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'IBAN drošības naudas atmaksai', placeholder: 'LV80 BANK 0000 4351 9500 1', sirka: 30 },
    { id: 'k_adresa', typ: 'text', popis: 'Īrnieka kontaktadrese', sirka: 46 },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
    { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Paziņojums par atkāpšanos no īres līguma', odstavce: [
    '**Adresāts:** {{p_jmeno}}, {{p_adresa}}',
    'Saskaņā ar Dzīvojamo telpu īres likuma 20. un 27. pantu paziņoju, ka atkāpjos no {{liguma_datums}} noslēgtā dzīvojamās telpas īres līguma par dzīvojamo telpu adresē {{byt}}.',
    'Līgums izbeidzas {{beigas}}. Līdz šai dienai atbrīvošu dzīvojamo telpu, nodošu atslēgas un ierosinu sastādīt pieņemšanas-nodošanas aktu.',
    'Lūdzu atmaksāt drošības naudu, ieturot pamatotus prasījumus, uz kontu IBAN {{iban}}.',
    '**Īrnieks:** {{k_jmeno}}, {{k_adresa}}',
  ] }],
};
