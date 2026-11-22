"""Stránky dokumentů pro Švýcarsko (src/obsah/ch/*.ts) – plné landing texty podle švýcarského práva (OR, SchKG)."""
import json, os

ROOT = '/home/claude/dokuio.com/src/obsah/ch'
os.makedirs(ROOT, exist_ok=True)
P = 'Nein. Das Dokument entsteht ausschliesslich in Ihrem Browser.'
ONLINE = ['Betrag in Worten automatisch', 'Unterschrift auf dem Bildschirm', 'Entwurf bleibt im Browser gespeichert', 'Download als PDF und Word']
KROKY = [{'nazev': 'Angaben eintragen', 'popis': 'Was Sie nicht wissen, bleibt als Linie.'},
         {'nazev': 'Text prüfen', 'popis': 'Vorschau neben dem Formular.'},
         {'nazev': 'Herunterladen und unterschreiben', 'popis': 'PDF oder Word.'}]


def it(*pary):
    return [{'nazev': a, 'popis': b} for a, b in pary]


def zapis(slug, sab_file, sab_name, d):
    stranka = {
        'nazev': d['nazev'], 'nazevA': d['nazevA'],
        'katalog': d['katalog'], 'souvisejici': d['souvisejici'],
        'landing': {
            'title': d['title'], 'description': d['description'], 'perex': d['perex'],
            'obsahPopis': d['obsahPopis'], 'obsah': d['obsah'], 'kroky': d.get('kroky', KROKY),
            'online': d.get('online', ONLINE), 'hodiSe': d['hodiSe'], 'nehodiSe': d['nehodiSe'],
            'po': d['po'], 'faq': d['faq'] + [{'q': 'Speichern Sie meine Daten?', 'a': P}], 'zakony': d['zakony'],
        },
        'vytvorit': d['vytvorit'],
    }
    assert len(d['description']) <= 165, (slug, len(d['description']))
    body = json.dumps(stranka, ensure_ascii=False, indent=2)[1:-1].strip()
    s = f"""import type {{ StrankaDokumentu }} from '../typy';
import {{ {sab_name} as sablona }} from '../../sablony/ch/{sab_file}';

const stranka: StrankaDokumentu = {{
  sablona,
  {body},
}};

export default stranka;
"""
    open(f'{ROOT}/{slug}.ts', 'w', encoding='utf-8').write(s)
    print('ok', slug)


zapis('kaufvertrag-auto', 'kaufvertrag-auto', 'kaufvertragAutoCH', dict(
    nazev='Kaufvertrag Auto', nazevA='Kaufvertrag für ein Auto',
    katalog={'popis': 'Privatverkauf eines Occasionsfahrzeugs.', 'kategorie': 'auto', 'ilustrace': 'auto',
             'slova': ['Auto verkaufen', 'Occasion', 'Autokauf', 'Kaufvertrag', 'Personenwagen', 'privat', 'car']},
    souvisejici='auto',
    title='Kaufvertrag Auto Schweiz {rok} – Vorlage kostenlos als PDF',
    description='Kostenloser Kaufvertrag für ein Occasionsfahrzeug von privat nach OR: Fahrgestellnummer, Kilometerstand, Unfälle, Gewährleistungsausschluss, Schilder. PDF und Word.',
    perex='Privatverkauf eines Occasionsautos nach Obligationenrecht – mit Kilometerstand, Unfallschäden, Gewährleistungsausschluss und Hinweisen zu Schildern und Einlösen.',
    obsahPopis='Sechs Artikel nach Art. 184 ff. OR.',
    obsah=it(('Vertragsparteien', 'Verkäufer und Käufer.'), ('Kaufgegenstand', 'Fahrgestellnummer, Stammnummer, MFK.'),
             ('Zustand', 'Kilometerstand, Unfälle, Mängel.'), ('Gewährleistung', 'Wegbedungen oder gesetzlich.'),
             ('Preis und Übergabe', 'Zahlung, Uhrzeit, Fahrzeugausweis.'), ('Schilder und Einlösen', 'Was Verkäufer und Käufer erledigen.')),
    hodiSe=['Sie verkaufen oder kaufen ein Occasionsauto von privat', 'Sie wollen Kilometerstand und Unfälle schriftlich festhalten'],
    nehodiSe=['Kauf beim Garagisten – dort gelten dessen Bedingungen und Garantie', 'Leasingfahrzeug – erst mit der Leasinggesellschaft klären'],
    po=it(('Schilder', 'Bleiben beim Verkäufer – für ein neues Auto verwenden oder abgeben.'),
          ('Versicherung', 'Verkäufer informiert seine Versicherung.'),
          ('Einlösen', 'Käufer löst das Auto mit Versicherungsnachweis beim Strassenverkehrsamt ein.')),
    faq=[{'q': 'Darf ich als Privatperson die Gewährleistung ausschliessen?', 'a': 'Ja, unter Privaten ist das üblich. Der Ausschluss gilt aber nicht für Mängel, die Sie arglistig verschweigen (Art. 199 OR).'},
         {'q': 'Gehen die Kontrollschilder mit dem Auto mit?', 'a': 'Nein. In der Schweiz gehören die Schilder dem Halter. Der Verkäufer behält sie, der Käufer braucht eigene.'},
         {'q': 'Was braucht der Käufer zum Einlösen?', 'a': 'Den Fahrzeugausweis, einen Versicherungsnachweis seiner Motorfahrzeugversicherung und einen Ausweis. Ob eine neue Fahrzeugprüfung nötig ist, regelt der Kanton.'}],
    zakony='Die Vorlage beruht auf Art. 184 ff. und Art. 197 ff. OR (Fedlex) und den Angaben der kantonalen Strassenverkehrsämter.',
    vytvorit={'title': 'Kaufvertrag Auto (Schweiz) online ausfüllen – PDF kostenlos', 'description': 'Privater Kaufvertrag für ein Occasionsauto nach Schweizer Recht. PDF oder Word kostenlos.'},
))

zapis('uebergabeprotokoll-fahrzeug', 'uebergabeprotokoll-fahrzeug', 'uebergabeprotokollFahrzeugCH', dict(
    nazev='Übergabeprotokoll Fahrzeug', nazevA='Übergabeprotokoll für ein Fahrzeug',
    katalog={'popis': 'Kilometerstand, Schäden und Schlüssel bei der Übergabe.', 'kategorie': 'auto', 'ilustrace': 'protokol',
             'slova': ['Übergabeprotokoll', 'Auto', 'Fahrzeug', 'Kilometerstand', 'Schäden', 'Übergabe']},
    souvisejici='auto',
    title='Übergabeprotokoll Fahrzeug Schweiz {rok} – Vorlage kostenlos als PDF',
    description='Kostenloses Übergabeprotokoll für Auto und Motorrad: Kilometerstand, Tank, Schäden, Schlüssel, Uhrzeit der Übergabe. Für Verkauf und Ausleihe.',
    perex='Halten Sie beim Verkauf oder Ausleihen fest, in welchem Zustand das Fahrzeug übergeben wird – mit Kilometerstand, Schäden und genauer Uhrzeit.',
    obsahPopis='Protokoll mit Ankreuzfeldern.',
    obsah=it(('Beteiligte und Anlass', 'Verkauf, Ausleihe oder Rückgabe.'), ('Fahrzeug', 'Marke, Fahrgestellnummer, Schild.'),
             ('Zustand', 'Kilometer, Tank, Schäden.'), ('Schlüssel und Papiere', 'Fahrzeugausweis, Serviceheft, Zubehör.'),
             ('Übergabe', 'Datum, Uhrzeit, Unterschriften.')),
    hodiSe=['Verkauf eines Autos – als Ergänzung zum Kaufvertrag', 'Ausleihe an Familie oder Freunde'],
    nehodiSe=['Mietwagen eines Vermieters – dieser hat eigene Protokolle'],
    po=it(('Fotos', 'Fahrzeug und Tacho fotografieren.'), ('Prüfung', 'Käufer meldet Mängel sofort (Art. 201 OR).')),
    faq=[{'q': 'Ist das Protokoll Pflicht?', 'a': 'Nein, aber es beweist den Zustand und den genauen Zeitpunkt der Übergabe – wichtig bei Mängeln, Bussen oder Unfällen.'}],
    zakony='Kein gesetzliches Formular; ergänzt den Kaufvertrag nach Art. 184 ff. OR.',
    vytvorit={'title': 'Übergabeprotokoll Fahrzeug (Schweiz) online ausfüllen – PDF kostenlos', 'description': 'Übergabeprotokoll für Auto oder Motorrad. PDF oder Word kostenlos.'},
))

zapis('vollmacht-strassenverkehrsamt', 'vollmacht-strassenverkehrsamt', 'vollmachtStrassenverkehrsamtCH', dict(
    nazev='Vollmacht Strassenverkehrsamt', nazevA='Vollmacht für das Strassenverkehrsamt',
    katalog={'popis': 'Wenn jemand anderes zum Strassenverkehrsamt geht.', 'kategorie': 'auto', 'ilustrace': 'plnamoc',
             'slova': ['Vollmacht', 'Strassenverkehrsamt', 'Einlösen', 'Halterwechsel', 'Schilder abgeben', 'Auto']},
    souvisejici='auto',
    title='Vollmacht Strassenverkehrsamt Schweiz {rok} – Vorlage kostenlos',
    description='Kostenlose Vollmacht für Einlösen, Halterwechsel oder Ausserverkehrsetzung beim kantonalen Strassenverkehrsamt. Mit Liste der Unterlagen.',
    perex='Damit eine andere Person Ihr Fahrzeug beim Strassenverkehrsamt einlöst, umschreibt oder die Schilder abgibt.',
    obsahPopis='Eine Seite nach Art. 32 ff. OR.',
    obsah=it(('Vollmachtgeber/in', 'Halter/in des Fahrzeugs.'), ('Bevollmächtigte Person', 'Wer zum Amt geht.'),
             ('Geschäft', 'Einlösen, Halterwechsel oder Ausserverkehrsetzung.'), ('Fahrzeug', 'Marke, Fahrgestellnummer, Schild.')),
    hodiSe=['Sie können nicht selbst zum Strassenverkehrsamt', 'Jemand löst ein gekauftes Auto für Sie ein'],
    nehodiSe=['Kantone mit eigenem Pflichtformular – vorher nachsehen'],
    po=it(('Strassenverkehrsamt', 'Mit Vollmacht, Ausweisen und Fahrzeugausweis.')),
    faq=[{'q': 'Was bringt die bevollmächtigte Person mit?', 'a': 'Die Vollmacht, ihren Pass oder ihre ID, eine Kopie Ihres Ausweises und den Fahrzeugausweis; beim Einlösen den Versicherungsnachweis, bei der Ausserverkehrsetzung die Schilder.'}],
    zakony='Stellvertretung nach Art. 32 ff. OR; Unterlagen gemäss den kantonalen Strassenverkehrsämtern (asa.ch).',
    vytvorit={'title': 'Vollmacht Strassenverkehrsamt online ausfüllen – PDF kostenlos', 'description': 'Vollmacht für das Strassenverkehrsamt. PDF oder Word kostenlos.'},
))

zapis('quittung', 'quittung', 'quittungCH', dict(
    nazev='Quittung', nazevA='Quittung',
    katalog={'popis': 'Empfangsbestätigung für Bargeld.', 'kategorie': 'geld', 'ilustrace': 'penize',
             'slova': ['Quittung', 'Bargeld', 'Empfangsbestätigung', 'Zahlung', 'Bestätigung']},
    souvisejici='geld',
    title='Quittung Vorlage Schweiz {rok} – kostenlos als PDF',
    description='Kostenlose Quittung über eine Barzahlung: Betrag in Ziffern und Worten, Zahlungsgrund, Unterschrift. Nach Art. 88 OR.',
    perex='Bestätigen Sie schriftlich, dass Sie Bargeld erhalten haben – mit Betrag in Worten und Zahlungsgrund.',
    obsahPopis='Eine kurze Bestätigung.',
    obsah=it(('Empfänger/in', 'Wer das Geld erhält.'), ('Zahlende Person', 'Wer zahlt.'), ('Betrag', 'In Ziffern und Worten.'), ('Zahlungsgrund', 'Wofür bezahlt wird.')),
    hodiSe=['Barzahlung beim Autoverkauf', 'Rückzahlung eines privaten Darlehens', 'Übergabe einer Kaution'],
    nehodiSe=['Rechnungen von Unternehmen'],
    po=it(('Aufbewahren', 'Jede Seite behält ein Exemplar.')),
    faq=[{'q': 'Habe ich Anspruch auf eine Quittung?', 'a': 'Ja. Wer zahlt, kann eine Quittung verlangen (Art. 88 OR).'}],
    zakony='Die Vorlage beruht auf Art. 88 OR.',
    vytvorit={'title': 'Quittung (Schweiz) online ausfüllen – PDF kostenlos', 'description': 'Quittung über eine Barzahlung. PDF oder Word kostenlos.'},
))

zapis('darlehensvertrag', 'darlehensvertrag', 'darlehensvertragCH', dict(
    nazev='Darlehensvertrag', nazevA='Darlehensvertrag',
    katalog={'popis': 'Geld leihen, auch in Raten.', 'kategorie': 'geld', 'ilustrace': 'pujcka',
             'slova': ['Darlehen', 'Darlehensvertrag', 'Geld leihen', 'privat', 'Raten', 'Tilgungsplan']},
    souvisejici='geld',
    title='Darlehensvertrag privat Schweiz {rok} – Vorlage kostenlos',
    description='Kostenloser privater Darlehensvertrag nach Art. 312 ff. OR: Betrag, Zinsen, Rückzahlung auf einmal oder in Raten mit Tilgungsplan.',
    perex='Geld an Freunde oder Familie leihen – schriftlich, mit klarer Rückzahlung und auf Wunsch mit Tilgungsplan.',
    obsahPopis='Fünf Artikel nach Art. 312 ff. OR, auf Wunsch mit Tilgungsplan.',
    obsah=it(('Parteien', 'Darleiher und Borger.'), ('Darlehen', 'Betrag und Auszahlung.'), ('Zinsen', 'Zinslos oder mit Zins.'),
             ('Rückzahlung', 'Auf einmal oder in Raten.'), ('Schlussbestimmungen', 'Form und Exemplare.')),
    hodiSe=['Sie leihen Freunden oder Familie Geld', 'Rückzahlung in Raten'],
    nehodiSe=['Gewerbliche Kredite an Konsumenten – dafür gilt das Konsumkreditgesetz'],
    po=it(('Auszahlung', 'Am besten überweisen.'), ('Raten', 'Erinnerungen in den Kalender übernehmen.')),
    faq=[{'q': 'Muss ich Zinsen vereinbaren?', 'a': 'Nein. Unter Privaten sind Zinsen nur geschuldet, wenn sie vereinbart sind.'},
         {'q': 'Was gilt ohne festen Rückzahlungstermin?', 'a': 'Dann muss das Darlehen innert sechs Wochen nach der ersten Aufforderung zurückbezahlt werden (Art. 318 OR).'},
         {'q': 'Hilft der Vertrag bei einer Betreibung?', 'a': 'Ja. Ein vom Borger unterschriebener Vertrag gilt als Schuldanerkennung; damit kann die provisorische Rechtsöffnung verlangt werden (Art. 82 SchKG).'}],
    zakony='Die Vorlage beruht auf Art. 312 ff. OR und Art. 82 SchKG.',
    vytvorit={'title': 'Darlehensvertrag (Schweiz) online ausfüllen – PDF kostenlos', 'description': 'Privater Darlehensvertrag mit Tilgungsplan. PDF oder Word kostenlos.'},
))

zapis('schuldanerkennung', 'schuldanerkennung', 'schuldanerkennungCH', dict(
    nazev='Schuldanerkennung', nazevA='Schuldanerkennung',
    katalog={'popis': 'Schuld schriftlich bestätigen, mit Raten.', 'kategorie': 'geld', 'ilustrace': 'dluh',
             'slova': ['Schuldanerkennung', 'Schuld', 'Raten', 'Rechtsöffnung', 'Betreibung', 'Verjährung']},
    souvisejici='geld',
    title='Schuldanerkennung Vorlage Schweiz {rok} – kostenlos als PDF',
    description='Kostenlose Schuldanerkennung nach Art. 17 OR: Grund und Höhe der Schuld, Zahlung auf einmal oder in Raten. Gilt als Rechtsöffnungstitel (Art. 82 SchKG).',
    perex='Der Schuldner bestätigt schriftlich, wie viel er schuldet und wann er zahlt. Mit Unterschrift ist das in der Betreibung ein starkes Dokument.',
    obsahPopis='Kurzes Dokument, auf Wunsch mit Tilgungsplan.',
    obsah=it(('Beteiligte', 'Schuldner und Gläubiger.'), ('Anerkennung', 'Grund und Höhe der Schuld.'), ('Zahlung', 'Auf einmal oder in Raten.')),
    hodiSe=['Jemand schuldet Ihnen Geld und will später oder in Raten zahlen', 'Sie wollen die Verjährung unterbrechen'],
    nehodiSe=['Streit über die Höhe der Schuld – zuerst einigen'],
    po=it(('Original', 'Behält der Gläubiger.'), ('Betreibung', 'Bei Nichtzahlung: provisorische Rechtsöffnung beantragen.')),
    faq=[{'q': 'Warum ist eine Schuldanerkennung so wertvoll?', 'a': 'Erhebt der Schuldner in der Betreibung Rechtsvorschlag, kann der Gläubiger mit der unterschriebenen Schuldanerkennung die provisorische Rechtsöffnung verlangen (Art. 82 SchKG).'},
         {'q': 'Was passiert mit der Verjährung?', 'a': 'Die Anerkennung unterbricht sie, die Frist beginnt neu (Art. 135 OR).'}],
    zakony='Die Vorlage beruht auf Art. 17 und Art. 135 OR sowie Art. 82 SchKG.',
    vytvorit={'title': 'Schuldanerkennung (Schweiz) online ausfüllen – PDF kostenlos', 'description': 'Schuldanerkennung mit Raten. PDF oder Word kostenlos.'},
))

zapis('schenkungsvertrag', 'schenkungsvertrag', 'schenkungsvertragCH', dict(
    nazev='Schenkungsvertrag', nazevA='Schenkungsvertrag',
    katalog={'popis': 'Geld oder eine Sache verschenken.', 'kategorie': 'geld', 'ilustrace': 'dar',
             'slova': ['Schenkung', 'Schenkungsvertrag', 'Geld schenken', 'Schenkungssteuer', 'Erbvorbezug']},
    souvisejici='geld',
    title='Schenkungsvertrag Schweiz {rok} – Vorlage kostenlos als PDF',
    description='Kostenloser Schenkungsvertrag für Geld oder bewegliche Sachen nach Art. 239 ff. OR – mit Hinweisen zur kantonalen Schenkungssteuer.',
    perex='Für Schenkungen von Geld oder Sachen, die sofort übergeben werden. Mit Hinweisen zur Schenkungssteuer im Kanton.',
    obsahPopis='Vier Artikel nach Art. 239 ff. OR.',
    obsah=it(('Parteien', 'Schenker und Beschenkte.'), ('Gegenstand', 'Geld oder Sache.'), ('Vollzug', 'Sofortige Übergabe.'), ('Schlussbestimmungen', 'Steuer und Exemplare.')),
    hodiSe=['Geldgeschenk in der Familie', 'Schenkung eines Autos oder Schmucks'],
    nehodiSe=['Grundstücke und Wohnungen – öffentliche Beurkundung nötig', 'Erbvorbezug mit Ausgleichungsregeln – besser beraten lassen'],
    po=it(('Steuerverwaltung', 'Bei grösseren Beträgen nachfragen, ob Schenkungssteuer anfällt.')),
    faq=[{'q': 'Braucht es einen Notar?', 'a': 'Nein, ausser bei Grundstücken. Eine Schenkung von Hand zu Hand ist formfrei, ein Schenkungsversprechen muss schriftlich sein (Art. 243 OR).'},
         {'q': 'Muss ich Schenkungssteuer bezahlen?', 'a': 'Das regelt der Kanton. Ehegatten sind überall befreit, Nachkommen in den meisten Kantonen; Schwyz und Obwalden erheben keine Schenkungssteuer.'}],
    zakony='Die Vorlage beruht auf Art. 239 ff. OR; Steuerhinweise nach ch.ch.',
    vytvorit={'title': 'Schenkungsvertrag (Schweiz) online ausfüllen – PDF kostenlos', 'description': 'Schenkungsvertrag für Geld oder Sachen. PDF oder Word kostenlos.'},
))

zapis('vollmacht', 'vollmacht', 'vollmachtCH', dict(
    nazev='Vollmacht', nazevA='Vollmacht',
    katalog={'popis': 'Damit jemand eine Sache für Sie erledigt.', 'kategorie': 'alltag', 'ilustrace': 'plnamoc',
             'slova': ['Vollmacht', 'Vertretung', 'bevollmächtigen', 'Post', 'Behörde']},
    souvisejici='alltag',
    title='Vollmacht Vorlage Schweiz {rok} – kostenlos als PDF',
    description='Kostenlose Vollmacht nach Art. 32 ff. OR: Wer wen wofür bevollmächtigt, gültig bis wann. Für Post, Behörden und Alltag.',
    perex='Damit eine andere Person eine bestimmte Sache für Sie erledigt – klar und konkret formuliert.',
    obsahPopis='Eine Seite nach Art. 32 ff. OR.',
    obsah=it(('Vollmachtgeber/in', 'Wer bevollmächtigt.'), ('Bevollmächtigte Person', 'Wer handelt.'), ('Umfang', 'Was genau.'), ('Gültigkeit', 'Bis wann.')),
    hodiSe=['Abholung von Post oder Dokumenten', 'Erledigungen bei Ämtern'],
    nehodiSe=['Vorsorgeauftrag für den Fall der Urteilsunfähigkeit (Art. 360 ff. ZGB)', 'Grundstücks- und Bankgeschäfte mit eigener Form'],
    po=it(('Original', 'Zusammen mit Pass oder ID vorlegen.')),
    faq=[{'q': 'Muss die Unterschrift beglaubigt werden?', 'a': 'Für Alltägliches meist nicht. Grundbuch, Handelsregister oder Banken verlangen oft eine Beglaubigung oder eigene Formulare.'}],
    zakony='Die Vorlage beruht auf Art. 32 ff. OR.',
    vytvorit={'title': 'Vollmacht (Schweiz) online ausfüllen – PDF kostenlos', 'description': 'Vollmacht für Post, Ämter und Alltag. PDF oder Word kostenlos.'},
))

zapis('kaufvertrag-privat', 'kaufvertrag-privat', 'kaufvertragPrivatCH', dict(
    nazev='Kaufvertrag privat', nazevA='privaten Kaufvertrag',
    katalog={'popis': 'Gebrauchte Sachen von privat verkaufen.', 'kategorie': 'alltag', 'ilustrace': 'protokol',
             'slova': ['Kaufvertrag', 'privat', 'verkaufen', 'Velo', 'Handy', 'Möbel', 'gebraucht']},
    souvisejici='alltag',
    title='Kaufvertrag privat Schweiz {rok} – Vorlage kostenlos als PDF',
    description='Kostenloser Kaufvertrag für gebrauchte Sachen zwischen Privatpersonen nach Art. 184 ff. OR – mit Gewährleistungsausschluss. Für Velo, Handy, Möbel.',
    perex='Verkauf eines Velos, Handys oder Möbelstücks von privat – mit Beschreibung, Mängeln und Gewährleistungsausschluss.',
    obsahPopis='Vier Artikel nach Art. 184 ff. OR.',
    obsah=it(('Parteien', 'Verkäufer und Käufer.'), ('Kaufsache', 'Beschreibung und Mängel.'), ('Preis und Übergabe', 'Zahlung und Eigentum.'), ('Gewährleistung', 'Wegbedungen oder gesetzlich.')),
    hodiSe=['Verkauf über Ricardo, Tutti oder Anibis an Privatpersonen', 'Teurere gebrauchte Sachen'],
    nehodiSe=['Autos – dafür gibt es den Kaufvertrag Auto', 'Verkäufe von Händlern an Konsumenten'],
    po=it(('Prüfung', 'Käufer prüft sofort und meldet Mängel umgehend.')),
    faq=[{'q': 'Darf ich die Gewährleistung ausschliessen?', 'a': 'Unter Privaten ja – nicht aber für arglistig verschwiegene Mängel (Art. 199 OR).'}],
    zakony='Die Vorlage beruht auf Art. 184 ff. und Art. 197 ff. OR.',
    vytvorit={'title': 'Kaufvertrag privat (Schweiz) online ausfüllen – PDF kostenlos', 'description': 'Privater Kaufvertrag für gebrauchte Sachen. PDF oder Word kostenlos.'},
))

zapis('widerruf-haustuergeschaeft', 'widerruf-haustuergeschaeft', 'widerrufHaustuerCH', dict(
    nazev='Widerruf Haustürgeschäft', nazevA='Widerruf eines Haustürgeschäfts',
    katalog={'popis': 'Vertrag von der Haustür oder vom Telefon binnen 14 Tagen widerrufen.', 'kategorie': 'alltag', 'ilustrace': 'protokol',
             'slova': ['Widerruf', 'Haustürgeschäft', 'Telefonverkauf', '14 Tage', 'Abo', 'Vertreter']},
    souvisejici='alltag',
    title='Widerruf Haustürgeschäft Schweiz {rok} – Vorlage kostenlos',
    description='Kostenloser Widerruf nach Art. 40a ff. OR: Verträge von der Haustür, am Telefon oder an Werbefahrten binnen 14 Tagen widerrufen. Ab 100 Franken.',
    perex='An der Haustür oder am Telefon etwas gekauft und bereut? Solche Verträge können Sie innert 14 Tagen ohne Begründung widerrufen.',
    obsahPopis='Ein Brief an den Anbieter.',
    obsah=it(('Anbieter', 'Firma und Adresse.'), ('Vertrag', 'Was und wann.'), ('Ort des Angebots', 'Haustür, Telefon, Arbeitsplatz …'), ('Rückerstattung', 'Konto für Ihr Geld.')),
    hodiSe=['Vertreter an der Haustür', 'Telefonverkauf, z. B. Abo oder Wein', 'Kauf an einer Werbefahrt'],
    nehodiSe=['Online-Käufe – in der Schweiz gibt es dafür kein gesetzliches Widerrufsrecht', 'Käufe im Laden oder an Markt- und Messeständen', 'Verträge bis 100 Franken'],
    po=it(('Einschreiben', 'Rechtzeitig absenden und belegen.'), ('Rückgabe', 'Erhaltenes zurückgeben, Geld zurückfordern.')),
    faq=[{'q': 'Kann ich einen Online-Kauf widerrufen?', 'a': 'Nein, nicht von Gesetzes wegen. Viele Shops gewähren freiwillig ein Rückgaberecht – massgebend sind deren AGB.'},
         {'q': 'Wann beginnt die Frist?', 'a': 'Sobald Sie den Vertrag abgeschlossen haben und schriftlich über das Widerrufsrecht informiert wurden. Die Frist beträgt 14 Tage.'}],
    zakony='Die Vorlage beruht auf Art. 40a–40f OR.',
    vytvorit={'title': 'Widerruf Haustürgeschäft (Schweiz) online ausfüllen – PDF', 'description': 'Widerruf nach Art. 40a ff. OR. PDF oder Word kostenlos.'},
))

zapis('maengelruege', 'maengelruege', 'maengelruegeCH', dict(
    nazev='Mängelrüge', nazevA='Mängelrüge',
    katalog={'popis': 'Defekte Ware sofort rügen.', 'kategorie': 'alltag', 'ilustrace': 'protokol',
             'slova': ['Mängelrüge', 'Gewährleistung', 'Garantie', 'Reklamation', 'defekt', 'Wandelung', 'Minderung']},
    souvisejici='alltag',
    title='Mängelrüge Schweiz {rok} – Vorlage kostenlos als PDF',
    description='Kostenlose Mängelrüge nach Art. 201 OR: defekte Ware sofort rügen und Reparatur, Ersatz, Minderung oder Wandelung verlangen.',
    perex='Ware defekt? Rügen Sie den Mangel sofort schriftlich – sonst gilt die Ware als genehmigt.',
    obsahPopis='Ein Brief an den Verkäufer.',
    obsah=it(('Verkäufer', 'Firma und Adresse.'), ('Ware und Mangel', 'Was defekt ist und seit wann.'), ('Forderung', 'Reparatur, Ersatz, Minderung oder Wandelung.')),
    hodiSe=['Neue oder gebrauchte Ware vom Händler ist defekt'],
    nehodiSe=['Kauf unter Privaten mit Gewährleistungsausschluss'],
    po=it(('Sofort handeln', 'Wer zu spät rügt, verliert seine Rechte.'), ('Verjährung', 'Zwei Jahre ab Ablieferung (Art. 210 OR).')),
    faq=[{'q': 'Habe ich ein Recht auf Reparatur?', 'a': 'Von Gesetzes wegen haben Sie Anspruch auf Wandelung oder Minderung, bei Serienware auf Ersatz. Reparatur gilt, wenn sie vereinbart ist – oft in Garantie oder AGB.'},
         {'q': 'Wie lange habe ich Zeit?', 'a': 'Mängel müssen Sie sofort nach Entdeckung rügen. Die Ansprüche verjähren zwei Jahre nach Ablieferung, bei Occasionen kann der Händler auf ein Jahr verkürzen.'}],
    zakony='Die Vorlage beruht auf Art. 197 ff. OR, insbesondere Art. 201, 205, 206 und 210 OR.',
    vytvorit={'title': 'Mängelrüge (Schweiz) online ausfüllen – PDF kostenlos', 'description': 'Mängelrüge nach Art. 201 OR. PDF oder Word kostenlos.'},
))
