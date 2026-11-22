/** Įgaliojimas – Lietuva (Civilinio kodekso 2.137 ir kt. str.). Įgaliojimas sudaryti sandorius, kuriems būtina notarinė forma, turi būti patvirtintas notaro. */
import type { Sablona } from '../typy';
import { CK, PAD_ASMUO, PORASTE } from './saltiniai';

export const igaliojimas: Sablona = {
  kod: 'LT-IGALIOJIMAS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Įgaliojimas', podnadpis: 'fizinio asmens įgaliojimas atstovauti (Civilinio kodekso 2.137 ir kiti straipsniai)',
  souborPdf: 'igaliojimas', paticka: PORASTE('LT-IGALIOJIMAS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'įgaliotojas', vpravo: 'įgaliotinis (neprivaloma)' },
  cislovatClanky: false,
  slovo: { n: 'įgaliojimas', g: 'įgaliojimo', a: 'įgaliojimą', l: 'įgaliojime' },
  coDal: ['Pasirašykite įgaliojimą ranka arba kvalifikuotu elektroniniu parašu.', 'Perduokite įgaliojimą įgaliotiniui; jo jam reikės kartu su asmens tapatybės dokumentu.'],
  kontrola: [
    `Įgaliojimas sudaryti sandorius, kuriems būtina notarinė forma (pvz., nekilnojamojo turto perleidimas), turi būti patvirtintas notaro ([Civilinis kodeksas](${CK.url})).`,
    'Konkrečiai aprašykite, ką įgaliotinis gali daryti, ir nustatykite įgaliojimo galiojimo terminą.',
    'Bankai, Regitra ir kitos įstaigos gali reikalauti notaro patvirtinto įgaliojimo arba savos formos – pasitikrinkite iš anksto.',
    'Įgaliojimą bet kada galite atšaukti – apie atšaukimą praneškite įgaliotiniui ir įstaigoms, kur įgaliojimas pateiktas.',
    PAD_ASMUO,
  ],
  zdroje: [CK],
  kroky: [
    { id: 'asmenys', nazev: 'Kas ką įgalioja', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Įgaliotojas – vardas, pavardė', placeholder: 'pvz., Rūta Kazlauskienė', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Asmens kodas', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresas', sirka: 46 },
      { id: 'z_jmeno', typ: 'text', popis: 'Įgaliotinis – vardas, pavardė', placeholder: 'pvz., Tomas Petrauskas', sirka: 34 },
      { id: 'z_ik', typ: 'text', popis: 'Asmens kodas', sirka: 14, polovina: true },
      { id: 'z_adresa', typ: 'text', popis: 'Adresas', sirka: 46 },
    ] },
    { id: 'apimtis', nazev: 'Ką gali daryti', pole: [
      { id: 'darbibas', typ: 'textarea', popis: 'Veiksmai', napoveda: 'Kuo konkrečiau, tuo geriau. Transporto priemonės atveju įrašykite registracijos numerį ir VIN.', placeholder: 'pvz., mano vardu atsiimti pašto siuntas Lietuvos pašto skyriuje', sirka: 64 },
      { id: 'parpilnvarojums', typ: 'volba', popis: 'Ar gali perįgalioti trečiąjį asmenį?', moznosti: [ { hodnota: 'ne', popis: 'Ne' }, { hodnota: 'ja', popis: 'Taip' } ] },
      { id: 'lidz', typ: 'datum', popis: 'Galioja iki', napoveda: 'Jei paliksite tuščią, įgaliojimas galioja iki atšaukimo.', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Įgaliojimas', odstavce: [
    'Aš, **{{p_jmeno}}**, asmens kodas {{p_ik}}, adresas {{p_adresa}},',
    'įgalioju **{{z_jmeno}}**, asmens kodas {{z_ik}}, adresas {{z_adresa}},',
    'mano vardu atlikti šiuos veiksmus: {{darbibas}}',
    'Tam įgaliotinis gali teikti prašymus, pasirašyti reikiamus dokumentus ir mano vardu gauti dokumentus.',
    { volba: 'parpilnvarojums', uvodVzor: 'Perįgaliojimas (pažymėkite vieną variantą):', moznosti: { ne: 'Įgaliotinis negali perįgalioti trečiojo asmens.', ja: 'Įgaliotinis gali perįgalioti trečiąjį asmenį.' } },
    'Įgaliojimas galioja iki {{lidz}} arba iki jo atšaukimo.',
  ] }],
};
