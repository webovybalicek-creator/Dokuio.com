/**
 * Untermietvertrag – Schweiz. Art. 262 OR (Fedlex): Untermiete nur mit Zustimmung des Vermieters; Verweigerung nur, wenn
 * der Mieter die Bedingungen nicht bekanntgibt, diese missbräuchlich sind oder wesentliche Nachteile entstehen;
 * der Mieter haftet für Gebrauch des Untermieters über das ihm Erlaubte hinaus. Abgeleitet von DE.
 */
import type { Sablona } from '../typy';
import { untermietvertrag as de } from '../de/untermietvertrag';
import { nahrad } from '../nahrad';
import { schweiz, betragInFranken, paticka } from './schweiz';
import { OR_262, TIPP_IDENTITAET_CH } from './quellen';

export const untermietvertragCH: Sablona = schweiz({
  ...nahrad(de, [
    ['für ein Zimmer oder eine Wohnung (§§ 535 ff., 540, 553 BGB)', 'für ein Zimmer oder eine Wohnung (Art. 262 OR)'],
    ['Monatliche Miete (€)', 'Monatlicher Mietzins (CHF)'],
    ['Kaution (€, optional)', 'Mietkaution (CHF, optional)'],
    ['Der Vermieter {{pronajimatel}} hat die Untervermietung am {{souhlas_datum}} erlaubt; die Erlaubnis ist Anlage dieses Vertrags.', 'Der Vermieter {{pronajimatel}} hat der Untermiete am {{souhlas_datum}} zugestimmt; die Zustimmung ist Anlage dieses Vertrags.'],
    ['Änderungen bedürfen der Textform.', 'Änderungen bedürfen der Schriftform.'],
    ['z. B. Lindenstraße 5, 10115 Berlin', 'z. B. Bahnhofstrasse 10, 8001 Zürich'],
    ['z. B. Hauptstraße 1, 80331 München, 2. OG links', 'z. B. Marktgasse 1, 3011 Bern, 2. OG'],
  ]),
  kod: 'CH-UNTERMIETE',
  souborPdf: 'untermietvertrag',
  paticka: paticka('CH-UNTERMIETE').replace('für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen', 'für den Inhalt sind die Parteien verantwortlich'),
  odvozene: { najemne_slovy: (d) => betragInFranken(d.najemne) },
  kontrola: [
    'Untervermieten dürfen Sie nur mit Zustimmung des Vermieters ([Art. 262 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_262)).',
    'Der Vermieter darf die Zustimmung nur verweigern, wenn Sie ihm die Bedingungen nicht bekanntgeben, diese im Vergleich zum Hauptmietvertrag missbräuchlich sind oder ihm wesentliche Nachteile entstehen.',
    'Sie haften dem Vermieter, wenn der Untermieter die Sache anders gebraucht, als es Ihnen gestattet ist.',
    'Das Untermietverhältnis endet spätestens mit dem Hauptmietverhältnis.',
    TIPP_IDENTITAET_CH,
  ],
  zdroje: [OR_262],
});
