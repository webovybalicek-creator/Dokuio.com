/** Quietanza – conferma di un pagamento in contanti (art. 88 CO: il debitore che paga può esigere una quietanza). */
import type { Sablona } from '../typy';
import { importoInLettere } from './numeri';
import { CO, CO_88, CONSIGLIO_IDENTITA, CONSIGLIO_PAGAMENTO, linkCO, piede } from './fonti';

export const quietanza: Sablona = {
  kod: 'CHIT-QUIETANZA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Quietanza', podnadpis: 'conferma di ricezione di un pagamento in contanti (art. 88 CO)',
  souborPdf: 'quietanza', paticka: piede('CHIT-QUIETANZA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Chi paga', vpravo: 'Chi riceve' },
  slovo: { n: 'quietanza', g: 'della quietanza', a: 'la quietanza', l: 'nella quietanza' },
  cislovatClanky: false, cislovatOdstavce: false,
  coDal: ['Contate il denaro prima di firmare.', 'Ciascuna parte tiene un esemplare firmato; chi paga conserva il suo come prova.'],
  kontrola: [
    'Indicate l’importo in cifre – aggiungiamo noi le lettere.',
    'Descrivete in modo concreto il motivo del pagamento (p. es. «prezzo di vendita dell’auto, numero di telaio …»).',
    `Chi paga può esigere una quietanza (${linkCO('88')}).`,
    CONSIGLIO_IDENTITA,
    CONSIGLIO_PAGAMENTO,
  ],
  zdroje: [CO, CO_88],
  kroky: [{ id: 'angaben', nazev: 'Chi e quanto', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Chi riceve – nome', napoveda: 'La persona che riceve il denaro e firma la quietanza.', placeholder: 'p. es. Marco Bernasconi', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Indirizzo di chi riceve', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Chi paga – nome', placeholder: 'p. es. Laura Rezzonico', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Indirizzo di chi paga', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Importo (CHF)', napoveda: 'Aggiungiamo l’importo in lettere.', placeholder: 'p. es. 9500', sirka: 12, polovina: true },
    { id: 'ucel', typ: 'text', popis: 'Motivo del pagamento', placeholder: 'p. es. prezzo di vendita dell’auto Fiat Tipo, numero di telaio …', sirka: 56 },
    { id: 'misto', typ: 'text', popis: 'Luogo', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_slovy: (d) => importoInLettere(d.castka) },
  clanky: [{ nadpis: 'Quietanza', odstavce: [
    'Il/La sottoscritto/a **{{p_jmeno}}**, domiciliato/a in {{p_adresa}},',
    'conferma di aver ricevuto oggi in contanti da **{{k_jmeno}}**, domiciliato/a in {{k_adresa}}, l’importo di **{{castka}}** (in lettere: {{castka_slovy}}).',
    'Motivo del pagamento: {{ucel}}',
  ] }],
};
