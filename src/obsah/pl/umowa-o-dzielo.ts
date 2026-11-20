import type { StrankaDokumentu } from '../typy';
import { umowaODzielo as sablona } from '../../sablony/pl/umowa-o-dzielo';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Umowa o dzieło",
  nazevA: "umowę o dzieło",
  katalog: {"popis": "Remont, naprawa, wykonanie na zamówienie – cena, termin, odbiór.", "kategorie": "uslugi", "ilustrace": "protokol", "slova": ["umowa o dzieło", "wykonawca", "remont", "naprawa", "ryczałt", "kosztorys"]},
  souvisejici: "uslugi",
  landing: {
  "title": "Umowa o dzieło {rok} – wzór za darmo (PDF, Word)",
  "description": "Darmowy wzór umowy o dzieło wg art. 627 KC: opis dzieła, termin, wynagrodzenie ryczałtowe lub kosztorysowe, zaliczka, odbiór i wady. PDF i Word.",
  "perex": "Na remont, naprawę lub wykonanie rzeczy na zamówienie. Jasno określa, co ma powstać, do kiedy, za ile i jak nastąpi odbiór.",
  "obsahPopis": "Sześć paragrafów wg art. 627 i nast. Kodeksu cywilnego.",
  "obsah": [
    {
      "nazev": "Strony umowy",
      "popis": "Zamawiający i wykonawca."
    },
    {
      "nazev": "Przedmiot umowy",
      "popis": "Dzieło, miejsce, materiały."
    },
    {
      "nazev": "Termin wykonania",
      "popis": "Rozpoczęcie i oddanie."
    },
    {
      "nazev": "Wynagrodzenie",
      "popis": "Ryczałt lub kosztorys, zaliczka, termin płatności."
    },
    {
      "nazev": "Odbiór i wady",
      "popis": "Protokół odbioru, rękojmia."
    },
    {
      "nazev": "Postanowienia końcowe",
      "popis": "Forma pisemna zmian, dwa egzemplarze."
    }
  ],
  "kroky": [
    {
      "nazev": "Opisz dzieło",
      "popis": "Zakres, miejsce, terminy."
    },
    {
      "nazev": "Ustal wynagrodzenie",
      "popis": "Ryczałt lub kosztorys."
    },
    {
      "nazev": "Podpiszcie",
      "popis": "Dwa egzemplarze."
    }
  ],
  "online": [
    "Kwota słownie automatycznie",
    "Terminy w kalendarzu",
    "Objaśnienia do każdego pola",
    "Pobranie w PDF i Word"
  ],
  "hodiSe": [
    "zlecasz remont łazienki, malowanie, podłogi",
    "zamawiasz naprawę lub wykonanie mebli na wymiar",
    "jako fachowiec chcesz jasnych warunków"
  ],
  "nehodiSe": [
    "budowa domu – umowę o roboty budowlane przygotuj z prawnikiem",
    "stała praca pod kierownictwem – to umowa o pracę lub zlecenie",
    "zakup gotowej rzeczy – umowa sprzedaży"
  ],
  "po": [
    {
      "nazev": "Zaliczka",
      "popis": "Przelewem lub za pokwitowaniem."
    },
    {
      "nazev": "Zmiany na piśmie",
      "popis": "Prace dodatkowe tylko po uzgodnieniu."
    },
    {
      "nazev": "Odbiór",
      "popis": "Protokół z wadami."
    }
  ],
  "faq": [
    {
      "q": "Kiedy płaci się wynagrodzenie?",
      "a": "Przy oddaniu dzieła (art. 642 KC), chyba że strony umówiły się inaczej, np. na zaliczkę."
    },
    {
      "q": "Ryczałt czy kosztorys?",
      "a": "Ryczałtu nie można podwyższyć, nawet gdy prace okażą się większe (art. 632 KC). Kosztorys może wzrosnąć tylko na zasadach art. 629–630 KC, a przy znacznym podwyższeniu zamawiający może odstąpić od umowy (art. 631 KC)."
    },
    {
      "q": "Jak długo można dochodzić roszczeń?",
      "a": "Roszczenia z umowy o dzieło przedawniają się z upływem dwóch lat od oddania dzieła (art. 646 KC)."
    },
    {
      "q": "Czy zapisujecie moje dane?",
      "a": "Nie. Dokument powstaje bezpośrednio w Twojej przeglądarce."
    }
  ],
  "zakony": "Wzór opiera się na art. 627–646 Kodeksu cywilnego.",
  "souvisejiciPopis": "Inne dokumenty o zleceniach i płatnościach."
},
  vytvorit: {"title": "Wypełnij umowę o dzieło online – PDF za darmo", "description": "Kreator umowy o dzieło z wynagrodzeniem i odbiorem. Pobierz PDF lub Word za darmo.", "podnadpis": "Za darmo · PDF i Word · zajmie około 4 minut"},
};

export default stranka;
