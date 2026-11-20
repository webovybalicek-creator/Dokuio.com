/**
 * Untermietvertrag – Österreich. Laut oesterreich.gv.at: gänzliche Untervermietung nur mit Zustimmung des Vermieters
 * oder wenn im Mietvertrag gestattet; im Vollanwendungsbereich des MRG ist eine teilweise Untervermietung auch ohne
 * Zustimmung möglich, solange der Hauptmieter dort wohnt und kein wichtiger Grund (§ 11 MRG) entgegensteht. Abgeleitet von DE.
 */
import type { Sablona } from '../typy';
import { untermietvertrag as de } from '../de/untermietvertrag';
import { nahrad } from '../nahrad';
import { TIPP_IDENTITAET } from '../de/quellen';
import { ABGB, OEGV_UNTERMIETE } from './quellen';

export const untermietvertragAT: Sablona = {
  ...nahrad(de, [
    ['DE-UNTERMIETE', 'AT-UNTERMIETE'],
    ['für ein Zimmer oder eine Wohnung (§§ 535 ff., 540, 553 BGB)', 'für ein Zimmer oder eine Wohnung (ABGB, MRG)'],
    ['Monatliche Miete (€)', 'Monatlicher Untermietzins (€)'],
    ['Inklusive Nebenkosten, wenn nicht anders vereinbart.', 'Inklusive Betriebskosten, wenn nicht anders vereinbart.'],
    ['inklusive Nebenkosten', 'inklusive Betriebskosten'],
    ['Der Vermieter {{pronajimatel}} hat die Untervermietung am {{souhlas_datum}} erlaubt; die Erlaubnis ist Anlage dieses Vertrags.', 'Der Vermieter {{pronajimatel}} hat der Untervermietung am {{souhlas_datum}} zugestimmt (bzw. ist sie im Hauptmietvertrag gestattet); die Zustimmung ist Anlage dieses Vertrags.'],
    ['Änderungen bedürfen der Textform.', 'Änderungen bedürfen der Schriftform.'],
    ['z. B. Lindenstraße 5, 10115 Berlin', 'z. B. Mariahilfer Straße 10, 1060 Wien'],
    ['z. B. Hauptstraße 1, 80331 München, 2. OG links', 'z. B. Hauptplatz 1/12, 8010 Graz'],
  ]),
  zeme: 'at',
  souborPdf: 'untermietvertrag',
  kontrola: [
    'Eine gänzliche Untervermietung ist nur mit Zustimmung des Vermieters oder wenn der Mietvertrag sie gestattet zulässig ([oesterreich.gv.at](https://www.oesterreich.gv.at/de/themen/reisen_und_freizeit/reisen-und-ferien/7/Seite.2960403)).',
    'Im Vollanwendungsbereich des MRG ist eine teilweise Untervermietung auch ohne Zustimmung möglich, solange Sie selbst dort wohnen und kein wichtiger Grund nach § 11 MRG entgegensteht – etwa ein unverhältnismäßig hoher Untermietzins.',
    'Das Untermietverhältnis endet spätestens mit dem Hauptmietverhältnis.',
    TIPP_IDENTITAET,
  ],
  zdroje: [OEGV_UNTERMIETE, ABGB],
};
