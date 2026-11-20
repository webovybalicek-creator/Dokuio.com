/**
 * Formát šablon dokumentů.
 *
 * Jedna šablona = jeden soubor. Z něj se automaticky sestaví:
 *  - kroky průvodce (formulář),
 *  - prázdný vzor PDF při buildu (žádná data → všechna pole jako tečkované linky),
 *  - vyplněné PDF v prohlížeči,
 *  - HTML náhled (v průvodci i na landing page).
 *
 * Text smlouvy píše člověk podle zákona, AI do něj nezasahuje. Každé pole je nepovinné:
 * co uživatel nevyplní, zůstane v dokumentu jako linka k ručnímu doplnění.
 */

export type TypPole =
  | 'text'
  | 'textarea'
  | 'datum'
  | 'cislo'
  | 'castka'
  | 'vin'
  | 'volba'
  | 'vice'; // více zaškrtávacích možností

export interface Moznost {
  hodnota: string;
  /** Popisek ve formuláři */
  popis: string;
  /**
   * Text do dokumentu, když se liší od popisku ve formuláři. Nastavuje ho jazyková verze
   * (src/preklady): formulář je přeložený, ale v originálu smlouvy musí zůstat text v jazyce země.
   */
  dokument?: string;
}

export interface Pole {
  id: string;
  typ: TypPole;
  popis: string;
  napoveda?: string;
  placeholder?: string;
  /** Šířka prázdné linky v dokumentu (přibližně ve znacích) */
  sirka?: number;
  /** Jednotka zobrazená za hodnotou v dokumentu (např. „km“) */
  jednotka?: string;
  moznosti?: Moznost[];
  /** Pole se ve formuláři ukáže jen při splnění podmínky */
  zobrazitKdyz?: { pole: string; je: string | string[] };
  /** Polovina šířky formuláře (dvě pole vedle sebe) */
  polovina?: boolean;
  autocomplete?: string;
  /**
   * Chytrá výchozí hodnota v průvodci (dokud pole uživatel sám nezmění):
   * 'dnes' = dnešní datum, { obecZ: 'p_adresa' } = obec z adresy v jiném poli
   */
  vychozi?: 'dnes' | { obecZ: string };
  /** Pole s IČO: tlačítko „Načíst z ARES“ doplní název a sídlo do zadaných polí (jen CZ) */
  ares?: { nazev: string; adresa: string };
}

export interface Krok {
  id: string;
  nazev: string;
  popis?: string;
  pole: Pole[];
}

/**
 * Odstavec smlouvy.
 * V textu se pole vkládají jako {{id_pole}}. Hvězdičky **takto** = tučně.
 */
export type Odstavec =
  | string
  | {
      /** Jednovýběr: vybraná možnost se vypíše, bez výběru se vypíšou všechny se zaškrtávacím polem */
      volba: string;
      moznosti: Record<string, string>;
      /** Text před vybranou možností (u nevyplněného vzoru se zobrazí nad výčtem) */
      uvod?: string;
      /** Text nad výčtem jen v nevyplněném vzoru, pokud se liší od `uvod` */
      uvodVzor?: string;
      /** Odstavec vynechat, když je řídicí pole vyplněné jinak (v prázdném vzoru zůstává) */
      kdyz?: { pole: string; je: string | string[] };
    }
  | {
      /** Vícenásobný výběr: vybrané položky se vypíšou jako seznam, bez výběru všechny se zaškrtávacím polem */
      vice: string;
      uvod: string;
      moznosti: Record<string, string>;
      /** Doplňkový text za seznamem (např. „další: {{doklady_jine}}“) */
      dalsi?: string;
    };

export interface Clanek {
  nadpis: string;
  /** „Co to znamená?“ – jedna srozumitelná věta pro laika, zobrazí se v náhledu (ne v PDF) */
  vysvetleni?: string;
  odstavce: Odstavec[];
}

export interface Sablona {
  /** Stabilní kód šablony, tiskne se do patičky PDF */
  kod: string;
  verze: string;
  /** Datum poslední změny textu šablony (YYYY-MM-DD) */
  aktualizovano: string;
  zeme: string;
  jazyk: string;
  nazev: string;
  /** Řádek pod nadpisem dokumentu (právní základ) */
  podnadpis: string;
  /** Úvodní věta před články */
  uvod?: string;
  kroky: Krok[];
  clanky: Clanek[];
  /** Hodnoty dopočítané z jiných polí, např. částka slovy */
  odvozene?: Record<string, (data: Data) => string>;
  podpisy: { vlevo: string; vpravo: string };
  /** Místo a datum podpisu – id polí */
  mistoPodpisu: string;
  datumPodpisu: string;
  paticka: string;
  souborPdf: string;
  /** Jak dokument nazývat v rozhraní (pády). Výchozí „smlouva“. */
  slovo?: Slovo;
  /** Nadpisy „Článek I · …“ (výchozí). U plné moci či protokolu stačí prosté nadpisy. */
  cislovatClanky?: boolean;
  /** Číslovat odstavce 1., 2. … (výchozí ano). U dopisů a souhlasů plynulý text bez čísel. */
  cislovatOdstavce?: boolean;
  /** Podpis na obrazovce v průvodci (výchozí ano). Ne u dokumentů, kde se podpis úředně ověřuje. */
  podpisNaZarizeni?: boolean;
  /** Proč podpis na zařízení není (zobrazí se místo podpisového pole) */
  podpisPoznamka?: string;
  /** Kroky „Hotovo. Co dál?“ po stažení */
  coDal: string[];
  /**
   * Tipy „Před podpisem zkontrolujte“ (povinné u každé šablony). Odkaz ve tvaru [text](https://…).
   * Zobrazují se v průvodci před stažením i na landing page.
   */
  kontrola: string[];
  /** Oficiální zdroje, podle kterých je šablona sestavená a ověřená (zákony, úřady) */
  zdroje: { nazev: string; url: string }[];
  /** Kdy jsme naposledy prošli oficiální zdroje (YYYY-MM-DD) */
  overeno: string;
  /** Nabídnout předvyplnění z jiné rozpracované šablony (např. z kupní smlouvy) */
  prevzit?: { kod: string; nazev: string; mapuj: (zdroj: Data) => Data };
  /** Přílohy na konec dokumentu (např. splátkový kalendář) */
  prilohy?: (data: Data) => Tabulka[];
  /** Termíny do kalendáře po stažení (.ics) */
  pripominky?: (data: Data) => Pripominka[];
  /** Překlad pro dvojjazyčnou verzi (např. CZ + EN). Strukturou kopíruje `clanky`, rozhodující je originál. */
  preklad?: Preklad;
  /**
   * Jazyk rozhraní jazykové verze (`uk`, `en`), když se liší od jazyka dokumentu. Nastavuje jen
   * `slozVerzi` (src/preklady/verze.ts) – ručně se v šablonách nepíše. Dokument zůstává v `jazyk`.
   */
  jazykRozhrani?: string;
  /** Překlad je vždy zapnutý (jazyková verze), bez přepínače v průvodci */
  prekladVzdy?: boolean;
}

export interface Tabulka {
  nadpis: string;
  popis?: string;
  hlavicka: string[];
  radky: string[][];
  /** Indexy sloupců zarovnaných doprava (částky) */
  vpravo?: number[];
  poznamka?: string;
  /**
   * Souhrn splátkového kalendáře strukturovaně (k `popis`). Jazyková verze z něj sestaví celý překlad popisu
   * funkcí `dokument.splatky.popis` ze src/i18n/<jazyk>.ts (společně pro všechny země) – slovník `prilohy` to nemusí umět.
   */
  souhrn?: SouhrnSplatek;
}

/** Souhrn splátek pro překlad: celková částka už s měnou země („12 000 Kč“), počet měsíčních splátek, den splatnosti v měsíci */
export interface SouhrnSplatek {
  celkem: string;
  pocet: number;
  den?: number;
}

export interface Pripominka {
  nazev: string;
  /** YYYY-MM-DD */
  datum: string;
  popis?: string;
  /** Opakovat měsíčně – celkový počet výskytů */
  mesicne?: number;
  /**
   * Připomínka splátky (pripominkySplatek v terminy.ts): celkový počet splátek. Jazyková verze z toho sestaví popis
   * „<přeložený název s částkou> (<počet splátek>)“ funkcí `dokument.splatky.celkem` ze src/i18n/<jazyk>.ts.
   */
  splatky?: number;
}

export type OdstavecPrekladu = string | { moznosti: Record<string, string>; uvod?: string; uvodVzor?: string; dalsi?: string };

export interface Preklad {
  jazyk: string;
  /** Popisek přepínače v průvodci, např. „Přidat anglický překlad (CZ + EN)“ */
  prepinac: string;
  nazev: string;
  podnadpis: string;
  uvod?: string;
  podpisy: { vlevo: string; vpravo: string };
  mistoDne: [string, string];
  /** Doložka o přednosti originálu (do patičky i na konec) */
  prednost: string;
  /** Jazyková verze: popisek přepínače „jen originál“ (dokumenty s úředně ověřeným podpisem) */
  jenOriginal?: string;
  /** Nadpis článku v překladu – předpona, např. „Article“ */
  clanek: string;
  clanky: { nadpis: string; odstavce: OdstavecPrekladu[] }[];
  /** Hodnoty polí typu volba v překladu (id pole → hodnota → text) */
  volby?: Record<string, Record<string, string>>;
  /**
   * Jazyková doložka na konec posledního článku: [v jazyce originálu, v jazyce překladu],
   * např. „… v případě rozporu je rozhodující české znění“. Jazykové verze ji mají vždy.
   */
  dolozka?: [string, string];
  /** Překlad textů v přílohách (tabulkách): přesný text nebo začátek buňky → překlad. Vypíše se „originál / překlad“. */
  prilohy?: Record<string, string>;
  /** Překlad souhrnu splátkového kalendáře (`Tabulka.souhrn`) – z textů jazyka verze */
  splatky?: { popis: (s: SouhrnSplatek) => string };
}

/** Tvary slova pro texty rozhraní: 1. pád, 2. pád, 4. pád, 6. pád */
export interface Slovo {
  n: string;
  g: string;
  a: string;
  l: string;
}
export const SMLOUVA: Slovo = { n: 'smlouva', g: 'smlouvy', a: 'smlouvu', l: 'smlouvě' };
export const velke = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);

export type Hodnota = string | string[] | undefined;
export type Data = Record<string, Hodnota>;
