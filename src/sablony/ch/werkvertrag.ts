/**
 * Werkvertrag – Schweiz. Art. 363 ff. OR: Prüfung und Mängelrüge (Art. 367, 370), Verjährung 2 / 5 Jahre
 * ab Abnahme (Art. 371), Vergütung fällig bei Ablieferung (Art. 372), feste Übernahme (Art. 373),
 * unverhältnismässige Überschreitung eines ungefähren Kostenansatzes (Art. 375).
 */
import type { Sablona } from '../typy';
import { werkvertrag as de } from '../de/werkvertrag';
import { nahrad } from '../nahrad';
import { schweiz, betragInFranken, paticka } from './schweiz';
import { OR_363, OR_367, OR_371, OR_375, TIPP_IDENTITAET_CH } from './quellen';

const z = nahrad(de, [
  ['nach §§ 631 ff. des Bürgerlichen Gesetzbuchs (BGB)', 'nach Art. 363 ff. Obligationenrecht (OR)'],
  ['Vergütung (€, brutto)', 'Vergütung (CHF, inkl. MWST)'],
  ['Höhe der Anzahlung (€)', 'Höhe der Anzahlung (CHF)'],
  ['einschließlich Umsatzsteuer', 'inklusive Mehrwertsteuer'],
  ['Pauschalpreis (fest)', 'Fester Preis (Art. 373 OR)'],
  ['Nach Kostenanschlag (unverbindlich)', 'Ungefährer Kostenansatz'],
  ['Die Parteien vereinbaren einen Pauschalpreis von {{preis}} (in Worten: {{preis_worte}}) inklusive Mehrwertsteuer.', 'Die Parteien vereinbaren einen festen Preis von {{preis}} (in Worten: {{preis_worte}}) inklusive Mehrwertsteuer. Der Unternehmer kann keine Erhöhung verlangen, auch wenn das Werk mehr Arbeit erfordert (Art. 373 OR).'],
  ['Die Vergütung richtet sich nach dem Kostenanschlag über {{preis}} (in Worten: {{preis_worte}}) inklusive Mehrwertsteuer. Der Kostenanschlag ist unverbindlich. Zeichnet sich eine wesentliche Überschreitung ab, zeigt der Unternehmer dies dem Besteller unverzüglich an.', 'Die Vergütung richtet sich nach dem ungefähren Kostenansatz von {{preis}} (in Worten: {{preis_worte}}) inklusive Mehrwertsteuer. Zeichnet sich eine Überschreitung ab, zeigt der Unternehmer dies dem Besteller sofort an. Wird der Ansatz ohne Zutun des Bestellers unverhältnismässig überschritten, kann der Besteller nach Art. 375 OR vom Vertrag zurücktreten.'],
  ['Die Vergütung ist bei Abnahme des Werks fällig.', 'Die Vergütung ist bei Ablieferung des Werks fällig (Art. 372 OR).'],
  ['Der Rest ist bei Abnahme des Werks fällig.', 'Der Rest ist bei Ablieferung des Werks fällig.'],
  ['Zahlung binnen {{zahlungsziel}} Tagen nach Abnahme auf das Konto IBAN {{iban}} oder bar gegen Quittung.', 'Zahlung binnen {{zahlungsziel}} Tagen nach Ablieferung auf das Konto IBAN {{iban}} oder bar gegen Quittung.'],
  ['Nach Fertigstellung nimmt der Besteller das Werk ab. Über die Abnahme wird ein Protokoll erstellt, in dem festgestellte Mängel und Fristen zu ihrer Beseitigung festgehalten werden. Wegen unwesentlicher Mängel kann die Abnahme nicht verweigert werden.', 'Nach Ablieferung prüft der Besteller das Werk, sobald es nach dem üblichen Geschäftsgang tunlich ist, und meldet Mängel sofort (Art. 367 OR). Über die Abnahme wird ein Protokoll mit den festgestellten Mängeln und Fristen zu ihrer Beseitigung erstellt.'],
  ['Nimmt der Besteller ein Werk trotz Kenntnis eines Mangels ab, behält er seine Mängelrechte nur, wenn er sie bei der Abnahme vorbehält.', 'Genehmigt der Besteller das Werk ausdrücklich oder stillschweigend, entfällt die Haftung des Unternehmers für erkennbare Mängel (Art. 370 OR).'],
  ['Es gelten die gesetzlichen Mängelrechte (§§ 634 ff. BGB). Die Ansprüche verjähren nach § 634a BGB.', 'Im Übrigen gelten Art. 368 ff. OR. Mängelansprüche verjähren nach Art. 371 OR.'],
  ['Im Übrigen gelten die Vorschriften des BGB.', 'Im Übrigen gelten die Vorschriften des OR.'],
  ['Änderungen und Ergänzungen dieses Vertrags bedürfen der Textform.', 'Änderungen und Ergänzungen dieses Vertrags bedürfen der Schriftform.'],
  ['z. B. Lindenstraße 5, 10115 Berlin', 'z. B. Bahnhofstrasse 10, 8001 Zürich'],
  ['z. B. Hauptstraße 1, 10117 Berlin', 'z. B. Marktgasse 1, 8001 Zürich'],
  ['z. B. Berlin', 'z. B. Zürich'],
]);

export const werkvertragCH: Sablona = schweiz({
  ...z,
  kod: 'CH-WERKVERTRAG',
  paticka: paticka('CH-WERKVERTRAG'),
  odvozene: { preis_worte: (d) => betragInFranken(d.preis) },
  kontrola: [
    'Leistung so genau wie möglich beschreiben (Umfang, Material, Masse; Offerte als Anlage beifügen).',
    'Fester Preis: keine Mehrforderung, auch bei mehr Aufwand (Art. 373 OR). Ungefährer Kostenansatz: bei unverhältnismässiger Überschreitung kann der Besteller zurücktreten ([Art. 375 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_375)).',
    'Das Werk nach Ablieferung prüfen und Mängel sofort rügen; bei unbeweglichen Werken beträgt die Rügefrist 60 Tage ([Art. 367 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_367)). Wer genehmigt, verliert Ansprüche für erkennbare Mängel.',
    'Mängelansprüche verjähren 2 Jahre nach Abnahme, bei unbeweglichen Werken 5 Jahre ([Art. 371 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_371)).',
    'Für den Hausbau oder grosse Umbauten ist diese Vorlage nicht gedacht – fachkundig beraten lassen.',
    TIPP_IDENTITAET_CH,
  ],
  zdroje: [OR_363, OR_367, OR_371, OR_375],
});
