/** Nyilatkozat – Magyarország. Általános írásbeli nyilatkozat; két tanú aláírásával teljes bizonyító erejű magánokirat (Pp. 325. §). */
import type { Sablona } from '../typy';
import { PP, TIP_TANUK } from './forrasok';

export const nyilatkozat: Sablona = {
  kod: 'HU-NYILATKOZAT',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Nyilatkozat',
  podnadpis: 'magánszemély írásbeli nyilatkozata',
  souborPdf: 'nyilatkozat',
  paticka: 'Ingyenesen készült · HU-NYILATKOZAT v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalom valóságáért a nyilatkozó felel',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'nyilatkozó', vpravo: 'tanú (név, lakcím, aláírás – ha szükséges)' },
  slovo: { n: 'nyilatkozat', g: 'nyilatkozat', a: 'nyilatkozatot', l: 'nyilatkozatban' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  coDal: ['Nyomtassa ki, és saját kezűleg írja alá.', 'Ha a címzett tanúkat vagy hitelesítést kér, az aláírást tanúk előtt, illetve közjegyzőnél tegye meg.', 'Tartson meg egy másolatot.'],
  kontrola: [
    'Csak valós adatot írjon. A valótlan nyilatkozatnak jogi következményei lehetnek.',
    'Előbb kérdezze meg, van-e a szervnek saját nyomtatványa – akkor azt használja.',
    'Fogalmazzon konkrétan: ki, mit, mióta.',
    TIP_TANUK,
  ],
  zdroje: [PP],
  kroky: [
    {
      id: 'szemely',
      nazev: 'A nyilatkozó',
      pole: [
        { id: 'jmeno', typ: 'text', popis: 'Név', placeholder: 'pl. Kovács Anna', sirka: 34, autocomplete: 'name' },
        { id: 'narozeni', typ: 'datum', popis: 'Születési idő', sirka: 14, polovina: true },
        { id: 'adresa', typ: 'text', popis: 'Lakcím', placeholder: 'pl. 1052 Budapest, Váci utca 10.', sirka: 46 },
      ],
    },
    {
      id: 'tartalom',
      nazev: 'Tartalom',
      pole: [
        { id: 'pro', typ: 'text', popis: 'Kinek (nem kötelező)', placeholder: 'pl. iskola, bank, bérbeadó', sirka: 46 },
        { id: 'ucel', typ: 'text', popis: 'Cél (nem kötelező)', sirka: 46 },
        { id: 'text', typ: 'textarea', popis: 'A nyilatkozat szövege', napoveda: 'Kezdje így: „hogy …”. A bevezetőt mi írjuk.', placeholder: 'hogy 2025. január 1. óta a 1052 Budapest, Váci utca 10. szám alatt lakom.', sirka: 70 },
        { id: 'misto', typ: 'text', popis: 'Hely', sirka: 18, polovina: true, vychozi: { obecZ: 'adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    { nadpis: 'Nyilatkozó', odstavce: ['{{jmeno}}, születési idő: {{narozeni}}, lakcím: {{adresa}}'] },
    { nadpis: 'Nyilatkozat', odstavce: ['Címzett: {{pro}}. Cél: {{ucel}}.', 'Alulírott kijelentem, {{text}}', 'Kijelentem, hogy a fenti adatok a valóságnak megfelelnek és teljesek.'] },
  ],
};
