/** Opomin pred tožbo – Slovenija (OZ). Poziv dolžniku k plačilu zapadlega dolga z rokom; od zapadlosti tečejo zakonske zamudne obresti. */
import type { Sablona } from '../typy';
import { znesekZBesedo } from './stevila';
import { OZ, NOGA } from './viri';

export const opominPredTozbo: Sablona = {
  kod: 'SI-OPOMIN', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Opomin pred tožbo', podnadpis: 'poziv k plačilu zapadlega dolga',
  souborPdf: 'opomin-pred-tozbo', paticka: NOGA('SI-OPOMIN'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'upnik', vpravo: 'prejel (dolžnik, neobvezno)' },
  cislovatClanky: false,
  slovo: { n: 'opomin', g: 'opomina', a: 'opomin', l: 'opominu' },
  coDal: ['Opomin pošljite priporočeno s povratnico in shranite dokazilo.', 'Če dolžnik ne plača, lahko na podlagi verodostojne listine (npr. računa) vložite predlog za izvršbo ali tožbo.'],
  kontrola: [
    'Dolg mora biti zapadel – rok plačila iz pogodbe ali računa je potekel.',
    'Od zapadlosti dolžnik dolguje zakonske zamudne obresti.',
    'Opomin sam ne pretrga zastaranja – to stori le dolžnikova pripoznava dolga ali tožba. Splošni zastaralni rok je pet let.',
    'Določite razumen rok (npr. 8 ali 15 dni) in navedite točen IBAN.',
  ],
  zdroje: [OZ],
  kroky: [{ id: 'podatki', nazev: 'Upnik, dolžnik in dolg', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Upnik – ime in priimek ali naziv', placeholder: 'npr. Janez Novak', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Naslov upnika', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Dolžnik – ime in priimek ali naziv', placeholder: 'npr. Marko Kralj', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Naslov dolžnika', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Dolgovani znesek (€)', sirka: 12, polovina: true },
    { id: 'podlaga', typ: 'text', popis: 'Podlaga dolga', placeholder: 'npr. posojilo po pogodbi z dne 15. 3. 2026', sirka: 56 },
    { id: 'zapadlost', typ: 'datum', popis: 'Dolg je zapadel dne', sirka: 14, polovina: true },
    { id: 'rok', typ: 'datum', popis: 'Plačajte najpozneje do', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'IBAN upnika', placeholder: 'SI56 0000 0000 0000 000', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_z_besedo: (d) => znesekZBesedo(d.castka) },
  clanky: [{ nadpis: 'Opomin', odstavce: [
    '**Upnik:** {{p_jmeno}}, {{p_adresa}}',
    '**Dolžnik:** {{k_jmeno}}, {{k_adresa}}',
    'Pozivam vas, da mi plačate zapadli dolg v znesku **{{castka}}** (z besedo: {{castka_z_besedo}}) iz naslova: {{podlaga}}. Dolg je zapadel dne {{zapadlost}} in do danes ni bil plačan.',
    'Znesek nakažite najpozneje do **{{rok}}** na račun IBAN {{iban}}.',
    'Opozarjam vas, da od zapadlosti dolgujete tudi zakonske zamudne obresti. Če dolga v navedenem roku ne plačate, bom brez nadaljnjega opomina sprožil/a postopek izterjave pred sodiščem, stroški postopka pa bodo bremenili vas.',
  ] }],
};
