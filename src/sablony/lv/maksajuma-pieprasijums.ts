/** Maksājuma pieprasījums (atgādinājums parādniekam) – Latvija. Atgādinājums pārtrauc noilgumu (Civillikuma 1905. p.). */
import type { Sablona } from '../typy';
import { summaVardiem } from './skaitli';
import { CL, KAJENE } from './avoti';

export const maksajumaPieprasijums: Sablona = {
  kod: 'LV-PIEPRASIJUMS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Maksājuma pieprasījums', podnadpis: 'atgādinājums parādniekam samaksāt parādu līdz termiņam',
  souborPdf: 'maksajuma-pieprasijums', paticka: KAJENE('LV-PIEPRASIJUMS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'kreditors', vpravo: '' },
  cislovatClanky: false,
  slovo: { n: 'pieprasījums', g: 'pieprasījuma', a: 'pieprasījumu', l: 'pieprasījumā' },
  coDal: ['Nosūtiet pieprasījumu ierakstītā vēstulē vai pa e-pastu ar eParakstu un saglabājiet nosūtīšanas pierādījumu.', 'Ja parādnieks nemaksā, varat vērsties tiesā; naudas prasījumiem pastāv arī vienkāršāka saistību izpildīšana brīdināšanas kārtībā.'],
  kontrola: [
    'Ierakstiet precīzi, no kā prasījums izriet (līgums, rēķins, aizdevums) un cik liels tas ir.',
    'Dodiet saprātīgu samaksas termiņu, parasti 7–14 dienas.',
    `Par samaksas nokavējumu var prasīt likumiskos nokavējuma procentus – 6 % gadā, ja nav nolīgts citādi ([Civillikuma 1765. pants](${CL.url})).`,
    `Atgādinājums parādniekam pārtrauc noilgumu – saglabājiet pierādījumu, ka tas nonāca pie parādnieka ([Civillikuma 1905. pants](${CL.url})).`,
  ],
  zdroje: [CL],
  kroky: [{ id: 'dati', nazev: 'Prasījums', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Kreditors – vārds, uzvārds', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Kreditora adrese', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Parādnieks – vārds, uzvārds vai nosaukums', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Parādnieka adrese', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Parāda summa (eiro)', sirka: 12, polovina: true },
    { id: 'nokavets', typ: 'datum', popis: 'Samaksas termiņš beidzās', sirka: 14, polovina: true },
    { id: 'pamats', typ: 'text', popis: 'Parāda pamats', placeholder: 'piem., samaksa par remontdarbiem saskaņā ar 01.09.2026. uzņēmuma līgumu', sirka: 56 },
    { id: 'jauns_termins', typ: 'datum', popis: 'Samaksāt līdz', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'Kreditora IBAN', placeholder: 'LV80 BANK 0000 4351 9500 1', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_vardiem: (d) => summaVardiem(d.castka) },
  clanky: [{ nadpis: 'Maksājuma pieprasījums', odstavce: [
    '**Sūtītājs:** {{p_jmeno}}, {{p_adresa}}',
    '**Adresāts:** {{k_jmeno}}, {{k_adresa}}',
    'Jums ir parāds man **{{castka}}** (vārdiem: {{castka_vardiem}}), kas izriet no: {{pamats}}. Samaksas termiņš beidzās {{nokavets}}, un parāds nav samaksāts.',
    'Lūdzu samaksāt summu ne vēlāk kā {{jauns_termins}} uz manu kontu IBAN {{iban}}.',
    'Pretējā gadījumā vērsīšos tiesā par parāda piedziņu un papildus prasīšu nokavējuma procentus un tiesāšanās izdevumu atlīdzību.',
  ] }],
};
