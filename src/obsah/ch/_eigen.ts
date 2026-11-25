/**
 * Vlastní texty švýcarských landingů, které jinak přebírají obsah z DE (SEO unikátnost, viz SEO.md).
 * Klíč = slug stránky v src/obsah/ch/. Použití: `vlastni(stranka)` na konci souboru stránky.
 * Soubor začíná podtržítkem, takže se negeneruje jako stránka.
 */
import type { StrankaDokumentu } from '../typy';

type Landing = Partial<StrankaDokumentu['landing']>;
const P = (nazev: string, popis: string) => ({ nazev, popis });

export const EIGEN: Record<string, Landing> = {
  erklaerung: {
    perex: 'Eine schriftliche Bestätigung von Tatsachen für Verwaltung, Schule, Bank oder Arbeitgeber – etwa wer in der Wohnung wohnt oder dass Sie eine Leistung nicht bezogen haben.',
    obsahPopis: 'Eine kurze Erklärung mit Ihren Daten, dem Empfänger und dem Inhalt.',
    kroky: [P('Inhalt formulieren', 'Nur Tatsachen, die Sie selbst kennen.'), P('Empfänger nennen', 'Für welche Stelle die Erklärung ist.'), P('Unterschreiben', 'Von Hand oder qualifiziert elektronisch.')],
    online: ['Vorlage für freien Text', 'Unterschrift am Bildschirm', 'PDF und Word'],
    hodiSe: ['eine Stelle verlangt eine einfache schriftliche Bestätigung von Ihnen'],
    nehodiSe: ['die Behörde hat ein eigenes Formular', 'eine amtlich beglaubigte Unterschrift ist verlangt'],
    po: [P('Kopie behalten', 'Für Rückfragen aufbewahren.')],
    faq: [
      { q: 'Gibt es in der Schweiz eine eidesstattliche Erklärung?', a: 'Nicht als allgemeines Instrument wie in Deutschland. Diese Vorlage ist eine einfache schriftliche Bestätigung; verlangt eine Stelle mehr, sagt sie das.' },
      { q: 'Wer beglaubigt eine Unterschrift?', a: 'Je nach Kanton ein Notar oder die Gemeindeverwaltung. Beglaubigt wird nur die Echtheit der Unterschrift, nicht der Inhalt.' },
      { q: 'Gilt eine elektronische Unterschrift?', a: 'Eine qualifizierte elektronische Signatur ist der eigenhändigen Unterschrift gleichgestellt (Art. 14 Abs. 2bis OR). Eine eingescannte Unterschrift ist das nicht.' },
    ],
  },
  'aufhebungsvereinbarung-mietvertrag': {
    obsahPopis: 'Vereinbarung mit Endtermin, Wohnungsabgabe, Mietzinsdepot und Nebenkosten.',
    kroky: [P('Termin vereinbaren', 'Ende des Mietverhältnisses und Wohnungsabgabe.'), P('Depot regeln', 'Freigabe des Mietzinsdepots festhalten.'), P('Alle unterschreiben', 'Alle Mieter und Vermieter.')],
    online: ['Erinnerungen an Endtermin und Abgabe (.ics)', 'Übergabeprotokoll übernimmt die Daten', 'PDF und Word'],
    hodiSe: ['Sie wollen ausserhalb der Kündigungstermine ausziehen', 'der Vermieter ist einverstanden'],
    nehodiSe: ['der Vermieter stimmt nicht zu – dann bleibt die ordentliche Kündigung oder ein Nachmieter (Art. 264 OR)'],
    po: [P('Wohnungsabgabe', 'Mit Abnahmeprotokoll und Zählerständen.'), P('Ummelden', 'Bei der Gemeinde ab- und am neuen Ort anmelden.')],
    faq: [
      { q: 'Muss ich ohne Vereinbarung einen Nachmieter stellen?', a: 'Wer ausserhalb der Termine auszieht, wird nur frei, wenn er einen zumutbaren, zahlungsfähigen Nachmieter vorschlägt, der den Vertrag übernimmt (Art. 264 OR). Mit einer Aufhebungsvereinbarung ist das nicht nötig.' },
      { q: 'Wie bekomme ich das Mietzinsdepot zurück?', a: 'Die Bank gibt es mit Zustimmung beider Parteien frei. Macht der Vermieter innert einem Jahr nach Mietende keinen Anspruch geltend, kann der Mieter die Rückgabe allein verlangen (Art. 257e OR).' },
      { q: 'Braucht es eine bestimmte Form?', a: 'Nein (Art. 115 OR), aber schriftlich ist die Vereinbarung beweisbar. Alle Mieter und Vermieter sollten unterschreiben.' },
    ],
  },
  untermietvertrag: {
    perex: 'Wenn Sie als Mieter ein Zimmer oder die ganze Wohnung untervermieten – etwa während eines Auslandaufenthalts. Mit Zustimmung des Vermieters, Mietzins in CHF und Depot nach Art. 262 OR.',
    obsahPopis: 'Fünf Abschnitte: Parteien, Mietobjekt, Dauer, Mietzins und Depot, Schluss.',
    kroky: [P('Zustimmung einholen', 'Bedingungen dem Vermieter offenlegen.'), P('Zimmer oder Wohnung', 'Mietobjekt und Mitbenutzung festlegen.'), P('Unterschreiben', 'Zwei Exemplare.')],
    online: ['Mietzins in Worten in CHF', 'Befristung bis zum Ende der Hauptmiete', 'PDF und Word'],
    hodiSe: ['Sie vermieten ein Zimmer Ihrer Mietwohnung unter', 'Sie geben die Wohnung während eines Auslandaufenthalts befristet weiter'],
    nehodiSe: ['Sie sind Eigentümer – nehmen Sie den Mietvertrag Wohnung', 'Sie vermieten tageweise an Touristen – dafür gelten oft kantonale Regeln'],
    po: [P('Zustimmung beilegen', 'Kopie der schriftlichen Zustimmung zum Vertrag.'), P('Anmeldung', 'Der Untermieter meldet sich bei der Gemeinde an.')],
    faq: [
      { q: 'Darf der Vermieter die Untermiete verbieten?', a: 'Er darf die Zustimmung nur verweigern, wenn Sie ihm die Bedingungen nicht bekanntgeben, diese missbräuchlich sind oder ihm wesentliche Nachteile entstehen (Art. 262 OR).' },
      { q: 'Wie viel darf ich vom Untermieter verlangen?', a: 'Nicht wesentlich mehr, als Sie selbst zahlen – ein Zuschlag für Möbel ist zulässig. Ein deutlich höherer Untermietzins gilt als missbräuchliche Bedingung.' },
      { q: 'Wer haftet gegenüber dem Vermieter?', a: 'Sie. Der Hauptmieter haftet dafür, dass der Untermieter die Sache nicht anders gebraucht, als es ihm selbst gestattet ist (Art. 262 Abs. 3 OR).' },
    ],
  },
  'kaufvertrag-motorrad': {
    obsahPopis: 'Kaufvertrag für ein Zweirad oder Quad mit Zubehör und Rahmennummer.',
    kroky: [P('Rahmennummer prüfen', 'Mit dem Fahrzeugausweis vergleichen.'), P('Zubehör auflisten', 'Koffer, Auspuff, Helm, zweiter Schlüssel.'), P('Schilder abschrauben', 'Die Kontrollschilder bleiben beim Verkäufer.')],
    online: ['Felder für Zubehör und Umbauten', 'Betrag in Worten in CHF', 'PDF und Word'],
    po: [P('Schilder zurück oder weiterverwenden', 'Beim Strassenverkehrsamt deponieren oder auf ein anderes Fahrzeug übertragen.'), P('Einlösen', 'Der Käufer löst das Motorrad mit eigener Versicherung ein.')],
  },
};

/** Doplní vlastní texty, pokud pro slug existují; dotaz na ukládání údajů zůstává poslední. */
export function vlastni(stranka: StrankaDokumentu, slug: string): StrankaDokumentu {
  const e = EIGEN[slug];
  if (!e) return stranka;
  const staraFaq = stranka.landing.faq ?? [];
  const priv = staraFaq.filter((f) => f.q.startsWith('Speichern'));
  const faq = e.faq ? [...e.faq, ...priv] : staraFaq;
  stranka.landing = { ...stranka.landing, ...e, faq };
  return stranka;
}
