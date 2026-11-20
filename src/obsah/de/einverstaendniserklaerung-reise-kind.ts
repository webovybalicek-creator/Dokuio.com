import type { StrankaDokumentu } from '../typy';
import { einverstaendniserklaerungReiseKind as sablona } from '../../sablony/de/einverstaendniserklaerung-reise-kind';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Einverständniserklärung Reise Kind',
  nazevA: 'Einverständniserklärung für die Reise eines Kindes',
  katalog: {
    popis: 'Kind reist ohne beide Eltern oder mit nur einem Elternteil ins Ausland.',
    kategorie: 'familie',
    ilustrace: 'plnamoc',
    slova: ['Einverständniserklärung', 'Reisevollmacht', 'Reise Kind', 'Minderjährige', 'Kind reist ohne Eltern', 'Urlaub mit Oma', 'Reisen mit Kindern', 'Vollmacht Kind', 'Ferienfreizeit', 'Klassenfahrt Ausland'],
  },
  souvisejici: 'familie',
  landing: {
    title: 'Einverständniserklärung Reise Kind {rok} – Vorlage PDF kostenlos',
    description: 'Einverständniserklärung für Reisen Minderjähriger nach Empfehlung des Auswärtigen Amts: Kind, Eltern, Begleitperson, Reiseroute. Kostenlos als PDF und Word.',
    perex: 'Ihr Kind fährt mit den Großeltern ans Meer, auf eine Jugendfreizeit oder mit nur einem Elternteil in den Urlaub? Die Erklärung nach den Empfehlungen des Auswärtigen Amts – in wenigen Minuten ausgefüllt.',
    obsahPopis: 'Inhalt nach den Empfehlungen des Auswärtigen Amts.',
    obsah: [
      { nazev: 'Sorgeberechtigte', popis: 'Name, Geburtsdatum, Ausweisnummer, Anschrift und Telefon.' },
      { nazev: 'Einverständnis', popis: 'Kind, Begleitperson, Reiseroute, Zeitraum, Unterkunft.' },
      { nazev: 'Ergänzungen', popis: 'Arzt-Klausel, Kopien von Geburtsurkunde und Ausweisen.' },
    ],
    kroky: [
      { nazev: 'Angaben eintragen', popis: 'Namen und Nummern genau aus den Ausweisen.' },
      { nazev: 'Zielland prüfen', popis: 'Reise- und Sicherheitshinweise des Auswärtigen Amts.' },
      { nazev: 'Unterschreiben', popis: 'Von Hand, bei Bedarf beglaubigen lassen.' },
    ],
    online: ['Inhalt nach den Empfehlungen des Auswärtigen Amts', 'Begleitung durch Elternteil, andere Person oder allein', 'Links zu den Einreisebestimmungen', 'Download als PDF und Word'],
    hodiSe: ['Kind reist mit Großeltern, Verwandten oder einer Jugendfreizeit', 'Kind reist mit nur einem Elternteil, besonders bei unterschiedlichen Nachnamen', 'Kind reist allein'],
    nehodiSe: ['Umzug oder dauerhafter Aufenthalt des Kindes im Ausland', 'das Zielland oder die Fluggesellschaft verlangt ein eigenes Formular – dann dieses verwenden'],
    poNadpis: 'Vor der Reise.',
    po: [
      { nazev: 'Unterschriften', popis: 'Von allen Sorgeberechtigten, die nicht mitreisen; Beglaubigung je nach Zielland.' },
      { nazev: 'Unterlagen mitgeben', popis: 'Original der Erklärung, Ausweis des Kindes, Kopie der Geburtsurkunde und der Ausweise der Eltern.' },
      { nazev: 'Übersetzung', popis: 'Gegebenenfalls in die Landessprache übersetzen lassen.' },
    ],
    faq: [
      { q: 'Ist die Einverständniserklärung Pflicht?', a: 'Gesetzlich nicht. Das Auswärtige Amt empfiehlt sie aber, wenn ein Kind ohne beide Eltern oder mit nur einem Elternteil ins Ausland reist – Grenzbehörden prüfen damit, ob das Kind nicht unrechtmäßig ausreist.' },
      { q: 'Muss die Unterschrift beglaubigt werden?', a: 'Das hängt nach Auskunft des Auswärtigen Amts vom Recht des Ziellandes ab – ebenso, ob eine Beglaubigung aus Deutschland (Notar, Gemeinde- oder Stadtverwaltung) anerkannt wird.' },
      { q: 'Was sollte in der Erklärung stehen?', a: 'Angaben zum Kind, Angaben und Kontaktdaten der Sorgeberechtigten, die Reiseroute und gegebenenfalls die Daten der Begleitperson.' },
      { q: 'Wo finde ich die Bestimmungen des Ziellandes?', a: 'In den Reise- und Sicherheitshinweisen des Auswärtigen Amts unter „Einreisebestimmungen“. Verbindlich informiert die Vertretung des Ziellandes in Deutschland.' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Das Dokument entsteht ausschließlich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage folgt den Empfehlungen des Auswärtigen Amts und der Bundespolizei zum Reisen mit Minderjährigen. Einreisebestimmungen der Zielländer ändern sich – prüfen Sie sie vor jeder Reise.',
    souvisejiciPopis: 'Weitere Dokumente für Familie und Alltag, ebenfalls kostenlos.',
  },
  vytvorit: {
    title: 'Einverständniserklärung Reise Kind online ausfüllen – PDF',
    description: 'Einverständniserklärung der Eltern für die Auslandsreise eines Kindes nach den Empfehlungen des Auswärtigen Amts. PDF oder Word kostenlos.',
    podnadpis: 'Kostenlos · Ergebnis als PDF und Word · dauert ca. 3 Minuten',
  },
};

export default stranka;
