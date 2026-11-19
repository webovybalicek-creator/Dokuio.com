import type { StrankaDokumentu } from '../typy';
import { vollmacht as sablona } from '../../sablony/de/vollmacht';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Vollmacht",
  nazevA: "Vollmacht",
  katalog: {
  "popis": "Damit jemand eine Sache für Sie erledigt.",
  "kategorie": "alltag",
  "ilustrace": "plnamoc",
  "slova": [
    "Vollmacht",
    "Bevollmächtigung",
    "Post",
    "Paket abholen",
    "Behörde"
  ]
},
  souvisejici: "alltag",
  landing: {
  "title": "Vollmacht {rok} – Vorlage kostenlos als PDF",
  "description": "Kostenlose Vollmacht mit konkretem Umfang: Post abholen, Behördengang, Erledigungen. Online ausfüllen, PDF oder Word.",
  "perex": "Eine einfache Vollmacht für eine bestimmte Angelegenheit – z. B. Einschreiben abholen oder einen Antrag abgeben.",
  "obsahPopis": "Kurze Vollmacht mit Umfang und Gültigkeit.",
  "obsah": [
    {
      "nazev": "Personen",
      "popis": "Wer wen bevollmächtigt."
    },
    {
      "nazev": "Umfang",
      "popis": "Was genau erledigt werden darf."
    },
    {
      "nazev": "Gültigkeit",
      "popis": "Bis wann."
    }
  ],
  "kroky": [
    {
      "nazev": "Ausfüllen",
      "popis": "Umfang konkret beschreiben."
    },
    {
      "nazev": "Unterschreiben",
      "popis": "Eigenhändig."
    },
    {
      "nazev": "Übergeben",
      "popis": "Bevollmächtigte/r legt sie mit Ausweis vor."
    }
  ],
  "online": [
    "Ausfüllen mit Erklärungen zu jedem Feld",
    "Unterschrift auf dem Bildschirm",
    "Download als PDF und Word"
  ],
  "hodiSe": [
    "Post oder Paket abholen",
    "Unterlagen bei einer Behörde abgeben"
  ],
  "nehodiSe": [
    "Vorsorgevollmacht für Krankheit oder Alter",
    "Grundstücks- oder Bankgeschäfte mit besonderer Form"
  ],
  "po": [
    {
      "nazev": "Widerruf",
      "popis": "Die Vollmacht können Sie jederzeit widerrufen – Original zurückverlangen."
    }
  ],
  "faq": [
    {
      "q": "Muss die Vollmacht beglaubigt werden?",
      "a": "Für alltägliche Erledigungen meist nicht. Für Grundbuch, Handelsregister oder manche Banken ist eine notarielle Beglaubigung nötig."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf §§ 164 ff. BGB.",
  "souvisejiciPopis": "Weitere Dokumente, ebenfalls kostenlos."
},
  vytvorit: {
  "title": "Vollmacht online ausfüllen – PDF kostenlos",
  "description": "Vollmacht mit konkretem Umfang. PDF oder Word kostenlos.",
  "podnadpis": "Kostenlos · Ergebnis als PDF und Word · dauert ca. 2 Minuten"
},
};

export default stranka;
