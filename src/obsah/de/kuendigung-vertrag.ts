import type { StrankaDokumentu } from '../typy';
import { kuendigungVertrag as sablona } from '../../sablony/de/kuendigung-vertrag';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Kündigung Vertrag',
  nazevA: 'Kündigung eines Vertrags',
  katalog: {
    popis: 'Handy, Internet, Versicherung, Strom, Fitnessstudio oder Abo kündigen.',
    kategorie: 'vertraege',
    ilustrace: 'protokol',
    slova: ['Kündigung', 'Vertrag kündigen', 'Kündigungsschreiben', 'Handyvertrag kündigen', 'Internet kündigen', 'Versicherung kündigen', 'Stromvertrag kündigen', 'Fitnessstudio kündigen', 'Abo kündigen', 'Mitgliedschaft kündigen', 'Sonderkündigung'],
  },
  souvisejici: 'vertraege',
  landing: {
    title: 'Kündigung schreiben {rok} – Vorlage PDF kostenlos (Handy, Abo)',
    description: 'Kündigungsschreiben für Handy, Internet, Versicherung, Strom, Fitnessstudio oder Abo, mit Bitte um Bestätigung. Kostenlos als PDF und Word.',
    perex: 'Handyvertrag, Fitnessstudio, Versicherung oder Streaming-Abo: Kündigen Sie zum nächstmöglichen Termin – mit Kundennummer, Bitte um Bestätigung und den gesetzlichen Fristen im Überblick.',
    obsahPopis: 'Ein Kündigungsschreiben für die häufigsten Verträge von Verbraucherinnen und Verbrauchern.',
    obsah: [
      { nazev: 'Absender und Anbieter', popis: 'Ihre Angaben und die Anschrift des Unternehmens.' },
      { nazev: 'Vertrag', popis: 'Art, Tarif, Kunden- oder Vertragsnummer, Rufnummer oder Zähler.' },
      { nazev: 'Kündigung', popis: 'Zum nächstmöglichen Zeitpunkt, zu einem Datum oder als Sonderkündigung.' },
      { nazev: 'Bitten', popis: 'Bestätigung mit Vertragsende, Widerruf der Lastschrift, keine Rückgewinnungsanrufe.' },
    ],
    kroky: [
      { nazev: 'Vertrag wählen', popis: 'Handy, Versicherung, Strom, Fitness, Abo oder Sonstiges.' },
      { nazev: 'Nummer eintragen', popis: 'Kunden- oder Vertragsnummer aus Rechnung oder Kundenkonto.' },
      { nazev: 'Nachweisbar senden', popis: 'Einschreiben, Fax oder E-Mail – Zugang zählt.' },
    ],
    online: ['Gesetzliche Fristen je Vertragsart als Tipp', 'Erinnerung an die Kündigungsbestätigung im Kalender', 'Unterschrift auf dem Bildschirm', 'Download als PDF und Word'],
    hodiSe: ['Sie kündigen als Kundin oder Kunde einen Vertrag mit einem Unternehmen', 'Handy-, Internet-, Strom-, Gas-, Versicherungs-, Fitness- oder Abo-Vertrag', 'Sonderkündigung nach Preiserhöhung oder Umzug'],
    nehodiSe: ['Wohnung kündigen – dafür gibt es die Kündigung des Mietvertrags', 'Arbeitsvertrag kündigen – dafür gilt die strenge Schriftform', 'Online-Kauf widerrufen – dafür ist der Widerruf da'],
    poNadpis: 'Nach dem Absenden.',
    po: [
      { nazev: 'Bestätigung', popis: 'Mit dem Datum des Vertragsendes aufheben.' },
      { nazev: 'Zugangsnachweis', popis: 'Einlieferungsbeleg, Sendebericht oder E-Mail aufheben.' },
      { nazev: 'Lastschriften', popis: 'Nach Vertragsende Kontoauszüge prüfen.' },
    ],
    faq: [
      { q: 'Reicht eine Kündigung per E-Mail?', a: 'In AGB darf für die Kündigung keine strengere Form als die Textform verlangt werden (§ 309 Nr. 13 BGB); eine E-Mail genügt dann in der Regel. Wichtig ist der Nachweis, dass sie angekommen ist.' },
      { q: 'Wie lange ist die Kündigungsfrist beim Handyvertrag?', a: 'Die Erstlaufzeit darf höchstens 24 Monate betragen. Danach ist ein stillschweigend verlängerter Vertrag jederzeit mit einem Monat Frist kündbar (§ 56 TKG).' },
      { q: 'Was gilt für Fitnessstudio und Abos?', a: 'Bei Verträgen über regelmäßige Leistungen, die ab dem 1. März 2022 geschlossen wurden, darf sich der Vertrag in AGB nur auf unbestimmte Zeit verlängern und muss dann mit höchstens einem Monat Frist kündbar sein (§ 309 Nr. 9 BGB).' },
      { q: 'Was ist der Kündigungsbutton?', a: 'Wer Verträge online anbietet, muss die Kündigung über einen Button „Verträge hier kündigen“ ermöglichen. Fehlt er, können Sie jederzeit ohne Frist kündigen (§ 312k BGB).' },
      { q: 'Wann kann ich eine Versicherung kündigen?', a: 'Unbefristete Verträge zum Schluss der laufenden Versicherungsperiode mit der vereinbarten Frist von einem bis drei Monaten (§ 11 VVG), in der Sachversicherung außerdem nach einem Schadensfall (§ 92 VVG).' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Das Dokument entsteht ausschließlich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage beruht auf §§ 309 und 312k BGB, § 56 und § 60 TKG, §§ 41 und 41b EnWG, § 20 StromGVV/GasGVV sowie §§ 11 und 92 VVG. Fristen im Einzelfall stehen in Ihrem Vertrag.',
    souvisejiciPopis: 'Weitere Kündigungen und Schreiben, ebenfalls kostenlos.',
  },
  vytvorit: {
    title: 'Kündigung schreiben online – Vertrag kündigen, PDF kostenlos',
    description: 'Kündigungsschreiben für Handy, Versicherung, Strom, Fitnessstudio oder Abo online ausfüllen. PDF oder Word kostenlos.',
    podnadpis: 'Kostenlos · Ergebnis als PDF und Word · dauert ca. 2 Minuten',
  },
};

export default stranka;
