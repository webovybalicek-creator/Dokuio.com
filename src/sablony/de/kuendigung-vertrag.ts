/**
 * Kündigung eines Vertrags (Handy/Internet, Versicherung, Strom/Gas, Fitnessstudio, Abo, Sonstiges) – Deutschland.
 * Fristen nur dort genannt, wo sie im Gesetz stehen (§ 309 Nr. 9 BGB, § 56 TKG, § 20 StromGVV/GasGVV, § 11 VVG);
 * sonst „gemäß Vertrag/AGB“. Der Brief selbst nennt keine Frist, sondern kündigt zum nächstmöglichen Zeitpunkt.
 * Für AT/CH über nahrad.ts: Gesetzeszitate stehen nur in `kontrola`, `zdroje`, `napoveda` und `podnadpis`.
 * Bei jeder Textänderung `verze` und `aktualizovano` erhöhen.
 */
import type { Sablona, Pripominka } from '../typy';
import { naDatum, isoDatum, pridejDny } from '../terminy';
import { BGB_309, EGBGB_229_60, BGB_312K, TKG_56, TKG_60, ENWG_41B, STROMGVV_20, GASGVV_20, VVG_11, VVG_92 } from './quellen';

export const kuendigungVertrag: Sablona = {
  kod: 'DE-KUENDIGUNG-VERTRAG',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Kündigung',
  podnadpis: 'Kündigung eines Vertrags durch die Kundin/den Kunden',
  souborPdf: 'kuendigung-vertrag',
  paticka: 'Kostenlos erstellt · Vorlage DE-KUENDIGUNG-VERTRAG v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'ort',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Kundin/Kunde', vpravo: 'Eingang bestätigt (bei persönlicher Abgabe)' },
  slovo: { n: 'Kündigung', g: 'Kündigung', a: 'Kündigung', l: 'Kündigung' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const z = naDatum(d.datum);
    const out: Pripominka[] = [];
    if (z) out.push({ nazev: 'Kündigungsbestätigung erhalten?', datum: isoDatum(pridejDny(z, 14)), popis: 'Falls noch keine Bestätigung da ist: beim Anbieter nachfragen und Zugangsnachweis bereithalten.' });
    if (d.zeitpunkt === 'datum' && naDatum(d.ende_datum)) out.push({ nazev: 'Vertragsende – Lastschriften prüfen', datum: String(d.ende_datum) });
    return out;
  },
  coDal: [
    'Unterschreiben und nachweisbar senden: Einwurf-Einschreiben, Fax mit Sendebericht oder E-Mail bzw. Kontaktformular mit Kopie – entscheidend ist der Zugang beim Anbieter.',
    'Wurde der Vertrag online geschlossen, können Sie auch über den Button „Verträge hier kündigen“ auf der Website des Anbieters kündigen; die Bestätigungsseite speichern.',
    'Kündigungsbestätigung mit Vertragsende aufheben. Kommt keine, nachfragen.',
    'Nach Vertragsende die Kontoauszüge prüfen und unberechtigte Lastschriften zurückgeben.',
  ],
  kontrola: [
    'Kunden- oder Vertragsnummer genau übernehmen – daran ordnet der Anbieter die Kündigung zu.',
    'Laufzeit und Kündigungsfrist stehen im Vertrag bzw. in den AGB. Bei Verträgen mit Unternehmen über regelmäßige Leistungen (z. B. Fitnessstudio, Abo), die ab dem 1. März 2022 geschlossen wurden, darf eine stillschweigende Verlängerung nur auf unbestimmte Zeit mit höchstens einem Monat Kündigungsfrist erfolgen ([§ 309 Nr. 9 BGB](https://www.gesetze-im-internet.de/bgb/__309.html), [Art. 229 § 60 EGBGB](https://www.gesetze-im-internet.de/bgbeg/art_229__60.html)). Für Versicherungen gilt das nicht.',
    'Handy, Internet, Festnetz: höchstens 24 Monate Erstlaufzeit; nach deren Ablauf ist eine stillschweigend verlängerte Laufzeit jederzeit mit einem Monat Frist kündbar ([§ 56 TKG](https://www.gesetze-im-internet.de/tkg_2021/__56.html)). Beim Umzug, wenn die Leistung am neuen Wohnsitz nicht angeboten wird: ein Monat Frist ([§ 60 TKG](https://www.gesetze-im-internet.de/tkg_2021/__60.html)).',
    'Strom und Gas in der Grundversorgung: zwei Wochen Frist, Textform genügt ([§ 20 StromGVV](https://www.gesetze-im-internet.de/stromgvv/__20.html), [§ 20 GasGVV](https://www.gesetze-im-internet.de/gasgvv/__20.html)). Sonderverträge: Frist laut Vertrag; bei Preisänderungen besteht ein Sonderkündigungsrecht, beim Umzug unter Umständen mit sechs Wochen Frist ([§ 41 und § 41b EnWG](https://www.gesetze-im-internet.de/enwg_2005/__41b.html)).',
    'Versicherungen: unbefristete Verträge enden zum Schluss der laufenden Versicherungsperiode, die Frist beträgt laut Vertrag ein bis drei Monate ([§ 11 VVG](https://www.gesetze-im-internet.de/vvg_2008/__11.html)). Nach einem Versicherungsfall ist eine Kündigung bis einen Monat nach Abschluss der Verhandlungen über die Entschädigung möglich ([§ 92 VVG](https://www.gesetze-im-internet.de/vvg_2008/__92.html), Sachversicherung).',
    'In AGB darf für Kündigungen keine strengere Form als die Textform verlangt werden ([§ 309 Nr. 13 BGB](https://www.gesetze-im-internet.de/bgb/__309.html)) – E-Mail genügt dann in der Regel. Die eigenhändige Unterschrift schadet nie.',
    'Online geschlossene Verträge: Der Anbieter muss einen Kündigungsbutton bereitstellen; fehlt er, können Sie jederzeit ohne Frist kündigen ([§ 312k BGB](https://www.gesetze-im-internet.de/bgb/__312k.html)).',
    'Unsicher bei der Frist? Kündigen Sie „zum nächstmöglichen Zeitpunkt“ – dann zählt automatisch der früheste zulässige Termin.',
  ],
  zdroje: [BGB_309, EGBGB_229_60, BGB_312K, TKG_56, TKG_60, ENWG_41B, STROMGVV_20, GASGVV_20, VVG_11, VVG_92],
  kroky: [
    {
      id: 'kunde',
      nazev: 'Ihre Angaben',
      popis: 'So, wie Sie beim Anbieter als Vertragspartner/in geführt werden.',
      pole: [
        { id: 'k_name', typ: 'text', popis: 'Vor- und Nachname', napoveda: 'Name der Vertragsinhaberin/des Vertragsinhabers.', placeholder: 'z. B. Anna Schmidt', sirka: 34, autocomplete: 'name' },
        { id: 'k_adresse', typ: 'text', popis: 'Anschrift', napoveda: 'Die Anschrift, die der Anbieter von Ihnen hat (oder Ihre aktuelle).', placeholder: 'z. B. Lindenstraße 7, 10115 Berlin', sirka: 46 },
        { id: 'k_geburt', typ: 'datum', popis: 'Geburtsdatum (optional)', napoveda: 'Hilft bei Versicherungen und Energieversorgern, Sie eindeutig zuzuordnen.', sirka: 14, polovina: true },
        { id: 'k_kontakt', typ: 'text', popis: 'E-Mail für die Bestätigung (optional)', napoveda: 'Dorthin kann der Anbieter die Kündigungsbestätigung schicken.', placeholder: 'z. B. anna@email.de', sirka: 30, polovina: true, autocomplete: 'email' },
      ],
    },
    {
      id: 'vertrag',
      nazev: 'Anbieter und Vertrag',
      popis: 'Die Angaben finden Sie im Vertrag, auf der Rechnung oder im Kundenkonto.',
      pole: [
        { id: 'a_name', typ: 'text', popis: 'Anbieter (Firma)', napoveda: 'Vollständiger Name des Unternehmens oder Vereins.', placeholder: 'z. B. Muster Telekom GmbH', sirka: 34 },
        { id: 'a_adresse', typ: 'text', popis: 'Anschrift des Anbieters', napoveda: 'Postanschrift aus dem Impressum, dem Vertrag oder der Rechnung.', placeholder: 'z. B. Postfach 12 34, 40210 Düsseldorf', sirka: 46 },
        {
          id: 'art',
          typ: 'volba',
          popis: 'Welcher Vertrag?',
          napoveda: 'Nach der Art richten sich die gesetzlichen Fristen – die wichtigsten zeigen wir in den Tipps vor dem Download.',
          moznosti: [
            { hodnota: 'telekom', popis: 'Handy-, Internet- oder Festnetzvertrag' },
            { hodnota: 'versicherung', popis: 'Versicherung' },
            { hodnota: 'energie', popis: 'Strom oder Gas' },
            { hodnota: 'fitness', popis: 'Fitnessstudio oder Mitgliedschaft' },
            { hodnota: 'abo', popis: 'Abo oder Dienstleistung (Zeitschrift, Streaming, Lieferdienst …)' },
            { hodnota: 'sonstiges', popis: 'Sonstiger Vertrag' },
          ],
        },
        { id: 'bezeichnung', typ: 'text', popis: 'Bezeichnung des Vertrags', napoveda: 'Tarif, Produkt oder Versicherungsart – so, wie es auf der Rechnung steht.', placeholder: 'z. B. Tarif „Mobil L“ / Hausratversicherung / Premium-Mitgliedschaft', sirka: 46 },
        { id: 'nummer', typ: 'text', popis: 'Kunden- oder Vertragsnummer', napoveda: 'Der wichtigste Eintrag – bei Versicherungen die Versicherungsscheinnummer.', placeholder: 'z. B. 123456789', sirka: 20, polovina: true },
        { id: 'rufnummer', typ: 'text', popis: 'Rufnummer oder Anschluss', napoveda: 'Die Rufnummer bzw. die Anschlusskennung des Vertrags.', placeholder: 'z. B. 0171 1234567', sirka: 20, polovina: true, zobrazitKdyz: { pole: 'art', je: 'telekom' } },
        { id: 'zaehler', typ: 'text', popis: 'Zählernummer und Lieferstelle', napoveda: 'Zählernummer von der Jahresabrechnung und die Anschrift der Lieferstelle.', placeholder: 'z. B. Zähler 1ESY1160123456, Lindenstraße 7, Berlin', sirka: 46, zobrazitKdyz: { pole: 'art', je: 'energie' } },
      ],
    },
    {
      id: 'kuendigung',
      nazev: 'Kündigung',
      pole: [
        {
          id: 'zeitpunkt',
          typ: 'volba',
          popis: 'Zu wann kündigen Sie?',
          napoveda: '„Zum nächstmöglichen Zeitpunkt“ ist am sichersten: Ist ein Wunschtermin zu früh, gilt so trotzdem der früheste zulässige Termin.',
          moznosti: [
            { hodnota: 'naechst', popis: 'Ordentlich zum nächstmöglichen Zeitpunkt' },
            { hodnota: 'datum', popis: 'Ordentlich zu einem bestimmten Datum' },
            { hodnota: 'sonder', popis: 'Außerordentlich / Sonderkündigung (z. B. Preiserhöhung, Umzug)' },
          ],
        },
        { id: 'ende_datum', typ: 'datum', popis: 'Gewünschtes Vertragsende', napoveda: 'Muss zur Frist im Vertrag passen; sonst gilt der nächstmögliche Termin.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'zeitpunkt', je: 'datum' } },
        { id: 'sonder_grund', typ: 'textarea', popis: 'Grund der Sonderkündigung', napoveda: 'Kurz und konkret, mit Datum – z. B. Schreiben über die Preiserhöhung oder Umzug.', placeholder: 'z. B. Preiserhöhung laut Ihrem Schreiben vom 1. 10. 2026 zum 1. 12. 2026', sirka: 56, zobrazitKdyz: { pole: 'zeitpunkt', je: 'sonder' } },
        {
          id: 'bitten',
          typ: 'vice',
          popis: 'Was bitten Sie zusätzlich?',
          napoveda: 'Die Bestätigung mit Vertragsende ist Ihr Nachweis. Ein erteiltes SEPA-Lastschriftmandat endet so zum Vertragsende.',
          moznosti: [
            { hodnota: 'bestaetigung', popis: 'Schriftliche Bestätigung mit dem Datum des Vertragsendes' },
            { hodnota: 'lastschrift', popis: 'SEPA-Lastschriftmandat zum Vertragsende widerrufen' },
            { hodnota: 'werbung', popis: 'Keine Anrufe oder Werbung zur Rückgewinnung' },
          ],
        },
        { id: 'ort', typ: 'text', popis: 'Ort', napoveda: 'Wir übernehmen ihn aus Ihrer Anschrift.', placeholder: 'z. B. Berlin', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresse' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heutiges Datum vorausgefüllt.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Absender/in',
      vysvetleni: 'Wer kündigt – so, wie Sie beim Anbieter geführt werden.',
      odstavce: ['{{k_name}}, geboren am {{k_geburt}}, {{k_adresse}}, E-Mail: {{k_kontakt}}'],
    },
    {
      nadpis: 'An',
      vysvetleni: 'Wem Sie die Kündigung schicken.',
      odstavce: ['{{a_name}}, {{a_adresse}}'],
    },
    {
      nadpis: 'Kündigung meines Vertrags',
      vysvetleni: 'Welcher Vertrag endet und zu wann.',
      odstavce: [
        {
          volba: 'art',
          uvodVzor: 'Vertrag (bitte ankreuzen):',
          moznosti: {
            telekom: 'Vertrag: Telekommunikationsvertrag {{bezeichnung}}, Rufnummer/Anschluss {{rufnummer}}, Kunden-/Vertragsnummer {{nummer}}',
            versicherung: 'Vertrag: Versicherungsvertrag {{bezeichnung}}, Versicherungsscheinnummer {{nummer}}',
            energie: 'Vertrag: Energieliefervertrag {{bezeichnung}}, {{zaehler}}, Kunden-/Vertragsnummer {{nummer}}',
            fitness: 'Vertrag: Mitgliedschaft {{bezeichnung}}, Mitglieds-/Vertragsnummer {{nummer}}',
            abo: 'Vertrag: Abonnement/Dienstleistung {{bezeichnung}}, Kunden-/Vertragsnummer {{nummer}}',
            sonstiges: 'Vertrag: {{bezeichnung}}, Kunden-/Vertragsnummer {{nummer}}',
          },
        },
        {
          volba: 'zeitpunkt',
          uvodVzor: 'Zeitpunkt (bitte ankreuzen):',
          moznosti: {
            naechst: 'Hiermit kündige ich den oben genannten Vertrag ordentlich und fristgerecht zum nächstmöglichen Zeitpunkt.',
            datum: 'Hiermit kündige ich den oben genannten Vertrag ordentlich und fristgerecht zum {{ende_datum}}, hilfsweise zum nächstmöglichen Zeitpunkt.',
            sonder: 'Hiermit kündige ich den oben genannten Vertrag außerordentlich aus folgendem Grund: {{sonder_grund}}. Hilfsweise kündige ich ordentlich zum nächstmöglichen Zeitpunkt.',
          },
        },
        {
          vice: 'bitten',
          uvod: 'Außerdem bitte ich Sie:',
          moznosti: {
            bestaetigung: 'mir den Eingang dieser Kündigung und das Datum des Vertragsendes schriftlich oder per E-Mail zu bestätigen',
            lastschrift: 'zur Kenntnis zu nehmen, dass ich das erteilte SEPA-Lastschriftmandat mit Wirkung zum Vertragsende widerrufe; offene Beträge überweise ich nach Rechnung',
            werbung: 'von Anrufen und Werbung zur Rückgewinnung abzusehen',
          },
        },
        'Mit freundlichen Grüßen',
      ],
    },
  ],
};
