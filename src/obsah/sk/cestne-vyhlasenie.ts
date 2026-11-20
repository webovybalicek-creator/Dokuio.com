import type { StrankaDokumentu } from '../typy';
import { cestneVyhlasenie as sablona } from '../../sablony/sk/cestne-vyhlasenie';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Čestné vyhlásenie",
  nazevA: "čestné vyhlásenie",
  katalog: {"popis": "Písomné vyhlásenie pre úrad, školu alebo banku.", "kategorie": "zastoupeni", "ilustrace": "plnamoc", "slova": ["čestné vyhlásenie", "vyhlásenie", "úrad", "bezdlžnosť", "vzor"]},
  souvisejici: "bezne",
  landing: {
  "title": "Čestné vyhlásenie {rok} – vzor na stiahnutie zadarmo (PDF, Word)",
  "description": "Univerzálny vzor čestného vyhlásenia zadarmo: kto vyhlasuje, pre koho a čo. Vyplňte online a stiahnite v PDF alebo Worde. S tipmi, kedy treba osvedčiť podpis.",
  "perex": "Keď od vás úrad, škola, banka alebo prenajímateľ chce čestné vyhlásenie. Vyplníte, kto ste a čo vyhlasujete.",
  "obsahPopis": "Jednoduchá listina na jednu stranu.",
  "obsah": [
    {
      "nazev": "Vyhlasujúci",
      "popis": "Meno, dátum narodenia, adresa."
    },
    {
      "nazev": "Vyhlásenie",
      "popis": "Pre koho, účel, text a potvrdenie pravdivosti."
    }
  ],
  "kroky": [
    {
      "nazev": "Vyplňte údaje",
      "popis": "Kto vyhlasuje."
    },
    {
      "nazev": "Napíšte vyhlásenie",
      "popis": "Konkrétne a pravdivo."
    },
    {
      "nazev": "Podpíšte",
      "popis": "Vlastnoručne."
    }
  ],
  "online": [
    "Úvodná formulácia sa doplní sama",
    "Tipy k formulácii",
    "Stiahnutie v PDF aj vo Worde",
    "Prázdny vzor na ručné vyplnenie"
  ],
  "hodiSe": [
    "úrad alebo škola chce čestné vyhlásenie",
    "potvrdzujete bydlisko alebo bezdlžnosť"
  ],
  "nehodiSe": [
    "inštitúcia má vlastný formulár – použite ten",
    "zákon vyžaduje úradný doklad (napr. výpis z registra trestov)"
  ],
  "po": [
    {
      "nazev": "Podpis",
      "popis": "Vlastnoručne."
    },
    {
      "nazev": "Osvedčenie, ak treba",
      "popis": "Matrika, obecný úrad alebo notár."
    }
  ],
  "faq": [
    {
      "q": "Musí byť podpis osvedčený?",
      "a": "Len ak to príjemca výslovne vyžaduje. Podpíšete až pred úradníkom alebo notárom."
    },
    {
      "q": "Čo ak vyhlásim niečo nepravdivé?",
      "a": "Nepravdivé čestné vyhlásenie môže mať právne následky – od priestupku až po trestný čin v závažných prípadoch."
    },
    {
      "q": "Ukladáte moje údaje?",
      "a": "Nie. Dokument sa skladá priamo vo vašom prehliadači."
    }
  ],
  "zakony": "Zákon všeobecný vzor čestného vyhlásenia nepredpisuje.",
  "souvisejiciPopis": "Ďalšie bežné dokumenty, tiež zadarmo."
},
  vytvorit: {"title": "Vyplniť čestné vyhlásenie online – PDF zadarmo", "description": "Sprievodca čestným vyhlásením. Stiahnite PDF alebo Word zadarmo.", "podnadpis": "Zadarmo · PDF aj Word · zaberie asi 1 minútu"},
};

export default stranka;
