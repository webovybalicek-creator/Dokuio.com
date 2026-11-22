/**
 * Lettera di dimissioni – disdetta del contratto di lavoro da parte del lavoratore (art. 335 segg. CO). Tempo di prova: 7 giorni
 * (art. 335b CO); poi 1, 2 o 3 mesi per la fine di un mese secondo l’anno di servizio (art. 335c CO), salvo altro accordo scritto, CCL o CNL.
 */
import type { Pripominka, Sablona } from '../typy';
import { isoDatum, naDatum, pridejDny } from '../terminy';
import { CO_335, CO_335B, CO_335C, CO_330A, CO_341, CH_DISDETTA, CH_PROVA, SECO_FAQ, TRAVAIL_SWISS, linkCO, piede } from './fonti';

export const dimissioni: Sablona = {
  kod: 'CHIT-DIMISSIONI', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Lettera di dimissioni', podnadpis: 'disdetta del contratto di lavoro da parte del lavoratore (art. 335 segg. CO)',
  souborPdf: 'lettera-di-dimissioni', paticka: piede('CHIT-DIMISSIONI'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Il lavoratore / la lavoratrice', vpravo: 'Ricezione confermata (datore di lavoro, data)' },
  slovo: { n: 'lettera di dimissioni', g: 'della lettera di dimissioni', a: 'la lettera di dimissioni', l: 'nella lettera di dimissioni' },
  cislovatClanky: false, cislovatOdstavce: false,
  pripominky: (d) => {
    const out: Pripominka[] = [];
    const fine = naDatum(d.ende);
    if (fine) {
      out.push({ nazev: 'Ultimo giorno di lavoro / fine del rapporto di lavoro', datum: isoDatum(fine) });
      out.push({ nazev: 'Verificare l’attestato di lavoro e il conteggio dello stipendio', datum: isoDatum(pridejDny(fine, 14)), popis: 'Attestato ricevuto? Controllate il conteggio finale con il saldo di vacanze e ore straordinarie.' });
    }
    return out;
  },
  coDal: [
    'Firmate a mano. Consegnate la lettera di persona e fatevi confermare la ricezione sulla vostra copia – oppure speditela per raccomandata.',
    'Le dimissioni hanno effetto solo con la ricezione da parte del datore di lavoro. Una raccomandata si considera di regola ricevuta quando può essere ritirata – speditela qualche giorno prima della fine del mese.',
    'Discutete le vacanze restanti e le ore straordinarie con il vostro superiore e mettetelo per iscritto.',
    'Se non avete ancora un nuovo impiego, iscrivetevi il prima possibile all’URC – non solo l’ultimo giorno di lavoro.',
  ],
  kontrola: [
    `Forma: la legge non richiede una forma particolare. Se il contratto di lavoro, il CCL o il CNL prevede la forma scritta, le dimissioni devono essere scritte. Lo scritto è comunque più facile da provare ([ch.ch](${CH_DISDETTA.url})).`,
    `Tempo di prova: salvo altro accordo dura un mese, al massimo tre mesi. Il termine di disdetta è di sette giorni; le dimissioni devono pervenire al datore di lavoro al più tardi l’ultimo giorno del tempo di prova (${linkCO('335b')}, [ch.ch](${CH_PROVA.url})).`,
    `Dopo il tempo di prova, salvo altro accordo scritto: 1 mese nel 1° anno di servizio, 2 mesi dal 2° al 9° anno, 3 mesi dal 10° anno – ogni volta per la fine di un mese (${linkCO('335c')}). Controllate il vostro contratto e il CCL.`,
    'Esempio: dimissioni ricevute il 13 giugno con un mese di termine → fine il 31 luglio. Il termine decorre dalla ricezione da parte del datore di lavoro.',
    'Una motivazione non è necessaria. Se il datore di lavoro la chiede, dovete darla per iscritto (art. 335 cpv. 2 CO).',
    `Il lavoratore può dimettersi anche durante una malattia o un infortunio; i periodi di protezione proteggono solo da un licenziamento da parte del datore di lavoro ([SECO](${SECO_FAQ.url})).`,
    `Senza un nuovo impiego, le dimissioni possono comportare una sospensione temporanea delle indennità di disoccupazione ([lavoro.swiss](${TRAVAIL_SWISS.url})).`,
    `Partire prima? È possibile solo con il consenso del datore di lavoro (accordo di risoluzione). Mettetelo per iscritto e leggetelo con attenzione – non potete rinunciare ai diritti imperativi durante il rapporto di lavoro e nel mese successivo alla sua fine (${linkCO('341')}).`,
  ],
  zdroje: [CO_335, CO_335B, CO_335C, CO_330A, CO_341, CH_DISDETTA, CH_PROVA, SECO_FAQ, TRAVAIL_SWISS],
  kroky: [
    { id: 'arbeitnehmer', nazev: 'I vostri dati', popis: 'Vi dimettete come lavoratrice o lavoratore.', pole: [
      { id: 'an_jmeno', typ: 'text', popis: 'Nome e cognome', napoveda: 'Come nel contratto di lavoro.', placeholder: 'p. es. Laura Rezzonico', sirka: 34, autocomplete: 'name' },
      { id: 'an_adresa', typ: 'text', popis: 'Indirizzo', napoveda: 'Il vostro domicilio attuale.', placeholder: 'p. es. Viale Stazione 5, 6500 Bellinzona', sirka: 46 },
      { id: 'an_funkce', typ: 'text', popis: 'Funzione / posto (facoltativo)', napoveda: 'Utile nelle grandi aziende.', placeholder: 'p. es. contabile', sirka: 34 },
      { id: 'an_cislo', typ: 'text', popis: 'Numero del personale (facoltativo)', napoveda: 'Figura spesso sul conteggio dello stipendio.', placeholder: 'p. es. 104523', sirka: 14, polovina: true },
    ] },
    { id: 'arbeitgeber', nazev: 'Datore di lavoro', pole: [
      { id: 'ag_nazev', typ: 'text', popis: 'Datore di lavoro (azienda)', napoveda: 'Nome secondo il contratto di lavoro.', placeholder: 'p. es. Fiduciaria Esempio SA', sirka: 34 },
      { id: 'ag_osoba', typ: 'text', popis: 'All’attenzione di (facoltativo)', napoveda: 'Superiore o ufficio del personale.', placeholder: 'p. es. sig.ra Sofia Martinelli, Risorse umane', sirka: 34 },
      { id: 'ag_adresa', typ: 'text', popis: 'Indirizzo del datore di lavoro', napoveda: 'Indirizzo a cui spedite le dimissioni.', placeholder: 'p. es. Via Pretorio 10, 6900 Lugano', sirka: 46 },
      { id: 'vertrag_datum', typ: 'datum', popis: 'Contratto di lavoro del / entrata in servizio (facoltativo)', napoveda: 'Secondo il contratto. Determina l’anno di servizio e quindi il termine.', sirka: 14, polovina: true },
    ] },
    { id: 'kuendigung', nazev: 'Dimissioni', pole: [
      { id: 'art', typ: 'volba', popis: 'Quando vi dimettete?', napoveda: 'Durante il tempo di prova il termine è di sette giorni salvo altro accordo. Poi da 1 a 3 mesi per la fine di un mese, secondo l’anno di servizio e il contratto.', moznosti: [ { hodnota: 'probezeit', popis: 'Durante il tempo di prova' }, { hodnota: 'ordentlich', popis: 'Dopo il tempo di prova (disdetta ordinaria)' }, { hodnota: 'aufhebung', popis: 'Ordinaria – con proposta di partire prima di comune accordo' } ] },
      { id: 'ende', typ: 'datum', popis: 'Fine del rapporto di lavoro', napoveda: 'Dopo il tempo di prova di solito una fine mese: 1° anno 1 mese, 2°–9° anno 2 mesi, dal 10° anno 3 mesi – se il contratto o il CCL non prevede altro.', sirka: 14, polovina: true },
      { id: 'wunsch_ende', typ: 'datum', popis: 'Partenza anticipata desiderata', napoveda: 'Valida solo se il datore di lavoro l’accetta per iscritto.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'art', je: 'aufhebung' } },
      { id: 'bitten', typ: 'vice', popis: 'Cosa desiderate in più? (facoltativo)', napoveda: 'Potete chiedere l’attestato di lavoro in ogni momento. Una conferma di ricezione vi protegge se il termine è contestato.', moznosti: [ { hodnota: 'bestaetigung', popis: 'Conferma scritta della ricezione e della data di fine' }, { hodnota: 'zeugnis', popis: 'Attestato di lavoro (art. 330a CO)' }, { hodnota: 'ferien', popis: 'Conteggio delle vacanze restanti e delle ore straordinarie' }, { hodnota: 'dank', popis: 'Ringraziamento per la collaborazione' } ] },
      { id: 'misto', typ: 'text', popis: 'Luogo', napoveda: 'Riprendiamo la località dal vostro indirizzo.', placeholder: 'p. es. Bellinzona', sirka: 18, polovina: true, vychozi: { obecZ: 'an_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', napoveda: 'Precompilata con la data di oggi. Per il termine conta la ricezione da parte del datore di lavoro.', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Mittente', vysvetleni: 'Chi si dimette.', odstavce: ['{{an_jmeno}}, {{an_adresa}}'] },
    { nadpis: 'A', vysvetleni: 'Il datore di lavoro secondo il contratto di lavoro.', odstavce: ['{{ag_nazev}}, all’att. di {{ag_osoba}}, {{ag_adresa}}'] },
    { nadpis: 'Disdetta del rapporto di lavoro', vysvetleni: 'Le dimissioni vere e proprie. Non serve alcuna motivazione.', odstavce: [
      'Gentili signore e signori,',
      { volba: 'art', uvodVzor: 'Variante (barrate):', moznosti: {
        probezeit: 'con la presente il/la sottoscritto/a {{an_jmeno}} ({{an_funkce}}, numero del personale {{an_cislo}}) disdice il proprio contratto di lavoro del {{vertrag_datum}} durante il tempo di prova, nel rispetto del termine di disdetta, per il {{ende}}, subordinatamente per la prossima scadenza possibile.',
        ordentlich: 'con la presente il/la sottoscritto/a {{an_jmeno}} ({{an_funkce}}, numero del personale {{an_cislo}}) disdice il proprio contratto di lavoro del {{vertrag_datum}}, nel rispetto del termine di disdetta contrattuale o legale, per il {{ende}}, subordinatamente per la prossima scadenza possibile.',
        aufhebung: 'con la presente il/la sottoscritto/a {{an_jmeno}} ({{an_funkce}}, numero del personale {{an_cislo}}) disdice il proprio contratto di lavoro del {{vertrag_datum}}, nel rispetto del termine di disdetta contrattuale o legale, per il {{ende}}, subordinatamente per la prossima scadenza possibile. Vi propongo inoltre di porre fine al rapporto di lavoro di comune accordo già il {{wunsch_ende}}. Senza il vostro consenso scritto si applica la disdetta ordinaria.',
      } },
      { vice: 'bitten', uvod: 'Vi prego inoltre di inviarmi:', moznosti: {
        bestaetigung: 'una conferma scritta della ricezione delle presenti dimissioni e della data di fine',
        zeugnis: 'un attestato di lavoro sulla natura e la durata del rapporto di lavoro nonché sulla qualità del mio lavoro e sulla mia condotta (art. 330a CO)',
        ferien: 'un conteggio delle mie vacanze restanti e delle mie ore straordinarie, con una proposta su come prenderle o compensarle fino alla mia partenza',
        dank: 'la vostra comprensione per la mia decisione. Vi ringrazio per la buona collaborazione e la fiducia accordatami',
      } },
      'Distinti saluti.',
    ] },
  ],
};
