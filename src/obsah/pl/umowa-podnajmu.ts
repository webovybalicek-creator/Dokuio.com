import type { StrankaDokumentu } from '../typy';
import { umowaPodnajmu as sablona } from '../../sablony/pl/umowa-podnajmu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Umowa podnajmu",
  nazevA: "umowę podnajmu",
  katalog: {"popis": "Pokój lub całe mieszkanie w podnajmie – za zgodą wynajmującego.", "kategorie": "mieszkanie", "ilustrace": "protokol", "slova": ["umowa podnajmu", "podnajem", "podnajem pokoju", "zgoda wynajmującego", "art. 688² KC"]},
  souvisejici: "mieszkanie",
  landing: {
  "title": "Umowa podnajmu pokoju lub mieszkania {rok} – wzór (PDF, Word)",
  "description": "Darmowy wzór umowy podnajmu lokalu lub pokoju wg art. 668 i 688² KC: zgoda wynajmującego, okres, opłaty, kaucja. Wypełnij online, pobierz PDF lub Word.",
  "perex": "Podnajmujesz pokój albo całe mieszkanie, które sam wynajmujesz? Potrzebujesz zgody wynajmującego i jasnej umowy z podnajemcą.",
  "obsahPopis": "Pięć części wg art. 668 i 688² Kodeksu cywilnego.",
  "obsah": [
    {
      "nazev": "Strony umowy",
      "popis": "Najemca i podnajemca."
    },
    {
      "nazev": "Przedmiot podnajmu",
      "popis": "Pokój lub cały lokal, zgoda wynajmującego."
    },
    {
      "nazev": "Okres i rozwiązanie",
      "popis": "Czas oznaczony lub nieoznaczony, wypowiedzenie."
    },
    {
      "nazev": "Płatności",
      "popis": "Opłata miesięczna, kaucja."
    },
    {
      "nazev": "Postanowienia końcowe",
      "popis": "Porządek domowy, forma pisemna."
    }
  ],
  "kroky": [
    {
      "nazev": "Wpisz strony",
      "popis": "Najemca i podnajemca."
    },
    {
      "nazev": "Zgoda",
      "popis": "Data zgody wynajmującego."
    },
    {
      "nazev": "Podpiszcie",
      "popis": "Dwa egzemplarze."
    }
  ],
  "online": [
    "Terminy w kalendarzu",
    "Kwota słownie automatycznie",
    "Pobranie w PDF i Word",
    "Pusty wzór do wydruku"
  ],
  "hodiSe": [
    "podnajmujesz pokój w wynajmowanym mieszkaniu",
    "wyjeżdżasz czasowo i oddajesz mieszkanie komuś innemu"
  ],
  "nehodiSe": [
    "jesteś właścicielem – użyj umowy najmu",
    "wynajmujący nie zgadza się na podnajem"
  ],
  "po": [
    {
      "nazev": "Dołącz zgodę",
      "popis": "Kopia zgody wynajmującego."
    },
    {
      "nazev": "Protokół",
      "popis": "Przy wydaniu pokoju lub mieszkania."
    }
  ],
  "faq": [
    {
      "q": "Czy potrzebuję zgody wynajmującego?",
      "a": "Tak. Bez zgody wynajmującego najemca nie może podnająć lokalu ani jego części (art. 688² KC)."
    },
    {
      "q": "Kto odpowiada za szkody podnajemcy?",
      "a": "Najemca i podnajemca odpowiadają solidarnie wobec wynajmującego (art. 668 KC)."
    },
    {
      "q": "Czy zapisujecie moje dane?",
      "a": "Nie. Dokument powstaje bezpośrednio w Twojej przeglądarce."
    }
  ],
  "zakony": "Wzór opiera się na art. 668 i 688² Kodeksu cywilnego.",
  "souvisejiciPopis": "Inne dokumenty o mieszkaniu."
},
  vytvorit: {"title": "Wypełnij umowę podnajmu online – PDF za darmo", "description": "Kreator umowy podnajmu. Pobierz PDF lub Word za darmo.", "podnadpis": "Za darmo · PDF i Word · zajmie około 3 minut"},
};

export default stranka;
