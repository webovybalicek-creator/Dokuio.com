import type { StrankaDokumentu } from '../typy';
import { pelnomocnictwo as sablona } from '../../sablony/pl/pelnomocnictwo';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Pełnomocnictwo",
  nazevA: "pełnomocnictwo",
  katalog: {
  "popis": "Upoważnienie do załatwienia sprawy.",
  "kategorie": "codzienne",
  "ilustrace": "plnamoc",
  "slova": [
    "pełnomocnictwo",
    "upoważnienie",
    "poczta",
    "urząd",
    "odbiór przesyłki"
  ]
},
  souvisejici: "codzienne",
  landing: {
  "title": "Pełnomocnictwo {rok} – wzór PDF za darmo",
  "description": "Darmowe pełnomocnictwo szczególne: odbiór przesyłki, sprawa w urzędzie, załatwienia. Wypełnij online, pobierz PDF lub Word.",
  "perex": "Proste pełnomocnictwo do konkretnej sprawy – np. odbioru przesyłki lub złożenia dokumentów w urzędzie.",
  "obsahPopis": "Pełnomocnictwo z zakresem i datą ważności.",
  "obsah": [
    {
      "nazev": "Osoby",
      "popis": "Kto kogo upoważnia."
    },
    {
      "nazev": "Zakres",
      "popis": "Co dokładnie może zrobić pełnomocnik."
    },
    {
      "nazev": "Ważność",
      "popis": "Do kiedy."
    }
  ],
  "kroky": [
    {
      "nazev": "Wypełnij",
      "popis": "Zakres opisz konkretnie."
    },
    {
      "nazev": "Podpisz",
      "popis": "Własnoręcznie."
    },
    {
      "nazev": "Przekaż",
      "popis": "Pełnomocnik okazuje je z dowodem."
    }
  ],
  "online": [
    "Wypełnianie z objaśnieniem każdego pola",
    "Podpis na ekranie",
    "Pobranie w PDF i Word albo wysyłka na e-mail"
  ],
  "hodiSe": [
    "Odbiór przesyłki na poczcie",
    "Złożenie dokumentów w urzędzie"
  ],
  "nehodiSe": [
    "Sprzedaż nieruchomości – potrzebny akt notarialny",
    "Sprawy bankowe z własnymi formularzami"
  ],
  "po": [
    {
      "nazev": "Odwołanie",
      "popis": "Pełnomocnictwo możesz odwołać w każdej chwili."
    }
  ],
  "faq": [
    {
      "q": "Czy pełnomocnictwo trzeba poświadczyć?",
      "a": "Do codziennych spraw zwykle nie. Do niektórych czynności wymagana jest forma notarialna."
    },
    {
      "q": "Czy przechowujecie moje dane?",
      "a": "Nie. Dokument powstaje wyłącznie w Twojej przeglądarce."
    }
  ],
  "zakony": "Wzór opiera się na art. 98 i nast. Kodeksu cywilnego.",
  "souvisejiciPopis": "Inne dokumenty, również za darmo."
},
  vytvorit: {
  "title": "Pełnomocnictwo online – PDF za darmo",
  "description": "Pełnomocnictwo do konkretnej sprawy. PDF lub Word za darmo.",
  "podnadpis": "Za darmo · wynik w PDF i Word · zajmie ok. 2 minuty"
},
};

export default stranka;
