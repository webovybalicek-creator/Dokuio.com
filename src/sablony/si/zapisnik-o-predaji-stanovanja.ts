/** Zapisnik o predaji stanovanja – Slovenija. Stanje števcev, ključi, oprema in poškodbe ob vselitvi ali izselitvi. */
import type { Sablona } from '../typy';
import { SZ1, NOGA } from './viri';

export const zapisnikStanovanja: Sablona = {
  kod: 'SI-ZAPISNIK-STAN', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Zapisnik o predaji stanovanja', podnadpis: 'stanje stanovanja in števcev',
  souborPdf: 'zapisnik-o-predaji-stanovanja', paticka: NOGA('SI-ZAPISNIK-STAN'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'najemodajalec', vpravo: 'najemnik' },
  cislovatClanky: false,
  slovo: { n: 'zapisnik', g: 'zapisnika', a: 'zapisnik', l: 'zapisniku' },
  coDal: ['Fotografirajte stanovanje in števce z datumom.', 'Vsaka stranka obdrži en izvod.'],
  kontrola: ['Ob izselitvi se stanje primerja z zapisnikom ob vselitvi – česar ni zapisano, je pozneje težko dokazati.', 'Običajna obraba ni škoda.'],
  zdroje: [SZ1],
  kroky: [{ id: 'podatki', nazev: 'Predaja', pole: [
    { id: 'vrsta', typ: 'volba', popis: 'Predaja ob', moznosti: [ { hodnota: 'vselitev', popis: 'vselitvi' }, { hodnota: 'izselitev', popis: 'izselitvi' } ] },
    { id: 'p_jmeno', typ: 'text', popis: 'Najemodajalec', sirka: 34, autocomplete: 'name' },
    { id: 'k_jmeno', typ: 'text', popis: 'Najemnik', sirka: 34 },
    { id: 'naslov', typ: 'text', popis: 'Naslov stanovanja', sirka: 46 },
    { id: 'elektrika', typ: 'text', popis: 'Števec elektrike', sirka: 14, polovina: true },
    { id: 'voda', typ: 'text', popis: 'Števec vode', sirka: 14, polovina: true },
    { id: 'plin', typ: 'text', popis: 'Števec plina ali toplote', sirka: 14, polovina: true },
    { id: 'kljuci', typ: 'text', popis: 'Ključi', placeholder: 'npr. 2× vhod, 1× nabiralnik', sirka: 30 },
    { id: 'oprema', typ: 'textarea', popis: 'Oprema in stanje', placeholder: 'npr. kuhinja brez poškodb, pralni stroj deluje', sirka: 64 },
    { id: 'poskodbe', typ: 'textarea', popis: 'Poškodbe in opombe', sirka: 64 },
    { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true },
    { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Zapisnik', odstavce: [
    { volba: 'vrsta', uvodVzor: 'Predaja (označite eno možnost):', moznosti: { vselitev: 'Najemodajalec {{p_jmeno}} predaja najemniku {{k_jmeno}} stanovanje na naslovu {{naslov}} ob vselitvi.', izselitev: 'Najemnik {{k_jmeno}} vrača najemodajalcu {{p_jmeno}} stanovanje na naslovu {{naslov}} ob izselitvi.' } },
    'Stanje števcev – elektrika: {{elektrika}}, voda: {{voda}}, plin oziroma toplota: {{plin}}.',
    'Ključi: {{kljuci}}.',
    'Oprema in stanje: {{oprema}}',
    'Poškodbe in opombe: {{poskodbe}}',
  ] }],
};
