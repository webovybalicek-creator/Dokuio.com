/**
 * Werkvertrag – Österreich. §§ 1165 ff. ABGB; Kostenvoranschlag mit/ohne Gewährleistung und
 * beträchtliche Überschreitung (§ 1170a ABGB, RIS); Gewährleistung nach §§ 922 ff. ABGB.
 */
import type { Sablona } from '../typy';
import { werkvertrag as de } from '../de/werkvertrag';
import { nahrad } from '../nahrad';
import { TIPP_IDENTITAET } from '../de/quellen';
import { ABGB, ABGB_1170A } from './quellen';

const z = nahrad(de, [
  ['DE-WERKVERTRAG', 'AT-WERKVERTRAG'],
  ['AT-WERKVERTRAG v1.0', 'AT-WERKVERTRAG v1.1'],
  ['nach §§ 631 ff. des Bürgerlichen Gesetzbuchs (BGB)', 'nach §§ 1165 ff. des Allgemeinen bürgerlichen Gesetzbuchs (ABGB)'],
  ['Der Kostenanschlag ist unverbindlich. Zeichnet sich eine wesentliche Überschreitung ab, zeigt der Unternehmer dies dem Besteller unverzüglich an.', 'Der Kostenvoranschlag wird ohne Gewährleistung für seine Richtigkeit zugrunde gelegt. Erweist sich eine beträchtliche Überschreitung als unvermeidlich, zeigt der Unternehmer dies dem Besteller unverzüglich an; der Besteller kann dann unter angemessener Vergütung der geleisteten Arbeit vom Vertrag zurücktreten (§ 1170a Abs. 2 ABGB).'],
  ['Die Parteien vereinbaren einen Pauschalpreis von {{preis}} (in Worten: {{preis_worte}}) einschließlich Umsatzsteuer.', 'Die Parteien vereinbaren einen Pauschalpreis von {{preis}} (in Worten: {{preis_worte}}) einschließlich Umsatzsteuer. Er gilt als Kostenvoranschlag unter ausdrücklicher Gewährleistung; eine Erhöhung ist ausgeschlossen (§ 1170a Abs. 1 ABGB).'],
  ['Nach Kostenanschlag (unverbindlich)', 'Nach Kostenvoranschlag (unverbindlich)'],
  ['Die Vergütung richtet sich nach dem Kostenanschlag', 'Die Vergütung richtet sich nach dem Kostenvoranschlag'],
  ['Die Vergütung ist bei Abnahme des Werks fällig.', 'Das Entgelt ist nach Vollendung und Übergabe des Werks fällig.'],
  ['Der Rest ist bei Abnahme des Werks fällig.', 'Der Rest ist nach Vollendung und Übergabe des Werks fällig.'],
  ['Wegen unwesentlicher Mängel kann die Abnahme nicht verweigert werden.', 'Geringfügige Mängel, die den Gebrauch nicht hindern, werden im Protokoll festgehalten und beseitigt.'],
  ['Nimmt der Besteller ein Werk trotz Kenntnis eines Mangels ab, behält er seine Mängelrechte nur, wenn er sie bei der Abnahme vorbehält.', 'Bekannte Mängel werden bei der Übernahme im Protokoll vorbehalten.'],
  ['Es gelten die gesetzlichen Mängelrechte (§§ 634 ff. BGB). Die Ansprüche verjähren nach § 634a BGB.', 'Es gilt die gesetzliche Gewährleistung (§§ 922 ff. ABGB).'],
  ['Im Übrigen gelten die Vorschriften des BGB.', 'Im Übrigen gelten die Vorschriften des ABGB.'],
  ['Änderungen und Ergänzungen dieses Vertrags bedürfen der Textform.', 'Änderungen und Ergänzungen dieses Vertrags bedürfen der Schriftform.'],
  ['z. B. Lindenstraße 5, 10115 Berlin', 'z. B. Mariahilfer Straße 10, 1060 Wien'],
  ['z. B. Hauptstraße 1, 10117 Berlin', 'z. B. Hauptplatz 1, 1060 Wien'],
  ['z. B. Berlin', 'z. B. Wien'],
]);

export const werkvertragAT: Sablona = {
  ...z,
  verze: '1.1',
  aktualizovano: '2026-11-20',
  zeme: 'at',
  kontrola: [
    'Leistung so genau wie möglich beschreiben (Umfang, Material, Maße; Angebot als Anlage beifügen).',
    'Kostenvoranschlag mit Gewährleistung (Pauschal): keine Erhöhung, auch wenn die Arbeit teurer wird. Ohne Gewährleistung: Eine beträchtliche Überschreitung muss sofort angezeigt werden, sonst verliert der Unternehmer den Mehrbetrag; der Besteller kann zurücktreten ([§ 1170a ABGB](https://www.ris.bka.gv.at/eli/jgs/1811/946/P1170a/NOR12018912)).',
    'Das Entgelt ist grundsätzlich erst nach Vollendung des Werks fällig.',
    'Bei der Übernahme das Werk prüfen und Mängel ins Protokoll schreiben. Es gilt die gesetzliche Gewährleistung.',
    'Für den Hausbau oder große Umbauten ist diese Vorlage nicht gedacht – fachkundig beraten lassen.',
    TIPP_IDENTITAET,
  ],
  zdroje: [ABGB, ABGB_1170A],
};
