/**
 * Mietvertrag für eine Wohnung – Deutschland, unbefristet, Privatvermieter. §§ 535 ff. BGB.
 * Kaution höchstens drei Nettokaltmieten, Zahlung in drei Raten möglich, getrennte Anlage (§ 551 BGB).
 * Mieterkündigung drei Monate (§ 573c BGB), schriftlich (§ 568). Betriebskosten nach BetrKV, Abrechnung jährlich (§ 556).
 * Bewusst ohne Schönheitsreparatur- und Kleinreparaturklauseln (häufig unwirksam).
 */
import type { Sablona } from '../typy';
import { betragInWorten } from './zahlen';
import { naDatum, pridejMesice, isoDatum, cislo } from '../terminy';
import { BGB_MIETE, BGB_551, BGB_573C, BETRKV, BMG_19, TIPP_IDENTITAET } from './quellen';

export const mietvertragWohnung: Sablona = {
  kod: 'DE-MIETVERTRAG',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  pripominky: (d) => {
    const out: { nazev: string; datum: string; popis?: string; mesicne?: number }[] = [];
    const od = naDatum(d.beginn);
    const den = Math.round(cislo(d.faellig));
    if (typeof d.uebergabe === 'string' && d.uebergabe) out.push({ nazev: 'Wohnungsübergabe mit Protokoll', datum: d.uebergabe });
    if (od && den >= 1 && den <= 31) out.push({ nazev: 'Miete und Nebenkosten', datum: isoDatum(pridejMesice(od, od.getDate() > den ? 1 : 0, den)), mesicne: 12, popis: 'Erste 12 Monate.' });
    return out;
  },
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Mietvertrag über Wohnraum',
  podnadpis: 'nach §§ 535 ff. Bürgerliches Gesetzbuch (BGB)',
  souborPdf: 'mietvertrag-wohnung',
  paticka: 'Kostenlos erstellt · Vorlage DE-MIETVERTRAG v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'ort',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Vermieter/in', vpravo: 'Mieter/in' },
  slovo: { n: 'Vertrag', g: 'Vertrags', a: 'Vertrag', l: 'Vertrag' },
  coDal: [
    'Zwei Exemplare ausdrucken, beide Seiten unterschreiben beide.',
    'Bei der Übergabe ein Übergabeprotokoll mit Zählerständen und Fotos erstellen.',
    'Vermieter: innerhalb von zwei Wochen nach Einzug die Wohnungsgeberbestätigung für das Bürgeramt ausstellen (§ 19 BMG).',
    'Vermieter: die Kaution getrennt vom eigenen Vermögen auf einem Kautionskonto anlegen.',
  ],
  kontrola: [
    TIPP_IDENTITAET,
    'Die Kaution darf höchstens drei Monatsmieten ohne Nebenkosten betragen. Der Mieter darf sie in drei Monatsraten zahlen, die erste zu Beginn des Mietverhältnisses (§ 551 BGB).',
    'Nebenkosten muss der Mieter nur zahlen, wenn sie vereinbart sind – nur Kosten nach der Betriebskostenverordnung. Vorauszahlungen werden jährlich abgerechnet, spätestens zwölf Monate nach Ende des Abrechnungszeitraums.',
    'Prüfen Sie die Mietpreisbremse: In vielen Städten darf die Miete bei Neuvermietung höchstens 10 % über der ortsüblichen Vergleichsmiete liegen.',
    'Befristete Mietverträge sind nur mit gesetzlichem Grund zulässig (§ 575 BGB). Diese Vorlage ist deshalb unbefristet; ein beidseitiger Kündigungsverzicht ist bis zu vier Jahre üblich.',
    'Klauseln zu Schönheitsreparaturen und Kleinreparaturen sind häufig unwirksam – die Vorlage verzichtet bewusst darauf.',
  ],
  zdroje: [BGB_MIETE, BGB_551, BGB_573C, BETRKV, BMG_19],
  kroky: [
    {
      id: 'parteien',
      nazev: 'Vermieter und Mieter',
      pole: [
        { id: 'v_name', typ: 'text', popis: 'Vermieter/in – Name', napoveda: 'Eigentümer/in der Wohnung.', placeholder: 'z. B. Thomas Müller', sirka: 34, autocomplete: 'name' },
        { id: 'v_adresse', typ: 'text', popis: 'Anschrift Vermieter/in', napoveda: 'Für Schriftverkehr.', placeholder: 'z. B. Hauptstraße 12, 10115 Berlin', sirka: 46 },
        { id: 'm_name', typ: 'text', popis: 'Mieter/in – Name', napoveda: 'Mehrere Mieter alle angeben.', placeholder: 'z. B. Anna Schmidt', sirka: 34 },
        { id: 'm_geburt', typ: 'datum', popis: 'Geburtsdatum Mieter/in', napoveda: 'Laut Ausweis.', sirka: 14, polovina: true },
        { id: 'm_adresse', typ: 'text', popis: 'Bisherige Anschrift Mieter/in', napoveda: 'Vor dem Einzug.', placeholder: 'z. B. Gartenweg 5, 80331 München', sirka: 46 },
      ],
    },
    {
      id: 'wohnung',
      nazev: 'Wohnung',
      pole: [
        { id: 'objekt', typ: 'text', popis: 'Anschrift der Wohnung', napoveda: 'Straße, Hausnummer, PLZ, Ort.', placeholder: 'z. B. Lindenstraße 7, 10969 Berlin', sirka: 46 },
        { id: 'lage', typ: 'text', popis: 'Lage im Haus', napoveda: 'Geschoss und Lage.', placeholder: 'z. B. 2. OG links', sirka: 18, polovina: true },
        { id: 'zimmer', typ: 'cislo', popis: 'Zimmer', napoveda: 'Ohne Küche und Bad.', placeholder: 'z. B. 2', sirka: 4, polovina: true },
        { id: 'flaeche', typ: 'cislo', popis: 'Wohnfläche', napoveda: 'Ungefähre Angabe.', placeholder: 'z. B. 58', jednotka: 'm²', sirka: 8, polovina: true },
        { id: 'nebenraeume', typ: 'text', popis: 'Mitvermietet (optional)', napoveda: 'Keller, Stellplatz, Balkon.', placeholder: 'z. B. Kellerabteil Nr. 3', sirka: 46 },
        { id: 'ausstattung', typ: 'textarea', popis: 'Ausstattung (optional)', napoveda: 'Einbauküche, Geräte. Details im Übergabeprotokoll.', placeholder: 'z. B. Einbauküche mit Kühlschrank, Herd und Spülmaschine', sirka: 64 },
      ],
    },
    {
      id: 'zahlung',
      nazev: 'Mietbeginn, Miete und Kaution',
      pole: [
        { id: 'beginn', typ: 'datum', popis: 'Mietbeginn', napoveda: 'Ab wann die Miete läuft.', sirka: 14, polovina: true },
        { id: 'uebergabe', typ: 'datum', popis: 'Übergabe der Wohnung', napoveda: 'Schlüsselübergabe.', sirka: 14, polovina: true },
        { id: 'miete', typ: 'castka', popis: 'Nettokaltmiete (€ monatlich)', napoveda: 'Miete ohne Nebenkosten.', placeholder: 'z. B. 950', sirka: 12, polovina: true },
        { id: 'nebenkosten', typ: 'castka', popis: 'Betriebskosten-Vorauszahlung (€)', napoveda: 'Monatlich, jährlich abgerechnet.', placeholder: 'z. B. 180', sirka: 12, polovina: true },
        { id: 'heizkosten', typ: 'castka', popis: 'Heizkosten-Vorauszahlung (€)', napoveda: 'Monatlich, verbrauchsabhängig abgerechnet.', placeholder: 'z. B. 90', sirka: 12, polovina: true },
        { id: 'faellig', typ: 'cislo', popis: 'Fällig bis (Werktag)', napoveda: 'Gesetzlich spätestens bis zum 3. Werktag des Monats im Voraus.', placeholder: 'z. B. 3', sirka: 4, polovina: true },
        { id: 'iban', typ: 'text', popis: 'IBAN Vermieter/in', napoveda: 'Für die Mietzahlung.', placeholder: 'DE00 0000 0000 0000 0000 00', sirka: 30 },
        { id: 'kaution', typ: 'castka', popis: 'Kaution (€)', napoveda: 'Höchstens drei Nettokaltmieten.', placeholder: 'z. B. 2850', sirka: 12, polovina: true },
        { id: 'verzicht', typ: 'volba', popis: 'Kündigungsverzicht', napoveda: 'Beide Seiten verzichten eine Zeit lang auf die ordentliche Kündigung.', moznosti: [ { hodnota: 'nein', popis: 'Kein Kündigungsverzicht' }, { hodnota: 'ja', popis: 'Beidseitiger Verzicht für eine Zeit' } ] },
        { id: 'verzicht_jahre', typ: 'cislo', popis: 'Verzicht für (Jahre)', napoveda: 'Höchstens vier Jahre.', placeholder: 'z. B. 1', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'verzicht', je: 'ja' } },
        { id: 'tiere', typ: 'volba', popis: 'Haustiere', napoveda: 'Kleintiere sind immer erlaubt; für Hunde und Katzen gilt die Vereinbarung.', moznosti: [ { hodnota: 'erlaubt', popis: 'Erlaubt' }, { hodnota: 'zustimmung', popis: 'Nach Zustimmung des Vermieters' } ] },
        { id: 'ort', typ: 'text', popis: 'Ort', napoveda: 'Ort der Unterschrift.', placeholder: 'z. B. Berlin', sirka: 18, polovina: true, vychozi: { obecZ: 'v_adresse' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heutiges Datum vorausgefüllt.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { miete_worte: (d) => betragInWorten(d.miete), kaution_worte: (d) => betragInWorten(d.kaution) },
  clanky: [
    { nadpis: 'Vertragsparteien', odstavce: ['**Vermieter/in:** {{v_name}}, wohnhaft {{v_adresse}}', '**Mieter/in:** {{m_name}}, geb. {{m_geburt}}, bisher wohnhaft {{m_adresse}}'] },
    {
      nadpis: 'Mietsache',
      odstavce: [
        'Vermietet wird die Wohnung {{lage}} im Haus {{objekt}} mit {{zimmer}} Zimmern und einer Wohnfläche von ca. {{flaeche}} zu Wohnzwecken.',
        'Mitvermietet: {{nebenraeume}}. Ausstattung: {{ausstattung}}. Der Zustand bei Übergabe wird in einem Übergabeprotokoll festgehalten.',
      ],
    },
    {
      nadpis: 'Mietzeit',
      odstavce: [
        'Das Mietverhältnis beginnt am {{beginn}} und läuft auf unbestimmte Zeit. Die Übergabe der Wohnung erfolgt am {{uebergabe}}.',
        { volba: 'verzicht', uvodVzor: 'Kündigungsverzicht (bitte ankreuzen):', moznosti: { nein: 'Ein Kündigungsverzicht wird nicht vereinbart.', ja: 'Beide Parteien verzichten für die Dauer von {{verzicht_jahre}} Jahren ab Vertragsschluss wechselseitig auf ihr Recht zur ordentlichen Kündigung. Eine Kündigung ist frühestens zum Ablauf dieses Zeitraums zulässig. Das Recht zur außerordentlichen Kündigung bleibt unberührt.' } },
      ],
    },
    {
      nadpis: 'Miete und Betriebskosten',
      odstavce: [
        'Die monatliche Nettokaltmiete beträgt {{miete}} (in Worten: {{miete_worte}}).',
        'Daneben zahlt der Mieter monatliche Vorauszahlungen auf die Betriebskosten im Sinne der Betriebskostenverordnung von {{nebenkosten}} und auf die Heiz- und Warmwasserkosten von {{heizkosten}}. Der Vermieter rechnet jährlich ab.',
        'Miete und Vorauszahlungen sind monatlich im Voraus, spätestens bis zum {{faellig}}. Werktag eines Monats, auf das Konto IBAN {{iban}} zu zahlen.',
      ],
    },
    {
      nadpis: 'Kaution',
      odstavce: [
        'Der Mieter leistet eine Mietsicherheit von {{kaution}} (in Worten: {{kaution_worte}}). Er ist berechtigt, sie in drei gleichen monatlichen Teilzahlungen zu leisten; die erste ist zu Beginn des Mietverhältnisses fällig.',
        'Der Vermieter legt die Kaution getrennt von seinem Vermögen bei einem Kreditinstitut zu dem für Spareinlagen mit dreimonatiger Kündigungsfrist üblichen Zinssatz an. Die Erträge stehen dem Mieter zu (§ 551 BGB).',
      ],
    },
    {
      nadpis: 'Nutzung der Wohnung',
      odstavce: [
        'Der Mieter behandelt die Wohnung pfleglich und zeigt Mängel unverzüglich an. Bauliche Veränderungen bedürfen der vorherigen Zustimmung des Vermieters.',
        'Die Untervermietung oder sonstige Gebrauchsüberlassung an Dritte bedarf der Erlaubnis des Vermieters (§ 540 BGB); ein Anspruch nach § 553 BGB bleibt unberührt.',
        { volba: 'tiere', uvodVzor: 'Haustiere (bitte ankreuzen):', moznosti: { erlaubt: 'Die Haltung üblicher Haustiere ist gestattet, soweit Mitbewohner nicht belästigt und die Wohnung nicht beschädigt wird.', zustimmung: 'Die Haltung von Hunden und Katzen bedarf der Zustimmung des Vermieters, die nur aus wichtigem Grund verweigert werden darf. Kleintiere sind erlaubt.' } },
      ],
    },
    {
      nadpis: 'Kündigung und Rückgabe',
      odstavce: [
        'Die Kündigung bedarf der Schriftform. Der Mieter kann mit einer Frist von drei Monaten kündigen; die Kündigung muss spätestens am dritten Werktag eines Monats zum Ablauf des übernächsten Monats zugehen (§ 573c BGB). Für den Vermieter gelten die gesetzlichen Kündigungsgründe und Fristen.',
        'Bei Beendigung gibt der Mieter die Wohnung geräumt und mit allen Schlüsseln zurück. Über die Rückgabe wird ein Protokoll erstellt.',
      ],
    },
    {
      nadpis: 'Schlussbestimmungen',
      odstavce: [
        'Im Übrigen gelten die gesetzlichen Vorschriften, insbesondere §§ 535 ff. BGB.',
        'Änderungen und Ergänzungen bedürfen der Textform. Der Vertrag wird zweifach ausgefertigt; jede Partei erhält ein Exemplar.',
      ],
    },
  ],
};
