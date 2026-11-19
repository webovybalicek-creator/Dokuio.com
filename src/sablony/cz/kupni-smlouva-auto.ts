/**
 * Kupní smlouva na motorové vozidlo – Česko, prodej mezi soukromými osobami.
 * Text podle § 2079 a násl. zákona č. 89/2012 Sb. (občanský zákoník); přepis podle zákona č. 56/2001 Sb.
 * Záměrně bez „chytrých“ doložek (smluvní pokuty, rozhodčí doložky, vyloučení odpovědnosti za vady).
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { castkaSlovy } from '../dokument';

export const kupniSmlouvaAuto: Sablona = {
  kod: 'CZ-KUPNI-AUTO',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  zeme: 'cz',
  jazyk: 'cs',
  nazev: 'Kupní smlouva na motorové vozidlo',
  podnadpis: 'uzavřená podle § 2079 a násl. zákona č. 89/2012 Sb., občanský zákoník',
  souborPdf: 'kupni-smlouva-auto',
  paticka: 'Vytvořeno zdarma na dokuio.com · šablona CZ-KUPNI-AUTO v1.0 · vzor k vyplnění, nejde o právní poradenství',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'prodávající', vpravo: 'kupující' },

  kroky: [
    {
      id: 'strany',
      nazev: 'Prodávající a kupující',
      popis: 'Údaje kupujícího často ještě neznáte. Nechte je prázdné, ve smlouvě z nich budou linky k ručnímu doplnění.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Prodávající – jméno a příjmení', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Datum narození', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa trvalého bydliště', sirka: 46, placeholder: 'Ulice a číslo, PSČ obec' },
        { id: 'k_jmeno', typ: 'text', popis: 'Kupující – jméno a příjmení', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Datum narození', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa trvalého bydliště', sirka: 46, placeholder: 'Ulice a číslo, PSČ obec' },
      ],
    },
    {
      id: 'vozidlo',
      nazev: 'Vozidlo',
      popis: 'Údaje opište z osvědčení o registraci vozidla (malého technického průkazu).',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Tovární značka a typ', placeholder: 'např. Škoda Octavia Combi', sirka: 32 },
        {
          id: 'vin',
          typ: 'vin',
          popis: 'VIN – identifikační číslo vozidla',
          napoveda: '17 znaků bez písmen I, O a Q. V osvědčení o registraci je v kolonce E.',
          sirka: 24,
        },
        { id: 'spz', typ: 'text', popis: 'Registrační značka (SPZ)', sirka: 12, polovina: true },
        { id: 'rok', typ: 'text', popis: 'Rok výroby', sirka: 8, polovina: true },
        { id: 'orv', typ: 'text', popis: 'Číslo osvědčení o registraci', sirka: 14, polovina: true },
        {
          id: 'tp',
          typ: 'text',
          popis: 'Číslo technického průkazu',
          napoveda: 'Velký technický průkaz mají jen starší vozy. Pokud ho nemáte, nechte prázdné.',
          sirka: 14,
          polovina: true,
        },
        { id: 'barva', typ: 'text', popis: 'Barva', sirka: 14, polovina: true },
        { id: 'km', typ: 'cislo', popis: 'Stav tachometru', jednotka: 'km', sirka: 12, polovina: true },
      ],
    },
    {
      id: 'stav',
      nazev: 'Stav vozidla',
      popis: 'Známé vady popište pravdivě. Na vady, o kterých kupující věděl, se později reklamace nevztahuje.',
      pole: [
        {
          id: 'vady',
          typ: 'volba',
          popis: 'Vady vozidla',
          moznosti: [
            { hodnota: 'bez', popis: 'Prodávajícímu nejsou známy žádné vady' },
            { hodnota: 's', popis: 'Vozidlo má vady, o kterých prodávající ví' },
          ],
        },
        {
          id: 'vady_popis',
          typ: 'textarea',
          popis: 'Popis vad',
          placeholder: 'např. prasklé čelní sklo, nefunkční klimatizace',
          sirka: 64,
          zobrazitKdyz: { pole: 'vady', je: 's' },
        },
        {
          id: 'havarie',
          typ: 'volba',
          popis: 'Bylo vozidlo havarované?',
          moznosti: [
            { hodnota: 'ne', popis: 'Ne, podle prodávajícího nebylo' },
            { hodnota: 'ano', popis: 'Ano, bylo' },
            { hodnota: 'nevi', popis: 'Prodávající neví' },
          ],
        },
        { id: 'klice', typ: 'cislo', popis: 'Počet předávaných klíčů', sirka: 4, polovina: true },
        {
          id: 'doklady',
          typ: 'vice',
          popis: 'Předávané doklady',
          moznosti: [
            { hodnota: 'orv', popis: 'Osvědčení o registraci (malý TP)' },
            { hodnota: 'tp', popis: 'Technický průkaz (velký TP)' },
            { hodnota: 'servis', popis: 'Servisní knížka' },
            { hodnota: 'stk', popis: 'Protokol o technické kontrole (STK)' },
            { hodnota: 'navod', popis: 'Návod k obsluze' },
          ],
        },
        {
          id: 'doklady_jine',
          typ: 'text',
          popis: 'Další předávané věci',
          placeholder: 'např. sada zimních pneumatik',
          sirka: 40,
        },
      ],
    },
    {
      id: 'cena',
      nazev: 'Cena a platba',
      pole: [
        { id: 'cena', typ: 'castka', popis: 'Kupní cena (Kč)', sirka: 14, polovina: true },
        {
          id: 'platba',
          typ: 'volba',
          popis: 'Jak a kdy kupující zaplatí',
          moznosti: [
            { hodnota: 'hotove', popis: 'V hotovosti při podpisu smlouvy' },
            { hodnota: 'prevod', popis: 'Převodem na účet do určitého data' },
            { hodnota: 'hotove_pozdeji', popis: 'V hotovosti do určitého data' },
          ],
        },
        {
          id: 'ucet',
          typ: 'text',
          popis: 'Číslo účtu prodávajícího',
          placeholder: '123456789/0100',
          sirka: 24,
          zobrazitKdyz: { pole: 'platba', je: 'prevod' },
        },
        {
          id: 'splatnost',
          typ: 'datum',
          popis: 'Zaplatit nejpozději do',
          sirka: 14,
          polovina: true,
          zobrazitKdyz: { pole: 'platba', je: ['prevod', 'hotove_pozdeji'] },
        },
      ],
    },
    {
      id: 'predani',
      nazev: 'Předání a přepis',
      pole: [
        { id: 'predani_datum', typ: 'datum', popis: 'Datum předání vozidla', sirka: 14, polovina: true },
        {
          id: 'prepis',
          typ: 'volba',
          popis: 'Kdo podá žádost o přepis v registru vozidel',
          moznosti: [
            { hodnota: 'kupujici', popis: 'Kupující' },
            { hodnota: 'prodavajici', popis: 'Prodávající' },
            { hodnota: 'spolecne', popis: 'Oba společně' },
          ],
        },
        { id: 'misto', typ: 'text', popis: 'Místo podpisu (obec)', sirka: 18, polovina: true },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum podpisu', sirka: 14, polovina: true },
      ],
    },
  ],

  odvozene: {
    cena_slovy: (d) => castkaSlovy(d.cena),
  },

  clanky: [
    {
      nadpis: 'Smluvní strany',
      odstavce: [
        '**Prodávající:** {{p_jmeno}}, datum narození {{p_narozeni}}, trvale bytem {{p_adresa}} (dále jen „prodávající“)',
        '**Kupující:** {{k_jmeno}}, datum narození {{k_narozeni}}, trvale bytem {{k_adresa}} (dále jen „kupující“)',
      ],
    },
    {
      nadpis: 'Předmět koupě',
      odstavce: [
        'Prodávající prohlašuje, že je výlučným vlastníkem tohoto vozidla: tovární značka a typ {{znacka}}, VIN {{vin}}, registrační značka {{spz}}, rok výroby {{rok}}, barva {{barva}}, číslo osvědčení o registraci vozidla {{orv}}, číslo technického průkazu {{tp}} (dále jen „vozidlo“).',
        'Prodávající prohlašuje, že na vozidle nevázne zástavní právo ani jiné právo třetí osoby a že vozidlo není předmětem leasingu.',
        'Prodávající touto smlouvou prodává vozidlo kupujícímu. Kupující vozidlo kupuje a zavazuje se zaplatit prodávajícímu kupní cenu podle článku IV.',
      ],
    },
    {
      nadpis: 'Stav vozidla',
      odstavce: [
        'Stav tachometru ke dni podpisu této smlouvy je {{km}}. Prodávající prohlašuje, že podle jeho vědomí nebylo se stavem tachometru manipulováno.',
        {
          volba: 'vady',
          uvodVzor: 'Vady vozidla (zaškrtněte jednu možnost):',
          moznosti: {
            bez: 'Prodávajícímu nejsou známy žádné vady vozidla.',
            s: 'Prodávající upozornil kupujícího na tyto vady vozidla: {{vady_popis}}',
          },
        },
        {
          volba: 'havarie',
          uvodVzor: 'Havárie vozidla (zaškrtněte jednu možnost):',
          moznosti: {
            ne: 'Prodávající prohlašuje, že vozidlo podle jeho vědomí nebylo havarované.',
            ano: 'Prodávající prohlašuje, že vozidlo bylo havarované.',
            nevi: 'Prodávající nemá informace o tom, zda bylo vozidlo v minulosti havarované.',
          },
        },
        'Kupující prohlašuje, že se se stavem vozidla seznámil, vozidlo si prohlédl a v tomto stavu je kupuje.',
      ],
    },
    {
      nadpis: 'Kupní cena a platba',
      odstavce: [
        'Kupní cena vozidla činí {{cena}} (slovy: {{cena_slovy}}).',
        {
          volba: 'platba',
          uvodVzor: 'Způsob zaplacení kupní ceny (zaškrtněte jednu možnost):',
          moznosti: {
            hotove:
              'Kupující zaplatil kupní cenu v hotovosti při podpisu této smlouvy. Prodávající svým podpisem potvrzuje, že kupní cenu v plné výši převzal.',
            prevod:
              'Kupující zaplatí kupní cenu bezhotovostním převodem na účet prodávajícího č. {{ucet}} nejpozději do {{splatnost}}.',
            hotove_pozdeji:
              'Kupující zaplatí kupní cenu v hotovosti nejpozději do {{splatnost}}. Převzetí peněz prodávající kupujícímu písemně potvrdí.',
          },
        },
        'Vlastnické právo k vozidlu přechází na kupujícího úplným zaplacením kupní ceny.',
      ],
    },
    {
      nadpis: 'Předání vozidla a přepis',
      odstavce: [
        'Prodávající předá kupujícímu vozidlo dne {{predani_datum}}. Spolu s vozidlem předá tento počet klíčů: {{klice}}.',
        {
          vice: 'doklady',
          uvod: 'Spolu s vozidlem předá prodávající kupujícímu tyto doklady:',
          moznosti: {
            orv: 'osvědčení o registraci vozidla (malý technický průkaz)',
            tp: 'technický průkaz (velký technický průkaz)',
            servis: 'servisní knížka',
            stk: 'protokol o poslední technické kontrole',
            navod: 'návod k obsluze',
          },
          dalsi: 'další předávané věci: {{doklady_jine}}',
        },
        'Nebezpečí škody na vozidle přechází na kupujícího převzetím vozidla. Kupující zajistí pojištění odpovědnosti z provozu vozidla nejpozději ke dni převzetí vozidla.',
        {
          volba: 'prepis',
          uvod: 'Žádost o zápis změny vlastníka do registru silničních vozidel podle zákona č. 56/2001 Sb. podá v zákonné lhůtě',
          moznosti: {
            kupujici: 'kupující. Prodávající mu k tomu poskytne potřebnou součinnost, případně plnou moc.',
            prodavajici: 'prodávající. Kupující mu k tomu poskytne potřebnou součinnost, případně plnou moc.',
            spolecne: 'prodávající a kupující společně.',
          },
        },
      ],
    },
    {
      nadpis: 'Závěrečná ustanovení',
      odstavce: [
        'Práva a povinnosti smluvních stran neupravené touto smlouvou se řídí zákonem č. 89/2012 Sb., občanský zákoník.',
        'Smlouva je vyhotovena ve dvou stejnopisech, z nichž každá smluvní strana obdrží jeden.',
        'Smlouva nabývá platnosti a účinnosti dnem podpisu oběma smluvními stranami.',
        'Smluvní strany prohlašují, že si smlouvu přečetly, jejímu obsahu rozumějí a na důkaz souhlasu ji podepisují.',
      ],
    },
  ],
};
