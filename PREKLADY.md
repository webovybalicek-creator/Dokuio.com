# 📝 Jazykové verze dokumentů (ukrajinsky a anglicky)

Každý dokument země může mít **jazykové verze** – zatím ukrajinštinu (`uk`) a angličtinu (`en`).
Jsou pro Ukrajince a cizince, kteří v dané zemi žijí: **právo, šablona a zdroje zůstávají země**, mění se jen
jazyk rozhraní, nápověd a textů stránky. Výsledná smlouva je **dvojjazyčná**: pod každým odstavcem originálu
(v jazyce země) je překlad, na konci jazyková doložka „rozhoduje znění v jazyce země“.

Referenční ukázka (kompletní): [`src/preklady/cz/uk/kupni-smlouva-auto.ts`](src/preklady/cz/uk/kupni-smlouva-auto.ts)
a [`src/preklady/cz/en/kupni-smlouva-auto.ts`](src/preklady/cz/en/kupni-smlouva-auto.ts).

| Adresa | Co to je |
|---|---|
| `/<zeme>/<jazyk>/` | rozcestník verze – katalog přeložených dokumentů a hledání (vznikne, jen když má verze aspoň 1 dokument) |
| `/<zeme>/<jazyk>/<slug>/` | landing page dokumentu |
| `/<zeme>/<jazyk>/<slug>/vytvorit/` | průvodce vyplněním |
| `/<zeme>/<jazyk>/<slug>/<slug>-<jazyk>-vzor.pdf` / `.docx` | prázdný dvojjazyčný vzor |

Generuje se **jen** dokument, který má soubor překladu a projde kontrolou úplnosti. Nic napůl přeloženého
se na web nedostane – build spadne a vypíše, co chybí.

---

## Jak přidat překlad jednoho dokumentu

1. **Najděte originál:** stránka `src/obsah/<zeme>/<slug>.ts`, šablona (import na prvním řádku stránky,
   např. `src/sablony/cz/kupni-smlouva-auto.ts`). Slug = název souboru stránky = `sablona.souborPdf`.
2. **Zkopírujte ukázku** `src/preklady/cz/uk/kupni-smlouva-auto.ts` do `src/preklady/<zeme>/<jazyk>/<slug>.ts`
   (např. `src/preklady/pl/uk/umowa-pozyczki.ts`) a přepište obsah podle originálu. Soubor se načte sám.
3. Nahoře nastavte `sablona: { kod, verze }` přesně podle originální šablony.
4. Spusťte `npm run build && node scripts/kontrola-seo.mjs` – obojí musí projít bez chyb.
   Build vypíše každou chybu ve tvaru `src/preklady/…/<slug>.ts: <co> – <kde>`.
5. Prohlédněte `npm run dev` → `/<zeme>/<jazyk>/<slug>/` a `/vytvorit/`: vyplňte pár polí, stáhněte PDF a Word,
   zkontrolujte prázdný vzor. Přepínač jazyka se na originálu i verzích objeví sám.

### Co soubor obsahuje (typ `PrekladDokumentu` v [`src/preklady/typy.ts`](src/preklady/typy.ts))

| Klíč | Odkud v originálu | Kde se zobrazí |
|---|---|---|
| `nazev`, `nazevA` | stránka `nazev`, `nazevA` | nadpisy, drobečky, „Stáhněte si …“ |
| `katalog.popis`, `katalog.slova` | stránka `katalog` (kategorie a ilustrace se berou z originálu) | rozcestník verze, hledání |
| `landing` (celý objekt) | stránka `landing` – **stejný počet** položek `obsah`, `kroky`, `online`, `hodiSe`, `nehodiSe`, `po`, `faq` | landing page, FAQ do JSON-LD |
| `vytvorit` | stránka `vytvorit` | `<title>` a popis průvodce |
| `pruvodce.kroky` | šablona `kroky[].id` → `nazev`, `popis` | kroky průvodce |
| `pruvodce.pole` | **každé** pole všech kroků podle `id` → `popis`, `napoveda`, `placeholder`, `moznosti` (klíč = `hodnota`) | formulář |
| `pruvodce.vysvetleni` | šablona `clanky[].vysvetleni` (ve stejném pořadí, `''` kde originál nemá) | „Co to znamená?“ v náhledu |
| `pruvodce.coDal`, `pruvodce.kontrola` | šablona `coDal`, `kontrola` (stejný počet, **stejné URL** odkazů `[text](url)`) | „Hotovo. Co dál?“, „Před podpisem zkontrolujte“ |
| `pruvodce.slovo` | šablona `slovo` – povinné, jen když ho originál má | texty rozhraní („Náhled …“) |
| `pruvodce.podpisPoznamka`, `pruvodce.prevzit` | šablona `podpisPoznamka`, `prevzit.nazev` – jen když je originál má | průvodce |
| `pruvodce.pripominky` | šablona `pripominky` – název připomínky (nebo jeho začátek) → `{ nazev, popis }`; u splátek jen `{ nazev }` (popis se sestaví sám, viz níže) | soubor .ics |
| `dokument` | šablona `nazev`, `podnadpis`, `uvod`, `podpisy`, `clanky` | překladová část smlouvy |
| `dokument.prilohy` | texty tabulek v přílohách (splátkový kalendář): nadpis, hlavička, poznámka – text nebo jeho začátek → překlad; souhrn s částkou se překládá sám (viz níže) | přílohy „originál / překlad“ |
| `dokument.volby` | jen když se pole typu volba vkládá do textu přes `{{id}}` a popisek z formuláře se do věty nehodí | překlad hodnoty v textu |

**Odstavce `dokument.clanky`** kopírují originál 1:1: stejný počet článků i odstavců. Prostý odstavec = řetězec.
Odstavec s volbou (`volba` / `vice` v šabloně) = objekt `{ moznosti: { stejné klíče }, uvod?, uvodVzor?, dalsi? }`:
`uvod` přesně tehdy, když ho má originál (u `vice` vždy), `uvodVzor` u volby bez `uvod` (text nad výčtem v prázdném vzoru),
`dalsi` když ho má originál. Pole `{{id}}` musí být stejná jako v originálu – kromě odvozených (`odvozene`, např. `{{cena_slovy}}`),
ta se v překladu **vynechávají** (částka slovy je jen v originále, v jazyce a měně země; v překladu stačí `{{cena}}`, které má měnu země).
Podmínky `kdyz` se přebírají z originálu automaticky.

Jazykovou doložku, místo a datum („м. … дата …“), předponu článku („Стаття“, „Article“) a poznámku do patičky
**nepište** – doplní se samy z `src/i18n/<jazyk>.ts` a z textů země (`Texty.dokument.dvojjazycne`).

### Splátkový kalendář a připomínky splátek (texty s částkami a počty)

Věty s proměnnými čísly se slovníkem (přesná shoda / začátek textu) přeložit nedají. Proto je nesou šablony
**strukturovaně** a celý překlad dodá jazyk verze – společně pro všech 7 zemí, v souboru překladu se nepíší:

- **Souhrn přílohy** („Celkem 12 000 Kč v 12 měsíčních splátkách, vždy do 15. dne v měsíci.“, „Insgesamt … in N Monatsraten“,
  „Razem … zł w N miesięcznych ratach“…): tabulka má vedle `popis` i `souhrn: { celkem, pocet, den? }` (`Tabulka.souhrn`,
  pomocník `souhrnSplatek()` v `src/sablony/terminy.ts`; `celkem` už s měnou země). Verze vypíše „originál / překlad“, překlad
  = `dokument.splatky.popis(souhrn)` z `src/i18n/uk.ts` / `en.ts`. Nová šablona s kalendářem: k `popis` přidat `souhrn`.
- **Popis připomínky splátky** („Splátka zápůjčky: 1 000 Kč (celkem 12 splátek).“): `pripominkySplatek()` v `terminy.ts` dává
  připomínce `splatky: <počet>`. Verze složí popis z přeloženého názvu (s částkou) + `dokument.splatky.celkem(počet)`.
  V `pruvodce.pripominky` stačí přeložit název (`'Splátka zápůjčky': { nazev: 'Loan instalment' }`), `popis` se u splátek ignoruje.
- Nadpis přílohy, hlavičku tabulky a poznámku pod ní dál překládá `dokument.prilohy` (jsou to pevné texty).

---

## Pravidla překladu

1. **Rozhoduje originál.** Překlad je informativní. Smlouva obsahuje doložku, že při rozporu rozhoduje znění v jazyce země –
   v překladu ji nijak nezpochybňujte ani neoslabujte.
2. **Žádné nové právní tvrzení.** Překládejte, co je v originálu – nepřidávejte lhůty, zákony, povinnosti ani rady, které tam nejsou.
   Je v pořádku dovysvětlit pojem (co je „malý technický průkaz“) nebo upozornit na dvojjazyčnost („Змінений абзац пишіть чеською“).
3. **Právní instituty země** se překládají popisně a **při prvním výskytu na stránce/v dokumentu s originálním termínem v závorce**:
   „договір купівлі-продажу (kupní smlouva)“, „compulsory motor insurance (povinné ručení)“. Dál už jen překlad.
4. **Úřady, registry a zákony** originálním názvem + vysvětlení: „реєстр транспортних засобів (registr vozidel)“,
   „Act No. 89/2012 Coll., the Civil Code (občanský zákoník)“. Čísla zákonů a paragrafy přesně jako v originále
   (`Sb.`/`Z. z.`/`Dz.U.` v ukrajinštině ponechte, v angličtině `Coll.` u CZ/SK, jinak originál). Názvy webů a databází
   v odkazech ponechte (kontrola hlídá stejné URL).
5. **Hodnoty, které jdou do dokumentu**, zůstávají podle země: příklady adres, SPZ, čísel účtů, měna v popisku („Купівельна ціна (Kč)“).
   U volných textů, které uživatel píše do smlouvy (popis vad, barva), dejte příklad v jazyce země s překladem v závorce –
   uživatel tak pozná, že text půjde do obou jazykových verzí tak, jak ho napíše.
6. **Možnosti voleb** (`pruvodce.pole.<id>.moznosti`) jsou popisky formuláře; do originálu smlouvy jde vždy text země.
7. **Titulky (SEO):** `landing.title` = „<název> <země> {rok} – <fráze>“, max. 70 znaků, unikátní:
   - uk: fráze **„зразок PDF безкоштовно“**, země v 1. pádě: „Договір купівлі-продажу авто Чехія {rok} – зразок PDF безкоштовно“
   - en: fráze **„free PDF template“**: „Car Purchase Agreement Czech Republic {rok} – free PDF template“
   - názvy zemí: uk Чехія, Словаччина, Польща, Німеччина, Австрія, Швейцарія, Угорщина; en Czech Republic, Slovakia,
     Poland, Germany, Austria, Switzerland, Hungary (viz `zeme` v `src/i18n/uk.ts` / `en.ts`).
   - `landing.description` 70–170 znaků, vlastní text (ne kopie jiné země), zmínit dvojjazyčný PDF/Word a „безкоштовно“ / „free“.
   - `vytvorit.title` obsahuje zemi, aby se nepletl s jinými zeměmi.
8. **Katalog `slova`:** běžné dotazy v jazyce verze + originální název dokumentu (lidé ho vidí na úřadech): `'kupní smlouva'`.
9. **Ukrajinština:** spisovná, oslovení „ви“, uvozovky «…», apostrof ’ (U+2019), pomlčka –, terminologie podle slovníčku níže.
   **Angličtina:** britský pravopis (colour, tyre, licence), jednoduché věty, „the Seller“/„the Buyer“ s velkým písmenem v textu smlouvy.
10. Švýcarsko: v originálních termínech nikdy „ß“ (Strassenverkehrsamt).

## Co hlídá build

Registr [`src/preklady/index.ts`](src/preklady/index.ts) s kontrolou [`src/preklady/kontrola.ts`](src/preklady/kontrola.ts):

- soubor patří existujícímu dokumentu aktivní země a známému jazyku; `sablona.kod` a **`sablona.verze`** sedí s originálem,
- všechny kroky a pole (podle `id`), nápovědy a placeholdery přesně tam, kde je má originál, klíče možností voleb,
- počet článků, odstavců, typ odstavců (text × volba), klíče možností, `uvod`/`uvodVzor`/`dalsi`, pole `{{id}}`, párové `**`,
- počty položek landing page, `{rok}`, fráze a země v titulku, délka titulku a popisu, překlad kategorie a země v `src/i18n/<jazyk>.ts`,
- `vysvetleni`, `coDal`, `kontrola` (včetně URL odkazů), `slovo`, `podpisPoznamka`, `prevzit`.

`node scripts/kontrola-seo.mjs` navíc hlídá `<html lang>` (`uk-CZ`…), `og:locale`, unikátní titulky a vzájemnost hreflang.

**Změní se originál?** Kdo zvýší `verze` šablony, tomu build spadne na všech jejích překladech
(„originál je ve verzi 1.1, překlad je z verze 1.0“). Projděte změny originálu, upravte překlad a přepište `sablona.verze`.

---

## Jak to funguje (pro vývojáře)

| Soubor | Účel |
|---|---|
| `src/preklady/<zeme>/<jazyk>/<slug>.ts` | překlad jednoho dokumentu (`PrekladDokumentu`) |
| `src/preklady/typy.ts` | typ souboru překladu |
| `src/preklady/verze.ts` | `slozVerzi(sablona, preklad, jazyk)` – šablona verze (běží při buildu i v prohlížeči) |
| `src/preklady/kontrola.ts` | kontrola úplnosti proti originálu |
| `src/preklady/index.ts` | registr: `VERZE`, `jazykyDokumentu`, `hreflangDokumentu`, `ROZCESTNIKY_VERZI`, `HREFLANG_ROZCESTNIKU`, `katalogVerze`, `souvisejiciVerze` |
| `src/preklady/nacti.ts` | líné načtení šablony + překladu v průvodci |
| `src/i18n/uk.ts`, `src/i18n/en.ts` | texty rozhraní (`Texty`) + `ukVerze`/`enVerze` (`TextyVerze`: země, kategorie, doložka, rozcestník, SEO fráze) |
| `src/i18n/verze.ts` | typ `TextyVerze` a `proZemi` – sloučení jazyka verze s údaji země |
| `src/components/PrepinacJazyka.astro` | přepínač jazyka (landing nad náhledem vpravo, průvodce nahoře, rozcestník) |
| `src/pages/[zeme]/[jazyk]/…` | rozcestník, landing, průvodce, vzory PDF/DOCX verzí |

- **Složená šablona:** `slozVerzi` vrátí šablonu se stejným `kod` a `verze`, přeloženým průvodcem a `preklad` (existující mechanismus
  dvojjazyčného dokumentu z CZ/EN nájemní smlouvy) se `prekladVzdy: true` – překlad je ve verzi vždy zapnutý, bez přepínače.
  `jazykRozhrani` = jazyk verze; dokument (`jazyk`) zůstává v jazyce země. Ve formuláři jsou možnosti přeložené,
  do originálu dokumentu jde `Moznost.dokument` (text země).
- **Texty rozhraní:** `texty('uk', 'cs')` = ukrajinské rozhraní pro zemi s jazykem `cs`. Z jazyka země se převezme měna,
  doklad k vozidlu a kolonka VIN (z `vin.dokladAria`/`vin.pole`) a částky příspěvku. Částka slovy v dokumentu je jen v originále.
- **Koncepty:** klíč v `localStorage` je `dokuio:<kod>:<verze>` – společný pro originál i verze, přepnutí jazyka nic neztratí.
  Úprava odstavce uživatelem nahradí originál i překlad (upravený odstavec už překlad nemá – rozhraní na to upozorňuje).
- **SEO:** `<html lang>` = jazyk verze + region země (`uk-CZ`, `en-CZ`); `og:locale` = `uk_UA` / `en_GB`, protože Open Graph
  přijímá jen dvojice ze seznamu Facebooku (`uk_CZ` neexistuje) – cílení na zemi nese hreflang. hreflang spojuje originál
  a všechny verze téhož dokumentu (`cs-CZ`, `uk-CZ`, `en-CZ`, oba směry) a rozcestníky verzí se přidávají do společné skupiny
  rozcestníků. Verze jsou v `sitemap.xml` s hreflang, mají vlastní OG obrázky a JSON-LD v jazyce verze.
- **Poradna se nepřekládá:** na stránkách verzí se poradna nezobrazuje (ani v navigaci, ani v patičce), stejně jako balíčky
  a rozcestník „Nevíte, jaký dokument?“ – vedly by na texty v jazyce země. Originál je vždy o jeden klik přes přepínač jazyka.
  „Hodí se k tomu“ ukazuje jen dokumenty, které mají verzi ve stejném jazyce.
- **E-mail s PDF** chodí v jazyce země (šablona e-mailu na serveru), hlášky formuláře jsou v jazyce verze.

### Nový jazyk verze (např. ruština)

1. `src/i18n/<j>.ts`: `Texty` (kopie `en.ts`) + `TextyVerze` (země, `jazykZeme`, kategorie všech zemí, doložka, rozcestník, `titulekFraze`).
2. Registrace v `src/i18n/index.ts`: `TEXTY`, `JAZYKY_VERZI`, `NAZVY_JAZYKU`, `POPISEK_PREPINACE`.
3. V `Texty.dokument.dvojjazycne` každého jazyka země doplnit název nového jazyka (`cs.ts`, `sk.ts`, `pl.ts`, `de.ts`, `hu.ts`).
4. `scripts/kontrola-seo.mjs` → `VERZE` (kód jazyka → `og:locale`).

---

## Slovníček (konzistentní terminologie)

Originál | українською | in English. Při prvním výskytu: překlad + originál v závorce. Zákony a úřady vždy přesně podle šablony dané země.

### 🇨🇿 Česko (cs)

| Originál | Українською | English |
|---|---|---|
| kupní smlouva | договір купівлі-продажу | purchase agreement |
| darovací smlouva | договір дарування | gift agreement |
| smlouva o zápůjčce (zápůjčka) | договір позики | loan agreement |
| uznání dluhu | визнання боргу | acknowledgement of debt |
| dohoda o splátkách | угода про розстрочку (графік платежів) | instalment agreement |
| plná moc | довіреність | power of attorney |
| úředně ověřený podpis | офіційно засвідчений підпис | officially certified signature |
| nájemní smlouva / nájem bytu | договір оренди житла / оренда | residential lease agreement / tenancy |
| podnájem | суборенда | sublease |
| výpověď / výpovědní doba | повідомлення про розірвання / строк попередження | notice of termination / notice period |
| jistota (kauce) | гарантійний депозит | security deposit |
| odstoupení od smlouvy | відмова від договору | withdrawal from the contract |
| reklamace | рекламація (претензія щодо недоліків) | complaint about defects |
| předávací protokol | акт приймання-передачі | handover report |
| smlouva o dílo | договір підряду | contract for work |
| čestné prohlášení | заява під власну відповідальність | declaration on honour |
| předžalobní výzva | досудова вимога | letter before action |
| osvědčení o registraci vozidla / technický průkaz | свідоцтво про реєстрацію («малий техпаспорт») / технічний паспорт («великий техпаспорт») | registration certificate (small technical certificate) / technical certificate (large technical certificate) |
| registr vozidel, přepis vozidla | реєстр транспортних засобів, перереєстрація | vehicle register, transfer of registration |
| povinné ručení | обов’язкове страхування цивільної відповідальності | compulsory motor insurance |
| občanský zákoník (zákon č. 89/2012 Sb.) | Цивільний кодекс (Закон № 89/2012 Sb.) | Civil Code (Act No. 89/2012 Coll.) |

### 🇸🇰 Slovensko (sk)

| Originál | Українською | English |
|---|---|---|
| kúpna zmluva | договір купівлі-продажу | purchase agreement |
| darovacia zmluva | договір дарування | gift agreement |
| zmluva o pôžičke | договір позики | loan agreement |
| uznanie dlhu | визнання боргу | acknowledgement of debt |
| dohoda o splátkach | угода про розстрочку | instalment agreement |
| splnomocnenie | довіреність | power of attorney |
| úradne osvedčený podpis | офіційно засвідчений підпис | officially certified signature |
| nájomná zmluva | договір оренди | lease agreement |
| výpoveď / výpovedná lehota | повідомлення про розірвання / строк попередження | notice of termination / notice period |
| zábezpeka | гарантійний депозит | security deposit |
| odstúpenie od zmluvy | відмова від договору | withdrawal from the contract |
| reklamácia | рекламація | complaint about defects |
| preberací protokol | акт приймання-передачі | handover report |
| zmluva o dielo | договір підряду | contract for work |
| čestné vyhlásenie | заява під власну відповідальність | declaration on honour |
| výzva na zaplatenie | вимога про оплату | payment demand |
| osvedčenie o evidencii vozidla | свідоцтво про реєстрацію транспортного засобу | vehicle registration certificate |
| prepis vozidla, dopravný inšpektorát | перереєстрація, дорожня інспекція поліції | transfer of registration, traffic police inspectorate |
| Občiansky zákonník / Zákonník práce | Цивільний кодекс / Трудовий кодекс | Civil Code / Labour Code |

### 🇵🇱 Polsko (pl)

| Originál | Українською | English |
|---|---|---|
| umowa kupna-sprzedaży | договір купівлі-продажу | sale agreement |
| umowa darowizny | договір дарування | gift agreement |
| umowa pożyczki | договір позики | loan agreement |
| uznanie długu | визнання боргу | acknowledgement of debt |
| porozumienie o spłacie w ratach | угода про розстрочку | instalment agreement |
| pełnomocnictwo | довіреність | power of attorney |
| podpis notarialnie poświadczony | нотаріально засвідчений підпис | notarially certified signature |
| umowa najmu | договір оренди | tenancy agreement |
| wypowiedzenie / okres wypowiedzenia | повідомлення про розірвання / строк попередження | notice of termination / notice period |
| kaucja | гарантійний депозит | deposit |
| odstąpienie od umowy | відмова від договору | withdrawal from the contract |
| reklamacja (rękojmia) | рекламація (гарантійна відповідальність продавця) | complaint (statutory warranty) |
| protokół zdawczo-odbiorczy | акт приймання-передачі | handover report |
| umowa o dzieło | договір підряду | contract for a specific work |
| oświadczenie | заява | declaration |
| wezwanie do zapłaty | вимога про оплату | payment demand |
| dowód rejestracyjny, rejestracja pojazdu | свідоцтво про реєстрацію, реєстрація транспортного засобу | registration certificate, vehicle registration |
| PCC-3 | декларація PCC-3 (податок на цивільно-правові дії) | PCC-3 return (tax on civil-law transactions) |
| Kodeks cywilny / Kodeks pracy | Цивільний кодекс / Кодекс праці | Civil Code / Labour Code |

### 🇩🇪 Německo (de)

| Originál | Українською | English |
|---|---|---|
| Kaufvertrag | договір купівлі-продажу | purchase agreement |
| Schenkungsvertrag | договір дарування | gift agreement |
| Darlehensvertrag | договір позики | loan agreement |
| Schuldanerkenntnis | визнання боргу | acknowledgement of debt |
| Ratenzahlungsvereinbarung | угода про розстрочку | instalment agreement |
| Vollmacht | довіреність | power of attorney |
| öffentlich beglaubigte Unterschrift | публічно засвідчений підпис | publicly certified signature |
| Mietvertrag | договір оренди | tenancy agreement |
| Kündigung / Kündigungsfrist | повідомлення про розірвання / строк попередження | notice of termination / notice period |
| Mietkaution | гарантійний депозит за оренду | rent deposit |
| Widerruf | відкликання договору | withdrawal |
| Mängelanzeige, Gewährleistung | повідомлення про недоліки, гарантійна відповідальність | notice of defects, statutory warranty |
| Übergabeprotokoll | акт приймання-передачі | handover report |
| Werkvertrag | договір підряду | contract for work |
| Erklärung | заява | declaration |
| Mahnung | нагадування про оплату | payment reminder |
| Zulassungsbescheinigung Teil I / Teil II | свідоцтво про реєстрацію, частина I / частина II | registration certificate Part I / Part II |
| Zulassungsstelle | реєстраційний орган транспортних засобів | vehicle registration office |
| BGB | Цивільний кодекс Німеччини (BGB) | German Civil Code (BGB) |

### 🇦🇹 Rakousko (at)

| Originál | Українською | English |
|---|---|---|
| Kaufvertrag | договір купівлі-продажу | purchase agreement |
| Schenkungsvertrag | договір дарування | gift agreement |
| Darlehensvertrag | договір позики | loan agreement |
| Schuldanerkenntnis | визнання боргу | acknowledgement of debt |
| Ratenvereinbarung | угода про розстрочку | instalment agreement |
| Vollmacht | довіреність | power of attorney |
| beglaubigte Unterschrift | засвідчений підпис | certified signature |
| Mietvertrag | договір оренди | tenancy agreement |
| Kündigung / Kündigungsfrist | повідомлення про розірвання / строк попередження | notice of termination / notice period |
| Kaution | гарантійний депозит | deposit |
| Rücktritt | відмова від договору | withdrawal |
| Mängelrüge, Gewährleistung | претензія щодо недоліків, гарантійна відповідальність | notice of defects, statutory warranty |
| Übergabeprotokoll | акт приймання-передачі | handover report |
| Werkvertrag | договір підряду | contract for work |
| Mahnung | нагадування про оплату | payment reminder |
| Dienstverhältnis | трудові відносини | employment relationship |
| Zulassungsschein / Typenschein | свідоцтво про реєстрацію / паспорт транспортного засобу | registration certificate / type certificate |
| Zulassungsstelle, „Pickerl“ (§ 57a-Begutachtung) | реєстраційний пункт, техогляд («Pickerl») | registration office, roadworthiness inspection (“Pickerl”) |
| ABGB | Загальний цивільний кодекс Австрії (ABGB) | Austrian General Civil Code (ABGB) |

### 🇨🇭 Švýcarsko (ch – bez „ß“)

| Originál | Українською | English |
|---|---|---|
| Kaufvertrag (Occasion) | договір купівлі-продажу (вживаного авто) | purchase agreement (used car) |
| Schenkungsvertrag | договір дарування | gift agreement |
| Darlehensvertrag | договір позики | loan agreement |
| Schuldanerkennung | визнання боргу | acknowledgement of debt |
| Abzahlungsvereinbarung | угода про розстрочку | instalment agreement |
| Vollmacht | довіреність | power of attorney |
| beglaubigte Unterschrift | засвідчений підпис | certified signature |
| Mietvertrag | договір оренди | tenancy agreement |
| Kündigung / Kündigungsfrist | повідомлення про розірвання / строк попередження | notice of termination / notice period |
| Mietkaution | гарантійний депозит за оренду | rent deposit |
| Widerruf (Haustürgeschäft) | відкликання договору (продаж поза торговим приміщенням) | withdrawal (doorstep sale) |
| Mängelrüge | претензія щодо недоліків | notice of defects |
| Übergabeprotokoll | акт приймання-передачі | handover report |
| Werkvertrag | договір підряду | contract for work |
| Mahnung, Betreibung | нагадування про оплату, примусове стягнення боргу (Betreibung) | payment reminder, debt enforcement (Betreibung) |
| Fahrzeugausweis | свідоцтво про реєстрацію (Fahrzeugausweis) | vehicle registration document |
| Strassenverkehrsamt | кантональна служба дорожнього руху | cantonal road traffic office |
| OR / ZGB | Зобов’язальне право Швейцарії (OR) / Цивільний кодекс Швейцарії (ZGB) | Swiss Code of Obligations (OR) / Swiss Civil Code (ZGB) |

### 🇭🇺 Maďarsko (hu)

| Originál | Українською | English |
|---|---|---|
| adásvételi szerződés | договір купівлі-продажу | sale agreement |
| ajándékozási szerződés | договір дарування | gift agreement |
| kölcsönszerződés | договір позики | loan agreement |
| tartozáselismerő nyilatkozat | визнання боргу | acknowledgement of debt |
| részletfizetési megállapodás | угода про розстрочку | instalment agreement |
| meghatalmazás | довіреність | power of attorney |
| teljes bizonyító erejű magánokirat (két tanú) | приватний документ з повною доказовою силою (два свідки) | private document with full probative force (two witnesses) |
| lakásbérleti szerződés | договір оренди житла | residential lease agreement |
| felmondás / felmondási idő | повідомлення про розірвання / строк попередження | notice of termination / notice period |
| óvadék (kaució) | гарантійний депозит | deposit |
| elállás | відмова від договору | withdrawal from the contract |
| kellékszavatosság | гарантійна відповідальність за недоліки | statutory warranty for defects |
| átadás-átvételi jegyzőkönyv | акт приймання-передачі | handover report |
| vállalkozási szerződés | договір підряду | contract for work |
| nyilatkozat | заява | declaration |
| fizetési felszólítás | вимога про оплату | payment demand |
| forgalmi engedély / törzskönyv | свідоцтво про реєстрацію / паспорт транспортного засобу | registration certificate / vehicle title document |
| átírás (kormányablak) | перереєстрація (урядове вікно – kormányablak) | transfer of ownership (government office – kormányablak) |
| Ptk. (2013. évi V. törvény) | Цивільний кодекс Угорщини (Ptk.) | Hungarian Civil Code (Ptk.) |
