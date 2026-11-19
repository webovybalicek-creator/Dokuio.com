/** Übergabeprotokoll Kfz – Österreich. Abgeleitet von der deutschen Vorlage; Papiere nach österreichischer Praxis. */
import type { Sablona } from '../typy';
import { uebergabeprotokollFahrzeug as de } from '../de/uebergabeprotokoll-fahrzeug';
import { TIPP_IDENTITAET } from '../de/quellen';
import { ABGB, OEGV_ABMELDUNG } from './quellen';

const DOKLADY = [
  { hodnota: 'zs', popis: 'Zulassungsschein (Zulassungsbescheinigung Teil I)' },
  { hodnota: 'ts', popis: 'Typenschein / Genehmigungsnachweis' },
  { hodnota: 'pickerl', popis: 'Letztes Gutachten nach § 57a KFG (Pickerl)' },
  { hodnota: 'servis', popis: 'Serviceheft' },
  { hodnota: 'navod', popis: 'Bedienungsanleitung' },
];

export const uebergabeprotokollFahrzeugAT: Sablona = {
  ...de,
  kod: 'AT-UEBERGABE-KFZ',
  zeme: 'at',
  paticka: de.paticka.replace('DE-UEBERGABE-KFZ', 'AT-UEBERGABE-KFZ'),
  coDal: [
    'Protokoll zweimal ausdrucken, beide Seiten unterschreiben beide Exemplare.',
    'Fahrzeug von allen Seiten und den Tachostand fotografieren – Fotos aufbewahren.',
    'Beim Verkauf: Verkäufer meldet das Fahrzeug bei einer Zulassungsstelle ab und verständigt die Versicherung, Käufer meldet es auf sich an.',
  ],
  pripominky: undefined,
  kontrola: [
    ...de.kontrola.filter((t) => t !== TIPP_IDENTITAET),
    'Solange das Fahrzeug nicht abgemeldet ist, können Strafen beim bisherigen Zulassungsbesitzer landen – Uhrzeit der Übergabe genau eintragen.',
    TIPP_IDENTITAET,
  ],
  zdroje: [ABGB, OEGV_ABMELDUNG],
  prevzit: de.prevzit ? { ...de.prevzit, kod: 'AT-KAUF-AUTO' } : undefined,
  kroky: de.kroky.map((k) => ({
    ...k,
    pole: k.pole.map((p) =>
      p.id === 'doklady'
        ? { ...p, moznosti: DOKLADY }
        : p.id === 'p_adresa'
          ? { ...p, placeholder: 'z. B. Hauptstraße 1, 1010 Wien' }
          : p.id === 'spz'
            ? { ...p, placeholder: 'z. B. W-12345A' }
            : p.id === 'misto'
              ? { ...p, placeholder: 'z. B. Wien' }
              : p,
    ),
  })),
  clanky: de.clanky.map((c) => ({
    ...c,
    odstavce: c.odstavce.map((o) =>
      typeof o === 'object' && 'vice' in o && o.vice === 'doklady'
        ? { ...o, moznosti: Object.fromEntries(DOKLADY.map((d) => [d.hodnota, d.popis])) }
        : o,
    ),
  })),
};
