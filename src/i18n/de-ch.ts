/** Texte für die Schweiz – Deutsch mit Schweizer Schreibweise und Franken. */
import type { Texty } from './cs';
import { de } from './de';
import { naSchweiz } from './schweiz';

const zaklad = naSchweiz(de);

export const deCH: Texty = {
  ...zaklad,
  mena: { kod: 'CHF', znak: 'CHF' },
  vin: {
    ...zaklad.vin,
    pole: '23',
    radky: [['18', '123.456.789'], ['21', 'ŠKODA OCTAVIA'], ['36', '15.03.2018']],
    dokladAria: 'Fahrzeugausweis – die Fahrgestellnummer steht in Feld 23',
    dokladNadpis: 'FAHRZEUGAUSWEIS',
    kde: 'Wo finde ich die Fahrgestellnummer?',
    seznam: [
      '<strong>Fahrzeugausweis</strong> – Feld <strong>23</strong> (Fahrgestellnummer). Die Stammnummer steht in Feld 18.',
      '<strong>Am Fahrzeug</strong> – beim Auto hinter der Windschutzscheibe auf der Fahrerseite oder am Typenschild, beim Motorrad am Rahmen am Lenkkopf.',
      '<strong>Serviceheft</strong> oder Prüfbericht der letzten Fahrzeugprüfung (MFK).',
    ],
    tip: 'Die Fahrgestellnummer im Fahrzeugausweis und am Fahrzeug muss übereinstimmen. Wenn nicht – lieber nicht kaufen.',
  } as Texty['vin'],
  podpora: {
    ...zaklad.podpora,
    srovnani: [
      { kde: 'Vertrag beim Anwalt', cena: 'oft dreistellig' },
      { kde: 'Dokuio', cena: 'CHF 0' },
    ],
    cena: (n: number) => `ca. CHF ${(n * 1.2).toFixed(2)}`,
    metody: 'Karte · Apple Pay · Google Pay · sicher über Stripe · Stripe rechnet den Betrag (30 CZK je Kaffee) in Franken um',
  },
};
