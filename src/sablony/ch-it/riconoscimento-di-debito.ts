/**
 * Riconoscimento di debito (art. 17 CO). Firmato dal debitore, permette il rigetto provvisorio dell’opposizione nell’esecuzione
 * (art. 82 LEF); interrompe la prescrizione, che ricomincia a decorrere (art. 135 CO).
 */
import type { Sablona } from '../typy';
import { naDatum } from '../terminy';
import { importoInLettere } from './numeri';
import { pianoPagamento, promemoriaRate } from './piano';
import { CO_17, CO_135, LEF_82, CONSIGLIO_IDENTITA, linkCO, linkLEF, piede } from './fonti';

export const riconoscimentoDebito: Sablona = {
  kod: 'CHIT-RICONOSCIMENTO', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Riconoscimento di debito', podnadpis: 'secondo l’art. 17 del Codice delle obbligazioni (CO)',
  souborPdf: 'riconoscimento-di-debito', paticka: piede('CHIT-RICONOSCIMENTO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Il debitore / la debitrice', vpravo: 'Il creditore / la creditrice (accordo sulle rate)' },
  slovo: { n: 'riconoscimento di debito', g: 'del riconoscimento di debito', a: 'il riconoscimento di debito', l: 'nel riconoscimento di debito' },
  prilohy: (d) => (d.splaceni === 'splatky' ? pianoPagamento(d, 'Il piano segue le rate pattuite; in caso di contraddizione fa fede il testo del riconoscimento di debito.') : []),
  pripominky: (d) => [
    ...(d.splaceni === 'splatky' ? promemoriaRate(d) : []),
    ...(d.splaceni === 'naraz' && naDatum(d.zaplatit_do) ? [{ nazev: 'Debito esigibile', datum: String(d.zaplatit_do) }] : []),
  ],
  coDal: [
    'Stampate due esemplari. È determinante la firma autografa del debitore.',
    'Il creditore tiene l’originale firmato.',
    'Fatevi rilasciare una quietanza per i pagamenti in contanti; i bonifici sono provati dall’estratto conto.',
  ],
  kontrola: [
    `Un riconoscimento di debito firmato permette di chiedere il rigetto provvisorio dell’opposizione nell’esecuzione (${linkLEF('82')}). Importo e scadenza devono risultare chiaramente.`,
    'Indicate in modo concreto la causa e l’importo del debito (quale contratto o quale evento, in quale data).',
    `Il riconoscimento interrompe la prescrizione, che ricomincia a decorrere (${linkCO('135')}).`,
    'Niente pressioni né minacce – un riconoscimento ottenuto sotto costrizione può essere contestato.',
    CONSIGLIO_IDENTITA,
  ],
  zdroje: [CO_17, CO_135, LEF_82],
  kroky: [
    { id: 'parteien', nazev: 'Debitore e creditore', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Debitore – nome e cognome', napoveda: 'Chi deve e riconosce il debito.', placeholder: 'p. es. Luca Ferrari', sirka: 34, autocomplete: 'name' },
      { id: 'p_narozeni', typ: 'datum', popis: 'Data di nascita', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Indirizzo', placeholder: 'p. es. Via Cantonale 20, 6600 Locarno', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Creditore – nome e cognome', placeholder: 'p. es. Marco Bernasconi', sirka: 34 },
      { id: 'k_narozeni', typ: 'datum', popis: 'Data di nascita', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Indirizzo', sirka: 46 },
    ] },
    { id: 'schuld', nazev: 'Debito', pole: [
      { id: 'castka', typ: 'castka', popis: 'Importo del debito (CHF)', napoveda: 'L’importo ancora dovuto oggi. Aggiungiamo le lettere.', placeholder: 'p. es. 3000', sirka: 14, polovina: true },
      { id: 'duvod_popis', typ: 'text', popis: 'Causa del debito', placeholder: 'p. es. prestito secondo il contratto di prestito del 03.03.2026', sirka: 56 },
    ] },
    { id: 'zahlung', nazev: 'Pagamento', pole: [
      { id: 'splaceni', typ: 'volba', popis: 'Come viene pagato il debito?', moznosti: [ { hodnota: 'naraz', popis: 'In una volta entro una data' }, { hodnota: 'splatky', popis: 'A rate mensili' } ] },
      { id: 'zaplatit_do', typ: 'datum', popis: 'Pagare al più tardi il', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'naraz' } },
      { id: 'splatka', typ: 'castka', popis: 'Rata mensile (CHF)', placeholder: 'p. es. 300', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
      { id: 'splatka_den', typ: 'cislo', popis: 'Giorno del mese', placeholder: 'p. es. 25', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
      { id: 'prvni_splatka', typ: 'datum', popis: 'Mese della prima rata', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
      { id: 'ucet', typ: 'text', popis: 'IBAN del creditore', placeholder: 'CH…', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Luogo', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_slovy: (d) => importoInLettere(d.castka) },
  clanky: [
    { nadpis: 'Parti', vysvetleni: 'Chi deve e a chi.', odstavce: [
      '**Debitore / debitrice:** {{p_jmeno}}, nato/a il {{p_narozeni}}, domiciliato/a in {{p_adresa}}',
      '**Creditore / creditrice:** {{k_jmeno}}, nato/a il {{k_narozeni}}, domiciliato/a in {{k_adresa}}',
    ] },
    { nadpis: 'Riconoscimento', vysvetleni: 'Causa e importo del debito.', odstavce: [
      'Con la presente riconosco di dovere al creditore l’importo di **{{castka}}** (in lettere: {{castka_slovy}}).',
      'Causa del debito: {{duvod_popis}}.',
    ] },
    { nadpis: 'Pagamento', vysvetleni: 'Entro quando o con quali rate viene pagato il debito.', odstavce: [
      { volba: 'splaceni', uvodVzor: 'Modalità di pagamento (barrate):', moznosti: {
        naraz: 'Mi impegno a pagare questo importo al più tardi il {{zaplatit_do}}.',
        splatky: 'Mi impegno a pagare questo importo a rate mensili di {{splatka}}, scadenti il giorno {{splatka_den}} di ogni mese, a partire dal mese della prima rata indicato nel piano di pagamento. L’ultima rata può essere più bassa. Se sono in mora con due rate consecutive, il saldo diventa immediatamente esigibile.',
      } },
      'I pagamenti sono effettuati sul conto IBAN {{ucet}} o in contanti contro quietanza. Un pagamento anticipato è possibile in ogni momento.',
    ] },
  ],
};
