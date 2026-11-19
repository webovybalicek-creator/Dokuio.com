/**
 * Übergabeprotokoll Fahrzeug – Schweiz. Kein gesetzliches Formular; Beweis für Zustand und Zeitpunkt der Übergabe
 * (wichtig für die Prüfung nach Art. 201 OR und für Bussen). Vorbefüllung aus CH-KAUF-AUTO.
 */
import type { Clanek, Krok, Sablona } from '../typy';
import { uebergabeprotokollFahrzeug as de } from '../de/uebergabeprotokoll-fahrzeug';
import { naDatum, isoDatum, pridejDny } from '../terminy';
import { schweiz, paticka } from './schweiz';
import { OR_184, OR_201, CH_FAHRZEUGAUSWEIS, TIPP_IDENTITAET_CH } from './quellen';

const r = (t: string) =>
  t
    .replace('Zulassungsbescheinigung Teil I (Fahrzeugschein)', 'Fahrzeugausweis (annulliert)')
    .replace('Zulassungsbescheinigung Teil II (Fahrzeugbrief)', 'Serviceheft / Prüfbericht der letzten MFK')
    .replace('Zulassungsbescheinigung Teil I', 'Fahrzeugausweis (annulliert)')
    .replace('Zulassungsbescheinigung Teil II', 'Serviceheft / Prüfbericht der letzten MFK')
    .replace('FIN {{vin}}, amtliches Kennzeichen {{spz}}', 'Fahrgestellnummer {{vin}}, bisheriges Kontrollschild {{spz}}')
    .replace('Musterstraße 1, 10115 Berlin', 'Musterstrasse 1, 8001 Zürich')
    .replace('z. B. B-AB 1234', 'z. B. ZH 123456')
    .replace('z. B. Berlin', 'z. B. Zürich')
    .replace('Amtliches Kennzeichen', 'Kontrollschild');

type O = Clanek['odstavce'][number];
const odstavec = (o: O): O =>
  typeof o === 'string'
    ? r(o)
    : 'volba' in o
      ? { ...o, moznosti: Object.fromEntries(Object.entries(o.moznosti).map(([k, v]) => [k, r(v)])) }
      : { ...o, moznosti: Object.fromEntries(Object.entries(o.moznosti).map(([k, v]) => [k, r(v)])) };

const kroky: Krok[] = de.kroky.map((k) => ({
  ...k,
  pole: k.pole.map((p) => ({
    ...p,
    popis: r(p.popis),
    placeholder: p.placeholder ? r(p.placeholder) : p.placeholder,
    moznosti: p.moznosti?.map((m) => ({ ...m, popis: r(m.popis) })),
  })),
}));

export const uebergabeprotokollFahrzeugCH: Sablona = schweiz({
  ...de,
  kod: 'CH-UEBERGABE-FZ',
  paticka: paticka('CH-UEBERGABE-FZ'),
  coDal: [
    'Protokoll zweimal ausdrucken, beide Seiten unterschreiben beide Exemplare.',
    'Fahrzeug von allen Seiten und den Tachostand fotografieren – Fotos aufbewahren.',
    'Beim Verkauf: Kontrollschilder abschrauben und behalten oder abgeben, Versicherung informieren.',
  ],
  pripominky: (d) => {
    const od = naDatum(d.predani_datum);
    if (!od || d.duvod !== 'koupe') return [];
    return [{ nazev: 'Schilder und Versicherung erledigt?', datum: isoDatum(pridejDny(od, 1)), popis: 'Schilder für ein anderes Fahrzeug verwenden oder beim Strassenverkehrsamt abgeben; Versicherung über den Verkauf informieren.' }];
  },
  kontrola: [
    'Kilometerstand und Tankfüllung gemeinsam ablesen und genau eintragen.',
    'Schäden konkret beschreiben (Stelle, Grösse) und mit Datum fotografieren.',
    'Die Uhrzeit der Übergabe hilft bei Bussen oder Unfällen: Sie zeigt, wer das Fahrzeug zu welchem Zeitpunkt hatte.',
    'Der Käufer prüft das Fahrzeug bei der Übernahme und meldet Mängel sofort ([Art. 201 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_201)).',
    'Fahrgestellnummer im Fahrzeugausweis mit der am Fahrzeug vergleichen.',
    TIPP_IDENTITAET_CH,
  ],
  zdroje: [OR_184, OR_201, CH_FAHRZEUGAUSWEIS],
  prevzit: de.prevzit ? { ...de.prevzit, kod: 'CH-KAUF-AUTO' } : undefined,
  kroky,
  clanky: de.clanky.map((c) => ({ ...c, nadpis: r(c.nadpis), odstavce: c.odstavce.map(odstavec) })),
});
