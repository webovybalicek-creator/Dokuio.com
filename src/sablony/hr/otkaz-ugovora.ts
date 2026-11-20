/** Otkaz ugovora – Hrvatska (telekom operator, osiguranje, teretana, pretplata, struja). Rokovi prema ugovoru i općim uvjetima; ZZP, ZOO. */
import type { Sablona } from '../typy';
import { ZOO, ZZP, PATICKA } from './izvori';

export const otkazUgovora: Sablona = {
  kod: 'HR-OTKAZ', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'hr', jazyk: 'hr',
  nazev: 'Otkaz ugovora', podnadpis: 'pisana izjava o otkazu ugovora o pružanju usluge',
  souborPdf: 'otkaz-ugovora', paticka: PATICKA('HR-OTKAZ'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'korisnik', vpravo: 'primio (pružatelj, neobavezno)' },
  cislovatClanky: false,
  slovo: { n: 'otkaz', g: 'otkaza', a: 'otkaz', l: 'otkazu' },
  coDal: ['Pošaljite otkaz preporučeno s povratnicom ili na adresu e-pošte za otkaze navedenu u općim uvjetima.', 'Zatražite pisanu potvrdu otkaza i datum prestanka.'],
  kontrola: [
    'Provjerite u ugovoru ili općim uvjetima otkazni rok i način otkaza (pisano, e-pošta, korisnički račun).',
    'Kod ugovora s obveznim trajanjem (npr. telekom 24 mjeseca) prijevremeni otkaz može značiti naknadu – iznos je u ugovoru.',
    'Navedite broj ugovora ili korisnički broj, inače se otkaz teško povezuje s vašim računom.',
    'Ako je pružatelj promijenio uvjete na vašu štetu, obično imate pravo otkazati bez naknade – pozovite se na to.',
  ],
  zdroje: [ZOO, ZZP],
  kroky: [{ id: 'podaci', nazev: 'Otkaz', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Korisnik – ime i prezime', placeholder: 'npr. Ana Kovač', sirka: 34, autocomplete: 'name' },
    { id: 'p_oib', typ: 'text', popis: 'OIB', sirka: 14, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Adresa', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Pružatelj usluge', placeholder: 'npr. naziv operatora, osiguravatelja ili teretane', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Adresa pružatelja', sirka: 46 },
    { id: 'usluga', typ: 'text', popis: 'Usluga', placeholder: 'npr. mobilna tarifa, kućni internet, članarina', sirka: 40 },
    { id: 'broj', typ: 'text', popis: 'Broj ugovora / korisnički broj', sirka: 24, polovina: true },
    { id: 'kada', typ: 'volba', popis: 'Ugovor otkazujem', moznosti: [ { hodnota: 'rok', popis: 'uz otkazni rok iz ugovora (prvi mogući dan)' }, { hodnota: 'datum', popis: 's određenim datumom' } ] },
    { id: 'kraj', typ: 'datum', popis: 'Datum prestanka', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'kada', je: 'datum' } },
    { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Otkaz', odstavce: [
    '**Korisnik:** {{p_jmeno}}, OIB {{p_oib}}, {{p_adresa}}',
    '**Pružatelj:** {{k_jmeno}}, {{k_adresa}}',
    { volba: 'kada', uvodVzor: 'Prestanak (označite jednu mogućnost):', moznosti: { rok: 'Ovim otkazujem ugovor o usluzi {{usluga}}, broj {{broj}}, uz otkazni rok iz ugovora, odnosno s prvim mogućim danom.', datum: 'Ovim otkazujem ugovor o usluzi {{usluga}}, broj {{broj}}, s danom {{kraj}}.' } },
    'Molim da mi pisano potvrdite primitak otkaza i datum prestanka ugovora te da od toga dana više ne naplaćujete naknade.',
  ] }],
};
