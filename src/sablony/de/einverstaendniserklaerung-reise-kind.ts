/**
 * Einverständniserklärung der Sorgeberechtigten für die Auslandsreise eines minderjährigen Kindes – Deutschland.
 * Inhalt nach den Empfehlungen des Auswärtigen Amts (Daten des Kindes, Daten und Kontakt der Sorgeberechtigten,
 * Reiseroute, ggf. Begleitperson; Kopien von Geburtsurkunde und Ausweisen). Gesetzlich nicht vorgeschrieben,
 * formlos; ob eine Beglaubigung oder Übersetzung nötig ist, richtet sich nach dem Recht des Ziellandes.
 * Für AT/CH über nahrad.ts: Behörden (Auswärtiges Amt, Bundespolizei) stehen in `kontrola`, `coDal`, `zdroje`, `podpisPoznamka`.
 * Bei jeder Textänderung `verze` und `aktualizovano` erhöhen.
 */
import type { Sablona } from '../typy';
import { AA_EINVERSTAENDNIS, AA_REISEHINWEISE, AA_VERTRETUNGEN, BPOL_MINDERJAEHRIGE } from './quellen';

export const einverstaendniserklaerungReiseKind: Sablona = {
  kod: 'DE-REISE-KIND',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Einverständniserklärung',
  podnadpis: 'der Sorgeberechtigten für die Auslandsreise eines minderjährigen Kindes',
  souborPdf: 'einverstaendniserklaerung-reise-kind',
  paticka: 'Kostenlos erstellt · Vorlage DE-REISE-KIND v1.0 · nach den Empfehlungen des Auswärtigen Amts · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'ort',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Sorgeberechtigte/r 1', vpravo: 'Sorgeberechtigte/r 2' },
  slovo: { n: 'Einverständniserklärung', g: 'Einverständniserklärung', a: 'Einverständniserklärung', l: 'Einverständniserklärung' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  podpisNaZarizeni: false,
  podpisPoznamka:
    'Ob die Unterschriften beglaubigt werden sollten und ob eine Beglaubigung aus Deutschland (Notar, Gemeinde- oder Stadtverwaltung) anerkannt wird, hängt nach Auskunft des Auswärtigen Amts vom Recht des Ziellandes ab. Bitte deshalb ausdrucken und von Hand unterschreiben – bei Bedarf vor der beglaubigenden Stelle.',
  coDal: [
    'Ausdrucken und von Hand unterschreiben – von allen Sorgeberechtigten, die nicht mitreisen. Ob eine Beglaubigung nötig ist, hängt vom Zielland ab.',
    'Mitgeben: Original der Erklärung, gültiges Ausweisdokument des Kindes, Kopie der Geburtsurkunde (besonders bei unterschiedlichen Nachnamen) und Kopie der Ausweise der Sorgeberechtigten.',
    'Einreisebestimmungen des Ziel- und Transitlandes in den Reise- und Sicherheitshinweisen des Auswärtigen Amts prüfen; verbindlich informiert die Botschaft bzw. das Konsulat des Ziellandes in Deutschland.',
    'Gegebenenfalls eine Übersetzung in die Landessprache anfertigen lassen.',
    'Während der Reise telefonisch erreichbar bleiben.',
  ],
  kontrola: [
    'Die Erklärung ist gesetzlich nicht vorgeschrieben, wird aber vom [Auswärtigen Amt](https://www.auswaertiges-amt.de/de/service/fragenkatalog-node/11-kindohneeltern-606308) empfohlen, wenn ein Kind ohne beide Eltern oder nur mit einem Elternteil ins Ausland reist.',
    'Inhalt laut Auswärtigem Amt: Angaben zum Kind, Angaben und Kontaktdaten der Sorgeberechtigten, Reiseroute und ggf. Angaben zu erwachsenen Begleitpersonen.',
    'Namen, Geburtsdaten und Ausweisnummern genau aus den Ausweisdokumenten übernehmen.',
    'Konkrete Länder und Reisezeitraum angeben – eine Erklärung „für alle Reisen“ hilft an der Grenze wenig.',
    'Beglaubigung und Übersetzung: Ob sie nötig sind und ob eine deutsche Beglaubigung anerkannt wird, richtet sich nach dem Zielland. Prüfen Sie die [Reise- und Sicherheitshinweise](https://www.auswaertiges-amt.de/DE/Laenderinformationen/LaenderReiseinformationen_node.html) (Einreisebestimmungen) oder fragen Sie die [Vertretung des Ziellandes](https://www.auswaertiges-amt.de/DE/Laenderinformationen/VertretungenFremderStaatenA-Z-Laenderauswahlseite_node.html).',
    'Manche Länder oder Fluggesellschaften verlangen eigene Formulare – dann diese verwenden.',
    'Hat ein Elternteil das alleinige Sorgerecht, kann zusätzlich der gerichtliche Sorgerechtsbeschluss (mit Übersetzung) sinnvoll sein.',
    'Weitere Hinweise gibt die [Bundespolizei](https://bundespolizei.de/sicher-auf-reisen/passrechtliche-hinweise/reisen-mit-minderjaehrigen).',
  ],
  zdroje: [AA_EINVERSTAENDNIS, AA_REISEHINWEISE, AA_VERTRETUNGEN, BPOL_MINDERJAEHRIGE],
  kroky: [
    {
      id: 'eltern',
      nazev: 'Sorgeberechtigte',
      popis: 'In der Regel beide Eltern. Reist ein Elternteil mit, genügt oft die Erklärung des anderen.',
      pole: [
        { id: 'e1_name', typ: 'text', popis: 'Sorgeberechtigte/r 1 – Vor- und Nachname', napoveda: 'Elternteil oder Vormund – wie im Ausweis.', placeholder: 'z. B. Anna Schmidt', sirka: 34, autocomplete: 'name' },
        { id: 'e1_geburt', typ: 'datum', popis: 'Geburtsdatum', napoveda: 'Laut Ausweis.', sirka: 14, polovina: true },
        { id: 'e1_ausweis', typ: 'text', popis: 'Ausweis- oder Passnummer', napoveda: 'Hilft, die Unterschrift zuzuordnen. Eine Kopie des Ausweises mitgeben.', placeholder: 'z. B. L01X00T47', sirka: 14, polovina: true },
        { id: 'e1_adresse', typ: 'text', popis: 'Anschrift', napoveda: 'Wohnanschrift.', placeholder: 'z. B. Lindenstraße 7, 10115 Berlin', sirka: 46 },
        { id: 'e1_telefon', typ: 'text', popis: 'Telefon (mit +49)', napoveda: 'Damit Grenzbehörden oder Fluggesellschaft Sie erreichen können.', placeholder: 'z. B. +49 171 1234567', sirka: 18, polovina: true, autocomplete: 'tel' },
        { id: 'e2_name', typ: 'text', popis: 'Sorgeberechtigte/r 2 – Vor- und Nachname (optional)', napoveda: 'Zweiter Elternteil. Reist er mit dem Kind, kann das Feld leer bleiben.', placeholder: 'z. B. Thomas Schmidt', sirka: 34 },
        { id: 'e2_geburt', typ: 'datum', popis: 'Geburtsdatum', napoveda: 'Laut Ausweis.', sirka: 14, polovina: true },
        { id: 'e2_ausweis', typ: 'text', popis: 'Ausweis- oder Passnummer', napoveda: 'Laut Ausweis des zweiten Elternteils.', placeholder: 'z. B. L02Y00K58', sirka: 14, polovina: true },
        { id: 'e2_adresse', typ: 'text', popis: 'Anschrift (falls abweichend)', napoveda: 'Nur ausfüllen, wenn anders als oben.', placeholder: 'z. B. Gartenweg 3, 04109 Leipzig', sirka: 46 },
        { id: 'e2_telefon', typ: 'text', popis: 'Telefon (mit +49)', napoveda: 'Erreichbar während der Reise.', placeholder: 'z. B. +49 160 7654321', sirka: 18, polovina: true },
      ],
    },
    {
      id: 'kind',
      nazev: 'Kind',
      pole: [
        { id: 'k_name', typ: 'text', popis: 'Vor- und Nachname des Kindes', napoveda: 'Genau wie im Ausweisdokument des Kindes.', placeholder: 'z. B. Lena Schmidt', sirka: 34 },
        { id: 'k_geburt', typ: 'datum', popis: 'Geburtsdatum', napoveda: 'Laut Ausweisdokument.', sirka: 14, polovina: true },
        { id: 'k_geburtsort', typ: 'text', popis: 'Geburtsort', napoveda: 'Laut Ausweisdokument oder Geburtsurkunde.', placeholder: 'z. B. Berlin', sirka: 18, polovina: true },
        { id: 'k_ausweis', typ: 'text', popis: 'Ausweis- oder Passnummer des Kindes', napoveda: 'Das Dokument, mit dem das Kind reist.', placeholder: 'z. B. C01X00T47', sirka: 14, polovina: true },
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
          napoveda: 'Die Begleitperson wird in der Erklärung namentlich genannt.',
          moznosti: [
            { hodnota: 'elternteil', popis: 'Mit dem anderen Elternteil' },
            { hodnota: 'person', popis: 'Mit einer anderen Person (Großeltern, Verwandte, Freizeitleitung …)' },
            { hodnota: 'allein', popis: 'Allein (z. B. Flug mit Betreuung der Fluggesellschaft)' },
          ],
        },
        { id: 'b_name', typ: 'text', popis: 'Begleitperson – Vor- und Nachname', napoveda: 'Wer das Kind begleitet.', placeholder: 'z. B. Maria Schmidt', sirka: 34, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'person'] } },
        { id: 'b_geburt', typ: 'datum', popis: 'Geburtsdatum der Begleitperson', napoveda: 'Laut Ausweis.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'person'] } },
        { id: 'b_ausweis', typ: 'text', popis: 'Ausweis- oder Passnummer', napoveda: 'Das Dokument, mit dem die Begleitperson reist.', placeholder: 'z. B. L03Z00M69', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'person'] } },
        { id: 'b_beziehung', typ: 'text', popis: 'Beziehung zum Kind', napoveda: 'Z. B. Großmutter, Tante, Leiter der Jugendfreizeit.', placeholder: 'z. B. Großmutter', sirka: 18, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: 'person' } },
        { id: 'b_telefon', typ: 'text', popis: 'Telefon der Begleitperson', napoveda: 'Mit Ländervorwahl.', placeholder: 'z. B. +49 151 2345678', sirka: 18, polovina: true, zobrazitKdyz: { pole: 'begleitung', je: ['elternteil', 'person'] } },
        { id: 'route', typ: 'text', popis: 'Reiseziel und Reiseroute', napoveda: 'Zielland und Transitländer. Deren Einreisebestimmungen prüfen.', placeholder: 'z. B. Kroatien (über Österreich und Slowenien)', sirka: 46 },
        { id: 'unterkunft', typ: 'text', popis: 'Unterkunft am Zielort (optional)', napoveda: 'Hotel, Ferienwohnung oder Gastfamilie mit Anschrift.', placeholder: 'z. B. Hotel Adria, Obala 5, Split', sirka: 46 },
        { id: 'von', typ: 'datum', popis: 'Reise vom', napoveda: 'Abreisetag.', sirka: 14, polovina: true },
        { id: 'bis', typ: 'datum', popis: 'bis', napoveda: 'Rückreisetag.', sirka: 14, polovina: true },
        {
          id: 'zusatz',
          typ: 'vice',
          popis: 'Zusätzlich (optional)',
          napoveda: 'Die Kopien empfiehlt das Auswärtige Amt. Die Arzt-Klausel erleichtert der Begleitperson Entscheidungen im Notfall.',
          moznosti: [
            { hodnota: 'arzt', popis: 'Begleitperson darf im Notfall ärztliche Behandlung veranlassen' },
            { hodnota: 'geburtsurkunde', popis: 'Kopie der Geburtsurkunde liegt bei' },
            { hodnota: 'ausweise', popis: 'Kopien der Ausweise der Sorgeberechtigten liegen bei' },
          ],
        },
        { id: 'ort', typ: 'text', popis: 'Ort', napoveda: 'Wir übernehmen ihn aus der Anschrift.', placeholder: 'z. B. Berlin', sirka: 18, polovina: true, vychozi: { obecZ: 'e1_adresse' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heutiges Datum vorausgefüllt; bei einer Beglaubigung ggf. von Hand ergänzen.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Sorgeberechtigte',
      vysvetleni: 'Wer zustimmt – mit Telefon, damit Behörden nachfragen können.',
      odstavce: [
        '{{e1_name}}, geboren am {{e1_geburt}}, Ausweis-Nr. {{e1_ausweis}}, wohnhaft {{e1_adresse}}, Telefon {{e1_telefon}}',
        '{{e2_name}}, geboren am {{e2_geburt}}, Ausweis-Nr. {{e2_ausweis}}, wohnhaft {{e2_adresse}}, Telefon {{e2_telefon}}',
      ],
    },
    {
      nadpis: 'Einverständnis',
      vysvetleni: 'Wer mit wem wohin und wann reisen darf. Je konkreter, desto weniger Rückfragen an der Grenze.',
      odstavce: [
        'Als Sorgeberechtigte/r erkläre ich (erklären wir) mich (uns) damit einverstanden, dass unser minderjähriges Kind',
        '{{k_name}}, geboren am {{k_geburt}} in {{k_geburtsort}}, Ausweis-/Pass-Nr. {{k_ausweis}},',
        {
          volba: 'begleitung',
          uvodVzor: 'reist (bitte ankreuzen):',
          moznosti: {
            elternteil: 'in Begleitung des anderen Elternteils {{b_name}}, geboren am {{b_geburt}}, Ausweis-/Pass-Nr. {{b_ausweis}}, Telefon {{b_telefon}},',
            person: 'in Begleitung von {{b_name}} ({{b_beziehung}}), geboren am {{b_geburt}}, Ausweis-/Pass-Nr. {{b_ausweis}}, Telefon {{b_telefon}},',
            allein: 'ohne Begleitung,',
          },
        },
        'im Zeitraum vom {{von}} bis {{bis}} nach bzw. durch: {{route}} reist. Unterkunft: {{unterkunft}}.',
        {
          vice: 'zusatz',
          uvod: 'Ergänzend:',
          moznosti: {
            arzt: 'Für die Dauer der Reise übertragen wir der Begleitperson die Aufsicht über das Kind und ermächtigen sie, in dringenden Fällen die notwendige ärztliche Behandlung zu veranlassen. Wir bitten, uns in diesem Fall sofort zu benachrichtigen.',
            geburtsurkunde: 'Eine Kopie der Geburtsurkunde des Kindes liegt bei.',
            ausweise: 'Kopien der Ausweisdokumente der Sorgeberechtigten liegen bei.',
          },
        },
        'Für Rückfragen sind wir unter den oben genannten Telefonnummern erreichbar.',
      ],
    },
  ],
};
