/**
 * Haszonkölcsön-szerződés – Magyarország. Ptk. használati kötelmek: dolog ingyenes, időleges használatba adása (haszonkölcsön; visszterhes alakja nincs – akkor bérlet). Forrás: Ptk. (NJT), szakirodalom (SZTE jegyzet). Paragrafusszámok nélkül – az NJT Ptk.-szövege nem töltődik be.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum } from '../terminy';
import { PTK, TIP_SZEMELYAZONOSSAG, TIP_TANUK } from './forrasok';

export const haszonkolcsonSzerzodes: Sablona = {
  kod: 'HU-HASZONKOLCSON',
  verze: '1.1',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: "Haszonkölcsön-szerződés",
  podnadpis: "a Polgári Törvénykönyv (2013. évi V. törvény) haszonkölcsönre vonatkozó szabályai alapján",
  souborPdf: 'haszonkolcson-szerzodes',
  paticka: "Ingyenesen készült · HU-HASZONKOLCSON v1.1 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek",
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: "kölcsönadó", vpravo: "kölcsönvevő (használó)" },
  slovo: {"n": "szerződés", "g": "szerződés", "a": "szerződést", "l": "szerződésben"},
  pripominky: (d) => (d.doba === 'datum' && naDatum(d.vratit_do) ? [{ nazev: "A kölcsönkapott dolog visszaadása", datum: String(d.vratit_do), popis: "Visszaadáskor nézzék át együtt a dolgot, és kérjen igazolást." }] : []),
  coDal: [
      "Nyomtassa ki két példányban, mindkét fél írja alá mindkettőt.",
      "Átadáskor nézzék meg együtt a dolgot, és a hibákat írják a szerződésbe.",
      "Visszaadáskor kérjen írásos igazolást."
  ],
  kontrola: [
    "A haszonkölcsön ingyenes. Ha a használatért díjat kér, az már bérlet.",
    "A dolgot pontosan írja le (gyártó, típus, gyári szám, tartozékok), és rögzítse az átadáskori állapotát.",
    "A használó a dolgot csak a szerződés szerint használhatja, és harmadik személynek csak a kölcsönadó engedélyével adhatja át.",
    "Rögzítse a visszaadás idejét vagy célját, hogy később ne legyen vita.",
    TIP_TANUK,
    TIP_SZEMELYAZONOSSAG,
  ],
  zdroje: [PTK],

  kroky: [
    {
      id: 'strany',
      nazev: "Kölcsönadó és kölcsönvevő",
      popis: "A kölcsönadó ingyen használatba adja a dolgot, a kölcsönvevő használja és visszaadja.",
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: "Kölcsönadó – név", placeholder: "pl. Kovács János", sirka: 34, autocomplete: 'name' },
        { id: 'p_id', typ: 'text', popis: "Születési idő (nem kötelező)", sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: "Kölcsönadó lakcíme", placeholder: "pl. 1052 Budapest, Váci utca 10.", sirka: 46 },
        { id: 'v_jmeno', typ: 'text', popis: "Kölcsönvevő – név", placeholder: "pl. Nagy Péter", sirka: 34 },
        { id: 'v_id', typ: 'text', popis: "Születési idő (nem kötelező)", sirka: 14, polovina: true },
        { id: 'v_adresa', typ: 'text', popis: "Kölcsönvevő lakcíme", placeholder: "pl. 4024 Debrecen, Piac utca 5.", sirka: 46 },
      ],
    },
    {
      id: 'vec',
      nazev: "A dolog",
      pole: [
        { id: 'vec', typ: 'textarea', popis: "A kölcsönadott dolog", napoveda: "Gyártó, típus, gyári szám, tartozékok.", placeholder: "pl. utánfutó, rendszám ABC-123, ponyvával és zárkulccsal", sirka: 70 },
        { id: 'stav', typ: 'text', popis: "Állapot átadáskor", placeholder: "pl. működőképes, karcok a bal sárvédőn", sirka: 56 },
        { id: 'hodnota', typ: 'castka', popis: "A dolog értéke (Ft, nem kötelező)", napoveda: "Elvesztés vagy megsemmisülés esetére.", sirka: 14, polovina: true },
        { id: 'ucel', typ: 'text', popis: "A használat célja", placeholder: "pl. költözés", sirka: 46 },
      ],
    },
    {
      id: 'doba',
      nazev: "Időtartam és visszaadás",
      pole: [
        { id: 'predano', typ: 'datum', popis: "Átadás napja", sirka: 14, polovina: true, vychozi: 'dnes' },
        {
          id: 'doba',
          typ: 'volba',
          popis: "Meddig",
          moznosti: [
            { hodnota: 'datum', popis: "Meghatározott napig" },
            { hodnota: 'ucel', popis: "A cél eléréséig" },
          ],
        },
        { id: 'vratit_do', typ: 'datum', popis: "Visszaadás legkésőbb", sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'datum' } },
        { id: 'misto_vraceni', typ: 'text', popis: "Visszaadás helye", placeholder: "pl. a kölcsönadó lakcímén", sirka: 46 },
        { id: 'misto', typ: 'text', popis: "Hely", sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: "Dátum", sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: "Szerződő felek",
      odstavce: ["**Kölcsönadó:** {{p_jmeno}}, születési idő: {{p_id}}, {{p_adresa}} (a továbbiakban: „Kölcsönadó”)", "**Kölcsönvevő:** {{v_jmeno}}, születési idő: {{v_id}}, {{v_adresa}} (a továbbiakban: „Kölcsönvevő”)"],
    },
    {
      nadpis: "A szerződés tárgya",
      vysvetleni: "A kölcsönadó ingyenesen használatba adja a dolgot.",
      odstavce: ["A Kölcsönadó a következő dolgot ingyenesen, időlegesen a Kölcsönvevő használatába adja: {{vec}}.", "A dolog állapota átadáskor: {{stav}}. A dolog értéke: {{hodnota}}.", "A használat célja: {{ucel}}. A Kölcsönadó kijelenti, hogy a dolognak nincs általa ismert, de el nem hallgatott rejtett hibája."],
    },
    {
      nadpis: "Időtartam és visszaadás",
      odstavce: [
        "A dolog átadására {{predano}} napján került sor.",
        {
          volba: 'doba',
          uvodVzor: "Időtartam (jelöljön meg egyet):",
          moznosti: {
            datum: "A szerződés {{vratit_do}} napjáig szól. A Kölcsönvevő legkésőbb ezen a napon visszaadja a dolgot.",
            ucel: "A szerződés a megjelölt cél eléréséig szól. A Kölcsönvevő a cél elérése után késedelem nélkül visszaadja a dolgot.",
          },
        },
        "A Kölcsönvevő a dolgot a következő helyen adja vissza: {{misto_vraceni}}, az átvételkori állapotban, a rendeltetésszerű használattal járó értékcsökkenést figyelembe véve.",
        "A Kölcsönadó a dolgot a határidő előtt is visszakövetelheti, ha a Kölcsönvevő azt nem rendeltetésszerűen használja, vagy engedély nélkül másnak átadja.",
      ],
    },
    {
      nadpis: "A dolog használata",
      vysvetleni: "Hogyan használható a dolog, és ki viseli a költségeket.",
      odstavce: ["A Kölcsönvevő a dolgot rendeltetésszerűen, a szerződés szerint használja, és óvja a sérüléstől, elvesztéstől.", "A Kölcsönvevő a dolgot a Kölcsönadó engedélye nélkül harmadik személy használatába nem adhatja.", "A használattal járó szokásos költségeket a Kölcsönvevő viseli. Nagyobb javítás szükségességét késedelem nélkül jelzi a Kölcsönadónak."],
    },
    {
      nadpis: "Záró rendelkezések",
      odstavce: ["Az itt nem szabályozott kérdésekben a Polgári Törvénykönyv haszonkölcsönre vonatkozó szabályai az irányadók.", "A szerződés csak írásban módosítható. Két eredeti példányban készült, mindkét fél egy-egy példányt kap."],
    },
  ],
};
