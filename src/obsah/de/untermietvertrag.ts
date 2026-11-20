import type { StrankaDokumentu } from '../typy';
import { untermietvertrag as sablona } from '../../sablony/de/untermietvertrag';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Untermietvertrag",
  nazevA: "Untermietvertrag",
  katalog: {"popis": "Zimmer oder ganze Wohnung untervermieten – mit Erlaubnis des Vermieters.", "kategorie": "wohnen", "ilustrace": "protokol", "slova": ["Untermietvertrag", "Untermiete", "Zimmer untervermieten", "Erlaubnis Vermieter", "§ 553 BGB", "WG-Zimmer"]},
  souvisejici: "wohnen",
  landing: {
  "title": "Untermietvertrag {rok} – Muster kostenlos (PDF & Word)",
  "description": "Kostenloser Untermietvertrag für Zimmer oder Wohnung nach §§ 540, 553 BGB: Erlaubnis des Vermieters, Dauer, Miete, Kaution. Online ausfüllen, als PDF oder Word.",
  "perex": "Sie vermieten ein Zimmer oder die ganze Wohnung unter, die Sie selbst gemietet haben? Dafür brauchen Sie die Erlaubnis des Vermieters und einen klaren Vertrag.",
  "obsahPopis": "Fünf Abschnitte nach §§ 540, 553 BGB.",
  "obsah": [
    {
      "nazev": "Vertragsparteien",
      "popis": "Hauptmieter und Untermieter."
    },
    {
      "nazev": "Mietgegenstand",
      "popis": "Zimmer oder ganze Wohnung, Erlaubnis des Vermieters."
    },
    {
      "nazev": "Dauer und Kündigung",
      "popis": "Befristet oder unbefristet, Kündigungsfrist."
    },
    {
      "nazev": "Miete und Kaution",
      "popis": "Monatliche Miete, Kaution."
    },
    {
      "nazev": "Schlussbestimmungen",
      "popis": "Hausordnung, Textform."
    }
  ],
  "kroky": [
    {
      "nazev": "Parteien eintragen",
      "popis": "Hauptmieter und Untermieter."
    },
    {
      "nazev": "Erlaubnis",
      "popis": "Datum der Erlaubnis des Vermieters."
    },
    {
      "nazev": "Unterschreiben",
      "popis": "Zwei Exemplare."
    }
  ],
  "online": [
    "Termine im Kalender",
    "Betrag in Worten automatisch",
    "Download als PDF und Word",
    "Leere Vorlage zum Ausdrucken"
  ],
  "hodiSe": [
    "WG-Zimmer oder Zimmer in der Mietwohnung untervermieten",
    "vorübergehend wegziehen und die Wohnung untervermieten"
  ],
  "nehodiSe": [
    "Sie sind Eigentümer – nutzen Sie einen Mietvertrag",
    "der Vermieter verweigert die Erlaubnis"
  ],
  "po": [
    {
      "nazev": "Erlaubnis beilegen",
      "popis": "Kopie der Erlaubnis des Vermieters."
    },
    {
      "nazev": "Übergabeprotokoll",
      "popis": "Beim Einzug."
    }
  ],
  "faq": [
    {
      "q": "Brauche ich die Erlaubnis des Vermieters?",
      "a": "Ja (§ 540 BGB). Für einen Teil der Wohnung haben Sie bei berechtigtem Interesse einen Anspruch darauf; der Vermieter kann eine angemessene Mieterhöhung verlangen (§ 553 BGB)."
    },
    {
      "q": "Was, wenn der Vermieter die Erlaubnis verweigert?",
      "a": "Dann können Sie das Mietverhältnis außerordentlich mit der gesetzlichen Frist kündigen, außer in der Person des Untermieters liegt ein wichtiger Grund (§ 540 Abs. 1 BGB)."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht direkt in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf §§ 535 ff., 540 und 553 des Bürgerlichen Gesetzbuchs (BGB).",
  "souvisejiciPopis": "Weitere Vorlagen rund ums Wohnen."
},
  vytvorit: {"title": "Untermietvertrag online ausfüllen – kostenlos als PDF", "description": "Untermietvertrag online erstellen. Kostenlos als PDF oder Word.", "podnadpis": "Kostenlos · PDF und Word · dauert etwa 3 Minuten"},
};

export default stranka;
