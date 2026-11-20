import type { StrankaDokumentu } from '../typy';
import { kuendigungVertragCH as sablona } from '../../sablony/ch/kuendigung-vertrag';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Kündigung Vertrag',
  nazevA: 'Kündigung',
  katalog: {
    popis: 'Handy, Versicherung, Krankenkasse, Fitness, Abo oder Auftrag kündigen.',
    kategorie: 'alltag',
    ilustrace: 'protokol',
    slova: ['Kündigung', 'Vertrag kündigen', 'Handyabo kündigen', 'Versicherung kündigen', 'Krankenkasse kündigen', 'Fitnessabo kündigen', 'Abo kündigen', 'Auftrag kündigen', 'Einschreiben', 'Schweiz'],
  },
  souvisejici: 'kuendigungen',
  landing: {
    title: 'Kündigung Vertrag Schweiz {rok} – Vorlage PDF kostenlos',
    description: 'Vertrag kündigen in der Schweiz: Handy-Abo, Versicherung (Art. 35a VVG), Krankenkasse bis 30. November, Fitness, Abo oder Auftrag. Kostenlos als PDF und Word.',
    perex: 'Handy-Abo, Hausratversicherung, Krankenkasse, Fitnessstudio oder Reinigungsauftrag: ein sauberer Kündigungsbrief mit Vertragsnummer und dem richtigen Termin, per Einschreiben verschickt.',
    obsahPopis: 'Ein Brief an den Anbieter – die Variante richtet sich nach Ihrem Vertrag.',
    obsah: [
      { nazev: 'Absender und Anbieter', popis: 'Ihre Angaben und die Korrespondenzadresse des Anbieters.' },
      { nazev: 'Kündigung', popis: 'Vertragsnummer und Termin: nächstmöglich, auf ein Datum, nach VVG, Grundversicherung, Umzug oder Auftrag.' },
      { nazev: 'Weitere Bitten', popis: 'Bestätigung, Schlussabrechnung, Geräterückgabe, Ende der Lastschrift.' },
    ],
    kroky: [
      { nazev: 'Vertrag wählen', popis: 'Die Tipps zeigen, welche Fristen gelten.' },
      { nazev: 'Herunterladen und unterschreiben', popis: 'PDF oder Word, kostenlos.' },
      { nazev: 'Per Einschreiben senden', popis: 'Massgebend ist meist der Empfang – mit Reserve.' },
    ],
    online: ['Varianten für Versicherung, Krankenkasse, Strom und Auftrag', 'Erklärte Fristen mit Quellen', 'Erinnerung an die Bestätigung im Kalender', 'Download als PDF und Word'],
    hodiSe: ['Sie kündigen ein Handy-, Internet- oder TV-Abo', 'Sie kündigen eine Sach- oder Zusatzversicherung oder die Grundversicherung der Krankenkasse', 'Sie beenden ein Fitness-Abo, eine Mitgliedschaft oder einen Dienstleistungsauftrag'],
    nehodiSe: ['Wohnung kündigen – dafür gibt es unsere Kündigung des Mietvertrags', 'Stelle kündigen – dafür gibt es die Kündigung des Arbeitsvertrags', 'Haustür- oder Telefonkauf innert 14 Tagen widerrufen – dafür gibt es den Widerruf'],
    poNadpis: 'Nach dem Versand.',
    po: [
      { nazev: 'Beleg aufbewahren', popis: 'Einschreibebeleg und Kopie, bis die Bestätigung da ist.' },
      { nazev: 'Bis zum Ende zahlen', popis: 'Lastschrift erst nach der Schlussabrechnung stoppen.' },
      { nazev: 'Geräte zurückgeben', popis: 'Router oder TV-Box nach Anweisung, mit Quittung.' },
    ],
    faq: [
      { q: 'Muss ich per Einschreiben kündigen?', a: 'Gesetzlich meist nicht, aber Sie müssen beweisen können, dass und wann die Kündigung angekommen ist. Das Einschreiben ist dafür der einfachste Weg. Was der Vertrag verlangt, steht in den AGB.' },
      { q: 'Wann kann ich eine Versicherung kündigen?', a: 'Jeder Versicherungsvertrag kann auf das Ende des dritten oder jedes folgenden Jahres mit drei Monaten Frist gekündigt werden, auch wenn er länger abgeschlossen wurde (Art. 35a VVG, seit 1. 1. 2022 und auch für ältere Verträge). Ausgenommen ist die Lebensversicherung.' },
      { q: 'Bis wann muss die Kündigung der Grundversicherung bei der Krankenkasse sein?', a: 'Laut ch.ch muss Ihr Brief bis 30. November bei der Krankenkasse eintreffen. Mit Franchise 300 Franken im Standardmodell geht es auch auf Ende Juni mit drei Monaten Frist.' },
      { q: 'Kann ich den Stromanbieter kündigen und wechseln?', a: 'Haushalte mit weniger als 100 MWh Verbrauch pro Jahr können den Lieferanten nicht wählen (ElCom). Beim Umzug melden Sie sich beim örtlichen Elektrizitätswerk ab – dafür gibt es die Variante „Umzug“.' },
      { q: 'Kann ich einen Auftrag jederzeit beenden?', a: 'Ja, ein Auftrag kann nach Art. 404 OR von beiden Seiten jederzeit widerrufen oder gekündigt werden. Wer zur Unzeit kündigt, muss den dadurch verursachten Schaden ersetzen. Für Werkverträge gilt Art. 377 OR.' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Die Kündigung entsteht ausschliesslich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage beruht auf Art. 35a und 42 VVG, Art. 404 und 377 OR sowie den Informationen von ch.ch (Krankenkasse), ElCom (Strom) und BAKOM (ombudscom). Fristen für Telekom, Fitness und Abos regeln Vertrag und AGB.',
    souvisejiciPopis: 'Weitere Kündigungen und Briefe, ebenfalls kostenlos.',
  },
  vytvorit: {
    title: 'Kündigung (Schweiz) online schreiben – Handy, Versicherung, Abo',
    description: 'Kündigungsbrief für Handy-Abo, Versicherung, Krankenkasse, Fitness, Abo oder Auftrag nach Schweizer Recht. PDF oder Word kostenlos.',
    podnadpis: 'Kostenlos · Ergebnis als PDF und Word · dauert ca. 2 Minuten',
  },
};

export default stranka;
