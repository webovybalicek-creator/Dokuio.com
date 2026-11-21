import type { StrankaDokumentu } from '../typy';
import { formularRetragere as sablona } from '../../sablony/ro/formular-retragere';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Formular de retragere",
  nazevA: "formularul de retragere",
  katalog: {"popis": "Returnarea produselor cumpărate online în 14 zile.", "kategorie": "cumparaturi", "ilustrace": "protokol", "slova": ["formular de retragere", "retur 14 zile", "retragere comanda online", "returnare produs", "oug 34/2014"]},
  souvisejici: "cumparaturi",
  landing: {
  "title": "Formular de retragere {rok} – model gratuit PDF, 14 zile",
  "description": "Model gratuit de formular de retragere din contractul încheiat online: 14 zile fără motiv, rambursare în 14 zile, conform OUG nr. 34/2014. PDF și Word.",
  "perex": "Pentru returnarea produselor comandate online sau prin telefon. Retragere în 14 zile, fără să indicați motivul.",
  "obsahPopis": "O notificare scurtă conform modelului din OUG nr. 34/2014.",
  "obsah": [
    {
      "nazev": "Retragerea",
      "popis": "Produsul, comanda, datele și rambursarea."
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
    "ați cumpărat online sau prin telefon și vreți să returnați"
  ],
  "nehodiSe": [
    "produsul are un defect – folosiți reclamația"
  ],
  "po": [
    {
      "nazev": "Retur",
      "popis": "Returnați produsul în 14 zile de la retragere."
    }
  ],
  "faq": [
    {
      "q": "În cât timp primesc banii?",
      "a": "Profesionistul rambursează toate plățile, inclusiv livrarea standard, în cel mult 14 zile de la data la care a fost informat despre retragere (OUG nr. 34/2014)."
    },
    {
      "q": "Cine plătește returul?",
      "a": "Costurile directe de returnare le suportă, de regulă, consumatorul, dacă a fost informat despre aceasta."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe OUG nr. 34/2014 privind drepturile consumatorilor.",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online formularul de retragere – PDF gratuit", "description": "Retragere din comanda online în 14 zile. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
