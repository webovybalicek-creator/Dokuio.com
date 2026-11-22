/**
 * Obsah webu po zemích. Přidání země = složka src/obsah/<kod>/ se souborem _zeme.ts
 * (+ šablony v src/sablony/<kod>/ a texty rozhraní v src/i18n/ pro nový jazyk).
 * Přidání dokumentu = šablona + jeden soubor src/obsah/<kod>/<slug>.ts. Stránky, vzory PDF/DOCX,
 * katalog, vyhledávání, související dokumenty, OG obrázky i sitemap se z toho sestaví samy.
 */
import type { Sablona } from '../sablony/typy';
import type { Jazyk } from '../i18n';

export type Ilustrace = 'auto' | 'motorka' | 'protokol' | 'plnamoc' | 'dar' | 'penize' | 'pujcka' | 'dluh';

export interface Polozka {
  nazev: string;
  popis: string;
}

/** Záznam v katalogu a vyhledávání země */
export interface Dokument {
  nazev: string;
  popis: string;
  kategorie: string;
  ilustrace: Ilustrace;
  /** Hotový dokument má url, bez url = „Připravujeme“ */
  url?: string;
  /** Synonyma a běžné dotazy (diakritika nevadí) */
  slova: string[];
}

export interface Odkaz {
  nazev: string;
  popis: string;
  url: string;
  ilustrace: Ilustrace;
}

/** Jeden dokument = landing /<zeme>/<slug>/, průvodce /vytvorit/ a prázdné vzory PDF a DOCX. Slug = sablona.souborPdf. */
export interface StrankaDokumentu {
  sablona: Sablona;
  /** Krátký název: „Kupní smlouva na auto“ */
  nazev: string;
  /** Název ve 4. pádě malými písmeny: „kupní smlouvu na auto“ */
  nazevA: string;
  katalog: Omit<Dokument, 'nazev' | 'url'>;
  /** Skupina souvisejících dokumentů z _zeme.ts (landing „Hodí se k tomu“, panel „Co dál?“) */
  souvisejici: string;
  /**
   * Stejný dokument v jiné jazykové „zemi“ téže země (Švýcarsko: ch ↔ ch-fr ↔ ch-it): kód země → slug.
   * Stačí zapsat na jedné straně – vazba platí oběma směry (hreflang a přepínač jazyka).
   */
  protejsky?: Record<string, string>;
  landing: {
    /** {rok} = rok poslední aktualizace šablony */
    title: string;
    description: string;
    perex: string;
    obsahPopis: string;
    obsah: Polozka[];
    kroky: Polozka[];
    online: string[];
    hodiSe: string[];
    nehodiSe: string[];
    poNadpis?: string;
    po: Polozka[];
    faq: { q: string; a: string }[];
    zakony: string;
    souvisejiciPopis?: string;
  };
  vytvorit: {
    title: string;
    description: string;
    podnadpis?: string;
  };
}

/** Nastavení země (jurisdikce). Šablony se liší podle práva země, ne jen jazykem. */
export interface Zeme {
  kod: string;
  nazev: string;
  /** Název anglicky (rozcestník dokuio.com) */
  nazevEn: string;
  /** Jazyk rozhraní a dokumentů */
  jazyk: Jazyk;
  /** hreflang rozcestníku země, např. cs-CZ */
  hreflang: string;
  casovaZona: string;
  aktivni: boolean;
  /** Pořadí na rozcestníku a ve výběru země */
  poradi: number;
  /** Jazykové varianty jedné země (Švýcarsko: ch, ch-fr, ch-it mají skupinu 'ch') – vzájemný hreflang rozcestníků a dokumentů */
  skupina?: string;
  kategorie: Record<string, string>;
  /** Skupiny souvisejících dokumentů: slug + krátký popis do karty (pořadí = pořadí v kartách) */
  skupiny: Record<string, { slug: string; popis: string }[]>;
  /** Dokumenty, které ještě nemáme (v katalogu „Připravujeme“) */
  pripravujeme: Omit<Dokument, 'url'>[];
  /** Rozcestník země /<kod>/ */
  hub: {
    title: string;
    description: string;
    stitek: string;
    stitekSpan: string;
    h1: string;
    h1Span: string;
    hledaniNadpis: string;
    hledaniSpan: string;
    /** Popis do OG obrázku */
    ogPopis: string;
  };
  /** Balíčky dokumentů podle životní situace (/<kod>/balicek/<slug>/) */
  balicky?: Balicek[];
  /** Rozcestník „Nevíte, jaký dokument?“ na stránce země */
  rozcestnik?: { nadpis: string; span: string; situace: Situace[] };
  /** Textové stránky dostupné v této zemi (cesty), pro patičku a sitemap */
  informace?: string[];
}

export interface Balicek {
  slug: string;
  nazev: string;
  /** Krátký popis do karty */
  popis: string;
  ilustrace: Ilustrace;
  /** Slugy dokumentů v pořadí, jak jdou po sobě */
  dokumenty: string[];
  title: string;
  description: string;
  /** Text pod nadpisem stránky balíčku */
  perex: string;
}

export interface Situace {
  nazev: string;
  ilustrace: Ilustrace;
  moznosti: { text: string; dokumenty: string[]; balicek?: string; tip?: string }[];
}

/** Struktura poradny (blogu) země: kategorie → témata → články (src/content/poradna/<země>/) */
export interface Poradna {
  /** Segment URL: /<země>/<slug>/ */
  slug: string;
  nazev: string;
  title: string;
  description: string;
  h1: string;
  h1Span: string;
  kategorie: {
    slug: string;
    nazev: string;
    popis: string;
    ilustrace: Ilustrace;
    temata: { slug: string; nazev: string; popis: string }[];
  }[];
}
