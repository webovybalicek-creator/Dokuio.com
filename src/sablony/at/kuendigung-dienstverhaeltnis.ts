/**
 * Kündigung des Dienstverhältnisses durch die Arbeitnehmerin / den Arbeitnehmer – Österreich.
 * Seit 1. 10. 2021 gleiche Regeln für Angestellte und Arbeiter/innen: ein Monat zum Monatsletzten,
 * vertraglich bis zu einem halben Jahr verlängerbar; Kollektivvertrag kann für Saisonbranchen abweichen (USP, AK; § 20 Abs. 4 AngG, § 1159 ABGB).
 * Formfrei, außer Gesetz, Kollektivvertrag oder Dienstvertrag verlangen Schriftform. Probezeit höchstens ein Monat, jederzeit lösbar.
 * Alternative: einvernehmliche Auflösung (grundsätzlich formfrei; schriftlich zwingend u. a. bei Mutterschutz/Karenz, Lehre, Präsenz-/Zivildienst).
 * Bei jeder Textänderung `verze` und `aktualizovano` erhöhen.
 */
import type { Sablona, Pripominka } from '../typy';
import { naDatum, isoDatum } from '../terminy';
import { ANGG, ABGB_1159, USP_KUENDIGUNG, USP_ARTEN, AK_AN_KUENDIGUNG } from './quellen';

/** Ende bei einem Monat Frist zum Monatsletzten: Zugang im Monat X → letzter Tag des Monats X+1 */
export const dienstendeAT = (zugang: Date) => new Date(zugang.getFullYear(), zugang.getMonth() + 2, 0);

export const kuendigungDienstverhaeltnisAT: Sablona = {
  kod: 'AT-KUENDIGUNG-DIENST',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'at',
  jazyk: 'de',
  nazev: 'Kündigung des Dienstverhältnisses',
  podnadpis: 'Kündigung durch die Arbeitnehmerin bzw. den Arbeitnehmer',
  souborPdf: 'kuendigung-dienstverhaeltnis',
  paticka: 'Kostenlos erstellt · Vorlage AT-KUENDIGUNG-DIENST v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'ort',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Arbeitnehmer/in', vpravo: 'Erhalten am … (bei einvernehmlicher Auflösung: einverstanden) – Arbeitgeber/in' },
  slovo: { n: 'Kündigung', g: 'Kündigung', a: 'Kündigung', l: 'Kündigung' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const out: Pripominka[] = [];
    const ende = naDatum(d.ende);
    const z = naDatum(d.datum);
    if (ende) out.push({ nazev: 'Letzter Tag des Dienstverhältnisses', datum: isoDatum(ende), popis: 'Endabrechnung, Arbeitspapiere und Rückgabe von Firmeneigentum klären.' });
    else if (z && d.art === 'kuendigung') out.push({ nazev: 'Voraussichtliches Ende (ein Monat zum Monatsletzten)', datum: isoDatum(dienstendeAT(z)), popis: 'Bei Zugang im Monat der Unterschrift. Dienstvertrag und Kollektivvertrag können anderes vorsehen.' });
    return out;
  },
  coDal: [
    'Unterschreiben und so übergeben, dass Sie den Zugang beweisen können: persönlich gegen Bestätigung auf einer Kopie oder eingeschrieben.',
    'Die Frist läuft erst ab dem Zugang beim Arbeitgeber – per Post zählt das Einlangen, nicht das Absenden.',
    'Bei einvernehmlicher Auflösung: Beide unterschreiben das Schreiben, jede Seite erhält ein Exemplar.',
    'Resturlaub, Endabrechnung und Arbeitspapiere ansprechen; Fragen beantworten Arbeiterkammer und Gewerkschaft.',
  ],
  kontrola: [
    'Seit Oktober 2021 gilt für Angestellte und Arbeiter/innen grundsätzlich dasselbe: ein Monat Kündigungsfrist zum Monatsletzten. Der Dienstvertrag kann die Frist auf bis zu ein halbes Jahr verlängern ([USP](https://www.usp.gv.at/themen/mitarbeiter-und-gesundheit/beendigung-des-arbeitsverhaeltnisses/kuendigung.html)).',
    'Schauen Sie in Ihren Kollektivvertrag: Er kann Form, Fristen und Termine regeln – in Branchen mit überwiegend Saisonbetrieben auch abweichende Termine. Auskunft geben Gewerkschaft und Arbeiterkammer.',
    'Die Kündigung ist grundsätzlich formfrei. Verlangt der Kollektivvertrag oder der Dienstvertrag die Schriftform, ist eine mündliche Kündigung unwirksam – schriftlich sind Sie immer auf der sicheren Seite.',
    'Beispiel: Für ein Ende am 30. Juni muss die Kündigung spätestens am 31. Mai beim Arbeitgeber eingelangt sein ([Arbeiterkammer](https://www.arbeiterkammer.at/beratung/arbeitundrecht/beendigung/Arbeitnehmer-Kuendigung.html)).',
    'Befristetes Dienstverhältnis: Es endet mit Zeitablauf und ist nur kündbar, wenn das ausdrücklich vereinbart ist.',
    'Probezeit (höchstens ein Monat): Beide Seiten können jederzeit ohne Frist und ohne Grund lösen.',
    'Wer Frist oder Termin nicht einhält, beendet das Dienstverhältnis trotzdem – riskiert aber Schadenersatz und je nach Kollektivvertrag Sonderzahlungen.',
    'Einvernehmliche Auflösung: grundsätzlich formfrei, schriftlich aber zwingend während Schwangerschaft, Schutzfrist oder Elternkarenz, bei Lehrverhältnissen (mit Rechtsbelehrung) und im Präsenz- oder Zivildienst.',
    'Arbeitslosengeld: Nach einer Selbstkündigung beginnt der Anspruch laut Arbeiterkammer frühestens nach einer Sperrfrist von vier Wochen.',
  ],
  zdroje: [ANGG, ABGB_1159, USP_KUENDIGUNG, USP_ARTEN, AK_AN_KUENDIGUNG],

  kroky: [
    {
      id: 'arbeitnehmer',
      nazev: 'Ihre Daten',
      pole: [
        { id: 'an_name', typ: 'text', popis: 'Vor- und Nachname', napoveda: 'So, wie im Dienstvertrag.', placeholder: 'z. B. Lukas Gruber', sirka: 34, autocomplete: 'name' },
        { id: 'an_adresse', typ: 'text', popis: 'Anschrift', napoveda: 'Ihre aktuelle Wohnadresse – dorthin kommen Endabrechnung und Arbeitspapiere.', placeholder: 'z. B. Landstraße 8, 4020 Linz', sirka: 46, autocomplete: 'street-address' },
        { id: 'an_persnr', typ: 'text', popis: 'Personalnummer (optional)', napoveda: 'Erleichtert der Personalabteilung die Zuordnung.', placeholder: 'z. B. 10234', sirka: 14, polovina: true },
        { id: 'position', typ: 'text', popis: 'Tätigkeit bzw. Position', napoveda: 'Wie im Dienstvertrag oder Dienstzettel.', placeholder: 'z. B. Bürokauffrau', sirka: 24, polovina: true },
        { id: 'beginn', typ: 'datum', popis: 'Beginn des Dienstverhältnisses (optional)', napoveda: 'Eintrittsdatum laut Dienstvertrag.', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'arbeitgeber',
      nazev: 'Arbeitgeber/in',
      pole: [
        { id: 'ag_name', typ: 'text', popis: 'Firma bzw. Name', napoveda: 'Genau wie im Dienstvertrag.', placeholder: 'z. B. Muster Handels GmbH', sirka: 34 },
        { id: 'ag_zh', typ: 'text', popis: 'Zu Handen (optional)', napoveda: 'Vorgesetzte Person oder Personalabteilung.', placeholder: 'z. B. Personalabteilung, Frau Mag. Berger', sirka: 34 },
        { id: 'ag_adresse', typ: 'text', popis: 'Anschrift', napoveda: 'Firmensitz oder Adresse der Personalabteilung.', placeholder: 'z. B. Industriestraße 5, 4020 Linz', sirka: 46 },
      ],
    },
    {
      id: 'beendigung',
      nazev: 'Beendigung',
      popis: 'Kündigung können Sie allein aussprechen. Die einvernehmliche Auflösung braucht die Zustimmung des Arbeitgebers, dafür ist das Enddatum frei vereinbar.',
      pole: [
        {
          id: 'art',
          typ: 'volba',
          popis: 'Wie soll das Dienstverhältnis enden?',
          napoveda: 'Kündigung = einseitig mit Frist. Einvernehmliche Auflösung = Vorschlag an den Arbeitgeber, beide unterschreiben.',
          moznosti: [
            { hodnota: 'kuendigung', popis: 'Kündigung unter Einhaltung der Frist' },
            { hodnota: 'probezeit', popis: 'Auflösung in der Probezeit' },
            { hodnota: 'einvernehmlich', popis: 'Einvernehmliche Auflösung (Vorschlag)' },
          ],
        },
        { id: 'ende', typ: 'datum', popis: 'Letzter Tag des Dienstverhältnisses', napoveda: 'Bei Kündigung meist der Monatsletzte des Folgemonats nach Zugang – prüfen Sie Dienst- und Kollektivvertrag. Bei einvernehmlicher Auflösung das gewünschte Datum.', sirka: 14, polovina: true },
        {
          id: 'anliegen',
          typ: 'vice',
          popis: 'Was möchten Sie zusätzlich ansprechen?',
          napoveda: 'Beim Ende haben Sie Anspruch auf Endabrechnung und Arbeitspapiere. Den Urlaubsverbrauch während der Frist müssen Sie vereinbaren.',
          moznosti: [
            { hodnota: 'bestaetigung', popis: 'Bitte um schriftliche Bestätigung des Erhalts' },
            { hodnota: 'urlaub', popis: 'Vereinbarung über den Resturlaub' },
            { hodnota: 'papiere', popis: 'Endabrechnung und Arbeitspapiere' },
          ],
        },
        { id: 'ort', typ: 'text', popis: 'Ort', napoveda: 'Wir übernehmen den Ort aus Ihrer Anschrift.', placeholder: 'z. B. Linz', sirka: 18, polovina: true, vychozi: { obecZ: 'an_adresse' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heutiges Datum vorausgefüllt.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Absender/in',
      vysvetleni: 'Wer das Dienstverhältnis beendet.',
      odstavce: ['{{an_name}}, {{an_adresse}}, Personalnummer {{an_persnr}}'],
    },
    {
      nadpis: 'An',
      vysvetleni: 'Arbeitgeber/in – die Erklärung wirkt erst, wenn sie dort einlangt.',
      odstavce: ['{{ag_name}}, z. H. {{ag_zh}}, {{ag_adresse}}'],
    },
    {
      nadpis: 'Beendigung des Dienstverhältnisses',
      vysvetleni: 'Kündigung, Lösung in der Probezeit oder Vorschlag zur einvernehmlichen Auflösung – mit dem letzten Arbeitstag.',
      odstavce: [
        'Sehr geehrte Damen und Herren,',
        {
          volba: 'art',
          uvodVzor: 'Art der Beendigung (bitte ankreuzen):',
          moznosti: {
            kuendigung: 'hiermit kündige ich mein Dienstverhältnis als {{position}} (Beginn: {{beginn}}) unter Einhaltung der Kündigungsfrist. Nach meiner Berechnung endet das Dienstverhältnis mit {{ende}}. Sollte sich aus Dienstvertrag oder Kollektivvertrag ein anderer Termin ergeben, gilt die Kündigung zum nächstmöglichen Termin.',
            probezeit: 'hiermit löse ich mein Dienstverhältnis als {{position}} (Beginn: {{beginn}}) während der vereinbarten Probezeit auf. Letzter Tag des Dienstverhältnisses ist der {{ende}}.',
            einvernehmlich: 'ich schlage vor, mein Dienstverhältnis als {{position}} (Beginn: {{beginn}}) einvernehmlich mit {{ende}} aufzulösen. Wenn Sie einverstanden sind, bestätigen Sie dies bitte mit Ihrer Unterschrift auf diesem Schreiben. Bis dahin besteht das Dienstverhältnis unverändert fort.',
          },
        },
      ],
    },
    {
      nadpis: 'Weitere Anliegen',
      vysvetleni: 'Was zum Ende des Dienstverhältnisses noch zu klären ist.',
      odstavce: [
        {
          vice: 'anliegen',
          uvod: 'Ich ersuche Sie außerdem um:',
          moznosti: {
            bestaetigung: 'eine schriftliche Bestätigung des Erhalts dieses Schreibens',
            urlaub: 'eine Vereinbarung über den Verbrauch bzw. die Abgeltung meines offenen Urlaubs',
            papiere: 'die Endabrechnung und die Übermittlung der Arbeitspapiere an meine oben genannte Anschrift',
          },
        },
        'Für die Zusammenarbeit bedanke ich mich.',
        'Mit freundlichen Grüßen',
      ],
    },
  ],
};
