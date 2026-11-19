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
  paticka: 'Vytvořeno zdarma · šablona CZ-KUPNI-AUTO v1.0 · vzor k vyplnění, nejde o právní poradenství · za obsah odpovídají strany, doporučujeme kontrolu advokátem',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'prodávající', vpravo: 'kupující' },
  coDal: [
    'Vytiskněte smlouvu dvakrát, obě strany podepíší oba výtisky.',
    'Doplňte rukou údaje, které zůstaly prázdné.',
    'Předejte vůz, klíče a doklady – ideálně s předávacím protokolem (stav km, výbava, čas předání).',
    'Podejte žádost o přepis v registru vozidel do 10 pracovních dnů. Kdo nepůjde osobně, potřebuje plnou moc s ověřeným podpisem.',
  ],

  overeno: '2026-11-19',
  kontrola: [
      "Prodávající je zapsaný jako vlastník v osvědčení o registraci (malém technickém průkazu). Pokud ne, nechte si ukázat, jak auto nabyl.",
      "VIN v dokladech souhlasí s VIN na autě (za čelním sklem a na štítku ve dveřích).",
      "Historii kilometrů a technických kontrol podle VIN na [kontrolatachometru.cz](https://www.kontrolatachometru.cz/) (Ministerstvo dopravy, zdarma). Rozdíl proti tachometru = varování.",
      "Že auto není na leasing nebo úvěr – u leasingu je vlastníkem leasingová firma a prodat ho nelze.",
      "Totožnost druhé strany podle občanského průkazu. Číslo průkazu si můžete ověřit v databázi [Neplatné doklady Ministerstva vnitra](https://mv.gov.cz/aplikace-neplatne-doklady.aspx).",
      "Hotovost převzít a přepočítat až při podpisu; vyšší částky raději převodem. Nad 270 000 Kč zákon platbu v hotovosti zakazuje.",
      "Po prodeji si na [Portálu dopravy](https://portaldopravy.cz/) ověřte, že auto už není vedené na vás (přepis do 10 pracovních dnů)."
  ],
  zdroje: [
      {
          "nazev": "Občanský zákoník č. 89/2012 Sb. (e-Sbírka)",
          "url": "https://www.e-sbirka.cz/sb/2012/89"
      },
      {
          "nazev": "Zákon č. 56/2001 Sb., o podmínkách provozu vozidel (e-Sbírka)",
          "url": "https://www.e-sbirka.cz/sb/2001/56"
      },
      {
          "nazev": "Kontrola tachometru (Ministerstvo dopravy)",
          "url": "https://www.kontrolatachometru.cz/"
      },
      {
          "nazev": "Portál dopravy (Ministerstvo dopravy)",
          "url": "https://portaldopravy.cz/"
      },
      {
          "nazev": "Neplatné doklady (Ministerstvo vnitra)",
          "url": "https://mv.gov.cz/aplikace-neplatne-doklady.aspx"
      }
  ],

  kroky: [
    {
      id: 'strany',
      nazev: 'Prodávající a kupující',
      popis: 'Údaje kupujícího často ještě neznáte. Nechte je prázdné, ve smlouvě z nich budou linky k ručnímu doplnění.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Prodávající – jméno a příjmení', napoveda: 'Ten, kdo auto prodává a je zapsaný jako vlastník v osvědčení o registraci. Napište celé jméno jako v občanském průkazu.', placeholder: 'např. Jan Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Datum narození', napoveda: 'Stačí datum narození, rodné číslo do smlouvy psát nemusíte.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa trvalého bydliště', napoveda: 'Adresa z občanského průkazu.', sirka: 46, placeholder: 'např. Nerudova 12, 251 01 Říčany' },
        { id: 'k_jmeno', typ: 'text', popis: 'Kupující – jméno a příjmení', napoveda: 'Ten, kdo auto kupuje. Pokud ho ještě neznáte, nechte prázdné a doplníte rukou při podpisu.', placeholder: 'např. Petra Svobodová', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Datum narození', napoveda: 'Podle občanského průkazu kupujícího.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa trvalého bydliště', napoveda: 'Adresa z občanského průkazu kupujícího.', sirka: 46, placeholder: 'např. Masarykova 5, 602 00 Brno' },
      ],
    },
    {
      id: 'vozidlo',
      nazev: 'Vozidlo',
      popis: 'Údaje opište z osvědčení o registraci vozidla (malého technického průkazu).',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Tovární značka a typ', napoveda: 'Výrobce a model, jak jsou v osvědčení o registraci (kolonky D.1 a D.3).', placeholder: 'např. Škoda Octavia Combi', sirka: 32 },
        {
          id: 'vin',
          typ: 'vin',
          popis: 'VIN – identifikační číslo vozidla',
          napoveda: '17 znaků bez písmen I, O a Q. V osvědčení o registraci je v kolonce E.',
          sirka: 24,
        },
        { id: 'spz', typ: 'text', popis: 'Registrační značka (SPZ)', napoveda: 'Značka na tabulce auta, v osvědčení kolonka A.', placeholder: 'např. 1AB 2345', sirka: 12, polovina: true },
        { id: 'rok', typ: 'text', popis: 'Rok výroby', napoveda: 'Najdete v osvědčení o registraci nebo v technickém průkazu.', placeholder: 'např. 2018', sirka: 8, polovina: true },
        { id: 'orv', typ: 'text', popis: 'Číslo osvědčení o registraci', napoveda: 'Malý technický průkaz (kartička). Číslo je vytištěné na dokladu, obvykle tři písmena a šest číslic.', placeholder: 'např. UAA123456', sirka: 14, polovina: true },
        {
          id: 'tp',
          typ: 'text',
          popis: 'Číslo technického průkazu',
          napoveda: 'Velký technický průkaz mají jen starší vozy. Pokud ho nemáte, nechte prázdné.',
          sirka: 14,
          polovina: true,
        },
        { id: 'barva', typ: 'text', popis: 'Barva', napoveda: 'Stačí běžný popis, pomáhá vůz jednoznačně určit.', placeholder: 'např. šedá metalíza', sirka: 14, polovina: true },
        { id: 'km', typ: 'cislo', popis: 'Stav tachometru', napoveda: 'Opište v den podpisu z palubní desky. Chrání obě strany před sporem o stočený tachometr.', placeholder: 'např. 154320', jednotka: 'km', sirka: 12, polovina: true },
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
          napoveda: 'Vada je cokoli, co nefunguje nebo je poškozené (škrábance, nefunkční klimatizace, prasklé sklo). Co do smlouvy napíšete, to kupující nemůže později reklamovat.',
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
          napoveda: 'Pokud nevíte jistě (např. jste auto koupili ojeté), zvolte „Prodávající neví“. Nepravdivé prohlášení může vést ke sporu.',
          moznosti: [
            { hodnota: 'ne', popis: 'Ne, podle prodávajícího nebylo' },
            { hodnota: 'ano', popis: 'Ano, bylo' },
            { hodnota: 'nevi', popis: 'Prodávající neví' },
          ],
        },
        { id: 'klice', typ: 'cislo', popis: 'Počet předávaných klíčů', napoveda: 'Včetně náhradního klíče.', placeholder: 'např. 2', sirka: 4, polovina: true },
        {
          id: 'doklady',
          typ: 'vice',
          popis: 'Předávané doklady',
          napoveda: 'Zaškrtněte, co kupující dostane. Osvědčení o registraci potřebuje k přepisu vždy.',
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
        { id: 'cena', typ: 'castka', popis: 'Kupní cena (Kč)', napoveda: 'Celá dohodnutá cena. Částku slovy doplníme do smlouvy sami.', placeholder: 'např. 215000', sirka: 14, polovina: true },
        {
          id: 'platba',
          typ: 'volba',
          popis: 'Jak a kdy kupující zaplatí',
          napoveda: 'Vlastnictví přejde na kupujícího, až zaplatí celou cenu. Při platbě hotově podpisem smlouvy potvrdíte, že jste peníze převzali – podepisujte až s penězi v ruce.',
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
          napoveda: 'Účet, na který mají přijít peníze.',
          placeholder: '123456789/0100',
          sirka: 24,
          zobrazitKdyz: { pole: 'platba', je: 'prevod' },
        },
        {
          id: 'splatnost',
          typ: 'datum',
          popis: 'Zaplatit nejpozději do',
          napoveda: 'Poslední den, kdy musí kupující zaplatit.',
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
        { id: 'predani_datum', typ: 'datum', popis: 'Datum předání vozidla', napoveda: 'Den, kdy kupující převezme auto a klíče. Od té doby nese riziko poškození a musí mít povinné ručení.', sirka: 14, polovina: true },
        {
          id: 'prepis',
          typ: 'volba',
          popis: 'Kdo podá žádost o přepis v registru vozidel',
          napoveda: 'Přepis se vyřizuje na registru vozidel obecního úřadu obce s rozšířenou působností. Kdo nepůjde osobně, dá druhému plnou moc.',
          moznosti: [
            { hodnota: 'kupujici', popis: 'Kupující' },
            { hodnota: 'prodavajici', popis: 'Prodávající' },
            { hodnota: 'spolecne', popis: 'Oba společně' },
          ],
        },
        { id: 'misto', typ: 'text', popis: 'Místo podpisu (obec)', napoveda: 'Obec, kde smlouvu podepisujete. Předvyplníme ji podle adresy prodávajícího, klidně ji přepište.', placeholder: 'např. Říčany', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum podpisu', napoveda: 'Den, kdy obě strany smlouvu podepíšou. Předvyplnili jsme dnešek – pokud chcete datum dopsat rukou, pole vymažte.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: {
    cena_slovy: (d) => castkaSlovy(d.cena),
  },

  clanky: [
    {
      nadpis: 'Smluvní strany',
      vysvetleni: 'Kdo smlouvu uzavírá. Údaje musí sedět s občanskými průkazy, aby bylo jasné, kdo prodal a kdo koupil.',
      odstavce: [
        '**Prodávající:** {{p_jmeno}}, datum narození {{p_narozeni}}, trvale bytem {{p_adresa}} (dále jen „prodávající“)',
        '**Kupující:** {{k_jmeno}}, datum narození {{k_narozeni}}, trvale bytem {{k_adresa}} (dále jen „kupující“)',
      ],
    },
    {
      nadpis: 'Předmět koupě',
      vysvetleni: 'Přesně které auto se prodává. Nejdůležitější je VIN – je jen jedno na světě a podle něj se vůz dohledá i v registru.',
      odstavce: [
        'Prodávající prohlašuje, že je výlučným vlastníkem tohoto vozidla: tovární značka a typ {{znacka}}, VIN {{vin}}, registrační značka {{spz}}, rok výroby {{rok}}, barva {{barva}}, číslo osvědčení o registraci vozidla {{orv}}, číslo technického průkazu {{tp}} (dále jen „vozidlo“).',
        'Prodávající prohlašuje, že na vozidle nevázne zástavní právo ani jiné právo třetí osoby a že vozidlo není předmětem leasingu.',
        'Prodávající touto smlouvou prodává vozidlo kupujícímu. Kupující vozidlo kupuje a zavazuje se zaplatit prodávajícímu kupní cenu podle článku IV.',
      ],
    },
    {
      nadpis: 'Stav vozidla',
      vysvetleni: 'Co prodávající o autě ví. Vady uvedené tady kupující později reklamovat nemůže, proto je popište pravdivě.',
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
      vysvetleni: 'Kolik, jak a kdy se platí. Auto patří kupujícímu až po zaplacení celé ceny, což chrání prodávajícího.',
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
      vysvetleni: 'Kdy kupující auto převezme, co s ním dostane a kdo zařídí přepis v registru. Od převzetí odpovídá za auto kupující.',
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
      vysvetleni: 'Běžné formální body: kolik výtisků, odkdy smlouva platí a že ji obě strany přečetly.',
      odstavce: [
        'Práva a povinnosti smluvních stran neupravené touto smlouvou se řídí zákonem č. 89/2012 Sb., občanský zákoník.',
        'Smlouva je vyhotovena ve dvou stejnopisech, z nichž každá smluvní strana obdrží jeden.',
        'Smlouva nabývá platnosti a účinnosti dnem podpisu oběma smluvními stranami.',
        'Smluvní strany prohlašují, že si smlouvu přečetly, jejímu obsahu rozumějí a na důkaz souhlasu ji podepisují.',
      ],
    },
  ],
};
