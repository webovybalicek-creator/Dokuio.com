import type { StrankaDokumentu } from '../typy';
import { mietvertragWohnung as sablona } from '../../sablony/de/mietvertrag-wohnung';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Mietvertrag Wohnung",
  nazevA: "Mietvertrag für eine Wohnung",
  katalog: { popis: "Unbefristeter Wohnungsmietvertrag nach BGB.", kategorie: 'wohnen', ilustrace: 'protokol', slova: ["Mietvertrag", "Wohnung mieten", "Wohnung vermieten", "Kaution", "Nebenkosten", "Vermieter", "Mieter"] },
  souvisejici: 'wohnen',
  landing: {
    title: "Mietvertrag Wohnung {rok} – Vorlage kostenlos als PDF",
    description: "Kostenloser Mietvertrag für Wohnungen nach BGB: Miete, Betriebskosten, Kaution nach § 551, Kündigungsfristen. Für private Vermieter, als PDF und Word.",
    perex: "Sie vermieten Ihre Wohnung privat? Unbefristeter Mietvertrag nach §§ 535 ff. BGB – ohne riskante Klauseln zu Schönheitsreparaturen.",
    obsahPopis: "Wohnraummietvertrag nach §§ 535 ff. BGB.",
    obsah: [{"nazev": "Parteien und Wohnung", "popis": "Vermieter, Mieter, Lage, Ausstattung."}, {"nazev": "Miete und Betriebskosten", "popis": "Nettokaltmiete, Vorauszahlungen, Fälligkeit."}, {"nazev": "Kaution", "popis": "Höchstens drei Kaltmieten, getrennte Anlage."}, {"nazev": "Kündigung", "popis": "Fristen und optionaler Kündigungsverzicht."}],
    kroky: [{ nazev: 'Ausfüllen', popis: 'Ein paar Fragen, alles erklärt.' }, { nazev: 'PDF oder Word laden', popis: 'Kostenlos, ohne Anmeldung.' }, { nazev: 'Unterschreiben', popis: 'Jede Seite erhält ein Exemplar.' }],
    online: ['Beträge in Worten automatisch', 'Erinnerungen für den Kalender', 'Download als PDF und Word'],
    hodiSe: ["Sie vermieten eine Wohnung privat", "unbefristetes Mietverhältnis"],
    nehodiSe: ["möblierte Wohnung zum vorübergehenden Gebrauch", "Gewerberäume", "befristeter Vertrag – nur mit gesetzlichem Grund (§ 575 BGB)"],
    poNadpis: 'Danach.',
    po: [{"nazev": "Übergabeprotokoll", "popis": "Zählerstände, Mängel und Schlüssel."}, {"nazev": "Wohnungsgeberbestätigung", "popis": "Innerhalb von zwei Wochen nach Einzug."}, {"nazev": "Kaution", "popis": "Auf ein Kautionskonto."}],
    faq: [{"q": "Wie hoch darf die Kaution sein?", "a": "Höchstens drei Monatsmieten ohne Nebenkosten. Der Mieter darf sie in drei Monatsraten zahlen (§ 551 BGB)."}, {"q": "Welche Kündigungsfrist gilt für Mieter?", "a": "Drei Monate, unabhängig von der Mietdauer (§ 573c BGB)."}, {"q": "Speichern Sie meine Daten?", "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."}],
    zakony: "Die Vorlage beruht auf §§ 535 ff. BGB, der Betriebskostenverordnung und § 19 Bundesmeldegesetz.",
    souvisejiciPopis: 'Weitere Dokumente rund ums Wohnen, ebenfalls kostenlos.',
  },
  vytvorit: { title: "Mietvertrag Wohnung online ausfüllen – PDF kostenlos", description: "Mietvertrag für eine Wohnung nach BGB online erstellen. PDF oder Word kostenlos.", podnadpis: "Kostenlos · Ergebnis als PDF und Word · dauert ca. 5 Minuten" },
};

export default stranka;
