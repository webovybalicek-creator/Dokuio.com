import type { StrankaDokumentu } from '../typy';
import { mietvertragWohnungAT as sablona } from '../../sablony/at/mietvertrag-wohnung';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Mietvertrag Wohnung",
  nazevA: "Mietvertrag für eine Wohnung",
  katalog: { popis: "Wohnungsmietvertrag nach ABGB und MRG.", kategorie: 'wohnen', ilustrace: 'protokol', slova: ["Mietvertrag", "Wohnung mieten", "Wohnung vermieten", "Kaution", "Befristung", "MRG", "Österreich"] },
  souvisejici: 'wohnen',
  landing: {
    title: "Mietvertrag Wohnung Österreich {rok} – Vorlage PDF kostenlos",
    description: "Mietvertrag für Wohnungen in Österreich nach ABGB und MRG: befristet oder unbefristet, Kaution, Betriebskosten, Wertsicherung. Kostenlos als PDF und Word.",
    perex: "Sie vermieten in Österreich? Mietvertrag nach ABGB und Mietrechtsgesetz – befristet mindestens drei Jahre oder unbefristet.",
    obsahPopis: "Wohnungsmietvertrag nach §§ 1090 ff. ABGB und MRG.",
    obsah: [{"nazev": "Parteien und Wohnung", "popis": "Vermieter, Mieter, Lage, Ausstattung."}, {"nazev": "Mietdauer", "popis": "Befristet (mind. 3 Jahre) oder unbefristet."}, {"nazev": "Mietzins und Kaution", "popis": "Akonto, Wertsicherung, verzinste Kaution."}, {"nazev": "Kündigung", "popis": "Fristen für Mieter."}],
    kroky: [{ nazev: 'Ausfüllen', popis: 'Ein paar Fragen, alles erklärt.' }, { nazev: 'PDF oder Word laden', popis: 'Kostenlos, ohne Anmeldung.' }, { nazev: 'Unterschreiben', popis: 'Jede Seite erhält ein Exemplar.' }],
    online: ['Beträge in Worten automatisch', 'Erinnerungen für den Kalender', 'Download als PDF und Word'],
    hodiSe: ["Sie vermieten eine Wohnung privat in Österreich", "Teil- oder Nichtanwendungsbereich des MRG"],
    nehodiSe: ["Altbauwohnung im Vollanwendungsbereich – Mietzins gesetzlich begrenzt, lassen Sie den Betrag prüfen", "Geschäftsräume"],
    poNadpis: 'Danach.',
    po: [{"nazev": "Übergabeprotokoll", "popis": "Zählerstände, Mängel und Schlüssel."}, {"nazev": "Meldezettel", "popis": "Hauptwohnsitz binnen drei Tagen melden."}, {"nazev": "Kaution", "popis": "Verzinst und getrennt anlegen."}],
    faq: [{"q": "Wie lange muss ein befristeter Mietvertrag mindestens laufen?", "a": "Bei privaten Vermietern mindestens drei Jahre; sonst gilt der Vertrag als unbefristet (§ 29 MRG)."}, {"q": "Kann der Mieter einen befristeten Vertrag vorzeitig kündigen?", "a": "Ja, nach Ablauf eines Jahres mit dreimonatiger Frist zum Monatsletzten."}, {"q": "Speichern Sie meine Daten?", "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."}],
    zakony: "Die Vorlage beruht auf §§ 1090 ff. ABGB, dem Mietrechtsgesetz und dem Mieten-Wertsicherungsgesetz.",
    souvisejiciPopis: 'Weitere Dokumente rund ums Wohnen, ebenfalls kostenlos.',
  },
  vytvorit: { title: "Mietvertrag Wohnung Österreich online ausfüllen", description: "Mietvertrag nach ABGB und MRG online erstellen. PDF oder Word kostenlos.", podnadpis: "Kostenlos · Ergebnis als PDF und Word · dauert ca. 5 Minuten" },
};

export default stranka;
