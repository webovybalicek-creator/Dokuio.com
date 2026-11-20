/**
 * Leihvertrag – Österreich. §§ 971 ff. ABGB: unverbrauchbare Sache zum unentgeltlichen Gebrauch auf bestimmte Zeit (§ 971);
 * Gebrauch wie vereinbart, sonst üblich; Überlassung an Dritte verboten (§ 972). Ohne bestimmte Zeit/Zweck: Prekarium
 * (jederzeit widerruflich). Quellen: ABGB (Forum Media Textausgabe, Uni Graz ABGB-Texttabellen); RIS nicht abrufbar.
 */
import type { Sablona } from '../typy';
import { leihvertrag as de } from '../de/leihvertrag';
import { nahrad } from '../nahrad';
import { TIPP_IDENTITAET } from '../de/quellen';
import { ABGB_971 } from './quellen';

export const leihvertragAT: Sablona = {
  ...nahrad(de, [
    ['DE-LEIHVERTRAG', 'AT-LEIHVERTRAG'],
    ['nach §§ 598 ff. des Bürgerlichen Gesetzbuchs (BGB)', 'nach §§ 971 ff. des Allgemeinen bürgerlichen Gesetzbuchs (ABGB)'],
    ['Der Verleiher kann vorzeitig kündigen, wenn er die Sache infolge eines nicht vorhergesehenen Umstands benötigt, wenn der Entleiher sie vertragswidrig gebraucht oder Dritten ohne Erlaubnis überlässt, oder wenn der Entleiher stirbt.', 'Der Verleiher kann die Sache vorzeitig zurückfordern, wenn der Entleiher sie vertragswidrig gebraucht oder Dritten ohne Erlaubnis überlässt.'],
    ['Im Übrigen gelten die Vorschriften über die Leihe (§§ 598 ff. BGB).', 'Im Übrigen gelten die Vorschriften über den Leihvertrag (§§ 971 ff. ABGB).'],
    ['Die gewöhnlichen Kosten der Erhaltung trägt der Entleiher.', 'Die gewöhnlichen Kosten des Gebrauchs trägt der Entleiher.'],
    ['Änderungen bedürfen der Textform.', 'Änderungen bedürfen der Schriftform.'],
    ['z. B. Lindenstraße 5, 10115 Berlin', 'z. B. Mariahilfer Straße 10, 1060 Wien'],
    ['z. B. Hauptstraße 1, 80331 München', 'z. B. Hauptplatz 1, 8010 Graz'],
    ['Kennzeichen B-AB 123', 'Kennzeichen W-12345A'],
  ]),
  zeme: 'at',
  kontrola: [
    'Ein Leihvertrag entsteht, wenn eine unverbrauchbare Sache bloß zum unentgeltlichen Gebrauch auf eine bestimmte Zeit übergeben wird (§ 971 ABGB). Wird für den Gebrauch bezahlt, ist es Miete.',
    'Legen Sie Dauer oder Zweck fest. Ohne bestimmte Zeit kann eine jederzeit widerrufliche Bittleihe (Prekarium) vorliegen.',
    'Der Entleiher darf die Sache wie vereinbart, sonst wie üblich gebrauchen; die Überlassung an Dritte ist ohne Zustimmung verboten (§ 972 ABGB).',
    'Sache genau beschreiben (Hersteller, Modell, Seriennummer, Zubehör) und den Zustand bei Übergabe festhalten.',
    TIPP_IDENTITAET,
  ],
  zdroje: [ABGB_971],
};
