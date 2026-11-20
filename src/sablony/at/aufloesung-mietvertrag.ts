/**
 * Einvernehmliche Auflösung des Mietvertrags – Österreich. Auflösung durch Vereinbarung (Vertragsfreiheit);
 * ersetzt Kündigung/Fristen. Bei Mietverhältnissen im Vollanwendungsbereich des MRG Schutz des Mieters beachten. Abgeleitet von DE.
 */
import type { Sablona } from '../typy';
import { mietaufhebungsvertrag as de } from '../de/mietaufhebungsvertrag';
import { nahrad } from '../nahrad';
import { ABGB } from './quellen';

export const aufloesungMietvertragAT: Sablona = {
  ...nahrad(de, [
    ['DE-MIETAUFHEBUNG', 'AT-AUFLOESUNG-MIETE'],
    ['Mietaufhebungsvertrag', 'Einvernehmliche Auflösung des Mietvertrags'],
    ['Vereinbarung über die Beendigung des Mietverhältnisses (BGB)', 'Vereinbarung über die einvernehmliche Auflösung des Mietverhältnisses (ABGB, MRG)'],
    ['Miete und Vorauszahlungen', 'Mietzins und Betriebskosten-Akontozahlungen'],
    ['Die Nebenkosten werden im üblichen Abrechnungszeitraum abgerechnet.', 'Die Betriebskosten werden im üblichen Abrechnungszeitraum abgerechnet.'],
    ['Nebenkostenabrechnung', 'Betriebskostenabrechnung'],
    ['Abrechnung der Nebenkosten', 'Abrechnung der Betriebskosten'],
    ['wie die Nebenkosten abgerechnet werden', 'wie die Betriebskosten abgerechnet werden'],
    ['z. B. Lindenstraße 5, 10115 Berlin', 'z. B. Mariahilfer Straße 10, 1060 Wien'],
    ['z. B. Hauptstraße 1, 80331 München, 2. OG links', 'z. B. Hauptplatz 1/12, 8010 Graz'],
  ]),
  zeme: 'at',
  souborPdf: 'aufloesung-mietvertrag',
  zdroje: [ABGB],
};
