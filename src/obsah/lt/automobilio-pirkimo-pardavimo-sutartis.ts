import type { StrankaDokumentu } from '../typy';
import { autoSutartis as sablona } from '../../sablony/lt/automobilio-pirkimo-pardavimo-sutartis';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Automobilio pirkimo–pardavimo sutartis",
  nazevA: "automobilio pirkimo–pardavimo sutartį",
  katalog: {"popis": "Naudoto automobilio pardavimas tarp fizinių asmenų.", "kategorie": "auto", "ilustrace": "auto", "slova": ["automobilio pirkimo pardavimo sutartis", "transporto priemonės pirkimo pardavimo sutartis", "automobilio pardavimas", "naudoto automobilio pirkimas", "SDK kodas", "regitra deklaravimas", "automobilio pirkimo sutartis", "masinos pirkimo pardavimo sutartis"]},
  souvisejici: "auto",
  landing: {
  "title": "Automobilio pirkimo–pardavimo sutartis {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas automobilio pirkimo–pardavimo sutarties pavyzdys tarp fizinių asmenų: asmens kodai, VIN, SDK, rida, trūkumai, atsiskaitymas ir perdavimo laikas. PDF ir Word.",
  "perex": "Naudoto automobilio pardavimui tarp fizinių asmenų. Sutartyje – kaina, būklė, SDK, atsiskaitymas ir tikslus perdavimo laikas; po to abi šalys deklaruoja nuosavybės pasikeitimą Regitroje.",
  "obsahPopis": "Transporto priemonės pardavimo ir perdavimo punktai.",
  "obsah": [
    {
      "nazev": "Šalys",
      "popis": "Pardavėjas ir pirkėjas su asmens kodu."
    },
    {
      "nazev": "Transporto priemonė",
      "popis": "Markė, registracijos numeris, VIN ir SDK."
    },
    {
      "nazev": "Būklė",
      "popis": "Rida ir žinomi trūkumai."
    },
    {
      "nazev": "Kaina ir atsiskaitymas",
      "popis": "Suma žodžiais, grynaisiais arba pavedimu."
    },
    {
      "nazev": "Perdavimas",
      "popis": "Data, laikas, rakteliai, dokumentai."
    },
    {
      "nazev": "Deklaravimas",
      "popis": "Regitra: pirkėjas per 5 darbo dienas, pardavėjas patvirtina per 5 darbo dienas."
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
    "Priminimas apie deklaravimą Regitroje",
    "Perdavimo aktas perima duomenis"
  ],
  "hodiSe": [
    "parduodate ar perkate naudotą automobilį iš fizinio asmens",
    "norite raštu užfiksuoti kainą, būklę ir perdavimo laiką"
  ],
  "nehodiSe": [
    "perkate iš prekiautojo – jis turi savo sutartį",
    "automobilis yra lizinge"
  ],
  "po": [
    {
      "nazev": "Įgijimo deklaracija",
      "popis": "Pirkėjas per 5 darbo dienas nuo sandorio pateikia įgijimo deklaraciją Regitrai."
    },
    {
      "nazev": "Pardavėjo patvirtinimas",
      "popis": "Pardavėjas per 5 darbo dienas patvirtina perleidimą; pirkėjas gauna naują SDK."
    },
    {
      "nazev": "Registracija ir draudimas",
      "popis": "Norėdamas važiuoti, pirkėjas per 10 dienų registruoja automobilį ir apsidraudžia."
    }
  ],
  "faq": [
    {
      "q": "Kaip vyksta savininko pasikeitimas?",
      "a": "Pasirašius sutartį, pirkėjas per 5 darbo dienas Regitrai pateikia įgijimo deklaraciją, o pardavėjas per 5 darbo dienas ją patvirtina – internetu eregitra.lt arba padalinyje. Tada pirkėjas gauna naują SDK ir gali registruoti automobilį savo vardu."
    },
    {
      "q": "Kas yra SDK?",
      "a": "Savininko deklaravimo kodas – 8 raidžių kodas, be kurio transporto priemonės neįmanoma deklaruoti ir registruoti. Prieš mokėdami patikrinkite, ar jis galioja."
    },
    {
      "q": "Ar reikia notaro?",
      "a": "Ne. Automobilio pardavimui tarp fizinių asmenų notaro nereikia; pakanka rašytinės sutarties."
    },
    {
      "q": "Ar galima mokėti grynaisiais?",
      "a": "Grynaisiais pagal vieną sandorį galima atsiskaityti ne daugiau kaip 5 000 €. Didesnę sumą mokėkite banko pavedimu."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Civilinio kodekso nuostatas dėl pirkimo–pardavimo ir Regitros nuosavybės pasikeitimo deklaravimo tvarką.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite automobilio pirkimo–pardavimo sutartį internetu – PDF", "description": "Vedlys naudoto automobilio pirkimo–pardavimo sutarčiai parengti. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;
