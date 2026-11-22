/**
 * Disdetta del contratto di locazione da parte del conduttore – Svizzera italiana. Forma scritta (art. 266l CO); preavviso di
 * almeno tre mesi per un termine pattuito o usuale (art. 266c CO); abitazione familiare: firma di entrambi i coniugi
 * (art. 266m CO); nuovo conduttore (art. 264 CO).
 */
import type { Sablona } from '../typy';
import { isoDatum, naDatum, pridejDny } from '../terminy';
import { CO_LOCAZIONE, CO_266C, CH_LOCAZIONE, piede } from './fonti';

export const disdettaLocazione: Sablona = {
  kod: 'CHIT-DISDETTA-LOCAZIONE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Disdetta del contratto di locazione', podnadpis: 'disdetta data dal conduttore secondo l’art. 266c CO',
  souborPdf: 'disdetta-contratto-di-locazione', paticka: piede('CHIT-DISDETTA-LOCAZIONE'),
  mistoPodpisu: 'ort', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Il conduttore / la conduttrice', vpravo: 'ricevuto dal locatore (data, firma)' },
  slovo: { n: 'lettera di disdetta', g: 'della lettera di disdetta', a: 'la lettera di disdetta', l: 'nella lettera di disdetta' },
  cislovatClanky: false, cislovatOdstavce: false,
  pripominky: (d) => {
    const t = naDatum(d.termin);
    return t ? [{ nazev: 'Fine della locazione', datum: isoDatum(t) }, { nazev: 'Fissare la data della riconsegna dell’abitazione', datum: isoDatum(pridejDny(t, -14)) }] : [];
  },
  coDal: [
    'Firmate a mano e spedite la lettera per raccomandata – conta la ricezione da parte del locatore prima dell’inizio del termine.',
    'Per un’abitazione familiare devono firmare entrambi i coniugi o partner registrati.',
    'Concordate una data di riconsegna, pulite l’abitazione e redigete un verbale di riconsegna.',
  ],
  kontrola: [
    'La disdetta deve essere data per iscritto, con firma autografa (art. 266l CO).',
    'Termine di almeno tre mesi per un termine previsto dal contratto o usuale nel luogo (art. 266c CO). Controllate il vostro contratto di locazione.',
    'Abitazione familiare: è necessaria la firma di entrambi i coniugi (art. 266m CO).',
    'Partenza fuori termine: presentando un nuovo conduttore solvibile e accettabile siete liberati dai vostri obblighi (art. 264 CO).',
  ],
  zdroje: [CO_LOCAZIONE, CO_266C, CH_LOCAZIONE],
  kroky: [
    { id: 'parteien', nazev: 'Conduttore e locatore', pole: [
      { id: 'm_name', typ: 'text', popis: 'Conduttore – nome', napoveda: 'Come nel contratto; se ci sono più conduttori, tutti.', placeholder: 'p. es. Laura Rezzonico', sirka: 34, autocomplete: 'name' },
      { id: 'm_kontakt', typ: 'text', popis: 'Telefono o e-mail', napoveda: 'Per fissare la riconsegna.', placeholder: 'p. es. laura@esempio.ch', sirka: 30 },
      { id: 'v_name', typ: 'text', popis: 'Locatore o amministrazione – nome', placeholder: 'p. es. Immobiliare Ceresio SA', sirka: 34 },
      { id: 'v_adresse', typ: 'text', popis: 'Indirizzo del locatore', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
    ] },
    { id: 'miete', nazev: 'Locazione', pole: [
      { id: 'wohnung', typ: 'text', popis: 'Abitazione (indirizzo e posizione)', placeholder: 'p. es. Via Lugano 7, 6500 Bellinzona, 2° piano a sinistra', sirka: 46 },
      { id: 'vertrag_datum', typ: 'datum', popis: 'Data del contratto di locazione', sirka: 14, polovina: true },
      { id: 'termin', typ: 'datum', popis: 'Termine di disdetta (fine della locazione)', napoveda: 'Termine del contratto o usuale, almeno tre mesi dopo la ricezione.', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN per il deposito di garanzia (facoltativo)', napoveda: 'Dove deve essere restituita la garanzia.', placeholder: 'CH…', sirka: 30 },
      { id: 'ort', typ: 'text', popis: 'Luogo', placeholder: 'p. es. Bellinzona', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Raccomandata a', odstavce: ['{{v_name}}, {{v_adresse}}'] },
    { nadpis: 'Disdetta del contratto di locazione', odstavce: [
      'Gentili signore e signori,',
      'Il/La sottoscritto/a {{m_name}} (contatto: {{m_kontakt}}) disdice il contratto di locazione del {{vertrag_datum}} relativo all’abitazione {{wohnung}}, con il preavviso di tre mesi, per il {{termin}}, subordinatamente per il prossimo termine possibile.',
      'Vi prego di confermarmi per iscritto la ricezione della presente e di propormi una data per la riconsegna dell’abitazione.',
      'Vi prego di liberare il deposito di garanzia dopo la riconsegna, rispettivamente di versarlo sul conto IBAN {{iban}}.',
      'Distinti saluti.',
    ] },
  ],
};
