import type { StrankaDokumentu } from '../typy';
import { potvrdaOPrimitkuNovca as sablona } from '../../sablony/hr/potvrda-o-primitku-novca';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Potvrda o primitku novca",
  nazevA: "potvrdu o primitku novca",
  katalog: {"popis": "Priznanica za primljenu gotovinu.", "kategorie": "novac", "ilustrace": "penize", "slova": ["potvrda o primitku novca", "priznanica", "primitak gotovine", "potvrda o plaćanju", "kapara"]},
  souvisejici: "novac",
  landing: {
  "title": "Potvrda o primitku novca {rok} – besplatni obrazac PDF",
  "description": "Besplatna potvrda o primitku novca (priznanica): iznos brojkama i slovima, svrha plaćanja, platitelj i primatelj. Jednostavan dokaz o gotovini. PDF i Word.",
  "perex": "Jednostavan dokaz da je gotovina promijenila vlasnika. Iznos slovima dopisujemo sami.",
  "obsahPopis": "Kratka potvrda sa svrhom plaćanja.",
  "obsah": [
    {
      "nazev": "Potvrda",
      "popis": "Tko je od koga primio koliko i zašto."
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
    "Iznos slovima automatski",
    "Potpis na zaslonu",
    "PDF i Word"
  ],
  "hodiSe": [
    "plaćate gotovinom automobil ili stvar",
    "predajete jamčevinu, kaparu ili obrok"
  ],
  "nehodiSe": [
    "plaćate na račun – dokaz je potvrda banke"
  ],
  "po": [
    {
      "nazev": "Primjerak",
      "popis": "Svaka strana čuva jedan."
    }
  ],
  "faq": [
    {
      "q": "Moram li dati potvrdu?",
      "a": "Tko plaća, može zahtijevati potvrdu (priznanicu) od onoga tko novac prima."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o obveznim odnosima.",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite potvrdu o primitku novca online – PDF besplatno", "description": "Potvrda o primitku gotovine s iznosom slovima. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;
