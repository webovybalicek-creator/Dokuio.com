/**
 * Contratto d’appalto (art. 363 segg. CO) – artigiano, ristrutturazione, piccoli lavori. Prezzo fisso (art. 373 CO) o preventivo
 * approssimativo (art. 375 CO); verificazione e avviso dei difetti (art. 367 CO, 60 giorni per un’opera immobiliare); prescrizione (art. 371 CO).
 */
import type { Sablona } from '../typy';
import { importoInLettere } from './numeri';
import { CO_363, CO_367, CO_371, CO_375, CONSIGLIO_IDENTITA, linkCO, piede } from './fonti';

export const appalto: Sablona = {
  kod: 'CHIT-APPALTO', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Contratto d’appalto', podnadpis: 'secondo gli art. 363 segg. del Codice delle obbligazioni (CO)',
  souborPdf: 'contratto-d-appalto', paticka: piede('CHIT-APPALTO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Il committente / la committente', vpravo: 'L’appaltatore / l’appaltatrice' },
  slovo: { n: 'contratto', g: 'del contratto', a: 'il contratto', l: 'nel contratto' },
  pripominky: (d) => [
    ...(typeof d.beginn === 'string' && d.beginn ? [{ nazev: 'Inizio dei lavori', datum: d.beginn }] : []),
    ...(typeof d.fertig === 'string' && d.fertig ? [{ nazev: 'Ultimazione e collaudo', datum: d.fertig, popis: 'Verificate l’opera e redigete un verbale di collaudo con tutti i difetti constatati.' }] : []),
  ],
  coDal: [
    'Stampate due esemplari; entrambe le parti firmano entrambi.',
    'Versate gli acconti con un bonifico o fatevi rilasciare una quietanza.',
    'Concordate per iscritto i lavori supplementari e le modifiche di prezzo (basta un’e-mail).',
    'Al collaudo verificate l’opera e riservate nel verbale i difetti noti – altrimenti si perdono dei diritti.',
  ],
  kontrola: [
    'Descrivete la prestazione nel modo più preciso possibile (estensione, materiali, misure; allegate l’offerta).',
    `Prezzo fisso: nessun supplemento, anche se il lavoro è maggiore (art. 373 CO). Preventivo approssimativo: in caso di superamento eccessivo il committente può recedere dal contratto (${linkCO('375')}).`,
    `Verificate l’opera dopo la consegna e segnalate immediatamente i difetti; per un’opera immobiliare il termine per l’avviso è di 60 giorni (${linkCO('367')}). Chi accetta l’opera perde i diritti per i difetti riconoscibili.`,
    `I diritti per i difetti si prescrivono in 2 anni dal collaudo, in 5 anni per un’opera immobiliare (${linkCO('371')}).`,
    'Questo modello non è pensato per la costruzione di una casa o per grandi trasformazioni.',
    CONSIGLIO_IDENTITA,
  ],
  zdroje: [CO_363, CO_367, CO_371, CO_375],
  kroky: [
    { id: 'parteien', nazev: 'Committente e appaltatore', popis: 'Il committente ordina l’opera e paga. L’appaltatore (p. es. un artigiano) la esegue.', pole: [
      { id: 'b_name', typ: 'text', popis: 'Committente – nome o ragione sociale', placeholder: 'p. es. Marco Bernasconi', sirka: 34, autocomplete: 'name' },
      { id: 'b_adresse', typ: 'text', popis: 'Indirizzo', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
      { id: 'u_name', typ: 'text', popis: 'Appaltatore – nome o ragione sociale', placeholder: 'p. es. Pittura Ferrari Sagl', sirka: 34 },
      { id: 'u_adresse', typ: 'text', popis: 'Indirizzo', placeholder: 'p. es. Via Industria 4, 6814 Lamone', sirka: 46 },
    ] },
    { id: 'werk', nazev: 'Opera', pole: [
      { id: 'leistung', typ: 'textarea', popis: 'Descrizione dell’opera', napoveda: 'Estensione, materiali, misure. Potete allegare un’offerta.', placeholder: 'p. es. tinteggiatura del soggiorno e del corridoio (ca. 60 m² di pareti), due mani di bianco coprente, mascheratura compresa, secondo offerta del 03.11.2026', sirka: 70 },
      { id: 'ort', typ: 'text', popis: 'Luogo di esecuzione', placeholder: 'p. es. Via Nassa 12, 6900 Lugano, 2° piano', sirka: 46 },
      { id: 'material', typ: 'volba', popis: 'Chi fornisce i materiali?', moznosti: [ { hodnota: 'unternehmer', popis: 'L’appaltatore (compresi nel prezzo)' }, { hodnota: 'besteller', popis: 'Il committente' } ] },
      { id: 'beginn', typ: 'datum', popis: 'Inizio', sirka: 14, polovina: true },
      { id: 'fertig', typ: 'datum', popis: 'Ultimazione', sirka: 14, polovina: true },
    ] },
    { id: 'preis', nazev: 'Prezzo', pole: [
      { id: 'preisart', typ: 'volba', popis: 'Tipo di prezzo', moznosti: [ { hodnota: 'pauschal', popis: 'Prezzo fisso (art. 373 CO)' }, { hodnota: 'anschlag', popis: 'Preventivo approssimativo' } ] },
      { id: 'preis', typ: 'castka', popis: 'Prezzo (CHF, IVA compresa)', placeholder: 'p. es. 1800', sirka: 14, polovina: true },
      { id: 'anzahlung_ja', typ: 'volba', popis: 'Acconto', moznosti: [ { hodnota: 'nein', popis: 'Nessuno – pagamento dopo il collaudo' }, { hodnota: 'ja', popis: 'Acconto, saldo dopo il collaudo' } ] },
      { id: 'anzahlung', typ: 'castka', popis: 'Importo dell’acconto (CHF)', placeholder: 'p. es. 500', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'anzahlung_ja', je: 'ja' } },
      { id: 'zahlungsziel', typ: 'cislo', popis: 'Termine di pagamento dopo la consegna (giorni)', placeholder: 'p. es. 30', sirka: 4, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN dell’appaltatore (facoltativo)', placeholder: 'CH…', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Luogo della firma', placeholder: 'p. es. Lugano', sirka: 18, polovina: true, vychozi: { obecZ: 'b_adresse' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { preis_worte: (d) => importoInLettere(d.preis) },
  clanky: [
    { nadpis: 'Parti', odstavce: ['**Committente:** {{b_name}}, {{b_adresse}} (di seguito «committente»)', '**Appaltatore:** {{u_name}}, {{u_adresse}} (di seguito «appaltatore»)'] },
    { nadpis: 'Oggetto del contratto', vysvetleni: 'L’appaltatore deve un’opera finita e senza difetti – non solo ore di lavoro.', odstavce: [
      'L’appaltatore si impegna a eseguire l’opera seguente: {{leistung}}.',
      'Luogo di esecuzione: {{ort}}.',
      { volba: 'material', uvodVzor: 'Materiali (barrate):', moznosti: { unternehmer: 'L’appaltatore fornisce i materiali necessari; sono compresi nel prezzo.', besteller: 'Il committente fornisce i materiali necessari. L’appaltatore li verifica prima di usarli e segnala senza indugio i materiali inadatti.' } },
    ] },
    { nadpis: 'Termini di esecuzione', odstavce: ['I lavori iniziano il {{beginn}}. L’opera è ultimata al più tardi il {{fertig}}.', 'Il committente dà accesso al luogo di esecuzione negli orari di lavoro usuali.'] },
    { nadpis: 'Prezzo e pagamento', odstavce: [
      { volba: 'preisart', uvodVzor: 'Prezzo (barrate):', moznosti: {
        pauschal: 'Le parti convengono un prezzo fisso di {{preis}} (in lettere: {{preis_worte}}), IVA compresa. L’appaltatore non può chiedere alcun aumento, anche se l’opera richiede più lavoro (art. 373 CO).',
        anschlag: 'Il prezzo si fonda sul preventivo approssimativo di {{preis}} (in lettere: {{preis_worte}}), IVA compresa. Se si profila un superamento, l’appaltatore ne avvisa immediatamente il committente. Se il preventivo è superato in misura eccessiva senza colpa del committente, questi può recedere dal contratto secondo l’art. 375 CO.',
      } },
      { volba: 'anzahlung_ja', uvodVzor: 'Acconto (barrate):', moznosti: { nein: 'Il prezzo è pagabile alla consegna dell’opera (art. 372 CO).', ja: 'Il committente versa alla conclusione del contratto un acconto di {{anzahlung}}. Il saldo è pagabile alla consegna dell’opera.' } },
      'Pagamento entro {{zahlungsziel}} giorni dalla consegna sul conto IBAN {{iban}} o in contanti contro quietanza.',
      'L’appaltatore esegue prestazioni supplementari solo dopo un accordo scritto sulla loro estensione e sul loro prezzo.',
    ] },
    { nadpis: 'Collaudo e difetti', vysvetleni: 'Al collaudo l’opera viene verificata. I difetti noti devono essere riservati.', odstavce: [
      'Dopo la consegna il committente verifica l’opera appena possibile secondo l’uso normale degli affari e segnala immediatamente i difetti (art. 367 CO). Viene redatto un verbale di collaudo con i difetti constatati e i termini per eliminarli.',
      'Se il committente accetta l’opera espressamente o tacitamente, l’appaltatore è liberato dalla responsabilità per i difetti riconoscibili (art. 370 CO).',
      'Per il resto si applicano gli art. 368 segg. CO. I diritti per i difetti si prescrivono secondo l’art. 371 CO.',
    ] },
    { nadpis: 'Disposizioni finali', odstavce: ['Ogni modifica o aggiunta al presente contratto richiede la forma scritta. Per il resto si applicano le disposizioni del CO.', 'Il contratto è redatto in due esemplari; ciascuna parte ne riceve uno.'] },
  ],
};
