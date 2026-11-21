import type { StrankaDokumentu } from '../typy';
import { denuntareInchiriere as sablona } from '../../sablony/ro/denuntare-contract-inchiriere';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Denunțarea contractului de închiriere",
  nazevA: "notificarea de denunțare a contractului de închiriere",
  katalog: {"popis": "Chiriașul încheie închirierea cu preaviz.", "kategorie": "locuinta", "ilustrace": "protokol", "slova": ["denuntare contract inchiriere", "reziliere contract inchiriere", "preaviz chirias", "notificare proprietar", "incetare chirie"]},
  souvisejici: "locuinta",
  landing: {
  "title": "Denunțare contract de închiriere {rok} – model gratuit PDF",
  "description": "Model gratuit de notificare de denunțare a contractului de închiriere de către chiriaș: preavizul din contract, data eliberării și restituirea garanției. PDF și Word.",
  "perex": "Pentru chiriașul care vrea să încheie închirierea. Cu preavizul din contract și cererea de restituire a garanției.",
  "obsahPopis": "O notificare scurtă.",
  "obsah": [
    {
      "nazev": "Notificarea",
      "popis": "Contractul, preavizul, eliberarea și garanția."
    }
  ],
  "kroky": [
    {
      "nazev": "Completați datele",
      "popis": "Ce nu știți, săriți – rămâne o linie pentru completare de mână."
    },
    {
      "nazev": "Verificați textul",
      "popis": "Fiecare paragraf îl puteți modifica."
    },
    {
      "nazev": "Descărcați și semnați",
      "popis": "PDF sau Word, gratuit."
    }
  ],
  "online": [
    "PDF și Word",
    "Semnătură pe ecran"
  ],
  "hodiSe": [
    "vreți să încheiați închirierea cu preaviz"
  ],
  "nehodiSe": [
    "vreți să plecați mai repede – folosiți acordul de încetare"
  ],
  "po": [
    {
      "nazev": "Predare",
      "popis": "Proces-verbal cu indexurile la eliberare."
    }
  ],
  "faq": [
    {
      "q": "De când curge preavizul?",
      "a": "De la data la care proprietarul primește notificarea – trimiteți-o recomandat sau cereți semnătură de primire."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil (Legea nr. 287/2009).",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online denunțarea contractului de închiriere – PDF gratuit", "description": "Notificare de denunțare a închirierii cu preaviz. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
