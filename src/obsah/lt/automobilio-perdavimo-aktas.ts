import type { StrankaDokumentu } from '../typy';
import { autoAktas as sablona } from '../../sablony/lt/automobilio-perdavimo-aktas';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Transporto priemonės perdavimo–priėmimo aktas",
  nazevA: "transporto priemonės perdavimo–priėmimo aktą",
  katalog: {"popis": "Rida, pažeidimai, rakteliai ir perdavimo laikas.", "kategorie": "auto", "ilustrace": "protokol", "slova": ["automobilio perdavimo aktas", "transporto priemonės perdavimo priėmimo aktas", "automobilio perdavimas", "rida", "automobilio priemimo perdavimo aktas"]},
  souvisejici: "auto",
  landing: {
  "title": "Automobilio perdavimo aktas {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas transporto priemonės perdavimo–priėmimo akto pavyzdys: tikslus laikas, rida, degalai, rakteliai, dokumentai ir pažeidimai. PDF ir Word.",
  "perex": "Užfiksuoja transporto priemonės būklę ir tikslų perdavimo laiką – svarbu, jei po pardavimo ateina bauda ar mokestis už stovėjimą.",
  "obsahPopis": "Trumpas aktas.",
  "obsah": [
    {
      "nazev": "Perdavimas",
      "popis": "Kas, kam, kada ir kelintą valandą."
    },
    {
      "nazev": "Rakteliai ir dokumentai",
      "popis": "Kas perduodama kartu su transporto priemone."
    },
    {
      "nazev": "Būklė",
      "popis": "Pažeidimai ir pastabos."
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
    "Perima duomenis iš pirkimo–pardavimo sutarties",
    "VIN patikrinimas",
    "PDF ir Word"
  ],
  "hodiSe": [
    "parduodate ar paskolinate automobilį",
    "grąžinate transporto priemonę po panaudos"
  ],
  "nehodiSe": [
    "jums reikia ir sutarties – naudokite pirkimo–pardavimo sutartį"
  ],
  "po": [
    {
      "nazev": "Nuotraukos",
      "popis": "Nufotografuokite transporto priemonę ir spidometrą."
    },
    {
      "nazev": "Egzemplioriai",
      "popis": "Kiekviena šalis pasilieka po vieną."
    }
  ],
  "faq": [
    {
      "q": "Kodėl įrašyti perdavimo laiką?",
      "a": "Kol nuosavybės pasikeitimas nedeklaruotas Regitroje, savininku laikomas registruotas asmuo – baudos ir pranešimai gali ateiti jam. Aktas su laiku įrodo, kieno rankose buvo transporto priemonė."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Lietuvos Respublikos civilinio kodekso nuostatas.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite automobilio perdavimo aktą internetu – PDF", "description": "Automobilio perdavimo–priėmimo aktas su laiku. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;
