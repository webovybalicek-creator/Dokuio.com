import type { StrankaDokumentu } from '../typy';
import { reklamacja as sablona } from '../../sablony/pl/reklamacja';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Reklamacja",
  nazevA: "reklamację",
  katalog: {
  "popis": "Reklamacja wadliwego towaru u sprzedawcy.",
  "kategorie": "codzienne",
  "ilustrace": "protokol",
  "slova": [
    "reklamacja",
    "niezgodność z umową",
    "rękojmia",
    "naprawa",
    "wymiana",
    "wada"
  ]
},
  souvisejici: "codzienne",
  landing: {
  "title": "Reklamacja {rok} – wzór pisma PDF za darmo",
  "description": "Darmowe pismo reklamacyjne: niezgodność towaru z umową, żądanie naprawy, wymiany, obniżenia ceny lub zwrotu. Sprzedawca ma 14 dni na odpowiedź.",
  "perex": "Towar jest wadliwy? Złóż reklamację na piśmie – z opisem wady i żądaniem.",
  "obsahPopis": "Reklamacja z żądaniem.",
  "obsah": [
    {
      "nazev": "Sprzedawca",
      "popis": "Gdzie reklamujesz."
    },
    {
      "nazev": "Wada",
      "popis": "Co nie działa."
    },
    {
      "nazev": "Żądanie",
      "popis": "Naprawa, wymiana, obniżenie ceny lub zwrot."
    }
  ],
  "kroky": [
    {
      "nazev": "Wypełnij",
      "popis": "Opisz wadę konkretnie."
    },
    {
      "nazev": "Złóż",
      "popis": "W sklepie lub e-mailem."
    },
    {
      "nazev": "Czekaj",
      "popis": "Odpowiedź w 14 dni."
    }
  ],
  "online": [
    "Wypełnianie z objaśnieniem każdego pola",
    "Podpis na ekranie",
    "Pobranie w PDF i Word albo wysyłka na e-mail",
    "Termin odpowiedzi w kalendarzu"
  ],
  "hodiSe": [
    "Wadliwy towar ze sklepu lub internetu"
  ],
  "nehodiSe": [
    "Zakup od osoby prywatnej",
    "Gwarancja producenta – według jej warunków"
  ],
  "po": [
    {
      "nazev": "Brak odpowiedzi",
      "popis": "Po 14 dniach reklamację uznaje się za uzasadnioną."
    }
  ],
  "faq": [
    {
      "q": "Jak długo mogę reklamować?",
      "a": "Sprzedawca odpowiada za niezgodność ujawnioną w ciągu 2 lat od wydania towaru."
    },
    {
      "q": "Ile sprzedawca ma czasu?",
      "a": "14 dni na odpowiedź; brak odpowiedzi oznacza uznanie reklamacji."
    },
    {
      "q": "Czy przechowujecie moje dane?",
      "a": "Nie. Dokument powstaje wyłącznie w Twojej przeglądarce."
    }
  ],
  "zakony": "Wzór opiera się na art. 7a i 43a–43g ustawy o prawach konsumenta.",
  "souvisejiciPopis": "Inne dokumenty, również za darmo."
},
  vytvorit: {
  "title": "Reklamacja online – PDF za darmo",
  "description": "Pismo reklamacyjne z żądaniem. PDF lub Word za darmo.",
  "podnadpis": "Za darmo · wynik w PDF i Word · zajmie ok. 2 minuty"
},
};

export default stranka;
