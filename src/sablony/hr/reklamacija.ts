/**
 * Pisani prigovor / reklamacija zbog materijalnog nedostatka – Hrvatska. ZOO (odgovornost prodavatelja): obavijest u roku
 * od dva mjeseca od otkrivanja, odgovornost za nedostatke koji se pojave u dvije godine od predaje (rabljeno: ugovorom 1 god.);
 * ZZP: trgovac odgovara na pisani prigovor u 15 dana (gov.hr, 20. 11. 2026).
 */
import type { Sablona } from '../typy';
import { ZOO, ZZP, GOV_REKLAMACIJA, PATICKA } from './izvori';

export const reklamacija: Sablona = {
  kod: 'HR-REKLAMACIJA',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hr',
  jazyk: 'hr',
  nazev: 'Pisani prigovor (reklamacija)',
  podnadpis: 'zbog materijalnog nedostatka robe – Zakon o obveznim odnosima i Zakon o zaštiti potrošača',
  souborPdf: 'reklamacija',
  paticka: PATICKA('HR-REKLAMACIJA'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'potrošač', vpravo: 'zaprimio trgovac' },
  cislovatClanky: false,
  slovo: { n: 'prigovor', g: 'prigovora', a: 'prigovor', l: 'prigovoru' },
  coDal: [
    'Predajte prigovor u trgovini (neka vam potvrde primitak) ili ga pošaljite poštom ili e-poštom.',
    'Trgovac vam mora odgovoriti najkasnije 15 dana od primitka prigovora.',
    'Ako ne odgovori ili odbije, obratite se udruzi za zaštitu potrošača ili tijelu za alternativno rješavanje sporova.',
  ],
  kontrola: [
    'Trgovca obavijestite u roku od dva mjeseca od dana kada ste otkrili nedostatak ([gov.hr](https://www.gov.hr/hr/reklamacija-proizvoda-i-usluga-s-nedostatkom/548)).',
    'Trgovac odgovara za materijalne nedostatke koji se pojave u roku od dvije godine od predaje robe; kod rabljene robe može se ugovoriti godinu dana.',
    'Priložite presliku računa – prigovor mora sadržavati vaše podatke, opis nedostatka i zahtjev.',
    'Možete zahtijevati uklanjanje nedostatka, zamjenu, sniženje cijene ili raskid ugovora.',
  ],
  zdroje: [ZOO, ZZP, GOV_REKLAMACIJA],
  kroky: [
    {
      id: 'podaci',
      nazev: 'Trgovac, roba i nedostatak',
      pole: [
        { id: 'obchod', typ: 'text', popis: 'Trgovac – naziv i adresa', placeholder: 'npr. Primjer d.o.o., Ulica 1, 10000 Zagreb', sirka: 56 },
        { id: 'zbozi', typ: 'text', popis: 'Roba', placeholder: 'npr. perilica rublja Bosch Serie 4', sirka: 46 },
        { id: 'koupeno', typ: 'datum', popis: 'Datum kupnje', sirka: 14, polovina: true },
        { id: 'doklad', typ: 'text', popis: 'Broj računa', sirka: 18, polovina: true },
        { id: 'cena', typ: 'castka', popis: 'Cijena (€)', sirka: 12, polovina: true },
        { id: 'zjisteno', typ: 'datum', popis: 'Nedostatak otkriven dana', sirka: 14, polovina: true },
        { id: 'vada', typ: 'textarea', popis: 'Opis nedostatka', placeholder: 'npr. perilica ne centrifugira i javlja grešku E18', sirka: 64 },
        {
          id: 'zahtjev', typ: 'volba', popis: 'Što zahtijevate',
          moznosti: [
            { hodnota: 'popravak', popis: 'Uklanjanje nedostatka (popravak)' },
            { hodnota: 'zamjena', popis: 'Zamjenu za ispravnu robu' },
            { hodnota: 'snizenje', popis: 'Sniženje cijene' },
            { hodnota: 'raskid', popis: 'Raskid ugovora i povrat novca' },
          ],
        },
        { id: 'jmeno', typ: 'text', popis: 'Vaše ime i prezime', sirka: 34, autocomplete: 'name' },
        { id: 'adresa', typ: 'text', popis: 'Vaša adresa', sirka: 46 },
        { id: 'kontakt', typ: 'text', popis: 'Telefon ili e-pošta', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true, vychozi: { obecZ: 'adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Podnositelj i trgovac',
      odstavce: ['**Potrošač:** {{jmeno}}, adresa {{adresa}}, kontakt {{kontakt}}', '**Trgovac:** {{obchod}}'],
    },
    {
      nadpis: 'Prigovor',
      odstavce: [
        'Dana {{koupeno}} kupio/la sam kod Vas robu: {{zbozi}}, po cijeni od {{cena}} (račun br. {{doklad}}).',
        'Dana {{zjisteno}} otkrio/la sam sljedeći nedostatak: {{vada}}',
        {
          volba: 'zahtjev',
          uvodVzor: 'Zahtijevam (označite jednu mogućnost):',
          moznosti: {
            popravak: 'da se nedostatak ukloni bez naknade.',
            zamjena: 'da mi se preda druga roba bez nedostatka.',
            snizenje: 'razmjerno sniženje cijene.',
            raskid: 'raskid ugovora i povrat plaćene cijene.',
          },
        },
        'Molim pisani odgovor u zakonskom roku od 15 dana od primitka ovog prigovora.',
        'Prilog: preslika računa.',
      ],
    },
  ],
};
