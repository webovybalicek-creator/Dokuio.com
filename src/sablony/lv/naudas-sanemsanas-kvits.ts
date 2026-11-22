/** Kvīts par naudas saņemšanu – Latvija. Skaidras naudas maksājuma apliecinājums starp privātpersonām. */
import type { Sablona } from '../typy';
import { summaVardiem } from './skaitli';
import { CL, PAD_SKAIDRA, KAJENE } from './avoti';

export const kvits: Sablona = {
  kod: 'LV-KVITS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Kvīts par naudas saņemšanu', podnadpis: 'skaidras naudas maksājuma apliecinājums starp privātpersonām',
  souborPdf: 'naudas-sanemsanas-kvits', paticka: KAJENE('LV-KVITS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'naudas saņēmējs', vpravo: 'maksātājs (pēc izvēles)' },
  cislovatClanky: false,
  slovo: { n: 'kvīts', g: 'kvīts', a: 'kvīti', l: 'kvītī' },
  coDal: ['Kvīti patur tas, kurš maksāja – ar to viņš pierāda samaksu.', 'Ja maksājums attiecas uz transportlīdzekli vai lietu, kvītī atsaucieties uz līgumu.'],
  kontrola: [
    'Saistību izpildītājs var prasīt no saņēmēja rakstveida apliecinājumu (kvīti) par izpildi.',
    'Ierakstiet, par ko maksājat (cena, aizdevums, drošības nauda, avanss), lai būtu skaidrs, kas tika samaksāts.',
    PAD_SKAIDRA,
  ],
  zdroje: [CL],
  kroky: [{ id: 'maksajums', nazev: 'Maksājums', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Naudas saņēmējs – vārds, uzvārds', placeholder: 'piem., Anna Kalniņa', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Saņēmēja adrese', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Maksātājs – vārds, uzvārds', placeholder: 'piem., Jānis Bērziņš', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Maksātāja adrese', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Summa (eiro)', sirka: 12, polovina: true },
    { id: 'pamats', typ: 'text', popis: 'Maksājuma pamatojums', placeholder: 'piem., transportlīdzekļa cena saskaņā ar 22.11.2026. līgumu', sirka: 56 },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_vardiem: (d) => summaVardiem(d.castka) },
  clanky: [{ nadpis: 'Kvīts', odstavce: [
    'Es, **{{p_jmeno}}**, adrese {{p_adresa}}, apliecinu, ka no {{k_jmeno}}, adrese {{k_adresa}}, esmu saņēmis(-usi) skaidrā naudā **{{castka}}** (vārdiem: {{castka_vardiem}}).',
    'Maksājuma pamatojums: {{pamats}}.',
  ] }],
};
