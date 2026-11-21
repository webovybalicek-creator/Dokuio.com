import type { StrankaDokumentu } from '../typy';
import { izjava as sablona } from '../../sablony/si/izjava';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: "Izjava",
  nazevA: "izjavo",
  katalog: {"popis": "Pisna izjava za urad ali banko.", "kategorie": "vsakdan", "ilustrace": "plnamoc", "slova": ["izjava", "pisna izjava", "izjava pod kazensko in materialno odgovornostjo", "vzorec izjave", "soglasje"]},
  souvisejici: "vsakdan",
  landing: {
  "title": "Izjava {rok} – brezplačen vzorec PDF",
  "description": "Brezplačen vzorec pisne izjave: kdo izjavlja, kaj in za koga – za urad, banko, šolo ali delodajalca. Z možnostjo izjave pod materialno odgovornostjo. PDF in Word.",
  "perex": "Ko potrebujete pisno izjavo – za urad, banko, šolo ali delodajalca.",
  "obsahPopis": "Kratka izjava.",
  "obsah": [
    {
      "nazev": "Izjava",
      "popis": "Izjavitelj, vsebina, namen."
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
    "urad ali ustanova zahteva pisno izjavo"
  ],
  "nehodiSe": [
    "ustanova ima svoj obrazec – uporabite tistega"
  ],
  "po": [
    {
      "nazev": "Overitev",
      "popis": "Če jo zahtevajo – na upravni enoti ali pri notarju."
    }
  ],
  "faq": [
    {
      "q": "Ali je izjavo treba overiti?",
      "a": "Le če to zahteva ustanova, kateri jo oddajate."
    },
    {
      "q": "Ali shranjujete moje podatke?",
      "a": "Ne. Dokument nastane neposredno v vašem brskalniku, podatki se ne pošiljajo na strežnik."
    }
  ],
  "zakony": "Splošen vzorec pisne izjave.",
  "souvisejiciPopis": "Drugi dokumenti, prav tako brezplačno."
},
  vytvorit: {"title": "Izpolnite izjavo na spletu – PDF brezplačno", "description": "Pisna izjava za urad ali banko. PDF ali Word brezplačno.", "podnadpis": "Brezplačno · rezultat v PDF in Wordu · traja nekaj minut"},
};

export default stranka;
