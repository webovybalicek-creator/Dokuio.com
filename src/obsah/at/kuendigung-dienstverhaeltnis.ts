import type { StrankaDokumentu } from '../typy';
import { kuendigungDienstverhaeltnisAT as sablona } from '../../sablony/at/kuendigung-dienstverhaeltnis';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Kündigung durch Arbeitnehmer',
  nazevA: 'Kündigung des Dienstverhältnisses',
  katalog: {
    popis: 'Job kündigen oder einvernehmliche Auflösung vorschlagen.',
    kategorie: 'arbeit',
    ilustrace: 'protokol',
    slova: ['Kündigung Arbeitnehmer', 'Dienstnehmerkündigung', 'Job kündigen', 'Arbeit kündigen', 'Kündigungsschreiben Arbeitgeber', 'Kündigungsfrist', 'einvernehmliche Auflösung', 'Probezeit', 'Angestellte', 'Arbeiter', 'Kollektivvertrag', 'Österreich'],
  },
  souvisejici: 'arbeit',
  landing: {
    title: 'Kündigung Arbeitnehmer Österreich {rok} – Vorlage PDF kostenlos',
    description: 'Dienstverhältnis selbst kündigen: ein Monat Frist zum Monatsletzten, Kollektivvertrag beachten, auch einvernehmliche Auflösung. Kostenlos als PDF und Word.',
    perex: 'Sie haben einen neuen Job oder wollen aufhören? Kündigungsschreiben an den Arbeitgeber – mit Fristen nach österreichischem Arbeitsrecht, als Lösung in der Probezeit oder als Vorschlag zur einvernehmlichen Auflösung.',
    obsahPopis: 'Schreiben der Arbeitnehmerin bzw. des Arbeitnehmers an den Arbeitgeber.',
    obsah: [
      { nazev: 'Arbeitnehmer/in und Arbeitgeber/in', popis: 'Name, Anschrift, Position, Beginn des Dienstverhältnisses.' },
      { nazev: 'Art der Beendigung', popis: 'Kündigung, Lösung in der Probezeit oder einvernehmliche Auflösung.' },
      { nazev: 'Letzter Tag', popis: 'Mit Hinweis „zum nächstmöglichen Termin“, falls der Kollektivvertrag anderes vorsieht.' },
      { nazev: 'Weitere Anliegen', popis: 'Empfangsbestätigung, Resturlaub, Endabrechnung und Arbeitspapiere.' },
    ],
    kroky: [
      { nazev: 'Frist prüfen', popis: 'Dienstvertrag und Kollektivvertrag ansehen.' },
      { nazev: 'Ausfüllen', popis: 'Ein paar Fragen, alles erklärt.' },
      { nazev: 'Übergeben', popis: 'Persönlich gegen Bestätigung oder eingeschrieben.' },
    ],
    online: ['Kündigung, Probezeit oder einvernehmliche Auflösung', 'Kalendererinnerung für den letzten Arbeitstag', 'Tipps zu Kollektivvertrag und Fristen', 'Download als PDF und Word'],
    hodiSe: ['Sie sind Angestellte/r oder Arbeiter/in in einem unbefristeten Dienstverhältnis', 'Sie wollen in der Probezeit aufhören', 'Sie möchten sich mit dem Arbeitgeber auf ein Enddatum einigen'],
    nehodiSe: ['Lehrverhältnis – hier gelten eigene Regeln, schriftlich und mit Rechtsbelehrung', 'Befristetes Dienstverhältnis ohne vereinbarte Kündigungsmöglichkeit', 'Vorzeitiger Austritt aus wichtigem Grund – lassen Sie sich vorher von AK oder Gewerkschaft beraten', 'Sie sind Arbeitgeber/in'],
    poNadpis: 'Nach der Kündigung.',
    po: [
      { nazev: 'Kündigungsfrist', popis: 'Sie arbeiten bis zum letzten Tag weiter, außer der Arbeitgeber stellt Sie frei.' },
      { nazev: 'Urlaub', popis: 'Offener Urlaub wird verbraucht, wenn das vereinbart ist, sonst abgegolten.' },
      { nazev: 'Endabrechnung', popis: 'Entgelt bis zum Ende, aliquote Sonderzahlungen und Arbeitspapiere.' },
    ],
    faq: [
      { q: 'Welche Kündigungsfrist habe ich als Arbeitnehmer/in?', a: 'Grundsätzlich einen Monat zum Monatsletzten – seit Oktober 2021 für Angestellte und Arbeiter/innen gleich. Der Dienstvertrag kann die Frist auf bis zu ein halbes Jahr verlängern, der Kollektivvertrag kann für Saisonbranchen abweichen.' },
      { q: 'Muss die Kündigung schriftlich sein?', a: 'Gesetzlich ist sie formfrei. Verlangen Kollektivvertrag oder Dienstvertrag die Schriftform, ist eine mündliche Kündigung unwirksam. Schriftlich haben Sie außerdem einen Beweis.' },
      { q: 'Wann beginnt die Frist?', a: 'Mit dem Zugang beim Arbeitgeber. Für ein Ende am 30. Juni muss die Kündigung spätestens am 31. Mai eingelangt sein.' },
      { q: 'Was ist eine einvernehmliche Auflösung?', a: 'Arbeitnehmer/in und Arbeitgeber/in vereinbaren ein Enddatum, Fristen gelten dann nicht. Sie ist grundsätzlich formfrei, in manchen Fällen – etwa in Schwangerschaft oder Karenz – aber nur schriftlich zulässig.' },
      { q: 'Wie löse ich in der Probezeit?', a: 'Die Probezeit dauert höchstens einen Monat. In dieser Zeit können beide Seiten jederzeit ohne Frist und ohne Grund lösen.' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Das Dokument entsteht ausschließlich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage beruht auf § 20 Angestelltengesetz und § 1159 ABGB in der seit 1. Oktober 2021 geltenden Fassung sowie auf den Informationen des Unternehmensserviceportals und der Arbeiterkammer. Abweichungen im Kollektivvertrag sind möglich.',
    souvisejiciPopis: 'Weitere Dokumente rund um Arbeit und Alltag, ebenfalls kostenlos.',
  },
  vytvorit: {
    title: 'Kündigung durch Arbeitnehmer (Österreich) online ausfüllen',
    description: 'Kündigungsschreiben an den Arbeitgeber oder Vorschlag zur einvernehmlichen Auflösung online ausfüllen. PDF oder Word kostenlos.',
    podnadpis: 'Kostenlos · Ergebnis als PDF und Word · dauert ca. 2 Minuten',
  },
};

export default stranka;
