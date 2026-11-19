/** Kaufvertrag über eine gebrauchte Sache zwischen Privatpersonen – Österreich. §§ 1053 ff., Gewährleistung §§ 922 ff. ABGB. */
import type { Sablona } from '../typy';
import { kaufvertragPrivat as de } from '../de/kaufvertrag-privat';
import { TIPP_IDENTITAET, TIPP_BAR } from '../de/quellen';
import { ABGB } from './quellen';

export const kaufvertragPrivatAT: Sablona = {
  ...de,
  kod: 'AT-KAUF-PRIVAT',
  zeme: 'at',
  podnadpis: 'über eine gebrauchte Sache zwischen Privatpersonen (§§ 1053 ff. ABGB)',
  paticka: de.paticka.replace('DE-KAUF-PRIVAT', 'AT-KAUF-PRIVAT'),
  kontrola: [
    'Sache genau beschreiben: Marke, Modell, Seriennummer, Zubehör.',
    'Alle bekannten Mängel eintragen – für listig verschwiegene Mängel und ausdrücklich zugesicherte Eigenschaften gilt ein Gewährleistungsausschluss nicht.',
    'Der Gewährleistungsausschluss passt nur zwischen Privatpersonen. Unternehmer dürfen ihn gegenüber Verbrauchern nicht verwenden.',
    TIPP_IDENTITAET,
    TIPP_BAR,
  ],
  zdroje: [ABGB],
  clanky: de.clanky.map((c) =>
    c.nadpis === 'Gewährleistung'
      ? {
          ...c,
          odstavce: [
            {
              volba: 'zaruka',
              uvodVzor: 'Gewährleistung (ankreuzen):',
              moznosti: {
                vylouceni: 'Die Sache wird wie besichtigt unter Ausschluss der Gewährleistung verkauft. Der Ausschluss gilt nicht für listig verschwiegene Mängel und ausdrücklich zugesicherte Eigenschaften.',
                zakon: 'Es gilt die gesetzliche Gewährleistung nach §§ 922 ff. ABGB.',
              },
            },
            'Der Vertrag wird zweifach ausgefertigt; jede Partei erhält ein Exemplar.',
          ],
        }
      : c,
  ),
};
