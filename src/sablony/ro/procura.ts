/**
 * Împuternicire (procură sub semnătură privată) – România (Codul civil, mandatul). Pentru actele care cer formă autentică
 * (de ex. vânzarea unui imobil) procura trebuie să fie tot autentică, la notar; multe instituții cer procură notarială.
 */
import type { Sablona } from '../typy';
import { COD_CIVIL, SUBSOL } from './surse';

export const procura: Sablona = {
  kod: 'RO-PROCURA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Împuternicire', podnadpis: 'procură sub semnătură privată pentru reprezentarea unei persoane fizice',
  souborPdf: 'procura', paticka: SUBSOL('RO-PROCURA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'mandant', vpravo: 'mandatar (acceptare, opțional)' },
  cislovatClanky: false,
  slovo: { n: 'împuternicire', g: 'împuternicirii', a: 'împuternicirea', l: 'împuternicire' },
  coDal: ['Întrebați instituția (bancă, serviciul de înmatriculări, primăria) dacă acceptă o împuternicire sub semnătură privată sau cere procură notarială.', 'Mandatarul să aibă la el originalul și actul de identitate.'],
  kontrola: [
    'Descrieți actele cât mai exact – de ex. „ridicarea coletelor de la oficiul poștal” sau „depunerea dosarului de înmatriculare pentru vehiculul …”.',
    'Pentru actele care trebuie încheiate în formă autentică (de ex. vânzarea sau donația unui imobil) procura trebuie să fie autentică, la notar (Codul civil, mandatul).',
    'Multe instituții, inclusiv serviciile de înmatriculare, cer procură notarială – verificați înainte.',
    'Împuternicirea poate fi revocată oricând – comunicați revocarea mandatarului și celor cărora le-a fost prezentată.',
  ],
  zdroje: [COD_CIVIL],
  kroky: [{ id: 'date', nazev: 'Împuternicirea', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Mandant – nume și prenume', placeholder: 'de ex. Andrei Popescu', sirka: 34, autocomplete: 'name' },
    { id: 'p_cnp', typ: 'text', popis: 'CNP', sirka: 15, polovina: true },
    { id: 'p_act', typ: 'text', popis: 'Act de identitate (seria și nr.)', placeholder: 'de ex. RX 123456', sirka: 14, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Domiciliul', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Mandatar – nume și prenume', placeholder: 'de ex. Maria Popescu', sirka: 34 },
    { id: 'k_cnp', typ: 'text', popis: 'CNP', sirka: 15, polovina: true },
    { id: 'k_adresa', typ: 'text', popis: 'Domiciliul', sirka: 46 },
    { id: 'acte', typ: 'textarea', popis: 'Pentru ce acte', placeholder: 'de ex. ridicarea coletelor de la oficiul poștal, depunerea actelor la primărie pentru …', sirka: 64 },
    { id: 'pana_la', typ: 'datum', popis: 'Împuternicirea este valabilă până la', sirka: 14, polovina: true },
    { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Împuternicire', odstavce: [
    'Subsemnatul/Subsemnata **{{p_jmeno}}**, CNP {{p_cnp}}, act de identitate {{p_act}}, domiciliat(ă) în {{p_adresa}} (mandant),',
    'împuternicesc pe **{{k_jmeno}}**, CNP {{k_cnp}}, domiciliat(ă) în {{k_adresa}} (mandatar),',
    'să mă reprezinte și să îndeplinească în numele meu următoarele acte: {{acte}}.',
    'Împuternicirea este valabilă până la data de {{pana_la}} sau până la revocare.',
  ] }],
};
