import sys; sys.path.insert(0,'/home/claude/skripty')
from clanek import clanek

clanek('cz','jak-pronajmout-byt',dict(
 title='Jak pronajmout byt: smlouva, kauce a předávací protokol',
 nazev='Jak pronajmout byt',
 description='Pronájem bytu krok za krokem pro pronajímatele: ověření nájemce, nájemní smlouva, kauce do trojnásobku nájemného, předávací protokol, služby a daň z příjmů.',
 perex='Pronajmout byt bez realitky zvládnete sami. Rozhoduje dobrá smlouva, kauce v zákonném limitu a předávací protokol se stavy měřičů a fotkami.',
 kategorie='bydleni', tema='najem-bytu',
 dokumenty=['najemni-smlouva-byt','predavaci-protokol-byt','potvrzeni-o-prevzeti-penez'],
 slova=['pronájem bytu','jak pronajmout byt','nájemní smlouva','kauce','jistota','předávací protokol','pronajímatel'],
 zdroje=[('Občanský zákoník č. 89/2012 Sb., § 2235 a násl. (e-Sbírka)','https://www.e-sbirka.cz/sb/2012/89'),
         ('Nařízení vlády č. 308/2015 Sb., drobné opravy (e-Sbírka)','https://www.e-sbirka.cz/sb/2015/308'),
         ('Zákon č. 67/2013 Sb., služby spojené s užíváním bytů (e-Sbírka)','https://www.e-sbirka.cz/sb/2013/67'),
         ('Veřejný ochránce práv – leták Nájem bytu','https://www.ochrance.cz/letaky/najem-bytu/najem-bytu.pdf')],
 faq=[('Jak vysokou kauci můžu chtít?','Jistota a případná smluvní pokuta dohromady nesmí přesáhnout trojnásobek měsíčního nájemného (§ 2254 občanského zákoníku). Při skončení nájmu ji vracíte i s úroky.'),
      ('Na dobu určitou, nebo neurčitou?','Na dobu určitou máte větší jistotu, kdy byt dostanete zpět. Po skončení doby ale nájemce včas vyzvěte k odevzdání bytu, jinak se nájem může obnovit (§ 2285).'),
      ('Kdo platí drobné opravy?','Nájemce, ale jen v limitu nařízení vlády č. 308/2015 Sb.: jednotlivá oprava do 1 000 Kč a ročně celkem do 100 Kč za m² podlahové plochy.')]),
"""
Pronajmout byt bez realitní kanceláře je běžné. Postupujte v tomto pořadí – ušetříte si spory při stěhování ven.

## 1. Připravte byt a doklady

- **Vlastnictví:** pronajímat může vlastník bytu; spoluvlastníci podepisují všichni.
- **Měřiče a vybavení:** sepište, co v bytě zůstává (spotřebiče, nábytek), a vyfoťte stav.
- **Služby:** rozmyslete, které služby (voda, teplo, výtah, úklid) budete účtovat zálohově. Zálohy musíte jednou ročně vyúčtovat podle zákona č. 67/2013 Sb.

## 2. Vyberte nájemce

- Ověřte **totožnost** podle občanského průkazu a zapište ji do smlouvy.
- Domluvte se, kdo se do bytu nastěhuje. Osoby blízké (rodina, partner) může nájemce přijmout i bez vašeho souhlasu, **podnájem celého bytu** ale potřebuje váš písemný souhlas.

## 3. Sepište nájemní smlouvu

Do smlouvy patří byt, doba nájmu, nájemné, zálohy na služby, splatnost a jistota. Pozor na ujednání, která zákon nedovolí:

- **Kauce** a případná smluvní pokuta dohromady nejvýš **trojnásobek měsíčního nájemného**. Z jistoty náleží nájemci úroky.
- **Zvyšování nájemného** jen jasnou inflační doložkou (konkrétní ukazatel ČSÚ a datum) nebo zákonným postupem.
- Na nájemce **nepřenesete** daň z nemovitosti, pojištění domu, správu ani fond oprav – takové ujednání je neplatné.
- **Drobné opravy** platí nájemce jen do limitu nařízení vlády č. 308/2015 Sb.

[Nájemní smlouvu na byt](/cz/najemni-smlouva-byt/) vyplníte zdarma online, s hlídáním těchto limitů.

## 4. Převezměte kauci a předejte byt

- Kauci si nechte poslat **převodem**, nebo vystavte [potvrzení o převzetí peněz](/cz/potvrzeni-o-prevzeti-penez/).
- Při předání sepište [předávací protokol](/cz/predavaci-protokol-byt/) se **stavy měřičů**, počtem klíčů a fotkami. Při stěhování ven podle něj porovnáte, co je běžné opotřebení a co škoda.
- Nájemce si přepíše elektřinu a plyn, pokud je platí přímo, a nahlásí se správci domu nebo SVJ.

## 5. Po podpisu

- **Daň:** příjmy z nájmu se zdaňují jako příjmy podle § 9 zákona o daních z příjmů a uvádějí se v daňovém přiznání. Podrobnosti ověřte na finanční správě nebo u daňového poradce.
- **Doba určitá:** hlídejte si konec nájmu a nájemce včas vyzvěte k odevzdání bytu, jinak se nájem může obnovit.
- **Konec nájmu:** výpověď má zákonné důvody a lhůty; jednodušší bývá [dohoda o skončení nájmu](/cz/dohoda-o-skonceni-najmu/).
""")

clanek('pl','jak-wynajac-mieszkanie',dict(
 title='Jak wynająć mieszkanie: umowa, kaucja i protokół',
 nazev='Jak wynająć mieszkanie',
 description='Wynajem mieszkania krok po kroku dla właściciela: sprawdzenie najemcy, umowa najmu, kaucja do 12-krotności czynszu, protokół zdawczo-odbiorczy i podatek.',
 perex='Mieszkanie wynajmiesz sam, bez pośrednika. Liczy się dobra umowa najmu, kaucja w ustawowym limicie i protokół ze stanami liczników i zdjęciami.',
 kategorie='mieszkanie', tema='najem-mieszkania',
 dokumenty=['umowa-najmu-mieszkania','protokol-zdawczo-odbiorczy-mieszkania','pokwitowanie-odbioru-pieniedzy'],
 slova=['wynajem mieszkania','jak wynająć mieszkanie','umowa najmu','kaucja','protokół zdawczo-odbiorczy','wynajmujący'],
 zdroje=[('Kodeks cywilny – najem, art. 659–692 (ELI)','https://eli.gov.pl/eli/DU/1964/93/ogl'),
         ('Ustawa o ochronie praw lokatorów, art. 6 (Sejm)','https://api.sejm.gov.pl/eli/acts/DU/2001/733/text.html'),
         ('Podatki od najmu prywatnego (podatki.gov.pl)','https://www.podatki.gov.pl/')],
 faq=[('Ile może wynosić kaucja?','Najwyżej 12-krotność miesięcznego czynszu (art. 6 ustawy o ochronie praw lokatorów). Zwracasz ją w ciągu miesiąca od opróżnienia lokalu, po potrąceniu należności.'),
      ('Czy umowa musi być na piśmie?','Umowa na czas dłuższy niż rok bez formy pisemnej uważana jest za zawartą na czas nieoznaczony (art. 660 KC). Zawsze lepiej spisać ją na piśmie.'),
      ('Czym jest najem okazjonalny?','Szczególna forma najmu z oświadczeniem najemcy u notariusza o poddaniu się egzekucji. Wymaga innego wzoru i zgłoszenia umowy do urzędu skarbowego.')]),
"""
Mieszkanie można wynająć samodzielnie. Ta kolejność kroków oszczędzi Ci sporów przy wyprowadzce najemcy.

## 1. Przygotuj mieszkanie i dokumenty

- **Własność:** wynajmuje właściciel; współwłaściciele podpisują wszyscy. Najemca może to sprawdzić w księdze wieczystej (ekw.ms.gov.pl).
- **Wyposażenie i liczniki:** spisz, co zostaje w mieszkaniu, i zrób zdjęcia.
- **Opłaty:** ustal, które media płaci najemca bezpośrednio, a które w opłatach do wynajmującego.

## 2. Wybierz najemcę

- Sprawdź **tożsamość** z dowodu osobistego i wpisz dane do umowy.
- Ustal, kto zamieszka w lokalu, i czy zgadzasz się na podnajem.

## 3. Spisz umowę najmu

W umowie: lokal, czas trwania, czynsz, opłaty, termin płatności i kaucja. Pamiętaj o zasadach:

- **Kaucja** najwyżej **12-krotność** miesięcznego czynszu. W praktyce zwykle jeden lub dwa czynsze.
- Umowa na czas **dłuższy niż rok** wymaga **formy pisemnej**, inaczej obowiązuje na czas nieoznaczony (art. 660 KC).
- Umowę na **czas oznaczony** można wypowiedzieć tylko w przypadkach wskazanych w umowie (art. 673 § 3 KC) – wpisz je wprost.
- To zwykła umowa najmu. **Najem okazjonalny** (z oświadczeniem najemcy u notariusza) wymaga innego wzoru.

[Umowę najmu mieszkania](/pl/umowa-najmu-mieszkania/) wypełnisz za darmo online.

## 4. Odbierz kaucję i wydaj mieszkanie

- Kaucję przyjmij **przelewem** albo wystaw [pokwitowanie odbioru pieniędzy](/pl/pokwitowanie-odbioru-pieniedzy/).
- Przy wydaniu sporządźcie [protokół zdawczo-odbiorczy](/pl/protokol-zdawczo-odbiorczy-mieszkania/) ze **stanami liczników**, kluczami i zdjęciami. Przy wyprowadzce porównacie z nim stan lokalu.

## 5. Po podpisaniu

- **Podatek:** przychód z najmu prywatnego rozlicza się z urzędem skarbowym, zwykle ryczałtem. Aktualne stawki i terminy sprawdź na podatki.gov.pl.
- **Koniec najmu:** wypowiedzenie ma ustawowe terminy; prościej bywa zawrzeć [porozumienie o rozwiązaniu umowy](/pl/porozumienie-rozwiazanie-umowy-najmu/).
""")

clanek('de','wohnung-vermieten',dict(
 title='Wohnung vermieten: Mietvertrag, Kaution, Übergabe',
 nazev='Wohnung vermieten',
 description='Wohnung privat vermieten Schritt für Schritt: Mieter prüfen, Mietvertrag, Kaution bis drei Kaltmieten, Mietpreisbremse, Übergabeprotokoll und Wohnungsgeberbestätigung.',
 perex='Eine Wohnung vermieten Sie auch ohne Makler. Entscheidend sind ein sauberer Mietvertrag, die Kaution im gesetzlichen Rahmen und ein Übergabeprotokoll mit Zählerständen.',
 kategorie='wohnen', tema='mietvertrag',
 dokumenty=['mietvertrag-wohnung','uebergabeprotokoll-wohnung','quittung'],
 slova=['Wohnung vermieten','privat vermieten','Mietvertrag','Kaution','Übergabeprotokoll','Vermieter','Wohnungsgeberbestätigung'],
 zdroje=[('§§ 535–580a BGB – Mietvertrag, Wohnraummiete','https://www.gesetze-im-internet.de/bgb/__535.html'),
         ('§ 551 BGB – Begrenzung und Anlage von Mietsicherheiten','https://www.gesetze-im-internet.de/bgb/__551.html'),
         ('Betriebskostenverordnung (BetrKV)','https://www.gesetze-im-internet.de/betrkv/'),
         ('§ 19 BMG – Wohnungsgeberbestätigung','https://www.gesetze-im-internet.de/bmg/__19.html')],
 faq=[('Wie hoch darf die Kaution sein?','Höchstens drei Monatsmieten ohne Betriebskosten. Der Mieter darf sie in drei Monatsraten zahlen; Sie legen sie getrennt vom eigenen Vermögen an (§ 551 BGB).'),
      ('Darf ich befristet vermieten?','Nur mit einem gesetzlichen Grund, etwa Eigenbedarf nach Ablauf (§ 575 BGB). Üblich ist ein unbefristeter Vertrag, oft mit beidseitigem Kündigungsverzicht.'),
      ('Was muss ich nach dem Einzug tun?','Innerhalb von zwei Wochen die Wohnungsgeberbestätigung ausstellen, damit sich der Mieter anmelden kann (§ 19 BMG).')]),
"""
Privat vermieten ist in Deutschland weit verbreitet – aber das Mietrecht schützt vor allem den Mieter. In dieser Reihenfolge vermeiden Sie die typischen Fehler.

## 1. Wohnung und Unterlagen vorbereiten

- **Miethöhe:** Prüfen Sie, ob in Ihrer Stadt die **Mietpreisbremse** gilt. Dann darf die Miete bei Neuvermietung höchstens 10 % über der ortsüblichen Vergleichsmiete liegen.
- **Betriebskosten:** Umlegen dürfen Sie nur Kosten nach der Betriebskostenverordnung – und nur, wenn sie im Vertrag vereinbart sind.
- **Inventar und Zähler:** Notieren Sie, was mitvermietet wird, und fotografieren Sie den Zustand.

## 2. Mieter auswählen

- Prüfen Sie die **Identität** anhand des Ausweises und tragen Sie die Daten in den Vertrag ein.
- Klären Sie, wer einzieht. Untervermietung braucht Ihre Erlaubnis.

## 3. Mietvertrag schließen

- **Kaution** höchstens **drei Kaltmieten**, zahlbar in drei Raten (§ 551 BGB).
- **Befristung** nur mit gesetzlichem Grund (§ 575 BGB) – sonst unbefristet, gegebenenfalls mit Kündigungsverzicht.
- **Schönheits- und Kleinreparaturen:** Solche Klauseln sind häufig unwirksam. Im Zweifel besser weglassen.
- **Nebenkosten-Vorauszahlungen** jährlich abrechnen, spätestens zwölf Monate nach Ende des Abrechnungszeitraums.

Den [Mietvertrag für eine Wohnung](/de/mietvertrag-wohnung/) füllen Sie kostenlos online aus.

## 4. Kaution und Übergabe

- Kaution per **Überweisung** oder gegen [Quittung](/de/quittung/) annehmen und auf einem **Kautionskonto** getrennt anlegen.
- Bei der Übergabe ein [Übergabeprotokoll](/de/uebergabeprotokoll-wohnung/) mit **Zählerständen**, Schlüsseln und Fotos erstellen.

## 5. Nach dem Einzug

- **Wohnungsgeberbestätigung** innerhalb von **zwei Wochen** ausstellen (§ 19 BMG).
- **Steuern:** Mieteinnahmen gehören in die Einkommensteuererklärung (Anlage V). Details klären Sie mit dem Finanzamt oder einer Steuerberatung.
- **Ende des Mietverhältnisses:** Als Vermieter brauchen Sie für eine Kündigung ein berechtigtes Interesse. Einfacher ist oft ein [Mietaufhebungsvertrag](/de/mietaufhebungsvertrag/).
""")

clanek('at','wohnung-vermieten-oesterreich',dict(
 title='Wohnung vermieten in Österreich: MRG, Befristung, Kaution',
 nazev='Wohnung vermieten in Österreich',
 description='Wohnung privat vermieten in Österreich: gilt das MRG, Befristung mind. drei Jahre, Kaution verzinst anlegen, Wertsicherung, Übergabeprotokoll und Meldezettel.',
 perex='Ob der Mietzins frei ist, hängt davon ab, ob das Mietrechtsgesetz voll gilt. Befristet wird schriftlich und mindestens drei Jahre, die Kaution legen Sie verzinst an.',
 kategorie='wohnen', tema='mietvertrag',
 dokumenty=['mietvertrag-wohnung','uebergabeprotokoll-wohnung','quittung'],
 slova=['Wohnung vermieten','Österreich','Mietvertrag','MRG','Befristung','Kaution','Übergabeprotokoll'],
 zdroje=[('Mietrechtsgesetz (RIS)','https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10002531'),
         ('Wohnen – Miete (oesterreich.gv.at)','https://www.oesterreich.gv.at/themen/bauen_und_wohnen/wohnen.html')],
 faq=[('Wie lange muss ein befristeter Mietvertrag laufen?','Mindestens drei Jahre und schriftlich, sonst gilt er als unbefristet (§ 29 MRG). Der Mieter kann nach einem Jahr mit dreimonatiger Frist kündigen.'),
      ('Wie hoch darf die Kaution sein?','Eine gesetzliche Obergrenze gibt es nicht; üblich sind bis zu drei Bruttomonatsmieten. Sie müssen sie verzinst und getrennt anlegen (§ 16b MRG).'),
      ('Fällt noch eine Vertragsgebühr an?','Nein, die Gebühr für Wohnungsmietverträge ist abgeschafft.')]),
"""
Wer in Österreich vermietet, muss zuerst klären, welche Regeln für die Wohnung gelten. Danach geht es Schritt für Schritt.

## 1. Gilt das Mietrechtsgesetz?

- **Vollanwendung** (z. B. Altbau vor 1945): Der Mietzins ist gesetzlich begrenzt (Richtwert- oder Kategoriemietzins).
- **Teil- oder Nichtanwendung:** Der Mietzins ist frei vereinbar.
- Im Zweifel hilft die Schlichtungsstelle der Gemeinde oder eine Mieter- bzw. Vermietervereinigung.

## 2. Mieter auswählen

- **Identität** anhand des Ausweises prüfen und in den Vertrag übernehmen.
- Klären, wer einzieht und ob Untervermietung erlaubt sein soll.

## 3. Mietvertrag schließen

- **Befristung:** schriftlich und mindestens **drei Jahre**, sonst unbefristet (§ 29 MRG). Der Mieter kann nach einem Jahr mit dreimonatiger Frist kündigen – das lässt sich nicht ausschließen.
- **Wertsicherung:** Seit 2026 begrenzt das Mieten-Wertsicherungsgesetz die jährlichen Erhöhungen.
- **Betriebskosten** als Akonto vereinbaren und jährlich abrechnen.

Den [Mietvertrag für eine Wohnung](/at/mietvertrag-wohnung/) füllen Sie kostenlos online aus.

## 4. Kaution und Übergabe

- **Kaution** per Überweisung oder gegen [Quittung](/at/quittung/) annehmen und **fruchtbringend, getrennt** anlegen, z. B. auf Sparbuch oder Kautionskonto (§ 16b MRG).
- Bei der Übergabe ein [Übergabeprotokoll](/at/uebergabeprotokoll-wohnung/) mit Zählerständen und Fotos erstellen.

## 5. Nach dem Einzug

- Der Mieter meldet den **Hauptwohnsitz innerhalb von drei Tagen**; Sie unterschreiben den Meldezettel.
- **Steuern:** Mieteinnahmen sind einkommensteuerpflichtig. Details klären Sie mit dem Finanzamt oder einer Steuerberatung.
- **Ende:** Eine einvernehmliche [Auflösung des Mietvertrags](/at/aufloesung-mietvertrag/) ist oft einfacher als eine Kündigung.
""")

clanek('ch','wohnung-vermieten-schweiz',dict(
 title='Wohnung vermieten in der Schweiz: Vertrag, Kaution, Formular',
 nazev='Wohnung vermieten in der Schweiz',
 description='Wohnung privat vermieten in der Schweiz: Mietvertrag nach OR, Nebenkosten einzeln aufführen, Kaution bis drei Monatszinse auf Sperrkonto, amtliches Formular.',
 perex='Nebenkosten zahlt der Mieter nur, wenn sie im Vertrag einzeln stehen. Die Kaution kommt auf ein Sperrkonto auf seinen Namen, gekündigt wird mit amtlichem Formular.',
 kategorie='wohnen', tema='mietvertrag',
 dokumenty=['mietvertrag-wohnung','uebergabeprotokoll-wohnung','quittung'],
 slova=['Wohnung vermieten','Schweiz','Mietvertrag','Mietkaution','Sperrkonto','Nebenkosten','Übergabeprotokoll'],
 zdroje=[('Obligationenrecht, Art. 253–273c (Fedlex)','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_253'),
         ('Obligationenrecht, Art. 257e (Fedlex)','https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_257_e'),
         ('Wohnung mieten (ch.ch)','https://www.ch.ch/de/wohnen/mieten/')],
 faq=[('Wie hoch darf die Kaution sein?','Höchstens drei Monatsmietzinse. Sie muss bei einer Bank auf ein Konto auf den Namen des Mieters (Art. 257e OR).'),
      ('Welche Nebenkosten darf ich verlangen?','Nur die im Vertrag einzeln aufgeführten (Art. 257a OR). Alles andere gilt als im Mietzins enthalten.'),
      ('Brauche ich ein amtliches Formular?','In einigen Kantonen für die Mitteilung des Anfangsmietzinses (Art. 270 Abs. 2 OR) und immer für die Kündigung durch den Vermieter.')]),
"""
Das Schweizer Mietrecht steht im Obligationenrecht und schützt den Mieter. Halten Sie sich an diese Reihenfolge.

## 1. Wohnung vorbereiten

- **Mietzins** festlegen. In einigen Kantonen müssen Sie den Anfangsmietzins auf dem **amtlichen Formular** mitteilen – fragen Sie bei der kantonalen Schlichtungsbehörde nach.
- **Nebenkosten** einzeln auflisten (Heizung, Warmwasser, Hauswart …). Nicht aufgeführte Kosten sind im Mietzins enthalten.

## 2. Mieter auswählen

- **Identität** anhand des Ausweises prüfen und in den Vertrag übernehmen.
- Klären, wer einzieht.

## 3. Mietvertrag schließen

- **Kaution** höchstens **drei Monatszinse** (Art. 257e OR).
- **Kündigungsfrist** für Wohnungen mindestens **drei Monate** auf einen ortsüblichen Termin (Art. 266c OR).
- Der Mieter kann vorzeitig ausziehen, wenn er einen **zumutbaren Nachmieter** vorschlägt (Art. 264 OR).

Den [Mietvertrag für eine Wohnung](/ch/mietvertrag-wohnung/) füllen Sie kostenlos online aus.

## 4. Kaution und Übergabe

- Die Kaution kommt auf ein **Mietkautionskonto (Sperrkonto)** auf den Namen des Mieters, nicht auf Ihr Konto.
- Bei der Übergabe ein [Übergabeprotokoll](/ch/uebergabeprotokoll-wohnung/) erstellen. Mängel, die darin fehlen, kann der Mieter in den ersten Tagen noch schriftlich melden.

## 5. Nach dem Einzug

- Der Mieter meldet sich bei der **Einwohnerkontrolle** der Gemeinde an.
- **Steuern:** Mieteinnahmen gehören in die Steuererklärung. Details klären Sie mit dem kantonalen Steueramt.
- **Kündigung** durch den Vermieter nur mit dem **amtlichen Formular** des Kantons. Einvernehmlich geht es mit einer [Aufhebungsvereinbarung](/ch/aufhebungsvereinbarung-mietvertrag/).
""")

clanek('hu','lakas-kiadasa',dict(
 title='Lakás kiadása: bérleti szerződés, kaució, jegyzőkönyv',
 nazev='Lakás kiadása',
 description='Lakás kiadása lépésről lépésre: bérlő ellenőrzése, írásos bérleti szerződés, kaució, átadás-átvételi jegyzőkönyv, lakcímbejelentés és a bérbeadás adózása.',
 perex='Lakást ingatlanos nélkül is kiadhat. A szerződést írásba kell foglalni, a kaució feltételeit rögzíteni, az átadásnál pedig jegyzőkönyvet felvenni.',
 kategorie='lakas', tema='berles',
 dokumenty=['lakasberleti-szerzodes','lakas-atadas-atveteli-jegyzokonyv','atveteli-elismerveny'],
 slova=['lakás kiadása','albérlet kiadása','bérleti szerződés','kaució','óvadék','átadás-átvételi jegyzőkönyv','bérbeadó'],
 zdroje=[('1993. évi LXXVIII. törvény a lakások bérletéről (NJT)','https://njt.jog.gov.hu/jogszabaly/1993-78-00-00'),
         ('Polgári Törvénykönyv – bérleti szerződés (NJT)','https://njt.jog.gov.hu/jogszabaly/2013-5-00-00'),
         ('Nemzeti Adó- és Vámhivatal (nav.gov.hu)','https://nav.gov.hu/')],
 faq=[('Kell írásos szerződés?','Igen. A lakás bérbeadásának érvényességéhez a szerződést írásba kell foglalni (Ltv. 2. § (5)).'),
      ('Mennyi kauciót kérhetek?','Magánlakásnál a törvény nem szab felső határt, a felek megállapodnak róla. Gyakori az egy–három havi bérleti díj.'),
      ('Be kell vallani a bérleti díjat?','Igen, a bérbeadásból származó jövedelmet be kell vallani. Az aktuális szabályokat a NAV oldalán találja.')]),
"""
Lakást kiadni ingatlanos nélkül is lehet. Ebben a sorrendben haladva elkerülheti a vitákat a kiköltözéskor.

## 1. Készítse elő a lakást

- **Tulajdon:** bérbe a tulajdonos adhat; több tulajdonos esetén mind aláírnak. A bérlő ezt a tulajdoni lapon ellenőrizheti.
- **Berendezés és mérőórák:** írja össze, mi marad a lakásban, és fényképezze le az állapotát.
- **Rezsi:** döntse el, mit fizet a bérlő közvetlenül, és mit a bérleti díjjal együtt.

## 2. Válassza ki a bérlőt

- Ellenőrizze a **személyazonosságát**, és az adatokat írja a szerződésbe.
- Rögzítse, ki költözik be a bérlővel együtt.

## 3. Kössön írásos szerződést

- A szerződés **csak írásban érvényes**.
- A **kaució** összegét és visszafizetésének feltételeit a szerződésben rögzítik. Belőle csak a bérletből eredő tartozásokat vonhatja le.
- **Határozott idejű** szerződés a lejárattal megszűnik; idő előtti rendes felmondás csak akkor lehetséges, ha a szerződés megengedi.

A [lakásbérleti szerződést](/hu/lakasberleti-szerzodes/) ingyen, online töltheti ki.

## 4. Kaució és átadás

- A kauciót **utalással** kérje, vagy állítson ki [átvételi elismervényt](/hu/atveteli-elismerveny/).
- Az átadáskor vegyenek fel [átadás-átvételi jegyzőkönyvet](/hu/lakas-atadas-atveteli-jegyzokonyv/) a **mérőóra-állásokkal** és fényképekkel.

## 5. A beköltözés után

- A bérlő **lakcímbejelentéséhez** a bérbeadó hozzájárulása kell.
- **Adó:** a bérbeadásból származó jövedelmet be kell vallani – a szabályokat lásd a NAV oldalán.
- **Megszűnés:** közös megegyezéssel egyszerűbb – erre szolgál a [bérleti szerződés közös megegyezéses megszüntetése](/hu/berleti-szerzodes-megszuntetese-kozos-megegyezessel/).
""")
print('ok')
