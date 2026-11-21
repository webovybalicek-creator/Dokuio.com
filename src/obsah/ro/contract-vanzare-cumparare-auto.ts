import type { StrankaDokumentu } from '../typy';
import { contractVanzareAuto as sablona } from '../../sablony/ro/contract-vanzare-cumparare-auto';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contract de vânzare-cumpărare auto",
  nazevA: "contractul de vânzare-cumpărare auto",
  katalog: {"popis": "Vânzarea unei mașini rulate între persoane fizice.", "kategorie": "auto", "ilustrace": "auto", "slova": ["contract vanzare cumparare auto", "contract masina", "vanzare masina", "masina second hand", "transcriere auto", "ITL 054"]},
  souvisejici: "auto",
  landing: {
  "title": "Contract vânzare-cumpărare auto {rok} – model gratuit PDF",
  "description": "Model gratuit de contract de vânzare-cumpărare auto între persoane fizice: CNP, VIN, kilometraj, defecte, plată, ora predării. Cu formularul ITL 054. PDF și Word.",
  "perex": "Pentru vânzarea unei mașini rulate între persoane fizice. Cu ora predării, defectele cunoscute, plata și pașii pentru formularul oficial Model 2026 ITL 054 și transcrierea în 90 de zile.",
  "obsahPopis": "Șapte articole conform Codului civil.",
  "obsah": [
    {
      "nazev": "Părțile",
      "popis": "Vânzătorul și cumpărătorul, cu CNP."
    },
    {
      "nazev": "Obiectul",
      "popis": "Vehiculul, VIN, numărul de înmatriculare."
    },
    {
      "nazev": "Starea vehiculului",
      "popis": "Kilometrajul și defectele cunoscute."
    },
    {
      "nazev": "Prețul și plata",
      "popis": "Suma în litere, numerar sau cont, rezerva proprietății."
    },
    {
      "nazev": "Predarea",
      "popis": "Data, ora, cheile, documentele."
    },
    {
      "nazev": "Formularul ITL 054 și transcrierea",
      "popis": "Viza fiscală și termenul de 90 de zile."
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
    "Memento pentru termenul de 90 de zile",
    "Procesul-verbal preia datele"
  ],
  "hodiSe": [
    "vindeți sau cumpărați o mașină rulată de la o persoană fizică",
    "vreți în scris prețul, starea și ora predării"
  ],
  "nehodiSe": [
    "cumpărați de la un dealer – are propriul contract",
    "mașina este în leasing sau gajată"
  ],
  "po": [
    {
      "nazev": "Formularul ITL 054",
      "popis": "Completați formularul oficial în 5 exemplare și obțineți viza fiscală la taxe locale."
    },
    {
      "nazev": "Transcrierea",
      "popis": "Cumpărătorul cere transcrierea în cel mult 90 de zile."
    },
    {
      "nazev": "Vânzătorul",
      "popis": "Radiază mașina din evidența fiscală și anunță asigurătorul."
    }
  ],
  "faq": [
    {
      "q": "Mai am nevoie de formularul ITL 054?",
      "a": "Da. Transferul se înregistrează pe formularul tipizat „Contract de înstrăinare-dobândire a unui mijloc de transport – Model 2026 ITL 054”, pe care organul fiscal local verifică datoriile vânzătorului și ale cumpărătorului. Contractul nostru îl completează cu prețul, starea și predarea."
    },
    {
      "q": "În cât timp se face transcrierea?",
      "a": "Cumpărătorul trebuie să ceară transcrierea dreptului de proprietate în cel mult 90 de zile."
    },
    {
      "q": "Cât pot plăti în numerar?",
      "a": "Între persoane fizice, numerarul este permis până la 50.000 lei pe tranzacție (Legea nr. 70/2015). Peste această sumă plătiți în cont."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil și pe Ordinul comun nr. 772/966/123/2026 privind formularul Model 2026 ITL 054.",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online contractul de vânzare-cumpărare auto – PDF gratuit", "description": "Ghid pentru contractul de vânzare-cumpărare a unei mașini rulate. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
