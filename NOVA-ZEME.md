# Jak přidat dokument nebo zemi

> **SEO:** každá nová URL musí splnit pravidla v [SEO.md](SEO.md) (lokální title/description, lang, og:locale…). Build v CI spadne, pokud ne.

Vše se sestaví samo: stránky, průvodce, prázdné vzory PDF/DOCX, katalog a vyhledávání,
související dokumenty, OG obrázky, sitemap i hreflang.

> **Jazykové verze (ukrajinsky, anglicky):** překlad dokumentu se přidává jedním souborem `src/preklady/<zeme>/<jazyk>/<slug>.ts` – návod, pravidla a slovníček v [PREKLADY.md](PREKLADY.md). Nová země potřebuje názvy a kategorie v `src/i18n/uk.ts` a `en.ts` (`zeme`, `kategorie`, `jazykZeme`) a v textech svého jazyka `dokument.dvojjazycne` (jazyková doložka).

> **Pravidlo:** každý nový dokument i článek se dělá **pro všechny země, které Dokuio má** (místní verze podle práva země, ne překlad). Nová země dostane celou sadu dokumentů i článků.

## Nový dokument (2 soubory)

1. **Šablona** `src/sablony/<zeme>/<nazev>.ts` – `export const …: Sablona`.
   Povinně `kontrola` (tipy), `zdroje` (oficiální zdroje dané země), `overeno`,
   upozornění v `paticka` („za obsah odpovídají strany, doporučujeme kontrolu advokátem“).
2. **Obsah stránky** `src/obsah/<zeme>/<slug>.ts` – `export default` objekt `StrankaDokumentu`
   (název, katalog, landing, vytvořit, skupina souvisejících). Slug = `sablona.souborPdf`.
3. Volitelně přidat slug do skupiny v `src/obsah/<zeme>/_zeme.ts` (`skupiny`), aby se ukazoval v „Hodí se k tomu“.

## Nová země

1. `src/obsah/<kod>/_zeme.ts` – `export const zeme: Zeme` (název, jazyk, hreflang, časová zóna,
   kategorie, skupiny, připravované dokumenty, texty rozcestníku). `aktivni: true` = zobrazí se.
2. Nový jazyk: `src/i18n/<jazyk>.ts` (zkopírovat `cs.ts`, typ `Texty` pohlídá, že nic nechybí)
   a zaregistrovat v `src/i18n/index.ts`. Obsahuje i měnu, slovo „smlouva“ ve tvarech a nápovědu k VIN.
3. Vlajka v `src/components/Vlajka.astro`.
4. Pro částky slovy v jiném jazyce/měně přidat funkci podobnou `castkaSlovy` (zatím jen česky).
5. Šablony dané země podle jejích oficiálních zdrojů (viz zadání: bezpečnost).
