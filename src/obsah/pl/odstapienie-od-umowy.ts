import type { StrankaDokumentu } from '../typy';
import { odstapienieOdUmowy as sablona } from '../../sablony/pl/odstapienie-od-umowy';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Odstąpienie od umowy",
  nazevA: "odstąpienie od umowy",
  katalog: {
  "popis": "Zwrot zakupu z internetu w 14 dni.",
  "kategorie": "codzienne",
  "ilustrace": "protokol",
  "slova": [
    "odstąpienie od umowy",
    "zwrot",
    "sklep internetowy",
    "14 dni",
    "formularz"
  ]
},
  souvisejici: "codzienne",
  landing: {
  "title": "Odstąpienie od umowy {rok} – formularz PDF za darmo",
  "description": "Darmowy formularz odstąpienia od umowy zawartej na odległość, według wzoru z ustawy o prawach konsumenta. 14 dni bez podania przyczyny.",
  "perex": "Kupione w internecie i nie pasuje? W ciągu 14 dni możesz odstąpić od umowy bez podawania przyczyny.",
  "obsahPopis": "Treść według ustawowego wzoru.",
  "obsah": [
    {
      "nazev": "Sprzedawca",
      "popis": "Do kogo wysyłasz."
    },
    {
      "nazev": "Zakup",
      "popis": "Towar, zamówienie, daty."
    },
    {
      "nazev": "Twoje dane",
      "popis": "Imię, adres, rachunek."
    }
  ],
  "kroky": [
    {
      "nazev": "Wypełnij",
      "popis": "Dane z potwierdzenia zamówienia."
    },
    {
      "nazev": "Wyślij",
      "popis": "E-mail, formularz sklepu lub poczta."
    },
    {
      "nazev": "Odeślij towar",
      "popis": "W 14 dni."
    }
  ],
  "online": [
    "Wypełnianie z objaśnieniem każdego pola",
    "Podpis na ekranie",
    "Pobranie w PDF i Word albo wysyłka na e-mail",
    "Przypomnienie o zwrocie pieniędzy"
  ],
  "hodiSe": [
    "Zakupy w sklepie internetowym lub przez telefon",
    "Umowa zawarta poza lokalem"
  ],
  "nehodiSe": [
    "Zakup w sklepie stacjonarnym",
    "Zakup od osoby prywatnej"
  ],
  "po": [
    {
      "nazev": "Zwrot pieniędzy",
      "popis": "Sprzedawca oddaje płatności w 14 dni."
    }
  ],
  "faq": [
    {
      "q": "Czy muszę podać przyczynę?",
      "a": "Nie."
    },
    {
      "q": "Do kiedy mogę odstąpić?",
      "a": "14 dni od otrzymania towaru; wystarczy wysłać oświadczenie w terminie."
    },
    {
      "q": "Czy przechowujecie moje dane?",
      "a": "Nie. Dokument powstaje wyłącznie w Twojej przeglądarce."
    }
  ],
  "zakony": "Wzór opiera się na art. 27–32 ustawy o prawach konsumenta i wzorze z załącznika nr 2.",
  "souvisejiciPopis": "Inne dokumenty, również za darmo."
},
  vytvorit: {
  "title": "Odstąpienie od umowy online – PDF za darmo",
  "description": "Formularz odstąpienia od umowy. PDF lub Word za darmo.",
  "podnadpis": "Za darmo · wynik w PDF i Word · zajmie ok. 1 minuty"
},
};

export default stranka;
