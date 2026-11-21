import type { StrankaDokumentu } from '../typy';
import { declaratie as sablona } from '../../sablony/ro/declaratie-pe-proprie-raspundere';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Declarație pe propria răspundere",
  nazevA: "declarația pe propria răspundere",
  katalog: {"popis": "Declarație scrisă pentru o instituție sau bancă.", "kategorie": "cumparaturi", "ilustrace": "plnamoc", "slova": ["declaratie pe propria raspundere", "declaratie model", "declaratie persoana fizica", "fals in declaratii", "declaratie primarie"]},
  souvisejici: "cumparaturi",
  landing: {
  "title": "Declarație pe propria răspundere {rok} – model gratuit PDF",
  "description": "Model gratuit de declarație pe propria răspundere pentru o persoană fizică: datele declarantului, textul declarației și scopul, conform Codului penal. PDF și Word.",
  "perex": "Pentru o declarație scrisă cerută de o instituție, o bancă sau un angajator.",
  "obsahPopis": "O declarație scurtă.",
  "obsah": [
    {
      "nazev": "Declarația",
      "popis": "Declarantul, textul și scopul."
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
    "o instituție vă cere o declarație scrisă"
  ],
  "nehodiSe": [
    "instituția are propriul formular – folosiți-l"
  ],
  "po": [
    {
      "nazev": "Legalizare",
      "popis": "Dacă se cere, semnați la notar."
    }
  ],
  "faq": [
    {
      "q": "Ce risc dacă declar ceva neadevărat?",
      "a": "Declarația necorespunzătoare adevărului făcută unei autorități poate constitui infracțiunea de fals în declarații (Codul penal)."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil și pe Codul penal (falsul în declarații).",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online declarația pe propria răspundere – PDF gratuit", "description": "Declarație pe propria răspundere pentru o instituție. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
