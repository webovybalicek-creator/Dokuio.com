/**
 * Vollmacht für das Strassenverkehrsamt – Schweiz (Einlösen, Halterwechsel, Ausserverkehrsetzung / Schilderabgabe).
 * Stellvertretung nach Art. 32 ff. OR. Viele Kantone haben eigene Formulare – Hinweis in den Tipps.
 */
import type { Sablona } from '../typy';
import { vollmachtZulassung as de } from '../de/vollmacht-zulassung';
import { schweiz, paticka } from './schweiz';
import { OR_32, ASA, CH_FAHRZEUGAUSWEIS, TIPP_IDENTITAET_CH } from './quellen';

export const vollmachtStrassenverkehrsamtCH: Sablona = schweiz({
  ...de,
  kod: 'CH-VOLLMACHT-STVA',
  podnadpis: 'zur Vorlage beim kantonalen Strassenverkehrsamt (Art. 32 ff. OR)',
  souborPdf: 'vollmacht-strassenverkehrsamt',
  paticka: paticka('CH-VOLLMACHT-STVA'),
  coDal: [
    'Vollmacht ausdrucken und eigenhändig unterschreiben.',
    'Die bevollmächtigte Person bringt mit: diese Vollmacht, ihren eigenen Pass oder ihre ID, eine Kopie Ihres Ausweises und den Fahrzeugausweis.',
    'Beim Einlösen zusätzlich den elektronischen Versicherungsnachweis Ihrer Motorfahrzeugversicherung; bei der Ausserverkehrsetzung die Kontrollschilder.',
  ],
  pripominky: (d) => (typeof d.platnost_do === 'string' && d.platnost_do ? [{ nazev: 'Vollmacht für das Strassenverkehrsamt läuft ab', datum: d.platnost_do }] : []),
  kontrola: [
    'Viele Strassenverkehrsämter haben ein eigenes Vollmachtsformular – vorher auf der Seite Ihres Kantons nachsehen ([asa.ch](https://asa.ch/)).',
    'Fahrgestellnummer und Stammnummer genau aus dem Fahrzeugausweis übernehmen.',
    'Zum Einlösen braucht es einen gültigen Versicherungsnachweis – die Versicherung übermittelt ihn meist direkt elektronisch.',
    TIPP_IDENTITAET_CH,
  ],
  zdroje: [OR_32, ASA, CH_FAHRZEUGAUSWEIS],
  prevzit: de.prevzit ? { ...de.prevzit, kod: 'CH-KAUF-AUTO' } : undefined,
  kroky: de.kroky.map((k) => ({
    ...k,
    pole: k.pole.map((p) =>
      p.id === 'ukon'
        ? {
            ...p,
            moznosti: [
              { hodnota: 'umschreibung', popis: 'Halterwechsel (Einlösen eines gekauften Fahrzeugs)' },
              { hodnota: 'zulassung', popis: 'Einlösen (Zulassung) eines Fahrzeugs' },
              { hodnota: 'abmeldung', popis: 'Ausserverkehrsetzung und Abgabe der Kontrollschilder' },
            ],
          }
        : p.id === 'z_jmeno'
          ? { ...p, napoveda: 'Die Person, die Halter/in des Fahrzeugs ist oder wird.' }
          : p.id === 'z_adresa'
            ? { ...p, popis: 'Adresse (Wohnsitz)' }
            : p.id === 'znacka'
              ? { ...p, popis: 'Marke und Typ' }
              : p.id === 'vin'
                ? { ...p, popis: 'Fahrgestellnummer (FIN/VIN)', napoveda: 'Feld 23 im Fahrzeugausweis.' }
                : p.id === 'spz'
                  ? { ...p, popis: 'Kontrollschild (falls vorhanden)', placeholder: 'z. B. ZH 123456' }
                  : p,
    ),
  })),
  clanky: [
    {
      nadpis: 'Vollmacht',
      odstavce: [
        'Ich, **{{z_jmeno}}**, geboren am {{z_narozeni}}, wohnhaft {{z_adresa}},',
        'bevollmächtige hiermit **{{m_jmeno}}**, geboren am {{m_narozeni}}, wohnhaft {{m_adresa}},',
        {
          volba: 'ukon',
          uvod: 'mich beim Strassenverkehrsamt zu vertreten für',
          uvodVzor: 'mich beim Strassenverkehrsamt zu vertreten für (ankreuzen):',
          moznosti: {
            umschreibung: 'den Halterwechsel (Einlösen eines gekauften Fahrzeugs auf meinen Namen)',
            zulassung: 'das Einlösen des Fahrzeugs',
            abmeldung: 'die Ausserverkehrsetzung des Fahrzeugs und die Abgabe der Kontrollschilder',
          },
        },
        'des Fahrzeugs Marke und Typ {{znacka}}, Fahrgestellnummer {{vin}}, Kontrollschild {{spz}}, einschliesslich der Abgabe und Entgegennahme von Erklärungen, Fahrzeugausweis und Kontrollschildern.',
        'Die Vollmacht gilt bis {{platnost_do}}, ansonsten bis zur Erledigung des Geschäfts oder bis zum Widerruf.',
      ],
    },
  ],
});
