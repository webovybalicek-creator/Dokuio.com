/**
 * Contratto di prestito tra privati – mutuo (art. 312 segg. CO). Interessi dovuti solo se pattuiti; senza termine fissato,
 * restituzione entro sei settimane dalla prima richiesta (art. 318 CO). Il contratto firmato dal mutuatario vale come
 * riconoscimento di debito per il rigetto provvisorio dell’opposizione (art. 82 LEF).
 */
import type { Sablona } from '../typy';
import { naDatum } from '../terminy';
import { importoInLettere } from './numeri';
import { pianoPagamento, promemoriaRate } from './piano';
import { CO, CO_312, CO_318, LEF_82, CONSIGLIO_IDENTITA, CONSIGLIO_PAGAMENTO, linkCO, linkLEF, piede } from './fonti';

const primoMese = (v: unknown) => {
  const m = /^(\d{4})-(\d{2})/.exec(typeof v === 'string' ? v : '');
  return m ? `${m[2]}.${m[1]}` : '';
};

export const prestito: Sablona = {
  kod: 'CHIT-PRESTITO', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Contratto di prestito', podnadpis: 'prestito di denaro tra privati secondo gli art. 312 segg. del Codice delle obbligazioni (CO)',
  souborPdf: 'contratto-di-prestito', paticka: piede('CHIT-PRESTITO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'Il mutuante / la mutuante', vpravo: 'Il mutuatario / la mutuataria' },
  slovo: { n: 'contratto', g: 'del contratto', a: 'il contratto', l: 'nel contratto' },
  prilohy: (d) => (d.splaceni === 'splatky' ? pianoPagamento(d, 'Il piano segue le rate pattuite; in caso di contraddizione fa fede il testo del contratto.') : []),
  pripominky: (d) => [
    ...(d.splaceni === 'splatky' ? promemoriaRate(d, 'Rata del prestito') : []),
    ...(d.splaceni === 'naraz' && naDatum(d.vratit_do) ? [{ nazev: 'Restituzione del prestito', datum: String(d.vratit_do) }] : []),
  ],
  coDal: ['Stampate il contratto in due esemplari; entrambe le parti firmano entrambi.', 'Versate il denaro preferibilmente con un bonifico – l’estratto conto è la prova migliore.'],
  kontrola: [
    'Consegnate il denaro in modo dimostrabile – con un bonifico o contro quietanza.',
    `Tra privati gli interessi sono dovuti solo se pattuiti. Senza data di restituzione fissata, il prestito va restituito entro sei settimane dalla prima richiesta (${linkCO('318')}).`,
    `Il contratto firmato dal mutuatario vale come riconoscimento di debito – permette di chiedere il rigetto provvisorio dell’opposizione in un’esecuzione (${linkLEF('82')}).`,
    'Gli interessi usurari sono vietati; alcuni Cantoni fissano tassi massimi.',
    CONSIGLIO_IDENTITA,
    CONSIGLIO_PAGAMENTO,
  ],
  zdroje: [CO, CO_312, CO_318, LEF_82],
  kroky: [
    { id: 'parteien', nazev: 'Parti', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Mutuante – nome', placeholder: 'p. es. Marco Bernasconi', sirka: 34, autocomplete: 'name' },
      { id: 'p_narozeni', typ: 'datum', popis: 'Data di nascita', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Indirizzo', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Mutuatario – nome', placeholder: 'p. es. Luca Ferrari', sirka: 34 },
      { id: 'k_narozeni', typ: 'datum', popis: 'Data di nascita', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Indirizzo', placeholder: 'p. es. Via Cantonale 20, 6600 Locarno', sirka: 46 },
    ] },
    { id: 'darlehen', nazev: 'Prestito', pole: [
      { id: 'castka', typ: 'castka', popis: 'Importo del prestito (CHF)', napoveda: 'Aggiungiamo l’importo in lettere.', placeholder: 'p. es. 5000', sirka: 12, polovina: true },
      { id: 'odovzdanie', typ: 'volba', popis: 'Versamento', moznosti: [ { hodnota: 'bar', popis: 'In contanti alla firma' }, { hodnota: 'ueberweisung', popis: 'Con bonifico' } ] },
      { id: 'ucet_k', typ: 'text', popis: 'IBAN del mutuatario', placeholder: 'CH…', sirka: 30, zobrazitKdyz: { pole: 'odovzdanie', je: 'ueberweisung' } },
      { id: 'predani_do', typ: 'datum', popis: 'Versamento al più tardi il', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'odovzdanie', je: 'ueberweisung' } },
      { id: 'urok', typ: 'volba', popis: 'Interessi', napoveda: 'Tra privati il prestito è spesso senza interessi.', moznosti: [ { hodnota: 'ne', popis: 'Senza interessi' }, { hodnota: 'ano', popis: 'Con interessi' } ] },
      { id: 'urok_sazba', typ: 'cislo', popis: 'Tasso d’interesse', placeholder: 'p. es. 2', jednotka: '% all’anno', sirka: 6, polovina: true, zobrazitKdyz: { pole: 'urok', je: 'ano' } },
    ] },
    { id: 'rueckzahlung', nazev: 'Restituzione', pole: [
      { id: 'splaceni', typ: 'volba', popis: 'Restituzione', moznosti: [ { hodnota: 'naraz', popis: 'In una volta entro una data' }, { hodnota: 'splatky', popis: 'A rate mensili' } ] },
      { id: 'vratit_do', typ: 'datum', popis: 'Restituire al più tardi il', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'naraz' } },
      { id: 'splatka', typ: 'castka', popis: 'Rata mensile (CHF)', napoveda: 'L’ultima rata può essere più bassa – la calcoliamo noi.', placeholder: 'p. es. 500', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
      { id: 'splatka_den', typ: 'cislo', popis: 'Giorno del mese', placeholder: 'p. es. 25', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
      { id: 'prvni_splatka', typ: 'datum', popis: 'Mese della prima rata', napoveda: 'Scegliete un giorno qualsiasi del mese in cui iniziano i pagamenti.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
      { id: 'ucet_p', typ: 'text', popis: 'IBAN del mutuante', placeholder: 'CH…', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Luogo', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum_podpisu', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_slovy: (d) => importoInLettere(d.castka), prvni_mesic: (d) => primoMese(d.prvni_splatka) },
  clanky: [
    { nadpis: 'Parti', odstavce: [
      '**Mutuante:** {{p_jmeno}}, nato/a il {{p_narozeni}}, domiciliato/a in {{p_adresa}}',
      '**Mutuatario / mutuataria:** {{k_jmeno}}, nato/a il {{k_narozeni}}, domiciliato/a in {{k_adresa}}',
    ] },
    { nadpis: 'Prestito e versamento', vysvetleni: 'Quanto viene prestato e come viene consegnato il denaro.', odstavce: [
      'Il mutuante concede al mutuatario un prestito di **{{castka}}** (in lettere: {{castka_slovy}}).',
      { volba: 'odovzdanie', uvodVzor: 'Versamento (barrate):', moznosti: { bar: 'L’importo è stato consegnato in contanti alla firma; il mutuatario ne conferma la ricezione con la sua firma.', ueberweisung: 'L’importo è versato al più tardi il {{predani_do}} sul conto del mutuatario IBAN {{ucet_k}}.' } },
    ] },
    { nadpis: 'Interessi', odstavce: [
      { volba: 'urok', uvodVzor: 'Interessi (barrate):', moznosti: { ne: 'Il prestito è senza interessi.', ano: 'L’importo residuo dovuto produce interessi al tasso del {{urok_sazba}}; gli interessi sono pagabili con le rate, al più tardi con l’ultima.' } },
    ] },
    { nadpis: 'Restituzione', vysvetleni: 'Quando e come viene restituito il denaro.', odstavce: [
      { volba: 'splaceni', uvodVzor: 'Restituzione (barrate):', moznosti: {
        naraz: 'Il mutuatario restituisce l’intero importo al più tardi il {{vratit_do}}.',
        splatky: 'Il mutuatario restituisce l’importo a rate mensili di {{splatka}}, scadenti il giorno {{splatka_den}} di ogni mese, la prima volta nel mese {{prvni_mesic}}, fino alla restituzione completa. L’ultima rata può essere più bassa. Se il mutuatario è in mora con due rate consecutive, il saldo diventa immediatamente esigibile.',
      } },
      'I pagamenti sono effettuati sul conto del mutuante IBAN {{ucet_p}} o in contanti contro quietanza. Una restituzione anticipata è possibile in ogni momento.',
    ] },
    { nadpis: 'Disposizioni finali', odstavce: [
      'Per il resto si applicano gli art. 312 segg. CO. Ogni modifica richiede la forma scritta.',
      'Ciascuna parte riceve un esemplare del presente contratto.',
    ] },
  ],
};
