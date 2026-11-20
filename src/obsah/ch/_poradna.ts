import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'ratgeber',
  nazev: 'Ratgeber',
  title: 'Ratgeber Schweiz – Autoverkauf, Darlehen, Betreibung, Mängelrüge',
  description: 'Praktische Anleitungen nach Schweizer Recht: Auto privat verkaufen, Geld verleihen, Schulden eintreiben, Mängel rügen. Mit kostenlosen Vorlagen.',
  h1: 'Ratgeber',
  h1Span: 'Anleitungen Schritt für Schritt für typische Alltagssituationen. Ohne Juristendeutsch, nach Schweizer Recht.',
  kategorie: [
    {
      slug: 'auto',
      nazev: 'Auto und Fahrzeuge',
      popis: 'Occasion verkaufen und kaufen, Strassenverkehrsamt.',
      ilustrace: 'auto',
      temata: [
        { slug: 'auto-verkaufen', nazev: 'Auto verkaufen', popis: 'Privat verkaufen, ohne etwas zu vergessen.' },
        { slug: 'auto-kaufen', nazev: 'Occasion kaufen', popis: 'Worauf Sie vor der Zahlung achten.' },
        { slug: 'strassenverkehrsamt', nazev: 'Strassenverkehrsamt', popis: 'Einlösen, Schilder, Vollmacht.' },
      ],
    },
    {
      slug: 'geld',
      nazev: 'Geld und Schulden',
      popis: 'Privatdarlehen, Schuldanerkennung, Betreibung, Schenkungen.',
      ilustrace: 'penize',
      temata: [
        { slug: 'darlehen', nazev: 'Privatdarlehen', popis: 'Geld verleihen, damit es zurückkommt.' },
        { slug: 'schulden', nazev: 'Schulden und Betreibung', popis: 'Schuldanerkennung, Rechtsöffnung, Verjährung.' },
        { slug: 'schenkung', nazev: 'Schenkung', popis: 'Form und kantonale Schenkungssteuer.' },
      ],
    },
    {
      slug: 'einkauf',
      nazev: 'Einkauf und Reklamation',
      popis: 'Rückgabe, Mängelrüge, privat verkaufen.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'rueckgabe', nazev: 'Rückgabe und Widerruf', popis: 'Was online, an der Haustür und am Telefon gilt.' },
        { slug: 'gewaehrleistung', nazev: 'Gewährleistung', popis: 'Sofort rügen, Fristen und Rechte.' },
        { slug: 'handwerker', nazev: 'Handwerker', popis: 'Werkvertrag, Preis, Abnahme.' },
      ],
    },
    {
      slug: 'alltag',
      nazev: 'Behörden und Vollmachten',
      popis: 'Wenn jemand anderes etwas für Sie erledigt.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'vollmacht', nazev: 'Vollmacht', popis: 'Wann eine einfache Vollmacht reicht.' }, { slug: 'kinder', nazev: 'Kinder auf Reisen', popis: 'Einverständniserklärung für Auslandsreisen.' }],
    },
    {
      slug: 'wohnen',
      nazev: 'Wohnen und Miete',
      popis: 'Wohnung mieten und vermieten, Mietkaution, Kündigung und Abgabe.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'mietvertrag', nazev: 'Mietvertrag', popis: 'Mietzins, Nebenkosten, Kaution.' },
        { slug: 'kuendigung', nazev: 'Kündigung und Auszug', popis: 'Termine, Nachmieter, Wohnungsabgabe.' },
      ],
    },
  ],
};
