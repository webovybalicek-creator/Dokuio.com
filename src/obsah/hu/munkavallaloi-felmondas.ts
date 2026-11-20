import type { StrankaDokumentu } from '../typy';
import { munkavallaloiFelmondas as sablona } from '../../sablony/hu/munkavallaloi-felmondas';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Munkavállalói felmondás',
  nazevA: 'munkavállalói felmondást',
  katalog: {
    popis: 'Felmondás a munkahelyen, vagy javaslat közös megegyezésre.',
    kategorie: 'munka',
    ilustrace: 'protokol',
    slova: [
      'munkavállalói felmondás minta',
      'felmondás munkahelyen',
      'felmondólevél munkáltatónak',
      'felmondási idő 30 nap',
      'közös megegyezéses munkaviszony megszüntetés',
      'munkaviszony megszüntetése',
      'kilépés munkahelyről',
    ],
  },
  souvisejici: 'munka',
  landing: {
    title: 'Munkavállalói felmondás minta {rok} – ingyen PDF',
    description: 'Ingyenes munkavállalói felmondás az Mt. szerint: 30 napos vagy hosszabb felmondási idő, az utolsó nap kiszámítása, vagy közös megegyezés javaslata. PDF, Word.',
    perex: 'Felmondólevél a munkáltatónak a Munka Törvénykönyve szerint – kiszámoljuk az utolsó munkanapot. Vagy javasoljon közös megegyezést egy adott napra.',
    obsahPopis: 'Mit tartalmaz a felmondás.',
    obsah: [
      { nazev: 'Felmondás', popis: 'Hivatkozás az Mt. 65. §-ára, a felmondási idő és az utolsó nap.' },
      { nazev: 'Közös megegyezés', popis: 'Javaslat a munkaviszony megszüntetésére egy adott napon.' },
      { nazev: 'Kérések', popis: 'Igazolások, munkakör átadása, szabadság és bér elszámolása, értékelés.' },
    ],
    kroky: [
      { nazev: 'Töltse ki', popis: 'Munkáltató, munkakör, felmondási idő a munkaszerződés szerint.' },
      { nazev: 'Írja alá két példányban', popis: 'Egyet a munkáltatónak, egyet magának.' },
      { nazev: 'Adja át igazolhatóan', popis: 'Személyesen átvételi aláírással vagy tértivevényes levélben.' },
    ],
    online: ['Az utolsó munkanap kiszámítása', 'Felmondás vagy közös megegyezés', 'Emlékeztető a munkakör átadására', 'Letöltés PDF-ben és Wordben'],
    hodiSe: [
      'munkavállalóként szeretné felmondani a munkaviszonyát',
      'közös megegyezéssel szeretne korábban távozni',
      'határozott idejű munkaviszonyt mond fel indokolással',
    ],
    nehodiSe: [
      'a munkáltató mond fel – rá más szabályok vonatkoznak (indokolás, felmentés, végkielégítés)',
      'azonnali hatályú felmondás vagy próbaidő alatti megszüntetés – ezekhez kérjen jogi tanácsot',
      'megbízási szerződés vagy vállalkozás – ott a szerződés szabályai irányadók',
    ],
    poNadpis: 'A felmondás után.',
    po: [
      { nazev: 'Átvétel igazolása', popis: 'A saját példányán legyen a munkáltató aláírása és a dátum.' },
      { nazev: 'Munkakör átadása', popis: 'A munkavállaló köteles a munkakörét átadni és elszámolni.' },
      { nazev: 'Igazolások', popis: 'Az utolsó napon a munkáltató kifizeti a járandóságokat és kiadja az igazolásokat.' },
    ],
    faq: [
      { q: 'Mennyi a felmondási idő, ha én mondok fel?', a: 'A törvényes felmondási idő 30 nap (Mt. 69. § (1)). A munkaszerződés ennél hosszabbat, legfeljebb hat hónapot is előírhat.' },
      { q: 'Mikor kezdődik a felmondási idő?', a: 'Legkorábban a felmondás közlését követő napon (Mt. 68. § (1)). Ezért fontos, mikor adja át a felmondást.' },
      { q: 'Meg kell indokolnom a felmondást?', a: 'Határozatlan idejű munkaviszonynál nem (Mt. 67. § (1)). Határozott idejű munkaviszony felmondását viszont meg kell indokolni (67. § (2)).' },
      { q: 'Mi a különbség a közös megegyezéshez képest?', a: 'A felmondás egyoldalú, a munkáltató beleegyezése nélkül is hatályos. Közös megegyezéssel bármely napra megállapodhatnak, de ehhez a munkáltató hozzájárulása és írásbeli megállapodás kell.' },
      { q: 'Tárolják az adataimat?', a: 'Nem. A dokumentum kizárólag az Ön böngészőjében készül.' },
    ],
    zakony: 'A minta a munka törvénykönyvéről szóló 2012. évi I. törvény (Mt.) felmondásra, felmondási időre, közlésre és a munkaviszony megszüntetésére vonatkozó szabályai alapján készült.',
    souvisejiciPopis: 'Más hasznos dokumentumok, szintén ingyen.',
  },
  vytvorit: {
    title: 'Munkavállalói felmondás kitöltése online – ingyen PDF',
    description: 'Munkavállalói felmondás online az utolsó munkanap kiszámításával, vagy közös megegyezés javaslata. Ingyenes PDF vagy Word, regisztráció nélkül.',
    podnadpis: 'Ingyenes · PDF és Word · kb. 3 perc',
  },
};

export default stranka;
