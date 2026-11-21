import type { StrankaDokumentu } from '../typy';
import { contractInchiriere as sablona } from '../../sablony/ro/contract-inchiriere-locuinta';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contract de închiriere a locuinței",
  nazevA: "contractul de închiriere a locuinței",
  katalog: {"popis": "Închirierea unui apartament cu garanție.", "kategorie": "locuinta", "ilustrace": "protokol", "slova": ["contract de inchiriere", "contract inchiriere apartament", "inchiriere locuinta", "garantie chirie", "inregistrare contract anaf"]},
  souvisejici: "locuinta",
  landing: {
  "title": "Contract de închiriere apartament {rok} – model gratuit PDF",
  "description": "Model gratuit de contract de închiriere a locuinței: chirie în litere, utilități, garanție, preaviz și înregistrarea la ANAF în 30 de zile. PDF și Word.",
  "perex": "Pentru închirierea unui apartament sau a unei case. Cu garanția, utilitățile și pașii pentru înregistrarea la ANAF.",
  "obsahPopis": "Opt articole conform Codului civil.",
  "obsah": [
    {
      "nazev": "Părțile",
      "popis": "Proprietarul și chiriașul."
    },
    {
      "nazev": "Obiectul",
      "popis": "Locuința, cartea funciară, dotările."
    },
    {
      "nazev": "Durata",
      "popis": "Determinată sau nedeterminată."
    },
    {
      "nazev": "Chiria și utilitățile",
      "popis": "Suma în litere și scadența."
    },
    {
      "nazev": "Garanția",
      "popis": "Suma și restituirea."
    },
    {
      "nazev": "Obligațiile",
      "popis": "Folosirea, reparațiile, subînchirierea."
    },
    {
      "nazev": "Încetarea",
      "popis": "Preavizul chiriașului."
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
    "Procesul-verbal de predare preia datele",
    "PDF și Word"
  ],
  "hodiSe": [
    "închiriați sau luați în chirie o locuință",
    "vreți garanția și utilitățile clar în scris"
  ],
  "nehodiSe": [
    "închiriați un spațiu comercial – se aplică alte reguli"
  ],
  "po": [
    {
      "nazev": "Predarea",
      "popis": "Proces-verbal cu indexurile contoarelor."
    },
    {
      "nazev": "ANAF",
      "popis": "Proprietarul înregistrează contractul în 30 de zile (formular C168)."
    }
  ],
  "faq": [
    {
      "q": "Trebuie înregistrat contractul la ANAF?",
      "a": "Da. Proprietarul care obține venituri din chirii înregistrează contractul la organul fiscal în cel mult 30 de zile de la încheiere (formular C168)."
    },
    {
      "q": "La ce folosește înregistrarea?",
      "a": "Contractul înregistrat la organul fiscal este titlu executoriu pentru plata chiriei (art. 1798 Cod civil)."
    },
    {
      "q": "Cât poate fi garanția?",
      "a": "Legea nu limitează garanția – o stabiliți în contract, împreună cu termenul de restituire."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil (locațiunea) și pe informațiile ANAF privind veniturile din chirii.",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online contractul de închiriere – PDF gratuit", "description": "Contract de închiriere a locuinței cu garanție. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
