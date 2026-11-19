import type { StrankaDokumentu } from '../typy';
import de from '../de/uebergabeprotokoll-fahrzeug';
import { uebergabeprotokollFahrzeugAT as sablona } from '../../sablony/at/uebergabeprotokoll-fahrzeug';

const stranka: StrankaDokumentu = {
  ...de,
  sablona,
  landing: { ...de.landing, ...{
  "title": "Übergabeprotokoll Kfz Österreich {rok} – Vorlage kostenlos als PDF",
  "po": [
    {
      "nazev": "Abmeldung",
      "popis": "Verkäufer meldet ab, Käufer meldet an."
    }
  ],
  "zakony": "Kein gesetzliches Formular; ergänzt den Kaufvertrag nach §§ 1053 ff. ABGB."
} },
  vytvorit: { ...de.vytvorit, ...{"title": "Übergabeprotokoll Kfz (Österreich) online ausfüllen – PDF kostenlos"} },
};

export default stranka;
