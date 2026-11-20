/**
 * Kontrola úplnosti překladu proti originální šabloně a stránce (běží při buildu v ./index.ts).
 * Vrací seznam chyb „co a kde“; prázdný seznam = překlad je kompletní a sedí na strukturu originálu.
 */
import type { StrankaDokumentu } from '../obsah/typy';
import type { Odstavec, OdstavecPrekladu } from '../sablony/typy';
import type { TextyVerze } from '../i18n';
import type { PrekladDokumentu } from './typy';

const POLE = /\{\{([a-z0-9_]+)\}\}/g;
const idPoli = (t: string | undefined) => new Set([...(t ?? '').matchAll(POLE)].map((m) => m[1]));
const odkazy = (t: string) => [...t.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map((m) => m[1]).sort().join(' ');
const klice = (o: Record<string, unknown> | undefined) => Object.keys(o ?? {}).sort().join(', ');

/** Všechny texty odstavce (pro porovnání {{polí}}) */
const textyOdstavce = (o: Odstavec | OdstavecPrekladu): string[] =>
  typeof o === 'string' ? [o] : [o.uvod, 'uvodVzor' in o ? o.uvodVzor : undefined, 'dalsi' in o ? o.dalsi : undefined, ...Object.values(o.moznosti)].filter((x): x is string => !!x);

export function zkontrolujPreklad(st: StrankaDokumentu, p: PrekladDokumentu, V: TextyVerze, zeme: string): string[] {
  const s = st.sablona;
  const chyby: string[] = [];
  const ch = (m: string) => chyby.push(m);
  const P = p.pruvodce;

  // --- šablona a verze
  if (p.sablona.kod !== s.kod) ch(`sablona.kod „${p.sablona.kod}“ – originál má „${s.kod}“`);
  if (p.sablona.verze !== s.verze)
    ch(`originál „${s.kod}“ je ve verzi ${s.verze}, překlad je z verze ${p.sablona.verze} – projděte změny originálu, upravte překlad a nastavte sablona.verze: '${s.verze}'`);

  // --- texty stránky
  const L = p.landing;
  const O = st.landing;
  for (const k of ['obsah', 'kroky', 'online', 'hodiSe', 'nehodiSe', 'po', 'faq'] as const)
    if (L[k].length !== O[k].length) ch(`landing.${k}: ${L[k].length} položek, originál má ${O[k].length}`);
  if (!!L.poNadpis !== !!O.poNadpis) ch(`landing.poNadpis: ${O.poNadpis ? 'chybí (originál ho má)' : 'navíc (originál ho nemá)'}`);
  if (!!L.souvisejiciPopis !== !!O.souvisejiciPopis) ch(`landing.souvisejiciPopis: ${O.souvisejiciPopis ? 'chybí' : 'navíc'}`);
  if (O.title.includes('{rok}') && !L.title.includes('{rok}')) ch('landing.title: chybí {rok}');
  if (!L.title.includes(V.titulekFraze)) ch(`landing.title musí obsahovat „${V.titulekFraze}“`);
  const z = V.zeme[zeme];
  if (z && !L.title.includes(z.n) && !L.title.includes(z.g)) ch(`landing.title musí obsahovat zemi („${z.n}“), aby byl unikátní mezi zeměmi`);
  if (L.title.replace('{rok}', '2026').length > 70) ch(`landing.title má víc než 70 znaků`);
  if (L.description.length < 70 || L.description.length > 170) ch(`landing.description má ${L.description.length} znaků (70–170)`);
  if (!p.katalog.slova.length) ch('katalog.slova: prázdné');
  if (!!p.vytvorit.podnadpis !== !!st.vytvorit.podnadpis) ch('vytvorit.podnadpis: ' + (st.vytvorit.podnadpis ? 'chybí' : 'navíc'));

  // --- průvodce
  if (s.slovo && !P.slovo) ch('pruvodce.slovo: chybí (originál má vlastní slovo dokumentu)');
  for (const k of s.kroky) {
    const pk = P.kroky[k.id];
    if (!pk) ch(`pruvodce.kroky: chybí krok „${k.id}“`);
    else if (!!pk.popis !== !!k.popis) ch(`pruvodce.kroky.${k.id}.popis: ${k.popis ? 'chybí' : 'navíc'}`);
    for (const pole of k.pole) {
      const pp = P.pole[pole.id];
      if (!pp) {
        ch(`pruvodce.pole: chybí pole „${pole.id}“ (krok ${k.id})`);
        continue;
      }
      if (!!pp.napoveda !== !!pole.napoveda) ch(`pruvodce.pole.${pole.id}.napoveda: ${pole.napoveda ? 'chybí' : 'navíc'}`);
      if (!!pp.placeholder !== !!pole.placeholder) ch(`pruvodce.pole.${pole.id}.placeholder: ${pole.placeholder ? 'chybí' : 'navíc'}`);
      const orig = klice(Object.fromEntries((pole.moznosti ?? []).map((m) => [m.hodnota, 1])));
      if (klice(pp.moznosti) !== orig) ch(`pruvodce.pole.${pole.id}.moznosti: klíče [${klice(pp.moznosti)}], originál [${orig}]`);
    }
  }
  const idKroku = new Set(s.kroky.map((k) => k.id));
  const idPoliSablony = new Set(s.kroky.flatMap((k) => k.pole.map((x) => x.id)));
  for (const k of Object.keys(P.kroky)) if (!idKroku.has(k)) ch(`pruvodce.kroky: krok „${k}“ v originálu není`);
  for (const k of Object.keys(P.pole)) if (!idPoliSablony.has(k)) ch(`pruvodce.pole: pole „${k}“ v originálu není`);
  if (P.vysvetleni.length !== s.clanky.length) ch(`pruvodce.vysvetleni: ${P.vysvetleni.length} položek, originál má ${s.clanky.length} článků`);
  s.clanky.forEach((c, i) => {
    if (!!c.vysvetleni !== !!P.vysvetleni[i]) ch(`pruvodce.vysvetleni[${i}] (článek ${i + 1}): ${c.vysvetleni ? 'chybí' : 'originál ho nemá – nechte prázdný řetězec'}`);
  });
  if (P.coDal.length !== s.coDal.length) ch(`pruvodce.coDal: ${P.coDal.length} bodů, originál má ${s.coDal.length}`);
  if (P.kontrola.length !== s.kontrola.length) ch(`pruvodce.kontrola: ${P.kontrola.length} bodů, originál má ${s.kontrola.length}`);
  s.kontrola.forEach((t, i) => {
    if (P.kontrola[i] !== undefined && odkazy(P.kontrola[i]) !== odkazy(t)) ch(`pruvodce.kontrola[${i}]: odkazy [text](url) se liší od originálu`);
  });
  if (!!s.podpisPoznamka !== !!P.podpisPoznamka) ch(`pruvodce.podpisPoznamka: ${s.podpisPoznamka ? 'chybí' : 'navíc'}`);
  if (!!s.prevzit !== !!P.prevzit) ch(`pruvodce.prevzit: ${s.prevzit ? 'chybí' : 'navíc'}`);

  // --- text dokumentu
  const D = p.dokument;
  if (!!s.uvod !== !!D.uvod) ch(`dokument.uvod: ${s.uvod ? 'chybí' : 'navíc'}`);
  if (D.clanky.length !== s.clanky.length) ch(`dokument.clanky: ${D.clanky.length} článků, originál má ${s.clanky.length}`);
  const odvozene = new Set(Object.keys(s.odvozene ?? {}));
  const porovnejPole = (kde: string, orig: string[], prek: string[]) => {
    const o = new Set(orig.flatMap((t) => [...idPoli(t)]));
    const pr = new Set(prek.flatMap((t) => [...idPoli(t)]));
    for (const id of pr) if (!o.has(id)) ch(`${kde}: pole {{${id}}} v originálu není`);
    for (const id of o) if (!pr.has(id) && !odvozene.has(id)) ch(`${kde}: chybí pole {{${id}}}`);
    for (const t of prek) if ((t.match(/\*\*/g) ?? []).length % 2) ch(`${kde}: lichý počet ** (tučné písmo)`);
  };
  if (s.uvod && D.uvod) porovnejPole('dokument.uvod', [s.uvod], [D.uvod]);
  s.clanky.forEach((c, i) => {
    const dc = D.clanky[i];
    if (!dc) return;
    if (dc.odstavce.length !== c.odstavce.length) ch(`dokument.clanky[${i}] („${c.nadpis}“): ${dc.odstavce.length} odstavců, originál má ${c.odstavce.length}`);
    c.odstavce.forEach((o, j) => {
      const op = dc.odstavce[j];
      const kde = `dokument.clanky[${i}].odstavce[${j}]`;
      if (op === undefined) return;
      if (typeof o === 'string') {
        if (typeof op !== 'string') ch(`${kde}: originál je prostý text, překlad musí být řetězec`);
      } else if (typeof op === 'string') ch(`${kde}: originál je volba (${'volba' in o ? o.volba : o.vice}), překlad musí být objekt { moznosti, … }`);
      else {
        if (klice(op.moznosti) !== klice(o.moznosti)) ch(`${kde}.moznosti: klíče [${klice(op.moznosti)}], originál [${klice(o.moznosti)}]`);
        if ('vice' in o) {
          if (!op.uvod) ch(`${kde}.uvod: chybí`);
          if (!!o.dalsi !== !!op.dalsi) ch(`${kde}.dalsi: ${o.dalsi ? 'chybí' : 'navíc'}`);
        } else {
          if (o.uvod && !op.uvod) ch(`${kde}.uvod: chybí (originál ho má)`);
          if (!o.uvod && op.uvod) ch(`${kde}.uvod: navíc (originál má jen uvodVzor)`);
          if ((o.uvodVzor || !o.uvod) && !op.uvodVzor && !op.uvod) ch(`${kde}.uvodVzor: chybí (text nad výčtem v prázdném vzoru)`);
        }
      }
      porovnejPole(kde, textyOdstavce(o), textyOdstavce(op));
    });
  });
  return chyby;
}
