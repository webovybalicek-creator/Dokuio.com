// node ... pdump.mjs zeme jazyk slug  -> JSON prekladu
const [z,j,slug]=process.argv.slice(2);
const m=(await import(`/home/claude/dokuio.com/src/preklady/${z}/${j}/${slug}.ts`)).default;
console.log(JSON.stringify(m));
