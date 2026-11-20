import type { StrankaDokumentu } from '../typy';
import { wohnungsgeberbestaetigung as sablona } from '../../sablony/de/wohnungsgeberbestaetigung';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Wohnungsgeberbestätigung',
  nazevA: 'Wohnungsgeberbestätigung',
  katalog: {
    popis: 'Einzug bestätigen, damit sich der Mieter anmelden kann.',
    kategorie: 'wohnen',
    ilustrace: 'plnamoc',
    slova: ['Wohnungsgeberbestätigung', 'Vermieterbescheinigung', 'Einzugsbestätigung', 'Anmeldung', 'Bürgeramt', 'Meldebescheinigung'],
  },
  souvisejici: 'wohnen',
  landing: {
    title: 'Wohnungsgeberbestätigung {rok} – Vorlage kostenlos als PDF',
    description: 'Wohnungsgeberbestätigung nach § 19 BMG kostenlos: alle Pflichtangaben für die Anmeldung beim Bürgeramt. Online ausfüllen, PDF und Word.',
    perex: 'Der Vermieter bestätigt den Einzug, damit sich der Mieter innerhalb von zwei Wochen beim Bürgeramt anmelden kann. Mit allen Pflichtangaben nach § 19 BMG.',
    obsahPopis: 'Die vier Pflichtangaben nach § 19 Abs. 3 Bundesmeldegesetz.',
    obsah: [
      { nazev: 'Wohnungsgeber', popis: 'Name und Anschrift, bei Nichteigentümern auch der Eigentümer.' },
      { nazev: 'Einzug', popis: 'Anschrift der Wohnung, Einzugsdatum und alle einziehenden Personen.' },
    ],
    kroky: [
      { nazev: 'Angaben eintragen', popis: 'Wohnungsgeber, Wohnung, Einzugsdatum, Personen.' },
      { nazev: 'Unterschreiben', popis: 'Wohnungsgeber oder beauftragte Hausverwaltung.' },
      { nazev: 'Anmelden', popis: 'Mieter legt die Bestätigung beim Bürgeramt vor.' },
    ],
    online: ['Alle Pflichtangaben nach § 19 BMG', 'Mehrere Personen auf einmal', 'Hinweis auf Eigentümer bei Untermiete', 'Download als PDF und Word'],
    hodiSe: ['Sie vermieten eine Wohnung oder ein Zimmer', 'Sie sind Hauptmieter und vermieten unter', 'jemand zieht bei Ihnen ein (Partner, Familie)'],
    nehodiSe: ['Sie ziehen in Ihr eigenes Eigentum – dann sind Sie selbst Wohnungsgeber', 'Ihre Gemeinde nutzt ein eigenes Formular – dann dieses verwenden'],
    po: [
      { nazev: 'Übergeben', popis: 'Die Bestätigung erhält die einziehende Person.' },
      { nazev: 'Anmelden', popis: 'Innerhalb von zwei Wochen nach dem Einzug beim Bürgeramt.' },
    ],
    faq: [
      { q: 'Wer muss die Wohnungsgeberbestätigung ausstellen?', a: 'Der Wohnungsgeber – Eigentümer oder Vermieter, bei Untermiete der Hauptmieter – oder eine von ihm beauftragte Person, etwa die Hausverwaltung (§ 19 Abs. 1 BMG).' },
      { q: 'Was muss drinstehen?', a: 'Name und Anschrift des Wohnungsgebers, bei Nichteigentümern auch der Name des Eigentümers, das Einzugsdatum, die Anschrift der Wohnung und die Namen der einziehenden Personen (§ 19 Abs. 3 BMG).' },
      { q: 'Bis wann muss ich mich anmelden?', a: 'Innerhalb von zwei Wochen nach dem Einzug (§ 17 Abs. 1 BMG).' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Die Bestätigung entsteht ausschließlich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage beruht auf §§ 17 und 19 des Bundesmeldegesetzes (BMG).',
    souvisejiciPopis: 'Weitere Dokumente rund ums Wohnen, ebenfalls kostenlos.',
  },
  vytvorit: {
    title: 'Wohnungsgeberbestätigung online ausfüllen – PDF kostenlos',
    description: 'Assistent für die Wohnungsgeberbestätigung nach § 19 BMG. PDF oder Word kostenlos.',
    podnadpis: 'Kostenlos · Ergebnis als PDF und Word · dauert ca. 2 Minuten',
  },
};

export default stranka;
