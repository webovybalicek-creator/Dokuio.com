/**
 * Kündigung des Arbeitsvertrags durch die Arbeitnehmerin/den Arbeitnehmer – Deutschland.
 * Fristen § 622 BGB, Schriftform § 623 BGB (eigenhändige Unterschrift, elektronische Form ausgeschlossen) →
 * keine Unterschrift auf dem Bildschirm. Alternative: Angebot eines Aufhebungsvertrags (ebenfalls Schriftform).
 * Für AT/CH über nahrad.ts: deutsche Gesetzeszitate stehen nur in `kontrola`, `zdroje`, `coDal`, `podpisPoznamka`.
 * Bei jeder Textänderung `verze` und `aktualizovano` erhöhen.
 */
import type { Sablona, Pripominka } from '../typy';
import { naDatum, isoDatum, pridejDny } from '../terminy';
import { BGB_622, BGB_623, BGB_126, BGB_626, BGB_629, BGB_630, SGB3_38, SGB3_159, SGB3_312 } from './quellen';

/**
 * Frühestes Ende nach § 622 Abs. 1 BGB (vier Wochen zum 15. oder zum Monatsende) bei Zugang am Tag `z`.
 * Orientierung: Tarif- oder Arbeitsvertrag und Probezeit (§ 622 Abs. 3–5) können abweichen.
 */
export const arbeitsendeDE = (z: Date): Date => {
  const min = pridejDny(z, 28);
  const m15 = new Date(min.getFullYear(), min.getMonth(), 15);
  if (min <= m15) return m15;
  return new Date(min.getFullYear(), min.getMonth() + 1, 0);
};

export const kuendigungArbeitsvertrag: Sablona = {
  kod: 'DE-KUENDIGUNG-ARBEIT',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Kündigung des Arbeitsverhältnisses',
  podnadpis: 'Kündigung durch die Arbeitnehmerin/den Arbeitnehmer',
  souborPdf: 'kuendigung-arbeitsvertrag',
  paticka: 'Kostenlos erstellt · Vorlage DE-KUENDIGUNG-ARBEIT v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'ort',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Arbeitnehmer/in (eigenhändige Unterschrift)', vpravo: 'Erhalten am (Datum, Unterschrift Arbeitgeber)' },
  slovo: { n: 'Kündigung', g: 'Kündigung', a: 'Kündigung', l: 'Kündigung' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  podpisNaZarizeni: false,
  podpisPoznamka:
    'Die Kündigung eines Arbeitsverhältnisses ist nur mit eigenhändiger Unterschrift auf Papier wirksam – die elektronische Form ist ausgeschlossen (§ 623 BGB). E-Mail, Fax, Scan, Messenger oder eine Unterschrift auf dem Bildschirm reichen nicht. Bitte ausdrucken und mit Kugelschreiber unterschreiben.',
  pripominky: (d) => {
    const z = naDatum(d.datum);
    if (!z) return [];
    const ende = d.zeitpunkt === 'datum' && naDatum(d.ende_datum) ? naDatum(d.ende_datum)! : arbeitsendeDE(z);
    const dreiMonateVorher = new Date(ende.getFullYear(), ende.getMonth() - 3, ende.getDate());
    const meldung = dreiMonateVorher > z ? dreiMonateVorher : pridejDny(z, 3);
    const out: Pripominka[] = [
      { nazev: 'Arbeitsuchend melden (spätestens)', datum: isoDatum(meldung), popis: 'Bei der Agentur für Arbeit: spätestens drei Monate vor dem Ende, bei kürzerer Zeit binnen drei Tagen (§ 38 SGB III).' },
      { nazev: 'Letzter Arbeitstag (ca.)', datum: isoDatum(ende), popis: 'Orientierung bei Zugang am Tag der Unterschrift; Arbeits- oder Tarifvertrag können längere Fristen vorsehen.' },
    ];
    return out;
  },
  coDal: [
    'Ausdrucken und eigenhändig mit Kugelschreiber unterschreiben. Eine Kündigung per E-Mail, Fax, WhatsApp oder mit elektronischer Signatur ist unwirksam (§ 623 BGB).',
    'Das Original muss dem Arbeitgeber zugehen: am besten persönlich übergeben und den Empfang auf einer Kopie quittieren lassen, oder per Bote mit Zeugen.',
    'Eine Kopie für Ihre Unterlagen behalten.',
    'Haben Sie noch keine neue Stelle? Melden Sie sich rechtzeitig arbeitsuchend bei der Agentur für Arbeit (§ 38 SGB III).',
  ],
  kontrola: [
    'NUR MIT UNTERSCHRIFT AUF PAPIER WIRKSAM: Die Kündigung braucht die Schriftform, die elektronische Form ist ausgeschlossen ([§ 623 BGB](https://www.gesetze-im-internet.de/bgb/__623.html), [§ 126 BGB](https://www.gesetze-im-internet.de/bgb/__126.html)). E-Mail, Fax, Scan oder Bildschirm-Unterschrift genügen nicht.',
    'Gesetzliche Frist für Arbeitnehmer: vier Wochen zum 15. oder zum Ende eines Kalendermonats; in einer vereinbarten Probezeit (höchstens sechs Monate) zwei Wochen ([§ 622 BGB](https://www.gesetze-im-internet.de/bgb/__622.html)).',
    'Die längeren Fristen nach Betriebszugehörigkeit (§ 622 Abs. 2 BGB) gelten nur für Kündigungen durch den Arbeitgeber – sie können aber im Arbeitsvertrag auch für Sie vereinbart sein. Tarifverträge können abweichen. Prüfen Sie deshalb Arbeits- und Tarifvertrag; für Sie darf keine längere Frist gelten als für den Arbeitgeber (§ 622 Abs. 6 BGB).',
    'Unsicher bei der Frist? Kündigen Sie „zum nächstmöglichen Zeitpunkt“ – dann gilt automatisch der früheste zulässige Termin.',
    'Die Frist läuft erst ab Zugang beim Arbeitgeber, nicht ab dem Absenden.',
    'Eine Eigenkündigung ohne wichtigen Grund kann beim Arbeitslosengeld zu einer Sperrzeit führen, in der Regel zwölf Wochen ([§ 159 SGB III](https://www.gesetze-im-internet.de/sgb_3/__159.html)). Das gilt auch für einen Aufhebungsvertrag. Lassen Sie sich im Zweifel vorher beraten.',
    'Ein Aufhebungsvertrag kommt nur zustande, wenn beide Seiten ihn unterschreiben – ebenfalls auf Papier (§ 623 BGB). Ihr Schreiben ist nur das Angebot.',
    'Fristlose Kündigung aus wichtigem Grund ist nur innerhalb von zwei Wochen ab Kenntnis des Grundes möglich ([§ 626 BGB](https://www.gesetze-im-internet.de/bgb/__626.html)) – dafür ist diese Vorlage nicht gedacht; lassen Sie sich beraten.',
  ],
  zdroje: [BGB_622, BGB_623, BGB_126, BGB_626, BGB_629, BGB_630, SGB3_38, SGB3_159, SGB3_312],
  kroky: [
    {
      id: 'parteien',
      nazev: 'Sie und Ihr Arbeitgeber',
      pole: [
        { id: 'an_name', typ: 'text', popis: 'Ihr Vor- und Nachname', napoveda: 'Wie im Arbeitsvertrag.', placeholder: 'z. B. Anna Schmidt', sirka: 34, autocomplete: 'name' },
        { id: 'an_adresse', typ: 'text', popis: 'Ihre Anschrift', napoveda: 'Aktuelle Wohnanschrift – dorthin kommen Zeugnis und Arbeitspapiere.', placeholder: 'z. B. Lindenstraße 7, 10115 Berlin', sirka: 46 },
        { id: 'an_personalnr', typ: 'text', popis: 'Personalnummer (optional)', napoveda: 'Steht auf der Gehaltsabrechnung.', placeholder: 'z. B. 4711', sirka: 12, polovina: true },
        { id: 'an_seit', typ: 'datum', popis: 'Beschäftigt seit', napoveda: 'Beginn des Arbeitsverhältnisses laut Arbeitsvertrag.', sirka: 14, polovina: true },
        { id: 'ag_name', typ: 'text', popis: 'Arbeitgeber (Firma)', napoveda: 'Vollständiger Name aus dem Arbeitsvertrag.', placeholder: 'z. B. Muster GmbH', sirka: 34 },
        { id: 'ag_zhd', typ: 'text', popis: 'Zu Händen (optional)', napoveda: 'Geschäftsführung oder Personalabteilung – wer zur Entgegennahme berechtigt ist.', placeholder: 'z. B. Geschäftsführung, Herrn Thomas Müller', sirka: 34 },
        { id: 'ag_adresse', typ: 'text', popis: 'Anschrift des Arbeitgebers', napoveda: 'Anschrift aus dem Arbeitsvertrag oder Impressum.', placeholder: 'z. B. Industriestraße 5, 80331 München', sirka: 46 },
      ],
    },
    {
      id: 'beendigung',
      nazev: 'Beendigung',
      pole: [
        {
          id: 'form',
          typ: 'volba',
          popis: 'Wie wollen Sie das Arbeitsverhältnis beenden?',
          napoveda: 'Die Kündigung wirkt einseitig. Ein Aufhebungsvertrag ist eine Einigung – Ihr Schreiben ist dann nur das Angebot, der Arbeitgeber muss zustimmen.',
          moznosti: [
            { hodnota: 'kuendigung', popis: 'Ordentliche Kündigung' },
            { hodnota: 'aufhebung', popis: 'Angebot eines Aufhebungsvertrags (einvernehmliche Beendigung)' },
          ],
        },
        {
          id: 'zeitpunkt',
          typ: 'volba',
          popis: 'Zu wann?',
          napoveda: '„Zum nächstmöglichen Zeitpunkt“ ist am sichersten. Beim Aufhebungsvertrag nennen Sie ein Wunschdatum.',
          moznosti: [
            { hodnota: 'naechst', popis: 'Zum nächstmöglichen Zeitpunkt' },
            { hodnota: 'datum', popis: 'Zu einem bestimmten Datum' },
          ],
          zobrazitKdyz: { pole: 'form', je: 'kuendigung' },
        },
        { id: 'ende_datum', typ: 'datum', popis: 'Gewünschtes Ende des Arbeitsverhältnisses', napoveda: 'Bei der Kündigung muss das Datum zur Frist passen – sonst gilt der nächstmögliche Termin.', sirka: 14, polovina: true },
        { id: 'antwort_bis', typ: 'datum', popis: 'Antwort erbeten bis', napoveda: 'Bis wann der Arbeitgeber auf das Angebot antworten soll.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'form', je: 'aufhebung' } },
        {
          id: 'bitten',
          typ: 'vice',
          popis: 'Was bitten Sie zusätzlich?',
          napoveda: 'Auf ein schriftliches Zeugnis haben Sie Anspruch (§ 630 BGB). Die Arbeitsbescheinigung brauchen Sie für die Agentur für Arbeit.',
          moznosti: [
            { hodnota: 'bestaetigung', popis: 'Schriftliche Bestätigung des Eingangs und des Beendigungsdatums' },
            { hodnota: 'zeugnis', popis: 'Qualifiziertes Arbeitszeugnis' },
            { hodnota: 'zwischenzeugnis', popis: 'Zwischenzeugnis bis zum Ende' },
            { hodnota: 'urlaub', popis: 'Mitteilung zum Resturlaub' },
            { hodnota: 'bescheinigung', popis: 'Arbeitsbescheinigung für die Agentur für Arbeit' },
          ],
        },
        { id: 'ort', typ: 'text', popis: 'Ort', napoveda: 'Wir übernehmen ihn aus Ihrer Anschrift.', placeholder: 'z. B. Berlin', sirka: 18, polovina: true, vychozi: { obecZ: 'an_adresse' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heutiges Datum vorausgefüllt. Die Frist zählt ab Zugang beim Arbeitgeber.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Absender/in',
      vysvetleni: 'Wer kündigt.',
      odstavce: ['{{an_name}}, {{an_adresse}}, Personalnummer {{an_personalnr}}'],
    },
    {
      nadpis: 'An',
      vysvetleni: 'An den Arbeitgeber – am besten an die Geschäftsführung oder Personalabteilung.',
      odstavce: ['{{ag_name}}, z. Hd. {{ag_zhd}}, {{ag_adresse}}'],
    },
    {
      nadpis: 'Beendigung meines Arbeitsverhältnisses',
      vysvetleni: 'Kündigung oder Angebot eines Aufhebungsvertrags – mit Datum.',
      odstavce: [
        {
          volba: 'form',
          uvodVzor: 'Bitte ankreuzen:',
          moznosti: {
            kuendigung: 'Hiermit kündige ich das mit Ihnen seit dem {{an_seit}} bestehende Arbeitsverhältnis ordentlich und fristgerecht.',
            aufhebung: 'Ich biete Ihnen an, das seit dem {{an_seit}} bestehende Arbeitsverhältnis einvernehmlich durch einen schriftlichen Aufhebungsvertrag zum {{ende_datum}} zu beenden. Bitte teilen Sie mir bis zum {{antwort_bis}} mit, ob Sie einverstanden sind; den Aufhebungsvertrag unterzeichnen wir dann beide.',
          },
        },
        {
          volba: 'zeitpunkt',
          uvodVzor: 'Bei Kündigung – Zeitpunkt (bitte ankreuzen):',
          moznosti: {
            naechst: 'Die Kündigung erfolgt zum nächstmöglichen Zeitpunkt.',
            datum: 'Die Kündigung erfolgt zum {{ende_datum}}, hilfsweise zum nächstmöglichen Zeitpunkt.',
          },
          kdyz: { pole: 'form', je: 'kuendigung' },
        },
        {
          vice: 'bitten',
          uvod: 'Ich bitte Sie um:',
          moznosti: {
            bestaetigung: 'eine schriftliche Bestätigung des Eingangs dieses Schreibens und des Beendigungsdatums',
            zeugnis: 'ein qualifiziertes Arbeitszeugnis, das sich auf Leistung und Verhalten erstreckt',
            zwischenzeugnis: 'ein Zwischenzeugnis bis zur Beendigung',
            urlaub: 'eine Mitteilung, wie mein Resturlaub bis zur Beendigung gewährt wird',
            bescheinigung: 'die Erteilung der Arbeitsbescheinigung für die Agentur für Arbeit',
          },
        },
        'Für die Zusammenarbeit bedanke ich mich.',
        'Mit freundlichen Grüßen',
      ],
    },
  ],
};
