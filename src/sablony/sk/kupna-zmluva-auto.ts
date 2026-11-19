/**
 * Kúpna zmluva na motorové vozidlo – Slovensko, predaj medzi súkromnými osobami.
 * Podľa § 588 a nasl. zákona č. 40/1964 Zb. (Občiansky zákonník); výhrada vlastníctva podľa § 601;
 * zmena držby vozidla podľa zákona č. 8/2009 Z. z. o cestnej premávke (žiadosť do 30 dní, slovensko.sk).
 * Zámerne bez zmluvných pokút a rozhodcovských doložiek. Pri každej zmene textu zvýšiť `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { sumaSlovom } from './cisla';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { OZ_SK, ZAKON_PREMAVKA, ZAKON_HOTOVOST_SK, SK_PREDAL_AUTO, SK_OVERENIE_VOZIDLA, TIP_TOTOZNOST_SK, TIP_HOTOVOST_SK } from './zdroje';

export const kupnaZmluvaAuto: Sablona = {
  kod: 'SK-KUPNA-AUTO',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'sk',
  jazyk: 'sk',
  nazev: 'Kúpna zmluva na motorové vozidlo',
  podnadpis: 'uzavretá podľa § 588 a nasl. zákona č. 40/1964 Zb., Občiansky zákonník',
  souborPdf: 'kupna-zmluva-auto',
  paticka: 'Vytvorené zadarmo · šablóna SK-KUPNA-AUTO v1.0 · vzor na vyplnenie, nejde o právne poradenstvo · za obsah zodpovedajú strany, odporúčame kontrolu advokátom',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'predávajúci', vpravo: 'kupujúci' },
  coDal: [
    'Vytlačte zmluvu dvakrát, obe strany podpíšu oba výtlačky.',
    'Odovzdajte vozidlo, kľúče a doklady – ideálne s preberacím protokolom (stav km, výbava, čas odovzdania).',
    'Žiadosť o zmenu držby vozidla podajte do 30 dní, osobne na dopravnom inšpektoráte alebo elektronicky na slovensko.sk.',
    'Kto nejde osobne, potrebuje splnomocnenie s úradne overeným podpisom.',
  ],
  pripominky: (d) => {
    const od = naDatum(d.predani_datum) ?? naDatum(d.datum_podpisu);
    if (!od) return [];
    return [
      {
        nazev: 'Zmena držby vozidla – posledný deň',
        datum: isoDatum(pridejDny(od, 30)),
        popis: 'Žiadosť o zmenu držby vozidla treba podať do 30 dní (orientačne od odovzdania vozidla).',
      },
    ];
  },
  kontrola: [
    'Predávajúci je zapísaný ako držiteľ a vlastník v osvedčení o evidencii. Ak nie, nechajte si ukázať, ako vozidlo nadobudol.',
    'VIN v dokladoch sa zhoduje s VIN na vozidle (za čelným sklom a na štítku vo dverách).',
    'Históriu vozidla si overte elektronickou službou [Overenie vozidla na slovensko.sk](https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_overenie-detailov-a-historie-o/) (blokácie, história držby, kontrola originality).',
    'Či vozidlo nie je na lízing alebo úver – pri lízingu je vlastníkom lízingová spoločnosť a vozidlo predať nemožno.',
    TIP_TOTOZNOST_SK,
    TIP_HOTOVOST_SK,
    'Žiadosť o zmenu držby vozidla treba podať do 30 dní – podľa [slovensko.sk](https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_predal-som-auto/) ju podáva pôvodný držiteľ, prípadne na základe úradne overeného splnomocnenia.',
  ],
  zdroje: [OZ_SK, ZAKON_PREMAVKA, ZAKON_HOTOVOST_SK, SK_PREDAL_AUTO, SK_OVERENIE_VOZIDLA],
  slovo: { n: 'zmluva', g: 'zmluvy', a: 'zmluvu', l: 'zmluve' },

  kroky: [
    {
      id: 'strany',
      nazev: 'Predávajúci a kupujúci',
      popis: 'Údaje kupujúceho často ešte nepoznáte. Nechajte ich prázdne, v zmluve z nich budú linky na ručné doplnenie.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Predávajúci – meno a priezvisko', napoveda: 'Ten, kto vozidlo predáva a je zapísaný v osvedčení o evidencii. Celé meno ako v občianskom preukaze.', placeholder: 'napr. Ján Novák', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Dátum narodenia', napoveda: 'Stačí dátum narodenia, rodné číslo do zmluvy písať nemusíte.', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', napoveda: 'Adresa z občianskeho preukazu.', sirka: 46, placeholder: 'napr. Hlavná 12, 811 01 Bratislava' },
        { id: 'k_jmeno', typ: 'text', popis: 'Kupujúci – meno a priezvisko', napoveda: 'Ten, kto vozidlo kupuje. Ak ho ešte nepoznáte, nechajte prázdne.', placeholder: 'napr. Petra Horváthová', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Dátum narodenia', napoveda: 'Podľa občianskeho preukazu kupujúceho.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresa trvalého pobytu', napoveda: 'Adresa z občianskeho preukazu kupujúceho.', sirka: 46, placeholder: 'napr. Námestie SNP 5, 974 01 Banská Bystrica' },
      ],
    },
    {
      id: 'vozidlo',
      nazev: 'Vozidlo',
      popis: 'Údaje opíšte z osvedčenia o evidencii (malého technického preukazu).',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Továrenská značka a typ', napoveda: 'Výrobca a model ako v osvedčení o evidencii (D.1 a D.3).', placeholder: 'napr. Škoda Octavia Combi', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'VIN – identifikačné číslo vozidla', napoveda: '17 znakov bez písmen I, O a Q. V osvedčení o evidencii je v kolónke E.', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Evidenčné číslo (EČV)', napoveda: 'Číslo na tabuľke vozidla, v osvedčení kolónka A.', placeholder: 'napr. BA123XY', sirka: 12, polovina: true },
        { id: 'rok', typ: 'text', popis: 'Rok výroby', placeholder: 'napr. 2018', sirka: 8, polovina: true },
        { id: 'orv', typ: 'text', popis: 'Číslo osvedčenia o evidencii časť I', napoveda: 'Malý technický preukaz (karta).', sirka: 14, polovina: true },
        { id: 'tp', typ: 'text', popis: 'Číslo osvedčenia o evidencii časť II', napoveda: 'Veľký technický preukaz. Ak ho nemáte, nechajte prázdne.', sirka: 14, polovina: true },
        { id: 'barva', typ: 'text', popis: 'Farba', placeholder: 'napr. sivá metalíza', sirka: 14, polovina: true },
        { id: 'km', typ: 'cislo', popis: 'Stav počítadla kilometrov', napoveda: 'Opíšte v deň podpisu. Chráni obe strany pred sporom o stočený tachometer.', placeholder: 'napr. 154320', jednotka: 'km', sirka: 12, polovina: true },
      ],
    },
    {
      id: 'stav',
      nazev: 'Stav vozidla',
      popis: 'Známe vady opíšte pravdivo. Predávajúci je povinný upozorniť kupujúceho na vady, o ktorých vie (§ 596 OZ).',
      pole: [
        {
          id: 'vady',
          typ: 'volba',
          popis: 'Vady vozidla',
          napoveda: 'Vada je čokoľvek, čo nefunguje alebo je poškodené. Čo do zmluvy napíšete, na to bol kupujúci upozornený.',
          moznosti: [
            { hodnota: 'bez', popis: 'Predávajúcemu nie sú známe žiadne vady' },
            { hodnota: 's', popis: 'Vozidlo má vady, o ktorých predávajúci vie' },
          ],
        },
        { id: 'vady_popis', typ: 'textarea', popis: 'Opis vád', placeholder: 'napr. prasknuté čelné sklo, nefunkčná klimatizácia', sirka: 64, zobrazitKdyz: { pole: 'vady', je: 's' } },
        {
          id: 'havarie',
          typ: 'volba',
          popis: 'Bolo vozidlo havarované?',
          napoveda: 'Ak to s istotou neviete, zvoľte „Predávajúci nevie“.',
          moznosti: [
            { hodnota: 'ne', popis: 'Nie, podľa predávajúceho nebolo' },
            { hodnota: 'ano', popis: 'Áno, bolo' },
            { hodnota: 'nevi', popis: 'Predávajúci nevie' },
          ],
        },
        { id: 'klice', typ: 'cislo', popis: 'Počet odovzdávaných kľúčov', placeholder: 'napr. 2', sirka: 4, polovina: true },
        {
          id: 'doklady',
          typ: 'vice',
          popis: 'Odovzdávané doklady',
          moznosti: [
            { hodnota: 'orv', popis: 'Osvedčenie o evidencii časť I' },
            { hodnota: 'tp', popis: 'Osvedčenie o evidencii časť II' },
            { hodnota: 'servis', popis: 'Servisná knižka' },
            { hodnota: 'stk', popis: 'Protokol o technickej a emisnej kontrole' },
            { hodnota: 'navod', popis: 'Návod na obsluhu' },
          ],
        },
        { id: 'doklady_jine', typ: 'text', popis: 'Ďalšie odovzdávané veci', placeholder: 'napr. sada zimných pneumatík', sirka: 40 },
      ],
    },
    {
      id: 'cena',
      nazev: 'Cena a platba',
      pole: [
        { id: 'cena', typ: 'castka', popis: 'Kúpna cena (€)', napoveda: 'Sumu slovom doplníme do zmluvy sami.', placeholder: 'napr. 9500', sirka: 14, polovina: true },
        {
          id: 'platba',
          typ: 'volba',
          popis: 'Ako a kedy kupujúci zaplatí',
          napoveda: 'Kupujúci sa stane vlastníkom až po zaplatení celej ceny. Pri platbe v hotovosti podpisom potvrdzujete prevzatie peňazí.',
          moznosti: [
            { hodnota: 'hotove', popis: 'V hotovosti pri podpise zmluvy' },
            { hodnota: 'prevod', popis: 'Prevodom na účet do určitého dátumu' },
            { hodnota: 'hotove_pozdeji', popis: 'V hotovosti do určitého dátumu' },
          ],
        },
        { id: 'ucet', typ: 'text', popis: 'IBAN predávajúceho', placeholder: 'SK12 0900 0000 0000 0000 0000', sirka: 30, zobrazitKdyz: { pole: 'platba', je: 'prevod' } },
        { id: 'splatnost', typ: 'datum', popis: 'Zaplatiť najneskôr do', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'platba', je: ['prevod', 'hotove_pozdeji'] } },
      ],
    },
    {
      id: 'predani',
      nazev: 'Odovzdanie a prepis',
      pole: [
        { id: 'predani_datum', typ: 'datum', popis: 'Dátum odovzdania vozidla', napoveda: 'Od odovzdania nesie kupujúci riziko poškodenia a musí mať PZP.', sirka: 14, polovina: true },
        {
          id: 'prepis',
          typ: 'volba',
          popis: 'Kto vybaví zmenu držby vozidla',
          napoveda: 'Žiadosť sa podáva na dopravnom inšpektoráte alebo elektronicky. Kto nejde osobne, potrebuje úradne overené splnomocnenie.',
          moznosti: [
            { hodnota: 'prodavajici', popis: 'Predávajúci (pôvodný držiteľ)' },
            { hodnota: 'kupujici', popis: 'Kupujúci na základe splnomocnenia' },
            { hodnota: 'spolecne', popis: 'Obaja spoločne' },
          ],
        },
        { id: 'misto', typ: 'text', popis: 'Miesto podpisu (obec)', placeholder: 'napr. Bratislava', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Dátum podpisu', napoveda: 'Predvyplnili sme dnešok.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: { cena_slovy: (d) => sumaSlovom(d.cena) },

  clanky: [
    {
      nadpis: 'Zmluvné strany',
      vysvetleni: 'Kto zmluvu uzatvára. Údaje musia sedieť s občianskymi preukazmi.',
      odstavce: [
        '**Predávajúci:** {{p_jmeno}}, dátum narodenia {{p_narozeni}}, trvalý pobyt {{p_adresa}} (ďalej len „predávajúci“)',
        '**Kupujúci:** {{k_jmeno}}, dátum narodenia {{k_narozeni}}, trvalý pobyt {{k_adresa}} (ďalej len „kupujúci“)',
      ],
    },
    {
      nadpis: 'Predmet kúpy',
      vysvetleni: 'Presne ktoré vozidlo sa predáva. Najdôležitejší je VIN.',
      odstavce: [
        'Predávajúci vyhlasuje, že je výlučným vlastníkom tohto vozidla: továrenská značka a typ {{znacka}}, VIN {{vin}}, evidenčné číslo {{spz}}, rok výroby {{rok}}, farba {{barva}}, číslo osvedčenia o evidencii časť I {{orv}}, číslo osvedčenia o evidencii časť II {{tp}} (ďalej len „vozidlo“).',
        'Predávajúci vyhlasuje, že na vozidle neviazne záložné právo ani iné právo tretej osoby a že vozidlo nie je predmetom lízingu.',
        'Predávajúci touto zmluvou predáva vozidlo kupujúcemu a kupujúci ho kupuje a zaväzuje sa zaplatiť kúpnu cenu podľa článku IV.',
      ],
    },
    {
      nadpis: 'Stav vozidla',
      vysvetleni: 'Čo predávajúci o vozidle vie. Na vady uvedené tu bol kupujúci upozornený.',
      odstavce: [
        'Stav počítadla kilometrov ku dňu podpisu tejto zmluvy je {{km}}. Predávajúci vyhlasuje, že podľa jeho vedomia nebolo s počítadlom manipulované.',
        {
          volba: 'vady',
          uvodVzor: 'Vady vozidla (zaškrtnite jednu možnosť):',
          moznosti: {
            bez: 'Predávajúcemu nie sú známe žiadne vady vozidla.',
            s: 'Predávajúci upozornil kupujúceho na tieto vady vozidla: {{vady_popis}}',
          },
        },
        {
          volba: 'havarie',
          uvodVzor: 'Havária vozidla (zaškrtnite jednu možnosť):',
          moznosti: {
            ne: 'Predávajúci vyhlasuje, že vozidlo podľa jeho vedomia nebolo havarované.',
            ano: 'Predávajúci vyhlasuje, že vozidlo bolo havarované.',
            nevi: 'Predávajúci nemá informácie o tom, či bolo vozidlo v minulosti havarované.',
          },
        },
        'Kupujúci vyhlasuje, že sa so stavom vozidla oboznámil, vozidlo si prezrel a v tomto stave ho kupuje.',
      ],
    },
    {
      nadpis: 'Kúpna cena a platba',
      vysvetleni: 'Koľko, ako a kedy sa platí. Kupujúci sa stane vlastníkom až po zaplatení celej ceny.',
      odstavce: [
        'Kúpna cena vozidla je {{cena}} (slovom: {{cena_slovy}}).',
        {
          volba: 'platba',
          uvodVzor: 'Spôsob zaplatenia kúpnej ceny (zaškrtnite jednu možnosť):',
          moznosti: {
            hotove: 'Kupujúci zaplatil kúpnu cenu v hotovosti pri podpise tejto zmluvy. Predávajúci svojím podpisom potvrdzuje, že kúpnu cenu v plnej výške prevzal.',
            prevod: 'Kupujúci zaplatí kúpnu cenu bezhotovostným prevodom na účet predávajúceho IBAN {{ucet}} najneskôr do {{splatnost}}.',
            hotove_pozdeji: 'Kupujúci zaplatí kúpnu cenu v hotovosti najneskôr do {{splatnost}}. Prevzatie peňazí predávajúci kupujúcemu písomne potvrdí.',
          },
        },
        'Zmluvné strany sa v súlade s § 601 Občianskeho zákonníka dohodli, že kupujúci sa stane vlastníkom vozidla až úplným zaplatením kúpnej ceny.',
      ],
    },
    {
      nadpis: 'Odovzdanie vozidla a zmena držby',
      vysvetleni: 'Kedy kupujúci vozidlo prevezme, čo s ním dostane a kto vybaví prepis.',
      odstavce: [
        'Predávajúci odovzdá kupujúcemu vozidlo dňa {{predani_datum}} spolu s týmto počtom kľúčov: {{klice}}.',
        {
          vice: 'doklady',
          uvod: 'Spolu s vozidlom predávajúci odovzdá kupujúcemu tieto doklady:',
          moznosti: {
            orv: 'osvedčenie o evidencii časť I',
            tp: 'osvedčenie o evidencii časť II',
            servis: 'servisná knižka',
            stk: 'protokol o poslednej technickej a emisnej kontrole',
            navod: 'návod na obsluhu',
          },
          dalsi: 'ďalšie odovzdávané veci: {{doklady_jine}}',
        },
        'Nebezpečenstvo škody na vozidle prechádza na kupujúceho prevzatím vozidla. Kupujúci zabezpečí povinné zmluvné poistenie najneskôr ku dňu prevzatia vozidla.',
        {
          volba: 'prepis',
          uvod: 'Žiadosť o zmenu držby vozidla podá v lehote podľa zákona č. 8/2009 Z. z. o cestnej premávke',
          moznosti: {
            prodavajici: 'predávajúci. Kupujúci mu poskytne potrebnú súčinnosť.',
            kupujici: 'kupujúci na základe splnomocnenia predávajúceho s úradne osvedčeným podpisom.',
            spolecne: 'predávajúci a kupujúci spoločne.',
          },
        },
      ],
    },
    {
      nadpis: 'Záverečné ustanovenia',
      vysvetleni: 'Bežné formálne body.',
      odstavce: [
        'Práva a povinnosti zmluvných strán neupravené touto zmluvou sa riadia zákonom č. 40/1964 Zb., Občiansky zákonník.',
        'Zmluva je vyhotovená v dvoch rovnopisoch, z ktorých každá zmluvná strana dostane jeden.',
        'Zmluva nadobúda platnosť a účinnosť dňom podpisu oboma zmluvnými stranami.',
        'Zmluvné strany vyhlasujú, že si zmluvu prečítali, jej obsahu rozumejú a na znak súhlasu ju podpisujú.',
      ],
    },
  ],
};
