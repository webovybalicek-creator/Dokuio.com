/**
 * Contratto di locazione per un’abitazione – Svizzera italiana (art. 253 segg. CO). Deposito di garanzia max. tre pigioni su un
 * conto bloccato a nome del conduttore (art. 257e CO); spese accessorie dovute solo se elencate (art. 257a CO); modulo ufficiale
 * per la pigione iniziale in alcuni Cantoni (art. 270 cpv. 2 CO); disdetta di tre mesi per un termine usuale (art. 266c CO).
 */
import type { Sablona } from '../typy';
import { cislo, isoDatum, naDatum, pridejMesice } from '../terminy';
import { importoInLettere } from './numeri';
import { CO_LOCAZIONE, CO_257E, CO_266C, CH_LOCAZIONE, CONSIGLIO_IDENTITA, piede } from './fonti';

export const locazione: Sablona = {
  kod: 'CHIT-LOCAZIONE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Contratto di locazione', podnadpis: 'per un’abitazione secondo gli art. 253 segg. del Codice delle obbligazioni (CO)',
  souborPdf: 'contratto-di-locazione-appartamento', paticka: piede('CHIT-LOCAZIONE'),
  mistoPodpisu: 'ort', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Il locatore / la locatrice', vpravo: 'Il conduttore / la conduttrice' },
  slovo: { n: 'contratto di locazione', g: 'del contratto di locazione', a: 'il contratto di locazione', l: 'nel contratto di locazione' },
  pripominky: (d) => {
    const out: { nazev: string; datum: string; popis?: string; mesicne?: number }[] = [];
    const od = naDatum(d.beginn);
    const giorno = Math.round(cislo(d.faellig));
    if (typeof d.uebergabe === 'string' && d.uebergabe) out.push({ nazev: 'Consegna dell’abitazione con verbale', datum: d.uebergabe });
    if (od && giorno >= 1 && giorno <= 31) out.push({ nazev: 'Pigione e spese accessorie', datum: isoDatum(pridejMesice(od, od.getDate() > giorno ? 1 : 0, giorno)), mesicne: 12, popis: 'I primi 12 mesi.' });
    return out;
  },
  coDal: [
    'Stampate due esemplari; entrambe le parti firmano entrambi.',
    'Alla consegna redigete un verbale – nei primi giorni il conduttore può ancora segnalare per iscritto i difetti che non vi figurano.',
    'Versate il deposito di garanzia su un conto di garanzia (conto bloccato) a nome del conduttore.',
    'Conduttore: annunciatevi al controllo abitanti del Comune entro 14 giorni.',
  ],
  kontrola: [
    CONSIGLIO_IDENTITA,
    'Il deposito di garanzia non può superare tre pigioni mensili e deve essere depositato su un conto bloccato a nome del conduttore (art. 257e CO).',
    'Il conduttore paga spese accessorie solo se sono elencate una per una nel contratto (art. 257a CO). Tutte le altre sono comprese nella pigione.',
    'In alcuni Cantoni la pigione iniziale deve essere comunicata con il modulo ufficiale (art. 270 cpv. 2 CO) – informatevi presso l’autorità cantonale di conciliazione.',
    'Termine di disdetta per un’abitazione: almeno tre mesi per un termine usuale (art. 266c CO). Il locatore deve disdire con il modulo ufficiale.',
    'Un conduttore che vuole andarsene senza rispettare il termine può proporre un nuovo conduttore solvibile e accettabile (art. 264 CO).',
  ],
  zdroje: [CO_LOCAZIONE, CO_257E, CO_266C, CH_LOCAZIONE],
  kroky: [
    { id: 'parteien', nazev: 'Locatore e conduttore', pole: [
      { id: 'v_name', typ: 'text', popis: 'Locatore – nome', napoveda: 'Proprietario dell’abitazione.', placeholder: 'p. es. Marco Bernasconi', sirka: 34, autocomplete: 'name' },
      { id: 'v_adresse', typ: 'text', popis: 'Indirizzo del locatore', napoveda: 'Per la corrispondenza.', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
      { id: 'm_name', typ: 'text', popis: 'Conduttore – nome', napoveda: 'Se ci sono più conduttori, indicateli tutti.', placeholder: 'p. es. Laura Rezzonico', sirka: 34 },
      { id: 'm_geburt', typ: 'datum', popis: 'Data di nascita del conduttore', sirka: 14, polovina: true },
      { id: 'm_adresse', typ: 'text', popis: 'Indirizzo attuale del conduttore', napoveda: 'Prima del trasloco.', placeholder: 'p. es. Via San Gottardo 3, 6830 Chiasso', sirka: 46 },
    ] },
    { id: 'wohnung', nazev: 'Abitazione', pole: [
      { id: 'objekt', typ: 'text', popis: 'Indirizzo dell’abitazione', placeholder: 'p. es. Via Lugano 7, 6500 Bellinzona', sirka: 46 },
      { id: 'lage', typ: 'text', popis: 'Posizione nello stabile', placeholder: 'p. es. 2° piano a sinistra', sirka: 18, polovina: true },
      { id: 'zimmer', typ: 'cislo', popis: 'Locali', napoveda: 'Secondo l’uso svizzero (p. es. 3,5 locali).', placeholder: 'p. es. 3,5', sirka: 4, polovina: true },
      { id: 'flaeche', typ: 'cislo', popis: 'Superficie abitabile', napoveda: 'Indicazione approssimativa.', placeholder: 'p. es. 72', jednotka: 'm²', sirka: 8, polovina: true },
      { id: 'nebenraeume', typ: 'text', popis: 'Locati con l’abitazione (facoltativo)', napoveda: 'Cantina, posteggio, solaio.', placeholder: 'p. es. cantina n. 3', sirka: 46 },
      { id: 'ausstattung', typ: 'textarea', popis: 'Arredamento (facoltativo)', napoveda: 'Cucina attrezzata, apparecchi. Dettagli nel verbale di consegna.', placeholder: 'p. es. cucina attrezzata con frigorifero, piano cottura e lavastoviglie', sirka: 64 },
    ] },
    { id: 'zahlung', nazev: 'Inizio, pigione e garanzia', pole: [
      { id: 'beginn', typ: 'datum', popis: 'Inizio della locazione', sirka: 14, polovina: true },
      { id: 'uebergabe', typ: 'datum', popis: 'Consegna dell’abitazione', napoveda: 'Consegna delle chiavi.', sirka: 14, polovina: true },
      { id: 'miete', typ: 'castka', popis: 'Pigione netta (CHF al mese)', napoveda: 'Senza le spese accessorie.', placeholder: 'p. es. 1450', sirka: 12, polovina: true },
      { id: 'nebenkosten', typ: 'castka', popis: 'Acconto spese accessorie (CHF al mese)', napoveda: 'Solo per le spese elencate nel contratto.', placeholder: 'p. es. 180', sirka: 12, polovina: true },
      { id: 'nk_liste', typ: 'text', popis: 'Quali spese accessorie', napoveda: 'Elencatele una per una – altrimenti sono comprese nella pigione.', placeholder: 'p. es. riscaldamento, acqua calda, custode, pulizia delle parti comuni', sirka: 64 },
      { id: 'faellig', typ: 'cislo', popis: 'Pagabile entro il (giorno del mese)', napoveda: 'Usuale: anticipatamente, il 1° del mese.', placeholder: 'p. es. 1', sirka: 4, polovina: true },
      { id: 'termine', typ: 'text', popis: 'Termini di disdetta', napoveda: 'Termini usuali del luogo o quelli pattuiti.', placeholder: 'p. es. fine di ogni mese eccetto dicembre', sirka: 46 },
      { id: 'iban', typ: 'text', popis: 'IBAN del locatore', placeholder: 'CH…', sirka: 30 },
      { id: 'kaution', typ: 'castka', popis: 'Deposito di garanzia (CHF)', napoveda: 'Al massimo tre pigioni mensili.', placeholder: 'p. es. 4350', sirka: 12, polovina: true },
      { id: 'tiere', typ: 'volba', popis: 'Animali domestici', napoveda: 'I piccoli animali sono sempre permessi; per cani e gatti vale l’accordo.', moznosti: [ { hodnota: 'erlaubt', popis: 'Permessi' }, { hodnota: 'zustimmung', popis: 'Con il consenso del locatore' } ] },
      { id: 'ort', typ: 'text', popis: 'Luogo', placeholder: 'p. es. Lugano', sirka: 18, polovina: true, vychozi: { obecZ: 'v_adresse' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { miete_worte: (d) => importoInLettere(d.miete), kaution_worte: (d) => importoInLettere(d.kaution) },
  clanky: [
    { nadpis: 'Parti', odstavce: ['**Locatore / locatrice:** {{v_name}}, domiciliato/a in {{v_adresse}}', '**Conduttore / conduttrice:** {{m_name}}, nato/a il {{m_geburt}}, finora domiciliato/a in {{m_adresse}}'] },
    { nadpis: 'Ente locato', vysvetleni: 'Cosa viene locato.', odstavce: [
      'È locata a scopo abitativo l’abitazione {{lage}} dello stabile {{objekt}}, composta da {{zimmer}} locali con una superficie abitabile di circa {{flaeche}}.',
      'Locati con l’abitazione: {{nebenraeume}}. Arredamento: {{ausstattung}}. Lo stato alla consegna è riportato in un verbale di consegna.',
    ] },
    { nadpis: 'Durata della locazione', odstavce: ['La locazione inizia il {{beginn}} ed è conclusa per una durata indeterminata. L’abitazione è consegnata il {{uebergabe}}.'] },
    { nadpis: 'Pigione e spese accessorie', vysvetleni: 'Quanto costa l’abitazione e cosa è compreso.', odstavce: [
      'La pigione mensile netta è di {{miete}} (in lettere: {{miete_worte}}).',
      'Inoltre il conduttore paga un acconto mensile di {{nebenkosten}} per le seguenti spese accessorie: {{nk_liste}}. Il locatore allestisce un conteggio annuale. Le spese accessorie non elencate sono comprese nella pigione (art. 257a CO).',
      'La pigione e l’acconto sono pagabili mensilmente e anticipatamente entro il giorno {{faellig}} del mese sul conto IBAN {{iban}}.',
    ] },
    { nadpis: 'Deposito di garanzia', vysvetleni: 'La garanzia è bloccata a nome del conduttore.', odstavce: [
      'Il conduttore presta una garanzia di {{kaution}} (in lettere: {{kaution_worte}}).',
      'La garanzia è depositata presso una banca su un conto di risparmio o un deposito a nome del conduttore (art. 257e CO). La banca può restituirla solo con il consenso di entrambe le parti o in base a una decisione passata in giudicato.',
    ] },
    { nadpis: 'Uso dell’abitazione', odstavce: [
      'Il conduttore usa l’abitazione con la diligenza necessaria e segnala senza indugio i difetti. Rinnovazioni e modifiche richiedono il consenso scritto del locatore.',
      'Il conduttore elimina a sue spese i difetti di lieve entità eliminabili con piccoli lavori di pulizia o di manutenzione (art. 259 CO).',
      'La sublocazione richiede il consenso del locatore, che può rifiutarlo solo per i motivi dell’art. 262 CO.',
      { volba: 'tiere', uvodVzor: 'Animali domestici (barrate):', moznosti: { erlaubt: 'La detenzione di animali domestici usuali è permessa, purché i vicini non siano disturbati e l’abitazione non sia danneggiata.', zustimmung: 'La detenzione di cani e gatti richiede il consenso del locatore. I piccoli animali sono permessi.' } },
    ] },
    { nadpis: 'Disdetta e restituzione', odstavce: [
      'Ciascuna parte può disdire la locazione con un preavviso di tre mesi per i seguenti termini: {{termine}} (art. 266c CO). La disdetta deve essere data per iscritto; il locatore usa il modulo approvato dal Cantone (art. 266l CO).',
      'Alla fine della locazione il conduttore restituisce l’abitazione pulita, con tutte le chiavi. Non risponde dell’usura risultante da un uso conforme al contratto.',
    ] },
    { nadpis: 'Disposizioni finali', odstavce: [
      'Per il resto si applicano le disposizioni del Codice delle obbligazioni (art. 253 segg. CO).',
      'Ogni modifica richiede la forma scritta. Il contratto è redatto in due esemplari; ciascuna parte ne riceve uno.',
    ] },
  ],
};
