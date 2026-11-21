/** Acord de încetare a contractului de închiriere – România (Codul civil). Părțile convin data încetării fără preaviz. */
import type { Sablona } from '../typy';
import { sumaInLitere } from './numere';
import { COD_CIVIL, ANAF_CHIRII, SFAT_IDENTITATE, SUBSOL } from './surse';

export const acordIncetareInchiriere: Sablona = {
  kod: 'RO-INCETARE-INCHIRIERE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Acord de încetare a contractului de închiriere', podnadpis: 'încetarea închirierii prin acordul părților, fără preaviz',
  souborPdf: 'acord-incetare-inchiriere', paticka: SUBSOL('RO-INCETARE-INCHIRIERE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'proprietar', vpravo: 'chiriaș' },
  slovo: { n: 'acord', g: 'acordului', a: 'acordul', l: 'acord' },
  coDal: ['În ziua predării semnați procesul-verbal de predare-primire cu indexurile contoarelor.', 'Proprietarul: dacă ați înregistrat contractul la ANAF, notificați încetarea (formular C168) în 30 de zile.'],
  kontrola: [
    'Prin acord părțile pot conveni orice dată de încetare – preavizul nu se mai aplică.',
    'Treceți ziua exactă a eliberării și a predării cheilor.',
    'Stabiliți cât din garanție se restituie și până când; eventualele rețineri treceți-le concret.',
    'Încetarea unui contract înregistrat la ANAF se declară tot în 30 de zile ([ANAF](https://static.anaf.ro/static/10/Galati/ven_inch_2024.pdf)).',
    SFAT_IDENTITATE,
  ],
  zdroje: [COD_CIVIL, ANAF_CHIRII],
  kroky: [
    { id: 'parti', nazev: 'Părțile și închirierea', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Proprietar – nume și prenume', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Domiciliul proprietarului', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Chiriaș – nume și prenume', sirka: 34 },
      { id: 'locuinta', typ: 'text', popis: 'Adresa locuinței', sirka: 46 },
      { id: 'contract_din', typ: 'datum', popis: 'Contractul de închiriere din', sirka: 14, polovina: true },
    ] },
    { id: 'incetare', nazev: 'Încetarea și garanția', pole: [
      { id: 'data_incetare', typ: 'datum', popis: 'Închirierea încetează la', sirka: 14, polovina: true },
      { id: 'garantie', typ: 'castka', popis: 'Garanția de restituit (lei)', sirka: 12, polovina: true },
      { id: 'termen_garantie', typ: 'datum', popis: 'Garanția se restituie până la', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN chiriaș', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { garantie_litere: (d) => sumaInLitere(d.garantie) },
  clanky: [
    { nadpis: 'Părțile', odstavce: ['**Proprietar:** {{p_jmeno}}, domiciliat în {{p_adresa}}', '**Chiriaș:** {{k_jmeno}}'] },
    { nadpis: 'Încetarea', odstavce: ['Părțile convin încetarea contractului de închiriere din {{contract_din}} pentru locuința situată la adresa {{locuinta}}, la data de **{{data_incetare}}**.', 'Până la această dată chiriașul plătește chiria și utilitățile conform contractului.'] },
    { nadpis: 'Predarea locuinței', odstavce: ['Cel târziu la data de {{data_incetare}} chiriașul eliberează locuința, o predă în starea în care a primit-o, ținând seama de uzura normală, și restituie toate cheile. Predarea se consemnează într-un proces-verbal cu indexurile contoarelor.'] },
    { nadpis: 'Garanția', odstavce: ['Proprietarul restituie chiriașului garanția de {{garantie}} (în litere: {{garantie_litere}}) cel târziu la data de {{termen_garantie}}, în contul IBAN {{iban}}, reținând numai datoriile sau pagubele consemnate în procesul-verbal.'] },
    { nadpis: 'Dispoziții finale', odstavce: ['După executarea prezentului acord, părțile nu mai au alte pretenții din contractul de închiriere, cu excepția celor consemnate în procesul-verbal.', 'Acordul a fost încheiat în două exemplare originale.'] },
  ],
};
