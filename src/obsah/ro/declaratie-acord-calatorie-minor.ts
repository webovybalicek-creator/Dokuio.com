import type { StrankaDokumentu } from '../typy';
import { declaratieCalatorieMinor as sablona } from '../../sablony/ro/declaratie-acord-calatorie-minor';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Declarație acord călătorie minor",
  nazevA: "declarația de acord pentru călătoria minorului",
  katalog: {"popis": "Copilul călătorește fără unul sau ambii părinți.", "kategorie": "familie", "ilustrace": "plnamoc", "slova": ["declaratie acord calatorie minor", "procura minor", "iesire din tara minor", "acord parinte", "declaratie notariala minor"]},
  souvisejici: "familie",
  landing: {
  "title": "Declarație acord călătorie minor {rok} – model gratuit PDF",
  "description": "Model gratuit de declarație de acord pentru ieșirea din țară a minorului, pentru notar: însoțitorul, destinația și perioada, conform Legii 248/2005. PDF și Word.",
  "perex": "Pentru un copil care iese din România cu un singur părinte sau cu altă persoană. Textul îl duceți la notar, unde se semnează și se autentifică.",
  "obsahPopis": "O declarație pregătită pentru autentificare notarială.",
  "obsah": [
    {
      "nazev": "Declarația",
      "popis": "Părintele, minorul, însoțitorul, destinația și perioada."
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
    "Datele însoțitorului și ale călătoriei"
  ],
  "hodiSe": [
    "copilul călătorește cu un singur părinte sau cu bunicii",
    "vreți textul pregătit înainte de notar"
  ],
  "nehodiSe": [
    "copilul se mută definitiv în străinătate"
  ],
  "po": [
    {
      "nazev": "Notar",
      "popis": "Semnați și autentificați declarația la notar sau la consulat."
    },
    {
      "nazev": "Frontieră",
      "popis": "Însoțitorul are la el declarația și actele copilului."
    }
  ],
  "faq": [
    {
      "q": "Este nevoie de notar?",
      "a": "Da. La frontieră se prezintă declarația notarială a celuilalt părinte (sau a ambilor părinți, dacă îl însoțește altă persoană), conform Legii nr. 248/2005."
    },
    {
      "q": "Când nu este necesară declarația?",
      "a": "Când celălalt părinte a decedat, este decăzut din drepturi, părintele însoțitor exercită singur autoritatea părintească sau minorul are domiciliul ori reședința în țara de destinație – situații care se dovedesc cu acte."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Legea nr. 248/2005 și pe modelul de declarație al Poliției de Frontieră Române.",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online declarația de acord pentru minor – PDF gratuit", "description": "Text pentru declarația notarială de călătorie a minorului. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
