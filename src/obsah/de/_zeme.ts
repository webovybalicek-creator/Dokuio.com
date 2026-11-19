import type { Zeme } from '../typy';

export const zeme: Zeme = {
  kod: 'de',
  nazev: 'Deutschland',
  nazevEn: 'Germany',
  jazyk: 'de',
  hreflang: 'de-DE',
  casovaZona: 'Europe/Berlin',
  aktivni: true,
  poradi: 4,
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
    { nazev: 'Übergabeprotokoll Fahrzeug', popis: 'Zustand, Schlüssel und Papiere bei der Übergabe.', kategorie: 'auto', ilustrace: 'protokol', slova: ['Übergabeprotokoll', 'Protokoll'] },
    { nazev: 'Vollmacht', popis: 'Jemanden mit einer Angelegenheit beauftragen.', kategorie: 'geld', ilustrace: 'plnamoc', slova: ['Vollmacht', 'Zulassungsstelle', 'Post'] },
  ],
  rozcestnik: {
    nadpis: 'Welches Dokument brauche ich?',
    span: 'Wählen Sie Ihre Situation – wir sagen, was Sie brauchen.',
    situace: [
      {
        nazev: 'Auto',
        ilustrace: 'auto',
        moznosti: [{ text: 'Ich verkaufe oder kaufe ein gebrauchtes Auto', dokumenty: ['kaufvertrag-gebrauchtwagen', 'quittung'], tip: 'Verkäufer: Veräußerung unverzüglich der Zulassungsbehörde und der Versicherung melden.' }],
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
    title: 'Vertragsvorlagen kostenlos als PDF – online ausfüllen',
    description: 'Kostenlose Vertragsvorlagen nach deutschem Recht: Kaufvertrag Gebrauchtwagen, privater Darlehensvertrag, Quittung. Online ausfüllen, PDF oder Word laden.',
    stitek: 'Deutschland',
    stitekSpan: 'Verträge nach deutschem Recht',
    h1: 'Vertragsvorlagen',
    h1Span: 'In wenigen Minuten online ausfüllen oder leere Vorlage laden. Auch als Word, ohne Anmeldung.',
    hledaniNadpis: 'Welchen Vertrag brauchen Sie?',
    hledaniSpan: 'Suchen Sie nach Situation, nicht nach Paragrafen.',
    ogPopis: 'Nach deutschem Recht. Online ausfüllen.',
  },
};
