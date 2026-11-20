/**
 * Gebrauchsleihe – Schweiz. Art. 305–311 OR (Fedlex): unentgeltlicher Gebrauch, Rückgabe derselben Sache (305);
 * Gebrauch nur vertragsgemäss, nicht an Dritte, sonst Haftung auch für Zufall (306); gewöhnliche Kosten trägt der Entlehner (307);
 * Solidarhaftung (308); Ende nach Gebrauch, vorzeitige Rückforderung bei vertragswidrigem Gebrauch, Weitergabe oder
 * dringendem unvorhergesehenem Bedarf (309); ohne Dauer/Zweck jederzeit (310); Ende mit Tod des Entlehners (311).
 */
import type { Sablona } from '../typy';
import { leihvertrag as de } from '../de/leihvertrag';
import { nahrad } from '../nahrad';
import { schweiz, paticka } from './schweiz';
import { OR_305, TIPP_IDENTITAET_CH } from './quellen';

export const leihvertragCH: Sablona = schweiz({
  ...nahrad(de, [
    ['nach §§ 598 ff. des Bürgerlichen Gesetzbuchs (BGB)', 'nach Art. 305 ff. Obligationenrecht (OR) – Gebrauchsleihe'],
    ['Wert der Sache (€, optional)', 'Wert der Sache (CHF, optional)'],
    ['Entleiher/in', 'Entlehner/in'],
    ['Entleiher', 'Entlehner'],
    ['Der Verleiher kann vorzeitig kündigen, wenn er die Sache infolge eines nicht vorhergesehenen Umstands benötigt, wenn der Entlehner sie vertragswidrig gebraucht oder Dritten ohne Erlaubnis überlässt, oder wenn der Entlehner stirbt.', 'Der Verleiher kann die Sache vorzeitig zurückfordern, wenn der Entlehner sie vertragswidrig gebraucht, verschlechtert oder einem Dritten überlässt, oder wenn er sie wegen eines unvorhergesehenen Falls selbst dringend braucht (Art. 309 OR). Mit dem Tod des Entlehners endet die Gebrauchsleihe (Art. 311 OR).'],
    ['Die gewöhnlichen Kosten der Erhaltung trägt der Entlehner.', 'Die gewöhnlichen Kosten für die Erhaltung trägt der Entlehner (Art. 307 OR).'],
    ['Im Übrigen gelten die Vorschriften über die Leihe (§§ 598 ff. BGB).', 'Im Übrigen gelten die Vorschriften über die Gebrauchsleihe (Art. 305 ff. OR).'],
    ['Änderungen bedürfen der Textform.', 'Änderungen bedürfen der Schriftform.'],
    ['z. B. Lindenstraße 5, 10115 Berlin', 'z. B. Bahnhofstrasse 10, 8001 Zürich'],
    ['z. B. Hauptstraße 1, 80331 München', 'z. B. Marktgasse 1, 3011 Bern'],
    ['Kennzeichen B-AB 123', 'Kontrollschild ZH 123456'],
  ]),
  kod: 'CH-LEIHVERTRAG',
  paticka: paticka('CH-LEIHVERTRAG').replace('für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen', 'für den Inhalt sind die Parteien verantwortlich'),
  kontrola: [
    'Bei der Gebrauchsleihe überlässt der Verleiher eine Sache unentgeltlich zum Gebrauch; der Entlehner gibt dieselbe Sache zurück ([Art. 305 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_305)). Wird bezahlt, ist es Miete.',
    'Der Entlehner darf die Sache nur vertragsgemäss gebrauchen und nicht Dritten überlassen; sonst haftet er auch für Zufall (Art. 306 OR). Die gewöhnlichen Erhaltungskosten trägt er (Art. 307 OR).',
    'Dauer oder Zweck festlegen: Ist beides nicht bestimmt, kann der Verleiher die Sache jederzeit zurückfordern (Art. 310 OR).',
    'Sache genau beschreiben (Hersteller, Modell, Seriennummer, Zubehör) und den Zustand bei Übergabe festhalten.',
    TIPP_IDENTITAET_CH,
  ],
  zdroje: [OR_305],
});
