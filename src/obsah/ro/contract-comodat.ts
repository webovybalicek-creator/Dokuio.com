import type { StrankaDokumentu } from '../typy';
import { contractComodat as sablona } from '../../sablony/ro/contract-comodat';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contract de comodat",
  nazevA: "contractul de comodat",
  katalog: {"popis": "Împrumutul gratuit al unui bun.", "kategorie": "cumparaturi", "ilustrace": "pujcka", "slova": ["contract de comodat", "comodat", "imprumut de folosinta", "imprumut bun", "comodat masina"]},
  souvisejici: "cumparaturi",
  landing: {
  "title": "Contract de comodat {rok} – model gratuit PDF",
  "description": "Model gratuit de contract de comodat (împrumut de folosință): bunul, starea, valoarea, scopul și termenul de restituire. PDF și Word.",
  "perex": "Pentru împrumutul gratuit al unui bun unui prieten – remorcă, cort, unelte. Cu starea și termenul de restituire.",
  "obsahPopis": "Cinci articole conform Codului civil.",
  "obsah": [
    {
      "nazev": "Părțile",
      "popis": "Comodantul și comodatarul."
    },
    {
      "nazev": "Obiectul",
      "popis": "Bunul, starea și valoarea."
    },
    {
      "nazev": "Folosința",
      "popis": "Scopul și interdicția de a-l da altuia."
    },
    {
      "nazev": "Restituirea",
      "popis": "Termenul și despăgubirea."
    },
    {
      "nazev": "Dispoziții finale",
      "popis": "Exemplare."
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
    "împrumutați gratuit un bun"
  ],
  "nehodiSe": [
    "primiți bani pentru folosință – este închiriere"
  ],
  "po": [
    {
      "nazev": "Predarea",
      "popis": "Fotografiați bunul la predare."
    }
  ],
  "faq": [
    {
      "q": "Care e diferența față de închiriere?",
      "a": "Comodatul este gratuit; dacă se plătește pentru folosință, este închiriere."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil (Legea nr. 287/2009).",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online contractul de comodat – PDF gratuit", "description": "Împrumut gratuit al unui bun, cu termen de restituire. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
