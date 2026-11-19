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
}

export type Hodnota = string | string[] | undefined;
export type Data = Record<string, Hodnota>;
