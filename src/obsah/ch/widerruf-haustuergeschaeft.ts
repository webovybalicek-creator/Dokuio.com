import type { StrankaDokumentu } from '../typy';
import { widerrufHaustuerCH as sablona } from '../../sablony/ch/widerruf-haustuergeschaeft';

const stranka: StrankaDokumentu = {
  sablona,
  "nazev": "Widerruf Haustürgeschäft",
  "nazevA": "Widerruf eines Haustürgeschäfts",
  "katalog": {
    "popis": "Vertrag von der Haustür oder vom Telefon binnen 14 Tagen widerrufen.",
    "kategorie": "alltag",
    "ilustrace": "protokol",
    "slova": [
      "Widerruf",
      "Haustürgeschäft",
      "Telefonverkauf",
      "14 Tage",
      "Abo",
      "Vertreter"
    ]
  },
  "souvisejici": "alltag",
  "landing": {
    "title": "Widerruf Haustürgeschäft Schweiz {rok} – Vorlage kostenlos",
    "description": "Kostenloser Widerruf nach Art. 40a ff. OR: Verträge von der Haustür, am Telefon oder an Werbefahrten binnen 14 Tagen widerrufen. Ab 100 Franken.",
    "perex": "An der Haustür oder am Telefon etwas gekauft und bereut? Solche Verträge können Sie innert 14 Tagen ohne Begründung widerrufen.",
    "obsahPopis": "Ein Brief an den Anbieter.",
    "obsah": [
      {
        "nazev": "Anbieter",
        "popis": "Firma und Adresse."
      },
      {
        "nazev": "Vertrag",
        "popis": "Was und wann."
      },
      {
        "nazev": "Ort des Angebots",
        "popis": "Haustür, Telefon, Arbeitsplatz …"
      },
      {
        "nazev": "Rückerstattung",
        "popis": "Konto für Ihr Geld."
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
      "Vertreter an der Haustür",
      "Telefonverkauf, z. B. Abo oder Wein",
      "Kauf an einer Werbefahrt"
    ],
    "nehodiSe": [
      "Online-Käufe – in der Schweiz gibt es dafür kein gesetzliches Widerrufsrecht",
      "Käufe im Laden oder an Markt- und Messeständen",
      "Verträge bis 100 Franken"
    ],
    "po": [
      {
        "nazev": "Einschreiben",
        "popis": "Rechtzeitig absenden und belegen."
      },
      {
        "nazev": "Rückgabe",
        "popis": "Erhaltenes zurückgeben, Geld zurückfordern."
      }
    ],
    "faq": [
      {
        "q": "Kann ich einen Online-Kauf widerrufen?",
        "a": "Nein, nicht von Gesetzes wegen. Viele Shops gewähren freiwillig ein Rückgaberecht – massgebend sind deren AGB."
      },
      {
        "q": "Wann beginnt die Frist?",
        "a": "Sobald Sie den Vertrag abgeschlossen haben und schriftlich über das Widerrufsrecht informiert wurden. Die Frist beträgt 14 Tage."
      },
      {
        "q": "Speichern Sie meine Daten?",
        "a": "Nein. Das Dokument entsteht ausschliesslich in Ihrem Browser."
      }
    ],
    "zakony": "Die Vorlage beruht auf Art. 40a–40f OR."
  },
  "vytvorit": {
    "title": "Widerruf Haustürgeschäft (Schweiz) online ausfüllen – PDF",
    "description": "Widerruf nach Art. 40a ff. OR. PDF oder Word kostenlos."
  },
};

export default stranka;
