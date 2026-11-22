/** Nuomininko pranešimas apie gyvenamosios patalpos nuomos sutarties nutraukimą – Lietuva (Civilinio kodekso 6.609 str.: raštu prieš mėnesį). */
import type { Sablona } from '../typy';
import { naDatum, pridejMesice, isoDatum } from '../terminy';
import { CK, PORASTE } from './saltiniai';

export const nuomosNutraukimas: Sablona = {
  kod: 'LT-NUOMA-NUTRAUKIMAS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Pranešimas apie nuomos sutarties nutraukimą', podnadpis: 'nuomininko rašytinis įspėjimas apie gyvenamosios patalpos nuomos sutarties nutraukimą',
  souborPdf: 'pranesimas-apie-nuomos-nutraukima', paticka: PORASTE('LT-NUOMA-NUTRAUKIMAS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'nuomininkas', vpravo: 'gavo (nuomotojas, neprivaloma)' },
  cislovatClanky: false,
  slovo: { n: 'pranešimas', g: 'pranešimo', a: 'pranešimą', l: 'pranešime' },
  pripominky: (d) => {
    const od = naDatum(d.datum);
    return od ? [{ nazev: 'Anksčiausia sutarties pabaigos diena (1 mėnuo)', datum: isoDatum(pridejMesice(od, 1)), popis: 'Jei nuomotojas pranešimą gauna šią dieną.' }] : [];
  },
  coDal: ['Siųskite pranešimą raštu – registruotu laišku arba el. paštu – ir išsaugokite išsiuntimo įrodymą.', 'Susitarkite dėl raktų grąžinimo dienos ir surašykite perdavimo–priėmimo aktą.', 'Praneškite skaitiklių rodmenis ir nutraukite savo vardu sudarytas sutartis (elektra, internetas).'],
  kontrola: [
    `Nuomininkas turi teisę nutraukti tiek terminuotą, tiek neterminuotą gyvenamosios patalpos nuomos sutartį, raštu įspėjęs nuomotoją prieš vieną mėnesį ([Civilinio kodekso 6.609 str.](${CK.url})).`,
    'Įspėjimo terminas skaičiuojamas nuo dienos, kai nuomotojas gauna pranešimą – siųskite laiku ir išsaugokite įrodymą.',
    'Užstatas automatiškai neįskaitomas į paskutinio mėnesio nuomos mokestį – susitarkite dėl to raštu.',
    'Greitesnis ir ramesnis sprendimas dažnai yra susitarimas nutraukti nuomos sutartį.',
  ],
  zdroje: [CK],
  kroky: [{ id: 'duomenys', nazev: 'Pranešimas', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Nuomotojas – vardas, pavardė', sirka: 34 },
    { id: 'p_adresa', typ: 'text', popis: 'Nuomotojo adresas', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Nuomininkas – vardas, pavardė', sirka: 34, autocomplete: 'name' },
    { id: 'byt', typ: 'text', popis: 'Gyvenamosios patalpos adresas', sirka: 46 },
    { id: 'liguma_datums', typ: 'datum', popis: 'Nuomos sutarties data', sirka: 14, polovina: true },
    { id: 'beigas', typ: 'datum', popis: 'Sutartis baigiasi', napoveda: 'Ne anksčiau kaip po mėnesio nuo dienos, kai nuomotojas gauna pranešimą.', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'IBAN užstatui grąžinti', placeholder: 'LT12 1000 0111 0100 1000', sirka: 30 },
    { id: 'k_adresa', typ: 'text', popis: 'Nuomininko kontaktinis adresas', sirka: 46 },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Pranešimas apie nuomos sutarties nutraukimą', odstavce: [
    '**Adresatas:** {{p_jmeno}}, {{p_adresa}}',
    'Vadovaudamasis Lietuvos Respublikos civilinio kodekso 6.609 straipsniu, pranešu, kad nutraukiu {{liguma_datums}} sudarytą gyvenamosios patalpos adresu {{byt}} nuomos sutartį.',
    'Sutartis baigiasi {{beigas}}. Iki šios dienos atlaisvinsiu gyvenamąją patalpą, grąžinsiu raktus ir siūlau surašyti perdavimo–priėmimo aktą.',
    'Prašau grąžinti užstatą, išskaičiavus pagrįstus reikalavimus, į sąskaitą IBAN {{iban}}.',
    '**Nuomininkas:** {{k_jmeno}}, {{k_adresa}}',
  ] }],
};
