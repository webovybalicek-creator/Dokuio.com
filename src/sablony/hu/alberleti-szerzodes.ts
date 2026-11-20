/**
 * Albérleti szerződés (a bérlő továbbadja a lakást vagy annak egy részét) – Magyarország. Ptk. 6:334. §: a bérlő a dolgot harmadik személy használatába a bérbeadó hozzájárulásával adhatja (adózóna, PTE ismertető). Lakások bérletére a Lakástörvény is irányadó.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum } from '../terminy';
import { osszegBetuvel } from './szamok';
import { PTK, TIP_SZEMELYAZONOSSAG, TIP_TANUK } from './forrasok';

export const alberletiSzerzodes: Sablona = {
  kod: 'HU-ALBERLET',
  verze: '1.1',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: "Albérleti szerződés",
  podnadpis: "a Polgári Törvénykönyv bérletre vonatkozó szabályai alapján",
  souborPdf: 'alberleti-szerzodes',
  paticka: "Ingyenesen készült · HU-ALBERLET v1.1 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek",
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: "bérlő (albérletbe adó)", vpravo: "albérlő" },
  slovo: {"n": "szerződés", "g": "szerződés", "a": "szerződést", "l": "szerződésben"},
  pripominky: (d) => [
    ...(naDatum(d.od) ? [{ nazev: "Az albérlet kezdete", datum: String(d.od) }] : []),
    ...(d.doba === 'urcita' && naDatum(d.do) ? [{ nazev: "Az albérlet vége", datum: String(d.do) }] : []),
  ],
  coDal: ["Nyomtassa ki két példányban, mindkét fél írja alá mindkettőt.", "A bérbeadó írásbeli hozzájárulását csatolja.", "Beköltözéskor vegyenek fel átadás-átvételi jegyzőkönyvet."],
  kontrola: [
    "A bérlő a lakást harmadik személy használatába csak a bérbeadó hozzájárulásával adhatja (Ptk. 6:334. §). Kérje írásban, előre.",
    "A bérlő úgy felel az albérlő magatartásáért, mintha a lakást maga használta volna.",
    "Az albérlet legfeljebb a bérlet végéig tarthat.",
    TIP_TANUK,
    TIP_SZEMELYAZONOSSAG,
  ],
  zdroje: [PTK],

  kroky: [
    {
      id: 'strany',
      nazev: "Bérlő és albérlő",
      popis: "A bérlő a lakást vagy annak egy részét albérletbe adja.",
      pole: [
        { id: 'n_jmeno', typ: 'text', popis: "Bérlő – név", placeholder: "pl. Kovács János", sirka: 34, autocomplete: 'name' },
        { id: 'n_narozeni', typ: 'datum', popis: "Bérlő születési ideje", sirka: 14, polovina: true },
        { id: 'n_adresa', typ: 'text', popis: "Bérlő lakcíme", placeholder: "pl. 1052 Budapest, Váci utca 10.", sirka: 46 },
        { id: 'p_jmeno', typ: 'text', popis: "Albérlő – név", placeholder: "pl. Nagy Péter", sirka: 34 },
        { id: 'p_narozeni', typ: 'datum', popis: "Albérlő születési ideje", sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: "Albérlő állandó lakcíme", sirka: 46 },
      ],
    },
    {
      id: 'byt',
      nazev: "Lakás és hozzájárulás",
      pole: [
        { id: 'byt', typ: 'text', popis: "Lakás (cím, ajtó)", placeholder: "pl. 4024 Debrecen, Piac utca 5. 2/12.", sirka: 46 },
        {
          id: 'rozsah',
          typ: 'volba',
          popis: "Az albérlet terjedelme",
          moznosti: [
            { hodnota: 'cast', popis: "A lakás egy része (szoba)" },
            { hodnota: 'cely', popis: "A teljes lakás" },
          ],
        },
        { id: 'cast_popis', typ: 'text', popis: "Melyik rész", placeholder: "pl. 14 m²-es szoba, a konyha és a fürdő közös használatával", sirka: 56, zobrazitKdyz: { pole: 'rozsah', je: 'cast' } },
        { id: 'pronajimatel', typ: 'text', popis: "Bérbeadó (tulajdonos)", napoveda: "Aki az albérlethez hozzájárult.", sirka: 34 },
        { id: 'souhlas_datum', typ: 'datum', popis: "A hozzájárulás kelte", napoveda: "Csatolja a szerződéshez.", sirka: 14, polovina: true },
      ],
    },
    {
      id: 'platby',
      nazev: "Időtartam és fizetés",
      pole: [
        { id: 'od', typ: 'datum', popis: "Albérlet kezdete", sirka: 14, polovina: true },
        {
          id: 'doba',
          typ: 'volba',
          popis: "Időtartam",
          moznosti: [
            { hodnota: 'urcita', popis: "Határozott idő" },
            { hodnota: 'neurcita', popis: "Határozatlan idő" },
          ],
        },
        { id: 'do', typ: 'datum', popis: "Albérlet vége", sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'urcita' } },
        { id: 'najemne', typ: 'castka', popis: "Havi díj (Ft)", napoveda: "A rezsivel együtt, ha másként nem állapodnak meg.", sirka: 14, polovina: true },
        { id: 'splatnost', typ: 'cislo', popis: "Fizetési nap (hónap napja)", placeholder: '15', sirka: 4, polovina: true },
        { id: 'kauce', typ: 'castka', popis: "Kaució (Ft, nem kötelező)", sirka: 14, polovina: true },
        { id: 'ucet', typ: 'text', popis: "Bérlő bankszámlaszáma", sirka: 30 },
        { id: 'vypoved', typ: 'cislo', popis: "Felmondási idő (hónap)", placeholder: '1', sirka: 4, polovina: true },
        { id: 'misto', typ: 'text', popis: "Hely", sirka: 18, polovina: true, vychozi: { obecZ: 'n_adresa' } },
        { id: 'datum', typ: 'datum', popis: "Dátum", sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { najemne_slovy: (d) => osszegBetuvel(d.najemne) },

  clanky: [
    { nadpis: "Szerződő felek", odstavce: ["**Bérlő:** {{n_jmeno}}, születési idő: {{n_narozeni}}, {{n_adresa}} (a továbbiakban: „Bérlő”)", "**Albérlő:** {{p_jmeno}}, születési idő: {{p_narozeni}}, állandó lakcím: {{p_adresa}} (a továbbiakban: „Albérlő”)"] },
    {
      nadpis: "Az albérlet tárgya",
      vysvetleni: "Mit ad albérletbe a bérlő, és milyen hozzájárulás alapján.",
      odstavce: [
        {
          volba: 'rozsah',
          uvodVzor: "Terjedelem (jelöljön meg egyet):",
          moznosti: { cast: "A Bérlő albérletbe adja a(z) {{byt}} lakás következő részét: {{cast_popis}}.", cely: "A Bérlő albérletbe adja a(z) {{byt}} teljes lakást." },
        },
        "A bérbeadó ({{pronajimatel}}) {{souhlas_datum}} napján hozzájárult az albérlethez; a hozzájárulás a szerződés melléklete.",
        "Az albérlet legkésőbb a Bérlő bérletének megszűnésével megszűnik.",
      ],
    },
    {
      nadpis: "Időtartam és megszűnés",
      odstavce: [
        {
          volba: 'doba',
          uvodVzor: "Időtartam (jelöljön meg egyet):",
          moznosti: { urcita: "Az albérlet {{od}} napjától {{do}} napjáig tart.", neurcita: "Az albérlet {{od}} napjától határozatlan ideig tart." },
        },
        "Bármelyik fél {{vypoved}} hónapos felmondási idővel, a hónap végére felmondhatja.",
        "Megszűnéskor az Albérlő a helyiségeket az átvételkori állapotban – a rendeltetésszerű használattal járó értékcsökkenést figyelembe véve – adja vissza.",
      ],
    },
    { nadpis: "Díj és kaució", odstavce: ["Az Albérlő havonta {{najemne}} (azaz {{najemne_slovy}}) díjat fizet a rezsivel együtt, minden hónap {{splatnost}}. napjáig, a Bérlő {{ucet}} számú bankszámlájára.", "Az Albérlő {{kauce}} kauciót fizetett, amelyet a Bérlő a visszaadás után 30 napon belül, az esetleges tartozások levonásával visszafizet."] },
    { nadpis: "Záró rendelkezések", odstavce: ["Az Albérlő betartja a házirendet, és a helyiségeket másnak nem adja tovább.", "A szerződés csak írásban módosítható. Két eredeti példányban készült."] },
  ],
};
