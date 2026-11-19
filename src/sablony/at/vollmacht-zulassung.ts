/**
 * Vollmacht für die Zulassungsstelle (An-, Um- oder Abmeldung) – Österreich.
 * Zulassungsstellen der Versicherer; Vertretung mit schriftlicher Vollmacht (oesterreich.gv.at). §§ 1002 ff. ABGB.
 */
import type { Sablona } from '../typy';
import { vollmachtZulassung as de } from '../de/vollmacht-zulassung';
import { TIPP_IDENTITAET } from '../de/quellen';
import { ABGB, OEGV_ZULASSUNG, OEGV_ABMELDUNG } from './quellen';

export const vollmachtZulassungAT: Sablona = {
  ...de,
  kod: 'AT-VOLLMACHT-KFZ',
  zeme: 'at',
  podnadpis: 'zur Vorlage bei einer Zulassungsstelle',
  paticka: de.paticka.replace('DE-VOLLMACHT-KFZ', 'AT-VOLLMACHT-KFZ'),
  coDal: [
    'Vollmacht ausdrucken und eigenhändig unterschreiben.',
    'Die bevollmächtigte Person bringt mit: diese Vollmacht, ihren Lichtbildausweis und die Fahrzeugpapiere (Zulassungsschein, Typenschein bzw. Genehmigungsnachweis).',
    'Bei der Anmeldung zusätzlich: Versicherungsbestätigung, Kaufvertrag und gültiges § 57a-Gutachten; bei der Abmeldung die Kennzeichentafeln.',
  ],
  kontrola: [
    'Zugelassen wird bei einer Zulassungsstelle eines Versicherers im Bezirk des Hauptwohnsitzes; abmelden kann man bei jeder Zulassungsstelle in Österreich.',
    'Manche Zulassungsstellen verlangen zusätzlich eine Kopie des Ausweises der vollmachtgebenden Person – vorher nachfragen.',
    'FIN und Kennzeichen genau aus dem Zulassungsschein übernehmen.',
    TIPP_IDENTITAET,
  ],
  zdroje: [ABGB, OEGV_ZULASSUNG, OEGV_ABMELDUNG],
  prevzit: de.prevzit
    ? {
        kod: 'AT-KAUF-AUTO',
        nazev: 'den Kaufvertrag',
        mapuj: (d) => ({ ukon: 'abmeldung', z_jmeno: d.p_jmeno, z_narozeni: d.p_narozeni, z_adresa: d.p_adresa, m_jmeno: d.k_jmeno, m_narozeni: d.k_narozeni, m_adresa: d.k_adresa, znacka: d.znacka, vin: d.vin, spz: d.spz, misto: d.misto }),
      }
    : undefined,
  kroky: de.kroky.map((k) => ({
    ...k,
    pole: k.pole.map((p) =>
      p.id === 'ukon'
        ? {
            ...p,
            moznosti: [
              { hodnota: 'abmeldung', popis: 'Abmeldung' },
              { hodnota: 'zulassung', popis: 'Anmeldung (Zulassung)' },
              { hodnota: 'umschreibung', popis: 'Änderung oder Ummeldung' },
            ],
          }
        : p.id === 'z_adresa'
          ? { ...p, popis: 'Anschrift (Hauptwohnsitz)' }
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
          uvod: 'mich bei einer Zulassungsstelle zu vertreten für die',
          uvodVzor: 'mich bei einer Zulassungsstelle zu vertreten für die (ankreuzen):',
          moznosti: { abmeldung: 'Abmeldung', zulassung: 'Anmeldung (Zulassung)', umschreibung: 'Änderung oder Ummeldung' },
        },
        'des Fahrzeugs Marke und Type {{znacka}}, FIN {{vin}}, Kennzeichen {{spz}}, einschließlich der Abgabe und Entgegennahme von Erklärungen, Zulassungsdokumenten und Kennzeichentafeln.',
        'Die Vollmacht gilt bis {{platnost_do}}, ansonsten bis zur Erledigung oder bis zum Widerruf.',
      ],
    },
  ],
};
