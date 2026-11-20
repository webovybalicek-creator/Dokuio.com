/**
 * Rychlá kontrola překladů bez buildu (pro překladatele, i souběžně):
 *   node scripts/kontrola-prekladu.mjs            → načte registr src/preklady (kontrola úplnosti všech překladů)
 *   node scripts/kontrola-prekladu.mjs cz/uk       → vypíše jen chyby týkající se src/preklady/cz/uk/
 * Chyby ukončí běh s kódem 1. Plný build (npm run build) a kontrola-seo.mjs jsou dál povinné před pushem.
 */
import { createServer } from 'vite';

const filtr = process.argv[2];
const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'silent', optimizeDeps: { noDiscovery: true, include: [] } });
let kod = 0;
try {
  const m = await server.ssrLoadModule('/src/preklady/index.ts');
  const v = m.VERZE.filter((x) => !filtr || `${x.zeme}/${x.jazyk}`.startsWith(filtr));
  console.log(`OK: ${v.length} přeložených dokumentů${filtr ? ` (${filtr})` : ''}`);
} catch (e) {
  const zprava = String(e?.message ?? e);
  const radky = zprava.split('\n').filter((r) => !filtr || r.includes(`src/preklady/${filtr}`));
  console.error(radky.length ? radky.join('\n') : `Chyby jsou jen v jiných překladech (filtr ${filtr}).`);
  kod = radky.length ? 1 : 0;
}
await server.close();
process.exit(kod);
