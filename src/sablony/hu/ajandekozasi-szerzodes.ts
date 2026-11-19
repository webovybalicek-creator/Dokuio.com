/** Ajándékozási szerződés (pénz vagy ingóság) – Magyarország. Ptk. ajándékozás; ajándékozási illeték (Itv.), egyenes ági rokonok és házastársak között mentes. */
import type { Sablona } from '../typy';
import { osszegBetuvel } from './szamok';
import { PTK, ITV, NAV, TIP_SZEMELYAZONOSSAG } from './forrasok';

export const ajandekozasiSzerzodes: Sablona = {
  kod: 'HU-AJANDEKOZAS',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Ajándékozási szerződés',
  podnadpis: 'a Polgári Törvénykönyvről szóló 2013. évi V. törvény ajándékozási szerződésre vonatkozó szabályai alapján',
  souborPdf: 'ajandekozasi-szerzodes',
  paticka: 'Ingyenesen készült · HU-AJANDEKOZAS v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek, ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'ajándékozó', vpravo: 'megajándékozott' },
  slovo: { n: 'szerződés', g: 'szerződés', a: 'szerződést', l: 'szerződésben' },
  coDal: ['Nyomtassa ki két példányban, mindketten írják alá mindkettőt.', 'Pénz ajándékozásakor használjon átutalást – így az ajándékozás tényét is igazolja.'],
  kontrola: [
    'Az ajándékozás főszabály szerint ajándékozási illeték alá esik. Egyenes ági rokonok (szülő, gyermek, nagyszülő, unoka) és házastársak közötti ajándékozás illetékmentes – a részleteket és a bejelentési szabályokat nézze meg a [NAV](https://nav.gov.hu/) tájékoztatójában.',
    'Ingatlan ajándékozásához ügyvédi ellenjegyzés kell – erre ez a minta nem alkalmas.',
    'Gépjármű ajándékozásakor a forgalmi átíráshoz két tanú aláírása is szükséges.',
    TIP_SZEMELYAZONOSSAG,
  ],
  zdroje: [PTK, ITV, NAV],
  kroky: [
    {
      id: 'felek',
      nazev: 'Felek',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Ajándékozó neve', sirka: 34, autocomplete: 'name' },
        { id: 'p_szul', typ: 'text', popis: 'Születési hely, idő', sirka: 26, polovina: true },
        { id: 'p_anyja', typ: 'text', popis: 'Anyja neve', sirka: 26, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Lakcím', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Megajándékozott neve', sirka: 34 },
        { id: 'k_szul', typ: 'text', popis: 'Születési hely, idő', sirka: 26, polovina: true },
        { id: 'k_anyja', typ: 'text', popis: 'Anyja neve', sirka: 26, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Lakcím', sirka: 46 },
        { id: 'rokonsag', typ: 'text', popis: 'Rokoni kapcsolat (nem kötelező)', placeholder: 'pl. a megajándékozott az ajándékozó gyermeke', sirka: 40 },
      ],
    },
    {
      id: 'ajandek',
      nazev: 'Ajándék',
      pole: [
        {
          id: 'tipus',
          typ: 'volba',
          popis: 'Mit ajándékoz',
          moznosti: [
            { hodnota: 'penz', popis: 'Pénzt' },
            { hodnota: 'dolog', popis: 'Dolgot (ingóságot)' },
          ],
        },
        { id: 'castka', typ: 'castka', popis: 'Összeg (Ft)', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'tipus', je: 'penz' } },
        { id: 'dolog', typ: 'textarea', popis: 'A dolog leírása', placeholder: 'pl. Samsung televízió, gyári szám …', sirka: 60, zobrazitKdyz: { pole: 'tipus', je: 'dolog' } },
        { id: 'ertek', typ: 'castka', popis: 'A dolog becsült értéke (Ft)', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'tipus', je: 'dolog' } },
        {
          id: 'atadas',
          typ: 'volba',
          popis: 'Átadás',
          moznosti: [
            { hodnota: 'mar', popis: 'Az aláíráskor átadva' },
            { hodnota: 'kesobb', popis: 'Később, adott napig' },
          ],
        },
        { id: 'atadas_datum', typ: 'datum', popis: 'Átadás legkésőbb', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'atadas', je: 'kesobb' } },
        { id: 'misto', typ: 'text', popis: 'Helység', sirka: 18, polovina: true },
        { id: 'datum_podpisu', typ: 'datum', popis: 'A szerződés kelte', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { osszeg_betuvel: (d) => osszegBetuvel(d.castka) },
  clanky: [
    {
      nadpis: 'Szerződő felek',
      odstavce: [
        '**Ajándékozó:** {{p_jmeno}}, születési hely, idő: {{p_szul}}, anyja neve: {{p_anyja}}, lakcím: {{p_adresa}}',
        '**Megajándékozott:** {{k_jmeno}}, születési hely, idő: {{k_szul}}, anyja neve: {{k_anyja}}, lakcím: {{k_adresa}}',
        'A felek rokoni kapcsolata: {{rokonsag}}',
      ],
    },
    {
      nadpis: 'Az ajándék',
      vysvetleni: 'Mit kap a megajándékozott, ellenszolgáltatás nélkül.',
      odstavce: [
        {
          volba: 'tipus',
          uvodVzor: 'Az ajándék (egy lehetőséget jelöljön meg):',
          moznosti: {
            penz: 'Az ajándékozó ingyenesen a megajándékozott tulajdonába adja a következő pénzösszeget: {{castka}}, azaz {{osszeg_betuvel}}.',
            dolog: 'Az ajándékozó ingyenesen a megajándékozott tulajdonába adja a következő dolgot: {{dolog}} (becsült értéke: {{ertek}}).',
          },
        },
        'A megajándékozott az ajándékot köszönettel elfogadja.',
        {
          volba: 'atadas',
          uvodVzor: 'Átadás (egy lehetőséget jelöljön meg):',
          moznosti: {
            mar: 'Az ajándékozó az ajándékot a szerződés aláírásakor átadta, amit a megajándékozott aláírásával elismer.',
            kesobb: 'Az ajándékozó az ajándékot legkésőbb {{atadas_datum}} napjáig adja át.',
          },
        },
      ],
    },
    {
      nadpis: 'Záró rendelkezések',
      odstavce: [
        'Az ajándékozó kijelenti, hogy az ajándék az ő kizárólagos tulajdona, és harmadik személynek nincs rajta joga.',
        'Az esetleges illetékfizetési kötelezettség a megajándékozottat terheli.',
        'A szerződésben nem szabályozott kérdésekben a Polgári Törvénykönyv rendelkezései az irányadók. A szerződés két egyező példányban készült.',
      ],
    },
  ],
};
