import type { Zeme } from '../typy';

export const zeme: Zeme = {
  kod: 'at',
  nazev: 'Österreich',
  nazevEn: 'Austria',
  jazyk: 'de',
  hreflang: 'de-AT',
  casovaZona: 'Europe/Vienna',
  aktivni: true,
  poradi: 5,
  kategorie: { auto: 'Auto und Fahrzeuge', geld: 'Geld' },
  skupiny: {
    auto: [
      { slug: 'kaufvertrag-gebrauchtwagen', popis: 'Privatverkauf eines gebrauchten Autos.' },
      { slug: 'quittung', popis: 'Bestätigung der Barzahlung.' },
    ],
    geld: [
      { slug: 'darlehensvertrag', popis: 'Geld leihen, auch in Raten.' },
      { slug: 'quittung', popis: 'Empfangsbestätigung für Bargeld.' },
    ],
  },
  pripravujeme: [
    { nazev: 'Übergabeprotokoll Kfz', popis: 'Zustand, Schlüssel und Papiere bei der Übergabe.', kategorie: 'auto', ilustrace: 'protokol', slova: ['Übergabeprotokoll', 'Protokoll'] },
    { nazev: 'Vollmacht', popis: 'Jemanden mit einer Angelegenheit beauftragen.', kategorie: 'geld', ilustrace: 'plnamoc', slova: ['Vollmacht', 'Zulassungsstelle', 'Post'] },
  ],
  rozcestnik: {
    nadpis: 'Welches Dokument brauche ich?',
    span: 'Wählen Sie Ihre Situation – wir sagen, was Sie brauchen.',
    situace: [
      {
        nazev: 'Auto',
        ilustrace: 'auto',
        moznosti: [{ text: 'Ich verkaufe oder kaufe ein gebrauchtes Auto', dokumenty: ['kaufvertrag-gebrauchtwagen', 'quittung'], tip: 'Verkäufer meldet ab, Käufer meldet mit Kaufvertrag und Pickerl an.' }],
      },
      {
        nazev: 'Geld',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Ich leihe jemandem Geld', dokumenty: ['darlehensvertrag', 'quittung'] },
          { text: 'Ich übergebe oder erhalte Bargeld', dokumenty: ['quittung'] },
        ],
      },
    ],
  },
  hub: {
    title: 'Vertragsvorlagen Österreich kostenlos als PDF – online ausfüllen',
    description: 'Kostenlose Vertragsvorlagen nach österreichischem Recht: Kfz-Kaufvertrag von privat, Darlehensvertrag, Quittung. Online ausfüllen, PDF oder Word laden.',
    stitek: 'Österreich',
    stitekSpan: 'Verträge nach österreichischem Recht',
    h1: 'Vertragsvorlagen',
    h1Span: 'In wenigen Minuten online ausfüllen oder leere Vorlage laden. Auch als Word, ohne Anmeldung.',
    hledaniNadpis: 'Welchen Vertrag brauchen Sie?',
    hledaniSpan: 'Suchen Sie nach Situation, nicht nach Paragrafen.',
    ogPopis: 'Nach österreichischem Recht. Online ausfüllen.',
  },
};
