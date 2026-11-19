/** Adásvételi szerződés ingóságra (használt dolog) – Magyarország, magánszemélyek között. Ptk. adásvétel. */
import type { Sablona } from '../typy';
import { osszegBetuvel } from './szamok';
import { PTK, TIP_SZEMELYAZONOSSAG, TIP_KESZPENZ } from './forrasok';

export const adasveteliSzerzodes: Sablona = {
  kod: 'HU-ADASVETEL',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Adásvételi szerződés',
  podnadpis: 'ingóság adásvétele a Polgári Törvénykönyv alapján',
  souborPdf: 'adasveteli-szerzodes',
  paticka: 'Ingyenesen készült · HU-ADASVETEL v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek, ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'eladó', vpravo: 'vevő' },
  slovo: { n: 'szerződés', g: 'szerződés', a: 'szerződést', l: 'szerződésben' },
  coDal: ['Nyomtassa ki két példányban, mindketten írják alá mindkettőt.', 'Adja át a dolgot a tartozékokkal és az iratokkal (garanciajegy, számla).'],
  kontrola: [
    'Írja le pontosan a dolgot (típus, gyári szám, tartozékok).',
    'Az ismert hibákat írja bele – a vevő arra a hibára, amelyről tudott, később nem hivatkozhat.',
    'Gépjárműhöz használja a külön gépjármű adásvételi szerződést – ott tanúk is kellenek.',
    TIP_SZEMELYAZONOSSAG,
    TIP_KESZPENZ,
  ],
  zdroje: [PTK],
  kroky: [
    {
      id: 'felek',
      nazev: 'Felek',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Eladó neve', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Eladó lakcíme', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Vevő neve', sirka: 34 },
        { id: 'k_adresa', typ: 'text', popis: 'Vevő lakcíme', sirka: 46 },
      ],
    },
    {
      id: 'dolog',
      nazev: 'A dolog és az ár',
      pole: [
        { id: 'predmet', typ: 'textarea', popis: 'A dolog leírása', placeholder: 'pl. Trek Marlin 7 kerékpár, vázszám …, 2023', sirka: 64 },
        {
          id: 'hibak',
          typ: 'volba',
          popis: 'Ismert hibák',
          moznosti: [
            { hodnota: 'nincs', popis: 'Az eladó nem tud hibáról' },
            { hodnota: 'van', popis: 'Vannak ismert hibák' },
          ],
        },
        { id: 'hibak_leiras', typ: 'textarea', popis: 'A hibák leírása', sirka: 64, zobrazitKdyz: { pole: 'hibak', je: 'van' } },
        { id: 'cena', typ: 'castka', popis: 'Vételár (Ft)', sirka: 12, polovina: true },
        {
          id: 'platba',
          typ: 'volba',
          popis: 'Fizetés',
          moznosti: [
            { hodnota: 'keszpenz', popis: 'Készpénzben az aláíráskor' },
            { hodnota: 'utalas', popis: 'Átutalással' },
          ],
        },
        { id: 'ucet', typ: 'text', popis: 'Eladó bankszámlaszáma', sirka: 32, zobrazitKdyz: { pole: 'platba', je: 'utalas' } },
        { id: 'splatnost', typ: 'datum', popis: 'Fizetési határidő', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'platba', je: 'utalas' } },
        { id: 'misto', typ: 'text', popis: 'Helység', sirka: 18, polovina: true },
        { id: 'datum_podpisu', typ: 'datum', popis: 'A szerződés kelte', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { cena_betuvel: (d) => osszegBetuvel(d.cena) },
  clanky: [
    {
      nadpis: 'Szerződő felek',
      odstavce: ['**Eladó:** {{p_jmeno}}, lakcím: {{p_adresa}}', '**Vevő:** {{k_jmeno}}, lakcím: {{k_adresa}}'],
    },
    {
      nadpis: 'A szerződés tárgya',
      odstavce: [
        'Az eladó eladja, a vevő megvásárolja a következő dolgot: {{predmet}}',
        'Az eladó kijelenti, hogy a dolog az ő tulajdona, és harmadik személynek nincs rajta joga.',
        {
          volba: 'hibak',
          uvodVzor: 'Ismert hibák (egy lehetőséget jelöljön meg):',
          moznosti: { nincs: 'Az eladó a dolog hibájáról nem tud.', van: 'Az eladó tájékoztatta a vevőt a következő hibákról: {{hibak_leiras}}' },
        },
        'A vevő a dolgot megtekintette, és a fenti állapotban vásárolja meg.',
      ],
    },
    {
      nadpis: 'Vételár',
      odstavce: [
        'A vételár {{cena}}, azaz {{cena_betuvel}}.',
        {
          volba: 'platba',
          uvodVzor: 'Fizetés (egy lehetőséget jelöljön meg):',
          moznosti: {
            keszpenz: 'A vevő a vételárat az aláíráskor készpénzben megfizette, amit az eladó aláírásával elismer.',
            utalas: 'A vevő a vételárat legkésőbb {{splatnost}} napjáig átutalja az eladó {{ucet}} számú bankszámlájára.',
          },
        },
        'A dolog tulajdonjoga a teljes vételár megfizetésével és a dolog átadásával száll át a vevőre.',
      ],
    },
    {
      nadpis: 'Záró rendelkezések',
      odstavce: ['A szerződésben nem szabályozott kérdésekben a Polgári Törvénykönyv rendelkezései az irányadók. A szerződés két egyező példányban készült.'],
    },
  ],
};
