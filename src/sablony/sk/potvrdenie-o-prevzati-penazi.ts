/** Potvrdenie o prevzatí peňazí – Slovensko. Jednostranné potvrdenie príjemcu (kvitancia). */
import type { Sablona } from '../typy';
import { sumaSlovom } from './cisla';
import { OZ_SK, ZAKON_HOTOVOST_SK, TIP_TOTOZNOST_SK, TIP_HOTOVOST_SK } from './zdroje';

export const potvrdenieOPrevzatiPenazi: Sablona = {
  kod: 'SK-POTVRDENIE-PENIAZE',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Potvrdenie o prevzatí peňazí',
  podnadpis: 'potvrdenie o prijatí platby v hotovosti',
  souborPdf: 'potvrdenie-o-prevzati-penazi',
  paticka: 'Vytvorené zadarmo · šablóna SK-POTVRDENIE-PENIAZE v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'odovzdávajúci', vpravo: 'príjemca' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  slovo: { n: 'potvrdenie', g: 'potvrdenia', a: 'potvrdenie', l: 'potvrdení' },
  coDal: ['Peniaze prepočítajte pred podpisom.', 'Každá strana si nechá jeden podpísaný výtlačok.'],
  kontrola: [
    'Sumu uveďte číslom aj slovom – predvyplníme ju za vás.',
    'Účel platby opíšte konkrétne (napr. „kúpna cena za vozidlo VIN …“), aby bolo jasné, za čo sa platilo.',
    TIP_TOTOZNOST_SK,
    TIP_HOTOVOST_SK,
  ],
  zdroje: [OZ_SK, ZAKON_HOTOVOST_SK],
  kroky: [
    {
      id: 'udaje',
      nazev: 'Kto a koľko',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Príjemca – meno a priezvisko', napoveda: 'Kto peniaze prijíma a potvrdenie podpisuje.', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Dátum narodenia príjemcu', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa príjemcu', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Odovzdávajúci – meno a priezvisko', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Dátum narodenia odovzdávajúceho', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa odovzdávajúceho', sirka: 46 },
        { id: 'castka', typ: 'castka', popis: 'Suma (€)', placeholder: 'napr. 1500', sirka: 12, polovina: true },
        {
          id: 'ucel',
          typ: 'volba',
          popis: 'Účel platby',
          moznosti: [
            { hodnota: 'kupni', popis: 'Kúpna cena' },
            { hodnota: 'pozicka', popis: 'Pôžička' },
            { hodnota: 'splatka', popis: 'Splátka dlhu' },
            { hodnota: 'zaloha', popis: 'Záloha' },
            { hodnota: 'zabezpeka', popis: 'Zábezpeka (kaucia) k nájmu' },
            { hodnota: 'iny', popis: 'Iný účel' },
          ],
        },
        { id: 'ucel_popis', typ: 'text', popis: 'Bližší popis', placeholder: 'napr. za vozidlo Škoda Octavia, VIN TMB…', sirka: 56 },
        { id: 'misto', typ: 'text', popis: 'Miesto', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Dátum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { castka_slovy: (d) => sumaSlovom(d.castka) },
  clanky: [
    {
      nadpis: 'Potvrdenie',
      odstavce: [
        'Ja, **{{p_jmeno}}**, dátum narodenia {{p_narozeni}}, trvalý pobyt {{p_adresa}},',
        'potvrdzujem, že som dnes od **{{k_jmeno}}**, dátum narodenia {{k_narozeni}}, trvalý pobyt {{k_adresa}}, prevzal/a v hotovosti sumu **{{castka}}** (slovom: {{castka_slovy}}).',
        {
          volba: 'ucel',
          uvod: 'Účel platby:',
          uvodVzor: 'Účel platby (zaškrtnite):',
          moznosti: {
            kupni: 'kúpna cena – {{ucel_popis}}',
            pozicka: 'pôžička – {{ucel_popis}}',
            splatka: 'splátka dlhu – {{ucel_popis}}',
            zaloha: 'záloha – {{ucel_popis}}',
            zabezpeka: 'zábezpeka (kaucia) k nájmu – {{ucel_popis}}',
            iny: '{{ucel_popis}}',
          },
        },
        'Sumu som prepočítal/a a v uvedenej výške som ju prevzal/a.',
      ],
    },
  ],
};
