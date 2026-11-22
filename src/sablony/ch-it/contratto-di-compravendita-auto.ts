/**
 * Contratto di compravendita di un veicolo d’occasione tra privati – Svizzera italiana (art. 184 segg. CO).
 * Esclusione della garanzia ammessa tra privati, salvo difetti dissimulati con dolo (art. 199 CO); verifica e avviso immediato
 * dei difetti (art. 201 CO). Le targhe restano al detentore; l’acquirente immatricola il veicolo con il proprio attestato
 * d’assicurazione presso l’Ufficio della circolazione (ch.ch). Testo giuridico ripreso dal modello CH-KAUF-AUTO verificato.
 */
import type { Sablona } from '../typy';
import { importoInLettere } from './numeri';
import { CO_184, CO_199, CO_201, CO_210, CH_IMMATRICOLAZIONE, CH_COLLAUDO, ASA, CONSIGLIO_IDENTITA, CONSIGLIO_PAGAMENTO, linkCO, piede } from './fonti';

export const venditaAuto: Sablona = {
  kod: 'CHIT-VENDITA-AUTO', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Contratto di compravendita di un veicolo d’occasione', podnadpis: 'vendita tra privati secondo gli art. 184 segg. del Codice delle obbligazioni (CO)',
  souborPdf: 'contratto-di-compravendita-auto', paticka: piede('CHIT-VENDITA-AUTO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'Il venditore / la venditrice', vpravo: 'L’acquirente' },
  slovo: { n: 'contratto', g: 'del contratto', a: 'il contratto', l: 'nel contratto' },
  coDal: [
    'Stampate il contratto in due esemplari; entrambe le parti firmano entrambi.',
    'Consegnate il veicolo, le chiavi e la licenza di circolazione. Il venditore tiene le targhe – appartengono al detentore, non all’auto.',
    'Venditore: usate le targhe per un altro veicolo o depositatele presso l’Ufficio della circolazione, e informate la vostra assicurazione.',
    'Acquirente: prima di circolare fate immatricolare il veicolo presso l’Ufficio della circolazione del vostro Cantone con il vostro attestato d’assicurazione e la licenza di circolazione.',
  ],
  kontrola: [
    'Il venditore è iscritto come detentore nella licenza di circolazione – o può provare che l’auto gli appartiene (p. es. contratto d’acquisto). In caso di leasing, la società di leasing deve dare il suo consenso.',
    'Il numero di telaio della licenza di circolazione corrisponde a quello del veicolo.',
    `L’esclusione della garanzia è usuale e ammessa tra privati, ma non vale per i difetti che il venditore ha dissimulato con dolo (${linkCO('199')}). Indicate onestamente i difetti e gli incidenti noti.`,
    `Acquirente: verificate subito il veicolo e segnalate immediatamente i difetti (${linkCO('201')}).`,
    `Le targhe appartengono al detentore e non seguono l’auto. Senza targhe né assicurazione a suo nome, l’acquirente non può circolare ([ch.ch](${CH_IMMATRICOLAZIONE.url})).`,
    `È il Cantone a decidere quando serve un nuovo collaudo – informatevi presso l’Ufficio della circolazione ([asa.ch](${ASA.url})).`,
    CONSIGLIO_IDENTITA,
    CONSIGLIO_PAGAMENTO,
  ],
  zdroje: [CO_184, CO_199, CO_201, CO_210, CH_IMMATRICOLAZIONE, CH_COLLAUDO],
  kroky: [
    { id: 'parteien', nazev: 'Venditore e acquirente', popis: 'Non conoscete ancora i dati dell’acquirente? Lasciate vuoto: resteranno righe da completare.', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Venditore – nome e cognome', placeholder: 'p. es. Marco Bernasconi', sirka: 34, autocomplete: 'name' },
      { id: 'p_narozeni', typ: 'datum', popis: 'Data di nascita', sirka: 14, polovina: true },
      { id: 'p_doklad', typ: 'text', popis: 'N. del passaporto o della carta d’identità', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Indirizzo', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Acquirente – nome e cognome', placeholder: 'p. es. Laura Rezzonico', sirka: 34 },
      { id: 'k_narozeni', typ: 'datum', popis: 'Data di nascita', sirka: 14, polovina: true },
      { id: 'k_doklad', typ: 'text', popis: 'N. del passaporto o della carta d’identità', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Indirizzo', placeholder: 'p. es. Viale Stazione 5, 6500 Bellinzona', sirka: 46 },
    ] },
    { id: 'fahrzeug', nazev: 'Veicolo', popis: 'Riprendete i dati dalla licenza di circolazione.', pole: [
      { id: 'znacka', typ: 'text', popis: 'Marca e tipo', placeholder: 'p. es. Fiat Tipo', sirka: 32 },
      { id: 'vin', typ: 'vin', popis: 'Numero di telaio (VIN)', napoveda: '17 caratteri, campo 23 della licenza di circolazione.', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Targhe (restano al venditore)', placeholder: 'p. es. TI 123456', sirka: 12, polovina: true },
      { id: 'ez', typ: 'datum', popis: '1a messa in circolazione', sirka: 14, polovina: true },
      { id: 'zb2', typ: 'text', popis: 'Numero di matricola', napoveda: 'Campo 18 della licenza di circolazione.', placeholder: 'p. es. 123.456.789', sirka: 14, polovina: true },
      { id: 'hu', typ: 'text', popis: 'Ultimo collaudo', placeholder: 'p. es. 05/2025', sirka: 10, polovina: true },
      { id: 'km', typ: 'cislo', popis: 'Chilometraggio al contachilometri', jednotka: 'km', sirka: 12, polovina: true },
    ] },
    { id: 'zustand', nazev: 'Stato e garanzia', pole: [
      { id: 'unfall', typ: 'volba', popis: 'Danni da incidente', moznosti: [ { hodnota: 'nein', popis: 'Nessun danno da incidente noto' }, { hodnota: 'ja', popis: 'Sono noti i seguenti danni da incidente' } ] },
      { id: 'unfall_text', typ: 'textarea', popis: 'Danni da incidente', sirka: 64, zobrazitKdyz: { pole: 'unfall', je: 'ja' } },
      { id: 'maengel', typ: 'textarea', popis: 'Difetti noti (facoltativo)', napoveda: 'Indicate tutto ciò che sapete – un difetto dissimulato annulla l’esclusione della garanzia.', placeholder: 'p. es. climatizzatore guasto', sirka: 64 },
      { id: 'haftung', typ: 'volba', popis: 'Garanzia', napoveda: 'Tra privati la garanzia può essere esclusa – ma non per i difetti dissimulati con dolo.', moznosti: [ { hodnota: 'aus', popis: 'Esclusa (usuale tra privati)' }, { hodnota: 'gesetz', popis: 'Garanzia legale' } ] },
      { id: 'klice', typ: 'cislo', popis: 'Numero di chiavi', sirka: 4, polovina: true },
    ] },
    { id: 'preis', nazev: 'Prezzo e consegna', pole: [
      { id: 'cena', typ: 'castka', popis: 'Prezzo di vendita (CHF)', napoveda: 'Aggiungiamo l’importo in lettere.', placeholder: 'p. es. 9500', sirka: 14, polovina: true },
      { id: 'platba', typ: 'volba', popis: 'Pagamento', moznosti: [ { hodnota: 'bar', popis: 'In contanti alla consegna' }, { hodnota: 'ueberweisung', popis: 'Bonifico prima della consegna' } ] },
      { id: 'ucet', typ: 'text', popis: 'IBAN del venditore', placeholder: 'CH…', sirka: 30, zobrazitKdyz: { pole: 'platba', je: 'ueberweisung' } },
      { id: 'predani_cas', typ: 'text', popis: 'Ora della consegna', napoveda: 'Utile in caso di multa o incidente dopo la vendita.', placeholder: 'p. es. 14.30', sirka: 8, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Luogo', placeholder: 'p. es. Lugano', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum_podpisu', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_slovy: (d) => importoInLettere(d.cena) },
  clanky: [
    { nadpis: 'Parti', vysvetleni: 'Chi conclude il contratto.', odstavce: [
      '**Venditore / venditrice:** {{p_jmeno}}, nato/a il {{p_narozeni}}, passaporto/CI n. {{p_doklad}}, domiciliato/a in {{p_adresa}}',
      '**Acquirente:** {{k_jmeno}}, nato/a il {{k_narozeni}}, passaporto/CI n. {{k_doklad}}, domiciliato/a in {{k_adresa}}',
    ] },
    { nadpis: 'Oggetto della vendita', vysvetleni: 'Quale veicolo viene venduto – è determinante il numero di telaio.', odstavce: [
      'Il venditore vende all’acquirente il veicolo a motore marca/tipo {{znacka}}, numero di telaio {{vin}}, numero di matricola {{zb2}}, 1a messa in circolazione {{ez}}, ultimo collaudo {{hu}}, finora immatricolato con le targhe {{spz}}.',
      'Il venditore garantisce di essere proprietario del veicolo e che questo è libero da diritti di terzi, in particolare che non è oggetto di leasing, pegno o riserva di proprietà.',
    ] },
    { nadpis: 'Stato del veicolo', vysvetleni: 'Ciò che il venditore sa del veicolo.', odstavce: [
      'Il chilometraggio al contachilometri è di {{km}}. Per quanto noto al venditore, corrisponde ai chilometri effettivamente percorsi.',
      { volba: 'unfall', uvodVzor: 'Danni da incidente (barrate):', moznosti: { nein: 'Il venditore non è a conoscenza di alcun danno da incidente.', ja: 'Il venditore è a conoscenza dei seguenti danni da incidente: {{unfall_text}}' } },
      'Difetti noti: {{maengel}}',
      'L’acquirente ha avuto la possibilità di esaminare e provare il veicolo.',
    ] },
    { nadpis: 'Garanzia', vysvetleni: 'Se il venditore risponde in seguito dei difetti.', odstavce: [
      { volba: 'haftung', uvodVzor: 'Garanzia (barrate):', moznosti: {
        aus: 'Il veicolo è venduto nello stato in cui è stato esaminato e provato. Ogni garanzia per i difetti è esclusa. L’esclusione non si applica ai difetti che il venditore ha dissimulato con dolo (art. 199 CO) né alle qualità espressamente promesse nel presente contratto.',
        gesetz: 'Il venditore risponde dei difetti secondo le disposizioni legali (art. 197 segg. CO). L’acquirente verifica il veicolo dopo la consegna e segnala immediatamente i difetti (art. 201 CO).',
      } },
    ] },
    { nadpis: 'Prezzo e consegna', vysvetleni: 'Quanto, come e quando.', odstavce: [
      'Il prezzo di vendita è di **{{cena}}** (in lettere: {{cena_slovy}}).',
      { volba: 'platba', uvodVzor: 'Pagamento (barrate):', moznosti: { bar: 'Il prezzo è pagato in contanti alla consegna. Il venditore ne conferma la ricezione con la sua firma.', ueberweisung: 'Il prezzo è versato prima della consegna sul conto del venditore IBAN {{ucet}}.' } },
      'La consegna avviene il {{datum_podpisu}} alle ore {{predani_cas}} con {{klice}} chiave/i e la licenza di circolazione. Utili e rischi passano all’acquirente con la consegna.',
    ] },
    { nadpis: 'Targhe, assicurazione e immatricolazione', vysvetleni: 'In Svizzera le targhe restano al venditore.', odstavce: [
      'Le targhe restano al venditore. Egli annuncia la vendita alla sua assicurazione di responsabilità civile e usa le targhe per un altro veicolo o le deposita presso l’Ufficio della circolazione.',
      'Prima della prima corsa, l’acquirente fa immatricolare il veicolo con il proprio attestato d’assicurazione presso l’Ufficio della circolazione del suo Cantone di domicilio. Dalla consegna sopporta tutte le spese e le multe legate all’uso del veicolo.',
      'Ogni modifica del presente contratto richiede la forma scritta. Ciascuna parte riceve un esemplare.',
    ] },
  ],
};
