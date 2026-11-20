import type { StrankaDokumentu } from '../typy';
import { einverstaendniserklaerungReiseKindCH as sablona } from '../../sablony/ch/einverstaendniserklaerung-reise-kind';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Einverständniserklärung Reise Kind',
  nazevA: 'Einverständniserklärung für die Reise des Kindes',
  katalog: {
    popis: 'Das Kind reist ohne Eltern oder mit nur einem Elternteil ins Ausland.',
    kategorie: 'familie',
    ilustrace: 'plnamoc',
    slova: ['Einverständniserklärung', 'Reise Kind', 'Kind reist allein', 'Ferien mit Grosseltern', 'Lager', 'Reisevollmacht', 'Minderjährige', 'Auslandreise', 'Schweiz'],
  },
  souvisejici: 'familie',
  landing: {
    title: 'Einverständniserklärung Reise Kind Schweiz {rok} – Vorlage PDF gratis',
    description: 'Einverständniserklärung der Eltern für die Auslandreise des Kindes nach Empfehlung des EDA: Eltern, Begleitperson, Reiseziel, Dauer. Kostenlos als PDF und Word.',
    perex: 'Das Kind fährt mit den Grosseltern ans Meer, ins Lager oder mit nur einem Elternteil in die Ferien? Die Erklärung enthält alles, was das EDA empfiehlt – in wenigen Minuten ausgefüllt.',
    obsahPopis: 'Inhalt nach der Empfehlung des Eidgenössischen Departements für auswärtige Angelegenheiten (EDA).',
    obsah: [
      { nazev: 'Eltern / gesetzliche Vertretung', popis: 'Namen, Geburtsdaten, Ausweisnummern, Adresse und Telefon.' },
      { nazev: 'Einverständnis', popis: 'Kind, Begleitperson, Reiseziel und Transitländer, Reisedaten, Aufenthaltsort, Reisegrund.' },
    ],
    kroky: [
      { nazev: 'Angaben eintragen', popis: 'Namen und Ausweisnummern genau wie im Pass oder in der ID.' },
      { nazev: 'Regeln des Ziellandes prüfen', popis: 'Bei Botschaft oder Konsulat und in den Reisehinweisen des EDA.' },
      { nazev: 'Von Hand unterschreiben', popis: 'Falls nötig bei der Wohngemeinde oder einem Notar beglaubigen.' },
    ],
    online: ['Inhalt nach Empfehlung des EDA', 'Varianten: mit Elternteil, mit Begleitperson, allein', 'Links zu Einreise- und Reisehinweisen', 'Download als PDF und Word'],
    hodiSe: ['Das Kind reist mit Grosseltern, Verwandten, im Lager oder mit der Schule', 'Das Kind reist mit nur einem Elternteil', 'Das Kind fliegt allein mit Betreuung der Airline'],
    nehodiSe: ['Umzug des Kindes ins Ausland – das ist keine Reise', 'Das Zielland verlangt ein eigenes Formular – dann dieses verwenden', 'Sie brauchen die Erklärung in einer anderen Sprache – bei der Vertretung des Ziellandes nachfragen'],
    poNadpis: 'Vor der Abreise.',
    po: [
      { nazev: 'Unterschrift', popis: 'Von Hand, falls nötig beglaubigt.' },
      { nazev: 'Dokumente', popis: 'Original der Erklärung und gültiger Pass oder ID des Kindes.' },
      { nazev: 'Erreichbar bleiben', popis: 'Die Telefonnummern stehen in der Erklärung.' },
    ],
    faq: [
      { q: 'Ist die Einverständniserklärung Pflicht?', a: 'Das EDA empfiehlt sie dringend, wenn Minderjährige allein oder ohne ihre gesetzlichen Vertreter reisen. Behörden einiger Länder können sie bei der Ein- oder Ausreise verlangen.' },
      { q: 'Was muss drinstehen?', a: 'Laut EDA: Personalien und Telefonnummern der gesetzlichen Vertreter, Datum, Reiseziel, Aufenthaltsdauer und Reisegrund. Dazu braucht das Kind einen gültigen Pass oder eine Identitätskarte.' },
      { q: 'Muss die Unterschrift beglaubigt sein?', a: 'Nur falls nötig – das hängt vom Zielland ab. Beglaubigen können die Wohngemeinde oder ein Notar.' },
      { q: 'Gibt es ein amtliches Formular?', a: 'In der Schweiz genügt laut EDA ein weisses Blatt, ausser das Zielland verlangt ausdrücklich ein bestimmtes Format. Einige Länder haben ein eigenes Formular.' },
      { q: 'Wo finde ich die Regeln des Ziellandes?', a: 'Bei der Botschaft oder dem Konsulat des Ziellandes in der Schweiz und in den Reisehinweisen des EDA. Prüfen Sie auch die Transitländer.' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Die Erklärung entsteht ausschliesslich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage folgt der Empfehlung des EDA „Reisen mit Minderjährigen“. Die Einreisebestimmungen der Länder sind unterschiedlich und ändern sich – prüfen Sie sie vor jeder Reise.',
    souvisejiciPopis: 'Weitere nützliche Dokumente, ebenfalls kostenlos.',
  },
  vytvorit: {
    title: 'Einverständniserklärung Reise Kind (Schweiz) online ausfüllen',
    description: 'Einverständniserklärung der Eltern für die Auslandreise eines Kindes nach Empfehlung des EDA. PDF oder Word kostenlos.',
    podnadpis: 'Kostenlos · Ergebnis als PDF und Word · dauert ca. 3 Minuten',
  },
};

export default stranka;
