/**
 * Jazykové verze dokumentů (mutace) – ukrajinština a angličtina v rámci každé země.
 * Právo, šablona a zdroje zůstávají země, mění se jen jazyk rozhraní a textů stránky.
 * Smlouva je dvojjazyčná: originál v jazyce země (rozhodující) + překlad. Návod: PREKLADY.md.
 *
 * Tady je jen typ textů, které jazyk verze potřebuje navíc oproti běžnému rozhraní (`Texty`),
 * a sloučení textů jazyka verze s údaji země (měna, doklad k vozidlu, cena příspěvku).
 */
import type { Texty } from './cs';
import type { SouhrnSplatek } from '../sablony/typy';

export interface TextyVerze {
  /** Kód jazyka verze v URL: /<zeme>/<kod>/… */
  kod: string;
  /** Název jazyka v něm samém (přepínač jazyka) */
  nazev: string;
  /** Kód do hreflang a <html lang> spolu se zemí (uk → uk-CZ) */
  hreflang: string;
  /**
   * og:locale – Open Graph bere jen dvojice z pevného seznamu (Facebook), „uk_CZ“ ani „en_CZ“ v něm nejsou.
   * Proto jazyk s výchozím regionem (uk_UA, en_GB); zemi cílí hreflang (uk-CZ).
   */
  ogLocale: string;
  /** Povinná fráze v titulku landing page verze (obdoba „vzor PDF zdarma“) */
  titulekFraze: string;
  /** Země: n = 1. pád / název, g = 2. pád („pro Česko“, „for the Czech Republic“), v = „v Česku“ */
  zeme: Record<string, { n: string; g: string; v: string }>;
  /** Jazyk země (Zeme.jazyk) tak, jak se vkládá do vět („чеською“ / „Czech“) */
  jazykZeme: Record<string, string>;
  /** Kategorie katalogu všech zemí (klíč = klíč z _zeme.ts → kategorie) */
  kategorie: Record<string, string>;
  /** Texty do překladové části dvojjazyčného dokumentu */
  dokument: {
    mistoDne: [string, string];
    /** Předpona nadpisu článku („Стаття“, „Article“) */
    clanek: string;
    /** Jazyková doložka v jazyce verze (pár k `Texty.dokument.dvojjazycne` jazyka země) */
    dolozka: (jazykZeme: string) => string;
    /** Do patičky PDF: „rozhoduje originál“ */
    prednost: (jazykZeme: string) => string;
    /** Přepínač u dokumentů s úředně ověřeným podpisem: stáhnout jen originál (úřad dvojjazyčný text často neověří) */
    jenOriginal: string;
    /**
     * Splátkový kalendář a připomínky splátek (všechny země): `popis` = souhrn pod nadpisem přílohy
     * (`Tabulka.souhrn`, částka už s měnou země), `celkem` = doplněk popisu připomínky splátky („12 instalments in total“).
     */
    splatky: { popis: (s: SouhrnSplatek) => string; celkem: (pocet: number) => string };
  };
  /** VIN: doklad země v originále (např. „Osvědčení o registraci vozidla“) a kolonka */
  vin: {
    aria: (doklad: string, pole: string) => string;
    seznam: (doklad: string, pole: string) => string[];
  };
  /** Poznámka u náhledu a v průvodci: dokument je dvojjazyčný, rozhoduje originál */
  dvojjazycne: (jazykZeme: string) => string;
  /** Tip v průvodci: volné texty jdou do dokumentu tak, jak je uživatel napíše (do obou jazyků) */
  vyplnovani: (jazykZeme: string) => string;
  /** Rozcestník verze /<zeme>/<jazyk>/ */
  hub: {
    title: (zeme: string) => string;
    description: (zeme: string, jazykZeme: string) => string;
    stitek: (zeme: string) => string;
    stitekSpan: string;
    h1: (zeme: string) => string;
    h1Span: (jazykZeme: string) => string;
    hledaniNadpis: string;
    hledaniSpan: string;
    ogPopis: (jazykZeme: string) => string;
    /** Odkaz na rozcestník originálu */
    puvodni: (pocet: number) => string;
    poznamka: (jazykZeme: string) => string;
  };
}

/** Sloučí texty rozhraní jazyka verze s údaji země (Z = texty jazyka země) */
export function proZemi(T: Texty, V: TextyVerze, Z: Texty): Texty {
  const zv = Z.vin as Texty['vin'] & { pole?: string; radky?: [string, string][] };
  const pole = zv.pole ?? 'E';
  // název dokladu v jazyce země: „Osvědčení o registraci vozidla – VIN je v kolonce E“ → první část
  const doklad = zv.dokladAria.split(' – ')[0];
  const vin = {
    ...T.vin,
    pole,
    ...(zv.radky ? { radky: zv.radky } : {}),
    dokladNadpis: zv.dokladNadpis,
    dokladAria: V.vin.aria(doklad, pole),
    seznam: V.vin.seznam(doklad, pole),
  } as Texty['vin'];
  return {
    ...T,
    mena: Z.mena,
    vin,
    podpora: {
      ...T.podpora,
      // částka příspěvku v měně země, bez místní zkratky „cca“/„ok.“/„ca.“/„kb.“
      cena: (n: number) => Z.podpora.cena(n).replace(/^(cca|ca\.|ok\.|kb\.)\s*/, '≈ '),
      srovnani: [T.podpora.srovnani[0], { kde: 'Dokuio', cena: Z.podpora.srovnani[Z.podpora.srovnani.length - 1].cena }],
    },
  };
}
