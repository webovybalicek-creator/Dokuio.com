import sys; sys.path.insert(0,'/home/claude/skripty')
from clanek import clanek

# ---------- POKUTA PO PRODEJI ----------
clanek('cz','pokuta-po-prodeji-auta',dict(
 title='Prodali jste auto a přišla pokuta? Jak pomůže předávací protokol',
 nazev='Pokuta po prodeji auta',
 description='Přišla vám výzva k zaplacení pokuty za auto, které už jste prodali? Předávací protokol s časem předání a kupní smlouva prokážou, kdo vůz řídil. Jak postupovat.',
 perex='Dokud není auto přepsané, chodí výzvy k zaplacení na provozovatele zapsaného v registru. Předávací protokol s datem a časem předání je váš nejlepší důkaz.',
 kategorie='auto', tema='prodej-auta',
 dokumenty=['predavaci-protokol-vozidlo','kupni-smlouva-auto','plna-moc-prepis-vozidla'],
 slova=['pokuta po prodeji auta','výzva provozovateli','předávací protokol','přepis auta','prodané auto pokuta'],
 zdroje=[('Zákon č. 361/2000 Sb., o provozu na pozemních komunikacích (e-Sbírka)','https://www.e-sbirka.cz/sb/2000/361'),
         ('Zákon č. 56/2001 Sb. o podmínkách provozu vozidel (e-Sbírka)','https://www.e-sbirka.cz/sb/2001/56')],
 faq=[('Proč pokuta přišla mně?','Za některé přestupky odpovídá provozovatel zapsaný v registru vozidel, pokud se nezjistí řidič. Dokud není auto přepsané, jste to vy.'),
      ('Co mám udělat?','Na výzvu reagujte v uvedené lhůtě a doložte, že jste v tu chvíli auto už neměli – kupní smlouvou a předávacím protokolem s datem a časem předání. Uveďte kupujícího.'),
      ('Jak tomu předejít?','Sepište předávací protokol s přesným časem předání a postarejte se o rychlý přepis – do 10 pracovních dnů.')]),
"""
Výzva k zaplacení za auto, které už jste prodali, je častá. Záleží na tom, co máte v ruce.

## 1. Proč výzva chodí vám

- Za některé přestupky (např. z radarů) odpovídá **provozovatel zapsaný v registru**, když se nezjistí řidič.
- Dokud není auto **přepsané**, jste v registru pořád vy.

## 2. Co udělat hned

- **Nic neplaťte automaticky.** Ověřte datum a čas přestupku.
- Pokud byl přestupek **po předání**, odpovězte v lhůtě a přiložte [kupní smlouvu](/cz/kupni-smlouva-auto/) a [předávací protokol](/cz/predavaci-protokol-vozidlo/) s **datem a časem předání**. Uveďte jméno a adresu kupujícího.

## 3. Jak tomu předejít

- Do protokolu vždy zapište **přesný čas** předání a stav tachometru.
- Hlídejte **přepis do 10 pracovních dnů**. Pokud kupující otálí, domluvte se, že přepis vyřídíte na základě [plné moci](/cz/plna-moc-prepis-vozidla/).
- Prodej oznamte pojišťovně.
""")

clanek('sk','pokuta-po-predaji-auta',dict(
 title='Predali ste auto a prišla pokuta? Ako pomôže preberací protokol',
 nazev='Pokuta po predaji auta',
 description='Prišla vám výzva na zaplatenie pokuty za auto, ktoré ste už predali? Preberací protokol s časom odovzdania a kúpna zmluva preukážu, kto mal vozidlo. Ako postupovať.',
 perex='Kým nie je zmena držby zapísaná, výzvy chodia držiteľovi v evidencii. Preberací protokol s dátumom a časom odovzdania je váš najlepší dôkaz.',
 kategorie='auto', tema='predaj-auta',
 dokumenty=['preberaci-protokol-vozidla','kupna-zmluva-auto','splnomocnenie-prepis-vozidla'],
 slova=['pokuta po predaji auta','držiteľ vozidla','preberací protokol','zmena držby','predané auto pokuta'],
 zdroje=[('Zákon č. 8/2009 Z. z. o cestnej premávke (Slov-Lex)','https://static.slov-lex.sk/static/SK/ZZ/2009/8/'),
         ('Predal som auto (slovensko.sk)','https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_predal-som-auto/')],
 faq=[('Prečo pokuta prišla mne?','Za niektoré porušenia zodpovedá držiteľ vozidla zapísaný v evidencii. Kým nie je zmena držby zapísaná, ste to vy.'),
      ('Čo mám urobiť?','V lehote odpovedzte a doložte kúpnu zmluvu a preberací protokol s dátumom a časom odovzdania. Uveďte kupujúceho.'),
      ('Ako tomu predísť?','Spíšte preberací protokol s presným časom odovzdania a podajte zmenu držby do 30 dní.')]),
"""
Výzva na zaplatenie za predané auto je častá. Rozhoduje, čo máte v ruke.

## 1. Prečo výzva chodí vám

- Za niektoré porušenia (napr. z rýchlostných kamier) zodpovedá **držiteľ zapísaný v evidencii**.
- Kým nie je **zmena držby** zapísaná, ste to vy.

## 2. Čo urobiť hneď

- **Neplaťte automaticky.** Overte dátum a čas porušenia.
- Ak bolo **po odovzdaní**, odpovedzte v lehote a priložte [kúpnu zmluvu](/sk/kupna-zmluva-auto/) a [preberací protokol](/sk/preberaci-protokol-vozidla/) s **dátumom a časom**. Uveďte kupujúceho.

## 3. Ako tomu predísť

- Do protokolu zapíšte **presný čas** odovzdania.
- **Zmenu držby** podajte do **30 dní** – podáva ju pôvodný držiteľ, prípadne na základe [splnomocnenia](/sk/splnomocnenie-prepis-vozidla/).
""")

clanek('pl','mandat-po-sprzedazy-auta',dict(
 title='Sprzedałeś auto i przyszedł mandat? Protokół i umowa pomogą',
 nazev='Mandat po sprzedaży auta',
 description='Wezwanie do wskazania kierowcy za auto, które już sprzedałeś? Umowa i protokół zdawczo-odbiorczy z godziną wydania wskażą nabywcę. Jak odpowiedzieć i zgłosić zbycie.',
 perex='Właściciel lub posiadacz pojazdu musi na żądanie wskazać, komu go powierzył (art. 78 ust. 4 PoRD). Umowa i protokół z godziną wydania to najlepszy dowód.',
 kategorie='samochody', tema='sprzedaz-auta',
 dokumenty=['protokol-zdawczo-odbiorczy-pojazdu','umowa-kupna-sprzedazy-samochodu','pelnomocnictwo-rejestracja-pojazdu'],
 slova=['mandat po sprzedaży auta','wskazanie kierowcy','protokół zdawczo-odbiorczy','zgłoszenie zbycia','fotoradar sprzedane auto'],
 zdroje=[('Prawo o ruchu drogowym, art. 78 (ISAP)','https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19970980602'),
         ('Zgłoś zbycie lub nabycie pojazdu (gov.pl)','https://www.gov.pl/web/gov/zglos-zbycie-lub-nabycie-pojazdu-na-przyklad-sprzedaz-kupno-darowizne')],
 faq=[('Dlaczego wezwanie przyszło do mnie?','Do czasu zgłoszenia zbycia figurujesz jako właściciel. Na żądanie musisz wskazać, komu powierzyłeś pojazd w danym czasie.'),
      ('Co odpowiedzieć?','Wskaż nabywcę i dołącz kopię umowy oraz protokołu z datą i godziną wydania.'),
      ('Jak temu zapobiec?','Wpisz godzinę wydania do protokołu i zgłoś zbycie w 30 dni – najlepiej od razu online.')]),
"""
Wezwanie za sprzedane auto to częsty problem. Liczy się, co masz na piśmie.

## 1. Dlaczego wezwanie trafia do Ciebie

- Do czasu **zgłoszenia zbycia** figurujesz jako właściciel.
- Właściciel lub posiadacz musi na żądanie **wskazać, komu powierzył pojazd** (art. 78 ust. 4 PoRD).

## 2. Co zrobić

- Sprawdź datę i godzinę wykroczenia.
- Jeśli było **po wydaniu**, wskaż nabywcę i dołącz [umowę](/pl/umowa-kupna-sprzedazy-samochodu/) oraz [protokół zdawczo-odbiorczy](/pl/protokol-zdawczo-odbiorczy-pojazdu/) z **datą i godziną**.

## 3. Jak temu zapobiec

- Wpisz do protokołu **dokładną godzinę** wydania.
- **Zgłoś zbycie** w 30 dni – najlepiej od razu, online na gov.pl.
""")

clanek('de','bussgeld-nach-autoverkauf',dict(
 title='Auto verkauft und Bußgeld bekommen? So hilft das Übergabeprotokoll',
 nazev='Bußgeld nach Autoverkauf',
 description='Anhörungsbogen oder Bußgeld für ein Auto, das Sie schon verkauft haben? Kaufvertrag und Übergabeprotokoll mit Uhrzeit belegen den Halterwechsel. So reagieren Sie.',
 perex='Bis zur Ummeldung landen Anhörungsbögen beim eingetragenen Halter. Mit Kaufvertrag und Übergabeprotokoll samt Uhrzeit weisen Sie nach, dass Sie das Auto nicht mehr hatten.',
 kategorie='auto', tema='auto-verkaufen',
 dokumenty=['uebergabeprotokoll-fahrzeug','kaufvertrag-gebrauchtwagen','vollmacht-zulassung'],
 slova=['Bußgeld nach Autoverkauf','Anhörungsbogen','Halter','Übergabeprotokoll','Veräußerungsanzeige','Knöllchen verkauftes Auto'],
 zdroje=[('§ 25a StVG – Kostentragungspflicht des Halters','https://www.gesetze-im-internet.de/stvg/__25a.html'),
         ('§ 15 FZV – Mitteilungspflichten bei Veräußerung (gesetze-im-internet.de)','https://www.gesetze-im-internet.de/fzv_2023/__15.html')],
 faq=[('Warum bekomme ich den Anhörungsbogen?','Die Behörde schreibt den eingetragenen Halter an. Bei Halt- und Parkverstößen kann der Halter die Verfahrenskosten tragen müssen, wenn der Fahrer nicht ermittelt wird (§ 25a StVG).'),
      ('Was soll ich antworten?','Geben Sie an, dass das Fahrzeug zum Tatzeitpunkt bereits verkauft war, nennen Sie den Käufer und legen Sie Kaufvertrag und Übergabeprotokoll bei.'),
      ('Wie beuge ich vor?','Uhrzeit der Übergabe im Protokoll festhalten und die Veräußerung unverzüglich der Zulassungsbehörde melden (§ 15 FZV).')]),
"""
Post von der Bußgeldstelle für ein verkauftes Auto ist ärgerlich, aber meist schnell geklärt.

## 1. Warum der Brief zu Ihnen kommt

- Bis zur Ummeldung sind Sie als **Halter** eingetragen.
- Bei **Halt- und Parkverstößen** kann der Halter die Kosten tragen müssen, wenn der Fahrer nicht ermittelt wird (§ 25a StVG).

## 2. So reagieren Sie

- Tatzeit prüfen. Lag sie **nach der Übergabe**, im Anhörungsbogen angeben, dass das Fahrzeug verkauft war.
- Käufer nennen und [Kaufvertrag](/de/kaufvertrag-gebrauchtwagen/) sowie [Übergabeprotokoll](/de/uebergabeprotokoll-fahrzeug/) mit **Datum und Uhrzeit** beilegen.

## 3. Vorbeugen

- **Uhrzeit** der Übergabe immer ins Protokoll.
- **Veräußerungsanzeige** unverzüglich an die Zulassungsbehörde (§ 15 FZV), auch die Versicherung informieren.
""")

clanek('at','strafe-nach-autoverkauf-oesterreich',dict(
 title='Auto verkauft und Strafe bekommen? Lenkerauskunft richtig geben',
 nazev='Strafe nach Autoverkauf in Österreich',
 description='Lenkerauskunft oder Strafverfügung für ein verkauftes Auto in Österreich? Kaufvertrag und Übergabeprotokoll mit Uhrzeit belegen den Verkauf. Fristen und Antwort.',
 perex='Der Zulassungsbesitzer muss auf Verlangen bekanntgeben, wer das Auto gelenkt hat (§ 103 Abs. 2 KFG). Kaufvertrag und Protokoll mit Uhrzeit sind Ihr Beweis.',
 kategorie='auto', tema='auto-verkaufen',
 dokumenty=['uebergabeprotokoll-fahrzeug','kaufvertrag-gebrauchtwagen','vollmacht-zulassung'],
 slova=['Strafe nach Autoverkauf','Lenkerauskunft','§ 103 KFG','Zulassungsbesitzer','Übergabeprotokoll','Abmeldung'],
 zdroje=[('Kraftfahrgesetz 1967 (RIS)','https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10011384'),
         ('Kfz-Abmeldung (oesterreich.gv.at)','https://www.oesterreich.gv.at/themen/mobilitaet/kfz/2/Seite.060900.html')],
 faq=[('Warum muss ich Auskunft geben?','Der Zulassungsbesitzer muss der Behörde auf Verlangen bekanntgeben, wer das Fahrzeug zu einem bestimmten Zeitpunkt gelenkt hat oder wer die Auskunft geben kann (§ 103 Abs. 2 KFG).'),
      ('Was antworte ich?','Dass das Fahrzeug zu diesem Zeitpunkt verkauft und übergeben war – mit Namen und Anschrift des Käufers sowie Kopie von Kaufvertrag und Protokoll.'),
      ('Wie beuge ich vor?','Uhrzeit der Übergabe im Protokoll festhalten und das Fahrzeug sofort abmelden.')]),
"""
Eine Lenkerauskunft für ein verkauftes Auto ist schnell erledigt, wenn Sie die Unterlagen haben.

## 1. Warum die Anfrage kommt

- Bis zur Abmeldung sind Sie **Zulassungsbesitzer**.
- Sie müssen auf Verlangen bekanntgeben, **wer gelenkt hat** oder wer Auskunft geben kann (§ 103 Abs. 2 KFG). Die Frist steht in der Aufforderung – halten Sie sie ein.

## 2. So antworten Sie

- Lag der Zeitpunkt **nach der Übergabe**, nennen Sie den **Käufer** und legen [Kaufvertrag](/at/kaufvertrag-gebrauchtwagen/) und [Übergabeprotokoll](/at/uebergabeprotokoll-fahrzeug/) mit **Uhrzeit** bei.

## 3. Vorbeugen

- Übergabe mit **Datum und Uhrzeit** dokumentieren.
- Das Fahrzeug **sofort abmelden** und die Versicherung informieren.
""")

clanek('ch','busse-nach-autoverkauf-schweiz',dict(
 title='Auto verkauft und Busse erhalten? So hilft das Übergabeprotokoll',
 nazev='Busse nach Autoverkauf',
 description='Ordnungsbusse für ein verkauftes Auto in der Schweiz? Ist der Fahrer unbekannt, haftet der Halter. Kaufvertrag und Protokoll mit Uhrzeit belegen den Verkauf.',
 perex='Bei Ordnungsbussen zahlt der Halter, wenn der Fahrzeugführer nicht bekannt ist. Mit Kaufvertrag und Übergabeprotokoll samt Uhrzeit nennen Sie den Käufer.',
 kategorie='auto', tema='auto-verkaufen',
 dokumenty=['uebergabeprotokoll-fahrzeug','kaufvertrag-auto','vollmacht-strassenverkehrsamt'],
 slova=['Busse nach Autoverkauf','Ordnungsbusse','Halter','Übergabeprotokoll','Kontrollschilder','Halterwechsel'],
 zdroje=[('Ordnungsbussengesetz (Fedlex)','https://www.fedlex.admin.ch/eli/cc/2017/721/de'),
         ('Fahrzeugausweis (ch.ch)','https://www.ch.ch/de/ausweise-und-dokumente/fahrzeugausweis')],
 faq=[('Warum soll ich die Busse zahlen?','Ist bei einer Ordnungsbusse nicht bekannt, wer gefahren ist, wird sie dem Halter auferlegt – es sei denn, er nennt den Fahrer.'),
      ('Was antworte ich?','Dass das Fahrzeug zur Tatzeit verkauft war, mit Name und Adresse des Käufers sowie Kaufvertrag und Übergabeprotokoll.'),
      ('Wie beuge ich vor?','Übergabezeit im Protokoll festhalten und die Kontrollschilder bei der Übergabe abnehmen – sie gehören Ihnen.')]),
"""
Eine Busse für ein verkauftes Auto lässt sich meist rasch klären.

## 1. Warum die Busse zu Ihnen kommt

- Bei **Ordnungsbussen** zahlt der **Halter**, wenn der Fahrzeugführer nicht bekannt ist.

## 2. So reagieren Sie

- Tatzeit prüfen. Lag sie **nach der Übergabe**, nennen Sie den **Käufer** und legen [Kaufvertrag](/ch/kaufvertrag-auto/) und [Übergabeprotokoll](/ch/uebergabeprotokoll-fahrzeug/) mit **Uhrzeit** bei.

## 3. Vorbeugen

- **Kontrollschilder abnehmen** – sie gehören dem Halter. Ohne Ihre Schilder kann der Käufer nicht unter Ihrem Namen fahren.
- Übergabe mit **Datum und Uhrzeit** dokumentieren und die Versicherung informieren.
""")

clanek('hu','birsag-auto-eladasa-utan',dict(
 title='Eladta az autót, és bírság jött? Így segít az átadási jegyzőkönyv',
 nazev='Bírság az autó eladása után',
 description='Bírságot kapott egy már eladott autó után? Az adásvételi szerződés és az átadás-átvételi jegyzőkönyv az időponttal igazolja, hogy már nem Ön üzemeltette.',
 perex='Amíg a változás nincs bejegyezve, a bírság az üzembentartónak megy. A szerződés és a jegyzőkönyv a birtokba adás időpontjával a legjobb bizonyíték.',
 kategorie='auto', tema='auto-eladasa',
 dokumenty=['atadas-atveteli-jegyzokonyv-gepjarmu','gepjarmu-adasveteli-szerzodes','meghatalmazas-forgalmi-atirashoz'],
 slova=['bírság autó eladása után','üzembentartó','átadás-átvételi jegyzőkönyv','tulajdonosváltozás bejelentése','gyorshajtás eladott autó'],
 zdroje=[('304/2009. (XII. 22.) Korm. rendelet – bejelentés, a magánokirat tartalma (NJT)','https://njt.jog.gov.hu/jogszabaly/2009-304-20-22'),
         ('1999. évi LXXXIV. törvény a közúti közlekedési nyilvántartásról (NJT)','https://njt.jog.gov.hu/jogszabaly/1999-84-00-00')],
 faq=[('Miért nekem jött a bírság?','Egyes szabályszegésekért a nyilvántartásban szereplő üzembentartó felel. Amíg a változás nincs bejegyezve, ez Ön.'),
      ('Mit tegyek?','Határidőben jelezze, hogy a jármű ekkor már nem volt Önnél, nevezze meg a vevőt, és csatolja a szerződést és a jegyzőkönyvet az időponttal.'),
      ('Hogyan előzhető meg?','A jegyzőkönyvbe írja be a birtokba adás pontos időpontját, és 15 napon belül jelentse be az eladást.')]),
"""
Bírság egy már eladott autó után gyakori. Az számít, mi van a kezében.

## 1. Miért Önhöz jön

- Egyes szabályszegésekért (pl. traffipax) a nyilvántartásban szereplő **üzembentartó** felel.
- Amíg a **változás nincs bejegyezve**, ez Ön.

## 2. Mit tegyen

- Ellenőrizze a szabályszegés idejét. Ha **a birtokba adás után** történt, határidőben nevezze meg a **vevőt**, és csatolja a [szerződést](/hu/gepjarmu-adasveteli-szerzodes/) és a [jegyzőkönyvet](/hu/atadas-atveteli-jegyzokonyv-gepjarmu/) **dátummal és időponttal**.

## 3. Megelőzés

- A birtokba adás **időpontja** kötelező tartalma a szerződésnek – ne hagyja üresen.
- **15 napon belül** jelentse be az eladást.
""")

# ---------- DAROVÁNÍ AUTA ----------
clanek('cz','darovani-auta',dict(
 title='Darovací smlouva na auto: přepis, daň a pojištění',
 nazev='Darování auta',
 description='Jak darovat auto v rodině i mimo ni: darovací smlouva, přepis do 10 pracovních dnů, kdy je dar osvobozen od daně z příjmů, pojištění a předávací protokol.',
 perex='Auto můžete darovat stejně jednoduše jako prodat – místo kupní smlouvy podepíšete darovací. Dar od příbuzných v linii přímé i vedlejší je od daně osvobozen.',
 kategorie='penize', tema='dary-a-dane',
 dokumenty=['darovaci-smlouva','predavaci-protokol-vozidlo','plna-moc-prepis-vozidla'],
 slova=['darování auta','darovací smlouva auto','přepis auta dar','daň z daru','darování auta v rodině'],
 zdroje=[('Občanský zákoník č. 89/2012 Sb., § 2055 a násl. (e-Sbírka)','https://www.e-sbirka.cz/sb/2012/89'),
         ('Zákon č. 586/1992 Sb. o daních z příjmů, § 4a a § 10 (e-Sbírka)','https://www.e-sbirka.cz/sb/1992/586')],
 faq=[('Platí se z darovaného auta daň?','Dary od příbuzných v linii přímé a vedlejší, manžela a dalších osob uvedených v zákoně jsou osvobozené. Od jiných osob je osvobozeno jen do 50 000 Kč za rok od téhož dárce.'),
      ('Musí být darovací smlouva písemná?','U auta, které předáte hned, zákon písemnou formu nevyžaduje. Pro přepis a důkaz je ale vždy lepší.'),
      ('Do kdy se dělá přepis?','Do 10 pracovních dnů od převodu vlastnictví, stejně jako u prodeje.')]),
"""
Darování auta se od prodeje liší hlavně smlouvou a daní. Postup v registru je stejný.

## 1. Darovací smlouva

- Sepište [darovací smlouvu](/cz/darovaci-smlouva/): kdo daruje, komu, auto (značka, VIN, SPZ).
- Uveďte známé **vady** a stav tachometru – i u daru se to vyplatí.

## 2. Daň

- Dar od **příbuzných v linii přímé a vedlejší**, manžela a dalších osob uvedených v zákoně je **osvobozen**.
- Od jiných osob je osvobozeno jen **do 50 000 Kč ročně** od téhož dárce – nad tuto hranici se daní celý dar.

## 3. Přepis a pojištění

- **Přepis** do **10 pracovních dnů**. Kdo nejde osobně, dá [plnou moc](/cz/plna-moc-prepis-vozidla/) s ověřeným podpisem.
- Nový vlastník si sjedná vlastní povinné ručení, dárce oznámí změnu pojišťovně.

## 4. Předání

Při předání sepište [předávací protokol](/cz/predavaci-protokol-vozidlo/) s časem předání.
""")

clanek('sk','darovanie-auta',dict(
 title='Darovacia zmluva na auto: prepis, daň a poistenie',
 nazev='Darovanie auta',
 description='Ako darovať auto na Slovensku: darovacia zmluva, zmena držby do 30 dní, darovacia daň neexistuje, PZP nového držiteľa a preberací protokol pri odovzdaní.',
 perex='Auto darujete podobne ako predáte – namiesto kúpnej podpíšete darovaciu zmluvu. Darovacia daň bola zrušená a príjem z daru sa nedaní.',
 kategorie='peniaze', tema='dary',
 dokumenty=['darovacia-zmluva','preberaci-protokol-vozidla','splnomocnenie-prepis-vozidla'],
 slova=['darovanie auta','darovacia zmluva auto','prepis auta dar','darovacia daň','zmena držby'],
 zdroje=[('Občiansky zákonník č. 40/1964 Zb., § 628 až § 630 (Slov-Lex)','https://static.slov-lex.sk/static/SK/ZZ/1964/40/'),
         ('Zákon č. 595/2003 Z. z. o dani z príjmov (Slov-Lex)','https://static.slov-lex.sk/static/SK/ZZ/2003/595/')],
 faq=[('Platí sa z darovaného auta daň?','Nie. Darovacia daň bola zrušená a príjem z daru nie je predmetom dane z príjmov fyzických osôb.'),
      ('Musí byť zmluva písomná?','Ak sa auto neodovzdáva pri darovaní, áno (§ 628 ods. 2 OZ). Pre zmenu držby je písomná zmluva vždy praktická.'),
      ('Do kedy treba auto prepísať?','Zmenu držby treba podať do 30 dní.')]),
"""
Darovanie auta sa od predaja líši najmä zmluvou. Postup na dopravnom inšpektoráte je rovnaký.

## 1. Darovacia zmluva

- Spíšte [darovaciu zmluvu](/sk/darovacia-zmluva/): darca, obdarovaný, auto (značka, VIN, EČV).
- Ak sa auto neodovzdáva hneď, zmluva musí byť **písomná**.

## 2. Daň

- **Darovacia daň neexistuje** a príjem z daru sa nedaní.

## 3. Zmena držby a poistenie

- **Zmenu držby** podajte do **30 dní**; kto nejde osobne, potrebuje [splnomocnenie](/sk/splnomocnenie-prepis-vozidla/).
- Nový držiteľ musí mať vlastné **PZP**.

## 4. Odovzdanie

Pri odovzdaní spíšte [preberací protokol](/sk/preberaci-protokol-vozidla/).
""")

clanek('pl','darowizna-samochodu',dict(
 title='Darowizna samochodu: umowa, SD-Z2 i rejestracja',
 nazev='Darowizna samochodu',
 description='Jak podarować samochód w rodzinie: umowa darowizny, zwolnienie dla najbliższej rodziny po zgłoszeniu SD-Z2 w 6 miesięcy, zgłoszenie zbycia i rejestracja w 30 dni.',
 perex='Samochód podarowany najbliższej rodzinie jest zwolniony z podatku – pod warunkiem zgłoszenia darowizny na SD-Z2 w ciągu 6 miesięcy.',
 kategorie='pieniadze', tema='darowizny',
 dokumenty=['umowa-darowizny','protokol-zdawczo-odbiorczy-pojazdu','pelnomocnictwo-rejestracja-pojazdu'],
 slova=['darowizna samochodu','umowa darowizny auta','SD-Z2','grupa zerowa','rejestracja auta darowizna'],
 zdroje=[('Kodeks cywilny, art. 888–902 (ELI)','https://eli.gov.pl/eli/DU/1964/93/ogl'),
         ('Podatek od spadków i darowizn – informacje (podatki.gov.pl)','https://www.podatki.gov.pl/podatki-osobiste/podatek-od-spadkow-i-darowizn/'),
         ('Zgłoś zbycie lub nabycie pojazdu (gov.pl)','https://www.gov.pl/web/gov/zglos-zbycie-lub-nabycie-pojazdu-na-przyklad-sprzedaz-kupno-darowizne')],
 faq=[('Kto jest zwolniony z podatku?','Małżonek, zstępni, wstępni, pasierb, rodzeństwo, ojczym i macocha – po zgłoszeniu darowizny na SD-Z2 w ciągu 6 miesięcy.'),
      ('Co jeśli nie zgłoszę SD-Z2?','Tracisz zwolnienie i darowizna jest opodatkowana jak w I grupie podatkowej.'),
      ('Czy darowizna auta wymaga notariusza?','Nie, jeśli auto zostanie od razu wydane – umowa staje się ważna z chwilą wykonania (art. 890 KC).')]),
"""
Darowizna auta różni się od sprzedaży umową i podatkiem. Formalności w wydziale komunikacji są takie same.

## 1. Umowa darowizny

- Spisz [umowę darowizny](/pl/umowa-darowizny/): darczyńca, obdarowany, auto (marka, VIN, numer rejestracyjny).
- Bez notariusza umowa jest ważna, gdy auto zostanie **od razu wydane** (art. 890 KC).

## 2. Podatek

- **Najbliższa rodzina** (grupa zerowa) jest zwolniona – pod warunkiem zgłoszenia **SD-Z2 w 6 miesięcy**.
- Dla innych osób obowiązuje podatek od spadków i darowizn według grup.

## 3. Rejestracja

- Darczyńca **zgłasza zbycie** w 30 dni, obdarowany **rejestruje** auto w 30 dni. Kto nie idzie osobiście, daje [pełnomocnictwo](/pl/pelnomocnictwo-rejestracja-pojazdu/).

## 4. Wydanie

Sporządźcie [protokół zdawczo-odbiorczy](/pl/protokol-zdawczo-odbiorczy-pojazdu/).
""")

clanek('de','auto-verschenken',dict(
 title='Auto verschenken: Schenkungsvertrag, Steuer und Ummeldung',
 nazev='Auto verschenken',
 description='Auto an Kinder, Partner oder Freunde verschenken: Schenkungsvertrag, Freibeträge der Schenkungsteuer, Anzeige beim Finanzamt, Ummeldung und Versicherung.',
 perex='Ein Auto zu verschenken ist einfach: Schenkungsvertrag statt Kaufvertrag, Übergabe, Ummeldung. Steuer fällt meist nicht an – die Freibeträge sind hoch.',
 kategorie='geld', tema='schenkung',
 dokumenty=['schenkungsvertrag','uebergabeprotokoll-fahrzeug','vollmacht-zulassung'],
 slova=['Auto verschenken','Schenkungsvertrag Auto','Schenkungsteuer Freibetrag','Ummeldung Schenkung','Auto an Kind übertragen'],
 zdroje=[('Erbschaftsteuer- und Schenkungsteuergesetz, § 16 und § 30 (gesetze-im-internet.de)','https://www.gesetze-im-internet.de/erbstg_1974/__16.html'),
         ('§ 518 BGB – Form des Schenkungsversprechens','https://www.gesetze-im-internet.de/bgb/__518.html'),
         ('§ 15 FZV – Mitteilungspflichten bei Veräußerung (gesetze-im-internet.de)','https://www.gesetze-im-internet.de/fzv_2023/__15.html')],
 faq=[('Fällt Schenkungsteuer an?','Erst über den Freibeträgen: Ehegatten 500.000 €, Kinder 400.000 €, Geschwister und Dritte 20.000 € – jeweils alle zehn Jahre.'),
      ('Muss ich die Schenkung melden?','Ja, eine grundsätzlich steuerpflichtige Schenkung ist binnen drei Monaten dem Finanzamt anzuzeigen, auch innerhalb des Freibetrags (§ 30 ErbStG).'),
      ('Brauche ich einen Notar?','Nein, wenn das Auto sofort übergeben wird – der Vollzug heilt den Formmangel (§ 518 BGB).')]),
"""
Ein Auto verschenken unterscheidet sich vom Verkauf vor allem beim Vertrag und bei der Steuer.

## 1. Schenkungsvertrag

- Einen [Schenkungsvertrag](/de/schenkungsvertrag/) schließen: Schenker, Beschenkter, Fahrzeug (FIN, Kennzeichen).
- Wird das Auto **sofort übergeben**, braucht es keinen Notar (§ 518 BGB).

## 2. Steuer

- Schenkungsteuer erst über den **Freibeträgen** (Kinder 400.000 €, Ehegatten 500.000 €, Dritte 20.000 €).
- Die Schenkung ist binnen **drei Monaten** dem Finanzamt anzuzeigen (§ 30 ErbStG).

## 3. Ummeldung und Versicherung

- **Veräußerungsanzeige** an die Zulassungsbehörde, Beschenkter meldet um – mit [Vollmacht](/de/vollmacht-zulassung/), wenn jemand anders hingeht.
- Versicherung informieren.

## 4. Übergabe

Ein [Übergabeprotokoll](/de/uebergabeprotokoll-fahrzeug/) mit Uhrzeit erstellen.
""")

clanek('at','auto-verschenken-oesterreich',dict(
 title='Auto verschenken in Österreich: Vertrag, Meldung, Ummeldung',
 nazev='Auto verschenken in Österreich',
 description='Auto in Österreich verschenken: keine Schenkungssteuer, Schenkungsmeldung ab 50.000 € unter Angehörigen, Notariatsakt nur ohne wirkliche Übergabe, Ab- und Anmeldung.',
 perex='Schenkungssteuer gibt es in Österreich nicht mehr. Bei wertvollen Autos kann aber eine Schenkungsmeldung ans Finanzamt nötig sein.',
 kategorie='geld', tema='schenkung',
 dokumenty=['schenkungsvertrag','uebergabeprotokoll-fahrzeug','vollmacht-zulassung'],
 slova=['Auto verschenken','Österreich','Schenkungsmeldung','Schenkungsvertrag Auto','Notariatsakt'],
 zdroje=[('Schenkungsmeldung (Bundesministerium für Finanzen)','https://www.bmf.gv.at/themen/steuern/steuern-von-a-bis-z/schenkungsmeldung.html'),
         ('Kfz-Abmeldung (oesterreich.gv.at)','https://www.oesterreich.gv.at/themen/mobilitaet/kfz/2/Seite.060900.html')],
 faq=[('Gibt es Schenkungssteuer?','Nein, sie wurde 2008 abgeschafft.'),
      ('Muss ich die Schenkung melden?','Zwischen Angehörigen ab 50.000 € innerhalb eines Jahres, zwischen anderen Personen ab 15.000 € innerhalb von fünf Jahren – binnen drei Monaten beim Finanzamt Österreich.'),
      ('Brauche ich einen Notariatsakt?','Nur für eine Schenkung ohne wirkliche Übergabe. Wird das Auto samt Schlüsseln sofort übergeben, genügt ein einfacher Vertrag.')]),
"""
Ein Auto verschenken ist in Österreich unkompliziert. Achten Sie auf diese Punkte.

## 1. Schenkungsvertrag

- Einen [Schenkungsvertrag](/at/schenkungsvertrag/) schließen und das Auto **sofort übergeben** – dann genügt ein einfacher Vertrag.

## 2. Steuer und Meldung

- **Keine Schenkungssteuer.**
- **Schenkungsmeldung** binnen drei Monaten, wenn die Grenzen überschritten werden: unter Angehörigen ab 50.000 € pro Jahr, sonst ab 15.000 € in fünf Jahren.

## 3. Ab- und Anmeldung

- Schenker meldet ab, Beschenkter meldet an – mit [Vollmacht](/at/vollmacht-zulassung/), wenn jemand anders hingeht. Versicherung informieren.

## 4. Übergabe

Ein [Übergabeprotokoll](/at/uebergabeprotokoll-fahrzeug/) erstellen.
""")

clanek('ch','auto-verschenken-schweiz',dict(
 title='Auto verschenken in der Schweiz: Vertrag, Steuer, Halterwechsel',
 nazev='Auto verschenken in der Schweiz',
 description='Auto in der Schweiz verschenken: Schenkung von Hand zu Hand formlos gültig, kantonale Schenkungssteuer (Ehegatten befreit), Halterwechsel, Schilder und Versicherung.',
 perex='Eine Schenkung von Hand zu Hand ist formlos gültig. Ob Schenkungssteuer anfällt, regelt der Kanton – Ehegatten sind praktisch überall befreit.',
 kategorie='geld', tema='schenkung',
 dokumenty=['schenkungsvertrag','uebergabeprotokoll-fahrzeug','vollmacht-strassenverkehrsamt'],
 slova=['Auto verschenken','Schweiz','Schenkungsvertrag Auto','Schenkungssteuer Kanton','Halterwechsel'],
 zdroje=[('Obligationenrecht, Art. 239–252 (Fedlex)','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de'),
         ('Schenkungssteuer (ch.ch)','https://www.ch.ch/de/schenkungssteuer')],
 faq=[('Fällt Schenkungssteuer an?','Nicht auf Bundesebene. Die Kantone erheben sie je nach eigenem Recht; Ehegatten sind praktisch überall befreit, Nachkommen in den meisten Kantonen.'),
      ('Braucht es einen schriftlichen Vertrag?','Eine Schenkung von Hand zu Hand ist formlos gültig. Ein Schenkungsversprechen braucht die Schriftform (Art. 243 OR).'),
      ('Was passiert mit den Schildern?','Die Kontrollschilder bleiben beim bisherigen Halter. Der Beschenkte löst das Auto mit eigenen Schildern und Versicherung ein.')]),
"""
Ein Auto verschenken ist in der Schweiz einfach. Diese Punkte sind wichtig.

## 1. Vertrag

- Eine Schenkung **von Hand zu Hand** ist formlos gültig. Ein schriftlicher [Schenkungsvertrag](/ch/schenkungsvertrag/) hilft beim Halterwechsel und als Beweis.

## 2. Steuer

- Die **Schenkungssteuer** regelt der **Kanton**, meist der Wohnsitzkanton des Schenkers. Ehegatten sind praktisch überall befreit, Nachkommen in den meisten Kantonen.

## 3. Halterwechsel

- Die **Kontrollschilder** behalten Sie. Der Beschenkte löst das Auto mit eigener Versicherung beim Strassenverkehrsamt ein – bei Bedarf mit [Vollmacht](/ch/vollmacht-strassenverkehrsamt/).

## 4. Übergabe

Ein [Übergabeprotokoll](/ch/uebergabeprotokoll-fahrzeug/) erstellen.
""")

clanek('hu','auto-ajandekozasa',dict(
 title='Autó ajándékozása: szerződés, illeték, átírás',
 nazev='Autó ajándékozása',
 description='Hogyan ajándékozzon autót: ajándékozási szerződés, illetékmentesség egyenes ági rokon, házastárs és testvér között, átírás és bejelentés 15 napon belül.',
 perex='Egyenes ági rokonnak, házastársnak vagy testvérnek ajándékozott autó illetékmentes. Más esetben a gépjármű vagyonszerzési illetékének kétszerese fizetendő.',
 kategorie='penz', tema='ajandekozas',
 dokumenty=['ajandekozasi-szerzodes','atadas-atveteli-jegyzokonyv-gepjarmu','meghatalmazas-forgalmi-atirashoz'],
 slova=['autó ajándékozása','ajándékozási szerződés autó','ajándékozási illeték','átírás ajándék','autó szülőtől'],
 zdroje=[('Az illetékekről szóló 1990. évi XCIII. törvény (NJT)','https://njt.jog.gov.hu/jogszabaly/1990-93-00-00'),
         ('304/2009. (XII. 22.) Korm. rendelet – bejelentés, a magánokirat tartalma (NJT)','https://njt.jog.gov.hu/jogszabaly/2009-304-20-22')],
 faq=[('Kell illetéket fizetni?','Egyenes ági rokontól, házastárstól és testvértől kapott ajándék illetékmentes. Egyébként gépjárműnél a vagyonszerzési illeték kétszerese.'),
      ('Kellenek tanúk?','Az átíráshoz teljes bizonyító erejű magánokirat kell: két tanú vagy ügyvédi ellenjegyzés.'),
      ('Mennyi idő alatt kell átíratni?','A feleknek 15 napjuk van a változás bejelentésére és az átírás kérelmezésére.')]),
"""
Az autó ajándékozása az eladástól főleg a szerződésben és az illetékben különbözik.

## 1. Ajándékozási szerződés

- Kössenek [ajándékozási szerződést](/hu/ajandekozasi-szerzodes/): ajándékozó, megajándékozott, jármű (alvázszám, rendszám).
- Az átíráshoz **két tanú** aláírása vagy ügyvédi ellenjegyzés kell.

## 2. Illeték

- **Egyenes ági rokon, házastárs és testvér** között illetékmentes.
- Más esetben gépjárműnél a **vagyonszerzési illeték kétszerese**.

## 3. Átírás

- **15 napon belül** be kell jelenteni a változást és kérni az átírást – szükség esetén [meghatalmazással](/hu/meghatalmazas-forgalmi-atirashoz/).

## 4. Átadás

Vegyenek fel [átadás-átvételi jegyzőkönyvet](/hu/atadas-atveteli-jegyzokonyv-gepjarmu/).
""")
print('ok')
