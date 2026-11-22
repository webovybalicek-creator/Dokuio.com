import sys; sys.path.insert(0,'/home/claude/skripty')
from clanek import clanek
PODVOD = {
 'cz':"Kupující pošle odkaz na „bezpečnou platbu“ nebo „kurýra“ a chce číslo karty? **Je to podvod.** K přijetí peněz nikdy nepotřebujete zadávat údaje karty ani PIN.",
 'sk':"Kupujúci pošle odkaz na „bezpečnú platbu“ alebo „kuriéra“ a chce číslo karty? **Je to podvod.** Na prijatie peňazí nikdy nepotrebujete zadávať údaje karty ani PIN.",
 'pl':"Kupujący przysyła link do „bezpiecznej płatności” lub „kuriera” i prosi o dane karty? **To oszustwo.** Do otrzymania pieniędzy nigdy nie potrzebujesz podawać danych karty ani PIN-u.",
 'de':"Der Käufer schickt einen Link zu „sicherer Zahlung“ oder einem „Kurierdienst“ und will Ihre Kartendaten? **Das ist Betrug.** Um Geld zu empfangen, müssen Sie nie Kartendaten oder PIN eingeben.",
 'hu':"A vevő linket küld „biztonságos fizetéshez” vagy „futárhoz”, és kártyaadatot kér? **Ez csalás.** Pénz fogadásához soha nem kell kártyaadatot vagy PIN-kódot megadni.",
}

# ---------- ZAMÍTNUTÁ REKLAMACE ----------
clanek('cz','zamitnuta-reklamace',dict(
 title='Obchod zamítl reklamaci: co dál (posudek, ČOI, soud)',
 nazev='Zamítnutá reklamace',
 description='Prodejce zamítl reklamaci? Vyžádejte si písemné odůvodnění, nechte vadu posoudit a obraťte se na ČOI – mimosoudní řešení sporu je zdarma, návrh do 1 roku.',
 perex='Zamítnutí reklamace není konečné. Chtějte písemné odůvodnění, nechte vadu nezávisle posoudit a zkuste bezplatné mimosoudní řešení sporu u ČOI.',
 kategorie='nakupy', tema='reklamace',
 dokumenty=['reklamace','odstoupeni-od-smlouvy','kupni-smlouva-vec'],
 slova=['zamítnutá reklamace','reklamace zamítnuta','ČOI','mimosoudní řešení sporu','znalecký posudek','reklamace co dál'],
 zdroje=[('Občanský zákoník č. 89/2012 Sb. (e-Sbírka)','https://www.e-sbirka.cz/sb/2012/89'),
         ('Česká obchodní inspekce – mimosoudní řešení spotřebitelských sporů','https://www.coi.cz/'),
         ('Nároky na reklamaci zboží (Portál občana)','https://portal.gov.cz/caste-dotazy/dalsi-informace-a-navody/naroky-na-reklamaci-zbozi')],
 faq=[('Kdo musí dokázat, že vada nevznikla mým používáním?','Když se vada ukáže do jednoho roku od převzetí, má se za to, že věc byla vadná už při převzetí – opak musí dokázat obchod.'),
      ('Kolik stojí mimosoudní řešení u ČOI?','Je zdarma. Návrh podáte nejpozději do 1 roku od chvíle, kdy jste poprvé uplatnili reklamaci u prodávajícího.'),
      ('Co když obchod reklamaci nevyřídí do 30 dnů?','Můžete odstoupit od smlouvy a chtít peníze zpět.')]),
"""
Zamítnutá reklamace neznamená, že jste prohráli. Postupujte v tomto pořadí.

## 1. Chtějte písemné odůvodnění

- Obchod vám musí vydat **potvrzení o vyřízení** reklamace. Chtějte v něm **důvod zamítnutí**.
- Zkontrolujte, jestli reklamaci vyřídil **do 30 dnů**. Pokud ne, můžete od smlouvy odstoupit.

## 2. Důkazní břemeno v prvním roce

- Vada, která se ukáže **do jednoho roku** od převzetí, se považuje za vadu už při převzetí. Obchod musí dokázat opak – nestačí obecné „mechanické poškození“ bez vysvětlení.

## 3. Nezávislé posouzení

- Nechte vadu posoudit nezávislým odborníkem nebo znalcem. S posudkem v ruce reklamaci uplatněte **znovu**, písemně.

## 4. Mimosoudní řešení u ČOI

- **Česká obchodní inspekce** vede bezplatné mimosoudní řešení spotřebitelských sporů.
- Návrh podáte nejpozději **do 1 roku** od prvního uplatnění reklamace u prodávajícího.

## 5. Soud

Krajní možnost je žaloba. Před ní pošlete [předžalobní výzvu](/cz/predzalobni-vyzva/). Novou [reklamaci](/cz/reklamace/) sepíšete zdarma online.
""")

clanek('sk','zamietnuta-reklamacia',dict(
 title='Predajca zamietol reklamáciu: čo ďalej (posudok, SOI, ARS)',
 nazev='Zamietnutá reklamácia',
 description='Reklamácia bola zamietnutá? Vyžiadajte si písomné zdôvodnenie, dajte vadu posúdiť a skúste alternatívne riešenie sporu – návrh do 1 roka, pri SOI bezplatne.',
 perex='Zamietnutie reklamácie nie je konečné. Žiadajte písomné zdôvodnenie, dajte vadu nezávisle posúdiť a využite alternatívne riešenie spotrebiteľského sporu.',
 kategorie='nakupy', tema='reklamacia',
 dokumenty=['reklamacia','odstupenie-od-zmluvy','kupna-zmluva'],
 slova=['zamietnutá reklamácia','reklamácia zamietnutá','SOI','alternatívne riešenie sporov','posudok','reklamácia čo ďalej'],
 zdroje=[('Zákon č. 108/2024 Z. z. o ochrane spotrebiteľa (Slov-Lex)','https://static.slov-lex.sk/static/SK/ZZ/2024/108/'),
         ('Zákon č. 391/2015 Z. z. o alternatívnom riešení spotrebiteľských sporov (Slov-Lex)','https://static.slov-lex.sk/static/SK/ZZ/2015/391/'),
         ('Slovenská obchodná inšpekcia','https://www.soi.sk/')],
 faq=[('Kedy môžem podať návrh na alternatívne riešenie sporu?','Keď predávajúci reklamáciu zamietol alebo na vašu žiadosť o nápravu neodpovedal do 30 dní. Návrh podáte do 1 roka.'),
      ('Kto spor rieši?','Napríklad Slovenská obchodná inšpekcia alebo iný subjekt alternatívneho riešenia sporov zo zoznamu ministerstva.'),
      ('Môžem ísť aj na súd?','Áno, súdna cesta zostáva otvorená. Pred žalobou pošlite výzvu na zaplatenie alebo nápravu.')]),
"""
Zamietnutá reklamácia neznamená prehru. Postupujte v tomto poradí.

## 1. Písomné zdôvodnenie

- Predávajúci vám musí vydať **doklad o vybavení** reklamácie. Žiadajte v ňom **dôvod zamietnutia**.
- Skontrolujte, či reklamáciu vybavil **do 30 dní**.

## 2. Žiadosť o nápravu

- Pošlite predávajúcemu písomnú **žiadosť o nápravu** – nesúhlasíte so zamietnutím a žiadate opravu, výmenu alebo vrátenie peňazí.
- Priložte **nezávislý posudok**, ak ho máte.

## 3. Alternatívne riešenie sporu

- Ak predávajúci žiadosť **zamietne alebo do 30 dní neodpovie**, podajte návrh na **alternatívne riešenie sporu** – napríklad na **SOI**.
- Návrh podáte **do 1 roka**.

## 4. Súd

Krajná možnosť je žaloba. Pred ňou pošlite [výzvu](/sk/vyzva-na-zaplatenie/). Novú [reklamáciu](/sk/reklamacia/) spíšete zadarmo online.
""")

clanek('pl','odrzucona-reklamacja',dict(
 title='Sprzedawca odrzucił reklamację: co dalej (rzecznik, mediacja)',
 nazev='Odrzucona reklamacja',
 description='Reklamacja odrzucona? Sprawdź termin 14 dni, domniemanie 2 lat, poproś o pomoc rzecznika konsumentów, skorzystaj z mediacji Inspekcji Handlowej albo idź do sądu.',
 perex='Odrzucenie reklamacji nie zamyka sprawy. Sprzedawca odpowiada za brak zgodności przez 2 lata, a rzecznik konsumentów pomoże bezpłatnie.',
 kategorie='zakupy', tema='reklamacja',
 dokumenty=['reklamacja','odstapienie-od-umowy','wezwanie-do-zaplaty'],
 slova=['odrzucona reklamacja','reklamacja odrzucona','rzecznik konsumentów','Inspekcja Handlowa','mediacja','reklamacja co dalej'],
 zdroje=[('Ustawa o prawach konsumenta (ISAP)','https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20140000827'),
         ('UOKiK – Prawa konsumenta','https://prawakonsumenta.uokik.gov.pl/')],
 faq=[('Co jeśli sprzedawca nie odpowiedział w 14 dni?','Brak odpowiedzi w 14 dni oznacza uznanie reklamacji (art. 7a ustawy o prawach konsumenta).'),
      ('Kto pomoże za darmo?','Miejski lub powiatowy rzecznik konsumentów, a polubowne rozwiązanie sporu oferuje m.in. Inspekcja Handlowa.'),
      ('Czy mogę iść do sądu?','Tak. Przed pozwem wyślij wezwanie do zapłaty lub spełnienia żądania.')]),
"""
Odrzucona reklamacja to nie koniec. Działaj w tej kolejności.

## 1. Sprawdź termin i uzasadnienie

- Sprzedawca miał **14 dni** na odpowiedź. Jeśli nie odpowiedział, reklamacja jest **uznana**.
- Poproś o **pisemne uzasadnienie** odmowy.

## 2. Domniemanie na Twoją korzyść

- Brak zgodności ujawniony w ciągu **2 lat** od wydania towaru uważa się za istniejący już w chwili wydania – sprzedawca musi udowodnić coś innego.

## 3. Rzecznik i mediacja

- **Miejski lub powiatowy rzecznik konsumentów** pomoże bezpłatnie, może też wystąpić do sprzedawcy.
- **Inspekcja Handlowa** prowadzi mediacje i stałe polubowne sądy konsumenckie.

## 4. Sąd

Ostateczność to pozew. Przed nim wyślij [wezwanie do zapłaty](/pl/wezwanie-do-zaplaty/). Nową [reklamację](/pl/reklamacja/) spiszesz za darmo online.
""")

clanek('de','reklamation-abgelehnt',dict(
 title='Reklamation abgelehnt: Was Sie jetzt tun können',
 nazev='Reklamation abgelehnt',
 description='Händler lehnt die Reklamation ab? Beweislastumkehr im ersten Jahr, Gutachten, Verbraucherzentrale, Universalschlichtungsstelle des Bundes und Mahnverfahren.',
 perex='Eine abgelehnte Reklamation ist nicht das Ende. Im ersten Jahr muss der Händler beweisen, dass die Ware mangelfrei war – und Schlichtung kostet Sie nichts.',
 kategorie='einkauf', tema='gewaehrleistung',
 dokumenty=['maengelanzeige','mahnung','widerruf'],
 slova=['Reklamation abgelehnt','Gewährleistung abgelehnt','Beweislastumkehr','Verbraucherschlichtung','Verbraucherzentrale','Gutachten'],
 zdroje=[('§ 437 BGB – Rechte des Käufers bei Mängeln','https://www.gesetze-im-internet.de/bgb/__437.html'),
         ('§ 477 BGB – Beweislastumkehr','https://www.gesetze-im-internet.de/bgb/__477.html'),
         ('Verbraucherstreitbeilegungsgesetz (VSBG)','https://www.gesetze-im-internet.de/vsbg/')],
 faq=[('Wer muss beweisen, dass der Mangel schon da war?','Zeigt sich der Mangel innerhalb eines Jahres nach Übergabe, wird vermutet, dass er schon bei Übergabe vorlag (§ 477 BGB). Der Händler muss das Gegenteil beweisen.'),
      ('Was kostet eine Verbraucherschlichtung?','Für Verbraucher ist das Verfahren in der Regel kostenlos; der Händler muss allerdings teilnehmen wollen.'),
      ('Und wenn alles nichts hilft?','Bleibt der gerichtliche Weg – etwa über das Mahnverfahren oder eine Klage beim Amtsgericht.')]),
"""
Eine abgelehnte Reklamation ist kein Schlusspunkt. Gehen Sie so vor.

## 1. Begründung schriftlich verlangen

- Lassen Sie sich die **Ablehnung mit Begründung** schriftlich geben.
- Setzen Sie eine **Frist zur Nacherfüllung** mit einer schriftlichen [Mängelanzeige](/de/maengelanzeige/).

## 2. Beweislastumkehr im ersten Jahr

- Zeigt sich der Mangel **innerhalb eines Jahres**, wird vermutet, dass er schon bei Übergabe vorlag (§ 477 BGB). Ein pauschales „Gebrauchsspuren“ reicht nicht.

## 3. Gutachten und Beratung

- Ein unabhängiges **Gutachten** stärkt Ihre Position.
- Die **Verbraucherzentrale** berät günstig.

## 4. Schlichtung

- Die **Universalschlichtungsstelle des Bundes** vermittelt bei Streit mit Händlern, für Verbraucher in der Regel kostenlos.

## 5. Gericht

Letzter Schritt ist das Mahnverfahren oder eine Klage. Vorher eine [Mahnung](/de/mahnung/) schicken.
""")

clanek('at','reklamation-abgelehnt-oesterreich',dict(
 title='Reklamation abgelehnt in Österreich: Was Sie tun können',
 nazev='Reklamation abgelehnt in Österreich',
 description='Händler lehnt die Gewährleistung ab? Vermutung im ersten Jahr, Gutachten, Arbeiterkammer, Schlichtung für Verbrauchergeschäfte und Internet Ombudsstelle.',
 perex='Eine abgelehnte Reklamation ist nicht das Ende. Bei Mängeln im ersten Jahr wird vermutet, dass sie schon bei Übergabe da waren – und Schlichtung ist kostenlos.',
 kategorie='einkauf', tema='gewaehrleistung',
 dokumenty=['maengelruege','mahnung','ruecktritt-widerruf'],
 slova=['Reklamation abgelehnt','Gewährleistung','Österreich','Schlichtung für Verbrauchergeschäfte','Internet Ombudsstelle','Arbeiterkammer'],
 zdroje=[('Allgemeines bürgerliches Gesetzbuch (RIS)','https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001622'),
         ('VGG – Fristen und Beweislast beim Warenkauf (WKO)','https://www.wko.at/gewerberecht/vgg-fristen-beweislast-warenkauf-ab-2022')],
 faq=[('Wer muss den Mangel beweisen?','Tritt der Mangel innerhalb eines Jahres nach Übergabe auf, wird vermutet, dass er schon bei Übergabe vorlag. Der Händler muss das Gegenteil beweisen.'),
      ('Wo bekomme ich Hilfe?','Bei der Arbeiterkammer, der Schlichtung für Verbrauchergeschäfte und bei Online-Käufen bei der Internet Ombudsstelle.'),
      ('Und wenn die Schlichtung scheitert?','Bleibt der Weg zum Bezirksgericht.')]),
"""
Eine abgelehnte Reklamation ist kein Schlusspunkt. Gehen Sie so vor.

## 1. Begründung schriftlich verlangen

- Lassen Sie sich die **Ablehnung mit Begründung** geben und erheben Sie die [Mängelrüge](/at/maengelruege/) schriftlich erneut.

## 2. Vermutung im ersten Jahr

- Zeigt sich der Mangel **innerhalb eines Jahres**, wird vermutet, dass er schon bei Übergabe vorlag. Der Händler muss das Gegenteil beweisen.

## 3. Gutachten und Beratung

- Ein unabhängiges **Gutachten** stärkt Ihre Position.
- Die **Arbeiterkammer** berät Konsumenten.

## 4. Schlichtung

- Die **Schlichtung für Verbrauchergeschäfte** und – bei Online-Käufen – die **Internet Ombudsstelle** vermitteln kostenlos.

## 5. Gericht

Letzter Schritt ist eine Klage beim Bezirksgericht. Vorher eine [Mahnung](/at/mahnung/) schicken.
""")

clanek('ch','reklamation-abgelehnt-schweiz',dict(
 title='Reklamation abgelehnt in der Schweiz: Was Sie tun können',
 nazev='Reklamation abgelehnt in der Schweiz',
 description='Verkäufer lehnt die Gewährleistung ab? Mängel sofort rügen (Art. 201 OR), Gutachten, Konsumentenschutz, Ombudsstellen und Schlichtungsbehörde.',
 perex='In der Schweiz müssen Sie Mängel sofort rügen und selbst beweisen. Wird die Reklamation abgelehnt, ist die Schlichtungsbehörde der günstige nächste Schritt.',
 kategorie='einkauf', tema='gewaehrleistung',
 dokumenty=['maengelruege','mahnung','kaufvertrag-privat'],
 slova=['Reklamation abgelehnt','Gewährleistung','Schweiz','Mängelrüge','Schlichtungsbehörde','Konsumentenschutz'],
 zdroje=[('Obligationenrecht, Art. 197 ff. (Fedlex)','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de'),
         ('Zivilprozessordnung, Art. 197 ff. – Schlichtungsversuch (Fedlex)','https://www.fedlex.admin.ch/eli/cc/2010/262/de')],
 faq=[('Muss ich den Mangel beweisen?','Ja. Eine gesetzliche Vermutung zugunsten des Käufers wie in der EU gibt es nicht. Rügen Sie Mängel sofort nach Entdeckung (Art. 201 OR).'),
      ('Was ist die Schlichtungsbehörde?','Vor den meisten Zivilklagen findet ein Schlichtungsversuch statt. Bis 2000 CHF kann die Schlichtungsbehörde auf Antrag selbst entscheiden.'),
      ('Wo bekomme ich Beratung?','Bei den Konsumentenschutz-Organisationen und – je nach Branche – bei Ombudsstellen.')]),
"""
Eine abgelehnte Reklamation ist kein Schlusspunkt. Gehen Sie so vor.

## 1. Rechtzeitig gerügt?

- Mängel müssen Sie **sofort nach Entdeckung** rügen (Art. 201 OR) – schriftlich, mit einer [Mängelrüge](/ch/maengelruege/).
- Prüfen Sie, ob die Gewährleistung im Vertrag **wegbedungen** wurde.

## 2. Beweise sichern

- In der Schweiz tragen Sie die **Beweislast**. Ein unabhängiges **Gutachten**, Fotos und Belege helfen.

## 3. Beratung und Ombudsstellen

- **Konsumentenschutz**-Organisationen beraten; für manche Branchen gibt es **Ombudsstellen**.

## 4. Schlichtungsbehörde

- Vor einer Klage findet meist ein **Schlichtungsversuch** statt. Bei Streitwerten **bis 2000 CHF** kann die Schlichtungsbehörde auf Antrag selbst entscheiden.

Vorher eine [Mahnung](/ch/mahnung/) schicken.
""")

clanek('hu','elutasitott-szavatossagi-igeny',dict(
 title='Elutasították a szavatossági igényt: mi a teendő',
 nazev='Elutasított szavatossági igény',
 description='Elutasította a kereskedő a reklamációt? Vélelem az első évben, szakvélemény, fogyasztóvédelmi hatóság és ingyenes eljárás a békéltető testületnél.',
 perex='Az elutasítás nem végleges. Az első évben a kereskedőnek kell bizonyítania, hogy a termék hibátlan volt, a békéltető testület eljárása pedig ingyenes.',
 kategorie='vasarlas', tema='szavatossag',
 dokumenty=['kellekszavatossagi-igeny','fizetesi-felszolitas','elallasi-nyilatkozat'],
 slova=['elutasított reklamáció','szavatosság','békéltető testület','fogyasztóvédelem','szakvélemény','reklamáció mi a teendő'],
 zdroje=[('Polgári Törvénykönyv – 2013. évi V. törvény (NJT)','https://njt.jog.gov.hu/jogszabaly/2013-5-00-00'),
         ('1997. évi CLV. törvény a fogyasztóvédelemről (NJT)','https://njt.jog.gov.hu/jogszabaly/1997-155-00-00')],
 faq=[('Ki bizonyít az első évben?','Ha a hiba a teljesítéstől számított egy éven belül jelentkezik, vélelmezni kell, hogy már a teljesítéskor megvolt – a kereskedőnek kell az ellenkezőjét bizonyítania.'),
      ('Mennyibe kerül a békéltető testület?','A fogyasztó számára az eljárás ingyenes. A testületek a megyei kereskedelmi és iparkamarák mellett működnek.'),
      ('Bírósághoz is fordulhatok?','Igen, a bírósági út mindig nyitva áll.')]),
"""
Az elutasított reklamáció nem jelent vereséget. Haladjon ebben a sorrendben.

## 1. Írásos indoklás

- Kérje az elutasítást **írásban, indoklással** – a reklamációról jegyzőkönyvet kell felvenni.

## 2. Vélelem az első évben

- Ha a hiba **egy éven belül** jelentkezik, vélelmezni kell, hogy már átadáskor megvolt. A kereskedőnek kell bizonyítania az ellenkezőjét.

## 3. Szakvélemény

- Független **szakvélemény** erősíti a helyzetét. Ezzel nyújtsa be újra az [igényt](/hu/kellekszavatossagi-igeny/) írásban.

## 4. Békéltető testület és hatóság

- A **békéltető testület** eljárása a fogyasztónak **ingyenes**; a testületek a megyei kereskedelmi és iparkamarák mellett működnek.
- Jogsértés esetén a **fogyasztóvédelmi hatósághoz** (kormányhivatal) is fordulhat.

## 5. Bíróság

Végső lépés a per. Előtte küldjön [fizetési felszólítást](/hu/fizetesi-felszolitas/).
""")

# ---------- PRODEJ Z DRUHÉ RUKY ----------
clanek('cz','prodej-pres-bazar-a-inzerat',dict(
 title='Prodej přes bazar a inzerát: kupní smlouva a podvody',
 nazev='Prodej přes inzerát',
 description='Jak bezpečně prodat věc přes inzerát nebo bazar: kupní smlouva, popis vad, platba při předání a typické podvody s falešným kurýrem a odkazem na platbu.',
 perex='U dražších věcí se vyplatí krátká kupní smlouva s popisem vad. A pozor: odkaz na „bezpečnou platbu“ nebo „kurýra“, který chce data karty, je vždy podvod.',
 kategorie='nakupy', tema='prodej-veci',
 dokumenty=['kupni-smlouva-vec','potvrzeni-o-prevzeti-penez'],
 slova=['prodej přes inzerát','bazar','kupní smlouva na věc','podvod kurýr','prodej z druhé ruky','Bazoš'],
 zdroje=[('Občanský zákoník č. 89/2012 Sb. (e-Sbírka)','https://www.e-sbirka.cz/sb/2012/89'),
         ('Zákon č. 254/2004 Sb., o omezení plateb v hotovosti (e-Sbírka)','https://www.e-sbirka.cz/sb/2004/254')],
 faq=[('Potřebuji kupní smlouvu?','Není povinná, u dražších věcí se ale vyplatí: zapíšete cenu, stav a známé vady, a předejdete sporu.'),
      ('Odpovídám jako soukromník za vady?','Za vady, o kterých jste věděli a zatajili je, ano. Proto je pravdivě popište ve smlouvě – na vady, o kterých kupující věděl, se pak nemůže odvolávat.'),
      ('Jak se poznává podvod?','Kupující posílá odkaz na platbu nebo kurýra a chce údaje karty, PIN či kód z SMS. Peníze se přijímají jen na účet nebo v hotovosti při předání.')]),
f"""
Prodej přes inzerát je jednoduchý, pokud dodržíte pár pravidel.

## 1. Popis a fotky

- Popište věc **pravdivě**, i s vadami. Co uvedete, na to se kupující později nemůže odvolávat.

## 2. Pozor na podvody

- {PODVOD['cz']}
- Neposílejte zboží před připsáním peněz na účet. Snímek obrazovky „platby“ není platba.

## 3. Kupní smlouva

- U dražších věcí sepište [kupní smlouvu na věc](/cz/kupni-smlouva-vec/): kdo, co, za kolik, stav a vady.
- Hotovost? Vystavte [potvrzení o převzetí peněz](/cz/potvrzeni-o-prevzeti-penez/). Limit plateb v hotovosti je 270 000 Kč.

## 4. Předání

- Předávejte na veřejném místě, věc si nechte kupujícím zkontrolovat a stav potvrdit ve smlouvě.
""")

clanek('sk','predaj-cez-bazar-a-inzerat',dict(
 title='Predaj cez bazár a inzerát: kúpna zmluva a podvody',
 nazev='Predaj cez inzerát',
 description='Ako bezpečne predať vec cez inzerát alebo bazár: kúpna zmluva, opis vád, platba pri odovzdaní a typické podvody s falošným kuriérom a odkazom na platbu.',
 perex='Pri drahších veciach sa oplatí krátka kúpna zmluva s opisom vád. A pozor: odkaz na „bezpečnú platbu“, ktorý chce údaje karty, je vždy podvod.',
 kategorie='nakupy', tema='predaj-veci',
 dokumenty=['kupna-zmluva','potvrdenie-o-prevzati-penazi'],
 slova=['predaj cez inzerát','bazár','kúpna zmluva','podvod kuriér','predaj z druhej ruky'],
 zdroje=[('Občiansky zákonník č. 40/1964 Zb. (Slov-Lex)','https://static.slov-lex.sk/static/SK/ZZ/1964/40/'),
         ('Zákon č. 394/2012 Z. z. o obmedzení platieb v hotovosti (Slov-Lex)','https://static.slov-lex.sk/static/SK/ZZ/2012/394/20260101.html')],
 faq=[('Potrebujem kúpnu zmluvu?','Nie je povinná, pri drahších veciach sa však oplatí: zapíšete cenu, stav a známe vady.'),
      ('Ako spoznám podvod?','Kupujúci posiela odkaz na platbu alebo kuriéra a chce údaje karty, PIN alebo kód zo SMS.'),
      ('Môžem prijať hotovosť?','Áno, medzi súkromnými osobami do 15 000 €. Vystavte potvrdenie o prevzatí peňazí.')]),
f"""
Predaj cez inzerát je jednoduchý, ak dodržíte pár pravidiel.

## 1. Opis a fotky

- Opíšte vec **pravdivo**, aj s vadami, a zapíšte ich do zmluvy.

## 2. Pozor na podvody

- {PODVOD['sk']}
- Neposielajte tovar pred pripísaním peňazí na účet.

## 3. Kúpna zmluva

- Pri drahších veciach spíšte [kúpnu zmluvu](/sk/kupna-zmluva/): kto, čo, za koľko, stav a vady.
- Pri hotovosti vystavte [potvrdenie o prevzatí peňazí](/sk/potvrdenie-o-prevzati-penazi/).

## 4. Odovzdanie

- Odovzdávajte na verejnom mieste a stav si dajte potvrdiť v zmluve.
""")

clanek('pl','sprzedaz-rzeczy-przez-ogloszenie',dict(
 title='Sprzedaż rzeczy przez ogłoszenie: umowa, PCC i oszustwa',
 nazev='Sprzedaż przez ogłoszenie',
 description='Jak bezpiecznie sprzedać rzecz przez OLX lub ogłoszenie: umowa kupna-sprzedaży, opis wad, PCC kupującego powyżej 3000 zł i oszustwa z fałszywym kurierem.',
 perex='Przy droższych rzeczach warto spisać krótką umowę. Kupujący płaci PCC, gdy wartość rynkowa przekracza 3000 zł, a link do „bezpiecznej płatności” to oszustwo.',
 kategorie='zakupy', tema='sprzedaz-rzeczy',
 dokumenty=['umowa-kupna-sprzedazy','pokwitowanie-odbioru-pieniedzy'],
 slova=['sprzedaż przez OLX','ogłoszenie','umowa kupna-sprzedaży','PCC','oszustwo kurier','sprzedaż z drugiej ręki'],
 zdroje=[('Kodeks cywilny (ELI)','https://eli.gov.pl/eli/DU/1964/93/ogl'),
         ('PCC – formularze (podatki.gov.pl)','https://www.podatki.gov.pl/podatki-osobiste/pcc/formularze/')],
 faq=[('Kto płaci PCC przy sprzedaży rzeczy?','Kupujący – 2% wartości rynkowej, deklaracja PCC-3 w 14 dni. Od 3 listopada 2026 zwolnione są rzeczy o wartości rynkowej do 3000 zł.'),
      ('Czy muszę spisać umowę?','Nie jest obowiązkowa, ale przy droższych rzeczach chroni obie strony – zapiszcie cenę, stan i wady.'),
      ('Jak rozpoznać oszustwo?','Kupujący wysyła link do płatności lub kuriera i prosi o dane karty, PIN lub kod z SMS.')]),
f"""
Sprzedaż przez ogłoszenie jest prosta, jeśli trzymasz się kilku zasad.

## 1. Opis i zdjęcia

- Opisz rzecz **zgodnie z prawdą**, także wady, i wpisz je do umowy.

## 2. Uwaga na oszustwa

- {PODVOD['pl']}
- Nie wysyłaj towaru przed zaksięgowaniem pieniędzy na koncie.

## 3. Umowa i PCC

- Przy droższych rzeczach spisz [umowę kupna-sprzedaży](/pl/umowa-kupna-sprzedazy/).
- **Kupujący** płaci **PCC 2%**, jeśli wartość rynkowa przekracza **3000 zł** (próg od 3 listopada 2026) – deklaracja PCC-3 w 14 dni.
- Gotówka? Wystaw [pokwitowanie](/pl/pokwitowanie-odbioru-pieniedzy/).

## 4. Przekazanie

- Spotkajcie się w miejscu publicznym, a stan rzeczy potwierdźcie w umowie.
""")

for z, slug, title, desc, perex, vertrag, quittung, extra, quelle in [
 ('de','privatverkauf-kleinanzeigen','Privatverkauf über Kleinanzeigen: Kaufvertrag und Betrug',
  'Sicher privat verkaufen über Kleinanzeigen: kurzer Kaufvertrag, Gewährleistungsausschluss, Mängel angeben, Bezahlung bei Übergabe und typische Betrugsmaschen.',
  'Bei teureren Sachen lohnt sich ein kurzer Kaufvertrag mit Gewährleistungsausschluss. Und: Ein Link zu „sicherer Zahlung“, der Kartendaten will, ist immer Betrug.',
  'kaufvertrag-privat','quittung','Unter Privatleuten dürfen Sie die Gewährleistung ausschließen („gekauft wie gesehen“) – nicht aber für Mängel, die Sie arglistig verschweigen (§ 444 BGB).',
  ('§ 444 BGB – Haftungsausschluss (gesetze-im-internet.de)','https://www.gesetze-im-internet.de/bgb/__444.html')),
 ('at','privatverkauf-inserat-oesterreich','Privatverkauf über Inserat in Österreich: Vertrag und Betrug',
  'Sicher privat verkaufen über Inserat in Österreich: Kaufvertrag, Gewährleistungsverzicht unter Privaten, Mängel angeben, Bezahlung bei Übergabe und Betrugsmaschen.',
  'Bei teureren Sachen lohnt sich ein kurzer Kaufvertrag. Unter Privatpersonen kann die Gewährleistung ausgeschlossen werden – listig verschwiegene Mängel bleiben aber.',
  'kaufvertrag-privat','quittung','Unter Privatpersonen kann die Gewährleistung ausgeschlossen werden – nicht aber für listig verschwiegene Mängel und zugesicherte Eigenschaften.',
  ('Allgemeines bürgerliches Gesetzbuch (RIS)','https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001622')),
 ('ch','privatverkauf-inserat-schweiz','Privatverkauf über Inserat in der Schweiz: Vertrag und Betrug',
  'Sicher privat verkaufen über Inserat in der Schweiz: kurzer Kaufvertrag, Gewährleistung wegbedingen, Mängel angeben, Bezahlung bei Übergabe und Betrugsmaschen.',
  'Bei teureren Sachen lohnt sich ein kurzer Kaufvertrag. Die Gewährleistung kann wegbedungen werden – nicht aber für arglistig verschwiegene Mängel (Art. 199 OR).',
  'kaufvertrag-privat','quittung','Die Gewährleistung kann wegbedungen werden – nicht aber für Mängel, die Sie arglistig verschweigen (Art. 199 OR).',
  ('Obligationenrecht, Art. 184 ff. und 197 ff. (Fedlex)','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de')),
]:
    podvod = PODVOD['de'].replace('ß','ss') if z=='ch' else PODVOD['de']
    clanek(z, slug, dict(title=title, nazev='Privatverkauf über Inserat', description=desc, perex=perex,
     kategorie='einkauf', tema='privatverkauf', dokumenty=[vertrag, quittung],
     slova=['Privatverkauf','Kleinanzeigen' if z=='de' else 'Inserat','Kaufvertrag privat','Betrug Kurier','Gewährleistungsausschluss','gebraucht verkaufen'],
     zdroje=[quelle],
     faq=[('Brauche ich einen Kaufvertrag?','Pflicht ist er nicht. Bei teureren Sachen schützt er beide Seiten: Preis, Zustand und Mängel stehen schwarz auf weiss.' if z=='ch' else 'Pflicht ist er nicht. Bei teureren Sachen schützt er beide Seiten: Preis, Zustand und Mängel stehen schwarz auf weiß.'),
          ('Darf ich die Gewährleistung ausschliessen?' if z=='ch' else 'Darf ich die Gewährleistung ausschließen?', extra),
          ('Wie erkenne ich Betrug?','Der Käufer schickt einen Link zu Zahlung oder Kurier und will Kartendaten, PIN oder einen SMS-Code.')]),
f"""
Privat verkaufen ist einfach, wenn Sie ein paar Regeln beachten.

## 1. Beschreibung und Fotos

- Beschreiben Sie die Sache **ehrlich**, auch mit Mängeln, und halten Sie diese im Vertrag fest.

## 2. Vorsicht Betrug

- {podvod}
- Versenden Sie erst, wenn das Geld **auf dem Konto** ist. Ein Screenshot ist keine Zahlung.

## 3. Kaufvertrag

- Bei teureren Sachen einen [Kaufvertrag](/{z}/{vertrag}/) schließen: wer, was, Preis, Zustand, Mängel.
- {extra}
- Bei Barzahlung eine [Quittung](/{z}/{quittung}/) ausstellen.

## 4. Übergabe

- An einem öffentlichen Ort übergeben und den Zustand im Vertrag bestätigen lassen.
""".replace('schließen', 'schliessen' if z=='ch' else 'schließen'))

clanek('hu','hasznalt-dolog-eladasa-hirdetesen',dict(
 title='Használt dolog eladása hirdetésen: szerződés és csalások',
 nazev='Eladás hirdetésen',
 description='Hogyan adjon el biztonságosan hirdetésen: adásvételi szerződés, a hibák leírása, fizetés átadáskor és a hamis futáros, fizetési linkes csalások felismerése.',
 perex='Drágább dolgoknál érdemes rövid adásvételi szerződést kötni a hibák leírásával. A „biztonságos fizetéshez” kártyaadatot kérő link mindig csalás.',
 kategorie='vasarlas', tema='hasznalt-eladas',
 dokumenty=['adasveteli-szerzodes','atveteli-elismerveny'],
 slova=['eladás hirdetésen','használt dolog eladása','adásvételi szerződés','futáros csalás','Jófogás'],
 zdroje=[('Polgári Törvénykönyv – 2013. évi V. törvény (NJT)','https://njt.jog.gov.hu/jogszabaly/2013-5-00-00')],
 faq=[('Kell adásvételi szerződés?','Nem kötelező, de drágább dolgoknál mindkét felet védi: ár, állapot és hibák írásban.'),
      ('Hogyan ismerem fel a csalást?','A vevő fizetési vagy futáros linket küld, és kártyaadatot, PIN-kódot vagy SMS-kódot kér.'),
      ('Mikor küldjem el a terméket?','Csak miután a pénz megérkezett a számlájára. A képernyőkép nem fizetés.')]),
f"""
Hirdetésen eladni egyszerű, ha betart néhány szabályt.

## 1. Leírás és fotók

- Írja le a dolgot **őszintén**, a hibákkal együtt, és rögzítse őket a szerződésben.

## 2. Vigyázat, csalás

- {PODVOD['hu']}
- Csak akkor adja fel a csomagot, ha a pénz **megérkezett a számlájára**.

## 3. Szerződés

- Drágább dolgoknál kössön [adásvételi szerződést](/hu/adasveteli-szerzodes/): ki, mit, mennyiért, milyen állapotban.
- Készpénznél állítson ki [átvételi elismervényt](/hu/atveteli-elismerveny/).

## 4. Átadás

- Nyilvános helyen adja át, és az állapotot a vevő a szerződésben igazolja.
""")
print('ok')
