import type { StrankaDokumentu } from '../typy';
import { contractAntrepriza as sablona } from '../../sablony/ro/contract-prestari-servicii';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contract de antrepriză",
  nazevA: "contractul de antrepriză",
  katalog: {"popis": "Meseriaș, reparație, renovare.", "kategorie": "servicii", "ilustrace": "protokol", "slova": ["contract de antrepriza", "contract prestari servicii", "contract meserias", "renovare", "contract lucrari"]},
  souvisejici: "servicii",
  landing: {
  "title": "Contract de antrepriză / prestări servicii {rok} – model gratuit PDF",
  "description": "Model gratuit de contract de antrepriză cu un meseriaș: descrierea lucrării, materiale, preț în litere, avans, termen, recepție și vicii. PDF și Word.",
  "perex": "Pentru zugrăveli, reparații sau renovări cu un meseriaș sau o firmă. Cu prețul, termenul și recepția lucrării.",
  "obsahPopis": "Șase articole conform Codului civil.",
  "obsah": [
    {
      "nazev": "Părțile",
      "popis": "Beneficiarul și antreprenorul."
    },
    {
      "nazev": "Obiectul",
      "popis": "Lucrarea, locul, materialele."
    },
    {
      "nazev": "Termenul",
      "popis": "Început și finalizare."
    },
    {
      "nazev": "Prețul și plata",
      "popis": "Avans, rest, lucrări suplimentare."
    },
    {
      "nazev": "Recepția și viciile",
      "popis": "Verificare și remediere."
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
    "PDF și Word"
  ],
  "hodiSe": [
    "angajați un meseriaș pentru o lucrare",
    "vreți prețul și termenul în scris"
  ],
  "nehodiSe": [
    "construiți o casă – sunt necesare autorizații și reguli speciale"
  ],
  "po": [
    {
      "nazev": "Recepția",
      "popis": "Verificați lucrarea și comunicați viciile în scris."
    }
  ],
  "faq": [
    {
      "q": "Ce fac dacă lucrarea are vicii?",
      "a": "La recepție verificați lucrarea și comunicați de îndată, în scris, viciile constatate; antreprenorul le remediază pe cheltuiala sa."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil (Legea nr. 287/2009).",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online contractul de antrepriză – PDF gratuit", "description": "Contract cu un meseriaș pentru o lucrare. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
