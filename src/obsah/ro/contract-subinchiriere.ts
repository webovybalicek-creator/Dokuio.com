import type { StrankaDokumentu } from '../typy';
import { contractSubinchiriere as sablona } from '../../sablony/ro/contract-subinchiriere';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Contract de subînchiriere",
  nazevA: "contractul de subînchiriere",
  katalog: {"popis": "Cameră sau locuință cu acordul proprietarului.", "kategorie": "locuinta", "ilustrace": "protokol", "slova": ["contract de subinchiriere", "subinchiriere camera", "subinchiriere apartament", "acord proprietar", "sublocatiune"]},
  souvisejici: "locuinta",
  landing: {
  "title": "Contract de subînchiriere {rok} – model gratuit PDF",
  "description": "Model gratuit de contract de subînchiriere a unei camere sau a locuinței, cu acordul proprietarului: durată, plată, garanție și denunțare. PDF și Word.",
  "perex": "Pentru chiriașul care subînchiriază o cameră sau întreaga locuință, cu acordul scris al proprietarului.",
  "obsahPopis": "Șapte articole conform Codului civil.",
  "obsah": [
    {
      "nazev": "Părțile",
      "popis": "Chiriașul și subchiriașul."
    },
    {
      "nazev": "Obiectul",
      "popis": "Camera sau locuința, acordul proprietarului."
    },
    {
      "nazev": "Durata",
      "popis": "Cel mult cât închirierea principală."
    },
    {
      "nazev": "Plata și garanția",
      "popis": "Suma în litere."
    },
    {
      "nazev": "Obligațiile",
      "popis": "Folosirea locuinței."
    },
    {
      "nazev": "Denunțarea",
      "popis": "Preaviz de 30 de zile."
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
    "subînchiriați o cameră sau locuința cu acordul proprietarului"
  ],
  "nehodiSe": [
    "contractul principal interzice subînchirierea"
  ],
  "po": [
    {
      "nazev": "Acordul",
      "popis": "Atașați acordul scris al proprietarului."
    },
    {
      "nazev": "ANAF",
      "popis": "Venitul din subînchiriere se înregistrează la ANAF."
    }
  ],
  "faq": [
    {
      "q": "Am nevoie de acordul proprietarului?",
      "a": "Verificați contractul principal – dacă interzice subînchirierea, nu subînchiriați. Chiar și atunci când nu o interzice, cereți acordul scris al proprietarului."
    },
    {
      "q": "Îmi salvați datele?",
      "a": "Nu. Documentul se creează direct în browserul dvs., datele nu sunt trimise pe server."
    }
  ],
  "zakony": "Modelul se bazează pe Codul civil (Legea nr. 287/2009).",
  "souvisejiciPopis": "Alte documente, tot gratuite."
},
  vytvorit: {"title": "Completați online contractul de subînchiriere – PDF gratuit", "description": "Contract de subînchiriere cu acordul proprietarului. PDF sau Word, gratuit.", "podnadpis": "Gratuit · rezultat în PDF și Word · durează câteva minute"},
};

export default stranka;
