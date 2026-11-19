/**
 * Preberací protokol k bytu – Slovensko, na začiatku aj pri skončení nájmu. Stav bytu, merače, kľúče, vybavenie.
 */
import type { Sablona } from '../typy';
import { SK_NAJOM_BYTU } from './zdroje';

export const preberaciProtokolBytu: Sablona = {
  kod: 'SK-PROTOKOL-BYT',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Preberací protokol k bytu',
  podnadpis: 'záznam o odovzdaní a prevzatí bytu',
  souborPdf: 'preberaci-protokol-bytu',
  paticka: 'Vytvorené zadarmo · šablóna SK-PROTOKOL-BYT v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'prenajímateľ', vpravo: 'nájomca' },
  slovo: { n: 'protokol', g: 'protokolu', a: 'protokol', l: 'protokole' },
  cislovatClanky: false,
  coDal: [
    'Prejdite byt spolu miestnosť po miestnosti a doplňte, čo v protokole chýba.',
    'Odfoťte stavy meračov a každú vadu – fotky s dátumom uschovajte.',
    'Podpíšte dva výtlačky, každá strana si nechá jeden.',
  ],
  kontrola: [
    'Stavy všetkých meračov (elektrina, plyn, voda, teplo) opíšte aj s výrobným číslom merača.',
    'Každú vadu zapíšte s miestom (napr. „prasknutá dlaždica pri vani“).',
    'Vyskúšajte spotrebiče, vodu, kúrenie, okná a zámky.',
    'Počet kľúčov a čipov od bytu, domu, pivnice a schránky.',
    'Pri skončení nájmu: obvyklé opotrebenie ide na prenajímateľa, poškodenie nad neho na nájomcu.',
  ],
  zdroje: [SK_NAJOM_BYTU],
  prevzit: {
    kod: 'SK-NAJOM-BYT',
    nazev: 'nájomnú zmluvu na byt',
    mapuj: (d) => ({
      p_jmeno: d.p_jmeno,
      k_jmeno: d.k_jmeno,
      adresa: [d.byt_adresa, d.byt_cislo ? `byt č. ${d.byt_cislo}` : ''].filter(Boolean).join(', '),
      vybavenie: d.vybavenie,
      datum: d.odovzdanie,
      zmluva_datum: d.datum_podpisu,
      dovod: 'zaciatok',
    }),
  },
  kroky: [
    {
      id: 'zaklad',
      nazev: 'Kto, kde a prečo',
      popis: 'Vyplnili ste už nájomnú zmluvu? Údaje predvyplníme z nej.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Prenajímateľ – meno a priezvisko', napoveda: 'Vlastník bytu.', placeholder: 'napr. Ján Novák', sirka: 34, autocomplete: 'name' },
        { id: 'k_jmeno', typ: 'text', popis: 'Nájomca – meno a priezvisko', napoveda: 'Kto byt užíva.', placeholder: 'napr. Petra Kováčová', sirka: 34 },
        { id: 'adresa', typ: 'text', popis: 'Byt (adresa a číslo bytu)', napoveda: 'Rovnako ako v nájomnej zmluve.', placeholder: 'napr. Mierová 25, Bratislava, byt č. 12', sirka: 46 },
        { id: 'dovod', typ: 'volba', popis: 'Odovzdanie', napoveda: 'Na začiatku nájomca preberá, na konci vracia.', moznosti: [ { hodnota: 'zaciatok', popis: 'Na začiatku nájmu' }, { hodnota: 'koniec', popis: 'Pri skončení nájmu' } ] },
        { id: 'zmluva_datum', typ: 'datum', popis: 'Dátum nájomnej zmluvy', napoveda: 'Protokol sa k nej viaže.', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'meradla',
      nazev: 'Merače',
      popis: 'Opíšte stav a odfoťte displej. Čo v byte nie je, nechajte prázdne.',
      pole: [
        { id: 'm_elektrina', typ: 'text', popis: 'Elektrina (kWh)', napoveda: 'Pri dvojtarife oba stavy.', placeholder: 'napr. 12 345,6', sirka: 12, polovina: true },
        { id: 'm_plyn', typ: 'text', popis: 'Plyn (m³)', napoveda: 'Stav plynomera.', placeholder: 'napr. 4 321,0', sirka: 12, polovina: true },
        { id: 'm_studena', typ: 'text', popis: 'Studená voda (m³)', napoveda: 'Zvyčajne v kúpeľni alebo kuchyni.', placeholder: 'napr. 123,4', sirka: 12, polovina: true },
        { id: 'm_tepla', typ: 'text', popis: 'Teplá voda (m³)', napoveda: 'Vedľa studenej vody.', placeholder: 'napr. 56,7', sirka: 12, polovina: true },
        { id: 'm_teplo', typ: 'text', popis: 'Teplo / pomerové merače', napoveda: 'Stav merača tepla alebo údaje na radiátoroch.', placeholder: 'napr. obývačka 123, spálňa 87', sirka: 30 },
      ],
    },
    {
      id: 'stav',
      nazev: 'Stav bytu',
      pole: [
        { id: 'stav', typ: 'volba', popis: 'Stav bytu', napoveda: 'Prejdite všetky miestnosti, okná, podlahy, steny a spotrebiče.', moznosti: [ { hodnota: 'bez', popis: 'Bez vád, zodpovedá obvyklému opotrebeniu' }, { hodnota: 's', popis: 'S týmito vadami' } ] },
        { id: 'vady', typ: 'textarea', popis: 'Popis vád', napoveda: 'Miestnosť a čo presne.', placeholder: 'napr. kuchyňa – odštiepená hrana linky', sirka: 64, zobrazitKdyz: { pole: 'stav', je: 's' } },
        { id: 'vybavenie', typ: 'textarea', popis: 'Vybavenie a jeho stav', napoveda: 'Spotrebiče a nábytok, ktoré sú súčasťou nájmu.', placeholder: 'napr. chladnička – funkčná; práčka – funkčná', sirka: 64 },
        { id: 'kluce', typ: 'text', popis: 'Kľúče a čipy', napoveda: 'Počet a od čoho.', placeholder: 'napr. 3× byt, 2× dom, 1× pivnica, 2× čip', sirka: 46 },
        { id: 'dohoda', typ: 'textarea', popis: 'Dohoda o vadách (nepovinné)', napoveda: 'Kto a dokedy vadu odstráni.', placeholder: 'napr. prenajímateľ opraví kvapkajúcu batériu do 30. 11.', sirka: 64 },
        { id: 'misto', typ: 'text', popis: 'Miesto (obec)', napoveda: 'Kde sa byt odovzdáva.', placeholder: 'napr. Bratislava', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Dátum odovzdania', napoveda: 'Predvyplnili sme dnešok.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Strany a byt',
      odstavce: [
        '**Prenajímateľ:** {{p_jmeno}} · **Nájomca:** {{k_jmeno}}',
        'Byt: {{adresa}}, podľa nájomnej zmluvy zo dňa {{zmluva_datum}}.',
        { volba: 'dovod', uvodVzor: 'Odovzdanie (zaškrtnite):', moznosti: { zaciatok: 'Prenajímateľ odovzdáva a nájomca preberá byt na začiatku nájmu.', koniec: 'Nájomca vracia a prenajímateľ preberá byt pri skončení nájmu.' } },
      ],
    },
    { nadpis: 'Stavy meračov', odstavce: ['Elektrina: {{m_elektrina}} kWh · Plyn: {{m_plyn}} m³ · Studená voda: {{m_studena}} m³ · Teplá voda: {{m_tepla}} m³ · Teplo: {{m_teplo}}'] },
    {
      nadpis: 'Stav bytu, vybavenie a kľúče',
      odstavce: [
        { volba: 'stav', uvodVzor: 'Stav bytu (zaškrtnite):', moznosti: { bez: 'Byt je bez vád a zodpovedá obvyklému opotrebeniu.', s: 'Byt má tieto vady: {{vady}}' } },
        'Vybavenie: {{vybavenie}}',
        'Odovzdané kľúče a čipy: {{kluce}}',
        'Dohoda o vadách: {{dohoda}}',
        'Strany podpisom potvrdzujú, že byt prezreli a jeho stav zodpovedá tomuto protokolu.',
      ],
    },
  ],
};
