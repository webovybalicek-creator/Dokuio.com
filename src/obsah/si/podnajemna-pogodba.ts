import type { StrankaDokumentu } from '../typy';
import { podnajemnaPogodba as sablona } from '../../sablony/si/podnajemna-pogodba';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Podnajemna pogodba",
  nazevA: "podnajemno pogodbo",
  katalog: {"popis": "Soba ali stanovanje s soglasjem lastnika.", "kategorie": "stanovanje", "ilustrace": "protokol", "slova": ["podnajemna pogodba", "podnajem sobe", "podnajemnik", "soglasje lastnika", "oddaja sobe"]},
  souvisejici: "stanovanje",
  landing: {
  "title": "Podnajemna pogodba {rok} – brezplačen obrazec PDF",
  "description": "Brezplačna podnajemna pogodba za sobo ali stanovanje: soglasje lastnika, podnajemnina, varščina, stroški in konec podnajema. PDF in Word.",
  "perex": "Za oddajo sobe ali dela stanovanja naprej – le s soglasjem lastnika.",
  "obsahPopis": "Osem členov po SZ-1 in OZ.",
  "obsah": [
    {
      "nazev": "Stranke",
      "popis": "Najemnik, podnajemnik, soglasje lastnika."
    },
    {
      "nazev": "Prostor",
      "popis": "Soba ali stanovanje."
    },
    {
      "nazev": "Podnajemnina",
      "popis": "Znesek in stroški."
    },
    {
      "nazev": "Trajanje",
      "popis": "Do kdaj in konec najema."
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
    "PDF in Word"
  ],
  "hodiSe": [
    "oddajate sobo v najemnem stanovanju",
    "imate soglasje lastnika"
  ],
  "nehodiSe": [
    "lastnik ne soglaša"
  ],
  "po": [
    {
      "nazev": "Soglasje",
      "popis": "Pisno, priložite ga pogodbi."
    }
  ],
  "faq": [
    {
      "q": "Kaj če lastnik ne soglaša?",
      "a": "Podnajem brez soglasja je krivdni razlog za odpoved najemne pogodbe."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Stanovanjskem zakonu (SZ-1) in Obligacijskem zakoniku.",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite podnajemno pogodbo na spletu – PDF brezplačno", "description": "Podnajemna pogodba s soglasjem lastnika. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;
