import type { StrankaDokumentu } from '../typy';
import { acordIncetareInchiriere as sablona } from '../../sablony/ro/acord-incetare-inchiriere';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Acord de încetare a închirierii",
  nazevA: "acordul de încetare a închirierii",
  katalog: {"popis": "Sfârșitul închirierii prin acord, fără preaviz.", "kategorie": "locuinta", "ilustrace": "protokol", "slova": ["acord incetare contract inchiriere", "incetare inchiriere acordul partilor", "fara preaviz", "restituire garantie", "c168 incetare"]},
  souvisejici: "locuinta",
  landing: {
  "title": "Acord de încetare a închirierii {rok} – model gratuit PDF",
  "description": "Model gratuit de acord de încetare a contractului de închiriere prin acordul părților: data încetării, predarea locuinței și restituirea garanției. PDF și Word.",
  "perex": "Când proprietarul și chiriașul convin împreună data încetării – fără preaviz.",
  "obsahPopis": "Cinci articole conform Codului civil.",
  "obsah": [
    {
      "nazev": "Părțile",
      "popis": "Proprietarul și chiriașul."
    },
    {
      "nazev": "Încetarea",
      "popis": "Data și plata până atunci."
    },
    {
      "nazev": "Predarea",
      "popis": "Eliberarea și cheile."
    },
    {
      "nazev": "Garanția",
      "popis": "Suma și termenul."
    },
    {
      "nazev": "Dispoziții finale",
      "popis": "Fără alte pretenții."
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
    "vreți să încheiați închirierea înainte de termen, de comun acord"
  ],
  "nehodiSe": [
    "cealaltă parte nu este de acord – folosiți denunțarea cu preaviz"
  ],
  "po": [
    {
      "nazev": "ANAF",
      "popis": "Proprietarul declară încetarea contractului înregistrat în 30 de zile."
    }
  ],
  "faq": [
    {
      "q": "Trebuie anunțată ANAF?",
      "a": "Dacă contractul a fost înregistrat la ANAF, încetarea se declară tot în 30 de zile (formular C168)."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil (Legea nr. 287/2009).",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online acordul de încetare a închirierii – PDF gratuit", "description": "Încetarea închirierii prin acordul părților. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
