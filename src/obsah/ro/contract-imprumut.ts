import type { StrankaDokumentu } from '../typy';
import { contractImprumut as sablona } from '../../sablony/ro/contract-imprumut';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contract de împrumut",
  nazevA: "contractul de împrumut",
  katalog: {"popis": "Împrumut de bani unui prieten sau rude, și în rate.", "kategorie": "bani", "ilustrace": "pujcka", "slova": ["contract de imprumut", "imprumut intre persoane fizice", "imprumut bani", "rate", "contract imprumut bani"]},
  souvisejici: "bani",
  landing: {
  "title": "Contract de împrumut între persoane fizice {rok} – model gratuit PDF",
  "description": "Model gratuit de contract de împrumut între persoane fizice: suma în litere, restituire integrală sau în rate, dobândă în limitele legii. PDF și Word.",
  "perex": "Pentru un împrumut dat unui prieten sau unei rude. Integral sau în rate lunare, cu dobândă sau fără.",
  "obsahPopis": "Cinci articole conform Codului civil.",
  "obsah": [
    {
      "nazev": "Părțile",
      "popis": "Împrumutătorul și împrumutatul."
    },
    {
      "nazev": "Obiectul",
      "popis": "Suma și modul de predare."
    },
    {
      "nazev": "Restituirea",
      "popis": "Integral sau în rate, restituire anticipată."
    },
    {
      "nazev": "Dobânda",
      "popis": "Fără dobândă sau dobândă convențională."
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
    "Suma în litere automat",
    "Memento pentru rate",
    "PDF și Word"
  ],
  "hodiSe": [
    "împrumutați bani unui prieten sau unei rude",
    "vreți în scris termenul de restituire"
  ],
  "nehodiSe": [
    "împrumutați ca firmă – se aplică reguli speciale"
  ],
  "po": [
    {
      "nazev": "Transfer",
      "popis": "Transferați banii în cont cu mențiunea „împrumut conform contractului”."
    },
    {
      "nazev": "Rate",
      "popis": "Salvați datele în calendar."
    }
  ],
  "faq": [
    {
      "q": "Ce dobândă pot cere?",
      "a": "Dobânda se stabilește în scris. Între persoane fizice care nu sunt profesioniști, dobânda convențională nu poate depăși dobânda legală cu mai mult de 50 % pe an (OG nr. 13/2011)."
    },
    {
      "q": "Trebuie mers la notar?",
      "a": "Nu este obligatoriu. Un contract autentificat la notar este însă titlu executoriu – la neplată nu mai e nevoie de proces."
    },
    {
      "q": "În cât timp se prescrie datoria?",
      "a": "Termenul general de prescripție este de 3 ani (art. 2517 Cod civil)."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil și pe OG nr. 13/2011 privind dobânda legală.",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online contractul de împrumut – PDF gratuit", "description": "Contract de împrumut între persoane fizice, integral sau în rate. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
