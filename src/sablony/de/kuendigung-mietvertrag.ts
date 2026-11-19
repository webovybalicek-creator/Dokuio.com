/** Kündigung des Mietvertrags durch den Mieter – Deutschland. § 573c BGB (3 Monate), Schriftform § 568 BGB. */
import type { Sablona } from '../typy';
import { naDatum, isoDatum, pridejDny } from '../terminy';
import { BGB_573C, BGB_568, BGB_551 } from './quellen';

/** Ende nach § 573c: Zugang bis 3. Werktag → Ablauf des übernächsten Monats (vereinfacht: bis zum 3. des Monats) */
export const mietendeDE = (d: Date) => {
  const spaet = d.getDate() > 3;
  return new Date(d.getFullYear(), d.getMonth() + (spaet ? 4 : 3), 0);
};

export const kuendigungMietvertrag: Sablona = {
  kod: 'DE-KUENDIGUNG-MIETE',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  pripominky: (d) => {
    const z = naDatum(d.datum);
    if (!z) return [];
    const ende = mietendeDE(z);
    return [
      { nazev: 'Mietende nach Kündigung (ca.)', datum: isoDatum(ende), popis: 'Bei Zugang am Tag der Unterschrift.' },
      { nazev: 'Wohnungsübergabe vereinbaren', datum: isoDatum(pridejDny(ende, -14)) },
    ];
  },
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Kündigung des Mietvertrags',
  podnadpis: 'ordentliche Kündigung durch den Mieter nach § 573c BGB',
  souborPdf: 'kuendigung-mietvertrag',
  paticka: 'Kostenlos erstellt · Vorlage DE-KUENDIGUNG-MIETE v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'ort',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Mieter/in', vpravo: 'erhalten Vermieter/in (Datum, Unterschrift)' },
  slovo: { n: 'Kündigung', g: 'Kündigung', a: 'Kündigung', l: 'Kündigung' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  coDal: [
    'Eigenhändig unterschreiben – E-Mail oder Fax reichen nicht (§ 568 BGB).',
    'Nachweisbar zustellen: Einwurf-Einschreiben, per Bote oder persönlich gegen Empfangsbestätigung.',
    'Zugang bis zum dritten Werktag eines Monats zählt noch für diesen Monat.',
    'Übergabetermin vereinbaren und ein Übergabeprotokoll erstellen.',
  ],
  kontrola: [
    'Die Kündigungsfrist für Mieter beträgt drei Monate, unabhängig von der Mietdauer (§ 573c BGB). Längere Fristen zulasten des Mieters sind unwirksam.',
    'Ein vereinbarter Kündigungsverzicht (höchstens vier Jahre) gilt – prüfen Sie Ihren Vertrag.',
    'Alle Mieter müssen unterschreiben und die Kündigung muss an alle Vermieter gerichtet sein.',
    'Die Kaution ist nach Ende des Mietverhältnisses zurückzuzahlen; der Vermieter darf eine angemessene Prüfungsfrist und einen Teil für die Nebenkostenabrechnung zurückhalten.',
  ],
  zdroje: [BGB_573C, BGB_568, BGB_551],
  kroky: [
    {
      id: 'parteien',
      nazev: 'Mieter und Vermieter',
      pole: [
        { id: 'm_name', typ: 'text', popis: 'Mieter/in – Name', napoveda: 'Wie im Mietvertrag; mehrere Mieter alle.', placeholder: 'z. B. Anna Schmidt', sirka: 34, autocomplete: 'name' },
        { id: 'm_kontakt', typ: 'text', popis: 'Telefon oder E-Mail', napoveda: 'Für den Übergabetermin.', placeholder: 'z. B. anna@email.de', sirka: 30 },
        { id: 'v_name', typ: 'text', popis: 'Vermieter/in – Name', napoveda: 'An wen die Kündigung geht.', placeholder: 'z. B. Thomas Müller', sirka: 34 },
        { id: 'v_adresse', typ: 'text', popis: 'Anschrift Vermieter/in', napoveda: 'Zustellanschrift.', placeholder: 'z. B. Hauptstraße 12, 10115 Berlin', sirka: 46 },
      ],
    },
    {
      id: 'miete',
      nazev: 'Mietverhältnis',
      pole: [
        { id: 'wohnung', typ: 'text', popis: 'Wohnung (Anschrift und Lage)', napoveda: 'Wie im Vertrag.', placeholder: 'z. B. Lindenstraße 7, Berlin, 2. OG links', sirka: 46 },
        { id: 'vertrag_datum', typ: 'datum', popis: 'Datum des Mietvertrags', napoveda: 'Wann unterschrieben.', sirka: 14, polovina: true },
        { id: 'iban', typ: 'text', popis: 'IBAN für die Kaution (optional)', napoveda: 'Wohin die Kaution zurück soll.', placeholder: 'DE00 0000 0000 0000 0000 00', sirka: 30 },
        { id: 'ort', typ: 'text', popis: 'Ort', napoveda: 'Ort der Unterschrift.', placeholder: 'z. B. Berlin', sirka: 18, polovina: true },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heutiges Datum vorausgefüllt.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    { nadpis: 'Vermieter/in', odstavce: ['{{v_name}}, {{v_adresse}}'] },
    {
      nadpis: 'Kündigung des Mietvertrags',
      odstavce: [
        'Hiermit kündige ich, {{m_name}} (Kontakt: {{m_kontakt}}), den Mietvertrag vom {{vertrag_datum}} über die Wohnung {{wohnung}} ordentlich und fristgerecht zum nächstmöglichen Termin.',
        'Nach § 573c BGB beträgt die Kündigungsfrist drei Monate. Bitte bestätigen Sie mir den Eingang dieser Kündigung und das Ende des Mietverhältnisses schriftlich.',
        'Bitte nennen Sie mir einen Termin für die Wohnungsübergabe. Die Kaution bitte ich nach Abrechnung auf das Konto IBAN {{iban}} zu überweisen.',
      ],
    },
  ],
};
