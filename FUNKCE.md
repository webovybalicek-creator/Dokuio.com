# 📝 Dokuio – přehled funkcí

Stav k 19. 11. 2026. Statický web (Astro) na hostingu Exon, nasazení z GitHubu (push do `main`).
Vše se počítá v prohlížeči uživatele; na server jde jen to, co je níže výslovně uvedené.

## Země a dokumenty

Jednotná sada 11 dokumentů v každé zemi (podle práva a úředních zdrojů dané země, s tipy „Před podpisem zkontrolujte“ a zdroji):

| Dokument | 🇨🇿 CZ | 🇸🇰 SK | 🇵🇱 PL | 🇩🇪 DE | 🇦🇹 AT |
|---|---|---|---|---|---|
| Kupní smlouva na auto | ✓ | ✓ | ✓ | ✓ | ✓ |
| Předávací protokol k vozidlu | ✓ | ✓ | ✓ | ✓ | ✓ |
| Plná moc k přepisu / registraci vozidla | ✓ | ✓ | ✓ | ✓ | ✓ |
| Smlouva o zápůjčce | ✓ | ✓ | ✓ | ✓ | ✓ |
| Potvrzení o převzetí peněz | ✓ | ✓ | ✓ | ✓ | ✓ |
| Uznání dluhu | ✓ | ✓ | ✓ | ✓ | ✓ |
| Darovací smlouva | ✓ | ✓ | ✓ | ✓ | ✓ |
| Plná moc (obecná) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Kupní smlouva na věc | ✓ | ✓ | ✓ | ✓ | ✓ |
| Odstoupení od smlouvy (e-shop, 14 dní) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Reklamace | ✓ | ✓ | ✓ | ✓ | ✓ |

Česko má navíc: kupní smlouvu na motorku, nájemní a podnájemní smlouvu (i dvojjazyčně CZ/EN), předávací protokol k bytu,
výpověď a dohodu o skončení nájmu, výpověď povinného ručení, souhlas s trvalým pobytem a s vycestováním dítěte.

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
- Web je zatím `noindex`, dokud se v konfiguraci nenastaví `indexovat: true`.
- Testy: Playwright skripty (projdou všechny dokumenty každé země, stáhnou PDF), kontrola přetékání na 320/360/768 px.

## Otevřené

- Kontrola šablon místním advokátem (hlavně nájem/podnájem a zahraniční šablony).
- Textové stránky (O nás, podmínky, ochrana údajů) v jazycích SK/PL/DE – zatím odkazují na české.
- IBAN pro QR platbu, volba analytiky.
- Další země (Maďarsko, Slovinsko, Chorvatsko…).
