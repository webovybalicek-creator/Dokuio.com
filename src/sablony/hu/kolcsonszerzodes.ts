/** Kölcsönszerződés – Magyarország, magánszemélyek között. Ptk. kölcsönszerződés; elévülés 5 év. */
import type { Sablona } from '../typy';
import { osszegBetuvel } from './szamok';
import { naDatum, isoDatum, pripominkySplatek, splatky } from '../terminy';
import { formatCislo, formatDatum } from '../dokument';
import { PTK, PP, TIP_SZEMELYAZONOSSAG, TIP_KESZPENZ, TIP_TANUK } from './forrasok';

const ft = (n: number) => `${formatCislo(String(n))} Ft`;

export const kolcsonszerzodes: Sablona = {
  kod: 'HU-KOLCSON',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Kölcsönszerződés',
  podnadpis: 'a Polgári Törvénykönyvről szóló 2013. évi V. törvény kölcsönszerződésre vonatkozó szabályai alapján',
  souborPdf: 'kolcsonszerzodes',
  paticka: 'Ingyenesen készült · HU-KOLCSON v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek, ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'kölcsönadó', vpravo: 'kölcsönvevő' },
  slovo: { n: 'szerződés', g: 'szerződés', a: 'szerződést', l: 'szerződésben' },
  coDal: ['Nyomtassa ki két példányban, mindketten írják alá mindkettőt.', 'A pénzt lehetőleg utalja át – a banki igazolás a legjobb bizonyíték.'],
  prilohy: (d) => {
    if (d.visszafizetes !== 'reszlet') return [];
    const s = splatky(d);
    if (!s.length) return [];
    return [
      {
        nadpis: '1. számú melléklet · Törlesztési ütemterv',
        popis: `Összesen ${ft(Number(String(d.castka).replace(/\s/g, '')))} ${s.length} havi részletben.`,
        hlavicka: ['Részlet', 'Esedékes', 'Összeg', 'Hátralék'],
        radky: s.map((x) => [`${x.poradi}.`, formatDatum(isoDatum(x.datum), 'hu'), ft(x.castka), ft(x.zbyva)]),
        vpravo: [2, 3],
        poznamka: 'Az ütemterv a megállapodott részletek alapján készült; eltérés esetén a szerződés szövege az irányadó.',
      },
    ];
  },
  pripominky: (d) => [
    ...(d.visszafizetes === 'reszlet' ? pripominkySplatek(d, 'Kölcsönrészlet', 'Ft', { celkem: (n) => `összesen ${n} részlet`, posledni: 'utolsó' }) : []),
    ...(d.visszafizetes === 'egyben' && naDatum(d.vissza_datum) ? [{ nazev: 'A kölcsön visszafizetése', datum: String(d.vissza_datum) }] : []),
  ],
  kontrola: [
    'A kölcsönszerződés magánszemélyek között szóban is érvényes, de írásban sokkal könnyebb bizonyítani.',
    'Kamat esetén a mértéket évi százalékban adja meg. Túlzott (uzsorás) kamat semmis lehet.',
    'A követelés általában 5 év alatt évül el; a tartozás írásbeli elismerése megszakítja az elévülést.',
    TIP_TANUK.replace(' – a forgalmi átíráshoz ez kell', ' – vita esetén ez erősebb bizonyíték'),
    TIP_SZEMELYAZONOSSAG,
    TIP_KESZPENZ,
  ],
  zdroje: [PTK, PP],
  kroky: [
    {
      id: 'felek',
      nazev: 'Felek',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Kölcsönadó neve', napoveda: 'Aki a pénzt kölcsönadja.', sirka: 34, autocomplete: 'name' },
        { id: 'p_szul', typ: 'text', popis: 'Születési hely, idő', sirka: 26, polovina: true },
        { id: 'p_anyja', typ: 'text', popis: 'Anyja neve', sirka: 26, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Lakcím', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Kölcsönvevő neve', sirka: 34 },
        { id: 'k_szul', typ: 'text', popis: 'Születési hely, idő', sirka: 26, polovina: true },
        { id: 'k_anyja', typ: 'text', popis: 'Anyja neve', sirka: 26, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Lakcím', sirka: 46 },
      ],
    },
    {
      id: 'osszeg',
      nazev: 'Összeg és kamat',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Kölcsön összege (Ft)', sirka: 14, polovina: true },
        {
          id: 'atadas',
          typ: 'volba',
          popis: 'A pénz átadása',
          moznosti: [
            { hodnota: 'keszpenz', popis: 'Készpénzben az aláíráskor' },
            { hodnota: 'utalas', popis: 'Átutalással' },
          ],
        },
        { id: 'ucet_k', typ: 'text', popis: 'Kölcsönvevő bankszámlaszáma', sirka: 32, zobrazitKdyz: { pole: 'atadas', je: 'utalas' } },
        { id: 'atadas_datum', typ: 'datum', popis: 'Utalás legkésőbb', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'atadas', je: 'utalas' } },
        {
          id: 'kamat',
          typ: 'volba',
          popis: 'Kamat',
          moznosti: [
            { hodnota: 'nem', popis: 'Kamatmentes' },
            { hodnota: 'igen', popis: 'Kamatos' },
          ],
        },
        { id: 'kamat_merteke', typ: 'cislo', popis: 'Kamat mértéke', jednotka: '% évente', sirka: 6, polovina: true, zobrazitKdyz: { pole: 'kamat', je: 'igen' } },
      ],
    },
    {
      id: 'vissza',
      nazev: 'Visszafizetés',
      pole: [
        {
          id: 'visszafizetes',
          typ: 'volba',
          popis: 'Hogyan fizeti vissza',
          moznosti: [
            { hodnota: 'egyben', popis: 'Egy összegben egy adott napig' },
            { hodnota: 'reszlet', popis: 'Havi részletekben' },
          ],
        },
        { id: 'vissza_datum', typ: 'datum', popis: 'Visszafizetési határidő', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'visszafizetes', je: 'egyben' } },
        { id: 'splatka', typ: 'castka', popis: 'Havi részlet (Ft)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'visszafizetes', je: 'reszlet' } },
        { id: 'splatka_den', typ: 'cislo', popis: 'A hónap napja', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'visszafizetes', je: 'reszlet' } },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Az első részlet hónapja', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'visszafizetes', je: 'reszlet' } },
        { id: 'ucet_p', typ: 'text', popis: 'Kölcsönadó bankszámlaszáma', sirka: 32 },
        { id: 'misto', typ: 'text', popis: 'Helység', sirka: 18, polovina: true },
        { id: 'datum_podpisu', typ: 'datum', popis: 'A szerződés kelte', sirka: 14, polovina: true, vychozi: 'dnes' },
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
      nadpis: 'Szerződő felek',
      odstavce: [
        '**Kölcsönadó:** {{p_jmeno}}, születési hely, idő: {{p_szul}}, anyja neve: {{p_anyja}}, lakcím: {{p_adresa}}',
        '**Kölcsönvevő:** {{k_jmeno}}, születési hely, idő: {{k_szul}}, anyja neve: {{k_anyja}}, lakcím: {{k_adresa}}',
      ],
    },
    {
      nadpis: 'A kölcsön összege',
      vysvetleni: 'Mennyi pénzről van szó, és hogyan adják át.',
      odstavce: [
        'A kölcsönadó {{castka}}, azaz {{osszeg_betuvel}} kölcsönt nyújt a kölcsönvevőnek, aki azt a szerződés szerint visszafizeti.',
        {
          volba: 'atadas',
          uvodVzor: 'A pénz átadása (egy lehetőséget jelöljön meg):',
          moznosti: {
            keszpenz: 'A kölcsönadó a teljes összeget a szerződés aláírásakor készpénzben átadta, amit a kölcsönvevő aláírásával elismer.',
            utalas: 'A kölcsönadó a teljes összeget legkésőbb {{atadas_datum}} napjáig átutalja a kölcsönvevő {{ucet_k}} számú bankszámlájára.',
          },
        },
      ],
    },
    {
      nadpis: 'Kamat',
      odstavce: [
        {
          volba: 'kamat',
          uvodVzor: 'Kamat (egy lehetőséget jelöljön meg):',
          moznosti: {
            nem: 'A kölcsön kamatmentes.',
            igen: 'A kölcsönvevő a mindenkori tőketartozás után évi {{kamat_merteke}} kamatot fizet, a részletekkel együtt, legkésőbb az utolsó részlettel.',
          },
        },
      ],
    },
    {
      nadpis: 'Visszafizetés',
      odstavce: [
        {
          volba: 'visszafizetes',
          uvodVzor: 'A visszafizetés módja (egy lehetőséget jelöljön meg):',
          moznosti: {
            egyben: 'A kölcsönvevő a teljes összeget egy összegben legkésőbb {{vissza_datum}} napjáig fizeti vissza.',
            reszlet: 'A kölcsönvevő az összeget havi {{splatka}} részletekben fizeti vissza, minden hónap {{splatka_den}}. napjáig, {{elso_honap}} hónaptól a teljes visszafizetésig. Az utolsó részlet kisebb lehet.',
          },
        },
        'A visszafizetés a kölcsönadó {{ucet_p}} számú bankszámlájára vagy készpénzben, nyugta ellenében történik. A kölcsönvevő a kölcsönt határidő előtt is visszafizetheti.',
        'Ha a kölcsönvevő két egymást követő részlettel késedelembe esik, a kölcsönadó a teljes hátralékot egy összegben követelheti.',
      ],
    },
    {
      nadpis: 'Záró rendelkezések',
      odstavce: [
        'A szerződésben nem szabályozott kérdésekben a Polgári Törvénykönyv rendelkezései az irányadók.',
        'A szerződés két egyező példányban készült, mindkét fél egy-egy példányt kap.',
      ],
    },
  ],
};
