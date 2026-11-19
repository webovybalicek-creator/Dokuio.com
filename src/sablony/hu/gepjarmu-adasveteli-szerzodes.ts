/**
 * Gépjármű adásvételi szerződés – Magyarország, magánszemélyek között. Ptk. adásvétel; tulajdonjog-fenntartás.
 * Teljes bizonyító erejű magánokirat (Pp. 325. § (1) b) – két tanú), kötelező tartalom: 304/2009. Korm. r. 3. §.
 * Eladó: bejelentés 15 napon belül (304/2009. Korm. r. 2. § (1)), vevő: átírás 15 napon belül (Kknyt. 33. § (1) b)), vagyonszerzési illeték (Itv.), KGFB (2009. évi LXII. tv.).
 */
import type { Sablona } from '../typy';
import { osszegBetuvel } from './szamok';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { PTK, PP, KKNYT, KORM_304, ITV, KGFB, KORMANYABLAK, TIP_SZEMELYAZONOSSAG, TIP_KESZPENZ, TIP_TANUK } from './forrasok';

export const gepjarmuAdasvetel: Sablona = {
  kod: 'HU-AUTO',
  verze: '1.1',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Gépjármű adásvételi szerződés',
  podnadpis: 'a Polgári Törvénykönyvről szóló 2013. évi V. törvény adásvételre vonatkozó szabályai alapján',
  souborPdf: 'gepjarmu-adasveteli-szerzodes',
  paticka: 'Ingyenesen készült · HU-AUTO v1.1 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek, ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'eladó', vpravo: 'vevő' },
  slovo: { n: 'szerződés', g: 'szerződés', a: 'szerződést', l: 'szerződésben' },
  coDal: [
    'Nyomtassa ki három példányban (eladó, vevő, okmányiroda), és mindkét fél, valamint a két tanú írja alá mindegyiket.',
    'Adja át az autót, a kulcsokat és az okmányokat – legjobb átadás-átvételi jegyzőkönyvvel.',
    'Eladó: 15 napon belül jelentse be a tulajdonosváltozást (kormányablak vagy elektronikusan), és értesítse a biztosítóját.',
    'Vevő: kösse meg a kötelező biztosítást, és 15 napon belül kérje az átírást.',
  ],
  pripominky: (d) => {
    const od = naDatum(d.datum_podpisu);
    if (!od) return [];
    return [
      { nazev: 'Tulajdonosváltozás bejelentése (eladó)', datum: isoDatum(pridejDny(od, 15)), popis: '15 nap a tulajdonjog-változástól.' },
      { nazev: 'Forgalmi átírás kérelmezése (vevő)', datum: isoDatum(pridejDny(od, 15)), popis: '15 nap a szerződéskötéstől; a vagyonszerzési illetéket a vevő fizeti.' },
    ];
  },
  kontrola: [
    'Az eladó a forgalmi engedélyben és a törzskönyvben szereplő tulajdonos – ellenőrizze mindkét okmányt.',
    'Az alvázszám (VIN) az okmányokban egyezik az autón lévővel.',
    'Az autó előéletét, kilométer-állását és műszaki vizsgáit a [kormányzati járműadat-lekérdezésben](https://kormanyablak.hu/) ellenőrizheti.',
    'Lízingelt, hitelfedezetként terhelt vagy elidegenítési tilalom alatt álló autót az eladó nem adhat el szabadon.',
    TIP_TANUK,
    TIP_SZEMELYAZONOSSAG,
    TIP_KESZPENZ,
    'Mindkét félnek 15 napja van: a vevő kéri az átírást (és fizeti a vagyonszerzési illetéket), az eladó bejelenti az eladást. A vevő a birtokbavételtől köt kötelező biztosítást.',
    'A hatóság csak akkor fogadja el a szerződést, ha szerepel benne a birtokba adás időpontja a kilométeróra-állással és a tulajdonjog-változás napja – ezeket ne hagyja üresen.',
  ],
  zdroje: [PTK, PP, KKNYT, KORM_304, ITV, KGFB, KORMANYABLAK],

  kroky: [
    {
      id: 'felek',
      nazev: 'Eladó és vevő',
      popis: 'A vevő adatait még nem kell tudnia. Ha üresen hagyja, a szerződésben vonal marad kézi kitöltésre.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Eladó neve', napoveda: 'Az autó tulajdonosa, ahogy a személyi igazolványban szerepel.', placeholder: 'pl. Kovács János', sirka: 34, autocomplete: 'name' },
        { id: 'p_anyja', typ: 'text', popis: 'Anyja neve', sirka: 26, polovina: true },
        { id: 'p_szul', typ: 'text', popis: 'Születési hely, idő', placeholder: 'pl. Budapest, 1980. 01. 01.', sirka: 26, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Lakcím', placeholder: 'pl. 1011 Budapest, Fő utca 1.', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Vevő neve', placeholder: 'pl. Nagy Anna', sirka: 34 },
        { id: 'k_anyja', typ: 'text', popis: 'Anyja neve', sirka: 26, polovina: true },
        { id: 'k_szul', typ: 'text', popis: 'Születési hely, idő', sirka: 26, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Lakcím', placeholder: 'pl. 6720 Szeged, Kárász utca 5.', sirka: 46 },
      ],
    },
    {
      id: 'jarmu',
      nazev: 'Jármű',
      popis: 'Az adatokat a forgalmi engedélyből másolja át.',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Gyártmány és típus', placeholder: 'pl. Suzuki Vitara', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'Alvázszám (VIN)', napoveda: '17 karakter a forgalmi engedélyben.', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Forgalmi rendszám', placeholder: 'pl. AA BB-123', sirka: 12, polovina: true },
        { id: 'motor', typ: 'text', popis: 'Motorszám', sirka: 16, polovina: true },
        { id: 'forgalmi', typ: 'text', popis: 'Forgalmi engedély száma', sirka: 14, polovina: true },
        { id: 'torzskonyv', typ: 'text', popis: 'Törzskönyv száma', sirka: 14, polovina: true },
        { id: 'km', typ: 'cislo', popis: 'Kilométeróra állása', placeholder: 'pl. 154320', jednotka: 'km', sirka: 12, polovina: true },
        { id: 'klice', typ: 'cislo', popis: 'Kulcsok száma', placeholder: 'pl. 2', sirka: 4, polovina: true },
        { id: 'birtok_datum', typ: 'datum', popis: 'Birtokba adás napja', napoveda: 'A hatóság kötelezően kéri.', sirka: 14, polovina: true, vychozi: 'dnes' },
        { id: 'birtok_ido', typ: 'text', popis: 'Birtokba adás időpontja', placeholder: 'pl. 14:30', sirka: 8, polovina: true },
      ],
    },
    {
      id: 'allapot',
      nazev: 'Állapot',
      pole: [
        {
          id: 'hibak',
          typ: 'volba',
          popis: 'Ismert hibák',
          napoveda: 'Írja le őszintén – a vevő arra a hibára, amelyről tudott, később nem hivatkozhat.',
          moznosti: [
            { hodnota: 'nincs', popis: 'Az eladó nem tud hibáról' },
            { hodnota: 'van', popis: 'Az autónak van ismert hibája' },
          ],
        },
        { id: 'hibak_leiras', typ: 'textarea', popis: 'A hibák leírása', placeholder: 'pl. repedt szélvédő', sirka: 64, zobrazitKdyz: { pole: 'hibak', je: 'van' } },
      ],
    },
    {
      id: 'ar',
      nazev: 'Vételár és fizetés',
      pole: [
        { id: 'cena', typ: 'castka', popis: 'Vételár (Ft)', napoveda: 'Betűvel automatikusan kiírjuk.', placeholder: 'pl. 2500000', sirka: 14, polovina: true },
        {
          id: 'platba',
          typ: 'volba',
          popis: 'Fizetés módja',
          moznosti: [
            { hodnota: 'keszpenz', popis: 'Készpénzben az aláíráskor' },
            { hodnota: 'utalas', popis: 'Átutalással egy adott napig' },
          ],
        },
        { id: 'ucet', typ: 'text', popis: 'Eladó bankszámlaszáma', placeholder: '00000000-00000000-00000000', sirka: 32, zobrazitKdyz: { pole: 'platba', je: 'utalas' } },
        { id: 'splatnost', typ: 'datum', popis: 'Fizetési határidő', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'platba', je: 'utalas' } },
        { id: 'hatalyba', typ: 'datum', popis: 'A tulajdonjog-változás napja', napoveda: 'A teljes vételár megfizetésének napja. A hatóság kötelezően kéri.', sirka: 14, polovina: true },
        { id: 't1_jmeno', typ: 'text', popis: '1. tanú neve', napoveda: 'Nem lehet a szerződő fél.', sirka: 30, polovina: true },
        { id: 't1_adresa', typ: 'text', popis: '1. tanú lakcíme', sirka: 40, polovina: true },
        { id: 't2_jmeno', typ: 'text', popis: '2. tanú neve', sirka: 30, polovina: true },
        { id: 't2_adresa', typ: 'text', popis: '2. tanú lakcíme', sirka: 40, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Helység', placeholder: 'pl. Budapest', sirka: 18, polovina: true },
        { id: 'datum_podpisu', typ: 'datum', popis: 'A szerződés kelte', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: { cena_betuvel: (d) => osszegBetuvel(d.cena) },

  clanky: [
    {
      nadpis: 'Szerződő felek',
      vysvetleni: 'Kik kötik a szerződést. Az adatok egyezzenek az igazolványokkal.',
      odstavce: [
        '**Eladó:** {{p_jmeno}}, anyja neve: {{p_anyja}}, születési hely, idő: {{p_szul}}, lakcím: {{p_adresa}}',
        '**Vevő:** {{k_jmeno}}, anyja neve: {{k_anyja}}, születési hely, idő: {{k_szul}}, lakcím: {{k_adresa}}',
      ],
    },
    {
      nadpis: 'A szerződés tárgya',
      vysvetleni: 'Melyik autóról van szó. A legfontosabb az alvázszám.',
      odstavce: [
        'Az eladó kijelenti, hogy kizárólagos tulajdonosa a következő gépjárműnek: {{znacka}}, alvázszám: {{vin}}, forgalmi rendszám: {{spz}}, motorszám: {{motor}}, forgalmi engedély száma: {{forgalmi}}, törzskönyv száma: {{torzskonyv}} (a továbbiakban: gépjármű).',
        'Az eladó kijelenti, hogy a gépjármű per-, teher- és igénymentes, harmadik személynek nincs rajta joga, nem áll lízing, zálogjog, elidegenítési és terhelési tilalom alatt.',
        'Az eladó eladja, a vevő megvásárolja a gépjárművet a jelen szerződésben meghatározott vételárért. A jogügylet jellege: visszterhes (adásvétel).',
        'Az eladó kijelenti, hogy a gépjármű tulajdonjoga bizalmi vagyonkezelés alapján fennálló kezelt vagyonba nem tartozik.',
      ],
    },
    {
      nadpis: 'A gépjármű állapota',
      vysvetleni: 'Mit tud az eladó az autóról.',
      odstavce: [
        'A kilométeróra állása a szerződéskötés napján: {{km}}. Az eladó tudomása szerint a kilométeróra állását nem módosították.',
        {
          volba: 'hibak',
          uvodVzor: 'Ismert hibák (egy lehetőséget jelöljön meg):',
          moznosti: {
            nincs: 'Az eladó a gépjármű hibájáról nem tud.',
            van: 'Az eladó tájékoztatta a vevőt a gépjármű következő hibáiról: {{hibak_leiras}}',
          },
        },
        'A vevő kijelenti, hogy a gépjárművet megtekintette, műszaki állapotát megismerte, és azt ebben az állapotban vásárolja meg.',
      ],
    },
    {
      nadpis: 'Vételár és fizetés',
      vysvetleni: 'Mennyi, hogyan és mikor. A tulajdonjog csak a teljes vételár kifizetésével száll át.',
      odstavce: [
        'A gépjármű vételára {{cena}}, azaz {{cena_betuvel}}.',
        {
          volba: 'platba',
          uvodVzor: 'Fizetés módja (egy lehetőséget jelöljön meg):',
          moznosti: {
            keszpenz: 'A vevő a vételárat a szerződés aláírásakor készpénzben megfizette. Az eladó aláírásával a teljes vételár átvételét elismeri.',
            utalas: 'A vevő a vételárat legkésőbb {{splatnost}} napjáig átutalja az eladó {{ucet}} számú bankszámlájára.',
          },
        },
        'A felek megállapodnak, hogy a gépjármű tulajdonjoga a teljes vételár megfizetésével száll át a vevőre (tulajdonjog-fenntartás). A tulajdonjog-változás hatálybalépésének napja: {{hatalyba}}.',
      ],
    },
    {
      nadpis: 'Birtokbaadás',
      vysvetleni: 'Mit kap a vevő az autóval együtt.',
      odstavce: [
        'Az eladó a gépjárművet {{birtok_datum}} napján {{birtok_ido}} órakor adja a vevő birtokába, {{klice}} darab kulccsal, a forgalmi engedéllyel és a törzskönyvvel együtt. A kilométeróra állása a birtokba adáskor: {{km}}.',
        'A birtokbaadástól a vevőt illetik a gépjármű hasznai, őt terhelik a terhei és a kárveszély. Az átadás részleteit (állapot, tartozékok) a felek átadás-átvételi jegyzőkönyvben is rögzíthetik.',
      ],
    },
    {
      nadpis: 'Hatósági ügyek és költségek',
      vysvetleni: 'Ki mit intéz a hatóságnál, és ki fizet.',
      odstavce: [
        'A felek kijelentik, hogy a közlekedési igazgatási hatóságnál fennálló bejelentési kötelezettségüknek a tulajdonjog-változás hatálybalépését követő 15 napon belül eleget tesznek: az eladó bejelenti a tulajdonosváltozást, a vevő kérelmezi a változás bejegyzését (forgalmi átírás). Az eladó értesíti a biztosítóját.',
        'A felek kijelentik, hogy a nyilvántartásba történő bejegyzés joghatásait, valamint a bejelentés elmaradásának vagy késedelmének következményeit ismerik.',
        'A vevő a birtokbaadástól gondoskodik a kötelező gépjármű-felelősségbiztosításról.',
        'Az átírás költségeit és a vagyonszerzési illetéket a vevő viseli.',
      ],
    },
    {
      nadpis: 'Záró rendelkezések',
      vysvetleni: 'Formai kérdések.',
      odstavce: [
        'A szerződésben nem szabályozott kérdésekben a Polgári Törvénykönyv rendelkezései az irányadók.',
        'A szerződés három egyező példányban készült. A felek a szerződést elolvasás és értelmezés után, mint akaratukkal mindenben egyezőt, két tanú előtt írták alá.',
        '**1. tanú:** {{t1_jmeno}}, lakcím: {{t1_adresa}}, aláírás: ………………………………',
        '**2. tanú:** {{t2_jmeno}}, lakcím: {{t2_adresa}}, aláírás: ………………………………',
      ],
    },
  ],
};
