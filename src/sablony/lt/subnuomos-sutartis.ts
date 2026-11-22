/** Gyvenamosios patalpos subnuomos sutartis – Lietuva. Subnuoma tik su rašytiniu nuomotojo ir kartu gyvenančių šeimos narių sutikimu (Civilinio kodekso 6.595 str.). */
import type { Sablona } from '../typy';
import { sumaZodziais } from './skaiciai';
import { CK, PAD_ASMUO, PORASTE } from './saltiniai';

export const subnuoma: Sablona = {
  kod: 'LT-SUBNUOMA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Subnuomos sutartis', podnadpis: 'gyvenamosios patalpos ar kambario subnuoma su nuomotojo sutikimu',
  souborPdf: 'subnuomos-sutartis', paticka: PORASTE('LT-SUBNUOMA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'nuomininkas (subnuomotojas)', vpravo: 'subnuomininkas' },
  slovo: { n: 'sutartis', g: 'sutarties', a: 'sutartį', l: 'sutartyje' },
  coDal: ['Pasirašykite sutartį dviem egzemplioriais.', 'Pridėkite nuomotojo rašytinio sutikimo kopiją.'],
  kontrola: [
    `Gyvenamosios patalpos nuomininkas gali ją subnuomoti tik gavęs rašytinį nuomotojo ir kartu su juo gyvenančių šeimos narių sutikimą ([Civilinio kodekso 6.595 str.](${CK.url})). Pavyzdys daro prielaidą, kad sutikimas gautas.`,
    'Patikrinkite savo nuomos sutartį: joje gali būti subnuomos sąlygos.',
    'Subnuoma negali trukti ilgiau nei jūsų nuomos sutartis. Nuomotojui už subnuomininko veiksmus atsakote jūs.',
    PAD_ASMUO,
  ],
  zdroje: [CK],
  kroky: [
    { id: 'salys', nazev: 'Nuomininkas ir subnuomininkas', popis: 'Nuomininkas perduoda subnuomininkui kambarį ar visą gyvenamąją patalpą.', pole: [
      { id: 'n_jmeno', typ: 'text', popis: 'Nuomininkas – vardas, pavardė', sirka: 34, autocomplete: 'name' },
      { id: 'n_ik', typ: 'text', popis: 'Nuomininko asmens kodas', sirka: 14, polovina: true },
      { id: 'n_adresa', typ: 'text', popis: 'Nuomininko adresas', sirka: 46 },
      { id: 'p_jmeno', typ: 'text', popis: 'Subnuomininkas – vardas, pavardė', sirka: 34 },
      { id: 'p_ik', typ: 'text', popis: 'Subnuomininko asmens kodas', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Subnuomininko dabartinis adresas', sirka: 46 },
    ] },
    { id: 'patalpa', nazev: 'Gyvenamoji patalpa ir sutikimas', pole: [
      { id: 'byt', typ: 'text', popis: 'Gyvenamosios patalpos adresas', sirka: 46 },
      { id: 'apjoms', typ: 'volba', popis: 'Apimtis', moznosti: [ { hodnota: 'dala', popis: 'gyvenamosios patalpos dalis (kambarys)' }, { hodnota: 'visa', popis: 'visa gyvenamoji patalpa' } ] },
      { id: 'dalas_apraksts', typ: 'text', popis: 'Kuri dalis', placeholder: 'pvz., 14 m² kambarys, virtuvė ir vonios kambarys bendrai', sirka: 56, zobrazitKdyz: { pole: 'apjoms', je: 'dala' } },
      { id: 'iziretajs', typ: 'text', popis: 'Nuomotojas (savininkas)', napoveda: 'Kas davė sutikimą subnuomai.', sirka: 34 },
      { id: 'piekrisana', typ: 'datum', popis: 'Sutikimo data', napoveda: 'Pridėkite sutikimą prie sutarties.', sirka: 14, polovina: true },
    ] },
    { id: 'salygos', nazev: 'Terminas ir mokėjimai', pole: [
      { id: 'od', typ: 'datum', popis: 'Subnuoma nuo', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'Subnuoma iki', sirka: 14, polovina: true },
      { id: 'maksa', typ: 'castka', popis: 'Mėnesio subnuomos mokestis (eurais)', napoveda: 'Kartu su paslaugomis, jei nesusitariate kitaip.', sirka: 12, polovina: true },
      { id: 'diena', typ: 'cislo', popis: 'Mokėti iki kiekvieno mėnesio … dienos', placeholder: 'pvz., 5', sirka: 6, polovina: true },
      { id: 'drosibas_nauda', typ: 'castka', popis: 'Užstatas (eurais, neprivaloma)', sirka: 12, polovina: true },
      { id: 'konts', typ: 'text', popis: 'Nuomininko IBAN', placeholder: 'LT12 1000 0111 0100 1000', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { maksa_vardiem: (d) => sumaZodziais(d.maksa) },
  clanky: [
    { nadpis: 'Šalys', odstavce: ['**Nuomininkas (subnuomotojas):** {{n_jmeno}}, asmens kodas {{n_ik}}, adresas {{n_adresa}}', '**Subnuomininkas:** {{p_jmeno}}, asmens kodas {{p_ik}}, adresas {{p_adresa}}'] },
    { nadpis: 'Sutarties dalykas', vysvetleni: 'Kas perduodama subnuomai ir kieno sutikimu.', odstavce: [{ volba: 'apjoms', uvodVzor: 'Apimtis (pažymėkite vieną variantą):', moznosti: { dala: 'Nuomininkas perduoda subnuomininkui subnuomai gyvenamosios patalpos adresu {{byt}} dalį: {{dalas_apraksts}}.', visa: 'Nuomininkas perduoda subnuomininkui subnuomai visą gyvenamąją patalpą adresu {{byt}}.' } }, 'Nuomotojas {{iziretajs}} {{piekrisana}} davė rašytinį sutikimą subnuomai; sutikimas pridedamas prie sutarties.', 'Subnuoma baigiasi ne vėliau, nei baigiasi nuomininko nuomos sutartis.'] },
    { nadpis: 'Terminas', odstavce: ['Subnuoma prasideda {{od}} ir baigiasi {{do}}.', 'Sutarčiai pasibaigus, subnuomininkas grąžina gyvenamąją patalpą tokios pat būklės, atsižvelgiant į normalų nusidėvėjimą.'] },
    { nadpis: 'Mokėjimai', odstavce: ['Subnuomininkas moka mėnesio subnuomos mokestį **{{maksa}}** (žodžiais: {{maksa_vardiem}}) kartu su paslaugomis iki kiekvieno mėnesio {{diena}} dienos į sąskaitą IBAN {{konts}}.', 'Subnuomininkas sumokėjo {{drosibas_nauda}} užstatą, kuris grąžinamas gyvenamosios patalpos grąžinimo dieną, išskaičiavus pagrįstus reikalavimus.'] },
    { nadpis: 'Baigiamosios nuostatos', odstavce: ['Subnuomininkas laikosi namo vidaus tvarkos taisyklių ir neperduoda gyvenamosios patalpos tretiesiems asmenims.', 'Pakeitimai daromi raštu. Sutartis sudaryta dviem vienodais egzemplioriais.'] },
  ],
};
