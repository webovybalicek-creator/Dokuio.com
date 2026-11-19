/** Tartozáselismerő nyilatkozat – Magyarország. Ptk. tartozáselismerés (bizonyítási teher az elismerőn); az elismerés megszakítja az elévülést (Ptk. 6:25. § (1) a)), elévülés 5 év (6:22. §). */
import type { Sablona } from '../typy';
import { osszegBetuvel } from './szamok';
import { pripominkySplatek, splatky, isoDatum } from '../terminy';
import { formatCislo, formatDatum } from '../dokument';
import { PTK, PP, TIP_SZEMELYAZONOSSAG, TIP_TANUK } from './forrasok';

const ft = (n: number) => `${formatCislo(String(n))} Ft`;

export const tartozaselismeres: Sablona = {
  kod: 'HU-TARTOZASELISMERES',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Tartozáselismerő nyilatkozat',
  podnadpis: 'a Polgári Törvénykönyv tartozáselismerésre vonatkozó szabályai alapján',
  souborPdf: 'tartozaselismero-nyilatkozat',
  paticka: 'Ingyenesen készült · HU-TARTOZASELISMERES v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek, ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'adós', vpravo: 'hitelező (tudomásul vettem)' },
  cislovatClanky: false,
  slovo: { n: 'nyilatkozat', g: 'nyilatkozat', a: 'nyilatkozatot', l: 'nyilatkozatban' },
  coDal: ['Az adós írja alá; a hitelező őrizze meg az eredetit.', 'A részletek befizetéséről kérjen és adjon nyugtát.'],
  prilohy: (d) => {
    if (d.fizetes !== 'reszlet') return [];
    const s = splatky(d);
    if (!s.length) return [];
    return [
      {
        nadpis: '1. számú melléklet · Törlesztési ütemterv',
        hlavicka: ['Részlet', 'Esedékes', 'Összeg', 'Hátralék'],
        radky: s.map((x) => [`${x.poradi}.`, formatDatum(isoDatum(x.datum), 'hu'), ft(x.castka), ft(x.zbyva)]),
        vpravo: [2, 3],
      },
    ];
  },
  pripominky: (d) => (d.fizetes === 'reszlet' ? pripominkySplatek(d, 'Részlet', 'Ft', { celkem: (n) => `összesen ${n} részlet`, posledni: 'utolsó' }) : []),
  kontrola: [
    'Az elismerés után az adósnak kell bizonyítania, ha a tartozás mégsem áll fenn.',
    'A tartozás elismerése megszakítja az elévülést – az 5 éves elévülési idő újra kezdődik.',
    'Írja le pontosan, miből ered a tartozás (pl. „a 2026. 03. 01-jén kelt kölcsönszerződés”).',
    TIP_TANUK.replace(' – a forgalmi átíráshoz ez kell', ' – vita esetén ez erősebb bizonyíték'),
    TIP_SZEMELYAZONOSSAG,
  ],
  zdroje: [PTK, PP],
  kroky: [
    {
      id: 'felek',
      nazev: 'Adós és hitelező',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Adós neve', napoveda: 'Aki tartozik és a nyilatkozatot aláírja.', sirka: 34, autocomplete: 'name' },
        { id: 'p_szul', typ: 'text', popis: 'Születési hely, idő', sirka: 26, polovina: true },
        { id: 'p_anyja', typ: 'text', popis: 'Anyja neve', sirka: 26, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Lakcím', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Hitelező neve', sirka: 34 },
        { id: 'k_adresa', typ: 'text', popis: 'Hitelező lakcíme', sirka: 46 },
      ],
    },
    {
      id: 'tartozas',
      nazev: 'Tartozás és fizetés',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'A tartozás összege (Ft)', sirka: 14, polovina: true },
        { id: 'jogcim', typ: 'text', popis: 'A tartozás jogcíme', placeholder: 'pl. 2026. 03. 01-jén kelt kölcsönszerződés', sirka: 56 },
        {
          id: 'fizetes',
          typ: 'volba',
          popis: 'Hogyan fizeti meg',
          moznosti: [
            { hodnota: 'egyben', popis: 'Egy összegben' },
            { hodnota: 'reszlet', popis: 'Havi részletekben' },
          ],
        },
        { id: 'hatarido', typ: 'datum', popis: 'Fizetési határidő', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'fizetes', je: 'egyben' } },
        { id: 'splatka', typ: 'castka', popis: 'Havi részlet (Ft)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'fizetes', je: 'reszlet' } },
        { id: 'splatka_den', typ: 'cislo', popis: 'A hónap napja', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'fizetes', je: 'reszlet' } },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Az első részlet hónapja', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'fizetes', je: 'reszlet' } },
        { id: 'ucet', typ: 'text', popis: 'Hitelező bankszámlaszáma', sirka: 32 },
        { id: 'misto', typ: 'text', popis: 'Helység', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Kelte', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: {
    osszeg_betuvel: (d) => osszegBetuvel(d.castka),
    elso_honap: (d) => {
      const m = /^(\d{4})-(\d{2})/.exec(typeof d.prvni_splatka === 'string' ? d.prvni_splatka : '');
      return m ? `${m[1]}. ${m[2]}.` : '';
    },
  },
  clanky: [
    {
      nadpis: 'Nyilatkozat',
      odstavce: [
        'Alulírott **{{p_jmeno}}** (születési hely, idő: {{p_szul}}, anyja neve: {{p_anyja}}, lakcím: {{p_adresa}}) mint adós',
        'elismerem, hogy **{{k_jmeno}}** (lakcím: {{k_adresa}}) hitelezőnek **{{castka}}**, azaz {{osszeg_betuvel}} összeggel tartozom. A tartozás jogcíme: {{jogcim}}.',
        {
          volba: 'fizetes',
          uvodVzor: 'Fizetés (egy lehetőséget jelöljön meg):',
          moznosti: {
            egyben: 'A tartozást egy összegben legkésőbb {{hatarido}} napjáig megfizetem.',
            reszlet: 'A tartozást havi {{splatka}} részletekben, minden hónap {{splatka_den}}. napjáig, {{elso_honap}} hónaptól a teljes megfizetésig fizetem meg. Két részlet elmaradása esetén a teljes hátralék egy összegben esedékessé válik.',
          },
        },
        'A fizetés a hitelező {{ucet}} számú bankszámlájára vagy készpénzben, nyugta ellenében történik.',
      ],
    },
  ],
};
