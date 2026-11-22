/** Susitarimas dėl skolos grąžinimo dalimis – Lietuva. Susitarimas kartu yra skolos pripažinimas, nutraukiantis ieškinio senatį (Civilinio kodekso 1.130 str.). */
import type { Sablona } from '../typy';
import { sumaZodziais } from './skaiciai';
import { CK, PAD_ASMUO, PORASTE } from './saltiniai';

export const grazinimoSusitarimas: Sablona = {
  kod: 'LT-GRAZINIMO-GRAFIKAS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Susitarimas dėl skolos grąžinimo', podnadpis: 'skolos pripažinimas ir mokėjimas mėnesinėmis įmokomis',
  souborPdf: 'susitarimas-del-skolos-grazinimo', paticka: PORASTE('LT-GRAZINIMO-GRAFIKAS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'kreditorius', vpravo: 'skolininkas' },
  slovo: { n: 'susitarimas', g: 'susitarimo', a: 'susitarimą', l: 'susitarime' },
  coDal: ['Pasirašykite susitarimą dviem egzemplioriais.', 'Įmokų datas pasižymėkite kalendoriuje.', 'Išsaugokite mokėjimų patvirtinimus.'],
  kontrola: [
    `Susitarimu skolininkas pripažįsta skolą; pripažinimas nutraukia ieškinio senatį, ir ji pradedama skaičiuoti iš naujo ([Civilinio kodekso 1.130 str.](${CK.url})).`,
    'Įrašykite, kas bus, jei įmoka nesumokama (pavyzdžiui, visa likusi suma tampa mokėtina).',
    'Mokėkite banko pavedimu – sąskaitos išrašas įrodo kiekvieną įmoką.',
    PAD_ASMUO,
  ],
  zdroje: [CK],
  kroky: [
    { id: 'salys', nazev: 'Kreditorius ir skolininkas', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Kreditorius – vardas, pavardė arba pavadinimas', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Kreditoriaus adresas', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Skolininkas – vardas, pavardė', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Skolininko asmens kodas', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Skolininko adresas', sirka: 46 },
    ] },
    { id: 'grafikas', nazev: 'Skola ir įmokos', pole: [
      { id: 'castka', typ: 'castka', popis: 'Visa skolos suma (eurais)', sirka: 12, polovina: true },
      { id: 'pamats', typ: 'text', popis: 'Skolos pagrindas', placeholder: 'pvz., nesumokėta kaina pagal 2026-06-01 transporto priemonės pirkimo–pardavimo sutartį', sirka: 56 },
      { id: 'maksajums', typ: 'castka', popis: 'Mėnesinė įmoka (eurais)', sirka: 12, polovina: true },
      { id: 'skaits', typ: 'cislo', popis: 'Įmokų skaičius', sirka: 6, polovina: true },
      { id: 'diena', typ: 'cislo', popis: 'Įmoka kiekvieno mėnesio … dieną', placeholder: 'pvz., 15', sirka: 6, polovina: true },
      { id: 'pirmais', typ: 'datum', popis: 'Pirmoji įmoka', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'Kreditoriaus IBAN', placeholder: 'LT12 1000 0111 0100 1000', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_vardiem: (d) => sumaZodziais(d.castka), maksajums_vardiem: (d) => sumaZodziais(d.maksajums) },
  clanky: [
    { nadpis: 'Šalys', odstavce: ['**Kreditorius:** {{p_jmeno}}, {{p_adresa}}', '**Skolininkas:** {{k_jmeno}}, asmens kodas {{k_ik}}, adresas {{k_adresa}}'] },
    { nadpis: 'Skolos pripažinimas', vysvetleni: 'Skolininkas patvirtina, kad skola yra ir kokio ji dydžio.', odstavce: ['Skolininkas pripažįsta, kad susitarimo pasirašymo dieną yra skolingas kreditoriui **{{castka}}** (žodžiais: {{castka_vardiem}}), kurie kyla iš: {{pamats}}.'] },
    { nadpis: 'Mokėjimas dalimis', odstavce: ['Kreditorius sutinka, kad skolininkas sumokėtų skolą {{skaits}} mėnesinėmis įmokomis po **{{maksajums}}** (žodžiais: {{maksajums_vardiem}}); paskutinė įmoka lygi likusiai skolos daliai.', 'Pirmoji įmoka mokama {{pirmais}}, kiekviena kita – ne vėliau kaip kiekvieno mėnesio {{diena}} dieną į kreditoriaus sąskaitą IBAN {{iban}}.', 'Skolininkas gali skolą ar jos dalį sumokėti ir anksčiau termino.'] },
    { nadpis: 'Įmokų vėlavimas', odstavce: ['Jei skolininkas praleidžia dvi įmokas, kreditorius rašytiniu pranešimu gali reikalauti nedelsiant sumokėti visą likusią skolą kartu su Civilinio kodekso 6.210 straipsnyje nustatytomis palūkanomis.'] },
    { nadpis: 'Baigiamosios nuostatos', odstavce: ['Šiame susitarime nesureguliuotiems klausimams taikomas Lietuvos Respublikos civilinis kodeksas. Susitarimas sudarytas dviem vienodais egzemplioriais.'] },
  ],
};
