/**
 * Contratto di donazione di denaro o di una cosa mobile – Svizzera italiana (art. 239 segg. CO). La donazione manuale è valida
 * senza forma; la promessa di donare deve essere scritta (art. 243 CO). Fondi: atto pubblico, fuori da questo modello. Imposta
 * cantonale: coniugi e partner registrati esenti di regola, discendenti nella maggior parte dei Cantoni (ch.ch).
 */
import type { Sablona } from '../typy';
import { importoInLettere } from './numeri';
import { CO_239, CO_243, CH_DONAZIONI, CONSIGLIO_IDENTITA, linkCO, piede } from './fonti';

export const donazione: Sablona = {
  kod: 'CHIT-DONAZIONE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Contratto di donazione', podnadpis: 'donazione di denaro o di una cosa mobile (art. 239 segg. CO)',
  souborPdf: 'contratto-di-donazione', paticka: piede('CHIT-DONAZIONE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'Il donante / la donante', vpravo: 'Il donatario / la donataria' },
  slovo: { n: 'contratto', g: 'del contratto', a: 'il contratto', l: 'nel contratto' },
  coDal: [
    'Stampate due esemplari; entrambe le parti firmano entrambi.',
    'Versate il denaro preferibilmente il giorno stesso, con la causale «donazione».',
    'Per un importo elevato chiedete all’amministrazione fiscale del Cantone di domicilio del donante se è dovuta un’imposta sulle donazioni.',
  ],
  kontrola: [
    `Una donazione manuale (da mano a mano) è valida senza forma; la promessa di donare in futuro deve essere fatta per iscritto (${linkCO('243')}). Questo modello regola la donazione eseguita subito.`,
    'Per un fondo serve sempre un atto pubblico – questo modello non è adatto.',
    `L’imposta sulle donazioni è cantonale e la paga chi riceve: di regola i coniugi, i partner registrati e i discendenti (figli e nipoti) ne sono esentati; per dettagli rivolgetevi all’ufficio cantonale delle contribuzioni del domicilio del donante ([ch.ch](${CH_DONAZIONI.url})).`,
    'Per una cosa donata indicate i difetti noti.',
    CONSIGLIO_IDENTITA,
  ],
  zdroje: [CO_239, CO_243, CH_DONAZIONI],
  kroky: [
    { id: 'parteien', nazev: 'Donante e donatario', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Donante – nome e cognome', placeholder: 'p. es. Marco Bernasconi', sirka: 34, autocomplete: 'name' },
      { id: 'p_narozeni', typ: 'datum', popis: 'Data di nascita', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Indirizzo', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Donatario – nome e cognome', placeholder: 'p. es. Giulia Bernasconi', sirka: 34 },
      { id: 'k_narozeni', typ: 'datum', popis: 'Data di nascita', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Indirizzo', sirka: 46 },
      { id: 'vztah', typ: 'text', popis: 'Grado di parentela (facoltativo)', napoveda: 'Importante per l’imposta cantonale sulle donazioni, p. es. figlia, nipote.', placeholder: 'p. es. figlia', sirka: 20 },
    ] },
    { id: 'geschenk', nazev: 'Oggetto della donazione', pole: [
      { id: 'predmet', typ: 'volba', popis: 'Cosa viene donato?', moznosti: [ { hodnota: 'penize', popis: 'Denaro' }, { hodnota: 'vec', popis: 'Una cosa mobile (p. es. auto, gioiello, mobile)' } ] },
      { id: 'castka', typ: 'castka', popis: 'Importo (CHF)', napoveda: 'Aggiungiamo l’importo in lettere.', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'predmet', je: 'penize' } },
      { id: 'prevod', typ: 'volba', popis: 'Come viene consegnato il denaro?', moznosti: [ { hodnota: 'hotove', popis: 'In contanti alla firma' }, { hodnota: 'ucet', popis: 'Con bonifico il giorno della firma' } ], zobrazitKdyz: { pole: 'predmet', je: 'penize' } },
      { id: 'ucet', typ: 'text', popis: 'IBAN del donatario', placeholder: 'CH…', sirka: 30, zobrazitKdyz: { pole: 'prevod', je: 'ucet' } },
      { id: 'vec_popis', typ: 'textarea', popis: 'Descrizione della cosa', placeholder: 'p. es. auto Fiat Panda, numero di telaio …', sirka: 64, zobrazitKdyz: { pole: 'predmet', je: 'vec' } },
      { id: 'vady_popis', typ: 'textarea', popis: 'Difetti noti (facoltativo)', sirka: 64, zobrazitKdyz: { pole: 'predmet', je: 'vec' } },
      { id: 'misto', typ: 'text', popis: 'Luogo', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum_podpisu', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_slovy: (d) => importoInLettere(d.castka) },
  clanky: [
    { nadpis: 'Parti', vysvetleni: 'Chi dona e chi accetta la donazione.', odstavce: [
      '**Donante:** {{p_jmeno}}, nato/a il {{p_narozeni}}, domiciliato/a in {{p_adresa}}',
      '**Donatario / donataria:** {{k_jmeno}}, nato/a il {{k_narozeni}}, domiciliato/a in {{k_adresa}}, rapporto con il donante: {{vztah}}',
    ] },
    { nadpis: 'Oggetto della donazione', vysvetleni: 'Cosa viene donato.', odstavce: [
      { volba: 'predmet', uvodVzor: 'Oggetto (barrate):', moznosti: { penize: 'Il donante dona al donatario la somma di {{castka}} (in lettere: {{castka_slovy}}).', vec: 'Il donante dona al donatario la cosa seguente: {{vec_popis}}. Difetti noti al donante: {{vady_popis}}' } },
      'Il donatario accetta la donazione.',
    ] },
    { nadpis: 'Esecuzione', vysvetleni: 'Il dono è consegnato subito – una donazione manuale.', odstavce: [
      { volba: 'prevod', kdyz: { pole: 'predmet', je: 'penize' }, uvodVzor: 'Per il denaro (barrate):', moznosti: { hotove: 'L’importo è stato consegnato in contanti alla firma; il donatario ne conferma la ricezione con la sua firma.', ucet: 'L’importo è versato il giorno della firma sul conto IBAN {{ucet}}.' } },
      { volba: 'predmet', kdyz: { pole: 'predmet', je: 'vec' }, uvodVzor: 'Per una cosa:', moznosti: { vec: 'La cosa è stata consegnata alla firma; la proprietà è passata con la consegna. Il donatario ne conferma la ricezione con la sua firma.' } },
    ] },
    { nadpis: 'Disposizioni finali', vysvetleni: 'Formalità usuali.', odstavce: [
      'Per il resto si applicano gli art. 239 segg. CO, compresi i diritti legali di revoca del donante (art. 249 CO).',
      'Un’eventuale imposta cantonale sulle donazioni è a carico del donatario, salvo disposizione contraria del diritto cantonale.',
      'Il contratto è redatto in due esemplari; ciascuna parte ne riceve uno.',
    ] },
  ],
};
