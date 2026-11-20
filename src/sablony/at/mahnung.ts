/**
 * Mahnung – Österreich. Verzugszinsen: § 1333 Abs. 1 iVm § 1000 Abs. 1 ABGB 4 % p. a.;
 * zwischen Unternehmern höhere Zinsen nach § 456 UGB (Europäisches Justizportal).
 */
import type { Sablona } from '../typy';
import { mahnung as de } from '../de/mahnung';
import { nahrad } from '../nahrad';
import { ABGB, EJUSTICE_ZINSEN_AT, OEGV_KLAGEN } from './quellen';

const z = nahrad(de, [
  ['DE-MAHNUNG', 'AT-MAHNUNG'],
  ['Zahlungsaufforderung nach §§ 286, 288 des Bürgerlichen Gesetzbuchs (BGB)', 'Zahlungsaufforderung nach dem Allgemeinen bürgerlichen Gesetzbuch (ABGB)'],
  ['Verzugszinsen in gesetzlicher Höhe (§ 288 BGB)', 'gesetzliche Verzugszinsen (§ 1333 ABGB)'],
  ['Der Verzugszinssatz beträgt jährlich fünf Prozentpunkte über dem Basiszinssatz (§ 288 Abs. 1 BGB).', 'Die gesetzlichen Verzugszinsen betragen 4 % pro Jahr (§ 1333 Abs. 1 in Verbindung mit § 1000 Abs. 1 ABGB).'],
  ['Der Verzugszinssatz beträgt jährlich neun Prozentpunkte über dem Basiszinssatz (§ 288 Abs. 2 BGB). Zusätzlich mache ich die Pauschale von 40 € nach § 288 Abs. 5 BGB geltend.', 'Es gelten die gesetzlichen Verzugszinsen für unternehmerische Geschäfte nach § 456 UGB.'],
  ['das gerichtliche Mahnverfahren einleiten oder Klage erheben', 'Klage beim zuständigen Gericht einbringen'],
  ['Davon hängen Zinssatz und 40-€-Pauschale ab (§ 288 BGB).', 'Davon hängt der Zinssatz ab (§ 1333 ABGB, § 456 UGB).'],
  ['DE12 3456 7890 1234 5678 90', 'AT12 3456 7890 1234 5678'],
  ['z. B. Lindenstraße 5, 10115 Berlin', 'z. B. Mariahilfer Straße 10, 1060 Wien'],
  ['z. B. Hauptstraße 1, 80331 München', 'z. B. Hauptplatz 1, 8010 Graz'],
  ['z. B. Berlin', 'z. B. Wien'],
]);

export const mahnungAT: Sablona = {
  ...z,
  zeme: 'at',
  pripominky: (d) => (typeof d.zahlen_bis === 'string' && d.zahlen_bis ? [{ nazev: 'Zahlungsfrist aus der Mahnung endet', datum: d.zahlen_bis, popis: 'Zahlungseingang prüfen. Danach ggf. Klage beim Bezirksgericht (Mahnklage).' }] : []),
  coDal: [
    'Unterschreiben und so versenden, dass Sie den Zugang beweisen können – am besten eingeschrieben (RSb/RSa).',
    'Eine Kopie und den Aufgabeschein aufbewahren.',
    'Zahlt die Gegenseite nicht, können Sie beim zuständigen Gericht klagen; bei Geldforderungen läuft das in der Regel als Mahnverfahren.',
  ],
  kontrola: [
    'Mahnen Sie erst nach Fälligkeit. Ist ein fixer Zahlungstermin vereinbart, kommt die Schuldnerin/der Schuldner auch ohne Mahnung in Verzug.',
    'Gesetzliche Verzugszinsen: 4 % pro Jahr (§ 1333 Abs. 1 iVm § 1000 Abs. 1 ABGB); bei Geschäften zwischen Unternehmern höhere Zinsen nach § 456 UGB ([Europäisches Justizportal](https://e-justice.europa.eu/topics/taking-legal-action/where-and-how/interest-rates/at_de)).',
    'Forderung genau bezeichnen: Rechnungsnummer oder Vertrag, Datum, Betrag.',
    'Zugang beweisbar machen (eingeschriebener Brief) – im Streit müssen Sie ihn nachweisen.',
    'Nur mit rechtlich zulässigen Schritten drohen (Klage) – keine Bloßstellung oder sonstigen Druck.',
  ],
  zdroje: [ABGB, EJUSTICE_ZINSEN_AT, OEGV_KLAGEN],
};
