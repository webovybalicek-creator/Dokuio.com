/** Lakásbérleti szerződés felmondása (bérlő részéről) – Magyarország. Ltv., Ptk.; a felmondási idő a szerződés szerint. */
import type { Sablona } from '../typy';
import { naDatum, isoDatum, pridejDny } from '../terminy';
import { LTV, PTK } from './forrasok';

export const berletFelmondas: Sablona = {
  kod: 'HU-BERLET-FELMONDAS',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Lakásbérleti szerződés felmondása',
  podnadpis: 'a bérlő rendes felmondása',
  souborPdf: 'berleti-szerzodes-felmondasa',
  paticka: 'Ingyenesen készült · HU-BERLET-FELMONDAS v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért Ön felel, összetett ügyben ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'bérlő', vpravo: 'átvette a bérbeadó (dátum, aláírás)' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  slovo: { n: 'felmondás', g: 'felmondás', a: 'felmondást', l: 'felmondásban' },
  pripominky: (d) => {
    const veg = naDatum(d.megszunes);
    return veg ? [{ nazev: 'A bérlet vége, a lakás visszaadása', datum: isoDatum(veg) }, { nazev: 'Egyeztetni a lakás visszaadását és a jegyzőkönyvet', datum: isoDatum(pridejDny(veg, -14)) }] : [];
  },
  coDal: [
    'Juttassa el igazolhatóan: tértivevényes ajánlott levélben, vagy személyesen, a másolaton átvételi aláírással.',
    'Egyeztesse a lakás visszaadását, és készítsenek jegyzőkönyvet.',
  ],
  kontrola: [
    'Nézze meg a szerződésben a felmondási időt – a megszűnés napja ehhez igazodik.',
    'Határozott idejű szerződést rendes felmondással csak akkor lehet megszüntetni, ha a szerződés ezt megengedi; egyébként közös megegyezés kell.',
    'A felmondást írásban közölje; minden bérlő írja alá.',
  ],
  zdroje: [LTV, PTK],
  kroky: [
    {
      id: 'adatok',
      nazev: 'Felek és bérlet',
      pole: [
        { id: 'l_nev', typ: 'text', popis: 'Bérlő neve', sirka: 34, autocomplete: 'name' },
        { id: 'l_elerhetoseg', typ: 'text', popis: 'Telefon vagy e-mail', sirka: 30 },
        { id: 'b_nev', typ: 'text', popis: 'Bérbeadó neve', sirka: 34 },
        { id: 'b_cim', typ: 'text', popis: 'Bérbeadó címe', sirka: 46 },
        { id: 'lakas_cim', typ: 'text', popis: 'A lakás címe', sirka: 46 },
        { id: 'szerzodes_datum', typ: 'datum', popis: 'A bérleti szerződés kelte', sirka: 14, polovina: true },
        { id: 'megszunes', typ: 'datum', popis: 'A bérlet megszűnésének napja', napoveda: 'A szerződés szerinti felmondási idő utolsó napja.', sirka: 14, polovina: true },
        { id: 'ovadek_szamla', typ: 'text', popis: 'Bankszámla az óvadék visszafizetéséhez', sirka: 32 },
        { id: 'misto', typ: 'text', popis: 'Helység', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Kelte', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Felmondás',
      odstavce: [
        '**Címzett:** {{b_nev}}, {{b_cim}}',
        'Alulírott **{{l_nev}}** a {{lakas_cim}} alatti lakásra {{szerzodes_datum}} napján kötött lakásbérleti szerződést a szerződés szerinti felmondási idővel felmondom. A bérlet {{megszunes}} napján szűnik meg.',
        'A lakást legkésőbb ezen a napon kiürítve, a kulcsokkal együtt visszaadom. Kérem, egyeztessük a visszaadás időpontját; elérhetőségem: {{l_elerhetoseg}}.',
        'Kérem, hogy az óvadékot az elszámolás után a {{ovadek_szamla}} számú bankszámlára fizesse vissza.',
      ],
    },
  ],
};
