/** Declarație pe propria răspundere – România. Declarația în fals în fața unei autorități poate constitui infracțiune (Codul penal, falsul în declarații). */
import type { Sablona } from '../typy';
import { COD_CIVIL, SUBSOL } from './surse';

export const declaratie: Sablona = {
  kod: 'RO-DECLARATIE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Declarație pe propria răspundere', podnadpis: 'cunoscând prevederile Codului penal privind falsul în declarații',
  souborPdf: 'declaratie-pe-proprie-raspundere', paticka: SUBSOL('RO-DECLARATIE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'declarant', vpravo: 'legalizare (dacă este cerută)' },
  cislovatClanky: false,
  slovo: { n: 'declarație', g: 'declarației', a: 'declarația', l: 'declarație' },
  coDal: ['Verificați dacă instituția cere declarația pe propriul formular sau autentificată la notar – în acest caz semnați-o abia acolo.'],
  kontrola: [
    'Declarați numai fapte adevărate – declarația necorespunzătoare adevărului făcută unei autorități poate fi infracțiune (falsul în declarații, Codul penal).',
    'Treceți scopul declarației (instituția sau procedura pentru care o dați).',
    'Multe instituții au propriul formular de declarație – verificați înainte.',
  ],
  zdroje: [COD_CIVIL],
  kroky: [{ id: 'date', nazev: 'Declarația', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Nume și prenume', sirka: 34, autocomplete: 'name' },
    { id: 'p_cnp', typ: 'text', popis: 'CNP', sirka: 15, polovina: true },
    { id: 'p_act', typ: 'text', popis: 'Act de identitate (seria și nr.)', sirka: 14, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Domiciliul', sirka: 46 },
    { id: 'scop', typ: 'text', popis: 'Scopul declarației', placeholder: 'de ex. pentru dosarul de … la primăria …, pentru bancă', sirka: 56 },
    { id: 'text', typ: 'textarea', popis: 'Textul declarației', placeholder: 'de ex. locuiesc singură la adresa de mai sus', sirka: 64 },
    { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Declarație', odstavce: [
    'Subsemnatul/Subsemnata **{{p_jmeno}}**, CNP {{p_cnp}}, act de identitate {{p_act}}, domiciliat(ă) în {{p_adresa}},',
    'cunoscând prevederile Codului penal privind falsul în declarații, declar pe propria răspundere că {{text}}.',
    'Dau prezenta declarație pentru: {{scop}}.',
  ] }],
};
