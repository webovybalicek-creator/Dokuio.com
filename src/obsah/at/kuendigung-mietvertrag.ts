import type { StrankaDokumentu } from '../typy';
import { kuendigungMietvertragAT as sablona } from '../../sablony/at/kuendigung-mietvertrag';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Kündigung Mietvertrag",
  nazevA: "Kündigung des Mietvertrags",
  katalog: { popis: "Kündigung durch den Mieter, befristet oder unbefristet.", kategorie: 'wohnen', ilustrace: 'protokol', slova: ["Kündigung Mietvertrag", "Wohnung kündigen", "befristet", "MRG", "Österreich"] },
  souvisejici: 'wohnen',
  landing: {
    title: "Kündigung Mietvertrag Österreich {rok} – Vorlage PDF",
    description: "Kündigung der Mietwohnung in Österreich: unbefristet mit einem Monat, befristet nach einem Jahr mit drei Monaten zum Monatsletzten (§ 29 MRG).",
    perex: "Sie ziehen aus? Schriftliche Kündigung für unbefristete und befristete Mietverträge nach dem Mietrechtsgesetz.",
    obsahPopis: "Kündigung durch den Mieter nach MRG.",
    obsah: [{"nazev": "Vermieter", "popis": "An wen die Kündigung geht."}, {"nazev": "Kündigung", "popis": "Vertrag, Frist, Kaution."}],
    kroky: [{ nazev: 'Ausfüllen', popis: 'Ein paar Fragen, alles erklärt.' }, { nazev: 'PDF oder Word laden', popis: 'Kostenlos, ohne Anmeldung.' }, { nazev: 'Unterschreiben', popis: 'Jede Seite erhält ein Exemplar.' }],
    online: ['Beträge in Worten automatisch', 'Erinnerungen für den Kalender', 'Download als PDF und Word'],
    hodiSe: ["Sie sind Mieter in Österreich", "befristeter Vertrag nach dem ersten Jahr"],
    nehodiSe: ["Sie sind Vermieter – Kündigung nur gerichtlich aus wichtigen Gründen"],
    poNadpis: 'Danach.',
    po: [{"nazev": "Frist", "popis": "Bis zum Monatsletzten laufen lassen."}, {"nazev": "Rückgabe", "popis": "Mit Übergabeprotokoll."}, {"nazev": "Kaution", "popis": "Samt Zinsen zurück."}],
    faq: [{"q": "Wie kündige ich einen befristeten Mietvertrag?", "a": "Nach Ablauf eines Jahres schriftlich mit dreimonatiger Frist zum Monatsletzten (§ 29 Abs. 2 MRG)."}, {"q": "Und einen unbefristeten?", "a": "Wenn nichts anderes vereinbart ist, mit einem Monat zum Monatsletzten, schriftlich."}, {"q": "Speichern Sie meine Daten?", "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."}],
    zakony: "Die Vorlage beruht auf §§ 29 und 33 MRG.",
    souvisejiciPopis: 'Weitere Dokumente rund ums Wohnen, ebenfalls kostenlos.',
  },
  vytvorit: { title: "Kündigung Mietvertrag Österreich online ausfüllen", description: "Kündigung der Mietwohnung durch den Mieter. PDF oder Word kostenlos.", podnadpis: "Kostenlos · Ergebnis als PDF und Word · dauert ca. 2 Minuten" },
};

export default stranka;
