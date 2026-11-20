/**
 * Einverständniserklärung / Reisevollmacht für Minderjährige – Österreich.
 * Inhalt nach oesterreich.gv.at (Urlaub im Ausland ohne Eltern; Reisen in der EU): Name, Geburtsdatum, Adresse und Telefon
 * der Eltern und des Kindes; Reise allein, mit einem Elternteil oder mit anderen Personen; Kopie der Geburtsurkunde,
 * Passkopien der Eltern, bei verschiedenen Nachnamen Heiratsurkunde. Übersetzung und Beglaubigung können je nach Land nötig sein
 * (Beglaubigung: Notar oder Bezirksgericht). Mehrsprachige Muster: ÖAMTC (von oesterreich.gv.at verlinkt).
 * Bedingungen des Ziellandes: Reiseinformationen des BMEIA bzw. Vertretung des Ziellandes.
 * Bei jeder Textänderung `verze` und `aktualizovano` erhöhen.
 */
import type { Sablona } from '../typy';
import { OEGV_URLAUB_OHNE_ELTERN, OEGV_REISEN_EU, OEGV_BEGLAUBIGUNG, BMEIA_REISEINFO, OEAMTC_REISEVOLLMACHT } from './quellen';

export const reisevollmachtKindAT: Sablona = {
  kod: 'AT-REISEVOLLMACHT-KIND',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'at',
  jazyk: 'de',
  nazev: 'Einverständniserklärung für die Auslandsreise eines minderjährigen Kindes',
  podnadpis: 'Reisevollmacht der Obsorgeberechtigten für eine Reise ohne Eltern oder mit nur einem Elternteil',
  souborPdf: 'reisevollmacht-kind',
  paticka: 'Kostenlos erstellt · Vorlage AT-REISEVOLLMACHT-KIND v1.0 · nach den Hinweisen von oesterreich.gv.at · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'ort',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Obsorgeberechtigte/r 1 (ggf. beglaubigte Unterschrift)', vpravo: 'Obsorgeberechtigte/r 2 (ggf. beglaubigte Unterschrift)' },
  slovo: { n: 'Einverständniserklärung', g: 'Einverständniserklärung', a: 'Einverständniserklärung', l: 'Einverständniserklärung' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  podpisNaZarizeni: false,
  podpisPoznamka:
    'Manche Länder verlangen eine beglaubigte Unterschrift. Beglaubigen können Notar/innen und Bezirksgerichte – sie bestätigen, dass die Unterschrift von Ihnen stammt. Deshalb unterschreiben Sie die Erklärung von Hand.',
  coDal: [
    'Bedingungen des Ziellandes und der Transitländer in den Reiseinformationen des Außenministeriums (BMEIA) oder bei der Botschaft des Landes prüfen.',
    'Unterschreiben – wenn das Zielland es verlangt, mit Beglaubigung bei Notar/in oder Bezirksgericht.',
    'Für nicht deutschsprachige Länder eine Fassung auf Englisch oder in der Landessprache mitgeben (z. B. mehrsprachiges ÖAMTC-Muster) oder übersetzen lassen.',
    'Mitgeben: Original der Erklärung, eigener Reisepass bzw. Personalausweis des Kindes, Kopie der Geburtsurkunde und Passkopien der Eltern.',
  ],
  kontrola: [
    'Eine allgemeine gesetzliche Pflicht gibt es nicht – ob die Erklärung nötig ist, hängt vom Reiseland ab. Prüfen Sie die [Reiseinformationen des BMEIA](https://www.bmeia.gv.at/reise-services/reiseinformation) für Ziel- und Transitländer; auch Fluglinien und Busunternehmen können eigene Regeln haben.',
    'Am besten unterschreiben beide Obsorgeberechtigten. Laut oesterreich.gv.at genügt das Einverständnis nur eines Elternteils möglicherweise nicht.',
    'Reist das Kind mit nur einem Elternteil, unterschreibt jedenfalls der Elternteil, der nicht mitreist.',
    'Namen, Geburtsdaten und Passnummern genau wie in den Reisedokumenten eintragen. Jedes Kind braucht einen eigenen Reisepass oder Personalausweis.',
    'Konkretes Reiseland und genauen Zeitraum angeben – eine Erklärung „für alle Reisen“ wird eher hinterfragt.',
    'Beilagen: Kopie der Geburtsurkunde, Passkopien der Eltern; bei verschiedenen Nachnamen eine Kopie der Heiratsurkunde. Bei alleiniger Obsorge einen Nachweis (z. B. Gerichtsbeschluss) mitgeben.',
    'Beglaubigung und Übersetzung können je nach Land nötig sein ([oesterreich.gv.at](https://www.oesterreich.gv.at/de/themen/reisen_und_freizeit/vorschriften-fuer-jugendliche/verhaltensregeln-im-alltag-und-auf-reisen/2/Seite.1740307)). Beglaubigen: Notar/in oder Bezirksgericht.',
    'Im Ausland gilt der Jugendschutz des Urlaubslandes – Auskunft gibt die Botschaft oder das Konsulat des Landes.',
  ],
  zdroje: [OEGV_URLAUB_OHNE_ELTERN, OEGV_REISEN_EU, OEGV_BEGLAUBIGUNG, BMEIA_REISEINFO, OEAMTC_REISEVOLLMACHT],

  kroky: [
    {
      id: 'eltern',
      nazev: 'Obsorgeberechtigte',
      popis: 'Meist beide Eltern. Reist ein Elternteil mit, muss jedenfalls der andere unterschreiben.',
      pole: [
        { id: 'e1_name', typ: 'text', popis: 'Obsorgeberechtigte/r 1 – Vor- und Nachname', napoveda: 'Elternteil oder andere obsorgeberechtigte Person.', placeholder: 'z. B. Katharina Bauer', sirka: 34, autocomplete: 'name' },
        { id: 'e1_geburt', typ: 'datum', popis: 'Geburtsdatum', napoveda: 'Laut Reisepass oder Personalausweis.', sirka: 14, polovina: true },
        { id: 'e1_pass', typ: 'text', popis: 'Reisepass- oder Ausweisnummer', napoveda: 'Hilft bei der Kontrolle, Ihre Identität zu prüfen.', placeholder: 'z. B. P1234567', sirka: 14, polovina: true },
        { id: 'e1_adresse', typ: 'text', popis: 'Wohnadresse', napoveda: 'Hauptwohnsitz.', placeholder: 'z. B. Schillerstraße 4, 5020 Salzburg', sirka: 46, autocomplete: 'street-address' },
        { id: 'e1_telefon', typ: 'text', popis: 'Telefon (während der Reise erreichbar)', napoveda: 'Mit Vorwahl +43, damit Sie aus dem Ausland erreichbar sind.', placeholder: 'z. B. +43 664 1234567', sirka: 18, polovina: true },
        { id: 'e2_name', typ: 'text', popis: 'Obsorgeberechtigte/r 2 – Vor- und Nachname (optional)', napoveda: 'Der zweite Elternteil. Bei alleiniger Obsorge leer lassen und einen Nachweis beilegen.', placeholder: 'z. B. Florian Bauer', sirka: 34 },
        { id: 'e2_geburt', typ: 'datum', popis: 'Geburtsdatum', napoveda: 'Laut Reisedokument.', sirka: 14, polovina: true },
        { id: 'e2_pass', typ: 'text', popis: 'Reisepass- oder Ausweisnummer', napoveda: 'Laut Dokument des zweiten Elternteils.', placeholder: 'z. B. P7654321', sirka: 14, polovina: true },
        { id: 'e2_adresse', typ: 'text', popis: 'Wohnadresse (falls abweichend)', napoveda: 'Nur ausfüllen, wenn sie anders als oben ist.', placeholder: 'z. B. Linzer Gasse 10, 5020 Salzburg', sirka: 46 },
        { id: 'e2_telefon', typ: 'text', popis: 'Telefon', napoveda: 'Mit Vorwahl +43.', placeholder: 'z. B. +43 676 7654321', sirka: 18, polovina: true },
      ],
    },
    {
      id: 'kind',
      nazev: 'Kind',
      pole: [
        { id: 'k_name', typ: 'text', popis: 'Vor- und Nachname des Kindes', napoveda: 'Genau wie im Reisepass bzw. Personalausweis des Kindes.', placeholder: 'z. B. Lena Bauer', sirka: 34 },
        { id: 'k_geburt', typ: 'datum', popis: 'Geburtsdatum des Kindes', napoveda: 'Laut Reisedokument.', sirka: 14, polovina: true },
        { id: 'k_pass', typ: 'text', popis: 'Reisepass- oder Ausweisnummer des Kindes', napoveda: 'Jedes Kind braucht ein eigenes Reisedokument.', placeholder: 'z. B. P2345678', sirka: 14, polovina: true },
        { id: 'k_adresse', typ: 'text', popis: 'Wohnadresse des Kindes (falls abweichend)', napoveda: 'Nur ausfüllen, wenn das Kind nicht bei Obsorgeberechtigter/m 1 wohnt.', placeholder: 'z. B. Schillerstraße 4, 5020 Salzburg', sirka: 46 },
      ],
    },
    {
      id: 'reise',
      nazev: 'Reise',
      pole: [
        {
          id: 'begleitung',
          typ: 'volba',
          popis: 'Mit wem reist das Kind?',
          napoveda: 'Die Begleitperson muss in der Erklärung namentlich genannt sein.',
          moznosti: [
            { hodnota: 'elternteil', popis: 'Mit einem Elternteil' },
            { hodnota: 'andere', popis: 'Mit einer anderen Person (Großeltern, Verwandte, Lager, Schule …)' },
            { hodnota: 'allein', popis: 'Allein (z. B. Flug mit Betreuung der Fluglinie)' },
          ],
        },
        { id: 'b_name', typ: 'text', popis: 'Begleitperson – Vor- und Nachname', napoveda: 'Wer mit dem Kind reist.', placeholder: 'z. B. Margarete Bauer', sirka: 34, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'andere'] } },
        { id: 'b_geburt', typ: 'datum', popis: 'Geburtsdatum der Begleitperson', napoveda: 'Laut Reisedokument.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'andere'] } },
        { id: 'b_pass', typ: 'text', popis: 'Reisepass- oder Ausweisnummer', napoveda: 'Das Dokument, mit dem die Begleitperson reist.', placeholder: 'z. B. P3456789', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'andere'] } },
        { id: 'b_beziehung', typ: 'text', popis: 'Beziehung zum Kind', napoveda: 'Zum Beispiel Großmutter, Onkel, Lagerleiter.', placeholder: 'z. B. Großmutter', sirka: 16, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: 'andere' } },
        { id: 'ziel', typ: 'text', popis: 'Reiseland (und Transitländer)', napoveda: 'Alle Länder, in die das Kind reist oder durch die es fährt. Prüfen Sie für jedes die Reiseinformationen des BMEIA.', placeholder: 'z. B. Kroatien (über Slowenien)', sirka: 46 },
        { id: 'von', typ: 'datum', popis: 'Reise von', napoveda: 'Abreisedatum.', sirka: 14, polovina: true },
        { id: 'bis', typ: 'datum', popis: 'Reise bis', napoveda: 'Rückreisedatum.', sirka: 14, polovina: true },
        { id: 'zweck', typ: 'text', popis: 'Zweck der Reise (optional)', napoveda: 'Zum Beispiel Urlaub, Sprachreise, Sommerlager.', placeholder: 'z. B. Sommerurlaub', sirka: 30 },
        {
          id: 'beilagen',
          typ: 'vice',
          popis: 'Welche Kopien legen Sie bei?',
          napoveda: 'Empfohlen sind Geburtsurkunde und Passkopien; bei verschiedenen Nachnamen die Heiratsurkunde.',
          moznosti: [
            { hodnota: 'geburtsurkunde', popis: 'Kopie der Geburtsurkunde des Kindes' },
            { hodnota: 'paesse', popis: 'Kopien der Reisepässe bzw. Ausweise der Eltern' },
            { hodnota: 'heiratsurkunde', popis: 'Kopie der Heiratsurkunde der Eltern' },
            { hodnota: 'obsorge', popis: 'Nachweis der alleinigen Obsorge' },
          ],
        },
        { id: 'ort', typ: 'text', popis: 'Ort', napoveda: 'Wir übernehmen den Ort aus der Anschrift von Obsorgeberechtigter/m 1.', placeholder: 'z. B. Salzburg', sirka: 18, polovina: true, vychozi: { obecZ: 'e1_adresse' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heutiges Datum vorausgefüllt. Bei der Beglaubigung können Sie es von Hand ändern.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Obsorgeberechtigte',
      vysvetleni: 'Wer die Zustimmung gibt. Die Telefonnummern helfen den Behörden bei der Grenz- oder Flughafenkontrolle.',
      odstavce: [
        '{{e1_name}}, geb. {{e1_geburt}}, Reisedokument Nr. {{e1_pass}}, wohnhaft {{e1_adresse}}, Telefon {{e1_telefon}}',
        '{{e2_name}}, geb. {{e2_geburt}}, Reisedokument Nr. {{e2_pass}}, wohnhaft {{e2_adresse}}, Telefon {{e2_telefon}}',
      ],
    },
    {
      nadpis: 'Einverständniserklärung',
      vysvetleni: 'Mit wem, wohin und wann das Kind reisen darf. Je konkreter, desto weniger Fragen bei der Kontrolle.',
      odstavce: [
        'Als obsorgeberechtigte(r) Elternteil(e) erkläre(n) ich/wir mich/uns damit einverstanden, dass unser minderjähriges Kind',
        '{{k_name}}, geb. {{k_geburt}}, Reisedokument Nr. {{k_pass}}, wohnhaft {{k_adresse}},',
        {
          volba: 'begleitung',
          uvodVzor: 'reist (bitte ankreuzen):',
          moznosti: {
            elternteil: 'in Begleitung des Elternteils {{b_name}}, geb. {{b_geburt}}, Reisedokument Nr. {{b_pass}},',
            andere: 'in Begleitung von {{b_name}}, geb. {{b_geburt}}, Reisedokument Nr. {{b_pass}} ({{b_beziehung}}),',
            allein: 'allein,',
          },
        },
        'nach {{ziel}} reist, und zwar in der Zeit vom {{von}} bis {{bis}}, Zweck der Reise: {{zweck}}.',
        'Für die Dauer der Reise beauftrage(n) ich/wir die Begleitperson, für das Kind zu sorgen und in dringenden Fällen die in seinem Interesse notwendigen Entscheidungen zu treffen, einschließlich der Zustimmung zu einer notwendigen ärztlichen Behandlung. Wir sind unter den oben genannten Telefonnummern erreichbar.',
      ],
    },
    {
      nadpis: 'Beilagen',
      vysvetleni: 'Kopien, mit denen die Kontrolle die Angaben prüfen kann.',
      odstavce: [
        {
          vice: 'beilagen',
          uvod: 'Dieser Erklärung liegen bei:',
          moznosti: {
            geburtsurkunde: 'Kopie der Geburtsurkunde des Kindes',
            paesse: 'Kopien der Reisepässe bzw. Personalausweise der Obsorgeberechtigten',
            heiratsurkunde: 'Kopie der Heiratsurkunde der Eltern',
            obsorge: 'Nachweis der alleinigen Obsorge',
          },
        },
      ],
    },
  ],
};
