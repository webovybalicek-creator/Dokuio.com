/**
 * Untermietvertrag (Zimmer oder ganze Wohnung) – Deutschland. § 540 BGB: Überlassung an Dritte nur mit Erlaubnis; bei Verweigerung Sonderkündigungsrecht; Mieter haftet für Verschulden des Dritten. § 553 BGB: Anspruch auf Erlaubnis für einen Teil der Wohnung bei berechtigtem Interesse; ggf. angemessene Mieterhöhung. AT/CH über nahrad.ts.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum } from '../terminy';
import { betragInWorten } from './zahlen';
import { BGB_MIETE, TIPP_IDENTITAET } from './quellen';

export const untermietvertrag: Sablona = {
  kod: 'DE-UNTERMIETE',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'de',
  jazyk: 'de',
  nazev: "Untermietvertrag",
  podnadpis: "für ein Zimmer oder eine Wohnung (§§ 535 ff., 540, 553 BGB)",
  souborPdf: 'untermietvertrag',
  paticka: "Kostenlos erstellt · Vorlage DE-UNTERMIETE v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich",
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: "Hauptmieter/in (Untervermieter)", vpravo: "Untermieter/in" },
  slovo: {"n": "Untermietvertrag", "g": "Untermietvertrags", "a": "Untermietvertrag", "l": "Untermietvertrag"},
  pripominky: (d) => [
    ...(naDatum(d.od) ? [{ nazev: "Beginn der Untermiete", datum: String(d.od) }] : []),
    ...(d.doba === 'urcita' && naDatum(d.do) ? [{ nazev: "Ende der Untermiete", datum: String(d.do) }] : []),
  ],
  coDal: ["Zweimal ausdrucken, beide Seiten unterschreiben beide Exemplare.", "Kopie der Erlaubnis des Vermieters beilegen.", "Bei Einzug ein Übergabeprotokoll erstellen."],
  kontrola: [
    "Die Untervermietung braucht die Erlaubnis des Vermieters ([§ 540 BGB](https://www.gesetze-im-internet.de/bgb/__540.html)). Holen Sie sie vorher ein und legen Sie sie bei.",
    "Für einen Teil der Wohnung haben Mieter bei berechtigtem Interesse einen Anspruch auf Erlaubnis; der Vermieter kann sie von einer angemessenen Mieterhöhung abhängig machen ([§ 553 BGB](https://www.gesetze-im-internet.de/bgb/__553.html)).",
    "Der Hauptmieter haftet dem Vermieter für Verschulden des Untermieters (§ 540 Abs. 2 BGB).",
    "Das Untermietverhältnis kann nicht länger dauern als das Hauptmietverhältnis.",
    TIPP_IDENTITAET,
  ],
  zdroje: [BGB_MIETE],

  kroky: [
    {
      id: 'strany',
      nazev: "Hauptmieter und Untermieter",
      popis: "Der Hauptmieter überlässt ein Zimmer oder die Wohnung dem Untermieter.",
      pole: [
        { id: 'n_jmeno', typ: 'text', popis: "Hauptmieter/in – Name", placeholder: "z. B. Max Mustermann", sirka: 34, autocomplete: 'name' },
        { id: 'n_narozeni', typ: 'datum', popis: "Geburtsdatum Hauptmieter/in", sirka: 14, polovina: true },
        { id: 'n_adresa', typ: 'text', popis: "Anschrift Hauptmieter/in", placeholder: "z. B. Lindenstraße 5, 10115 Berlin", sirka: 46 },
        { id: 'p_jmeno', typ: 'text', popis: "Untermieter/in – Name", placeholder: "z. B. Erika Musterfrau", sirka: 34 },
        { id: 'p_narozeni', typ: 'datum', popis: "Geburtsdatum Untermieter/in", sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: "Bisherige Anschrift Untermieter/in", sirka: 46 },
      ],
    },
    {
      id: 'byt',
      nazev: "Wohnung und Erlaubnis",
      pole: [
        { id: 'byt', typ: 'text', popis: "Wohnung (Anschrift, Lage)", placeholder: "z. B. Hauptstraße 1, 80331 München, 2. OG links", sirka: 46 },
        {
          id: 'rozsah',
          typ: 'volba',
          popis: "Umfang",
          moznosti: [
            { hodnota: 'cast', popis: "Teil der Wohnung (Zimmer)" },
            { hodnota: 'cely', popis: "Ganze Wohnung" },
          ],
        },
        { id: 'cast_popis', typ: 'text', popis: "Welcher Teil", placeholder: "z. B. Zimmer 14 m² mit Mitbenutzung von Küche und Bad", sirka: 56, zobrazitKdyz: { pole: 'rozsah', je: 'cast' } },
        { id: 'pronajimatel', typ: 'text', popis: "Vermieter/in (Eigentümer/in)", napoveda: "Wer die Untervermietung erlaubt hat.", sirka: 34 },
        { id: 'souhlas_datum', typ: 'datum', popis: "Datum der Erlaubnis", napoveda: "Erlaubnis als Anlage beifügen.", sirka: 14, polovina: true },
      ],
    },
    {
      id: 'platby',
      nazev: "Dauer und Zahlungen",
      pole: [
        { id: 'od', typ: 'datum', popis: "Untermiete ab", sirka: 14, polovina: true },
        {
          id: 'doba',
          typ: 'volba',
          popis: "Dauer",
          moznosti: [
            { hodnota: 'urcita', popis: "Befristet" },
            { hodnota: 'neurcita', popis: "Unbefristet" },
          ],
        },
        { id: 'do', typ: 'datum', popis: "Untermiete bis", sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'urcita' } },
        { id: 'najemne', typ: 'castka', popis: "Monatliche Miete (€)", napoveda: "Inklusive Nebenkosten, wenn nicht anders vereinbart.", sirka: 14, polovina: true },
        { id: 'splatnost', typ: 'cislo', popis: "Fällig bis (Tag im Monat)", placeholder: '15', sirka: 4, polovina: true },
        { id: 'kauce', typ: 'castka', popis: "Kaution (€, optional)", sirka: 14, polovina: true },
        { id: 'ucet', typ: 'text', popis: "IBAN Hauptmieter/in", sirka: 30 },
        { id: 'vypoved', typ: 'cislo', popis: "Kündigungsfrist (Monate)", placeholder: '1', sirka: 4, polovina: true },
        { id: 'misto', typ: 'text', popis: "Ort", sirka: 18, polovina: true, vychozi: { obecZ: 'n_adresa' } },
        { id: 'datum', typ: 'datum', popis: "Datum", sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { najemne_slovy: (d) => betragInWorten(d.najemne) },

  clanky: [
    { nadpis: "Vertragsparteien", odstavce: ["**Hauptmieter/in:** {{n_jmeno}}, geboren am {{n_narozeni}}, {{n_adresa}} (im Folgenden „Hauptmieter“)", "**Untermieter/in:** {{p_jmeno}}, geboren am {{p_narozeni}}, bisher wohnhaft {{p_adresa}} (im Folgenden „Untermieter“)"] },
    {
      nadpis: "Mietgegenstand",
      vysvetleni: "Was untervermietet wird und auf welcher Erlaubnis das beruht.",
      odstavce: [
        {
          volba: 'rozsah',
          uvodVzor: "Umfang (bitte eines ankreuzen):",
          moznosti: { cast: "Der Hauptmieter vermietet dem Untermieter einen Teil der Wohnung {{byt}}: {{cast_popis}}.", cely: "Der Hauptmieter vermietet dem Untermieter die gesamte Wohnung {{byt}}." },
        },
        "Der Vermieter {{pronajimatel}} hat die Untervermietung am {{souhlas_datum}} erlaubt; die Erlaubnis ist Anlage dieses Vertrags.",
        "Das Untermietverhältnis endet spätestens mit dem Hauptmietverhältnis.",
      ],
    },
    {
      nadpis: "Dauer und Kündigung",
      odstavce: [
        {
          volba: 'doba',
          uvodVzor: "Dauer (bitte eines ankreuzen):",
          moznosti: { urcita: "Das Untermietverhältnis beginnt am {{od}} und endet am {{do}}.", neurcita: "Das Untermietverhältnis beginnt am {{od}} und läuft auf unbestimmte Zeit." },
        },
        "Es kann mit einer Frist von {{vypoved}} Monat(en) zum Monatsende gekündigt werden, soweit gesetzlich nichts anderes gilt.",
        "Bei Ende gibt der Untermieter die Räume im Zustand bei Übergabe zurück, unter Berücksichtigung der Abnutzung durch vertragsgemäßen Gebrauch.",
      ],
    },
    { nadpis: "Miete und Kaution", odstavce: ["Der Untermieter zahlt monatlich {{najemne}} (in Worten: {{najemne_slovy}}) inklusive Nebenkosten bis zum {{splatnost}}. eines Monats auf das Konto IBAN {{ucet}}.", "Der Untermieter leistet eine Kaution von {{kauce}}. Sie wird nach Ende und Rückgabe abgerechnet und zurückgezahlt."] },
    { nadpis: "Schlussbestimmungen", odstavce: ["Der Untermieter beachtet die Hausordnung und überlässt die Räume nicht weiteren Personen.", "Änderungen bedürfen der Textform. Der Vertrag wird zweifach ausgefertigt."] },
  ],
};
