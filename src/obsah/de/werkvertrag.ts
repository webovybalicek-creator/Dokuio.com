import type { StrankaDokumentu } from '../typy';
import { werkvertrag as sablona } from '../../sablony/de/werkvertrag';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Werkvertrag",
  nazevA: "Werkvertrag",
  katalog: {
    popis: "Handwerker, Renovierung, Reparatur – Preis, Termin, Abnahme.",
    kategorie: "dienst",
    ilustrace: "protokol",
    slova: ["Werkvertrag", "Handwerker", "Renovierung", "Reparatur", "Abnahme", "Pauschalpreis", "Kostenanschlag"],
  },
  souvisejici: "dienst",
  landing: {
    title: "Werkvertrag {rok} – Muster kostenlos für Handwerker (PDF & Word)",
    description: "Kostenloser Werkvertrag nach §§ 631 ff. BGB: Leistung, Termin, Pauschalpreis oder Kostenanschlag, Anzahlung, Abnahme und Mängel. PDF und Word.",
    perex: "Für Renovierung, Reparatur oder jeden Auftrag an Handwerker oder Selbstständige: Was gemacht wird, bis wann, zu welchem Preis und wie abgenommen wird.",
    obsahPopis: "Sechs Abschnitte nach §§ 631 ff. BGB.",
    obsah: [
      { nazev: 'Vertragsparteien', popis: 'Besteller/in und Unternehmer/in.' },
      { nazev: 'Vertragsgegenstand', popis: 'Werk, Ort, Material.' },
      { nazev: 'Ausführungszeit', popis: 'Beginn und Fertigstellung.' },
      { nazev: 'Vergütung und Zahlung', popis: 'Pauschalpreis oder Kostenanschlag, Anzahlung, Zahlungsziel.' },
      { nazev: 'Abnahme und Mängel', popis: 'Abnahmeprotokoll, Vorbehalt bekannter Mängel, Verjährung.' },
      { nazev: 'Schlussbestimmungen', popis: 'Änderungen in Textform.' },
    ],
    kroky: [
      { nazev: 'Werk beschreiben', popis: 'Umfang, Ort, Termine.' },
      { nazev: 'Preis vereinbaren', popis: 'Pauschal oder nach Kostenanschlag.' },
      { nazev: 'Unterschreiben', popis: 'Zwei Exemplare.' },
    ],
    online: ['Preis in Worten automatisch', 'Termine im Kalender', 'Erklärungen zu jedem Feld', 'Download als PDF und Word'],
    hodiSe: ['Maler, Fliesenleger, Tischler beauftragen', 'Reparatur oder Anfertigung nach Maß', 'als Handwerker klare Bedingungen mit Kunden'],
    nehodiSe: ['Hausbau oder großer Umbau – Verbraucherbauvertrag fachkundig erstellen lassen', 'laufende Tätigkeit für einen Arbeitgeber', 'Kauf einer fertigen Sache – Kaufvertrag nutzen'],
    po: [
      { nazev: 'Anzahlung', popis: 'Überweisen oder quittieren lassen.' },
      { nazev: 'Änderungen schriftlich', popis: 'Zusatzarbeiten und Preise in Textform.' },
      { nazev: 'Abnahme', popis: 'Protokoll mit Mängelvorbehalt.' },
    ],
    faq: [
      { q: 'Wann muss ich zahlen?', a: 'Die Vergütung wird grundsätzlich mit der Abnahme des Werks fällig. Eine Anzahlung kann vereinbart werden.' },
      { q: 'Was bedeutet Abnahme?', a: 'Der Besteller billigt das Werk als im Wesentlichen vertragsgemäß. Wegen unwesentlicher Mängel darf er sie nicht verweigern. Bekannte Mängel muss er bei der Abnahme vorbehalten (§ 640 BGB).' },
      { q: 'Wie lange kann ich Mängel geltend machen?', a: 'Zwei Jahre ab Abnahme, bei Bauwerken fünf Jahre (§ 634a BGB).' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Das Dokument entsteht direkt in Ihrem Browser.' },
    ],
    zakony: "Die Vorlage beruht auf §§ 631–641 und § 634a des Bürgerlichen Gesetzbuchs (BGB).",
    souvisejiciPopis: "Weitere Vorlagen für Aufträge und Zahlungen.",
  },
  vytvorit: {
    title: "Werkvertrag online ausfüllen – kostenlos als PDF",
    description: "Werkvertrag mit Preis, Anzahlung und Abnahme online erstellen. Kostenlos als PDF oder Word.",
    podnadpis: "Kostenlos · PDF und Word · dauert etwa 4 Minuten",
  },
};

export default stranka;
