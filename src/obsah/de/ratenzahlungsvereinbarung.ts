import type { StrankaDokumentu } from '../typy';
import { ratenzahlungsvereinbarung as sablona } from '../../sablony/de/ratenzahlungsvereinbarung';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Ratenzahlungsvereinbarung',
  nazevA: 'Ratenzahlungsvereinbarung',
  katalog: {
    popis: 'Offene Forderung in Monatsraten abzahlen – mit Ratenplan und Verfallklausel.',
    kategorie: 'geld',
    ilustrace: 'dluh',
    slova: ['Ratenzahlungsvereinbarung', 'Ratenzahlung', 'Teilzahlungsvereinbarung', 'Ratenvereinbarung', 'Stundung', 'Ratenplan', 'Verfallklausel', 'Schulden in Raten', 'Raten vereinbaren'],
  },
  souvisejici: 'geld',
  landing: {
    title: 'Ratenzahlungsvereinbarung {rok} – Vorlage PDF kostenlos',
    description: 'Ratenzahlungsvereinbarung zwischen Gläubiger und Schuldner: Monatsraten, Ratenplan, Verfallklausel, auf Wunsch Anerkenntnis. Kostenlos als PDF und Word.',
    perex: 'Jemand kann eine Rechnung oder Schuld nicht auf einmal zahlen? Vereinbaren Sie Monatsraten schriftlich – mit Ratenplan als Anlage und klarer Regel, wann der Rest sofort fällig wird.',
    obsahPopis: 'Vertrag zwischen Gläubiger/in und Schuldner/in über eine bestehende Forderung.',
    obsah: [
      { nazev: 'Parteien', popis: 'Gläubiger/in und Schuldner/in.' },
      { nazev: 'Forderung', popis: 'Grund und offener Betrag, auf Wunsch mit Anerkenntnis.' },
      { nazev: 'Ratenzahlung', popis: 'Monatsrate, Fälligkeit, Konto, Stundung ohne Zinsen.' },
      { nazev: 'Wegfall der Ratenzahlung', popis: 'Verfallklausel bei Verzug.' },
      { nazev: 'Anlage', popis: 'Ratenplan mit allen Terminen und dem Restbetrag.' },
    ],
    kroky: [
      { nazev: 'Forderung eintragen', popis: 'Grund und offener Betrag.' },
      { nazev: 'Raten festlegen', popis: 'Den Ratenplan erstellen wir automatisch.' },
      { nazev: 'Beide unterschreiben', popis: 'Zwei Exemplare, jede Seite eines.' },
    ],
    online: ['Ratenplan als Anlage', 'Raten-Erinnerungen im Kalender', 'Betrag in Worten automatisch', 'Unterschrift auf dem Bildschirm', 'Download als PDF und Word'],
    hodiSe: ['Kundin oder Kunde zahlt eine Rechnung in Raten', 'Ein privates Darlehen oder ein Schaden wird in Raten beglichen', 'Beide Seiten wollen die Raten verbindlich festhalten'],
    nehodiSe: ['Unternehmen gewährt Verbrauchern Raten gegen Zinsen oder Gebühren – dann gelten Regeln für Verbraucherkredite (§ 506 BGB)', 'Nur die schuldende Person soll die Schuld bestätigen – dafür das Schuldanerkenntnis', 'neues Geld wird verliehen – dafür der Darlehensvertrag'],
    poNadpis: 'Während der Raten.',
    po: [
      { nazev: 'Dauerauftrag', popis: 'Damit keine Rate vergessen wird.' },
      { nazev: 'Quittungen', popis: 'Barzahlungen immer quittieren lassen.' },
      { nazev: 'Verzug', popis: 'Schriftlich mahnen und auf die Verfallklausel hinweisen.' },
    ],
    faq: [
      { q: 'Muss ich als Gläubiger Teilzahlungen annehmen?', a: 'Ohne Vereinbarung nicht – der Schuldner ist zu Teilleistungen nicht berechtigt (§ 266 BGB). Mit der Ratenzahlungsvereinbarung sind die Raten verbindlich.' },
      { q: 'Was ist der Unterschied zum Schuldanerkenntnis?', a: 'Das Schuldanerkenntnis ist eine einseitige Erklärung der schuldenden Person. Die Ratenzahlungsvereinbarung ist ein Vertrag, den beide unterschreiben: Gläubiger/in stundet, Schuldner/in zahlt in Raten. Ein Anerkenntnis kann zusätzlich enthalten sein.' },
      { q: 'Was bewirkt eine Verfallklausel?', a: 'Gerät die schuldende Person mit den vereinbarten Raten in Verzug, entfällt die Ratenzahlung und der gesamte Restbetrag wird sofort fällig.' },
      { q: 'Was passiert mit der Verjährung?', a: 'Erkennt die schuldende Person die Forderung an – auch durch eine Abschlagszahlung –, beginnt die Verjährung neu (§ 212 BGB).' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Das Dokument entsteht ausschließlich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage beruht auf §§ 266, 212 und 286 BGB; zur Abgrenzung von Verbraucherkrediten § 506 BGB.',
    souvisejiciPopis: 'Weitere Dokumente rund um Geld, ebenfalls kostenlos.',
  },
  vytvorit: {
    title: 'Ratenzahlungsvereinbarung online ausfüllen – PDF kostenlos',
    description: 'Ratenzahlungsvereinbarung mit Ratenplan und Verfallklausel. PDF oder Word kostenlos.',
    podnadpis: 'Kostenlos · Ergebnis als PDF und Word · dauert ca. 3 Minuten',
  },
};

export default stranka;
