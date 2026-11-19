/** Übergabeprotokoll Wohnung – Deutschland, bei Einzug und Auszug. */
import type { Sablona } from '../typy';
import { BGB_MIETE } from './quellen';

export const uebergabeprotokollWohnung: Sablona = {
  kod: 'DE-PROTOKOLL-WOHNUNG',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Wohnungsübergabeprotokoll',
  podnadpis: 'Protokoll über die Übergabe und Rücknahme einer Wohnung',
  souborPdf: 'uebergabeprotokoll-wohnung',
  paticka: 'Kostenlos erstellt · Vorlage DE-PROTOKOLL-WOHNUNG v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'ort',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Vermieter/in', vpravo: 'Mieter/in' },
  slovo: { n: 'Protokoll', g: 'Protokolls', a: 'Protokoll', l: 'Protokoll' },
  cislovatClanky: false,
  coDal: ['Gemeinsam Raum für Raum durchgehen und fehlende Punkte von Hand ergänzen.', 'Zählerstände und Mängel fotografieren.', 'Zwei Exemplare unterschreiben.'],
  kontrola: [
    'Alle Zähler (Strom, Gas, Wasser, Heizung) mit Zählernummer notieren.',
    'Mängel genau beschreiben, z. B. „Riss in der Fliese neben der Badewanne“.',
    'Geräte, Wasser, Heizung, Fenster und Schlösser testen.',
    'Schlüssel zählen (Wohnung, Haus, Keller, Briefkasten).',
    'Beim Auszug: normale Abnutzung trägt der Vermieter; Schäden darüber hinaus der Mieter.',
  ],
  zdroje: [BGB_MIETE],
  prevzit: {
    kod: 'DE-MIETVERTRAG',
    nazev: 'den Mietvertrag',
    mapuj: (d) => ({ v_name: d.v_name, m_name: d.m_name, objekt: [d.objekt, d.lage].filter(Boolean).join(', '), ausstattung: d.ausstattung, datum: d.uebergabe, vertrag_datum: d.datum, anlass: 'einzug' }),
  },
  kroky: [
    {
      id: 'basis',
      nazev: 'Wer, wo und warum',
      popis: 'Mietvertrag schon ausgefüllt? Wir übernehmen die Angaben.',
      pole: [
        { id: 'v_name', typ: 'text', popis: 'Vermieter/in – Name', napoveda: 'Eigentümer/in.', placeholder: 'z. B. Thomas Müller', sirka: 34, autocomplete: 'name' },
        { id: 'm_name', typ: 'text', popis: 'Mieter/in – Name', napoveda: 'Wer die Wohnung nutzt.', placeholder: 'z. B. Anna Schmidt', sirka: 34 },
        { id: 'objekt', typ: 'text', popis: 'Wohnung (Anschrift und Lage)', napoveda: 'Wie im Mietvertrag.', placeholder: 'z. B. Lindenstraße 7, Berlin, 2. OG links', sirka: 46 },
        { id: 'anlass', typ: 'volba', popis: 'Anlass', napoveda: 'Einzug oder Auszug.', moznosti: [ { hodnota: 'einzug', popis: 'Übergabe an den Mieter (Einzug)' }, { hodnota: 'auszug', popis: 'Rückgabe an den Vermieter (Auszug)' } ] },
        { id: 'vertrag_datum', typ: 'datum', popis: 'Datum des Mietvertrags', napoveda: 'Das Protokoll gehört zum Vertrag.', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'zaehler',
      nazev: 'Zählerstände',
      popis: 'Ablesen und fotografieren. Nicht vorhandene Zähler leer lassen.',
      pole: [
        { id: 'z_strom', typ: 'text', popis: 'Strom (kWh)', napoveda: 'Zählerstand.', placeholder: 'z. B. 12 345', sirka: 12, polovina: true },
        { id: 'z_gas', typ: 'text', popis: 'Gas (m³)', napoveda: 'Zählerstand.', placeholder: 'z. B. 4 321', sirka: 12, polovina: true },
        { id: 'z_kalt', typ: 'text', popis: 'Kaltwasser (m³)', napoveda: 'Wasserzähler.', placeholder: 'z. B. 123,4', sirka: 12, polovina: true },
        { id: 'z_warm', typ: 'text', popis: 'Warmwasser (m³)', napoveda: 'Wasserzähler warm.', placeholder: 'z. B. 56,7', sirka: 12, polovina: true },
        { id: 'z_heizung', typ: 'text', popis: 'Heizung / Heizkostenverteiler', napoveda: 'Wärmezähler oder Verteiler.', placeholder: 'z. B. Wohnzimmer 123, Schlafzimmer 87', sirka: 30 },
      ],
    },
    {
      id: 'zustand',
      nazev: 'Zustand',
      pole: [
        { id: 'zustand', typ: 'volba', popis: 'Zustand der Wohnung', napoveda: 'Wände, Böden, Fenster, Geräte.', moznosti: [ { hodnota: 'ok', popis: 'Ohne Mängel, übliche Abnutzung' }, { hodnota: 'maengel', popis: 'Mit folgenden Mängeln' } ] },
        { id: 'maengel', typ: 'textarea', popis: 'Mängel', napoveda: 'Raum und was genau.', placeholder: 'z. B. Küche – Kratzer in der Arbeitsplatte', sirka: 64, zobrazitKdyz: { pole: 'zustand', je: 'maengel' } },
        { id: 'ausstattung', typ: 'textarea', popis: 'Ausstattung und Zustand', napoveda: 'Geräte und Möbel.', placeholder: 'z. B. Kühlschrank – funktioniert', sirka: 64 },
        { id: 'schluessel', typ: 'text', popis: 'Schlüssel', napoveda: 'Anzahl und wofür.', placeholder: 'z. B. 3× Wohnung, 2× Haus, 1× Keller', sirka: 46 },
        { id: 'vereinbarung', typ: 'textarea', popis: 'Vereinbarungen (optional)', napoveda: 'Wer behebt was bis wann.', placeholder: 'z. B. Vermieter repariert den Wasserhahn bis 30.11.', sirka: 64 },
        { id: 'ort', typ: 'text', popis: 'Ort', napoveda: 'Ort der Übergabe.', placeholder: 'z. B. Berlin', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heutiges Datum vorausgefüllt.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    {
      nadpis: 'Parteien und Wohnung',
      odstavce: [
        '**Vermieter/in:** {{v_name}} · **Mieter/in:** {{m_name}}',
        'Wohnung: {{objekt}}, laut Mietvertrag vom {{vertrag_datum}}.',
        { volba: 'anlass', uvodVzor: 'Anlass (bitte ankreuzen):', moznosti: { einzug: 'Der Vermieter übergibt die Wohnung an den Mieter.', auszug: 'Der Mieter gibt die Wohnung an den Vermieter zurück.' } },
      ],
    },
    { nadpis: 'Zählerstände', odstavce: ['Strom: {{z_strom}} kWh · Gas: {{z_gas}} m³ · Kaltwasser: {{z_kalt}} m³ · Warmwasser: {{z_warm}} m³ · Heizung: {{z_heizung}}'] },
    {
      nadpis: 'Zustand, Ausstattung und Schlüssel',
      odstavce: [
        { volba: 'zustand', uvodVzor: 'Zustand (bitte ankreuzen):', moznosti: { ok: 'Die Wohnung ist ohne Mängel bei üblicher Abnutzung.', maengel: 'Die Wohnung hat folgende Mängel: {{maengel}}' } },
        'Ausstattung: {{ausstattung}}',
        'Übergebene Schlüssel: {{schluessel}}',
        'Vereinbarungen: {{vereinbarung}}',
        'Die Parteien bestätigen mit ihrer Unterschrift, dass sie die Wohnung besichtigt haben und ihr Zustand diesem Protokoll entspricht.',
      ],
    },
  ],
};
