// node --experimental-strip-types --import ./reg.mjs dump.mjs hr izjava
const [z, slug] = process.argv.slice(2);
const st = await import(`/home/claude/dokuio.com/src/obsah/${z}/${slug}.ts`);
const s = st.default.sablona;
const out = [];
out.push(`# ${s.kod} ${s.verze} slovo=${s.slovo ? 'ANO' : 'ne'} podpisPoznamka=${s.podpisPoznamka ? 'ANO' : 'ne'} prevzit=${s.prevzit ? JSON.stringify(s.prevzit.nazev) : 'ne'}`);
out.push(`nazev: ${s.nazev} | podnadpis: ${s.podnadpis} | uvod: ${s.uvod ?? '-'} | podpisy: ${s.podpisy.vlevo} / ${s.podpisy.vpravo}`);
for (const k of s.kroky) {
  out.push(`KROK ${k.id}: ${k.nazev}${k.popis ? ' || ' + k.popis : ''}`);
  for (const p of k.pole) {
    let l = `  ${p.id} [${p.typ}] ${p.popis}`;
    if (p.napoveda) l += ` || N: ${p.napoveda}`;
    if (p.placeholder) l += ` || P: ${p.placeholder}`;
    if (p.moznosti) l += ` || M: ` + p.moznosti.map(m => `${m.hodnota}=${m.popis ?? m.text ?? ''}`).join(' ; ');
    out.push(l);
  }
}
out.push(`COD (${s.coDal.length}): ` + s.coDal.join(' ## '));
out.push(`KONTROLA (${s.kontrola.length}): ` + s.kontrola.join(' ## '));
if (s.pripominky) out.push('PRIPOMINKY: ' + (typeof s.pripominky === 'function' ? 'FN ' + s.pripominky.toString() : s.pripominky.map(p => `${p.nazev}${p.splatky ? ' [splatky]' : ''} :: ${p.popis ?? ''}`)
.join(' ## ')));
out.push(`ODVOZENE: ${Object.keys(s.odvozene ?? {}).join(',')}`);
s.clanky.forEach((c, i) => {
  out.push(`CL${i + 1} ${c.nadpis}${c.vysvetleni ? ' || V: ' + c.vysvetleni : ''}`);
  for (const o of c.odstavce) {
    if (typeof o === 'string') out.push('   - ' + o);
    else out.push('   * ' + JSON.stringify(o));
  }
});
const L = st.default.landing;
out.push(`LANDING counts obsah=${L.obsah.length} kroky=${L.kroky.length} online=${L.online.length} hodi=${L.hodiSe.length} nehodi=${L.nehodiSe.length} po=${L.po.length} faq=${L.faq.length}`);
console.log(out.join('\n'));
console.log('LANDING ' + JSON.stringify({ ...L, faq: L.faq }, null, 0));
console.log('KATALOG ' + JSON.stringify(st.default.katalog));
