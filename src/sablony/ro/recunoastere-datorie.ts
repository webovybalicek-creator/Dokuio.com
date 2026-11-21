/** Recunoaștere de datorie – România (Codul civil). Recunoașterea dreptului întrerupe prescripția (art. 2537); termenul general este de 3 ani (art. 2517). */
import type { Sablona } from '../typy';
import { sumaInLitere } from './numere';
import { COD_CIVIL, SUBSOL } from './surse';

export const recunoastereDatorie: Sablona = {
  kod: 'RO-RECUNOASTERE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Recunoaștere de datorie', podnadpis: 'declarația scrisă a debitorului privind existența și cuantumul datoriei',
  souborPdf: 'recunoastere-datorie', paticka: SUBSOL('RO-RECUNOASTERE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'debitor', vpravo: 'am primit (creditor, opțional)' },
  cislovatClanky: false,
  slovo: { n: 'recunoaștere', g: 'recunoașterii', a: 'recunoașterea', l: 'recunoaștere' },
  coDal: ['Originalul îl păstrează creditorul.', 'Pentru sume mari, o recunoaștere autentificată la notar poate deveni titlu executoriu.'],
  kontrola: [
    'Recunoașterea datoriei de către debitor întrerupe prescripția – termenul începe să curgă din nou (art. 2537 Cod civil). Termenul general de prescripție este de 3 ani (art. 2517).',
    'Treceți temeiul datoriei (împrumut, preț neachitat, prejudiciu), suma și termenul de plată.',
    'Simpla somație a creditorului nu întrerupe prescripția decât dacă este urmată de chemarea în judecată în termenul prevăzut de lege.',
  ],
  zdroje: [COD_CIVIL],
  kroky: [{ id: 'date', nazev: 'Debitorul, creditorul și datoria', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Debitor – nume și prenume', placeholder: 'de ex. Mihai Stan', sirka: 34, autocomplete: 'name' },
    { id: 'p_cnp', typ: 'text', popis: 'CNP debitor', sirka: 15, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Domiciliul debitorului', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Creditor – nume și prenume sau denumire', placeholder: 'de ex. Andrei Popescu', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Domiciliul creditorului', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Suma datorată (lei)', sirka: 12, polovina: true },
    { id: 'temei', typ: 'text', popis: 'Temeiul datoriei', placeholder: 'de ex. împrumut conform contractului din 15.03.2026', sirka: 56 },
    { id: 'termen', typ: 'datum', popis: 'Voi plăti cel târziu la', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'IBAN creditor', placeholder: 'RO49 AAAA 1B31 0075 9384 0000', sirka: 30 },
    { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_litere: (d) => sumaInLitere(d.castka) },
  clanky: [{ nadpis: 'Recunoaștere', odstavce: [
    'Subsemnatul/Subsemnata **{{p_jmeno}}**, CNP {{p_cnp}}, domiciliat(ă) în {{p_adresa}} (debitor),',
    'recunosc că la data semnării prezentei datorez creditorului {{k_jmeno}}, {{k_adresa}}, suma de **{{castka}}** (în litere: {{castka_litere}}), cu titlu de: {{temei}}.',
    'Mă oblig să achit datoria cel târziu la data de {{termen}} în contul creditorului IBAN {{iban}}. În caz de întârziere datorez și dobânda legală penalizatoare.',
  ] }],
};
