import type { StrankaDokumentu } from '../typy';
import { wezwanieDoZaplaty as sablona } from '../../sablony/pl/wezwanie-do-zaplaty';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Wezwanie do zapłaty",
  nazevA: "wezwanie do zapłaty",
  katalog: {"popis": "Przedsądowe wezwanie z terminem i odsetkami.", "kategorie": "pieniadze", "ilustrace": "dluh", "slova": ["wezwanie do zapłaty", "przedsądowe wezwanie", "monit", "dłużnik", "faktura", "odsetki za opóźnienie"]},
  souvisejici: "pieniadze",
  landing: {
  "title": "Wezwanie do zapłaty {rok} – wzór przedsądowy za darmo (PDF, Word)",
  "description": "Darmowy wzór przedsądowego wezwania do zapłaty: kwota, tytuł, termin i odsetki ustawowe za opóźnienie (art. 481 KC). Wypełnij online, pobierz PDF lub Word.",
  "perex": "Gdy dłużnik nie zapłacił faktury lub nie oddał pożyczki: wezwanie wyznacza ostatni termin przed sądem i jest dowodem, że próbowałeś załatwić sprawę polubownie.",
  "obsahPopis": "Krótkie pismo w dwóch częściach.",
  "obsah": [
    {
      "nazev": "Nadawca i adresat",
      "popis": "Wierzyciel i dłużnik."
    },
    {
      "nazev": "Wezwanie do zapłaty",
      "popis": "Tytuł i kwota, termin płatności, nowy termin, rachunek, odsetki, zapowiedź drogi sądowej."
    }
  ],
  "kroky": [
    {
      "nazev": "Wpisz należność",
      "popis": "Kto, ile, z jakiej faktury."
    },
    {
      "nazev": "Wyznacz termin",
      "popis": "Zwykle 7–14 dni."
    },
    {
      "nazev": "Wyślij poleconym",
      "popis": "Za potwierdzeniem odbioru."
    }
  ],
  "online": [
    "Kwota słownie automatycznie",
    "Przypomnienie o terminie w kalendarzu",
    "Objaśnienia do każdego pola",
    "Pobranie w PDF i Word"
  ],
  "hodiSe": [
    "klient nie zapłacił faktury",
    "pożyczka nie została zwrócona",
    "przygotowujesz pozew"
  ],
  "nehodiSe": [
    "dłużnik jest w upadłości – zgłoś wierzytelność",
    "sprawa jest sporna lub kwota wysoka – skonsultuj się z prawnikiem"
  ],
  "po": [
    {
      "nazev": "Poczekaj na termin",
      "popis": "Przypomnienie w kalendarzu."
    },
    {
      "nazev": "Pozew",
      "popis": "Dołącz kopię wezwania i dowód nadania."
    },
    {
      "nazev": "Raty?",
      "popis": "Gdy dłużnik chce spłacać – spisz uznanie długu."
    }
  ],
  "faq": [
    {
      "q": "Kiedy dłużnik musi zapłacić?",
      "a": "Jeśli termin nie był ustalony – niezwłocznie po wezwaniu (art. 455 KC)."
    },
    {
      "q": "Ile wynoszą odsetki za opóźnienie?",
      "a": "Jeśli strony nie ustaliły innych, odsetki ustawowe za opóźnienie to stopa referencyjna NBP plus 5,5 punktu procentowego (art. 481 § 2 KC). Należą się nawet bez wykazania szkody."
    },
    {
      "q": "Czy zapisujecie moje dane?",
      "a": "Nie. Dokument powstaje bezpośrednio w Twojej przeglądarce."
    }
  ],
  "zakony": "Wzór opiera się na art. 455, 476 i 481 Kodeksu cywilnego.",
  "souvisejiciPopis": "Inne dokumenty o pieniądzach i długach, także za darmo."
},
  vytvorit: {"title": "Wypełnij wezwanie do zapłaty online – PDF za darmo", "description": "Kreator wezwania do zapłaty. Pobierz PDF lub Word za darmo.", "podnadpis": "Za darmo · PDF i Word · zajmie około 2 minut"},
};

export default stranka;
