/**
 * Paskolos sutartis tarp fizinių asmenų – Lietuva (Civilinio kodekso 6.870 ir kt. str.). Virš 600 € – rašytinė forma (6.871);
 * palūkanos už pavėluotą mokėjimą 5 % metinių (6.210); bendrasis senaties terminas 10 metų (1.125), pripažinimas jį nutraukia (1.130).
 */
import type { Sablona } from '../typy';
import { sumaZodziais } from './skaiciai';
import { CK, GRYNIEJI, PAD_ASMUO, PORASTE } from './saltiniai';

export const paskola: Sablona = {
  kod: 'LT-PASKOLA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Paskolos sutartis', podnadpis: 'pinigų paskola tarp fizinių asmenų (Civilinio kodekso 6.870 ir kiti straipsniai)',
  souborPdf: 'paskolos-sutartis', paticka: PORASTE('LT-PASKOLA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'paskolos davėjas', vpravo: 'paskolos gavėjas' },
  slovo: { n: 'sutartis', g: 'sutarties', a: 'sutartį', l: 'sutartyje' },
  coDal: ['Atsispausdinkite sutartį dviem egzemplioriais ir pasirašykite abu.', 'Pinigus perveskite banko pavedimu su paskirtimi „paskola pagal sutartį“.', 'Grąžinimo datas pasižymėkite kalendoriuje.'],
  kontrola: [
    `Fizinių asmenų paskolos sutartis turi būti rašytinė, jeigu paskolos suma viršija 600 € ([Civilinio kodekso 6.871 str.](${CK.url})).`,
    `Paskolą išmokėkite banko pavedimu – mokėjimo nurodymas įrodo, kad pinigai perduoti. Grynaisiais pagal vieną sandorį – ne daugiau kaip 5 000 € ([įstatymas](${GRYNIEJI.url})).`,
    `Jei norite palūkanų, aiškiai įrašykite jas į sutartį. Už pavėluotą mokėjimą, jei nesusitarta kitaip, mokamos 5 % metinės palūkanos ([Civilinio kodekso 6.210 str.](${CK.url})).`,
    'Susitarkite, kas bus, jei grąžinimas vėluos (pavyzdžiui, sutarties nutraukimas ir visos likusios sumos pareikalavimas).',
    `Bendrasis ieškinio senaties terminas yra 10 metų; skolininko veiksmai, rodantys, kad jis pripažįsta skolą, senatį nutraukia ([Civilinio kodekso 1.125, 1.130 str.](${CK.url})).`,
    PAD_ASMUO,
  ],
  zdroje: [CK, GRYNIEJI],
  kroky: [
    { id: 'salys', nazev: 'Paskolos davėjas ir gavėjas', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Paskolos davėjas – vardas, pavardė', placeholder: 'pvz., Rūta Kazlauskienė', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Asmens kodas', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Adresas', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Paskolos gavėjas – vardas, pavardė', placeholder: 'pvz., Tomas Petrauskas', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Asmens kodas', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Adresas', sirka: 46 },
    ] },
    { id: 'paskola', nazev: 'Paskola ir grąžinimas', pole: [
      { id: 'castka', typ: 'castka', popis: 'Paskolos suma (eurais)', sirka: 12, polovina: true },
      { id: 'izsniegsana', typ: 'volba', popis: 'Pinigų perdavimas', moznosti: [ { hodnota: 'banka', popis: 'į paskolos gavėjo banko sąskaitą' }, { hodnota: 'skaidra', popis: 'grynaisiais, pasirašant' } ] },
      { id: 'k_iban', typ: 'text', popis: 'Paskolos gavėjo IBAN', placeholder: 'LT12 1000 0111 0100 1000', sirka: 30, zobrazitKdyz: { pole: 'izsniegsana', je: 'banka' } },
      { id: 'atmaksa', typ: 'volba', popis: 'Grąžinimas', moznosti: [ { hodnota: 'vienreiz', popis: 'vienu kartu iki nustatytos datos' }, { hodnota: 'dalas', popis: 'mėnesinėmis įmokomis' } ] },
      { id: 'termins', typ: 'datum', popis: 'Grąžinti iki', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'atmaksa', je: 'vienreiz' } },
      { id: 'maksajums', typ: 'castka', popis: 'Mėnesinė įmoka (eurais)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'atmaksa', je: 'dalas' } },
      { id: 'pirmais', typ: 'datum', popis: 'Pirmoji įmoka', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'atmaksa', je: 'dalas' } },
      { id: 'procenti', typ: 'volba', popis: 'Palūkanos', moznosti: [ { hodnota: 'nav', popis: 'be palūkanų' }, { hodnota: 'ir', popis: 'su sutartomis palūkanomis' } ] },
      { id: 'likme', typ: 'text', popis: 'Metinė palūkanų norma', placeholder: 'pvz., 4 %', sirka: 8, polovina: true, zobrazitKdyz: { pole: 'procenti', je: 'ir' } },
      { id: 'p_iban', typ: 'text', popis: 'Paskolos davėjo IBAN (grąžinimui)', placeholder: 'LT12 1000 0111 0100 1000', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_vardiem: (d) => sumaZodziais(d.castka) },
  clanky: [
    { nadpis: 'Šalys', odstavce: ['**Paskolos davėjas:** {{p_jmeno}}, asmens kodas {{p_ik}}, adresas {{p_adresa}}', '**Paskolos gavėjas:** {{k_jmeno}}, asmens kodas {{k_ik}}, adresas {{k_adresa}}'] },
    { nadpis: 'Sutarties dalykas', odstavce: ['Paskolos davėjas perduoda paskolos gavėjui nuosavybėn **{{castka}}** (žodžiais: {{castka_vardiem}}), o paskolos gavėjas įsipareigoja grąžinti tokią pat pinigų sumą.', { volba: 'izsniegsana', uvodVzor: 'Pinigų perdavimas (pažymėkite vieną variantą):', moznosti: { banka: 'Paskolos davėjas perveda sumą į paskolos gavėjo banko sąskaitą IBAN {{k_iban}}.', skaidra: 'Paskolos gavėjas gavo sumą grynaisiais pinigais pasirašant sutartį, ką patvirtina savo parašu.' } }] },
    { nadpis: 'Grąžinimas', odstavce: [{ volba: 'atmaksa', uvodVzor: 'Grąžinimo būdas (pažymėkite vieną variantą):', moznosti: { vienreiz: 'Paskolos gavėjas grąžina visą sumą ne vėliau kaip {{termins}}.', dalas: 'Paskolos gavėjas grąžina sumą mėnesinėmis įmokomis po {{maksajums}}, pirmąją {{pirmais}}, o kiekvieną kitą – kiekvieno mėnesio tą pačią dieną, kol paskola bus visiškai grąžinta.' } }, 'Mokėjimai atliekami į paskolos davėjo sąskaitą IBAN {{p_iban}}. Paskolos gavėjas gali paskolą grąžinti ir anksčiau termino.', 'Jei paskolos gavėjas praleidžia dvi įmokas, paskolos davėjas gali rašytiniu pranešimu nutraukti sutartį ir reikalauti sumokėti visą likusią sumą.'] },
    { nadpis: 'Palūkanos', odstavce: [{ volba: 'procenti', uvodVzor: 'Palūkanos (pažymėkite vieną variantą):', moznosti: { nav: 'Paskola yra be palūkanų.', ir: 'Paskolos gavėjas moka {{likme}} metinių palūkanų nuo negrąžintos sumos.' } }, 'Už pavėluotą mokėjimą paskolos gavėjas moka Lietuvos Respublikos civilinio kodekso 6.210 straipsnyje nustatytas palūkanas.'] },
    { nadpis: 'Baigiamosios nuostatos', odstavce: ['Šioje sutartyje nesureguliuotiems klausimams taikomos Lietuvos Respublikos civilinio kodekso nuostatos dėl paskolos sutarties.', 'Sutartis sudaryta dviem vienodais egzemplioriais, po vieną kiekvienai šaliai.'] },
  ],
};
