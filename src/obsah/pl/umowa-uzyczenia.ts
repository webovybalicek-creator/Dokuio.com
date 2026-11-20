import type { StrankaDokumentu } from '../typy';
import { umowaUzyczenia as sablona } from '../../sablony/pl/umowa-uzyczenia';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Umowa użyczenia",
  nazevA: "umowę użyczenia",
  katalog: {"popis": "Bezpłatne użyczenie rzeczy – przyczepka, narzędzia, auto.", "kategorie": "codzienne", "ilustrace": "protokol", "slova": ["umowa użyczenia", "użyczenie", "wzór umowy użyczenia", "użyczający", "biorący do używania"]},
  souvisejici: "codzienne",
  landing: {
  "title": "Umowa użyczenia {rok} – wzór za darmo (PDF, Word)",
  "description": "Darmowy wzór umowy użyczenia wg art. 710 KC: bezpłatne używanie rzeczy, stan przy wydaniu, czas, zwrot i koszty. Wypełnij online, pobierz PDF lub Word.",
  "perex": "Użyczasz przyczepkę, narzędzia albo auto za darmo? Umowa użyczenia zapisze, co oddajesz, w jakim stanie i kiedy ma wrócić.",
  "obsahPopis": "Pięć paragrafów wg art. 710 i nast. Kodeksu cywilnego.",
  "obsah": [
    {
      "nazev": "Strony umowy",
      "popis": "Użyczający i biorący."
    },
    {
      "nazev": "Przedmiot użyczenia",
      "popis": "Rzecz, stan, wartość, cel."
    },
    {
      "nazev": "Czas użyczenia i zwrot",
      "popis": "Do dnia lub do osiągnięcia celu, wcześniejszy zwrot."
    },
    {
      "nazev": "Używanie rzeczy",
      "popis": "Zgodnie z umową, bez oddawania osobom trzecim, koszty."
    },
    {
      "nazev": "Postanowienia końcowe",
      "popis": "Przedawnienie roku od zwrotu, dwa egzemplarze."
    }
  ],
  "kroky": [
    {
      "nazev": "Opisz rzecz",
      "popis": "Co użyczasz i w jakim stanie."
    },
    {
      "nazev": "Ustal czas",
      "popis": "Do kiedy lub w jakim celu."
    },
    {
      "nazev": "Podpiszcie",
      "popis": "Dwa egzemplarze."
    }
  ],
  "online": [
    "Przypomnienie o zwrocie w kalendarzu",
    "Objaśnienia do każdego pola",
    "Pobranie w PDF i Word",
    "Pusty wzór do wydruku"
  ],
  "hodiSe": [
    "użyczasz znajomemu przyczepkę, narzędzia lub auto",
    "chcesz mieć dowód stanu rzeczy przy wydaniu"
  ],
  "nehodiSe": [
    "pobierasz opłatę – to najem",
    "pożyczasz pieniądze – użyj umowy pożyczki"
  ],
  "po": [
    {
      "nazev": "Wydanie",
      "popis": "Obejrzyjcie rzecz i dopiszcie wady."
    },
    {
      "nazev": "Zwrot",
      "popis": "Przypomnienie w kalendarzu; roszczenia w ciągu roku."
    }
  ],
  "faq": [
    {
      "q": "Czym różni się użyczenie od pożyczki?",
      "a": "Przy użyczeniu oddajesz konkretną rzecz do bezpłatnego używania i dostajesz ją z powrotem (art. 710 KC). Przy pożyczce przenosisz własność pieniędzy lub rzeczy oznaczonych co do gatunku."
    },
    {
      "q": "Kto płaci koszty utrzymania?",
      "a": "Zwykłe koszty utrzymania rzeczy ponosi biorący (art. 713 KC)."
    },
    {
      "q": "Ile mam czasu na roszczenia o szkodę?",
      "a": "Rok od zwrotu rzeczy (art. 719 KC)."
    },
    {
      "q": "Czy zapisujecie moje dane?",
      "a": "Nie. Dokument powstaje bezpośrednio w Twojej przeglądarce."
    }
  ],
  "zakony": "Wzór opiera się na art. 710–719 Kodeksu cywilnego.",
  "souvisejiciPopis": "Inne dokumenty na co dzień."
},
  vytvorit: {"title": "Wypełnij umowę użyczenia online – PDF za darmo", "description": "Kreator umowy użyczenia. Pobierz PDF lub Word za darmo.", "podnadpis": "Za darmo · PDF i Word · zajmie około 2 minut"},
};

export default stranka;
