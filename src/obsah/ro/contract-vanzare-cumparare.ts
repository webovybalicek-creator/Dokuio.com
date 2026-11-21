import type { StrankaDokumentu } from '../typy';
import { contractVanzare as sablona } from '../../sablony/ro/contract-vanzare-cumparare';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contract de vânzare-cumpărare",
  nazevA: "contractul de vânzare-cumpărare",
  katalog: {"popis": "Vânzarea unui bun folosit prin anunț.", "kategorie": "cumparaturi", "ilustrace": "protokol", "slova": ["contract vanzare cumparare", "contract vanzare bunuri", "vanzare olx", "bun folosit", "contract intre persoane fizice"]},
  souvisejici: "cumparaturi",
  landing: {
  "title": "Contract de vânzare-cumpărare {rok} – model gratuit PDF",
  "description": "Model gratuit de contract de vânzare-cumpărare pentru un bun mobil folosit între persoane fizice: descriere, defecte, preț în litere și plată. PDF și Word.",
  "perex": "Pentru vânzarea unui bun folosit prin anunț – bicicletă, telefon, mobilă. Cu defectele cunoscute și plata.",
  "obsahPopis": "Patru articole conform Codului civil.",
  "obsah": [
    {
      "nazev": "Părțile",
      "popis": "Vânzătorul și cumpărătorul."
    },
    {
      "nazev": "Obiectul și starea",
      "popis": "Descrierea bunului și defectele."
    },
    {
      "nazev": "Prețul și predarea",
      "popis": "Suma în litere, numerar sau cont."
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
    "vindeți sau cumpărați un bun folosit de la o persoană fizică"
  ],
  "nehodiSe": [
    "vindeți o mașină – folosiți contractul auto",
    "vindeți un imobil – se face la notar"
  ],
  "po": [
    {
      "nazev": "Predarea",
      "popis": "Predați bunul după ce primiți banii."
    }
  ],
  "faq": [
    {
      "q": "Răspunde vânzătorul pentru defecte?",
      "a": "Pentru defectele pe care cumpărătorul le cunoștea la cumpărare vânzătorul nu răspunde – de aceea treceți-le în contract."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil (Legea nr. 287/2009).",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online contractul de vânzare-cumpărare – PDF gratuit", "description": "Contract pentru vânzarea unui bun folosit. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
