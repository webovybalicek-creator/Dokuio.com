/** Rangos sutartis – Lietuva (Civilinio kodekso 6.644 ir kt. str.). Darbų užsakymas meistrui ar statybos įmonei. */
import type { Sablona } from '../typy';
import { sumaZodziais } from './skaiciai';
import { CK, PAD_ASMUO, PORASTE } from './saltiniai';

export const rangosSutartis: Sablona = {
  kod: 'LT-RANGA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Rangos sutartis', podnadpis: 'darbų užsakymas meistrui ar statybos įmonei (Civilinio kodekso 6.644 ir kiti straipsniai)',
  souborPdf: 'rangos-sutartis', paticka: PORASTE('LT-RANGA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'užsakovas', vpravo: 'rangovas' },
  slovo: { n: 'sutartis', g: 'sutarties', a: 'sutartį', l: 'sutartyje' },
  coDal: ['Pasirašykite sutartį dviem egzemplioriais.', 'Priimdami darbus, patikrinkite juos ir užrašykite trūkumus priėmimo akte.', 'Už kiekvieną mokėjimą paprašykite sąskaitos ar kvito.'],
  kontrola: [
    'Tiksliai aprašykite darbus (darbai, medžiagos, apimtys) – ko neužrašėte, tą lengva ginčyti.',
    'Nustatykite atlikimo terminą ir tai, kas bus vėlavimo atveju.',
    'Venkite didelio avanso; atlyginimą mokėkite priėmę darbus.',
    'Priimdami darbus, patikrinkite juos; jei yra trūkumų, galite reikalauti juos pašalinti arba sumažinti kainą.',
    'Patikrinkite, ar rangovas registruotas kaip įmonė ar dirba pagal individualią veiklą, o statybos darbams – ar nereikia statybą leidžiančio dokumento.',
    PAD_ASMUO,
  ],
  zdroje: [CK],
  kroky: [
    { id: 'salys', nazev: 'Užsakovas ir rangovas', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Užsakovas – vardas, pavardė', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Užsakovo adresas', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Rangovas – vardas, pavardė arba pavadinimas', sirka: 34 },
      { id: 'k_kods', typ: 'text', popis: 'Rangovo asmens arba įmonės kodas', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Rangovo adresas', sirka: 46 },
    ] },
    { id: 'darbai', nazev: 'Darbai', pole: [
      { id: 'darbs', typ: 'textarea', popis: 'Darbų aprašymas', placeholder: 'pvz., vonios kambario remontas: senų plytelių išardymas, 12 m² naujų plytelių klijavimas, dušo ir praustuvo montavimas', sirka: 64 },
      { id: 'vieta', typ: 'text', popis: 'Darbų atlikimo vieta', sirka: 46 },
      { id: 'materiali', typ: 'volba', popis: 'Medžiagos', moznosti: [ { hodnota: 'uznemejs', popis: 'parūpina rangovas (į kainą įskaičiuota)' }, { hodnota: 'pasutitajs', popis: 'parūpina užsakovas' } ] },
      { id: 'sakums', typ: 'datum', popis: 'Darbų pradžia', sirka: 14, polovina: true },
      { id: 'pabeigt', typ: 'datum', popis: 'Baigti iki', sirka: 14, polovina: true },
    ] },
    { id: 'kaina', nazev: 'Kaina', pole: [
      { id: 'cena', typ: 'castka', popis: 'Bendra kaina (eurais)', napoveda: 'Įrašykite, ar PVM įskaičiuotas.', sirka: 12, polovina: true },
      { id: 'avanss', typ: 'castka', popis: 'Avansas (eurais, neprivaloma)', sirka: 12, polovina: true },
      { id: 'iban', typ: 'text', popis: 'Rangovo IBAN', placeholder: 'LT12 1000 0111 0100 1000', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_vardiem: (d) => sumaZodziais(d.cena) },
  clanky: [
    { nadpis: 'Šalys', odstavce: ['**Užsakovas:** {{p_jmeno}}, adresas {{p_adresa}}', '**Rangovas:** {{k_jmeno}}, asmens arba įmonės kodas {{k_kods}}, {{k_adresa}}'] },
    { nadpis: 'Sutarties dalykas', vysvetleni: 'Kas tiksliai ir kur daroma.', odstavce: ['Rangovas įsipareigoja atlikti šiuos darbus: {{darbs}}, adresu {{vieta}}, ir perduoti jų rezultatą užsakovui, o užsakovas įsipareigoja darbų rezultatą priimti ir už jį sumokėti.', { volba: 'materiali', uvodVzor: 'Medžiagos (pažymėkite vieną variantą):', moznosti: { uznemejs: 'Medžiagas parūpina rangovas; jų kaina įskaičiuota į darbų kainą.', pasutitajs: 'Medžiagas laiku ir tinkamos kokybės parūpina užsakovas.' } }, 'Rangovas atlieka darbus rūpestingai, laikydamasis geros praktikos ir galiojančių reikalavimų.'] },
    { nadpis: 'Terminai', odstavce: ['Darbai pradedami {{sakums}} ir baigiami ne vėliau kaip {{pabeigt}}.', 'Jei rangovas vėluoja, užsakovas gali nustatyti protingą papildomą terminą, o jam praėjus be rezultato – nutraukti sutartį.'] },
    { nadpis: 'Kaina', odstavce: ['Bendra darbų kaina yra **{{cena}}** (žodžiais: {{cena_vardiem}}).', 'Užsakovas sumoka {{avanss}} avansą, o likusią sumą – priėmęs darbus be esminių trūkumų – į sąskaitą IBAN {{iban}}. Už kiekvieną mokėjimą rangovas išrašo sąskaitą.', 'Papildomi darbai atliekami ir apmokami tik pagal rašytinį susitarimą.'] },
    { nadpis: 'Priėmimas ir trūkumai', odstavce: ['Perduodant darbus, šalys juos kartu patikrina ir užrašo galimus trūkumus.', 'Rangovas neatlygintinai pašalina trūkumus per protingą terminą. Kitais klausimais taikomos Lietuvos Respublikos civilinio kodekso nuostatos dėl rangos.'] },
    { nadpis: 'Baigiamosios nuostatos', odstavce: ['Pakeitimai daromi raštu. Sutartis sudaryta dviem vienodais egzemplioriais.'] },
  ],
};
