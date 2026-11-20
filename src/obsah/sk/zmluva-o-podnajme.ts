import type { StrankaDokumentu } from '../typy';
import { zmluvaOPodnajme as sablona } from '../../sablony/sk/zmluva-o-podnajme';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Zmluva o podnájme",
  nazevA: "zmluvu o podnájme",
  katalog: {"popis": "Izba alebo celý byt v podnájme – so súhlasom prenajímateľa.", "kategorie": "byvanie", "ilustrace": "protokol", "slova": ["zmluva o podnájme", "podnájom", "podnájom bytu", "izba v podnájme", "súhlas prenajímateľa"]},
  souvisejici: "byvanie",
  landing: {
  "title": "Zmluva o podnájme {rok} – vzor zadarmo (PDF, Word)",
  "description": "Vzor zmluvy o podnájme bytu alebo izby podľa § 719 Občianskeho zákonníka zadarmo: súhlas prenajímateľa, doba, platby, zábezpeka. PDF aj Word.",
  "perex": "Prenajímate izbu alebo celý byt, ktorý sám máte v nájme? Potrebujete písomný súhlas prenajímateľa a jasnú zmluvu s podnájomníkom.",
  "obsahPopis": "Päť častí podľa § 719 Občianskeho zákonníka.",
  "obsah": [
    {
      "nazev": "Zmluvné strany",
      "popis": "Nájomca a podnájomník."
    },
    {
      "nazev": "Predmet podnájmu",
      "popis": "Izba alebo celý byt, písomný súhlas prenajímateľa."
    },
    {
      "nazev": "Doba a skončenie",
      "popis": "Určitá alebo neurčitá doba, výpoveď."
    },
    {
      "nazev": "Platby",
      "popis": "Mesačná platba, zábezpeka."
    },
    {
      "nazev": "Záverečné ustanovenia",
      "popis": "Domový poriadok, písomné zmeny."
    }
  ],
  "kroky": [
    {
      "nazev": "Vyplňte strany",
      "popis": "Nájomca a podnájomník."
    },
    {
      "nazev": "Súhlas",
      "popis": "Dátum písomného súhlasu prenajímateľa."
    },
    {
      "nazev": "Podpíšte",
      "popis": "Dva rovnopisy."
    }
  ],
  "online": [
    "Termíny do kalendára",
    "Suma slovom automaticky",
    "Stiahnutie v PDF aj vo Worde",
    "Prázdny vzor na ručné vyplnenie"
  ],
  "hodiSe": [
    "prenajímate izbu vo svojom nájomnom byte",
    "odchádzate dočasne a byt prenecháte inému"
  ],
  "nehodiSe": [
    "ste vlastník bytu – použite nájomnú zmluvu",
    "prenajímateľ s podnájmom nesúhlasí"
  ],
  "po": [
    {
      "nazev": "Priložte súhlas",
      "popis": "Kópia písomného súhlasu prenajímateľa."
    },
    {
      "nazev": "Protokol",
      "popis": "Pri odovzdaní izby alebo bytu."
    }
  ],
  "faq": [
    {
      "q": "Potrebujem súhlas prenajímateľa?",
      "a": "Áno, písomný. Byt alebo jeho časť možno prenechať do podnájmu len s písomným súhlasom prenajímateľa (§ 719 ods. 1 OZ)."
    },
    {
      "q": "Ako sa podnájom skončí?",
      "a": "Podľa zmluvy; ak sa nič nedohodne, výpoveďou aj bez udania dôvodu. Na dobu určitú uplynutím doby. Náhradný podnájom podnájomníkovi nepatrí."
    },
    {
      "q": "Ukladáte moje údaje?",
      "a": "Nie. Dokument sa skladá priamo vo vašom prehliadači."
    }
  ],
  "zakony": "Vzor vychádza z § 719 zákona č. 40/1964 Zb., Občiansky zákonník.",
  "souvisejiciPopis": "Ďalšie dokumenty k bývaniu."
},
  vytvorit: {"title": "Vyplniť zmluvu o podnájme online – PDF zadarmo", "description": "Sprievodca zmluvou o podnájme. Stiahnite PDF alebo Word zadarmo.", "podnadpis": "Zadarmo · PDF aj Word · zaberie asi 3 minúty"},
};

export default stranka;
