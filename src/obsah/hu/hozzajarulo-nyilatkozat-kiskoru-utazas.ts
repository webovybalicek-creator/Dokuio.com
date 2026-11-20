import type { StrankaDokumentu } from '../typy';
import { kiskoruUtazas as sablona } from '../../sablony/hu/hozzajarulo-nyilatkozat-kiskoru-utazas';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Szülői hozzájárulás kiskorú utazásához',
  nazevA: 'szülői hozzájáruló nyilatkozatot kiskorú utazásához',
  katalog: {
    popis: 'Ha a gyermek nagyszülővel, egyik szülővel, táborral vagy egyedül utazik külföldre.',
    kategorie: 'csalad',
    ilustrace: 'plnamoc',
    slova: [
      'szülői hozzájáruló nyilatkozat',
      'szülői beleegyező nyilatkozat külföldi utazáshoz',
      'kiskorú külföldre utazása',
      'gyermek utazása nagyszülővel',
      'gyerek egyedül utazik',
      'utazási engedély gyereknek',
      'tábor külföldön',
    ],
  },
  souvisejici: 'csalad',
  landing: {
    title: 'Szülői hozzájáruló nyilatkozat utazáshoz {rok} – ingyenes PDF minta',
    description: 'Szülői hozzájáruló nyilatkozat kiskorú külföldi utazásához: gyermek, kísérő, célország, időszak, két tanú. Ingyenes PDF és Word.',
    perex: 'Nagyszülővel a tengerhez, táborba vagy az egyik szülővel külföldre? A nyilatkozat pár perc alatt kész, a határon és a légitársaságnál is segít.',
    obsahPopis: 'Mit tartalmaz a nyilatkozat.',
    obsah: [
      { nazev: 'Szülők', popis: 'Név, születési hely és idő, okmányszám, lakcím, telefon.' },
      { nazev: 'Hozzájárulás', popis: 'Gyermek, kísérő, cél- és tranzitországok, időszak és cél.' },
      { nazev: 'Tanúk', popis: 'Két tanú neve, lakcíme és aláírása.' },
    ],
    kroky: [
      { nazev: 'Töltse ki', popis: 'Neveket és okmányszámokat pontosan az úti okmányok szerint.' },
      { nazev: 'Nézze meg a célországot', popis: 'A Konzuli Szolgálat utazási tanácsainál és a légitársaságnál.' },
      { nazev: 'Írja alá', popis: 'Két tanú előtt, vagy közjegyzőnél, ha a célország hitelesítést kér.' },
    ],
    online: ['Kísérő: másik szülő, más személy vagy egyedül', 'Mezők tanúknak', 'Hivatkozás a célországok beutazási feltételeire', 'Letöltés PDF-ben és Wordben'],
    hodiSe: [
      'a gyermek nagyszülővel, rokonnal, táborral vagy iskolával utazik külföldre',
      'a gyermek csak az egyik szülővel utazik, különösen ha más a vezetéknevük',
      'a gyermek egyedül utazik, például a légitársaság kísérő szolgáltatásával',
    ],
    nehodiSe: [
      'a gyermek külföldre költözik vagy huzamosan ott tartózkodik – ehhez a másik szülő hozzájárulása vagy gyámhivatali döntés kell',
      'a célország vagy a légitársaság saját nyomtatványt ír elő – használja azt',
      'a gyermek útlevelének igényléséhez kell szülői hozzájárulás – azt az útlevél-ügyintézés során kell megadni',
    ],
    poNadpis: 'Utazás előtt.',
    po: [
      { nazev: 'Aláírás', popis: 'Az a szülő írja alá, aki nem utazik a gyermekkel, két tanú előtt vagy közjegyzőnél.' },
      { nazev: 'Okmányok', popis: 'Eredeti nyilatkozat és a gyermek érvényes úti okmánya.' },
      { nazev: 'Elérhetőség', popis: 'A telefonszám szerepel a nyilatkozatban – legyen bekapcsolva az utazás alatt.' },
    ],
    faq: [
      { q: 'Kötelező a szülői hozzájáruló nyilatkozat?', a: 'A magyar jog szerint közös szülői felügyeletnél rövid utazáshoz a másik szülő hozzájárulása nem kötelező. Más országok, átutazott országok vagy légitársaságok azonban kérhetik, ezért ajánlott vinni, ha a gyermek nem mindkét szülővel utazik.' },
      { q: 'Kell hitelesíteni?', a: 'Két tanú aláírásával a nyilatkozat teljes bizonyító erejű magánokirat. Ha a célország hitelesített vagy lefordított nyilatkozatot kér, intézze közjegyzőnél.' },
      { q: 'Hol nézhetem meg a célország feltételeit?', a: 'A Konzuli Szolgálat (Külügyminisztérium) országonkénti utazási tanácsainál, illetve a célország nagykövetségén. Nézze meg az átutazott országokat és a légitársaság szabályait is.' },
      { q: 'Kell a másik szülő hozzájárulása, ha a gyermek külföldre költözik?', a: 'Igen. Huzamos tartózkodáshoz vagy letelepedéshez a másik szülő hozzájárulása szükséges; ha nem adja meg, a gyámhivatal dönthet.' },
      { q: 'Tárolják az adataimat?', a: 'Nem. A nyilatkozat kizárólag az Ön böngészőjében készül.' },
    ],
    zakony: 'A minta az Európai e-igazságügyi portál magyarországi tájékoztatója (a gyermekek jogszerű külföldre vitele) és a Konzuli Szolgálat utazási tanácsai alapján készült. A célországok feltételei eltérnek és változnak – utazás előtt mindig ellenőrizze őket.',
    souvisejiciPopis: 'Más hasznos dokumentumok, szintén ingyen.',
  },
  vytvorit: {
    title: 'Szülői hozzájáruló nyilatkozat kitöltése online – ingyen',
    description: 'Szülői hozzájáruló nyilatkozat kiskorú külföldi utazásához online, kísérővel és tanúkkal. Ingyenes PDF vagy Word, regisztráció nélkül.',
    podnadpis: 'Ingyenes · PDF és Word · kb. 3 perc',
  },
};

export default stranka;
