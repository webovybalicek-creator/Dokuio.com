# 📝 Dokuio – pravidla SEO (závazná pro každou URL)

Každá URL musí mít **perfektně zvládnuté SEO v jazyce a podle zvyklostí své země**.
Platí pro dokumenty, průvodce, balíčky, poradnu (rozcestník, kategorie, témata, články) i textové stránky.
Kontrolu dělá automaticky `node scripts/kontrola-seo.mjs` – běží v GitHub Actions po každém buildu
a **chyba zastaví nasazení**. Varování opravit před commitem (cíl: 0 chyb, 0 varování).

## Metadata každé stránky

| Prvek | Pravidlo |
|---|---|
| `<title>` | Unikátní napříč celým webem (i mezi DE/AT/CH). 20–70 znaků, hlavní dotaz na začátku, u vzorů země a rok (`… Österreich {rok}`). Značka „| Dokuio“ jen když se vejde. |
| `meta description` | Unikátní, 70–170 znaků, v jazyce země, konkrétní (zákon, lhůta, co uživatel dostane). Žádné kopie z jiné země – i AT/CH musí mít vlastní text. |
| `<html lang>` | Podle země v URL: `cs-CZ`, `sk-SK`, `pl-PL`, `de-DE`, `de-AT`, `de-CH` (nastavuje `Base.astro` z `_zeme.ts`). Jazykové verze `/<zeme>/<jazyk>/…`: jazyk verze + region země (`uk-CZ`, `en-AT`). |
| `og:locale` | Stejně jako lang s podtržítkem (`de_CH`). Jazykové verze: `uk_UA` / `en_GB` (Open Graph nezná `uk_CZ`). |
| `canonical` | Absolutní URL stránky samé, s koncovým lomítkem. |
| `hreflang` | Jen mezi opravdu stejnými stránkami: rozcestníky zemí (a jejich jazykových verzí) a dokument + jeho jazykové verze v téže zemi (`cs-CZ`, `uk-CZ`, `en-CZ`, vzájemně). Dokumenty různých zemí nejsou překlady – liší se právem, nespojovat. |
| `og:image` | Vždy (generované OG nebo titulní fotka článku 1200×630). |
| `<h1>` | Právě jeden na stránce. |
| Strukturovaná data | Dokument: `HowTo`/`Product` dle šablony stránky, článek: `Article` (+ `image`), `BreadcrumbList`, `FAQPage` pokud jsou FAQ. |
| `robots` | Indexovat; prázdné výpisy (kategorie bez článků) `noindex, follow`. |

## Lokalizace (nejen překlad)

- Termíny a úřady podle země: CZ přepis / registr vozidel, SK prepis / dopravný inšpektorát, PL rejestracja / wydział komunikacji,
  DE Zulassungsstelle, AT Zulassungsstelle + Pickerl, CH Strassenverkehrsamt + Schilder.
- Švýcarsko: Schweizer Hochdeutsch – **žádné „ß“** (vždy „ss“), měna CHF, výrazy Occasion, Velo, Betreibung. Kontrola to hlídá.
- Klíčová slova podle místního hledání (např. „Kaufvertrag Auto Schweiz“, „umowa kupna-sprzedaży samochodu“), ne doslovný překlad.
- Popisy fotek (`alt`) v jazyce země (`src/lib/fotky.ts`).
- Zákony a lhůty v metadatech jen ověřené z oficiálních zdrojů země (viz NOVA-ZEME.md).

## Jazykové verze (uk, en)

Titulek landing page verze: „<název> <země> {rok} – зразок PDF безкоштовно“ / „… – free PDF template“ (země kvůli unikátnosti mezi zeměmi).
Pravidla a kontrola úplnosti v [PREKLADY.md](PREKLADY.md).

## Poradna – jednotná sada článků

- Každé téma má **stejný článek ve všech zemích**, textově a právně upravený pro danou zemi
  (ne překlad – jiné lhůty, úřady, zákony). Přehled a stav v `BACKLOG-CLANKU.md` (matice témat × zemí).
- Každý článek: `title` ≤ 70 znaků, `description` 70–170, titulní fotka (`foto:`), aspoň jedna fotka v textu, FAQ (3 otázky),
  `slova` pro vyhledávání, `zdroje` z úředních stránek.
- Výpisy kategorií a témat skládají popis automaticky (`popisSeo`) – musí zůstat 70–170 znaků.

## Při přidání stránky nebo země

1. Vyplnit `title`/`description` v jazyce země (vlastní text, ne převzatý z jiné země).
2. `npm run build && node scripts/kontrola-seo.mjs` → 0 chyb, 0 varování.
3. Po nasazení se změněné stránky samy ohlásí vyhledávačům (IndexNow), Google čte sitemapu.

## Unikátnost obsahu (proti „thin / duplicate content“)

Penalizace za podobnost nehrozí, ale Google podobné stránky nezaindexuje nebo je sloučí. Proto platí pro každou novou i upravenou stránku:

1. **Měřit:** po buildu `node scripts/kontrola-podobnosti.mjs` (běží i v GitHub Actions, nasazení nezastaví). Cíl: žádná dvojice indexovaných stránek nad 80 % shody (pětice slov, Jaccard), šablonový text v jazyce země pod 20 %, u uk/en verzí pod 35 %. `--prah 0.6 --vse` ukáže všechny dvojice nad 60 %.
2. **Místní obsah místo obecného:** perex, „Pro koho / pro koho ne“, „Po podpisu“ a FAQ každé stránky píšeme pro danou zemi – konkrétní úřad a e-služba (Regitra, e-CSDD, Zulassungsstelle…), lhůty, poplatky, limity hotovosti, zákon. Odvozené země (AT, CH z DE) **nesmí převzít `landing` beze změny** – minimálně vlastní perex, `po`, `hodiSe`/`nehodiSe` a 3 FAQ.
3. **FAQ podle země:** aspoň 3 otázky, které se v dané zemi opravdu hledají (ne překlad obecných otázek). Obecná otázka o ochraně dat smí být jen jedna.
4. **Motorka vs. auto a další odvozené vzory:** odvozená stránka má vlastní perex, `po` a FAQ (např. VIN na rámu, výbava, helma, technická kontrola motocyklů) – shoda s „rodičem“ pod 75 %.
5. **Šablonový text držet krátký:** obecné bloky (kroky, podpora, e-mail) jsou na stránce jednou a stručně; okno podpory je v `<template>` a vkládá se až po interakci, takže se neindexuje. Nové obecné bloky do landingu nepřidávat – každý nový blok musí nést text specifický pro zemi/dokument.
6. **uk/en verze:** kromě překladu vždy místní kontext pro cizince (co přinést na úřad, zda úřad přijme dvojjazyčnou smlouvu, místní e-služba). Když GSC verze hromadně neindexuje, dát `noindex` všemu kromě rozcestníků.
7. **Textové stránky:** podmínky užití a ochrana údajů mají `noindex` a nejsou v sitemapě; „O nás“ se indexuje jen tam, kde má vlastní text (AT a CH ne) – řídí `indexovatInfo` v `src/obsah/informace.ts`.
8. **Balíčky:** stránka balíčku skládá „Po podpisu“ a kontrolu z dokumentů země; vlastní `title`, `description` a `perex` balíčku musí jmenovat zemi a její postup (ne kopie z DE).
9. **Nestavět stránky bez poptávky** a každou novou stránku prolinkovat z poradny (článek ↔ vzor).
