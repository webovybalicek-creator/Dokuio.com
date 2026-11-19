/**
 * Schenkungsvertrag (mit wirklicher Übergabe) – Österreich. § 938 ff. ABGB; ohne wirkliche Übergabe ist ein Notariatsakt nötig
 * (§ 943 ABGB, § 1 Abs. 1 lit. d NotAktsG). Schenkungsmeldung nach § 121a BAO binnen drei Monaten. Keine Liegenschaften.
 */
import type { Sablona } from '../typy';
import { schenkungsvertrag as de } from '../de/schenkungsvertrag';
import { TIPP_IDENTITAET } from '../de/quellen';
import { ABGB, OEGV_SCHENKUNG, BMF_SCHENKUNGSMELDUNG } from './quellen';

export const schenkungsvertragAT: Sablona = {
  ...de,
  kod: 'AT-SCHENKUNG',
  zeme: 'at',
  podnadpis: 'über eine Schenkung mit wirklicher Übergabe (§§ 938 ff. ABGB)',
  paticka: de.paticka.replace('DE-SCHENKUNG', 'AT-SCHENKUNG'),
  coDal: [
    'Zweimal ausdrucken, beide unterschreiben beide Exemplare.',
    'Geld am besten am selben Tag überweisen, Verwendungszweck „Schenkung“.',
    'Prüfen, ob die Schenkung dem Finanzamt zu melden ist (Schenkungsmeldung binnen drei Monaten).',
  ],
  kontrola: [
    'Diese Vorlage ist nur für Schenkungen, die sofort übergeben oder überwiesen werden. Ein Schenkungsversprechen ohne wirkliche Übergabe braucht einen Notariatsakt ([oesterreich.gv.at](https://www.oesterreich.gv.at/themen/gesetze_und_recht/gerichtsorganisation_der_justiz/zivilrecht/Seite.10102038.html)).',
    'Für Liegenschaften ist immer eine beglaubigte Urkunde und die Eintragung im Grundbuch nötig.',
    'Eine Schenkungssteuer gibt es in Österreich nicht, aber eine Meldepflicht: zwischen Angehörigen über 50.000 € innerhalb eines Jahres, zwischen anderen Personen über 15.000 € innerhalb von fünf Jahren – binnen drei Monaten beim Finanzamt ([BMF](https://www.bmf.gv.at/themen/steuern/steuern-von-a-bis-z/schenkungsmeldung.html)).',
    'Bei verschenkten Sachen bekannte Mängel angeben.',
    TIPP_IDENTITAET,
  ],
  zdroje: [ABGB, OEGV_SCHENKUNG, BMF_SCHENKUNGSMELDUNG],
  kroky: de.kroky.map((k) => ({ ...k, pole: k.pole.map((p) => (p.id === 'vztah' ? { ...p, napoveda: 'Wichtig für die Schenkungsmeldung (Angehörige haben eine höhere Grenze).' } : p)) })),
  clanky: de.clanky.map((c) =>
    c.nadpis === 'Vollzug'
      ? { ...c, vysvetleni: 'Das Geschenk wird sofort übergeben (wirkliche Übergabe) – deshalb ist kein Notariatsakt nötig.' }
      : c.nadpis === 'Schlussbestimmungen'
        ? {
            ...c,
            odstavce: [
              'Im Übrigen gelten die §§ 938 ff. ABGB, einschließlich der gesetzlichen Widerrufsrechte der schenkenden Person.',
              'Den Parteien ist bekannt, dass Schenkungen über den Grenzen des § 121a BAO binnen drei Monaten dem Finanzamt zu melden sind.',
              'Der Vertrag wird zweifach ausgefertigt; jede Partei erhält ein Exemplar.',
            ],
          }
        : c,
  ),
};
