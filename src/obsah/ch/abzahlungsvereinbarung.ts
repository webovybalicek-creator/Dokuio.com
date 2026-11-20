import type { StrankaDokumentu } from '../typy';
import { abzahlungsvereinbarungCH as sablona } from '../../sablony/ch/abzahlungsvereinbarung';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Abzahlungsvereinbarung',
  nazevA: 'Abzahlungsvereinbarung',
  katalog: {
    popis: 'Offene Schuld in Raten abzahlen – mit Ratenplan, von beiden unterschrieben.',
    kategorie: 'geld',
    ilustrace: 'dluh',
    slova: ['Abzahlungsvereinbarung', 'Ratenzahlungsvereinbarung', 'Ratenzahlung', 'Ratenplan', 'Abzahlung', 'Schuld', 'Raten', 'Verfallklausel', 'Betreibung', 'Schweiz'],
  },
  souvisejici: 'geld',
  landing: {
    title: 'Abzahlungsvereinbarung Schweiz {rok} – Vorlage PDF kostenlos',
    description: 'Abzahlungsvereinbarung nach Schweizer Recht: offene Schuld in Monatsraten, Verfallklausel, optional Schuldanerkennung (Art. 82 SchKG). Kostenlos als PDF und Word.',
    perex: 'Jemand kann eine Rechnung oder ein Darlehen nicht auf einmal zahlen? Halten Sie die Raten schriftlich fest – mit Ratenplan, Verfallklausel und auf Wunsch einer Schuldanerkennung.',
    obsahPopis: 'Fünf Abschnitte und ein automatischer Ratenplan im Anhang.',
    obsah: [
      { nazev: 'Parteien', popis: 'Gläubiger/in und Schuldner/in.' },
      { nazev: 'Schuld', popis: 'Offener Betrag, Grund und optional Schuldanerkennung (Art. 17 OR).' },
      { nazev: 'Ratenzahlung', popis: 'Monatsrate, Fälligkeit, IBAN, Zins, Verzicht auf Betreibung bei pünktlicher Zahlung.' },
      { nazev: 'Verfallklausel', popis: 'Wann die ganze Restschuld fällig wird.' },
      { nazev: 'Anhang Ratenplan', popis: 'Alle Raten mit Datum und Restschuld.' },
    ],
    kroky: [
      { nazev: 'Schuld und Raten eintragen', popis: 'Der Ratenplan entsteht automatisch.' },
      { nazev: 'Prüfen', popis: 'Vorschau neben dem Formular.' },
      { nazev: 'Beide unterschreiben', popis: 'Je ein Exemplar für Gläubiger und Schuldner.' },
    ],
    online: ['Ratenplan als Anhang automatisch', 'Betrag in Worten in Franken', 'Raten als Erinnerung im Kalender', 'Download als PDF und Word'],
    hodiSe: ['Eine Rechnung oder ein Darlehen wird nicht auf einmal bezahlt', 'Sie wollen statt einer Betreibung eine Ratenlösung', 'Beide Seiten sollen sich verpflichten – der Schuldner zu Raten, der Gläubiger zur Geduld'],
    nehodiSe: ['Geld wird erst ausgeliehen – dann den Darlehensvertrag nehmen', 'Nur der Schuldner soll unterschreiben – dann reicht die Schuldanerkennung', 'Sie gewähren als Firma gewerbsmässig Kredit mit Zins oder Gebühren – das Konsumkreditgesetz beachten'],
    poNadpis: 'Danach.',
    po: [
      { nazev: 'Raten belegen', popis: 'Überweisung mit Vermerk oder Quittung für Bargeld.' },
      { nazev: 'Bei Verzug', popis: 'Restschuld schriftlich fällig stellen, dann Betreibung.' },
      { nazev: 'Nach der letzten Rate', popis: 'Bestätigung der Tilgung ausstellen.' },
    ],
    faq: [
      { q: 'Was ist der Unterschied zur Schuldanerkennung?', a: 'Die Schuldanerkennung unterschreibt nur der Schuldner. Die Abzahlungsvereinbarung unterschreiben beide: Der Gläubiger akzeptiert die Raten und verzichtet auf Betreibung, solange pünktlich bezahlt wird. Eine Schuldanerkennung kann darin enthalten sein.' },
      { q: 'Hilft die Vereinbarung in der Betreibung?', a: 'Ja, wenn der Schuldner die Schuld darin unterschriftlich anerkennt: Mit einer durch Unterschrift bekräftigten Schuldanerkennung kann der Gläubiger nach Rechtsvorschlag die provisorische Rechtsöffnung verlangen (Art. 82 SchKG).' },
      { q: 'Was bewirkt die Verfallklausel?', a: 'Gerät der Schuldner in Verzug, wird die ganze Restschuld auf einmal fällig. Sie wählen, ob schon eine Rate genügt, ob eine Nachfrist von 14 Tagen gilt oder ob es zwei Raten braucht.' },
      { q: 'Was passiert mit der Verjährung?', a: 'Anerkennt der Schuldner die Schuld, wird die Verjährung unterbrochen und beginnt neu (Art. 135 OR).' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Die Vereinbarung entsteht ausschliesslich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage beruht auf Art. 17, 104 und 135 OR sowie Art. 82 SchKG. Für gewerbsmässige Kreditgeber gegenüber Konsumenten gilt zusätzlich das Konsumkreditgesetz (KKG).',
    souvisejiciPopis: 'Weitere Dokumente rund ums Geld, ebenfalls kostenlos.',
  },
  vytvorit: {
    title: 'Abzahlungsvereinbarung (Schweiz) online ausfüllen – mit Ratenplan',
    description: 'Ratenzahlungsvereinbarung über eine offene Schuld mit Ratenplan und Verfallklausel nach Schweizer Recht. PDF oder Word kostenlos.',
    podnadpis: 'Kostenlos · Ergebnis als PDF und Word · dauert ca. 3 Minuten',
  },
};

export default stranka;
