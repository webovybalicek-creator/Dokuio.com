import type { StrankaDokumentu } from '../typy';
import { maengelanzeige as sablona } from '../../sablony/de/maengelanzeige';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Mängelanzeige",
  nazevA: "Mängelanzeige",
  katalog: {
  "popis": "Defekte Ware beim Händler reklamieren, mit Frist.",
  "kategorie": "alltag",
  "ilustrace": "protokol",
  "slova": [
    "Mängelanzeige",
    "Reklamation",
    "Gewährleistung",
    "Mängelrüge",
    "defekt",
    "Nacherfüllung"
  ]
},
  souvisejici: "alltag",
  landing: {
  "title": "Mängelanzeige {rok} – Reklamation Vorlage kostenlos als PDF",
  "description": "Kostenlose Mängelanzeige: defekte Ware reklamieren, Reparatur oder Ersatz verlangen und Frist setzen. Nach §§ 437 ff. BGB.",
  "perex": "Ware kaputt? Mit der Mängelanzeige verlangen Sie Reparatur oder Ersatz und setzen eine Frist.",
  "obsahPopis": "Reklamation mit Fristsetzung.",
  "obsah": [
    {
      "nazev": "Händler",
      "popis": "Bei wem Sie gekauft haben."
    },
    {
      "nazev": "Mangel",
      "popis": "Was nicht funktioniert."
    },
    {
      "nazev": "Forderung",
      "popis": "Reparatur oder Ersatz mit Frist."
    }
  ],
  "kroky": [
    {
      "nazev": "Ausfüllen",
      "popis": "Mangel konkret beschreiben."
    },
    {
      "nazev": "Senden",
      "popis": "Mit Kaufbeleg."
    },
    {
      "nazev": "Frist abwarten",
      "popis": "Danach Rücktritt oder Minderung."
    }
  ],
  "online": [
    "Ausfüllen mit Erklärungen zu jedem Feld",
    "Unterschrift auf dem Bildschirm",
    "Download als PDF und Word",
    "Fristablauf im Kalender"
  ],
  "hodiSe": [
    "Defekte Ware vom Händler oder Online-Shop"
  ],
  "nehodiSe": [
    "Kauf von Privatpersonen",
    "Herstellergarantie – dort gelten die Garantiebedingungen"
  ],
  "po": [
    {
      "nazev": "Nach der Frist",
      "popis": "Rücktritt oder Minderung; Hilfe bei der Verbraucherzentrale."
    }
  ],
  "faq": [
    {
      "q": "Wie lange kann ich reklamieren?",
      "a": "Zwei Jahre ab Übergabe, bei gebrauchter Ware ggf. ein Jahr."
    },
    {
      "q": "Wer muss beweisen, dass der Mangel schon da war?",
      "a": "Im ersten Jahr wird es vermutet (§ 477 BGB)."
    },
    {
      "q": "Speichern Sie meine Daten?",
      "a": "Nein. Das Dokument entsteht ausschließlich in Ihrem Browser."
    }
  ],
  "zakony": "Die Vorlage beruht auf §§ 437–439 und § 477 BGB.",
  "souvisejiciPopis": "Weitere Dokumente, ebenfalls kostenlos."
},
  vytvorit: {
  "title": "Mängelanzeige online ausfüllen – PDF kostenlos",
  "description": "Reklamation mit Fristsetzung. PDF oder Word kostenlos.",
  "podnadpis": "Kostenlos · Ergebnis als PDF und Word · dauert ca. 2 Minuten"
},
};

export default stranka;
