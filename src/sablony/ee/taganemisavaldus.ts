/** Lepingust taganemise avaldus – Eesti. Sidevahendi abil või väljaspool äriruume sõlmitud lepingust võib tarbija taganeda 14 päeva jooksul. */
import type { Sablona } from '../typy';
import { VOS, TAGANEMINE, JALUS } from './allikad';

export const taganemisavaldus: Sablona = {
  kod: 'EE-TAGANEMINE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Lepingust taganemise avaldus', podnadpis: 'taganemine sidevahendi abil sõlmitud lepingust (e-pood, telefon)',
  souborPdf: 'taganemisavaldus', paticka: JALUS('EE-TAGANEMINE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'tarbija', vpravo: 'kätte saanud (kaupleja, soovi korral)' },
  cislovatClanky: false,
  slovo: { n: 'avaldus', g: 'avalduse', a: 'avaldust', l: 'avalduses' },
  coDal: ['Saatke avaldus e-posti teel või tähtkirjaga enne 14 päeva möödumist ja hoidke alles saatmise tõend.', 'Saatke kaup tagasi 14 päeva jooksul alates taganemisest.'],
  kontrola: [
    `Sidevahendi abil (internet, telefon) või väljaspool äriruume sõlmitud lepingust võib tarbija taganeda 14 päeva jooksul põhjust esitamata ([Your Europe](${TAGANEMINE.url})).`,
    'Kauba puhul algab tähtaeg päevast, mil kauba kätte saite.',
    'Piisab, kui saadate avalduse enne tähtaja möödumist.',
    'Kaupleja tagastab kõik maksed, ka tavapärase kohaletoimetamise kulu, 14 päeva jooksul taganemisest teada saamisest.',
    'Kauba tagastamise otsese kulu kannab tavaliselt tarbija, kui kaupleja teda sellest teavitas.',
  ],
  zdroje: [TAGANEMINE, VOS],
  kroky: [{ id: 'andmed', nazev: 'Taganemine', pole: [
    { id: 'k_jmeno', typ: 'text', popis: 'Kaupleja', placeholder: 'nt e-poe nimi', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Kaupleja aadress või e-post', sirka: 46 },
    { id: 'kaup', typ: 'textarea', popis: 'Kaup või teenus', placeholder: 'nt talvejope, suurus M', sirka: 56 },
    { id: 'tellimus', typ: 'text', popis: 'Tellimuse number', sirka: 18, polovina: true },
    { id: 'tellitud', typ: 'datum', popis: 'Tellimise kuupäev', sirka: 14, polovina: true },
    { id: 'kattesaadud', typ: 'datum', popis: 'Kättesaamise kuupäev', sirka: 14, polovina: true },
    { id: 'p_jmeno', typ: 'text', popis: 'Teie ees- ja perekonnanimi', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Teie aadress', sirka: 46 },
    { id: 'iban', typ: 'text', popis: 'IBAN raha tagastamiseks (soovi korral)', placeholder: 'EE38 …', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true },
    { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Taganemisavaldus', odstavce: [
    '**Kellele:** {{k_jmeno}}, {{k_adresa}}',
    'Teatan, et taganen lepingust, mille sõlmisin järgmise kauba ostmiseks või teenuse osutamiseks: {{kaup}}.',
    'Tellimuse number: {{tellimus}}. Tellitud {{tellitud}}, kätte saadud {{kattesaadud}}.',
    '**Tarbija:** {{p_jmeno}}, {{p_adresa}}',
    'Palun tagastage makstud summa kontole IBAN {{iban}}.',
  ] }],
};
