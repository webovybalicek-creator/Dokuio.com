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
  kategorie: { auto: 'Auto und Fahrzeuge', geld: 'Geld und Schenkungen', wohnen: 'Wohnen und Miete', alltag: 'Alltag, Einkauf und Vollmachten', dienst: 'Handwerker und Aufträge', arbeit: 'Arbeit und Beruf', familie: 'Familie und Reisen' },
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
      { slug: 'ratenvereinbarung', popis: 'Offene Rechnung oder Schuld in Monatsraten.' },
      { slug: 'mahnung', popis: 'Zahlungsaufforderung mit Frist.' },
      { slug: 'schenkungsvertrag', popis: 'Geld oder eine Sache verschenken.' },
    ],
    wohnen: [
      { slug: 'mietvertrag-wohnung', popis: 'Mietvertrag für eine Wohnung.' },
      { slug: 'uebergabeprotokoll-wohnung', popis: 'Zählerstände, Mängel und Schlüssel.' },
      { slug: 'kuendigung-mietvertrag', popis: 'Kündigung durch den Mieter.' },
    ],
    alltag: [
      { slug: 'leihvertrag', popis: 'Sache kostenlos verleihen.' },
      { slug: 'vollmacht', popis: 'Damit jemand eine Sache für Sie erledigt.' },
      { slug: 'kaufvertrag-privat', popis: 'Gebrauchte Sachen von privat verkaufen.' },
      { slug: 'ruecktritt-widerruf', popis: 'Online-Kauf binnen 14 Tagen zurückgeben.' },
      { slug: 'maengelruege', popis: 'Defekte Ware reklamieren.' },
      { slug: 'erklaerung', popis: 'Schriftliche Erklärung für Schule, Bank oder Vermieter.' },
      { slug: 'kuendigung-vertrag', popis: 'Handy, Versicherung, Strom oder Fitnessstudio kündigen.' },
      { slug: 'reisevollmacht-kind', popis: 'Kind reist ohne Eltern ins Ausland.' },
    ],
    dienst: [
      { slug: 'werkvertrag', popis: 'Handwerker, Renovierung oder Reparatur.' },
      { slug: 'quittung', popis: 'Anzahlung bar quittieren.' },
      { slug: 'mahnung', popis: 'Wenn der Kunde nicht zahlt.' },
      { slug: 'ratenvereinbarung', popis: 'Wenn der Kunde nur in Raten zahlen kann.' },
    ],
    arbeit: [
      { slug: 'kuendigung-dienstverhaeltnis', popis: 'Job kündigen oder einvernehmlich auflösen.' },
      { slug: 'erklaerung', popis: 'Schriftliche Erklärung für Behörde oder Bank.' },
      { slug: 'vollmacht', popis: 'Damit jemand etwas für Sie erledigt.' },
    ],
    familie: [
      { slug: 'reisevollmacht-kind', popis: 'Einverständniserklärung für die Auslandsreise des Kindes.' },
      { slug: 'vollmacht', popis: 'Damit jemand etwas für Sie erledigt.' },
      { slug: 'erklaerung', popis: 'Schriftliche Erklärung für Schule oder Behörde.' },
    ],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'autoverkauf',
      nazev: 'Autoverkauf',
      popis: 'Kaufvertrag, Übergabeprotokoll, Vollmacht für die Abmeldung und Quittung.',
      ilustrace: 'auto',
      dokumenty: ['kaufvertrag-gebrauchtwagen', 'uebergabeprotokoll-fahrzeug', 'vollmacht-zulassung', 'quittung'],
      title: 'Autoverkauf Österreich – alle Dokumente in einem PDF kostenlos',
      description: 'Alles für den privaten Autoverkauf in Österreich: Kaufvertrag, Übergabeprotokoll, Vollmacht für die Zulassungsstelle und Quittung – einmal ausfüllen.',
      perex: 'Füllen Sie den Kaufvertrag aus – die anderen Dokumente übernehmen die Angaben. Dann alles auf einmal als ein PDF laden.',
    },
    {
      slug: 'geld-leihen',
      nazev: 'Geld leihen',
      popis: 'Darlehensvertrag mit Tilgungsplan und Quittung.',
      ilustrace: 'pujcka',
      dokumenty: ['darlehensvertrag', 'quittung'],
      title: 'Geld leihen in Österreich – Darlehensvertrag und Quittung kostenlos',
      description: 'Privates Darlehen in Österreich schriftlich festhalten: Darlehensvertrag nach ABGB mit Tilgungsplan und Quittung über die Auszahlung.',
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
          { text: 'Ich verkaufe oder kaufe ein gebrauchtes Auto', dokumenty: ['kaufvertrag-gebrauchtwagen', 'uebergabeprotokoll-fahrzeug', 'quittung'], balicek: 'autoverkauf', tip: 'Verkäufer meldet ab, Käufer meldet mit Kaufvertrag und Pickerl an.' },
          { text: 'Jemand anderes meldet das Auto für mich ab oder an', dokumenty: ['vollmacht-zulassung'] },
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
          { text: 'Jemand schuldet mir Geld und will in Raten zahlen', dokumenty: ['ratenvereinbarung', 'schuldanerkenntnis'], tip: 'Die Ratenvereinbarung regelt die Zahlung, das Anerkenntnis bestätigt die Schuld.' },
          { text: 'Ich verschenke Geld oder eine Sache', dokumenty: ['schenkungsvertrag'], tip: 'Größere Schenkungen binnen drei Monaten dem Finanzamt melden.' },
          { text: 'Ich übergebe oder erhalte Bargeld', dokumenty: ['quittung'] },
        ],
      },
      {
        nazev: 'Alltag und Einkauf',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Ich will einen Online-Kauf zurückgeben', dokumenty: ['ruecktritt-widerruf'], tip: '14 Tage ab Erhalt der Ware.' },
          { text: 'Gekaufte Ware ist defekt', dokumenty: ['maengelruege'] },
          { text: 'Ich verkaufe etwas Gebrauchtes von privat', dokumenty: ['kaufvertrag-privat'] },
          { text: 'Jemand soll etwas für mich erledigen', dokumenty: ['vollmacht'] },
          { text: 'Ich will Handy, Versicherung, Strom oder Fitnessstudio kündigen', dokumenty: ['kuendigung-vertrag'], tip: 'Frist und Termin stehen in den AGB.' },
        ],
      },
      {
        nazev: 'Arbeit',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Ich will meinen Job kündigen', dokumenty: ['kuendigung-dienstverhaeltnis'], tip: 'Meist ein Monat zum Monatsletzten – Kollektivvertrag prüfen.' },
          { text: 'Ich will mich mit dem Arbeitgeber auf ein Ende einigen', dokumenty: ['kuendigung-dienstverhaeltnis'] },
        ],
      },
      {
        nazev: 'Familie und Reisen',
        ilustrace: 'plnamoc',
        moznosti: [
          { text: 'Mein Kind reist ohne mich oder mit nur einem Elternteil ins Ausland', dokumenty: ['reisevollmacht-kind'], tip: 'Bestimmungen des Ziellandes beim BMEIA prüfen.' },
        ],
      },
    ],
  },
  hub: {
    title: 'Vertragsvorlagen Österreich kostenlos als PDF – online ausfüllen',
    description: 'Kostenlose Vorlagen nach österreichischem Recht: Kfz-Kaufvertrag, Darlehensvertrag, Schenkung, Vollmacht, Rücktritt vom Online-Kauf. PDF oder Word.',
    stitek: 'Österreich',
    stitekSpan: 'Verträge nach österreichischem Recht',
    h1: 'Vertragsvorlagen',
    h1Span: 'In wenigen Minuten online ausfüllen oder leere Vorlage laden. Auch als Word, ohne Anmeldung.',
    hledaniNadpis: 'Welchen Vertrag brauchen Sie?',
    hledaniSpan: 'Suchen Sie nach Situation, nicht nach Paragrafen.',
    ogPopis: 'Nach österreichischem Recht. Online ausfüllen.',
  },
};
