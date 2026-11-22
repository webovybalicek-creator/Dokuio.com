/** Pretenzija dėl netinkamos kokybės prekės – Lietuva. Teisinė garantija 2 metai; trūkumas, paaiškėjęs per metus, preziumuojamas buvęs pristatymo metu (Your Europe). */
import type { Sablona } from '../typy';
import { sumaZodziais } from './skaiciai';
import { CK, GARANTIJA, PORASTE } from './saltiniai';

export const pretenzija: Sablona = {
  kod: 'LT-PRETENZIJA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Pretenzija dėl netinkamos kokybės prekės', podnadpis: 'reikalavimas pardavėjui dėl sutarties neatitinkančios prekės',
  souborPdf: 'pretenzija', paticka: PORASTE('LT-PRETENZIJA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'pirkėjas', vpravo: 'gavo (pardavėjas, neprivaloma)' },
  cislovatClanky: false,
  slovo: { n: 'pretenzija', g: 'pretenzijos', a: 'pretenziją', l: 'pretenzijoje' },
  coDal: ['Pateikite pretenziją parduotuvėje arba siųskite el. paštu ar registruotu laišku; pasilikite kopiją.', 'Pridėkite pirkimo įrodymą ir trūkumo nuotraukas.', 'Jei pardavėjas neatsako arba atsisako, galite kreiptis į Valstybinę vartotojų teisių apsaugos tarnybą (VVTAT).'],
  kontrola: [
    `Pardavėjas atsako už prekės trūkumus, kurie buvo pristatymo metu ir paaiškėjo per 2 metus ([Your Europe](${GARANTIJA.url})). Praneškite apie trūkumą kuo greičiau po to, kai jį pastebėjote.`,
    'Jei trūkumas paaiškėja per metus nuo pristatymo, laikoma, kad jis buvo jau pristatymo metu – priešingai turi įrodyti pardavėjas.',
    `Pirmiausia galite reikalauti prekę nemokamai pataisyti ar pakeisti; jei tai neįmanoma ar nepadaroma per protingą laiką – sumažinti kainą arba nutraukti sutartį ([Your Europe](${GARANTIJA.url})).`,
    'Gamintojo komercinė garantija yra papildoma – ji nepakeičia teisinės pardavėjo atsakomybės.',
  ],
  zdroje: [GARANTIJA, CK],
  kroky: [{ id: 'duomenys', nazev: 'Trūkumas', pole: [
    { id: 'k_jmeno', typ: 'text', popis: 'Pardavėjas (parduotuvė)', placeholder: 'pvz., parduotuvės pavadinimas', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Pardavėjo adresas arba el. paštas', sirka: 46 },
    { id: 'prece', typ: 'text', popis: 'Prekė', placeholder: 'pvz., skalbimo mašina Bosch Serie 4', sirka: 40 },
    { id: 'pirkts', typ: 'datum', popis: 'Pirkimo data', sirka: 14, polovina: true },
    { id: 'ceks', typ: 'text', popis: 'Čekio ar sąskaitos numeris', sirka: 18, polovina: true },
    { id: 'cena', typ: 'castka', popis: 'Kaina (eurais)', sirka: 12, polovina: true },
    { id: 'defekts', typ: 'textarea', popis: 'Trūkumo aprašymas', placeholder: 'pvz., neįsijungia gręžimas, ekrane kodas E18', sirka: 56 },
    { id: 'atklats', typ: 'datum', popis: 'Trūkumas pastebėtas', sirka: 14, polovina: true },
    { id: 'prasijums', typ: 'volba', popis: 'Ko reikalaujate', moznosti: [ { hodnota: 'labosana', popis: 'pataisyti' }, { hodnota: 'apmaina', popis: 'pakeisti' }, { hodnota: 'samazinajums', popis: 'sumažinti kainą' }, { hodnota: 'atcelsana', popis: 'nutraukti sutartį ir grąžinti pinigus' } ] },
    { id: 'p_jmeno', typ: 'text', popis: 'Jūsų vardas, pavardė', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Jūsų adresas', sirka: 46 },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { cena_vardiem: (d) => sumaZodziais(d.cena) },
  clanky: [{ nadpis: 'Pretenzija', odstavce: [
    '**Adresatas:** {{k_jmeno}}, {{k_adresa}}',
    '{{pirkts}} jūsų parduotuvėje įsigijau prekę {{prece}} už {{cena}} (čekis / sąskaita Nr. {{ceks}}).',
    '{{atklats}} paaiškėjo šis prekės neatitikimas sutarties sąlygoms: {{defekts}}',
    { volba: 'prasijums', uvodVzor: 'Vadovaudamasis Lietuvos Respublikos civiliniu kodeksu reikalauju (pažymėkite vieną variantą):', moznosti: { labosana: 'Vadovaudamasis Lietuvos Respublikos civiliniu kodeksu reikalauju prekę neatlygintinai pataisyti.', apmaina: 'Vadovaudamasis Lietuvos Respublikos civiliniu kodeksu reikalauju prekę pakeisti nauja, sutarties sąlygas atitinkančia preke.', samazinajums: 'Vadovaudamasis Lietuvos Respublikos civiliniu kodeksu reikalauju proporcingai sumažinti kainą.', atcelsana: 'Vadovaudamasis Lietuvos Respublikos civiliniu kodeksu reikalauju nutraukti sutartį ir grąžinti visą sumokėtą sumą.' } },
    'Prašau per protingą terminą raštu pranešti, kaip trūkumas bus pašalintas.',
    '**Pirkėjas:** {{p_jmeno}}, {{p_adresa}}',
  ] }],
};
