/**
 * Accordo di pagamento rateale di un debito esistente – Svizzera italiana. Bilaterale: il creditore concede rate e rinuncia
 * all’esecuzione finché sono pagate; clausola di decadenza in caso di mora. Riconoscimento di debito (art. 17 CO),
 * interruzione della prescrizione (art. 135 CO), rigetto provvisorio dell’opposizione (art. 82 LEF). LCCo: non si applica ai
 * crediti senza interessi né spese (art. 7 LCCo). Testo ripreso dal modello CH-ABZAHLUNG verificato.
 */
import type { Sablona } from '../typy';
import { importoInLettere } from './numeri';
import { pianoPagamento, promemoriaRate } from './piano';
import { CO_17, CO_104, CO_135, LEF_82, LCCO_7, CONSIGLIO_IDENTITA, linkCO, linkLEF, piede } from './fonti';

export const pagamentoRateale: Sablona = {
  kod: 'CHIT-RATEALE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Accordo di pagamento rateale', podnadpis: 'restituzione a rate mensili di un debito esistente secondo il Codice delle obbligazioni (CO)',
  souborPdf: 'accordo-pagamento-rateale', paticka: piede('CHIT-RATEALE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Il creditore / la creditrice', vpravo: 'Il debitore / la debitrice' },
  slovo: { n: 'accordo', g: 'dell’accordo', a: 'l’accordo', l: 'nell’accordo' },
  prilohy: (d) => pianoPagamento(d, [d.zins === 'ja' ? 'Il piano mostra solo il debito senza interessi; gli interessi sono pagati secondo l’accordo.' : '', 'In caso di contraddizione fa fede il testo dell’accordo.'].filter(Boolean).join(' ')),
  pripominky: (d) => promemoriaRate(d),
  coDal: [
    'Stampate due esemplari. Creditore e debitore firmano entrambi a mano; ciascuno riceve un esemplare.',
    'Controllate il piano di pagamento allegato: numero di rate e importo dell’ultima.',
    'Pagate le rate con un bonifico indicando un riferimento (p. es. «rata 3/10»). Fatevi sempre rilasciare una quietanza per i pagamenti in contanti.',
    'Se il debitore non paga: il creditore dichiara per iscritto esigibile il saldo e può avviare un’esecuzione. Con il riconoscimento di debito firmato può chiedere il rigetto provvisorio dell’opposizione.',
    'Dopo l’ultima rata il debitore può chiedere una conferma che il debito è estinto.',
  ],
  kontrola: [
    CONSIGLIO_IDENTITA,
    'Importo = ciò che è ancora dovuto il giorno della firma. Indicate la causa in modo concreto: quale contratto, quale fattura o quale evento, con la data.',
    `Con il riconoscimento di debito il debitore conferma il debito senza condizioni (${linkCO('17')}). Firmato, permette di chiedere il rigetto provvisorio dell’opposizione nell’esecuzione (${linkLEF('82')}).`,
    `Il riconoscimento interrompe la prescrizione; il termine ricomincia a decorrere (${linkCO('135')}).`,
    'Clausola di decadenza: in caso di ritardo nel pagamento, tutto il saldo diventa esigibile. Scegliete un termine di tolleranza se piccoli ritardi non devono far scattare tutto.',
    `Gli interessi sono facoltativi e devono restare ragionevoli. Un’impresa che concede crediti a titolo professionale – anche sotto forma di dilazione di pagamento con interessi o spese – deve rispettare la legge sul credito al consumo; i crediti senza interessi né spese non vi sono soggetti ([art. 7 LCCo](${LCCO_7.url})).`,
    'Fissate rate che il debitore può davvero pagare – un piano irrealistico non aiuta nessuno.',
    'Il denaro viene prestato solo adesso? È più adatto il contratto di prestito.',
  ],
  zdroje: [CO_17, CO_135, CO_104, LEF_82, LCCO_7],
  kroky: [
    { id: 'parteien', nazev: 'Creditore e debitore', popis: 'Il creditore è la persona a cui è dovuto il denaro. Il debitore paga a rate. Entrambi firmano.', pole: [
      { id: 'k_jmeno', typ: 'text', popis: 'Creditore – nome e cognome', napoveda: 'Nome completo come sul documento d’identità (per un’impresa: ragione sociale).', placeholder: 'p. es. Marco Bernasconi', sirka: 34, autocomplete: 'name' },
      { id: 'k_narozeni', typ: 'datum', popis: 'Data di nascita del creditore', napoveda: 'Aiuta a identificare la persona senza equivoci.', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Indirizzo del creditore', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
      { id: 'p_jmeno', typ: 'text', popis: 'Debitore – nome e cognome', napoveda: 'Nome completo come sul documento d’identità.', placeholder: 'p. es. Luca Ferrari', sirka: 34 },
      { id: 'p_narozeni', typ: 'datum', popis: 'Data di nascita del debitore', napoveda: 'Importante se diventa necessaria un’esecuzione.', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Indirizzo del debitore', napoveda: 'Domicilio – è lì che verrebbe avviata un’esecuzione.', placeholder: 'p. es. Via San Gottardo 3, 6830 Chiasso', sirka: 46 },
    ] },
    { id: 'schuld', nazev: 'Debito', popis: 'Il debito esiste già – l’accordo regola solo il modo di pagarlo.', pole: [
      { id: 'castka', typ: 'castka', popis: 'Importo dovuto il giorno della firma (CHF)', napoveda: 'Ciò che resta da pagare. Aggiungiamo le lettere e calcoliamo il piano di pagamento.', placeholder: 'p. es. 6000', sirka: 14, polovina: true },
      { id: 'duvod', typ: 'text', popis: 'Causa del debito', napoveda: 'In concreto: contratto, fattura o evento con la data.', placeholder: 'p. es. fattura non pagata n. 2026-015 del 03.03.2026', sirka: 56 },
      { id: 'anerkennung', typ: 'volba', popis: 'Il debitore riconosce il debito?', napoveda: 'Consigliato: con il riconoscimento firmato il creditore può chiedere il rigetto provvisorio dell’opposizione, e la prescrizione ricomincia a decorrere.', moznosti: [ { hodnota: 'ja', popis: 'Sì, con riconoscimento di debito' }, { hodnota: 'nein', popis: 'No, solo il pagamento rateale' } ] },
    ] },
    { id: 'raten', nazev: 'Rate', pole: [
      { id: 'splatka', typ: 'castka', popis: 'Rata mensile (CHF)', napoveda: 'L’ultima può essere più bassa – la calcoliamo noi.', placeholder: 'p. es. 500', sirka: 12, polovina: true },
      { id: 'splatka_den', typ: 'cislo', popis: 'Giorno del mese', napoveda: 'Giorno in cui la rata deve essere accreditata, p. es. 25.', placeholder: 'p. es. 25', sirka: 4, polovina: true },
      { id: 'prvni_splatka', typ: 'datum', popis: 'Mese della prima rata', napoveda: 'Scegliete un giorno qualsiasi del mese in cui iniziano i pagamenti.', sirka: 14, polovina: true },
      { id: 'ucet', typ: 'text', popis: 'IBAN del creditore', napoveda: 'Dove vanno le rate. Un bonifico è la prova più semplice.', placeholder: 'CH…', sirka: 30 },
      { id: 'zins', typ: 'volba', popis: 'Sono dovuti interessi?', napoveda: 'Tra privati di solito senza interessi. Un interesse deve restare ragionevole.', moznosti: [ { hodnota: 'nein', popis: 'Senza interessi' }, { hodnota: 'ja', popis: 'Con interessi' } ] },
      { id: 'zins_satz', typ: 'cislo', popis: 'Tasso d’interesse (% all’anno)', napoveda: 'Interesse annuo sull’importo residuo dovuto, p. es. 3.', placeholder: 'p. es. 3', jednotka: '% all’anno', sirka: 8, polovina: true, zobrazitKdyz: { pole: 'zins', je: 'ja' } },
      { id: 'verfall', typ: 'volba', popis: 'Quando diventa esigibile tutto il saldo?', napoveda: 'Clausola di decadenza: se il debitore non paga, il creditore può esigere tutto il saldo in una volta. Un termine di tolleranza perdona i piccoli ritardi.', moznosti: [ { hodnota: 'sofort', popis: 'Dal ritardo di una rata' }, { hodnota: 'nachfrist', popis: 'Se una rata manca ancora 14 giorni dopo la scadenza' }, { hodnota: 'zwei', popis: 'Dal ritardo di due rate' } ] },
      { id: 'misto', typ: 'text', popis: 'Luogo della firma', napoveda: 'Riprendiamo la località dall’indirizzo del creditore.', placeholder: 'p. es. Lugano', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: {
    castka_slovy: (d) => importoInLettere(d.castka),
    prvni_mesic: (d) => {
      const m = /^(\d{4})-(\d{2})/.exec(typeof d.prvni_splatka === 'string' ? d.prvni_splatka : '');
      return m ? `${m[2]}.${m[1]}` : '';
    },
  },
  clanky: [
    { nadpis: 'Parti', vysvetleni: 'Chi deve a chi. Dati esatti contano in caso di esecuzione.', odstavce: [
      '**Creditore / creditrice:** {{k_jmeno}}, nato/a il {{k_narozeni}}, domiciliato/a in {{k_adresa}}',
      '**Debitore / debitrice:** {{p_jmeno}}, nato/a il {{p_narozeni}}, domiciliato/a in {{p_adresa}}',
    ] },
    { nadpis: 'Debito', vysvetleni: 'Quale debito viene restituito e quanto resta dovuto il giorno della firma.', odstavce: [
      'Il giorno della firma il debitore deve al creditore l’importo di **{{castka}}** (in lettere: {{castka_slovy}}). Causa del debito: {{duvod}}.',
      { volba: 'anerkennung', uvodVzor: 'Riconoscimento di debito (barrate):', moznosti: { ja: 'Il debitore riconosce espressamente e senza riserve questo debito per questo importo (art. 17 CO).', nein: 'Con il presente accordo le parti regolano unicamente le modalità di pagamento.' } },
    ] },
    { nadpis: 'Pagamento a rate', vysvetleni: 'Il creditore accetta che non sia pagato tutto in una volta; il debitore si impegna a rate fisse secondo il piano.', odstavce: [
      'Il debitore paga il debito a rate mensili di {{splatka}}, scadenti il giorno {{splatka_den}} di ogni mese, la prima volta nel mese {{prvni_mesic}}, fino all’estinzione completa. L’ultima rata può essere più bassa. Il piano figura in allegato.',
      'Le rate sono versate sul conto del creditore IBAN {{ucet}}; fa fede la data dell’accredito. Il creditore rilascia una quietanza scritta per i pagamenti in contanti.',
      { volba: 'zins', uvodVzor: 'Interessi (barrate):', moznosti: { nein: 'Sulle rate non sono dovuti interessi.', ja: 'Il debitore paga sull’importo residuo dovuto un interesse del {{zins_satz}}, pagabile con le rate.' } },
      'Finché il debitore paga puntualmente, il creditore non esige tutto il debito in una volta e non avvia un’esecuzione. Il debitore può in ogni momento pagare di più o restituire tutto anticipatamente.',
    ] },
    { nadpis: 'Clausola di decadenza', vysvetleni: 'Cosa succede se il debitore non paga più: il creditore può esigere tutto il saldo in una volta.', odstavce: [
      { volba: 'verfall', uvodVzor: 'Esigibilità del saldo (barrate):', moznosti: {
        sofort: 'Se il debitore è in mora con una rata, l’intero saldo diventa immediatamente esigibile.',
        nachfrist: 'Se una rata non è stata accreditata 14 giorni dopo la scadenza, l’intero saldo diventa immediatamente esigibile.',
        zwei: 'Se il debitore è in mora con due rate, l’intero saldo diventa immediatamente esigibile.',
      } },
      'Il creditore comunica l’esigibilità per iscritto al debitore. Dalla mora è dovuto l’interesse moratorio secondo l’art. 104 CO.',
    ] },
    { nadpis: 'Disposizioni finali', vysvetleni: 'Formalità: diritto applicabile, modifiche, esemplari.', odstavce: [
      'Per il resto si applica il Codice delle obbligazioni svizzero. Ogni modifica o aggiunta richiede la forma scritta.',
      'L’accordo è redatto in due esemplari; ciascuna parte ne riceve uno. Il piano di pagamento allegato è parte integrante dell’accordo; in caso di contraddizione fa fede il testo dell’accordo.',
    ] },
  ],
};
