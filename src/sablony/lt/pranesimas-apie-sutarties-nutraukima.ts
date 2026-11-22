/** Pranešimas apie sutarties nutraukimą – Lietuva. Paslaugų, prenumeratos ar narystės sutarties nutraukimas pagal sutarties sąlygas. */
import type { Sablona } from '../typy';
import { CK, PORASTE } from './saltiniai';

export const sutartiesNutraukimas: Sablona = {
  kod: 'LT-NUTRAUKIMAS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Pranešimas apie sutarties nutraukimą', podnadpis: 'paslaugų, prenumeratos ar narystės sutarties nutraukimas',
  souborPdf: 'pranesimas-apie-sutarties-nutraukima', paticka: PORASTE('LT-NUTRAUKIMAS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'klientas', vpravo: '' },
  cislovatClanky: false,
  slovo: { n: 'pranešimas', g: 'pranešimo', a: 'pranešimą', l: 'pranešime' },
  pripominky: (d) => (typeof d.beigas === 'string' && d.beigas ? [{ nazev: 'Sutarties pabaiga', datum: d.beigas, popis: 'Patikrinkite, ar po šios datos nebeišrašomos sąskaitos.' }] : []),
  coDal: ['Siųskite pranešimą el. paštu, savitarnos portale arba registruotu laišku.', 'Paprašykite patvirtinti pranešimą ir sutarties pabaigos datą.', 'Automatinius mokėjimus atšaukite tik sumokėję paskutinę sąskaitą.'],
  kontrola: [
    'Sutartyje ar bendrosiose sąlygose patikrinkite įspėjimo terminą ir galimą minimalų sutarties terminą.',
    'Terminuotos sutarties nutraukimas prieš terminą gali reikšti netesybas ar nuolaidos grąžinimą – perskaitykite sąlygas.',
    'Išsaugokite įrodymą, kad ir kada pranešimas buvo įteiktas.',
    'Jei sutartis sudaryta internetu ar ne prekybos patalpose prieš mažiau nei 14 dienų, geriau pasinaudokite teise atsisakyti sutarties.',
  ],
  zdroje: [CK],
  kroky: [{ id: 'duomenys', nazev: 'Klientas ir sutartis', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Vardas, pavardė', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Adresas', sirka: 46 },
    { id: 'p_kontakts', typ: 'text', popis: 'El. paštas arba telefonas', sirka: 30 },
    { id: 'k_jmeno', typ: 'text', popis: 'Paslaugų teikėjas', placeholder: 'pvz., UAB „Sporto klubas“', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Paslaugų teikėjo adresas', sirka: 46 },
    { id: 'ligums', typ: 'text', popis: 'Sutartis / kliento numeris', placeholder: 'pvz., narystės sutartis Nr. 12345, 2025-02-01', sirka: 46 },
    { id: 'beigas', typ: 'datum', popis: 'Sutartis baigiasi', napoveda: 'Atsižvelkite į sutartyje nustatytą įspėjimo terminą.', sirka: 14, polovina: true },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Pranešimas apie sutarties nutraukimą', odstavce: [
    '**Siuntėjas:** {{p_jmeno}}, {{p_adresa}}, {{p_kontakts}}',
    '**Adresatas:** {{k_jmeno}}, {{k_adresa}}',
    'Nutraukiu sutartį: {{ligums}}.',
    'Prašau nutraukti sutartį {{beigas}} arba, jei sutartyje nustatytas įspėjimo terminas baigiasi vėliau, šio termino pabaigoje.',
    'Prašau raštu patvirtinti pranešimo gavimą ir sutarties pabaigos datą. Po pabaigos dienos prašau man nebeišrašyti sąskaitų.',
  ] }],
};
