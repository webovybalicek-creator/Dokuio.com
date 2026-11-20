/** Izjava – Hrvatska. Opća pisana izjava fizičke osobe; za službenu uporabu tijela često traže ovjeru potpisa kod javnog bilježnika. */
import type { Sablona } from '../typy';
import { ZOO, PATICKA } from './izvori';

export const izjava: Sablona = {
  kod: 'HR-IZJAVA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'hr', jazyk: 'hr',
  nazev: 'Izjava', podnadpis: 'pod materijalnom i kaznenom odgovornošću',
  souborPdf: 'izjava', paticka: PATICKA('HR-IZJAVA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'davatelj izjave', vpravo: 'ovjera (ako je potrebna)' },
  cislovatClanky: false,
  slovo: { n: 'izjava', g: 'izjave', a: 'izjavu', l: 'izjavi' },
  coDal: ['Provjerite traži li tijelo kojem izjavu predajete ovjeru potpisa – ako da, potpišite je tek pred javnim bilježnikom.'],
  kontrola: [
    'Navedite samo istinite činjenice – davanje lažne izjave pred tijelom može biti kazneno djelo.',
    'Upišite svrhu izjave (za koje tijelo ili postupak se daje).',
    'Mnoga tijela traže obrazac na vlastitom propisanom obrascu – provjerite ga prije.',
  ],
  zdroje: [ZOO],
  kroky: [{ id: 'podaci', nazev: 'Izjava', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Ime i prezime', placeholder: 'npr. Ana Kovač', sirka: 34, autocomplete: 'name' },
    { id: 'p_oib', typ: 'text', popis: 'OIB', sirka: 14, polovina: true },
    { id: 'p_narozeni', typ: 'datum', popis: 'Datum rođenja', sirka: 14, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Adresa', sirka: 46 },
    { id: 'svrha', typ: 'text', popis: 'Svrha izjave', placeholder: 'npr. za ostvarivanje prava na …, za predaju banci', sirka: 56 },
    { id: 'tekst', typ: 'textarea', popis: 'Tekst izjave', placeholder: 'npr. da živim sama u kućanstvu na navedenoj adresi', sirka: 64 },
    { id: 'misto', typ: 'text', popis: 'Mjesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Izjava', odstavce: [
    'Ja, **{{p_jmeno}}**, OIB {{p_oib}}, rođen/a {{p_narozeni}}, s prebivalištem na adresi {{p_adresa}},',
    'pod materijalnom i kaznenom odgovornošću izjavljujem {{tekst}}.',
    'Izjavu dajem u svrhu: {{svrha}}, i u druge svrhe se ne može upotrijebiti.',
  ] }],
};
