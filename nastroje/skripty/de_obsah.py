import json
D='/home/claude/dokuio.com/src/obsah/de/'
def js(v): return json.dumps(v, ensure_ascii=False, indent=2).replace('\n','\n  ')
docs=[
 dict(file='kaufvertrag-gebrauchtwagen', imp='kaufvertragGebrauchtwagen', src='kaufvertrag-gebrauchtwagen',
  nazev='Kaufvertrag Gebrauchtwagen', nazevA='Kaufvertrag für Gebrauchtwagen',
  katalog=dict(popis='Privatverkauf eines gebrauchten Autos.', kategorie='auto', ilustrace='auto', slova=['Auto verkaufen','Autokauf','Kaufvertrag','Gebrauchtwagen','Pkw','privat','car']),
  souvisejici='auto',
  landing=dict(title='Kaufvertrag Gebrauchtwagen {rok} – Vorlage kostenlos als PDF',
   description='Kostenloser Kaufvertrag für Gebrauchtwagen von privat: FIN, Kilometerstand, Unfallschäden, Haftungsausschluss nach § 444 BGB, Übergabe. PDF und Word.',
   perex='Privatverkauf eines gebrauchten Autos nach BGB – mit Kilometerstand, Unfallschäden und rechtssicher formuliertem Haftungsausschluss.',
   obsahPopis='Sechs Paragrafen nach §§ 433 ff. BGB.',
   obsah=[dict(nazev='Vertragsparteien',popis='Verkäufer und Käufer.'),dict(nazev='Kaufgegenstand',popis='Fahrzeug, FIN, Kennzeichen.'),dict(nazev='Zustand',popis='Kilometerstand, Unfälle, Mängel.'),dict(nazev='Sachmängelhaftung',popis='Ausschluss oder gesetzlich.'),dict(nazev='Preis und Übergabe',popis='Zahlung, Eigentumsvorbehalt, Uhrzeit.'),dict(nazev='Ummeldung',popis='Behörde und Versicherung.')],
   kroky=[dict(nazev='Angaben eintragen',popis='Parteien, Fahrzeug, Preis.'),dict(nazev='Text prüfen',popis='Jeder Absatz ist anpassbar.'),dict(nazev='Herunterladen und unterschreiben',popis='PDF oder Word, zwei Exemplare.')],
   online=['Betrag in Worten automatisch','FIN-Prüfung','Unterschrift auf dem Bildschirm','Download als PDF und Word'],
   hodiSe=['Sie verkaufen oder kaufen ein gebrauchtes Auto von privat','Sie wollen Kilometerstand und Unfälle schriftlich festhalten'],
   nehodiSe=['Kauf beim Händler – dort gilt Verbraucherrecht mit Gewährleistung','Leasingfahrzeug – erst ablösen'],
   po=[dict(nazev='Veräußerungsanzeige',popis='Verkäufer meldet den Verkauf unverzüglich der Zulassungsbehörde.'),dict(nazev='Versicherung',popis='Verkauf dem Kfz-Versicherer melden.'),dict(nazev='Ummeldung',popis='Käufer meldet das Fahrzeug auf sich um.')],
   faq=[dict(q='Darf ich als Privatperson die Gewährleistung ausschließen?',a='Ja. Der Ausschluss gilt aber nicht für arglistig verschwiegene Mängel und vereinbarte Eigenschaften wie „unfallfrei“ (§ 444 BGB).'),dict(q='Was muss ich nach dem Verkauf melden?',a='Die Veräußerung unverzüglich der Zulassungsbehörde (§ 15 FZV) und der Kfz-Versicherung.'),dict(q='Speichern Sie meine Daten?',a='Nein. Der Vertrag entsteht ausschließlich in Ihrem Browser.')],
   zakony='Die Vorlage beruht auf §§ 433 ff. und § 444 BGB sowie § 15 FZV.', souvisejiciPopis='Weitere Dokumente, ebenfalls kostenlos.'),
  vytvorit=dict(title='Kaufvertrag Gebrauchtwagen online ausfüllen – PDF kostenlos', description='Assistent für den privaten Autokaufvertrag nach deutschem Recht. PDF oder Word kostenlos.', podnadpis='Kostenlos · Ergebnis als PDF und Word · dauert ca. 5 Minuten')),
 dict(file='darlehensvertrag', imp='darlehensvertrag', src='darlehensvertrag',
  nazev='Privater Darlehensvertrag', nazevA='Darlehensvertrag',
  katalog=dict(popis='Geld unter Freunden oder in der Familie leihen, auch in Raten.', kategorie='geld', ilustrace='pujcka', slova=['Darlehen','Geld leihen','Privatkredit','Raten','loan']),
  souvisejici='geld',
  landing=dict(title='Privater Darlehensvertrag {rok} – Vorlage kostenlos mit Tilgungsplan',
   description='Kostenloser privater Darlehensvertrag: Betrag, Zinsen, Rückzahlung in einer Summe oder in Raten mit Tilgungsplan. PDF und Word.',
   perex='Geld unter Freunden schwarz auf weiß. In einer Summe oder in Raten – den Tilgungsplan fügen wir automatisch an.',
   obsahPopis='Fünf Paragrafen nach §§ 488 ff. BGB.',
   obsah=[dict(nazev='Parteien',popis='Darlehensgeber und -nehmer.'),dict(nazev='Darlehen',popis='Betrag und Auszahlung.'),dict(nazev='Zinsen',popis='Zinslos oder mit Zinsen.'),dict(nazev='Rückzahlung',popis='Einmal oder in Raten.'),dict(nazev='Schluss',popis='Schriftform.')],
   kroky=[dict(nazev='Betrag eintragen',popis='Und Auszahlung wählen.'),dict(nazev='Rückzahlung festlegen',popis='Einmal oder in Raten.'),dict(nazev='Unterschreiben',popis='Zwei Exemplare.')],
   online=['Tilgungsplan als Anlage','Raten-Erinnerungen im Kalender','Betrag in Worten automatisch','Download als PDF und Word'],
   hodiSe=['Sie leihen Freunden oder Familie Geld','Sie möchten Raten mit klaren Terminen'],
   nehodiSe=['gewerbliche Kredite oder Verbraucherdarlehen von Unternehmen'],
   po=[dict(nazev='Auszahlung',popis='Per Überweisung oder gegen Quittung.')],
   faq=[dict(q='Was gilt ohne festen Rückzahlungstermin?',a='Dann kann das Darlehen mit einer Frist von drei Monaten gekündigt werden (§ 488 Abs. 3 BGB).'),dict(q='Speichern Sie meine Daten?',a='Nein. Der Vertrag entsteht ausschließlich in Ihrem Browser.')],
   zakony='Die Vorlage beruht auf §§ 488 ff. BGB.', souvisejiciPopis='Weitere Dokumente, ebenfalls kostenlos.'),
  vytvorit=dict(title='Darlehensvertrag online ausfüllen – PDF kostenlos', description='Privater Darlehensvertrag mit Tilgungsplan. PDF oder Word kostenlos.', podnadpis='Kostenlos · Ergebnis als PDF und Word · dauert ca. 3 Minuten')),
 dict(file='quittung', imp='quittung', src='quittung',
  nazev='Quittung', nazevA='Quittung',
  katalog=dict(popis='Empfangsbestätigung für Bargeld.', kategorie='geld', ilustrace='penize', slova=['Quittung','Empfangsbestätigung','Bargeld','Barzahlung','receipt']),
  souvisejici='geld',
  landing=dict(title='Quittung {rok} – Vorlage kostenlos als PDF',
   description='Kostenlose Quittung für Barzahlungen: Betrag in Ziffern und Worten, Zahlungsgrund. PDF und Word.',
   perex='Einfacher Nachweis, dass Bargeld übergeben wurde. Den Betrag in Worten ergänzen wir.',
   obsahPopis='Kurze Empfangsbestätigung mit Zahlungsgrund.',
   obsah=[dict(nazev='Quittung',popis='Wer, wem, wie viel, wofür.')],
   kroky=[dict(nazev='Ausfüllen',popis='Namen, Betrag, Grund.'),dict(nazev='Zählen',popis='Geld vor der Unterschrift.'),dict(nazev='Unterschreiben',popis='Jede Seite behält eine Kopie.')],
   online=['Betrag in Worten automatisch','Unterschrift auf dem Bildschirm','Download als PDF und Word'],
   hodiSe=['Barzahlung beim Autokauf','Übergabe von Darlehen, Anzahlung oder Kaution'],
   nehodiSe=['Zahlung per Überweisung – Nachweis ist der Kontoauszug'],
   po=[dict(nazev='Kopie',popis='Jede Seite behält ein unterschriebenes Exemplar.')],
   faq=[dict(q='Kann ich eine Quittung verlangen?',a='Ja, wer eine Leistung erbringt, kann vom Gläubiger eine Quittung verlangen (§ 368 BGB).'),dict(q='Speichern Sie meine Daten?',a='Nein. Die Quittung entsteht ausschließlich in Ihrem Browser.')],
   zakony='Die Vorlage beruht auf § 368 BGB.', souvisejiciPopis='Weitere Dokumente, ebenfalls kostenlos.'),
  vytvorit=dict(title='Quittung online ausfüllen – PDF kostenlos', description='Quittung für Barzahlung mit Betrag in Worten. PDF oder Word kostenlos.', podnadpis='Kostenlos · Ergebnis als PDF und Word · dauert ca. 1 Minute')),
]
for d in docs:
    open(D+d['file']+'.ts','w').write(f"""import type {{ StrankaDokumentu }} from '../typy';
import {{ {d['imp']} as sablona }} from '../../sablony/de/{d['src']}';

const stranka: StrankaDokumentu = {{
  sablona,
  nazev: {json.dumps(d['nazev'],ensure_ascii=False)},
  nazevA: {json.dumps(d['nazevA'],ensure_ascii=False)},
  katalog: {js(d['katalog'])},
  souvisejici: '{d['souvisejici']}',
  landing: {js(d['landing'])},
  vytvorit: {js(d['vytvorit'])},
}};

export default stranka;
""")
print('ok')
