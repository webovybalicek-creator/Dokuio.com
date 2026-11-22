/** Pinigų gavimo pakvitavimas – Lietuva. Mokėjimo grynaisiais patvirtinimas tarp fizinių asmenų. */
import type { Sablona } from '../typy';
import { sumaZodziais } from './skaiciai';
import { CK, GRYNIEJI, PAD_GRYNIEJI, PORASTE } from './saltiniai';

export const pakvitavimas: Sablona = {
  kod: 'LT-PAKVITAVIMAS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Pinigų gavimo pakvitavimas', podnadpis: 'mokėjimo grynaisiais pinigais patvirtinimas tarp fizinių asmenų',
  souborPdf: 'pinigu-gavimo-pakvitavimas', paticka: PORASTE('LT-PAKVITAVIMAS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'pinigų gavėjas', vpravo: 'mokėtojas (neprivaloma)' },
  cislovatClanky: false,
  slovo: { n: 'pakvitavimas', g: 'pakvitavimo', a: 'pakvitavimą', l: 'pakvitavime' },
  coDal: ['Pakvitavimą pasilieka tas, kuris mokėjo – juo jis įrodo mokėjimą.', 'Jei mokėjimas susijęs su transporto priemone ar daiktu, pakvitavime nurodykite sutartį.'],
  kontrola: [
    'Prievolę vykdantis asmuo turi teisę reikalauti, kad gavėjas raštu patvirtintų įvykdymą (pakvitavimas).',
    'Įrašykite, už ką mokate (kaina, paskola, užstatas, avansas), kad būtų aišku, kas sumokėta.',
    `Pagal vieną sandorį grynaisiais pinigais galima atsiskaityti ne daugiau kaip 5 000 € ([įstatymas](${GRYNIEJI.url})).`,
    PAD_GRYNIEJI,
  ],
  zdroje: [CK, GRYNIEJI],
  kroky: [{ id: 'mokejimas', nazev: 'Mokėjimas', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Pinigų gavėjas – vardas, pavardė', placeholder: 'pvz., Rūta Kazlauskienė', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Gavėjo adresas', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Mokėtojas – vardas, pavardė', placeholder: 'pvz., Tomas Petrauskas', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Mokėtojo adresas', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Suma (eurais)', sirka: 12, polovina: true },
    { id: 'pamats', typ: 'text', popis: 'Mokėjimo pagrindas', placeholder: 'pvz., transporto priemonės kaina pagal 2026-11-22 sutartį', sirka: 56 },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_vardiem: (d) => sumaZodziais(d.castka) },
  clanky: [{ nadpis: 'Pakvitavimas', odstavce: [
    'Aš, **{{p_jmeno}}**, adresas {{p_adresa}}, patvirtinu, kad iš {{k_jmeno}}, adresas {{k_adresa}}, gavau grynaisiais pinigais **{{castka}}** (žodžiais: {{castka_vardiem}}).',
    'Mokėjimo pagrindas: {{pamats}}.',
  ] }],
};
