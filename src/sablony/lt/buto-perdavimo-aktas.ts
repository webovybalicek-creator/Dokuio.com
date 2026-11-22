/** Gyvenamosios patalpos perdavimo–priėmimo aktas – Lietuva. Skaitiklių rodmenys, raktai, būklė. */
import type { Sablona } from '../typy';
import { CK, PORASTE } from './saltiniai';

export const butoAktas: Sablona = {
  kod: 'LT-AKTAS-BUTAS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Gyvenamosios patalpos perdavimo–priėmimo aktas', podnadpis: 'gyvenamosios patalpos būklė, skaitikliai ir raktai',
  souborPdf: 'buto-perdavimo-aktas', paticka: PORASTE('LT-AKTAS-BUTAS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'nuomotojas', vpravo: 'nuomininkas' },
  cislovatClanky: false,
  slovo: { n: 'aktas', g: 'akto', a: 'aktą', l: 'akte' },
  prevzit: { kod: 'LT-NUOMA', nazev: 'gyvenamosios patalpos nuomos sutartis', mapuj: (d) => ({ p_jmeno: d.p_jmeno, k_jmeno: d.k_jmeno, byt: d.byt, misto: d.misto }) },
  coDal: ['Kiekviena šalis pasilieka po vieną egzempliorių.', 'Nufotografuokite skaitiklius ir kiekvieną patalpą.', 'Praneškite skaitiklių rodmenis paslaugų teikėjams ar namo administratoriui.'],
  kontrola: [
    'Perdavimo dieną įrašykite visų skaitiklių (elektros, vandens, dujų, šilumos) rodmenis.',
    'Pažymėkite esamus pažeidimus ir įrangą – tai padeda nuomos pabaigoje grąžinant užstatą.',
    'Už normalų nusidėvėjimą nuomininkas neatsako; už dėl jo kaltės atsiradusius pažeidimus atsako nuomininkas.',
  ],
  zdroje: [CK],
  kroky: [
    { id: 'salys', nazev: 'Šalys ir gyvenamoji patalpa', pole: [
      { id: 'veids', typ: 'volba', popis: 'Kada surašomas aktas', moznosti: [ { hodnota: 'sakums', popis: 'nuomos pradžioje (perdavimas nuomininkui)' }, { hodnota: 'beigas', popis: 'nuomos pabaigoje (grąžinimas nuomotojui)' } ] },
      { id: 'p_jmeno', typ: 'text', popis: 'Nuomotojas – vardas, pavardė', sirka: 34 },
      { id: 'k_jmeno', typ: 'text', popis: 'Nuomininkas – vardas, pavardė', sirka: 34 },
      { id: 'byt', typ: 'text', popis: 'Gyvenamosios patalpos adresas', sirka: 46 },
    ] },
    { id: 'bukle', nazev: 'Skaitikliai, raktai, būklė', pole: [
      { id: 'elektriba', typ: 'text', popis: 'Elektros skaitiklis', placeholder: 'pvz., 012345 kWh', sirka: 18, polovina: true },
      { id: 'udens', typ: 'text', popis: 'Vandens skaitikliai', placeholder: 'pvz., šaltas 234,5 m³, karštas 98,1 m³', sirka: 30 },
      { id: 'gaze', typ: 'text', popis: 'Dujų ar šilumos skaitiklis', sirka: 18, polovina: true },
      { id: 'atslegas', typ: 'text', popis: 'Raktai', placeholder: 'pvz., 2 lauko durų raktai, 1 pašto dėžutės raktas', sirka: 40 },
      { id: 'iekartojums', typ: 'textarea', popis: 'Įranga', placeholder: 'pvz., šaldytuvas, viryklė, skalbimo mašina, sofa', sirka: 56 },
      { id: 'bojajumi', typ: 'textarea', popis: 'Pažeidimai ir pastabos', placeholder: 'pvz., dėmė ant svetainės sienos', sirka: 56 },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Aktas', odstavce: [
    '**Nuomotojas:** {{p_jmeno}} · **Nuomininkas:** {{k_jmeno}}',
    { volba: 'veids', uvodVzor: 'Aktas surašomas (pažymėkite vieną variantą):', moznosti: { sakums: 'Nuomotojas perduoda, o nuomininkas priima gyvenamąją patalpą adresu {{byt}}.', beigas: 'Nuomininkas grąžina, o nuomotojas priima gyvenamąją patalpą adresu {{byt}}.' } },
    'Skaitiklių rodmenys – elektra: {{elektriba}}, vanduo: {{udens}}, dujos / šiluma: {{gaze}}.',
    'Perduoti raktai: {{atslegas}}.',
    'Įranga: {{iekartojums}}',
    'Pažeidimai ir pastabos: {{bojajumi}}',
    'Šalys patvirtina, kad gyvenamosios patalpos būklė atitinka aukščiau aprašytą.',
  ] }],
};
