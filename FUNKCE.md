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
| Podnájemní smlouva (pokoj / celý byt) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Dohoda o skončení nájmu | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Kupní smlouva na motorku (skútr, čtyřkolka) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
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

Motorka (20. 11. 2026) se ve všech zemích skládá ze smlouvy na auto přes `sablony/motorka.ts` (`naMotorku`) – právní text stejný, mění se nápovědy, příklady, VIN na rámu a tip k výbavě.

Česko má navíc: výpověď povinného ručení (jinde stačí obecná výpověď smlouvy; pojištění auta se při prodeji řeší jinak). Souhlas s trvalým pobytem má i 🇸🇰 SK (súhlas vlastníka s osvedčeným podpisom, § 3 ods. 8 písm. d) zák. č. 253/1998 Z. z.); 🇩🇪 DE má místo něj Wohnungsgeberbestätigung (§ 19 BMG). AT, CH, PL a HU používají úřední formuláře (Meldezettel, formulář obce, szállásadói nyilatkozat), vlastní vzor proto nemají. Článek „Jak pronajmout byt“ (20. 11. 2026) je ve všech zemích.

🇭🇺 **Maďarsko (spuštěno 20. 11. 2026):** `src/obsah/hu/`, `src/sablony/hu/` – 14 vzorů (adásvétel autó s tanúk, jegyzőkönyv,
meghatalmazás k átírás i obecná, kölcsön, elismervény, ajándékozás, tartozáselismerés, elállás, kellékszavatosság,
lakásbérlet + jegyzőkönyv + felmondás, adásvétel věci), maďarské rozhraní `src/i18n/hu.ts`, částky slovy `sablony/hu/szamok.ts`,
info stránky, e-mail. Vzory ověřené 19. 11. 2026 na njt.jog.gov.hu (oprava: prodávající hlásí prodej auta do 15 dní,
304/2009. Korm. r. 2. § (1); povinné náležitosti smlouvy podle 3. §; osvobození darů i pro sourozence). Poradna `/hu/tanacsadas/` – 12 článků.
🇭🇷 **Chorvatsko (spuštěno 20. 11. 2026):** `src/obsah/hr/`, `src/sablony/hr/` – 13 vzorů (kupoprodajni ugovor za automobil s rokem 15 dní,
primopredajni zapisnik vozila i stana, potvrda o primitku novca, ugovor o zajmu, izjava o priznanju duga, ugovor o darovanju,
punomoć, kupoprodajni ugovor, jednostrani raskid (NN 117/22), reklamacija, ugovor o najmu stana, otkaz najma), chorvatské rozhraní
`src/i18n/hr.ts`, měna EUR, částky slovy `sablony/hr/brojevi.ts`, info stránky (AZOP), e-mail. Ověřeno 20. 11. 2026 na narodne-novine.nn.hr,
porezna-uprava.gov.hr a gov.hr (upravna pristojba platí kupec v STP; porez na darove 4 % nad 6.700 €, osvobozena užší rodina;
otkazni rok najmu 3 měsíce). 21. 11. 2026 doplněno dalších 11 vzorů jako v ostatních zemích: motocikl, opomena pred tužbu, ugovor o djelu, ugovor o posudbi, sporazum o obročnoj otplati, sporazumni raskid najma, ugovor o podnajmu (jen s dopuštěním najmodavce), izjava, otkaz ugovora, otkaz ugovora o radu (ZR čl. 122), suglasnost za putovanje djeteta (Your Europe) – celkem 24 vzorů; kategorie Usluge, Posao, Obitelj. Poradna `/hr/savjetnik/` – 25 článků.
🇸🇮 **Slovinsko (spuštěno 21. 11. 2026):** `src/obsah/si/`, `src/sablony/si/` – 24 vzorů jako v HR (kupoprodajna pogodba za avto a motor, zapisnik o izročitvi vozila in predaji stanovanja, potrdilo o prejemu denarja, posojilna pogodba, pripoznava dolga, darilna pogodba, pooblastilo, kupoprodajna pogodba, odstop od pogodbe (vzorčni obrazec UL 139/22), reklamacija, najemna pogodba (SZ-1), odpoved najemne pogodbe, sporazumna razveza, podnajemna pogodba, opomin pred tožbo, podjemna pogodba, pogodba o posodbi, dogovor o obročnem odplačilu, izjava, odpoved pogodbe, odpoved pogodbe o zaposlitvi (ZDR-1 čl. 94), soglasje za potovanje otroka). Slovinské rozhraní `src/i18n/sl.ts` (duál: `st()`), EUR, částky slovy `sablony/si/stevila.ts`, zdroje `sablony/si/viri.ts`, info stránky (Informacijski pooblaščenec), e-mail. Ověřeno 21. 11. 2026 (Uradni list, PISRS, FURS, gov.si): prepis vozidla do 15 dní, overitev podpisu u notáře max 10 € (pogodba) / 16 € (pooblastilo), dar osvobozen 1. dědický řád (manžel, potomci), movitosti do 5.000 €, napoved FURS do 15 dní; OZ promlčení 5 let (čl. 346), lichva >50 % nad zákonné úroky (čl. 377); SZ-1 písemná smlouva s povinnými náležitostmi, výpověď pronajímatele jen z čl. 103 s lhůtou ≥90 dní, kauce neomezená; ZVPot-1 odstoupení 14 dní, reklamace do 2 měsíců od zjištění, oprava do 30 dní, 30 dní na odmítnutí, odpovědnost 2 roky; ZDR-1 výpověď zaměstnance 15/30 dní (smlouvou max 60). Poradna `/si/svetovalnica/` – 25 článků.
🇷🇴 **Rumunsko (spuštěno 21. 11. 2026):** `src/obsah/ro/`, `src/sablony/ro/` – 24 vzorů jako v SI (contract de vânzare-cumpărare auto a moto jako doplněk úředního formuláře Model 2026 ITL 054, procese-verbale vozidlo a byt, chitanță, contract de împrumut, recunoaștere de datorie, contract de donație jen jako dar manual do 25.000 lei, împuternicire, contract de vânzare-cumpărare, formular de retragere (OUG 34/2014), reclamație (OUG 140/2021), contract de închiriere, denunțare, acord de încetare, subînchiriere, notificare de plată, contract de antrepriză, comodat, acord de plată eșalonată, declarație pe propria răspundere, notificare de încetare, demisie (Codul muncii čl. 81), declarație pro cestu nezletilého – text pro notáře). Rumunské rozhraní `src/i18n/ro.ts` (plurál s „de“), RON/lei, částky slovy `sablony/ro/numere.ts`, zdroje `sablony/ro/surse.ts`, info stránky (ANSPDCP), e-mail, vlajka. Ověřeno 21. 11. 2026 (legislatie.just.ro, ANAF, ANPC, Poliția de Frontieră): převod vozidla na tipizat ITL 054 (Ordin 772/966/123/2026, MO 680/2026) s fiskální kontrolou prodávajícího i kupujícího, transcriere do 90 dní; hotovost mezi FO max 50.000 lei/transakci (L 70/2015); darování notářsky, výjimka dar manual movitostí do 25.000 lei (CC čl. 1011), dary mezi příbuznými nezdaněny (ANAF); úrok písemně, max zákonný +50 % (OG 13/2011); promlčení 3 roky (čl. 2517), uznání přerušuje (čl. 2537); nájem registrovat u ANAF do 30 dní (C168), registrovaná smlouva = exekuční titul (čl. 1798); odstoupení 14 dní, odpovědnost 2 roky; výpověď zaměstnance max 20/45 pracovních dní; cesta dítěte bez rodiče – notářské prohlášení (L 248/2005 čl. 30). Poradna `/ro/ghid/` – 25 článků.
Obecně: země s `aktivni: false` se vůbec negeneruje (ani stránky, ani sitemap).

🇺🇦🇬🇧 **Jazykové verze (20. 11. 2026):** dokument země může mít ukrajinskou a anglickou verzi – `/<zeme>/uk/<slug>/`, `/<zeme>/en/<slug>/`
(+ průvodce, dvojjazyčné prázdné vzory PDF/DOCX, rozcestník `/<zeme>/<jazyk>/` s katalogem a hledáním). Právo a šablona zůstávají země,
přeložené je rozhraní, nápovědy a texty stránky; smlouva je dvojjazyčná (originál + překlad pod každým odstavcem, doložka „rozhoduje
znění v jazyce země“). Přepínač jazyka nad náhledem, v průvodci a na rozcestníku; koncept v prohlížeči je společný pro všechny jazyky;
hreflang mezi originálem a verzemi. Hotová ukázka: CZ kupní smlouva na auto (uk, en). Poradna a balíčky se nepřekládají.
Překlady se přidávají po jednom souboru `src/preklady/<zeme>/<jazyk>/<slug>.ts`, build hlídá úplnost – návod `PREKLADY.md`.

21. 11. 2026: 🇭🇷 HR a 🇸🇮 SI mají ukrajinské a anglické verze všech 24 vzorů (96 souborů v `src/preklady/hr|si/uk|en/`).

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
- Google Analytics 4: samostatný účet „Dokuio“ (G-DKDXRKV5TB), načítá se až po souhlasu v cookie liště. Interní návštěvnost (Vladimírova IP, pravidlo „Vladimír“ ve značce Google) je vyloučená filtrem „Internal Traffic“ (aktivní od 20. 11. 2026); při změně IP pravidlo upravit.
- Švýcarsko: jazyk `de-CH` (`src/i18n/de-ch.ts` – „ss“ místo „ß“, CHF), šablony v `src/sablony/ch/` odvozené z DE
  s textem podle OR/SchKG (Fedlex).
- Testy: Playwright skripty (projdou všechny dokumenty každé země, stáhnou PDF), kontrola přetékání na 320/360/768 px.

## Otevřené

- Upozornění 1. 3. 2027: příprava SK vzorů na nový Občiansky zákonník (účinnost 1. 7. 2027) – naplánovaná úloha.
- Další země (Bulharsko…), CH ve francouzštině/italštině; uk/en verze pro RO.
- PL: tlačítko pro odstoupení – sledovat novelu zákona o právech spotřebitele.
