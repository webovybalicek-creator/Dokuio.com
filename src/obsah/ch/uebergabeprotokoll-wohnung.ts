import type { StrankaDokumentu } from '../typy';
import { uebergabeprotokollWohnungCH as sablona } from '../../sablony/ch/uebergabeprotokoll-wohnung';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Wohnungsübergabeprotokoll",
  nazevA: "Wohnungsübergabeprotokoll",
  katalog: { popis: "Zähler, Mängel und Schlüssel bei Ein- und Auszug.", kategorie: 'wohnen', ilustrace: 'protokol', slova: ["Übergabeprotokoll", "Abnahmeprotokoll", "Wohnungsabgabe", "Einzug", "Auszug", "Schweiz"] },
  souvisejici: 'wohnen',
  landing: {
    title: "Wohnungsübergabeprotokoll Schweiz {rok} – Vorlage PDF kostenlos",
    description: "Übergabe- und Abnahmeprotokoll für Mietwohnungen in der Schweiz: Zählerstände, Mängel, Schlüssel. Kostenlos als PDF und Word.",
    perex: "Bei der Abgabe muss der Vermieter Mängel sofort rügen. Ein sauberes Protokoll schützt beide Seiten.",
    obsahPopis: "Protokoll über Übergabe und Abnahme der Wohnung.",
    obsah: [{"nazev": "Parteien und Wohnung", "popis": "Wer übergibt, wer übernimmt."}, {"nazev": "Zählerstände", "popis": "Strom, Gas, Wasser, Heizung."}, {"nazev": "Zustand und Schlüssel", "popis": "Mängel und Vereinbarungen."}],
    kroky: [{ nazev: 'Ausfüllen', popis: 'Ein paar Fragen, alles erklärt.' }, { nazev: 'PDF oder Word laden', popis: 'Kostenlos, ohne Anmeldung.' }, { nazev: 'Unterschreiben', popis: 'Jede Seite erhält ein Exemplar.' }],
    online: ['Erklärungen zu jedem Feld', 'Vorbefüllt aus dem Mietvertrag', 'Download als PDF und Word'],
    hodiSe: ["Einzug in eine Mietwohnung", "Wohnungsabgabe am Mietende"],
    nehodiSe: ["Verkauf von Stockwerkeigentum"],
    poNadpis: 'Danach.',
    po: [{"nazev": "Fotos", "popis": "Zusammen mit dem Protokoll aufbewahren."}, {"nazev": "Kaution", "popis": "Freigabe nach der Abnahme."}],
    faq: [{"q": "Muss der Vermieter Mängel sofort melden?", "a": "Ja, bei der Rückgabe muss er Mängel sofort schriftlich rügen, ausser versteckte Mängel (Art. 267a OR)."}, {"q": "Speichern Sie meine Daten?", "a": "Nein. Das Dokument entsteht ausschliesslich in Ihrem Browser."}],
    zakony: "Die Vorlage beruht auf Art. 253 ff. und 267a OR.",
    souvisejiciPopis: 'Weitere Dokumente rund ums Wohnen, ebenfalls kostenlos.',
  },
  vytvorit: { title: "Wohnungsübergabeprotokoll Schweiz online ausfüllen", description: "Protokoll mit Zählerständen und Mängeln. PDF oder Word kostenlos.", podnadpis: "Kostenlos · Ergebnis als PDF und Word · dauert ca. 3 Minuten" },
};

export default stranka;
