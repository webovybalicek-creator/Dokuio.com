const [z, ...slugs] = process.argv.slice(2);
import { writeFileSync } from 'node:fs';
for (const slug of slugs) {
  const st = (await import(`/home/claude/dokuio.com/src/obsah/${z}/${slug}.ts`)).default;
  const s = st.sablona;
  const o = { kod: s.kod, verze: s.verze, kroky: s.kroky.map(k => ({ id: k.id, popis: !!k.popis, pole: k.pole.map(p => ({ id: p.id, nap: !!p.napoveda, ph: p.placeholder ?? null, mz: (p.moznosti ?? []).map(m => m.hodnota) })) })),
    clanky: s.clanky.map(c => ({ v: !!c.vysvetleni, o: c.odstavce.map(x => typeof x === 'string' ? 's' : { uvod: !!x.uvod, uvodVzor: !!x.uvodVzor, mz: Object.keys(x.moznosti) }) })),
    coDal: s.coDal.length, kontrola: s.kontrola, uvod: !!s.uvod };
  writeFileSync(`out/${z}-${slug}.json`, JSON.stringify(o));
}
