import type { StrankaDokumentu } from '../typy';
import { oswiadczenie as sablona } from '../../sablony/pl/oswiadczenie';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Oświadczenie",
  nazevA: "oświadczenie",
  katalog: {"popis": "Pisemne oświadczenie dla szkoły, urzędu lub banku.", "kategorie": "codzienne", "ilustrace": "plnamoc", "slova": ["oświadczenie", "wzór oświadczenia", "oświadczenie o zamieszkaniu", "urząd", "szkoła"]},
  souvisejici: "codzienne",
  landing: {
  "title": "Oświadczenie {rok} – wzór do pobrania za darmo (PDF, Word)",
  "description": "Uniwersalny wzór oświadczenia za darmo: kto składa, dla kogo i co oświadcza. Wypełnij online i pobierz w PDF lub Word. Ze wskazówkami, kiedy poświadczyć podpis.",
  "perex": "Gdy szkoła, urząd, bank lub wynajmujący prosi o oświadczenie na piśmie. Wpisujesz, kim jesteś i co oświadczasz – gotowe.",
  "obsahPopis": "Jedna strona.",
  "obsah": [
    {
      "nazev": "Składający oświadczenie",
      "popis": "Imię i nazwisko, data urodzenia, adres."
    },
    {
      "nazev": "Oświadczenie",
      "popis": "Dla kogo, cel, treść i potwierdzenie prawdziwości."
    }
  ],
  "kroky": [
    {
      "nazev": "Dane",
      "popis": "Kto składa."
    },
    {
      "nazev": "Treść",
      "popis": "Konkretnie i zgodnie z prawdą."
    },
    {
      "nazev": "Podpis",
      "popis": "Własnoręcznie."
    }
  ],
  "online": [
    "Wstęp dodaje się sam",
    "Wskazówki do treści",
    "Pobranie w PDF i Word",
    "Pusty wzór do wydruku"
  ],
  "hodiSe": [
    "szkoła lub urząd prosi o oświadczenie",
    "potwierdzasz miejsce zamieszkania lub inny fakt"
  ],
  "nehodiSe": [
    "instytucja ma własny formularz – użyj go",
    "przepis wymaga oświadczenia pod rygorem odpowiedzialności karnej – użyj formularza z pouczeniem"
  ],
  "po": [
    {
      "nazev": "Podpis",
      "popis": "Własnoręcznie."
    },
    {
      "nazev": "Poświadczenie?",
      "popis": "Tylko gdy wymagane – u notariusza lub w urzędzie."
    }
  ],
  "faq": [
    {
      "q": "Czy podpis trzeba poświadczyć?",
      "a": "Tylko jeśli odbiorca wyraźnie tego wymaga."
    },
    {
      "q": "Co grozi za nieprawdziwe oświadczenie?",
      "a": "Może mieć skutki prawne; jeśli przepis wymaga oświadczenia pod rygorem odpowiedzialności karnej, także karne."
    },
    {
      "q": "Czy zapisujecie moje dane?",
      "a": "Nie. Dokument powstaje bezpośrednio w Twojej przeglądarce."
    }
  ],
  "zakony": "Przepisy nie przewidują ogólnego wzoru oświadczenia.",
  "souvisejiciPopis": "Inne dokumenty na co dzień."
},
  vytvorit: {"title": "Wypełnij oświadczenie online – PDF za darmo", "description": "Kreator oświadczenia. Pobierz PDF lub Word za darmo.", "podnadpis": "Za darmo · PDF i Word · zajmie około 1 minuty"},
};

export default stranka;
