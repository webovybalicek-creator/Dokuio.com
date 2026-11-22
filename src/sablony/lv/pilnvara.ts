/** Pilnvara – Latvija (Civillikuma 2289. un turpm. p.). Darījumiem, kam vajadzīga notariāla forma vai notariāli apliecināts paraksts, arī pilnvarai jābūt notariālai. */
import type { Sablona } from '../typy';
import { CL, PAD_PERSONA, KAJENE } from './avoti';

export const pilnvara: Sablona = {
  kod: 'LV-PILNVARA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Pilnvara', podnadpis: 'fiziskas personas pilnvara pārstāvībai (Civillikuma 2289. un turpmākie panti)',
  souborPdf: 'pilnvara', paticka: KAJENE('LV-PILNVARA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'pilnvaras devējs', vpravo: 'pilnvarnieks (pēc izvēles)' },
  cislovatClanky: false,
  slovo: { n: 'pilnvara', g: 'pilnvaras', a: 'pilnvaru', l: 'pilnvarā' },
  coDal: ['Parakstiet pilnvaru ar roku vai ar drošu elektronisko parakstu (eParaksts).', 'Nododiet pilnvaru pilnvarniekam; viņam to vajadzēs kopā ar savu personu apliecinošo dokumentu.'],
  kontrola: [
    'Ja darījumam vajadzīga notariāla forma vai notariāli apliecināts paraksts (piem., nekustamā īpašuma nostiprināšana zemesgrāmatā), arī pilnvarai jābūt notariālai.',
    'Aprakstiet konkrēti, ko pilnvarnieks drīkst darīt, un nosakiet pilnvaras derīguma termiņu.',
    'Bankas, CSDD un citas iestādes var prasīt notariāli apliecinātu pilnvaru vai savu veidlapu – pārbaudiet iepriekš.',
    'Pilnvaru var jebkurā laikā atsaukt – par atsaukumu paziņojiet pilnvarniekam un iestādēm, kur pilnvara iesniegta.',
    PAD_PERSONA,
  ],
  zdroje: [CL],
  kroky: [
    { id: 'personas', nazev: 'Kas kuru pilnvaro', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Pilnvaras devējs – vārds, uzvārds', placeholder: 'piem., Anna Kalniņa', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Personas kods', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adrese', sirka: 46 },
      { id: 'z_jmeno', typ: 'text', popis: 'Pilnvarnieks – vārds, uzvārds', placeholder: 'piem., Jānis Bērziņš', sirka: 34 },
      { id: 'z_ik', typ: 'text', popis: 'Personas kods', sirka: 14, polovina: true },
      { id: 'z_adresa', typ: 'text', popis: 'Adrese', sirka: 46 },
    ] },
    { id: 'apjoms', nazev: 'Ko drīkst darīt', pole: [
      { id: 'darbibas', typ: 'textarea', popis: 'Darbības', napoveda: 'Jo konkrētāk, jo labāk. Transportlīdzeklim ierakstiet reģistrācijas numuru un VIN.', placeholder: 'piem., saņemt manā vārdā pasta sūtījumus Latvijas Pasta nodaļā', sirka: 64 },
      { id: 'parpilnvarojums', typ: 'volba', popis: 'Vai drīkst pārpilnvarot trešo personu?', moznosti: [ { hodnota: 'ne', popis: 'Nē' }, { hodnota: 'ja', popis: 'Jā' } ] },
      { id: 'lidz', typ: 'datum', popis: 'Derīga līdz', napoveda: 'Ja atstāsiet tukšu, pilnvara ir derīga līdz atsaukšanai.', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Pilnvara', odstavce: [
    'Es, **{{p_jmeno}}**, personas kods {{p_ik}}, adrese {{p_adresa}},',
    'pilnvaroju **{{z_jmeno}}**, personas kods {{z_ik}}, adrese {{z_adresa}},',
    'manā vārdā veikt šādas darbības: {{darbibas}}',
    'Šim nolūkam pilnvarnieks var iesniegt iesniegumus, parakstīt nepieciešamos dokumentus un manā vārdā saņemt dokumentus.',
    { volba: 'parpilnvarojums', uvodVzor: 'Pārpilnvarojums (atzīmējiet vienu variantu):', moznosti: { ne: 'Pilnvarnieks nedrīkst pārpilnvarot trešo personu.', ja: 'Pilnvarnieks drīkst pārpilnvarot trešo personu.' } },
    'Pilnvara ir derīga līdz {{lidz}} vai līdz tās atsaukšanai.',
  ] }],
};
