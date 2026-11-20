/**
 * Aufhebungsvereinbarung zum Mietvertrag – Schweiz. Aufhebung durch Übereinkunft ist formlos möglich (Art. 115 OR, Fedlex);
 * schriftlich zu Beweiszwecken. Abgeleitet von DE.
 */
import type { Sablona } from '../typy';
import { mietaufhebungsvertrag as de } from '../de/mietaufhebungsvertrag';
import { nahrad } from '../nahrad';
import { schweiz, paticka } from './schweiz';
import { OR } from './quellen';

export const aufhebungMietvertragCH: Sablona = schweiz({
  ...nahrad(de, [
    ['Mietaufhebungsvertrag', 'Aufhebungsvereinbarung zum Mietvertrag'],
    ['Vereinbarung über die Beendigung des Mietverhältnisses (BGB)', 'Aufhebung des Mietverhältnisses durch Übereinkunft (Art. 115 OR)'],
    ['Kaution', 'Mietkaution'],
    ['Nebenkosten', 'Nebenkosten'],
    ['z. B. Lindenstraße 5, 10115 Berlin', 'z. B. Bahnhofstrasse 10, 8001 Zürich'],
    ['z. B. Hauptstraße 1, 80331 München, 2. OG links', 'z. B. Marktgasse 1, 3011 Bern, 2. OG'],
  ]),
  kod: 'CH-AUFHEBUNG-MIETE',
  souborPdf: 'aufhebungsvereinbarung-mietvertrag',
  paticka: paticka('CH-AUFHEBUNG-MIETE').replace('für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen', 'für den Inhalt sind die Parteien verantwortlich'),
  kontrola: [
    'Ein Mietverhältnis kann durch Übereinkunft formlos aufgehoben werden ([Art. 115 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_115)) – schriftlich ist es aber beweisbar.',
    'Alle Vermieter und alle Mieter müssen unterschreiben.',
    'Einen konkreten Beendigungstag und den Tag der Rückgabe eintragen.',
    'Regeln, wann die Mietkaution freigegeben und wie die Nebenkosten abgerechnet werden.',
    'Die Vereinbarung ersetzt die Kündigung samt Terminen und Fristen.',
  ],
  zdroje: [OR],
});
