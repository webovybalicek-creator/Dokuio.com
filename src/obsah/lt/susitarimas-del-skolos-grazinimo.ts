import type { StrankaDokumentu } from '../typy';
import { grazinimoSusitarimas as sablona } from '../../sablony/lt/susitarimas-del-skolos-grazinimo';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Susitarimas dėl skolos grąžinimo",
  nazevA: "susitarimą dėl skolos grąžinimo",
  katalog: {"popis": "Skolos mokėjimas mėnesinėmis įmokomis.", "kategorie": "nauda", "ilustrace": "dluh", "slova": ["susitarimas dėl skolos grąžinimo", "skolos grąžinimo grafikas", "skolos mokėjimas dalimis", "išdėstymas dalimis", "susitarimas del skolos grazinimo"]},
  souvisejici: "nauda",
  landing: {
  "title": "Susitarimas dėl skolos grąžinimo {rok} – pavyzdys PDF nemokamai",
  "description": "Nemokamas susitarimo dėl skolos grąžinimo dalimis pavyzdys: skolos pripažinimas, įmokų skaičius ir dydis, pasekmės vėluojant. PDF ir Word.",
  "perex": "Kai skolininkas negali sumokėti visko iš karto. Susitarimas kartu yra skolos pripažinimas ir mokėjimo grafikas.",
  "obsahPopis": "Susitarimo punktai.",
  "obsah": [
    {
      "nazev": "Šalys",
      "popis": "Kreditorius ir skolininkas."
    },
    {
      "nazev": "Pripažinimas",
      "popis": "Skolos suma ir pagrindas."
    },
    {
      "nazev": "Mokėjimas dalimis",
      "popis": "Įmokų dydis, skaičius ir datos."
    },
    {
      "nazev": "Vėlavimas",
      "popis": "Kas bus praleidus įmokas."
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
    "Priminimai apie įmokas",
    "PDF ir Word"
  ],
  "hodiSe": [
    "skolininkas nori mokėti dalimis",
    "norite aiškaus grafiko ir skolos pripažinimo"
  ],
  "nehodiSe": [
    "skola dar ginčijama"
  ],
  "po": [
    {
      "nazev": "Kalendorius",
      "popis": "Įmokų datas pasižymėkite kalendoriuje."
    },
    {
      "nazev": "Įrodymai",
      "popis": "Išsaugokite mokėjimų patvirtinimus."
    }
  ],
  "faq": [
    {
      "q": "Ar susitarimas nutraukia senatį?",
      "a": "Taip. Susitarimu skolininkas pripažįsta skolą, todėl ieškinio senatis pradedama skaičiuoti iš naujo."
    },
    {
      "q": "Ar saugote mano duomenis?",
      "a": "Ne. Dokumentas kuriamas tiesiai jūsų naršyklėje, duomenys į serverį nesiunčiami."
    }
  ],
  "zakony": "Pavyzdys parengtas pagal Lietuvos Respublikos civilinio kodekso nuostatas.",
  "souvisejiciPopis": "Kiti dokumentai, taip pat nemokamai."
},
  vytvorit: {"title": "Užpildykite susitarimą dėl skolos grąžinimo internetu – PDF", "description": "Skolos grąžinimas mėnesinėmis įmokomis. PDF arba Word, nemokamai.", "podnadpis": "Nemokamai · rezultatas PDF ir Word formatu · užtrunka kelias minutes"},
};

export default stranka;
