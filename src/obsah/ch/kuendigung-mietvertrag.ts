import type { StrankaDokumentu } from '../typy';
import { kuendigungMietvertragCH as sablona } from '../../sablony/ch/kuendigung-mietvertrag';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kündigung Mietvertrag",
  nazevA: "Kündigung des Mietvertrags",
  katalog: { popis: "Kündigung durch den Mieter auf den nächsten Termin.", kategorie: 'wohnen', ilustrace: 'protokol', slova: ["Kündigung Mietvertrag", "Wohnung kündigen", "Kündigungstermin", "Nachmieter", "Schweiz"] },
  souvisejici: 'wohnen',
  landing: {
    title: "Kündigung Mietvertrag Schweiz {rok} – Vorlage PDF kostenlos",
    description: "Wohnung kündigen in der Schweiz: schriftlich, drei Monate auf einen ortsüblichen Termin (Art. 266c OR), Familienwohnung mit zwei Unterschriften. Kostenlos als PDF.",
    perex: "Sie ziehen um? Kündigen Sie schriftlich auf den nächsten Termin – oder suchen Sie einen Nachmieter.",
    obsahPopis: "Kündigung durch den Mieter nach Art. 266c OR.",
    obsah: [{"nazev": "Vermieter", "popis": "An wen die Kündigung geht."}, {"nazev": "Kündigung", "popis": "Termin, Wohnung, Kaution."}],
    kroky: [{ nazev: 'Ausfüllen', popis: 'Ein paar Fragen, alles erklärt.' }, { nazev: 'PDF oder Word laden', popis: 'Kostenlos, ohne Anmeldung.' }, { nazev: 'Unterschreiben', popis: 'Jede Seite erhält ein Exemplar.' }],
    online: ['Erklärungen zu jedem Feld', 'Erinnerungen für den Kalender', 'Download als PDF und Word'],
    hodiSe: ["Sie sind Mieter in der Schweiz und ziehen aus"],
    nehodiSe: ["Sie sind Vermieter – amtliches Formular nötig", "Auszug ausserhalb der Termine – Nachmieter vorschlagen (Art. 264 OR)"],
    poNadpis: 'Danach.',
    po: [{"nazev": "Termin", "popis": "Empfang vor Beginn der Frist."}, {"nazev": "Abgabe", "popis": "Mit Abnahmeprotokoll."}, {"nazev": "Kaution", "popis": "Freigabe nach Abgabe."}],
    faq: [{"q": "Welche Kündigungsfrist gilt?", "a": "Mindestens drei Monate auf einen vertraglichen oder ortsüblichen Termin (Art. 266c OR)."}, {"q": "Wer muss unterschreiben?", "a": "Alle Mieter; bei einer Familienwohnung beide Ehegatten (Art. 266m OR)."}, {"q": "Speichern Sie meine Daten?", "a": "Nein. Das Dokument entsteht ausschliesslich in Ihrem Browser."}],
    zakony: "Die Vorlage beruht auf Art. 264, 266c, 266l und 266m OR.",
    souvisejiciPopis: 'Weitere Dokumente rund ums Wohnen, ebenfalls kostenlos.',
  },
  vytvorit: { title: "Kündigung Mietvertrag Schweiz online ausfüllen", description: "Kündigung der Wohnung durch den Mieter. PDF oder Word kostenlos.", podnadpis: "Kostenlos · Ergebnis als PDF und Word · dauert ca. 2 Minuten" },
};

export default stranka;
