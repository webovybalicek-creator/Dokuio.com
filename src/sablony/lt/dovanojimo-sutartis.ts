/**
 * Dovanojimo sutartis – Lietuva (Civilinio kodekso 6.465 ir kt. str.). Virš 1 500 € – raštu, nekilnojamojo daikto ir virš 14 500 € –
 * notarine forma (6.469). GPM: dovanos iš sutuoktinio, vaikų, tėvų, senelių, brolių, seserų, vaikaičių neapmokestinamos, iš kitų – 2 500 € per metus.
 */
import type { Sablona } from '../typy';
import { sumaZodziais } from './skaiciai';
import { CK, DOVANA, PAD_ASMUO, PORASTE } from './saltiniai';

export const dovanojimas: Sablona = {
  kod: 'LT-DOVANOJIMAS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Dovanojimo sutartis', podnadpis: 'pinigų sumos ar kilnojamojo daikto dovanojimas su perdavimu (Civilinio kodekso 6.465 ir kiti straipsniai)',
  souborPdf: 'dovanojimo-sutartis', paticka: PORASTE('LT-DOVANOJIMAS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'dovanotojas', vpravo: 'apdovanotasis' },
  slovo: { n: 'sutartis', g: 'sutarties', a: 'sutartį', l: 'sutartyje' },
  coDal: ['Perduokite daiktą arba perveskite pinigus su paskirtimi „dovana pagal sutartį“.', 'Kiekviena šalis pasilieka po vieną pasirašytą egzempliorių.'],
  kontrola: [
    `Kai dovanojama daugiau kaip 1 500 €, sutartis turi būti rašytinė. Nekilnojamojo daikto dovanojimo sutartis ir dovanojimo sutartis, kurios suma didesnė kaip 14 500 €, turi būti notarinės formos – tokiu atveju šis pavyzdys tinka tik kaip juodraštis notarui ([Civilinio kodekso 6.469 str.](${CK.url})).`,
    `Dovanos iš sutuoktinio, vaikų (įvaikių), tėvų (įtėvių), senelių, brolių, seserų ir vaikaičių pajamų mokesčiu neapmokestinamos. Iš kitų asmenų per metus neapmokestinama 2 500 €; nuo viršijančios dalies GPM moka apdovanotasis, o visą sumą deklaruoja metinėje deklaracijoje ([VMI](${DOVANA.url})).`,
    'Dovanojant transporto priemonę, nuosavybės pasikeitimą dar reikia deklaruoti Regitroje.',
    'Sutartis yra geras dovanos ir jos vertės įrodymas – ypač kai dovana viršija neapmokestinamą sumą.',
    PAD_ASMUO,
  ],
  zdroje: [CK, DOVANA],
  kroky: [
    { id: 'salys', nazev: 'Dovanotojas ir apdovanotasis', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Dovanotojas – vardas, pavardė', placeholder: 'pvz., Rūta Kazlauskienė', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Asmens kodas', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresas', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Apdovanotasis – vardas, pavardė', placeholder: 'pvz., Eglė Kazlauskaitė', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Asmens kodas', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Adresas', sirka: 46 },
      { id: 'attieciba', typ: 'text', popis: 'Giminystė (neprivaloma)', napoveda: 'Svarbu mokesčiams: sutuoktinis, vaikai, tėvai, seneliai, broliai, seserys ir vaikaičiai atleisti.', placeholder: 'pvz., motina ir duktė', sirka: 30 },
    ] },
    { id: 'dovana', nazev: 'Dovana', pole: [
      { id: 'veids', typ: 'volba', popis: 'Kas dovanojama', moznosti: [ { hodnota: 'nauda', popis: 'pinigų suma' }, { hodnota: 'lieta', popis: 'kilnojamasis daiktas' } ] },
      { id: 'castka', typ: 'castka', popis: 'Suma (eurais)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'veids', je: 'nauda' } },
      { id: 'lieta', typ: 'textarea', popis: 'Daikto aprašymas', placeholder: 'pvz., nešiojamasis kompiuteris Lenovo ThinkPad, serijos numeris …', sirka: 56, zobrazitKdyz: { pole: 'veids', je: 'lieta' } },
      { id: 'vertiba', typ: 'castka', popis: 'Daikto vertė (eurais)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'veids', je: 'lieta' } },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_vardiem: (d) => sumaZodziais(d.castka), vertiba_vardiem: (d) => sumaZodziais(d.vertiba) },
  clanky: [
    { nadpis: 'Šalys', odstavce: ['**Dovanotojas:** {{p_jmeno}}, asmens kodas {{p_ik}}, adresas {{p_adresa}}', '**Apdovanotasis:** {{k_jmeno}}, asmens kodas {{k_ik}}, adresas {{k_adresa}}', 'Šalių giminystė: {{attieciba}}.'] },
    { nadpis: 'Dovanojimo dalykas', odstavce: [{ volba: 'veids', uvodVzor: 'Dovana (pažymėkite vieną variantą):', moznosti: { nauda: 'Dovanotojas neatlygintinai perduoda apdovanotajam nuosavybėn **{{castka}}** (žodžiais: {{castka_vardiem}}), kuriuos perveda į banko sąskaitą arba perduoda pasirašant sutartį.', lieta: 'Dovanotojas neatlygintinai perduoda apdovanotajam nuosavybėn šį kilnojamąjį daiktą: {{lieta}}, kurio vertė {{vertiba}} (žodžiais: {{vertiba_vardiem}}), perduodamą pasirašant sutartį.' } }, 'Apdovanotasis dovaną priima ir patvirtina, kad ją gavo.'] },
    { nadpis: 'Baigiamosios nuostatos', odstavce: ['Šioje sutartyje nesureguliuotiems klausimams taikomos Lietuvos Respublikos civilinio kodekso nuostatos dėl dovanojimo.', 'Sutartis sudaryta dviem vienodais egzemplioriais.'] },
  ],
};
