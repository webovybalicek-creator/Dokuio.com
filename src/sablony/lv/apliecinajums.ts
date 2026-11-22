/** Apliecinājums – Latvija. Vispārīgs rakstveida apliecinājums par faktiem. */
import type { Sablona } from '../typy';
import { CL, KAJENE } from './avoti';

export const apliecinajums: Sablona = {
  kod: 'LV-APLIECINAJUMS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Apliecinājums', podnadpis: 'rakstveida apliecinājums par faktiem',
  souborPdf: 'apliecinajums', paticka: KAJENE('LV-APLIECINAJUMS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'apliecinātājs', vpravo: '' },
  cislovatClanky: false,
  slovo: { n: 'apliecinājums', g: 'apliecinājuma', a: 'apliecinājumu', l: 'apliecinājumā' },
  coDal: ['Parakstiet apliecinājumu ar roku vai ar drošu elektronisko parakstu (eParaksts).', 'Iesniedziet apliecinājumu iestādei vai personai, kas to prasīja, un saglabājiet kopiju.'],
  kontrola: [
    'Rakstiet tikai patiesus faktus – apzināti nepatiesu ziņu sniegšana var radīt atbildību.',
    'Pārbaudiet, vai iestāde neprasa noteiktu veidlapu vai notariāli apliecinātu parakstu; dažām darbībām vienkāršs apliecinājums nepietiek.',
    'Ar drošu elektronisko parakstu parakstīts dokuments ir līdzvērtīgs ar roku parakstītam.',
  ],
  zdroje: [CL],
  kroky: [{ id: 'dati', nazev: 'Apliecinātājs un saturs', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Vārds, uzvārds', sirka: 34, autocomplete: 'name' },
    { id: 'p_ik', typ: 'text', popis: 'Personas kods', sirka: 14, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Adrese', sirka: 46 },
    { id: 'kam', typ: 'text', popis: 'Kam apliecinājums tiek iesniegts (pēc izvēles)', placeholder: 'piem., Rīgas valstspilsētas pašvaldība', sirka: 40 },
    { id: 'saturs', typ: 'textarea', popis: 'Ko apliecināt', placeholder: 'piem., ka no 01.03.2026. dzīvoju adresē … un kopā ar mani dzīvo …', sirka: 64 },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Apliecinājums', odstavce: [
    'Es, **{{p_jmeno}}**, personas kods {{p_ik}}, dzīvesvieta {{p_adresa}}, apliecinu:',
    '{{saturs}}',
    'Apliecinājums tiek iesniegts: {{kam}}.',
    'Apliecinu, ka sniegtās ziņas ir patiesas un pilnīgas, un esmu informēts(-a), ka par nepatiesu ziņu sniegšanu var iestāties atbildība.',
  ] }],
};
