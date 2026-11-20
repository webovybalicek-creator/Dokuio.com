import type { StrankaDokumentu } from '../typy';
import { ratenvereinbarungAT as sablona } from '../../sablony/at/ratenvereinbarung';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Ratenvereinbarung',
  nazevA: 'Ratenvereinbarung',
  katalog: {
    popis: 'Offene Schuld in Monatsraten zahlen, mit Ratenplan.',
    kategorie: 'geld',
    ilustrace: 'dluh',
    slova: ['Ratenvereinbarung', 'Ratenzahlungsvereinbarung', 'Ratenzahlung', 'Ratenplan', 'Teilzahlung', 'Schulden in Raten', 'Terminsverlust', 'Stundung', 'Rechnung in Raten', 'Österreich'],
  },
  souvisejici: 'geld',
  landing: {
    title: 'Ratenvereinbarung Österreich {rok} – Vorlage PDF kostenlos',
    description: 'Ratenvereinbarung nach ABGB: offene Forderung in Monatsraten, Ratenplan als Beilage, optional Anerkenntnis und Terminsverlust. Kostenlos als PDF und Word.',
    perex: 'Jemand kann eine Rechnung oder Schuld nicht auf einmal zahlen? Halten Sie Betrag, Raten und Fälligkeit schriftlich fest – mit Ratenplan und klarer Regel, was bei Verzug gilt.',
    obsahPopis: 'Vereinbarung zwischen Gläubiger/in und Schuldner/in nach dem ABGB.',
    obsah: [
      { nazev: 'Parteien', popis: 'Wer das Geld bekommt und wer zahlt.' },
      { nazev: 'Offene Forderung', popis: 'Grund und Betrag, optional mit Anerkenntnis.' },
      { nazev: 'Ratenzahlung', popis: 'Monatsrate, Fälligkeitstag, erste Rate, Konto, Zinsen.' },
      { nazev: 'Zahlungsverzug', popis: 'Terminsverlust erst nach sechs Wochen Rückstand, Mahnung und Nachfrist.' },
      { nazev: 'Beilage Ratenplan', popis: 'Jede Rate mit Datum und Restschuld.' },
    ],
    kroky: [
      { nazev: 'Forderung eintragen', popis: 'Grund und offenen Betrag.' },
      { nazev: 'Raten festlegen', popis: 'Der Ratenplan entsteht automatisch.' },
      { nazev: 'Unterschreiben', popis: 'Beide Seiten, jede erhält ein Exemplar.' },
    ],
    online: ['Ratenplan als Beilage automatisch', 'Betrag in Worten', 'Kalendererinnerungen für jede Rate', 'Download als PDF und Word'],
    hodiSe: ['Kundin oder Kunde kann eine Rechnung nur in Raten zahlen', 'Bekannte zahlen eine private Schuld in Teilbeträgen zurück', 'Sie wollen Fälligkeit und Folgen bei Verzug klar regeln'],
    nehodiSe: ['Sie verleihen neu Geld – dafür gibt es den Darlehensvertrag', 'Es geht vor allem um die Bestätigung der Schuld – dafür gibt es das Schuldanerkenntnis', 'Verbraucherkredite von Unternehmen – hier gelten besondere Gesetze'],
    poNadpis: 'Während der Ratenzahlung.',
    po: [
      { nazev: 'Zahlungen', popis: 'Am besten per Überweisung, bar nur gegen Quittung.' },
      { nazev: 'Verzug', popis: 'Zuerst schriftlich mahnen und eine Nachfrist setzen.' },
      { nazev: 'Abschluss', popis: 'Nach der letzten Rate die vollständige Bezahlung bestätigen.' },
    ],
    faq: [
      { q: 'Was ist der Unterschied zum Schuldanerkenntnis?', a: 'Das Schuldanerkenntnis bestätigt vor allem, dass die Schuld besteht. Die Ratenvereinbarung regelt, wie sie bezahlt wird – mit Ratenplan und Folgen bei Verzug. Ein Anerkenntnis können Sie hier optional aufnehmen.' },
      { q: 'Was bedeutet Terminsverlust?', a: 'Bleibt eine Rate aus, wird der ganze Rest auf einmal fällig. Die Vorlage sieht das erst vor, wenn eine Rate seit mindestens sechs Wochen offen ist und nach Mahnung mit Nachfrist von zwei Wochen nicht bezahlt wird – so wie es bei Konsument/innen zulässig ist.' },
      { q: 'Was bringt das Anerkenntnis?', a: 'Die schuldende Person bestätigt die Forderung ausdrücklich. Dadurch wird die Verjährung unterbrochen und beginnt neu (§ 1497 ABGB).' },
      { q: 'Braucht die Vereinbarung eine bestimmte Form?', a: 'Nein. Schriftlich mit beiden Unterschriften ist aber der beste Beweis.' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Das Dokument entsteht ausschließlich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage beruht auf dem ABGB (insbesondere § 1497 zur Unterbrechung der Verjährung) und folgt beim Terminsverlust den Schutzregeln für Konsument/innen laut konsumentenfragen.at.',
    souvisejiciPopis: 'Weitere Dokumente rund ums Geld, ebenfalls kostenlos.',
  },
  vytvorit: {
    title: 'Ratenvereinbarung (Österreich) online ausfüllen – mit Ratenplan',
    description: 'Ratenzahlungsvereinbarung mit Ratenplan, Anerkenntnis und Terminsverlust online ausfüllen. PDF oder Word kostenlos.',
    podnadpis: 'Kostenlos · Ergebnis als PDF und Word · dauert ca. 3 Minuten',
  },
};

export default stranka;
