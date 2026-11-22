import sys; sys.path.insert(0,'/home/claude/skripty')
from clanek import clanek

# ---------- MOTORKA ----------
clanek('cz','prodej-motorky',dict(
 title='Prodej motorky, skútru a čtyřkolky: na co nezapomenout',
 nazev='Prodej motorky',
 description='Jak prodat motorku, skútr nebo čtyřkolku: VIN na rámu, výbava a úpravy ve smlouvě, předávací protokol, platba převodem a přepis do 10 pracovních dnů.',
 perex='Prodej motorky se právně neliší od prodeje auta. Navíc ale hlídejte VIN na rámu, zapište výbavu a úpravy a nepouštějte nikoho na zkušební jízdu bez řidičáku.',
 kategorie='auto', tema='prodej-auta',
 dokumenty=['kupni-smlouva-motorka','predavaci-protokol-vozidlo','plna-moc-prepis-vozidla'],
 slova=['prodej motorky','prodej skútru','čtyřkolka','kupní smlouva motorka','přepis motorky','VIN na rámu'],
 zdroje=[('Občanský zákoník č. 89/2012 Sb. (e-Sbírka)','https://www.e-sbirka.cz/sb/2012/89'),
         ('Zákon č. 30/2024 Sb., o pojištění odpovědnosti z provozu vozidla (e-Sbírka)','https://www.e-sbirka.cz/sb/2024/30'),
         ('Zákon č. 254/2004 Sb., o omezení plateb v hotovosti (e-Sbírka)','https://www.e-sbirka.cz/sb/2004/254')],
 faq=[('Je smlouva na motorku jiná než na auto?','Právně ne – jde o kupní smlouvu na motorové vozidlo. Prakticky se vyplatí zapsat výbavu (kufry, padací rámy, výfuk) a ověřit VIN na rámu.'),
      ('Do kdy se musí motorka přepsat?','Žádost o zápis změny vlastníka se podává do 10 pracovních dnů od převodu vlastnictví.'),
      ('Můžu si nechat zaplatit v hotovosti?','Do 270 000 Kč ano, nad tento limit je platba v hotovosti zakázaná. Bezpečnější je převod.')]),
"""
Motorku prodáte stejnou kupní smlouvou jako auto. Rozdíl je v pár praktických věcech, na které se u motorek často zapomíná.

## 1. Připravte doklady

- **Velký technický průkaz** (osvědčení o registraci část II) – jste v něm zapsaný jako vlastník?
- **VIN** je u motorky obvykle **vyražený na rámu** u hlavy řízení. Zkontrolujte, že sedí s doklady – kupující to udělá taky.
- Nachystejte servisní knížku, klíče a doklady k doplňkům.

## 2. Zkušební jízda

- Pusťte na motorku jen toho, kdo má **řidičské oprávnění** na danou skupinu a vlastní přilbu – nechte si řidičák ukázat.
- Domluvte se předem, kdo platí případnou škodu.

## 3. Kupní smlouva

- Do smlouvy zapište **stav tachometru**, známé vady a **výbavu**: kufry, padací rámy, jiný výfuk. Úpravy, které mění technické parametry, musí být schválené a zapsané v dokladech.
- **Cenu** si nechte poslat převodem; v hotovosti je limit 270 000 Kč.

[Kupní smlouvu na motorku](/cz/kupni-smlouva-motorka/) vyplníte zdarma online.

## 4. Předání a přepis

- Při předání sepište [předávací protokol](/cz/predavaci-protokol-vozidlo/) s časem předání – od té chvíle odpovídá za motorku kupující.
- **Přepis** do **10 pracovních dnů** na registru vozidel. Kdo nemůže jít osobně, dá [plnou moc](/cz/plna-moc-prepis-vozidla/) s ověřeným podpisem.
- Prodej oznamte své pojišťovně; kupující si sjedná vlastní povinné ručení.
""")

clanek('sk','predaj-motorky',dict(
 title='Predaj motorky, skútra a štvorkolky: na čo nezabudnúť',
 nazev='Predaj motorky',
 description='Ako predať motorku, skúter alebo štvorkolku: VIN na ráme, výbava v zmluve, preberací protokol, platba prevodom a zmena držby vozidla do 30 dní.',
 perex='Predaj motorky sa právne nelíši od predaja auta. Navyše však skontrolujte VIN na ráme, zapíšte výbavu a úpravy a na skúšobnú jazdu púšťajte len vodiča s oprávnením.',
 kategorie='auto', tema='predaj-auta',
 dokumenty=['kupna-zmluva-motorka','preberaci-protokol-vozidla','splnomocnenie-prepis-vozidla'],
 slova=['predaj motorky','predaj skútra','štvorkolka','kúpna zmluva motorka','prepis motorky','zmena držby'],
 zdroje=[('Predal som auto (slovensko.sk)','https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_predal-som-auto/'),
         ('Zákon č. 394/2012 Z. z. o obmedzení platieb v hotovosti (Slov-Lex)','https://static.slov-lex.sk/static/SK/ZZ/2012/394/20260101.html')],
 faq=[('Je zmluva na motorku iná ako na auto?','Právne nie – obe sú kúpnou zmluvou na motorové vozidlo. Prakticky sa oplatí zapísať výbavu (kufre, padacie rámy, výfuk) a overiť VIN na ráme.'),
      ('Do kedy treba motorku prepísať?','Žiadosť o zmenu držby vozidla treba podať do 30 dní; podáva ju pôvodný držiteľ, prípadne na základe úradne overeného splnomocnenia.'),
      ('Môžem zaplatiť v hotovosti?','Medzi dvoma súkromnými osobami nepodnikateľmi do 15 000 €.')]),
"""
Motorku predáte rovnakou kúpnou zmluvou ako auto. Rozdiel je v niekoľkých praktických veciach.

## 1. Pripravte doklady

- **Osvedčenie o evidencii** časť I a II – ste v ňom zapísaný ako držiteľ a vlastník?
- **VIN** je na motorke obvykle **vyrazený na ráme** pri hlave riadenia. Overte, že sa zhoduje s dokladmi.
- Pripravte servisné záznamy, kľúče a doklady k doplnkom.

## 2. Skúšobná jazda

- Na motorku pustite len toho, kto má **vodičské oprávnenie** na danú skupinu a vlastnú prilbu.
- Dohodnite sa vopred, kto platí prípadnú škodu.

## 3. Kúpna zmluva

- Zapíšte **stav tachometra**, známe vady a **výbavu**: kufre, padacie rámy, iný výfuk. Úpravy meniace technické parametre musia byť schválené a zapísané v dokladoch.
- **Cenu** si nechajte poslať prevodom.

[Kúpnu zmluvu na motorku](/sk/kupna-zmluva-motorka/) vyplníte zadarmo online.

## 4. Odovzdanie a prepis

- Pri odovzdaní spíšte [preberací protokol](/sk/preberaci-protokol-vozidla/) s časom odovzdania.
- **Zmenu držby** treba podať do **30 dní** – osobne na dopravnom inšpektoráte alebo elektronicky. Kto nejde osobne, potrebuje [splnomocnenie](/sk/splnomocnenie-prepis-vozidla/) s úradne overeným podpisom.
- Kupujúci musí mať od prevzatia vlastné PZP.
""")

clanek('pl','sprzedaz-motocykla',dict(
 title='Sprzedaż motocykla, skutera i quada: o czym pamiętać',
 nazev='Sprzedaż motocykla',
 description='Jak sprzedać motocykl, skuter lub quada: VIN na ramie, wyposażenie w umowie, protokół, płatność przelewem, zgłoszenie zbycia w 30 dni i PCC-3 kupującego.',
 perex='Sprzedaż motocykla prawnie nie różni się od sprzedaży auta. Sprawdź jednak VIN na ramie, wpisz wyposażenie i pamiętaj o terminach: zgłoszenie zbycia i PCC-3.',
 kategorie='samochody', tema='sprzedaz-auta',
 dokumenty=['umowa-kupna-sprzedazy-motocykla','protokol-zdawczo-odbiorczy-pojazdu','pelnomocnictwo-rejestracja-pojazdu'],
 slova=['sprzedaż motocykla','sprzedaż skutera','quad','umowa kupna-sprzedaży motocykla','zgłoszenie zbycia','PCC-3'],
 zdroje=[('Zgłoś zbycie lub nabycie pojazdu (gov.pl)','https://www.gov.pl/web/gov/zglos-zbycie-lub-nabycie-pojazdu-na-przyklad-sprzedaz-kupno-darowizne'),
         ('Historia Pojazdu (gov.pl)','https://historiapojazdu.gov.pl/'),
         ('PCC – formularze (podatki.gov.pl)','https://www.podatki.gov.pl/podatki-osobiste/pcc/formularze/')],
 faq=[('Czy umowa na motocykl różni się od umowy na samochód?','Prawnie nie – to ta sama umowa sprzedaży pojazdu. Praktycznie warto wpisać wyposażenie (kufry, gmole, wydech) i sprawdzić VIN na ramie.'),
      ('Ile mam czasu na zgłoszenie sprzedaży?','Sprzedający zgłasza zbycie pojazdu w ciągu 30 dni, można to zrobić online na gov.pl.'),
      ('Kto płaci PCC?','Kupujący – 2% wartości rynkowej, deklaracja PCC-3 w ciągu 14 dni. Od 3 listopada 2026 zwolnione są rzeczy o wartości do 3000 zł.')]),
"""
Motocykl sprzedasz tą samą umową co samochód. Różnica tkwi w kilku praktycznych szczegółach.

## 1. Przygotuj dokumenty

- **Dowód rejestracyjny** i karta pojazdu, jeśli była wydana.
- **VIN** w motocyklu jest zwykle **wybity na ramie** przy główce ramy. Sprawdź, czy zgadza się z dowodem.
- Historię i przebieg kupujący może sprawdzić na historiapojazdu.gov.pl.

## 2. Jazda próbna

- Wpuść na motocykl tylko osobę z **prawem jazdy** odpowiedniej kategorii i własnym kaskiem.
- Ustalcie wcześniej, kto płaci za ewentualne szkody.

## 3. Umowa

- Wpisz **przebieg**, znane wady i **wyposażenie**: kufry, gmole, inny wydech.
- **Cenę** przyjmij przelewem albo za pokwitowaniem.

[Umowę kupna-sprzedaży motocykla](/pl/umowa-kupna-sprzedazy-motocykla/) wypełnisz za darmo online.

## 4. Wydanie i formalności

- Sporządźcie [protokół zdawczo-odbiorczy](/pl/protokol-zdawczo-odbiorczy-pojazdu/) z godziną wydania.
- **Sprzedający:** zgłoszenie zbycia w **30 dni** i powiadomienie ubezpieczyciela OC.
- **Kupujący:** PCC-3 w **14 dni** i rejestracja w **30 dni**.
""")

DE_Q=[('§ 444 BGB – Haftungsausschluss (gesetze-im-internet.de)','https://www.gesetze-im-internet.de/bgb/__444.html'),
      ('§ 15 FZV – Mitteilungspflichten bei Veräußerung (gesetze-im-internet.de)','https://www.gesetze-im-internet.de/fzv_2023/__15.html')]
clanek('de','motorrad-privat-verkaufen',dict(
 title='Motorrad privat verkaufen: Vertrag, Probefahrt, Abmeldung',
 nazev='Motorrad privat verkaufen',
 description='Motorrad, Roller oder Quad privat verkaufen: FIN am Rahmen, Zubehör und Umbauten im Vertrag, Haftungsausschluss, Probefahrt und Veräußerungsanzeige.',
 perex='Rechtlich ist der Motorradverkauf ein ganz normaler Kfz-Kaufvertrag. Achten Sie aber auf die FIN am Rahmen, eingetragene Umbauten und die Probefahrt.',
 kategorie='auto', tema='auto-verkaufen',
 dokumenty=['kaufvertrag-motorrad','uebergabeprotokoll-fahrzeug','quittung'],
 slova=['Motorrad verkaufen','Roller verkaufen','Quad','Kaufvertrag Motorrad','Probefahrt','Veräußerungsanzeige'],
 zdroje=DE_Q,
 faq=[('Unterscheidet sich der Vertrag vom Autokaufvertrag?','Rechtlich nicht. Praktisch sollten Zubehör und Umbauten im Vertrag stehen und die FIN am Rahmen geprüft werden.'),
      ('Darf ich die Gewährleistung ausschließen?','Unter Privatleuten ja – nicht aber für arglistig verschwiegene Mängel und vereinbarte Eigenschaften wie „unfallfrei“ (§ 444 BGB).'),
      ('Was muss ich nach dem Verkauf melden?','Die Veräußerung unverzüglich der Zulassungsbehörde (§ 15 FZV) und der Kfz-Versicherung.')]),
"""
Ein Motorrad verkaufen Sie mit demselben Kaufvertrag wie ein Auto. Ein paar Punkte sind beim Zweirad aber besonders wichtig.

## 1. Unterlagen vorbereiten

- **Zulassungsbescheinigung Teil I und II** – stehen Sie als Halter im Teil II?
- Die **FIN** ist beim Motorrad meist **am Lenkkopf in den Rahmen eingeschlagen**. Prüfen Sie, dass sie mit den Papieren übereinstimmt.
- **Umbauteile** (Auspuff, Lenker, Blinker) brauchen eine ABE, ein Teilegutachten mit Eintragung oder eine EG-Typgenehmigung. Legen Sie die Nachweise bereit.

## 2. Probefahrt

- Nur mit passender **Fahrerlaubnis** und eigenem Helm – Führerschein zeigen lassen.
- Vorher klären, wer für Schäden aufkommt.

## 3. Kaufvertrag

- **Kilometerstand**, bekannte **Mängel** und Unfälle ehrlich eintragen – verschwiegene Mängel heben den Haftungsausschluss auf.
- **Zubehör** (Koffer, Sturzbügel, Zweitauspuff) aufführen.

Den [Kaufvertrag für ein Motorrad](/de/kaufvertrag-motorrad/) füllen Sie kostenlos online aus.

## 4. Übergabe und Abmeldung

- Bei der Übergabe ein [Übergabeprotokoll](/de/uebergabeprotokoll-fahrzeug/) mit Uhrzeit erstellen.
- **Veräußerungsanzeige** unverzüglich an die Zulassungsbehörde und Meldung an die Versicherung.
""")

clanek('at','motorrad-verkaufen-oesterreich',dict(
 title='Motorrad privat verkaufen in Österreich: Vertrag, Abmeldung',
 nazev='Motorrad verkaufen in Österreich',
 description='Motorrad, Moped oder Quad privat verkaufen in Österreich: FIN am Rahmen, Zubehör im Vertrag, Gewährleistungsausschluss, Abmeldung, Pickerl und Typenschein.',
 perex='Der Motorradverkauf folgt denselben Regeln wie der Autoverkauf nach ABGB. Achten Sie auf FIN am Rahmen, eingetragene Umbauten und die Abmeldung.',
 kategorie='auto', tema='auto-verkaufen',
 dokumenty=['kaufvertrag-motorrad','uebergabeprotokoll-fahrzeug','quittung'],
 slova=['Motorrad verkaufen','Österreich','Moped verkaufen','Kaufvertrag Motorrad','Abmeldung','Pickerl'],
 zdroje=[('Kfz-Abmeldung (oesterreich.gv.at)','https://www.oesterreich.gv.at/themen/mobilitaet/kfz/2/Seite.060900.html'),
         ('Kfz-Zulassung in Österreich – An- und Abmeldung (ÖAMTC)','https://www.oeamtc.at/thema/autokauf/kfz-zulassung-in-oesterreich-16187062'),
         ('Allgemeines bürgerliches Gesetzbuch (RIS)','https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001622')],
 faq=[('Unterscheidet sich der Vertrag vom Autokaufvertrag?','Rechtlich nicht – es ist ein Kaufvertrag nach ABGB. Praktisch sollten Zubehör und Umbauten im Vertrag stehen.'),
      ('Darf ich als Privatperson die Gewährleistung ausschließen?','Ja, unter Privatpersonen – nicht aber für listig verschwiegene Mängel und zugesicherte Eigenschaften.'),
      ('Was braucht der Käufer zur Anmeldung?','Ausweis, Versicherungsbestätigung, Typenschein bzw. Genehmigungsnachweis, Kaufvertrag und – wenn fällig – ein gültiges Gutachten nach § 57a KFG.')]),
"""
Ein Motorrad verkaufen Sie mit demselben Kaufvertrag wie ein Auto. Diese Punkte sind beim Zweirad besonders wichtig.

## 1. Unterlagen vorbereiten

- **Zulassungsschein** und **Typenschein** bzw. Genehmigungsnachweis bereitlegen.
- Die **FIN** ist beim Motorrad meist **am Lenkkopf in den Rahmen eingeschlagen** – mit den Papieren vergleichen.
- Prüfen, ob genehmigungspflichtige **Umbauten** in den Papieren eingetragen sind.

## 2. Probefahrt

- Nur mit passender **Lenkberechtigung** und eigenem Helm.
- Vorher klären, wer für Schäden aufkommt.

## 3. Kaufvertrag

- **Kilometerstand**, bekannte **Mängel** und **Zubehör** (Koffer, Sturzbügel, Auspuff) eintragen.
- Kaufpreis per Überweisung oder gegen Quittung.

Den [Kaufvertrag für ein Motorrad](/at/kaufvertrag-motorrad/) füllen Sie kostenlos online aus.

## 4. Übergabe und Abmeldung

- Ein [Übergabeprotokoll](/at/uebergabeprotokoll-fahrzeug/) mit Uhrzeit erstellen.
- Der Verkäufer **meldet ab** (bei einer Zulassungsstelle, kostenlos) und informiert die Versicherung; der Käufer meldet mit Kaufvertrag und gegebenenfalls Pickerl an.
""")

clanek('ch','motorrad-verkaufen-schweiz',dict(
 title='Motorrad privat verkaufen in der Schweiz: Vertrag, Schilder',
 nazev='Motorrad verkaufen in der Schweiz',
 description='Occasionsmotorrad, Roller oder Quad privat verkaufen: Fahrgestellnummer am Rahmen, Zubehör im Vertrag, Gewährleistung, Kontrollschilder und Fahrzeugausweis.',
 perex='Der Motorradverkauf ist ein normaler Kaufvertrag nach OR. Die Kontrollschilder behalten Sie, den Fahrzeugausweis und das Zubehör halten Sie im Vertrag fest.',
 kategorie='auto', tema='auto-verkaufen',
 dokumenty=['kaufvertrag-motorrad','uebergabeprotokoll-fahrzeug','quittung'],
 slova=['Motorrad verkaufen','Schweiz','Occasion Motorrad','Kaufvertrag Motorrad','Kontrollschilder','Fahrzeugausweis'],
 zdroje=[('Obligationenrecht, Art. 184 ff. und 197 ff. (Fedlex)','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de'),
         ('Fahrzeugausweis (ch.ch)','https://www.ch.ch/de/ausweise-und-dokumente/fahrzeugausweis')],
 faq=[('Gehen die Kontrollschilder mit dem Motorrad mit?','Nein. Die Schilder gehören dem Halter. Der Verkäufer behält sie, der Käufer braucht eigene.'),
      ('Darf ich die Gewährleistung ausschliessen?','Ja, unter Privaten ist das üblich – nicht aber für Mängel, die Sie arglistig verschweigen (Art. 199 OR).'),
      ('Was braucht der Käufer zum Einlösen?','Den Fahrzeugausweis, einen Versicherungsnachweis und einen Ausweis. Ob eine neue Fahrzeugprüfung nötig ist, regelt der Kanton.')]),
"""
Ein Motorrad verkaufen Sie mit demselben Kaufvertrag wie ein Auto. Diese Punkte sind beim Zweirad besonders wichtig.

## 1. Unterlagen vorbereiten

- **Fahrzeugausweis** bereitlegen; Stammnummer und letzte Fahrzeugprüfung (MFK) gehören in den Vertrag.
- Die **Fahrgestellnummer** ist beim Motorrad meist **am Lenkkopf in den Rahmen eingeschlagen** – mit dem Ausweis vergleichen.
- Prüfen, ob bewilligungspflichtige **Änderungen** im Fahrzeugausweis eingetragen sind.

## 2. Probefahrt

- Nur mit passendem **Führerausweis** und eigenem Helm.
- Vorher klären, wer für Schäden aufkommt.

## 3. Kaufvertrag

- **Kilometerstand**, bekannte **Mängel** und **Zubehör** eintragen. Die Gewährleistung kann wegbedungen werden – nicht aber für arglistig verschwiegene Mängel.

Den [Kaufvertrag für ein Motorrad](/ch/kaufvertrag-motorrad/) füllen Sie kostenlos online aus.

## 4. Übergabe

- Ein [Übergabeprotokoll](/ch/uebergabeprotokoll-fahrzeug/) mit Uhrzeit erstellen.
- Die **Kontrollschilder behalten Sie**; ohne eigene Schilder und Versicherung darf der Käufer nicht fahren.
- Ihre Versicherung über den Verkauf informieren.
""")

clanek('hu','motor-eladasa',dict(
 title='Motor, robogó és quad eladása: mire figyeljen',
 nazev='Motor eladása',
 description='Hogyan adjon el motort, robogót vagy quadot: alvázszám a vázon, tartozékok a szerződésben, két tanú, átadás-átvételi jegyzőkönyv és bejelentés 15 napon belül.',
 perex='Jogilag a motor eladása ugyanaz, mint az autóé: két tanú, 15 nap a bejelentésre. Ellenőrizze viszont az alvázszámot a vázon, és írja bele a tartozékokat.',
 kategorie='auto', tema='auto-eladasa',
 dokumenty=['motorkerekpar-adasveteli-szerzodes','atadas-atveteli-jegyzokonyv-gepjarmu','meghatalmazas-forgalmi-atirashoz'],
 slova=['motor eladása','robogó eladása','quad','motor adásvételi szerződés','átírás','tulajdonosváltozás bejelentése'],
 zdroje=[('304/2009. (XII. 22.) Korm. rendelet – bejelentés, a magánokirat tartalma (NJT)','https://njt.jog.gov.hu/jogszabaly/2009-304-20-22'),
         ('Polgári perrendtartás, 325. § – teljes bizonyító erejű magánokirat (NJT)','https://njt.jog.gov.hu/jogszabaly/2016-130-00-00')],
 faq=[('Más a szerződés motorra, mint autóra?','Jogilag nem – mindkettő gépjármű adásvételi szerződés. Gyakorlati különbség: az alvázszám a vázba van beütve, a tartozékokat érdemes beleírni.'),
      ('Kellenek tanúk?','Az átíráshoz teljes bizonyító erejű magánokirat kell: két tanú aláírása nevükkel és lakcímükkel, vagy ügyvédi ellenjegyzés.'),
      ('Mennyi idő alatt kell bejelenteni?','Mindkét félnek 15 napja van: a vevő kéri az átírást, az eladó bejelenti az eladást.')]),
"""
Motort ugyanolyan szerződéssel ad el, mint autót. Néhány gyakorlati dologra azonban külön figyeljen.

## 1. Készítse elő az okmányokat

- **Forgalmi engedély** és **törzskönyv** – Ön szerepel bennük tulajdonosként?
- Az **alvázszám** motoron általában **a kormányfejnél a vázba van beütve** – vesse össze az okmányokkal.
- Az engedélyköteles **átalakításoknak** szerepelniük kell az okmányokban.

## 2. Próbaút

- Csak megfelelő kategóriás **jogosítvánnyal** és saját bukósisakkal.
- Előre beszéljék meg, ki fizeti az esetleges kárt.

## 3. A szerződés

- Írja bele a **km-állást**, az ismert **hibákat** és a **tartozékokat** (dobozok, bukócső, kipufogó).
- Az átíráshoz **két tanú** aláírása kell (névvel, lakcímmel), vagy ügyvédi ellenjegyzés.

A [motorkerékpár adásvételi szerződést](/hu/motorkerekpar-adasveteli-szerzodes/) ingyen, online töltheti ki.

## 4. Átadás és bejelentés

- Vegyenek fel [átadás-átvételi jegyzőkönyvet](/hu/atadas-atveteli-jegyzokonyv-gepjarmu/) az időponttal és a km-állással.
- **Eladó:** 15 napon belül bejelenti a tulajdonosváltozást. **Vevő:** kötelező biztosítás és átírás 15 napon belül.
""")

# ---------- PODNÁJEM ----------
clanek('cz','podnajem-bytu',dict(
 title='Podnájem bytu: kdy potřebujete souhlas pronajímatele',
 nazev='Podnájem bytu',
 description='Kdy smí nájemce dát byt nebo pokoj do podnájmu: bez souhlasu, když v bytě sám bydlí, jinak jen s písemným souhlasem pronajímatele. Co hrozí a jak podnájem sepsat.',
 perex='Pokoj v bytě, kde sám bydlíte, můžete podnajmout i bez souhlasu. Celý byt jen s písemným souhlasem pronajímatele – a podnájem vždy skončí s vaším nájmem.',
 kategorie='bydleni', tema='podnajem',
 dokumenty=['podnajemni-smlouva','predavaci-protokol-byt','potvrzeni-o-prevzeti-penez'],
 slova=['podnájem','podnájem bytu','souhlas pronajímatele','podnájemní smlouva','podnájem pokoje','spolubydlení'],
 zdroje=[('Občanský zákoník č. 89/2012 Sb., § 2274 a § 2275 (e-Sbírka)','https://www.e-sbirka.cz/sb/2012/89'),
         ('MMR – stanovisko k praxi „podnájmů“ (leden 2026)','https://mmr.gov.cz/getmedia/a4dcd67b-9daf-43f5-a48d-ec536f3479d5/stanovisko-podnajmy_MSp.pdf.aspx?ext=.pdf'),
         ('Veřejný ochránce práv – leták Nájem bytu','https://www.ochrance.cz/letaky/najem-bytu/najem-bytu.pdf')],
 faq=[('Potřebuji souhlas na podnájem pokoje?','Ne, pokud v bytě sám trvale bydlíte. Podnájem celého bytu nebo části, když v něm nebydlíte, potřebuje písemný souhlas pronajímatele.'),
      ('Co se stane s podnájmem, když skončí nájem?','Podnájem skončí spolu s nájmem a podnájemník nemá nárok na náhradní bydlení.'),
      ('Je „podnájem“ od firmy opravdu podnájem?','Podle stanoviska MMR a Ministerstva spravedlnosti z ledna 2026 jde o nájem se vší ochranou nájemce, pokud byt podnajímá firma, která v něm sama nebydlí a pronájmem podniká.')]),
"""
Podnájem je běžný u spolubydlení i při odjezdu na delší dobu. Rozhoduje hlavně to, jestli v bytě sami dál bydlíte.

## 1. Kdy souhlas nepotřebujete

- Pokud v bytě **sami trvale bydlíte**, můžete podnajmout pokoj nebo část bytu i bez souhlasu pronajímatele.
- Zkontrolujte ale svou nájemní smlouvu – může obsahovat oznamovací povinnost.

## 2. Kdy souhlas potřebujete

- **Celý byt**, nebo část bytu, když v něm sami nebydlíte, jde podnajmout jen s **písemným souhlasem pronajímatele**.
- Souhlas si vyžádejte předem a jeho kopii přiložte k podnájemní smlouvě.

## 3. Co si ohlídat jako podnájemník

- Nechte si ukázat **nájemní smlouvu** nájemce – je opravdu nájemcem a do kdy?
- **Podnájem končí s nájmem.** Skončí-li nájem nájemce, končí i váš podnájem – bez náhradního bydlení.
- Kauci a podnájemné plaťte převodem nebo proti [potvrzení o převzetí peněz](/cz/potvrzeni-o-prevzeti-penez/).

## 4. Sepište smlouvu

[Podnájemní smlouvu](/cz/podnajemni-smlouva/) vyplníte zdarma online – i pro jeden pokoj. Při nastěhování se hodí [předávací protokol](/cz/predavaci-protokol-byt/).
""")

clanek('sk','podnajom-bytu',dict(
 title='Podnájom bytu: kedy treba súhlas prenajímateľa',
 nazev='Podnájom bytu',
 description='Podnájom bytu alebo izby na Slovensku: písomný súhlas prenajímateľa podľa § 719 OZ, výpoveď podnájmu, koniec spolu s nájmom a čo patrí do zmluvy o podnájme.',
 perex='Byt alebo jeho časť môže nájomca prenechať do podnájmu len s písomným súhlasom prenajímateľa. Podnájom nikdy netrvá dlhšie ako samotný nájom.',
 kategorie='byvanie', tema='najom-bytu',
 dokumenty=['zmluva-o-podnajme','preberaci-protokol-bytu','potvrdenie-o-prevzati-penazi'],
 slova=['podnájom','podnájom bytu','súhlas prenajímateľa','zmluva o podnájme','podnájom izby','§ 719'],
 zdroje=[('Občiansky zákonník č. 40/1964 Zb., § 719 (Slov-Lex)','https://static.slov-lex.sk/static/SK/ZZ/1964/40/')],
 faq=[('Potrebujem súhlas na podnájom izby?','Áno. Byt alebo jeho časť možno prenechať do podnájmu len s písomným súhlasom prenajímateľa (§ 719 ods. 1 OZ).'),
      ('Ako sa podnájom končí?','Ak zmluva neurčuje inak, možno ho vypovedať aj bez udania dôvodu. Najneskôr skončí spolu s nájmom.'),
      ('Má podnájomník nárok na náhradné bývanie?','Nie. Po skončení podnájmu nemá nárok na náhradný podnájom (§ 719 ods. 3 OZ).')]),
"""
Podnájom je bežný pri spolubývaní aj pri dlhšom odchode. Pravidlá sú na Slovensku jednoduché, no prísne.

## 1. Súhlas prenajímateľa

- Byt **alebo jeho časť** možno dať do podnájmu len s **písomným súhlasom prenajímateľa** (§ 719 ods. 1 OZ).
- Súhlas si vyžiadajte vopred a priložte ho k zmluve o podnájme.

## 2. Čo si postrážiť ako podnájomník

- Nechajte si ukázať **nájomnú zmluvu** a súhlas prenajímateľa.
- **Podnájom nemôže trvať dlhšie ako nájom.** Po jeho skončení nemáte nárok na náhradný podnájom.
- Zábezpeku a podnájomné plaťte prevodom alebo proti [potvrdeniu o prevzatí peňazí](/sk/potvrdenie-o-prevzati-penazi/).

## 3. Výpoveď

- Ak zmluva neurčuje inak, podnájom možno vypovedať aj **bez udania dôvodu** v zákonnej lehote.

## 4. Spíšte zmluvu

[Zmluvu o podnájme](/sk/zmluva-o-podnajme/) vyplníte zadarmo online. Pri nasťahovaní sa hodí [preberací protokol](/sk/preberaci-protokol-bytu/).

Pozor: od 1. júla 2027 platí nový Občiansky zákonník – po jeho účinnosti si overte aktuálne znenie.
""")

clanek('pl','podnajem-mieszkania',dict(
 title='Podnajem mieszkania: kiedy potrzebna zgoda wynajmującego',
 nazev='Podnajem mieszkania',
 description='Podnajem mieszkania lub pokoju: zgoda wynajmującego (art. 688² KC), solidarna odpowiedzialność najemcy i podnajemcy, koniec wraz z najmem i co wpisać do umowy.',
 perex='Bez zgody wynajmującego najemca nie może podnająć mieszkania ani pokoju. Podnajem kończy się najpóźniej razem z najmem.',
 kategorie='mieszkanie', tema='najem-mieszkania',
 dokumenty=['umowa-podnajmu','protokol-zdawczo-odbiorczy-mieszkania','pokwitowanie-odbioru-pieniedzy'],
 slova=['podnajem','podnajem mieszkania','podnajem pokoju','zgoda wynajmującego','umowa podnajmu','art. 688²'],
 zdroje=[('Kodeks cywilny – najem, art. 659–692 (ELI)','https://eli.gov.pl/eli/DU/1964/93/ogl')],
 faq=[('Czy potrzebuję zgody na podnajem pokoju?','Tak. Bez zgody wynajmującego najemca nie może podnająć lokalu ani jego części (art. 688² KC).'),
      ('Kto odpowiada za szkody podnajemcy?','Najemca i podnajemca odpowiadają solidarnie wobec wynajmującego za używanie lokalu zgodnie z umową najmu (art. 668 KC).'),
      ('Kiedy kończy się podnajem?','Najpóźniej z chwilą zakończenia najmu (art. 668 § 2 KC).')]),
"""
Podnajem jest popularny przy dzieleniu mieszkania i wyjazdach. Zasady w Kodeksie cywilnym są krótkie, ale ważne.

## 1. Zgoda wynajmującego

- **Bez zgody wynajmującego** najemca nie może podnająć mieszkania **ani jego części** (art. 688² KC).
- Uzyskaj zgodę przed podpisaniem umowy i dołącz ją.

## 2. Odpowiedzialność

- Najemca i podnajemca odpowiadają **solidarnie** wobec wynajmującego za używanie lokalu zgodnie z umową najmu (art. 668 KC).

## 3. Na co uważać jako podnajemca

- Poproś o **umowę najmu** i zgodę wynajmującego.
- **Podnajem kończy się najpóźniej z najmem.**
- Kaucję i czynsz płać przelewem albo za [pokwitowaniem](/pl/pokwitowanie-odbioru-pieniedzy/).

## 4. Spisz umowę

[Umowę podnajmu](/pl/umowa-podnajmu/) wypełnisz za darmo online. Przy wprowadzeniu przyda się [protokół zdawczo-odbiorczy](/pl/protokol-zdawczo-odbiorczy-mieszkania/).
""")

clanek('de','untervermietung',dict(
 title='Untervermietung: Wann der Vermieter zustimmen muss',
 nazev='Untervermietung',
 description='Zimmer oder Wohnung untervermieten: Erlaubnis nach § 540 BGB, Anspruch bei berechtigtem Interesse (§ 553 BGB), Haftung des Hauptmieters und Untermietvertrag.',
 perex='Untervermieten dürfen Sie nur mit Erlaubnis des Vermieters. Für ein Zimmer haben Sie bei berechtigtem Interesse aber meist einen Anspruch darauf.',
 kategorie='wohnen', tema='mietvertrag',
 dokumenty=['untermietvertrag','uebergabeprotokoll-wohnung','quittung'],
 slova=['Untervermietung','Untermiete','Erlaubnis Vermieter','Untermietvertrag','WG-Zimmer','§ 553 BGB'],
 zdroje=[('§ 540 BGB – Gebrauchsüberlassung an Dritte','https://www.gesetze-im-internet.de/bgb/__540.html'),
         ('§ 553 BGB – Gestattung der Gebrauchsüberlassung an Dritte','https://www.gesetze-im-internet.de/bgb/__553.html')],
 faq=[('Brauche ich für ein Zimmer die Erlaubnis?','Ja, aber bei berechtigtem Interesse (z. B. Mitbewohner aus finanziellen Gründen) haben Sie für einen Teil der Wohnung einen Anspruch darauf (§ 553 BGB).'),
      ('Darf der Vermieter mehr Miete verlangen?','Ist ihm die Untervermietung nur bei angemessener Erhöhung zuzumuten, kann er die Erlaubnis davon abhängig machen (§ 553 Abs. 2 BGB).'),
      ('Wer haftet für Schäden des Untermieters?','Der Hauptmieter haftet dem Vermieter für ein Verschulden des Untermieters (§ 540 Abs. 2 BGB).')]),
"""
Untervermietung ist in WGs und bei längerer Abwesenheit üblich. Ohne Erlaubnis riskieren Sie aber die Kündigung.

## 1. Erlaubnis einholen

- Für jede Untervermietung brauchen Sie die **Erlaubnis des Vermieters** (§ 540 BGB). Holen Sie sie schriftlich und vorher ein.
- Für einen **Teil der Wohnung** haben Sie bei **berechtigtem Interesse** einen Anspruch auf die Erlaubnis (§ 553 BGB) – der Vermieter kann sie von einer angemessenen Mieterhöhung abhängig machen.

## 2. Haftung

- Sie haften dem Vermieter für ein **Verschulden des Untermieters** (§ 540 Abs. 2 BGB).

## 3. Darauf achtet der Untermieter

- Erlaubnis des Vermieters und Hauptmietvertrag zeigen lassen.
- Das **Untermietverhältnis endet spätestens mit dem Hauptmietverhältnis**.
- Kaution und Miete per Überweisung oder gegen [Quittung](/de/quittung/).

## 4. Vertrag schließen

Den [Untermietvertrag](/de/untermietvertrag/) füllen Sie kostenlos online aus. Beim Einzug hilft ein [Übergabeprotokoll](/de/uebergabeprotokoll-wohnung/). Als Hauptmieter stellen Sie dem Untermieter außerdem die [Wohnungsgeberbestätigung](/de/wohnungsgeberbestaetigung/) aus.
""")

clanek('at','untervermietung-oesterreich',dict(
 title='Untervermietung in Österreich: Wann ist sie erlaubt?',
 nazev='Untervermietung in Österreich',
 description='Untervermieten in Österreich: gänzliche Untervermietung nur mit Zustimmung, teilweise nach § 11 MRG oft auch ohne. Untermietzins, Ende mit dem Hauptmietvertrag.',
 perex='Die ganze Wohnung dürfen Sie nur mit Zustimmung untervermieten. Einen Teil, in dem Sie selbst weiter wohnen, oft auch ohne – im Vollanwendungsbereich des MRG.',
 kategorie='wohnen', tema='mietvertrag',
 dokumenty=['untermietvertrag','uebergabeprotokoll-wohnung','quittung'],
 slova=['Untervermietung','Österreich','Untermiete','MRG § 11','Untermietvertrag','Zustimmung Vermieter'],
 zdroje=[('Recht des Hauptmieters zur Untervermietung (oesterreich.gv.at)','https://www.oesterreich.gv.at/de/themen/bauen_und_wohnen/wohnen/3/2/Seite.210218'),
         ('Mietrechtsgesetz (RIS)','https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10002531')],
 faq=[('Darf ich ein Zimmer ohne Zustimmung untervermieten?','Im Vollanwendungsbereich des MRG meist ja, solange Sie selbst dort wohnen und kein wichtiger Grund nach § 11 MRG entgegensteht.'),
      ('Und die ganze Wohnung?','Nur mit Zustimmung des Vermieters oder wenn der Mietvertrag es gestattet.'),
      ('Wie hoch darf der Untermietzins sein?','Ein unverhältnismäßig hoher Untermietzins im Vergleich zu Ihrem Hauptmietzins ist ein wichtiger Grund gegen die Untervermietung.')]),
"""
Ob Sie untervermieten dürfen, hängt in Österreich davon ab, wie viel der Wohnung Sie weitergeben und ob das Mietrechtsgesetz voll gilt.

## 1. Gänzliche Untervermietung

- Die **ganze Wohnung** dürfen Sie nur mit **Zustimmung des Vermieters** untervermieten – oder wenn der Mietvertrag es ausdrücklich erlaubt.

## 2. Teilweise Untervermietung

- Im **Vollanwendungsbereich des MRG** ist eine teilweise Untervermietung auch **ohne Zustimmung** möglich, solange Sie selbst dort wohnen.
- Ausnahme: ein **wichtiger Grund nach § 11 MRG**, etwa ein unverhältnismäßig hoher Untermietzins.

## 3. Darauf achtet der Untermieter

- Hauptmietvertrag und gegebenenfalls Zustimmung zeigen lassen.
- Das **Untermietverhältnis endet spätestens mit dem Hauptmietverhältnis**.
- Zahlungen per Überweisung oder gegen [Quittung](/at/quittung/).

## 4. Vertrag schließen

Den [Untermietvertrag](/at/untermietvertrag/) füllen Sie kostenlos online aus; beim Einzug hilft ein [Übergabeprotokoll](/at/uebergabeprotokoll-wohnung/).
""")

clanek('ch','untermiete-schweiz',dict(
 title='Untermiete in der Schweiz: Zustimmung nach Art. 262 OR',
 nazev='Untermiete in der Schweiz',
 description='Wohnung oder Zimmer untervermieten in der Schweiz: Zustimmung des Vermieters nach Art. 262 OR, wann er sie verweigern darf, Haftung und Untermietvertrag.',
 perex='Untervermieten dürfen Sie nur mit Zustimmung des Vermieters. Verweigern darf er sie aber nur aus den drei Gründen, die das Gesetz nennt.',
 kategorie='wohnen', tema='mietvertrag',
 dokumenty=['untermietvertrag','uebergabeprotokoll-wohnung','quittung'],
 slova=['Untermiete','Schweiz','untervermieten','Art. 262 OR','Untermietvertrag','WG-Zimmer'],
 zdroje=[('Obligationenrecht, Art. 262 (Fedlex)','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_262'),
         ('Wohnung mieten (ch.ch)','https://www.ch.ch/de/wohnen/mieten/')],
 faq=[('Brauche ich die Zustimmung des Vermieters?','Ja, für jede Untermiete (Art. 262 OR).'),
      ('Wann darf der Vermieter ablehnen?','Nur wenn Sie ihm die Bedingungen nicht bekanntgeben, diese im Vergleich zum Hauptmietvertrag missbräuchlich sind oder ihm wesentliche Nachteile entstehen.'),
      ('Wer haftet gegenüber dem Vermieter?','Sie als Hauptmieter – wenn der Untermieter die Sache anders gebraucht, als es Ihnen gestattet ist.')]),
"""
Untermiete ist in der Schweiz weit verbreitet – mit klaren Regeln im Obligationenrecht.

## 1. Zustimmung einholen

- Jede Untermiete braucht die **Zustimmung des Vermieters** (Art. 262 OR). Teilen Sie ihm die **Bedingungen** mit: Untermietzins, Dauer, Person.

## 2. Wann der Vermieter ablehnen darf

- Wenn Sie ihm die Bedingungen **nicht bekanntgeben**,
- wenn diese im Vergleich zum Hauptmietvertrag **missbräuchlich** sind (etwa ein deutlich höherer Mietzins),
- oder wenn ihm **wesentliche Nachteile** entstehen.

## 3. Haftung und Ende

- Sie haften, wenn der Untermieter die Wohnung anders gebraucht, als es Ihnen gestattet ist.
- Das **Untermietverhältnis endet spätestens mit dem Hauptmietverhältnis**.

## 4. Vertrag schließen

Den [Untermietvertrag](/ch/untermietvertrag/) füllen Sie kostenlos online aus; beim Einzug hilft ein [Übergabeprotokoll](/ch/uebergabeprotokoll-wohnung/). Zahlungen per Überweisung oder gegen [Quittung](/ch/quittung/).
""")

clanek('hu','alberlet-kiadasa',dict(
 title='Albérletbe adás: mikor kell a bérbeadó hozzájárulása',
 nazev='Albérletbe adás',
 description='Lakás vagy szoba albérletbe adása: a bérbeadó hozzájárulása (Ptk. 6:334. §), a bérlő felelőssége az albérlőért, az albérlet vége és az albérleti szerződés.',
 perex='Bérelt lakást vagy szobát csak a bérbeadó hozzájárulásával adhat albérletbe. Az albérlő magatartásáért Ön felel, és az albérlet legfeljebb a bérlet végéig tart.',
 kategorie='lakas', tema='berles',
 dokumenty=['alberleti-szerzodes','lakas-atadas-atveteli-jegyzokonyv','atveteli-elismerveny'],
 slova=['albérlet','albérletbe adás','bérbeadó hozzájárulása','albérleti szerződés','szoba kiadása','Ptk. 6:334'],
 zdroje=[('Polgári Törvénykönyv – 2013. évi V. törvény, 6:334. § (NJT)','https://njt.jog.gov.hu/jogszabaly/2013-5-00-00'),
         ('1993. évi LXXVIII. törvény a lakások bérletéről (NJT)','https://njt.jog.gov.hu/jogszabaly/1993-78-00-00')],
 faq=[('Kell hozzájárulás egy szoba kiadásához?','Igen. A bérlő a lakást harmadik személy használatába csak a bérbeadó hozzájárulásával adhatja (Ptk. 6:334. §).'),
      ('Ki felel az albérlő okozta kárért?','A bérlő – úgy, mintha a lakást maga használta volna.'),
      ('Meddig tarthat az albérlet?','Legfeljebb a bérlet végéig.')]),
"""
Albérletbe adás gyakori lakótársaknál vagy hosszabb távollétnél. A szabályok rövidek, de fontosak.

## 1. A bérbeadó hozzájárulása

- Bérelt lakást vagy annak részét **csak a bérbeadó hozzájárulásával** adhatja harmadik személy használatába (Ptk. 6:334. §).
- Kérje **írásban, előre**, és csatolja az albérleti szerződéshez.

## 2. Felelősség

- Az albérlő magatartásáért úgy felel, **mintha a lakást maga használta volna**.

## 3. Mire figyeljen az albérlő

- Kérje el a **bérleti szerződést** és a hozzájárulást.
- Az albérlet **legfeljebb a bérlet végéig** tarthat.
- A kauciót és a díjat utalással vagy [átvételi elismervény](/hu/atveteli-elismerveny/) ellenében fizesse.

## 4. Szerződés

Az [albérleti szerződést](/hu/alberleti-szerzodes/) ingyen, online töltheti ki; beköltözéskor jól jön az [átadás-átvételi jegyzőkönyv](/hu/lakas-atadas-atveteli-jegyzokonyv/).
""")
print('ok')
