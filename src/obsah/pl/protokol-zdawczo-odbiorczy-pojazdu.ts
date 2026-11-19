import type { StrankaDokumentu } from '../typy';
import { protokolPojazdu as sablona } from '../../sablony/pl/protokol-zdawczo-odbiorczy-pojazdu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Protokół zdawczo-odbiorczy pojazdu",
  nazevA: "protokół zdawczo-odbiorczy pojazdu",
  katalog: {
    "popis": "Stan auta, kluczyki i dokumenty przy przekazaniu.",
    "kategorie": "auto",
    "ilustrace": "protokol",
    "slova": [
      "protokół",
      "przekazanie auta",
      "odbiór pojazdu",
      "zdawczo-odbiorczy"
    ]
  },
  souvisejici: 'auto',
  landing: {
    "title": "Protokół zdawczo-odbiorczy pojazdu {rok} – wzór PDF za darmo",
    "description": "Darmowy protokół przekazania auta: przebieg, paliwo, uszkodzenia, kluczyki, wyposażenie, godzina przekazania. PDF i Word.",
    "perex": "Dokładny zapis, w jakim stanie i kiedy auto zostało przekazane. Chroni przed sporami o uszkodzenia, przebieg i mandaty.",
    "obsahPopis": "Pięć krótkich części, wypełni się z umowy sprzedaży.",
    "obsah": [
      {
        "nazev": "Strony",
        "popis": "Przekazujący i odbierający."
      },
      {
        "nazev": "Pojazd",
        "popis": "Marka, VIN, numer rejestracyjny."
      },
      {
        "nazev": "Stan",
        "popis": "Przebieg, paliwo, uszkodzenia."
      },
      {
        "nazev": "Wyposażenie",
        "popis": "Kluczyki, gaśnica, trójkąt."
      },
      {
        "nazev": "Odbiór",
        "popis": "Data i godzina."
      }
    ],
    "kroky": [
      {
        "nazev": "Wypełnij z umowy",
        "popis": "Jednym kliknięciem."
      },
      {
        "nazev": "Zapisz stan",
        "popis": "Przebieg, paliwo, uszkodzenia."
      },
      {
        "nazev": "Podpiszcie",
        "popis": "Przy przekazaniu."
      }
    ],
    "online": [
      "Wypełnienie z umowy sprzedaży",
      "Podpis na ekranie",
      "Pobranie w PDF i Wordzie"
    ],
    "hodiSe": [
      "sprzedajesz lub kupujesz auto",
      "pożyczasz auto znajomemu"
    ],
    "nehodiSe": [
      "wypożyczalnia lub leasing – mają własne protokoły"
    ],
    "po": [
      {
        "nazev": "Zdjęcia",
        "popis": "Sfotografuj auto i licznik."
      }
    ],
    "faq": [
      {
        "q": "Czy protokół jest obowiązkowy?",
        "a": "Nie, ale to najlepszy dowód stanu auta i godziny przekazania."
      },
      {
        "q": "Czy zapisujecie moje dane?",
        "a": "Nie. Protokół powstaje wyłącznie w Twojej przeglądarce."
      }
    ],
    "zakony": "Wzór opiera się na Kodeksie cywilnym.",
    "souvisejiciPopis": "Inne dokumenty przy sprzedaży auta, również za darmo."
  },
  vytvorit: {
    "title": "Wypełnij protokół zdawczo-odbiorczy pojazdu online – PDF za darmo",
    "description": "Protokół przekazania auta: przebieg, paliwo, uszkodzenia, kluczyki. PDF lub Word za darmo.",
    "podnadpis": "Za darmo · wynik w PDF i Wordzie · zajmie ok. 3 minut"
  },
};

export default stranka;
