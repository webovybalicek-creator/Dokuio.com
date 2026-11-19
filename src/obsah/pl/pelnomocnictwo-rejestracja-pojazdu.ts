import type { StrankaDokumentu } from '../typy';
import { pelnomocnictwoRejestracja as sablona } from '../../sablony/pl/pelnomocnictwo-rejestracja-pojazdu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pełnomocnictwo do rejestracji pojazdu",
  nazevA: "pełnomocnictwo do rejestracji pojazdu",
  katalog: {
  "popis": "Gdy pojazd zarejestruje za Ciebie ktoś inny.",
  "kategorie": "auto",
  "ilustrace": "plnamoc",
  "slova": [
    "pełnomocnictwo",
    "upoważnienie",
    "rejestracja pojazdu",
    "wydział komunikacji",
    "przerejestrowanie"
  ]
},
  souvisejici: "auto",
  landing: {
  "title": "Pełnomocnictwo do rejestracji pojazdu {rok} – wzór PDF za darmo",
  "description": "Darmowe pełnomocnictwo do rejestracji samochodu w wydziale komunikacji. Z listą dokumentów i informacją o opłacie skarbowej 17 zł.",
  "perex": "Gdy rejestrację auta załatwia za Ciebie ktoś inny – rodzina, znajomy lub sprzedający.",
  "obsahPopis": "Krótkie pełnomocnictwo do spraw rejestracyjnych.",
  "obsah": [
    {
      "nazev": "Osoby",
      "popis": "Kto kogo upoważnia."
    },
    {
      "nazev": "Pojazd",
      "popis": "Marka, VIN, numer rejestracyjny."
    },
    {
      "nazev": "Zakres",
      "popis": "Wniosek, odbiór dowodu i tablic, opłaty."
    }
  ],
  "kroky": [
    {
      "nazev": "Wypełnij",
      "popis": "Dane z umowy przejmiemy sami."
    },
    {
      "nazev": "Podpisz",
      "popis": "Własnoręcznie."
    },
    {
      "nazev": "Przekaż",
      "popis": "Z dokumentami pojazdu."
    }
  ],
  "online": [
    "Wypełnianie z objaśnieniem każdego pola",
    "Podpis na ekranie",
    "Pobranie w PDF i Word albo wysyłka na e-mail",
    "Wypełnione na podstawie umowy kupna"
  ],
  "hodiSe": [
    "Kupujący nie może pójść do urzędu",
    "Rejestrację załatwia rodzina"
  ],
  "nehodiSe": [
    "Rejestracja online przez gov.pl – tam pełnomocnictwo nie jest potrzebne"
  ],
  "po": [
    {
      "nazev": "Opłata",
      "popis": "17 zł opłaty skarbowej, rodzina zwolniona."
    }
  ],
  "faq": [
    {
      "q": "Ile kosztuje pełnomocnictwo?",
      "a": "17 zł opłaty skarbowej; dla małżonka, rodziców, dziadków, dzieci, wnuków i rodzeństwa – bez opłaty."
    },
    {
      "q": "Czy przechowujecie moje dane?",
      "a": "Nie. Dokument powstaje wyłącznie w Twojej przeglądarce."
    }
  ],
  "zakony": "Wzór opiera się na art. 98 i nast. Kodeksu cywilnego oraz Prawie o ruchu drogowym.",
  "souvisejiciPopis": "Inne dokumenty, również za darmo."
},
  vytvorit: {
  "title": "Pełnomocnictwo do rejestracji pojazdu online – PDF za darmo",
  "description": "Pełnomocnictwo do rejestracji auta. PDF lub Word za darmo.",
  "podnadpis": "Za darmo · wynik w PDF i Word · zajmie ok. 2 minuty"
},
};

export default stranka;
