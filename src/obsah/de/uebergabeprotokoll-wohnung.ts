import type { StrankaDokumentu } from '../typy';
import { uebergabeprotokollWohnung as sablona } from '../../sablony/de/uebergabeprotokoll-wohnung';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Wohnungsübergabeprotokoll",
  nazevA: "Wohnungsübergabeprotokoll",
  katalog: { popis: "Zähler, Mängel und Schlüssel bei Ein- und Auszug.", kategorie: 'wohnen', ilustrace: 'protokol', slova: ["Übergabeprotokoll", "Wohnungsübergabe", "Einzug", "Auszug", "Zählerstände", "Schlüssel"] },
  souvisejici: 'wohnen',
  landing: {
    title: "Wohnungsübergabeprotokoll {rok} – Vorlage kostenlos",
    description: "Übergabeprotokoll für die Wohnung: Zählerstände, Mängel, Ausstattung und Schlüssel bei Einzug und Auszug. Kostenlos als PDF und Word.",
    perex: "Der wichtigste Beweis im Streit um die Kaution. Halten Sie den Zustand bei Ein- und Auszug fest.",
    obsahPopis: "Protokoll über Übergabe und Rücknahme der Wohnung.",
    obsah: [{"nazev": "Parteien und Wohnung", "popis": "Wer übergibt, wer übernimmt."}, {"nazev": "Zählerstände", "popis": "Strom, Gas, Wasser, Heizung."}, {"nazev": "Zustand und Schlüssel", "popis": "Mängel und Vereinbarungen."}],
    kroky: [{ nazev: 'Ausfüllen', popis: 'Ein paar Fragen, alles erklärt.' }, { nazev: 'PDF oder Word laden', popis: 'Kostenlos, ohne Anmeldung.' }, { nazev: 'Unterschreiben', popis: 'Jede Seite erhält ein Exemplar.' }],
    online: ['Beträge in Worten automatisch', 'Erinnerungen für den Kalender', 'Download als PDF und Word'],
    hodiSe: ["Einzug in eine Mietwohnung", "Auszug am Ende des Mietverhältnisses"],
    nehodiSe: ["Verkauf einer Eigentumswohnung"],
    poNadpis: 'Danach.',
    po: [{"nazev": "Fotos", "popis": "Zusammen mit dem Protokoll aufbewahren."}, {"nazev": "Versorger", "popis": "Zählerstände an Strom- und Gasanbieter melden."}],
    faq: [{"q": "Ist ein Übergabeprotokoll Pflicht?", "a": "Nein, aber ohne Protokoll ist der Zustand bei Einzug später schwer zu beweisen."}, {"q": "Speichern Sie meine Daten?", "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."}],
    zakony: "Die Vorlage beruht auf den Vorschriften zur Wohnraummiete (§§ 535 ff. BGB).",
    souvisejiciPopis: 'Weitere Dokumente rund ums Wohnen, ebenfalls kostenlos.',
  },
  vytvorit: { title: "Übergabeprotokoll Wohnung online ausfüllen – PDF kostenlos", description: "Übergabeprotokoll mit Zählerständen und Mängeln. PDF oder Word kostenlos.", podnadpis: "Kostenlos · Ergebnis als PDF und Word · dauert ca. 3 Minuten" },
};

export default stranka;
