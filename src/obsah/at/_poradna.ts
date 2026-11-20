import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'ratgeber',
  nazev: 'Ratgeber',
  title: 'Ratgeber Österreich – Autoverkauf, Darlehen, Rücktritt, Gewährleistung',
  description: 'Anleitungen nach österreichischem Recht (ABGB, FAGG, VGG): Auto privat verkaufen, Geld verleihen, Rücktritt vom Online-Kauf, Gewährleistung – mit Vorlagen.',
  h1: 'Ratgeber',
  h1Span: 'Anleitungen Schritt für Schritt für typische Alltagssituationen. Ohne Juristendeutsch, nach geltendem Recht.',
  kategorie: [
    {
      slug: 'auto',
      nazev: 'Auto und Fahrzeuge',
      popis: 'Gebrauchtwagen verkaufen und kaufen, Zulassung.',
      ilustrace: 'auto',
      temata: [
        { slug: 'auto-verkaufen', nazev: 'Auto verkaufen', popis: 'Privat verkaufen, ohne etwas zu vergessen.' },
        { slug: 'auto-kaufen', nazev: 'Gebrauchtwagen kaufen', popis: 'Worauf Sie vor der Zahlung achten.' },
        { slug: 'zulassung', nazev: 'Zulassung', popis: 'Ummelden, abmelden, Vollmacht.' },
      ],
    },
    {
      slug: 'geld',
      nazev: 'Geld und Schulden',
      popis: 'Privatdarlehen, Schuldanerkenntnis, Schenkungen.',
      ilustrace: 'penize',
      temata: [
        { slug: 'darlehen', nazev: 'Privatdarlehen', popis: 'Geld verleihen, damit es zurückkommt.' },
        { slug: 'schulden', nazev: 'Schulden', popis: 'Schuldanerkenntnis und Verjährung nach ABGB.' },
        { slug: 'schenkung', nazev: 'Schenkung', popis: 'Form, Freibeträge, Meldung.' },
      ],
    },
    {
      slug: 'einkauf',
      nazev: 'Einkauf und Reklamation',
      popis: 'Online-Kauf zurückgeben, Mängel reklamieren, privat verkaufen.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'widerruf', nazev: 'Widerruf und Rückgabe', popis: '14 Tage Widerrufsrecht.' },
        { slug: 'gewaehrleistung', nazev: 'Gewährleistung', popis: 'Fristen und Rechte bei Mängeln.' },
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
      popis: 'Wohnung mieten und vermieten, Kaution, Befristung und Kündigung.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'mietvertrag', nazev: 'Mietvertrag', popis: 'Mietzins, Befristung, Kaution.' },
        { slug: 'kuendigung', nazev: 'Kündigung und Auszug', popis: 'Fristen, Rückgabe, Kaution zurück.' },
      ],
    },
  ],
};
