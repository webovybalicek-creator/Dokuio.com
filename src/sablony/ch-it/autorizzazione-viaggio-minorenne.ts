/**
 * Autorizzazione di viaggio per un figlio minorenne (dichiarazione di consenso dei genitori) – secondo la raccomandazione del DFAE.
 * Ogni Paese fissa le sue regole d’entrata; alcuni esigono l’autorizzazione all’entrata o all’uscita. Un trasferimento all’estero
 * riguarda l’autorità parentale congiunta (UFG) e non è coperto da questo modello.
 */
import type { Sablona } from '../typy';
import { DFAE_BAMBINI, DFAE_VIAGGIARE, UFG_RAPIMENTO, piede } from './fonti';

export const viaggioMinorenne: Sablona = {
  kod: 'CHIT-VIAGGIO-MINORENNE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Autorizzazione di viaggio', podnadpis: 'dei genitori per il viaggio all’estero di un figlio minorenne (secondo la raccomandazione del DFAE)',
  souborPdf: 'autorizzazione-viaggio-minorenne', paticka: piede('CHIT-VIAGGIO-MINORENNE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Genitore / rappresentante legale 1', vpravo: 'Genitore / rappresentante legale 2' },
  slovo: { n: 'autorizzazione', g: 'dell’autorizzazione', a: 'l’autorizzazione', l: 'nell’autorizzazione' },
  cislovatClanky: false, cislovatOdstavce: false,
  podpisNaZarizeni: false,
  podpisPoznamka: 'Firmate l’autorizzazione a mano. Se necessario fate autenticare la firma presso il Comune di domicilio o un notaio – è possibile solo con una firma autografa su carta.',
  coDal: [
    'Firmate a mano – il genitore che non accompagna il figlio. Se il Paese di destinazione lo esige o per maggiore sicurezza: fate autenticare la firma presso il Comune di domicilio o un notaio.',
    'Il figlio o l’accompagnatore porta con sé l’originale, con il passaporto o la carta d’identità valida del figlio. Tenete una copia a casa.',
    'Verificate le condizioni d’entrata del Paese di destinazione e dei Paesi di transito presso l’ambasciata o il consolato e leggete i consigli di viaggio del DFAE.',
    'Restate raggiungibili durante il viaggio – i numeri di telefono figurano nell’autorizzazione.',
  ],
  kontrola: [
    `Il DFAE raccomanda vivamente questa dichiarazione quando dei minorenni viaggiano con un solo genitore o senza un tutore legale; le autorità di alcuni Paesi la esigono all’entrata o all’uscita ([DFAE – viaggiare con dei bambini](${DFAE_BAMBINI.url})).`,
    `Ogni Paese ha le sue regole. Chiedete alla rappresentanza del Paese di destinazione se serve un’autorizzazione scritta e in quale forma ([DFAE – viaggiare](${DFAE_VIAGGIARE.url})). Alcuni Paesi hanno un proprio modulo – usate allora quello.`,
    'Leggete i consigli di viaggio del DFAE per il Paese di destinazione e di transito.',
    'Riprendete nomi, date di nascita e numeri dei documenti d’identità esattamente come sul passaporto o sulla carta d’identità.',
    'Indicate una destinazione e date precise – un’autorizzazione «ovunque, in ogni momento» è poco credibile.',
    'Indicate i numeri di telefono con il prefisso (+41) perché le autorità alla frontiera o all’aeroporto possano raggiungervi.',
    `L’autorizzazione vale per un viaggio. Un trasferimento all’estero è un’altra cosa – in caso di autorità parentale congiunta, i genitori decidono insieme il luogo di dimora del figlio ([Ufficio federale di giustizia](${UFG_RAPIMENTO.url})).`,
  ],
  zdroje: [DFAE_BAMBINI, DFAE_VIAGGIARE, UFG_RAPIMENTO],
  kroky: [
    { id: 'eltern', nazev: 'Genitori / rappresentanti legali', popis: 'Di solito i genitori titolari dell’autorità parentale. Se un genitore viaggia con il figlio, firma l’altro.', pole: [
      { id: 'r1_jmeno', typ: 'text', popis: 'Genitore 1 – nome e cognome', napoveda: 'Genitore o altra persona titolare dell’autorità parentale (p. es. tutore).', placeholder: 'p. es. Giulia Bernasconi', sirka: 34, autocomplete: 'name' },
      { id: 'r1_narozeni', typ: 'datum', popis: 'Data di nascita', napoveda: 'Come sul documento d’identità.', sirka: 14, polovina: true },
      { id: 'r1_doklad', typ: 'text', popis: 'N. del passaporto o della carta d’identità', napoveda: 'Aiuta le autorità a verificare l’identità.', placeholder: 'p. es. X1234567', sirka: 14, polovina: true },
      { id: 'r1_adresa', typ: 'text', popis: 'Indirizzo', napoveda: 'Domicilio.', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
      { id: 'r1_telefon', typ: 'text', popis: 'Telefono', napoveda: 'Raggiungibile durante il viaggio, con il prefisso +41.', placeholder: 'p. es. +41 79 123 45 67', sirka: 18, polovina: true },
      { id: 'r2_jmeno', typ: 'text', popis: 'Genitore 2 – nome e cognome (facoltativo)', napoveda: 'L’altro genitore. Se viaggia con il figlio non deve firmare – lasciate allora vuoto.', placeholder: 'p. es. Marco Bernasconi', sirka: 34 },
      { id: 'r2_narozeni', typ: 'datum', popis: 'Data di nascita', napoveda: 'Come sul documento d’identità.', sirka: 14, polovina: true },
      { id: 'r2_doklad', typ: 'text', popis: 'N. del passaporto o della carta d’identità', placeholder: 'p. es. S7654321', sirka: 14, polovina: true },
      { id: 'r2_telefon', typ: 'text', popis: 'Telefono', napoveda: 'Con il prefisso +41.', placeholder: 'p. es. +41 79 765 43 21', sirka: 18, polovina: true },
    ] },
    { id: 'kind', nazev: 'Figlio / figlia', pole: [
      { id: 'd_jmeno', typ: 'text', popis: 'Nome e cognome del figlio', napoveda: 'Esattamente come sul passaporto o sulla carta d’identità del figlio.', placeholder: 'p. es. Sofia Bernasconi', sirka: 34 },
      { id: 'd_narozeni', typ: 'datum', popis: 'Data di nascita del figlio', sirka: 14, polovina: true },
      { id: 'd_doklad', typ: 'text', popis: 'N. del passaporto o della carta d’identità del figlio', napoveda: 'Numero del documento con cui viaggia il figlio.', placeholder: 'p. es. X7654321', sirka: 14, polovina: true },
    ] },
    { id: 'reise', nazev: 'Viaggio', pole: [
      { id: 'begleitung', typ: 'volba', popis: 'Con chi viaggia il figlio?', napoveda: 'L’accompagnatore dovrebbe figurare per nome nell’autorizzazione.', moznosti: [ { hodnota: 'elternteil', popis: 'Con l’altro genitore' }, { hodnota: 'andere', popis: 'Con un’altra persona (nonni, parenti, responsabile del campo…)' }, { hodnota: 'allein', popis: 'Da solo (p. es. volo con accompagnamento della compagnia)' } ] },
      { id: 'o_jmeno', typ: 'text', popis: 'Accompagnatore – nome e cognome', placeholder: 'p. es. Rosa Bernasconi', sirka: 34, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'andere'] } },
      { id: 'o_narozeni', typ: 'datum', popis: 'Data di nascita dell’accompagnatore', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'andere'] } },
      { id: 'o_doklad', typ: 'text', popis: 'N. del passaporto o della carta d’identità dell’accompagnatore', placeholder: 'p. es. X1122334', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'andere'] } },
      { id: 'o_beziehung', typ: 'text', popis: 'Rapporto con il figlio', napoveda: 'P. es. nonna, zia, responsabile del campo.', placeholder: 'p. es. nonna', sirka: 16, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: 'andere' } },
      { id: 'zielland', typ: 'text', popis: 'Destinazione (e Paesi di transito)', napoveda: 'Tutti i Paesi in cui il figlio si reca o che attraversa. Verificate le condizioni di ogni Paese presso il DFAE o l’ambasciata.', placeholder: 'p. es. Spagna (via la Francia)', sirka: 46 },
      { id: 'adresse_ausland', typ: 'text', popis: 'Indirizzo di soggiorno (facoltativo)', napoveda: 'Albergo, appartamento di vacanza o campo all’estero.', placeholder: 'p. es. Hotel Mar, Calle Mayor 1, Valencia', sirka: 46 },
      { id: 'od', typ: 'datum', popis: 'Partenza', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'Ritorno', sirka: 14, polovina: true },
      { id: 'zweck', typ: 'text', popis: 'Motivo del viaggio', napoveda: 'Il motivo del viaggio fa parte del contenuto usuale della dichiarazione.', placeholder: 'p. es. vacanze estive, soggiorno linguistico, campo', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Luogo', napoveda: 'Riprendiamo la località dall’indirizzo del genitore 1.', placeholder: 'p. es. Lugano', sirka: 18, polovina: true, vychozi: { obecZ: 'r1_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', napoveda: 'Precompilata con la data di oggi. All’autenticazione potete completarla a mano.', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Genitori / rappresentanti legali', vysvetleni: 'Chi dà il consenso. I numeri di telefono aiutano le autorità alla frontiera o all’aeroporto.', odstavce: [
      '{{r1_jmeno}}, nato/a il {{r1_narozeni}}, documento d’identità n. {{r1_doklad}}, domiciliato/a in {{r1_adresa}}, telefono {{r1_telefon}}',
      '{{r2_jmeno}}, nato/a il {{r2_narozeni}}, documento d’identità n. {{r2_doklad}}, telefono {{r2_telefon}}',
    ] },
    { nadpis: 'Autorizzazione', vysvetleni: 'Con chi e dove può viaggiare il figlio. Più è preciso, meno domande alla frontiera.', odstavce: [
      'In qualità di titolare/i dell’autorità parentale dichiaro (dichiariamo) di autorizzare nostro/a figlio/a minorenne',
      '{{d_jmeno}}, nato/a il {{d_narozeni}}, documento d’identità n. {{d_doklad}},',
      { volba: 'begleitung', uvodVzor: 'a viaggiare (barrate):', moznosti: { elternteil: 'accompagnato/a dall’altro genitore {{o_jmeno}}, nato/a il {{o_narozeni}}, documento d’identità n. {{o_doklad}},', andere: 'accompagnato/a da {{o_jmeno}}, nato/a il {{o_narozeni}}, documento d’identità n. {{o_doklad}} ({{o_beziehung}}),', allein: 'da solo/a,' } },
      'con destinazione {{zielland}}, dal {{od}} al {{do}}, luogo di soggiorno: {{adresse_ausland}}, motivo del viaggio: {{zweck}}.',
      'Per la durata del viaggio incarico (incarichiamo) l’accompagnatore o la persona responsabile della sorveglianza di prendersi cura del figlio e di prendere le decisioni necessarie nel suo interesse, compreso il consenso a un trattamento medico urgente.',
    ] },
  ],
};
