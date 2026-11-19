/**
 * Předávací protokol k bytu – Česko, při začátku i skončení nájmu.
 * Obsah podle doporučení příručky Iuridicum Remedium (MMR): stav bytu, vady, měřiče, klíče, vybavení, vyjádření stran.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { OZ, IURE_PRIRUCKA } from './zdroje';

export const predavaciProtokolByt: Sablona = {
  kod: 'CZ-PROTOKOL-BYT',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Předávací protokol k bytu',
  podnadpis: 'záznam o předání a převzetí bytu',
  souborPdf: 'predavaci-protokol-byt',
  paticka: 'Vytvořeno zdarma · šablona CZ-PROTOKOL-BYT v1.0 · vzor k vyplnění, nejde o právní poradenství',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'pronajímatel', vpravo: 'nájemce' },
  slovo: { n: 'protokol', g: 'protokolu', a: 'protokol', l: 'protokolu' },
  cislovatClanky: false,
  coDal: [
    'Projděte byt spolu místnost po místnosti a doplňte rukou, co v protokolu chybí.',
    'Vyfoťte stavy měřičů a každou vadu – fotky s datem přiložte nebo uschovejte.',
    'Podepište dva výtisky, každá strana si nechá jeden.',
    'Při stěhování ven protokol porovnejte s tím ze začátku nájmu – rozdíl nad běžné opotřebení řeší jistota.',
  ],
  kontrola: [
    'Stavy všech měřičů (elektřina, plyn, voda, teplo) opište a vyfoťte i s výrobním číslem měřiče.',
    'Každou vadu zapište s místem (např. „prasklina dlaždice u vany“). Co tu chybí, se později těžko dokazuje.',
    'Vyzkoušejte spotřebiče, vodu, topení, okna a zámky.',
    'Počet klíčů a čipů od bytu, domu, sklepa a schránky.',
    'Při skončení nájmu: běžné opotřebení jde za pronajímatelem, poškození nad něj za nájemcem.',
  ],
  zdroje: [OZ, IURE_PRIRUCKA],
  prevzit: {
    kod: 'CZ-NAJEM-BYT',
    nazev: 'nájemní smlouvu na byt',
    mapuj: (d) => ({
      p_jmeno: d.p_jmeno,
      k_jmeno: d.k_jmeno,
      adresa: [d.byt_adresa, d.byt_cislo ? `byt č. ${d.byt_cislo}` : ''].filter(Boolean).join(', '),
      vybaveni: d.vybaveni,
      datum: d.predani,
      smlouva_datum: d.datum_podpisu,
      duvod: 'zacatek',
    }),
  },

  kroky: [
    {
      id: 'zaklad',
      nazev: 'Kdo, kde a proč',
      popis: 'Vyplnili jste už nájemní smlouvu? Údaje předvyplníme z ní.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Pronajímatel – jméno a příjmení', napoveda: 'Vlastník bytu.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'k_jmeno', typ: 'text', popis: 'Nájemce – jméno a příjmení', napoveda: 'Kdo byt užívá.', placeholder: 'např. Petra Svobodová', sirka: 34 },
        { id: 'adresa', typ: 'text', popis: 'Byt (adresa a číslo bytu)', napoveda: 'Stejně jako v nájemní smlouvě.', placeholder: 'např. Masarykova 1025/5, Říčany, byt č. 12', sirka: 46 },
        {
          id: 'duvod',
          typ: 'volba',
          popis: 'Předání',
          napoveda: 'Na začátku nájmu přebírá nájemce, na konci vrací.',
          moznosti: [
            { hodnota: 'zacatek', popis: 'Na začátku nájmu (nájemce přebírá byt)' },
            { hodnota: 'konec', popis: 'Na konci nájmu (nájemce vrací byt)' },
          ],
        },
        { id: 'smlouva_datum', typ: 'datum', popis: 'Datum nájemní smlouvy', napoveda: 'Protokol se k ní váže.', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'meridla',
      nazev: 'Měřiče',
      popis: 'Opište stav a vyfoťte displej. Co v bytě není, nechte prázdné.',
      pole: [
        { id: 'm_elektrina', typ: 'text', popis: 'Elektřina (kWh)', napoveda: 'U dvoutarifu oba stavy (VT/NT).', placeholder: 'např. 12 345,6', sirka: 12, polovina: true },
        { id: 'm_plyn', typ: 'text', popis: 'Plyn (m³)', napoveda: 'Stav plynoměru.', placeholder: 'např. 4 321,0', sirka: 12, polovina: true },
        { id: 'm_studena', typ: 'text', popis: 'Studená voda (m³)', napoveda: 'Bývá v koupelně nebo kuchyni.', placeholder: 'např. 123,4', sirka: 12, polovina: true },
        { id: 'm_tepla', typ: 'text', popis: 'Teplá voda (m³)', napoveda: 'Bývá vedle studené (červené označení).', placeholder: 'např. 56,7', sirka: 12, polovina: true },
        { id: 'm_teplo', typ: 'text', popis: 'Teplo / indikátory na radiátorech', napoveda: 'Stav měřiče tepla nebo údaje z indikátorů.', placeholder: 'např. obývák 123, ložnice 87', sirka: 30 },
      ],
    },
    {
      id: 'stav',
      nazev: 'Stav bytu',
      pole: [
        {
          id: 'stav',
          typ: 'volba',
          popis: 'Stav bytu',
          napoveda: 'Projděte všechny místnosti, okna, podlahy, zdi, spotřebiče.',
          moznosti: [
            { hodnota: 'bez', popis: 'Bez vad, odpovídá běžnému opotřebení' },
            { hodnota: 's', popis: 'S těmito vadami' },
          ],
        },
        { id: 'vady', typ: 'textarea', popis: 'Popis vad', napoveda: 'Místnost a co přesně, např. „ložnice – skvrna na koberci u okna“.', placeholder: 'např. kuchyně – odštípnutá hrana linky; koupelna – prasklina dlaždice u vany', sirka: 64, zobrazitKdyz: { pole: 'stav', je: 's' } },
        { id: 'vybaveni', typ: 'textarea', popis: 'Vybavení a jeho stav', napoveda: 'Spotřebiče a nábytek, které jsou součástí nájmu.', placeholder: 'např. lednice Bosch – funkční; pračka Whirlpool – funkční', sirka: 64 },
        { id: 'klice', typ: 'text', popis: 'Klíče a čipy', napoveda: 'Počet a od čeho (byt, dům, sklep, schránka, čip).', placeholder: 'např. 3× byt, 2× dům, 1× sklep, 2× čip', sirka: 46 },
        { id: 'dohoda', typ: 'textarea', popis: 'Dohoda o vadách (nepovinné)', napoveda: 'Kdo a do kdy vadu odstraní, případně jak se uhradí.', placeholder: 'např. pronajímatel opraví kapající baterii do 30. 11.', sirka: 64 },
        { id: 'misto', typ: 'text', popis: 'Místo (obec)', napoveda: 'Kde se byt předává.', placeholder: 'např. Říčany', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Datum předání', napoveda: 'Předvyplnili jsme dnešek.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Strany a byt',
      vysvetleni: 'Kdo byt předává a přebírá a o jaký byt jde.',
      odstavce: [
        '**Pronajímatel:** {{p_jmeno}} · **Nájemce:** {{k_jmeno}}',
        'Byt: {{adresa}}, podle nájemní smlouvy ze dne {{smlouva_datum}}.',
        {
          volba: 'duvod',
          uvodVzor: 'Předání (zaškrtněte):',
          moznosti: {
            zacatek: 'Pronajímatel předává a nájemce přebírá byt na začátku nájmu.',
            konec: 'Nájemce vrací a pronajímatel přebírá byt při skončení nájmu.',
          },
        },
      ],
    },
    {
      nadpis: 'Stavy měřičů',
      vysvetleni: 'Podle nich se vyúčtují energie a služby.',
      odstavce: ['Elektřina: {{m_elektrina}} kWh · Plyn: {{m_plyn}} m³ · Studená voda: {{m_studena}} m³ · Teplá voda: {{m_tepla}} m³ · Teplo: {{m_teplo}}'],
    },
    {
      nadpis: 'Stav bytu, vybavení a klíče',
      vysvetleni: 'Přesný stav při předání. Při sporu o poškození je to hlavní důkaz.',
      odstavce: [
        {
          volba: 'stav',
          uvodVzor: 'Stav bytu (zaškrtněte jednu možnost):',
          moznosti: {
            bez: 'Byt je bez vad a odpovídá běžnému opotřebení.',
            s: 'Byt má tyto vady: {{vady}}',
          },
        },
        'Vybavení: {{vybaveni}}',
        'Předané klíče a čipy: {{klice}}',
        'Dohoda o vadách: {{dohoda}}',
        'Strany svým podpisem potvrzují, že byt prohlédly a jeho stav odpovídá tomuto protokolu.',
      ],
    },
  ],
};
