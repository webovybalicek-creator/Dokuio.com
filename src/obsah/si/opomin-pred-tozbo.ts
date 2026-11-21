import type { StrankaDokumentu } from '../typy';
import { opominPredTozbo as sablona } from '../../sablony/si/opomin-pred-tozbo';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Opomin pred tožbo",
  nazevA: "opomin pred tožbo",
  katalog: {"popis": "Poziv dolžniku k plačilu z rokom.", "kategorie": "denar", "ilustrace": "dluh", "slova": ["opomin pred tožbo", "opomin za plačilo", "dolžnik ne plača", "zamudne obresti", "izterjava"]},
  souvisejici: "denar",
  landing: {
  "title": "Opomin pred tožbo {rok} – brezplačen obrazec PDF",
  "description": "Brezplačen opomin pred tožbo: dolgovani znesek z besedo, temelj dolga, rok za plačilo, IBAN in opozorilo na zamudne obresti in izvršbo. PDF in Word.",
  "perex": "Dolžnik ne plača? Pisni opomin z jasnim rokom pogosto zadošča – če ne, je dokaz, da ste ga pozvali.",
  "obsahPopis": "Kratek opomin v enem delu.",
  "obsah": [
    {
      "nazev": "Opomin",
      "popis": "Dolg, temelj, rok, račun in opozorilo."
    }
  ],
  "kroky": [
    {
      "nazev": "Izpolnite podatke",
      "popis": "Česar ne veste, preskočite – ostala bo črta za izpolnitev na roko."
    },
    {
      "nazev": "Preverite besedilo",
      "popis": "Vsak odstavek lahko uredite."
    },
    {
      "nazev": "Prenesite in podpišite",
      "popis": "PDF ali Word brezplačno."
    }
  ],
  "online": [
    "Znesek z besedo samodejno",
    "PDF in Word"
  ],
  "hodiSe": [
    "vam nekdo dolguje in ne plača",
    "želite dolžnika pred sodiščem še enkrat pozvati"
  ],
  "nehodiSe": [
    "dolg je zastaran – posvetujte se z odvetnikom"
  ],
  "po": [
    {
      "nazev": "Pošiljanje",
      "popis": "Priporočeno s povratnico."
    },
    {
      "nazev": "Nato",
      "popis": "Predlog za izvršbo na podlagi verodostojne listine ali tožba."
    }
  ],
  "faq": [
    {
      "q": "Ali je opomin obvezen?",
      "a": "Ni vedno, je pa dober dokaz in pogosto pripelje do plačila brez sodišča."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Obligacijskem zakoniku (zamuda, zamudne obresti).",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite opomin pred tožbo na spletu – PDF brezplačno", "description": "Opomin dolžniku z rokom za plačilo. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;
