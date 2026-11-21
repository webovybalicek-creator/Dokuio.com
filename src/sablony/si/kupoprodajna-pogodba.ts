/** Kupoprodajna pogodba za rabljeno premično stvar med fizičnimi osebami – Slovenija (OZ, prodajna pogodba). */
import type { Sablona } from '../typy';
import { znesekZBesedo } from './stevila';
import { OZ, NASVET_IDENTITETA, NASVET_GOTOVINA, NOGA } from './viri';

export const kupoprodajnaPogodba: Sablona = {
  kod: 'SI-PRODAJA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Kupoprodajna pogodba', podnadpis: 'za rabljeno premično stvar',
  souborPdf: 'kupoprodajna-pogodba', paticka: NOGA('SI-PRODAJA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'prodajalec', vpravo: 'kupec' },
  slovo: { n: 'pogodba', g: 'pogodbe', a: 'pogodbo', l: 'pogodbi' },
  coDal: ['Stvar izročite šele, ko je denar pri vas.', 'Vsaka stranka obdrži en izvod.'],
  kontrola: [
    'Opišite stvar in znane napake – za napake, ki jih je kupec poznal, prodajalec ne odgovarja.',
    'Pri prodaji prek oglasa ne pošiljajte podatkov kartice ali kod iz SMS – to je najpogostejša prevara.',
    NASVET_IDENTITETA,
    NASVET_GOTOVINA,
  ],
  zdroje: [OZ],
  kroky: [
    { id: 'stranki', nazev: 'Prodajalec in kupec', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Prodajalec – ime in priimek', placeholder: 'npr. Janez Novak', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Naslov prodajalca', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Kupec – ime in priimek', placeholder: 'npr. Maja Horvat', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Naslov kupca', sirka: 46 },
    ] },
    { id: 'stvar', nazev: 'Stvar in cena', pole: [
      { id: 'stvar', typ: 'textarea', popis: 'Opis stvari', placeholder: 'npr. kolo Scott Aspect, velikost L, serijska številka …', sirka: 64 },
      { id: 'napake', typ: 'text', popis: 'Znane napake', placeholder: 'npr. odrgnina na okvirju, sicer brez napak', sirka: 56 },
      { id: 'cena', typ: 'castka', popis: 'Kupnina (€)', sirka: 12, polovina: true },
      { id: 'placilo', typ: 'volba', popis: 'Plačilo', moznosti: [ { hodnota: 'gotovina', popis: 'z gotovino ob podpisu' }, { hodnota: 'racun', popis: 'na račun pred izročitvijo' } ] },
      { id: 'iban', typ: 'text', popis: 'IBAN prodajalca', sirka: 30, zobrazitKdyz: { pole: 'placilo', je: 'racun' } },
      { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_z_besedo: (d) => znesekZBesedo(d.cena) },
  clanky: [
    { nadpis: 'Pogodbeni stranki', odstavce: ['**Prodajalec:** {{p_jmeno}}, naslov {{p_adresa}}', '**Kupec:** {{k_jmeno}}, naslov {{k_adresa}}'] },
    { nadpis: 'Predmet in stanje', odstavce: ['Prodajalec prodaja, kupec pa kupuje rabljeno stvar: {{stvar}}.', 'Znane napake: {{napake}}. Kupec je stvar pregledal in jo kupuje v takšnem stanju.'] },
    { nadpis: 'Kupnina in izročitev', odstavce: ['Kupnina znaša **{{cena}}** (z besedo: {{cena_z_besedo}}).', { volba: 'placilo', uvodVzor: 'Plačilo (označite eno možnost):', moznosti: { gotovina: 'Kupec je kupnino plačal z gotovino ob podpisu; prodajalec s podpisom potrjuje prejem.', racun: 'Kupec bo kupnino nakazal na račun prodajalca IBAN {{iban}}; prodajalec izroči stvar po prejemu plačila.' } }, 'Lastninska pravica preide na kupca z izročitvijo stvari po plačilu celotne kupnine.'] },
    { nadpis: 'Končne določbe', odstavce: ['Za vse, kar ni urejeno s to pogodbo, se uporablja Obligacijski zakonik. Pogodba je sestavljena v dveh enakih izvodih.'] },
  ],
};
