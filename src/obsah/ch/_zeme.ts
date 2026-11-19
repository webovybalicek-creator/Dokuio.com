import type { Zeme } from '../typy';

export const zeme: Zeme = {
  kod: 'ch',
  nazev: 'Schweiz',
  nazevEn: 'Switzerland',
  jazyk: 'de-CH',
  hreflang: 'de-CH',
  casovaZona: 'Europe/Zurich',
  aktivni: true,
  poradi: 6,
  kategorie: { auto: 'Auto und Fahrzeuge', geld: 'Geld und Schenkungen', wohnen: 'Wohnen und Miete', alltag: 'Alltag, Einkauf und Vollmachten' },
  skupiny: {
    auto: [
      { slug: 'kaufvertrag-auto', popis: 'Privatverkauf eines Occasionsfahrzeugs.' },
      { slug: 'uebergabeprotokoll-fahrzeug', popis: 'Kilometerstand, Schäden und Schlüssel bei der Übergabe.' },
      { slug: 'vollmacht-strassenverkehrsamt', popis: 'Wenn jemand anderes zum Strassenverkehrsamt geht.' },
      { slug: 'quittung', popis: 'Bestätigung der Barzahlung.' },
    ],
    geld: [
      { slug: 'darlehensvertrag', popis: 'Geld leihen, auch in Raten.' },
      { slug: 'quittung', popis: 'Empfangsbestätigung für Bargeld.' },
      { slug: 'schuldanerkennung', popis: 'Schuld schriftlich bestätigen – stark in der Betreibung.' },
      { slug: 'schenkungsvertrag', popis: 'Geld oder eine Sache verschenken.' },
    ],
    wohnen: [
      { slug: 'mietvertrag-wohnung', popis: 'Mietvertrag für eine Wohnung.' },
      { slug: 'uebergabeprotokoll-wohnung', popis: 'Zählerstände, Mängel und Schlüssel.' },
      { slug: 'kuendigung-mietvertrag', popis: 'Kündigung durch den Mieter.' },
    ],
    alltag: [
      { slug: 'vollmacht', popis: 'Damit jemand eine Sache für Sie erledigt.' },
      { slug: 'kaufvertrag-privat', popis: 'Gebrauchte Sachen von privat verkaufen.' },
      { slug: 'maengelruege', popis: 'Defekte Ware sofort rügen.' },
      { slug: 'widerruf-haustuergeschaeft', popis: 'Haustür- oder Telefonkauf binnen 14 Tagen widerrufen.' },
    ],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'autoverkauf',
      nazev: 'Autoverkauf',
      popis: 'Kaufvertrag, Übergabeprotokoll, Vollmacht für das Strassenverkehrsamt und Quittung.',
      ilustrace: 'auto',
      dokumenty: ['kaufvertrag-auto', 'uebergabeprotokoll-fahrzeug', 'vollmacht-strassenverkehrsamt', 'quittung'],
      title: 'Autoverkauf Schweiz – alle Dokumente in einem PDF kostenlos',
      description: 'Alles für den privaten Autoverkauf in der Schweiz: Kaufvertrag, Übergabeprotokoll, Vollmacht für das Strassenverkehrsamt und Quittung. Einmal ausfüllen, alles laden.',
      perex: 'Füllen Sie den Kaufvertrag aus – die anderen Dokumente übernehmen die Angaben. Dann alles auf einmal als ein PDF laden.',
    },
    {
      slug: 'geld-leihen',
      nazev: 'Geld leihen',
      popis: 'Darlehensvertrag mit Tilgungsplan und Quittung.',
      ilustrace: 'pujcka',
      dokumenty: ['darlehensvertrag', 'quittung'],
      title: 'Geld leihen – Darlehensvertrag und Quittung kostenlos (Schweiz)',
      description: 'Privates Darlehen schwarz auf weiss: Darlehensvertrag nach OR mit Tilgungsplan und Quittung über die Auszahlung.',
      perex: 'Darlehensvertrag mit Tilgungsplan und eine Quittung über das übergebene Geld.',
    },
  ],
  rozcestnik: {
    nadpis: 'Welches Dokument brauche ich?',
    span: 'Wählen Sie Ihre Situation – wir sagen, was Sie brauchen.',
    situace: [
      {
        nazev: 'Auto',
        ilustrace: 'auto',
        moznosti: [
          { text: 'Ich verkaufe oder kaufe ein Occasionsauto', dokumenty: ['kaufvertrag-auto', 'uebergabeprotokoll-fahrzeug', 'quittung'], balicek: 'autoverkauf', tip: 'Die Schilder bleiben beim Verkäufer, der Käufer löst das Auto mit eigener Versicherung ein.' },
          { text: 'Jemand anderes geht für mich zum Strassenverkehrsamt', dokumenty: ['vollmacht-strassenverkehrsamt'] },
          { text: 'Ich leihe mein Auto aus', dokumenty: ['uebergabeprotokoll-fahrzeug'] },
        ],
      },
      {
        nazev: 'Wohnen',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Ich vermiete oder miete eine Wohnung', dokumenty: ['mietvertrag-wohnung', 'uebergabeprotokoll-wohnung'] },
          { text: 'Ich will meine Wohnung kündigen', dokumenty: ['kuendigung-mietvertrag'] },
        ],
      },
      {
        nazev: 'Geld',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Ich leihe jemandem Geld', dokumenty: ['darlehensvertrag', 'quittung'], balicek: 'geld-leihen' },
          { text: 'Jemand schuldet mir Geld und will in Raten zahlen', dokumenty: ['schuldanerkennung'], tip: 'Mit Unterschrift ein Rechtsöffnungstitel in der Betreibung.' },
          { text: 'Ich verschenke Geld oder eine Sache', dokumenty: ['schenkungsvertrag'], tip: 'Die Schenkungssteuer regelt der Kanton.' },
          { text: 'Ich übergebe oder erhalte Bargeld', dokumenty: ['quittung'] },
        ],
      },
      {
        nazev: 'Alltag und Einkauf',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Ich habe an der Haustür oder am Telefon etwas gekauft', dokumenty: ['widerruf-haustuergeschaeft'], tip: '14 Tage, ab 100 Franken. Für Online-Käufe gibt es kein gesetzliches Widerrufsrecht.' },
          { text: 'Gekaufte Ware ist defekt', dokumenty: ['maengelruege'], tip: 'Sofort rügen.' },
          { text: 'Ich verkaufe etwas Gebrauchtes von privat', dokumenty: ['kaufvertrag-privat'] },
          { text: 'Jemand soll etwas für mich erledigen', dokumenty: ['vollmacht'] },
        ],
      },
    ],
  },
  hub: {
    title: 'Vertragsvorlagen Schweiz kostenlos als PDF – online ausfüllen',
    description: 'Kostenlose Vertragsvorlagen nach Schweizer Recht (OR): Kaufvertrag Auto, Darlehensvertrag, Schuldanerkennung, Schenkungsvertrag, Vollmacht und mehr. PDF oder Word.',
    stitek: 'Schweiz',
    stitekSpan: 'Verträge nach Schweizer Recht',
    h1: 'Vertragsvorlagen',
    h1Span: 'In wenigen Minuten online ausfüllen oder leere Vorlage laden. Auch als Word, ohne Anmeldung.',
    hledaniNadpis: 'Welchen Vertrag brauchen Sie?',
    hledaniSpan: 'Suchen Sie nach Situation, nicht nach Artikeln.',
    ogPopis: 'Nach Schweizer Recht. Online ausfüllen.',
  },
};
