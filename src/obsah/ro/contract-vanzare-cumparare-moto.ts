import type { StrankaDokumentu } from '../typy';
import { contractVanzareMoto as sablona } from '../../sablony/ro/contract-vanzare-cumparare-moto';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contract de vânzare-cumpărare motocicletă",
  nazevA: "contractul de vânzare-cumpărare motocicletă",
  katalog: {"popis": "Motocicletă, scuter sau ATV.", "kategorie": "auto", "ilustrace": "motorka", "slova": ["contract vanzare cumparare moto", "contract motocicleta", "vanzare scuter", "vanzare atv", "motocicleta second hand"]},
  souvisejici: "auto",
  landing: {
  "title": "Contract vânzare-cumpărare moto {rok} – model gratuit PDF",
  "description": "Model gratuit de contract de vânzare-cumpărare pentru motocicletă sau scuter: CNP, VIN, kilometraj, defecte, plată și ora predării. Cu formularul ITL 054. PDF și Word.",
  "perex": "Pentru vânzarea unei motociclete, a unui scuter sau ATV între persoane fizice. Același text verificat ca la mașină, cu formularul oficial Model 2026 ITL 054.",
  "obsahPopis": "Șapte articole conform Codului civil.",
  "obsah": [
    {
      "nazev": "Părțile",
      "popis": "Vânzătorul și cumpărătorul, cu CNP."
    },
    {
      "nazev": "Obiectul",
      "popis": "Motocicleta, VIN, numărul de înmatriculare."
    },
    {
      "nazev": "Starea",
      "popis": "Kilometrajul și defectele cunoscute."
    },
    {
      "nazev": "Prețul și plata",
      "popis": "Suma în litere, numerar sau cont."
    },
    {
      "nazev": "Predarea",
      "popis": "Data, ora, cheile, documentele."
    },
    {
      "nazev": "Formularul ITL 054",
      "popis": "Viza fiscală și transcrierea în 90 de zile."
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
    "Verificarea VIN-ului",
    "Memento pentru termenul de 90 de zile"
  ],
  "hodiSe": [
    "vindeți sau cumpărați o motocicletă sau un scuter de la o persoană fizică"
  ],
  "nehodiSe": [
    "cumpărați de la un dealer"
  ],
  "po": [
    {
      "nazev": "Formularul ITL 054",
      "popis": "Completați formularul oficial și obțineți viza fiscală."
    },
    {
      "nazev": "Transcrierea",
      "popis": "Cumpărătorul cere transcrierea în 90 de zile."
    }
  ],
  "faq": [
    {
      "q": "Se aplică aceleași reguli ca la mașină?",
      "a": "Da. Și pentru motociclete se folosește formularul tipizat Model 2026 ITL 054, cu verificarea fiscală a ambelor părți, iar cumpărătorul cere transcrierea în 90 de zile."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil și pe formularul Model 2026 ITL 054.",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online contractul de vânzare-cumpărare moto – PDF gratuit", "description": "Contract pentru vânzarea unei motociclete sau a unui scuter. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
