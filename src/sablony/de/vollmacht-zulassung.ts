/**
 * Vollmacht für die Zulassungsstelle (Umschreibung, Anmeldung, Abmeldung) – Deutschland.
 * Zulassungsstellen verlangen eine schriftliche Vollmacht, den Ausweis der bevollmächtigten Person
 * und bei Zulassung/Umschreibung ein vom Halter unterschriebenes SEPA-Lastschriftmandat für die Kfz-Steuer.
 */
import type { Sablona } from '../typy';
import { BGB_164, BERLIN_UMSCHREIBUNG, TIPP_IDENTITAET } from './quellen';

export const vollmachtZulassung: Sablona = {
  kod: 'DE-VOLLMACHT-KFZ',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Vollmacht',
  podnadpis: 'zur Vorlage bei der Kfz-Zulassungsbehörde',
  souborPdf: 'vollmacht-zulassung',
  paticka: 'Kostenlos erstellt · Vorlage DE-VOLLMACHT-KFZ v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Vollmachtgeber/in', vpravo: 'Bevollmächtigte/r' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  slovo: { n: 'Vollmacht', g: 'Vollmacht', a: 'Vollmacht', l: 'Vollmacht' },
  coDal: [
    'Vollmacht ausdrucken und eigenhändig unterschreiben.',
    'Die bevollmächtigte Person bringt mit: diese Vollmacht, ihren eigenen Ausweis, Ihren Ausweis (oder eine Kopie, je nach Behörde) und die Fahrzeugpapiere.',
    'Bei Zulassung oder Umschreibung zusätzlich: SEPA-Lastschriftmandat für die Kfz-Steuer, von Ihnen unterschrieben, und die eVB-Nummer der Versicherung.',
  ],
  pripominky: (d) => (typeof d.platnost_do === 'string' && d.platnost_do ? [{ nazev: 'Vollmacht für die Zulassungsstelle läuft ab', datum: d.platnost_do }] : []),
  kontrola: [
    'Ohne vom Halter unterschriebenes SEPA-Lastschriftmandat für die Kfz-Steuer lässt die Zulassungsbehörde kein Fahrzeug zu.',
    'Viele Behörden haben ein eigenes Vollmachtsformular und wollen den Ausweis des Vollmachtgebers im Original oder als Kopie sehen – vorher auf der Seite Ihrer Zulassungsstelle nachsehen.',
    'FIN und Kennzeichen genau aus dem Fahrzeugschein übernehmen.',
    TIPP_IDENTITAET,
  ],
  zdroje: [BGB_164, BERLIN_UMSCHREIBUNG],
  prevzit: {
    kod: 'DE-KAUF-AUTO',
    nazev: 'den Kaufvertrag',
    mapuj: (d) => ({
      ukon: 'umschreibung',
      z_jmeno: d.k_jmeno,
      z_narozeni: d.k_narozeni,
      z_adresa: d.k_adresa,
      znacka: d.znacka,
      vin: d.vin,
      spz: d.spz,
      misto: d.misto,
    }),
  },
  kroky: [
    {
      id: 'personen',
      nazev: 'Wer wen bevollmächtigt',
      pole: [
        { id: 'z_jmeno', typ: 'text', popis: 'Vollmachtgeber/in – Vor- und Nachname', napoveda: 'Die Person, auf die das Fahrzeug zugelassen ist oder wird.', sirka: 34, autocomplete: 'name' },
        { id: 'z_narozeni', typ: 'datum', popis: 'Geburtsdatum', sirka: 14, polovina: true },
        { id: 'z_adresa', typ: 'text', popis: 'Anschrift (Hauptwohnsitz)', sirka: 46 },
        { id: 'm_jmeno', typ: 'text', popis: 'Bevollmächtigte/r – Vor- und Nachname', sirka: 34 },
        { id: 'm_narozeni', typ: 'datum', popis: 'Geburtsdatum', sirka: 14, polovina: true },
        { id: 'm_adresa', typ: 'text', popis: 'Anschrift', sirka: 46 },
      ],
    },
    {
      id: 'fahrzeug',
      nazev: 'Fahrzeug und Vorgang',
      pole: [
        {
          id: 'ukon',
          typ: 'volba',
          popis: 'Was soll erledigt werden?',
          moznosti: [
            { hodnota: 'umschreibung', popis: 'Umschreibung (Halterwechsel)' },
            { hodnota: 'zulassung', popis: 'Zulassung (Anmeldung)' },
            { hodnota: 'abmeldung', popis: 'Außerbetriebsetzung (Abmeldung)' },
          ],
        },
        { id: 'znacka', typ: 'text', popis: 'Hersteller und Typ', placeholder: 'z. B. VW Golf', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'Fahrzeug-Identifizierungsnummer (FIN)', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Amtliches Kennzeichen (falls vorhanden)', sirka: 12, polovina: true },
        { id: 'platnost_do', typ: 'datum', popis: 'Gültig bis (optional)', sirka: 14, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Ort', sirka: 18, polovina: true, vychozi: { obecZ: 'z_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Vollmacht',
      odstavce: [
        'Ich, **{{z_jmeno}}**, geboren am {{z_narozeni}}, wohnhaft {{z_adresa}},',
        'bevollmächtige hiermit **{{m_jmeno}}**, geboren am {{m_narozeni}}, wohnhaft {{m_adresa}},',
        {
          volba: 'ukon',
          uvod: 'mich bei der Kfz-Zulassungsbehörde zu vertreten für die',
          uvodVzor: 'mich bei der Kfz-Zulassungsbehörde zu vertreten für die (ankreuzen):',
          moznosti: {
            umschreibung: 'Umschreibung (Halterwechsel)',
            zulassung: 'Zulassung',
            abmeldung: 'Außerbetriebsetzung',
          },
        },
        'des Fahrzeugs Hersteller und Typ {{znacka}}, FIN {{vin}}, amtliches Kennzeichen {{spz}}, einschließlich der Abgabe und Entgegennahme von Erklärungen, Fahrzeugpapieren und Kennzeichen.',
        'Die Vollmacht gilt bis {{platnost_do}}, ansonsten bis zur Erledigung des Vorgangs oder bis zum Widerruf.',
      ],
    },
  ],
};
