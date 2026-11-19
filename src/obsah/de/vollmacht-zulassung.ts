import type { StrankaDokumentu } from '../typy';
import { vollmachtZulassung as sablona } from '../../sablony/de/vollmacht-zulassung';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Vollmacht Zulassungsstelle",
  nazevA: "Vollmacht für die Zulassungsstelle",
  katalog: {
  "popis": "Wenn jemand anderes das Auto an-, um- oder abmeldet.",
  "kategorie": "auto",
  "ilustrace": "plnamoc",
  "slova": [
    "Vollmacht Zulassungsstelle",
    "Vollmacht Kfz",
    "Ummeldung",
    "Abmeldung",
    "Anmeldung",
    "Umschreibung"
  ]
},
  souvisejici: "auto",
  landing: {
  "title": "Vollmacht Zulassungsstelle {rok} – Vorlage kostenlos als PDF",
  "description": "Kostenlose Vollmacht für die Kfz-Zulassung, Umschreibung oder Abmeldung. Mit Checkliste der Unterlagen (SEPA-Mandat, Ausweis).",
  "perex": "Damit eine andere Person Ihr Fahrzeug bei der Zulassungsbehörde an-, um- oder abmelden darf. Mit Liste, was sonst noch mit muss.",
  "obsahPopis": "Kurze Vollmacht für einen Vorgang bei der Zulassungsstelle.",
  "obsah": [
    {
      "nazev": "Personen",
      "popis": "Wer wen bevollmächtigt."
    },
    {
      "nazev": "Vorgang",
      "popis": "Umschreibung, Zulassung oder Abmeldung."
    },
    {
      "nazev": "Fahrzeug",
      "popis": "Typ, FIN, Kennzeichen."
    }
  ],
  "kroky": [
    {
      "nazev": "Ausfüllen",
      "popis": "Daten aus dem Kaufvertrag übernehmen wir."
    },
    {
      "nazev": "Unterschreiben",
      "popis": "Eigenhändig."
    },
    {
      "nazev": "Unterlagen packen",
      "popis": "SEPA-Mandat, Ausweise, Fahrzeugpapiere."
    }
  ],
  "online": [
    "Ausfüllen mit Erklärungen zu jedem Feld",
    "Download als PDF und Word",
    "Vorbefüllt aus dem Kaufvertrag"
  ],
  "hodiSe": [
    "Käufer/in meldet das Auto um, Sie sind verhindert",
    "Angehörige erledigen die Abmeldung"
  ],
  "nehodiSe": [
    "Online-Zulassung (i-Kfz) – dort ist keine Vollmacht nötig"
  ],
  "po": [
    {
      "nazev": "Bei der Behörde",
      "popis": "Viele Zulassungsstellen haben ein eigenes Formular – vorher auf deren Website nachsehen."
    }
  ],
  "faq": [
    {
      "q": "Was braucht die bevollmächtigte Person?",
      "a": "Die Vollmacht, den eigenen Ausweis, den Ausweis des Vollmachtgebers (Original oder Kopie, je nach Behörde), die Fahrzeugpapiere und bei Zulassung ein vom Halter unterschriebenes SEPA-Lastschriftmandat für die Kfz-Steuer."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."
    }
  ],
  "zakony": "Vertretung nach §§ 164 ff. BGB; Unterlagen nach den Angaben der Zulassungsbehörden.",
  "souvisejiciPopis": "Weitere Dokumente, ebenfalls kostenlos."
},
  vytvorit: {
  "title": "Vollmacht Zulassungsstelle online ausfüllen – PDF kostenlos",
  "description": "Vollmacht für Kfz-Zulassung, Umschreibung oder Abmeldung. PDF oder Word kostenlos.",
  "podnadpis": "Kostenlos · Ergebnis als PDF und Word · dauert ca. 2 Minuten"
},
};

export default stranka;
