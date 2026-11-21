import type { StrankaDokumentu } from '../typy';
import { notificareReziliere as sablona } from '../../sablony/ro/notificare-reziliere-contract';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Notificare de încetare a contractului",
  nazevA: "notificarea de încetare a contractului",
  katalog: {"popis": "Operator, asigurare, sală de fitness, abonament.", "kategorie": "cumparaturi", "ilustrace": "protokol", "slova": ["notificare reziliere contract", "reziliere abonament", "denuntare contract operator", "reziliere asigurare", "incetare abonament fitness"]},
  souvisejici: "cumparaturi",
  landing: {
  "title": "Notificare de reziliere a contractului {rok} – model gratuit PDF",
  "description": "Model gratuit de notificare de încetare a unui contract de servicii: operator, asigurare, abonament sau sală de fitness, cu preaviz sau la o dată. PDF și Word.",
  "perex": "Pentru încetarea unui abonament sau contract de servicii. Cu preavizul din contract sau la o dată anume.",
  "obsahPopis": "O notificare scurtă.",
  "obsah": [
    {
      "nazev": "Notificarea",
      "popis": "Serviciul, numărul contractului și data încetării."
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
    "încheiați un abonament, o asigurare sau un contract de servicii"
  ],
  "nehodiSe": [
    "vreți să vă retrageți dintr-o comandă online în 14 zile – folosiți formularul de retragere"
  ],
  "po": [
    {
      "nazev": "Confirmare",
      "popis": "Cereți confirmarea scrisă a încetării."
    }
  ],
  "faq": [
    {
      "q": "Plătesc penalități la încetarea anticipată?",
      "a": "La contractele cu perioadă minimă încetarea anticipată poate atrage despăgubiri – suma este în contract."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil și pe OUG nr. 34/2014.",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online notificarea de încetare a contractului – PDF gratuit", "description": "Încetarea unui abonament sau contract de servicii. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
