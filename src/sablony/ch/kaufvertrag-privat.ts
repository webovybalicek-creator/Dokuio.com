/**
 * Kaufvertrag über eine gebrauchte Sache zwischen Privatpersonen – Schweiz. Art. 184 ff. OR;
 * Wegbedingung der Gewährleistung zulässig, nicht bei arglistig verschwiegenen Mängeln (Art. 199 OR).
 */
import type { Sablona } from '../typy';
import { kaufvertragPrivat as de } from '../de/kaufvertrag-privat';
import { schweiz, betragInFranken, paticka } from './schweiz';
import { OR_184, OR_199, OR_201, TIPP_IDENTITAET_CH, TIPP_BAR_CH } from './quellen';

export const kaufvertragPrivatCH: Sablona = schweiz({
  ...de,
  kod: 'CH-KAUF-PRIVAT',
  podnadpis: 'über eine gebrauchte Sache zwischen Privatpersonen (Art. 184 ff. OR)',
  paticka: paticka('CH-KAUF-PRIVAT'),
  kontrola: [
    'Sache genau beschreiben: Marke, Modell, Seriennummer, Zubehör.',
    'Alle bekannten Mängel eintragen – arglistig verschwiegene Mängel machen den Gewährleistungsausschluss ungültig ([Art. 199 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_199)).',
    'Die kaufende Person prüft die Sache bei der Übergabe und meldet Mängel sofort ([Art. 201 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_201)).',
    'Bei teuren Geräten Seriennummer prüfen und Originalquittung mitgeben lassen.',
    TIPP_IDENTITAET_CH,
    TIPP_BAR_CH,
  ],
  zdroje: [OR_184, OR_199, OR_201],
  kroky: de.kroky.map((k) => ({ ...k, pole: k.pole.map((p) => (p.id === 'cena' ? { ...p, popis: 'Kaufpreis (CHF)' } : p)) })),
  odvozene: { ...de.odvozene, cena_slovy: (d) => betragInFranken(d.cena) },
  clanky: de.clanky.map((c) =>
    c.nadpis === 'Gewährleistung'
      ? {
          ...c,
          odstavce: [
            {
              volba: 'zaruka',
              uvodVzor: 'Gewährleistung (ankreuzen):',
              moznosti: {
                vylouceni: 'Die Sache wird wie besichtigt verkauft. Jede Gewährleistung wird wegbedungen. Dies gilt nicht für Mängel, die die verkaufende Person arglistig verschwiegen hat (Art. 199 OR).',
                zakon: 'Es gilt die gesetzliche Gewährleistung nach Art. 197 ff. OR.',
              },
            },
            'Der Vertrag wird zweifach ausgefertigt; jede Partei erhält ein Exemplar.',
          ],
        }
      : c,
  ),
});
