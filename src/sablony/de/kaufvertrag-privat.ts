/**
 * Kaufvertrag über eine gebrauchte bewegliche Sache zwischen Privatpersonen – Deutschland.
 * §§ 433 ff. BGB; Gewährleistungsausschluss unter Privaten zulässig, nicht bei Arglist oder Garantie (§ 444 BGB).
 */
import type { Sablona } from '../typy';
import { betragInWorten } from './zahlen';
import { BGB_433, BGB_444, TIPP_IDENTITAET, TIPP_BAR } from './quellen';

export const kaufvertragPrivat: Sablona = {
  kod: 'DE-KAUF-PRIVAT',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Kaufvertrag',
  podnadpis: 'über eine gebrauchte Sache zwischen Privatpersonen (§§ 433 ff. BGB)',
  souborPdf: 'kaufvertrag-privat',
  paticka: 'Kostenlos erstellt · Vorlage DE-KAUF-PRIVAT v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'Verkäufer/in', vpravo: 'Käufer/in' },
  slovo: { n: 'Vertrag', g: 'Vertrags', a: 'Vertrag', l: 'Vertrag' },
  coDal: ['Zweimal ausdrucken, beide unterschreiben beide Exemplare.', 'Sache vor der Unterschrift gemeinsam prüfen; bei Barzahlung eine Quittung ausstellen.'],
  kontrola: [
    'Sache genau beschreiben: Marke, Modell, Seriennummer, Zubehör.',
    'Alle bekannten Mängel eintragen – verschwiegene Mängel heben den Gewährleistungsausschluss auf ([§ 444 BGB](https://www.gesetze-im-internet.de/bgb/__444.html)).',
    'Der Gewährleistungsausschluss passt nur zwischen Privatpersonen. Wer gewerblich verkauft, darf ihn gegenüber Verbrauchern nicht verwenden.',
    'Bei teuren Geräten Seriennummer gegen Diebstahl prüfen und Originalrechnung mitgeben lassen.',
    TIPP_IDENTITAET,
    TIPP_BAR,
  ],
  zdroje: [BGB_433, BGB_444],
  kroky: [
    {
      id: 'parteien',
      nazev: 'Verkäufer/in und Käufer/in',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Verkäufer/in – Vor- und Nachname', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Anschrift', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Käufer/in – Vor- und Nachname', sirka: 34 },
        { id: 'k_adresa', typ: 'text', popis: 'Anschrift', sirka: 46 },
      ],
    },
    {
      id: 'sache',
      nazev: 'Kaufsache',
      pole: [
        { id: 'vec', typ: 'textarea', popis: 'Was wird verkauft?', placeholder: 'z. B. E-Bike Cube Kathmandu Hybrid, Rahmennr. WC12345, mit Ladegerät und zwei Schlüsseln', sirka: 64 },
        { id: 'vady', typ: 'textarea', popis: 'Bekannte Mängel (optional)', placeholder: 'z. B. Kratzer am Rahmen, Akku hält ca. 60 km', sirka: 64 },
        {
          id: 'zaruka',
          typ: 'volba',
          popis: 'Gewährleistung',
          moznosti: [
            { hodnota: 'vylouceni', popis: 'Ausgeschlossen (üblich unter Privatpersonen)' },
            { hodnota: 'zakon', popis: 'Gesetzliche Gewährleistung' },
          ],
        },
      ],
    },
    {
      id: 'preis',
      nazev: 'Preis und Übergabe',
      pole: [
        { id: 'cena', typ: 'castka', popis: 'Kaufpreis (€)', sirka: 12, polovina: true },
        {
          id: 'platba',
          typ: 'volba',
          popis: 'Zahlung',
          moznosti: [
            { hodnota: 'bar', popis: 'Bar bei Übergabe' },
            { hodnota: 'ueberweisung', popis: 'Überweisung vor Übergabe' },
          ],
        },
        { id: 'ucet', typ: 'text', popis: 'IBAN Verkäufer/in', sirka: 30, zobrazitKdyz: { pole: 'platba', je: 'ueberweisung' } },
        { id: 'misto', typ: 'text', popis: 'Ort', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { cena_slovy: (d) => betragInWorten(d.cena) },
  clanky: [
    {
      nadpis: 'Vertragsparteien',
      odstavce: ['**Verkäufer/in:** {{p_jmeno}}, wohnhaft {{p_adresa}}', '**Käufer/in:** {{k_jmeno}}, wohnhaft {{k_adresa}}'],
    },
    {
      nadpis: 'Kaufsache',
      vysvetleni: 'Was verkauft wird und in welchem Zustand.',
      odstavce: [
        'Die verkaufende Person verkauft der kaufenden Person folgende gebrauchte Sache: {{vec}}.',
        'Der verkaufenden Person bekannte Mängel: {{vady}}',
        'Die verkaufende Person versichert, Eigentümer/in der Sache zu sein und dass die Sache frei von Rechten Dritter ist.',
      ],
    },
    {
      nadpis: 'Kaufpreis und Übergabe',
      odstavce: [
        'Der Kaufpreis beträgt **{{cena}}** (in Worten: {{cena_slovy}}).',
        {
          volba: 'platba',
          uvodVzor: 'Zahlung (ankreuzen):',
          moznosti: {
            bar: 'Der Kaufpreis wird bei Übergabe bar gezahlt; die verkaufende Person bestätigt den Empfang mit ihrer Unterschrift.',
            ueberweisung: 'Der Kaufpreis wird vor der Übergabe auf das Konto IBAN {{ucet}} überwiesen.',
          },
        },
        'Das Eigentum geht mit vollständiger Zahlung des Kaufpreises und Übergabe auf die kaufende Person über.',
      ],
    },
    {
      nadpis: 'Gewährleistung',
      vysvetleni: 'Haftung für Mängel nach dem Verkauf.',
      odstavce: [
        {
          volba: 'zaruka',
          uvodVzor: 'Gewährleistung (ankreuzen):',
          moznosti: {
            vylouceni: 'Die Sache wird wie besichtigt unter Ausschluss jeder Gewährleistung verkauft. Der Ausschluss gilt nicht für Mängel, die die verkaufende Person arglistig verschwiegen hat, und nicht für Schäden aus der Verletzung von Leben, Körper oder Gesundheit sowie für grob fahrlässig oder vorsätzlich verursachte Schäden.',
            zakon: 'Es gilt die gesetzliche Gewährleistung nach §§ 434 ff. BGB.',
          },
        },
        'Der Vertrag wird zweifach ausgefertigt; jede Partei erhält ein Exemplar.',
      ],
    },
  ],
};
