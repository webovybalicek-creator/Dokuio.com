import type { StrankaDokumentu } from '../typy';
import { soglasjeZaPotovanjeOtroka as sablona } from '../../sablony/si/soglasje-za-potovanje-otroka';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Soglasje za potovanje otroka",
  nazevA: "soglasje za potovanje otroka",
  katalog: {"popis": "Otrok potuje brez enega ali obeh staršev.", "kategorie": "druzina", "ilustrace": "plnamoc", "slova": ["soglasje za potovanje otroka", "potovanje mladoletnika", "soglasje staršev", "otrok v tujino", "izjava staršev"]},
  souvisejici: "druzina",
  landing: {
  "title": "Soglasje za potovanje otroka {rok} – brezplačen obrazec PDF",
  "description": "Brezplačno soglasje staršev za potovanje mladoletnega otroka v tujino: spremljevalec, država, datumi in kontakt. Nasvet o overitvi podpisa. PDF in Word.",
  "perex": "Ko otrok potuje brez enega ali obeh staršev – z drugim staršem, starimi starši ali šolo.",
  "obsahPopis": "Kratko soglasje.",
  "obsah": [
    {
      "nazev": "Soglasje",
      "popis": "Starša, otrok, spremljevalec, država, datumi."
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
    "PDF in Word",
    "Tudi v angleščini na zahtevo"
  ],
  "hodiSe": [
    "otrok potuje v tujino brez vas",
    "otrok potuje s starimi starši ali šolo"
  ],
  "nehodiSe": [
    "se otrok seli v tujino – potrebno je soglasje drugega starša ali odločba sodišča"
  ],
  "po": [
    {
      "nazev": "Overitev",
      "popis": "Podpis overite na upravni enoti ali pri notarju."
    },
    {
      "nazev": "S seboj",
      "popis": "Otrokov potni list ali osebna izkaznica."
    }
  ],
  "faq": [
    {
      "q": "Ali je soglasje obvezno?",
      "a": "Slovenija ga ne predpisuje za vse primere, vsaka država pa odloča sama – mejna policija ali letalski prevoznik ga lahko zahteva."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na informacijah portala Your Europe o potovanju mladoletnikov.",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite soglasje za potovanje otroka na spletu – PDF brezplačno", "description": "Soglasje staršev za potovanje otroka. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;
