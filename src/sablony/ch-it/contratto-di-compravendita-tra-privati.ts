/** Contratto di compravendita di un oggetto d’occasione tra privati – Svizzera italiana (art. 184 segg. CO, esclusione della garanzia art. 199 CO). */
import type { Sablona } from '../typy';
import { importoInLettere } from './numeri';
import { CO_184, CO_199, CO_201, CONSIGLIO_IDENTITA, CONSIGLIO_PAGAMENTO, linkCO, piede } from './fonti';

export const venditaPrivati: Sablona = {
  kod: 'CHIT-VENDITA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Contratto di compravendita', podnadpis: 'vendita di un oggetto d’occasione tra privati (art. 184 segg. CO)',
  souborPdf: 'contratto-di-compravendita-tra-privati', paticka: piede('CHIT-VENDITA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'Il venditore / la venditrice', vpravo: 'L’acquirente' },
  slovo: { n: 'contratto', g: 'del contratto', a: 'il contratto', l: 'nel contratto' },
  coDal: ['Stampate due esemplari; entrambe le parti firmano entrambi.', 'Esaminate l’oggetto insieme prima di firmare; in caso di pagamento in contanti redigete una quietanza.'],
  kontrola: [
    'Descrivete l’oggetto con esattezza: marca, modello, numero di serie, accessori.',
    `Indicate tutti i difetti noti – un difetto dissimulato con dolo rende nulla l’esclusione della garanzia (${linkCO('199')}).`,
    `L’acquirente verifica l’oggetto alla consegna e segnala immediatamente i difetti (${linkCO('201')}).`,
    'Per un apparecchio costoso verificate il numero di serie e chiedete la fattura originale.',
    CONSIGLIO_IDENTITA,
    CONSIGLIO_PAGAMENTO,
  ],
  zdroje: [CO_184, CO_199, CO_201],
  kroky: [
    { id: 'parteien', nazev: 'Venditore e acquirente', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Venditore – nome e cognome', placeholder: 'p. es. Marco Bernasconi', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Indirizzo', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Acquirente – nome e cognome', placeholder: 'p. es. Laura Rezzonico', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Indirizzo', sirka: 46 },
    ] },
    { id: 'sache', nazev: 'Oggetto venduto', pole: [
      { id: 'vec', typ: 'textarea', popis: 'Cosa viene venduto?', placeholder: 'p. es. bicicletta elettrica Cube Kathmandu Hybrid, n. telaio WC12345, con caricatore e due chiavi', sirka: 64 },
      { id: 'vady', typ: 'textarea', popis: 'Difetti noti (facoltativo)', placeholder: 'p. es. graffi sul telaio, autonomia della batteria ca. 60 km', sirka: 64 },
      { id: 'zaruka', typ: 'volba', popis: 'Garanzia', moznosti: [ { hodnota: 'vylouceni', popis: 'Esclusa (usuale tra privati)' }, { hodnota: 'zakon', popis: 'Garanzia legale' } ] },
    ] },
    { id: 'preis', nazev: 'Prezzo e consegna', pole: [
      { id: 'cena', typ: 'castka', popis: 'Prezzo di vendita (CHF)', napoveda: 'Aggiungiamo l’importo in lettere.', sirka: 12, polovina: true },
      { id: 'platba', typ: 'volba', popis: 'Pagamento', moznosti: [ { hodnota: 'bar', popis: 'In contanti alla consegna' }, { hodnota: 'ueberweisung', popis: 'Bonifico prima della consegna' } ] },
      { id: 'ucet', typ: 'text', popis: 'IBAN del venditore', placeholder: 'CH…', sirka: 30, zobrazitKdyz: { pole: 'platba', je: 'ueberweisung' } },
      { id: 'misto', typ: 'text', popis: 'Luogo', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum_podpisu', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_slovy: (d) => importoInLettere(d.cena) },
  clanky: [
    { nadpis: 'Parti', odstavce: ['**Venditore / venditrice:** {{p_jmeno}}, domiciliato/a in {{p_adresa}}', '**Acquirente:** {{k_jmeno}}, domiciliato/a in {{k_adresa}}'] },
    { nadpis: 'Oggetto venduto', vysvetleni: 'Cosa viene venduto e in quale stato.', odstavce: [
      'Il venditore vende all’acquirente il seguente oggetto d’occasione: {{vec}}.',
      'Difetti noti al venditore: {{vady}}',
      'Il venditore garantisce di essere proprietario dell’oggetto e che questo è libero da diritti di terzi.',
    ] },
    { nadpis: 'Prezzo e consegna', odstavce: [
      'Il prezzo di vendita è di **{{cena}}** (in lettere: {{cena_slovy}}).',
      { volba: 'platba', uvodVzor: 'Pagamento (barrate):', moznosti: { bar: 'Il prezzo è pagato in contanti alla consegna; il venditore ne conferma la ricezione con la sua firma.', ueberweisung: 'Il prezzo è versato prima della consegna sul conto IBAN {{ucet}}.' } },
      'La proprietà passa all’acquirente con il pagamento completo del prezzo e la consegna dell’oggetto.',
    ] },
    { nadpis: 'Garanzia', vysvetleni: 'Responsabilità per i difetti dopo la vendita.', odstavce: [
      { volba: 'zaruka', uvodVzor: 'Garanzia (barrate):', moznosti: { vylouceni: 'L’oggetto è venduto nello stato in cui è stato esaminato. Ogni garanzia è esclusa. L’esclusione non si applica ai difetti che il venditore ha dissimulato con dolo (art. 199 CO).', zakon: 'Si applica la garanzia legale secondo gli art. 197 segg. CO.' } },
      'Il contratto è redatto in due esemplari; ciascuna parte ne riceve uno.',
    ] },
  ],
};
