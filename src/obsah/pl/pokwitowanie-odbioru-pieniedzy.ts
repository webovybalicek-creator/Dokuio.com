import type { StrankaDokumentu } from '../typy';
import { pokwitowanie as sablona } from '../../sablony/pl/pokwitowanie';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pokwitowanie odbioru pieniędzy",
  nazevA: "pokwitowanie odbioru pieniędzy",
  katalog: {
    "popis": "Potwierdzenie przyjęcia gotówki.",
    "kategorie": "pieniadze",
    "ilustrace": "penize",
    "slova": [
      "pokwitowanie",
      "potwierdzenie odbioru",
      "gotówka",
      "receipt",
      "zaliczka",
      "kaucja"
    ]
  },
  souvisejici: 'pieniadze',
  landing: {
    "title": "Pokwitowanie odbioru pieniędzy {rok} – wzór PDF za darmo",
    "description": "Darmowe pokwitowanie odbioru gotówki: kwota liczbowo i słownie, tytuł płatności. PDF i Word.",
    "perex": "Pokwitowanie odbioru gotówki to prosty dowód, że pieniądze zostały przekazane – przy sprzedaży auta, pożyczce czy zaliczce. Kwota słownie uzupełni się sama.",
    "obsahPopis": "Krótkie pokwitowanie z tytułem płatności.",
    "obsah": [
      {
        "nazev": "Pokwitowanie",
        "popis": "Kto, komu, ile i za co."
      }
    ],
    "kroky": [
      {
        "nazev": "Wypełnij",
        "popis": "Imiona, kwota, tytuł."
      },
      {
        "nazev": "Przelicz",
        "popis": "Pieniądze przed podpisem."
      },
      {
        "nazev": "Podpisz",
        "popis": "Każdy zatrzymuje kopię."
      }
    ],
    "online": [
      "Kwota słownie automatycznie",
      "Podpis na ekranie",
      "Pobranie w PDF i Wordzie"
    ],
    "hodiSe": [
      "płacisz gotówką za auto lub rzecz",
      "przekazujesz zaliczkę, kaucję lub ratę"
    ],
    "nehodiSe": [
      "płatność przelewem – dowodem jest potwierdzenie przelewu"
    ],
    "po": [
      {
        "nazev": "Kopia",
        "popis": "Każda strona zatrzymuje podpisany egzemplarz."
      }
    ],
    "faq": [
      {
        "q": "Czy mogę żądać pokwitowania?",
        "a": "Tak. Dłużnik, który płaci, może żądać od wierzyciela pokwitowania (art. 462 KC)."
      },
      {
        "q": "Czy zapisujecie moje dane?",
        "a": "Nie. Pokwitowanie powstaje wyłącznie w Twojej przeglądarce."
      }
    ],
    "zakony": "Wzór opiera się na Kodeksie cywilnym (art. 462).",
    "souvisejiciPopis": "Inne dokumenty o pieniądzach, również za darmo."
  },
  vytvorit: {
    "title": "Wypełnij pokwitowanie odbioru pieniędzy online – PDF za darmo",
    "description": "Pokwitowanie odbioru gotówki z kwotą słownie. PDF lub Word za darmo.",
    "podnadpis": "Za darmo · wynik w PDF i Wordzie · zajmie ok. minuty"
  },
};

export default stranka;
