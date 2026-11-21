import type { Zeme } from '../typy';

/**
 * România. Modele verificate la 21. 11. 2026 după legislatie.just.ro, ANAF, ANPC și Poliția de Frontieră (vezi src/sablony/ro/surse.ts).
 */
export const zeme: Zeme = {
  kod: 'ro',
  nazev: 'România',
  nazevEn: 'Romania',
  jazyk: 'ro',
  hreflang: 'ro-RO',
  casovaZona: 'Europe/Bucharest',
  aktivni: true,
  poradi: 10,
  kategorie: { auto: 'Auto și vehicule', bani: 'Bani și donații', locuinta: 'Locuință și închiriere', cumparaturi: 'Cumpărături și acte', servicii: 'Servicii și meseriași', munca: 'Muncă', familie: 'Familie și călătorii' },
  skupiny: {
    auto: [
      { slug: 'contract-vanzare-cumparare-auto', popis: 'Vânzarea unei mașini rulate între persoane fizice.' },
      { slug: 'proces-verbal-predare-vehicul', popis: 'Kilometraj, deteriorări, chei și ora predării.' },
      { slug: 'procura', popis: 'Când altcineva se ocupă de acte.' },
      { slug: 'chitanta-primire-bani', popis: 'Dovada plății în numerar.' },
      { slug: 'contract-vanzare-cumparare-moto', popis: 'Motocicletă, scuter sau ATV.' },
    ],
    bani: [
      { slug: 'contract-imprumut', popis: 'Împrumut unui prieten sau unei rude, și în rate.' },
      { slug: 'chitanta-primire-bani', popis: 'Chitanță pentru banii primiți.' },
      { slug: 'recunoastere-datorie', popis: 'Debitorul recunoaște în scris datoria și termenul.' },
      { slug: 'contract-donatie', popis: 'Dar manual de bani sau bunuri până la 25.000 lei.' },
      { slug: 'notificare-plata', popis: 'Somarea debitorului cu un termen de plată.' },
      { slug: 'acord-plata-esalonata', popis: 'Datoria în rate lunare.' },
    ],
    locuinta: [
      { slug: 'contract-inchiriere-locuinta', popis: 'Închirierea unei locuințe cu garanție.' },
      { slug: 'proces-verbal-predare-locuinta', popis: 'Contoare, chei și starea locuinței.' },
      { slug: 'denuntare-contract-inchiriere', popis: 'Chiriașul încheie închirierea cu preaviz.' },
      { slug: 'acord-incetare-inchiriere', popis: 'Sfârșitul închirierii prin acord, fără preaviz.' },
      { slug: 'contract-subinchiriere', popis: 'Cameră sau locuință cu acordul proprietarului.' },
    ],
    cumparaturi: [
      { slug: 'contract-vanzare-cumparare', popis: 'Vânzarea unui bun folosit prin anunț.' },
      { slug: 'formular-retragere', popis: 'Returnarea produselor cumpărate online în 14 zile.' },
      { slug: 'reclamatie-produs-neconform', popis: 'Produs cu defect, garanția legală de 2 ani.' },
      { slug: 'procura', popis: 'Când altcineva rezolvă ceva în locul dvs.' },
      { slug: 'notificare-reziliere-contract', popis: 'Operator, asigurare, fitness, abonament.' },
      { slug: 'contract-comodat', popis: 'Împrumutul gratuit al unui bun.' },
      { slug: 'declaratie-pe-proprie-raspundere', popis: 'Declarație scrisă pentru o instituție sau bancă.' },
    ],
    servicii: [
      { slug: 'contract-prestari-servicii', popis: 'Meseriaș, reparație, renovare.' },
      { slug: 'notificare-plata', popis: 'Când beneficiarul nu plătește.' },
    ],
    munca: [{ slug: 'demisie', popis: 'Demisia salariatului cu preaviz.' }],
    familie: [{ slug: 'declaratie-acord-calatorie-minor', popis: 'Copilul călătorește fără unul sau ambii părinți.' }],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'vanzare-masina',
      nazev: 'Vânzarea mașinii',
      popis: 'Contract de vânzare-cumpărare, proces-verbal de predare și chitanță.',
      ilustrace: 'auto',
      dokumenty: ['contract-vanzare-cumparare-auto', 'proces-verbal-predare-vehicul', 'chitanta-primire-bani'],
      title: 'Vânzarea mașinii – toate documentele într-un PDF, gratuit',
      description: 'Tot ce trebuie la vânzarea unei mașini rulate: contract de vânzare-cumpărare, proces-verbal cu ora predării și chitanță. Model gratuit, PDF și Word.',
      perex: 'Completați contractul, celelalte documente preiau datele. Apoi descărcați totul deodată, într-un singur PDF.',
    },
  ],
  rozcestnik: {
    nadpis: 'Nu știți de ce document aveți nevoie?',
    span: 'Alegeți situația și vă arătăm ce trebuie.',
    situace: [
      {
        nazev: 'Mașina',
        ilustrace: 'auto',
        moznosti: [
          { text: 'Vând sau cumpăr o mașină rulată', dokumenty: ['contract-vanzare-cumparare-auto', 'proces-verbal-predare-vehicul'], balicek: 'vanzare-masina', tip: 'Formularul ITL 054 cu viză fiscală; transcrierea în 90 de zile.' },
          { text: 'Împrumut mașina cuiva', dokumenty: ['proces-verbal-predare-vehicul', 'contract-comodat'] },
          { text: 'Vând o motocicletă sau un scuter', dokumenty: ['contract-vanzare-cumparare-moto', 'proces-verbal-predare-vehicul'] },
        ],
      },
      {
        nazev: 'Bani',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Împrumut bani', dokumenty: ['contract-imprumut', 'chitanta-primire-bani'] },
          { text: 'Dau sau primesc bani în numerar', dokumenty: ['chitanta-primire-bani'], tip: 'Între persoane fizice, până la 50.000 lei pe tranzacție.' },
          { text: 'Cineva îmi datorează bani', dokumenty: ['notificare-plata', 'recunoastere-datorie', 'acord-plata-esalonata'], tip: 'Recunoașterea datoriei întrerupe prescripția.' },
          { text: 'Donez bani sau un bun', dokumenty: ['contract-donatie'], tip: 'Fără notar doar darul manual de până la 25.000 lei.' },
        ],
      },
      {
        nazev: 'Locuință',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Închiriez sau iau în chirie o locuință', dokumenty: ['contract-inchiriere-locuinta', 'proces-verbal-predare-locuinta'], tip: 'Proprietarul înregistrează contractul la ANAF în 30 de zile.' },
          { text: 'Vreau să închei închirierea', dokumenty: ['denuntare-contract-inchiriere', 'acord-incetare-inchiriere'], tip: 'Cu preavizul din contract – sau mai repede prin acord.' },
          { text: 'Subînchiriez o cameră sau locuința', dokumenty: ['contract-subinchiriere'], tip: 'Cu acordul scris al proprietarului.' },
        ],
      },
      {
        nazev: 'Cumpărături și acte',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Vreau să returnez un produs cumpărat online', dokumenty: ['formular-retragere'], tip: '14 zile de la primirea produsului.' },
          { text: 'Produsul cumpărat are un defect', dokumenty: ['reclamatie-produs-neconform'], tip: 'Vânzătorul răspunde 2 ani de la livrare.' },
          { text: 'Vând un bun folosit', dokumenty: ['contract-vanzare-cumparare'] },
          { text: 'Cineva trebuie să rezolve ceva în locul meu', dokumenty: ['procura'] },
          { text: 'Închei un abonament, o asigurare sau fitness', dokumenty: ['notificare-reziliere-contract'] },
          { text: 'Împrumut un bun unui prieten', dokumenty: ['contract-comodat'] },
        ],
      },
      {
        nazev: 'Muncă, meseriași și familie',
        ilustrace: 'plnamoc',
        moznosti: [
          { text: 'Angajez un meseriaș', dokumenty: ['contract-prestari-servicii'] },
          { text: 'Îmi dau demisia', dokumenty: ['demisie'], tip: 'Preaviz de cel mult 20 sau 45 de zile lucrătoare.' },
          { text: 'Copilul călătorește fără mine', dokumenty: ['declaratie-acord-calatorie-minor'], tip: 'Declarația se autentifică la notar.' },
          { text: 'Am nevoie de o declarație scrisă', dokumenty: ['declaratie-pe-proprie-raspundere'] },
        ],
      },
    ],
  },
  hub: {
    title: 'Modele de contracte gratuite în PDF – completare online',
    description: 'Modele gratuite de contracte după legea română: vânzare mașină, împrumut, donație, închiriere, procură, reclamație. Online, în PDF sau Word.',
    stitek: 'România',
    stitekSpan: 'contracte după legea română',
    h1: 'Modele de contracte',
    h1Span: 'Completați online în câteva minute sau descărcați modelul gol. Și în Word, fără înregistrare.',
    hledaniNadpis: 'De ce contract aveți nevoie?',
    hledaniSpan: 'Căutați după situație, nu după articole de lege.',
    ogPopis: 'După legea română. Completați online.',
  },
};
