import type { StrankaDokumentu } from '../typy';
import { reisevollmachtKindAT as sablona } from '../../sablony/at/reisevollmacht-kind';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Reisevollmacht für Kinder',
  nazevA: 'Reisevollmacht für Kinder',
  katalog: {
    popis: 'Einverständniserklärung, wenn das Kind ohne Eltern oder mit einem Elternteil reist.',
    kategorie: 'familie',
    ilustrace: 'plnamoc',
    slova: ['Reisevollmacht', 'Einverständniserklärung Reise', 'Kind reist allein', 'Kind ohne Eltern', 'Reise mit einem Elternteil', 'Minderjährige', 'Urlaub mit Großeltern', 'Sommerlager', 'Vollmacht Kind Ausland', 'Österreich'],
  },
  souvisejici: 'familie',
  landing: {
    title: 'Reisevollmacht Kind Österreich {rok} – Vorlage PDF kostenlos',
    description: 'Einverständniserklärung der Eltern für die Auslandsreise des Kindes: allein, mit Großeltern oder einem Elternteil. Nach oesterreich.gv.at. Kostenlos als PDF und Word.',
    perex: 'Ihr Kind fährt mit den Großeltern ans Meer, ins Sommerlager oder mit nur einem Elternteil ins Ausland? Die Einverständniserklärung mit allen Angaben, die oesterreich.gv.at empfiehlt – in wenigen Minuten ausgefüllt.',
    obsahPopis: 'Inhalt nach den Empfehlungen von oesterreich.gv.at.',
    obsah: [
      { nazev: 'Obsorgeberechtigte', popis: 'Name, Geburtsdatum, Reisedokument, Adresse und Telefon.' },
      { nazev: 'Kind und Begleitung', popis: 'Mit einem Elternteil, einer anderen Person oder allein.' },
      { nazev: 'Reise', popis: 'Ziel- und Transitländer, Zeitraum, Zweck.' },
      { nazev: 'Beilagen', popis: 'Geburtsurkunde, Passkopien, ggf. Heiratsurkunde oder Obsorgenachweis.' },
    ],
    kroky: [
      { nazev: 'Ausfüllen', popis: 'Namen und Nummern genau laut Reisedokumenten.' },
      { nazev: 'Zielland prüfen', popis: 'Reiseinformationen des Außenministeriums (BMEIA) lesen.' },
      { nazev: 'Unterschreiben', popis: 'Wenn verlangt, bei Notar/in oder Bezirksgericht beglaubigen.' },
    ],
    online: ['Varianten: mit Elternteil, mit anderer Person, allein', 'Beilagen-Liste zum Ankreuzen', 'Links zu den Reiseinformationen des BMEIA', 'Download als PDF und Word'],
    hodiSe: ['Ihr Kind reist mit Großeltern, Verwandten, Schule oder Sommerlager ins Ausland', 'Ihr Kind reist mit nur einem Elternteil, vor allem bei verschiedenen Nachnamen', 'Ihr Kind reist allein, z. B. mit Betreuung der Fluglinie'],
    nehodiSe: ['Das Zielland oder die Fluglinie verlangt ein eigenes Formular – dann dieses verwenden', 'Sie brauchen eine fremdsprachige Fassung – mehrsprachige Muster bietet der ÖAMTC', 'Übersiedlung oder längerer Aufenthalt des Kindes im Ausland'],
    poNadpis: 'Vor der Abreise.',
    po: [
      { nazev: 'Beglaubigung', popis: 'Nur wenn das Zielland sie verlangt – bei Notar/in oder Bezirksgericht.' },
      { nazev: 'Dokumente', popis: 'Original der Erklärung, Reisepass oder Personalausweis des Kindes, Kopien der Beilagen.' },
      { nazev: 'Erreichbarkeit', popis: 'Die Telefonnummern stehen in der Erklärung – Handy während der Reise eingeschaltet lassen.' },
    ],
    faq: [
      { q: 'Ist eine Reisevollmacht Pflicht?', a: 'Eine allgemeine Pflicht gibt es nicht. Je nach Reiseland kann sie aber verlangt werden; oesterreich.gv.at empfiehlt sie, wenn ein Kind ohne Eltern oder nur mit einem Elternteil reist.' },
      { q: 'Muss die Unterschrift beglaubigt werden?', a: 'Nur wenn das Reiseland es verlangt. Beglaubigen können Notar/innen und Bezirksgerichte.' },
      { q: 'Wer muss unterschreiben?', a: 'Am besten beide Obsorgeberechtigten. Das Einverständnis nur eines Elternteils genügt möglicherweise nicht. Reist ein Elternteil mit, unterschreibt jedenfalls der andere.' },
      { q: 'In welcher Sprache?', a: 'Für nicht deutschsprachige Länder sicherheitshalber auf Englisch oder in der Landessprache. Eine Übersetzung kann nötig sein.' },
      { q: 'Wo finde ich die Einreisebestimmungen?', a: 'In den Reiseinformationen des Außenministeriums (BMEIA) für jedes Land und bei der Botschaft oder dem Konsulat des Ziellandes. Auch Transitländer prüfen.' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Das Dokument entsteht ausschließlich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage folgt den Hinweisen von oesterreich.gv.at (Urlaub im Ausland ohne Eltern, Reisen in der EU). Die Einreisebestimmungen der einzelnen Länder ändern sich – prüfen Sie sie vor jeder Reise in den Reiseinformationen des BMEIA.',
    souvisejiciPopis: 'Weitere Dokumente für Familie und Reisen, ebenfalls kostenlos.',
  },
  vytvorit: {
    title: 'Reisevollmacht für Kinder (Österreich) online ausfüllen – PDF',
    description: 'Einverständniserklärung für die Auslandsreise eines minderjährigen Kindes online ausfüllen. PDF oder Word kostenlos.',
    podnadpis: 'Kostenlos · Ergebnis als PDF und Word · dauert ca. 3 Minuten',
  },
};

export default stranka;
