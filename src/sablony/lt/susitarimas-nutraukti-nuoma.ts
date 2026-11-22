/** Susitarimas nutraukti gyvenamosios patalpos nuomos sutartį – Lietuva. Šalių susitarimu sutartį galima nutraukti bet kada. */
import type { Sablona } from '../typy';
import { CK, PORASTE } from './saltiniai';

export const nuomosPabaiga: Sablona = {
  kod: 'LT-NUOMA-SUSITARIMAS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Susitarimas nutraukti nuomos sutartį', podnadpis: 'gyvenamosios patalpos nuomos sutarties nutraukimas šalių susitarimu',
  souborPdf: 'susitarimas-nutraukti-nuoma', paticka: PORASTE('LT-NUOMA-SUSITARIMAS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'nuomotojas', vpravo: 'nuomininkas' },
  slovo: { n: 'susitarimas', g: 'susitarimo', a: 'susitarimą', l: 'susitarime' },
  pripominky: (d) => [
    ...(typeof d.beigas === 'string' && d.beigas ? [{ nazev: 'Nuomos sutarties pabaiga', datum: d.beigas }] : []),
    ...(typeof d.atbrivosana === 'string' && d.atbrivosana ? [{ nazev: 'Gyvenamosios patalpos grąžinimas ir perdavimo–priėmimo aktas', datum: d.atbrivosana }] : []),
  ],
  coDal: ['Pasirašykite susitarimą dviem egzemplioriais.', 'Grąžindami gyvenamąją patalpą, surašykite aktą su skaitiklių rodmenimis.'],
  kontrola: [
    'Šalių susitarimu nuomos sutartį galima nutraukti bet kada – be įspėjimo termino.',
    'Susitarimą pasirašo visi nuomotojai ir visi nuomininkai.',
    `Įrašykite konkrečią sutarties pabaigos ir patalpos atlaisvinimo datą ([Civilinis kodeksas](${CK.url})).`,
    'Susitarkite, kada ir kaip grąžinamas užstatas ir kaip apmokamos paskutinio laikotarpio paslaugos.',
  ],
  zdroje: [CK],
  kroky: [
    { id: 'salys', nazev: 'Šalys ir gyvenamoji patalpa', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Nuomotojas – vardas, pavardė', sirka: 34 },
      { id: 'p_adresa', typ: 'text', popis: 'Nuomotojo adresas', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Nuomininkas – vardas, pavardė', napoveda: 'Jei nuomininkų keli, įrašykite visus.', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Nuomininko asmens kodas', sirka: 14, polovina: true },
      { id: 'byt', typ: 'text', popis: 'Gyvenamosios patalpos adresas', sirka: 46 },
      { id: 'liguma_datums', typ: 'datum', popis: 'Nuomos sutarties data', sirka: 14, polovina: true },
    ] },
    { id: 'nutraukimas', nazev: 'Nutraukimas', pole: [
      { id: 'beigas', typ: 'datum', popis: 'Nuomos sutartis baigiasi', napoveda: 'Paskutinė nuomos diena. Iki jos mokamas nuomos mokestis.', sirka: 14, polovina: true },
      { id: 'atbrivosana', typ: 'datum', popis: 'Gyvenamąją patalpą grąžinti iki', sirka: 14, polovina: true },
      { id: 'drosibas_nauda', typ: 'volba', popis: 'Užstatas', moznosti: [ { hodnota: 'atbrivojot', popis: 'grąžinamas patalpos atlaisvinimo dieną' }, { hodnota: 'pec_rekiniem', popis: 'grąžinamas atsiskaičius už paslaugas' }, { hodnota: 'nav', popis: 'užstatas nebuvo sumokėtas' } ] },
      { id: 'konts', typ: 'text', popis: 'Nuomininko IBAN užstatui', placeholder: 'LT12 1000 0111 0100 1000', sirka: 30 },
      { id: 'citas', typ: 'textarea', popis: 'Kiti susitarimai (neprivaloma)', placeholder: 'pvz., nuomininkas prieš grąžindamas perdažo sienas', sirka: 56 },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Šalys', odstavce: ['**Nuomotojas:** {{p_jmeno}}, adresas {{p_adresa}}', '**Nuomininkas:** {{k_jmeno}}, asmens kodas {{k_ik}}'] },
    { nadpis: 'Nuomos sutarties nutraukimas', vysvetleni: 'Kada nuoma baigiasi ir kada grąžinama gyvenamoji patalpa.', odstavce: ['Šalys susitaria, kad {{liguma_datums}} sudaryta gyvenamosios patalpos adresu {{byt}} nuomos sutartis nutraukiama {{beigas}}.', 'Nuomininkas grąžina gyvenamąją patalpą su visais raktais ne vėliau kaip {{atbrivosana}} tokios pat būklės, atsižvelgiant į normalų nusidėvėjimą. Grąžinant surašomas aktas.', 'Nuomos mokestis ir mokesčiai už paslaugas mokami iki sutarties pabaigos dienos. Kitų reikalavimų, susijusių su nutraukimu, šalys neturi.'] },
    { nadpis: 'Užstatas ir kiti susitarimai', odstavce: [{ volba: 'drosibas_nauda', uvodVzor: 'Užstatas (pažymėkite vieną variantą):', moznosti: { atbrivojot: 'Nuomotojas grąžina užstatą gyvenamosios patalpos atlaisvinimo dieną į sąskaitą IBAN {{konts}}, išskaičiavęs pagrįstus reikalavimus pagal nuomos sutartį.', pec_rekiniem: 'Nuomotojas grąžina užstatą atsiskaičius už paskutinio laikotarpio paslaugas į sąskaitą IBAN {{konts}}, išskaičiavęs pagrįstus reikalavimus pagal nuomos sutartį.', nav: 'Nuomininkas užstato nemokėjo.' } }, 'Kiti susitarimai: {{citas}}', 'Susitarimas sudarytas dviem vienodais egzemplioriais ir įsigalioja, kai jį pasirašo abi šalys.'] },
  ],
};
