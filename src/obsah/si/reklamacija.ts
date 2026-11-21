import type { StrankaDokumentu } from '../typy';
import { reklamacija as sablona } from '../../sablony/si/reklamacija';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Reklamacija",
  nazevA: "reklamacijo",
  katalog: {"popis": "Obvestilo o neskladnosti blaga.", "kategorie": "vsakdan", "ilustrace": "protokol", "slova": ["reklamacija", "neskladnost blaga", "napaka blaga", "garancija", "jamčevanje"]},
  souvisejici: "vsakdan",
  landing: {
  "title": "Reklamacija {rok} – brezplačen obrazec PDF",
  "description": "Brezplačen obrazec za reklamacijo: obvestilo o neskladnosti blaga v dveh mesecih od odkritja, popravilo ali zamenjava v 30 dneh, odgovornost dve leti. PDF in Word.",
  "perex": "Se je blago pokvarilo ali ne deluje, kot bi moralo? Pisno obvestilo trgovcu z zahtevkom.",
  "obsahPopis": "Pisna reklamacija z zahtevkom.",
  "obsah": [
    {
      "nazev": "Potrošnik in trgovec",
      "popis": "Kdo reklamira."
    },
    {
      "nazev": "Reklamacija",
      "popis": "Blago, napaka, zahtevek in priloga."
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
    "Izbira zahtevka"
  ],
  "hodiSe": [
    "ima kupljeno blago napako",
    "trgovec noče rešiti okvare"
  ],
  "nehodiSe": [
    "želite le vrniti brezhibno blago, kupljeno na spletu – uporabite odstop od pogodbe"
  ],
  "po": [
    {
      "nazev": "Oddaja",
      "popis": "S potrdilom o prejemu."
    },
    {
      "nazev": "Rok",
      "popis": "Popravilo ali zamenjava v razumnem roku, najpozneje 30 dni."
    }
  ],
  "faq": [
    {
      "q": "Koliko je rok za reklamacijo?",
      "a": "Trgovca obvestite v dveh mesecih od odkritja neskladnosti; trgovec odgovarja za neskladnosti, ki se pokažejo v dveh letih od izročitve."
    },
    {
      "q": "Kaj lahko zahtevam?",
      "a": "Najprej brezplačno popravilo ali zamenjavo; če to ni mogoče, znižanje kupnine ali odstop od pogodbe. V 30 dneh od izročitve lahko blago zavrnete."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Obrazec temelji na Zakonu o varstvu potrošnikov (ZVPot-1).",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite reklamacijo na spletu – PDF brezplačno", "description": "Pisna reklamacija zaradi neskladnega blaga. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;
