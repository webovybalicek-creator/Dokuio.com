/**
 * Soglasje staršev za potovanje mladoletnega otroka – Slovenija. Pravila določa vsaka država sama (Your Europe); pisno soglasje
 * z overjenim podpisom priporočamo. Za selitev otroka v tujino je soglasje drugega starša potrebno vedno, razen če ima roditeljsko
 * pravico le eden (e-pravosodje).
 */
import type { Sablona } from '../typy';
import { EU_MLADOLETNI, EJUSTICE_OTROK, NOGA } from './viri';

export const soglasjeZaPotovanjeOtroka: Sablona = {
  kod: 'SI-POTOVANJE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Soglasje za potovanje mladoletnega otroka', podnadpis: 'izjava starša, ki z otrokom ne potuje',
  souborPdf: 'soglasje-za-potovanje-otroka', paticka: NOGA('SI-POTOVANJE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'starš (zakoniti zastopnik)', vpravo: 'drugi starš (če tudi daje soglasje)' },
  cislovatClanky: false,
  slovo: { n: 'soglasje', g: 'soglasja', a: 'soglasje', l: 'soglasju' },
  coDal: ['Podpis overite na upravni enoti ali pri notarju – overjeno soglasje v tujini lažje sprejmejo.', 'Otroku dajte izvirnik in kopijo osebnega dokumenta starša.', 'Preverite pogoje ciljne države in prevoznika (letalske družbe imajo svoje obrazce).'],
  kontrola: [
    'Ali država zahteva uradno dovoljenje staršev, odloča vsaka država EU sama ([Your Europe](https://europa.eu/youreurope/citizens/travel/entry-exit/travel-documents-minors/index_sl.htm)) – pisno soglasje je zato priporočljivo.',
    'Otrok mora imeti lastno veljavno osebno izkaznico ali potni list.',
    'Navedite točno obdobje in cilj potovanja ter podatke spremljevalca.',
    'Za selitev otroka v tujino je soglasje drugega starša potrebno vedno, razen če ima roditeljsko pravico le eden od staršev – to soglasje velja le za začasno potovanje.',
  ],
  zdroje: [EU_MLADOLETNI, EJUSTICE_OTROK],
  kroky: [
    { id: 'stars', nazev: 'Starš in otrok', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Starš – ime in priimek', sirka: 34, autocomplete: 'name' },
      { id: 'p_emso', typ: 'text', popis: 'EMŠO starša', sirka: 14, polovina: true },
      { id: 'p_doklad', typ: 'text', popis: 'Številka osebne izkaznice', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
      { id: 'p_tel', typ: 'text', popis: 'Telefon', sirka: 18, polovina: true },
      { id: 'd_jmeno', typ: 'text', popis: 'Otrok – ime in priimek', sirka: 34 },
      { id: 'd_rojen', typ: 'datum', popis: 'Datum rojstva otroka', sirka: 14, polovina: true },
      { id: 'd_doklad', typ: 'text', popis: 'Številka potne listine otroka', sirka: 14, polovina: true },
    ] },
    { id: 'pot', nazev: 'Potovanje', pole: [
      { id: 'spremstvo', typ: 'volba', popis: 'Otrok potuje', moznosti: [ { hodnota: 'stars', popis: 's drugim staršem' }, { hodnota: 'oseba', popis: 'z drugo odraslo osebo' }, { hodnota: 'sam', popis: 'sam (organizirano potovanje, šola)' } ] },
      { id: 's_jmeno', typ: 'text', popis: 'Spremljevalec – ime in priimek', sirka: 34, zobrazitKdyz: { pole: 'spremstvo', je: ['stars', 'oseba'] } },
      { id: 's_doklad', typ: 'text', popis: 'Številka dokumenta spremljevalca', sirka: 18, zobrazitKdyz: { pole: 'spremstvo', je: ['stars', 'oseba'] } },
      { id: 'cilj', typ: 'text', popis: 'Cilj potovanja', placeholder: 'npr. Hrvaška, Italija', sirka: 34 },
      { id: 'od', typ: 'datum', popis: 'Od', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'Do', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Soglasje', odstavce: [
    'Podpisani/a **{{p_jmeno}}**, EMŠO {{p_emso}}, številka osebne izkaznice {{p_doklad}}, naslov {{p_adresa}}, telefon {{p_tel}}, kot starš in zakoniti zastopnik',
    'dajem soglasje, da moj mladoletni otrok **{{d_jmeno}}**, rojen/a {{d_rojen}}, številka potne listine {{d_doklad}},',
    { volba: 'spremstvo', uvodVzor: 'Spremstvo (označite eno možnost):', moznosti: { stars: 'potuje v spremstvu drugega starša {{s_jmeno}}, številka dokumenta {{s_doklad}},', oseba: 'potuje v spremstvu osebe {{s_jmeno}}, številka dokumenta {{s_doklad}}, ki ji v času potovanja zaupam skrb za otroka,', sam: 'potuje brez spremstva staršev v okviru organiziranega potovanja,' } },
    'v obdobju od {{od}} do {{do}} v: {{cilj}}.',
    'Soglasje velja le za navedeno potovanje.',
  ] }],
};
