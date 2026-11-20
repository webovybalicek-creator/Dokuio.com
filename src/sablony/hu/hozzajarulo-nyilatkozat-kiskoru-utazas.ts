/**
 * Szülői hozzájáruló nyilatkozat kiskorú külföldre utazásához – Magyarország.
 * Forrás (megnyitva 20. 11. 2026): e-justice, „A gyermekek jogszerű külföldre vitele – Magyarország” (frissítve
 * 2024. 01. 15.): közös szülői felügyeletnél nem huzamos utazáshoz a másik szülő hozzájárulása a magyar jog szerint
 * nem kell; huzamos tartózkodáshoz / letelepedéshez igen (vita esetén gyámhivatal). A gyermeknek érvényes úti okmány
 * kell. A célország, a tranzitországok és a légitársaságok saját követelményei eltérhetnek → Konzuli Szolgálat,
 * utazási tanácsok országonként. Mezők a Külügyminisztérium (londoni nagykövetség) szülői hozzájáruló nyilatkozat
 * mintája alapján (név, születési hely és idő, okmányszám, lakcím, két tanú). Teljes bizonyító erő: két tanú vagy
 * közjegyző/ügyvéd (Pp. 325. § (1)). Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { EJUSTICE_GYERMEK, KONZINFO_ORSZAGOK, PP } from './forrasok';

export const kiskoruUtazas: Sablona = {
  kod: 'HU-KISKORU-UTAZAS',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Szülői hozzájáruló nyilatkozat kiskorú külföldre utazásához',
  podnadpis: 'a törvényes képviselő(k) hozzájárulása kiskorú gyermek külföldi utazásához',
  souborPdf: 'hozzajarulo-nyilatkozat-kiskoru-utazas',
  paticka: 'Ingyenesen készült · HU-KISKORU-UTAZAS v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a nyilatkozók felelnek, összetett ügyben ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: '1. szülő / törvényes képviselő', vpravo: '2. szülő / törvényes képviselő' },
  slovo: { n: 'nyilatkozat', g: 'nyilatkozat', a: 'nyilatkozatot', l: 'nyilatkozatban' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  podpisNaZarizeni: false,
  podpisPoznamka:
    'A nyilatkozatot kézzel írja alá, két tanú előtt vagy közjegyzőnél – így a határon és a légitársaságnál is hitelesebb. Ha a célország hitelesített vagy lefordított nyilatkozatot kér, intézze azt is.',
  coDal: [
    'A nyilatkozatot az a szülő (szülők) írja alá, aki nem utazik a gyermekkel – két tanú előtt, vagy közjegyzőnél.',
    'A gyermek vagy a kísérője vigye magával az eredeti nyilatkozatot, a gyermek érvényes úti okmányát; érdemes a születési anyakönyvi kivonat másolatát is magukkal vinni.',
    'Nézze meg a célország és az átutazott országok beutazási feltételeit a Konzuli Szolgálat utazási tanácsainál, és kérdezze meg a légitársaságot is.',
    'Ha a célország idegen nyelvű, fordított vagy hitelesített nyilatkozatot kér, intézze ezt az indulás előtt (pl. közjegyzőnél).',
  ],
  kontrola: [
    'A magyar jog szerint közös szülői felügyeletnél rövid (nem huzamos) utazáshoz a másik szülő hozzájárulása nem kötelező – huzamos tartózkodáshoz vagy letelepedéshez viszont igen ([e-justice](https://e-justice.europa.eu/pdf-export/2454_hu)).',
    'Más országok, átutazott országok és légitársaságok ennél szigorúbbak lehetnek – nézze meg a [Konzuli Szolgálat utazási tanácsait](https://konzinfo.mfa.gov.hu/utazas/utazasi-tanacsok-orszagonkent) a célországról.',
    'A nyilatkozat különösen akkor hasznos, ha a gyermek nem mindkét szülővel, nagyszülővel, rokonnal, csoporttal vagy egyedül utazik, vagy ha a gyermek és a szülő neve eltér.',
    'A neveket és okmányszámokat pontosan úgy írja be, ahogy az útlevélben vagy a személyi igazolványban szerepelnek.',
    'Konkrét országot és időszakot adjon meg – az általános („bárhová, bármikor”) nyilatkozatot elutasíthatják.',
    'Két tanú aláírásával (nevük és lakcímük feltüntetésével) a nyilatkozat teljes bizonyító erejű magánokirat lesz; közjegyzői hitelesítés még erősebb. Tanú nem lehet a nyilatkozó szülő.',
    'Külföldre költözéshez vagy huzamos tartózkodáshoz a másik szülő hozzájárulása kell; ha nem adja meg, a gyámhivatal dönthet. Ez a minta utazáshoz készült.',
  ],
  zdroje: [EJUSTICE_GYERMEK, KONZINFO_ORSZAGOK, PP],
  kroky: [
    {
      id: 'szulok',
      nazev: 'Szülők (törvényes képviselők)',
      popis: 'Általában a szülők. Ha a gyermeket az egyik szülő kíséri, elég a másik szülő nyilatkozata.',
      pole: [
        { id: 'sz1_nev', typ: 'text', popis: '1. szülő – név', napoveda: 'Szülő vagy más törvényes képviselő (pl. gyám). Ahogy a személyi igazolványban szerepel.', placeholder: 'pl. Kovács Anna', sirka: 34, autocomplete: 'name' },
        { id: 'sz1_szul', typ: 'text', popis: 'Születési hely, idő', napoveda: 'A személyi igazolvány szerint.', placeholder: 'pl. Budapest, 1985. 06. 21.', sirka: 26, polovina: true },
        { id: 'sz1_okmany', typ: 'text', popis: 'Személyi igazolvány vagy útlevél száma', napoveda: 'Segít a hatóságoknak azonosítani Önt.', placeholder: 'pl. 123456AB', sirka: 14, polovina: true },
        { id: 'sz1_cim', typ: 'text', popis: 'Lakcím', napoveda: 'A lakcímkártya szerint.', placeholder: 'pl. 1052 Budapest, Váci utca 10.', sirka: 46 },
        { id: 'sz1_tel', typ: 'text', popis: 'Telefonszám', napoveda: 'Hogy a határon vagy a repülőtéren elérjék. Országhívóval adja meg.', placeholder: 'pl. +36 30 123 4567', sirka: 18, polovina: true },
        { id: 'sz2_nev', typ: 'text', popis: '2. szülő – név (nem kötelező)', napoveda: 'A másik szülő. Ha ő kíséri a gyermeket, nem kell aláírnia – ilyenkor hagyja üresen.', placeholder: 'pl. Kovács Péter', sirka: 34 },
        { id: 'sz2_szul', typ: 'text', popis: 'Születési hely, idő', napoveda: 'A személyi igazolvány szerint.', placeholder: 'pl. Debrecen, 1983. 02. 14.', sirka: 26, polovina: true },
        { id: 'sz2_okmany', typ: 'text', popis: 'Személyi igazolvány vagy útlevél száma', napoveda: 'A második szülő okmánya szerint.', placeholder: 'pl. 654321CD', sirka: 14, polovina: true },
        { id: 'sz2_tel', typ: 'text', popis: 'Telefonszám', napoveda: 'Országhívóval.', placeholder: 'pl. +36 20 765 4321', sirka: 18, polovina: true },
      ],
    },
    {
      id: 'gyermek',
      nazev: 'Gyermek',
      pole: [
        { id: 'gy_nev', typ: 'text', popis: 'A gyermek neve', napoveda: 'Pontosan úgy, ahogy a gyermek úti okmányában szerepel.', placeholder: 'pl. Kovács Bence', sirka: 34 },
        { id: 'gy_szul', typ: 'text', popis: 'Születési hely, idő', napoveda: 'Az úti okmány szerint.', placeholder: 'pl. Budapest, 2015. 08. 03.', sirka: 26, polovina: true },
        { id: 'gy_okmany', typ: 'text', popis: 'Útlevél vagy személyi igazolvány száma', napoveda: 'Annak az okmánynak a száma, amellyel a gyermek utazik.', placeholder: 'pl. BE1234567', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'utazas',
      nazev: 'Utazás',
      pole: [
        {
          id: 'kiseret',
          typ: 'volba',
          popis: 'Kivel utazik a gyermek?',
          napoveda: 'A kísérőt név szerint kell megnevezni.',
          moznosti: [
            { hodnota: 'szulo', popis: 'A másik szülővel' },
            { hodnota: 'mas', popis: 'Más személlyel (nagyszülő, rokon, táborvezető, tanár…)' },
            { hodnota: 'egyedul', popis: 'Egyedül (pl. a légitársaság kísérő szolgáltatásával)' },
          ],
        },
        { id: 'k_nev', typ: 'text', popis: 'Kísérő neve', napoveda: 'Aki a gyermekkel utazik.', placeholder: 'pl. Kovács Mária', sirka: 34, zobrazitKdyz: { pole: 'kiseret', je: ['szulo', 'mas'] } },
        { id: 'k_szul', typ: 'text', popis: 'Kísérő születési helye, ideje', napoveda: 'A kísérő okmánya szerint.', placeholder: 'pl. Eger, 1958. 11. 02.', sirka: 26, polovina: true, zobrazitKdyz: { pole: 'kiseret', je: ['szulo', 'mas'] } },
        { id: 'k_okmany', typ: 'text', popis: 'Kísérő okmányának száma', napoveda: 'Útlevél vagy személyi igazolvány, amellyel a kísérő utazik.', placeholder: 'pl. 112233EF', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'kiseret', je: ['szulo', 'mas'] } },
        { id: 'k_viszony', typ: 'text', popis: 'Kapcsolata a gyermekkel', napoveda: 'Pl. nagymama, nagynéni, táborvezető.', placeholder: 'pl. nagymama', sirka: 16, polovina: true, zobrazitKdyz: { pole: 'kiseret', je: 'mas' } },
        { id: 'orszag', typ: 'text', popis: 'Célország (és átutazott országok)', napoveda: 'Minden ország, ahová a gyermek utazik vagy amelyen átutazik. Mindegyik beutazási feltételeit nézze meg.', placeholder: 'pl. Horvátország (Szlovénián át)', sirka: 46 },
        { id: 'tol', typ: 'datum', popis: 'Indulás', napoveda: 'Az utazás első napja.', sirka: 14, polovina: true },
        { id: 'ig', typ: 'datum', popis: 'Hazaérkezés', napoveda: 'Az utazás utolsó napja.', sirka: 14, polovina: true },
        { id: 'cel', typ: 'text', popis: 'Az utazás célja (nem kötelező)', napoveda: 'Pl. nyaralás, tábor, osztálykirándulás.', placeholder: 'pl. nyári nyaralás', sirka: 30 },
      ],
    },
    {
      id: 'tanuk',
      nazev: 'Tanúk és aláírás',
      popis: 'Két tanú aláírásával a nyilatkozat teljes bizonyító erejű magánokirat. Közjegyzőnél tanú nem kell.',
      pole: [
        { id: 't1_jmeno', typ: 'text', popis: '1. tanú neve', napoveda: 'Nem lehet a nyilatkozó szülő.', placeholder: 'pl. Horváth Gábor', sirka: 30, polovina: true },
        { id: 't1_adresa', typ: 'text', popis: '1. tanú lakcíme', napoveda: 'A tanú lakcíme.', placeholder: 'pl. 1052 Budapest, Petőfi utca 2.', sirka: 40, polovina: true },
        { id: 't2_jmeno', typ: 'text', popis: '2. tanú neve', napoveda: 'Nem lehet a nyilatkozó szülő.', placeholder: 'pl. Varga Zsófia', sirka: 30, polovina: true },
        { id: 't2_adresa', typ: 'text', popis: '2. tanú lakcíme', napoveda: 'A tanú lakcíme.', placeholder: 'pl. 1137 Budapest, Pozsonyi út 7.', sirka: 40, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Helység', napoveda: 'Ahol a nyilatkozatot aláírják.', placeholder: 'pl. Budapest', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Kelte', napoveda: 'A mai napot írtuk be; közjegyzőnél a hitelesítés napja is jó.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Nyilatkozó szülők (törvényes képviselők)',
      vysvetleni: 'Ki adja a hozzájárulást. A telefonszám segít, ha a határon vagy a repülőtéren keresik Önt.',
      odstavce: [
        '{{sz1_nev}}, születési hely, idő: {{sz1_szul}}, okmányszám: {{sz1_okmany}}, lakcím: {{sz1_cim}}, telefon: {{sz1_tel}}',
        '{{sz2_nev}}, születési hely, idő: {{sz2_szul}}, okmányszám: {{sz2_okmany}}, telefon: {{sz2_tel}}',
      ],
    },
    {
      nadpis: 'Hozzájárulás',
      vysvetleni: 'Kivel, hová és mikor utazhat a gyermek. Minél konkrétabb, annál kevesebb kérdés lesz a határon.',
      odstavce: [
        'mint a kiskorú gyermek törvényes képviselője (képviselői) hozzájárulok (hozzájárulunk), hogy',
        '{{gy_nev}} (születési hely, idő: {{gy_szul}}, úti okmány száma: {{gy_okmany}})',
        {
          volba: 'kiseret',
          uvodVzor: 'külföldre utazzon (egyet jelöljön meg):',
          moznosti: {
            szulo: 'a másik szülő, {{k_nev}} (születési hely, idő: {{k_szul}}, okmányszám: {{k_okmany}}) kíséretében külföldre utazzon',
            mas: '{{k_nev}} (születési hely, idő: {{k_szul}}, okmányszám: {{k_okmany}}, a gyermek {{k_viszony}}) kíséretében külföldre utazzon',
            egyedul: 'egyedül külföldre utazzon',
          },
        },
        'a következő országba (országokba): {{orszag}}, {{tol}} és {{ig}} között, az utazás célja: {{cel}}.',
        'Az utazás idejére megbízom (megbízzuk) a kísérőt a gyermek felügyeletével és a gyermek érdekében szükséges sürgős döntések meghozatalával, ideértve a szükséges egészségügyi ellátáshoz való hozzájárulást is.',
      ],
    },
    {
      nadpis: 'Tanúk',
      vysvetleni: 'A tanúk azt igazolják, hogy a nyilatkozatot a szülő előttük írta alá.',
      odstavce: [
        'Előttünk mint tanúk előtt:',
        '**1. tanú:** {{t1_jmeno}}, lakcím: {{t1_adresa}}, aláírás: ………………………………',
        '**2. tanú:** {{t2_jmeno}}, lakcím: {{t2_adresa}}, aláírás: ………………………………',
      ],
    },
  ],
};
