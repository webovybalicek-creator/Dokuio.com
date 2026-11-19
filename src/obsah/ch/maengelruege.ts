import type { StrankaDokumentu } from '../typy';
import { maengelruegeCH as sablona } from '../../sablony/ch/maengelruege';

const stranka: StrankaDokumentu = {
  sablona,
  "nazev": "Mängelrüge",
  "nazevA": "Mängelrüge",
  "katalog": {
    "popis": "Defekte Ware sofort rügen.",
    "kategorie": "alltag",
    "ilustrace": "protokol",
    "slova": [
      "Mängelrüge",
      "Gewährleistung",
      "Garantie",
      "Reklamation",
      "defekt",
      "Wandelung",
      "Minderung"
    ]
  },
  "souvisejici": "alltag",
  "landing": {
    "title": "Mängelrüge Schweiz {rok} – Vorlage kostenlos als PDF",
    "description": "Kostenlose Mängelrüge nach Art. 201 OR: defekte Ware sofort rügen und Reparatur, Ersatz, Minderung oder Wandelung verlangen.",
    "perex": "Ware defekt? Rügen Sie den Mangel sofort schriftlich – sonst gilt die Ware als genehmigt.",
    "obsahPopis": "Ein Brief an den Verkäufer.",
    "obsah": [
      {
        "nazev": "Verkäufer",
        "popis": "Firma und Adresse."
      },
      {
        "nazev": "Ware und Mangel",
        "popis": "Was defekt ist und seit wann."
      },
      {
        "nazev": "Forderung",
        "popis": "Reparatur, Ersatz, Minderung oder Wandelung."
      }
    ],
    "kroky": [
      {
        "nazev": "Angaben eintragen",
        "popis": "Was Sie nicht wissen, bleibt als Linie."
      },
      {
        "nazev": "Text prüfen",
        "popis": "Vorschau neben dem Formular."
      },
      {
        "nazev": "Herunterladen und unterschreiben",
        "popis": "PDF oder Word."
      }
    ],
    "online": [
      "Betrag in Worten automatisch",
      "Unterschrift auf dem Bildschirm",
      "Entwurf bleibt im Browser gespeichert",
      "Download als PDF und Word"
    ],
    "hodiSe": [
      "Neue oder gebrauchte Ware vom Händler ist defekt"
    ],
    "nehodiSe": [
      "Kauf unter Privaten mit Gewährleistungsausschluss"
    ],
    "po": [
      {
        "nazev": "Sofort handeln",
        "popis": "Wer zu spät rügt, verliert seine Rechte."
      },
      {
        "nazev": "Verjährung",
        "popis": "Zwei Jahre ab Ablieferung (Art. 210 OR)."
      }
    ],
    "faq": [
      {
        "q": "Habe ich ein Recht auf Reparatur?",
        "a": "Von Gesetzes wegen haben Sie Anspruch auf Wandelung oder Minderung, bei Serienware auf Ersatz. Reparatur gilt, wenn sie vereinbart ist – oft in Garantie oder AGB."
      },
      {
        "q": "Wie lange habe ich Zeit?",
        "a": "Mängel müssen Sie sofort nach Entdeckung rügen. Die Ansprüche verjähren zwei Jahre nach Ablieferung, bei Occasionen kann der Händler auf ein Jahr verkürzen."
      },
      {
        "q": "Speichern Sie meine Daten?",
        "a": "Nein. Das Dokument entsteht ausschliesslich in Ihrem Browser."
      }
    ],
    "zakony": "Die Vorlage beruht auf Art. 197 ff. OR, insbesondere Art. 201, 205, 206 und 210 OR."
  },
  "vytvorit": {
    "title": "Mängelrüge (Schweiz) online ausfüllen – PDF kostenlos",
    "description": "Mängelrüge nach Art. 201 OR. PDF oder Word kostenlos."
  },
};

export default stranka;
