/** Raginimas sumokėti skolą – Lietuva. Palūkanos už pavėluotą piniginę prievolę 5 % metinių, tarp verslininkų 6 % (Civilinio kodekso 6.210 str.). */
import type { Sablona } from '../typy';
import { sumaZodziais } from './skaiciai';
import { CK, PORASTE } from './saltiniai';

export const raginimas: Sablona = {
  kod: 'LT-RAGINIMAS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Raginimas sumokėti skolą', podnadpis: 'priminimas skolininkui sumokėti skolą iki termino',
  souborPdf: 'raginimas-sumoketi', paticka: PORASTE('LT-RAGINIMAS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'kreditorius', vpravo: '' },
  cislovatClanky: false,
  slovo: { n: 'raginimas', g: 'raginimo', a: 'raginimą', l: 'raginime' },
  coDal: ['Siųskite raginimą registruotu laišku arba el. paštu ir išsaugokite išsiuntimo įrodymą.', 'Jei skolininkas nemoka, galite kreiptis į teismą; piniginiams reikalavimams yra ir supaprastintas teismo įsakymo išdavimo procesas.'],
  kontrola: [
    'Tiksliai įrašykite, iš ko reikalavimas kyla (sutartis, sąskaita, paskola), ir kokio jis dydžio.',
    'Duokite protingą mokėjimo terminą, paprastai 7–14 dienų.',
    `Už pavėluotą mokėjimą galima reikalauti 5 % metinių palūkanų, jei sutartis nenustato kitaip; kai abi šalys verslininkai – 6 % ([Civilinio kodekso 6.210 str.](${CK.url})).`,
    `Pats raginimas ieškinio senaties nenutraukia – ją nutraukia ieškinio pareiškimas arba skolininko skolos pripažinimas ([Civilinio kodekso 1.130 str.](${CK.url})). Bendrasis senaties terminas – 10 metų.`,
  ],
  zdroje: [CK],
  kroky: [{ id: 'duomenys', nazev: 'Reikalavimas', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Kreditorius – vardas, pavardė', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Kreditoriaus adresas', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Skolininkas – vardas, pavardė arba pavadinimas', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Skolininko adresas', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Skolos suma (eurais)', sirka: 12, polovina: true },
    { id: 'nokavets', typ: 'datum', popis: 'Mokėjimo terminas baigėsi', sirka: 14, polovina: true },
    { id: 'pamats', typ: 'text', popis: 'Skolos pagrindas', placeholder: 'pvz., atlyginimas už remonto darbus pagal 2026-09-01 rangos sutartį', sirka: 56 },
    { id: 'jauns_termins', typ: 'datum', popis: 'Sumokėti iki', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'Kreditoriaus IBAN', placeholder: 'LT12 1000 0111 0100 1000', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_vardiem: (d) => sumaZodziais(d.castka) },
  clanky: [{ nadpis: 'Raginimas sumokėti', odstavce: [
    '**Siuntėjas:** {{p_jmeno}}, {{p_adresa}}',
    '**Adresatas:** {{k_jmeno}}, {{k_adresa}}',
    'Jūs esate man skolingas **{{castka}}** (žodžiais: {{castka_vardiem}}), kurie kyla iš: {{pamats}}. Mokėjimo terminas baigėsi {{nokavets}}, tačiau skola nesumokėta.',
    'Prašau sumokėti sumą ne vėliau kaip {{jauns_termins}} į mano sąskaitą IBAN {{iban}}.',
    'Priešingu atveju kreipsiuosi į teismą dėl skolos priteisimo ir papildomai reikalausiu palūkanų už pavėluotą mokėjimą bei bylinėjimosi išlaidų atlyginimo.',
  ] }],
};
