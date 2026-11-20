import type { StrankaDokumentu } from '../typy';
import { umowaSprzedazy as sablona } from '../../sablony/pl/umowa-sprzedazy';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Umowa kupna-sprzedaży",
  nazevA: "umowę kupna-sprzedaży",
  katalog: {
  "popis": "Sprzedaż używanych rzeczy między osobami prywatnymi.",
  "kategorie": "codzienne",
  "ilustrace": "protokol",
  "slova": [
    "umowa kupna-sprzedaży",
    "sprzedaż",
    "OLX",
    "rower",
    "telefon",
    "PCC"
  ]
},
  souvisejici: "codzienne",
  landing: {
  "title": "Umowa kupna-sprzedaży {rok} – wzór PDF za darmo",
  "description": "Darmowa umowa kupna-sprzedaży rzeczy ruchomej: opis, wady, cena, płatność. Z informacją o PCC (próg 3000 zł). PDF i Word.",
  "perex": "Do sprzedaży używanych rzeczy między osobami prywatnymi – roweru, telefonu, mebli.",
  "obsahPopis": "Krótka umowa z opisem rzeczy i wad.",
  "obsah": [
    {
      "nazev": "Strony",
      "popis": "Kto sprzedaje i kto kupuje."
    },
    {
      "nazev": "Rzecz",
      "popis": "Opis i znane wady."
    },
    {
      "nazev": "Cena",
      "popis": "Płatność i wydanie."
    }
  ],
  "kroky": [
    {
      "nazev": "Wypełnij",
      "popis": "Cenę słownie dopiszemy sami."
    },
    {
      "nazev": "Sprawdź",
      "popis": "Obejrzyjcie rzecz razem."
    },
    {
      "nazev": "Podpiszcie",
      "popis": "Obie strony."
    }
  ],
  "online": [
    "Wypełnianie z objaśnieniem każdego pola",
    "Podpis na ekranie",
    "Pobranie w PDF i Word albo wysyłka na e-mail",
    "Przypomnienie o PCC-3 w kalendarzu"
  ],
  "hodiSe": [
    "Sprzedaż przez ogłoszenie",
    "Droższy sprzęt używany"
  ],
  "nehodiSe": [
    "Samochody – do tego jest umowa kupna-sprzedaży samochodu",
    "Nieruchomości"
  ],
  "po": [
    {
      "nazev": "PCC",
      "popis": "Powyżej 3000 zł kupujący płaci 2% w 14 dni."
    }
  ],
  "faq": [
    {
      "q": "Czy trzeba płacić PCC?",
      "a": "Kupujący płaci 2% wartości rynkowej, jeśli przekracza 3000 zł (od 3.11.2026)."
    },
    {
      "q": "Czy przechowujecie moje dane?",
      "a": "Nie. Dokument powstaje wyłącznie w Twojej przeglądarce."
    }
  ],
  "zakony": "Wzór opiera się na art. 535 i nast. Kodeksu cywilnego i ustawie o PCC.",
  "souvisejiciPopis": "Inne dokumenty, również za darmo."
},
  vytvorit: {
  "title": "Umowa kupna-sprzedaży online – PDF za darmo",
  "description": "Umowa sprzedaży rzeczy używanej. PDF lub Word za darmo.",
  "podnadpis": "Za darmo · wynik w PDF i Word · zajmie ok. 2 minuty"
},
};

export default stranka;
