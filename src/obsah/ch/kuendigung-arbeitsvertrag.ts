import type { StrankaDokumentu } from '../typy';
import { kuendigungArbeitsvertragCH as sablona } from '../../sablony/ch/kuendigung-arbeitsvertrag';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Kündigung Arbeitsvertrag',
  nazevA: 'Kündigung des Arbeitsvertrags',
  katalog: {
    popis: 'Stelle kündigen als Arbeitnehmer/in – in oder nach der Probezeit.',
    kategorie: 'arbeit',
    ilustrace: 'protokol',
    slova: ['Kündigung Arbeitsvertrag', 'Stelle kündigen', 'Job kündigen', 'Kündigungsfrist', 'Probezeit', 'Arbeitszeugnis', 'Aufhebungsvereinbarung', 'Arbeitnehmer', 'Schweiz'],
  },
  souvisejici: 'kuendigungen',
  landing: {
    title: 'Kündigung Arbeitsvertrag Schweiz {rok} – Vorlage PDF kostenlos',
    description: 'Stelle kündigen in der Schweiz: 7 Tage in der Probezeit, danach 1 bis 3 Monate auf Monatsende (Art. 335b und 335c OR). Mit Bitte um Arbeitszeugnis, PDF gratis.',
    perex: 'Sie haben eine neue Stelle oder wollen weiterziehen? Die Kündigung als Arbeitnehmerin oder Arbeitnehmer – mit dem richtigen Termin, Bitte um Arbeitszeugnis und auf Wunsch dem Vorschlag, früher zu gehen.',
    obsahPopis: 'Kurzer Brief an den Arbeitgeber nach Art. 335 ff. OR.',
    obsah: [
      { nazev: 'Absender und Arbeitgeber', popis: 'Ihre Angaben, Firma, zuständige Person.' },
      { nazev: 'Kündigung', popis: 'In der Probezeit oder ordentlich, Enddatum, eventualiter nächstmöglich.' },
      { nazev: 'Bitten', popis: 'Empfangsbestätigung, Arbeitszeugnis, Restferien, Dank.' },
    ],
    kroky: [
      { nazev: 'Termin bestimmen', popis: 'Dienstjahr, Vertrag und GAV prüfen – die Tipps erklären die Fristen.' },
      { nazev: 'Unterschreiben', popis: 'PDF oder Word, eigenhändig.' },
      { nazev: 'Übergeben', popis: 'Persönlich gegen Empfangsbestätigung oder per Einschreiben.' },
    ],
    online: ['Varianten für Probezeit und ordentliche Kündigung', 'Vorschlag für früheren Austritt im Einvernehmen', 'Erinnerung an Arbeitsende und Arbeitszeugnis', 'Download als PDF und Word'],
    hodiSe: ['Sie sind Arbeitnehmer/in mit unbefristetem Arbeitsvertrag', 'Sie kündigen während oder nach der Probezeit', 'Sie möchten früher gehen und dem Arbeitgeber eine einvernehmliche Lösung vorschlagen'],
    nehodiSe: ['Sie sind Arbeitgeber und kündigen jemandem', 'Befristeter Vertrag – er endet ohne Kündigung am vereinbarten Datum', 'Fristlose Kündigung aus wichtigem Grund – lassen Sie sich vorher beraten'],
    poNadpis: 'Nach der Übergabe.',
    po: [
      { nazev: 'Empfang belegen', popis: 'Bestätigung auf Ihrer Kopie oder Einschreibebeleg aufbewahren.' },
      { nazev: 'Ferien und Überstunden', popis: 'Restferien in der Kündigungsfrist beziehen – mit dem Arbeitgeber absprechen.' },
      { nazev: 'RAV', popis: 'Noch keine neue Stelle? Früh beim RAV anmelden.' },
    ],
    faq: [
      { q: 'Muss die Kündigung schriftlich sein?', a: 'Laut ch.ch und SECO verlangt das Gesetz keine Form – eine mündliche Kündigung reicht, ausser Arbeitsvertrag, GAV oder NAV verlangen die Schriftform. Schriftlich ist sie aber viel besser beweisbar.' },
      { q: 'Welche Kündigungsfrist gilt?', a: 'In der Probezeit sieben Tage. Danach ohne andere schriftliche Abrede: im 1. Dienstjahr ein Monat, im 2. bis 9. Dienstjahr zwei Monate, ab dem 10. Dienstjahr drei Monate, jeweils auf Ende eines Monats (Art. 335b und 335c OR).' },
      { q: 'Ab wann läuft die Frist?', a: 'Ab Empfang beim Arbeitgeber. Bei einem Einschreiben zählt in der Regel der Tag, an dem es abgeholt werden kann – senden Sie es deshalb einige Tage vor Monatsende.' },
      { q: 'Muss ich die Kündigung begründen?', a: 'Nein. Nur wenn der Arbeitgeber es verlangt, müssen Sie die Gründe schriftlich angeben (Art. 335 Abs. 2 OR).' },
      { q: 'Kann ich früher gehen?', a: 'Nur wenn der Arbeitgeber zustimmt. Die Vorlage enthält dafür eine Variante mit Vorschlag zur einvernehmlichen Auflösung; ohne schriftliche Zustimmung gilt die ordentliche Kündigung.' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Die Kündigung entsteht ausschliesslich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage beruht auf Art. 330a, 335, 335b, 335c und 341 OR sowie den Informationen von ch.ch und SECO zur Kündigung. Arbeitsvertrag, GAV oder NAV können andere Fristen vorsehen.',
    souvisejiciPopis: 'Weitere Kündigungen und Briefe, ebenfalls kostenlos.',
  },
  vytvorit: {
    title: 'Kündigung Arbeitsvertrag (Schweiz) online ausfüllen – PDF',
    description: 'Kündigung durch den Arbeitnehmer nach OR: Probezeit oder ordentlich, Bitte um Arbeitszeugnis. PDF oder Word kostenlos.',
    podnadpis: 'Kostenlos · Ergebnis als PDF und Word · dauert ca. 2 Minuten',
  },
};

export default stranka;
