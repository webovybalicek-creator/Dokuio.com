import type { StrankaDokumentu } from '../typy';
import { kuendigungArbeitsvertrag as sablona } from '../../sablony/de/kuendigung-arbeitsvertrag';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Kündigung Arbeitsvertrag (Arbeitnehmer)',
  nazevA: 'Kündigung des Arbeitsvertrags',
  katalog: {
    popis: 'Eigenkündigung durch den Arbeitnehmer oder Angebot eines Aufhebungsvertrags.',
    kategorie: 'vertraege',
    ilustrace: 'protokol',
    slova: ['Kündigung Arbeitsvertrag', 'Arbeitnehmer kündigen', 'Eigenkündigung', 'Job kündigen', 'Kündigungsschreiben Arbeitgeber', 'Kündigungsfrist', 'Aufhebungsvertrag', 'Probezeit', 'Arbeitszeugnis'],
  },
  souvisejici: 'vertraege',
  landing: {
    title: 'Kündigung Arbeitsvertrag Arbeitnehmer {rok} – Vorlage PDF kostenlos',
    description: 'Eigenkündigung nach § 622 BGB: vier Wochen zum 15. oder Monatsende, mit Bitte um Arbeitszeugnis. Unterschrift auf Papier nötig. Kostenlos als PDF und Word.',
    perex: 'Sie haben eine neue Stelle oder wollen gehen? Kündigen Sie fristgerecht zum nächstmöglichen Termin oder bieten Sie einen Aufhebungsvertrag an – ausdrucken, von Hand unterschreiben, übergeben.',
    obsahPopis: 'Kündigungsschreiben der Arbeitnehmerin/des Arbeitnehmers nach §§ 622 und 623 BGB.',
    obsah: [
      { nazev: 'Absender und Arbeitgeber', popis: 'Name, Anschrift, Personalnummer, zu Händen.' },
      { nazev: 'Beendigung', popis: 'Ordentliche Kündigung oder Angebot eines Aufhebungsvertrags, mit Termin.' },
      { nazev: 'Bitten', popis: 'Eingangsbestätigung, Arbeitszeugnis, Resturlaub, Arbeitsbescheinigung.' },
    ],
    kroky: [
      { nazev: 'Ausfüllen', popis: 'Arbeitgeber, Beginn des Arbeitsverhältnisses, Termin.' },
      { nazev: 'Ausdrucken und unterschreiben', popis: 'Eigenhändig mit Kugelschreiber – E-Mail ist unwirksam.' },
      { nazev: 'Übergeben', popis: 'Persönlich gegen Empfangsbestätigung oder per Bote.' },
    ],
    online: ['Klare Hinweise zu Schriftform und Fristen', 'Erinnerung zur Arbeitsuchendmeldung im Kalender', 'Kündigung oder Aufhebungsvertrag wählbar', 'Download als PDF und Word'],
    hodiSe: ['Sie sind Arbeitnehmer/in und kündigen selbst', 'Kündigung in der Probezeit', 'Sie möchten dem Arbeitgeber einen Aufhebungsvertrag anbieten'],
    nehodiSe: ['Kündigung durch den Arbeitgeber', 'fristlose Kündigung aus wichtigem Grund – lassen Sie sich beraten', 'Ausbildungsverhältnisse – dort gelten eigene Regeln'],
    poNadpis: 'Nach der Übergabe.',
    po: [
      { nazev: 'Arbeitsuchend melden', popis: 'Ohne neue Stelle: spätestens drei Monate vor dem Ende, sonst binnen drei Tagen (§ 38 SGB III).' },
      { nazev: 'Arbeitszeugnis', popis: 'Anspruch auf ein schriftliches Zeugnis (§ 630 BGB).' },
      { nazev: 'Stellensuche', popis: 'Auf Verlangen angemessene Freizeit zur Stellensuche (§ 629 BGB).' },
    ],
    faq: [
      { q: 'Kann ich per E-Mail oder WhatsApp kündigen?', a: 'Nein. Die Kündigung eines Arbeitsverhältnisses braucht die Schriftform, die elektronische Form ist ausgeschlossen (§ 623 BGB). Nur das eigenhändig unterschriebene Original ist wirksam.' },
      { q: 'Welche Kündigungsfrist habe ich als Arbeitnehmer?', a: 'Gesetzlich vier Wochen zum 15. oder zum Ende eines Kalendermonats, in einer vereinbarten Probezeit von höchstens sechs Monaten zwei Wochen (§ 622 BGB). Arbeits- oder Tarifvertrag können längere Fristen vorsehen; für Sie darf aber keine längere Frist gelten als für den Arbeitgeber.' },
      { q: 'Was ist der Unterschied zum Aufhebungsvertrag?', a: 'Die Kündigung wirkt einseitig. Ein Aufhebungsvertrag ist eine Einigung beider Seiten und muss ebenfalls schriftlich von beiden unterschrieben werden (§ 623 BGB).' },
      { q: 'Bekomme ich nach einer Eigenkündigung Arbeitslosengeld?', a: 'Wer ohne wichtigen Grund selbst kündigt oder einen Aufhebungsvertrag schließt, riskiert eine Sperrzeit, in der Regel zwölf Wochen (§ 159 SGB III).' },
      { q: 'Speichern Sie meine Daten?', a: 'Nein. Das Dokument entsteht ausschließlich in Ihrem Browser.' },
    ],
    zakony: 'Die Vorlage beruht auf §§ 622, 623, 126, 629 und 630 BGB sowie §§ 38, 159 und 312 SGB III.',
    souvisejiciPopis: 'Weitere Kündigungen und Schreiben, ebenfalls kostenlos.',
  },
  vytvorit: {
    title: 'Kündigung Arbeitsvertrag online ausfüllen – PDF kostenlos',
    description: 'Eigenkündigung als Arbeitnehmer oder Angebot eines Aufhebungsvertrags. PDF oder Word kostenlos, zum Ausdrucken und Unterschreiben.',
    podnadpis: 'Kostenlos · Ergebnis als PDF und Word · ausdrucken und von Hand unterschreiben',
  },
};

export default stranka;
