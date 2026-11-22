/** Diffida di pagamento – messa in mora (art. 102 CO) con interesse moratorio del 5 % annuo (art. 104 CO) – Svizzera italiana. */
import type { Sablona } from '../typy';
import { importoInLettere } from './numeri';
import { CO_102, CO_104, linkCO, piede } from './fonti';

export const diffida: Sablona = {
  kod: 'CHIT-DIFFIDA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Diffida di pagamento', podnadpis: 'messa in mora secondo gli art. 102 e 104 del Codice delle obbligazioni (CO)',
  souborPdf: 'diffida-di-pagamento', paticka: piede('CHIT-DIFFIDA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Il creditore / la creditrice', vpravo: 'ricevuto (in caso di consegna a mano)' },
  slovo: { n: 'diffida', g: 'della diffida', a: 'la diffida', l: 'nella diffida' },
  cislovatClanky: false, cislovatOdstavce: false,
  pripominky: (d) => (typeof d.zahlen_bis === 'string' && d.zahlen_bis ? [{ nazev: 'Scade il termine di pagamento della diffida', datum: d.zahlen_bis, popis: 'Verificate il pagamento. Altrimenti, domanda d’esecuzione all’Ufficio esecuzioni.' }] : []),
  coDal: [
    'Firmate e spedite la lettera per raccomandata – potrete così provarne la ricezione.',
    'Conservate una copia e la ricevuta postale.',
    'Se l’altra parte non paga, potete avviare un’esecuzione presso l’Ufficio esecuzioni del domicilio del debitore.',
  ],
  kontrola: [
    `La diffida mette il debitore in mora solo dopo la scadenza (${linkCO('102')}). Se è stato pattuito un giorno di scadenza preciso, la mora sopraggiunge senza diffida.`,
    `Interesse moratorio per i debiti pecuniari: 5 % all’anno, anche se era stato pattuito un interesse contrattuale più basso (${linkCO('104')}).`,
    'Indicate esattamente il credito: numero della fattura o contratto, data, importo.',
    'Spedite la lettera per raccomandata – in caso di controversia dovete provarne la ricezione.',
    'Minacciate solo passi legali (esecuzione) – niente esposizione pubblica né altre pressioni.',
  ],
  zdroje: [CO_102, CO_104],
  kroky: [
    { id: 'parteien', nazev: 'Creditore e debitore', pole: [
      { id: 'k_name', typ: 'text', popis: 'Creditore – nome o ragione sociale', placeholder: 'p. es. Marco Bernasconi', sirka: 34, autocomplete: 'name' },
      { id: 'k_adresse', typ: 'text', popis: 'Indirizzo del creditore', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
      { id: 'k_kontakt', typ: 'text', popis: 'Telefono o e-mail (facoltativo)', sirka: 30 },
      { id: 'p_name', typ: 'text', popis: 'Debitore – nome o ragione sociale', placeholder: 'p. es. Luca Ferrari', sirka: 34 },
      { id: 'p_adresse', typ: 'text', popis: 'Indirizzo del debitore', placeholder: 'p. es. Via San Gottardo 3, 6830 Chiasso', sirka: 46 },
    ] },
    { id: 'forderung', nazev: 'Credito', pole: [
      { id: 'betrag', typ: 'castka', popis: 'Importo dovuto (CHF)', placeholder: 'p. es. 850', sirka: 14, polovina: true },
      { id: 'faellig', typ: 'datum', popis: 'Esigibile dal', sirka: 14, polovina: true },
      { id: 'grund', typ: 'text', popis: 'Causa del credito', napoveda: 'Fattura o contratto con numero e data.', placeholder: 'p. es. fattura n. 2026-041 del 01.10.2026', sirka: 56 },
      { id: 'stufe', typ: 'volba', popis: 'Quale diffida?', moznosti: [ { hodnota: 'erste', popis: 'Primo sollecito' }, { hodnota: 'letzte', popis: 'Ultimo sollecito prima dell’esecuzione' } ] },
      { id: 'zinsen', typ: 'volba', popis: 'Chiedere l’interesse moratorio?', moznosti: [ { hodnota: 'ja', popis: 'Sì, interesse moratorio legale' }, { hodnota: 'nein', popis: 'No' } ] },
    ] },
    { id: 'zahlung', nazev: 'Termine e pagamento', pole: [
      { id: 'zahlen_bis', typ: 'datum', popis: 'Pagare al più tardi il', napoveda: 'L’uso è da 7 a 14 giorni.', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN', placeholder: 'CH…', sirka: 30 },
      { id: 'verwendung', typ: 'text', popis: 'Comunicazione', placeholder: 'p. es. fattura 2026-041', sirka: 24, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Luogo', placeholder: 'p. es. Lugano', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresse' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { betrag_worte: (d) => importoInLettere(d.betrag) },
  clanky: [
    { nadpis: 'Mittente e destinatario', odstavce: [
      '**Creditore / creditrice:** {{k_name}}, {{k_adresse}}, contatto {{k_kontakt}}',
      '**Debitore / debitrice:** {{p_name}}, {{p_adresse}}',
    ] },
    { nadpis: 'Diffida di pagamento', vysvetleni: 'Cosa è dovuto, da quando e entro quando pagare.', odstavce: [
      { volba: 'stufe', uvodVzor: 'Oggetto (barrate):', moznosti: { erste: '**Oggetto: Diffida di pagamento – {{grund}}**', letzte: '**Oggetto: Ultima diffida prima dell’esecuzione – {{grund}}**' } },
      'Gentili signore e signori,',
      'In virtù di {{grund}}, un importo di {{betrag}} (in lettere: {{betrag_worte}}) è esigibile dal {{faellig}}. A oggi non risulta alcun pagamento.',
      'Vi invito a versare l’importo dovuto al più tardi il {{zahlen_bis}} sul conto seguente: IBAN {{iban}}, comunicazione {{verwendung}}.',
      { volba: 'zinsen', uvodVzor: 'Interesse moratorio (barrate):', moznosti: { ja: 'Con la presente siete messi in mora, sempre che non lo siate già. Chiedo l’interesse moratorio legale del 5 % all’anno (art. 104 CO).', nein: 'In caso di pagamento entro il termine rinuncio a chiedere interessi moratori.' } },
      { volba: 'stufe', uvodVzor: 'Seguito (barrate):', moznosti: { erste: 'Se avete già effettuato il pagamento, vogliate considerare nulla la presente.', letzte: 'In mancanza di pagamento entro il termine avvierò un’esecuzione senza ulteriore avviso. Le spese che ne derivano sarebbero a vostro carico.' } },
      'Distinti saluti.',
    ] },
  ],
};
