import type { StrankaDokumentu } from '../typy';
import { uznanieDlhu as sablona } from '../../sablony/sk/uznanie-dlhu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Uznanie dlhu",
  nazevA: "uznanie dlhu",
  katalog: {
  "popis": "Písomné potvrdenie dlhu, aj so splátkami.",
  "kategorie": "penize",
  "ilustrace": "dluh",
  "slova": [
    "uznanie dlhu",
    "dlh",
    "splátky",
    "splátkový kalendár",
    "dlžník"
  ]
},
  souvisejici: "penize",
  landing: {
  "title": "Uznanie dlhu {rok} – vzor zadarmo v PDF",
  "description": "Bezplatné uznanie dlhu podľa § 558 OZ: dôvod a výška dlhu, splatenie naraz alebo v splátkach so splátkovým kalendárom.",
  "perex": "Dlžník písomne potvrdí, koľko a za čo dlhuje a ako zaplatí. Premlčacia doba sa predĺži na 10 rokov.",
  "obsahPopis": "Uznanie so spôsobom splatenia.",
  "obsah": [
    {
      "nazev": "Strany",
      "popis": "Dlžník a veriteľ."
    },
    {
      "nazev": "Dlh",
      "popis": "Dôvod a výška."
    },
    {
      "nazev": "Splatenie",
      "popis": "Naraz alebo v splátkach."
    }
  ],
  "kroky": [
    {
      "nazev": "Vyplniť",
      "popis": "Sumu slovom doplníme sami."
    },
    {
      "nazev": "Podpísať",
      "popis": "Podpis dlžníka je nevyhnutný."
    },
    {
      "nazev": "Uschovať",
      "popis": "Originál si nechá veriteľ."
    }
  ],
  "online": [
    "Vyplnenie s vysvetlením každého poľa",
    "Podpis na obrazovke",
    "Stiahnutie v PDF aj Worde, alebo poslanie na e-mail",
    "Splátkový kalendár a splátky v kalendári"
  ],
  "hodiSe": [
    "Nesplatená pôžička medzi známymi",
    "Dohoda o splátkach za škodu"
  ],
  "nehodiSe": [
    "Dlhy voči bankám a inkasným spoločnostiam"
  ],
  "po": [
    {
      "nazev": "Splátky",
      "popis": "Platby v hotovosti si dajte potvrdiť."
    }
  ],
  "faq": [
    {
      "q": "Musí byť uznanie písomné?",
      "a": "Áno, inak je neplatné (§ 558 OZ)."
    },
    {
      "q": "Čo sa stane s premlčaním?",
      "a": "Od uznania plynie nová premlčacia doba 10 rokov (§ 110 OZ)."
    },
    {
      "q": "Ukladáte moje údaje?",
      "a": "Nie. Dokument vzniká iba vo vašom prehliadači."
    }
  ],
  "zakony": "Vzor vychádza z § 558 a § 110 Občianskeho zákonníka.",
  "souvisejiciPopis": "Ďalšie dokumenty, tiež zadarmo."
},
  vytvorit: {
  "title": "Uznanie dlhu online – PDF zadarmo",
  "description": "Uznanie dlhu so splátkovým kalendárom. PDF alebo Word zadarmo.",
  "podnadpis": "Zadarmo · výsledok v PDF aj Worde · trvá asi 2 minúty"
},
};

export default stranka;
