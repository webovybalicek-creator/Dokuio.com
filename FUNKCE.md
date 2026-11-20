# 📝 Dokuio – přehled funkcí

Stav k 19. 11. 2026. Statický web (Astro) na hostingu Exon, nasazení z GitHubu (push do `main`).
Vše se počítá v prohlížeči uživatele; na server jde jen to, co je níže výslovně uvedené.

## Země a dokumenty

Jednotná sada 11 dokumentů v každé zemi (podle práva a úředních zdrojů dané země, s tipy „Před podpisem zkontrolujte“ a zdroji):

| Dokument | 🇨🇿 CZ | 🇸🇰 SK | 🇵🇱 PL | 🇩🇪 DE | 🇦🇹 AT | 🇨🇭 CH |
|---|---|---|---|---|---|---|
| Kupní smlouva na auto | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Předávací protokol k vozidlu | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Plná moc k přepisu / registraci vozidla | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Smlouva o zápůjčce | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Potvrzení o převzetí peněz | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Uznání dluhu | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Darovací smlouva | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Plná moc (obecná) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Kupní smlouva na věc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Odstoupení od smlouvy (e-shop, 14 dní) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓¹ |
| Reklamace | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Předžalobní výzva / výzva k zaplacení | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Smlouva o dílo (řemeslník, oprava) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Smlouva o výpůjčce (bezplatné půjčení věci) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Čestné prohlášení | ✓ | ✓ | ✓ | ✓² | ✓² | ✓² |
| Výpověď smlouvy (operátor, pojištění, energie, posilovna, předplatné) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Výpověď z pracovního poměru (zaměstnanec, i návrh dohody) | ✓ | ✓ | ✓ | ✓³ | ✓ | ✓ |
| Dohoda o splátkách (splátkový kalendář) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Souhlas s vycestováním dítěte | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

¹ Ve Švýcarsku zákonné odstoupení u nákupů online neexistuje – CH má místo toho odvolání podomního/telefonického prodeje (Art. 40a OR).
² DE/AT/CH: obecná „Erklärung“ – výslovně ne eidesstattliche Versicherung (ta jen před příslušným úřadem či soudem).

³ DE: výpověď jen vlastnoručně podepsaná na papíře (§ 623 BGB) – podpis na obrazovce se nenabízí.

Výpovědi, dohoda o splátkách a souhlas s cestou dítěte (20. 11. 2026) jsou i v 🇭🇺 HU; nové kategorie Práce a Rodina/cestování ve všech zemích. Metadata vzorů: title vždy „… {rok} – vzor PDF zdarma“ (místní obdoba), description končí „zdarma v PDF i Wordu“.

Nové vzory (20. 11. 2026) mají i 🇭🇺 HU: fizetési felszólítás, vállalkozási szerződés, nyilatkozat. Nové kategorie „Služby a řemeslníci“ (a obdoby v každé zemi). AT/CH verze se skládají z DE přes `sablony/nahrad.ts` (nahrazení textů) a mají vlastní právo (ABGB § 1170a, § 1333; OR 102, 104, 363–375). SK: OZ byl zrušen zák. č. 260/2026 Z. z. (nový OZ s pozdější účinností) – šablony na to upozorňují.

Česko má navíc: kupní smlouvu na motorku, nájemní a podnájemní smlouvu (i dvojjazyčně CZ/EN), předávací protokol k bytu,
výpověď a dohodu o skončení nájmu, výpověď povinného ručení, souhlas s trvalým pobytem a s vycestováním dítěte.

🇭🇺 **Maďarsko (spuštěno 20. 11. 2026):** `src/obsah/hu/`, `src/sablony/hu/` – 14 vzorů (adásvétel autó s tanúk, jegyzőkönyv,
meghatalmazás k átírás i obecná, kölcsön, elismervény, ajándékozás, tartozáselismerés, elállás, kellékszavatosság,
lakásbérlet + jegyzőkönyv + felmondás, adásvétel věci), maďarské rozhraní `src/i18n/hu.ts`, částky slovy `sablony/hu/szamok.ts`,
info stránky, e-mail. Vzory ověřené 19. 11. 2026 na njt.jog.gov.hu (oprava: prodávající hlásí prodej auta do 15 dní,
304/2009. Korm. r. 2. § (1); povinné náležitosti smlouvy podle 3. §; osvobození darů i pro sourozence). Poradna `/hu/tanacsadas/` – 12 článků. Doporučená kontrola maďarským advokátem (ügyvéd).
Obecně: země s `aktivni: false` se vůbec negeneruje (ani stránky, ani sitemap).

🇺🇦🇬🇧 **Jazykové verze (20. 11. 2026):** dokument země může mít ukrajinskou a anglickou verzi – `/<zeme>/uk/<slug>/`, `/<zeme>/en/<slug>/`
(+ průvodce, dvojjazyčné prázdné vzory PDF/DOCX, rozcestník `/<zeme>/<jazyk>/` s katalogem a hledáním). Právo a šablona zůstávají země,
přeložené je rozhraní, nápovědy a texty stránky; smlouva je dvojjazyčná (originál + překlad pod každým odstavcem, doložka „rozhoduje
znění v jazyce země“). Přepínač jazyka nad náhledem, v průvodci a na rozcestníku; koncept v prohlížeči je společný pro všechny jazyky;
hreflang mezi originálem a verzemi. Hotová ukázka: CZ kupní smlouva na auto (uk, en). Poradna a balíčky se nepřekládají.
Překlady se přidávají po jednom souboru `src/preklady/<zeme>/<jazyk>/<slug>.ts`, build hlídá úplnost – návod `PREKLADY.md`.

Přidání země nebo dokumentu: viz `NOVA-ZEME.md`.

## Pro uživatele

- **Průvodce vyplněním** krok za krokem s nápovědou u každého pole, živý náhled, úpravy textu, podpis na obrazovce.
- **Stažení PDF a Word** – vyplněná verze i prázdný vzor.
- **Poslání PDF na e-mail** – v průvodci, u prázdného vzoru i u balíčku. Brandovaný e-mail v jazyce země s prosbou o příspěvek.
  PDF se jednou odešle a neukládá. Formulář se ukáže, až je nastavené SMTP.
- **Rozpracované koncepty bez účtu** – vše se průběžně ukládá jen v prohlížeči („Uloženo v tomto prohlížeči“),
  po návratu se dokument obnoví s možností „Začít znovu“, na stránce země je seznam rozpracovaných dokumentů.
  Při nové verzi šablony se vyplněné údaje převezmou.
- **Odkaz pro druhou stranu** – údaje zabalené v odkazu (za `#`, na server nejdou); slouží i k pokračování na jiném zařízení.
- **Předvyplnění z navazujícího dokumentu** (např. protokol a plná moc z kupní smlouvy).
- **Balíčky podle situace** (prodej auta, půjčka, pronájem…) – vše v jednom PDF.
- **Rozcestník „Nevíte, jaký dokument?“** a vyhledávání podle situace.
- **Připomínky do kalendáře (.ics)** – lhůty (přepis auta, PCC-3, SD-Z2, vyřízení reklamace…) a splátky.
- **Splátkový kalendář** jako příloha smlouvy.
- **QR kód v PDF** → stránka `/overeni/` s verzí šablony a zdroji.
- **Načtení firmy z ARES** podle IČO (jen CZ).
- **Částky slovy** v jazyce a měně země.
- **Podpora projektu** – okno po stažení s výběrem částky (Stripe, přepočet do místní měny), zpětná vazba „Co zlepšit“.

## Technika a provoz

- Web: Astro 7, `src/obsah/<země>/` (stránky), `src/sablony/<země>/` (šablony), `src/i18n/` (texty rozhraní).
- Nasazení: GitHub Actions → ZIP + `deploy.php` na Exon (jen změněné soubory).
- E-mail: `public/odeslat-email.php` + PHPMailer (`public/lib/phpmailer`). SMTP `mail.next01.exon.io:465` (SSL),
  účet `info@dokuio.com`; heslo z GitHub secretu `SMTP_PASSWORD` (případně `SMTP_USER`), konfigurace se vytvoří při deployi.
  Limity: 5 e-mailů/h a 20/den z jedné IP, 10/den na adresu, 300/den celkem.
- Indexace zapnutá (`indexovat: true`). Search Console pod webovybalicek@gmail.com (doménová služba dokuio.com, sitemap odeslaná).
- Pravidelné ohlašování vyhledávačům: po každém deployi IndexNow (Bing, Seznam…) se změněnými stránkami
  (`deploy/indexnow.py`, klíč `public/<klíč>.txt`), každé pondělí celá sitemapa (`.github/workflows/indexace.yml`).
  Google si sitemapu čte sám.
- Google Analytics 4: samostatný účet „Dokuio“ (G-DKDXRKV5TB), načítá se až po souhlasu v cookie liště.
- Švýcarsko: jazyk `de-CH` (`src/i18n/de-ch.ts` – „ss“ místo „ß“, CHF), šablony v `src/sablony/ch/` odvozené z DE
  s textem podle OR/SchKG (Fedlex).
- Testy: Playwright skripty (projdou všechny dokumenty každé země, stáhnou PDF), kontrola přetékání na 320/360/768 px.

## Otevřené

- Kontrola šablon místním advokátem (hlavně nájem/podnájem a zahraniční šablony).
- Upozornění 1. 3. 2027: příprava SK vzorů na nový Občiansky zákonník (účinnost 1. 7. 2027) – naplánovaná úloha.
- Další země (Slovinsko, Chorvatsko…), CH ve francouzštině/italštině.
- PL: tlačítko pro odstoupení – sledovat novelu zákona o právech spotřebitele.
