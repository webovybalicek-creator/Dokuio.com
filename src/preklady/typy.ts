/**
 * Formát souboru překladu jednoho dokumentu: src/preklady/<zeme>/<jazyk>/<slug>.ts
 * (`export default { … } satisfies PrekladDokumentu`). Návod a pravidla: PREKLADY.md.
 *
 * Typ hlídá tvar, registr (./index.ts) při buildu porovná strukturu s originální šablonou:
 * id kroků a polí, nápovědy, možnosti voleb, počet článků a odstavců, {{pole}} v textu, počty
 * položek na landing page. Cokoli chybí nebo přebývá = build spadne s hláškou „soubor: co a kde“.
 */
import type { StrankaDokumentu } from '../obsah/typy';
import type { OdstavecPrekladu, Slovo } from '../sablony/typy';

/** Překlad jednoho pole průvodce (klíč = `id` pole v šabloně) */
export interface PrekladPole {
  /** Popisek otázky */
  popis: string;
  /** Nápověda pod polem – povinná, právě když ji má originál */
  napoveda?: string;
  /** Ukázka v prázdném poli – povinná, právě když ji má originál. Hodnoty z dané země (adresa, SPZ) ponechte. */
  placeholder?: string;
  /** Popisky možností (volba, vice): hodnota z originálu → text ve formuláři. Klíče přesně jako v originálu. */
  moznosti?: Record<string, string>;
}

export interface PrekladDokumentu {
  /** Originální šablona, ze které se překládalo. Při změně `verze` originálu build spadne – překlad zkontrolujte a verzi přepište. */
  sablona: { kod: string; verze: string };

  /* ---------------------------------------------------------------- texty stránky */
  /** Krátký název: „Договір купівлі-продажу авто“ */
  nazev: string;
  /** Název v akuzativu (do vět „Завантажте … безкоштовно“), malým písmenem */
  nazevA: string;
  /** Katalog a vyhledávání rozcestníku verze (kategorie a ilustrace se berou z originálu) */
  katalog: { popis: string; slova: string[] };
  /**
   * Landing page. Počty položek (obsah, kroky, online, hodiSe, nehodiSe, po, faq) jako v originálu.
   * title: „… {Země} {rok} – <fráze jazyka>“ (uk „зразок PDF безкоштовно“, en „free PDF template“).
   */
  landing: StrankaDokumentu['landing'];
  vytvorit: StrankaDokumentu['vytvorit'];

  /* ---------------------------------------------------------------- průvodce (rozhraní) */
  pruvodce: {
    /** Jak dokument nazývat v rozhraní – povinné, když ho má originál (`Sablona.slovo`); jinak výchozí slovo jazyka */
    slovo?: Slovo;
    /** id kroku → název a popis (popis jen když ho má originál) */
    kroky: Record<string, { nazev: string; popis?: string }>;
    /** id pole → texty (všechna pole ze všech kroků) */
    pole: Record<string, PrekladPole>;
    /** „Co to znamená?“ ke každému článku, ve stejném pořadí (prázdný řetězec jen tam, kde ho nemá originál) */
    vysvetleni: string[];
    /** „Hotovo. Co dál?“ – stejný počet bodů jako originál */
    coDal: string[];
    /** „Před podpisem zkontrolujte“ – stejný počet bodů a stejné odkazy [text](url) jako originál */
    kontrola: string[];
    /** Proč nejde podepsat na obrazovce – když ho má originál */
    podpisPoznamka?: string;
    /** Název dokumentu, ze kterého se nabízí předvyplnění („Máte rozpracovanou …“) – když ho má originál */
    prevzit?: string;
    /**
     * Připomínky do kalendáře: název z originálu (nebo jeho začátek) → překlad.
     * Text za shodným začátkem (např. částka) se zachová.
     */
    pripominky?: Record<string, { nazev: string; popis?: string }>;
  };

  /* ---------------------------------------------------------------- text smlouvy (překladová část) */
  /**
   * Překlad textu dokumentu. Struktura 1:1 s `clanky` šablony: stejný počet článků i odstavců,
   * volby (`volba`, `vice`) jako objekt `{ moznosti: { stejné klíče }, uvod?, uvodVzor?, dalsi? }`.
   * Pole {{id}} stejná jako v originálu; odvozená pole (částka slovy) se v překladu vynechávají.
   */
  dokument: {
    nazev: string;
    podnadpis: string;
    /** Když má originál `uvod` */
    uvod?: string;
    podpisy: { vlevo: string; vpravo: string };
    clanky: { nadpis: string; odstavce: OdstavecPrekladu[] }[];
    /** Hodnoty polí typu volba vložené do textu přes {{id}} – výchozí jsou popisky z `pruvodce.pole` */
    volby?: Record<string, Record<string, string>>;
    /** Překlad textů v přílohách (splátkový kalendář…): text nebo jeho začátek → překlad */
    prilohy?: Record<string, string>;
  };
}
