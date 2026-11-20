import type { StrankaDokumentu } from '../typy';
import { mahnung as sablona } from '../../sablony/de/mahnung';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Mahnung",
  nazevA: "Mahnung",
  katalog: {
    popis: "Zahlungsaufforderung mit Frist, auch als letzte Mahnung.",
    kategorie: "geld",
    ilustrace: "dluh",
    slova: ["Mahnung", "Zahlungserinnerung", "letzte Mahnung", "Verzug", "Verzugszinsen", "offene Rechnung"],
  },
  souvisejici: "geld",
  landing: {
    title: "Mahnung {rok} – Vorlage kostenlos (PDF & Word)",
    description: "Kostenlose Mahnungsvorlage nach §§ 286, 288 BGB: offener Betrag, Frist, Verzugszinsen und 40-€-Pauschale. Online ausfüllen, als PDF oder Word laden.",
    perex: "Wenn eine Rechnung oder ein Darlehen nicht bezahlt wird: Eine Mahnung setzt die Schuldnerin oder den Schuldner in Verzug und ist der letzte Schritt vor Mahnbescheid oder Klage.",
    obsahPopis: "Kurzes Schreiben in zwei Teilen.",
    obsah: [
      { nazev: 'Absender und Empfänger', popis: 'Gläubiger/in und Schuldner/in.' },
      { nazev: 'Zahlungsaufforderung', popis: 'Betrag, Fälligkeit, Frist, Konto, Verzugszinsen; erste oder letzte Mahnung.' },
    ],
    kroky: [
      { nazev: 'Forderung eintragen', popis: 'Rechnung, Betrag, Fälligkeit.' },
      { nazev: 'Frist setzen', popis: 'Üblich sind 7–14 Tage.' },
      { nazev: 'Beweisbar versenden', popis: 'Einschreiben mit Rückschein oder Bote.' },
    ],
    online: ['Betrag in Worten automatisch', 'Zinssatz je nach Verbraucher oder Unternehmen', 'Fristende im Kalender', 'Download als PDF und Word'],
    hodiSe: ['Kunde zahlt eine Rechnung nicht', 'privates Darlehen wird nicht zurückgezahlt', 'letzte Warnung vor dem gerichtlichen Mahnverfahren'],
    nehodiSe: ['Schuldner ist insolvent – Forderung zur Insolvenztabelle anmelden', 'Forderung ist strittig oder hoch – anwaltlich beraten lassen'],
    po: [
      { nazev: 'Frist abwarten', popis: 'Erinnerung im Kalender.' },
      { nazev: 'Mahnbescheid', popis: 'Online über das gerichtliche Mahnverfahren.' },
      { nazev: 'Raten?', popis: 'Bei Zahlungsbereitschaft ein Schuldanerkenntnis aufsetzen.' },
    ],
    faq: [
      { q: 'Ist eine Mahnung Pflicht?', a: 'Nicht immer. Ist ein fester Kalendertermin vereinbart, tritt Verzug ohne Mahnung ein. Bei Geldforderungen spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung – bei Verbrauchern nur, wenn die Rechnung darauf hinweist (§ 286 BGB).' },
      { q: 'Wie hoch sind Verzugszinsen?', a: 'Fünf Prozentpunkte über dem Basiszinssatz; sind keine Verbraucher beteiligt, neun Prozentpunkte. Gegenüber Unternehmen zusätzlich 40 € Pauschale (§ 288 BGB).' },
      { q: 'Wie viele Mahnungen muss ich schicken?', a: 'Rechtlich reicht eine. Mehrere Mahnstufen sind üblich, aber nicht vorgeschrieben.' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Das Dokument entsteht direkt in Ihrem Browser.' },
    ],
    zakony: "Die Vorlage beruht auf §§ 286 und 288 des Bürgerlichen Gesetzbuchs (BGB).",
    souvisejiciPopis: "Weitere Vorlagen rund um Geld, ebenfalls kostenlos.",
  },
  vytvorit: {
    title: "Mahnung online ausfüllen – kostenlos als PDF",
    description: "Mahnung mit Frist und Verzugszinsen online erstellen. Kostenlos als PDF oder Word.",
    podnadpis: "Kostenlos · PDF und Word · dauert etwa 2 Minuten",
  },
};

export default stranka;
