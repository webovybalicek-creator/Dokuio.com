import type { StrankaDokumentu } from '../typy';
import { demisie as sablona } from '../../sablony/ro/demisie';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Demisie",
  nazevA: "demisia",
  katalog: {"popis": "Salariatul încheie contractul de muncă.", "kategorie": "munca", "ilustrace": "protokol", "slova": ["demisie", "model demisie", "cerere de demisie", "preaviz demisie", "demisie fara preaviz"]},
  souvisejici: "munca",
  landing: {
  "title": "Demisie {rok} – model gratuit PDF, preaviz 20 sau 45 de zile",
  "description": "Model gratuit de demisie conform art. 81 din Codul muncii: preaviz de cel mult 20 sau 45 de zile lucrătoare, înregistrare la angajator, renunțare la preaviz. PDF și Word.",
  "perex": "Pentru salariatul care vrea să-și încheie contractul de muncă. Nu trebuie motivată; preavizul este cel din contract.",
  "obsahPopis": "Preavizul din contract, cel mult 20 de zile lucrătoare pentru funcțiile de execuție și 45 pentru funcțiile de conducere (art. 81 Codul muncii).",
  "obsah": [
    {
      "nazev": "Demisia",
      "popis": "Salariatul, angajatorul, contractul și preavizul."
    },
    {
      "nazev": "Solicitarea",
      "popis": "Concediul rămas sau renunțarea la preaviz."
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
    "vreți să vă încheiați contractul de muncă"
  ],
  "nehodiSe": [
    "angajatorul vrea să vă concedieze – este altă procedură"
  ],
  "po": [
    {
      "nazev": "Înregistrare",
      "popis": "Cereți număr de înregistrare pe exemplarul dvs."
    },
    {
      "nazev": "Concediu",
      "popis": "Stabiliți concediul de odihnă rămas."
    }
  ],
  "faq": [
    {
      "q": "Cât este preavizul la demisie?",
      "a": "Cel din contractul individual sau colectiv de muncă, dar nu mai mult de 20 de zile lucrătoare pentru funcțiile de execuție și 45 de zile lucrătoare pentru funcțiile de conducere (art. 81 Codul muncii)."
    },
    {
      "q": "Pot pleca fără preaviz?",
      "a": "Da, dacă angajatorul renunță la preaviz sau dacă nu își îndeplinește obligațiile din contract."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul muncii (Legea nr. 53/2003), art. 81.",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online demisia – PDF gratuit", "description": "Demisie conform Codului muncii, cu preaviz. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
