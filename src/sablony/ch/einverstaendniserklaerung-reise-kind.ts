/**
 * Einverständniserklärung der Eltern für die Reise eines minderjährigen Kindes ins Ausland – Schweiz.
 * Geprüft 2026-11-20 (EDA „Reisen mit Minderjährigen“, EDA Reiseinformationen):
 *  - Dringend empfohlen, wenn Minderjährige allein oder ohne ihre gesetzlichen Vertreter reisen; Behörden einiger Länder
 *    können sie bei Ein- oder Ausreise verlangen. Zusätzlich zum Ausweis (Pass oder Identitätskarte) des Kindes.
 *  - Inhalt laut EDA: Personalien und Telefonnummern der gesetzlichen Vertreter, Datum, Reiseziel, Aufenthaltsdauer, Reisegrund.
 *  - Ein weisses Blatt genügt, ausser das Zielland verlangt ausdrücklich ein Format; einige Länder haben ein eigenes Formular.
 *  - Unterschrift falls nötig von der Wohngemeinde oder einem Notar beglaubigen lassen.
 *  - Bedingungen bei der Vertretung des Ziellandes erfragen; Reisehinweise des EDA nach Land.
 * Struktur nach CZ-SOUHLAS-CESTA-DITE, Text nach Schweizer Empfehlungen.
 */
import type { Sablona } from '../typy';
import { schweiz, paticka } from './schweiz';
import { EDA_MINDERJAEHRIGE, EDA_REISEINFO, EDA_REISEHINWEISE, BJ_KINDESENTFUEHRUNG } from './quellen';

export const einverstaendniserklaerungReiseKindCH: Sablona = schweiz({
  kod: 'CH-REISE-KIND',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'ch',
  jazyk: 'de-CH',
  nazev: 'Einverständniserklärung',
  podnadpis: 'der Eltern für die Auslandreise eines minderjährigen Kindes (nach Empfehlung des EDA)',
  souborPdf: 'einverstaendniserklaerung-reise-kind',
  paticka: paticka('CH-REISE-KIND'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Elternteil / gesetzliche Vertretung 1', vpravo: 'Elternteil / gesetzliche Vertretung 2' },
  slovo: { n: 'Einverständniserklärung', g: 'Einverständniserklärung', a: 'Einverständniserklärung', l: 'Einverständniserklärung' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  podpisNaZarizeni: false,
  podpisPoznamka:
    'Die Erklärung von Hand unterschreiben. Falls nötig, lassen Sie die Unterschrift bei Ihrer Wohngemeinde oder bei einem Notar beglaubigen – das geht nur mit eigenhändiger Unterschrift auf Papier.',
  coDal: [
    'Von Hand unterschreiben – wer das Kind nicht begleitet. Falls das Zielland es verlangt oder Sie sichergehen wollen: Unterschrift bei der Wohngemeinde oder einem Notar beglaubigen lassen.',
    'Das Kind bzw. die Begleitperson nimmt das Original mit, dazu den gültigen Pass oder die Identitätskarte des Kindes. Eine Kopie zu Hause behalten.',
    'Einreisebestimmungen des Ziel- und der Transitländer bei der Botschaft oder dem Konsulat prüfen und die Reisehinweise des EDA lesen.',
    'Während der Reise erreichbar bleiben – die Telefonnummern stehen in der Erklärung.',
  ],
  kontrola: [
    'Das EDA empfiehlt die Erklärung dringend, wenn Minderjährige allein oder ohne ihre gesetzlichen Vertreter reisen; Behörden einiger Länder verlangen sie bei der Ein- oder Ausreise ([EDA – Reisen mit Minderjährigen](https://www.eda.admin.ch/de/reisen-mit-minderjaehrigen)).',
    'Jedes Land hat eigene Regeln. Fragen Sie bei der Vertretung des Ziellandes nach, ob eine schriftliche Einwilligung nötig ist und in welcher Form ([EDA – Reisedokumente, Visum und Einreise](https://www.eda.admin.ch/de/reiseinformationen)). Einige Länder haben ein eigenes Formular – dann dieses verwenden.',
    'Reisehinweise des EDA für Ziel- und Transitland lesen ([EDA – Reisen ins Ausland](https://www.eda.admin.ch/de/reisen-ins-ausland)).',
    'Namen, Geburtsdaten und Ausweisnummern genau wie im Pass oder in der Identitätskarte übernehmen.',
    'Konkretes Reiseziel und genaue Reisedaten angeben – eine Erklärung „überallhin, jederzeit“ wirkt wenig glaubwürdig.',
    'Telefonnummern mit Landesvorwahl (+41) angeben, damit Grenz- oder Flughafenbehörden Sie erreichen.',
    'Die Erklärung gilt für eine Reise. Ein Umzug ins Ausland ist etwas anderes – bei gemeinsamer elterlicher Sorge regeln die Eltern alles, was das Kind betrifft, gemeinsam ([Bundesamt für Justiz](https://www.bj.admin.ch/bj/de/home/gesellschaft/kindesentfuehrung.html)).',
  ],
  zdroje: [EDA_MINDERJAEHRIGE, EDA_REISEINFO, EDA_REISEHINWEISE, BJ_KINDESENTFUEHRUNG],

  kroky: [
    {
      id: 'eltern',
      nazev: 'Eltern / gesetzliche Vertretung',
      popis: 'In der Regel die Eltern mit elterlicher Sorge. Reist ein Elternteil mit, unterschreibt der andere.',
      pole: [
        { id: 'r1_jmeno', typ: 'text', popis: 'Elternteil 1 – Vor- und Nachname', napoveda: 'Elternteil oder andere Person mit elterlicher Sorge (z. B. Vormund).', placeholder: 'z. B. Anna Muster', sirka: 34, autocomplete: 'name' },
        { id: 'r1_narozeni', typ: 'datum', popis: 'Geburtsdatum', napoveda: 'Wie im Ausweis.', sirka: 14, polovina: true },
        { id: 'r1_doklad', typ: 'text', popis: 'Pass- oder ID-Nummer', napoveda: 'Hilft den Behörden, die Identität zu prüfen.', placeholder: 'z. B. X1234567', sirka: 14, polovina: true },
        { id: 'r1_adresa', typ: 'text', popis: 'Adresse', napoveda: 'Wohnadresse.', placeholder: 'z. B. Bahnhofstrasse 12, 8001 Zürich', sirka: 46 },
        { id: 'r1_telefon', typ: 'text', popis: 'Telefon', napoveda: 'Während der Reise erreichbar, mit Vorwahl +41.', placeholder: 'z. B. +41 79 123 45 67', sirka: 18, polovina: true },
        { id: 'r2_jmeno', typ: 'text', popis: 'Elternteil 2 – Vor- und Nachname (optional)', napoveda: 'Der andere Elternteil. Reist er mit dem Kind, muss er nicht unterschreiben – dann leer lassen.', placeholder: 'z. B. Marco Muster', sirka: 34 },
        { id: 'r2_narozeni', typ: 'datum', popis: 'Geburtsdatum', napoveda: 'Wie im Ausweis.', sirka: 14, polovina: true },
        { id: 'r2_doklad', typ: 'text', popis: 'Pass- oder ID-Nummer', napoveda: 'Aus dem Ausweis des zweiten Elternteils.', placeholder: 'z. B. S7654321', sirka: 14, polovina: true },
        { id: 'r2_telefon', typ: 'text', popis: 'Telefon', napoveda: 'Mit Vorwahl +41.', placeholder: 'z. B. +41 79 765 43 21', sirka: 18, polovina: true },
      ],
    },
    {
      id: 'kind',
      nazev: 'Kind',
      pole: [
        { id: 'd_jmeno', typ: 'text', popis: 'Vor- und Nachname des Kindes', napoveda: 'Genau wie im Pass oder in der Identitätskarte des Kindes.', placeholder: 'z. B. Lena Muster', sirka: 34 },
        { id: 'd_narozeni', typ: 'datum', popis: 'Geburtsdatum des Kindes', napoveda: 'Wie im Ausweis.', sirka: 14, polovina: true },
        { id: 'd_doklad', typ: 'text', popis: 'Pass- oder ID-Nummer des Kindes', napoveda: 'Nummer des Ausweises, mit dem das Kind reist.', placeholder: 'z. B. X7654321', sirka: 14, polovina: true },
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
          napoveda: 'Die Begleitperson sollte in der Erklärung mit Namen stehen.',
          moznosti: [
            { hodnota: 'elternteil', popis: 'Mit dem anderen Elternteil' },
            { hodnota: 'andere', popis: 'Mit einer anderen Person (Grosseltern, Verwandte, Lagerleitung …)' },
            { hodnota: 'allein', popis: 'Allein (z. B. Flug mit Betreuung der Airline)' },
          ],
        },
        { id: 'o_jmeno', typ: 'text', popis: 'Begleitperson – Vor- und Nachname', napoveda: 'Wer mit dem Kind reist.', placeholder: 'z. B. Rosa Muster', sirka: 34, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'andere'] } },
        { id: 'o_narozeni', typ: 'datum', popis: 'Geburtsdatum der Begleitperson', napoveda: 'Wie im Ausweis der Begleitperson.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'andere'] } },
        { id: 'o_doklad', typ: 'text', popis: 'Pass- oder ID-Nummer der Begleitperson', napoveda: 'Ausweis, mit dem die Begleitperson reist.', placeholder: 'z. B. X1122334', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'andere'] } },
        { id: 'o_beziehung', typ: 'text', popis: 'Beziehung zum Kind', napoveda: 'Z. B. Grossmutter, Tante, Lagerleiter.', placeholder: 'z. B. Grossmutter', sirka: 16, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: 'andere' } },
        { id: 'zielland', typ: 'text', popis: 'Reiseziel (und Transitländer)', napoveda: 'Alle Länder, in die das Kind reist oder durch die es fährt. Die Bedingungen jedes Landes beim EDA bzw. der Botschaft prüfen.', placeholder: 'z. B. Italien (über Österreich)', sirka: 46 },
        { id: 'adresse_ausland', typ: 'text', popis: 'Aufenthaltsadresse (optional)', napoveda: 'Hotel, Ferienwohnung oder Lager im Ausland.', placeholder: 'z. B. Hotel Mare, Via Roma 1, Rimini', sirka: 46 },
        { id: 'od', typ: 'datum', popis: 'Abreise', napoveda: 'Datum der Abreise.', sirka: 14, polovina: true },
        { id: 'do', typ: 'datum', popis: 'Rückreise', napoveda: 'Datum der Rückkehr.', sirka: 14, polovina: true },
        { id: 'zweck', typ: 'text', popis: 'Reisegrund', napoveda: 'Das EDA nennt den Reisegrund als Inhalt der Erklärung.', placeholder: 'z. B. Sommerferien, Sprachaufenthalt, Lager', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Ort', napoveda: 'Wir übernehmen den Ort aus der Adresse von Elternteil 1.', placeholder: 'z. B. Zürich', sirka: 18, polovina: true, vychozi: { obecZ: 'r1_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heute vorausgefüllt. Bei der Beglaubigung können Sie es von Hand ergänzen.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Eltern / gesetzliche Vertretung',
      vysvetleni: 'Wer zustimmt. Die Telefonnummern helfen Behörden an der Grenze oder am Flughafen.',
      odstavce: [
        '{{r1_jmeno}}, geb. {{r1_narozeni}}, Ausweis-Nr. {{r1_doklad}}, wohnhaft {{r1_adresa}}, Telefon {{r1_telefon}}',
        '{{r2_jmeno}}, geb. {{r2_narozeni}}, Ausweis-Nr. {{r2_doklad}}, Telefon {{r2_telefon}}',
      ],
    },
    {
      nadpis: 'Einverständnis',
      vysvetleni: 'Mit wem und wohin das Kind reisen darf. Je genauer, desto weniger Fragen an der Grenze.',
      odstavce: [
        'Als Inhaber/in der elterlichen Sorge erkläre ich (erklären wir) mich (uns) damit einverstanden, dass unser minderjähriges Kind',
        '{{d_jmeno}}, geb. {{d_narozeni}}, Ausweis-Nr. {{d_doklad}},',
        {
          volba: 'begleitung',
          uvodVzor: 'reist (eine ankreuzen):',
          moznosti: {
            elternteil: 'in Begleitung des anderen Elternteils {{o_jmeno}}, geb. {{o_narozeni}}, Ausweis-Nr. {{o_doklad}},',
            andere: 'in Begleitung von {{o_jmeno}}, geb. {{o_narozeni}}, Ausweis-Nr. {{o_doklad}} ({{o_beziehung}}),',
            allein: 'allein,',
          },
        },
        'nach {{zielland}} reist, vom {{od}} bis {{do}}, Aufenthaltsort: {{adresse_ausland}}, Reisegrund: {{zweck}}.',
        'Für die Dauer der Reise beauftrage(n) ich (wir) die Begleitperson bzw. die verantwortliche Betreuungsperson, für das Kind zu sorgen und die nötigen Entscheidungen in seinem Interesse zu treffen, einschliesslich der Zustimmung zu dringend nötiger medizinischer Behandlung.',
      ],
    },
  ],
});
