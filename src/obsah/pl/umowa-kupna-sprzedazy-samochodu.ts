import type { StrankaDokumentu } from '../typy';
import { umowaSprzedazySamochodu as sablona } from '../../sablony/pl/umowa-sprzedazy-samochodu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Umowa kupna-sprzedaży samochodu",
  nazevA: "umowę kupna-sprzedaży samochodu",
  katalog: {
    "popis": "Sprzedaż używanego auta między osobami prywatnymi.",
    "kategorie": "auto",
    "ilustrace": "auto",
    "slova": [
      "sprzedaż auta",
      "kupno auta",
      "umowa kupna sprzedaży",
      "samochód",
      "pojazd",
      "car",
      "PCC-3"
    ]
  },
  souvisejici: 'auto',
  landing: {
    "title": "Umowa kupna-sprzedaży samochodu {rok} – wzór PDF za darmo",
    "description": "Darmowa umowa kupna-sprzedaży samochodu: VIN, przebieg, wady, płatność, zastrzeżenie własności. Terminy PCC-3 i zgłoszenia zbycia. PDF i Word.",
    "perex": "Sprzedaż używanego auta między osobami prywatnymi według Kodeksu cywilnego. Z przebiegiem, wadami i przypomnieniem o PCC-3 i zgłoszeniu zbycia.",
    "obsahPopis": "Sześć paragrafów według art. 535 i nast. Kodeksu cywilnego.",
    "obsah": [
      {
        "nazev": "Strony umowy",
        "popis": "Sprzedający i kupujący z PESEL."
      },
      {
        "nazev": "Przedmiot umowy",
        "popis": "Pojazd, VIN, numer rejestracyjny."
      },
      {
        "nazev": "Stan pojazdu",
        "popis": "Przebieg i znane wady."
      },
      {
        "nazev": "Cena i płatność",
        "popis": "Kwota, sposób zapłaty, zastrzeżenie własności."
      },
      {
        "nazev": "Wydanie pojazdu",
        "popis": "Kluczyki i dokumenty."
      },
      {
        "nazev": "Postanowienia końcowe",
        "popis": "PCC, egzemplarze."
      }
    ],
    "kroky": [
      {
        "nazev": "Wpisz dane",
        "popis": "Strony, auto, cena."
      },
      {
        "nazev": "Sprawdź tekst",
        "popis": "Każdy ustęp możesz edytować."
      },
      {
        "nazev": "Pobierz i podpisz",
        "popis": "PDF lub Word, dwa egzemplarze."
      }
    ],
    "online": [
      "Kwota słownie automatycznie",
      "Kontrola numeru VIN",
      "Przypomnienie o PCC-3 i rejestracji w kalendarzu",
      "Pobranie w PDF i Wordzie"
    ],
    "hodiSe": [
      "sprzedajesz lub kupujesz używane auto od osoby prywatnej",
      "chcesz mieć zapisany przebieg i wady"
    ],
    "nehodiSe": [
      "kupujesz w komisie lub salonie – obowiązują przepisy konsumenckie i faktura",
      "auto jest w leasingu – najpierw trzeba go wykupić"
    ],
    "po": [
      {
        "nazev": "PCC-3",
        "popis": "Kupujący w 14 dni płaci 2% podatku."
      },
      {
        "nazev": "Zgłoszenie zbycia",
        "popis": "Sprzedający w 30 dni, także online."
      },
      {
        "nazev": "Rejestracja",
        "popis": "Kupujący w 30 dni."
      }
    ],
    "faq": [
      {
        "q": "Kto płaci podatek PCC?",
        "a": "Kupujący – 2% wartości rynkowej auta, deklaracja PCC-3 w ciągu 14 dni od zawarcia umowy. Od 3 listopada 2026 zwolnione są rzeczy o wartości rynkowej do 3000 zł."
      },
      {
        "q": "Ile mam czasu na zgłoszenie sprzedaży?",
        "a": "Sprzedający zgłasza zbycie pojazdu staroście w ciągu 30 dni (art. 78 Prawa o ruchu drogowym), można to zrobić online na gov.pl."
      },
      {
        "q": "Czy zapisujecie moje dane?",
        "a": "Nie. Umowa powstaje wyłącznie w Twojej przeglądarce."
      }
    ],
    "zakony": "Wzór opiera się na Kodeksie cywilnym (art. 535 i nast., art. 589) oraz ustawie Prawo o ruchu drogowym (art. 78).",
    "souvisejiciPopis": "Inne dokumenty przy sprzedaży auta, również za darmo."
  },
  vytvorit: {
    "title": "Wypełnij umowę kupna-sprzedaży samochodu online – PDF za darmo",
    "description": "Kreator umowy kupna-sprzedaży samochodu według polskiego prawa. PDF lub Word za darmo.",
    "podnadpis": "Za darmo · wynik w PDF i Wordzie · zajmie ok. 5 minut"
  },
};

export default stranka;
