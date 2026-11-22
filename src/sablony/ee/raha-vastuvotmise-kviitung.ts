/** Kviitung raha vastuvõtmise kohta – Eesti. Tõend sularahamakse kohta. */
import type { Sablona } from '../typy';
import { summaSonadega } from './arvud';
import { VOS, NOU_SULARAHA, JALUS } from './allikad';

export const kviitung: Sablona = {
  kod: 'EE-KVIITUNG', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Kviitung raha vastuvõtmise kohta', podnadpis: 'sularahamakse kinnitus eraisikute vahel',
  souborPdf: 'raha-vastuvotmise-kviitung', paticka: JALUS('EE-KVIITUNG'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'raha vastuvõtja', vpravo: 'maksja (soovi korral)' },
  cislovatClanky: false,
  slovo: { n: 'kviitung', g: 'kviitungi', a: 'kviitungit', l: 'kviitungis' },
  coDal: ['Kviitungi hoiab alles see, kes maksis – sellega tõendab ta maksmist.', 'Kui makse puudutab sõidukit või asja, viidake kviitungis lepingule.'],
  kontrola: [
    'Kohustuse täitja võib nõuda täitmise vastuvõtjalt kirjalikku kinnitust (kviitungit).',
    'Kirjutage, mille eest maksate (hind, laen, tagatisraha, ettemaks), et oleks selge, mis tasuti.',
    NOU_SULARAHA,
  ],
  zdroje: [VOS],
  kroky: [{ id: 'makse', nazev: 'Makse', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Raha vastuvõtja – ees- ja perekonnanimi', placeholder: 'nt Mari Tamm', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Vastuvõtja aadress', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Maksja – ees- ja perekonnanimi', placeholder: 'nt Jaan Kask', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Maksja aadress', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Summa (eurot)', sirka: 12, polovina: true },
    { id: 'pohjus', typ: 'text', popis: 'Makse alus', placeholder: 'nt sõiduki hind 22.11.2026 lepingu järgi', sirka: 56 },
    { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_sonadega: (d) => summaSonadega(d.castka) },
  clanky: [{ nadpis: 'Kviitung', odstavce: [
    'Mina, **{{p_jmeno}}**, aadress {{p_adresa}}, kinnitan, et sain isikult {{k_jmeno}}, aadress {{k_adresa}}, sularahas **{{castka}}** (sõnadega: {{castka_sonadega}}).',
    'Makse alus: {{pohjus}}.',
  ] }],
};
