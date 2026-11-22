// node ... check.mjs hr en izjava [more slugs]
const [z, j, ...slugs] = process.argv.slice(2);
const { zkontrolujPreklad } = await import('/home/claude/dokuio.com/src/preklady/kontrola.ts');
const { JAZYKY_VERZI } = await import('/home/claude/dokuio.com/src/i18n/index.ts');
let ok = 0;
for (const slug of slugs) {
  const st = (await import(`/home/claude/dokuio.com/src/obsah/${z}/${slug}.ts`)).default;
  const p = (await import(`/home/claude/dokuio.com/src/preklady/${z}/${j}/${slug}.ts`)).default;
  const ch = zkontrolujPreklad(st, p, JAZYKY_VERZI[j], z);
  if (ch.length) console.log(`✗ ${z}/${j}/${slug}\n   ` + ch.join('\n   ')); else ok++;
}
console.log(`OK ${ok}/${slugs.length}`);
