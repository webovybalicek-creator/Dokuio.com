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
| `<html lang>` | Podle země v URL: `cs-CZ`, `sk-SK`, `pl-PL`, `de-DE`, `de-AT`, `de-CH` (nastavuje `Base.astro` z `_zeme.ts`). |
| `og:locale` | Stejně jako lang s podtržítkem (`de_CH`). |
| `canonical` | Absolutní URL stránky samé, s koncovým lomítkem. |
| `hreflang` | Jen mezi opravdu stejnými stránkami (rozcestníky zemí). Dokumenty různých zemí nejsou překlady – liší se právem, nespojovat. |
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
