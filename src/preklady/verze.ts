/**
 * Složení jazykové verze šablony: originální šablona + soubor překladu → šablona, ve které je
 * průvodce (popisky, nápovědy, „Co to znamená?“, tipy) v jazyce verze a dokument je dvojjazyčný
 * (originál první a rozhodující, pod každým odstavcem překlad, na konci jazyková doložka).
 * Běží při buildu i v prohlížeči (průvodce), proto žádné těžké importy.
 *
 * Kód a verze šablony zůstávají – rozpracovaný koncept v prohlížeči (localStorage) je tak společný
 * pro originál i všechny jazykové verze a přepnutí jazyka nic neztratí.
 */
import type { Pripominka, Sablona } from '../sablony/typy';
import { JAZYKY_VERZI, texty } from '../i18n';
import type { PrekladDokumentu } from './typy';

export function slozVerzi(s: Sablona, p: PrekladDokumentu, jazyk: string): Sablona {
  const V = JAZYKY_VERZI[jazyk];
  if (!V) throw new Error(`Neznámý jazyk verze: ${jazyk}`);
  const P = p.pruvodce;
  const kroky = s.kroky.map((k) => ({
    ...k,
    nazev: P.kroky[k.id]?.nazev ?? k.nazev,
    popis: k.popis && (P.kroky[k.id]?.popis ?? k.popis),
    pole: k.pole.map((pole) => {
      const pp = P.pole[pole.id];
      if (!pp) return pole;
      return {
        ...pole,
        popis: pp.popis,
        napoveda: pole.napoveda && pp.napoveda,
        placeholder: pole.placeholder && pp.placeholder,
        // ve formuláři překlad, v originálu dokumentu dál text země (Moznost.dokument)
        moznosti: pole.moznosti?.map((m) => ({ ...m, popis: pp.moznosti?.[m.hodnota] ?? m.popis, dokument: m.dokument ?? m.popis })),
      };
    }),
  }));

  // hodnoty voleb vložené do překladového textu přes {{id}}: výchozí = popisky z formuláře
  const volby: Record<string, Record<string, string>> = {};
  for (const k of kroky) for (const pole of k.pole) if (pole.typ === 'volba' && pole.moznosti) volby[pole.id] = Object.fromEntries(pole.moznosti.map((m) => [m.hodnota, m.popis]));

  const prelozPripominku = (x: Pripominka): Pripominka => {
    const mapa = P.pripominky ?? {};
    const klic = mapa[x.nazev] ? x.nazev : Object.keys(mapa).find((k) => x.nazev.startsWith(k));
    if (!klic) return x;
    return { ...x, nazev: mapa[klic].nazev + x.nazev.slice(klic.length), popis: mapa[klic].popis ?? x.popis };
  };

  const D = p.dokument;
  return {
    ...s,
    jazykRozhrani: jazyk,
    prekladVzdy: true,
    // slovo v jazyce verze; bez něj výchozí slovo jazyka rozhraní (ne české „plná moc“ apod.)
    slovo: P.slovo,
    kroky,
    clanky: s.clanky.map((c, i) => ({ ...c, vysvetleni: P.vysvetleni[i] || undefined })),
    coDal: P.coDal,
    kontrola: P.kontrola,
    podpisPoznamka: s.podpisPoznamka && P.podpisPoznamka,
    prevzit: s.prevzit && { ...s.prevzit, nazev: P.prevzit ?? s.prevzit.nazev },
    pripominky: s.pripominky && ((d) => s.pripominky!(d).map(prelozPripominku)),
    preklad: {
      jazyk,
      prepinac: '',
      nazev: D.nazev,
      podnadpis: D.podnadpis,
      uvod: D.uvod,
      podpisy: D.podpisy,
      mistoDne: V.dokument.mistoDne,
      prednost: V.dokument.prednost(s.jazyk),
      jenOriginal: s.podpisNaZarizeni === false ? V.dokument.jenOriginal : undefined,
      clanek: V.dokument.clanek,
      clanky: D.clanky,
      volby: { ...volby, ...D.volby },
      prilohy: D.prilohy,
      dolozka: [texty(s.jazyk).dokument.dvojjazycne(jazyk), V.dokument.dolozka(s.jazyk)],
    },
  };
}
