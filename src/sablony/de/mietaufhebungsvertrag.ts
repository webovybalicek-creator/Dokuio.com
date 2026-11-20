/**
 * Mietaufhebungsvertrag – Deutschland. Beendigung des Mietverhältnisses durch Vereinbarung (Vertragsfreiheit, § 311 Abs. 1 BGB); ersetzt die Kündigung samt Fristen. Kaution: Abrechnung nach Vereinbarung. AT/CH über nahrad.ts.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum, cislo } from '../terminy';
import { BGB_MIETE } from './quellen';

export const mietaufhebungsvertrag: Sablona = {
  kod: 'DE-MIETAUFHEBUNG',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'de',
  jazyk: 'de',
  nazev: "Mietaufhebungsvertrag",
  podnadpis: "Vereinbarung über die Beendigung des Mietverhältnisses (BGB)",
  souborPdf: 'mietaufhebungsvertrag',
  paticka: "Kostenlos erstellt · Vorlage DE-MIETAUFHEBUNG v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich",
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: "Vermieter/in", vpravo: "Mieter/in" },
  slovo: {"n": "Vereinbarung", "g": "Vereinbarung", "a": "Vereinbarung", "l": "Vereinbarung"},
  pripominky: (d) => {
    const out: { nazev: string; datum: string; popis?: string }[] = [];
    if (typeof d.konec_dne === 'string' && d.konec_dne) out.push({ nazev: "Ende des Mietverhältnisses", datum: d.konec_dne });
    const odevzdani = naDatum(d.odevzdani);
    if (odevzdani) {
      out.push({ nazev: "Rückgabe der Wohnung und Übergabeprotokoll", datum: isoDatum(odevzdani) });
      const dni = Math.round(cislo(d.jistota_dni));
      if (dni > 0) out.push({ nazev: "Rückzahlung der Kaution", datum: isoDatum(pridejDny(odevzdani, dni)) });
    }
    return out;
  },
  coDal: ["Zweimal ausdrucken, beide Seiten unterschreiben beide Exemplare.", "Bei der Rückgabe ein Übergabeprotokoll mit Zählerständen erstellen.", "Mieter meldet Strom und Gas ab, falls auf ihn angemeldet.", "Termin für Kautionsrückzahlung und Nebenkostenabrechnung im Blick behalten."],
  kontrola: [
    "Alle Vermieter und alle Mieter müssen unterschreiben.",
    "Einen konkreten Beendigungstag und den Tag der Rückgabe eintragen.",
    "Regeln, wann und wie die Kaution zurückgezahlt und wie die Nebenkosten abgerechnet werden.",
    "Die Vereinbarung ersetzt die Kündigung – ein früherer Auszug als nach der Kündigungsfrist ist möglich.",
    "Niemand muss einen Aufhebungsvertrag unterschreiben. Unter Druck sollten Sie nichts unterschreiben.",
  ],
  zdroje: [BGB_MIETE],

  kroky: [
    {
      id: 'strany',
      nazev: "Parteien und Wohnung",
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: "Vermieter/in – Name", placeholder: "z. B. Max Mustermann", sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: "Anschrift Vermieter/in", placeholder: "z. B. Lindenstraße 5, 10115 Berlin", sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: "Mieter/in – Name", napoveda: "Bei mehreren Mietern alle angeben.", placeholder: "z. B. Erika Musterfrau", sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: "Geburtsdatum Mieter/in", sirka: 14, polovina: true },
        { id: 'byt', typ: 'text', popis: "Wohnung (Anschrift, Lage)", placeholder: "z. B. Hauptstraße 1, 80331 München, 2. OG links", sirka: 46 },
        { id: 'smlouva_datum', typ: 'datum', popis: "Datum des Mietvertrags", sirka: 14, polovina: true },
      ],
    },
    {
      id: 'konec',
      nazev: "Beendigung",
      pole: [
        { id: 'konec_dne', typ: 'datum', popis: "Mietverhältnis endet am", napoveda: "Letzter Tag der Miete. Bis dahin ist Miete zu zahlen.", sirka: 14, polovina: true },
        { id: 'odevzdani', typ: 'datum', popis: "Rückgabe der Wohnung spätestens", napoveda: "Wann der Mieter die Schlüssel zurückgibt.", sirka: 14, polovina: true },
        {
          id: 'jistota',
          typ: 'volba',
          popis: "Kaution",
          moznosti: [
            { hodnota: 'odevzdani', popis: "Rückzahlung binnen bestimmter Frist nach Rückgabe" },
            { hodnota: 'vyuctovani', popis: "Rückzahlung nach Nebenkostenabrechnung" },
            { hodnota: 'zadna', popis: "Keine Kaution geleistet" },
          ],
        },
        { id: 'jistota_dni', typ: 'cislo', popis: "Rückzahlung binnen (Tage)", placeholder: '14', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'jistota', je: 'odevzdani' } },
        { id: 'ucet', typ: 'text', popis: "IBAN Mieter/in für die Kaution", sirka: 30, zobrazitKdyz: { pole: 'jistota', je: ['odevzdani', 'vyuctovani'] } },
        { id: 'dalsi', typ: 'textarea', popis: "Weitere Vereinbarungen (optional)", placeholder: "z. B. Mieter streicht vor Rückgabe die Wände", sirka: 64 },
        { id: 'misto', typ: 'text', popis: "Ort", sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: "Datum", sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    { nadpis: "Vertragsparteien", odstavce: ["**Vermieter/in:** {{p_jmeno}}, {{p_adresa}}", "**Mieter/in:** {{k_jmeno}}, geboren am {{k_narozeni}}"] },
    {
      nadpis: "Beendigung des Mietverhältnisses",
      vysvetleni: "Wann das Mietverhältnis endet und wann die Wohnung zurückgegeben wird.",
      odstavce: ["Die Parteien sind sich einig, dass das Mietverhältnis über die Wohnung {{byt}} aus dem Mietvertrag vom {{smlouva_datum}} mit Ablauf des {{konec_dne}} endet.", "Der Mieter gibt die Wohnung mit allen Schlüsseln spätestens am {{odevzdani}} zurück, im Zustand bei Übergabe unter Berücksichtigung der Abnutzung durch vertragsgemäßen Gebrauch. Über die Rückgabe wird ein Übergabeprotokoll erstellt.", "Miete und Vorauszahlungen sind bis zum Ende des Mietverhältnisses zu zahlen. Die Nebenkosten werden im üblichen Abrechnungszeitraum abgerechnet."],
    },
    {
      nadpis: "Kaution und weitere Vereinbarungen",
      odstavce: [
        {
          volba: 'jistota',
          uvodVzor: "Kaution (bitte eines ankreuzen):",
          moznosti: {
            odevzdani: "Der Vermieter zahlt die Kaution nebst Zinsen binnen {{jistota_dni}} Tagen nach Rückgabe auf das Konto IBAN {{ucet}} zurück; offene Forderungen aus dem Mietverhältnis darf er verrechnen.",
            vyuctovani: "Der Vermieter zahlt die Kaution nebst Zinsen nach Abrechnung der Nebenkosten für den letzten Zeitraum auf das Konto IBAN {{ucet}} zurück; offene Forderungen aus dem Mietverhältnis darf er verrechnen.",
            zadna: "Der Mieter hat keine Kaution geleistet.",
          },
        },
        "Weitere Vereinbarungen: {{dalsi}}",
        "Die Vereinbarung wird zweifach ausgefertigt; jede Partei erhält ein Exemplar. Sie wird mit Unterschrift beider Parteien wirksam.",
      ],
    },
  ],
};
