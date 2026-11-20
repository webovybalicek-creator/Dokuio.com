import type { StrankaDokumentu } from '../typy';
import { kuendigungVertragAT as sablona } from '../../sablony/at/kuendigung-vertrag';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Kündigung Vertrag',
  nazevA: 'Kündigung eines Vertrags',
  katalog: {
    popis: 'Handy, Internet, Versicherung, Strom, Fitnessstudio oder Abo kündigen.',
    kategorie: 'alltag',
    ilustrace: 'protokol',
    slova: ['Kündigung', 'Vertrag kündigen', 'Handyvertrag kündigen', 'Internet kündigen', 'Versicherung kündigen', 'Polizze kündigen', 'Strom kündigen', 'Gas kündigen', 'Fitnessstudio kündigen', 'Abo kündigen', 'Kündigungsschreiben', 'Österreich'],
  },
  souvisejici: 'alltag',
  landing: {
    title: 'Kündigung Vertrag Österreich {rok} – Vorlage PDF kostenlos',
    description: 'Kündigungsschreiben für Österreich: Handy, Internet, Versicherung, Strom, Gas, Fitnessstudio oder Abo, mit Fristen laut RTR und KSchG. Kostenlos als PDF und Word.',
    perex: 'Handyvertrag, Polizze, Stromlieferant oder Fitnessstudio – ein Kündigungsschreiben mit allen Angaben, damit das Unternehmen Ihre Kündigung sofort zuordnen kann. Mit den Fristen, die in Österreich gelten.',
    obsahPopis: 'Brief an das Unternehmen, abgestimmt auf die Art des Vertrags.',
    obsah: [
      { nazev: 'Absender und Unternehmen', popis: 'Ihre Daten so, wie sie auf Rechnung oder Polizze stehen.' },
      { nazev: 'Vertrag', popis: 'Kunden-, Vertrags- oder Polizzennummer, Rufnummer oder Zählpunkt.' },
      { nazev: 'Vertragsende', popis: 'Zum nächstmöglichen Termin, zu einem Datum oder fristlos aus wichtigem Grund.' },
      { nazev: 'Weitere Anliegen', popis: 'Bestätigung, Ende der Lastschrift, Rückzahlung eines Guthabens.' },
    ],
    kroky: [
      { nazev: 'Vertrag wählen', popis: 'Handy, Versicherung, Strom, Fitnessstudio, Abo oder Sonstiges.' },
      { nazev: 'Nummern eintragen', popis: 'Von der Rechnung oder aus dem Kundenkonto übernehmen.' },
      { nazev: 'Unterschreiben und senden', popis: 'Eingeschrieben oder über das Formular des Anbieters.' },
    ],
    online: ['Fristen-Tipps für jede Vertragsart', 'Option „zum nächstmöglichen Termin“', 'Kalendererinnerung für die Kündigungsbestätigung', 'Download als PDF und Word'],
    hodiSe: ['Sie kündigen als Privatperson einen Handy-, Internet- oder Festnetzvertrag', 'Sie kündigen eine Versicherung, einen Strom- oder Gasvertrag', 'Sie beenden eine Mitgliedschaft im Fitnessstudio, ein Abo oder eine Dienstleistung'],
    nehodiSe: ['Mietwohnung – dafür gibt es die Kündigung des Mietvertrags', 'Arbeitsplatz – dafür gibt es die Kündigung des Dienstverhältnisses', 'Online-Kauf innerhalb von 14 Tagen – dafür gibt es den Rücktritt'],
    poNadpis: 'Nach dem Absenden.',
    po: [
      { nazev: 'Bestätigung', popis: 'Kommt nach zwei bis drei Wochen keine, beim Unternehmen nachfragen.' },
      { nazev: 'Nachweise', popis: 'Aufgabeschein oder Upload-Bestätigung aufbewahren.' },
      { nazev: 'Abbuchungen', popis: 'Nach dem Vertragsende das Konto kontrollieren.' },
    ],
    faq: [
      { q: 'Muss ich schriftlich kündigen?', a: 'Viele AGB verlangen die Schriftform. Mehr als die Schriftform – etwa ein Einschreiben an eine bestimmte Stelle – darf von Konsument/innen aber nicht verlangt werden.' },
      { q: 'Wie lange ist die Kündigungsfrist beim Handyvertrag?', a: 'Für Verbraucher/innen höchstens einen Monat. Die Mindestvertragsdauer darf höchstens 24 Monate betragen; vorher zu kündigen kostet meist die restlichen Grundentgelte.' },
      { q: 'Wie kündige ich meinen Stromvertrag?', a: 'Haushalte können mit zwei Wochen Frist kündigen, vereinbarte Bindungsfristen gelten aber. Beim Wechsel übernimmt meist der neue Lieferant die Kündigung mit Ihrer Vollmacht.' },
      { q: 'Kann ich eine Versicherung mit langer Laufzeit kündigen?', a: 'Verträge mit mehr als drei Jahren Laufzeit können Verbraucher/innen zum Ende des dritten Jahres und danach jährlich mit einem Monat Frist kündigen.' },
      { q: 'Wann zählt die Kündigung als rechtzeitig?', a: 'Entscheidend ist, wann sie beim Unternehmen einlangt, nicht wann Sie sie absenden. Das Risiko des Verlusts tragen Sie – daher nachweisbar zustellen.' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Das Dokument entsteht ausschließlich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage beruht auf dem Konsumentenschutzgesetz (§ 15 KSchG), dem Versicherungsvertragsgesetz, dem Telekommunikationsgesetz 2021 sowie den Informationen von RTR und konsumentenfragen.at. Frist und Termin Ihres Vertrags stehen in den AGB.',
    souvisejiciPopis: 'Weitere Dokumente für den Alltag, ebenfalls kostenlos.',
  },
  vytvorit: {
    title: 'Kündigung (Österreich) online ausfüllen – Handy, Versicherung, Strom',
    description: 'Kündigungsschreiben für Handy, Versicherung, Strom, Fitnessstudio oder Abo in Österreich online ausfüllen. PDF oder Word kostenlos.',
    podnadpis: 'Kostenlos · Ergebnis als PDF und Word · dauert ca. 3 Minuten',
  },
};

export default stranka;
