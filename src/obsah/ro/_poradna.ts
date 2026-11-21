import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'ghid',
  nazev: 'Ghid practic',
  title: 'Ghid practic – vânzare mașină, împrumut, chirie și cumpărături',
  description: 'Ghiduri pas cu pas: vânzarea și transcrierea mașinii, împrumutul între prieteni, donația, închirierea locuinței, returul și reclamația. Cu modele gratuite.',
  h1: 'Ghid practic',
  h1Span: 'Ghiduri pas cu pas pentru situații de zi cu zi. Fără limbaj juridic greoi, după legislația în vigoare.',
  kategorie: [
    {
      slug: 'auto',
      nazev: 'Auto',
      popis: 'Vânzarea și cumpărarea unei mașini rulate, transcrierea.',
      ilustrace: 'auto',
      temata: [
        { slug: 'vanzare-masina', nazev: 'Vânzarea mașinii', popis: 'Contract, ITL 054 și predare.' },
        { slug: 'cumparare-masina', nazev: 'Cumpărarea unei mașini rulate', popis: 'Ce verificați înainte de plată.' },
        { slug: 'transcriere', nazev: 'Transcrierea', popis: 'Termene, viza fiscală, procură.' },
      ],
    },
    {
      slug: 'bani',
      nazev: 'Bani și donații',
      popis: 'Împrumut între prieteni, recunoașterea datoriei, prescripția, donația.',
      ilustrace: 'penize',
      temata: [
        { slug: 'imprumut', nazev: 'Împrumutul', popis: 'Cum dați bani cu împrumut și îi recuperați.' },
        { slug: 'datorie', nazev: 'Datorii', popis: 'Recunoaștere, rate, prescripție.' },
        { slug: 'donatie', nazev: 'Donația', popis: 'Darul manual și când e nevoie de notar.' },
      ],
    },
    {
      slug: 'locuinta',
      nazev: 'Locuință și închiriere',
      popis: 'Închirierea locuinței, garanția, încetarea și predarea.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'inchiriere', nazev: 'Închirierea locuinței', popis: 'Contract, garanție, ANAF.' },
        { slug: 'sfarsit-inchiriere', nazev: 'Sfârșitul închirierii', popis: 'Preaviz, predare, garanție.' },
      ],
    },
    {
      slug: 'cumparaturi',
      nazev: 'Cumpărături și reclamații',
      popis: 'Retur online, produse neconforme, vânzare prin anunț.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'retur', nazev: 'Returul', popis: '14 zile fără motiv.' },
        { slug: 'reclamatie', nazev: 'Reclamația', popis: 'Reparare, înlocuire, bani înapoi.' },
        { slug: 'vanzare-anunt', nazev: 'Vânzarea prin anunț', popis: 'Contract, plată și înșelătorii.' },
        { slug: 'comodat', nazev: 'Împrumutul unui bun', popis: 'Folosință gratuită și pagube.' },
      ],
    },
    {
      slug: 'servicii',
      nazev: 'Meseriași și servicii',
      popis: 'Contractul cu un meseriaș, întârzieri, vicii și plată.',
      ilustrace: 'protokol',
      temata: [{ slug: 'meseriasi', nazev: 'Meseriași', popis: 'Contract de antrepriză, termen și vicii.' }],
    },
    {
      slug: 'munca',
      nazev: 'Muncă',
      popis: 'Demisia și preavizul.',
      ilustrace: 'protokol',
      temata: [{ slug: 'demisie', nazev: 'Demisia', popis: 'Preaviz și renunțarea la preaviz.' }],
    },
    {
      slug: 'familie',
      nazev: 'Familie și călătorii',
      popis: 'Călătoria copilului fără părinți și declarația notarială.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'calatorie-minor', nazev: 'Călătoria minorului', popis: 'Acordul părinților și notarul.' }],
    },
    {
      slug: 'procura',
      nazev: 'Procuri și reprezentare',
      popis: 'Când altcineva rezolvă ceva în locul dvs.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'procura', nazev: 'Procura', popis: 'Sub semnătură privată sau la notar.' }],
    },
  ],
};
