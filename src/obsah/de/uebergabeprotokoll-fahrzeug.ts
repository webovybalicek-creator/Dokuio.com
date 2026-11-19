import type { StrankaDokumentu } from '../typy';
import { uebergabeprotokollFahrzeug as sablona } from '../../sablony/de/uebergabeprotokoll-fahrzeug';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Übergabeprotokoll Fahrzeug",
  nazevA: "Übergabeprotokoll",
  katalog: {
  "popis": "Kilometerstand, Schäden, Schlüssel und Papiere bei der Übergabe.",
  "kategorie": "auto",
  "ilustrace": "protokol",
  "slova": [
    "Übergabeprotokoll",
    "Protokoll",
    "Autoübergabe",
    "Fahrzeugübergabe",
    "Auto verleihen"
  ]
},
  souvisejici: "auto",
  landing: {
  "title": "Übergabeprotokoll Auto {rok} – Vorlage kostenlos als PDF",
  "description": "Kostenloses Übergabeprotokoll für Auto und Motorrad: Kilometerstand, Tank, Schäden, Schlüssel, Papiere und Uhrzeit. Aus dem Kaufvertrag vorbefüllt.",
  "perex": "Hält fest, in welchem Zustand und wann das Fahrzeug übergeben wurde. Schützt beide Seiten bei Streit über Schäden oder Bußgelder.",
  "obsahPopis": "Kurzes Protokoll mit Ankreuzfeldern.",
  "obsah": [
    {
      "nazev": "Beteiligte und Anlass",
      "popis": "Verkauf, Verleih oder Rückgabe."
    },
    {
      "nazev": "Zustand",
      "popis": "Kilometer, Tank, Schäden."
    },
    {
      "nazev": "Schlüssel und Papiere",
      "popis": "Was übergeben wurde."
    },
    {
      "nazev": "Uhrzeit",
      "popis": "Wichtig bei Bußgeldern und Unfällen."
    }
  ],
  "kroky": [
    {
      "nazev": "Ausfüllen",
      "popis": "Daten aus dem Kaufvertrag übernehmen wir."
    },
    {
      "nazev": "Gemeinsam prüfen",
      "popis": "Fahrzeug und Tacho fotografieren."
    },
    {
      "nazev": "Unterschreiben",
      "popis": "Jede Seite behält ein Exemplar."
    }
  ],
  "online": [
    "Ausfüllen mit Erklärungen zu jedem Feld",
    "Unterschrift auf dem Bildschirm",
    "Download als PDF und Word",
    "Vorbefüllt aus dem Kaufvertrag"
  ],
  "hodiSe": [
    "Privatverkauf eines Autos oder Motorrads",
    "Auto an Freunde oder Familie verleihen"
  ],
  "nehodiSe": [
    "Gewerbliche Autovermietung – dort gelten deren Formulare"
  ],
  "po": [
    {
      "nazev": "Meldung",
      "popis": "Beim Verkauf: Veräußerung unverzüglich Zulassungsstelle und Versicherung melden."
    }
  ],
  "faq": [
    {
      "q": "Ist ein Übergabeprotokoll Pflicht?",
      "a": "Nein, aber es ist der beste Beweis, in welchem Zustand und wann das Fahrzeug übergeben wurde."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."
    }
  ],
  "zakony": "Kein gesetzliches Formular; ergänzt den Kaufvertrag nach § 433 BGB.",
  "souvisejiciPopis": "Weitere Dokumente, ebenfalls kostenlos."
},
  vytvorit: {
  "title": "Übergabeprotokoll Fahrzeug online ausfüllen – PDF kostenlos",
  "description": "Übergabeprotokoll für Auto oder Motorrad mit Kilometerstand, Schäden und Uhrzeit. PDF oder Word kostenlos.",
  "podnadpis": "Kostenlos · Ergebnis als PDF und Word · dauert ca. 2 Minuten"
},
};

export default stranka;
