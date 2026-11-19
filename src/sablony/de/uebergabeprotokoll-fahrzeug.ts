/**
 * Übergabeprotokoll Fahrzeug – Deutschland. Zustand, Kilometerstand, Schlüssel, Papiere und Uhrzeit der Übergabe.
 * Kein gesetzliches Formular; dient als Beweis (§ 433 BGB). Vorbefüllung aus DE-KAUF-AUTO.
 */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { BGB_433, FZV_15, TIPP_IDENTITAET } from './quellen';

export const uebergabeprotokollFahrzeug: Sablona = {
  kod: 'DE-UEBERGABE-KFZ',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Übergabeprotokoll',
  podnadpis: 'über die Übergabe und Übernahme eines Kraftfahrzeugs',
  souborPdf: 'uebergabeprotokoll-fahrzeug',
  paticka: 'Kostenlos erstellt · Vorlage DE-UEBERGABE-KFZ v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'misto',
  datumPodpisu: 'predani_datum',
  podpisy: { vlevo: 'Übergebende/r', vpravo: 'Übernehmende/r' },
  cislovatClanky: false,
  slovo: { n: 'Protokoll', g: 'Protokolls', a: 'Protokoll', l: 'Protokoll' },
  coDal: [
    'Protokoll zweimal ausdrucken, beide Seiten unterschreiben beide Exemplare.',
    'Fahrzeug von allen Seiten und den Tachostand fotografieren – Fotos aufbewahren.',
    'Beim Verkauf: Veräußerung unverzüglich der Zulassungsbehörde und der Kfz-Versicherung melden.',
  ],
  pripominky: (d) => {
    const od = naDatum(d.predani_datum);
    if (!od || d.duvod !== 'koupe') return [];
    return [{ nazev: 'Verkauf an Zulassungsstelle und Versicherung gemeldet?', datum: isoDatum(pridejDny(od, 1)), popis: 'Die Veräußerung ist unverzüglich zu melden (§ 15 FZV).' }];
  },
  kontrola: [
    'Kilometerstand und Tankfüllung gemeinsam ablesen und genau eintragen.',
    'Schäden konkret beschreiben (Stelle, Größe) und mit Datum fotografieren.',
    'Die Uhrzeit der Übergabe hilft bei Bußgeldern oder Unfällen: Sie zeigt, wer das Fahrzeug zu welchem Zeitpunkt hatte.',
    'FIN in den Papieren mit der FIN am Fahrzeug vergleichen.',
    TIPP_IDENTITAET,
  ],
  zdroje: [BGB_433, FZV_15],
  prevzit: {
    kod: 'DE-KAUF-AUTO',
    nazev: 'den Kaufvertrag',
    mapuj: (d) => ({
      duvod: 'koupe',
      smlouva_datum: d.datum_podpisu,
      p_jmeno: d.p_jmeno,
      p_adresa: d.p_adresa,
      k_jmeno: d.k_jmeno,
      k_adresa: d.k_adresa,
      znacka: d.znacka,
      vin: d.vin,
      spz: d.spz,
      km: d.km,
      klice: d.klice,
      predani_datum: d.datum_podpisu,
      predani_cas: d.predani_cas,
      misto: d.misto,
    }),
  },

  kroky: [
    {
      id: 'parteien',
      nazev: 'Beteiligte und Anlass',
      pole: [
        {
          id: 'duvod',
          typ: 'volba',
          popis: 'Warum wird das Fahrzeug übergeben?',
          moznosti: [
            { hodnota: 'koupe', popis: 'Verkauf (Kaufvertrag)' },
            { hodnota: 'zapujcka', popis: 'Verleihen des Fahrzeugs' },
            { hodnota: 'vraceni', popis: 'Rückgabe eines geliehenen Fahrzeugs' },
          ],
        },
        { id: 'smlouva_datum', typ: 'datum', popis: 'Datum des Kaufvertrags', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'duvod', je: 'koupe' } },
        { id: 'p_jmeno', typ: 'text', popis: 'Übergebende/r – Vor- und Nachname', placeholder: 'z. B. Max Mustermann', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Anschrift Übergebende/r', placeholder: 'z. B. Musterstraße 1, 10115 Berlin', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Übernehmende/r – Vor- und Nachname', sirka: 34 },
        { id: 'k_adresa', typ: 'text', popis: 'Anschrift Übernehmende/r', sirka: 46 },
      ],
    },
    {
      id: 'fahrzeug',
      nazev: 'Fahrzeug und Zustand',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Hersteller und Typ', placeholder: 'z. B. VW Golf Variant', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'Fahrzeug-Identifizierungsnummer (FIN)', napoveda: 'Feld E im Fahrzeugschein.', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Amtliches Kennzeichen', placeholder: 'z. B. B-AB 1234', sirka: 12, polovina: true },
        { id: 'km', typ: 'cislo', popis: 'Kilometerstand', jednotka: 'km', sirka: 12, polovina: true },
        {
          id: 'palivo',
          typ: 'volba',
          popis: 'Tankfüllung',
          moznosti: [
            { hodnota: 'rezerva', popis: 'Reserve' },
            { hodnota: 'ctvrt', popis: '1/4' },
            { hodnota: 'pul', popis: '1/2' },
            { hodnota: 'tri', popis: '3/4' },
            { hodnota: 'plna', popis: 'Voll' },
          ],
        },
        {
          id: 'poskozeni',
          typ: 'volba',
          popis: 'Schäden',
          moznosti: [
            { hodnota: 'bez', popis: 'Keine sichtbaren Schäden' },
            { hodnota: 's', popis: 'Das Fahrzeug hat Schäden' },
          ],
        },
        { id: 'poskozeni_popis', typ: 'textarea', popis: 'Beschreibung der Schäden', placeholder: 'z. B. Kratzer an der hinteren Stoßstange links', sirka: 64, zobrazitKdyz: { pole: 'poskozeni', je: 's' } },
      ],
    },
    {
      id: 'zubehoer',
      nazev: 'Schlüssel, Papiere, Zubehör',
      pole: [
        { id: 'klice', typ: 'cislo', popis: 'Anzahl Schlüssel', sirka: 4, polovina: true },
        {
          id: 'doklady',
          typ: 'vice',
          popis: 'Übergebene Papiere',
          moznosti: [
            { hodnota: 'zb1', popis: 'Zulassungsbescheinigung Teil I (Fahrzeugschein)' },
            { hodnota: 'zb2', popis: 'Zulassungsbescheinigung Teil II (Fahrzeugbrief)' },
            { hodnota: 'hu', popis: 'Bericht der letzten Hauptuntersuchung' },
            { hodnota: 'servis', popis: 'Serviceheft' },
            { hodnota: 'navod', popis: 'Bedienungsanleitung' },
          ],
        },
        {
          id: 'vybava',
          typ: 'vice',
          popis: 'Zubehör',
          moznosti: [
            { hodnota: 'verbandskasten', popis: 'Verbandkasten' },
            { hodnota: 'warndreieck', popis: 'Warndreieck' },
            { hodnota: 'weste', popis: 'Warnweste' },
            { hodnota: 'reserverad', popis: 'Reserverad oder Reifenreparaturset' },
            { hodnota: 'wagenheber', popis: 'Wagenheber und Radschlüssel' },
            { hodnota: 'reifen', popis: 'Zweiter Reifensatz' },
          ],
        },
        { id: 'vybava_jine', typ: 'text', popis: 'Weitere Gegenstände', placeholder: 'z. B. Dachträger', sirka: 40 },
      ],
    },
    {
      id: 'uebergabe',
      nazev: 'Übergabe',
      pole: [
        { id: 'predani_datum', typ: 'datum', popis: 'Datum der Übergabe', sirka: 14, polovina: true, vychozi: 'dnes' },
        { id: 'predani_cas', typ: 'text', popis: 'Uhrzeit', placeholder: 'z. B. 14:30', sirka: 8, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Ort', placeholder: 'z. B. Berlin', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'poznamky', typ: 'textarea', popis: 'Bemerkungen', placeholder: 'z. B. Winterreifen werden bis Monatsende abgeholt', sirka: 64 },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Beteiligte',
      vysvetleni: 'Wer übergibt und wer übernimmt.',
      odstavce: ['**Übergebende/r:** {{p_jmeno}}, wohnhaft {{p_adresa}}', '**Übernehmende/r:** {{k_jmeno}}, wohnhaft {{k_adresa}}'],
    },
    {
      nadpis: 'Fahrzeug',
      vysvetleni: 'Welches Fahrzeug und warum.',
      odstavce: [
        'Hersteller und Typ {{znacka}}, FIN {{vin}}, amtliches Kennzeichen {{spz}} (im Folgenden „Fahrzeug“).',
        {
          volba: 'duvod',
          uvodVzor: 'Anlass der Übergabe (eine Möglichkeit ankreuzen):',
          moznosti: {
            koupe: 'Das Fahrzeug wird aufgrund des Kaufvertrags vom {{smlouva_datum}} übergeben.',
            zapujcka: 'Das Fahrzeug wird zur vorübergehenden Nutzung überlassen.',
            vraceni: 'Das zuvor verliehene Fahrzeug wird zurückgegeben.',
          },
        },
      ],
    },
    {
      nadpis: 'Zustand bei Übergabe',
      vysvetleni: 'Genauer Zustand im Moment der Übergabe.',
      odstavce: [
        'Kilometerstand bei Übergabe: {{km}}.',
        {
          volba: 'palivo',
          uvod: 'Tankfüllung:',
          uvodVzor: 'Tankfüllung (ankreuzen):',
          moznosti: { rezerva: 'Reserve.', ctvrt: 'etwa 1/4.', pul: 'etwa 1/2.', tri: 'etwa 3/4.', plna: 'voll.' },
        },
        {
          volba: 'poskozeni',
          uvodVzor: 'Schäden (eine Möglichkeit ankreuzen):',
          moznosti: {
            bez: 'Das Fahrzeug weist bei Übergabe keine sichtbaren Schäden auf.',
            s: 'Das Fahrzeug weist bei Übergabe folgende Schäden auf: {{poskozeni_popis}}',
          },
        },
      ],
    },
    {
      nadpis: 'Übergebene Schlüssel, Papiere und Zubehör',
      vysvetleni: 'Was zusammen mit dem Fahrzeug übergeben wurde.',
      odstavce: [
        'Anzahl übergebener Schlüssel: {{klice}}.',
        {
          vice: 'doklady',
          uvod: 'Übergebene Papiere:',
          moznosti: {
            zb1: 'Zulassungsbescheinigung Teil I',
            zb2: 'Zulassungsbescheinigung Teil II',
            hu: 'Bericht der letzten Hauptuntersuchung',
            servis: 'Serviceheft',
            navod: 'Bedienungsanleitung',
          },
        },
        {
          vice: 'vybava',
          uvod: 'Übergebenes Zubehör:',
          moznosti: {
            verbandskasten: 'Verbandkasten',
            warndreieck: 'Warndreieck',
            weste: 'Warnweste',
            reserverad: 'Reserverad oder Reifenreparaturset',
            wagenheber: 'Wagenheber und Radschlüssel',
            reifen: 'zweiter Reifensatz',
          },
          dalsi: 'weitere Gegenstände: {{vybava_jine}}',
        },
      ],
    },
    {
      nadpis: 'Übernahme',
      vysvetleni: 'Bestätigung, wann genau übergeben wurde.',
      odstavce: [
        'Das Fahrzeug wurde am {{predani_datum}} um {{predani_cas}} Uhr übergeben.',
        'Die übernehmende Person bestätigt, das Fahrzeug einschließlich der genannten Schlüssel, Papiere und des Zubehörs in dem beschriebenen Zustand erhalten zu haben.',
        'Bemerkungen: {{poznamky}}',
        'Das Protokoll wird zweifach ausgefertigt; jede Seite erhält ein Exemplar.',
      ],
    },
  ],
};
