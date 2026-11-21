/** Podjemna pogodba (z obrtnikom ali izvajalcem) – Slovenija (OZ, podjemna pogodba). Naročnik pregleda delo in napake sporoči brez odlašanja. */
import type { Sablona } from '../typy';
import { znesekZBesedo } from './stevila';
import { OZ, NASVET_IDENTITETA, NOGA } from './viri';

export const podjemnaPogodba: Sablona = {
  kod: 'SI-PODJEMNA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Podjemna pogodba', podnadpis: 'sklenjena po določbah Obligacijskega zakonika o podjemni pogodbi',
  souborPdf: 'podjemna-pogodba', paticka: NOGA('SI-PODJEMNA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'naročnik', vpravo: 'podjemnik (izvajalec)' },
  slovo: { n: 'pogodba', g: 'pogodbe', a: 'pogodbo', l: 'pogodbi' },
  coDal: ['Natisnite pogodbo v dveh izvodih in oba podpišite.', 'Ob prevzemu delo preglejte in napake takoj pisno sporočite izvajalcu.', 'Predujem in končno plačilo nakažite na račun proti računu.'],
  kontrola: [
    'Delo opišite čim natančneje – obseg, material, kdo ga nabavi in do kdaj mora biti končano.',
    'Naročnik naj opravljeno delo pregleda, takoj ko je to mogoče, in o napakah brez odlašanja obvesti izvajalca (OZ, podjemna pogodba).',
    'Dogovorite fiksno ceno ali jasen način obračuna; dodatna dela dogovorite pisno.',
    'Za gradnjo in večja dela na stavbi veljajo posebna pravila (gradbena pogodba) in so lahko potrebna dovoljenja.',
    NASVET_IDENTITETA,
  ],
  zdroje: [OZ],
  kroky: [
    { id: 'stranki', nazev: 'Naročnik in izvajalec', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Naročnik – ime in priimek', placeholder: 'npr. Ana Kos', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Naslov naročnika', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Izvajalec – ime ali naziv (s. p., d. o. o.)', placeholder: 'npr. Pleskarstvo Kovač s. p.', sirka: 40 },
      { id: 'k_davcna', typ: 'text', popis: 'Davčna številka izvajalca', sirka: 12, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Naslov izvajalca', sirka: 46 },
    ] },
    { id: 'delo', nazev: 'Delo, cena in rok', pole: [
      { id: 'opis', typ: 'textarea', popis: 'Opis dela', placeholder: 'npr. pleskanje sten in stropov v stanovanju 60 m², dvakrat, bela barva', sirka: 64 },
      { id: 'kraj_dela', typ: 'text', popis: 'Kraj izvedbe', sirka: 46 },
      { id: 'material', typ: 'volba', popis: 'Material nabavi', moznosti: [ { hodnota: 'izvajalec', popis: 'izvajalec (vključeno v ceno)' }, { hodnota: 'narocnik', popis: 'naročnik' } ] },
      { id: 'cena', typ: 'castka', popis: 'Skupna cena (€)', sirka: 12, polovina: true },
      { id: 'predujem', typ: 'castka', popis: 'Predujem (€, neobvezno)', sirka: 12, polovina: true },
      { id: 'zacetek', typ: 'datum', popis: 'Začetek del', sirka: 14, polovina: true },
      { id: 'rok', typ: 'datum', popis: 'Rok dokončanja', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Kraj podpisa', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_z_besedo: (d) => znesekZBesedo(d.cena) },
  clanky: [
    { nadpis: 'Pogodbeni stranki', odstavce: ['**Naročnik:** {{p_jmeno}}, naslov {{p_adresa}}', '**Izvajalec:** {{k_jmeno}}, davčna številka {{k_davcna}}, naslov {{k_adresa}}'] },
    { nadpis: 'Predmet pogodbe', odstavce: ['Izvajalec se zavezuje opraviti naslednje delo: {{opis}}.', 'Kraj izvedbe: {{kraj_dela}}.', { volba: 'material', uvodVzor: 'Material (označite eno možnost):', moznosti: { izvajalec: 'Material nabavi izvajalec in je vključen v dogovorjeno ceno.', narocnik: 'Material nabavi naročnik na svoje stroške in ga pravočasno izroči izvajalcu.' } }] },
    { nadpis: 'Rok', odstavce: ['Izvajalec bo z deli začel dne {{zacetek}} in jih dokončal najpozneje do {{rok}}.', 'Če izvajalec dela ne dokonča v roku, mu naročnik lahko določi primeren dodatni rok, po njegovem izteku pa odstopi od pogodbe in zahteva povrnitev škode.'] },
    { nadpis: 'Cena in plačilo', odstavce: ['Dogovorjena cena za celotno delo znaša **{{cena}}** (z besedo: {{cena_z_besedo}}).', 'Naročnik plača predujem {{predujem}} ob podpisu pogodbe, ostanek pa v 8 dneh po prevzemu dela brez napak.', 'Dodatna dela, ki niso zajeta v tej pogodbi, se izvedejo in plačajo le po predhodnem pisnem dogovoru.'] },
    { nadpis: 'Prevzem in napake', odstavce: ['Naročnik bo opravljeno delo pregledal ob prevzemu in o ugotovljenih napakah brez odlašanja pisno obvestil izvajalca.', 'Izvajalec mora napake odpraviti na svoje stroške v primernem roku. Za odgovornost izvajalca za napake se uporabljajo določbe Obligacijskega zakonika o podjemni pogodbi.'] },
    { nadpis: 'Končne določbe', odstavce: ['Za vse, kar ni urejeno s to pogodbo, se uporablja Obligacijski zakonik.', 'Pogodba je sestavljena v dveh enakih izvodih, po enega za vsako stranko.'] },
  ],
};
