import type { StrankaDokumentu } from '../typy';
import { reszletfizetesiMegallapodas as sablona } from '../../sablony/hu/reszletfizetesi-megallapodas';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Részletfizetési megállapodás',
  nazevA: 'részletfizetési megállapodást',
  katalog: {
    popis: 'Hitelező és adós megállapodik a tartozás havi részleteiben.',
    kategorie: 'penz',
    ilustrace: 'dluh',
    slova: [
      'részletfizetési megállapodás minta',
      'részletfizetés tartozás',
      'törlesztési ütemterv',
      'adósság részletekben',
      'hátralék rendezése',
      'részletfizetési kedvezmény',
    ],
  },
  souvisejici: 'penz',
  landing: {
    title: 'Részletfizetési megállapodás minta {rok} – ingyen PDF',
    description: 'Ingyenes részletfizetési megállapodás hitelező és adós között: havi részletek, törlesztési ütemterv, késedelem esetén a teljes hátralék esedékes. PDF, Word.',
    perex: 'Ha a tartozást nem lehet egyszerre kifizetni: a hitelező és az adós aláírja, mennyit és mikor fizet az adós, és mi történik, ha egy részlet elmarad.',
    obsahPopis: 'Mit tartalmaz a megállapodás.',
    obsah: [
      { nazev: 'Tartozás', popis: 'Összeg betűvel, jogcím, választhatóan tartozáselismerés.' },
      { nazev: 'Részletek', popis: 'Havi részlet, esedékesség, bankszámla, kamat vagy kamatmentesség.' },
      { nazev: 'Késedelem', popis: 'Egy vagy két elmaradt részlet után a teljes hátralék esedékes.' },
      { nazev: 'Ütemterv', popis: 'Melléklet az összes részlettel és a hátralékkal.' },
    ],
    kroky: [
      { nazev: 'Töltse ki', popis: 'Felek, tartozás, havi részlet és az első részlet hónapja.' },
      { nazev: 'Írják alá', popis: 'A hitelező és az adós is, lehetőleg két tanú előtt.' },
      { nazev: 'Fizessenek ütemezetten', popis: 'A naptár-emlékeztető minden részletre figyelmeztet.' },
    ],
    online: ['Összeg betűvel automatikusan', 'Törlesztési ütemterv mellékletként', 'Emlékeztetők a naptárba', 'Letöltés PDF-ben és Wordben'],
    hodiSe: [
      'a tartozást az adós havi részletekben fizeti meg',
      'számlatartozás, kölcsön vagy kártérítés ütemezett rendezése',
      'a hitelező is kötelezettséget vállal, például hogy addig nem indít eljárást',
    ],
    nehodiSe: [
      'csak az adós nyilatkozik a tartozásról – arra a tartozáselismerő nyilatkozat elég',
      'új kölcsönt ad – arra a kölcsönszerződés való',
      'bankkal, közművel vagy hatósággal rendezi a tartozást – ott a saját nyomtatványukat használja',
    ],
    poNadpis: 'Aláírás után.',
    po: [
      { nazev: 'Nyugta', popis: 'Készpénzes részletnél minden befizetésről adjon nyugtát.' },
      { nazev: 'Banki igazolás', popis: 'Átutalásnál a terhelési értesítő a bizonyíték.' },
      { nazev: 'Elmaradt részlet', popis: 'Ha a részlet elmarad, küldjön fizetési felszólítást.' },
    ],
    faq: [
      { q: 'Miben különbözik a tartozáselismerő nyilatkozattól?', a: 'A tartozáselismerő nyilatkozatot csak az adós írja alá. A részletfizetési megállapodás kétoldalú: a hitelező is hozzájárul a részletekhez, és vállalja, hogy amíg az adós fizet, nem indít eljárást.' },
      { q: 'Megszakítja az elévülést?', a: 'Ha az adós a megállapodásban elismeri a tartozást, az elismerés megszakítja az elévülést, és az elévülési idő újrakezdődik.' },
      { q: 'Mi történik, ha egy részlet elmarad?', a: 'Amit a felek megállapodtak: a minta szerint egy vagy két elmaradt részlet után (a türelmi idő leteltével) a teljes hátralék egy összegben esedékessé válik.' },
      { q: 'Tárolják az adataimat?', a: 'Nem. A dokumentum kizárólag az Ön böngészőjében készül.' },
    ],
    zakony: 'A minta a Polgári Törvénykönyv (2013. évi V. törvény) kötelmi szabályai és a tartozáselismerésre vonatkozó rendelkezései alapján készült; a két tanús okirat bizonyító erejét a polgári perrendtartás szabályozza.',
    souvisejiciPopis: 'Más dokumentumok a pénzügyekhez, szintén ingyen.',
  },
  vytvorit: {
    title: 'Részletfizetési megállapodás online – ütemtervvel, ingyen',
    description: 'Részletfizetési megállapodás online, törlesztési ütemtervvel és naptár-emlékeztetőkkel. Ingyenes PDF vagy Word, regisztráció nélkül.',
    podnadpis: 'Ingyenes · PDF és Word · kb. 4 perc',
  },
};

export default stranka;
