/** Kilnojamojo daikto pirkimo–pardavimo sutartis tarp fizinių asmenų – Lietuva (Civilinio kodekso 6.305 ir kt. str.). */
import type { Sablona } from '../typy';
import { sumaZodziais } from './skaiciai';
import { CK, PAD_ASMUO, PAD_GRYNIEJI, PORASTE } from './saltiniai';

export const pirkimoSutartis: Sablona = {
  kod: 'LT-PIRKIMAS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Pirkimo–pardavimo sutartis', podnadpis: 'kilnojamojo daikto pardavimas tarp fizinių asmenų (Civilinio kodekso 6.305 ir kiti straipsniai)',
  souborPdf: 'pirkimo-pardavimo-sutartis', paticka: PORASTE('LT-PIRKIMAS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'pardavėjas', vpravo: 'pirkėjas' },
  slovo: { n: 'sutartis', g: 'sutarties', a: 'sutartį', l: 'sutartyje' },
  coDal: ['Atsispausdinkite sutartį dviem egzemplioriais ir pasirašykite abu.', 'Perduokite daiktą kartu su priedais ir dokumentais.'],
  kontrola: [
    'Tiksliai aprašykite daiktą (markė, modelis, serijos numeris, priedai).',
    'Įrašykite visus žinomus trūkumus – už trūkumus, apie kuriuos pirkėjas žinojo, pardavėjas neatsako.',
    `Fizinių asmenų sandoriai, kurių suma didesnė kaip 1 500 €, sudaromi raštu, išskyrus tuos, kurie įvykdomi sudarymo metu ([Civilinio kodekso 1.73 str.](${CK.url})).`,
    PAD_ASMUO,
    PAD_GRYNIEJI,
  ],
  zdroje: [CK],
  kroky: [
    { id: 'salys', nazev: 'Pardavėjas ir pirkėjas', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Pardavėjas – vardas, pavardė', placeholder: 'pvz., Rūta Kazlauskienė', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Pardavėjo adresas', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Pirkėjas – vardas, pavardė', placeholder: 'pvz., Tomas Petrauskas', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Pirkėjo adresas', sirka: 46 },
    ] },
    { id: 'daiktas', nazev: 'Daiktas ir kaina', pole: [
      { id: 'vec', typ: 'textarea', popis: 'Daikto aprašymas', placeholder: 'pvz., elektrinis dviratis Cube Kathmandu, serijos numeris WCU123456, su įkrovikliu', sirka: 64 },
      { id: 'stavoklis', typ: 'text', popis: 'Būklė ir žinomi trūkumai', placeholder: 'pvz., naudotas, įbrėžimas ant rėmo', sirka: 56 },
      { id: 'cena', typ: 'castka', popis: 'Kaina (eurais)', sirka: 12, polovina: true },
      { id: 'samaksa', typ: 'volba', popis: 'Atsiskaitymas', moznosti: [ { hodnota: 'skaidra', popis: 'grynaisiais, pasirašant' }, { hodnota: 'banka', popis: 'banko pavedimu' } ] },
      { id: 'iban', typ: 'text', popis: 'Pardavėjo IBAN', placeholder: 'LT12 1000 0111 0100 1000', sirka: 30, zobrazitKdyz: { pole: 'samaksa', je: 'banka' } },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_vardiem: (d) => sumaZodziais(d.cena) },
  clanky: [
    { nadpis: 'Šalys', odstavce: ['**Pardavėjas:** {{p_jmeno}}, adresas {{p_adresa}}', '**Pirkėjas:** {{k_jmeno}}, adresas {{k_adresa}}'] },
    { nadpis: 'Sutarties dalykas', odstavce: ['Pardavėjas parduoda, o pirkėjas perka šį daiktą: {{vec}}.', 'Būklė ir žinomi trūkumai: {{stavoklis}}. Pirkėjas apžiūrėjo daiktą ir perka jį tokios būklės, kokia yra.', 'Pardavėjas patvirtina, kad daiktas priklauso jam ir tretieji asmenys į jį neturi teisių.'] },
    { nadpis: 'Kaina', odstavce: ['Kaina yra **{{cena}}** (žodžiais: {{cena_vardiem}}).', { volba: 'samaksa', uvodVzor: 'Atsiskaitymas (pažymėkite vieną variantą):', moznosti: { skaidra: 'Pirkėjas sumokėjo kainą grynaisiais pinigais pasirašant sutartį; pardavėjas savo parašu patvirtina pinigų gavimą.', banka: 'Pirkėjas perveda kainą į pardavėjo sąskaitą IBAN {{iban}}. Daiktas perduodamas gavus sumą.' } }] },
    { nadpis: 'Perdavimas ir baigiamosios nuostatos', odstavce: ['Perdavus daiktą, pirkėjas tampa jo savininku ir jam pereina atsitiktinio daikto žuvimo rizika.', 'Šioje sutartyje nesureguliuotiems klausimams taikomos Lietuvos Respublikos civilinio kodekso nuostatos dėl pirkimo–pardavimo. Sutartis sudaryta dviem vienodais egzemplioriais.'] },
  ],
};
