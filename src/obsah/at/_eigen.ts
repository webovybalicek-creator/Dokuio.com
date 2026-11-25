/**
 * Vlastní texty rakouských landingů, které jinak přebírají obsah z DE (SEO unikátnost, viz SEO.md).
 * Klíč = slug stránky v src/obsah/at/. Použití: `vlastni(stranka)` na konci souboru stránky.
 * Soubor začíná podtržítkem, takže se negeneruje jako stránka.
 */
import type { StrankaDokumentu } from '../typy';

type Landing = Partial<StrankaDokumentu['landing']>;
const P = (nazev: string, popis: string) => ({ nazev, popis });

export const EIGEN: Record<string, Landing> = {
  quittung: {
    perex: 'Bestätigung einer Barzahlung nach § 1426 ABGB – für den Kaufpreis beim Gebrauchtwagen, eine Anzahlung, eine Kaution oder ein privates Darlehen. Den Betrag in Worten ergänzen wir automatisch.',
    obsahPopis: 'Eine kurze Empfangsbestätigung, die der Empfänger des Geldes unterschreibt.',
    kroky: [P('Daten eintragen', 'Empfänger, Zahler, Betrag und Zahlungsgrund.'), P('Geld nachzählen', 'Erst zählen, dann unterschreiben.'), P('Original übergeben', 'Die Quittung bekommt, wer bezahlt hat.')],
    online: ['Betrag in Worten automatisch', 'Zahlungsgrund mit Verweis auf den Vertrag', 'Unterschrift am Bildschirm, PDF und Word'],
    hodiSe: ['Sie zahlen den Kaufpreis für ein Auto oder Möbel bar', 'Sie übergeben eine Kaution oder Anzahlung in bar', 'Sie zahlen ein Privatdarlehen bar zurück'],
    nehodiSe: ['Sie überweisen – der Kontoauszug beweist die Zahlung'],
    po: [P('Aufbewahren', 'Der Zahler hebt das Original auf – es ist sein Beweis.'), P('Vertrag dazulegen', 'Quittung und Kaufvertrag zusammen ablegen.')],
    faq: [
      { q: 'Muss mir der Empfänger eine Quittung ausstellen?', a: 'Ja. Wer eine Schuld bezahlt, kann vom Gläubiger eine Quittung verlangen (§ 1426 ABGB). Die Kosten trägt dabei der Zahler, wenn nichts anderes vereinbart ist.' },
      { q: 'Was gehört auf die Quittung?', a: 'Wer was von wem erhalten hat, der Betrag, der Grund der Zahlung, Ort, Datum und die Unterschrift des Empfängers. Bei einem Autokauf auch die Fahrgestellnummer oder der Verweis auf den Kaufvertrag.' },
      { q: 'Reicht eine Quittung statt eines Kaufvertrags?', a: 'Sie beweist nur die Zahlung, nicht die Vereinbarungen über Zustand, Gewährleistung oder Übergabe. Für Fahrzeuge und teurere Sachen daher zusätzlich einen Kaufvertrag schreiben.' },
    ],
  },
  'uebergabeprotokoll-fahrzeug': {
    perex: 'Hält fest, wann genau das Fahrzeug den Besitzer gewechselt hat, mit Kilometerstand, Schlüsseln, Typenschein und Schäden. Wichtig, wenn nach dem Verkauf eine Anonymverfügung oder Lenkeranfrage kommt.',
    obsahPopis: 'Ein Protokoll mit Uhrzeit der Übergabe, Zubehör und Zustand.',
    kroky: [P('Fahrzeug ansehen', 'Gemeinsam um das Auto gehen, Schäden notieren.'), P('Uhrzeit eintragen', 'Datum und Uhrzeit der Schlüsselübergabe.'), P('Beide unterschreiben', 'Jede Seite behält ein Exemplar.')],
    online: ['Übernimmt die Daten aus dem Kaufvertrag', 'Feld für Typenschein, Zulassungsschein und Pickerl', 'PDF und Word'],
    hodiSe: ['Sie verkaufen ein Auto privat und übergeben es später als den Vertrag', 'Sie verleihen ein Fahrzeug für längere Zeit'],
    nehodiSe: ['Sie brauchen den Kaufvertrag selbst – nehmen Sie dafür die Vorlage Kaufvertrag Gebrauchtwagen'],
    po: [P('Abmelden oder ummelden', 'Kennzeichen abnehmen und abmelden oder die Ummeldung durch den Käufer vereinbaren.'), P('Fotos', 'Tacho und Fahrzeug von allen Seiten fotografieren.')],
    faq: [
      { q: 'Wozu die genaue Uhrzeit?', a: 'Die Behörde fragt bei Verstößen den Zulassungsbesitzer, wer gefahren ist (Lenkerauskunft nach § 103 Abs. 2 KFG). Mit dem Protokoll belegen Sie, dass das Fahrzeug zu diesem Zeitpunkt schon beim Käufer war.' },
      { q: 'Was passiert mit den Kennzeichen?', a: 'In Österreich gehören die Kennzeichen zur Zulassung des Verkäufers. Er nimmt sie ab und meldet das Fahrzeug bei einer Zulassungsstelle ab, außer der Käufer meldet direkt um.' },
      { q: 'Sollen Typenschein und Pickerl ins Protokoll?', a: 'Ja. Notieren Sie, ob der Typenschein übergeben wurde und bis wann das Gutachten nach § 57a KFG gilt – der Käufer braucht beides für die Anmeldung.' },
    ],
  },
  darlehensvertrag: {
    perex: 'Für Geld, das Sie Freunden oder Verwandten in Österreich leihen: Betrag, Zinsen oder zinsfrei, Rückzahlung auf einmal oder in Raten mit Tilgungsplan nach §§ 983 ff. ABGB.',
    obsahPopis: 'Fünf Paragrafen: Parteien, Auszahlung, Rückzahlung, Zinsen, Schluss.',
    kroky: [P('Betrag und Raten', 'Auszahlungsart und Rückzahlungsplan wählen.'), P('Unterschreiben', 'Zwei Exemplare, jede Seite eines.'), P('Überweisen', 'Mit Verwendungszweck „Darlehen laut Vertrag“.')],
    online: ['Betrag in Worten automatisch', 'Tilgungsplan als Anlage', 'Erinnerungen an die Raten (.ics)'],
    hodiSe: ['Sie leihen Freunden oder Familie Geld', 'Sie wollen Rückzahlung und Zinsen schriftlich festhalten'],
    nehodiSe: ['Sie verleihen Geld gewerblich – dafür gelten das Bankwesengesetz und das Verbraucherkreditgesetz'],
    po: [P('Überweisung', 'Die Auszahlung per Überweisung ist der beste Nachweis.'), P('Raten im Kalender', 'Termine aus dem Tilgungsplan eintragen.')],
    faq: [
      { q: 'Fällt für einen privaten Darlehensvertrag Gebühr an?', a: 'Nein. Darlehens- und Kreditverträge sind in Österreich seit 2011 von der Rechtsgeschäftsgebühr befreit.' },
      { q: 'Muss der Vertrag schriftlich sein?', a: 'Nein, ein Darlehen kommt auch mündlich zustande. Schriftlich können Sie aber Betrag, Rückzahlung und Zinsen beweisen – das ist bei Streit entscheidend.' },
      { q: 'Wann verjähren die Zinsen?', a: 'Rückständige Zinsen verjähren nach drei Jahren (§ 1480 ABGB). Ein schriftliches Anerkenntnis des Schuldners unterbricht die Verjährung (§ 1497 ABGB).' },
    ],
  },
  schuldanerkenntnis: {
    perex: 'Der Schuldner bestätigt schriftlich, wie viel er schuldet und wofür. Das Anerkenntnis unterbricht die Verjährung (§ 1497 ABGB) und erleichtert die Klage, falls er nicht zahlt.',
    obsahPopis: 'Anerkenntnis mit Betrag, Grund und Zahlungsweise.',
    kroky: [P('Schuld beschreiben', 'Betrag und Grund – Darlehen, Kaufpreis, Miete.'), P('Zahlung vereinbaren', 'Auf einmal oder in Raten.'), P('Unterschrift des Schuldners', 'Das Original behält der Gläubiger.')],
    online: ['Betrag in Worten automatisch', 'Ratenzahlung mit Terminen', 'PDF und Word'],
    hodiSe: ['jemand schuldet Ihnen Geld und ist bereit, das zu unterschreiben', 'die Verjährung rückt näher'],
    nehodiSe: ['der Schuldner bestreitet die Forderung – schicken Sie eine Mahnung'],
    po: [P('Original sicher aufbewahren', 'Ohne Unterschrift des Schuldners kein Beweis.'), P('Zahlungen notieren', 'Jede Rate mit Datum festhalten.')],
    faq: [
      { q: 'Was bewirkt das Anerkenntnis?', a: 'Erkennt der Schuldner die Forderung an, wird die Verjährung unterbrochen und beginnt neu zu laufen (§ 1497 ABGB).' },
      { q: 'Konstitutiv oder deklarativ?', a: 'Die Vorlage ist ein Anerkenntnis einer bestehenden Schuld: Der Schuldner bestätigt sie und verzichtet auf Einwendungen, die ihm bekannt waren. Ein Notariatsakt ist dafür nicht nötig.' },
      { q: 'Kann ich damit direkt exekutieren?', a: 'Nein. Ein privates Anerkenntnis ist kein Exekutionstitel. Zahlt der Schuldner nicht, beantragen Sie einen Zahlungsbefehl beim Bezirksgericht – das Anerkenntnis ist dabei Ihr wichtigster Beweis.' },
    ],
  },
  vollmacht: {
    perex: 'Wenn jemand für Sie etwas erledigt – ein Paket abholen, einen Antrag einbringen, ein Dokument unterschreiben. Mit konkret beschriebenen Geschäften und Gültigkeitsdauer nach §§ 1002 ff. ABGB.',
    obsahPopis: 'Vollmacht mit Vollmachtgeber, Bevollmächtigtem, Geschäften und Dauer.',
    kroky: [P('Geschäfte beschreiben', 'So konkret wie möglich.'), P('Unterschreiben', 'Eigenhändig oder mit ID Austria.'), P('Übergeben', 'Der Bevollmächtigte zeigt sie mit seinem Ausweis vor.')],
    online: ['Gültigkeit bis zu einem Datum', 'Unterbevollmächtigung ja oder nein', 'PDF und Word'],
    hodiSe: ['jemand soll für Sie bei Post, Bank oder Amt handeln', 'Sie brauchen eine einfache schriftliche Vollmacht'],
    nehodiSe: ['es geht um Grundbuch oder Firmenbuch – dort ist eine beglaubigte Unterschrift nötig', 'Sie wollen für den Fall vorsorgen, dass Sie selbst nicht mehr entscheiden können – das ist eine Vorsorgevollmacht'],
    po: [P('Original übergeben', 'Viele Stellen wollen das Original sehen.'), P('Widerruf mitteilen', 'Wenn die Vollmacht endet, Bevollmächtigten und Stellen informieren.')],
    faq: [
      { q: 'Wann reicht eine allgemeine Vollmacht nicht?', a: 'Für bestimmte Geschäfte wie Verkauf, Schenkung oder Bürgschaft braucht es eine Spezialvollmacht für genau dieses Geschäft oder diese Art von Geschäften (§ 1008 ABGB). Beschreiben Sie das Geschäft daher konkret.' },
      { q: 'Muss die Unterschrift beglaubigt sein?', a: 'Meist nicht. Für Eintragungen ins Grundbuch oder Firmenbuch und bei manchen Banken ist eine beglaubigte Unterschrift (Notar, Gericht) nötig.' },
      { q: 'Ist das eine Vorsorgevollmacht?', a: 'Nein. Eine Vorsorgevollmacht gilt erst, wenn Sie nicht mehr selbst entscheiden können, und muss vor Notar, Rechtsanwalt oder Erwachsenenschutzverein errichtet und im ÖZVV registriert werden.' },
    ],
  },
  'kaufvertrag-privat': {
    perex: 'Für den Privatverkauf über willhaben, Flohmarkt oder Bekannte – Fahrrad, Handy, Möbel. Mit Zustand, bekannten Mängeln, Preis in Worten und Gewährleistungsausschluss nach ABGB.',
    obsahPopis: 'Vier Abschnitte: Parteien, Kaufsache, Preis, Übergabe.',
    kroky: [P('Sache genau beschreiben', 'Marke, Modell, Seriennummer, Zubehör.'), P('Mängel eintragen', 'Was Sie wissen, gehört in den Vertrag.'), P('Zahlung und Übergabe', 'Bar gegen Quittung oder per Überweisung.')],
    online: ['Betrag in Worten automatisch', 'Gewährleistungsausschluss unter Privaten', 'PDF und Word'],
    hodiSe: ['Sie verkaufen oder kaufen gebraucht von privat, z. B. über willhaben', 'Sie wollen Zustand und Preis schriftlich festhalten'],
    nehodiSe: ['Sie verkaufen ein Auto – dafür gibt es den Kaufvertrag Gebrauchtwagen', 'Sie verkaufen als Unternehmer an Verbraucher – dann ist ein Gewährleistungsausschluss unwirksam'],
    po: [P('Übergabe mit Zubehör', 'Rechnung, Ladegerät, Anleitung mitgeben.'), P('Quittung', 'Bei Barzahlung eine Quittung ausstellen.')],
    faq: [
      { q: 'Darf ich als Privatperson die Gewährleistung ausschließen?', a: 'Ja. Unter Privaten kann die Gewährleistung vertraglich ausgeschlossen werden – nicht aber für Mängel, die Sie verschwiegen haben, und für ausdrücklich zugesagte Eigenschaften.' },
      { q: 'Wie lange gilt die Gewährleistung ohne Ausschluss?', a: 'Bei beweglichen Sachen zwei Jahre ab Übergabe (§ 933 ABGB).' },
      { q: 'Was ist „Verkürzung über die Hälfte“?', a: 'Ist der Preis weniger als die Hälfte des Werts (oder mehr als das Doppelte), kann der Vertrag aufgehoben werden (§ 934 ABGB). Darauf kann man im Voraus nicht verzichten.' },
    ],
  },
  schenkungsvertrag: {
    perex: 'Für Geld- oder Sachgeschenke an Familie oder Freunde in Österreich. Schenkungssteuer gibt es seit 2008 nicht mehr, größere Schenkungen müssen aber dem Finanzamt gemeldet werden.',
    obsahPopis: 'Schenkung mit sofortiger Übergabe, Wert und Verhältnis der Parteien.',
    kroky: [P('Geschenk beschreiben', 'Geldbetrag oder Sache mit Wert.'), P('Sofort übergeben', 'Mit Übergabe braucht es keinen Notariatsakt.'), P('Meldung prüfen', 'Grenzen des Finanzamts beachten.')],
    online: ['Betrag in Worten automatisch', 'Hinweis zur Schenkungsmeldung', 'PDF und Word'],
    hodiSe: ['Sie schenken Geld oder eine Sache und übergeben sie gleich', 'Sie wollen die Schenkung belegen können'],
    nehodiSe: ['Sie versprechen ein Geschenk für später – dafür ist ein Notariatsakt nötig', 'Sie verschenken eine Liegenschaft – dafür Notar und Grundbuch'],
    po: [P('Übergabe', 'Geld überweisen oder Sache übergeben.'), P('Schenkungsmeldung', 'Über den Grenzen binnen drei Monaten über FinanzOnline melden.')],
    faq: [
      { q: 'Muss ich eine Schenkung dem Finanzamt melden?', a: 'Nur über bestimmten Grenzen: zwischen Angehörigen ab 50.000 Euro innerhalb eines Jahres, zwischen anderen Personen ab 15.000 Euro innerhalb von fünf Jahren (§ 121a BAO). Die Meldung erfolgt binnen drei Monaten.' },
      { q: 'Wann braucht eine Schenkung einen Notariatsakt?', a: 'Wenn das Geschenk nicht sofort übergeben wird, sondern nur versprochen ist. Bei wirklicher Übergabe genügt ein einfacher Vertrag.' },
      { q: 'Gibt es noch Schenkungssteuer?', a: 'Nein, sie ist seit August 2008 abgeschafft. Bei Liegenschaften fällt aber Grunderwerbsteuer an.' },
    ],
  },
  untermietvertrag: {
    perex: 'Wenn Sie als Hauptmieter ein Zimmer oder die ganze Wohnung untervermieten. Mit Dauer, Untermietzins in Euro, Kaution und Hinweisen zu § 11 MRG.',
    obsahPopis: 'Fünf Abschnitte: Parteien, Mietgegenstand, Dauer, Zins und Kaution, Schluss.',
    kroky: [P('Hauptmietvertrag prüfen', 'Steht dort ein Untermietverbot?'), P('Zimmer oder Wohnung', 'Mietgegenstand und Mitbenützung festlegen.'), P('Unterschreiben', 'Zwei Exemplare.')],
    online: ['Untermietzins in Worten', 'Befristung bis zum Ende der Hauptmiete', 'PDF und Word'],
    hodiSe: ['Sie vermieten ein Zimmer Ihrer Mietwohnung unter', 'Sie geben die Wohnung für einen Auslandsaufenthalt befristet weiter'],
    nehodiSe: ['Sie sind Eigentümer – nehmen Sie den Mietvertrag Wohnung'],
    po: [P('Vermieter informieren', 'Untermiete am besten schriftlich anzeigen.'), P('Meldezettel', 'Der Untermieter meldet sich binnen drei Tagen an.')],
    faq: [
      { q: 'Darf der Vermieter die Untermiete verbieten?', a: 'Im Anwendungsbereich des MRG wirkt ein vertragliches Verbot nur, wenn ein wichtiger Grund vorliegt, etwa ein unverhältnismäßig hoher Untermietzins (§ 11 MRG).' },
      { q: 'Kann mir wegen der Untermiete gekündigt werden?', a: 'Ja, wenn Sie die ganze Wohnung weitergeben und sie selbst nicht brauchen oder einen überhöhten Untermietzins verlangen (§ 30 Abs. 2 Z 4 MRG).' },
      { q: 'Muss sich der Untermieter melden?', a: 'Ja. Wer in Österreich Unterkunft nimmt, muss sich binnen drei Tagen beim Meldeamt anmelden; der Hauptmieter unterschreibt dafür als Unterkunftgeber.' },
    ],
  },
  leihvertrag: {
    perex: 'Wenn Sie etwas unentgeltlich verborgen – Anhänger, Werkzeug, Auto. Der Vertrag hält Zustand, Rückgabe und Haftung fest (§§ 971 ff. ABGB).',
    obsahPopis: 'Leihe mit Sache, Zustand, Zweck und Rückgabe.',
    kroky: [P('Sache beschreiben', 'Zustand und Wert notieren.'), P('Rückgabe festlegen', 'Datum oder nach Gebrauch.'), P('Gemeinsam prüfen', 'Bei Übergabe und Rückgabe.')],
    online: ['Erinnerung an die Rückgabe (.ics)', 'Wert der Sache in Worten', 'PDF und Word'],
    hodiSe: ['Sie verborgen etwas an Freunde oder Nachbarn', 'Sie wollen den Zustand vor der Übergabe festhalten'],
    nehodiSe: ['Sie verlangen ein Entgelt – dann ist es ein Mietvertrag'],
    po: [P('Fotos', 'Zustand bei der Übergabe fotografieren.'), P('Rückgabe', 'Sache gemeinsam ansehen.')],
    faq: [
      { q: 'Was ist der Unterschied zur Miete?', a: 'Die Leihe ist unentgeltlich (§ 971 ABGB). Sobald für die Nutzung gezahlt wird, ist es eine Miete.' },
      { q: 'Haftet der Entlehner für Schäden?', a: 'Er muss die Sache sorgfältig verwenden und nur zum vereinbarten Zweck. Für Schäden aus vertragswidrigem Gebrauch oder Weitergabe haftet er auch bei Zufall (§ 979 ABGB).' },
      { q: 'Wann muss die Sache zurück?', a: 'Zum vereinbarten Termin, sonst sobald der Zweck erfüllt ist. Ist nichts vereinbart, kann der Verleiher sie jederzeit zurückfordern.' },
    ],
  },
  'ruecktritt-widerruf': {
    perex: 'Wenn Sie innerhalb von 14 Tagen von einem Online- oder Telefonkauf zurücktreten wollen. Das Formular entspricht dem Muster-Widerrufsformular des FAGG.',
    obsahPopis: 'Rücktrittserklärung mit Bestellung, Datum und Konto für die Rückzahlung.',
    kroky: [P('Bestellung eintragen', 'Bestellnummer und Datum der Lieferung.'), P('Rechtzeitig senden', 'Vor Ablauf der 14 Tage, per E-Mail genügt.'), P('Ware zurückschicken', 'Binnen 14 Tagen nach dem Rücktritt.')],
    online: ['Fristen automatisch berechnet', 'Text nach dem Muster des FAGG', 'PDF und Word'],
    hodiSe: ['Sie haben online, telefonisch oder an der Haustür gekauft', 'seit der Lieferung sind höchstens 14 Tage vergangen'],
    nehodiSe: ['die Ware ist mangelhaft – dafür die Mängelrüge', 'Sie haben im Geschäft gekauft – Umtausch nur nach Kulanz'],
    po: [P('Nachweis sichern', 'Sendebestätigung oder Einschreibebeleg aufheben.'), P('Rückzahlung prüfen', 'Der Händler zahlt binnen 14 Tagen zurück.')],
    faq: [
      { q: 'Ab wann laufen die 14 Tage?', a: 'Bei Waren ab dem Tag, an dem Sie die Ware erhalten haben (§ 11 FAGG). Es genügt, die Erklärung vor Ablauf abzusenden.' },
      { q: 'Was, wenn ich nicht über das Rücktrittsrecht informiert wurde?', a: 'Dann verlängert sich die Frist um bis zu zwölf Monate (§ 12 FAGG).' },
      { q: 'Wer zahlt die Rücksendung?', a: 'Sie, wenn der Händler Sie vorher darüber informiert hat. Die Kosten der Standardlieferung zum Kunden muss er zurückzahlen.' },
    ],
  },
  erklaerung: {
    perex: 'Eine schriftliche Bestätigung von Tatsachen für Hausverwaltung, Schule, Bank oder Arbeitgeber – etwa wer in der Wohnung lebt oder dass Sie eine Leistung nicht bezogen haben.',
    obsahPopis: 'Eine kurze Erklärung mit Ihren Daten, dem Empfänger und dem Inhalt.',
    kroky: [P('Inhalt formulieren', 'Nur Tatsachen, die Sie selbst wissen.'), P('Empfänger nennen', 'Für welche Stelle die Erklärung ist.'), P('Unterschreiben', 'Eigenhändig oder mit ID Austria.')],
    online: ['Vorlage für freien Text', 'Unterschrift am Bildschirm', 'PDF und Word'],
    hodiSe: ['eine Stelle verlangt eine einfache schriftliche Bestätigung von Ihnen'],
    nehodiSe: ['das Amt hat ein eigenes Formular', 'eine Unterschriftsbeglaubigung durch Notar oder Gericht ist verlangt'],
    po: [P('Kopie behalten', 'Für Rückfragen aufbewahren.')],
    faq: [
      { q: 'Ist das eine eidesstattliche Erklärung?', a: 'Nein. In Österreich gibt es keine allgemeine eidesstattliche Erklärung wie in Deutschland. Diese Vorlage ist eine einfache schriftliche Bestätigung.' },
      { q: 'Wann brauche ich eine Beglaubigung?', a: 'Wenn die Stelle die Echtheit der Unterschrift bestätigt haben will. Das machen Notar oder Bezirksgericht – oder Sie unterschreiben elektronisch mit ID Austria, wo das akzeptiert wird.' },
      { q: 'Was passiert bei falschen Angaben?', a: 'Je nach Empfänger kann das zivil- oder strafrechtliche Folgen haben, etwa wenn dadurch jemand getäuscht und geschädigt wird. Schreiben Sie nur, was zutrifft.' },
    ],
  },
  'aufloesung-mietvertrag': {
    obsahPopis: 'Vereinbarung mit Endtermin, Rückgabe, Kaution und Betriebskosten.',
    kroky: [P('Termin vereinbaren', 'Ende des Mietverhältnisses und Rückgabe.'), P('Kaution regeln', 'Wann und wohin sie zurückgezahlt wird.'), P('Alle unterschreiben', 'Alle Mieter und Vermieter.')],
    online: ['Erinnerungen an Endtermin und Übergabe (.ics)', 'Übergabeprotokoll übernimmt die Daten', 'PDF und Word'],
    hodiSe: ['Sie wollen vor Ende der Befristung oder ohne Kündigungsfrist ausziehen', 'der Vermieter ist einverstanden'],
    nehodiSe: ['der Vermieter stimmt nicht zu – dann bleibt nur die Kündigung'],
    po: [P('Übergabeprotokoll', 'Zählerstände und Zustand bei der Rückgabe festhalten.'), P('Ummelden', 'Binnen drei Tagen nach dem Auszug abmelden oder ummelden.')],
    faq: [
      { q: 'Wie kann ich aus einem befristeten Mietvertrag früher raus?', a: 'Nach einem Jahr Mietdauer können Sie unter dem MRG mit dreimonatiger Frist zum Monatsletzten kündigen (§ 29 Abs. 2 MRG). Früher oder schneller geht es nur einvernehmlich – genau dafür ist diese Vorlage.' },
      { q: 'Wann bekomme ich die Kaution zurück?', a: 'Der Vermieter muss sie nach Ende des Mietverhältnisses unverzüglich samt Zinsen zurückzahlen, soweit er keine berechtigten Forderungen hat (§ 16b MRG).' },
      { q: 'Braucht es eine bestimmte Form?', a: 'Nein, aber schriftlich ist die Auflösung beweisbar. Alle Mieter und Vermieter sollten unterschreiben.' },
    ],
  },
  'vollmacht-zulassung': {
    obsahPopis: 'Vollmacht für die Zulassungsstelle mit Fahrzeugdaten.',
    kroky: [P('Fahrzeug eintragen', 'Kennzeichen und Fahrgestellnummer.'), P('Vorgang wählen', 'Anmelden, abmelden oder ummelden.'), P('Unterschreiben', 'Original dem Bevollmächtigten mitgeben.')],
    online: ['Daten aus dem Kaufvertrag übernommen', 'Ab-, An- und Ummeldung', 'PDF und Word'],
    po: [P('Zur Zulassungsstelle', 'Die Zulassungsstellen sind bei den Kfz-Versicherern.'), P('Ausweis mitnehmen', 'Bevollmächtigter mit Lichtbildausweis, Kopie des Ausweises des Vollmachtgebers.')],
    faq: [
      { q: 'Wo werden Fahrzeuge in Österreich zugelassen?', a: 'Bei den Zulassungsstellen, die die Kfz-Versicherer im Auftrag der Behörde betreiben. Mit Vollmacht kann ein anderer den Weg erledigen.' },
      { q: 'Was braucht der Bevollmächtigte?', a: 'Die unterschriebene Vollmacht, seinen Lichtbildausweis, eine Ausweiskopie des Zulassungsbesitzers und die Fahrzeugpapiere; für die Anmeldung zusätzlich die Versicherungsbestätigung.' },
      { q: 'Kann der Käufer das Auto direkt ummelden?', a: 'Ja, wenn die Kennzeichen beim Fahrzeug bleiben sollen und der Verkäufer zustimmt. Sonst meldet der Verkäufer ab und der Käufer neu an.' },
    ],
  },
  'kaufvertrag-motorrad': {
    obsahPopis: 'Kaufvertrag für ein Zweirad oder Quad mit Zubehör und Rahmennummer.',
    kroky: [P('Rahmennummer prüfen', 'Mit Typenschein und Zulassungsschein vergleichen.'), P('Zubehör auflisten', 'Koffer, Auspuff, Helm, zweiter Schlüssel.'), P('Abmelden', 'Kennzeichen abnehmen oder Ummeldung vereinbaren.')],
    online: ['Felder für Zubehör und Umbauten', 'Betrag in Worten automatisch', 'PDF und Word'],
    po: [P('Kennzeichen', 'Der Verkäufer meldet ab oder der Käufer meldet um.'), P('Pickerl notieren', 'Bis wann das Gutachten nach § 57a KFG gilt.')],
  },
};

/** Doplní vlastní texty, pokud pro slug existují; dotaz na ukládání údajů zůstává poslední. */
export function vlastni(stranka: StrankaDokumentu, slug: string): StrankaDokumentu {
  const e = EIGEN[slug];
  if (!e) return stranka;
  const staraFaq = stranka.landing.faq ?? [];
  const priv = staraFaq.filter((f) => f.q.startsWith('Speichern'));
  const faq = e.faq ? [...e.faq, ...priv] : staraFaq;
  stranka.landing = { ...stranka.landing, ...e, faq };
  return stranka;
}
