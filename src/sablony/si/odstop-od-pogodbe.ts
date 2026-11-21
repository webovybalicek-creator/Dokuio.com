/**
 * Izjava o odstopu od pogodbe, sklenjene na daljavo ali zunaj poslovnih prostorov – Slovenija (ZVPot-1). 14 dni brez navedbe
 * razloga; podjetje vrne plačila najpozneje v 14 dneh od prejema obvestila (vzorčni obrazec, Uradni list RS, št. 139/22).
 */
import type { Sablona } from '../typy';
import { ZVPOT, OBR_ODSTOP, NOGA } from './viri';

export const odstopOdPogodbe: Sablona = {
  kod: 'SI-ODSTOP', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Odstopni obrazec', podnadpis: 'izjava o odstopu od pogodbe, sklenjene na daljavo',
  souborPdf: 'odstop-od-pogodbe', paticka: NOGA('SI-ODSTOP'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'potrošnik', vpravo: 'prejel (podjetje, neobvezno)' },
  cislovatClanky: false,
  slovo: { n: 'izjava', g: 'izjave', a: 'izjavo', l: 'izjavi' },
  coDal: ['Pošljite izjavo po e-pošti ali priporočeno pred iztekom 14 dni in shranite dokazilo o pošiljanju.', 'Blago vrnite najpozneje v 14 dneh po odstopu.'],
  kontrola: [
    'Pri pogodbah, sklenjenih na daljavo (splet, telefon) ali zunaj poslovnih prostorov, lahko potrošnik v 14 dneh odstopi brez navedbe razloga (ZVPot-1).',
    'Pri blagu rok praviloma teče od dneva, ko ste blago prejeli.',
    'Zadošča, da izjavo pošljete pred iztekom roka.',
    'Podjetje vam vrne vsa plačila, vključno s stroški standardne dostave, najpozneje v 14 dneh od prejema obvestila o odstopu.',
    'Neposredne stroške vračila blaga praviloma nosi potrošnik, če ga je podjetje na to opozorilo.',
  ],
  zdroje: [ZVPOT, OBR_ODSTOP],
  kroky: [{ id: 'podatki', nazev: 'Odstop', pole: [
    { id: 'k_jmeno', typ: 'text', popis: 'Podjetje (prodajalec)', placeholder: 'npr. ime spletne trgovine', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Naslov ali e-pošta podjetja', sirka: 46 },
    { id: 'blago', typ: 'textarea', popis: 'Blago ali storitev', placeholder: 'npr. zimska bunda, velikost M', sirka: 64 },
    { id: 'narocilo', typ: 'text', popis: 'Številka naročila', sirka: 20, polovina: true },
    { id: 'narocen', typ: 'datum', popis: 'Naročeno dne', sirka: 14, polovina: true },
    { id: 'prejet', typ: 'datum', popis: 'Prejeto dne', sirka: 14, polovina: true },
    { id: 'p_jmeno', typ: 'text', popis: 'Vaše ime in priimek', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Vaš naslov', sirka: 46 },
    { id: 'iban', typ: 'text', popis: 'IBAN za vračilo (neobvezno)', placeholder: 'SI56 …', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Odstop', odstavce: [
    '**Za:** {{k_jmeno}}, {{k_adresa}}',
    'Obveščam vas, da odstopam od pogodbe o prodaji naslednjega blaga oziroma opravljanju storitve: {{blago}}.',
    'Številka naročila: {{narocilo}}. Naročeno dne {{narocen}}, prejeto dne {{prejet}}.',
    '**Potrošnik:** {{p_jmeno}}, {{p_adresa}}',
    'Prosim za vračilo plačil na račun IBAN {{iban}}.',
  ] }],
};
