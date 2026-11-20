/**
 * Kündigung eines Vertrags (allgemeiner Brief) – Schweiz. Handy/Internet, Versicherung, Krankenkasse, Strom (Umzug),
 * Fitness/Abo/Mitgliedschaft, Auftrag/Dienstleistung, Sonstiges.
 * Geprüft 2026-11-20:
 *  - Art. 35a VVG (seit 1. 1. 2022, gilt nach Art. 104 VVG auch für ältere Verträge): Kündigung auf Ende des dritten oder jedes
 *    folgenden Jahres mit drei Monaten Frist, schriftlich oder in einer Form, die den Nachweis durch Text ermöglicht;
 *    Lebensversicherung ausgenommen. Art. 42 VVG: Teilschaden – Rücktritt spätestens bei Auszahlung der Entschädigung.
 *  - Grundversicherung (KVG): Brief muss bis 30. November bei der Krankenkasse eintreffen (ch.ch).
 *  - Strom: Haushalte unter 100 MWh/Jahr können den Lieferanten nicht wählen (ElCom) – nur Abmeldung beim Umzug.
 *  - Telekom: keine gesetzliche Frist, AGB massgebend; Streit → ombudscom (BAKOM).
 *  - Auftrag: Art. 404 OR – jederzeit widerrufbar; zur Unzeit Schadenersatz. Werkvertrag: Art. 377 OR.
 * Lehnt sich an den CZ-Vorlagenbrief an, Text eigenständig nach Schweizer Recht.
 */
import type { Sablona, Pripominka } from '../typy';
import { naDatum, isoDatum, pridejDny } from '../terminy';
import { schweiz, paticka } from './schweiz';
import { VVG_35A, VVG_42, OR_404, OR_377, CH_KRANKENKASSE, ELCOM_GRUNDVERSORGUNG, BAKOM_OMBUDSCOM } from './quellen';

export const kuendigungVertragCH: Sablona = schweiz({
  kod: 'CH-KUENDIGUNG-VERTRAG',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'ch',
  jazyk: 'de-CH',
  nazev: 'Kündigung',
  podnadpis: 'Kündigung eines Vertrags gemäss Vertrag, AGB und Gesetz',
  souborPdf: 'kuendigung-vertrag',
  paticka: paticka('CH-KUENDIGUNG-VERTRAG'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Kunde/Kundin', vpravo: 'Erhalten für den Anbieter (bei persönlicher Abgabe)' },
  slovo: { n: 'Kündigung', g: 'Kündigung', a: 'Kündigung', l: 'Kündigung' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const out: Pripominka[] = [];
    const gesendet = naDatum(d.datum);
    if (gesendet) out.push({ nazev: 'Bestätigung der Kündigung prüfen', datum: isoDatum(pridejDny(gesendet, 14)), popis: 'Keine Bestätigung erhalten? Beim Anbieter nachfragen und den Einschreibebeleg bereithalten.' });
    const ende = naDatum(d.termin);
    if (ende) out.push({ nazev: 'Vertrag endet', datum: isoDatum(ende), popis: 'Daueraufträge und Lastschriften erst nach der Schlussabrechnung beenden.' });
    return out;
  },
  coDal: [
    'Eigenhändig unterschreiben und per Einschreiben senden – oder auf dem Weg, den die AGB vorsehen (z. B. Kundenkonto). Den Einschreibebeleg aufbewahren.',
    'Massgebend ist meist, wann die Kündigung beim Anbieter eintrifft, nicht wann Sie sie abschicken. Rechnen Sie einige Tage Reserve ein.',
    'Bis zum Vertragsende weiterzahlen. Dauerauftrag oder Lastschrift erst nach der Schlussabrechnung stoppen.',
    'Geliehene Geräte (Router, TV-Box, Badge) nach Anweisung zurückgeben und die Rückgabe quittieren lassen.',
    'Kopie der Kündigung aufbewahren, bis Bestätigung und Schlussabrechnung da sind.',
  ],
  kontrola: [
    'Vertrags-, Kunden- oder Policennummer genau abschreiben – damit ordnet der Anbieter Ihre Kündigung zu.',
    'Frist und Form stehen im Vertrag und in den AGB. Wenn Sie unsicher sind, wählen Sie „auf den nächstmöglichen Termin“ – dann endet der Vertrag zum frühestmöglichen Zeitpunkt.',
    'Handy, Internet, TV: Kündigungsfrist und Mindestvertragsdauer regeln die AGB des Anbieters. Bei Streit über Kündigung oder Vertragsdauer hilft die Schlichtungsstelle [ombudscom](https://www.bakom.admin.ch/de/wann-kann-ich-mich-an-die-ombudscom-wenden). Wechseln Sie mit Ihrer Nummer zu einem anderen Anbieter, fragen Sie zuerst den neuen Anbieter, wie die Portierung abläuft.',
    'Versicherung: Jeder Vertrag kann auf das Ende des dritten oder jedes folgenden Jahres mit drei Monaten Frist gekündigt werden, schriftlich oder in einer Form, die den Nachweis durch Text ermöglicht ([Art. 35a VVG](https://www.fedlex.admin.ch/eli/cc/24/719_735_717/de#art_35_a)). Das gilt seit 1. 1. 2022 auch für ältere Verträge. Lebensversicherungen sind ausgenommen. Kürzere Fristen können im Vertrag stehen.',
    'Versicherung nach einem Teilschaden: Sie können spätestens bei der Auszahlung der Entschädigung vom Vertrag zurücktreten ([Art. 42 VVG](https://www.fedlex.admin.ch/eli/cc/24/719_735_717/de#art_42)). Prüfen Sie die Einzelheiten in Ihren AVB.',
    'Krankenkasse – Grundversicherung: Ihr Brief muss bis 30. November bei der Kasse eintreffen; mit Franchise 300 Franken im Standardmodell auch auf Ende Juni mit drei Monaten Frist ([ch.ch](https://www.ch.ch/de/gesundheit/krankenkasse/krankenkasse-abschliessen--wechseln-oder-kundigen/)). Zusatzversicherungen haben eigene Fristen gemäss Vertrag.',
    'Strom: Haushalte mit weniger als 100 MWh Verbrauch pro Jahr können ihren Stromlieferanten nicht frei wählen ([ElCom](https://www.elcom.admin.ch/de/grundversorgung-und-freier-markt)). Beim Umzug melden Sie sich beim örtlichen Elektrizitätswerk ab und notieren den Zählerstand.',
    'Auftrag (z. B. Reinigung, Beratung, Treuhand, Coaching): Ein Auftrag kann jederzeit widerrufen oder gekündigt werden; wer zur Unzeit kündigt, muss den dadurch entstandenen Schaden ersetzen ([Art. 404 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_404)). Bei einem Werkvertrag (z. B. Handwerker) gilt dagegen Art. 377 OR: Rücktritt nur gegen Vergütung der geleisteten Arbeit und volle Schadloshaltung.',
    'Fitnessstudio, Abo, Mitgliedschaft: Laufzeit, automatische Verlängerung und Kündigungsfrist regeln Vertrag und AGB. Kündigen Sie rechtzeitig vor der Verlängerung.',
  ],
  zdroje: [VVG_35A, VVG_42, OR_404, OR_377, CH_KRANKENKASSE, ELCOM_GRUNDVERSORGUNG, BAKOM_OMBUDSCOM],

  kroky: [
    {
      id: 'kunde',
      nazev: 'Ihre Angaben',
      popis: 'Wer den Vertrag abgeschlossen hat. Schreiben Sie Name und Adresse so, wie sie der Anbieter kennt.',
      pole: [
        { id: 'k_jmeno', typ: 'text', popis: 'Vor- und Nachname', napoveda: 'Wie im Vertrag (bei einer Firma: Firmenname).', placeholder: 'z. B. Anna Muster', sirka: 34, autocomplete: 'name' },
        { id: 'k_narozeni', typ: 'datum', popis: 'Geburtsdatum (optional)', napoveda: 'Hilft dem Anbieter, Sie zu finden, wenn die Vertragsnummer fehlt.', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Adresse', napoveda: 'Adresse aus dem Vertrag oder Ihre aktuelle Postadresse.', placeholder: 'z. B. Bahnhofstrasse 12, 8001 Zürich', sirka: 46, autocomplete: 'street-address' },
        { id: 'k_kontakt', typ: 'text', popis: 'Telefon oder E-Mail (optional)', napoveda: 'Wohin der Anbieter die Bestätigung schicken kann.', placeholder: 'z. B. anna.muster@example.ch', sirka: 30 },
      ],
    },
    {
      id: 'vertrag',
      nazev: 'Anbieter und Vertrag',
      popis: 'Die Angaben finden Sie im Vertrag, auf der Rechnung oder im Kundenkonto.',
      pole: [
        {
          id: 'typ',
          typ: 'volba',
          popis: 'Was kündigen Sie?',
          napoveda: 'Je nach Vertrag zeigen wir Ihnen die geltenden Regeln in den Tipps unten.',
          moznosti: [
            { hodnota: 'telekom', popis: 'Handy-Abo, Internet oder TV' },
            { hodnota: 'versicherung', popis: 'Versicherung (Hausrat, Haftpflicht, Auto, Zusatzversicherung …)' },
            { hodnota: 'krankenkasse', popis: 'Krankenkasse – Grundversicherung' },
            { hodnota: 'strom', popis: 'Strom – Abmeldung beim Umzug' },
            { hodnota: 'abo', popis: 'Fitnessstudio, Abo oder Mitgliedschaft' },
            { hodnota: 'auftrag', popis: 'Dienstleistung / Auftrag (Reinigung, Beratung, Treuhand …)' },
            { hodnota: 'sonstiges', popis: 'Anderer Vertrag' },
          ],
        },
        { id: 'f_nazev', typ: 'text', popis: 'Anbieter (Firma)', napoveda: 'Genauer Name von Rechnung oder Vertrag.', placeholder: 'z. B. Muster Fitness AG', sirka: 34 },
        { id: 'f_adresa', typ: 'text', popis: 'Adresse des Anbieters', napoveda: 'Korrespondenzadresse aus den AGB oder von der Website – an diese Adresse senden.', placeholder: 'z. B. Postfach, 3001 Bern', sirka: 46 },
        { id: 'cislo', typ: 'text', popis: 'Vertrags-, Kunden- oder Policennummer', napoveda: 'Die wichtigste Angabe – damit wird die Kündigung zugeordnet.', placeholder: 'z. B. 12.345.678', sirka: 18, polovina: true },
        { id: 'vertrag_datum', typ: 'datum', popis: 'Vertragsbeginn (optional)', napoveda: 'Aus dem Vertrag oder der Police. Bei Versicherungen wichtig für die Dreijahresregel.', sirka: 14, polovina: true },
        { id: 'gegenstand', typ: 'text', popis: 'Was genau? (optional)', napoveda: 'Z. B. Rufnummer, Adresse der Wohnung und Zählernummer, Mitgliedernummer, Name des Abos.', placeholder: 'z. B. Rufnummer 079 123 45 67', sirka: 56 },
      ],
    },
    {
      id: 'kuendigung',
      nazev: 'Kündigung',
      pole: [
        {
          id: 'art',
          typ: 'volba',
          popis: 'Wie kündigen Sie?',
          napoveda: 'Im Zweifel „nächstmöglicher Termin“. Die Varianten für Versicherung, Krankenkasse, Strom und Auftrag passen nur zu diesen Verträgen.',
          moznosti: [
            { hodnota: 'naechst', popis: 'Auf den nächstmöglichen Termin' },
            { hodnota: 'termin', popis: 'Auf ein bestimmtes Datum (eventualiter nächstmöglich)' },
            { hodnota: 'vvg', popis: 'Versicherung: ordentlich nach Art. 35a VVG' },
            { hodnota: 'schaden', popis: 'Versicherung: nach einem Teilschaden (Art. 42 VVG)' },
            { hodnota: 'kvg', popis: 'Krankenkasse: Grundversicherung auf Jahresende' },
            { hodnota: 'umzug', popis: 'Strom: Abmeldung wegen Umzug' },
            { hodnota: 'auftrag', popis: 'Auftrag: Widerruf nach Art. 404 OR, sofort' },
          ],
        },
        { id: 'termin', typ: 'datum', popis: 'Vertragsende bzw. Auszugsdatum', napoveda: 'Bei Versicherungen das Ende des Versicherungsjahres, bei der Grundversicherung der 31. Dezember, beim Umzug der Tag der Wohnungsabgabe.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'art', je: ['termin', 'vvg', 'kvg', 'umzug'] } },
        { id: 'schaden_nr', typ: 'text', popis: 'Schadennummer (optional)', napoveda: 'Die Nummer, die Ihnen die Versicherung für den Schadenfall gegeben hat.', placeholder: 'z. B. S-2026-0042', sirka: 16, polovina: true, zobrazitKdyz: { pole: 'art', je: 'schaden' } },
        { id: 'neue_adresse', typ: 'text', popis: 'Neue Adresse (für die Schlussrechnung)', napoveda: 'Wohin die Schlussrechnung gehen soll.', placeholder: 'z. B. Seeweg 3, 6003 Luzern', sirka: 46, zobrazitKdyz: { pole: 'art', je: 'umzug' } },
        {
          id: 'bitten',
          typ: 'vice',
          popis: 'Was möchten Sie zusätzlich? (optional)',
          napoveda: 'Die Bestätigung gibt Ihnen Sicherheit über das Enddatum. Mit IBAN kommt ein Guthaben schneller zurück.',
          moznosti: [
            { hodnota: 'bestaetigung', popis: 'Schriftliche Bestätigung mit Enddatum' },
            { hodnota: 'abrechnung', popis: 'Schlussabrechnung und Rückzahlung eines Guthabens' },
            { hodnota: 'geraete', popis: 'Angaben zur Rückgabe von Geräten' },
            { hodnota: 'lastschrift', popis: 'Lastschrift nach der Schlussabrechnung beenden' },
          ],
        },
        { id: 'iban', typ: 'text', popis: 'IBAN für ein Guthaben', napoveda: 'Ihr Konto für eine allfällige Rückzahlung.', placeholder: 'CH00 0000 0000 0000 0000 0', sirka: 30, zobrazitKdyz: { pole: 'bitten', je: 'abrechnung' } },
        { id: 'misto', typ: 'text', popis: 'Ort', napoveda: 'Wir übernehmen den Ort aus Ihrer Adresse.', placeholder: 'z. B. Zürich', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heute vorausgefüllt.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Absender',
      vysvetleni: 'Wer kündigt – die Person, die den Vertrag abgeschlossen hat.',
      odstavce: ['{{k_jmeno}}, geb. {{k_narozeni}}, {{k_adresa}}, Kontakt: {{k_kontakt}}'],
    },
    {
      nadpis: 'Einschreiben an',
      vysvetleni: 'An wen die Kündigung geht.',
      odstavce: ['{{f_nazev}}, {{f_adresa}}'],
    },
    {
      nadpis: 'Kündigung',
      vysvetleni: 'Die eigentliche Kündigung. Die Nummer sagt dem Anbieter, welcher Vertrag gemeint ist; die Variante bestimmt, wann er endet.',
      odstavce: [
        'Sehr geehrte Damen und Herren',
        'Hiermit kündige ich den Vertrag Nr. {{cislo}} vom {{vertrag_datum}} ({{gegenstand}}).',
        {
          volba: 'art',
          uvodVzor: 'Variante (eine ankreuzen):',
          moznosti: {
            naechst: 'Die Kündigung erfolgt auf den nächstmöglichen Termin gemäss Vertrag, AGB und Gesetz.',
            termin: 'Die Kündigung erfolgt auf den {{termin}}, eventualiter auf den nächstmöglichen Termin.',
            vvg: 'Ich kündige die Versicherung ordentlich gestützt auf Art. 35a VVG auf den {{termin}}, eventualiter auf den nächstmöglichen Termin.',
            schaden: 'Ich trete gestützt auf Art. 42 VVG nach dem Teilschaden Nr. {{schaden_nr}} vom Vertrag zurück.',
            kvg: 'Ich kündige die obligatorische Krankenpflegeversicherung (Grundversicherung) auf den {{termin}}.',
            umzug: 'Wegen meines Umzugs melde ich mich auf den {{termin}} ab. Bitte lesen Sie den Zähler an diesem Tag ab und senden Sie die Schlussrechnung an meine neue Adresse: {{neue_adresse}}.',
            auftrag: 'Ich widerrufe den Auftrag gestützt auf Art. 404 Abs. 1 OR mit sofortiger Wirkung. Bitte stellen Sie die bis heute erbrachten Leistungen in Rechnung.',
          },
        },
      ],
    },
    {
      nadpis: 'Weitere Bitten',
      vysvetleni: 'Was Sie vom Anbieter sonst noch brauchen. Alles optional.',
      odstavce: [
        {
          vice: 'bitten',
          uvod: 'Zudem bitte ich Sie um:',
          moznosti: {
            bestaetigung: 'eine schriftliche Bestätigung der Kündigung mit dem Datum, an dem der Vertrag endet',
            abrechnung: 'die Schlussabrechnung und die Rückzahlung eines allfälligen Guthabens auf das Konto IBAN {{iban}}',
            geraete: 'Angaben, wie und wohin ich geliehene Geräte zurückgeben soll',
            lastschrift: 'die Beendigung des Lastschriftverfahrens nach der Schlussabrechnung',
          },
        },
        'Freundliche Grüsse',
      ],
    },
  ],
});
