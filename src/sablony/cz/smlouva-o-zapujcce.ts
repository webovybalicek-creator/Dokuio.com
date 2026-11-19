/**
 * Smlouva o zápůjčce peněz – Česko, mezi soukromými osobami.
 * Podle § 2390 a násl. zákona č. 89/2012 Sb. (občanský zákoník). Záměrně bez smluvních pokut a rozhodčích doložek;
 * při prodlení platí zákonný úrok z prodlení. Nejde o spotřebitelský úvěr (zapůjčitel nepodniká).
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { castkaSlovy } from '../dokument';

export const smlouvaOZapujcce: Sablona = {
  kod: 'CZ-ZAPUJCKA',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Smlouva o zápůjčce',
  podnadpis: 'uzavřená podle § 2390 a násl. zákona č. 89/2012 Sb., občanský zákoník',
  souborPdf: 'smlouva-o-zapujcce',
  paticka: 'Vytvořeno zdarma · šablona CZ-ZAPUJCKA v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'zapůjčitel', vpravo: 'vydlužitel' },
  coDal: [
    'Vytiskněte smlouvu dvakrát, obě strany podepíší oba výtisky.',
    'Peníze předejte převodem, nebo v hotovosti při podpisu – pak smlouva slouží i jako potvrzení o převzetí.',
    'Každou vrácenou splátku v hotovosti si nechte potvrdit (hodí se naše potvrzení o převzetí peněz).',
    'Smlouvu si schovejte, dokud nebude vše splaceno.',
  ],

  overeno: '2026-11-19',
  kontrola: [
      "Totožnost druhé strany podle občanského průkazu. Číslo průkazu si můžete ověřit v databázi [Neplatné doklady Ministerstva vnitra](https://mv.gov.cz/aplikace-neplatne-doklady.aspx).",
      "Peníze raději převodem – výpis z účtu je nejsilnější důkaz, že jste je půjčili.",
      "Termín vrácení napsaný ve smlouvě – bez něj se zápůjčka vrací až po výpovědi.",
      "Úrok přiměřený; lichevní úrok je neplatný. Přijaté úroky jsou zdanitelný příjem zapůjčitele.",
      "Každou splátku v hotovosti si nechte písemně potvrdit (potvrzení o převzetí peněz).",
      "Neplatí-li dlužník, nepromeškejte promlčení (obecně 3 roky) – pomůže písemné uznání dluhu."
  ],
  zdroje: [
      {
          "nazev": "Občanský zákoník č. 89/2012 Sb. (e-Sbírka)",
          "url": "https://www.e-sbirka.cz/sb/2012/89"
      }
  ],

  kroky: [
    {
      id: 'strany',
      nazev: 'Kdo půjčuje a kdo si půjčuje',
      popis: 'Zapůjčitel peníze půjčuje, vydlužitel si je půjčuje a vrací.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Zapůjčitel – jméno a příjmení', napoveda: 'Kdo peníze půjčuje. Celé jméno jako v občanském průkazu.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Datum narození zapůjčitele', napoveda: 'Stačí datum narození, rodné číslo psát nemusíte.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa zapůjčitele', napoveda: 'Adresa trvalého bydliště z občanského průkazu.', placeholder: 'např. Nerudova 12, 251 01 Říčany', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Vydlužitel – jméno a příjmení', napoveda: 'Kdo si peníze půjčuje a bude je vracet.', placeholder: 'např. Petra Svobodová', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Datum narození vydlužitele', napoveda: 'Podle občanského průkazu. Pomůže vydlužitele jednoznačně určit, kdyby se dluh musel vymáhat.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa vydlužitele', napoveda: 'Adresa trvalého bydliště z občanského průkazu.', placeholder: 'např. Masarykova 5, 602 00 Brno', sirka: 46 },
      ],
    },
    {
      id: 'castka',
      nazev: 'Částka a předání',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Půjčená částka (Kč)', napoveda: 'Celá částka, kterou zapůjčitel předá. Slovy ji doplníme sami.', placeholder: 'např. 50000', sirka: 14, polovina: true },
        {
          id: 'predani',
          typ: 'volba',
          popis: 'Jak se peníze předají',
          napoveda: 'Převod na účet je nejlépe doložitelný. U hotovosti vydlužitel podpisem smlouvy potvrdí, že peníze převzal – podepisujte až s penězi v ruce.',
          moznosti: [
            { hodnota: 'hotove', popis: 'V hotovosti při podpisu smlouvy' },
            { hodnota: 'prevod', popis: 'Převodem na účet vydlužitele' },
          ],
        },
        { id: 'ucet_k', typ: 'text', popis: 'Číslo účtu vydlužitele', napoveda: 'Účet, na který zapůjčitel peníze pošle.', placeholder: '123456789/0100', sirka: 24, zobrazitKdyz: { pole: 'predani', je: 'prevod' } },
        { id: 'predani_do', typ: 'datum', popis: 'Poslat nejpozději do', napoveda: 'Do kdy zapůjčitel peníze odešle.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'predani', je: 'prevod' } },
      ],
    },
    {
      id: 'uroky',
      nazev: 'Úrok',
      pole: [
        {
          id: 'urok',
          typ: 'volba',
          popis: 'Platí se úrok?',
          napoveda: 'Mezi známými se často půjčuje bez úroku. Úrok musí být přiměřený – lichvářský úrok je neplatný. Úroky jsou pro zapůjčitele zdanitelný příjem.',
          moznosti: [
            { hodnota: 'ne', popis: 'Bez úroku' },
            { hodnota: 'ano', popis: 'S úrokem' },
          ],
        },
        { id: 'urok_sazba', typ: 'cislo', popis: 'Úroková sazba (% ročně)', napoveda: 'Roční sazba, např. 5. Platí se spolu se splátkami jistiny.', placeholder: 'např. 5', jednotka: '% ročně', sirka: 8, polovina: true, zobrazitKdyz: { pole: 'urok', je: 'ano' } },
      ],
    },
    {
      id: 'splaceni',
      nazev: 'Vrácení',
      pole: [
        {
          id: 'splaceni',
          typ: 'volba',
          popis: 'Jak se peníze vrátí',
          napoveda: 'Bez dohodnutého termínu by se zápůjčka vracela až po výpovědi. Je lepší termín napsat.',
          moznosti: [
            { hodnota: 'naraz', popis: 'Najednou do určitého data' },
            { hodnota: 'splatky', popis: 'V pravidelných měsíčních splátkách' },
          ],
        },
        { id: 'vratit_do', typ: 'datum', popis: 'Vrátit nejpozději do', napoveda: 'Poslední den, kdy musí být celá částka vrácená.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'naraz' } },
        { id: 'splatka', typ: 'castka', popis: 'Výše měsíční splátky (Kč)', napoveda: 'Kolik vydlužitel zaplatí každý měsíc. Poslední splátka může být nižší.', placeholder: 'např. 5000', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'splatka_den', typ: 'cislo', popis: 'Den v měsíci', napoveda: 'Do kterého dne v měsíci má splátka přijít, např. 15.', placeholder: 'např. 15', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'prvni_splatka', typ: 'datum', popis: 'První splátka v měsíci', napoveda: 'Vyberte libovolný den v měsíci, kdy se začne splácet.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        {
          id: 'vraceni_zpusob',
          typ: 'volba',
          popis: 'Kam se peníze vracejí',
          napoveda: 'Převod je nejlépe doložitelný. Hotovost si vždy nechte písemně potvrdit.',
          moznosti: [
            { hodnota: 'ucet', popis: 'Na účet zapůjčitele' },
            { hodnota: 'hotove', popis: 'V hotovosti proti písemnému potvrzení' },
          ],
        },
        { id: 'ucet_p', typ: 'text', popis: 'Číslo účtu zapůjčitele', napoveda: 'Účet, na který se budou peníze vracet.', placeholder: '123456789/0100', sirka: 24, zobrazitKdyz: { pole: 'vraceni_zpusob', je: 'ucet' } },
        { id: 'misto', typ: 'text', popis: 'Místo podpisu (obec)', napoveda: 'Předvyplníme podle adresy zapůjčitele, klidně přepište.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum podpisu', napoveda: 'Předvyplnili jsme dnešek. Pokud chcete datum dopsat rukou, pole vymažte.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    castka_slovy: (d) => castkaSlovy(d.castka),
    prvni_mesic: (d) => {
      const v = typeof d.prvni_splatka === 'string' ? d.prvni_splatka : '';
      const m = /^(\d{4})-(\d{2})/.exec(v);
      return m ? `${Number(m[2])}/${m[1]}` : '';
    },
  },

  clanky: [
    {
      nadpis: 'Smluvní strany',
      vysvetleni: 'Kdo peníze půjčuje a kdo je vrací. Přesné údaje jsou důležité, kdyby se dluh musel vymáhat.',
      odstavce: [
        '**Zapůjčitel:** {{p_jmeno}}, datum narození {{p_narozeni}}, trvale bytem {{p_adresa}} (dále jen „zapůjčitel“)',
        '**Vydlužitel:** {{k_jmeno}}, datum narození {{k_narozeni}}, trvale bytem {{k_adresa}} (dále jen „vydlužitel“)',
      ],
    },
    {
      nadpis: 'Předmět zápůjčky',
      vysvetleni: 'Kolik se půjčuje a jak se peníze předají. Vydlužitel se zavazuje vrátit stejnou částku.',
      odstavce: [
        'Zapůjčitel přenechává vydlužiteli peněžní částku {{castka}} (slovy: {{castka_slovy}}) a vydlužitel se zavazuje tuto částku zapůjčiteli vrátit za podmínek této smlouvy.',
        {
          volba: 'predani',
          uvodVzor: 'Předání peněz (zaškrtněte jednu možnost):',
          moznosti: {
            hotove: 'Zapůjčitel předal vydlužiteli celou částku v hotovosti při podpisu této smlouvy. Vydlužitel svým podpisem potvrzuje, že ji převzal.',
            prevod: 'Zapůjčitel převede částku na účet vydlužitele č. {{ucet_k}} nejpozději do {{predani_do}}.',
          },
        },
      ],
    },
    {
      nadpis: 'Úrok',
      vysvetleni: 'Zda vydlužitel platí za půjčení něco navíc. Bez úroku vrací přesně půjčenou částku.',
      odstavce: [
        {
          volba: 'urok',
          uvodVzor: 'Úrok (zaškrtněte jednu možnost):',
          moznosti: {
            ne: 'Zápůjčka je bezúročná.',
            ano: 'Vydlužitel zaplatí z dosud nesplacené částky úrok ve výši {{urok_sazba}}. Úrok je splatný spolu se splátkami, nejpozději s poslední z nich.',
          },
        },
      ],
    },
    {
      nadpis: 'Vrácení zápůjčky',
      vysvetleni: 'Kdy a jak se peníze vracejí. Kdo vrátí dřív, smí; kdo nezaplatí včas, platí zákonný úrok z prodlení.',
      odstavce: [
        {
          volba: 'splaceni',
          uvodVzor: 'Způsob vrácení (zaškrtněte jednu možnost):',
          moznosti: {
            naraz: 'Vydlužitel vrátí celou částku najednou nejpozději do {{vratit_do}}.',
            splatky: 'Vydlužitel bude částku vracet v pravidelných měsíčních splátkách ve výši {{splatka}}, splatných vždy do {{splatka_den}}. dne v měsíci, poprvé v měsíci {{prvni_mesic}}, až do úplného vrácení. Poslední splátka může být nižší.',
          },
        },
        {
          volba: 'vraceni_zpusob',
          uvodVzor: 'Platby (zaškrtněte jednu možnost):',
          moznosti: {
            ucet: 'Vydlužitel bude platit na účet zapůjčitele č. {{ucet_p}}. Platba je zaplacena připsáním na tento účet.',
            hotove: 'Vydlužitel bude platit v hotovosti; zapůjčitel mu každou přijatou platbu písemně potvrdí.',
          },
        },
        'Vydlužitel může zápůjčku vrátit i dříve, celou nebo zčásti.',
        {
          volba: 'splaceni',
          kdyz: { pole: 'splaceni', je: 'splatky' },
          uvodVzor: 'Jde-li o splátky:',
          moznosti: {
            splatky: 'Pokud se vydlužitel dostane do prodlení s úhradou některé splátky o více než 30 dnů, může zapůjčitel písemně požadovat vrácení celé dosud nesplacené částky do 30 dnů od doručení výzvy.',
          },
        },
      ],
    },
    {
      nadpis: 'Závěrečná ustanovení',
      vysvetleni: 'Běžné formální body: kolik výtisků a odkdy smlouva platí.',
      odstavce: [
        'Práva a povinnosti smluvních stran neupravené touto smlouvou se řídí zákonem č. 89/2012 Sb., občanský zákoník, zejména § 2390 a násl.',
        'Smlouva je vyhotovena ve dvou stejnopisech, z nichž každá smluvní strana obdrží jeden.',
        'Smlouva nabývá platnosti a účinnosti dnem podpisu oběma smluvními stranami.',
        'Smluvní strany prohlašují, že si smlouvu přečetly, jejímu obsahu rozumějí a na důkaz souhlasu ji podepisují.',
      ],
    },
  ],
};
