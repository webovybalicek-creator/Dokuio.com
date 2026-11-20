import type { StrankaDokumentu } from '../typy';
import { reklamacija as sablona } from '../../sablony/hr/reklamacija';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Reklamacija (pisani prigovor)",
  nazevA: "pisani prigovor (reklamaciju)",
  katalog: {"popis": "Pisani prigovor zbog neispravne robe.", "kategorie": "svakodnevno", "ilustrace": "protokol", "slova": ["reklamacija", "pisani prigovor", "neispravna roba", "materijalni nedostatak", "jamstvo"]},
  souvisejici: "svakodnevno",
  landing: {
  "title": "Reklamacija – pisani prigovor {rok} – besplatni obrazac PDF",
  "description": "Besplatan obrazac za reklamaciju: pisani prigovor zbog materijalnog nedostatka, rok od dva mjeseca, odgovornost dvije godine, odgovor trgovca u 15 dana. PDF i Word.",
  "perex": "Roba se pokvarila ili ne radi kako treba? Pisani prigovor trgovcu, s odgovorom u 15 dana.",
  "obsahPopis": "Pisani prigovor sa zahtjevom.",
  "obsah": [
    {
      "nazev": "Podnositelj i trgovac",
      "popis": "Tko reklamira."
    },
    {
      "nazev": "Prigovor",
      "popis": "Roba, nedostatak, zahtjev i prilog."
    }
  ],
  "kroky": [
    {
      "nazev": "Ispunite podatke",
      "popis": "Što ne znate, preskočite – ostat će crta za ispunjavanje rukom."
    },
    {
      "nazev": "Provjerite tekst",
      "popis": "Svaki odlomak možete urediti."
    },
    {
      "nazev": "Preuzmite i potpišite",
      "popis": "PDF ili Word besplatno."
    }
  ],
  "online": [
    "PDF i Word",
    "Izbor zahtjeva"
  ],
  "hodiSe": [
    "kupljena roba ima nedostatak",
    "trgovac ne želi riješiti kvar"
  ],
  "nehodiSe": [
    "želite samo vratiti ispravnu robu kupljenu na internetu – koristite jednostrani raskid"
  ],
  "po": [
    {
      "nazev": "Predaja",
      "popis": "Uz potvrdu primitka."
    },
    {
      "nazev": "Odgovor",
      "popis": "Trgovac ima 15 dana."
    }
  ],
  "faq": [
    {
      "q": "Koliki je rok za reklamaciju?",
      "a": "Trgovca obavijestite u roku od dva mjeseca od otkrivanja nedostatka; trgovac odgovara za nedostatke koji se pojave u dvije godine od predaje."
    },
    {
      "q": "Što mogu zahtijevati?",
      "a": "Uklanjanje nedostatka, zamjenu, sniženje cijene ili raskid ugovora."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o obveznim odnosima i Zakonu o zaštiti potrošača.",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite reklamaciju online – PDF besplatno", "description": "Pisani prigovor zbog neispravne robe. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;
