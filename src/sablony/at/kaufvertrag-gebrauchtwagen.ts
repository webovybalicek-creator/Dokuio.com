/**
 * Kaufvertrag über ein gebrauchtes Kraftfahrzeug – Österreich, privat an privat. §§ 1053 ff. ABGB;
 * Gewährleistung §§ 922 ff. ABGB (unter Privaten abdingbar, nicht bei List). Abmeldung durch Verkäufer, Anmeldung mit
 * Kaufvertrag und gültigem § 57a-Gutachten durch Käufer (ÖAMTC). Abgeleitet von der deutschen Vorlage.
 */
import type { Sablona } from '../typy';
import { kaufvertragGebrauchtwagen as de } from '../de/kaufvertrag-gebrauchtwagen';
import { TIPP_IDENTITAET, TIPP_BAR } from '../de/quellen';
import { ABGB, KFG, OEAMTC_ZULASSUNG, OEAMTC_AUTOKAUF } from './quellen';
import { nahrad, MUSTER_AT } from '../nahrad';

const ersetze = (t: string) =>
  t
    .replace('§§ 433 ff. BGB', '§§ 1053 ff. ABGB')
    .replace('privater Verkauf nach §§ 433 ff. Bürgerliches Gesetzbuch (BGB)', 'privater Verkauf nach §§ 1053 ff. Allgemeines bürgerliches Gesetzbuch (ABGB)')
    .replace('Zulassungsbescheinigung Teil II Nr. {{zb2}}, nächste HU {{hu}}', 'Typenschein/Genehmigungsnachweis Nr. {{zb2}}, nächste § 57a-Begutachtung (Pickerl) {{hu}}')
    .replace('Die Übergabe erfolgt am {{datum_podpisu}} um {{predani_cas}} Uhr mit {{klice}} Schlüssel(n) sowie der Zulassungsbescheinigung Teil I und Teil II.', 'Die Übergabe erfolgt am {{datum_podpisu}} um {{predani_cas}} Uhr mit {{klice}} Schlüssel(n), dem Genehmigungsnachweis (Typenschein) und dem letzten Gutachten nach § 57a KFG.')
    .replace('Der Käufer verpflichtet sich, das Fahrzeug unverzüglich auf sich umzumelden. Der Verkäufer zeigt die Veräußerung unverzüglich der Zulassungsbehörde und seinem Kfz-Versicherer an.', 'Der Verkäufer meldet das Fahrzeug bei einer Zulassungsstelle ab und verständigt seinen Kfz-Haftpflichtversicherer. Der Käufer meldet das Fahrzeug auf sich an und schließt eine Kfz-Haftpflichtversicherung ab.')
    .replace('Im Übrigen gelten', 'Im Übrigen gelten');

export const kaufvertragGebrauchtwagenAT: Sablona = nahrad({
  ...de,
  kod: 'AT-KAUF-AUTO',
  verze: '1.1',
  aktualizovano: '2026-11-20',
  zeme: 'at',
  podnadpis: ersetze(de.podnadpis),
  paticka: de.paticka.replace('DE-KAUF-AUTO', 'AT-KAUF-AUTO').replace(' v1.0 ', ' v1.1 '),
  coDal: [
    'Vertrag zweimal ausdrucken, beide Seiten unterschreiben beide Exemplare.',
    'Fahrzeug, Schlüssel, Typenschein und Pickerl-Gutachten übergeben.',
    'Verkäufer: Fahrzeug bei einer Zulassungsstelle abmelden (kostenlos) und Versicherung verständigen.',
    'Käufer: Fahrzeug mit Kaufvertrag, Typenschein und Versicherungsbestätigung anmelden.',
  ],
  kontrola: [
    'Der Verkäufer ist Zulassungsbesitzer bzw. Eigentümer – Typenschein und Zulassungsschein prüfen.',
    'Die FIN in den Papieren stimmt mit der am Fahrzeug überein.',
    'Unter Privatpersonen kann die Gewährleistung ausgeschlossen werden – nicht aber für listig verschwiegene Mängel und ausdrücklich zugesicherte Eigenschaften. Bekannte Mängel ehrlich eintragen.',
    'Für die Anmeldung braucht der Käufer den Kaufvertrag und ein gültiges Gutachten nach § 57a KFG („Pickerl“), sofern fällig ([ÖAMTC](https://www.oeamtc.at/thema/autokauf/kfz-zulassung-in-oesterreich-16187062)).',
    'Zur Sicherung des Kaufpreises kann der Verkäufer den Typenschein bis zur vollständigen Zahlung behalten.',
    TIPP_IDENTITAET,
    TIPP_BAR,
  ],
  zdroje: [ABGB, KFG, OEAMTC_ZULASSUNG, OEAMTC_AUTOKAUF],
  kroky: de.kroky.map((k) => ({
    ...k,
    pole: k.pole.map((p) =>
      p.id === 'zb2'
        ? { ...p, popis: 'Nr. Typenschein / Genehmigungsnachweis' }
        : p.id === 'hu'
          ? { ...p, popis: 'Nächste § 57a-Begutachtung (Pickerl)' }
          : p.id === 'p_adresa'
            ? { ...p, placeholder: 'z. B. Hauptstraße 1, 1010 Wien' }
            : p.id === 'misto'
              ? { ...p, placeholder: 'z. B. Wien' }
              : p,
    ),
  })),
  clanky: de.clanky.map((c) => ({
    ...c,
    odstavce: c.odstavce.map((o) =>
      typeof o === 'string'
        ? ersetze(o)
        : 'volba' in o && o.volba === 'haftung'
          ? {
              ...o,
              moznosti: {
                aus: 'Das Fahrzeug wird unter Ausschluss der Gewährleistung verkauft. Dieser Ausschluss gilt nicht für listig verschwiegene Mängel, für ausdrücklich zugesicherte Eigenschaften sowie für Schäden aus grob fahrlässigem oder vorsätzlichem Verhalten des Verkäufers.',
                gesetz: 'Für Mängel haftet der Verkäufer nach den gesetzlichen Gewährleistungsbestimmungen (§§ 922 ff. ABGB).',
              },
            }
          : o,
    ),
  })),
}, MUSTER_AT);
