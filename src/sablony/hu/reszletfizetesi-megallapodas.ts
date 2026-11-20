/**
 * Részletfizetési megállapodás – Magyarország, hitelező és adós kétoldalú megállapodása (a tartozáselismerő
 * nyilatkozattal szemben, amely az adós egyoldalú nyilatkozata). A részletek elmaradásakor a teljes hátralék
 * esedékessége a FELEK MEGÁLLAPODÁSÁN alapul (Ptk.-ra konkrét §-t nem hivatkozunk). Opcionális tartozáselismerés:
 * Ptk. 6:25. § (1) a) – megszakítja az elévülést, 6:22. § – 5 év (lásd forrasok.ts, tartozaselismero-nyilatkozat).
 * Két tanú: teljes bizonyító erejű magánokirat, Pp. 325. § (1) b).
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { osszegBetuvel } from './szamok';
import { pripominkySplatek, splatky, isoDatum, cislo } from '../terminy';
import { formatCislo, formatDatum } from '../dokument';
import { PTK, PP, TIP_SZEMELYAZONOSSAG, TIP_TANUK } from './forrasok';

const ft = (n: number) => `${formatCislo(String(n))} Ft`;

export const reszletfizetesiMegallapodas: Sablona = {
  kod: 'HU-RESZLETFIZETES',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Részletfizetési megállapodás',
  podnadpis: 'a Polgári Törvénykönyvről szóló 2013. évi V. törvény alapján',
  souborPdf: 'reszletfizetesi-megallapodas',
  paticka: 'Ingyenesen készült · HU-RESZLETFIZETES v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek, ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'hitelező', vpravo: 'adós' },
  slovo: { n: 'megállapodás', g: 'megállapodás', a: 'megállapodást', l: 'megállapodásban' },
  coDal: [
    'Nyomtassa ki két példányban; mindketten írják alá mindkettőt, és mindkét fél kapjon egyet.',
    'A részleteket lehetőleg átutalással fizessék – a banki igazolás a legjobb bizonyíték. Készpénznél kérjen és adjon nyugtát.',
    'A naptárba mentett emlékeztetők segítenek, hogy egy részlet se maradjon el.',
  ],
  prilohy: (d) => {
    const s = splatky(d);
    if (!s.length) return [];
    return [
      {
        nadpis: '1. számú melléklet · Törlesztési ütemterv',
        popis: `Összesen ${ft(cislo(d.castka))} ${s.length} havi részletben, minden hónap ${Math.round(cislo(d.splatka_den))}. napjáig.`,
        hlavicka: ['Részlet', 'Esedékes', 'Összeg', 'Hátralék'],
        radky: s.map((x) => [`${x.poradi}.`, formatDatum(isoDatum(x.datum), 'hu'), ft(x.castka), ft(x.zbyva)]),
        vpravo: [2, 3],
        poznamka: 'Az ütemterv a megállapodott részletek alapján készült; eltérés esetén a megállapodás szövege az irányadó.',
      },
    ];
  },
  pripominky: (d) => pripominkySplatek(d, 'Részlet', 'Ft', { celkem: (n) => `összesen ${n} részlet`, posledni: 'utolsó' }),
  kontrola: [
    'A részletfizetési megállapodást a hitelező és az adós is aláírja – a tartozáselismerő nyilatkozatot ezzel szemben csak az adós.',
    'Pontosan írja le, miből ered a tartozás (pl. „a 2026. 03. 15-én kelt 2026/14. számú számla”), és mennyi a teljes összeg.',
    'Ha az adós elismeri a tartozást, az megszakítja az elévülést – az 5 éves elévülési idő újra kezdődik.',
    'Hogy hány elmaradt részlet után válik esedékessé a teljes hátralék, azt a felek szabadon megállapodják – ezt rögzíti a megállapodás.',
    'Kamat esetén a mértéket évi százalékban adja meg. Túlzott (uzsorás) kamat semmis lehet.',
    TIP_TANUK.replace(' – a forgalmi átíráshoz ez kell', ' – vita esetén ez erősebb bizonyíték'),
    TIP_SZEMELYAZONOSSAG,
  ],
  zdroje: [PTK, PP],
  kroky: [
    {
      id: 'felek',
      nazev: 'Hitelező és adós',
      pole: [
        { id: 'k_jmeno', typ: 'text', popis: 'Hitelező neve', napoveda: 'Akinek a pénz jár. Cég esetén a cégnév és a cégjegyzékszám.', placeholder: 'pl. Kovács János', sirka: 34, autocomplete: 'name' },
        { id: 'k_szul', typ: 'text', popis: 'Születési hely, idő', napoveda: 'Magánszemélynél segít az azonosításban.', placeholder: 'pl. Pécs, 1975. 04. 12.', sirka: 26, polovina: true },
        { id: 'k_anyja', typ: 'text', popis: 'Anyja neve', napoveda: 'A személyi igazolvány szerint.', placeholder: 'pl. Tóth Mária', sirka: 26, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Lakcím vagy székhely', napoveda: 'Ahol a hitelező leveleket fogad.', placeholder: 'pl. 7621 Pécs, Király utca 8.', sirka: 46 },
        { id: 'p_jmeno', typ: 'text', popis: 'Adós neve', napoveda: 'Aki tartozik és a részleteket fizeti.', placeholder: 'pl. Nagy Péter', sirka: 34 },
        { id: 'p_szul', typ: 'text', popis: 'Születési hely, idő', napoveda: 'A személyi igazolvány szerint.', placeholder: 'pl. Szeged, 1982. 09. 30.', sirka: 26, polovina: true },
        { id: 'p_anyja', typ: 'text', popis: 'Anyja neve', napoveda: 'A személyi igazolvány szerint.', placeholder: 'pl. Kiss Erzsébet', sirka: 26, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Lakcím', napoveda: 'Az adós állandó lakcíme.', placeholder: 'pl. 6720 Szeged, Kárász utca 5.', sirka: 46 },
      ],
    },
    {
      id: 'tartozas',
      nazev: 'A tartozás',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'A tartozás teljes összege (Ft)', napoveda: 'A még meg nem fizetett teljes összeg, amelyet részletekben fizetnek meg.', placeholder: 'pl. 600 000', sirka: 14, polovina: true },
        { id: 'jogcim', typ: 'text', popis: 'A tartozás jogcíme', napoveda: 'Miből ered a tartozás: számla, kölcsön, kártérítés, bérleti díj stb.', placeholder: 'pl. a 2026. 03. 15-én kelt 2026/14. számú számla', sirka: 56 },
        {
          id: 'elismeres',
          typ: 'volba',
          popis: 'Elismeri az adós a tartozást?',
          napoveda: 'Az elismerés után az adósnak kell bizonyítania, ha a tartozás mégsem áll fenn, és megszakad az elévülés. Vitatott tartozásnál válassza a „nem” lehetőséget.',
          moznosti: [
            { hodnota: 'igen', popis: 'Igen, elismeri jogcímében és összegében' },
            { hodnota: 'nem', popis: 'Nem, csak a fizetés ütemezésében állapodnak meg' },
          ],
        },
        {
          id: 'kamat',
          typ: 'volba',
          popis: 'Kamat a részletfizetés idejére',
          napoveda: 'Magánszemélyek között gyakran kamatmentes. Ha kamatot kötnek ki, évi százalékban adja meg.',
          moznosti: [
            { hodnota: 'nem', popis: 'Kamatmentes' },
            { hodnota: 'igen', popis: 'Kamatos' },
          ],
        },
        { id: 'kamat_merteke', typ: 'cislo', popis: 'Kamat mértéke', napoveda: 'A mindenkori hátralék után, évente.', placeholder: 'pl. 5', jednotka: '% évente', sirka: 6, polovina: true, zobrazitKdyz: { pole: 'kamat', je: 'igen' } },
      ],
    },
    {
      id: 'reszletek',
      nazev: 'Részletek',
      popis: 'Ebből készül a törlesztési ütemterv és a naptár-emlékeztető.',
      pole: [
        { id: 'splatka', typ: 'castka', popis: 'Havi részlet (Ft)', napoveda: 'Az utolsó részlet kisebb lehet.', placeholder: 'pl. 50 000', sirka: 12, polovina: true },
        { id: 'splatka_den', typ: 'cislo', popis: 'A hónap napja', napoveda: 'Minden hónapban eddig a napig kell fizetni (1–31).', placeholder: 'pl. 10', sirka: 4, polovina: true },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Az első részlet hónapja', napoveda: 'Elég a hónapot kiválasztani; a nap a fenti napra igazodik.', sirka: 14, polovina: true },
        { id: 'ucet', typ: 'text', popis: 'Hitelező bankszámlaszáma', napoveda: 'Erre a számlára fizeti az adós a részleteket.', placeholder: 'pl. 11773016-12345678-00000000', sirka: 32 },
        {
          id: 'elmaradas',
          typ: 'volba',
          popis: 'Mikor válik esedékessé a teljes hátralék?',
          napoveda: 'Ha az adós ennyi részlettel késik, a hitelező a teljes hátralékot egyszerre követelheti.',
          moznosti: [
            { hodnota: 'egy', popis: 'Egy részlet elmaradásakor' },
            { hodnota: 'ket', popis: 'Két részlet elmaradásakor' },
          ],
        },
        { id: 'turelmi', typ: 'cislo', popis: 'Türelmi idő (nap)', napoveda: 'Ennyi nap késés még nem jár következménnyel. Ha nem kell, írjon 0-t.', placeholder: 'pl. 8', jednotka: 'nap', sirka: 4, polovina: true },
      ],
    },
    {
      id: 'zaro',
      nazev: 'Tanúk és aláírás',
      popis: 'A tanúk nem kötelezők, de vita esetén erősebb bizonyítékot jelentenek.',
      pole: [
        { id: 't1_jmeno', typ: 'text', popis: '1. tanú neve (nem kötelező)', napoveda: 'Nem lehet a hitelező vagy az adós.', placeholder: 'pl. Horváth Gábor', sirka: 30, polovina: true },
        { id: 't1_adresa', typ: 'text', popis: '1. tanú lakcíme', napoveda: 'A tanú lakcíme.', placeholder: 'pl. 1052 Budapest, Váci utca 10.', sirka: 40, polovina: true },
        { id: 't2_jmeno', typ: 'text', popis: '2. tanú neve (nem kötelező)', napoveda: 'Nem lehet a hitelező vagy az adós.', placeholder: 'pl. Varga Zsófia', sirka: 30, polovina: true },
        { id: 't2_adresa', typ: 'text', popis: '2. tanú lakcíme', napoveda: 'A tanú lakcíme.', placeholder: 'pl. 1052 Budapest, Petőfi utca 2.', sirka: 40, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Helység', napoveda: 'Ahol a megállapodást aláírják.', placeholder: 'pl. Pécs', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Kelte', napoveda: 'A mai napot írtuk be.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: {
    osszeg_betuvel: (d) => osszegBetuvel(d.castka),
    elso_honap: (d) => {
      const m = /^(\d{4})-(\d{2})/.exec(typeof d.prvni_splatka === 'string' ? d.prvni_splatka : '');
      return m ? `${m[1]}. ${m[2]}.` : '';
    },
    reszletek_szama: (d) => {
      const s = splatky(d);
      return s.length ? String(s.length) : '';
    },
  },
  clanky: [
    {
      nadpis: 'Szerződő felek',
      odstavce: [
        '**Hitelező:** {{k_jmeno}}, születési hely, idő: {{k_szul}}, anyja neve: {{k_anyja}}, lakcím/székhely: {{k_adresa}}',
        '**Adós:** {{p_jmeno}}, születési hely, idő: {{p_szul}}, anyja neve: {{p_anyja}}, lakcím: {{p_adresa}}',
      ],
    },
    {
      nadpis: 'A tartozás',
      vysvetleni: 'Mennyi a tartozás, és miből ered.',
      odstavce: [
        'Az adós a hitelezőnek **{{castka}}**, azaz {{osszeg_betuvel}} összeggel tartozik. A tartozás jogcíme: {{jogcim}}.',
        {
          volba: 'elismeres',
          uvodVzor: 'Tartozáselismerés (egyet jelöljön meg):',
          moznosti: {
            igen: 'Az adós a tartozást jogcímében és összegében kifejezetten **elismeri**.',
            nem: 'A felek e megállapodással kizárólag a megfizetés ütemezésében állapodnak meg; a megállapodás a tartozás elismerését nem jelenti.',
          },
        },
      ],
    },
    {
      nadpis: 'Részletfizetés',
      vysvetleni: 'Mennyit és mikor fizet az adós. A részletek a mellékelt ütemtervben szerepelnek.',
      odstavce: [
        'A hitelező hozzájárul, hogy az adós a tartozást havi **{{splatka}}** részletekben, minden hónap {{splatka_den}}. napjáig, {{elso_honap}} hónaptól kezdve, összesen {{reszletek_szama}} részletben fizesse meg. Az utolsó részlet kisebb lehet.',
        'A részleteket az adós a hitelező {{ucet}} számú bankszámlájára fizeti, vagy készpénzben, nyugta ellenében. A fizetés napja az a nap, amikor az összeg a hitelező számláján jóváírásra kerül. Az adós a hátralékot határidő előtt is megfizetheti.',
        {
          volba: 'kamat',
          uvodVzor: 'Kamat (egyet jelöljön meg):',
          moznosti: {
            nem: 'A részletfizetés idejére a hitelező kamatot nem számít fel.',
            igen: 'Az adós a mindenkori hátralék után évi {{kamat_merteke}} kamatot fizet, a részletekkel együtt.',
          },
        },
      ],
    },
    {
      nadpis: 'Késedelem',
      vysvetleni: 'Mi történik, ha az adós nem fizet időben: a kedvezményes részletfizetés megszűnik.',
      odstavce: [
        {
          volba: 'elmaradas',
          uvodVzor: 'A részletfizetési kedvezmény elvesztése (egyet jelöljön meg):',
          moznosti: {
            egy: 'Ha az adós bármely részlet megfizetésével {{turelmi}} napot meghaladó késedelembe esik, a részletfizetési kedvezmény megszűnik, és a teljes hátralék egy összegben esedékessé válik.',
            ket: 'Ha az adós két részlet megfizetésével {{turelmi}} napot meghaladó késedelembe esik, a részletfizetési kedvezmény megszűnik, és a teljes hátralék egy összegben esedékessé válik.',
          },
        },
        'Amíg az adós a részleteket e megállapodás szerint fizeti, a hitelező a tartozás behajtására bírósági vagy egyéb eljárást nem indít.',
      ],
    },
    {
      nadpis: 'Záró rendelkezések',
      odstavce: [
        'A megállapodásban nem szabályozott kérdésekben a Polgári Törvénykönyv rendelkezései az irányadók. A megállapodás módosítása csak írásban érvényes.',
        'A megállapodás két egyező példányban készült, mindkét fél egy-egy példányt kap.',
        '**1. tanú:** {{t1_jmeno}}, lakcím: {{t1_adresa}}, aláírás: ………………………………',
        '**2. tanú:** {{t2_jmeno}}, lakcím: {{t2_adresa}}, aláírás: ………………………………',
      ],
    },
  ],
};
