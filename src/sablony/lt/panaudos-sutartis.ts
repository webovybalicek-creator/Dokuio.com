/** Panaudos sutartis – Lietuva (Civilinio kodekso 6.629 ir kt. str.). Daikto perdavimas neatlygintinai naudotis. */
import type { Sablona } from '../typy';
import { sumaZodziais } from './skaiciai';
import { CK, PAD_ASMUO, PORASTE } from './saltiniai';

export const panauda: Sablona = {
  kod: 'LT-PANAUDA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Panaudos sutartis', podnadpis: 'daikto perdavimas neatlygintinai naudotis (Civilinio kodekso 6.629 ir kiti straipsniai)',
  souborPdf: 'panaudos-sutartis', paticka: PORASTE('LT-PANAUDA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'panaudos davėjas', vpravo: 'panaudos gavėjas' },
  slovo: { n: 'sutartis', g: 'sutarties', a: 'sutartį', l: 'sutartyje' },
  pripominky: (d) => (d.termins === 'datums' && typeof d.atdot === 'string' && d.atdot ? [{ nazev: 'Daikto grąžinimas', datum: d.atdot, popis: 'Grąžindami daiktą patikrinkite kartu.' }] : []),
  coDal: ['Pasirašykite sutartį dviem egzemplioriais.', 'Perduodami daiktą patikrinkite jį kartu ir užrašykite trūkumus.', 'Grąžinant paprašykite patvirtinimo, kad daiktas grąžintas geros būklės.'],
  kontrola: [
    'Panauda yra neatlygintina. Jei už naudojimąsi imate mokestį, tai nuomos sutartis.',
    'Tiksliai aprašykite daiktą (markė, modelis, serijos numeris, priedai) ir jo būklę perdavimo metu.',
    'Panaudos gavėjas naudojasi daiktu tik sutartu būdu ir neperduoda jo tretiesiems asmenims be panaudos davėjo sutikimo.',
    'Susitarkite, kada daiktas grąžinamas – iki nustatytos datos ar pasiekus tikslą.',
    PAD_ASMUO,
  ],
  zdroje: [CK],
  kroky: [
    { id: 'salys', nazev: 'Panaudos davėjas ir gavėjas', popis: 'Panaudos davėjas perduoda daiktą neatlygintinai naudotis; gavėjas juo naudojasi ir grąžina.', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Panaudos davėjas – vardas, pavardė', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Panaudos davėjo asmens kodas', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Panaudos davėjo adresas', sirka: 46 },
      { id: 'v_jmeno', typ: 'text', popis: 'Panaudos gavėjas – vardas, pavardė', sirka: 34 },
      { id: 'v_ik', typ: 'text', popis: 'Gavėjo asmens kodas', sirka: 14, polovina: true },
      { id: 'v_adresa', typ: 'text', popis: 'Gavėjo adresas', sirka: 46 },
    ] },
    { id: 'daiktas', nazev: 'Daiktas', pole: [
      { id: 'lieta', typ: 'textarea', popis: 'Perduodamas daiktas', napoveda: 'Markė, modelis, serijos numeris, priedai.', placeholder: 'pvz., lengvojo automobilio priekaba, registracijos numeris AB123, su tentu ir raktu', sirka: 64 },
      { id: 'stavoklis', typ: 'text', popis: 'Būklė perdavimo metu', placeholder: 'pvz., tvarkinga, įbrėžimas ant kairiojo sparno', sirka: 56 },
      { id: 'vertiba', typ: 'castka', popis: 'Daikto vertė (eurais, neprivaloma)', napoveda: 'Jei daiktas būtų prarastas ar sunaikintas.', sirka: 12, polovina: true },
      { id: 'merkis', typ: 'text', popis: 'Naudojimo tikslas', placeholder: 'pvz., baldų pervežimas kraustantis', sirka: 46 },
    ] },
    { id: 'terminas', nazev: 'Terminas ir grąžinimas', pole: [
      { id: 'nodots', typ: 'datum', popis: 'Perdavimo diena', sirka: 14, polovina: true, vychozi: 'dnes' },
      { id: 'termins', typ: 'volba', popis: 'Kokiam laikui', moznosti: [ { hodnota: 'datums', popis: 'iki nustatytos datos' }, { hodnota: 'merkis', popis: 'kol bus pasiektas tikslas' } ] },
      { id: 'atdot', typ: 'datum', popis: 'Grąžinti iki', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'termins', je: 'datums' } },
      { id: 'atdosanas_vieta', typ: 'text', popis: 'Grąžinimo vieta', placeholder: 'pvz., panaudos davėjo adresu', sirka: 46 },
      { id: 'misto', typ: 'text', popis: 'Pasirašymo vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Pasirašymo data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { vertiba_vardiem: (d) => sumaZodziais(d.vertiba) },
  clanky: [
    { nadpis: 'Šalys', odstavce: ['**Panaudos davėjas:** {{p_jmeno}}, asmens kodas {{p_ik}}, adresas {{p_adresa}}', '**Panaudos gavėjas:** {{v_jmeno}}, asmens kodas {{v_ik}}, adresas {{v_adresa}}'] },
    { nadpis: 'Sutarties dalykas', vysvetleni: 'Panaudos davėjas perduoda daiktą neatlygintinai naudotis.', odstavce: ['Panaudos davėjas perduoda panaudos gavėjui neatlygintinai laikinai naudotis šį daiktą: {{lieta}}.', 'Būklė perdavimo metu: {{stavoklis}}. Daikto vertė: {{vertiba}}.', 'Naudojimo tikslas: {{merkis}}. Panaudos davėjas patvirtina, kad jam nežinomi daikto paslėpti trūkumai, apie kuriuos jis nepranešė.'] },
    { nadpis: 'Terminas ir grąžinimas', odstavce: ['Daiktas perduotas {{nodots}}.', { volba: 'termins', uvodVzor: 'Terminas (pažymėkite vieną variantą):', moznosti: { datums: 'Panauda sutarta iki {{atdot}}. Iki šios dienos panaudos gavėjas grąžina daiktą.', merkis: 'Panauda sutarta, kol bus pasiektas tikslas. Panaudos gavėjas grąžina daiktą, kai tik jo nebereikia.' } }, 'Panaudos gavėjas grąžina daiktą vietoje: {{atdosanas_vieta}} tokios pat būklės, atsižvelgiant į normalų nusidėvėjimą.', 'Panaudos davėjas gali reikalauti grąžinti daiktą anksčiau termino, jei gavėjas juo naudojasi pažeisdamas sutartį arba be sutikimo perduoda jį trečiajam asmeniui.'] },
    { nadpis: 'Daikto naudojimas', vysvetleni: 'Kaip naudojamasi daiktu ir kas ką apmoka.', odstavce: ['Panaudos gavėjas naudojasi daiktu rūpestingai, tik pagal sutartį, ir saugo jį nuo sugadinimo, praradimo ir sunaikinimo.', 'Panaudos gavėjas neperduoda daikto tretiesiems asmenims be panaudos davėjo sutikimo.', 'Įprastas daikto išlaikymo išlaidas apmoka panaudos gavėjas. Apie didesnio remonto poreikį jis nedelsdamas praneša panaudos davėjui.'] },
    { nadpis: 'Baigiamosios nuostatos', odstavce: ['Šioje sutartyje nesureguliuotiems klausimams taikomos Lietuvos Respublikos civilinio kodekso nuostatos dėl panaudos.', 'Pakeitimai daromi raštu. Sutartis sudaryta dviem vienodais egzemplioriais, po vieną kiekvienai šaliai.'] },
  ],
};
