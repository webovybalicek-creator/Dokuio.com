/** Izjava – Slovenija. Splošna pisna izjava fizične osebe; organi pogosto zahtevajo overitev podpisa (upravna enota ali notar). */
import type { Sablona } from '../typy';
import { OZ, NOGA } from './viri';

export const izjava: Sablona = {
  kod: 'SI-IZJAVA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Izjava', podnadpis: 'pod materialno in kazensko odgovornostjo',
  souborPdf: 'izjava', paticka: NOGA('SI-IZJAVA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'izjavitelj', vpravo: 'overitev (če je potrebna)' },
  cislovatClanky: false,
  slovo: { n: 'izjava', g: 'izjave', a: 'izjavo', l: 'izjavi' },
  coDal: ['Preverite, ali organ, ki mu izjavo predajate, zahteva overjen podpis – če da, jo podpišite šele na upravni enoti ali pri notarju.'],
  kontrola: [
    'Navedite le resnična dejstva – lažna izjava pred organom je lahko kaznivo dejanje.',
    'Vpišite namen izjave (za kateri organ ali postopek se daje).',
    'Mnogi organi zahtevajo izjavo na svojem obrazcu – preverite ga pred tem.',
  ],
  zdroje: [OZ],
  kroky: [{ id: 'podatki', nazev: 'Izjava', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Ime in priimek', sirka: 34, autocomplete: 'name' },
    { id: 'p_emso', typ: 'text', popis: 'EMŠO ali davčna številka', sirka: 14, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
    { id: 'namen', typ: 'text', popis: 'Namen izjave', placeholder: 'npr. za uveljavljanje pravice do …, za predložitev banki', sirka: 56 },
    { id: 'besedilo', typ: 'textarea', popis: 'Besedilo izjave', placeholder: 'npr. da živim sama v gospodinjstvu na navedenem naslovu', sirka: 64 },
    { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Izjava', odstavce: [
    'Podpisani/a **{{p_jmeno}}**, {{p_emso}}, s stalnim prebivališčem na naslovu {{p_adresa}},',
    'pod materialno in kazensko odgovornostjo izjavljam, {{besedilo}}.',
    'Izjavo dajem za namen: {{namen}} in je ni mogoče uporabiti v druge namene.',
  ] }],
};
