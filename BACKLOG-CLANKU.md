# 📝 Dokuio – backlog článků poradny

Stav k 19. 11. 2026 (77 článků publikováno). Články se píšou do `src/content/poradna/<země>/<slug>.md` (struktura kategorií a témat v `src/obsah/<země>/_poradna.ts`).

**Pravidla pro každý článek**
- SEO metadata podle [SEO.md](SEO.md): title ≤ 70 znaků, description 70–170, v jazyce země, titulní fotka `foto:` + fotka v textu.
- Fakta jen z úředních zdrojů (zákon v e-Sbírce / Slov-Lex / ISAP / gesetze-im-internet / RIS, úřední portály). Zdroje do `zdroje:`.
- Odkaz na 1–4 vzory (`dokumenty:`), krátké FAQ (3 otázky) pro rich výsledky, `slova:` pro hledání.
- Lhůty a částky ověřit k datu publikace; při změně zákona aktualizovat `aktualizovano:`.
- Rozsah 500–1 200 slov, nadpisy jako kroky, shrnutí na konci. Žádné vymyšlené statistiky.
- Priorita: **P1** = hledanost + přímá vazba na vzor, **P2** = doplňující, **P3** = dlouhý ocas.


## Hledanost CZ (Google Ads Plánovač, Česko, 11/2025–10/2026, rozpětí – účet bez kampaní)

| Hledanost / měsíc | Dotazy |
|---|---|
| **1 000–10 000** | kupní smlouva auto · kupní smlouva na auto vzor · kupní smlouva vzor · darovací smlouva · nájemní smlouva (+ vzor) · odstoupení od smlouvy · plná moc (+ vzor) · plná moc k přepisu vozidla · prodej auta · přepis auta · souhlas s vycestováním dítěte · **předžalobní výzva** · **čestné prohlášení (+ vzor)** · **smlouva o dílo** · dohoda o provedení práce |
| 100–1 000 | darovací smlouva vzor / auto · dohoda o skončení nájmu · kupní smlouva motorka · odstoupení od kupní smlouvy vzor · podnájemní smlouva · pracovní smlouva vzor · promlčení dluhu · předávací protokol auto / byt · předžalobní výzva vzor · reklamace vzor · reklamační protokol · smlouva o dílo vzor · smlouva o půjčce vzor · smlouva o výpůjčce · smlouva o zápůjčce · splátkový kalendář · uznání dluhu (+ vzor) · vrácení zboží · výpověď nájemní smlouvy vzor · výpověď povinného ručení · výpověď z nájmu |
| 10–100 | dohoda o splátkách · kauce nájem · kupní smlouva pozemek · nájemní smlouva garáž · plná moc k převzetí zásilky · potvrzení o převzetí peněz · souhlas s trvalým pobytem · upomínka dluhu |

**Závěr:** nové vzory podle hledanosti: **předžalobní výzva**, **čestné prohlášení**, **smlouva o dílo** (vše 1–10 tis.), pak smlouva o výpůjčce. Dohodu o provedení práce a pracovní smlouvu zatím ne (pracovní právo = vyšší riziko).
Souhlas s vycestováním dítěte má 1–10 tis. → převést do všech zemí jako první z „jen CZ“ dokumentů.

## Jednotná sada témat ve všech zemích

Každé téma má článek v každé zemi – stejný obsah, ale **přepsaný podle práva a úřadů dané země** (ne překlad).
Nová země = napsat všech 8 základních témat. Nové téma = napsat ho pro všechny země najednou.

| Téma | 🇨🇿 cz | 🇸🇰 sk | 🇵🇱 pl | 🇩🇪 de | 🇦🇹 at | 🇨🇭 ch | 🇭🇺 hu |
|---|---|---|---|---|---|---|---|
| Prodej auta | jak-prodat-auto | ako-predat-auto | jak-sprzedac-samochod | auto-privat-verkaufen | auto-privat-verkaufen-oesterreich | auto-privat-verkaufen-schweiz | auto-eladasa |
| Přepis / registrace | prepis-auta | prepis-vozidla | przerejestrowanie-samochodu (+ pcc-3) | auto-ummelden-halterwechsel | auto-ab-und-anmelden | halterwechsel-strassenverkehrsamt | forgalmi-atiras |
| Půjčka známému | pujcka-kamaradovi | pozicka-kamaratovi | pozyczka-dla-znajomego | privatdarlehen-freunde | privatdarlehen-oesterreich | privatdarlehen-schweiz | kolcson-ismerosnek |
| Uznání dluhu | uznani-dluhu | uznanie-dlhu | uznanie-dlugu | schuldanerkenntnis-bgb | schuldanerkenntnis-oesterreich | schuldanerkennung-betreibung | tartozaselismeres |
| Promlčení | promlceni-dluhu | premlcanie-dlhu | przedawnienie-dlugu | verjaehrung-forderungen | verjaehrung-oesterreich | verjaehrung-schweiz | elevules |
| Reklamace | reklamace-zbozi | reklamacia-tovaru | reklamacja-towaru | gewaehrleistung-maengel | gewaehrleistung-oesterreich | gewaehrleistung-schweiz | kellekszavatossag |
| Vrácení zboží (e-shop) | vraceni-zbozi-z-e-shopu | vratenie-tovaru-z-e-shopu | zwrot-towaru-kupionego-online | widerrufsrecht-online-kauf | ruecktritt-online-kauf-fagg | rueckgabe-online-kauf-schweiz | elallas-online-vasarlastol |
| Plná moc – forma | plna-moc-kdy-overit | splnomocnenie-kedy-overit | pelnomocnictwo-kiedy-notariusz | vollmacht-form-beglaubigung | vollmacht-oesterreich | vollmacht-schweiz | meghatalmazas-mikor-kell-tanu |
| Koupě ojetiny | koupe-ojeteho-auta | kupa-jazdeneho-auta | zakup-uzywanego-samochodu | gebrauchtwagen-privat-kaufen | gebrauchtwagen-kaufen-oesterreich | occasion-kaufen-schweiz | hasznalt-auto-vasarlasa |
| Darování a daně | darovani-penez-v-rodine | darovanie-penazi-a-veci | darowizna-w-rodzinie | schenkung-geld-familie | schenkung-oesterreich | schenkung-schweiz |
| Nájem – kauce | kauce-u-najmu | najom-bytu-zabezpeka | kaucja-za-mieszkanie | mietkaution | kaution-mietwohnung-oesterreich | mietkaution-schweiz | kaucio-alberletnel |
| Nájem – výpověď | vypoved-z-najmu | vypoved-z-najmu-bytu | wypowiedzenie-najmu-mieszkania | wohnung-kuendigen | mietvertrag-kuendigen-oesterreich | wohnung-kuendigen-schweiz | alberlet-felmondasa |

Jen pro CZ: vypoved-povinneho-ruceni, cestovani-s-ditetem-bez-rodice, trvaly-pobyt-v-cizim-byte, limit-platby-v-hotovosti (vzory/instituty jsou specificky české).

**🇭🇺 Maďarsko:** spuštěno 20. 11. 2026 – 14 vzorů, poradna `/hu/tanacsadas/` se všemi 12 tématy.

**SK pozor:** od 1. 7. 2027 platí nový Občiansky zákonník (zákon č. 260/2026 Z. z.) – před tímto datem projít všechny SK vzory a články (nájem, premlčanie, pôžička, darovanie…).

**Místní odlišnosti, které musí článek zachytit** (příklady): SK prepis do 30 dní na jednom inšpektoráte; PL rejestracja 30 dní + PCC; AT tabulky patří majiteli (Abmeldung); CH tabulky u držitele, Code 178, žádné zákonné právo vrátit zboží z e-shopu; promlčení CZ 3 r., SK 3 r., PL 6 r. ke konci roku, DE 3 r. ke konci roku, AT 3/30 let, CH 10/5 let.

Legenda stavu: ✅ publikováno · ✍️ rozpracováno · ⬜ v backlogu

## 🇨🇿 Česko – /cz/poradna/

| Stav | P | Kategorie / téma | Článek (pracovní titulek) | Hlavní dotaz | Vzory |
|---|---|---|---|---|---|
| ✅ | P1 | auto / prodej-auta | Jak prodat auto v roce 2026 – postup krok za krokem | prodej auta | kupní smlouva auto, protokol, plná moc |
| ✅ | P1 | auto / prepis-a-registr | Přepis auta: lhůta 10 pracovních dnů, poplatky, co s sebou | přepis auta | plná moc k přepisu |
| ⬜ | P1 | auto / koupe-ojetiny | Koupě ojetiny: kontrola VIN, tachometru a zástavy před zaplacením | koupě ojetého auta | kupní smlouva auto |
| ✅ | P1 | auto / povinne-ruceni | Výpověď povinného ručení: lhůty 6 týdnů, 8 dní, po nehodě | výpověď povinného ručení | výpověď povinného ručení |
| ⬜ | P2 | auto / prodej-auta | Prodej auta na splátky: výhrada vlastnictví a bezpečná platba | prodej auta na splátky | kupní smlouva auto |
| ⬜ | P2 | auto / prodej-auta | Prodej motorky, skútru a čtyřkolky – na co nezapomenout | prodej motorky | kupní smlouva motorka |
| ⬜ | P2 | auto / prepis-a-registr | Plná moc k přepisu vozidla: ověření podpisu na Czech POINTu | plná moc přepis auta | plná moc k přepisu |
| ⬜ | P3 | auto / prodej-auta | Prodali jste auto a přišla pokuta? Jak pomůže předávací protokol | pokuta po prodeji auta | předávací protokol |
| ✅ | P1 | penize / pujcka | Půjčka kamarádovi nebo v rodině – jak ji sepsat | smlouva o zápůjčce | zápůjčka, potvrzení, uznání dluhu |
| ✅ | P1 | penize / dluhy | Uznání dluhu – k čemu je a jak ho sepsat | uznání dluhu | uznání dluhu |
| ✅ | P1 | penize / dluhy | Promlčení dluhu: 3 roky, 10 let a jak ho zastavit | promlčení dluhu | uznání dluhu |
| ⬜ | P2 | penize / pujcka | Splátkový kalendář: jak ho nastavit a co když se splátka zpozdí | splátkový kalendář | zápůjčka |
| ⬜ | P2 | penize / dary-a-dane | Darování peněz v rodině: smlouva, kdy se platí daň | darování peněz | darovací smlouva |
| ⬜ | P2 | penize / pujcka | Platba v hotovosti: limit 270 000 Kč a jak ho nepřekročit | limit hotovost | potvrzení o převzetí peněz |
| ⬜ | P3 | penize / dary-a-dane | Darovací smlouva na auto: přepis a pojištění | darování auta | darovací smlouva |
| ⬜ | P1 | bydleni / najem-bytu | Jak pronajmout byt: smlouva, kauce, předávací protokol | pronájem bytu | nájemní smlouva, protokol k bytu |
| ✅ | P1 | bydleni / konec-najmu | Výpověď z nájmu: výpovědní doba a důvody (nájemce i pronajímatel) | výpověď z nájmu | výpověď z nájmu, dohoda o skončení |
| ✅ | P1 | bydleni / konec-najmu | Kauce: kolik smí být a kdy se vrací | kauce nájem | nájemní smlouva, protokol |
| ⬜ | P2 | bydleni / podnajem | Podnájem bytu: kdy potřebuji souhlas pronajímatele | podnájem | podnájemní smlouva |
| ⬜ | P2 | bydleni / najem-bytu | Drobné opravy a údržba: co platí nájemník | drobné opravy nájem | nájemní smlouva |
| ⬜ | P2 | bydleni / najem-bytu | Nájemní smlouva v angličtině pro cizince | nájemní smlouva anglicky | nájemní smlouva (CZ/EN) |
| ⬜ | P3 | bydleni / konec-najmu | Dohoda o skončení nájmu místo výpovědi | dohoda o ukončení nájmu | dohoda o skončení nájmu |
| ✅ | P1 | nakupy / vraceni-zbozi | Vrácení zboží z e-shopu do 14 dnů | vrácení zboží e-shop | odstoupení od smlouvy |
| ✅ | P1 | nakupy / reklamace | Reklamace zboží – lhůty a práva | reklamace | reklamace |
| ⬜ | P2 | nakupy / reklamace | Obchod zamítl reklamaci – co dál (ČOI, mimosoudní řešení) | zamítnutá reklamace | reklamace |
| ⬜ | P2 | nakupy / prodej-veci | Prodej přes bazar a inzerát: kupní smlouva a podvody | prodej bazar | kupní smlouva na věc |
| ⬜ | P3 | nakupy / vraceni-zbozi | Vrácení zboží koupeného na tržišti a od Číny | vrácení zboží zahraničí | odstoupení |
| ✅ | P1 | rodina-a-urady / plna-moc | Plná moc: kdy stačí obyčejná a kdy úředně ověřená | plná moc vzor | plná moc |
| ⬜ | P1 | rodina-a-urady / deti | Cestování s dítětem bez rodiče: souhlas s vycestováním | souhlas s vycestováním dítěte | souhlas s vycestováním |
| ⬜ | P2 | rodina-a-urady / trvaly-pobyt | Trvalý pobyt v cizím bytě: souhlas vlastníka a přihlášení | souhlas s trvalým pobytem | souhlas s trvalým pobytem |

## 🇸🇰 Slovensko – /sk/poradna/

| Stav | P | Kategorie / téma | Článek | Hlavní dotaz | Vzory |
|---|---|---|---|---|---|
| ✅ | P1 | auto / predaj-auta | Ako predať auto na Slovensku | predaj auta | kúpna zmluva auto, protokol, splnomocnenie |
| ✅ | P1 | auto / prepis-vozidla | Prepis auta: 30 dní, poplatky, elektronicky cez slovensko.sk | prepis auta | splnomocnenie na prepis |
| ⬜ | P2 | auto / kupa-auta | Kúpa jazdeného auta: overenie histórie a VIN | kúpa jazdeného auta | kúpna zmluva auto |
| ✅ | P1 | peniaze / pozicka | Pôžička medzi známymi: zmluva a splátky | zmluva o pôžičke | pôžička, potvrdenie |
| ✅ | P1 | peniaze / dlhy | Uznanie dlhu: písomne, 10 rokov premlčanie | uznanie dlhu | uznanie dlhu |
| ⬜ | P2 | peniaze / dary | Darovacia zmluva: peniaze a hnuteľné veci | darovacia zmluva | darovacia zmluva |
| ⬜ | P2 | peniaze / pozicka | Limit platieb v hotovosti 15 000 € | hotovosť limit | potvrdenie o prevzatí |
| ✅ | P1 | nakupy / vratenie-tovaru | Vrátenie tovaru z e-shopu do 14 dní | odstúpenie od zmluvy | odstúpenie |
| ✅ | P1 | nakupy / reklamacia | Reklamácia: 24 mesiacov, vybavenie do 30 dní | reklamácia | reklamácia |
| ✅ | P2 | urady / splnomocnenie | Splnomocnenie: kedy treba úradne overený podpis | splnomocnenie vzor | splnomocnenie |

## 🇵🇱 Polska – /pl/poradnik/

| Stav | P | Kategorie / téma | Článek | Hlavní dotaz | Vzory |
|---|---|---|---|---|---|
| ✅ | P1 | samochody / sprzedaz-auta | Jak sprzedać samochód krok po kroku | sprzedaż samochodu | umowa kupna-sprzedaży auta, protokół |
| ✅ | P1 | samochody / rejestracja | PCC-3 po zakupie auta: 2%, 14 dni, nowy próg 3000 zł | PCC-3 samochód | umowa kupna-sprzedaży auta |
| ✅ | P1 | samochody / rejestracja | Rejestracja auta w 30 dni i pełnomocnictwo (17 zł) | rejestracja samochodu | pełnomocnictwo do rejestracji |
| ⬜ | P2 | samochody / zakup-auta | Zakup używanego auta: Historia Pojazdu i VIN | zakup używanego auta | umowa, protokół |
| ✅ | P1 | pieniadze / pozyczka | Umowa pożyczki: forma dokumentowa powyżej 1000 zł, PCC | umowa pożyczki | pożyczka, pokwitowanie |
| ⬜ | P1 | pieniadze / darowizny | Darowizna w rodzinie: SD-Z2 w 6 miesięcy i przelew | darowizna SD-Z2 | umowa darowizny |
| ✅ | P2 | pieniadze / dlugi | Uznanie długu i przedawnienie | uznanie długu | uznanie długu |
| ✅ | P1 | zakupy / zwrot | Zwrot zakupu z internetu w 14 dni | odstąpienie od umowy | odstąpienie |
| ✅ | P1 | zakupy / reklamacja | Reklamacja: 2 lata, odpowiedź w 14 dni | reklamacja | reklamacja |
| ⬜ | P2 | zakupy / zwrot | Sprzedaż rzeczy na OLX: umowa i PCC | sprzedaż rzeczy umowa | umowa kupna-sprzedaży |
| ✅ | P2 | sprawy / pelnomocnictwo | Pełnomocnictwo: kiedy wystarczy zwykłe | pełnomocnictwo wzór | pełnomocnictwo |

## 🇩🇪 Deutschland – /de/ratgeber/

| Stav | P | Kategorie / téma | Článek | Hlavní dotaz | Vzory |
|---|---|---|---|---|---|
| ✅ | P1 | auto / auto-verkaufen | Auto privat verkaufen – Schritt für Schritt | Auto privat verkaufen | Kaufvertrag, Übergabeprotokoll, Vollmacht |
| ⬜ | P1 | auto / auto-verkaufen | Gewährleistungsausschluss beim Privatverkauf richtig formulieren | Gewährleistungsausschluss privat | Kaufvertrag Gebrauchtwagen |
| ✅ | P1 | auto / zulassung | Auto ummelden mit Vollmacht: Unterlagen und SEPA-Mandat | Vollmacht Zulassungsstelle | Vollmacht Zulassung |
| ⬜ | P2 | auto / auto-kaufen | Gebrauchtwagen privat kaufen: Checkliste | Gebrauchtwagen kaufen | Kaufvertrag, Übergabeprotokoll |
| ✅ | P1 | geld / darlehen | Privatdarlehen unter Freunden: Vertrag, Zinsen, Kündigung | privater Darlehensvertrag | Darlehensvertrag, Quittung |
| ⬜ | P1 | geld / schenkung | Schenkung: wann ein Notar nötig ist und welche Freibeträge gelten | Schenkungsvertrag | Schenkungsvertrag |
| ✅ | P2 | geld / schulden | Schuldanerkenntnis: Form und Verjährung | Schuldanerkenntnis | Schuldanerkenntnis |
| ✅ | P1 | einkauf / widerruf | Widerrufsrecht: 14 Tage, Muster-Widerrufsformular | Widerruf | Widerruf |
| ✅ | P1 | einkauf / gewaehrleistung | Mängel reklamieren: 2 Jahre, Nacherfüllung, Frist setzen | Mängelanzeige | Mängelanzeige |
| ✅ | P2 | alltag / vollmacht | Vollmacht für Post und Behörden | Vollmacht Muster | Vollmacht |

## 🇦🇹 Österreich – /at/ratgeber/

| Stav | P | Kategorie / téma | Článek | Hlavní dotaz | Vzory |
|---|---|---|---|---|---|
| ✅ | P1 | auto / auto-verkaufen | Auto privat verkaufen in Österreich | Auto verkaufen Österreich | Kaufvertrag, Übergabeprotokoll, Vollmacht |
| ✅ | P1 | auto / zulassung | Auto abmelden und anmelden: Unterlagen, Kosten | Auto abmelden | Vollmacht Zulassungsstelle |
| ⬜ | P2 | auto / auto-kaufen | Gebrauchtwagen kaufen: Pickerl, Typenschein, Kaufvertrag | Gebrauchtwagen kaufen Österreich | Kaufvertrag |
| ⬜ | P1 | geld / schenkung | Schenkung in Österreich: Notariatsakt und Schenkungsmeldung | Schenkungsvertrag Österreich | Schenkungsvertrag |
| ✅ | P1 | geld / darlehen | Privatdarlehen in Österreich | Darlehensvertrag privat | Darlehensvertrag |
| ✅ | P1 | einkauf / widerruf | Rücktritt vom Online-Kauf nach dem FAGG | Rücktrittsrecht Online | Rücktritt |
| ✅ | P1 | einkauf / gewaehrleistung | Gewährleistung nach dem VGG: Fristen und Rechte | Gewährleistung Österreich | Mängelrüge |
| ✅ | P2 | alltag / vollmacht | Vollmacht in Österreich | Vollmacht Muster Österreich | Vollmacht |

## 🇨🇭 Schweiz – /ch/ratgeber/

| Stav | P | Kategorie / téma | Článek | Hlavní dotaz | Vzory |
|---|---|---|---|---|---|
| ✅ | P1 | auto / auto-verkaufen | Auto privat verkaufen in der Schweiz | Auto verkaufen Schweiz | Kaufvertrag Auto, Protokoll, Quittung |
| ✅ | P1 | geld / schulden | Schuldanerkennung und Betreibung | Schuldanerkennung | Schuldanerkennung |
| ✅ | P1 | einkauf / rueckgabe | Online-Kauf zurückgeben: Was in der Schweiz gilt (kein Widerrufsrecht) | Rückgaberecht Schweiz | Widerruf Haustürgeschäft |
| ✅ | P1 | einkauf / gewaehrleistung | Mängelrüge: sofort rügen, Wandelung, Minderung | Mängelrüge | Mängelrüge |
| ✅ | P1 | geld / darlehen | Privatdarlehen in der Schweiz | Darlehensvertrag privat | Darlehensvertrag |
| ✅ | P2 | auto / strassenverkehrsamt | Auto einlösen: Schilder, Versicherungsnachweis, MFK | Auto einlösen | Vollmacht Strassenverkehrsamt |
| ⬜ | P2 | geld / schenkung | Schenkung und kantonale Schenkungssteuer | Schenkungssteuer | Schenkungsvertrag |

## Plán publikace

- Hotovo: jednotná sada 8 témat ve všech zemích (viz matice). Další: zbývající P1/P2 pro CZ, pak stejné téma do všech zemí najednou.
- Týden 2–3: P2. P3 průběžně podle dotazů ze Search Console (záložka Výkon → Dotazy).
- Každý měsíc: z Search Console vybrat dotazy s vysokými zobrazeními a nízkým CTR → nový článek nebo úprava titulku.
