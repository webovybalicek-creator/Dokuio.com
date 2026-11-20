/**
 * Otkaz ugovora o radu od strane radnika – Hrvatska (Zakon o radu). Radnik otkazuje bez navođenja razloga, pisano, uz otkazni
 * rok prema čl. 122. (npr. 1 godina rada – 1 mjesec, 5 godina – 2 mjeseca) ili kraći iz ugovora; gov.hr Redoviti otkaz.
 */
import type { Sablona } from '../typy';
import { ZR, GOV_OTKAZ, PATICKA } from './izvori';

export const otkazUgovoraORadu: Sablona = {
  kod: 'HR-OTKAZ-RAD', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'hr', jazyk: 'hr',
  nazev: 'Otkaz ugovora o radu', podnadpis: 'redoviti otkaz radnika',
  souborPdf: 'otkaz-ugovora-o-radu', paticka: PATICKA('HR-OTKAZ-RAD'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'radnik', vpravo: 'primio za poslodavca (datum i potpis)' },
  cislovatClanky: false,
  slovo: { n: 'otkaz', g: 'otkaza', a: 'otkaz', l: 'otkazu' },
  coDal: ['Predajte otkaz osobno uz potpis primitka na vašem primjerku ili ga pošaljite preporučeno.', 'Otkazni rok počinje teći od dana kada je otkaz uručen poslodavcu.', 'Dogovorite iskorištavanje preostalog godišnjeg odmora ili isplatu naknade.'],
  kontrola: [
    'Kao radnik možete redovito otkazati ugovor o radu bez navođenja razloga, ali uz otkazni rok iz zakona ili ugovora ([gov.hr](https://www.gov.hr/hr/redoviti-otkaz/840)).',
    'Otkaz mora biti pisan i uručen poslodavcu.',
    'Najkraći otkazni rok ovisi o trajanju rada kod istog poslodavca (Zakon o radu, čl. 122.) – npr. nakon jedne godine mjesec dana, nakon pet godina dva mjeseca. Ugovor o radu ili kolektivni ugovor mogu za radnika odrediti kraći rok.',
    'Ako za otkaz imate osobito važan razlog, otkazni rok ne može biti dulji od mjesec dana.',
    'Želite li otići odmah, predložite poslodavcu sporazumni prestanak ugovora o radu – bez njegova pristanka otkazni rok morate odraditi.',
  ],
  zdroje: [ZR, GOV_OTKAZ],
  kroky: [{ id: 'podaci', nazev: 'Radnik i poslodavac', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Radnik – ime i prezime', placeholder: 'npr. Ana Kovač', sirka: 34, autocomplete: 'name' },
    { id: 'p_oib', typ: 'text', popis: 'OIB', sirka: 14, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Adresa', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Poslodavac', placeholder: 'npr. Primjer d.o.o.', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Adresa poslodavca', sirka: 46 },
    { id: 'mjesto_rada', typ: 'text', popis: 'Radno mjesto', placeholder: 'npr. prodavačica', sirka: 34 },
    { id: 'ugovor_od', typ: 'datum', popis: 'Ugovor o radu od', sirka: 14, polovina: true },
    { id: 'rok', typ: 'text', popis: 'Otkazni rok', placeholder: 'npr. mjesec dana', sirka: 18, polovina: true },
    { id: 'sporazum', typ: 'volba', popis: 'Predložiti raniji sporazumni prestanak?', moznosti: [ { hodnota: 'ne', popis: 'ne' }, { hodnota: 'da', popis: 'da, s određenim datumom' } ] },
    { id: 'raniji', typ: 'datum', popis: 'Predloženi dan prestanka', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'sporazum', je: 'da' } },
    { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Otkaz', odstavce: [
    '**Radnik:** {{p_jmeno}}, OIB {{p_oib}}, {{p_adresa}}',
    '**Poslodavac:** {{k_jmeno}}, {{k_adresa}}',
    'Ovim redovito otkazujem ugovor o radu od {{ugovor_od}} za radno mjesto {{mjesto_rada}}.',
    'Otkazni rok iznosi {{rok}} i počinje teći danom uručenja ovog otkaza.',
    { volba: 'sporazum', uvodVzor: 'Prijedlog (označite jednu mogućnost):', moznosti: { ne: 'Molim da mi do isteka otkaznog roka omogućite korištenje preostalog godišnjeg odmora, odnosno isplatite naknadu za neiskorišteni godišnji odmor.', da: 'Predlažem da ugovor o radu sporazumno prestane već dana {{raniji}}. Ako se s time ne slažete, ugovor prestaje istekom otkaznog roka.' } },
  ] }],
};
