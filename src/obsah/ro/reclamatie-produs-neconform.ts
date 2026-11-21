import type { StrankaDokumentu } from '../typy';
import { reclamatie as sablona } from '../../sablony/ro/reclamatie-produs-neconform';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Reclamație pentru produs neconform",
  nazevA: "reclamația pentru produs neconform",
  katalog: {"popis": "Sesizarea unui produs cu defect, garanția de 2 ani.", "kategorie": "cumparaturi", "ilustrace": "protokol", "slova": ["reclamatie produs", "garantie 2 ani", "produs defect", "neconformitate", "oug 140/2021"]},
  souvisejici: "cumparaturi",
  landing: {
  "title": "Reclamație produs neconform {rok} – model gratuit PDF",
  "description": "Model gratuit de reclamație pentru produs neconform: descrierea defectului, cerere de reparare, înlocuire, reducere sau restituire, garanția legală de 2 ani. PDF și Word.",
  "perex": "Pentru un produs care s-a stricat sau nu corespunde. Vânzătorul răspunde 2 ani de la livrare.",
  "obsahPopis": "Două articole conform OUG nr. 140/2021.",
  "obsah": [
    {
      "nazev": "Părțile",
      "popis": "Consumatorul și vânzătorul."
    },
    {
      "nazev": "Sesizarea",
      "popis": "Produsul, defectul și solicitarea."
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
    "produsul cumpărat are un defect",
    "vânzătorul nu vrea să rezolve problema"
  ],
  "nehodiSe": [
    "vreți să returnați fără motiv – folosiți formularul de retragere"
  ],
  "po": [
    {
      "nazev": "Confirmare",
      "popis": "Cereți confirmarea primirii."
    },
    {
      "nazev": "ANPC",
      "popis": "Dacă vânzătorul nu răspunde, sesizați ANPC."
    }
  ],
  "faq": [
    {
      "q": "Cât durează garanția legală?",
      "a": "Vânzătorul răspunde pentru neconformitatea existentă la livrare care se manifestă în 2 ani de la livrare (OUG nr. 140/2021)."
    },
    {
      "q": "Ce pot cere?",
      "a": "Mai întâi repararea sau înlocuirea gratuită; dacă nu reușește, reducerea prețului sau rezoluțiunea contractului."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe OUG nr. 140/2021 privind contractele de vânzare de bunuri.",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online reclamația – PDF gratuit", "description": "Reclamație pentru produs cu defect, garanția de 2 ani. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
