import sys; sys.path.insert(0,'/home/claude/skripty')
from clanek import clanek

# ---------- PRODEJ AUTA NA SPLÁTKY ----------
clanek('cz','prodej-auta-na-splatky',dict(
 title='Prodej auta na splátky: výhrada vlastnictví a bezpečná platba',
 nazev='Prodej auta na splátky',
 description='Jak prodat auto na splátky soukromé osobě: výhrada vlastnictví podle § 2132 OZ, splátkový kalendář, přepis až po zaplacení, pojištění a co když kupující přestane platit.',
 perex='Prodáváte auto a kupující nemá celou částku? Vyhraďte si vlastnictví do zaplacení poslední splátky a sepište splátkový kalendář. Auto zůstane vaše, dokud není zaplacené.',
 kategorie='auto', tema='prodej-auta',
 dokumenty=['kupni-smlouva-auto','dohoda-o-splatkach','predavaci-protokol-vozidlo'],
 slova=['prodej auta na splátky','výhrada vlastnictví','splátkový kalendář','kupní smlouva auto','splátky','přepis auta'],
 zdroje=[('Občanský zákoník č. 89/2012 Sb., § 2132 (e-Sbírka)','https://www.e-sbirka.cz/sb/2012/89'),
         ('Zákon č. 56/2001 Sb. o podmínkách provozu vozidel (e-Sbírka)','https://www.e-sbirka.cz/sb/2001/56')],
 faq=[('Kdy se kupující stane vlastníkem?','Když si ve smlouvě vyhradíte vlastnické právo, nabude ho kupující až zaplacením celé kupní ceny (§ 2132 občanského zákoníku).'),
      ('Kdy se dělá přepis?','Přepis se podává do 10 pracovních dnů od převodu vlastnictví – při výhradě vlastnictví tedy od zaplacení poslední splátky.'),
      ('Co když kupující přestane platit?','Smlouva by měla určit, co se stane: například splatnost celého zbytku (ztráta výhody splátek) nebo odstoupení a vrácení auta. Bez dohody se postupuje podle zákona.')]),
"""
Prodej na splátky mezi soukromníky je běžný, ale riskantní pro prodávajícího. Tři věci ho výrazně zabezpečí.

## 1. Výhrada vlastnictví

- Do kupní smlouvy napište, že si **vyhrazujete vlastnické právo** až do zaplacení celé ceny (§ 2132 OZ).
- Kupující auto užívá, ale **vlastníkem je dál prodávající**.

## 2. Splátkový kalendář

- Sepište [dohodu o splátkách](/cz/dohoda-o-splatkach/): výše a data splátek, číslo účtu.
- Domluvte, co se stane při prodlení – typicky **ztráta výhody splátek** (zbytek je splatný najednou) nebo odstoupení od smlouvy a vrácení auta.
- Plaťte jen **převodem** – každá splátka je pak doložená.

## 3. Přepis, pojištění a pokuty

- Vlastnictví přejde až zaplacením, **přepis** se proto podává do 10 pracovních dnů **od poslední splátky**.
- Do té doby jste v registru dál vy. Dohodněte písemně, **kdo platí povinné ručení**, kdo odpovídá za **pokuty** a za škody.
- Velký technický průkaz si můžete nechat u sebe až do zaplacení.

## 4. Předání

Při předání sepište [předávací protokol](/cz/predavaci-protokol-vozidlo/) se stavem tachometru a časem předání. [Kupní smlouvu na auto](/cz/kupni-smlouva-auto/) vyplníte zdarma online – výhradu vlastnictví v ní nastavíte jedním kliknutím.
""")

clanek('sk','predaj-auta-na-splatky',dict(
 title='Predaj auta na splátky: výhrada vlastníctva a bezpečná platba',
 nazev='Predaj auta na splátky',
 description='Ako predať auto na splátky súkromnej osobe: výhrada vlastníctva podľa § 601 OZ, splátkový kalendár, platby prevodom a čo dohodnúť pre prípad omeškania.',
 perex='Kupujúci nemá celú sumu naraz? Vyhraďte si vlastníctvo do zaplatenia poslednej splátky a spíšte splátkový kalendár. Auto zostane vaše, kým nie je zaplatené.',
 kategorie='auto', tema='predaj-auta',
 dokumenty=['kupna-zmluva-auto','dohoda-o-splatkach','preberaci-protokol-vozidla'],
 slova=['predaj auta na splátky','výhrada vlastníctva','splátkový kalendár','kúpna zmluva auto','splátky'],
 zdroje=[('Občiansky zákonník č. 40/1964 Zb., § 601 (Slov-Lex)','https://static.slov-lex.sk/static/SK/ZZ/1964/40/'),
         ('Predal som auto (slovensko.sk)','https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_predal-som-auto/')],
 faq=[('Kedy sa kupujúci stane vlastníkom?','Pri výhrade vlastníctva až úplným zaplatením kúpnej ceny (§ 601 Občianskeho zákonníka).'),
      ('Čo ak kupujúci prestane platiť?','Zmluva by mala určiť následky – napríklad splatnosť celého zvyšku alebo odstúpenie a vrátenie auta.'),
      ('Ako platiť splátky?','Prevodom na účet – každá splátka je doložená. Pri hotovosti vystavte potvrdenie.')]),
"""
Predaj na splátky medzi súkromnými osobami je bežný, no pre predávajúceho rizikový. Tieto kroky ho zabezpečia.

## 1. Výhrada vlastníctva

- Do kúpnej zmluvy uveďte, že kupujúci sa stane vlastníkom **až zaplatením celej kúpnej ceny** (§ 601 OZ).

## 2. Splátkový kalendár

- Spíšte [dohodu o splátkach](/sk/dohoda-o-splatkach/): výška, dátumy, účet.
- Dohodnite následky omeškania – napríklad **splatnosť celého zvyšku** alebo odstúpenie a vrátenie auta.
- Platby len **prevodom**.

## 3. Zmena držby, poistenie a pokuty

- Kým nie je zaplatené, dohodnite písomne, kto platí **PZP**, kto zodpovedá za **pokuty** a škody a kedy sa podá **zmena držby**.

## 4. Odovzdanie

Pri odovzdaní spíšte [preberací protokol](/sk/preberaci-protokol-vozidla/). [Kúpnu zmluvu na auto](/sk/kupna-zmluva-auto/) vyplníte zadarmo online – s výhradou vlastníctva.
""")

clanek('pl','sprzedaz-samochodu-na-raty',dict(
 title='Sprzedaż samochodu na raty: zastrzeżenie własności',
 nazev='Sprzedaż samochodu na raty',
 description='Jak sprzedać auto na raty osobie prywatnej: zastrzeżenie własności (art. 589 KC), harmonogram spłat, płatności przelewem i co ustalić na wypadek opóźnienia.',
 perex='Kupujący nie ma całej kwoty? Zastrzeż własność do zapłaty ostatniej raty i spisz harmonogram spłat. Auto pozostaje Twoje, dopóki nie zostanie spłacone.',
 kategorie='samochody', tema='sprzedaz-auta',
 dokumenty=['umowa-kupna-sprzedazy-samochodu','porozumienie-o-splacie-w-ratach','protokol-zdawczo-odbiorczy-pojazdu'],
 slova=['sprzedaż auta na raty','zastrzeżenie własności','harmonogram spłat','umowa kupna-sprzedaży samochodu','raty'],
 zdroje=[('Kodeks cywilny, art. 589 (ELI)','https://eli.gov.pl/eli/DU/1964/93/ogl'),
         ('Zgłoś zbycie lub nabycie pojazdu (gov.pl)','https://www.gov.pl/web/gov/zglos-zbycie-lub-nabycie-pojazdu-na-przyklad-sprzedaz-kupno-darowizne')],
 faq=[('Kiedy kupujący staje się właścicielem?','Przy zastrzeżeniu własności – dopiero po zapłacie całej ceny (art. 589 KC).'),
      ('Co jeśli kupujący przestanie płacić?','Umowa powinna określić skutki, np. wymagalność całej reszty albo odstąpienie i zwrot auta.'),
      ('Jak płacić raty?','Przelewem – każda rata jest udokumentowana.')]),
"""
Sprzedaż na raty między osobami prywatnymi jest wygodna dla kupującego, ale ryzykowna dla sprzedającego. Tak się zabezpieczysz.

## 1. Zastrzeżenie własności

- W umowie zastrzeż, że kupujący stanie się właścicielem **dopiero po zapłacie całej ceny** (art. 589 KC).

## 2. Harmonogram spłat

- Spisz [porozumienie o spłacie w ratach](/pl/porozumienie-o-splacie-w-ratach/): kwoty, terminy, rachunek.
- Ustal skutki opóźnienia – np. **wymagalność całej reszty** albo odstąpienie i zwrot auta.
- Płatności tylko **przelewem**.

## 3. Formalności, OC i mandaty

- Do czasu spłaty ustalcie na piśmie, kto płaci **OC**, kto odpowiada za **mandaty** i szkody oraz kiedy nastąpi zgłoszenie zbycia i rejestracja.

## 4. Wydanie

Sporządźcie [protokół zdawczo-odbiorczy](/pl/protokol-zdawczo-odbiorczy-pojazdu/). [Umowę kupna-sprzedaży samochodu](/pl/umowa-kupna-sprzedazy-samochodu/) wypełnisz za darmo online – z zastrzeżeniem własności.
""")

clanek('de','auto-auf-raten-verkaufen',dict(
 title='Auto auf Raten privat verkaufen: Eigentumsvorbehalt',
 nazev='Auto auf Raten verkaufen',
 description='Auto privat auf Raten verkaufen: Eigentumsvorbehalt nach § 449 BGB, Ratenzahlungsvereinbarung, Fahrzeugbrief bis zur Zahlung behalten und was bei Zahlungsverzug gilt.',
 perex='Der Käufer kann nicht alles auf einmal zahlen? Behalten Sie sich das Eigentum bis zur letzten Rate vor und vereinbaren Sie einen Ratenplan schriftlich.',
 kategorie='auto', tema='auto-verkaufen',
 dokumenty=['kaufvertrag-gebrauchtwagen','ratenzahlungsvereinbarung','uebergabeprotokoll-fahrzeug'],
 slova=['Auto auf Raten verkaufen','Eigentumsvorbehalt','Ratenzahlung','Kaufvertrag Gebrauchtwagen','Fahrzeugbrief'],
 zdroje=[('§ 449 BGB – Eigentumsvorbehalt','https://www.gesetze-im-internet.de/bgb/__449.html'),
         ('§ 15 FZV – Mitteilungspflichten bei Veräußerung (gesetze-im-internet.de)','https://www.gesetze-im-internet.de/fzv_2023/__15.html')],
 faq=[('Wann wird der Käufer Eigentümer?','Mit Eigentumsvorbehalt erst mit vollständiger Zahlung des Kaufpreises (§ 449 BGB).'),
      ('Was passiert bei Zahlungsverzug?','Das sollte der Vertrag regeln – etwa Fälligkeit der Restschuld oder Rücktritt und Rückgabe des Fahrzeugs.'),
      ('Darf ich den Fahrzeugbrief behalten?','Ja, die Zulassungsbescheinigung Teil II bis zur letzten Rate einzubehalten ist eine übliche Sicherheit – vereinbaren Sie es im Vertrag.')]),
"""
Ein Ratenkauf unter Privatleuten ist für den Verkäufer riskant. Mit diesen drei Schritten sichern Sie sich ab.

## 1. Eigentumsvorbehalt

- Vereinbaren Sie, dass das Fahrzeug **bis zur vollständigen Zahlung Ihr Eigentum** bleibt (§ 449 BGB).
- Üblich: Die **Zulassungsbescheinigung Teil II** behalten Sie bis zur letzten Rate.

## 2. Ratenplan

- Schließen Sie eine [Ratenzahlungsvereinbarung](/de/ratenzahlungsvereinbarung/): Höhe, Termine, Konto.
- Regeln Sie den **Verzug** – etwa Fälligkeit der Restschuld oder Rücktritt und Rückgabe.
- Nur per **Überweisung** zahlen lassen.

## 3. Zulassung, Versicherung, Bußgelder

- Klären Sie schriftlich, wer bis zur Ummeldung **Versicherung** und **Steuer** trägt und wer für **Bußgelder** und Schäden haftet.

## 4. Übergabe

Ein [Übergabeprotokoll](/de/uebergabeprotokoll-fahrzeug/) mit Uhrzeit erstellen. Den [Kaufvertrag](/de/kaufvertrag-gebrauchtwagen/) mit Eigentumsvorbehalt füllen Sie kostenlos online aus.
""")

clanek('at','auto-auf-raten-verkaufen-oesterreich',dict(
 title='Auto auf Raten verkaufen in Österreich: Eigentumsvorbehalt',
 nazev='Auto auf Raten verkaufen in Österreich',
 description='Auto privat auf Raten verkaufen in Österreich: Eigentumsvorbehalt im Kaufvertrag, Ratenvereinbarung, Typenschein bis zur Zahlung behalten und Regeln für Zahlungsverzug.',
 perex='Kann der Käufer nicht alles auf einmal zahlen, behalten Sie sich das Eigentum bis zur letzten Rate vor. Dazu gehört ein schriftlicher Ratenplan.',
 kategorie='auto', tema='auto-verkaufen',
 dokumenty=['kaufvertrag-gebrauchtwagen','ratenvereinbarung','uebergabeprotokoll-fahrzeug'],
 slova=['Auto auf Raten verkaufen','Österreich','Eigentumsvorbehalt','Ratenvereinbarung','Typenschein'],
 zdroje=[('Allgemeines bürgerliches Gesetzbuch (RIS)','https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001622'),
         ('Kfz-Abmeldung (oesterreich.gv.at)','https://www.oesterreich.gv.at/themen/mobilitaet/kfz/2/Seite.060900.html')],
 faq=[('Ist ein Eigentumsvorbehalt in Österreich zulässig?','Ja, er wird im Kaufvertrag vereinbart: Der Käufer wird erst mit vollständiger Zahlung Eigentümer.'),
      ('Was passiert bei Zahlungsverzug?','Das sollte der Vertrag regeln – etwa Terminsverlust (Fälligkeit der Restschuld) oder Rücktritt und Rückgabe.'),
      ('Wie werden die Raten bezahlt?','Am besten per Überweisung – jede Rate ist dann belegt.')]),
"""
Ein Ratenkauf unter Privatpersonen ist für den Verkäufer riskant. So sichern Sie sich ab.

## 1. Eigentumsvorbehalt

- Vereinbaren Sie im Kaufvertrag, dass das Auto **bis zur vollständigen Zahlung Ihr Eigentum** bleibt.
- Den **Typenschein** können Sie bis zur letzten Rate behalten.

## 2. Ratenplan

- Schließen Sie eine [Ratenvereinbarung](/at/ratenvereinbarung/): Höhe, Termine, Konto.
- Regeln Sie den **Verzug** – etwa Terminsverlust oder Rücktritt und Rückgabe.

## 3. Zulassung, Versicherung, Strafen

- Klären Sie schriftlich, wer bis zur Ummeldung **Versicherung** zahlt und wer für **Strafen** und Schäden haftet.

## 4. Übergabe

Ein [Übergabeprotokoll](/at/uebergabeprotokoll-fahrzeug/) erstellen. Den [Kaufvertrag](/at/kaufvertrag-gebrauchtwagen/) füllen Sie kostenlos online aus.
""")

clanek('ch','auto-auf-raten-verkaufen-schweiz',dict(
 title='Auto auf Raten verkaufen: Eigentumsvorbehalt eintragen',
 nazev='Auto auf Raten verkaufen in der Schweiz',
 description='Occasion privat auf Raten verkaufen: Eigentumsvorbehalt wirkt nur mit Eintrag im Register am Wohnort des Käufers (Art. 715 ZGB), Abzahlungsvereinbarung und Verzug.',
 perex='In der Schweiz wirkt ein Eigentumsvorbehalt nur, wenn er im öffentlichen Register beim Betreibungsamt am Wohnort des Käufers eingetragen ist. Sonst schützt er Sie nicht.',
 kategorie='auto', tema='auto-verkaufen',
 dokumenty=['kaufvertrag-auto','abzahlungsvereinbarung','uebergabeprotokoll-fahrzeug'],
 slova=['Auto auf Raten verkaufen','Schweiz','Eigentumsvorbehalt','Art. 715 ZGB','Abzahlungsvereinbarung','Betreibungsamt'],
 zdroje=[('Zivilgesetzbuch, Art. 715 (Fedlex)','https://www.fedlex.admin.ch/eli/cc/24/233_245_233/de#art_715'),
         ('Obligationenrecht, Art. 184 ff. (Fedlex)','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de')],
 faq=[('Reicht ein Eigentumsvorbehalt im Vertrag?','Nein. Er ist nur wirksam, wenn er im Eigentumsvorbehaltsregister beim Betreibungsamt am Wohnort des Erwerbers eingetragen ist (Art. 715 ZGB).'),
      ('Was passiert bei Zahlungsverzug?','Das sollte die Vereinbarung regeln – etwa Fälligkeit der Restschuld oder Rücktritt und Rückgabe.'),
      ('Wie werden die Raten bezahlt?','Am besten per Überweisung – jede Rate ist dann belegt.')]),
"""
Ein Ratenverkauf unter Privaten ist für den Verkäufer riskant. In der Schweiz gilt eine Besonderheit beim Eigentumsvorbehalt.

## 1. Eigentumsvorbehalt – nur mit Registereintrag

- Vereinbaren Sie im Vertrag, dass das Auto bis zur vollständigen Zahlung **Ihr Eigentum** bleibt.
- **Wirksam** wird der Vorbehalt erst mit dem **Eintrag im Eigentumsvorbehaltsregister** beim Betreibungsamt am Wohnort des Käufers (Art. 715 ZGB).

## 2. Ratenplan

- Schliessen Sie eine [Abzahlungsvereinbarung](/ch/abzahlungsvereinbarung/): Höhe, Termine, Konto.
- Regeln Sie den **Verzug** – etwa Fälligkeit der Restschuld oder Rücktritt und Rückgabe.

## 3. Schilder und Versicherung

- Die Kontrollschilder bleiben bei Ihnen; der Käufer löst das Auto mit eigener Versicherung ein.

## 4. Übergabe

Ein [Übergabeprotokoll](/ch/uebergabeprotokoll-fahrzeug/) erstellen. Den [Kaufvertrag Auto](/ch/kaufvertrag-auto/) füllen Sie kostenlos online aus.
""")

clanek('hu','auto-eladasa-reszletre',dict(
 title='Autó eladása részletre: tulajdonjog-fenntartás',
 nazev='Autó eladása részletre',
 description='Hogyan adjon el autót részletfizetéssel magánszemélynek: tulajdonjog-fenntartás (Ptk. 6:216. §), részletfizetési megállapodás, utalás és a késedelem szabályai.',
 perex='A vevő nem tud egyszerre fizetni? Kösse ki a tulajdonjogot a teljes vételár megfizetéséig, és írásban rögzítse a részleteket.',
 kategorie='auto', tema='auto-eladasa',
 dokumenty=['gepjarmu-adasveteli-szerzodes','reszletfizetesi-megallapodas','atadas-atveteli-jegyzokonyv-gepjarmu'],
 slova=['autó eladása részletre','tulajdonjog-fenntartás','részletfizetés','adásvételi szerződés autó','részletek'],
 zdroje=[('Polgári Törvénykönyv – 2013. évi V. törvény, 6:216. § (NJT)','https://njt.jog.gov.hu/jogszabaly/2013-5-00-00'),
         ('304/2009. (XII. 22.) Korm. rendelet – bejelentés, a magánokirat tartalma (NJT)','https://njt.jog.gov.hu/jogszabaly/2009-304-20-22')],
 faq=[('Mikor lesz a vevő tulajdonos?','Tulajdonjog-fenntartás esetén a teljes vételár megfizetésével (Ptk. 6:216. §).'),
      ('Mi történik, ha a vevő nem fizet?','A szerződés rendezze a következményeket – például a teljes hátralék esedékessé válását vagy az elállást és az autó visszaadását.'),
      ('Hogyan fizessék a részleteket?','Utalással – így minden részlet igazolható.')]),
"""
A részletre eladás a vevőnek kényelmes, az eladónak kockázatos. Így biztosíthatja magát.

## 1. Tulajdonjog-fenntartás

- A szerződésben kösse ki, hogy a vevő **csak a teljes vételár megfizetésével** lesz tulajdonos (Ptk. 6:216. §).
- A szerződésben szerepeljen a tulajdonjog-változás napja – a hatóság kötelezően kéri.

## 2. Részletfizetés

- Kössenek [részletfizetési megállapodást](/hu/reszletfizetesi-megallapodas/): összegek, határidők, számlaszám.
- Rendezze a **késedelem** következményeit.
- Csak **utalással** fizessenek.

## 3. Biztosítás és bírságok

- Írásban rögzítsék, ki fizeti a **kötelező biztosítást**, ki felel a **bírságokért** és károkért az átírásig.

## 4. Átadás

Vegyenek fel [átadás-átvételi jegyzőkönyvet](/hu/atadas-atveteli-jegyzokonyv-gepjarmu/). A [gépjármű adásvételi szerződést](/hu/gepjarmu-adasveteli-szerzodes/) ingyen töltheti ki – tulajdonjog-fenntartással.
""")

# ---------- DOHODA O SKONČENÍ NÁJMU ----------
clanek('cz','dohoda-o-skonceni-najmu-misto-vypovedi',dict(
 title='Dohoda o skončení nájmu místo výpovědi: kdy se vyplatí',
 nazev='Dohoda místo výpovědi',
 description='Dohoda o skončení nájmu bytu: bez výpovědní doby, k libovolnému dni. Kdo ji podepisuje, co do ní patří (kauce, služby, předání) a proč nikoho nelze nutit.',
 perex='Výpovědní doba u nájmu jsou tři měsíce. Dohodou můžete nájem ukončit kdykoli – stačí, když se pronajímatel a nájemce shodnou na dni skončení.',
 kategorie='bydleni', tema='konec-najmu',
 dokumenty=['dohoda-o-skonceni-najmu','predavaci-protokol-byt','vypoved-z-najmu'],
 slova=['dohoda o skončení nájmu','ukončení nájmu dohodou','výpověď z nájmu','konec nájmu','vrácení kauce'],
 zdroje=[('Občanský zákoník č. 89/2012 Sb. (e-Sbírka)','https://www.e-sbirka.cz/sb/2012/89'),
         ('Veřejný ochránce práv – leták Nájem bytu','https://www.ochrance.cz/letaky/najem-bytu/najem-bytu.pdf')],
 faq=[('Musí pronajímatel s dohodou souhlasit?','Ano, dohoda vyžaduje souhlas obou stran. Pokud nesouhlasí, zbývá výpověď s tříměsíční výpovědní dobou.'),
      ('Kdo dohodu podepisuje?','Všichni pronajímatelé i všichni nájemci.'),
      ('Co do dohody napsat?','Den skončení nájmu, den předání bytu, jak a kdy se vrátí kauce s úroky a jak se vyúčtují služby.')]),
"""
Dohoda je nejrychlejší a nejklidnější způsob, jak nájem ukončit. Nahrazuje výpověď i výpovědní dobu.

## 1. Kdy se dohoda vyplatí

- **Nájemce** se stěhuje dřív, než by dovolila výpověď.
- **Pronajímatel** potřebuje byt zpět a nájemce souhlasí.
- Obě strany chtějí mít jasno v kauci a vyúčtování.

## 2. Co do dohody patří

- **Konkrétní den skončení** nájmu a **den předání** bytu.
- **Kauce:** kdy a jak se vrátí, i s úroky, a co se z ní případně započte.
- **Služby:** jak se vyúčtují zálohy.
- Podpisy **všech pronajímatelů i všech nájemců**.

## 3. Bez nátlaku

Nikdo nemusí dohodu podepsat. Dohoda podepsaná pod nátlakem jde napadnout. Když se nedohodnete, zbývá [výpověď z nájmu](/cz/vypoved-z-najmu/).

## 4. Předání bytu

[Dohodu o skončení nájmu](/cz/dohoda-o-skonceni-najmu/) vyplníte zdarma online. Při odevzdání bytu sepište [předávací protokol](/cz/predavaci-protokol-byt/) se stavy měřičů.
""")

clanek('sk','dohoda-o-skonceni-najmu-namiesto-vypovede',dict(
 title='Dohoda o skončení nájmu namiesto výpovede',
 nazev='Dohoda namiesto výpovede',
 description='Písomná dohoda o skončení nájmu bytu podľa § 710 OZ: bez výpovednej lehoty, k ľubovoľnému dňu. Kto ju podpisuje a čo do nej patrí (zábezpeka, služby, odovzdanie).',
 perex='Nájom bytu zaniká písomnou dohodou alebo písomnou výpoveďou. Dohodou ho môžete ukončiť ku ktorémukoľvek dňu – ak sa na ňom obe strany zhodnú.',
 kategorie='byvanie', tema='najom-bytu',
 dokumenty=['dohoda-o-skonceni-najmu','preberaci-protokol-bytu','vypoved-z-najmu'],
 slova=['dohoda o skončení nájmu','skončenie nájmu dohodou','výpoveď z nájmu','koniec nájmu','zábezpeka'],
 zdroje=[('Občiansky zákonník č. 40/1964 Zb., § 710 (Slov-Lex)','https://static.slov-lex.sk/static/SK/ZZ/1964/40/')],
 faq=[('Musí byť dohoda písomná?','Áno. Nájom bytu zaniká písomnou dohodou alebo písomnou výpoveďou (§ 710 ods. 1 OZ).'),
      ('Kto dohodu podpisuje?','Všetci prenajímatelia aj všetci nájomcovia.'),
      ('Čo do dohody napísať?','Deň skončenia nájmu, deň odovzdania bytu, vrátenie zábezpeky a vyúčtovanie služieb.')]),
"""
Dohoda je najrýchlejší spôsob, ako ukončiť nájom. Nahrádza výpoveď aj výpovednú lehotu.

## 1. Kedy sa dohoda oplatí

- **Nájomca** sa sťahuje skôr, než by umožnila výpoveď.
- **Prenajímateľ** potrebuje byt späť a nájomca súhlasí.

## 2. Čo do dohody patrí

- **Písomná forma** – inak dohoda nie je platná (§ 710 ods. 1 OZ).
- **Konkrétny deň skončenia** a **deň odovzdania** bytu.
- **Zábezpeka** a **vyúčtovanie služieb**.
- Podpisy **všetkých prenajímateľov aj nájomcov**.

## 3. Keď sa nedohodnete

Zostáva [výpoveď z nájmu](/sk/vypoved-z-najmu/) so zákonnou lehotou.

## 4. Odovzdanie bytu

[Dohodu o skončení nájmu](/sk/dohoda-o-skonceni-najmu/) vyplníte zadarmo online; pri odovzdaní spíšte [preberací protokol](/sk/preberaci-protokol-bytu/). Od 1. júla 2027 platí nový Občiansky zákonník – po jeho účinnosti si overte aktuálne znenie.
""")

clanek('pl','porozumienie-zamiast-wypowiedzenia-najmu',dict(
 title='Porozumienie zamiast wypowiedzenia najmu: kiedy warto',
 nazev='Porozumienie zamiast wypowiedzenia',
 description='Rozwiązanie umowy najmu za porozumieniem stron: bez okresu wypowiedzenia, w dowolnym terminie. Kto podpisuje i co wpisać (kaucja, media, wydanie lokalu).',
 perex='Porozumienie zastępuje wypowiedzenie – strony mogą ustalić dowolny termin, także krótszy niż okres wypowiedzenia.',
 kategorie='mieszkanie', tema='najem-mieszkania',
 dokumenty=['porozumienie-rozwiazanie-umowy-najmu','protokol-zdawczo-odbiorczy-mieszkania','wypowiedzenie-umowy-najmu'],
 slova=['porozumienie stron najem','rozwiązanie umowy najmu','wypowiedzenie najmu','koniec najmu','zwrot kaucji'],
 zdroje=[('Kodeks cywilny – najem, art. 659–692 (ELI)','https://eli.gov.pl/eli/DU/1964/93/ogl')],
 faq=[('Czy wynajmujący musi się zgodzić?','Tak, porozumienie wymaga zgody obu stron. Bez niej pozostaje wypowiedzenie.'),
      ('Kto podpisuje porozumienie?','Wszyscy wynajmujący i wszyscy najemcy.'),
      ('Co wpisać do porozumienia?','Dzień rozwiązania umowy, dzień wydania lokalu, zwrot kaucji i rozliczenie mediów.')]),
"""
Porozumienie to najszybszy sposób zakończenia najmu. Zastępuje wypowiedzenie i jego terminy.

## 1. Kiedy warto

- **Najemca** wyprowadza się wcześniej, niż pozwala wypowiedzenie.
- **Wynajmujący** potrzebuje lokalu, a najemca się zgadza.

## 2. Co wpisać

- **Dzień rozwiązania** umowy i **dzień wydania** lokalu.
- **Kaucja:** kiedy i jak zostanie zwrócona.
- **Media:** jak zostaną rozliczone.
- Podpisy **wszystkich wynajmujących i najemców**.

## 3. Gdy nie ma zgody

Pozostaje [wypowiedzenie umowy najmu](/pl/wypowiedzenie-umowy-najmu/).

## 4. Wydanie lokalu

[Porozumienie o rozwiązaniu umowy najmu](/pl/porozumienie-rozwiazanie-umowy-najmu/) wypełnisz za darmo online; przy wydaniu sporządźcie [protokół zdawczo-odbiorczy](/pl/protokol-zdawczo-odbiorczy-mieszkania/).
""")

clanek('de','mietaufhebungsvertrag-statt-kuendigung',dict(
 title='Mietaufhebungsvertrag statt Kündigung: Vorteile und Inhalt',
 nazev='Mietaufhebungsvertrag statt Kündigung',
 description='Mietverhältnis einvernehmlich beenden: ohne Kündigungsfrist, zu einem beliebigen Tag. Wer unterschreibt, was hineingehört (Kaution, Nebenkosten, Rückgabe).',
 perex='Mit einem Mietaufhebungsvertrag endet die Miete zu dem Tag, auf den sich beide Seiten einigen – ohne die gesetzliche Kündigungsfrist.',
 kategorie='wohnen', tema='kuendigung',
 dokumenty=['mietaufhebungsvertrag','uebergabeprotokoll-wohnung','kuendigung-mietvertrag'],
 slova=['Mietaufhebungsvertrag','Aufhebungsvertrag Miete','Kündigung Mietvertrag','vorzeitig ausziehen','Kaution zurück'],
 zdroje=[('§§ 535–580a BGB – Mietvertrag, Wohnraummiete','https://www.gesetze-im-internet.de/bgb/__535.html'),
         ('§ 573c BGB – Fristen der ordentlichen Kündigung','https://www.gesetze-im-internet.de/bgb/__573c.html')],
 faq=[('Muss der Vermieter zustimmen?','Ja. Ohne Einigung bleibt nur die Kündigung – für Mieter in der Regel mit drei Monaten Frist (§ 573c BGB).'),
      ('Wer unterschreibt?','Alle Vermieter und alle Mieter.'),
      ('Was gehört hinein?','Beendigungstag, Rückgabetag, Kaution und Nebenkostenabrechnung.')]),
"""
Der Aufhebungsvertrag ist der schnellste Weg aus einem Mietvertrag. Er ersetzt Kündigung und Kündigungsfrist.

## 1. Wann er sich lohnt

- Der **Mieter** zieht früher aus, als die Kündigungsfrist erlaubt.
- Der **Vermieter** braucht die Wohnung und der Mieter ist einverstanden.

## 2. Was hineingehört

- Ein **konkreter Beendigungstag** und der **Rückgabetag**.
- **Kaution:** wann und wie sie zurückgezahlt wird.
- **Nebenkosten:** wie abgerechnet wird.
- Unterschriften **aller Vermieter und Mieter**.

## 3. Ohne Druck

Niemand muss einen Aufhebungsvertrag unterschreiben. Ohne Einigung bleibt die [Kündigung](/de/kuendigung-mietvertrag/).

## 4. Rückgabe

Den [Mietaufhebungsvertrag](/de/mietaufhebungsvertrag/) füllen Sie kostenlos online aus; bei der Rückgabe hilft ein [Übergabeprotokoll](/de/uebergabeprotokoll-wohnung/).
""")

clanek('at','mietvertrag-einvernehmlich-aufloesen',dict(
 title='Mietvertrag einvernehmlich auflösen statt kündigen',
 nazev='Einvernehmliche Auflösung statt Kündigung',
 description='Mietvertrag in Österreich einvernehmlich auflösen: ohne Kündigungsfrist und Termin, zu einem vereinbarten Tag. Inhalt: Rückgabe, Kaution samt Zinsen, Betriebskosten.',
 perex='Eine einvernehmliche Auflösung ersetzt Kündigung, Frist und Termin. Das Mietverhältnis endet an dem Tag, den Vermieter und Mieter vereinbaren.',
 kategorie='wohnen', tema='kuendigung',
 dokumenty=['aufloesung-mietvertrag','uebergabeprotokoll-wohnung','kuendigung-mietvertrag'],
 slova=['Mietvertrag auflösen','einvernehmliche Auflösung','Österreich','Kündigung Mietvertrag','Kaution zurück'],
 zdroje=[('Allgemeines bürgerliches Gesetzbuch (RIS)','https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001622'),
         ('Mietrechtsgesetz (RIS)','https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10002531')],
 faq=[('Muss der Vermieter zustimmen?','Ja, eine einvernehmliche Auflösung braucht beide Seiten. Ohne Einigung bleibt die Kündigung.'),
      ('Wer unterschreibt?','Alle Vermieter und alle Mieter.'),
      ('Was ist mit der Kaution?','Sie ist nach Ende des Mietverhältnisses samt Zinsen zurückzuzahlen, soweit keine berechtigten Forderungen bestehen (§ 16b MRG).')]),
"""
Die einvernehmliche Auflösung ist der einfachste Weg aus einem Mietvertrag – auch aus einem befristeten.

## 1. Wann sie sich lohnt

- Der **Mieter** möchte früher ausziehen.
- Der **Vermieter** braucht die Wohnung und der Mieter ist einverstanden.

## 2. Was hineingehört

- **Auflösungstag** und **Rückgabetag**.
- **Kaution** samt Zinsen: wann und wie sie zurückgezahlt wird.
- **Betriebskosten:** wie abgerechnet wird.
- Unterschriften **aller Vermieter und Mieter** – schriftlich ist sie beweisbar.

## 3. Ohne Einigung

Bleibt die [Kündigung](/at/kuendigung-mietvertrag/) mit Frist und Termin.

## 4. Rückgabe

Die [Auflösung des Mietvertrags](/at/aufloesung-mietvertrag/) füllen Sie kostenlos online aus; bei der Rückgabe hilft ein [Übergabeprotokoll](/at/uebergabeprotokoll-wohnung/).
""")

clanek('ch','mietvertrag-aufheben-statt-kuendigen',dict(
 title='Mietvertrag aufheben statt kündigen: Aufhebungsvereinbarung',
 nazev='Aufhebungsvereinbarung statt Kündigung',
 description='Mietverhältnis in der Schweiz durch Übereinkunft aufheben (Art. 115 OR): ohne Kündigungstermin und amtliches Formular. Inhalt: Rückgabe, Kaution, Nebenkosten.',
 perex='Ein Mietverhältnis kann durch Übereinkunft formlos aufgehoben werden. Die Vereinbarung ersetzt Kündigung, Termine und Fristen – schriftlich ist sie beweisbar.',
 kategorie='wohnen', tema='kuendigung',
 dokumenty=['aufhebungsvereinbarung-mietvertrag','uebergabeprotokoll-wohnung','kuendigung-mietvertrag'],
 slova=['Aufhebungsvereinbarung','Mietvertrag aufheben','Schweiz','Kündigung Wohnung','Mietkaution freigeben'],
 zdroje=[('Obligationenrecht, Art. 115 (Fedlex)','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_115'),
         ('Obligationenrecht, Art. 266c (Fedlex)','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_266_c')],
 faq=[('Braucht es eine bestimmte Form?','Nein, die Aufhebung durch Übereinkunft ist formlos möglich (Art. 115 OR). Schriftlich ist sie aber beweisbar.'),
      ('Und ohne Einigung?','Dann bleibt die Kündigung mit mindestens drei Monaten Frist auf einen ortsüblichen Termin (Art. 266c OR).'),
      ('Was ist mit der Kaution?','Regeln Sie, wann die Bank sie freigibt – sie braucht die Zustimmung beider Parteien.')]),
"""
Die Aufhebung durch Übereinkunft ist der einfachste Weg aus einem Mietvertrag in der Schweiz.

## 1. Wann sie sich lohnt

- Der **Mieter** möchte ausserhalb der Kündigungstermine ausziehen.
- Der **Vermieter** braucht die Wohnung und der Mieter ist einverstanden.

## 2. Was hineingehört

- **Beendigungstag** und **Rückgabetag**.
- **Mietkaution:** wann sie freigegeben wird.
- **Nebenkosten:** wie abgerechnet wird.
- Unterschriften **aller Vermieter und Mieter**.

## 3. Ohne Einigung

Bleibt die [Kündigung](/ch/kuendigung-mietvertrag/) mit Frist und Termin – ein vorzeitiger Auszug ist mit einem zumutbaren Nachmieter möglich.

## 4. Rückgabe

Die [Aufhebungsvereinbarung](/ch/aufhebungsvereinbarung-mietvertrag/) füllen Sie kostenlos online aus; bei der Rückgabe hilft ein [Übergabeprotokoll](/ch/uebergabeprotokoll-wohnung/).
""")

clanek('hu','berlet-megszuntetese-kozos-megegyezessel',dict(
 title='Bérlet megszüntetése közös megegyezéssel felmondás helyett',
 nazev='Közös megegyezés felmondás helyett',
 description='Lakásbérlet megszüntetése közös megegyezéssel (Ptk. 6:212. §): felmondási idő nélkül, bármely napra. Ki írja alá, és mi kerüljön bele (kaució, rezsi, átadás).',
 perex='A felek a szerződést közös megegyezéssel a jövőre nézve bármikor megszüntethetik – felmondási idő nélkül, az általuk választott napra.',
 kategorie='lakas', tema='berles',
 dokumenty=['berleti-szerzodes-megszuntetese-kozos-megegyezessel','lakas-atadas-atveteli-jegyzokonyv','berleti-szerzodes-felmondasa'],
 slova=['bérlet megszüntetése','közös megegyezés','felmondás helyett','albérlet vége','kaució visszafizetése'],
 zdroje=[('Polgári Törvénykönyv – 2013. évi V. törvény, 6:212. § (NJT)','https://njt.jog.gov.hu/jogszabaly/2013-5-00-00')],
 faq=[('Kell a bérbeadó beleegyezése?','Igen, a közös megegyezéshez mindkét fél kell. Ha nincs megegyezés, marad a felmondás.'),
      ('Ki írja alá?','Minden bérbeadó és minden bérlő.'),
      ('Mi kerüljön bele?','A megszűnés napja, a lakás átadásának napja, a kaució visszafizetése és a rezsi elszámolása.')]),
"""
A közös megegyezés a leggyorsabb út a bérlet végéhez. Kiváltja a felmondást és a felmondási időt.

## 1. Mikor érdemes

- A **bérlő** hamarabb költözik, mint ahogy a felmondás engedné.
- A **bérbeadónak** kell a lakás, és a bérlő egyetért.

## 2. Mi kerüljön bele

- A bérlet **megszűnésének napja** és a lakás **átadásának napja**.
- **Kaució:** mikor és hogyan jár vissza.
- **Rezsi:** hogyan számolják el.
- **Minden bérbeadó és bérlő** aláírása.

## 3. Ha nincs megegyezés

Marad a [bérleti szerződés felmondása](/hu/berleti-szerzodes-felmondasa/).

## 4. Átadás

A [közös megegyezéses megszüntetést](/hu/berleti-szerzodes-megszuntetese-kozos-megegyezessel/) ingyen töltheti ki; átadáskor vegyenek fel [átadás-átvételi jegyzőkönyvet](/hu/lakas-atadas-atveteli-jegyzokonyv/).
""")
print('ok')
