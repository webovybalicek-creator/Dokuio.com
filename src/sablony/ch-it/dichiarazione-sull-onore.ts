/** Dichiarazione sull’onore – dichiarazione scritta di una persona privata. Indicazioni false possono avere conseguenze civili e penali. */
import type { Sablona } from '../typy';
import { CO, piede } from './fonti';

export const dichiarazione: Sablona = {
  kod: 'CHIT-DICHIARAZIONE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Dichiarazione sull’onore', podnadpis: 'dichiarazione scritta di una persona privata',
  souborPdf: 'dichiarazione-sull-onore', paticka: piede('CHIT-DICHIARAZIONE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Firma', vpravo: 'Autenticazione (solo se richiesta)' },
  slovo: { n: 'dichiarazione', g: 'della dichiarazione', a: 'la dichiarazione', l: 'nella dichiarazione' },
  cislovatClanky: false, cislovatOdstavce: false,
  coDal: [
    'Stampate la dichiarazione e firmatela a mano.',
    'Se l’ente richiede una firma autenticata, firmate solo davanti all’autorità o al notaio.',
    'Conservate una copia per i vostri documenti.',
  ],
  kontrola: [
    'Dichiarate solo ciò che è vero e che sapete con certezza. Indicazioni false a un’autorità, una banca o un locatore possono avere conseguenze civili e penali.',
    'Se un’autorità o un tribunale richiede una forma precisa, usate il suo modulo.',
    'Chiedete prima se l’ente ha un proprio modulo – usate allora quello.',
    'Formulate in modo concreto: chi, cosa, da quando (p. es. «di abitare dal 1.1.2025 nell’abitazione …»).',
    'Firmate a mano e conservate una copia. Se l’ente richiede una firma autenticata, firmate solo presso l’ufficio competente (notaio, secondo il Cantone anche il Comune).',
  ],
  zdroje: [CO],
  kroky: [
    { id: 'person', nazev: 'Chi dichiara', pole: [
      { id: 'name', typ: 'text', popis: 'Nome e cognome', placeholder: 'p. es. Laura Rezzonico', sirka: 34, autocomplete: 'name' },
      { id: 'geburt', typ: 'datum', popis: 'Data di nascita', sirka: 14, polovina: true },
      { id: 'adresse', typ: 'text', popis: 'Indirizzo', placeholder: 'p. es. Viale Stazione 5, 6500 Bellinzona', sirka: 46 },
    ] },
    { id: 'inhalt', nazev: 'Contenuto', pole: [
      { id: 'fuer', typ: 'text', popis: 'Destinatario (facoltativo)', placeholder: 'p. es. scuola, banca, locatore', sirka: 46 },
      { id: 'zweck', typ: 'text', popis: 'Scopo (facoltativo)', placeholder: 'p. es. richiesta di congedo scolastico', sirka: 46 },
      { id: 'text', typ: 'textarea', popis: 'Testo della dichiarazione', napoveda: 'Iniziate direttamente con «di …». Aggiungiamo noi l’introduzione.', placeholder: 'di abitare dal 1.1.2025 nell’abitazione di Viale Stazione 5 a Bellinzona.', sirka: 70 },
      { id: 'misto', typ: 'text', popis: 'Luogo', placeholder: 'p. es. Bellinzona', sirka: 18, polovina: true, vychozi: { obecZ: 'adresse' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Persona che dichiara', odstavce: ['{{name}}, nato/a il {{geburt}}, domiciliato/a in {{adresse}}'] },
    { nadpis: 'Dichiarazione', odstavce: [
      'Destinatario: {{fuer}}. Scopo: {{zweck}}.',
      'Il/La sottoscritto/a dichiara sull’onore {{text}}',
      'Dichiaro che le mie indicazioni sono esatte e complete.',
    ] },
  ],
};
