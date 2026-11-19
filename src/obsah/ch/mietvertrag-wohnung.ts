import type { StrankaDokumentu } from '../typy';
import { mietvertragWohnungCH as sablona } from '../../sablony/ch/mietvertrag-wohnung';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Mietvertrag Wohnung",
  nazevA: "Mietvertrag für eine Wohnung",
  katalog: { popis: "Mietvertrag für Wohnräume nach OR.", kategorie: 'wohnen', ilustrace: 'protokol', slova: ["Mietvertrag", "Wohnung mieten", "Wohnung vermieten", "Mietkaution", "Nebenkosten", "Schweiz"] },
  souvisejici: 'wohnen',
  landing: {
    title: "Mietvertrag Wohnung Schweiz {rok} – Vorlage kostenlos",
    description: "Mietvertrag für Wohnräume in der Schweiz nach Art. 253 ff. OR: Nettomietzins, Nebenkosten, Mietkaution auf Sperrkonto, Kündigungstermine. PDF und Word.",
    perex: "Sie vermieten in der Schweiz? Mietvertrag nach Obligationenrecht – mit einzeln aufgeführten Nebenkosten und Kaution auf Sperrkonto.",
    obsahPopis: "Mietvertrag für Wohnräume nach Art. 253 ff. OR.",
    obsah: [{"nazev": "Parteien und Wohnung", "popis": "Vermieter, Mieter, Lage, Ausstattung."}, {"nazev": "Mietzins und Nebenkosten", "popis": "Akonto nur für aufgeführte Kosten."}, {"nazev": "Sicherheit", "popis": "Höchstens drei Monatszinse, Sperrkonto."}, {"nazev": "Kündigung", "popis": "Drei Monate auf ortsübliche Termine."}],
    kroky: [{ nazev: 'Ausfüllen', popis: 'Ein paar Fragen, alles erklärt.' }, { nazev: 'PDF oder Word laden', popis: 'Kostenlos, ohne Anmeldung.' }, { nazev: 'Unterschreiben', popis: 'Jede Seite erhält ein Exemplar.' }],
    online: ['Beträge in Worten automatisch', 'Erinnerungen für den Kalender', 'Download als PDF und Word'],
    hodiSe: ["Sie vermieten eine Wohnung privat in der Schweiz"],
    nehodiSe: ["Kantone mit Formularpflicht für den Anfangsmietzins – zusätzlich amtliches Formular verwenden", "Geschäftsräume"],
    poNadpis: 'Danach.',
    po: [{"nazev": "Abnahmeprotokoll", "popis": "Zustand bei Übergabe."}, {"nazev": "Kaution", "popis": "Auf ein Mietkautionskonto."}, {"nazev": "Anmeldung", "popis": "Einwohnerkontrolle innert 14 Tagen."}],
    faq: [{"q": "Wie hoch darf die Mietkaution sein?", "a": "Höchstens drei Monatsmietzinse; sie muss auf ein Konto auf den Namen des Mieters (Art. 257e OR)."}, {"q": "Welche Nebenkosten darf der Vermieter verlangen?", "a": "Nur die im Vertrag einzeln aufgeführten (Art. 257a OR)."}, {"q": "Speichern Sie meine Daten?", "a": "Nein. Das Dokument entsteht ausschliesslich in Ihrem Browser."}],
    zakony: "Die Vorlage beruht auf Art. 253 ff. OR.",
    souvisejiciPopis: 'Weitere Dokumente rund ums Wohnen, ebenfalls kostenlos.',
  },
  vytvorit: { title: "Mietvertrag Wohnung Schweiz online ausfüllen", description: "Mietvertrag nach OR online erstellen. PDF oder Word kostenlos.", podnadpis: "Kostenlos · Ergebnis als PDF und Word · dauert ca. 5 Minuten" },
};

export default stranka;
