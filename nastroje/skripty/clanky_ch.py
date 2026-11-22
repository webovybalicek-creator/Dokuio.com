import json, sys
sys.path.insert(0, '/home/claude/skripty')
from clanky2 import fm  # noqa: E402 (spustí i generování dávky 2 – idempotentní)
BASE = '/home/claude/dokuio.com/src/content/poradna/ch'
C = [
dict(slug='auto-privat-verkaufen-schweiz',
  title='Auto privat verkaufen in der Schweiz – Schritt für Schritt',
  nazev='Auto privat verkaufen (Schweiz)',
  description='Occasion privat verkaufen: Kaufvertrag nach OR, Gewährleistungsausschluss, sichere Zahlung, Schilder, Fahrzeugausweis und Versicherung. Mit Vorlagen.',
  perex='In der Schweiz bleiben die Kontrollschilder beim Verkäufer – das ist der grösste Unterschied zu Deutschland und Österreich. So verkaufen Sie Ihr Auto sicher.',
  kategorie='auto', tema='auto-verkaufen',
  dokumenty=['kaufvertrag-auto', 'uebergabeprotokoll-fahrzeug', 'quittung', 'vollmacht-strassenverkehrsamt'],
  slova=['Auto verkaufen', 'Occasion', 'Kaufvertrag Auto', 'Kontrollschilder', 'Fahrzeugausweis', 'Gewährleistung', 'Strassenverkehrsamt'],
  zdroje=[('Obligationenrecht, Art. 184 ff. und 197 ff. (Fedlex)', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de'),
          ('Fahrzeugausweis (ch.ch)', 'https://www.ch.ch/de/ausweise-und-dokumente/fahrzeugausweis'),
          ('Fahrzeug wechseln – Strassenverkehrsamt Kanton Zürich', 'https://www.zh.ch/de/mobilitaet/fahrzeuge-kontrollschilder/fahrzeugwechsel.html')],
  faq=[('Gehören die Kontrollschilder zum Auto?', 'Nein. In der Schweiz gehören sie dem Halter. Der Verkäufer schraubt sie ab und verwendet sie für ein anderes Fahrzeug oder gibt sie beim Strassenverkehrsamt ab.'),
       ('Darf ich die Gewährleistung ausschliessen?', 'Ja, unter Privaten ist das üblich. Der Ausschluss gilt aber nicht für Mängel, die Sie arglistig verschweigen (Art. 199 OR).'),
       ('Wie lange hat der Käufer Zeit, Mängel zu melden?', 'Er muss das Fahrzeug nach der Übergabe prüfen und Mängel sofort rügen (Art. 201 OR). Die Ansprüche verjähren zwei Jahre nach der Übergabe – sofern die Gewährleistung nicht wegbedungen wurde.')],
  body='''Ein Occasionsauto von privat zu verkaufen ist in der Schweiz einfach – wenn Sie drei Dinge richtig machen: einen schriftlichen **Kaufvertrag**, eine **sichere Zahlung** und die **Schilder** behalten.

## 1. Unterlagen bereitlegen

- **Fahrzeugausweis** (grauer Ausweis) – darin stehen Stammnummer (Feld 18) und Fahrgestellnummer (Feld 23),
- Serviceheft und Bericht der letzten Fahrzeugprüfung (MFK),
- alle Schlüssel und Zubehör (Winterräder, Ladekabel).

Bei einem **Leasingfahrzeug** müssen Sie zuerst mit der Leasinggesellschaft klären, ob und wie Sie verkaufen dürfen.

## 2. Kaufvertrag aufsetzen

Der Kaufvertrag richtet sich nach **Art. 184 ff. Obligationenrecht (OR)**. Hinein gehören:

- Namen, Adressen und Ausweisnummern beider Parteien,
- Marke, Typ, **Fahrgestellnummer** und **Stammnummer**, 1. Inverkehrsetzung,
- **Kilometerstand**, bekannte **Unfälle und Mängel**,
- Kaufpreis, Zahlungsart, Datum und **Uhrzeit** der Übergabe.

### Gewährleistung wegbedingen

Unter Privaten ist es üblich, die Gewährleistung auszuschliessen („wie besichtigt und Probe gefahren“). Das ist zulässig – aber **nicht für Mängel, die Sie arglistig verschweigen** (Art. 199 OR). Tragen Sie deshalb alles ehrlich ein, was Sie wissen.

## 3. Sicher bezahlen lassen

- Am sichersten ist eine **Überweisung**, die vor der Übergabe auf Ihrem Konto eingeht.
- Bei **Barzahlung** das Geld vor Ort zählen und eine **Quittung** unterschreiben.
- Geben Sie Auto und Fahrzeugausweis erst heraus, wenn das Geld wirklich da ist.

## 4. Übergabe dokumentieren

Ein **Übergabeprotokoll** mit Kilometerstand, Tankfüllung, Schäden und genauer Uhrzeit beweist später, wer das Auto wann hatte – wichtig bei Bussen oder Unfällen kurz nach dem Verkauf. Fotografieren Sie Auto und Tacho.

## 5. Schilder, Fahrzeugausweis und Versicherung

Das ist der wichtigste Schweizer Unterschied:

- Die **Kontrollschilder gehören dem Halter**, nicht dem Auto. Sie schrauben sie ab und behalten sie.
- Den **annullierten Fahrzeugausweis** geben Sie dem Käufer mit – er braucht ihn zum Einlösen.
- Informieren Sie Ihre **Motorfahrzeugversicherung** über den Verkauf.
- Lösen Sie innert kurzer Zeit kein neues Fahrzeug ein, geben Sie die Schilder beim Strassenverkehrsamt ab.

Der **Käufer** löst das Auto mit eigenem Versicherungsnachweis beim Strassenverkehrsamt seines Kantons ein, bevor er damit fährt. Ob eine neue Fahrzeugprüfung nötig ist, entscheidet der Kanton.

## Zusammenfassung

Schriftlicher Kaufvertrag mit ehrlichen Angaben, Geld vor der Übergabe, Übergabeprotokoll – und die Schilder bleiben bei Ihnen. Mit dem Paket „Autoverkauf“ erstellen Sie Kaufvertrag, Protokoll, Vollmacht und Quittung in einem Durchgang.
'''),
dict(slug='schuldanerkennung-betreibung',
  title='Schuldanerkennung und Betreibung: So kommen Sie in der Schweiz zu Ihrem Geld',
  nazev='Schuldanerkennung und Betreibung',
  description='Warum eine unterschriebene Schuldanerkennung so wertvoll ist: Rechtsvorschlag, provisorische Rechtsöffnung nach Art. 82 SchKG, Verjährung und Raten.',
  perex='Wer privat Geld verleiht, sollte sich die Schuld unterschreiben lassen. Mit einer Schuldanerkennung lässt sich ein Rechtsvorschlag in der Betreibung rasch beseitigen.',
  kategorie='geld', tema='schulden',
  dokumenty=['schuldanerkennung', 'darlehensvertrag', 'quittung'],
  slova=['Schuldanerkennung', 'Betreibung', 'Rechtsvorschlag', 'Rechtsöffnung', 'Zahlungsbefehl', 'Verjährung', 'Raten'],
  zdroje=[('Obligationenrecht, Art. 17, 127 ff. und 135 (Fedlex)', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de'),
          ('Bundesgesetz über Schuldbetreibung und Konkurs, Art. 74 und 82–83 (Fedlex)', 'https://www.fedlex.admin.ch/eli/cc/11/529_488_529/de')],
  faq=[('Was ist eine provisorische Rechtsöffnung?', 'Erhebt der Schuldner gegen den Zahlungsbefehl Rechtsvorschlag, kann der Gläubiger mit einer unterschriebenen Schuldanerkennung beim Gericht die provisorische Rechtsöffnung verlangen. Das geht im summarischen Verfahren und ist viel schneller als eine Klage.'),
       ('Wie lange kann ich eine Schuld eintreiben?', 'Die meisten Forderungen, auch Darlehen, verjähren nach zehn Jahren (Art. 127 OR). Eine Schuldanerkennung oder eine Betreibung unterbricht die Verjährung, sie beginnt dann neu.'),
       ('Muss der Gläubiger die Schuldanerkennung auch unterschreiben?', 'Nein, entscheidend ist die Unterschrift des Schuldners. Werden Raten vereinbart, ist die Unterschrift beider Seiten sinnvoll.')],
  body='''Eine **Schuldanerkennung** ist ein kurzes Dokument, in dem der Schuldner bestätigt, wem er wie viel schuldet und wann er zahlt (Art. 17 OR). In der Schweiz hat sie einen besonderen Wert: Sie ist ein **Rechtsöffnungstitel** in der Betreibung.

## Was hinein gehört

- Namen und Adressen von Schuldner und Gläubiger,
- **Betrag** in Ziffern und Worten,
- **Grund** der Schuld (z. B. Darlehen vom 3. März 2026),
- **Fälligkeit** – ein Datum oder ein Ratenplan,
- **Unterschrift des Schuldners**.

Je klarer Betrag und Fälligkeit, desto besser. Ein Gericht prüft bei der Rechtsöffnung genau, ob sich daraus eine bestimmte, fällige Schuld ergibt.

## So läuft eine Betreibung ab

1. Der Gläubiger stellt beim **Betreibungsamt** am Wohnort des Schuldners ein Betreibungsbegehren.
2. Der Schuldner erhält einen **Zahlungsbefehl**.
3. Er kann innert **10 Tagen Rechtsvorschlag** erheben (Art. 74 SchKG) – ohne Begründung.
4. Jetzt zeigt sich der Wert der Schuldanerkennung: Mit ihr verlangt der Gläubiger beim Gericht die **provisorische Rechtsöffnung** (Art. 82 SchKG). Ohne sie bleibt oft nur eine ordentliche Klage.
5. Der Schuldner kann innert **20 Tagen** auf Aberkennung klagen (Art. 83 SchKG); tut er das nicht, wird die Rechtsöffnung definitiv und die Betreibung geht weiter.

## Verjährung im Blick

- Die meisten Forderungen, auch private Darlehen, verjähren nach **zehn Jahren** (Art. 127 OR). Für bestimmte Forderungen wie Mietzinse oder Zinsen gelten **fünf Jahre** (Art. 128 OR).
- Eine **Schuldanerkennung**, eine **Betreibung** oder eine **Klage** unterbrechen die Verjährung (Art. 135 OR) – sie beginnt neu.

## Raten vereinbaren

Kann der Schuldner nicht sofort zahlen, schreiben Sie einen **Ratenplan** in die Schuldanerkennung: Höhe, Fälligkeitstag und was passiert, wenn zwei Raten ausbleiben (dann wird der Rest sofort fällig). Bestätigen Sie den Ratenplan mit Ihrer eigenen Unterschrift.

## Zusammenfassung

Lassen Sie private Schulden immer schriftlich bestätigen. Eine unterschriebene Schuldanerkennung mit klarem Betrag und Fälligkeit unterbricht die Verjährung und macht die Betreibung schnell und günstig.
'''),
]
for c in C:
    open(f"{BASE}/{c['slug']}.md", 'w', encoding='utf-8').write(fm(c) + '\n' + c['body'].lstrip())
    assert len(c['description']) <= 170
print(len(C))
