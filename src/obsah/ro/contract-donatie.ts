import type { StrankaDokumentu } from '../typy';
import { contractDonatie as sablona } from '../../sablony/ro/contract-donatie';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contract de donație",
  nazevA: "contractul de donație",
  katalog: {"popis": "Dar manual de bani sau bunuri până la 25.000 lei.", "kategorie": "bani", "ilustrace": "dar", "slova": ["contract de donatie", "dar manual", "donatie bani", "donatie intre rude", "donatie fara notar"]},
  souvisejici: "bani",
  landing: {
  "title": "Contract de donație – dar manual {rok}, model gratuit PDF",
  "description": "Model gratuit de contract de donație ca dar manual: bani sau bunuri mobile de până la 25.000 lei, cu predarea bunului. Când e nevoie de notar. PDF și Word.",
  "perex": "Pentru donația unei sume de bani sau a unui bun mobil de până la 25.000 lei, predat imediat. Peste această sumă și pentru imobile donația se face la notar.",
  "obsahPopis": "Patru articole conform Codului civil.",
  "obsah": [
    {
      "nazev": "Părțile",
      "popis": "Donatorul și donatarul."
    },
    {
      "nazev": "Obiectul",
      "popis": "Suma sau bunul și valoarea lui."
    },
    {
      "nazev": "Forma donației",
      "popis": "Darul manual după art. 1011 Cod civil."
    },
    {
      "nazev": "Dispoziții finale",
      "popis": "Cheltuieli și exemplare."
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
    "PDF și Word"
  ],
  "hodiSe": [
    "donați bani sau un bun mobil de până la 25.000 lei",
    "predați darul imediat"
  ],
  "nehodiSe": [
    "donați un imobil sau peste 25.000 lei – mergeți la notar"
  ],
  "po": [
    {
      "nazev": "Predarea",
      "popis": "Predați bunul sau transferați banii cu mențiunea „donație”."
    }
  ],
  "faq": [
    {
      "q": "Când e nevoie de notar?",
      "a": "Donația se încheie, ca regulă, prin înscris autentic la notar. Excepție face darul manual – bunuri mobile corporale, inclusiv bani, de până la 25.000 lei, predate efectiv (art. 1011 Cod civil)."
    },
    {
      "q": "Se plătește impozit?",
      "a": "Potrivit ANAF, sumele primite de la rude sunt donații sau daruri manuale și se încadrează la venituri neimpozabile."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil (art. 1011) și pe precizările ANAF privind donațiile.",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online contractul de donație – PDF gratuit", "description": "Contract de donație ca dar manual, până la 25.000 lei. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
