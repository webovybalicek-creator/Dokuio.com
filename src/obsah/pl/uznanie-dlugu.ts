import type { StrankaDokumentu } from '../typy';
import { uznanieDlugu as sablona } from '../../sablony/pl/uznanie-dlugu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Uznanie długu",
  nazevA: "uznanie długu",
  katalog: {
  "popis": "Pisemne potwierdzenie długu, także z ratami.",
  "kategorie": "pieniadze",
  "ilustrace": "dluh",
  "slova": [
    "uznanie długu",
    "dług",
    "raty",
    "harmonogram spłaty",
    "dłużnik"
  ]
},
  souvisejici: "pieniadze",
  landing: {
  "title": "Uznanie długu {rok} – wzór PDF za darmo",
  "description": "Darmowe uznanie długu: tytuł i kwota, spłata jednorazowa lub w ratach z harmonogramem. Przerywa bieg przedawnienia. PDF i Word.",
  "perex": "Dłużnik pisemnie potwierdza, ile i z jakiego tytułu jest winien i jak spłaci dług.",
  "obsahPopis": "Oświadczenie z warunkami spłaty.",
  "obsah": [
    {
      "nazev": "Strony",
      "popis": "Dłużnik i wierzyciel."
    },
    {
      "nazev": "Dług",
      "popis": "Tytuł i kwota."
    },
    {
      "nazev": "Spłata",
      "popis": "Jednorazowo lub w ratach."
    }
  ],
  "kroky": [
    {
      "nazev": "Wypełnij",
      "popis": "Kwotę słownie dopiszemy sami."
    },
    {
      "nazev": "Podpisz",
      "popis": "Podpis dłużnika jest niezbędny."
    },
    {
      "nazev": "Zachowaj",
      "popis": "Oryginał zatrzymuje wierzyciel."
    }
  ],
  "online": [
    "Wypełnianie z objaśnieniem każdego pola",
    "Podpis na ekranie",
    "Pobranie w PDF i Word albo wysyłka na e-mail",
    "Harmonogram rat i przypomnienia w kalendarzu"
  ],
  "hodiSe": [
    "Niespłacona pożyczka między znajomymi",
    "Ugoda w sprawie raty za szkodę"
  ],
  "nehodiSe": [
    "Długi wobec banków i firm windykacyjnych"
  ],
  "po": [
    {
      "nazev": "Raty",
      "popis": "Wpłaty gotówkowe potwierdzaj pokwitowaniem."
    }
  ],
  "faq": [
    {
      "q": "Co daje uznanie długu?",
      "a": "Przerywa bieg przedawnienia – termin biegnie od nowa (art. 123 KC) – i jest mocnym dowodem."
    },
    {
      "q": "Czy przechowujecie moje dane?",
      "a": "Nie. Dokument powstaje wyłącznie w Twojej przeglądarce."
    }
  ],
  "zakony": "Wzór opiera się na art. 123 Kodeksu cywilnego.",
  "souvisejiciPopis": "Inne dokumenty, również za darmo."
},
  vytvorit: {
  "title": "Uznanie długu online – PDF za darmo",
  "description": "Uznanie długu z harmonogramem rat. PDF lub Word za darmo.",
  "podnadpis": "Za darmo · wynik w PDF i Word · zajmie ok. 2 minuty"
},
};

export default stranka;
