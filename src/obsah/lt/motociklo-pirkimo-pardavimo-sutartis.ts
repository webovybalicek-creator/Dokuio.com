import type { StrankaDokumentu } from '../typy';
import { motociklasSutartis as sablona } from '../../sablony/lt/motociklo-pirkimo-pardavimo-sutartis';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Motociklo pirkimo–pardavimo sutartis",
  nazevA: "motociklo pirkimo–pardavimo sutartį",
  katalog: {"popis": "Motociklas, motoroleris ar keturratis.", "kategorie": "auto", "ilustrace": "motorka", "slova": ["motociklo pirkimo pardavimo sutartis", "motociklo pardavimas", "motorolerio pardavimas", "keturračio pardavimas", "motociklo pirkimo sutartis"]},
  souvisejici: "auto",
  landing: {
  "title": "Motociklo pirkimo–pardavimo sutartis {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas motociklo ar motorolerio pirkimo–pardavimo sutarties pavyzdys: VIN, SDK, rida, trūkumai, atsiskaitymas ir perdavimo laikas. PDF ir Word.",
  "perex": "Motociklo, motorolerio ar keturračio pardavimui tarp fizinių asmenų. Tas pats patikrintas tekstas kaip automobiliui; deklaravimas Regitroje.",
  "obsahPopis": "Transporto priemonės pardavimo ir perdavimo punktai.",
  "obsah": [
    {
      "nazev": "Šalys",
      "popis": "Pardavėjas ir pirkėjas su asmens kodu."
    },
    {
      "nazev": "Transporto priemonė",
      "popis": "Motociklas, VIN, SDK ir registracijos numeris."
    },
    {
      "nazev": "Būklė",
      "popis": "Rida ir žinomi trūkumai."
    },
    {
      "nazev": "Kaina ir atsiskaitymas",
      "popis": "Suma žodžiais."
    },
    {
      "nazev": "Perdavimas",
      "popis": "Data, laikas, rakteliai, dokumentai."
    },
    {
      "nazev": "Deklaravimas",
      "popis": "Regitroje per 5 + 5 darbo dienas."
    }
  ],
  "kroky": [
    {
      "nazev": "Užpildykite duomenis",
      "popis": "Ko nežinote, praleiskite – liks linija pildyti ranka."
    },
    {
      "nazev": "Patikrinkite tekstą",
      "popis": "Kiekvieną pastraipą galite redaguoti."
    },
    {
      "nazev": "Atsisiųskite ir pasirašykite",
      "popis": "PDF arba Word, nemokamai."
    }
  ],
  "online": [
    "Suma žodžiais automatiškai",
    "VIN patikrinimas",
    "Priminimas apie deklaravimą"
  ],
  "hodiSe": [
    "parduodate ar perkate motociklą ar motorolerį iš fizinio asmens"
  ],
  "nehodiSe": [
    "perkate iš prekiautojo"
  ],
  "po": [
    {
      "nazev": "Deklaravimas",
      "popis": "Pirkėjas pateikia įgijimo deklaraciją, pardavėjas ją patvirtina Regitroje."
    },
    {
      "nazev": "Draudimas",
      "popis": "Pirkėjas prieš važiuodamas apsidraudžia privalomuoju draudimu."
    }
  ],
  "faq": [
    {
      "q": "Ar taisyklės tokios pačios kaip automobiliui?",
      "a": "Taip. Ir motociklui nuosavybės pasikeitimą deklaruoja abi šalys Regitroje: pirkėjas per 5 darbo dienas, pardavėjas patvirtina per 5 darbo dienas, o tada pirkėjas registruoja jį savo vardu."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Civilinį kodeksą ir Regitros nuosavybės pasikeitimo deklaravimo tvarką.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite motociklo pirkimo–pardavimo sutartį internetu – PDF", "description": "Motociklo ar motorolerio pirkimo–pardavimo sutartis. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;
