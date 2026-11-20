import type { StrankaDokumentu } from '../typy';
import { sporazumniRaskidNajma as sablona } from '../../sablony/hr/sporazumni-raskid-ugovora-o-najmu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Sporazumni raskid ugovora o najmu",
  nazevA: "sporazum o raskidu najma",
  katalog: {"popis": "Kraj najma dogovorom, bez otkaznog roka.", "kategorie": "stan", "ilustrace": "protokol", "slova": ["sporazumni raskid najma", "raskid ugovora o najmu", "prestanak najma", "iseljenje dogovorom", "povrat jamčevine"]},
  souvisejici: "stan",
  landing: {
  "title": "Sporazumni raskid ugovora o najmu stana {rok} – obrazac PDF",
  "description": "Besplatan sporazum o raskidu ugovora o najmu stana: dan prestanka bez otkaznog roka, predaja stana, primopredajni zapisnik i povrat jamčevine. PDF i Word.",
  "perex": "Najmodavac i najmoprimac se slažu? Sporazumom najam prestaje kada se dogovorite – bez čekanja tri mjeseca.",
  "obsahPopis": "Pet članaka sporazuma.",
  "obsah": [
    {
      "nazev": "Ugovorne strane",
      "popis": "Najmodavac i najmoprimac."
    },
    {
      "nazev": "Raskid",
      "popis": "Dan prestanka najma."
    },
    {
      "nazev": "Predaja stana",
      "popis": "Ključevi i zapisnik."
    },
    {
      "nazev": "Jamčevina",
      "popis": "Iznos i rok povrata."
    },
    {
      "nazev": "Završne odredbe",
      "popis": "Bez daljnjih potraživanja."
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
    "PDF i Word"
  ],
  "hodiSe": [
    "obje strane žele raniji kraj najma"
  ],
  "nehodiSe": [
    "druga strana se ne slaže – koristite otkaz"
  ],
  "po": [
    {
      "nazev": "Primopredaja",
      "popis": "Zapisnik sa stanjem brojila."
    }
  ],
  "faq": [
    {
      "q": "Treba li poštovati otkazni rok?",
      "a": "Ne – kod sporazumnog raskida strane same odrede dan prestanka."
    },
    {
      "q": "Spremate li moje podatke?",
      "a": "Ne. Dokument nastaje izravno u vašem pregledniku i podaci se ne šalju na poslužitelj."
    }
  ],
  "zakony": "Obrazac se temelji na Zakonu o najmu stanova i Zakonu o obveznim odnosima.",
  "souvisejiciPopis": "Ostali dokumenti, također besplatno."
},
  vytvorit: {"title": "Ispunite sporazumni raskid najma online – PDF besplatno", "description": "Sporazum o raskidu najma stana. PDF ili Word besplatno.", "podnadpis": "Besplatno · rezultat u PDF-u i Wordu · traje nekoliko minuta"},
};

export default stranka;
