/** Kustamas lietas pirkuma līgums starp privātpersonām – Latvija (Civillikuma 2002. un turpm. p.). */
import type { Sablona } from '../typy';
import { summaVardiem } from './skaitli';
import { CL, PAD_PERSONA, PAD_SKAIDRA, KAJENE } from './avoti';

export const pirkumaLigums: Sablona = {
  kod: 'LV-PIRKUMS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Pirkuma līgums', podnadpis: 'kustamas lietas pārdošana starp privātpersonām (Civillikuma 2002. un turpmākie panti)',
  souborPdf: 'pirkuma-ligums', paticka: KAJENE('LV-PIRKUMS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'pārdevējs', vpravo: 'pircējs' },
  slovo: { n: 'līgums', g: 'līguma', a: 'līgumu', l: 'līgumā' },
  coDal: ['Izdrukājiet līgumu divos eksemplāros un parakstiet abus.', 'Nododiet lietu kopā ar piederumiem un dokumentiem.'],
  kontrola: [
    'Aprakstiet lietu precīzi (marka, modelis, sērijas numurs, piederumi).',
    'Ierakstiet visus zināmos defektus – par defektiem, par kuriem pircējs zināja, pārdevējs neatbild.',
    'Pārdevējs atbild par slēptiem trūkumiem, par kuriem viņš zināja un kurus noklusēja – esiet godīgi.',
    PAD_PERSONA,
    PAD_SKAIDRA,
  ],
  zdroje: [CL],
  kroky: [
    { id: 'puses', nazev: 'Pārdevējs un pircējs', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Pārdevējs – vārds, uzvārds', placeholder: 'piem., Anna Kalniņa', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Pārdevēja adrese', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Pircējs – vārds, uzvārds', placeholder: 'piem., Jānis Bērziņš', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Pircēja adrese', sirka: 46 },
    ] },
    { id: 'lieta', nazev: 'Lieta un cena', pole: [
      { id: 'vec', typ: 'textarea', popis: 'Lietas apraksts', placeholder: 'piem., elektrovelosipēds Cube Kathmandu, sērijas numurs WCU123456, ar lādētāju', sirka: 64 },
      { id: 'stavoklis', typ: 'text', popis: 'Stāvoklis un zināmie defekti', placeholder: 'piem., lietots, skrāpējums uz rāmja', sirka: 56 },
      { id: 'cena', typ: 'castka', popis: 'Cena (eiro)', sirka: 12, polovina: true },
      { id: 'samaksa', typ: 'volba', popis: 'Samaksa', moznosti: [ { hodnota: 'skaidra', popis: 'skaidrā naudā, parakstot' }, { hodnota: 'banka', popis: 'ar bankas pārskaitījumu' } ] },
      { id: 'iban', typ: 'text', popis: 'Pārdevēja IBAN', placeholder: 'LV80 BANK 0000 4351 9500 1', sirka: 30, zobrazitKdyz: { pole: 'samaksa', je: 'banka' } },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_vardiem: (d) => summaVardiem(d.cena) },
  clanky: [
    { nadpis: 'Puses', odstavce: ['**Pārdevējs:** {{p_jmeno}}, adrese {{p_adresa}}', '**Pircējs:** {{k_jmeno}}, adrese {{k_adresa}}'] },
    { nadpis: 'Līguma priekšmets', odstavce: ['Pārdevējs pārdod un pircējs pērk šādu lietu: {{vec}}.', 'Stāvoklis un zināmie defekti: {{stavoklis}}. Pircējs ir apskatījis lietu un pērk to esošajā stāvoklī.', 'Pārdevējs apliecina, ka lieta pieder viņam un uz to nav trešo personu tiesību.'] },
    { nadpis: 'Cena', odstavce: ['Cena ir **{{cena}}** (vārdiem: {{cena_vardiem}}).', { volba: 'samaksa', uvodVzor: 'Samaksa (atzīmējiet vienu variantu):', moznosti: { skaidra: 'Pircējs samaksāja cenu skaidrā naudā, parakstot līgumu; pārdevējs ar savu parakstu apliecina naudas saņemšanu.', banka: 'Pircējs pārskaita cenu uz pārdevēja kontu IBAN {{iban}}. Lieta tiek nodota pēc summas saņemšanas.' } }] },
    { nadpis: 'Nodošana un noslēguma noteikumi', odstavce: ['Ar nodošanu pircējs kļūst par lietas īpašnieku, un uz viņu pāriet lietas nejaušas bojāejas risks.', 'Jautājumos, kas nav noregulēti līgumā, piemēro Civillikuma noteikumus par pirkuma līgumu. Līgums sagatavots divos vienādos eksemplāros.'] },
  ],
};
