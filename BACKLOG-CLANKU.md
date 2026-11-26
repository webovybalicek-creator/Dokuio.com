# 📝 Dokuio – backlog článků poradny

Stav k 26. 11. 2026: **180 článků** (CZ 28, SK 26, PL 26, DE 25, AT 25, CH 25, HU 25). Články jsou v `src/content/poradna/<země>/<slug>.md`,
kategorie a témata v `src/obsah/<země>/_poradna.ts`. Původní backlog z 19. 11. je hotový – všechny P1/P2 položky jsou publikované.

**Pravidla pro každý článek**
- SEO podle [SEO.md](SEO.md): title 45–60 znaků, description 70–170 (víc build nepustí), v jazyce země, titulní fotka `foto:` + fotka v textu (alt v jazyce země).
- Fakta jen z úředních zdrojů (e-Sbírka / Slov-Lex / ISAP / gesetze-im-internet / RIS / Fedlex, úřední portály) do `zdroje:`.
- Vždy vyplnit `dokumenty:` (1–4 vzory) – podle toho se článek automaticky ukáže na stránce vzoru (blok „Mohlo by vás zajímat“).
- FAQ 3 otázky formulované jako skutečné dotazy z GSC, `slova:` pro hledání. Lhůty a částky ověřit k datu publikace.
- Nová témata jen tam, kde je doložená poptávka v GSC.

## Jednotná sada témat (stav 26. 11. 2026)

| Téma | 🇨🇿 cz | 🇸🇰 sk | 🇵🇱 pl | 🇩🇪 de | 🇦🇹 at | 🇨🇭 ch |
|---|---|---|---|---|---|---|
| Prodej auta | jak-prodat-auto | ako-predat-auto | jak-sprzedac-samochod | auto-privat-verkaufen | auto-privat-verkaufen-oesterreich | auto-privat-verkaufen-schweiz |
| Prodej na splátky | prodej-auta-na-splatky | predaj-auta-na-splatky | sprzedaz-samochodu-na-raty | auto-auf-raten-verkaufen | auto-auf-raten-verkaufen-oesterreich | auto-auf-raten-verkaufen-schweiz |
| Prodej motorky | prodej-motorky | predaj-motorky | sprzedaz-motocykla | motorrad-privat-verkaufen | motorrad-verkaufen-oesterreich | motorrad-verkaufen-schweiz |
| Pokuta po prodeji | pokuta-po-prodeji-auta | pokuta-po-predaji-auta | mandat-po-sprzedazy-auta | bussgeld-nach-autoverkauf | strafe-nach-autoverkauf-oesterreich | busse-nach-autoverkauf-schweiz |
| Darování auta | darovani-auta | darovanie-auta | darowizna-samochodu | auto-verschenken | auto-verschenken-oesterreich | auto-verschenken-schweiz |
| Přepis / registrace | prepis-auta | prepis-vozidla | przerejestrowanie-samochodu (+ pcc-3) | auto-ummelden-halterwechsel | auto-ab-und-anmelden | halterwechsel-strassenverkehrsamt |
| Koupě ojetiny | koupe-ojeteho-auta | kupa-jazdeneho-auta | zakup-uzywanego-samochodu | gebrauchtwagen-privat-kaufen | gebrauchtwagen-kaufen-oesterreich | occasion-kaufen-schweiz |
| Půjčka známému | pujcka-kamaradovi | pozicka-kamaratovi | pozyczka-dla-znajomego | privatdarlehen-freunde | privatdarlehen-oesterreich | privatdarlehen-schweiz |
| Uznání dluhu | uznani-dluhu | uznanie-dlhu | uznanie-dlugu | schuldanerkenntnis-bgb | schuldanerkenntnis-oesterreich | schuldanerkennung-betreibung |
| Dlužník nezaplatil / upomínka | dluznik-nezaplatil | dlznik-nezaplatil | wezwanie-do-zaplaty-jak-napisac | mahnung-schreiben | mahnung-oesterreich | mahnung-betreibung-schweiz |
| Promlčení | promlceni-dluhu | premlcanie-dlhu | przedawnienie-dlugu | verjaehrung-forderungen | verjaehrung-oesterreich | verjaehrung-schweiz |
| Darování peněz | darovani-penez-v-rodine | darovanie-penazi-a-veci | darowizna-w-rodzinie | schenkung-geld-familie | schenkung-oesterreich | schenkung-schweiz |
| Limit hotovosti | limit-platby-v-hotovosti | limit-platby-v-hotovosti (26. 11.) | – | – | – | – |
| Půjčení věci | pujceni-veci-znamemu | pozicanie-veci-znamemu | uzyczenie-rzeczy-znajomemu | sachen-verleihen-leihe | sachen-verleihen-oesterreich | sachen-verleihen-gebrauchsleihe |
| Řemeslník / dílo | smlouva-s-remeslnikem | zmluva-s-remeselnikom | umowa-z-fachowcem | handwerker-werkvertrag | werkvertrag-handwerker-oesterreich | werkvertrag-handwerker-schweiz |
| Reklamace | reklamace-zbozi | reklamacia-tovaru | reklamacja-towaru | gewaehrleistung-maengel | gewaehrleistung-oesterreich | gewaehrleistung-schweiz |
| Zamítnutá reklamace | zamitnuta-reklamace | zamietnuta-reklamacia | odrzucona-reklamacja | reklamation-abgelehnt | reklamation-abgelehnt-oesterreich | reklamation-abgelehnt-schweiz |
| Vrácení zboží (e-shop) | vraceni-zbozi-z-e-shopu | vratenie-tovaru-z-e-shopu | zwrot-towaru-kupionego-online | widerrufsrecht-online-kauf | ruecktritt-online-kauf-fagg | rueckgabe-online-kauf-schweiz |
| Bazar / inzerát | prodej-pres-bazar-a-inzerat | predaj-cez-bazar-a-inzerat | sprzedaz-rzeczy-przez-ogloszenie | privatverkauf-kleinanzeigen | privatverkauf-inserat-oesterreich | privatverkauf-inserat-schweiz |
| Plná moc – forma | plna-moc-kdy-overit | splnomocnenie-kedy-overit | pelnomocnictwo-kiedy-notariusz | vollmacht-form-beglaubigung | vollmacht-oesterreich | vollmacht-schweiz |
| Dítě v cizině bez rodiče | cestovani-s-ditetem-bez-rodice | cestovanie-dietata-bez-rodica | wyjazd-dziecka-za-granice | kind-reist-ohne-eltern | kind-reist-ohne-eltern-oesterreich | kind-reist-ohne-eltern-schweiz |
| Trvalý pobyt v cizím bytě | trvaly-pobyt-v-cizim-byte | trvaly-pobyt-v-cudzom-byte (26. 11.) | – | – | – | – |
| Pronájem bytu | jak-pronajmout-byt | najom-bytu-zabezpeka | jak-wynajac-mieszkanie | wohnung-vermieten | wohnung-vermieten-oesterreich | wohnung-vermieten-schweiz |
| Kauce | kauce-u-najmu | (v najom-bytu-zabezpeka) | kaucja-za-mieszkanie | mietkaution | kaution-mietwohnung-oesterreich | mietkaution-schweiz |
| Podnájem | podnajem-bytu | podnajom-bytu | podnajem-mieszkania | untervermietung | untervermietung-oesterreich | untermiete-schweiz |
| Výpověď z nájmu | vypoved-z-najmu | vypoved-z-najmu-bytu | wypowiedzenie-najmu-mieszkania | wohnung-kuendigen | mietvertrag-kuendigen-oesterreich | wohnung-kuendigen-schweiz |
| Dohoda místo výpovědi | dohoda-o-skonceni-najmu-misto-vypovedi | dohoda-o-skonceni-najmu-namiesto-vypovede | porozumienie-zamiast-wypowiedzenia-najmu | mietaufhebungsvertrag-statt-kuendigung | mietvertrag-einvernehmlich-aufloesen | mietvertrag-aufheben-statt-kuendigen |

Jen CZ: `vypoved-povinneho-ruceni` (institut specificky český). 🇭🇺 Maďarsko má 25 článků se stejnými tématy (poradna `/hu/tanacsadas/`).

**Záměrné mezery:** limit hotovosti a trvalý pobyt jsou jen v CZ a SK – v PL/DE/AT/CH buď limit pro soukromé osoby neexistuje, nebo se trvalý pobyt nehlásí se souhlasem vlastníka formou, pro kterou máme vzor.
Doplnit jen pokud se v GSC objeví poptávka.

## Otevřené

- **Týdenní přehled GSC (od 2. 12. 2026):** u stránek s pozicí 20+ rozšířit obsah, u pozice 5–20 s nízkým CTR upravit titulek a perex; nová témata jen s doloženou poptávkou.
- **SK nový Občiansky zákonník (účinnost 1. 7. 2027):** do 1. 3. 2027 projít všechny SK články (nájom, premlčanie, pôžička, darovanie, zábezpeka) – naplánovaná úloha.
- **PL:** sledovat novelu (tlačítko odstoupení u e-shopů). **SK/EU:** sledovat limit hotovosti podle nařízení EU o AML (strop 10 000 € od 2027) – týká se SK článku o limitu.
- **Obecné vzory bez článku:** výpověď smlouvy, čestné prohlášení, výpověď z pracovního poměru (a jejich ekvivalenty) – článek jen pokud GSC ukáže poptávku.
