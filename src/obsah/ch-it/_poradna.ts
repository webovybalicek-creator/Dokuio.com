import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'guida',
  nazev: 'Guida',
  title: 'Guida (Svizzera) – vendita auto, prestito, esecuzione, locazione',
  description: 'Guide pratiche secondo il diritto svizzero: vendere un’auto, prestare denaro, recuperare un debito, disdire la locazione, segnalare un difetto. Con modelli gratuiti.',
  h1: 'Guida',
  h1Span: 'Guide passo per passo per le situazioni quotidiane. Senza gergo giuridico, secondo il diritto svizzero.',
  kategorie: [
    {
      slug: 'auto',
      nazev: 'Auto e veicoli',
      popis: 'Vendere e comprare un’occasione, Ufficio della circolazione.',
      ilustrace: 'auto',
      temata: [
        { slug: 'vendere-auto', nazev: 'Vendere l’auto', popis: 'Vendere tra privati senza dimenticare nulla.' },
        { slug: 'comprare-occasione', nazev: 'Comprare un’occasione', popis: 'Cosa verificare prima di pagare.' },
        { slug: 'ufficio-circolazione', nazev: 'Ufficio della circolazione', popis: 'Immatricolazione, targhe, procura.' },
      ],
    },
    {
      slug: 'denaro',
      nazev: 'Denaro e debiti',
      popis: 'Prestito tra privati, riconoscimento di debito, esecuzione, donazioni.',
      ilustrace: 'penize',
      temata: [
        { slug: 'prestito', nazev: 'Prestito tra privati', popis: 'Prestare denaro perché torni indietro.' },
        { slug: 'debiti', nazev: 'Debiti ed esecuzione', popis: 'Riconoscimento di debito, rigetto dell’opposizione, prescrizione.' },
        { slug: 'donazione', nazev: 'Donazione', popis: 'Forma e imposta cantonale sulle donazioni.' },
      ],
    },
    {
      slug: 'acquisti',
      nazev: 'Acquisti e reclami',
      popis: 'Restituzione, avviso dei difetti, vendita tra privati, artigiani.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'restituzione', nazev: 'Restituzione e revoca', popis: 'Cosa vale online, a domicilio e per telefono.' },
        { slug: 'garanzia', nazev: 'Garanzia', popis: 'Avviso immediato, termini e diritti.' },
        { slug: 'vendita-privati', nazev: 'Vendita tra privati', popis: 'Annuncio, contratto di compravendita, truffe.' },
        { slug: 'artigiani', nazev: 'Artigiani', popis: 'Contratto d’appalto, prezzo, collaudo.' },
      ],
    },
    {
      slug: 'quotidiano',
      nazev: 'Pratiche e procure',
      popis: 'Quando qualcun altro agisce per voi.',
      ilustrace: 'plnamoc',
      temata: [
        { slug: 'procura', nazev: 'Procura', popis: 'Quando basta una procura semplice.' },
        { slug: 'bambini', nazev: 'Bambini in viaggio', popis: 'Autorizzazione per un viaggio all’estero.' },
        { slug: 'comodato', nazev: 'Prestare una cosa', popis: 'Comodato, restituzione.' },
      ],
    },
    {
      slug: 'abitare',
      nazev: 'Abitazione e locazione',
      popis: 'Affittare un appartamento, deposito di garanzia, disdetta e riconsegna.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'locazione', nazev: 'Contratto di locazione', popis: 'Pigione, spese accessorie, garanzia.' },
        { slug: 'disdetta', nazev: 'Disdetta e trasloco', popis: 'Termini, nuovo conduttore, riconsegna.' },
      ],
    },
    {
      slug: 'lavoro',
      nazev: 'Lavoro e contratti',
      popis: 'Dimissioni, disdetta di abbonamenti e assicurazioni.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'dimissioni', nazev: 'Dimissioni', popis: 'Termini, tempo di prova e disoccupazione.' },
        { slug: 'disdire-contratto', nazev: 'Disdire un contratto', popis: 'Assicurazione, cassa malati, cellulare, fitness.' },
      ],
    },
  ],
};
