import type { StrankaDokumentu } from '../typy';
import { ugovorONajmuStana as sablona } from '../../sablony/hr/ugovor-o-najmu-stana';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Ugovor o najmu stana",
  nazevA: "ugovor o najmu stana",
  katalog: {"popis": "Najam stana s jamčevinom.", "kategorie": "stan", "ilustrace": "protokol", "slova": ["ugovor o najmu stana", "najam stana", "iznajmljivanje stana", "jamčevina", "najamnina"]},
  souvisejici: "stan",
  landing: {
  "title": "Ugovor o najmu stana {rok} – besplatni obrazac PDF",
  "description": "Besplatan ugovor o najmu stana prema Zakonu o najmu stanova: pisani oblik, najamnina, režije, jamčevina, otkaz i otkazni rok od tri mjeseca. PDF i Word.",
  "perex": "Za iznajmljivanje stana uz slobodno ugovorenu najamninu. S jamčevinom, režijama i pravilima otkaza.",
  "obsahPopis": "Osam članaka prema Zakonu o najmu stanova.",
  "obsah": [
    {
      "nazev": "Ugovorne strane",
      "popis": "Najmodavac i najmoprimac."
    },
    {
      "nazev": "Predmet najma",
      "popis": "Stan i oprema."
    },
    {
      "nazev": "Trajanje",
      "popis": "Određeno ili neodređeno."
    },
    {
      "nazev": "Najamnina i režije",
      "popis": "Iznos i rok plaćanja."
    },
    {
      "nazev": "Jamčevina",
      "popis": "Iznos i povrat."
    },
    {
      "nazev": "Prestanak najma",
      "popis": "Otkaz i iseljenje."
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
    "Primopredajni zapisnik preuzima podatke",
    "PDF i Word"
  ],
  "hodiSe": [
    "iznajmljujete ili unajmljujete stan",
    "želite pisano imati najamninu i jamčevinu"
  ],
  "nehodiSe": [
    "iznajmljujete turistima – to je ugostiteljska djelatnost",
    "iznajmljujete poslovni prostor – to je zakup"
  ],
  "po": [
    {
      "nazev": "Primopredaja",
      "popis": "Zapisnik sa stanjem brojila."
    },
    {
      "nazev": "Porez",
      "popis": "Najmodavac prijavljuje prihod od najma Poreznoj upravi."
    }
  ],
  "faq": [
    {
      "q": "Mora li ugovor biti pisan?",
      "a": "Da, ugovor o najmu stana sklapa se u pisanom obliku."
    },
    {
      "q": "Koliki je otkazni rok?",
      "a": "Najmodavac otkazuje samo iz zakonskih razloga, s otkaznim rokom od tri mjeseca; najmoprimac najam na neodređeno otkazuje najmanje tri mjeseca prije iseljenja."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o najmu stanova i Zakonu o obveznim odnosima.",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite ugovor o najmu stana online – PDF besplatno", "description": "Ugovor o najmu stana s jamčevinom. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;
