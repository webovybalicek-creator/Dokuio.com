"""Vygeneruje stránky (src/obsah) pro nájemní vzory DE/AT/CH a zaregistruje kategorii 'wohnen'."""
import json, os
os.chdir('/home/claude/dokuio.com')
j = lambda x: json.dumps(x, ensure_ascii=False)


def page(imp, path, nazev, nazevA, slova, popis, title, desc, perex, obsahPopis, obsah, hodi, nehodi, po, faq, zakony, vtitle, vdesc, minuten):
    return f'''import type {{ StrankaDokumentu }} from '../typy';
import {{ {imp} as sablona }} from '../../sablony/{path}';

const stranka: StrankaDokumentu = {{
  sablona,
  nazev: {j(nazev)},
  nazevA: {j(nazevA)},
  katalog: {{ popis: {j(popis)}, kategorie: 'wohnen', ilustrace: 'protokol', slova: {j(slova)} }},
  souvisejici: 'wohnen',
  landing: {{
    title: {j(title)},
    description: {j(desc)},
    perex: {j(perex)},
    obsahPopis: {j(obsahPopis)},
    obsah: {j([{'nazev': a, 'popis': b} for a, b in obsah])},
    kroky: [{{ nazev: 'Ausfüllen', popis: 'Ein paar Fragen, alles erklärt.' }}, {{ nazev: 'PDF oder Word laden', popis: 'Kostenlos, ohne Anmeldung.' }}, {{ nazev: 'Unterschreiben', popis: 'Jede Seite erhält ein Exemplar.' }}],
    online: ['Beträge in Worten automatisch', 'Erinnerungen für den Kalender', 'Download als PDF und Word'],
    hodiSe: {j(hodi)},
    nehodiSe: {j(nehodi)},
    poNadpis: 'Danach.',
    po: {j([{'nazev': a, 'popis': b} for a, b in po])},
    faq: {j([{'q': a, 'a': b} for a, b in faq] + [{'q': 'Speichern Sie meine Daten?', 'a': 'Nein. Das Dokument entsteht ausschließlich in Ihrem Browser.'}])},
    zakony: {j(zakony)},
    souvisejiciPopis: 'Weitere Dokumente rund ums Wohnen, ebenfalls kostenlos.',
  }},
  vytvorit: {{ title: {j(vtitle)}, description: {j(vdesc)}, podnadpis: {j(f'Kostenlos · Ergebnis als PDF und Word · dauert ca. {minuten} Minuten')} }},
}};

export default stranka;
'''


W = {}
W['de/mietvertrag-wohnung'] = page('mietvertragWohnung', 'de/mietvertrag-wohnung', 'Mietvertrag Wohnung', 'Mietvertrag für eine Wohnung',
  ['Mietvertrag', 'Wohnung mieten', 'Wohnung vermieten', 'Kaution', 'Nebenkosten', 'Vermieter', 'Mieter'], 'Unbefristeter Wohnungsmietvertrag nach BGB.',
  'Mietvertrag Wohnung {rok} – Vorlage kostenlos als PDF', 'Kostenloser Mietvertrag für Wohnungen nach BGB: Miete, Betriebskosten, Kaution nach § 551, Kündigungsfristen. Für private Vermieter, als PDF und Word.',
  'Sie vermieten Ihre Wohnung privat? Unbefristeter Mietvertrag nach §§ 535 ff. BGB – ohne riskante Klauseln zu Schönheitsreparaturen.', 'Wohnraummietvertrag nach §§ 535 ff. BGB.',
  [('Parteien und Wohnung', 'Vermieter, Mieter, Lage, Ausstattung.'), ('Miete und Betriebskosten', 'Nettokaltmiete, Vorauszahlungen, Fälligkeit.'), ('Kaution', 'Höchstens drei Kaltmieten, getrennte Anlage.'), ('Kündigung', 'Fristen und optionaler Kündigungsverzicht.')],
  ['Sie vermieten eine Wohnung privat', 'unbefristetes Mietverhältnis'], ['möblierte Wohnung zum vorübergehenden Gebrauch', 'Gewerberäume', 'befristeter Vertrag – nur mit gesetzlichem Grund (§ 575 BGB)'],
  [('Übergabeprotokoll', 'Zählerstände, Mängel und Schlüssel.'), ('Wohnungsgeberbestätigung', 'Innerhalb von zwei Wochen nach Einzug.'), ('Kaution', 'Auf ein Kautionskonto.')],
  [('Wie hoch darf die Kaution sein?', 'Höchstens drei Monatsmieten ohne Nebenkosten. Der Mieter darf sie in drei Monatsraten zahlen (§ 551 BGB).'), ('Welche Kündigungsfrist gilt für Mieter?', 'Drei Monate, unabhängig von der Mietdauer (§ 573c BGB).')],
  'Die Vorlage beruht auf §§ 535 ff. BGB, der Betriebskostenverordnung und § 19 Bundesmeldegesetz.', 'Mietvertrag Wohnung online ausfüllen – PDF kostenlos', 'Mietvertrag für eine Wohnung nach BGB online erstellen. PDF oder Word kostenlos.', 5)
W['de/uebergabeprotokoll-wohnung'] = page('uebergabeprotokollWohnung', 'de/uebergabeprotokoll-wohnung', 'Wohnungsübergabeprotokoll', 'Wohnungsübergabeprotokoll',
  ['Übergabeprotokoll', 'Wohnungsübergabe', 'Einzug', 'Auszug', 'Zählerstände', 'Schlüssel'], 'Zähler, Mängel und Schlüssel bei Ein- und Auszug.',
  'Wohnungsübergabeprotokoll {rok} – Vorlage kostenlos', 'Übergabeprotokoll für die Wohnung: Zählerstände, Mängel, Ausstattung und Schlüssel bei Einzug und Auszug. Kostenlos als PDF und Word.',
  'Der wichtigste Beweis im Streit um die Kaution. Halten Sie den Zustand bei Ein- und Auszug fest.', 'Protokoll über Übergabe und Rücknahme der Wohnung.',
  [('Parteien und Wohnung', 'Wer übergibt, wer übernimmt.'), ('Zählerstände', 'Strom, Gas, Wasser, Heizung.'), ('Zustand und Schlüssel', 'Mängel und Vereinbarungen.')],
  ['Einzug in eine Mietwohnung', 'Auszug am Ende des Mietverhältnisses'], ['Verkauf einer Eigentumswohnung'],
  [('Fotos', 'Zusammen mit dem Protokoll aufbewahren.'), ('Versorger', 'Zählerstände an Strom- und Gasanbieter melden.')],
  [('Ist ein Übergabeprotokoll Pflicht?', 'Nein, aber ohne Protokoll ist der Zustand bei Einzug später schwer zu beweisen.')],
  'Die Vorlage beruht auf den Vorschriften zur Wohnraummiete (§§ 535 ff. BGB).', 'Übergabeprotokoll Wohnung online ausfüllen – PDF kostenlos', 'Übergabeprotokoll mit Zählerständen und Mängeln. PDF oder Word kostenlos.', 3)
W['de/kuendigung-mietvertrag'] = page('kuendigungMietvertrag', 'de/kuendigung-mietvertrag', 'Kündigung Mietvertrag', 'Kündigung des Mietvertrags',
  ['Kündigung Mietvertrag', 'Wohnung kündigen', 'Kündigungsfrist', 'Mieter', 'Umzug'], 'Kündigung durch den Mieter, drei Monate Frist.',
  'Kündigung Mietvertrag Wohnung {rok} – Vorlage PDF', 'Kündigung des Mietvertrags durch den Mieter nach § 573c BGB: drei Monate Frist, Zugang bis zum dritten Werktag, Kaution zurück. Als PDF und Word.',
  'Sie ziehen um? Kündigen Sie Ihre Wohnung schriftlich mit drei Monaten Frist – mit Bitte um Übergabetermin und Kautionsrückzahlung.', 'Kündigung durch den Mieter nach § 573c BGB.',
  [('Vermieter', 'An wen die Kündigung geht.'), ('Kündigung', 'Wohnung, Vertrag, Frist und Kaution.')],
  ['Sie sind Mieter und ziehen aus', 'unbefristeter Mietvertrag'], ['Sie sind Vermieter – dafür gelten Kündigungsgründe und längere Fristen', 'vereinbarter Kündigungsverzicht noch nicht abgelaufen'],
  [('Kündigungsfrist', 'Drei Monate, Zugang bis zum 3. Werktag.'), ('Übergabe', 'Mit Übergabeprotokoll.'), ('Kaution', 'Nach Abrechnung zurück.')],
  [('Wie lang ist die Kündigungsfrist?', 'Für Mieter immer drei Monate. Geht die Kündigung bis zum dritten Werktag eines Monats zu, zählt dieser Monat mit.'), ('Reicht eine E-Mail?', 'Nein. Die Kündigung braucht die Schriftform mit eigenhändiger Unterschrift (§ 568 BGB).')],
  'Die Vorlage beruht auf §§ 568 und 573c BGB.', 'Kündigung Mietvertrag online ausfüllen – PDF kostenlos', 'Kündigung der Wohnung durch den Mieter. PDF oder Word kostenlos.', 2)
W['at/mietvertrag-wohnung'] = page('mietvertragWohnungAT', 'at/mietvertrag-wohnung', 'Mietvertrag Wohnung', 'Mietvertrag für eine Wohnung',
  ['Mietvertrag', 'Wohnung mieten', 'Wohnung vermieten', 'Kaution', 'Befristung', 'MRG', 'Österreich'], 'Wohnungsmietvertrag nach ABGB und MRG.',
  'Mietvertrag Wohnung Österreich {rok} – Vorlage PDF', 'Mietvertrag für Wohnungen in Österreich nach ABGB und MRG: befristet ab 3 Jahren oder unbefristet, Kaution, Betriebskosten, Wertsicherung nach MieWeG.',
  'Sie vermieten in Österreich? Mietvertrag nach ABGB und Mietrechtsgesetz – befristet mindestens drei Jahre oder unbefristet.', 'Wohnungsmietvertrag nach §§ 1090 ff. ABGB und MRG.',
  [('Parteien und Wohnung', 'Vermieter, Mieter, Lage, Ausstattung.'), ('Mietdauer', 'Befristet (mind. 3 Jahre) oder unbefristet.'), ('Mietzins und Kaution', 'Akonto, Wertsicherung, verzinste Kaution.'), ('Kündigung', 'Fristen für Mieter.')],
  ['Sie vermieten eine Wohnung privat in Österreich', 'Teil- oder Nichtanwendungsbereich des MRG'], ['Altbauwohnung im Vollanwendungsbereich – Mietzins gesetzlich begrenzt, lassen Sie den Betrag prüfen', 'Geschäftsräume'],
  [('Übergabeprotokoll', 'Zählerstände, Mängel und Schlüssel.'), ('Meldezettel', 'Hauptwohnsitz binnen drei Tagen melden.'), ('Kaution', 'Verzinst und getrennt anlegen.')],
  [('Wie lange muss ein befristeter Mietvertrag mindestens laufen?', 'Bei privaten Vermietern mindestens drei Jahre; sonst gilt der Vertrag als unbefristet (§ 29 MRG).'), ('Kann der Mieter einen befristeten Vertrag vorzeitig kündigen?', 'Ja, nach Ablauf eines Jahres mit dreimonatiger Frist zum Monatsletzten.')],
  'Die Vorlage beruht auf §§ 1090 ff. ABGB, dem Mietrechtsgesetz und dem Mieten-Wertsicherungsgesetz.', 'Mietvertrag Wohnung Österreich online ausfüllen', 'Mietvertrag nach ABGB und MRG online erstellen. PDF oder Word kostenlos.', 5)
W['at/uebergabeprotokoll-wohnung'] = page('uebergabeprotokollWohnungAT', 'at/uebergabeprotokoll-wohnung', 'Wohnungsübergabeprotokoll', 'Wohnungsübergabeprotokoll',
  ['Übergabeprotokoll', 'Wohnungsübergabe', 'Einzug', 'Auszug', 'Zählerstände', 'Österreich'], 'Zähler, Mängel und Schlüssel bei Ein- und Auszug.',
  'Übergabeprotokoll Wohnung Österreich {rok} – Vorlage', 'Übergabeprotokoll für Mietwohnungen in Österreich: Zählerstände, Mängel, Ausstattung und Schlüssel bei Einzug und Auszug. Kostenlos als PDF und Word.',
  'Grundlage für die Rückzahlung der Kaution: der Zustand der Wohnung bei Ein- und Auszug, schriftlich festgehalten.', 'Protokoll über Übergabe und Rückgabe der Wohnung.',
  [('Parteien und Wohnung', 'Wer übergibt, wer übernimmt.'), ('Zählerstände', 'Strom, Gas, Wasser, Heizung.'), ('Zustand und Schlüssel', 'Mängel und Vereinbarungen.')],
  ['Einzug in eine Mietwohnung', 'Rückgabe am Ende des Mietverhältnisses'], ['Verkauf einer Eigentumswohnung'],
  [('Fotos', 'Zusammen mit dem Protokoll aufbewahren.'), ('Energie', 'Zählerstände an Versorger melden.')],
  [('Ist ein Übergabeprotokoll Pflicht?', 'Nein, aber ohne Protokoll ist der Zustand der Wohnung später schwer zu beweisen.')],
  'Die Vorlage beruht auf den Bestimmungen über den Bestandvertrag (ABGB) und dem MRG.', 'Übergabeprotokoll Wohnung Österreich online ausfüllen', 'Übergabeprotokoll mit Zählerständen und Mängeln. PDF oder Word kostenlos.', 3)
W['at/kuendigung-mietvertrag'] = page('kuendigungMietvertragAT', 'at/kuendigung-mietvertrag', 'Kündigung Mietvertrag', 'Kündigung des Mietvertrags',
  ['Kündigung Mietvertrag', 'Wohnung kündigen', 'befristet', 'MRG', 'Österreich'], 'Kündigung durch den Mieter, befristet oder unbefristet.',
  'Kündigung Mietvertrag Österreich {rok} – Vorlage PDF', 'Kündigung der Mietwohnung in Österreich: unbefristet mit einem Monat, befristet nach einem Jahr mit drei Monaten zum Monatsletzten (§ 29 MRG).',
  'Sie ziehen aus? Schriftliche Kündigung für unbefristete und befristete Mietverträge nach dem Mietrechtsgesetz.', 'Kündigung durch den Mieter nach MRG.',
  [('Vermieter', 'An wen die Kündigung geht.'), ('Kündigung', 'Vertrag, Frist, Kaution.')],
  ['Sie sind Mieter in Österreich', 'befristeter Vertrag nach dem ersten Jahr'], ['Sie sind Vermieter – Kündigung nur gerichtlich aus wichtigen Gründen'],
  [('Frist', 'Bis zum Monatsletzten laufen lassen.'), ('Rückgabe', 'Mit Übergabeprotokoll.'), ('Kaution', 'Samt Zinsen zurück.')],
  [('Wie kündige ich einen befristeten Mietvertrag?', 'Nach Ablauf eines Jahres schriftlich mit dreimonatiger Frist zum Monatsletzten (§ 29 Abs. 2 MRG).'), ('Und einen unbefristeten?', 'Wenn nichts anderes vereinbart ist, mit einem Monat zum Monatsletzten, schriftlich.')],
  'Die Vorlage beruht auf §§ 29 und 33 MRG.', 'Kündigung Mietvertrag Österreich online ausfüllen', 'Kündigung der Mietwohnung durch den Mieter. PDF oder Word kostenlos.', 2)
W['ch/mietvertrag-wohnung'] = page('mietvertragWohnungCH', 'ch/mietvertrag-wohnung', 'Mietvertrag Wohnung', 'Mietvertrag für eine Wohnung',
  ['Mietvertrag', 'Wohnung mieten', 'Wohnung vermieten', 'Mietkaution', 'Nebenkosten', 'Schweiz'], 'Mietvertrag für Wohnräume nach OR.',
  'Mietvertrag Wohnung Schweiz {rok} – Vorlage kostenlos', 'Mietvertrag für Wohnräume in der Schweiz nach Art. 253 ff. OR: Nettomietzins, Nebenkosten, Mietkaution auf Sperrkonto, Kündigungstermine. PDF und Word.',
  'Sie vermieten in der Schweiz? Mietvertrag nach Obligationenrecht – mit einzeln aufgeführten Nebenkosten und Kaution auf Sperrkonto.', 'Mietvertrag für Wohnräume nach Art. 253 ff. OR.',
  [('Parteien und Wohnung', 'Vermieter, Mieter, Lage, Ausstattung.'), ('Mietzins und Nebenkosten', 'Akonto nur für aufgeführte Kosten.'), ('Sicherheit', 'Höchstens drei Monatszinse, Sperrkonto.'), ('Kündigung', 'Drei Monate auf ortsübliche Termine.')],
  ['Sie vermieten eine Wohnung privat in der Schweiz'], ['Kantone mit Formularpflicht für den Anfangsmietzins – zusätzlich amtliches Formular verwenden', 'Geschäftsräume'],
  [('Abnahmeprotokoll', 'Zustand bei Übergabe.'), ('Kaution', 'Auf ein Mietkautionskonto.'), ('Anmeldung', 'Einwohnerkontrolle innert 14 Tagen.')],
  [('Wie hoch darf die Mietkaution sein?', 'Höchstens drei Monatsmietzinse; sie muss auf ein Konto auf den Namen des Mieters (Art. 257e OR).'), ('Welche Nebenkosten darf der Vermieter verlangen?', 'Nur die im Vertrag einzeln aufgeführten (Art. 257a OR).')],
  'Die Vorlage beruht auf Art. 253 ff. OR.', 'Mietvertrag Wohnung Schweiz online ausfüllen', 'Mietvertrag nach OR online erstellen. PDF oder Word kostenlos.', 5)
W['ch/uebergabeprotokoll-wohnung'] = page('uebergabeprotokollWohnungCH', 'ch/uebergabeprotokoll-wohnung', 'Wohnungsübergabeprotokoll', 'Wohnungsübergabeprotokoll',
  ['Übergabeprotokoll', 'Abnahmeprotokoll', 'Wohnungsabgabe', 'Einzug', 'Auszug', 'Schweiz'], 'Zähler, Mängel und Schlüssel bei Ein- und Auszug.',
  'Wohnungsübergabeprotokoll Schweiz {rok} – Vorlage', 'Übergabe- und Abnahmeprotokoll für Mietwohnungen in der Schweiz: Zählerstände, Mängel, Schlüssel. Kostenlos als PDF und Word.',
  'Bei der Abgabe muss der Vermieter Mängel sofort rügen. Ein sauberes Protokoll schützt beide Seiten.', 'Protokoll über Übergabe und Abnahme der Wohnung.',
  [('Parteien und Wohnung', 'Wer übergibt, wer übernimmt.'), ('Zählerstände', 'Strom, Gas, Wasser, Heizung.'), ('Zustand und Schlüssel', 'Mängel und Vereinbarungen.')],
  ['Einzug in eine Mietwohnung', 'Wohnungsabgabe am Mietende'], ['Verkauf von Stockwerkeigentum'],
  [('Fotos', 'Zusammen mit dem Protokoll aufbewahren.'), ('Kaution', 'Freigabe nach der Abnahme.')],
  [('Muss der Vermieter Mängel sofort melden?', 'Ja, bei der Rückgabe muss er Mängel sofort schriftlich rügen, ausser versteckte Mängel (Art. 267a OR).')],
  'Die Vorlage beruht auf Art. 253 ff. und 267a OR.', 'Wohnungsübergabeprotokoll Schweiz online ausfüllen', 'Protokoll mit Zählerständen und Mängeln. PDF oder Word kostenlos.', 3)
W['ch/kuendigung-mietvertrag'] = page('kuendigungMietvertragCH', 'ch/kuendigung-mietvertrag', 'Kündigung Mietvertrag', 'Kündigung des Mietvertrags',
  ['Kündigung Mietvertrag', 'Wohnung kündigen', 'Kündigungstermin', 'Nachmieter', 'Schweiz'], 'Kündigung durch den Mieter auf den nächsten Termin.',
  'Kündigung Mietvertrag Schweiz {rok} – Vorlage PDF', 'Kündigung der Wohnung durch den Mieter in der Schweiz: schriftlich, drei Monate auf einen ortsüblichen Termin (Art. 266c OR), Familienwohnung mit beiden Unterschriften.',
  'Sie ziehen um? Kündigen Sie schriftlich auf den nächsten Termin – oder suchen Sie einen Nachmieter.', 'Kündigung durch den Mieter nach Art. 266c OR.',
  [('Vermieter', 'An wen die Kündigung geht.'), ('Kündigung', 'Termin, Wohnung, Kaution.')],
  ['Sie sind Mieter in der Schweiz und ziehen aus'], ['Sie sind Vermieter – amtliches Formular nötig', 'Auszug ausserhalb der Termine – Nachmieter vorschlagen (Art. 264 OR)'],
  [('Termin', 'Empfang vor Beginn der Frist.'), ('Abgabe', 'Mit Abnahmeprotokoll.'), ('Kaution', 'Freigabe nach Abgabe.')],
  [('Welche Kündigungsfrist gilt?', 'Mindestens drei Monate auf einen vertraglichen oder ortsüblichen Termin (Art. 266c OR).'), ('Wer muss unterschreiben?', 'Alle Mieter; bei einer Familienwohnung beide Ehegatten (Art. 266m OR).')],
  'Die Vorlage beruht auf Art. 264, 266c, 266l und 266m OR.', 'Kündigung Mietvertrag Schweiz online ausfüllen', 'Kündigung der Wohnung durch den Mieter. PDF oder Word kostenlos.', 2)

for k, v in W.items():
    if k.startswith('ch/'):
        v = v.replace('ß', 'ss')
    open(f'src/obsah/{k}.ts', 'w').write(v)

for z in ['de', 'at', 'ch']:
    p = f'src/obsah/{z}/_zeme.ts'
    s = open(p).read()
    if 'wohnen' in s:
        continue
    s = s.replace("geld: 'Geld und Schenkungen', alltag", "geld: 'Geld und Schenkungen', wohnen: 'Wohnen und Miete', alltag", 1)
    s = s.replace("    alltag: [\n", """    wohnen: [
      { slug: 'mietvertrag-wohnung', popis: 'Mietvertrag für eine Wohnung.' },
      { slug: 'uebergabeprotokoll-wohnung', popis: 'Zählerstände, Mängel und Schlüssel.' },
      { slug: 'kuendigung-mietvertrag', popis: 'Kündigung durch den Mieter.' },
    ],
    alltag: [
""", 1)
    s = s.replace("""      {
        nazev: 'Geld',""", """      {
        nazev: 'Wohnen',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Ich vermiete oder miete eine Wohnung', dokumenty: ['mietvertrag-wohnung', 'uebergabeprotokoll-wohnung'] },
          { text: 'Ich will meine Wohnung kündigen', dokumenty: ['kuendigung-mietvertrag'] },
        ],
      },
      {
        nazev: 'Geld',""", 1)
    open(p, 'w').write(s)
print('ok')
