/**
 * Munkavállalói felmondás / javaslat közös megegyezéses megszüntetésre – Magyarország (munkavállaló → munkáltató).
 * Ověřeno na NJT 20. 11. 2026 (Mt. 2012. évi I. törvény): 64. § (1) megszüntetés módjai; 65. § (1) felmondás;
 * 67. § (1) határozatlan idejű – nem köteles indokolni, (2) határozott idejű – köteles megindokolni;
 * 68. § (1) felmondási idő legkorábban a közlést követő napon kezdődik; 69. § (1) 30 nap, (3) legfeljebb hathavi
 * megállapodás; 70. § (1) felmentés jen při munkáltatói felmondás; 22. § (3) írásba foglalt megállapodást
 * megszüntetni csak írásban (+ 44. § munkaszerződés írásban); 24. § közlés (átadás, tértivevény – kézbesítési vélelem);
 * 80. § (1)–(2) munkakör átadása, elszámolás, igazolások; 81. § (1) írásbeli értékelés kérésre (min. 1 év).
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona, Data } from '../typy';
import { naDatum, isoDatum, pridejDny, cislo } from '../terminy';
import { formatDatum } from '../dokument';
import { MT } from './forrasok';

/** Utolsó nap: a felmondási idő a közlést követő napon kezdődik (Mt. 68. § (1)), így közlés + N nap. */
function utolsoNap(d: Data): Date | undefined {
  const kozles = naDatum(d.kozles_datum);
  if (!kozles || d.mod !== 'felmondas' || (d.felmondasi_ido !== 'torvenyes' && d.felmondasi_ido !== 'hosszabb')) return undefined;
  const napok = d.felmondasi_ido === 'hosszabb' ? Math.round(cislo(d.felm_napok)) : 30;
  if (!napok || napok < 30 || napok > 186) return undefined;
  return pridejDny(kozles, napok);
}

export const munkavallaloiFelmondas: Sablona = {
  kod: 'HU-MUNKAVALLALOI-FELMONDAS',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Munkavállalói felmondás',
  podnadpis: 'a munka törvénykönyvéről szóló 2012. évi I. törvény (Mt.) alapján',
  souborPdf: 'munkavallaloi-felmondas',
  paticka: 'Ingyenesen készült · HU-MUNKAVALLALOI-FELMONDAS v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért Ön felel, összetett ügyben ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'munkavállaló', vpravo: 'átvette a munkáltató részéről (név, dátum, aláírás)' },
  slovo: { n: 'felmondás', g: 'felmondás', a: 'felmondást', l: 'felmondásban' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const veg = utolsoNap(d);
    if (veg) return [
      { nazev: 'Utolsó munkanap (a felmondási idő vége)', datum: isoDatum(veg), popis: 'A munkáltató ekkor fizeti ki a járandóságokat, és adja ki az igazolásokat (Mt. 80. § (2)).' },
      { nazev: 'Egyeztetni a munkakör átadását', datum: isoDatum(pridejDny(veg, -7)), popis: 'A munkavállaló a munkakörét köteles átadni és elszámolni (Mt. 80. § (1)).' },
    ];
    const kozos = naDatum(d.kozos_datum);
    return d.mod === 'kozos' && kozos ? [{ nazev: 'A javasolt megszűnés napja', datum: isoDatum(kozos), popis: 'Elfogadás esetén a közös megegyezést írásba kell foglalni.' }] : [];
  },
  coDal: [
    'Két példányban nyomtassa ki és írja alá. Az egyiket adja át a munkáltatónak, a másikon kérje az átvétel igazolását (név, dátum, aláírás).',
    'Ha személyesen nem tudja átadni, küldje tértivevényes ajánlott levélben – a közlés napja a felmondási idő kezdete miatt fontos.',
    'Egyeztesse a munkakör átadását, a szabadság és a bér elszámolását.',
    'Az utolsó napon kérje a munkaviszony megszűnésekor kiadandó igazolásokat.',
  ],
  kontrola: [
    'A felmondási idő 30 nap (Mt. 69. § (1)); a munkaszerződés ennél hosszabbat, legfeljebb hat hónapot is előírhat (69. § (3)) – nézze meg a szerződését.',
    'A felmondási idő legkorábban a felmondás közlését követő napon kezdődik (Mt. 68. § (1)) – a számításhoz az átadás napja számít, nem a levél kelte.',
    'Határozatlan idejű munkaviszony felmondását nem kell indokolnia (Mt. 67. § (1)); határozott idejű munkaviszony felmondását viszont köteles megindokolni (67. § (2)).',
    'A munkavégzés alóli felmentés kötelezően csak munkáltatói felmondásnál jár (Mt. 70. § (1)); munkavállalói felmondásnál erről a munkáltatóval külön megállapodhat.',
    'A felmondást írja alá, és igazolható módon adja át; tértivevényes levélnél a kézbesítési vélelmet az Mt. 24. §-a szabályozza.',
    'Közös megegyezésnél a megszüntetés csak írásban érvényes (Mt. 22. § (3), 44. §) – ez a levél csak javaslat, az aláírt megállapodást külön készítsék el.',
    'Ha a munkaviszony legalább egy évig tartott, kérésére a munkáltató írásbeli értékelést ad a munkájáról (Mt. 81. § (1)).',
  ],
  zdroje: [MT],
  kroky: [
    {
      id: 'felek',
      nazev: 'Munkavállaló és munkáltató',
      pole: [
        { id: 'mv_nev', typ: 'text', popis: 'Az Ön neve', napoveda: 'Ahogy a munkaszerződésben szerepel.', placeholder: 'pl. Szabó Péter', sirka: 34, autocomplete: 'name' },
        { id: 'mv_cim', typ: 'text', popis: 'Lakcím', napoveda: 'Ide kérheti a munkáltató válaszát és az igazolásokat.', placeholder: 'pl. 9021 Győr, Baross Gábor út 3.', sirka: 46 },
        { id: 'munkakor', typ: 'text', popis: 'Munkakör', napoveda: 'A munkaszerződésben szereplő munkakör.', placeholder: 'pl. pénzügyi ügyintéző', sirka: 30, polovina: true },
        { id: 'szerzodes_datum', typ: 'datum', popis: 'A munkaszerződés kelte (nem kötelező)', napoveda: 'Segít azonosítani a munkaviszonyt.', sirka: 14, polovina: true },
        { id: 'ml_nev', typ: 'text', popis: 'Munkáltató neve', napoveda: 'A cég vagy a munkáltató magánszemély neve, ahogy a munkaszerződésben szerepel.', placeholder: 'pl. Minta Kft.', sirka: 34 },
        { id: 'ml_cim', typ: 'text', popis: 'Munkáltató székhelye vagy címe', napoveda: 'A munkaszerződésből vagy a cégjegyzékből.', placeholder: 'pl. 1138 Budapest, Váci út 100.', sirka: 46 },
        { id: 'ml_kepviselo', typ: 'text', popis: 'Címzett vezető (nem kötelező)', napoveda: 'Aki a munkáltató nevében a munkáltatói jogokat gyakorolja, pl. ügyvezető vagy HR-vezető.', placeholder: 'pl. Nagy Éva ügyvezető', sirka: 30 },
      ],
    },
    {
      id: 'megszuntetes',
      nazev: 'Felmondás vagy közös megegyezés',
      pole: [
        {
          id: 'mod',
          typ: 'volba',
          popis: 'Hogyan szeretné megszüntetni a munkaviszonyt?',
          napoveda: 'Felmondásnál a felmondási időt ki kell dolgozni. Közös megegyezéssel bármely napra megállapodhatnak, ha a munkáltató is elfogadja.',
          moznosti: [
            { hodnota: 'felmondas', popis: 'Felmondok' },
            { hodnota: 'kozos', popis: 'Közös megegyezést javaslok' },
          ],
        },
        {
          id: 'idotartam',
          typ: 'volba',
          popis: 'A munkaviszony időtartama',
          napoveda: 'A munkaszerződésben áll. Határozott idejűnél a felmondást meg kell indokolni.',
          zobrazitKdyz: { pole: 'mod', je: 'felmondas' },
          moznosti: [
            { hodnota: 'hatarozatlan', popis: 'Határozatlan idejű' },
            { hodnota: 'hatarozott', popis: 'Határozott idejű' },
          ],
        },
        { id: 'indok', typ: 'textarea', popis: 'A felmondás indoka', napoveda: 'Határozott idejű munkaviszonynál kötelező. Írja le röviden és tárgyszerűen, miért nem tarthatja fenn a munkaviszonyt.', placeholder: 'pl. családom külföldre költözik, ezért a munkaviszony fenntartása lehetetlenné válik', sirka: 60, zobrazitKdyz: { pole: 'idotartam', je: 'hatarozott' } },
        {
          id: 'felmondasi_ido',
          typ: 'volba',
          popis: 'Felmondási idő',
          napoveda: 'Ha a munkaszerződés nem rendelkezik másként, 30 nap.',
          zobrazitKdyz: { pole: 'mod', je: 'felmondas' },
          moznosti: [
            { hodnota: 'torvenyes', popis: '30 nap (törvényes)' },
            { hodnota: 'hosszabb', popis: 'Hosszabb, a munkaszerződés szerint' },
          ],
        },
        { id: 'felm_napok', typ: 'cislo', popis: 'A felmondási idő napokban', napoveda: 'Legfeljebb hat hónap, ahogy a munkaszerződésben áll.', placeholder: 'pl. 60', jednotka: 'nap', sirka: 6, polovina: true, zobrazitKdyz: { pole: 'felmondasi_ido', je: 'hosszabb' } },
        { id: 'kozles_datum', typ: 'datum', popis: 'Mikor adja át a felmondást?', napoveda: 'Ebből számoljuk ki az utolsó munkanapot. A felmondási idő az átadást követő napon kezdődik.', sirka: 14, polovina: true, vychozi: 'dnes', zobrazitKdyz: { pole: 'mod', je: 'felmondas' } },
        { id: 'kozos_datum', typ: 'datum', popis: 'Javasolt utolsó nap', napoveda: 'Az a nap, amellyel a munkaviszony közös megegyezéssel megszűnne.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'mod', je: 'kozos' } },
      ],
    },
    {
      id: 'kerelmek',
      nazev: 'Kérések és aláírás',
      pole: [
        {
          id: 'kerelmek',
          typ: 'vice',
          popis: 'Mit kér még a munkáltatótól?',
          napoveda: 'Az igazolásokat a munkáltató a munkaviszony megszűnésekor köteles kiadni; az értesítés segít, hogy semmi ne maradjon ki.',
          moznosti: [
            { hodnota: 'igazolasok', popis: 'A megszűnéskor kiadandó igazolások' },
            { hodnota: 'atadas', popis: 'A munkakör átadásának egyeztetése' },
            { hodnota: 'szabadsag', popis: 'A szabadság és a bér elszámolása' },
            { hodnota: 'ertekeles', popis: 'Írásbeli értékelés a munkámról (legalább 1 év munkaviszony után)' },
          ],
        },
        { id: 'misto', typ: 'text', popis: 'Helység', napoveda: 'Ahol a levelet aláírja.', placeholder: 'pl. Győr', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Kelte', napoveda: 'A mai napot írtuk be.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: {
    utolso_nap: (d) => {
      const v = utolsoNap(d);
      return v ? formatDatum(isoDatum(v), 'hu') : '';
    },
    felm_ido_szoveg: (d) =>
      d.felmondasi_ido === 'torvenyes' ? '30 napos' : d.felmondasi_ido === 'hosszabb' && cislo(d.felm_napok) ? `${Math.round(cislo(d.felm_napok))} napos` : '',
  },
  clanky: [
    {
      nadpis: 'Felek',
      vysvetleni: 'Ki mond fel, és kinek szól a nyilatkozat.',
      odstavce: [
        '**Munkavállaló:** {{mv_nev}}, lakcím: {{mv_cim}}, munkakör: {{munkakor}}',
        '**Munkáltató:** {{ml_nev}}, {{ml_cim}}, a munkáltatói jogkör gyakorlója: {{ml_kepviselo}}',
      ],
    },
    {
      nadpis: 'Nyilatkozat',
      vysvetleni: 'Felmondás vagy javaslat a közös megegyezésre. A felmondás a munkáltató elfogadása nélkül is hatályos, a közös megegyezéshez a munkáltató beleegyezése kell.',
      odstavce: [
        'Tisztelt Munkáltató!',
        {
          volba: 'mod',
          uvodVzor: 'A megszüntetés módja (egyet jelöljön meg):',
          moznosti: {
            felmondas: 'Alulírott a(z) {{szerzodes_datum}} napján kelt munkaszerződésen alapuló munkaviszonyomat a Munka Törvénykönyvéről szóló 2012. évi I. törvény 65. § (1) bekezdése alapján **felmondással megszüntetem**. A felmondási idő {{felm_ido_szoveg}}, amely a felmondás közlését követő napon kezdődik. Ha a felmondást {{kozles_datum}} napján veszi át, a munkaviszonyom {{utolso_nap}} napján szűnik meg.',
            kozos: 'Alulírott javaslom, hogy a(z) {{szerzodes_datum}} napján kelt munkaszerződésen alapuló munkaviszonyomat **közös megegyezéssel** {{kozos_datum}} napjával szüntessük meg. Kérem, jelezze, elfogadja-e a javaslatot; elfogadás esetén a munkaviszony megszüntetéséről írásban állapodjunk meg.',
          },
        },
        {
          volba: 'idotartam',
          kdyz: { pole: 'idotartam', je: 'hatarozott' },
          uvodVzor: 'Csak határozott idejű munkaviszony felmondásakor (indokolás kötelező):',
          moznosti: { hatarozott: 'Felmondásom indoka: {{indok}}' },
        },
      ],
    },
    {
      nadpis: 'Kérések',
      vysvetleni: 'A munkaviszony lezárásához szükséges teendők.',
      odstavce: [
        {
          vice: 'kerelmek',
          uvod: 'Egyúttal kérem:',
          moznosti: {
            igazolasok: 'a munkaviszony megszűnésekor a jogszabályokban előírt igazolások kiadását és a járandóságaim kifizetését,',
            atadas: 'a munkakör átadásának és az elszámolásnak az egyeztetését,',
            szabadsag: 'a szabadságom és a munkabérem elszámolását,',
            ertekeles: 'a munkámról szóló írásbeli értékelést.',
          },
        },
        'Köszönöm az együttműködést.',
      ],
    },
  ],
};
