/** Lakás átadás-átvételi jegyzőkönyv – Magyarország. Mérőóra-állások, kulcsok, állapot – a bérlet kezdetén és végén. */
import type { Sablona } from '../typy';
import { LTV, PTK } from './forrasok';

export const lakasJegyzokonyv: Sablona = {
  kod: 'HU-LAKAS-JEGYZOKONYV',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Lakás átadás-átvételi jegyzőkönyv',
  podnadpis: 'bérlakás átadásáról vagy visszaadásáról',
  souborPdf: 'lakas-atadas-atveteli-jegyzokonyv',
  paticka: 'Ingyenesen készült · HU-LAKAS-JEGYZOKONYV v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek, ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'bérbeadó', vpravo: 'bérlő' },
  cislovatClanky: false,
  slovo: { n: 'jegyzőkönyv', g: 'jegyzőkönyv', a: 'jegyzőkönyvet', l: 'jegyzőkönyvben' },
  coDal: ['Nyomtassa ki két példányban, és mindketten írják alá.', 'Fényképezzék le a mérőórákat és a sérüléseket – a képeket őrizzék meg az óvadék elszámolásáig.'],
  kontrola: [
    'A mérőórák állását együtt olvassák le, és fényképezzék le.',
    'A sérüléseket konkrétan írják le (hol, mekkora) – ez dönti el, mit lehet levonni az óvadékból.',
    'A kulcsok számát (lakás, kapu, postaláda) pontosan írják fel.',
  ],
  zdroje: [LTV, PTK],
  prevzit: {
    kod: 'HU-LAKASBERLET',
    nazev: 'a lakásbérleti szerződésből',
    mapuj: (d) => ({ b_nev: d.b_nev, l_nev: d.l_nev, lakas_cim: d.lakas_cim, datum: d.kezdet, misto: d.misto }),
  },
  kroky: [
    {
      id: 'alap',
      nazev: 'Felek és lakás',
      pole: [
        {
          id: 'irany',
          typ: 'volba',
          popis: 'Milyen átadás',
          moznosti: [
            { hodnota: 'kezdet', popis: 'A bérlet kezdetén (beköltözés)' },
            { hodnota: 'veg', popis: 'A bérlet végén (kiköltözés)' },
          ],
        },
        { id: 'b_nev', typ: 'text', popis: 'Bérbeadó neve', sirka: 34, autocomplete: 'name' },
        { id: 'l_nev', typ: 'text', popis: 'Bérlő neve', sirka: 34 },
        { id: 'lakas_cim', typ: 'text', popis: 'A lakás címe', sirka: 46 },
      ],
    },
    {
      id: 'allapot',
      nazev: 'Mérőórák, kulcsok, állapot',
      pole: [
        { id: 'villany', typ: 'text', popis: 'Villanyóra', placeholder: 'gyári szám, állás kWh', sirka: 24, polovina: true },
        { id: 'gaz', typ: 'text', popis: 'Gázóra', placeholder: 'gyári szám, állás m³', sirka: 24, polovina: true },
        { id: 'viz', typ: 'text', popis: 'Vízóra', placeholder: 'hideg / meleg, m³', sirka: 24, polovina: true },
        { id: 'futes', typ: 'text', popis: 'Hőmennyiségmérő (ha van)', sirka: 24, polovina: true },
        { id: 'kulcsok', typ: 'text', popis: 'Kulcsok', placeholder: 'pl. 2 lakáskulcs, 1 kapukulcs, 1 postaláda', sirka: 46 },
        { id: 'allapot', typ: 'textarea', popis: 'A lakás és a berendezés állapota, sérülések', placeholder: 'pl. konyha: karcos munkalap; fürdő: repedt csempe a mosdó fölött', sirka: 64 },
        { id: 'misto', typ: 'text', popis: 'Helység', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Az átadás napja', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Adatok',
      odstavce: [
        {
          volba: 'irany',
          uvodVzor: 'Az átadás jellege (egy lehetőséget jelöljön meg):',
          moznosti: {
            kezdet: 'A bérbeadó átadja, a bérlő átveszi a lakást a bérlet kezdetén.',
            veg: 'A bérlő visszaadja, a bérbeadó visszaveszi a lakást a bérlet végén.',
          },
        },
        '**Bérbeadó:** {{b_nev}} · **Bérlő:** {{l_nev}}',
        '**A lakás címe:** {{lakas_cim}}',
      ],
    },
    {
      nadpis: 'Mérőórák',
      odstavce: ['Villany: {{villany}}', 'Gáz: {{gaz}}', 'Víz: {{viz}}', 'Hőmennyiségmérő: {{futes}}'],
    },
    {
      nadpis: 'Kulcsok és állapot',
      odstavce: [
        'Átadott kulcsok: {{kulcsok}}',
        'A lakás és a berendezés állapota, sérülések: {{allapot}}',
        'A felek a fentieket közösen megállapították, és aláírásukkal elfogadják.',
      ],
    },
  ],
};
