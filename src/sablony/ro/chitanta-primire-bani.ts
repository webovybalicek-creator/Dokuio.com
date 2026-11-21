/** Chitanță de primire a banilor – România. Cine a primit, de la cine, cât și pentru ce (Codul civil – debitorul are dreptul la chitanță). */
import type { Sablona } from '../typy';
import { sumaInLitere } from './numere';
import { COD_CIVIL, ANAF_NUMERAR, SFAT_NUMERAR, SUBSOL } from './surse';

export const chitantaPrimireBani: Sablona = {
  kod: 'RO-CHITANTA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Chitanță de primire a banilor', podnadpis: 'dovadă a plății în numerar între persoane fizice',
  souborPdf: 'chitanta-primire-bani', paticka: SUBSOL('RO-CHITANTA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'am primit', vpravo: 'am plătit (opțional)' },
  cislovatClanky: false,
  slovo: { n: 'chitanță', g: 'chitanței', a: 'chitanța', l: 'chitanță' },
  coDal: ['Chitanța o păstrează cel care a plătit – cu ea dovedește plata.', 'Dacă s-a plătit pentru un vehicul sau un bun, chitanța să facă trimitere la contract.'],
  kontrola: [
    'Cel care plătește are dreptul să primească chitanță (Codul civil).',
    'Treceți scopul plății (preț, împrumut, garanție, arvună), ca să fie clar pentru ce s-au dat banii.',
    SFAT_NUMERAR,
  ],
  zdroje: [COD_CIVIL, ANAF_NUMERAR],
  kroky: [{ id: 'date', nazev: 'Plata', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Primitor – nume și prenume', placeholder: 'de ex. Andrei Popescu', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Domiciliul primitorului', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Plătitor – nume și prenume', placeholder: 'de ex. Maria Ionescu', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Domiciliul plătitorului', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Suma (lei)', sirka: 12, polovina: true },
    { id: 'scop', typ: 'text', popis: 'Scopul plății', placeholder: 'de ex. prețul vehiculului conform contractului din 21.11.2026', sirka: 56 },
    { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_litere: (d) => sumaInLitere(d.castka) },
  clanky: [{ nadpis: 'Chitanță', odstavce: [
    'Subsemnatul/Subsemnata **{{p_jmeno}}**, domiciliat(ă) în {{p_adresa}}, confirm că am primit de la {{k_jmeno}}, domiciliat(ă) în {{k_adresa}}, suma de **{{castka}}** (în litere: {{castka_litere}}) în numerar.',
    'Scopul plății: {{scop}}.',
  ] }],
};
