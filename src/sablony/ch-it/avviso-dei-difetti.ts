/** Avviso dei difetti – far valere la garanzia secondo gli art. 197 segg. CO (avviso immediato art. 201, redibizione o riduzione art. 205, prescrizione art. 210). */
import type { Sablona } from '../typy';
import { isoDatum, naDatum, pridejDny } from '../terminy';
import { formatDatum } from '../dokument';
import { CO_197, CO_201, CO_205, CO_210, CH_RESTITUIRE, linkCO, piede } from './fonti';

export const avvisoDifetti: Sablona = {
  kod: 'CHIT-AVVISO-DIFETTI', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Avviso dei difetti', podnadpis: 'reclamo in garanzia secondo gli art. 197 segg. CO',
  souborPdf: 'avviso-dei-difetti', paticka: piede('CHIT-AVVISO-DIFETTI'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'L’acquirente', vpravo: 'ricevuto per il venditore (data, firma)' },
  slovo: { n: 'avviso dei difetti', g: 'dell’avviso dei difetti', a: 'l’avviso dei difetti', l: 'nell’avviso dei difetti' },
  cislovatClanky: false, cislovatOdstavce: false,
  pripominky: (d) => {
    const od = naDatum(d.datum);
    const giorni = Number(d.lhuta) || 14;
    return od ? [{ nazev: 'Attesa la risposta del venditore', datum: isoDatum(pridejDny(od, giorni)), popis: 'Senza soluzione entro questa data: consulenza presso un’associazione dei consumatori o l’autorità di conciliazione.' }] : [];
  },
  coDal: [
    'Spedite l’avviso dei difetti appena scoperto il difetto – per raccomandata o per e-mail – e conservate la prova.',
    'Tenete la merce a disposizione per l’esame e documentate il difetto con foto.',
    'Senza accordo possono aiutarvi le associazioni dei consumatori (in Ticino l’ACSI) o l’autorità di conciliazione del vostro domicilio.',
  ],
  kontrola: [
    `I difetti devono essere segnalati immediatamente dopo la scoperta, altrimenti la merce si considera accettata (${linkCO('201')}).`,
    `Secondo la legge potete annullare la vendita (azione redibitoria) o ridurre il prezzo; per una cosa fungibile anche chiederne la sostituzione (${linkCO('205')}). Avete diritto a una riparazione solo se è stata pattuita – spesso nelle condizioni generali o nella garanzia.`,
    `I diritti si prescrivono in due anni dalla consegna; per una cosa d’occasione il commerciante può ridurre il termine a un anno (${linkCO('210')}).`,
    'Molti commercianti limitano la garanzia alla riparazione o alla sostituzione nelle condizioni generali – verificate le condizioni di garanzia.',
    'Descrivete il difetto in modo concreto e fotografatelo; conservate lo scontrino (o l’estratto conto, la conferma d’ordine).',
  ],
  zdroje: [CO_197, CO_201, CO_205, CO_210, CH_RESTITUIRE],
  kroky: [
    { id: 'haendler', nazev: 'Venditore', pole: [
      { id: 'pr_nazev', typ: 'text', popis: 'Venditore (ragione sociale)', placeholder: 'p. es. Elettro Ceresio SA', sirka: 34 },
      { id: 'pr_adresa', typ: 'text', popis: 'Indirizzo', sirka: 46 },
    ] },
    { id: 'ware', nazev: 'Merce e difetto', pole: [
      { id: 'zbozi', typ: 'text', popis: 'Merce', placeholder: 'p. es. lavatrice Bosch WAN28264, n. di serie FD9803', sirka: 46 },
      { id: 'doklad', typ: 'text', popis: 'Numero di fattura o d’ordine', sirka: 18, polovina: true },
      { id: 'koupeno', typ: 'datum', popis: 'Acquistato / ricevuto il', sirka: 14, polovina: true },
      { id: 'vada', typ: 'textarea', popis: 'Descrizione del difetto', placeholder: 'p. es. si ferma durante la centrifuga con l’errore E18', sirka: 64 },
      { id: 'projevila', typ: 'datum', popis: 'Difetto constatato il', sirka: 14, polovina: true },
    ] },
    { id: 'forderung', nazev: 'Cosa chiedete', pole: [
      { id: 'pozadavek', typ: 'volba', popis: 'Cosa chiedete?', moznosti: [ { hodnota: 'oprava', popis: 'Riparazione (secondo garanzia o condizioni generali)' }, { hodnota: 'vymena', popis: 'Sostituzione con una cosa senza difetti' }, { hodnota: 'minderung', popis: 'Riduzione del prezzo' }, { hodnota: 'wandelung', popis: 'Annullamento della vendita' } ] },
      { id: 'lhuta', typ: 'cislo', popis: 'Termine di risposta in giorni', napoveda: 'L’uso e un termine ragionevole sono di solito 14 giorni.', placeholder: '14', sirka: 4, polovina: true },
      { id: 'p_jmeno', typ: 'text', popis: 'Il vostro nome e cognome', placeholder: 'p. es. Laura Rezzonico', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Il vostro indirizzo', sirka: 46 },
      { id: 'p_kontakt', typ: 'text', popis: 'E-mail o telefono', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Luogo', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: {
    frist_bis: (d) => {
      const od = naDatum(d.datum);
      return od ? formatDatum(isoDatum(pridejDny(od, Number(d.lhuta) || 14)), 'it-CH') : '';
    },
  },
  clanky: [
    { nadpis: 'A', odstavce: ['{{pr_nazev}}, {{pr_adresa}}'] },
    { nadpis: 'Avviso dei difetti', vysvetleni: 'Cosa è difettoso e cosa chiedete.', odstavce: [
      'Gentili signore e signori,',
      'il {{koupeno}} ho acquistato da voi la merce seguente: {{zbozi}} (n. del documento {{doklad}}).',
      'La merce è difettosa: {{vada}} Ho scoperto il difetto il {{projevila}} e ve ne do avviso con la presente conformemente all’art. 201 CO.',
      { volba: 'pozadavek', uvod: 'Chiedo', uvodVzor: 'Chiedo (barrate):', moznosti: { oprava: 'l’eliminazione del difetto (riparazione) secondo la garanzia o le vostre condizioni.', vymena: 'la fornitura di una cosa senza difetti (art. 206 CO).', minderung: 'un’adeguata riduzione del prezzo (art. 205 CO).', wandelung: 'l’annullamento della vendita contro restituzione della merce e rimborso del prezzo (art. 205 CO).' } },
      'Vi prego di comunicarmi entro il {{frist_bis}} come intendete risolvere la questione. Restano riservate tutte le altre pretese.',
      'Vi prego di confermarmi la ricezione del presente avviso.',
      'Distinti saluti.',
    ] },
    { nadpis: 'Acquirente', odstavce: ['{{p_jmeno}}, {{p_adresa}}, {{p_kontakt}}'] },
  ],
};
