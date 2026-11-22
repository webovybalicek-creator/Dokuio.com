import json
ROOT='/home/claude/dokuio.com/src/obsah/at'
def zapis(slug, de_slug, sab_file, sab_name, landing_over, vytvorit_over, extra=''):
    s=f"""import type {{ StrankaDokumentu }} from '../typy';
import de from '../de/{de_slug}';
import {{ {sab_name} as sablona }} from '../../sablony/at/{sab_file}';

const stranka: StrankaDokumentu = {{
  ...de,
  sablona,{extra}
  landing: {{ ...de.landing, ...{json.dumps(landing_over, ensure_ascii=False, indent=2)} }},
  vytvorit: {{ ...de.vytvorit, ...{json.dumps(vytvorit_over, ensure_ascii=False)} }},
}};

export default stranka;
"""
    open(f'{ROOT}/{slug}.ts','w').write(s); print('ok',slug)
P='Nein. Das Dokument entsteht ausschließlich in Ihrem Browser.'
zapis('uebergabeprotokoll-fahrzeug','uebergabeprotokoll-fahrzeug','uebergabeprotokoll-fahrzeug','uebergabeprotokollFahrzeugAT',
 {'title':'Übergabeprotokoll Kfz Österreich {rok} – Vorlage kostenlos als PDF','po':[{'nazev':'Abmeldung','popis':'Verkäufer meldet ab, Käufer meldet an.'}],'zakony':'Kein gesetzliches Formular; ergänzt den Kaufvertrag nach §§ 1053 ff. ABGB.'},
 {'title':'Übergabeprotokoll Kfz (Österreich) online ausfüllen – PDF kostenlos'})
zapis('vollmacht-zulassung','vollmacht-zulassung','vollmacht-zulassung','vollmachtZulassungAT',
 {'title':'Vollmacht Zulassungsstelle Österreich {rok} – Vorlage kostenlos','description':'Kostenlose Vollmacht für An-, Ab- oder Ummeldung bei einer Zulassungsstelle in Österreich. Mit Liste der Unterlagen.',
  'perex':'Damit eine andere Person Ihr Fahrzeug bei einer Zulassungsstelle an-, ab- oder ummeldet. Mit Liste, was sonst noch mit muss.',
  'nehodiSe':['Fälle, in denen die Zulassungsstelle ein eigenes Formular verlangt – vorher nachfragen'],
  'po':[{'nazev':'Zulassungsstelle','popis':'Anmeldung im Bezirk des Hauptwohnsitzes, Abmeldung bei jeder Zulassungsstelle.'}],
  'faq':[{'q':'Was braucht die bevollmächtigte Person?','a':'Die Vollmacht, ihren Lichtbildausweis und die Fahrzeugpapiere; bei der Anmeldung zusätzlich Versicherungsbestätigung, Kaufvertrag und § 57a-Gutachten, bei der Abmeldung die Kennzeichentafeln.'},{'q':'Speichern Sie meine Daten?','a':P}],
  'zakony':'Vertretung nach §§ 1002 ff. ABGB; Unterlagen nach oesterreich.gv.at.'},
 {'title':'Vollmacht Zulassungsstelle (Österreich) online ausfüllen – PDF kostenlos'})
zapis('vollmacht','vollmacht','vollmacht','vollmachtAT',
 {'title':'Vollmacht Österreich {rok} – Vorlage kostenlos als PDF','nehodiSe':['Vorsorgevollmacht für Krankheit oder Alter','Liegenschafts- oder Bankgeschäfte mit besonderer Form'],
  'faq':[{'q':'Muss die Vollmacht beglaubigt werden?','a':'Für alltägliche Erledigungen meist nicht. Für Grundbuch, Firmenbuch oder manche Banken ist eine Beglaubigung nötig.'},{'q':'Speichern Sie meine Daten?','a':P}],
  'zakony':'Die Vorlage beruht auf §§ 1002 ff. ABGB.'},
 {'title':'Vollmacht (Österreich) online ausfüllen – PDF kostenlos'})
zapis('schuldanerkenntnis','schuldanerkenntnis','schuldanerkenntnis','schuldanerkenntnisAT',
 {'title':'Schuldanerkenntnis Österreich {rok} – Vorlage kostenlos als PDF','description':'Kostenloses Schuldanerkenntnis nach österreichischem Recht: Grund und Höhe der Schuld, Zahlung auf einmal oder in Raten mit Tilgungsplan.',
  'faq':[{'q':'Braucht ein Schuldanerkenntnis eine Form?','a':'Keine besondere Form – schriftlich mit Unterschrift ist aber der beste Beweis.'},{'q':'Was passiert mit der Verjährung?','a':'Das Anerkenntnis unterbricht sie, die Frist beginnt neu (§ 1497 ABGB).'},{'q':'Speichern Sie meine Daten?','a':P}],
  'zakony':'Die Vorlage beruht auf dem ABGB, insbesondere § 1497.'},
 {'title':'Schuldanerkenntnis (Österreich) online ausfüllen – PDF kostenlos'})
zapis('schenkungsvertrag','schenkungsvertrag','schenkungsvertrag','schenkungsvertragAT',
 {'title':'Schenkungsvertrag Österreich {rok} – Vorlage kostenlos als PDF','description':'Kostenloser Schenkungsvertrag für Geld oder bewegliche Sachen mit wirklicher Übergabe – ohne Notariatsakt. Mit Hinweisen zur Schenkungsmeldung.',
  'perex':'Für Schenkungen, die sofort übergeben oder überwiesen werden. Mit Hinweisen zur Schenkungsmeldung beim Finanzamt.',
  'kroky':[{'nazev':'Ausfüllen','popis':'Den Betrag in Worten ergänzen wir.'},{'nazev':'Unterschreiben','popis':'Beide Seiten.'},{'nazev':'Melden','popis':'Über den Grenzen binnen drei Monaten ans Finanzamt.'}],
  'nehodiSe':['Schenkungsversprechen für später – braucht einen Notariatsakt','Liegenschaften'],
  'po':[{'nazev':'Finanzamt','popis':'Schenkungsmeldung prüfen (§ 121a BAO).'}],
  'faq':[{'q':'Brauche ich einen Notar?','a':'Nicht, wenn das Geschenk sofort übergeben wird. Ohne wirkliche Übergabe ist ein Notariatsakt nötig.'},{'q':'Gibt es eine Schenkungssteuer?','a':'Nein, aber eine Meldepflicht: zwischen Angehörigen über 50.000 € pro Jahr, sonst über 15.000 € in fünf Jahren.'},{'q':'Speichern Sie meine Daten?','a':P}],
  'zakony':'Die Vorlage beruht auf §§ 938 ff. ABGB und § 121a BAO.'},
 {'title':'Schenkungsvertrag (Österreich) online ausfüllen – PDF kostenlos'})
zapis('kaufvertrag-privat','kaufvertrag-privat','kaufvertrag-privat','kaufvertragPrivatAT',
 {'title':'Kaufvertrag privat Österreich {rok} – Vorlage kostenlos als PDF','nehodiSe':['Autos – dafür gibt es den Kaufvertrag Gebrauchtwagen','Verkäufe von Unternehmern an Verbraucher'],
  'faq':[{'q':'Darf ich die Gewährleistung ausschließen?','a':'Unter Privatpersonen ja – aber nicht für listig verschwiegene Mängel oder zugesicherte Eigenschaften.'},{'q':'Speichern Sie meine Daten?','a':P}],
  'zakony':'Die Vorlage beruht auf §§ 1053 ff. und §§ 922 ff. ABGB.'},
 {'title':'Kaufvertrag privat (Österreich) online ausfüllen – PDF kostenlos'})
zapis('ruecktritt-widerruf','widerruf','ruecktritt','ruecktrittAT',
 {'title':'Rücktritt vom Online-Kauf Österreich {rok} – Muster-Widerrufsformular','description':'Kostenloses Formular für den Rücktritt vom Online-Kauf nach dem FAGG: binnen 14 Tagen, ohne Begründung. PDF und Word.',
  'perex':'Online gekauft und doch nicht gewollt? Nach dem FAGG treten Sie innerhalb von 14 Tagen ohne Begründung zurück.',
  'faq':[{'q':'Muss ich einen Grund angeben?','a':'Nein.'},{'q':'Bis wann muss ich zurücktreten?','a':'14 Tage ab Erhalt der Ware; rechtzeitiges Absenden genügt.'},{'q':'Speichern Sie meine Daten?','a':P}],
  'zakony':'Die Vorlage beruht auf §§ 11–14 FAGG und dem Muster-Widerrufsformular (Anhang I Teil B FAGG).'},
 {'title':'Rücktritt Online-Kauf (Österreich) online ausfüllen – PDF','description':'Rücktritt vom Online-Kauf nach dem FAGG. PDF oder Word kostenlos.'},
 extra="\n  nazev: 'Rücktritt Online-Kauf',\n  nazevA: 'Rücktritt',")
zapis('maengelruege','maengelanzeige','maengelruege','maengelruegeAT',
 {'title':'Mängelrüge Österreich {rok} – Gewährleistung Vorlage kostenlos','description':'Kostenlose Mängelrüge nach dem VGG: defekte Ware reklamieren, Verbesserung oder Austausch verlangen, Frist setzen.',
  'perex':'Ware kaputt? Mit der Mängelrüge verlangen Sie Verbesserung oder Austausch und setzen eine Frist.',
  'po':[{'nazev':'Verjährung','popis':'Rechte verjähren drei Monate nach Ende der Gewährleistungsfrist.'}],
  'faq':[{'q':'Wie lange habe ich Gewährleistung?','a':'Zwei Jahre ab Übergabe, bei gebrauchten Sachen eventuell ein Jahr. Danach noch drei Monate, um sie gerichtlich geltend zu machen.'},{'q':'Wer muss beweisen, dass der Mangel schon da war?','a':'Im ersten Jahr wird es vermutet.'},{'q':'Speichern Sie meine Daten?','a':P}],
  'zakony':'Die Vorlage beruht auf dem Verbrauchergewährleistungsgesetz (VGG) und §§ 922 ff. ABGB.'},
 {'title':'Mängelrüge (Österreich) online ausfüllen – PDF kostenlos','description':'Mängelrüge mit Fristsetzung. PDF oder Word kostenlos.'},
 extra="\n  nazev: 'Mängelrüge',\n  nazevA: 'Mängelrüge',\n  katalog: { ...de.katalog, slova: ['Mängelrüge', 'Gewährleistung', 'Reklamation', 'VGG', 'defekt'] },")
