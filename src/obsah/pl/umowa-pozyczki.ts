import type { StrankaDokumentu } from '../typy';
import { umowaPozyczki as sablona } from '../../sablony/pl/umowa-pozyczki';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Umowa pożyczki",
  nazevA: "umowę pożyczki",
  katalog: {
    "popis": "Pożyczka pieniędzy między znajomymi, także na raty.",
    "kategorie": "pieniadze",
    "ilustrace": "pujcka",
    "slova": [
      "pożyczka",
      "pożyczyć pieniądze",
      "raty",
      "loan",
      "PCC"
    ]
  },
  souvisejici: 'pieniadze',
  landing: {
    "title": "Umowa pożyczki {rok} – wzór PDF za darmo z harmonogramem spłat",
    "description": "Darmowa umowa pożyczki między osobami prywatnymi: kwota, odsetki, zwrot jednorazowo lub w ratach z harmonogramem spłat. Informacja o PCC. PDF i Word.",
    "perex": "Pożyczka między znajomymi czarno na białym. Jednorazowo lub w ratach – harmonogram spłat dołączymy automatycznie.",
    "obsahPopis": "Pięć paragrafów według art. 720 i nast. Kodeksu cywilnego.",
    "obsah": [
      {
        "nazev": "Strony",
        "popis": "Pożyczkodawca i pożyczkobiorca."
      },
      {
        "nazev": "Przedmiot umowy",
        "popis": "Kwota i sposób przekazania."
      },
      {
        "nazev": "Oprocentowanie",
        "popis": "Bez odsetek lub z odsetkami."
      },
      {
        "nazev": "Zwrot",
        "popis": "Jednorazowo lub w ratach."
      },
      {
        "nazev": "Postanowienia końcowe",
        "popis": "PCC, egzemplarze."
      }
    ],
    "kroky": [
      {
        "nazev": "Wpisz kwotę",
        "popis": "I sposób przekazania."
      },
      {
        "nazev": "Ustal zwrot",
        "popis": "Jednorazowo lub w ratach."
      },
      {
        "nazev": "Podpiszcie",
        "popis": "Dwa egzemplarze."
      }
    ],
    "online": [
      "Harmonogram spłat jako załącznik",
      "Przypomnienia rat w kalendarzu",
      "Kwota słownie automatycznie",
      "Pobranie w PDF i Wordzie"
    ],
    "hodiSe": [
      "pożyczasz pieniądze rodzinie lub znajomym",
      "chcesz rat z jasnymi terminami"
    ],
    "nehodiSe": [
      "kredyt konsumencki lub pożyczka w ramach firmy – inne przepisy"
    ],
    "po": [
      {
        "nazev": "PCC-3",
        "popis": "Sprawdź obowiązek lub zwolnienie w 14 dni."
      },
      {
        "nazev": "Raty",
        "popis": "Dodaj je do kalendarza."
      }
    ],
    "faq": [
      {
        "q": "Czy od pożyczki trzeba zapłacić podatek?",
        "a": "Co do zasady tak – 0,5% PCC płaci pożyczkobiorca w 14 dni. Są zwolnienia, m.in. dla najbliższej rodziny – szczegóły na podatki.gov.pl."
      },
      {
        "q": "Czy umowa musi być pisemna?",
        "a": "Pożyczka powyżej 1000 zł wymaga formy dokumentowej (art. 720 § 2 KC)."
      },
      {
        "q": "Czy zapisujecie moje dane?",
        "a": "Nie. Umowa powstaje wyłącznie w Twojej przeglądarce."
      }
    ],
    "zakony": "Wzór opiera się na Kodeksie cywilnym (art. 720–724, art. 359).",
    "souvisejiciPopis": "Inne dokumenty o pieniądzach, również za darmo."
  },
  vytvorit: {
    "title": "Wypełnij umowę pożyczki online – PDF za darmo",
    "description": "Umowa pożyczki z harmonogramem spłat według polskiego prawa. PDF lub Word za darmo.",
    "podnadpis": "Za darmo · wynik w PDF i Wordzie · zajmie ok. 3 minut"
  },
};

export default stranka;
