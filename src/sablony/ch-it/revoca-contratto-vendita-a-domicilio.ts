/** Revoca di un contratto concluso a domicilio, sul posto di lavoro, per strada o per telefono – art. 40a segg. CO (oltre 100 franchi, 14 giorni). */
import type { Sablona } from '../typy';
import { CO_40A, CH_RESTITUIRE, linkCO, piede } from './fonti';

export const revoca: Sablona = {
  kod: 'CHIT-REVOCA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Revoca', podnadpis: 'di un contratto concluso a domicilio o per telefono (art. 40a segg. CO)',
  souborPdf: 'revoca-contratto-vendita-a-domicilio', paticka: piede('CHIT-REVOCA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Il cliente / la cliente', vpravo: 'ricevuto per il fornitore (in caso di consegna a mano)' },
  slovo: { n: 'revoca', g: 'della revoca', a: 'la revoca', l: 'nella revoca' },
  cislovatClanky: false, cislovatOdstavce: false,
  coDal: [
    'Spedite la revoca per raccomandata o per e-mail con conferma di lettura – l’essenziale è spedirla entro 14 giorni e poterlo provare.',
    'Restituite le prestazioni già ricevute; il fornitore deve rimborsare gli importi già pagati (art. 40f CO).',
  ],
  kontrola: [
    `Il diritto di revoca vale solo se l’offerta vi è stata fatta a domicilio o alla porta, sul posto di lavoro, sui mezzi pubblici, per strada, durante una gita pubblicitaria o per telefono, e se la prestazione supera 100 franchi (${linkCO('40a', 'art. 40a segg. CO')}).`,
    `Per gli acquisti online in Svizzera non esiste un diritto legale di revoca – solo un diritto di restituzione volontario del negozio secondo le sue condizioni generali ([ch.ch](${CH_RESTITUIRE.url})).`,
    'Nessun diritto di revoca se avete chiesto espressamente le trattative o se avete ordinato a una bancarella di mercato o di fiera (art. 40c CO).',
    'Il termine è di 14 giorni e decorre da quando avete concluso il contratto e il fornitore vi ha informati per iscritto del diritto di revoca (art. 40e CO).',
  ],
  zdroje: [CO_40A, CH_RESTITUIRE],
  kroky: [
    { id: 'haendler', nazev: 'Fornitore', popis: 'Nome e indirizzo figurano nel contratto o nella conferma d’ordine.', pole: [
      { id: 'pr_nazev', typ: 'text', popis: 'Fornitore (impresa)', placeholder: 'p. es. Esempio Distribuzione SA', sirka: 34 },
      { id: 'pr_adresa', typ: 'text', popis: 'Indirizzo del fornitore', sirka: 46 },
    ] },
    { id: 'kauf', nazev: 'Contratto', pole: [
      { id: 'zbozi', typ: 'textarea', popis: 'Merce o servizio', placeholder: 'p. es. aspirapolvere modello X, abbonamento a una rivista', sirka: 64 },
      { id: 'objednavka', typ: 'text', popis: 'Numero di contratto o d’ordine', sirka: 18, polovina: true },
      { id: 'objednano', typ: 'datum', popis: 'Contratto concluso il', sirka: 14, polovina: true },
      { id: 'kde', typ: 'volba', popis: 'Dove vi è stata fatta l’offerta?', moznosti: [ { hodnota: 'haustuer', popis: 'Alla porta / nella mia abitazione' }, { hodnota: 'telefon', popis: 'Per telefono' }, { hodnota: 'arbeitsplatz', popis: 'Sul mio posto di lavoro' }, { hodnota: 'strasse', popis: 'Per strada o su un mezzo pubblico' }, { hodnota: 'werbefahrt', popis: 'Durante una gita pubblicitaria' } ] },
    ] },
    { id: 'sie', nazev: 'I vostri dati', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Nome e cognome', placeholder: 'p. es. Laura Rezzonico', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Indirizzo', placeholder: 'p. es. Viale Stazione 5, 6500 Bellinzona', sirka: 46 },
      { id: 'ucet', typ: 'text', popis: 'IBAN per il rimborso (facoltativo)', placeholder: 'CH…', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Luogo', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Raccomandata a', odstavce: ['{{pr_nazev}}, {{pr_adresa}}'] },
    { nadpis: 'Revoca', vysvetleni: 'Non serve alcuna giustificazione.', odstavce: [
      'Gentili signore e signori,',
      'fondandomi sugli art. 40a segg. CO revoco con la presente la mia offerta, rispettivamente la mia accettazione, del contratto seguente: {{zbozi}}',
      'Contratto del {{objednano}} · numero di contratto/ordine: {{objednavka}}',
      { volba: 'kde', uvod: 'L’offerta mi è stata fatta:', uvodVzor: 'L’offerta mi è stata fatta (barrate):', moznosti: { haustuer: 'alla porta, rispettivamente nella mia abitazione.', telefon: 'per telefono.', arbeitsplatz: 'sul mio posto di lavoro.', strasse: 'per strada, rispettivamente su un mezzo pubblico.', werbefahrt: 'durante una gita pubblicitaria.' } },
      'Vi prego di rimborsare gli importi già pagati sul conto IBAN {{ucet}}.',
      'Distinti saluti.',
    ] },
    { nadpis: 'Cliente', odstavce: ['{{p_jmeno}}, {{p_adresa}}'] },
  ],
};
