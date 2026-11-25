# 📝 Dokuio – pravidla SEO (závazná pro každou URL)

Každá URL musí mít **perfektně zvládnuté SEO v jazyce a podle zvyklostí své země**.
Platí pro dokumenty, průvodce, balíčky, poradnu (rozcestník, kategorie, témata, články) i textové stránky.
Kontrolu dělá automaticky `node scripts/kontrola-seo.mjs` – běží v GitHub Actions po každém buildu
a **chyba zastaví nasazení**. Varování opravit před commitem (cíl: 0 chyb, 0 varování).

## Metadata každé stránky

| Prvek | Pravidlo |
|---|---|
| `<title>` | Unikátní napříč celým webem (i mezi DE/AT/CH). **Cíl 45–60 znaků** (Google zobrazí zhruba 580 px ≈ 55–60 znaků), hlavní dotaz na začátku a jako součást věty – viz „Titulky, které Google nepřepíše“. U vzorů země a rok (`… Österreich {rok}`). Šablonové titulky „<název> {rok} – <fráze>“ smí mít až 70 znaků, pokud část před „ – “ má nejvýš 55 znaků (Google pak usekne jen obecnou frázi, ne klíčové slovo). Značka „| Dokuio“ jen když se celý titulek vejde do 60 znaků. |
| `meta description` | Unikátní, 70–170 znaků, v jazyce země, konkrétní (zákon, lhůta, co uživatel dostane). Žádné kopie z jiné země – i AT/CH musí mít vlastní text. |
| `<html lang>` | Podle země v URL: `cs-CZ`, `sk-SK`, `pl-PL`, `de-DE`, `de-AT`, `de-CH` (nastavuje `Base.astro` z `_zeme.ts`). Jazykové verze `/<zeme>/<jazyk>/…`: jazyk verze + region země (`uk-CZ`, `en-AT`). |
| `og:locale` | Stejně jako lang s podtržítkem (`de_CH`). Jazykové verze: `uk_UA` / `en_GB` (Open Graph nezná `uk_CZ`). |
| `canonical` | Absolutní URL stránky samé, s koncovým lomítkem. |
| `hreflang` | Jen mezi opravdu stejnými stránkami: rozcestníky zemí (a jejich jazykových verzí) a dokument + jeho jazykové verze v téže zemi (`cs-CZ`, `uk-CZ`, `en-CZ`, vzájemně). Dokumenty různých zemí nejsou překlady – liší se právem, nespojovat. |
| `og:image` | Vždy (generované OG nebo titulní fotka článku 1200×630). |
| `<h1>` | Právě jeden na stránce. U článků je H1 = `title`. |
| Strukturovaná data | Dokument: `HowTo`/`Product` dle šablony stránky, článek: `Article` (+ `image`), `BreadcrumbList`, `FAQPage` pokud jsou FAQ. |
| `robots` | Indexovat; prázdné výpisy (kategorie bez článků) `noindex, follow`. |

## Titulky, které Google nepřepíše

Zkušenost z 24. 11. 2026: článek „Plná moc: kdy stačí obyčejná a kdy potřebujete úředně ověřený podpis“ (68 znaků) Google ve výsledcích
zobrazil jako „kdy stačí obyčejná a kdy potřebujete úředně ověřený podpis“ – část před dvojtečkou zahodil a s ní i hlavní klíčové slovo.
Proto byly 24. 11. 2026 zkráceny všechny titulky článků poradny delší než 60 znaků (98 článků ve všech zemích).

1. **Délka 45–60 znaků.** Delší titulek Google zkracuje nebo si ho přepíše podle sebe – a může přitom vyhodit klíčové slovo.
2. **Klíčové slovo ve větě, ne jako samostatný nadpis před dvojtečkou.** Vzor „Téma: podtitul“ je v pořádku jen tehdy, když se celý titulek
   vejde do 60 znaků, nebo když podtitul bez tématu sám neobstojí.
   - ❌ „Plná moc: kdy stačí obyčejná a kdy potřebujete úředně ověřený podpis“ (68 znaků, podtitul obstojí sám → Google „Plná moc:“ odřízne)
   - ✅ „Plná moc s ověřeným podpisem: kdy je nutná a kdy ne“ (51 znaků)
3. **Titulek odpovídá H1 a obsahu.** Když se výrazně liší, Google si často vezme H1 nebo jiný nadpis ze stránky.
4. **Žádné opakování klíčového slova ani výplňové fráze** („kompletní průvodce“, „vše, co potřebujete vědět“).
5. **Perex (první odstavec) obsahuje hlavní klíčové slovo a odpovídá na hlavní otázku.** Google místo meta popisu často ukáže větu
   ze stránky, proto musí první odstavec fungovat i jako úryvek ve výsledcích.
6. **Kontrola po nasazení:** u stránek, které mají v GSC zobrazení, ověřit, jak Google titulek opravdu ukazuje (hledání `site:dokuio.com/cesta/`
   nebo dotazem z GSC). Přepsaný nebo oříznutý titulek opravit podle bodů výše.

`scripts/kontrola-seo.mjs` hlásí varování u titulku nad 60 znaků, jehož hlavní část (před „ – “ nebo „ | “) má víc než 55 znaků, a u každého titulku nad 70 znaků.

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
- Každý článek: `title` 45–60 znaků (pravidla výše), `description` 70–170, titulní fotka (`foto:`), aspoň jedna fotka v textu, FAQ (3 otázky),
  `slova` pro vyhledávání, `zdroje` z úředních stránek.
- Výpisy kategorií a témat skládají popis automaticky (`popisSeo`) – musí zůstat 70–170 znaků.

## Při přidání stránky nebo země

1. Vyplnit `title`/`description` v jazyce země (vlastní text, ne převzatý z jiné země). Titulek podle „Titulky, které Google nepřepíše“.
2. `npm run build && node scripts/kontrola-seo.mjs` → 0 chyb, 0 varování.
3. Po nasazení se změněné stránky samy ohlásí vyhledávačům (IndexNow), Google čte sitemapu.

## Unikátnost obsahu (proti „thin / duplicate content“)

Penalizace za podobnost nehrozí, ale Google podobné stránky nezaindexuje nebo je sloučí. Proto platí pro každou novou i upravenou stránku:

1. **Měřit:** po buildu `node scripts/kontrola-podobnosti.mjs` (běží i v GitHub Actions, nasazení nezastaví). Cíl: žádná dvojice indexovaných stránek nad 80 % shody (pětice slov, Jaccard), šablonový text v jazyce země pod 20 %, u uk/en verzí pod 35 %. `--prah 0.6 --vse` ukáže všechny dvojice nad 60 %.
2. **Místní obsah místo obecného:** perex, „Pro koho / pro koho ne“, „Po podpisu“ a FAQ každé stránky píšeme pro danou zemi – konkrétní úřad a e-služba (Regitra, e-CSDD, Zulassungsstelle…), lhůty, poplatky, limity hotovosti, zákon. Odvozené země (AT, CH z DE) **nesmí převzít `landing` beze změny** – minimálně vlastní perex, `po`, `hodiSe`/`nehodiSe` a 3 FAQ. Vlastní texty AT/CH stránek odvozených z DE jsou v `src/obsah/at/_eigen.ts` a `src/obsah/ch/_eigen.ts` (stránka končí `vlastni(stranka, '<slug>')`), jejich uk/en překlady v `src/preklady/at|ch/_eigen.ts`.
3. **FAQ podle země:** aspoň 3 otázky, které se v dané zemi opravdu hledají (ne překlad obecných otázek). Obecná otázka o ochraně dat smí být jen jedna.
4. **Motorka vs. auto a další odvozené vzory:** odvozená stránka má vlastní perex, `po` a FAQ (např. VIN na rámu, výbava, helma, technická kontrola motocyklů) – shoda s „rodičem“ pod 75 %. uk/en verze motorky dostávají vlastní „online“, „Po podpisu“ a 2 FAQ ze `src/preklady/motorka.ts` (AT/CH z `_eigen.ts`).
5. **Šablonový text držet krátký:** obecné bloky (kroky, podpora, e-mail) jsou na stránce jednou a stručně; okno podpory je v `<template>` a vkládá se až po interakci, takže se neindexuje. Nové obecné bloky do landingu nepřidávat – každý nový blok musí nést text specifický pro zemi/dokument.
6. **uk/en verze:** kromě překladu vždy místní kontext pro cizince (co přinést na úřad, zda úřad přijme dvojjazyčnou smlouvu, místní e-služba). Blok „Pro cizince v <zemi>“ se skládá automaticky ze `src/preklady/cizinci.ts` podle země a typu dokumentu (vozidla / bydlení / ostatní) – nová země = doplnit texty en a uk. Věty společné všem dokumentům země tam nepatří (šablonový text). Když GSC verze hromadně neindexuje, dát `noindex` všemu kromě rozcestníků.
7. **Textové stránky:** podmínky užití a ochrana údajů mají `noindex` a nejsou v sitemapě; „O nás“ se indexuje jen tam, kde má vlastní text (AT a CH ne) – řídí `indexovatInfo` v `src/obsah/informace.ts`.
8. **Balíčky:** stránka balíčku skládá „Po podpisu“ a kontrolu z dokumentů země; vlastní `title`, `description` a `perex` balíčku musí jmenovat zemi a její postup (ne kopie z DE).
9. **Nestavět stránky bez poptávky** a každou novou stránku prolinkovat z poradny (článek ↔ vzor).
10. **„Procházeno – momentálně neindexováno“ v GSC** = Google stránku viděl a nechtěl. Žádost o indexaci nepomůže – stránku nejdřív
    obsahově odlišit (hlavně AT/CH/DE a nové země), teprve pak požádat znovu.
