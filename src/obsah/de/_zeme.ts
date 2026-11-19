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
  kategorie: { auto: 'Auto und Fahrzeuge', geld: 'Geld und Schenkungen', wohnen: 'Wohnen und Miete', alltag: 'Alltag, Einkauf und Vollmachten' },
  skupiny: {
    auto: [
      { slug: 'kaufvertrag-gebrauchtwagen', popis: 'Privatverkauf eines gebrauchten Autos.' },
      { slug: 'uebergabeprotokoll-fahrzeug', popis: 'Kilometerstand, Schäden und Schlüssel bei der Übergabe.' },
      { slug: 'vollmacht-zulassung', popis: 'Wenn jemand anderes zur Zulassungsstelle geht.' },
      { slug: 'quittung', popis: 'Bestätigung der Barzahlung.' },
    ],
    geld: [
      { slug: 'darlehensvertrag', popis: 'Geld leihen, auch in Raten.' },
      { slug: 'quittung', popis: 'Empfangsbestätigung für Bargeld.' },
      { slug: 'schuldanerkenntnis', popis: 'Schuld schriftlich bestätigen, mit Raten.' },
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
      { slug: 'widerruf', popis: 'Online-Kauf binnen 14 Tagen widerrufen.' },
      { slug: 'maengelanzeige', popis: 'Defekte Ware reklamieren.' },
    ],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'autoverkauf',
      nazev: 'Autoverkauf',
      popis: 'Kaufvertrag, Übergabeprotokoll, Vollmacht für die Zulassungsstelle und Quittung.',
      ilustrace: 'auto',
      dokumenty: ['kaufvertrag-gebrauchtwagen', 'uebergabeprotokoll-fahrzeug', 'vollmacht-zulassung', 'quittung'],
      title: 'Autoverkauf – alle Dokumente in einem PDF kostenlos',
      description: 'Alles für den privaten Autoverkauf in Deutschland: Kaufvertrag, Übergabeprotokoll, Vollmacht für die Zulassungsstelle und Quittung – einmal ausfüllen.',
      perex: 'Füllen Sie den Kaufvertrag aus – die anderen Dokumente übernehmen die Angaben. Dann alles auf einmal als ein PDF laden.',
    },
    {
      slug: 'geld-leihen',
      nazev: 'Geld leihen',
      popis: 'Darlehensvertrag mit Tilgungsplan und Quittung.',
      ilustrace: 'pujcka',
      dokumenty: ['darlehensvertrag', 'quittung'],
      title: 'Geld leihen – Darlehensvertrag und Quittung kostenlos',
      description: 'Privates Darlehen schwarz auf weiß: Darlehensvertrag mit Tilgungsplan und Quittung über die Auszahlung.',
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
          { text: 'Ich verkaufe oder kaufe ein gebrauchtes Auto', dokumenty: ['kaufvertrag-gebrauchtwagen', 'uebergabeprotokoll-fahrzeug', 'quittung'], balicek: 'autoverkauf', tip: 'Verkäufer: Veräußerung unverzüglich der Zulassungsbehörde und der Versicherung melden.' },
          { text: 'Jemand anderes meldet das Auto für mich um', dokumenty: ['vollmacht-zulassung'], tip: 'Dazu ein vom Halter unterschriebenes SEPA-Mandat für die Kfz-Steuer.' },
          { text: 'Ich verleihe mein Auto', dokumenty: ['uebergabeprotokoll-fahrzeug'] },
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
          { text: 'Jemand schuldet mir Geld und will in Raten zahlen', dokumenty: ['schuldanerkenntnis'] },
          { text: 'Ich verschenke Geld oder eine Sache', dokumenty: ['schenkungsvertrag'], tip: 'Schenkungen binnen drei Monaten dem Finanzamt anzeigen.' },
          { text: 'Ich übergebe oder erhalte Bargeld', dokumenty: ['quittung'] },
        ],
      },
      {
        nazev: 'Alltag und Einkauf',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Ich will einen Online-Kauf zurückgeben', dokumenty: ['widerruf'], tip: '14 Tage ab Erhalt der Ware.' },
          { text: 'Gekaufte Ware ist defekt', dokumenty: ['maengelanzeige'] },
          { text: 'Ich verkaufe etwas Gebrauchtes von privat', dokumenty: ['kaufvertrag-privat'] },
          { text: 'Jemand soll etwas für mich erledigen', dokumenty: ['vollmacht'] },
        ],
      },
    ],
  },
  hub: {
    title: 'Vertragsvorlagen kostenlos als PDF – online ausfüllen',
    description: 'Kostenlose Vorlagen nach deutschem Recht: Kaufvertrag Gebrauchtwagen, Darlehensvertrag, Schenkung, Vollmacht, Widerruf. Online ausfüllen, PDF oder Word.',
    stitek: 'Deutschland',
    stitekSpan: 'Verträge nach deutschem Recht',
    h1: 'Vertragsvorlagen',
    h1Span: 'In wenigen Minuten online ausfüllen oder leere Vorlage laden. Auch als Word, ohne Anmeldung.',
    hledaniNadpis: 'Welchen Vertrag brauchen Sie?',
    hledaniSpan: 'Suchen Sie nach Situation, nicht nach Paragrafen.',
    ogPopis: 'Nach deutschem Recht. Online ausfüllen.',
  },
};
