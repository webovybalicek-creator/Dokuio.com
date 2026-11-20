/** Általános meghatalmazás – Magyarország. Ptk. képviseletre vonatkozó szabályai. */
import type { Sablona } from '../typy';
import { PTK, PP, TIP_SZEMELYAZONOSSAG, TIP_TANUK } from './forrasok';

export const meghatalmazas: Sablona = {
  kod: 'HU-MEGHATALMAZAS',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'hu',
  jazyk: 'hu',
  nazev: 'Meghatalmazás',
  podnadpis: 'a Polgári Törvénykönyv képviseletre vonatkozó szabályai alapján',
  souborPdf: 'meghatalmazas',
  paticka: 'Ingyenesen készült · HU-MEGHATALMAZAS v1.0 minta · kitölthető minta, nem jogi tanácsadás · a tartalomért a felek felelnek, ügyvédi ellenőrzést javaslunk',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'meghatalmazó', vpravo: 'meghatalmazott (elfogadom)' },
  cislovatClanky: false,
  slovo: { n: 'meghatalmazás', g: 'meghatalmazás', a: 'meghatalmazást', l: 'meghatalmazásban' },
  coDal: ['Nyomtassa ki és írja alá. Hatósághoz vagy bankhoz vigyen eredeti példányt.', 'Kérdezze meg előre, kér-e a hivatal tanúkat vagy közjegyzői okiratot.'],
  kontrola: [
    'Az ügyet konkrétan írja le – a túl általános meghatalmazást a hivatalok gyakran nem fogadják el.',
    TIP_TANUK.replace(' – vita esetén ez erősebb bizonyíték', ''),
    'Ingatlanügyekhez és egyes banki ügyekhez ügyvédi ellenjegyzés vagy közjegyzői okirat kell.',
    TIP_SZEMELYAZONOSSAG,
  ],
  zdroje: [PTK, PP],
  kroky: [
    {
      id: 'szemelyek',
      nazev: 'Ki kit hatalmaz meg',
      pole: [
        { id: 'm_jmeno', typ: 'text', popis: 'Meghatalmazó neve', sirka: 34, autocomplete: 'name' },
        { id: 'm_szul', typ: 'text', popis: 'Születési hely, idő', sirka: 26, polovina: true },
        { id: 'm_anyja', typ: 'text', popis: 'Anyja neve', sirka: 26, polovina: true },
        { id: 'm_adresa', typ: 'text', popis: 'Lakcím', sirka: 46 },
        { id: 'z_jmeno', typ: 'text', popis: 'Meghatalmazott neve', sirka: 34 },
        { id: 'z_szul', typ: 'text', popis: 'Születési hely, idő', sirka: 26, polovina: true },
        { id: 'z_anyja', typ: 'text', popis: 'Anyja neve', sirka: 26, polovina: true },
        { id: 'z_adresa', typ: 'text', popis: 'Lakcím', sirka: 46 },
      ],
    },
    {
      id: 'ugy',
      nazev: 'Mire szól',
      pole: [
        { id: 'ugy', typ: 'textarea', popis: 'Az ügy leírása', placeholder: 'pl. a nevemre érkezett ajánlott küldemény átvétele a postán', sirka: 64 },
        { id: 'ervenyes', typ: 'datum', popis: 'Érvényes eddig (nem kötelező)', sirka: 14, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Helység', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Kelte', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Meghatalmazás',
      odstavce: [
        'Alulírott **{{m_jmeno}}** (születési hely, idő: {{m_szul}}, anyja neve: {{m_anyja}}, lakcím: {{m_adresa}}) meghatalmazom',
        '**{{z_jmeno}}** (születési hely, idő: {{z_szul}}, anyja neve: {{z_anyja}}, lakcím: {{z_adresa}}) meghatalmazottat, hogy helyettem és nevemben a következő ügyben eljárjon:',
        '{{ugy}}',
        'A meghatalmazott jogosult az ügyben nyilatkozatokat tenni, iratokat aláírni és átvenni. A meghatalmazás {{ervenyes}} napjáig vagy visszavonásig érvényes.',
      ],
    },
  ],
};
