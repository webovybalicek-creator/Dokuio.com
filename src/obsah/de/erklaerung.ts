import type { StrankaDokumentu } from '../typy';
import { erklaerung as sablona } from '../../sablony/de/erklaerung';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Erklärung",
  nazevA: "Erklärung",
  katalog: {
    popis: "Schriftliche Erklärung für Schule, Bank oder Vermieter.",
    kategorie: "alltag",
    ilustrace: "plnamoc",
    slova: ["Erklärung", "ehrenwörtliche Erklärung", "Bestätigung", "Selbsterklärung", "Muster"],
  },
  souvisejici: "alltag",
  landing: {
    title: "Ehrenwörtliche Erklärung {rok} – Vorlage kostenlos (PDF & Word)",
    description: "Kostenlose Vorlage für eine schriftliche Erklärung: wer erklärt, für wen und was. Online ausfüllen, als PDF oder Word laden. Keine eidesstattliche Versicherung.",
    perex: "Wenn eine Schule, Bank oder ein Vermieter eine schriftliche Erklärung von Ihnen möchte. Sie tragen ein, wer Sie sind und was Sie erklären – fertig.",
    obsahPopis: "Eine Seite.",
    obsah: [
      { nazev: 'Erklärende Person', popis: 'Name, Geburtsdatum, Anschrift.' },
      { nazev: 'Erklärung', popis: 'Für wen, Zweck, Text und Bestätigung der Richtigkeit.' },
    ],
    kroky: [
      { nazev: 'Angaben', popis: 'Wer erklärt.' },
      { nazev: 'Text', popis: 'Konkret und wahr.' },
      { nazev: 'Unterschrift', popis: 'Eigenhändig.' },
    ],
    online: ['Einleitung automatisch', 'Hinweise zur Formulierung', 'Download als PDF und Word', 'Leere Vorlage zum Ausdrucken'],
    hodiSe: ['Schule, Verein oder Vermieter verlangt eine Erklärung', 'Bestätigung eines Wohnsitzes oder Sachverhalts'],
    nehodiSe: ['Behörde verlangt eine eidesstattliche Versicherung – deren Formular verwenden', 'die Stelle hat ein eigenes Formular'],
    po: [
      { nazev: 'Unterschreiben', popis: 'Eigenhändig.' },
      { nazev: 'Beglaubigung?', popis: 'Nur wenn verlangt, dann vor Behörde oder Notar unterschreiben.' },
    ],
    faq: [
      { q: 'Ist das eine eidesstattliche Versicherung?', a: 'Nein. Eine Versicherung an Eides statt ist nur gegenüber einer dafür zuständigen Behörde oder einem Gericht möglich. Diese Vorlage ist eine private schriftliche Erklärung.' },
      { q: 'Muss die Unterschrift beglaubigt werden?', a: 'Nur wenn die empfangende Stelle das ausdrücklich verlangt.' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Das Dokument entsteht direkt in Ihrem Browser.' },
    ],
    zakony: "Allgemeine private Erklärung; keine besondere gesetzliche Form vorgeschrieben.",
    souvisejiciPopis: "Weitere Vorlagen für den Alltag.",
  },
  vytvorit: {
    title: "Erklärung online ausfüllen – kostenlos als PDF",
    description: "Schriftliche Erklärung online erstellen. Kostenlos als PDF oder Word.",
    podnadpis: "Kostenlos · PDF und Word · dauert etwa 1 Minute",
  },
};

export default stranka;
