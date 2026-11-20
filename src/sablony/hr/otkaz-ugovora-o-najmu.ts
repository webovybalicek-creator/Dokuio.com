/** Otkaz ugovora o najmu stana od strane najmoprimca – Hrvatska. Najam na neodređeno: najmanje tri mjeseca prije iseljenja (ZNS). */
import type { Sablona } from '../typy';
import { ZNS, GOV_NAJAM, PATICKA } from './izvori';

export const otkazUgovoraONajmu: Sablona = {
  kod: 'HR-OTKAZ-NAJMA',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hr',
  jazyk: 'hr',
  nazev: 'Otkaz ugovora o najmu stana',
  podnadpis: 'otkaz najmoprimca',
  souborPdf: 'otkaz-ugovora-o-najmu',
  paticka: PATICKA('HR-OTKAZ-NAJMA'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'najmoprimac', vpravo: 'primio najmodavac' },
  cislovatClanky: false,
  slovo: { n: 'otkaz', g: 'otkaza', a: 'otkaz', l: 'otkazu' },
  coDal: [
    'Predajte otkaz najmodavcu uz potpis o primitku ili ga pošaljite preporučeno poštom.',
    'Dogovorite termin primopredaje stana i sastavite zapisnik sa stanjem brojila.',
  ],
  kontrola: [
    'Najam na neodređeno vrijeme najmoprimac može otkazati, ali mora najmodavca obavijestiti najmanje tri mjeseca prije dana iseljenja.',
    'Kod najma na određeno vrijeme provjerite što ugovor kaže o prijevremenom otkazu – ili se s najmodavcem dogovorite o sporazumnom prestanku.',
    'Sačuvajte dokaz o predaji otkaza (potpis najmodavca ili potvrdu preporučene pošiljke).',
  ],
  zdroje: [ZNS, GOV_NAJAM],
  kroky: [
    {
      id: 'podaci',
      nazev: 'Najam i otkaz',
      pole: [
        { id: 'jmeno', typ: 'text', popis: 'Najmoprimac – ime i prezime', sirka: 34, autocomplete: 'name' },
        { id: 'adresa', typ: 'text', popis: 'Adresa stana', sirka: 46 },
        { id: 'pronajimatel', typ: 'text', popis: 'Najmodavac – ime i adresa', sirka: 56 },
        { id: 'smlouva', typ: 'datum', popis: 'Datum ugovora o najmu', sirka: 14, polovina: true },
        { id: 'iseljenje', typ: 'datum', popis: 'Dan iseljenja', napoveda: 'Najmanje tri mjeseca od predaje otkaza.', sirka: 14, polovina: true },
        { id: 'iban', typ: 'text', popis: 'IBAN za povrat jamčevine', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Otkaz',
      odstavce: [
        '**Prima:** {{pronajimatel}}',
        'Ja, **{{jmeno}}**, najmoprimac stana na adresi {{adresa}} prema ugovoru o najmu od {{smlouva}}, ovim otkazujem ugovor o najmu.',
        'Stan ću isprazniti i predati dana {{iseljenje}}.',
        'Molim povrat jamčevine na račun IBAN {{iban}} nakon primopredaje stana.',
      ],
    },
  ],
};
