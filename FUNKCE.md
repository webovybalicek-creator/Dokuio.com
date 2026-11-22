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
🇷🇴 **Rumunsko (spuštěno 21. 11. 2026):** `src/obsah/ro/`, `src/sablony/ro/` – 24 vzorů jako v SI (contract de vânzare-cumpărare auto a moto jako doplněk úředního formuláře Model 2026 ITL 054, procese-verbale vozidlo a byt, chitanță, contract de împrumut, recunoaștere de datorie, contract de donație jen jako dar manual do 25.000 lei, împuternicire, contract de vânzare-cumpărare, formular de retragere (OUG 34/2014), reclamație (OUG 140/2021), contract de închiriere, denunțare, acord de încetare, subînchiriere, notificare de plată, contract de antrepriză, comodat, acord de plată eșalonată, declarație pe propria răspundere, notificare de încetare, demisie (Codul muncii čl. 81), declarație pro cestu nezletilého – text pro notáře). Rumunské rozhraní `src/i18n/ro.ts` (plurál s „de“), RON/lei, částky slovy `sablony/ro/numere.ts`, zdroje `sablony/ro/surse.ts`, info stránky (ANSPDCP), e-mail, vlajka. Ověřeno 21. 11. 2026 (legislatie.just.ro, ANAF, ANPC, Poliția de Frontieră): převod vozidla na tipizat ITL 054 (Ordin 772/966/123/2026, MO 680/2026) s fiskální kontrolou prodávajícího i kupujícího, transcriere do 90 dní; hotovost mezi FO max 50.000 lei/transakci (L 70/2015); darování notářsky, výjimka dar manual movitostí do 25.000 lei (CC čl. 1011), dary mezi příbuznými nezdaněny (ANAF); úrok písemně, max zákonný +50 % (OG 13/2011); promlčení 3 roky (čl. 2517), uznání přerušuje (čl. 2537); nájem registrovat u ANAF do 30 dní (C168), registrovaná smlouva = exekuční titul (čl. 1798); odstoupení 14 dní, odpovědnost 2 roky; výpověď zaměstnance max 20/45 pracovních dní; cesta dítěte bez rodiče – notářské prohlášení (L 248/2005 čl. 30). Poradna `/ro/ghid/` – 25 článků. Ukrajinské a anglické verze všech 24 vzorů (`src/preklady/ro/`, `/ro/uk/`, `/ro/en/`) od 21. 11. 2026.
🇧🇬 **Bulharsko (spuštěno 21. 11. 2026):** `src/obsah/bg/`, `src/sablony/bg/` – 24 vzorů jako v RO (договор за покупко-продажба на автомобил a мотоциклет jako text pro notáře – подписи с нотариална заверка, приемо-предавателни протоколи кола a жилище, разписка, договор за заем, признание на дълг, договор за дарение s предаване, пълномощно, договор за покупко-продажба, формуляр за отказ, рекламация, договор за наем, предизвестие a споразумение за прекратяване на наем, пренаемане, покана за плащане, договор за изработка, заем за послужване, разсрочено плащане, декларация, предизвестие za služby, напускане (КТ чл. 326), декларация-съгласие за пътуване на дете – text pro notáře). Bulharské rozhraní `src/i18n/bg.ts`, EUR (euro od 1. 1. 2026), částky slovy `sablony/bg/chisla.ts`, zdroje `sablony/bg/izvori.ts`, info stránky (КЗЛД), e-mail, vlajka. Ověřeno 21. 11. 2026 (ZZD, ZDvP, ZOPB, ZMDT, ZZP, zákon o prodeji zboží, KT, ZBLD, NK): převod registrovaného auta písemnou smlouvou s notářsky ověřenými podpisy (čl. 144 ZDvP, i motorky nad 350 cm³), kupující registruje do 1 měsíce (čl. 145); hotovost od 5 000 € jen bankou; dar movitostí s předáním nebo s ověřenými podpisy (čl. 225); úrok jen písemně (čl. 240); promlčení 5 let, 3 roky nájem a úroky, uznání přerušuje (čl. 110, 111, 116); nájem na neurčito výpověď 1 měsíc (čl. 238), podnájem části bez souhlasu, není-li zakázán (čl. 234); daň z darování 0 % přímá linie a manželé, 0,4–0,8 % sourozenci, 3,3–6,6 % ostatní; odstoupení 14 dní; vady 2 roky, oprava do 1 měsíce; výpověď zaměstnance 30 dní (max 3 měsíce); cesta dítěte – souhlas s notářsky ověřeným podpisem (čl. 76 т. 9 ZBLD). Poradna `/bg/savetnik/` – 25 článků. Ukrajinské a anglické verze všech 24 vzorů od 21. 11. 2026. PDF: dlouhý nadpis dokumentu se automaticky zmenší na šířku stránky.
🇬🇷 **Řecko (spuštěno 22. 11. 2026):** `src/obsah/gr/`, `src/sablony/gr/` – 24 vzorů (συμφωνητικό πώλησης αυτοκινήτου a μοτοσικλέτας s ψηφιακή μεταβίβαση na gov.gr, πρωτόκολλα παράδοσης οχήματος a κατοικίας, απόδειξη είσπραξης, σύμβαση δανείου, αναγνώριση χρέους, συμφωνητικό δωρεάς, εξουσιοδότηση, συμφωνητικό πώλησης, έντυπο υπαναχώρησης, δήλωση ελαττώματος, μισθωτήριο κατοικίας, καταγγελία a συμφωνία λύσης μίσθωσης, υπομίσθωση, εξώδικη όχληση, σύμβαση έργου, χρησιδάνειο, συμφωνία δόσεων, υπεύθυνη δήλωση, καταγγελία σύμβασης, δήλωση οικειοθελούς αποχώρησης, συναίνεση ταξιδιού ανηλίκου – text k ověření podpisu, bez podpisu na obrazovce). Řecké rozhraní `src/i18n/el.ts` (hreflang el-GR), částky slovy `sablony/gr/arithmoi.ts`, zdroje `sablony/gr/pigi.ts`, info stránky (Αρχή Προστασίας Δεδομένων), e-mail, vlajka, alt texty fotek. Ověřeno 22. 11. 2026: převod auta/motorky mezi fyzickými osobami digitálně na gov.gr (prodávající podá, kupující přijme; platné KTEO, zaplacená silniční daň, bez výhrady vlastnictví); hotovost od 500 € jen vůči podnikům (ν. 5301/2026); dar movitostí platný s předáním (ΑΚ 498), kategorie A 0 % do 800 000 € přes banku (ΚΦΠ 98), přiznání v myPROPERTY; půjčka mezi soukromníky – digitální poplatek 3,6 %; promlčení 20 let, 5 let periodická plnění, uznání přerušuje (ΑΚ 249, 250, 260); nájem bytu min. 3 roky (ν. 1703/1987), přiznání nájmu v AADE do konce následujícího měsíce, nároky pronajímatele na škody 6 měsíců; odstoupení 14 dní (ν. 2251/1994); vady 2 roky, domněnka 1 rok; výpověď zaměstnance bez zákonné lhůty, zaměstnavatel hlásí do ERGANI do 4 pracovních dnů (π.δ. 62/2025 čl. 330); υπεύθυνη δήλωση čl. 8 ν. 1599/1986; cesta dítěte – υπεύθυνη δήλωση s ověřeným podpisem (mfa.gr). Poradna `/gr/odigos/` – 25 článků. Ukrajinské a anglické verze všech 24 vzorů. PDF/Word/OG: řecké verzálky bez tonosu (`verzalky` v `sablony/typy.ts`).

🇪🇪 **Estonsko (spuštěno 22. 11. 2026):** `src/obsah/ee/`, `src/sablony/ee/` – 24 vzorů (sõiduki a mootorratta ostu-müügileping, üleandmise-vastuvõtmise aktid sõiduki a eluruumi, raha vastuvõtmise kviitung, laenuleping, võla tunnustamine, kinkeleping, volikiri, ostu-müügileping, taganemisavaldus, pretensioon, eluruumi üürileping, üürilepingu ülesütlemine a lõpetamise kokkulepe, allüürileping, maksenõue, maksegraafiku kokkulepe, töövõtuleping, kasutuslaenuleping, kinnitus, lepingu ülesütlemine, töölepingu ülesütlemine, nõusolek lapse reisimiseks). Estonské rozhraní `src/i18n/et.ts` (hreflang et-EE), částky slovy `sablony/ee/arvud.ts`, zdroje `sablony/ee/allikad.ts`, svátky `ee` v `terminy.ts`, info stránky (Andmekaitse Inspektsioon), e-mail, vlajka, alt texty fotek. Ověřeno 22. 11. 2026: omanikuvahetus v e-službě Transpordiametu do 5 pracovních dnů (prodávající zahájí, kupující potvrdí; jinak prodávající oznámí zcizení a vozidlo se dočasně vyřadí z registru), mootorsõidukimaks za běžný rok zůstává prodávajícímu, registreerimistasu při první změně vlastníka; promlčení 3 roky, 10 let při úmyslu, uznání přerušuje (TsÜS § 146, 158); dar předaný ihned bez formy (VÕS § 261 lg 2), darovací daň neexistuje, dary mezi fyzickými osobami zpravidla bez daně z příjmu; nájem na dobu neurčitou – řádná výpověď min. 3 měsíce (VÕS § 312), kauce v úvěrové instituci (§ 308), běžné opotřebení jen dle smlouvy; výpověď zaměstnance min. 30 kalendářních dnů (TLS § 98), forma umožňující písemné zachycení (§ 95); odstoupení 14 dní, vady 2 roky; cesta dítěte – při společné péči obvykle souhlas druhého rodiče i pro dočasnou cestu (e-justice). Poradna `/ee/noustaja/` – 25 článků. Ukrajinské a anglické verze všech 24 vzorů.

🇱🇻 **Lotyšsko (spuštěno 22. 11. 2026):** `src/obsah/lv/`, `src/sablony/lv/` – 24 vzorů (transportlīdzekļa a motocikla pirkuma līgums, pieņemšanas-nodošanas akti auto a dzīvokļa, kvīts par naudas saņemšanu, aizdevuma līgums, parāda atzīšana, dāvinājuma līgums, pilnvara, pirkuma līgums, atteikuma veidlapa, pretenzija, īres līgums, īres līguma uzteikums a vienošanās par izbeigšanu, apakšīres līgums, maksājuma pieprasījums, vienošanās par parāda atmaksu, uzņēmuma līgums, patapinājuma līgums, apliecinājums, līguma uzteikums, darbinieka uzteikums, vecāka piekrišana bērna ceļojumam). Lotyšské rozhraní `src/i18n/lv.ts` (hreflang lv-LV), částky slovy `sablony/lv/skaitli.ts`, zdroje `sablony/lv/avoti.ts`, svátky `lv` v `terminy.ts` (4. 5. a 18. 11. přesun na pondělí), info stránky (Datu valsts inspekcija), e-mail, vlajka, alt texty fotek. Ověřeno 22. 11. 2026: změna vlastníka v e-CSDD – kupující udělá značku, prodávající potvrdí do 5 dnů (vlastnictví přechází potvrzením), kupující registruje do 5 dnů; CSDD nezapíše změnu bez zaplacené daně TEN za běžný rok a při zákazu/komerční zástavě; promlčení 10 let (CL 1895), upomínka a uznání přerušují (1905, 1906), zákonné úroky 6 % (1765); dar od manžela a příbuzných do 3. stupně bez daně, od jiných do 1425 € ročně; nájem bytu písemně a jen na dobu určitou (DzTĪL 7, 9), kauce max. 2 měsíční nájmy vrácená nejpozději v den vyklizení (12), nájemník odstoupí s výpovědí 1 měsíc (20, 27), nezapsaný nájem končí převodem bytu (28), ubytování dalších osob jen s písemným souhlasem (14); výpověď zaměstnance písemně 1 měsíc (DL 100); reklamace 2 roky, podat do 2 měsíců od zjištění, domněnka 1 rok (PTAL 13, 27); cesta dítěte – dočasný výjezd nevyžaduje souhlas druhého rodiče (e-justice), mimo Schengen s doprovodem nebo samo nutná notářsky ověřená plná moc/souhlas aspoň jednoho rodiče (Robežsardze). Poradna `/lv/padomi/` – 25 článků. Ukrajinské a anglické verze všech 24 vzorů.
🇱🇹 **Litva (spuštěno 22. 11. 2026):** `src/obsah/lt/`, `src/sablony/lt/` – 24 vzorů (automobilio a motociklo pirkimo–pardavimo sutartis s SDK a deklaracemi v Regitře, perdavimo–priėmimo aktai auto a bytu, pinigų gavimo pakvitavimas, paskolos sutartis, skolos pripažinimas, dovanojimo sutartis, įgaliojimas, pirkimo–pardavimo sutartis, sutarties atsisakymo forma, pretenzija, buto nuomos sutartis (terminuota i neterminuota, souhlas s deklarací pobytu), pranešimas apie nuomos nutraukimą a susitarimas nutraukti nuomą, subnuomos sutartis, raginimas sumokėti, susitarimas dėl skolos grąžinimo, rangos sutartis, panaudos sutartis, deklaracija, pranešimas apie sutarties nutraukimą, pareiškimas dėl darbo sutarties nutraukimo, tėvų sutikimas dėl vaiko kelionės). Litevské rozhraní `src/i18n/lt.ts` (lt-LT, 3 tvary plurálu), částky slovy `sablony/lt/skaiciai.ts`, zdroje `sablony/lt/saltiniai.ts`, svátky `lt` v `terminy.ts`, info stránky (VDAI), e-mail, vlajka, alt texty fotek. Ověřeno 22. 11. 2026: Regitra – kupující deklaruje nabytí do 5 pracovních dnů, prodávající potvrdí do 5 pracovních dnů, bez platného SDK nelze deklarovat ani registrovat, k jízdě registrace do 10 kalendářních dnů; hotovost max. 5 000 € na transakci; CK 1.73 (nad 1 500 € písemně), 1.125 (promlčení 10 let, úroky 5 let), 1.130 (přerušuje jen žaloba a uznání, upomínka ne), 6.210 (úrok z prodlení 5 %, mezi podnikateli 6 %), 6.469 (dar nad 1 500 € písemně, nad 14 500 € a nemovitost notářsky), 6.871 (půjčka nad 600 € písemně), 6.595 (podnájem jen s písemným souhlasem pronajímatele a spolubydlících členů rodiny), 6.609 (nájemce vypoví písemně s měsíční lhůtou i nájem na dobu určitou); GPM: dary od manžela, dětí, rodičů, prarodičů, sourozenců a vnoučat osvobozeny, od jiných 2 500 € ročně; DK 55 – výpověď zaměstnance písemně 20 kalendářních dnů, odvolání do 3 pracovních dnů; cesta dítěte – dočasný výjezd bez souhlasu druhého rodiče (e-justice), mimo Schengen bez rodičů notářsky ověřený souhlas (Notarų rūmai). Poradna `/lt/patarimai/` – 25 článků. Ukrajinské a anglické verze zatím nejsou.
🇨🇭 **Švýcarsko francouzsky – Suisse romande (spuštěno 22. 11. 2026):** samostatná „země“ `ch-fr` na adrese `/ch-fr/` (ne `/ch/fr/` – ta cesta patří uk/en verzím), `src/obsah/ch-fr/`, `src/sablony/ch-fr/` – 25 vzorů se stejným právním obsahem jako CH německy (contrat de vente voiture/moto, procès-verbal de remise, procuration pour le service des automobiles, quittance, contrat de prêt s plánem splátek, reconnaissance de dette, convention de paiement échelonné, mise en demeure, contrat de donation, contrat de bail, état des lieux, résiliation du bail, convention de résiliation du bail, contrat de sous-location, lettre de résiliation, contrat de prêt à usage, procuration, contrat de vente entre particuliers, avis des défauts, révocation (démarchage), attestation sur l’honneur, contrat d’entreprise, lettre de démission, autorisation de voyage pour mineur). Rozhraní `src/i18n/fr-ch.ts` (jazyk `fr-CH`), částky slovy ve francích (septante/nonante) `sablony/ch-fr/nombres.ts`, zdroje Fedlex FR + ch.ch, DFAE, OFJ, SECO, ElCom, OFCOM `sablony/ch-fr/sources.ts`, plán splátek `sablony/ch-fr/plan.ts`, info stránky (PFPDT), e-mail, vlajka, alt texty fotek. Jazykové varianty jedné země: `skupina: 'ch'` v `_zeme.ts` a `protejsky: { ch: '<slug>' }` ve stránce → vzájemný hreflang de-CH ↔ fr-CH (+ uk/en) a přepínač jazyka na dokumentech i rozcestnících (`src/preklady/index.ts`). Úvodní stránka posílá Švýcary s francouzským prohlížečem na `/ch-fr/`. Poradna `/ch-fr/conseils/` – 25 článků. E-mail s PDF teď u `de-CH`/`fr-CH` posílá text v němčině/francouzštině (dřív padal na češtinu).

Obecně: země s `aktivni: false` se vůbec negeneruje (ani stránky, ani sitemap).

🇺🇦🇬🇧 **Jazykové verze (20. 11. 2026):** dokument země může mít ukrajinskou a anglickou verzi – `/<zeme>/uk/<slug>/`, `/<zeme>/en/<slug>/`
(+ průvodce, dvojjazyčné prázdné vzory PDF/DOCX, rozcestník `/<zeme>/<jazyk>/` s katalogem a hledáním). Právo a šablona zůstávají země,
přeložené je rozhraní, nápovědy a texty stránky; smlouva je dvojjazyčná (originál + překlad pod každým odstavcem, doložka „rozhoduje
znění v jazyce země“). Přepínač jazyka nad náhledem, v průvodci a na rozcestníku; koncept v prohlížeči je společný pro všechny jazyky;
hreflang mezi originálem a verzemi. Hotová ukázka: CZ kupní smlouva na auto (uk, en). Poradna a balíčky se nepřekládají.
Překlady se přidávají po jednom souboru `src/preklady/<zeme>/<jazyk>/<slug>.ts`, build hlídá úplnost – návod `PREKLADY.md`.

21. 11. 2026: 🇭🇷 HR a 🇸🇮 SI mají ukrajinské a anglické verze všech 24 vzorů (96 souborů v `src/preklady/hr|si/uk|en/`). Tentýž den doplněny chybějící verze v CZ, SK, PL, DE, AT, CH a HU (motorka, výpůjčka, podnájem, dohoda o skončení nájmu, Wohnungsgeberbestätigung, súhlas s trvalým pobytom – 54 souborů); uk/en verze teď mají všechny vzory ve všech zemích. Motorka se překládá z překladu smlouvy na auto (`skripty/prek2/moto.py`).

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
- SEO unikátnost – dodělat obsah: AT a CH landingy (vlastní perex, „Po podpisu“, 3 FAQ místo převzatých z DE), motorka vs. auto (vlastní perex/FAQ), místní blok pro cizince v uk/en verzích, uk/en verze pro LT.
- Další země: CH v italštině (`ch-it`, stejný postup jako `ch-fr`).
- PL: tlačítko pro odstoupení – sledovat novelu zákona o právech spotřebitele.

SEO unikátnost (22. 11. 2026): `scripts/kontrola-podobnosti.mjs` (i v CI) měří shodu stránek a šablonový text; okno podpory v `<template>`, landing bez obecných kroků, balíček s místním postupem a kontrolou, `noindex` u podmínek, ochrany údajů a „O nás“ v AT/CH (`indexovatInfo`). Pravidla: SEO.md, oddíl „Unikátnost obsahu“.
