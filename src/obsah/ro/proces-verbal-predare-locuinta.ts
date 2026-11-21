import type { StrankaDokumentu } from '../typy';
import { procesVerbalLocuinta as sablona } from '../../sablony/ro/proces-verbal-predare-locuinta';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Proces-verbal de predare a locuinței",
  nazevA: "procesul-verbal de predare a locuinței",
  katalog: {"popis": "Contoare, chei și starea locuinței.", "kategorie": "locuinta", "ilustrace": "protokol", "slova": ["proces verbal predare primire apartament", "proces verbal locuinta", "indexuri contoare", "predare chei", "starea apartamentului"]},
  souvisejici: "locuinta",
  landing: {
  "title": "Proces-verbal predare-primire apartament {rok} – model gratuit PDF",
  "description": "Model gratuit de proces-verbal de predare-primire a locuinței: indexuri contoare, chei, dotări și deteriorări la mutare sau la eliberare. PDF și Word.",
  "perex": "Consemnează starea locuinței și indexurile la mutare și la eliberare – baza pentru restituirea garanției.",
  "obsahPopis": "Un proces-verbal scurt.",
  "obsah": [
    {
      "nazev": "Procesul-verbal",
      "popis": "Contoare, chei, dotări și deteriorări."
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
    "Preia datele din contract",
    "PDF și Word"
  ],
  "hodiSe": [
    "vă mutați sau eliberați o locuință închiriată"
  ],
  "nehodiSe": [
    "aveți nevoie și de contract – folosiți contractul de închiriere"
  ],
  "po": [
    {
      "nazev": "Fotografii",
      "popis": "Fotografiați locuința și contoarele."
    }
  ],
  "faq": [
    {
      "q": "De ce este important?",
      "a": "La eliberare starea se compară cu procesul-verbal de la mutare – ce nu e scris e greu de dovedit. Uzura normală nu este pagubă."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil (Legea nr. 287/2009).",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online procesul-verbal de predare a locuinței – PDF gratuit", "description": "Proces-verbal cu indexuri și starea locuinței. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
