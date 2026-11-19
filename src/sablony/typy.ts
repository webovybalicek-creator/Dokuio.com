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
