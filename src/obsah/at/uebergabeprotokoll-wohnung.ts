import type { StrankaDokumentu } from '../typy';
import { uebergabeprotokollWohnungAT as sablona } from '../../sablony/at/uebergabeprotokoll-wohnung';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Wohnungsübergabeprotokoll",
  nazevA: "Wohnungsübergabeprotokoll",
  katalog: { popis: "Zähler, Mängel und Schlüssel bei Ein- und Auszug.", kategorie: 'wohnen', ilustrace: 'protokol', slova: ["Übergabeprotokoll", "Wohnungsübergabe", "Einzug", "Auszug", "Zählerstände", "Österreich"] },
  souvisejici: 'wohnen',
  landing: {
    title: "Übergabeprotokoll Wohnung Österreich {rok} – Vorlage PDF kostenlos",
    description: "Übergabeprotokoll für Mietwohnungen in Österreich: Zählerstände, Mängel, Ausstattung und Schlüssel bei Einzug und Auszug. Kostenlos als PDF und Word.",
    perex: "Grundlage für die Rückzahlung der Kaution: der Zustand der Wohnung bei Ein- und Auszug, schriftlich festgehalten.",
    obsahPopis: "Protokoll über Übergabe und Rückgabe der Wohnung.",
    obsah: [{"nazev": "Parteien und Wohnung", "popis": "Wer übergibt, wer übernimmt."}, {"nazev": "Zählerstände", "popis": "Strom, Gas, Wasser, Heizung."}, {"nazev": "Zustand und Schlüssel", "popis": "Mängel und Vereinbarungen."}],
    kroky: [{ nazev: 'Ausfüllen', popis: 'Ein paar Fragen, alles erklärt.' }, { nazev: 'PDF oder Word laden', popis: 'Kostenlos, ohne Anmeldung.' }, { nazev: 'Unterschreiben', popis: 'Jede Seite erhält ein Exemplar.' }],
    online: ['Beträge in Worten automatisch', 'Erinnerungen für den Kalender', 'Download als PDF und Word'],
    hodiSe: ["Einzug in eine Mietwohnung", "Rückgabe am Ende des Mietverhältnisses"],
    nehodiSe: ["Verkauf einer Eigentumswohnung"],
    poNadpis: 'Danach.',
    po: [{"nazev": "Fotos", "popis": "Zusammen mit dem Protokoll aufbewahren."}, {"nazev": "Energie", "popis": "Zählerstände an Versorger melden."}],
    faq: [{"q": "Ist ein Übergabeprotokoll Pflicht?", "a": "Nein, aber ohne Protokoll ist der Zustand der Wohnung später schwer zu beweisen."}, {"q": "Speichern Sie meine Daten?", "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."}],
    zakony: "Die Vorlage beruht auf den Bestimmungen über den Bestandvertrag (ABGB) und dem MRG.",
    souvisejiciPopis: 'Weitere Dokumente rund ums Wohnen, ebenfalls kostenlos.',
  },
  vytvorit: { title: "Übergabeprotokoll Wohnung Österreich online ausfüllen", description: "Übergabeprotokoll mit Zählerständen und Mängeln. PDF oder Word kostenlos.", podnadpis: "Kostenlos · Ergebnis als PDF und Word · dauert ca. 3 Minuten" },
};

export default stranka;
