import type { StrankaDokumentu } from '../typy';
import { kuendigungMietvertrag as sablona } from '../../sablony/de/kuendigung-mietvertrag';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kündigung Mietvertrag",
  nazevA: "Kündigung des Mietvertrags",
  katalog: { popis: "Kündigung durch den Mieter, drei Monate Frist.", kategorie: 'wohnen', ilustrace: 'protokol', slova: ["Kündigung Mietvertrag", "Wohnung kündigen", "Kündigungsfrist", "Mieter", "Umzug"] },
  souvisejici: 'wohnen',
  landing: {
    title: "Kündigung Mietvertrag Wohnung {rok} – Vorlage PDF kostenlos",
    description: "Kündigung des Mietvertrags durch den Mieter nach § 573c BGB: drei Monate Frist, Zugang bis zum dritten Werktag, Kaution zurück. Kostenlos als PDF und Word.",
    perex: "Sie ziehen um? Kündigen Sie Ihre Wohnung schriftlich mit drei Monaten Frist – mit Bitte um Übergabetermin und Kautionsrückzahlung.",
    obsahPopis: "Kündigung durch den Mieter nach § 573c BGB.",
    obsah: [{"nazev": "Vermieter", "popis": "An wen die Kündigung geht."}, {"nazev": "Kündigung", "popis": "Wohnung, Vertrag, Frist und Kaution."}],
    kroky: [{ nazev: 'Ausfüllen', popis: 'Ein paar Fragen, alles erklärt.' }, { nazev: 'PDF oder Word laden', popis: 'Kostenlos, ohne Anmeldung.' }, { nazev: 'Unterschreiben', popis: 'Jede Seite erhält ein Exemplar.' }],
    online: ['Erklärungen zu jedem Feld', 'Erinnerungen für den Kalender', 'Download als PDF und Word'],
    hodiSe: ["Sie sind Mieter und ziehen aus", "unbefristeter Mietvertrag"],
    nehodiSe: ["Sie sind Vermieter – dafür gelten Kündigungsgründe und längere Fristen", "vereinbarter Kündigungsverzicht noch nicht abgelaufen"],
    poNadpis: 'Danach.',
    po: [{"nazev": "Kündigungsfrist", "popis": "Drei Monate, Zugang bis zum 3. Werktag."}, {"nazev": "Übergabe", "popis": "Mit Übergabeprotokoll."}, {"nazev": "Kaution", "popis": "Nach Abrechnung zurück."}],
    faq: [{"q": "Wie lang ist die Kündigungsfrist?", "a": "Für Mieter immer drei Monate. Geht die Kündigung bis zum dritten Werktag eines Monats zu, zählt dieser Monat mit."}, {"q": "Reicht eine E-Mail?", "a": "Nein. Die Kündigung braucht die Schriftform mit eigenhändiger Unterschrift (§ 568 BGB)."}, {"q": "Speichern Sie meine Daten?", "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."}],
    zakony: "Die Vorlage beruht auf §§ 568 und 573c BGB.",
    souvisejiciPopis: 'Weitere Dokumente rund ums Wohnen, ebenfalls kostenlos.',
  },
  vytvorit: { title: "Kündigung Mietvertrag online ausfüllen – PDF kostenlos", description: "Kündigung der Wohnung durch den Mieter. PDF oder Word kostenlos.", podnadpis: "Kostenlos · Ergebnis als PDF und Word · dauert ca. 2 Minuten" },
};

export default stranka;
