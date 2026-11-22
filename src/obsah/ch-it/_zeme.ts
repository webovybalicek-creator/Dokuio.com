import type { Zeme } from '../typy';

/**
 * Svizzera italiana – modelli in italiano secondo il diritto svizzero (CO, LEF, CC, LCA). Stesso contenuto giuridico dei modelli CH
 * in tedesco e in francese, verificato il 2026-11-22 su Fedlex (versione italiana) e sulle pagine italiane di ch.ch, del DFAE,
 * dell’UFG, della SECO e dell’ElCom (vedi src/sablony/ch-it/fonti.ts). Indirizzo /ch-it/ (non /ch/it/). Le pagine rimandano
 * tramite hreflang alle pagine tedesche e francesi corrispondenti (protejsky).
 */
export const zeme: Zeme = {
  kod: 'ch-it',
  nazev: 'Svizzera',
  nazevEn: 'Switzerland (Italian)',
  jazyk: 'it-CH',
  hreflang: 'it-CH',
  casovaZona: 'Europe/Zurich',
  aktivni: true,
  poradi: 6.2,
  skupina: 'ch',
  kategorie: { auto: 'Auto e veicoli', geld: 'Denaro e donazioni', wohnen: 'Abitazione e locazione', alltag: 'Vita quotidiana, acquisti e procure', dienst: 'Artigiani e mandati', arbeit: 'Lavoro', familie: 'Famiglia e viaggi' },
  skupiny: {
    auto: [
      { slug: 'contratto-di-compravendita-auto', popis: 'Vendita di un’auto d’occasione tra privati.' },
      { slug: 'contratto-di-compravendita-moto', popis: 'Vendita di una moto, di uno scooter o di un quad.' },
      { slug: 'verbale-di-consegna-veicolo', popis: 'Chilometri, danni e chiavi alla consegna.' },
      { slug: 'procura-ufficio-della-circolazione', popis: 'Se qualcun altro va all’Ufficio della circolazione.' },
      { slug: 'quietanza', popis: 'Conferma del pagamento in contanti.' },
    ],
    geld: [
      { slug: 'contratto-di-prestito', popis: 'Prestare denaro, anche a rate.' },
      { slug: 'quietanza', popis: 'Conferma di ricezione di denaro contante.' },
      { slug: 'riconoscimento-di-debito', popis: 'Confermare un debito per iscritto – utile in caso di esecuzione.' },
      { slug: 'accordo-pagamento-rateale', popis: 'Pagare un debito a rate, firmato da entrambi.' },
      { slug: 'diffida-di-pagamento', popis: 'Sollecito di pagamento con un termine.' },
      { slug: 'contratto-di-donazione', popis: 'Donare denaro o una cosa.' },
    ],
    wohnen: [
      { slug: 'contratto-di-locazione-appartamento', popis: 'Contratto di locazione per un appartamento.' },
      { slug: 'verbale-di-consegna-appartamento', popis: 'Contatori, difetti e chiavi.' },
      { slug: 'disdetta-contratto-di-locazione', popis: 'Disdetta data dal conduttore.' },
      { slug: 'accordo-risoluzione-locazione', popis: 'Fine della locazione di comune accordo.' },
      { slug: 'contratto-di-sublocazione', popis: 'Sublocare una camera o l’appartamento.' },
      { slug: 'lettera-di-disdetta', popis: 'Elettricità, internet e TV in caso di trasloco.' },
    ],
    alltag: [
      { slug: 'contratto-di-comodato', popis: 'Prestare una cosa gratuitamente.' },
      { slug: 'procura', popis: 'Perché una persona sbrighi una faccenda al vostro posto.' },
      { slug: 'contratto-di-compravendita-tra-privati', popis: 'Vendere un oggetto d’occasione tra privati.' },
      { slug: 'avviso-dei-difetti', popis: 'Segnalare subito una merce difettosa.' },
      { slug: 'revoca-contratto-vendita-a-domicilio', popis: 'Revocare un acquisto a domicilio o per telefono entro 14 giorni.' },
      { slug: 'dichiarazione-sull-onore', popis: 'Dichiarazione scritta per la scuola, la banca o il locatore.' },
      { slug: 'lettera-di-disdetta', popis: 'Disdire cellulare, assicurazione, fitness o abbonamento.' },
    ],
    dienst: [
      { slug: 'contratto-d-appalto', popis: 'Artigiano, ristrutturazione o riparazione.' },
      { slug: 'quietanza', popis: 'Quietanzare un acconto in contanti.' },
      { slug: 'diffida-di-pagamento', popis: 'Se il cliente non paga.' },
      { slug: 'accordo-pagamento-rateale', popis: 'Se il cliente vuole pagare a rate.' },
      { slug: 'lettera-di-disdetta', popis: 'Porre fine a un mandato in ogni tempo (art. 404 CO).' },
    ],
    disdette: [
      { slug: 'lettera-di-disdetta', popis: 'Cellulare, assicurazione, cassa malati, fitness, abbonamento o mandato.' },
      { slug: 'lettera-di-dimissioni', popis: 'Dimettersi come lavoratore o lavoratrice.' },
      { slug: 'disdetta-contratto-di-locazione', popis: 'Disdire la locazione come conduttore.' },
      { slug: 'revoca-contratto-vendita-a-domicilio', popis: 'Revocare un acquisto a domicilio o per telefono entro 14 giorni.' },
    ],
    familie: [
      { slug: 'autorizzazione-viaggio-minorenne', popis: 'Il figlio viaggia all’estero senza i genitori o con un solo genitore.' },
      { slug: 'procura', popis: 'Perché una persona sbrighi una faccenda al vostro posto.' },
      { slug: 'dichiarazione-sull-onore', popis: 'Dichiarazione scritta per la scuola, la banca o il locatore.' },
    ],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'vendita-auto',
      nazev: 'Vendita dell’auto',
      popis: 'Contratto di compravendita, verbale di consegna, procura per l’Ufficio della circolazione e quietanza.',
      ilustrace: 'auto',
      dokumenty: ['contratto-di-compravendita-auto', 'verbale-di-consegna-veicolo', 'procura-ufficio-della-circolazione', 'quietanza'],
      title: 'Vendita dell’auto in Svizzera – modelli gratuiti in un solo PDF',
      description: 'Tutto per vendere un’auto d’occasione tra privati in Svizzera: contratto di compravendita, verbale di consegna, procura per la circolazione e quietanza.',
      perex: 'Compilate il contratto di compravendita – gli altri documenti riprendono i dati. Poi scaricate tutto in una volta in un solo PDF.',
    },
    {
      slug: 'prestare-denaro',
      nazev: 'Prestare denaro',
      popis: 'Contratto di prestito con piano di restituzione e quietanza.',
      ilustrace: 'pujcka',
      dokumenty: ['contratto-di-prestito', 'quietanza'],
      title: 'Prestare denaro – modello di contratto di prestito gratis in PDF',
      description: 'Un prestito tra privati nero su bianco: contratto di prestito secondo il CO con piano di restituzione e quietanza per il denaro consegnato. Gratis, PDF e Word.',
      perex: 'Contratto di prestito con piano di restituzione e quietanza per il denaro consegnato.',
    },
  ],
  rozcestnik: {
    nadpis: 'Di quale documento ho bisogno?',
    span: 'Scegliete la vostra situazione – vi diciamo cosa vi serve.',
    situace: [
      {
        nazev: 'Auto',
        ilustrace: 'auto',
        moznosti: [
          { text: 'Vendo o compro un’auto d’occasione', dokumenty: ['contratto-di-compravendita-auto', 'verbale-di-consegna-veicolo', 'quietanza'], balicek: 'vendita-auto', tip: 'Le targhe restano al venditore; l’acquirente immatricola l’auto con la propria assicurazione.' },
          { text: 'Vendo una moto, uno scooter o un quad', dokumenty: ['contratto-di-compravendita-moto', 'verbale-di-consegna-veicolo', 'quietanza'] },
          { text: 'Qualcun altro va per me all’Ufficio della circolazione', dokumenty: ['procura-ufficio-della-circolazione'] },
          { text: 'Presto la mia auto', dokumenty: ['verbale-di-consegna-veicolo'] },
        ],
      },
      {
        nazev: 'Abitazione',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Do o prendo in locazione un appartamento', dokumenty: ['contratto-di-locazione-appartamento', 'verbale-di-consegna-appartamento'] },
          { text: 'Voglio disdire la locazione', dokumenty: ['disdetta-contratto-di-locazione', 'accordo-risoluzione-locazione'], tip: 'Almeno tre mesi per un termine usuale, per iscritto e firmata a mano.' },
          { text: 'Trasloco e disdico elettricità, internet o TV', dokumenty: ['lettera-di-disdetta'], tip: 'Le economie domestiche non possono scegliere il fornitore di elettricità – in caso di trasloco basta annunciare la partenza.' },
          { text: 'Subloco una camera', dokumenty: ['contratto-di-sublocazione'], tip: 'Con il consenso del locatore.' },
        ],
      },
      {
        nazev: 'Denaro',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Presto denaro a qualcuno', dokumenty: ['contratto-di-prestito', 'quietanza'], balicek: 'prestare-denaro' },
          { text: 'Qualcuno mi deve denaro e vuole pagare a rate', dokumenty: ['accordo-pagamento-rateale', 'riconoscimento-di-debito'], tip: 'Con un riconoscimento di debito firmato è possibile il rigetto provvisorio dell’opposizione nell’esecuzione.' },
          { text: 'Qualcuno non mi paga', dokumenty: ['diffida-di-pagamento'], tip: 'Interesse moratorio del 5 % all’anno dalla mora.' },
          { text: 'Dono denaro o una cosa', dokumenty: ['contratto-di-donazione'], tip: 'L’imposta sulle donazioni è di competenza del Cantone.' },
          { text: 'Consegno o ricevo denaro contante', dokumenty: ['quietanza'] },
        ],
      },
      {
        nazev: 'Vita quotidiana e acquisti',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Ho comprato qualcosa alla porta o per telefono', dokumenty: ['revoca-contratto-vendita-a-domicilio'], tip: '14 giorni, da 100 franchi. Nessun diritto legale di revoca per gli acquisti online.' },
          { text: 'La merce acquistata è difettosa', dokumenty: ['avviso-dei-difetti'], tip: 'Segnalate subito il difetto.' },
          { text: 'Vendo un oggetto d’occasione tra privati', dokumenty: ['contratto-di-compravendita-tra-privati'] },
          { text: 'Presto una cosa a un amico', dokumenty: ['contratto-di-comodato'] },
          { text: 'Qualcuno deve sbrigare una faccenda per me', dokumenty: ['procura'] },
          { text: 'Voglio disdire cellulare, assicurazione, cassa malati, fitness o un abbonamento', dokumenty: ['lettera-di-disdetta'], tip: 'Per raccomandata – di solito conta la ricezione.' },
        ],
      },
      {
        nazev: 'Lavoro, artigiani e famiglia',
        ilustrace: 'plnamoc',
        moznosti: [
          { text: 'Affido lavori a un artigiano', dokumenty: ['contratto-d-appalto'] },
          { text: 'Mi dimetto', dokumenty: ['lettera-di-dimissioni'], tip: 'Dopo il tempo di prova da 1 a 3 mesi per la fine di un mese, secondo l’anno di servizio e il contratto.' },
          { text: 'Mio figlio viaggia all’estero senza di me', dokumenty: ['autorizzazione-viaggio-minorenne'], tip: 'Il DFAE raccomanda vivamente l’autorizzazione; verificate le regole del Paese di destinazione presso l’ambasciata.' },
          { text: 'Mi serve una dichiarazione scritta', dokumenty: ['dichiarazione-sull-onore'] },
        ],
      },
    ],
  },
  hub: {
    title: 'Modelli di contratto gratis in PDF (Svizzera) – da compilare online',
    description: 'Modelli di contratto gratuiti secondo il diritto svizzero (CO): compravendita auto, prestito, riconoscimento di debito, locazione, procura e altro. PDF o Word.',
    stitek: 'Svizzera',
    stitekSpan: 'contratti secondo il diritto svizzero',
    h1: 'Modelli di contratto',
    h1Span: 'Da compilare online in pochi minuti o da scaricare vuoti. Anche in Word, senza registrazione.',
    hledaniNadpis: 'Di quale contratto avete bisogno?',
    hledaniSpan: 'Cercate secondo la vostra situazione, non secondo gli articoli di legge.',
    ogPopis: 'Secondo il diritto svizzero. Da compilare online.',
  },
};
