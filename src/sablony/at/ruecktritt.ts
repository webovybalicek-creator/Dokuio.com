/**
 * Rücktritt von einem Fernabsatzvertrag (Online-Kauf) – Österreich. FAGG: 14 Tage (§ 11), Muster-Widerrufsformular
 * (Anhang I Teil B), Rückzahlung binnen 14 Tagen (§ 14), Verlängerung um 12 Monate bei fehlender Belehrung (§ 12).
 */
import type { Sablona } from '../typy';
import { widerruf as de } from '../de/widerruf';
import { WKO_RUECKTRITT } from './quellen';

export const ruecktrittAT: Sablona = {
  ...de,
  kod: 'AT-RUECKTRITT',
  zeme: 'at',
  nazev: 'Rücktritt (Widerruf)',
  podnadpis: 'von einem Fernabsatzvertrag nach § 11 FAGG (Muster-Widerrufsformular)',
  souborPdf: 'ruecktritt-widerruf',
  paticka: de.paticka.replace('DE-WIDERRUF', 'AT-RUECKTRITT'),
  kontrola: [
    'Die Frist beträgt 14 Tage ab Erhalt der Ware (bei Dienstleistungen ab Vertragsschluss). Es genügt, den Rücktritt rechtzeitig abzusenden.',
    'Für Verträge ab 1. Oktober 2026 müssen Webshops eine Online-Rücktrittsfunktion („Widerrufsbutton“) anbieten (§ 13a FAGG). Der Rücktritt per Brief oder E-Mail bleibt wirksam.',
    'Das Rücktrittsrecht nach dem FAGG gilt nur bei Käufen von Unternehmern im Fernabsatz oder außerhalb von Geschäftsräumen – nicht im Geschäft und nicht zwischen Privatpersonen.',
    'Ausnahmen: z. B. maßgefertigte Waren, schnell verderbliche Waren, entsiegelte Hygieneartikel, entsiegelte Datenträger, Freizeitdienstleistungen mit festem Termin.',
    'Rücksendekosten tragen Sie nur, wenn der Unternehmer Sie vorher darüber informiert hat.',
    'Fehlte die Belehrung über das Rücktrittsrecht, verlängert sich die Frist um 12 Monate ([WKO](https://www.wko.at/internetrecht/ruecktrittsrecht-bei-warenkauf-im-internet)).',
  ],
  zdroje: [WKO_RUECKTRITT],
};
