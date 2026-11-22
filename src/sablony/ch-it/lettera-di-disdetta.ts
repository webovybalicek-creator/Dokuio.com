/**
 * Lettera di disdetta di un contratto (telefonia, internet, assicurazione, cassa malati, elettricità, abbonamento, mandato).
 * Assicurazione: disdetta per la fine del 3° anno o di ogni anno successivo con 3 mesi di preavviso (art. 35a LCA), dopo un
 * sinistro parziale (art. 42 LCA); cassa malati di base: lettera ricevuta entro il 30 novembre (ch.ch); elettricità: servizio
 * universale sotto i 100 MWh (ElCom); mandato revocabile in ogni tempo (art. 404 CO); contratto d’appalto art. 377 CO.
 */
import type { Pripominka, Sablona } from '../typy';
import { isoDatum, naDatum, pridejDny } from '../terminy';
import { CO_377, CO_404, LCA_35A, LCA_42, CH_CASSA, ELCOM, OMBUDSCOM, linkCO, linkLCA, piede } from './fonti';

export const disdetta: Sablona = {
  kod: 'CHIT-DISDETTA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Disdetta', podnadpis: 'disdetta di un contratto secondo il contratto, le condizioni generali e la legge',
  souborPdf: 'lettera-di-disdetta', paticka: piede('CHIT-DISDETTA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Il cliente / la cliente', vpravo: 'ricevuto per il fornitore (in caso di consegna a mano)' },
  slovo: { n: 'lettera di disdetta', g: 'della lettera di disdetta', a: 'la lettera di disdetta', l: 'nella lettera di disdetta' },
  cislovatClanky: false, cislovatOdstavce: false,
  pripominky: (d) => {
    const out: Pripominka[] = [];
    const invio = naDatum(d.datum);
    if (invio) out.push({ nazev: 'Verificare la conferma della disdetta', datum: isoDatum(pridejDny(invio, 14)), popis: 'Nessuna conferma? Sollecitate il fornitore e conservate la ricevuta della raccomandata.' });
    const fine = naDatum(d.termin);
    if (fine) out.push({ nazev: 'Il contratto termina', datum: isoDatum(fine), popis: 'Interrompete ordini permanenti e addebiti diretti solo dopo il conteggio finale.' });
    return out;
  },
  coDal: [
    'Firmate a mano e spedite la lettera per raccomandata – o tramite il canale previsto dalle condizioni generali (p. es. conto cliente). Conservate la ricevuta.',
    'Di solito conta la ricezione da parte del fornitore, non la data d’invio. Prevedete qualche giorno di riserva.',
    'Continuate a pagare fino alla fine del contratto. Interrompete l’ordine permanente o l’addebito diretto solo dopo il conteggio finale.',
    'Restituite gli apparecchi prestati (router, box TV, badge) secondo le istruzioni e fatevi confermare la restituzione.',
    'Conservate una copia della disdetta fino alla ricezione della conferma e del conteggio finale.',
  ],
  kontrola: [
    'Ricopiate esattamente il numero di contratto, di cliente o di polizza – è così che il fornitore attribuisce la vostra disdetta.',
    'Termine e forma figurano nel contratto e nelle condizioni generali. In caso di dubbio scegliete «per la prossima scadenza possibile» – il contratto terminerà il prima possibile.',
    `Cellulare, internet, TV: il termine di disdetta e la durata minima sono fissati dalle condizioni generali del fornitore. In caso di controversia sulla disdetta o sulla durata del contratto può aiutare l’organo di conciliazione [ombudscom](${OMBUDSCOM.url}). Se cambiate operatore mantenendo il numero, chiedete prima al nuovo operatore come avviene la portabilità.`,
    `Assicurazione: ogni contratto può essere disdetto per la fine del terzo anno o di ciascuno degli anni successivi, con un preavviso di tre mesi, per iscritto o in un’altra forma che consenta la prova per testo (${linkLCA('35a')}). Dal 1.1.2022 vale anche per i contratti più vecchi. Sono escluse le assicurazioni sulla vita. Il contratto può prevedere termini più brevi.`,
    `Assicurazione dopo un sinistro parziale: potete recedere dal contratto al più tardi al momento del pagamento dell’indennità (${linkLCA('42')}). Verificate i dettagli nelle vostre condizioni generali d’assicurazione.`,
    `Cassa malati – assicurazione di base: la vostra lettera deve pervenire alla cassa entro il 30 novembre per cambiare alla fine dell’anno ([ch.ch](${CH_CASSA.url})); con la franchigia più bassa nel modello standard è possibile anche la disdetta per la fine di giugno, con lettera ricevuta entro il 31 marzo. Le assicurazioni complementari hanno termini propri secondo il contratto.`,
    `Elettricità: le economie domestiche che consumano meno di 100 MWh all’anno sono nel servizio universale e non possono scegliere liberamente il fornitore ([ElCom](${ELCOM.url})). In caso di trasloco annunciate la partenza al gestore di rete locale e annotate la lettura del contatore.`,
    `Mandato (p. es. pulizie, consulenza, fiduciaria, coaching): un mandato può essere revocato o disdetto in ogni tempo; chi lo fa in tempo inopportuno deve risarcire il danno causato (${linkCO('404')}). Per un contratto d’appalto (p. es. artigiano) si applica l’art. 377 CO: recesso solo contro pagamento del lavoro eseguito e pieno risarcimento.`,
    'Fitness, abbonamento, associazione: durata, rinnovo automatico e termine di disdetta sono fissati dal contratto e dalle condizioni generali. Disdite in tempo prima del rinnovo.',
  ],
  zdroje: [LCA_35A, LCA_42, CO_404, CO_377, CH_CASSA, ELCOM, OMBUDSCOM],
  kroky: [
    { id: 'kunde', nazev: 'I vostri dati', popis: 'La persona che ha concluso il contratto. Scrivete nome e indirizzo come li conosce il fornitore.', pole: [
      { id: 'k_jmeno', typ: 'text', popis: 'Nome e cognome', napoveda: 'Come nel contratto (per un’impresa: ragione sociale).', placeholder: 'p. es. Laura Rezzonico', sirka: 34, autocomplete: 'name' },
      { id: 'k_narozeni', typ: 'datum', popis: 'Data di nascita (facoltativo)', napoveda: 'Aiuta il fornitore a trovarvi se manca il numero di contratto.', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Indirizzo', napoveda: 'Indirizzo del contratto o il vostro indirizzo postale attuale.', placeholder: 'p. es. Viale Stazione 5, 6500 Bellinzona', sirka: 46 },
      { id: 'k_kontakt', typ: 'text', popis: 'Telefono o e-mail (facoltativo)', napoveda: 'Dove il fornitore può inviare la conferma.', placeholder: 'p. es. laura.rezzonico@esempio.ch', sirka: 30 },
    ] },
    { id: 'vertrag', nazev: 'Fornitore e contratto', popis: 'I dati figurano nel contratto, sulla fattura o nel conto cliente.', pole: [
      { id: 'typ', typ: 'volba', popis: 'Cosa disdite?', napoveda: 'Secondo il contratto vi mostriamo le regole applicabili nei consigli qui sotto.', moznosti: [ { hodnota: 'telekom', popis: 'Abbonamento cellulare, internet o TV' }, { hodnota: 'versicherung', popis: 'Assicurazione (economia domestica, RC, auto, complementare…)' }, { hodnota: 'krankenkasse', popis: 'Cassa malati – assicurazione di base' }, { hodnota: 'strom', popis: 'Elettricità – partenza per trasloco' }, { hodnota: 'abo', popis: 'Fitness, abbonamento o associazione' }, { hodnota: 'auftrag', popis: 'Prestazione / mandato (pulizie, consulenza, fiduciaria…)' }, { hodnota: 'sonstiges', popis: 'Altro contratto' } ] },
      { id: 'f_nazev', typ: 'text', popis: 'Fornitore (impresa)', napoveda: 'Nome esatto secondo la fattura o il contratto.', placeholder: 'p. es. Fitness Esempio SA', sirka: 34 },
      { id: 'f_adresa', typ: 'text', popis: 'Indirizzo del fornitore', napoveda: 'Indirizzo di corrispondenza delle condizioni generali o del sito – spedite a questo indirizzo.', placeholder: 'p. es. Casella postale, 6901 Lugano', sirka: 46 },
      { id: 'cislo', typ: 'text', popis: 'Numero di contratto, di cliente o di polizza', napoveda: 'Il dato più importante – permette di attribuire la disdetta.', placeholder: 'p. es. 12.345.678', sirka: 18, polovina: true },
      { id: 'vertrag_datum', typ: 'datum', popis: 'Inizio del contratto (facoltativo)', napoveda: 'Secondo il contratto o la polizza. Importante per la regola dei tre anni nelle assicurazioni.', sirka: 14, polovina: true },
      { id: 'gegenstand', typ: 'text', popis: 'Cosa esattamente? (facoltativo)', napoveda: 'P. es. numero di telefono, indirizzo dell’abitazione e numero del contatore, numero di socio, nome dell’abbonamento.', placeholder: 'p. es. numero 079 123 45 67', sirka: 56 },
    ] },
    { id: 'kuendigung', nazev: 'Disdetta', pole: [
      { id: 'art', typ: 'volba', popis: 'Come disdite?', napoveda: 'In caso di dubbio, «prossima scadenza possibile». Le varianti assicurazione, cassa malati, elettricità e mandato sono adatte solo a questi contratti.', moznosti: [ { hodnota: 'naechst', popis: 'Per la prossima scadenza possibile' }, { hodnota: 'termin', popis: 'Per una data precisa (subordinatamente la prossima possibile)' }, { hodnota: 'vvg', popis: 'Assicurazione: disdetta ordinaria secondo l’art. 35a LCA' }, { hodnota: 'schaden', popis: 'Assicurazione: dopo un sinistro parziale (art. 42 LCA)' }, { hodnota: 'kvg', popis: 'Cassa malati: assicurazione di base per la fine dell’anno' }, { hodnota: 'umzug', popis: 'Elettricità: partenza per trasloco' }, { hodnota: 'auftrag', popis: 'Mandato: revoca secondo l’art. 404 CO, con effetto immediato' } ] },
      { id: 'termin', typ: 'datum', popis: 'Fine del contratto o data della partenza', napoveda: 'Per un’assicurazione la fine dell’anno assicurativo; per l’assicurazione di base il 31 dicembre; per un trasloco il giorno della riconsegna dell’abitazione.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'art', je: ['termin', 'vvg', 'kvg', 'umzug'] } },
      { id: 'schaden_nr', typ: 'text', popis: 'Numero del sinistro (facoltativo)', napoveda: 'Il numero dato dall’assicurazione per il sinistro.', placeholder: 'p. es. S-2026-0042', sirka: 16, polovina: true, zobrazitKdyz: { pole: 'art', je: 'schaden' } },
      { id: 'neue_adresse', typ: 'text', popis: 'Nuovo indirizzo (per la fattura finale)', napoveda: 'Dove inviare la fattura finale.', placeholder: 'p. es. Via San Gottardo 3, 6830 Chiasso', sirka: 46, zobrazitKdyz: { pole: 'art', je: 'umzug' } },
      { id: 'bitten', typ: 'vice', popis: 'Cosa desiderate in più? (facoltativo)', napoveda: 'La conferma vi assicura la data di fine. Con un IBAN un credito vi viene rimborsato più in fretta.', moznosti: [ { hodnota: 'bestaetigung', popis: 'Conferma scritta con la data di fine' }, { hodnota: 'abrechnung', popis: 'Conteggio finale e rimborso di un credito' }, { hodnota: 'geraete', popis: 'Indicazioni per la restituzione degli apparecchi' }, { hodnota: 'lastschrift', popis: 'Fine dell’addebito diretto dopo il conteggio finale' } ] },
      { id: 'iban', typ: 'text', popis: 'IBAN per un credito', napoveda: 'Il vostro conto per un eventuale rimborso.', placeholder: 'CH…', sirka: 30, zobrazitKdyz: { pole: 'bitten', je: 'abrechnung' } },
      { id: 'misto', typ: 'text', popis: 'Luogo', napoveda: 'Riprendiamo la località dal vostro indirizzo.', placeholder: 'p. es. Bellinzona', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Mittente', vysvetleni: 'Chi disdice – la persona che ha concluso il contratto.', odstavce: ['{{k_jmeno}}, nato/a il {{k_narozeni}}, {{k_adresa}}, contatto: {{k_kontakt}}'] },
    { nadpis: 'Raccomandata a', vysvetleni: 'A chi è indirizzata la disdetta.', odstavce: ['{{f_nazev}}, {{f_adresa}}'] },
    { nadpis: 'Disdetta', vysvetleni: 'La disdetta vera e propria. Il numero indica al fornitore di quale contratto si tratta; la variante determina quando termina.', odstavce: [
      'Gentili signore e signori,',
      'con la presente disdico il contratto n. {{cislo}} del {{vertrag_datum}} ({{gegenstand}}).',
      { volba: 'art', uvodVzor: 'Variante (barrate):', moznosti: {
        naechst: 'La disdetta ha effetto alla prossima scadenza possibile secondo il contratto, le condizioni generali e la legge.',
        termin: 'La disdetta ha effetto il {{termin}}, subordinatamente alla prossima scadenza possibile.',
        vvg: 'Disdico l’assicurazione in modo ordinario in virtù dell’art. 35a LCA per il {{termin}}, subordinatamente per la prossima scadenza possibile.',
        schaden: 'In virtù dell’art. 42 LCA recedo dal contratto a seguito del sinistro parziale n. {{schaden_nr}}.',
        kvg: 'Disdico l’assicurazione obbligatoria delle cure medico-sanitarie (assicurazione di base) per il {{termin}}.',
        umzug: 'A causa del mio trasloco annuncio la mia partenza per il {{termin}}. Vi prego di leggere il contatore in quel giorno e di inviare la fattura finale al mio nuovo indirizzo: {{neue_adresse}}.',
        auftrag: 'In virtù dell’art. 404 cpv. 1 CO revoco il mandato con effetto immediato. Vi prego di fatturare le prestazioni fornite fino a oggi.',
      } },
    ] },
    { nadpis: 'Altre richieste', vysvetleni: 'Ciò di cui avete ancora bisogno dal fornitore. Tutto è facoltativo.', odstavce: [
      { vice: 'bitten', uvod: 'Vi prego inoltre di inviarmi:', moznosti: { bestaetigung: 'una conferma scritta della disdetta con la data in cui il contratto termina', abrechnung: 'il conteggio finale e il rimborso di un eventuale credito sul conto IBAN {{iban}}', geraete: 'indicazioni su come e dove restituire gli apparecchi prestati', lastschrift: 'la fine dell’addebito diretto dopo il conteggio finale' } },
      'Distinti saluti.',
    ] },
  ],
};
