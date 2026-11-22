/** Eluruumi üleandmise-vastuvõtmise akt – Eesti. Arvestite näidud, võtmed ja seisukord üüri alguses ja lõpus. */
import type { Sablona } from '../typy';
import { VOS, JALUS } from './allikad';

export const eluruumiAkt: Sablona = {
  kod: 'EE-AKT-ELURUUM', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Eluruumi üleandmise-vastuvõtmise akt', podnadpis: 'eluruumi seisukord, arvestid ja võtmed',
  souborPdf: 'eluruumi-uleandmise-akt', paticka: JALUS('EE-AKT-ELURUUM'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'üürileandja', vpravo: 'üürnik' },
  cislovatClanky: false,
  slovo: { n: 'akt', g: 'akti', a: 'akti', l: 'aktis' },
  prevzit: { kod: 'EE-UUR', nazev: 'eluruumi üürileping', mapuj: (d) => ({ p_jmeno: d.p_jmeno, k_jmeno: d.k_jmeno, byt: d.byt, misto: d.misto }) },
  coDal: ['Kumbki pool hoiab alles ühe eksemplari.', 'Pildistage arvesteid ja iga ruumi.', 'Teatage arvestite näidud teenuseosutajatele.'],
  kontrola: [
    'Kirjutage üleandmise päeval üles kõigi arvestite (elekter, vesi, gaas, soojus) näidud.',
    'Märkige olemasolevad kahjustused ja sisustus – see aitab üüri lõpus tagatise tagastamisel.',
    'Tavapärase kulumise kõrvaldamist (nt seinte värvimine) saab üürnikult nõuda ainult siis, kui see on üürilepingus kokku lepitud; hooletusest tekkinud kahjustuste eest vastutab üürnik.',
  ],
  zdroje: [VOS],
  kroky: [
    { id: 'pooled', nazev: 'Pooled ja eluruum', pole: [
      { id: 'liik', typ: 'volba', popis: 'Millal akt koostatakse', moznosti: [ { hodnota: 'algus', popis: 'üüri alguses (üleandmine üürnikule)' }, { hodnota: 'lopp', popis: 'üüri lõpus (tagastamine üürileandjale)' } ] },
      { id: 'p_jmeno', typ: 'text', popis: 'Üürileandja – ees- ja perekonnanimi', sirka: 34 },
      { id: 'k_jmeno', typ: 'text', popis: 'Üürnik – ees- ja perekonnanimi', sirka: 34 },
      { id: 'byt', typ: 'text', popis: 'Eluruumi aadress', sirka: 46 },
    ] },
    { id: 'seisukord', nazev: 'Arvestid, võtmed, seisukord', pole: [
      { id: 'elekter', typ: 'text', popis: 'Elektriarvesti', placeholder: 'nt 012345 kWh', sirka: 18, polovina: true },
      { id: 'vesi', typ: 'text', popis: 'Veearvesti', placeholder: 'nt 234,5 m³', sirka: 18, polovina: true },
      { id: 'gaas', typ: 'text', popis: 'Gaasi- või soojusarvesti', sirka: 18, polovina: true },
      { id: 'votmed', typ: 'text', popis: 'Võtmed', placeholder: 'nt 2 välisukse võtit, 1 postkasti võti', sirka: 40 },
      { id: 'sisustus', typ: 'textarea', popis: 'Sisustus', placeholder: 'nt külmik, pliit, pesumasin, diivan', sirka: 56 },
      { id: 'kahjustused', typ: 'textarea', popis: 'Kahjustused ja märkused', placeholder: 'nt plekk elutoa seinal', sirka: 56 },
      { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Akt', odstavce: [
    '**Üürileandja:** {{p_jmeno}} · **Üürnik:** {{k_jmeno}}',
    { volba: 'liik', uvodVzor: 'Akt koostatakse (märkige üks variant):', moznosti: { algus: 'Üürileandja annab üle ja üürnik võtab vastu eluruumi aadressil {{byt}}.', lopp: 'Üürnik tagastab ja üürileandja võtab vastu eluruumi aadressil {{byt}}.' } },
    'Arvestite näidud – elekter: {{elekter}}, vesi: {{vesi}}, gaas/soojus: {{gaas}}.',
    'Üle antud võtmed: {{votmed}}.',
    'Sisustus: {{sisustus}}',
    'Kahjustused ja märkused: {{kahjustused}}',
    'Pooled kinnitavad, et eluruumi seisukord vastab eespool kirjeldatule.',
  ] }],
};
