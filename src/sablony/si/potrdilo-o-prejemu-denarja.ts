/** Potrdilo o prejemu denarja – Slovenija. Pobotnica: kdo je od koga prejel koliko in za kaj (OZ – dolžnik lahko zahteva potrdilo o plačilu). */
import type { Sablona } from '../typy';
import { znesekZBesedo } from './stevila';
import { OZ, NASVET_GOTOVINA, NOGA } from './viri';

export const potrdiloOPrejemuDenarja: Sablona = {
  kod: 'SI-POTRDILO', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Potrdilo o prejemu denarja', podnadpis: 'pobotnica za prejeto gotovino',
  souborPdf: 'potrdilo-o-prejemu-denarja', paticka: NOGA('SI-POTRDILO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'prejemnik', vpravo: 'plačnik (neobvezno)' },
  cislovatClanky: false,
  slovo: { n: 'potrdilo', g: 'potrdila', a: 'potrdilo', l: 'potrdilu' },
  coDal: ['Potrdilo obdrži plačnik – z njim dokazuje plačilo.', 'Če je bilo plačano za vozilo ali stvar, naj se potrdilo sklicuje na pogodbo.'],
  kontrola: [
    'Kdor plača, lahko zahteva potrdilo o plačilu (pobotnico) – Obligacijski zakonik.',
    'Navedite namen plačila (kupnina, posojilo, varščina, are), da je jasno, za kaj je bil denar dan.',
    NASVET_GOTOVINA,
  ],
  zdroje: [OZ],
  kroky: [{ id: 'podatki', nazev: 'Plačilo', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Prejemnik – ime in priimek', placeholder: 'npr. Janez Novak', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Naslov prejemnika', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Plačnik – ime in priimek', placeholder: 'npr. Maja Horvat', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Naslov plačnika', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Znesek (€)', sirka: 12, polovina: true },
    { id: 'namen', typ: 'text', popis: 'Namen plačila', placeholder: 'npr. kupnina za vozilo po pogodbi z dne 21. 11. 2026', sirka: 56 },
    { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_z_besedo: (d) => znesekZBesedo(d.castka) },
  clanky: [{ nadpis: 'Potrdilo', odstavce: [
    'Podpisani **{{p_jmeno}}**, {{p_adresa}}, potrjujem, da sem od {{k_jmeno}}, {{k_adresa}}, prejel/a znesek **{{castka}}** (z besedo: {{castka_z_besedo}}) v gotovini.',
    'Namen plačila: {{namen}}.',
  ] }],
};
