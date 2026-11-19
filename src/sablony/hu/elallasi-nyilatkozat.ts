/** Elállási nyilatkozat – Magyarország, online vagy telefonon kötött szerződés. 45/2014. (II. 26.) Korm. rendelet: 20. § (14 nap az átvételtől), 23. § (visszatérítés 14 napon belül), 24. § (visszaküldés 14 napon belül), 2. melléklet (minta). */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { FOGY_RENDELET, PTK } from './forrasok';

export const elallasiNyilatkozat: Sablona = {
  kod: 'HU-ELALLAS',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Elállási nyilatkozat',
  podnadpis: 'a 45/2014. (II. 26.) Korm. rendelet szerinti elállási jog gyakorlása',
  souborPdf: 'elallasi-nyilatkozat',
  paticka: 'Ingyenesen készült · HU-ELALLAS v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért Ön felel, összetett ügyben ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'fogyasztó', vpravo: 'átvette a vállalkozás nevében (személyes átadáskor)' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  slovo: { n: 'nyilatkozat', g: 'nyilatkozat', a: 'nyilatkozatot', l: 'nyilatkozatban' },
  coDal: [
    'Küldje el e-mailben vagy ajánlott levélben a 14 napos határidőn belül – elég a határidő utolsó napján elküldeni.',
    'A terméket 14 napon belül küldje vissza; a vállalkozás a vételárat és a szokásos szállítási díjat 14 napon belül visszatéríti.',
  ],
  pripominky: (d) => {
    const od = naDatum(d.atvetel);
    return od ? [{ nazev: 'Az elállási határidő utolsó napja', datum: isoDatum(pridejDny(od, 14)), popis: '14 nap a termék átvételétől.' }] : [];
  },
  kontrola: [
    'Az elállási határidő 14 nap; terméknél főszabály szerint az átvételtől számít.',
    'Az elállást nem kell indokolnia.',
    'A visszaküldés közvetlen költségét főszabály szerint Ön viseli, ha a vállalkozás erről előre tájékoztatta.',
    'Kivételek: pl. egyedi termék, romlandó áru, felbontott higiéniai termék.',
  ],
  zdroje: [FOGY_RENDELET, PTK],
  kroky: [
    {
      id: 'adatok',
      nazev: 'Vállalkozás és rendelés',
      pole: [
        { id: 'firma', typ: 'text', popis: 'Vállalkozás neve', placeholder: 'pl. Webáruház Kft.', sirka: 34 },
        { id: 'firma_adresa', typ: 'text', popis: 'Vállalkozás címe, e-mail-címe', sirka: 50 },
        { id: 'termek', typ: 'textarea', popis: 'Termék vagy szolgáltatás', placeholder: 'pl. Bosch porszívó, rendelésszám 12345', sirka: 60 },
        { id: 'objednano', typ: 'datum', popis: 'Megrendelés napja', sirka: 14, polovina: true },
        { id: 'atvetel', typ: 'datum', popis: 'Átvétel napja', sirka: 14, polovina: true },
        { id: 'jmeno', typ: 'text', popis: 'Az Ön neve', sirka: 34, autocomplete: 'name' },
        { id: 'adresa', typ: 'text', popis: 'Az Ön címe', sirka: 46 },
        { id: 'ucet', typ: 'text', popis: 'Bankszámlaszám a visszatérítéshez (nem kötelező)', sirka: 32 },
        { id: 'misto', typ: 'text', popis: 'Helység', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Kelte', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Elállási nyilatkozat',
      odstavce: [
        '**Címzett:** {{firma}}, {{firma_adresa}}',
        'Alulírott kijelentem, hogy gyakorlom elállási jogomat az alábbi termék(ek) adásvételére vagy az alábbi szolgáltatás nyújtására irányuló szerződés tekintetében: {{termek}}',
        'Megrendelés időpontja: {{objednano}} / átvétel időpontja: {{atvetel}}',
        'A fogyasztó neve: **{{jmeno}}**, címe: {{adresa}}',
        'Kérem a kifizetett összeg visszatérítését a {{ucet}} számú bankszámlára, vagy a fizetéskor használt fizetési móddal.',
      ],
    },
  ],
};
