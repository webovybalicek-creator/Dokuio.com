/** Deklaracija – Lietuva. Bendras rašytinis faktų patvirtinimas. */
import type { Sablona } from '../typy';
import { CK, PORASTE } from './saltiniai';

export const deklaracija: Sablona = {
  kod: 'LT-DEKLARACIJA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Deklaracija', podnadpis: 'rašytinis faktų patvirtinimas',
  souborPdf: 'deklaracija', paticka: PORASTE('LT-DEKLARACIJA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'deklaruojantis asmuo', vpravo: '' },
  cislovatClanky: false,
  slovo: { n: 'deklaracija', g: 'deklaracijos', a: 'deklaraciją', l: 'deklaracijoje' },
  coDal: ['Pasirašykite deklaraciją ranka arba kvalifikuotu elektroniniu parašu.', 'Pateikite deklaraciją ją prašiusiai įstaigai ar asmeniui ir pasilikite kopiją.'],
  kontrola: [
    'Rašykite tik tikrus faktus – sąmoningai pateikti melagingi duomenys gali užtraukti atsakomybę.',
    'Patikrinkite, ar įstaiga nereikalauja konkrečios formos ar notaro patvirtinto parašo; kai kuriems veiksmams paprastos deklaracijos nepakanka.',
    'Kvalifikuotu elektroniniu parašu pasirašytas dokumentas prilygsta pasirašytam ranka.',
  ],
  zdroje: [CK],
  kroky: [{ id: 'duomenys', nazev: 'Deklaruojantis asmuo ir turinys', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Vardas, pavardė', sirka: 34, autocomplete: 'name' },
    { id: 'p_ik', typ: 'text', popis: 'Asmens kodas', sirka: 14, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Adresas', sirka: 46 },
    { id: 'kam', typ: 'text', popis: 'Kam deklaracija teikiama (neprivaloma)', placeholder: 'pvz., Vilniaus miesto savivaldybės administracijai', sirka: 40 },
    { id: 'saturs', typ: 'textarea', popis: 'Ką patvirtinate', placeholder: 'pvz., kad nuo 2026-03-01 gyvenu adresu … ir kartu su manimi gyvena …', sirka: 64 },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Deklaracija', odstavce: [
    'Aš, **{{p_jmeno}}**, asmens kodas {{p_ik}}, gyvenamoji vieta {{p_adresa}}, patvirtinu:',
    '{{saturs}}',
    'Deklaracija teikiama: {{kam}}.',
    'Patvirtinu, kad pateikti duomenys yra teisingi ir išsamūs, ir esu informuotas (-a), kad už melagingų duomenų pateikimą gali kilti atsakomybė.',
  ] }],
};
