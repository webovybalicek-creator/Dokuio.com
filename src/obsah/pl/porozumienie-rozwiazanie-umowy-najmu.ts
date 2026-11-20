import type { StrankaDokumentu } from '../typy';
import { porozumienieRozwiazanieNajmu as sablona } from '../../sablony/pl/porozumienie-rozwiazanie-umowy-najmu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Porozumienie o rozwiązaniu umowy najmu",
  nazevA: "porozumienie o rozwiązaniu umowy najmu",
  katalog: {"popis": "Koniec najmu za porozumieniem stron – termin, wydanie lokalu, kaucja.", "kategorie": "mieszkanie", "ilustrace": "protokol", "slova": ["rozwiązanie umowy najmu za porozumieniem stron", "porozumienie najem", "koniec najmu", "kaucja", "wydanie lokalu"]},
  souvisejici: "mieszkanie",
  landing: {
  "title": "Rozwiązanie umowy najmu za porozumieniem stron {rok} – wzór (PDF)",
  "description": "Darmowy wzór porozumienia o rozwiązaniu umowy najmu mieszkania: termin, wydanie lokalu, zwrot kaucji i rozliczenie mediów. Wypełnij online, pobierz PDF lub Word.",
  "perex": "Chcesz zakończyć najem wcześniej, bez okresu wypowiedzenia? Wystarczy porozumienie stron z datą końca najmu i zasadami zwrotu kaucji.",
  "obsahPopis": "Trzy części.",
  "obsah": [
    {
      "nazev": "Strony",
      "popis": "Wynajmujący i najemca."
    },
    {
      "nazev": "Rozwiązanie umowy najmu",
      "popis": "Data, wydanie lokalu, czynsz do końca."
    },
    {
      "nazev": "Kaucja i dodatkowe ustalenia",
      "popis": "Kiedy i gdzie wróci kaucja."
    }
  ],
  "kroky": [
    {
      "nazev": "Wpisz strony",
      "popis": "Zgodnie z umową najmu."
    },
    {
      "nazev": "Ustal termin",
      "popis": "Koniec najmu i wydanie lokalu."
    },
    {
      "nazev": "Podpiszcie",
      "popis": "Obie strony, dwa egzemplarze."
    }
  ],
  "online": [
    "Terminy w kalendarzu",
    "Objaśnienia do każdego pola",
    "Pobranie w PDF i Word",
    "Pusty wzór do wydruku"
  ],
  "hodiSe": [
    "najemca chce wyprowadzić się wcześniej",
    "obie strony chcą zakończyć najem bez wypowiedzenia"
  ],
  "nehodiSe": [
    "druga strona się nie zgadza – użyj wypowiedzenia"
  ],
  "po": [
    {
      "nazev": "Wydanie lokalu",
      "popis": "Protokół zdawczo-odbiorczy ze stanami liczników."
    },
    {
      "nazev": "Kaucja",
      "popis": "Przypomnienie zwrotu w kalendarzu."
    }
  ],
  "faq": [
    {
      "q": "Czy można rozwiązać najem z dnia na dzień?",
      "a": "Tak, jeśli obie strony się zgodzą. Porozumienie zastępuje wypowiedzenie i jego terminy."
    },
    {
      "q": "Czy zapisujecie moje dane?",
      "a": "Nie. Dokument powstaje bezpośrednio w Twojej przeglądarce."
    }
  ],
  "zakony": "Wzór opiera się na przepisach Kodeksu cywilnego o najmie i zasadzie swobody umów.",
  "souvisejiciPopis": "Inne dokumenty o mieszkaniu i najmie."
},
  vytvorit: {"title": "Wypełnij porozumienie o rozwiązaniu najmu online – PDF za darmo", "description": "Kreator porozumienia o rozwiązaniu umowy najmu. Pobierz PDF lub Word za darmo.", "podnadpis": "Za darmo · PDF i Word · zajmie około 2 minut"},
};

export default stranka;
