/** Pretenzija par preces neatbilstību – Latvija (PTAL 27. p.: 2 gadi, iesniedz 2 mēnešu laikā; 13. p.: gada laikā atklāta neatbilstība pastāvēja piegādes brīdī). */
import type { Sablona } from '../typy';
import { summaVardiem } from './skaitli';
import { PTAL, GARANTIJA, KAJENE } from './avoti';

export const pretenzija: Sablona = {
  kod: 'LV-PRETENZIJA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lv', jazyk: 'lv',
  nazev: 'Pretenzija par preces neatbilstību', podnadpis: 'prasījums pārdevējam par līguma noteikumiem neatbilstošu preci',
  souborPdf: 'pretenzija', paticka: KAJENE('LV-PRETENZIJA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'pircējs', vpravo: 'saņēma (pārdevējs, pēc izvēles)' },
  cislovatClanky: false,
  slovo: { n: 'pretenzija', g: 'pretenzijas', a: 'pretenziju', l: 'pretenzijā' },
  pripominky: (d) => (typeof d.atklats === 'string' && d.atklats ? [{ nazev: 'Pretenzijas iesniegšana (2 mēneši pēc atklāšanas)', datum: d.atklats, popis: 'Iesniedziet pretenziju ne vēlāk kā 2 mēnešu laikā no šīs dienas.' }] : []),
  coDal: ['Iesniedziet pretenziju veikalā vai nosūtiet pa e-pastu vai ierakstītā vēstulē; saglabājiet kopiju.', 'Pievienojiet pirkuma apliecinājumu un defekta fotogrāfijas.', 'Ja pārdevējs neatbild vai atsakās, varat vērsties Patērētāju tiesību aizsardzības centrā (PTAC).'],
  kontrola: [
    `Prasījumu par preces neatbilstību var pieteikt 2 gadu laikā no piegādes dienas; pārdevējam to iesniedz 2 mēnešu laikā no dienas, kad neatbilstību atklājāt ([PTAL 27. pants](${PTAL.url})).`,
    'Ja neatbilstība atklājas gada laikā pēc piegādes, pieņem, ka tā pastāvēja jau piegādes brīdī – pretējo jāpierāda pārdevējam (PTAL 13. pants).',
    `Vispirms varat prasīt preces salabošanu vai apmaiņu; ja tas nav iespējams vai netiek izdarīts saprātīgā laikā – cenas samazinājumu vai līguma atcelšanu ([Your Europe](${GARANTIJA.url})).`,
    'Ražotāja komercgarantija ir papildus – tā neaizstāj pārdevēja likumisko atbildību.',
  ],
  zdroje: [PTAL, GARANTIJA],
  kroky: [{ id: 'dati', nazev: 'Neatbilstība', pole: [
    { id: 'k_jmeno', typ: 'text', popis: 'Pārdevējs (veikals)', placeholder: 'piem., veikala nosaukums', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Pārdevēja adrese vai e-pasts', sirka: 46 },
    { id: 'prece', typ: 'text', popis: 'Prece', placeholder: 'piem., veļas mašīna Bosch Serie 4', sirka: 40 },
    { id: 'pirkts', typ: 'datum', popis: 'Pirkuma datums', sirka: 14, polovina: true },
    { id: 'ceks', typ: 'text', popis: 'Čeka vai rēķina numurs', sirka: 18, polovina: true },
    { id: 'cena', typ: 'castka', popis: 'Cena (eiro)', sirka: 12, polovina: true },
    { id: 'defekts', typ: 'textarea', popis: 'Neatbilstības apraksts', placeholder: 'piem., centrifūga neieslēdzas, ekrānā kods E18', sirka: 56 },
    { id: 'atklats', typ: 'datum', popis: 'Neatbilstība atklāta', sirka: 14, polovina: true },
    { id: 'prasijums', typ: 'volba', popis: 'Ko prasāt', moznosti: [ { hodnota: 'labosana', popis: 'salabošanu' }, { hodnota: 'apmaina', popis: 'apmaiņu' }, { hodnota: 'samazinajums', popis: 'cenas samazinājumu' }, { hodnota: 'atcelsana', popis: 'līguma atcelšanu un naudas atmaksu' } ] },
    { id: 'p_jmeno', typ: 'text', popis: 'Jūsu vārds, uzvārds', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Jūsu adrese', sirka: 46 },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true },
    { id: 'datum', typ: 'datum', popis: 'Datums', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { cena_vardiem: (d) => summaVardiem(d.cena) },
  clanky: [{ nadpis: 'Pretenzija', odstavce: [
    '**Adresāts:** {{k_jmeno}}, {{k_adresa}}',
    '{{pirkts}} iegādājos jūsu veikalā preci {{prece}} par cenu {{cena}} (čeks/rēķins Nr. {{ceks}}).',
    '{{atklats}} atklājās šāda neatbilstība līguma noteikumiem: {{defekts}}',
    { volba: 'prasijums', uvodVzor: 'Saskaņā ar Patērētāju tiesību aizsardzības likumu prasu (atzīmējiet vienu variantu):', moznosti: { labosana: 'Saskaņā ar Patērētāju tiesību aizsardzības likumu prasu preci bez maksas salabot.', apmaina: 'Saskaņā ar Patērētāju tiesību aizsardzības likumu prasu preci apmainīt pret jaunu, līguma noteikumiem atbilstošu preci.', samazinajums: 'Saskaņā ar Patērētāju tiesību aizsardzības likumu prasu samērīgi samazināt cenu.', atcelsana: 'Saskaņā ar Patērētāju tiesību aizsardzības likumu prasu atcelt līgumu un atmaksāt visu samaksāto summu.' } },
    'Lūdzu saprātīgā termiņā rakstveidā paziņot, kā neatbilstība tiks novērsta.',
    '**Pircējs:** {{p_jmeno}}, {{p_adresa}}',
  ] }],
};
