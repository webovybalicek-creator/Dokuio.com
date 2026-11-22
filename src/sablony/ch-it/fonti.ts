/**
 * Fonti ufficiali per la Svizzera italiana – Fedlex (diritto federale, versione italiana) e portali delle autorità.
 * Verificato il 2026-11-22: CO (RS 220), LEF (RS 281.1), CC (RS 210), LCA (RS 221.229.1), LCCo (RS 221.214.1); ch.ch (disdetta e
 * licenziamento, periodo di prova, contratto di locazione, assicurazione malattie, imposta sulle donazioni, restituzione di merci,
 * immatricolazione e collaudo); DFAE (viaggiare con bambini); UFG (rapimento internazionale di minori); SECO (FAQ disdetta);
 * ElCom (tariffe elettriche, servizio universale); UFCOM (ombudscom). Contenuto giuridico identico ai modelli CH in tedesco
 * (src/sablony/ch, verificati il 2026-11-20) e in francese (src/sablony/ch-fr).
 */
const CO_URL = 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it';
const LEF_URL = 'https://www.fedlex.admin.ch/eli/cc/11/529_488_529/it';
const LCA_URL = 'https://www.fedlex.admin.ch/eli/cc/24/719_735_717/it';
const ancora = (art: string) => art.split(/[–\s]/)[0].replace(/^(\d+)([a-z])$/, '$1_$2');
const co = (art: string, titolo: string) => ({ nazev: `Art. ${art} CO – ${titolo} (Fedlex)`, url: `${CO_URL}#art_${ancora(art)}` });
/** Link a un articolo del CO in un testo: [art. 17 CO](…) */
export const linkCO = (art: string, testo = `art. ${art} CO`) => `[${testo}](${CO_URL}#art_${ancora(art)})`;
export const linkLEF = (art: string) => `[art. ${art} LEF](${LEF_URL}#art_${ancora(art)})`;
export const linkLCA = (art: string) => `[art. ${art} LCA](${LCA_URL}#art_${ancora(art)})`;

export const CO = { nazev: 'Codice delle obbligazioni (CO, RS 220) – Fedlex', url: CO_URL };
export const CO_17 = co('17', 'Riconoscimento di debito');
export const CO_32 = co('32', 'Rappresentanza');
export const CO_40A = co('40a–40f', 'Diritto di revoca (vendite a domicilio)');
export const CO_88 = co('88', 'Quietanza');
export const CO_102 = co('102', 'Mora del debitore');
export const CO_104 = co('104', 'Interessi moratori');
export const CO_135 = co('135', 'Interruzione della prescrizione');
export const CO_184 = co('184', 'Contratto di compravendita');
export const CO_197 = co('197', 'Garanzia per i difetti della cosa');
export const CO_199 = co('199', 'Esclusione della garanzia');
export const CO_201 = co('201', 'Verifica della cosa e avviso dei difetti');
export const CO_205 = co('205', 'Azione redibitoria e azione di riduzione del prezzo');
export const CO_210 = co('210', 'Prescrizione della garanzia');
export const CO_239 = co('239', 'Donazione');
export const CO_243 = co('243', 'Promessa di donare');
export const CO_LOCAZIONE = co('253–273c', 'Locazione');
export const CO_257E = co('257e', 'Garanzie prestate dal conduttore');
export const CO_262 = co('262', 'Sublocazione');
export const CO_266C = co('266c', 'Termine di disdetta per le abitazioni');
export const CO_305 = co('305–311', 'Comodato');
export const CO_312 = co('312', 'Mutuo');
export const CO_318 = co('318', 'Restituzione del mutuo');
export const CO_330A = co('330a', 'Attestato di lavoro');
export const CO_335 = co('335', 'Disdetta del contratto di lavoro');
export const CO_335B = co('335b', 'Disdetta durante il tempo di prova');
export const CO_335C = co('335c', 'Termini di disdetta');
export const CO_341 = co('341', 'Irrinunciabilità');
export const CO_363 = co('363–379', 'Contratto d’appalto');
export const CO_367 = co('367', 'Verificazione dell’opera e avviso dei difetti');
export const CO_371 = co('371', 'Prescrizione dei diritti per i difetti');
export const CO_375 = co('375', 'Superamento del preventivo approssimativo');
export const CO_377 = co('377', 'Recesso del committente');
export const CO_404 = co('404', 'Revoca e disdetta del mandato');
export const LEF_82 = { nazev: 'Art. 82 LEF – rigetto provvisorio dell’opposizione (Fedlex)', url: `${LEF_URL}#art_82` };
export const LCA_35A = { nazev: 'Art. 35a LCA – disdetta ordinaria (Fedlex)', url: `${LCA_URL}#art_35_a` };
export const LCA_42 = { nazev: 'Art. 42 LCA – sinistro parziale e disdetta (Fedlex)', url: `${LCA_URL}#art_42` };
export const LCCO_7 = { nazev: 'Art. 7 LCCo – eccezioni alla legge sul credito al consumo (Fedlex)', url: 'https://www.fedlex.admin.ch/eli/cc/2002/593/it#art_7' };
export const CC_360 = { nazev: 'Art. 360 CC – mandato precauzionale (Fedlex)', url: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/it#art_360' };

export const CH_DISDETTA = { nazev: 'Licenziamento o disdetta (ch.ch)', url: 'https://www.ch.ch/it/lavoro/disoccupazione--disdetta--licenziamento/licenziamento-o-disdetta' };
export const CH_PROVA = { nazev: 'Periodo di prova (ch.ch)', url: 'https://www.ch.ch/it/lavoro/contratti--certificati--periodo-di-prova/periodo-di-prova' };
export const CH_LOCAZIONE = { nazev: 'Contratto di locazione e contratto d’affitto (ch.ch)', url: 'https://www.ch.ch/it/abitazioni/locazione/contratto-di-locazione-e-contratto-d-affitto' };
export const CH_CASSA = { nazev: 'Assicurazione malattie – cambiare e disdire (ch.ch)', url: 'https://www.ch.ch/it/assicurazione-malattie' };
export const CH_DONAZIONI = { nazev: 'Imposta sulle donazioni (ch.ch)', url: 'https://www.ch.ch/it/deduzione-di-donazioni' };
export const CH_RESTITUIRE = { nazev: 'Restituire o sostituire merci acquistate (ch.ch)', url: 'https://www.ch.ch/it/sicurezza-e-diritto/restituire-o-sostituire-merci-acquistate' };
export const CH_IMMATRICOLAZIONE = { nazev: 'Immatricolare un veicolo (ch.ch)', url: 'https://www.ch.ch/it/imposta-circolazione' };
export const CH_COLLAUDO = { nazev: 'Esame dei veicoli a motore – collaudo (ch.ch)', url: 'https://www.ch.ch/it/esame-dei-veicoli-a-motore--collaudo-' };
export const ASA = { nazev: 'Uffici della circolazione dei Cantoni (asa.ch)', url: 'https://asa.ch/it/servizi-della-circolazione/indirizzi/' };
export const DFAE_BAMBINI = { nazev: 'Viaggiare con dei bambini (DFAE)', url: 'https://www.eda.admin.ch/it/viaggiare-con-dei-bambini' };
export const DFAE_VIAGGIARE = { nazev: 'Viaggiare – consigli di viaggio (DFAE)', url: 'https://www.eda.admin.ch/it/viaggiare' };
export const UFG_RAPIMENTO = { nazev: 'Rapimento internazionale di minori (Ufficio federale di giustizia)', url: 'https://www.bj.admin.ch/it/rapimento-internazionale-di-minori' };
export const SECO_FAQ = { nazev: 'FAQ sulla disdetta del rapporto di lavoro (SECO)', url: 'https://www.seco.admin.ch/it/faq-disdetta' };
export const TRAVAIL_SWISS = { nazev: 'First steps after dismissal (lavoro.swiss, SECO)', url: 'https://www.arbeit.swiss/en/jobseekers/first-steps-after-dismissal' };
export const ELCOM = { nazev: 'Domande frequenti sulle tariffe elettriche e il servizio universale (ElCom)', url: 'https://www.elcom.admin.ch/it/faq-tariffe-elettriche' };
export const OMBUDSCOM = { nazev: 'When can I turn to ombudscom? (UFCOM, in inglese)', url: 'https://www.bakom.admin.ch/en/when-can-i-turn-to-ombudscom' };

export const CONSIGLIO_IDENTITA = 'Verificate l’identità dell’altra parte con il passaporto o la carta d’identità e riprendete nome e indirizzo esattamente così.';
export const CONSIGLIO_PAGAMENTO = 'Per importi elevati preferite un bonifico – l’estratto conto è la prova di pagamento migliore. In caso di pagamento in contanti fatevi firmare una quietanza.';
export const piede = (kod: string, verze = '1.0') =>
  `Modello gratuito · modello ${kod} v${verze} · modello da compilare, non una consulenza giuridica · le parti sono responsabili del contenuto`;
