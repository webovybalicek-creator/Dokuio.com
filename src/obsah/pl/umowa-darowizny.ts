import type { StrankaDokumentu } from '../typy';
import { umowaDarowizny as sablona } from '../../sablony/pl/umowa-darowizny';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Umowa darowizny",
  nazevA: "umowę darowizny",
  katalog: {
  "popis": "Darowizna pieniędzy lub rzeczy przekazana od razu.",
  "kategorie": "pieniadze",
  "ilustrace": "dar",
  "slova": [
    "darowizna",
    "umowa darowizny",
    "SD-Z2",
    "prezent",
    "grupa zerowa"
  ]
},
  souvisejici: "pieniadze",
  landing: {
  "title": "Umowa darowizny {rok} – wzór PDF za darmo",
  "description": "Darmowa umowa darowizny pieniędzy lub rzeczy ruchomej wykonanej od razu – bez notariusza. Z przypomnieniem o SD-Z2 w 6 miesięcy.",
  "perex": "Dla darowizny przekazanej od razu – przelewem lub z rąk do rąk. Z informacją o podatku i zgłoszeniu SD-Z2.",
  "obsahPopis": "Umowa darowizny wykonanej przy zawarciu.",
  "obsah": [
    {
      "nazev": "Strony",
      "popis": "Darczyńca i obdarowany."
    },
    {
      "nazev": "Przedmiot",
      "popis": "Pieniądze lub rzecz."
    },
    {
      "nazev": "Wykonanie",
      "popis": "Przelew lub wydanie przy podpisaniu."
    }
  ],
  "kroky": [
    {
      "nazev": "Wypełnij",
      "popis": "Kwotę słownie dopiszemy sami."
    },
    {
      "nazev": "Przelej",
      "popis": "W rodzinie – koniecznie na konto."
    },
    {
      "nazev": "Zgłoś",
      "popis": "SD-Z2 w 6 miesięcy."
    }
  ],
  "online": [
    "Wypełnianie z objaśnieniem każdego pola",
    "Podpis na ekranie",
    "Pobranie w PDF i Word albo wysyłka na e-mail",
    "Termin SD-Z2 w kalendarzu"
  ],
  "hodiSe": [
    "Darowizna pieniędzy w rodzinie",
    "Darowizna samochodu lub biżuterii"
  ],
  "nehodiSe": [
    "Obietnica darowizny na później – wymaga notariusza",
    "Nieruchomości"
  ],
  "po": [
    {
      "nazev": "Urząd skarbowy",
      "popis": "Najbliższa rodzina: SD-Z2 w 6 miesięcy."
    }
  ],
  "faq": [
    {
      "q": "Czy potrzebny jest notariusz?",
      "a": "Nie, jeśli darowizna jest wykonana od razu (art. 890 § 1 KC). Obietnica na później wymaga aktu notarialnego."
    },
    {
      "q": "Kiedy darowizna jest zwolniona z podatku?",
      "a": "W najbliższej rodzinie po zgłoszeniu SD-Z2 w 6 miesięcy, a pieniądze muszą trafić na konto obdarowanego."
    },
    {
      "q": "Czy przechowujecie moje dane?",
      "a": "Nie. Dokument powstaje wyłącznie w Twojej przeglądarce."
    }
  ],
  "zakony": "Wzór opiera się na art. 888–890 Kodeksu cywilnego i art. 4a ustawy o podatku od spadków i darowizn.",
  "souvisejiciPopis": "Inne dokumenty, również za darmo."
},
  vytvorit: {
  "title": "Umowa darowizny online – PDF za darmo",
  "description": "Umowa darowizny pieniędzy lub rzeczy. PDF lub Word za darmo.",
  "podnadpis": "Za darmo · wynik w PDF i Word · zajmie ok. 2 minuty"
},
};

export default stranka;
