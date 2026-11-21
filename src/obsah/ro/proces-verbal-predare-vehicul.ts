import type { StrankaDokumentu } from '../typy';
import { procesVerbalVehicul as sablona } from '../../sablony/ro/proces-verbal-predare-vehicul';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Proces-verbal de predare a vehiculului",
  nazevA: "procesul-verbal de predare a vehiculului",
  katalog: {"popis": "Kilometraj, deteriorări, chei și ora predării.", "kategorie": "auto", "ilustrace": "protokol", "slova": ["proces verbal predare primire auto", "proces verbal masina", "predare vehicul", "kilometraj", "deteriorari"]},
  souvisejici: "auto",
  landing: {
  "title": "Proces-verbal predare-primire auto {rok} – model gratuit PDF",
  "description": "Model gratuit de proces-verbal de predare-primire a vehiculului: ora exactă, kilometraj, combustibil, chei, documente și deteriorări. Dovadă la amenzi. PDF și Word.",
  "perex": "Consemnează starea vehiculului și ora exactă a predării – important dacă după vânzare sosește o amendă.",
  "obsahPopis": "Un proces-verbal scurt.",
  "obsah": [
    {
      "nazev": "Predarea",
      "popis": "Cine, cui, când și la ce oră."
    },
    {
      "nazev": "Chei și documente",
      "popis": "Ce se predă împreună cu vehiculul."
    },
    {
      "nazev": "Starea",
      "popis": "Deteriorări și observații."
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
    "Verificarea VIN-ului",
    "PDF și Word"
  ],
  "hodiSe": [
    "vindeți sau împrumutați o mașină",
    "returnați un vehicul după împrumut"
  ],
  "nehodiSe": [
    "aveți nevoie și de contract – folosiți contractul de vânzare-cumpărare"
  ],
  "po": [
    {
      "nazev": "Fotografii",
      "popis": "Fotografiați vehiculul și kilometrajul."
    },
    {
      "nazev": "Exemplare",
      "popis": "Fiecare parte păstrează unul."
    }
  ],
  "faq": [
    {
      "q": "De ce să trec ora predării?",
      "a": "Până la transcriere, amenzile pot ajunge la fostul proprietar – procesul-verbal cu ora dovedește cine avea vehiculul."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil (Legea nr. 287/2009).",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online procesul-verbal de predare a vehiculului – PDF gratuit", "description": "Proces-verbal de predare-primire a vehiculului, cu ora. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
