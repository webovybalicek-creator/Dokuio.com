/** Contratto di comodato – prestito gratuito di una cosa (art. 305 segg. CO). Senza durata né uso determinati, il comodante può chiedere la cosa in ogni tempo (art. 310 CO). */
import type { Sablona } from '../typy';
import { CO_305, CONSIGLIO_IDENTITA, linkCO, piede } from './fonti';

export const comodato: Sablona = {
  kod: 'CHIT-COMODATO', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Contratto di comodato', podnadpis: 'prestito gratuito di una cosa secondo gli art. 305 segg. del Codice delle obbligazioni (CO)',
  souborPdf: 'contratto-di-comodato', paticka: piede('CHIT-COMODATO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Il comodante / la comodante', vpravo: 'Il comodatario / la comodataria' },
  slovo: { n: 'contratto', g: 'del contratto', a: 'il contratto', l: 'nel contratto' },
  pripominky: (d) => (d.doba === 'datum' && typeof d.vratit_do === 'string' && d.vratit_do ? [{ nazev: 'Restituzione della cosa prestata', datum: d.vratit_do, popis: 'Esaminate la cosa insieme alla restituzione e fatevi confermare la restituzione.' }] : []),
  coDal: ['Stampate due esemplari; entrambe le parti firmano entrambi.', 'Alla consegna esaminate la cosa insieme e completate il contratto in caso di difetti.', 'Alla restituzione fatevi confermare lo stato della cosa.'],
  kontrola: [
    `Nel comodato il comodante concede gratuitamente l’uso di una cosa; il comodatario restituisce la stessa cosa (${linkCO('305')}). Se si paga un prezzo, si tratta di una locazione.`,
    'Il comodatario può fare della cosa solo l’uso pattuito e non può cederla a un terzo; altrimenti risponde anche del caso fortuito (art. 306 CO). Sopporta le spese ordinarie di manutenzione (art. 307 CO).',
    'Fissate la durata o l’uso: se nessuno dei due è determinato, il comodante può chiedere la cosa in ogni tempo (art. 310 CO).',
    'Descrivete la cosa con esattezza (fabbricante, modello, numero di serie, accessori) e annotate il suo stato alla consegna.',
    CONSIGLIO_IDENTITA,
  ],
  zdroje: [CO_305],
  kroky: [
    { id: 'strany', nazev: 'Comodante e comodatario', popis: 'Il comodante cede la cosa gratuitamente, il comodatario la usa e la restituisce.', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Comodante – nome e cognome', placeholder: 'p. es. Marco Bernasconi', sirka: 34, autocomplete: 'name' },
      { id: 'p_id', typ: 'text', popis: 'Data di nascita del comodante (facoltativo)', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Indirizzo del comodante', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
      { id: 'v_jmeno', typ: 'text', popis: 'Comodatario – nome e cognome', placeholder: 'p. es. Luca Ferrari', sirka: 34 },
      { id: 'v_id', typ: 'text', popis: 'Data di nascita del comodatario (facoltativo)', sirka: 14, polovina: true },
      { id: 'v_adresa', typ: 'text', popis: 'Indirizzo del comodatario', sirka: 46 },
    ] },
    { id: 'vec', nazev: 'Cosa', pole: [
      { id: 'vec', typ: 'textarea', popis: 'Cosa prestata', napoveda: 'Fabbricante, modello, numero di serie, accessori.', placeholder: 'p. es. rimorchio per auto, targa TI 1234, con telone e chiave', sirka: 70 },
      { id: 'stav', typ: 'text', popis: 'Stato alla consegna', placeholder: 'p. es. funzionante, graffio sul parafango sinistro', sirka: 56 },
      { id: 'hodnota', typ: 'castka', popis: 'Valore della cosa (CHF, facoltativo)', napoveda: 'Per il caso di perdita o distruzione.', sirka: 14, polovina: true },
      { id: 'ucel', typ: 'text', popis: 'Uso previsto', placeholder: 'p. es. trasloco', sirka: 46 },
    ] },
    { id: 'doba', nazev: 'Durata e restituzione', pole: [
      { id: 'predano', typ: 'datum', popis: 'Data della consegna', sirka: 14, polovina: true, vychozi: 'dnes' },
      { id: 'doba', typ: 'volba', popis: 'Per quanto tempo', moznosti: [ { hodnota: 'datum', popis: 'Fino a una data determinata' }, { hodnota: 'ucel', popis: 'Finché l’uso è compiuto' } ] },
      { id: 'vratit_do', typ: 'datum', popis: 'Restituzione al più tardi il', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'datum' } },
      { id: 'misto_vraceni', typ: 'text', popis: 'Luogo della restituzione', placeholder: 'p. es. all’indirizzo del comodante', sirka: 46 },
      { id: 'misto', typ: 'text', popis: 'Luogo', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Parti', odstavce: ['**Comodante:** {{p_jmeno}}, nato/a il {{p_id}}, {{p_adresa}} (di seguito «comodante»)', '**Comodatario / comodataria:** {{v_jmeno}}, nato/a il {{v_id}}, {{v_adresa}} (di seguito «comodatario»)'] },
    { nadpis: 'Oggetto del comodato', vysvetleni: 'Il comodante permette l’uso gratuito della cosa.', odstavce: [
      'Il comodante concede gratuitamente al comodatario l’uso della cosa seguente: {{vec}}.',
      'Stato alla consegna: {{stav}}. Valore della cosa: {{hodnota}}.',
      'La cosa è concessa per l’uso seguente: {{ucel}}. Il comodante non è a conoscenza di alcun difetto occulto che non abbia segnalato.',
    ] },
    { nadpis: 'Durata e restituzione', odstavce: [
      'La cosa è stata consegnata il {{predano}}.',
      { volba: 'doba', uvodVzor: 'Durata (barrate):', moznosti: { datum: 'Il comodato termina il {{vratit_do}}. Il comodatario restituisce la cosa al più tardi in quel giorno.', ucel: 'Il comodato termina quando l’uso pattuito è compiuto. Il comodatario restituisce poi la cosa senza indugio.' } },
      'Il comodatario restituisce la cosa nel luogo seguente: {{misto_vraceni}}, nello stato in cui l’ha ricevuta, riservata l’usura risultante da un uso conforme al contratto.',
      'Il comodante può chiedere la cosa prima del termine se il comodatario ne fa un uso contrario al contratto, la deteriora o la cede a un terzo, o se egli stesso ne ha un bisogno urgente e imprevisto (art. 309 CO). Il comodato termina con la morte del comodatario (art. 311 CO).',
    ] },
    { nadpis: 'Uso della cosa', vysvetleni: 'Come viene usata la cosa e chi sopporta quali spese.', odstavce: [
      'Il comodatario fa della cosa un uso conforme al contratto e la protegge da danni, perdita e distruzione.',
      'Il comodatario non cede la cosa a terzi senza l’autorizzazione del comodante.',
      'Il comodatario sopporta le spese ordinarie di manutenzione (art. 307 CO). Segnala senza indugio al comodante le riparazioni importanti.',
    ] },
    { nadpis: 'Disposizioni finali', odstavce: ['Per il resto si applicano le disposizioni sul comodato (art. 305 segg. CO).', 'Ogni modifica richiede la forma scritta. Il contratto è redatto in due esemplari; ciascuna parte ne riceve uno.'] },
  ],
};
