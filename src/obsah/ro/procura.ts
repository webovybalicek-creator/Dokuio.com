import type { StrankaDokumentu } from '../typy';
import { procura as sablona } from '../../sablony/ro/procura';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Împuternicire",
  nazevA: "împuternicirea",
  katalog: {"popis": "Când altcineva rezolvă ceva în locul dvs.", "kategorie": "cumparaturi", "ilustrace": "plnamoc", "slova": ["imputernicire", "procura", "procura sub semnatura privata", "imputernicire persoana fizica", "mandat"]},
  souvisejici: "cumparaturi",
  landing: {
  "title": "Împuternicire (procură) {rok} – model gratuit PDF",
  "description": "Model gratuit de împuternicire sub semnătură privată pentru o persoană fizică: mandant, mandatar, actele permise și valabilitatea. Când e nevoie de notar. PDF și Word.",
  "perex": "Pentru acte simple pe care le rezolvă altcineva în locul dvs. Pentru actele care cer formă autentică procura se face la notar.",
  "obsahPopis": "O împuternicire scurtă.",
  "obsah": [
    {
      "nazev": "Împuternicirea",
      "popis": "Cine, pe cine, pentru ce și până când."
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
    "cineva ridică un colet sau depune acte în locul dvs."
  ],
  "nehodiSe": [
    "vindeți un imobil sau o instituție cere procură notarială"
  ],
  "po": [
    {
      "nazev": "Verificare",
      "popis": "Întrebați instituția ce formă de procură acceptă."
    }
  ],
  "faq": [
    {
      "q": "Când trebuie procură notarială?",
      "a": "Pentru actele care trebuie încheiate în formă autentică (de ex. vânzarea unui imobil) procura trebuie să fie autentică. Multe instituții, inclusiv serviciile de înmatriculare, cer procură notarială."
    },
    {
      "q": "Pot revoca împuternicirea?",
      "a": "Da, oricând. Comunicați revocarea mandatarului și celor cărora le-a fost prezentată."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil (Legea nr. 287/2009).",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online împuternicirea – PDF gratuit", "description": "Împuternicire sub semnătură privată pentru acte simple. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
