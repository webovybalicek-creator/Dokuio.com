/**
 * Leihvertrag – Deutschland. §§ 598–606 BGB (gesetze-im-internet.de): unentgeltliche Gebrauchsüberlassung (598); Haftung des Verleihers nur Vorsatz/grobe Fahrlässigkeit (599); gewöhnliche Erhaltungskosten trägt der Entleiher (601); nur vertragsmäßiger Gebrauch, Dritten nur mit Erlaubnis (603); Rückgabe (604); Kündigung bei unvorhergesehenem Bedarf, vertragswidrigem Gebrauch, Tod (605); kurze Verjährung 6 Monate (606). AT/CH über nahrad.ts.
 * Při každé změně textu zvýšit `verze` a `aktualizovano`.
 */
import type { Sablona } from '../typy';
import { naDatum } from '../terminy';
import { TIPP_IDENTITAET, BGB_598 } from './quellen';

export const leihvertrag: Sablona = {
  kod: 'DE-LEIHVERTRAG',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'de',
  jazyk: 'de',
  nazev: "Leihvertrag",
  podnadpis: "nach §§ 598 ff. des Bürgerlichen Gesetzbuchs (BGB)",
  souborPdf: 'leihvertrag',
  paticka: "Kostenlos erstellt · Vorlage DE-LEIHVERTRAG v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich",
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: "Verleiher/in", vpravo: "Entleiher/in" },
  slovo: {"n": "Leihvertrag", "g": "Leihvertrags", "a": "Leihvertrag", "l": "Leihvertrag"},
  pripominky: (d) => (d.doba === 'datum' && naDatum(d.vratit_do) ? [{ nazev: "Rückgabe der geliehenen Sache", datum: String(d.vratit_do), popis: "Sache bei der Rückgabe gemeinsam prüfen und Rückgabe bestätigen lassen." }] : []),
  coDal: [
      "Zweimal ausdrucken, beide Seiten unterschreiben beide Exemplare.",
      "Bei der Übergabe die Sache gemeinsam ansehen und Mängel im Vertrag ergänzen.",
      "Bei der Rückgabe den Zustand bestätigen lassen."
  ],
  kontrola: [
    "Die Leihe ist unentgeltlich ([§ 598 BGB](https://www.gesetze-im-internet.de/bgb/__598.html)). Wird für den Gebrauch bezahlt, ist es Miete.",
    "Sache genau beschreiben (Hersteller, Modell, Seriennummer, Zubehör) und den Zustand bei Übergabe festhalten.",
    "Der Entleiher darf die Sache nur vertragsgemäß gebrauchen und sie Dritten nur mit Erlaubnis überlassen ([§ 603 BGB](https://www.gesetze-im-internet.de/bgb/__603.html)). Die gewöhnlichen Erhaltungskosten trägt er (§ 601 BGB).",
    "Der Verleiher kann vorzeitig kündigen, wenn er die Sache wegen eines nicht vorhergesehenen Umstands braucht, bei vertragswidrigem Gebrauch oder wenn der Entleiher stirbt ([§ 605 BGB](https://www.gesetze-im-internet.de/bgb/__605.html)).",
    "Ersatzansprüche wegen Veränderung oder Verschlechterung der Sache verjähren schon in sechs Monaten ([§ 606 BGB](https://www.gesetze-im-internet.de/bgb/__606.html)) – Schäden daher rasch geltend machen.",
    TIPP_IDENTITAET,
  ],
  zdroje: [BGB_598],

  kroky: [
    {
      id: 'strany',
      nazev: "Verleiher und Entleiher",
      popis: "Der Verleiher überlässt die Sache unentgeltlich, der Entleiher gebraucht sie und gibt sie zurück.",
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: "Verleiher/in – Vor- und Nachname", placeholder: "z. B. Max Mustermann", sirka: 34, autocomplete: 'name' },
        { id: 'p_id', typ: 'text', popis: "Geburtsdatum Verleiher/in (optional)", sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: "Anschrift Verleiher/in", placeholder: "z. B. Lindenstraße 5, 10115 Berlin", sirka: 46 },
        { id: 'v_jmeno', typ: 'text', popis: "Entleiher/in – Vor- und Nachname", placeholder: "z. B. Erika Musterfrau", sirka: 34 },
        { id: 'v_id', typ: 'text', popis: "Geburtsdatum Entleiher/in (optional)", sirka: 14, polovina: true },
        { id: 'v_adresa', typ: 'text', popis: "Anschrift Entleiher/in", placeholder: "z. B. Hauptstraße 1, 80331 München", sirka: 46 },
      ],
    },
    {
      id: 'vec',
      nazev: "Sache",
      pole: [
        { id: 'vec', typ: 'textarea', popis: "Geliehene Sache", napoveda: "Hersteller, Modell, Seriennummer, Zubehör.", placeholder: "z. B. PKW-Anhänger Böckmann, Kennzeichen B-AB 123, mit Plane und Schlüssel", sirka: 70 },
        { id: 'stav', typ: 'text', popis: "Zustand bei Übergabe", placeholder: "z. B. funktionsfähig, Kratzer am linken Kotflügel", sirka: 56 },
        { id: 'hodnota', typ: 'castka', popis: "Wert der Sache (€, optional)", napoveda: "Für den Fall von Verlust oder Zerstörung.", sirka: 14, polovina: true },
        { id: 'ucel', typ: 'text', popis: "Zweck des Gebrauchs", placeholder: "z. B. Umzug", sirka: 46 },
      ],
    },
    {
      id: 'doba',
      nazev: "Dauer und Rückgabe",
      pole: [
        { id: 'predano', typ: 'datum', popis: "Tag der Übergabe", sirka: 14, polovina: true, vychozi: 'dnes' },
        {
          id: 'doba',
          typ: 'volba',
          popis: "Wie lange",
          moznosti: [
            { hodnota: 'datum', popis: "Bis zu einem bestimmten Tag" },
            { hodnota: 'ucel', popis: "Bis der Zweck erfüllt ist" },
          ],
        },
        { id: 'vratit_do', typ: 'datum', popis: "Rückgabe spätestens", sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'datum' } },
        { id: 'misto_vraceni', typ: 'text', popis: "Ort der Rückgabe", placeholder: "z. B. an der Anschrift des Verleihers", sirka: 46 },
        { id: 'misto', typ: 'text', popis: "Ort", sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: "Datum", sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: "Vertragsparteien",
      odstavce: ["**Verleiher/in:** {{p_jmeno}}, geboren am {{p_id}}, {{p_adresa}} (im Folgenden „Verleiher“)", "**Entleiher/in:** {{v_jmeno}}, geboren am {{v_id}}, {{v_adresa}} (im Folgenden „Entleiher“)"],
    },
    {
      nadpis: "Gegenstand der Leihe",
      vysvetleni: "Der Verleiher gestattet den unentgeltlichen Gebrauch der Sache.",
      odstavce: ["Der Verleiher überlässt dem Entleiher unentgeltlich folgende Sache zum Gebrauch: {{vec}}.", "Zustand bei Übergabe: {{stav}}. Wert der Sache: {{hodnota}}.", "Die Sache wird zu folgendem Zweck überlassen: {{ucel}}. Dem Verleiher sind keine verborgenen Mängel bekannt, die er nicht mitgeteilt hat."],
    },
    {
      nadpis: "Dauer und Rückgabe",
      odstavce: [
        "Die Sache wurde am {{predano}} übergeben.",
        {
          volba: 'doba',
          uvodVzor: "Dauer (bitte eines ankreuzen):",
          moznosti: {
            datum: "Die Leihe endet am {{vratit_do}}. Spätestens an diesem Tag gibt der Entleiher die Sache zurück.",
            ucel: "Die Leihe endet, wenn der vereinbarte Zweck erfüllt ist. Der Entleiher gibt die Sache danach unverzüglich zurück.",
          },
        },
        "Der Entleiher gibt die Sache am folgenden Ort zurück: {{misto_vraceni}}, im Zustand der Übergabe unter Berücksichtigung der Abnutzung durch vertragsgemäßen Gebrauch.",
        "Der Verleiher kann vorzeitig kündigen, wenn er die Sache infolge eines nicht vorhergesehenen Umstands benötigt, wenn der Entleiher sie vertragswidrig gebraucht oder Dritten ohne Erlaubnis überlässt, oder wenn der Entleiher stirbt.",
      ],
    },
    {
      nadpis: "Gebrauch der Sache",
      vysvetleni: "Wie die Sache genutzt wird und wer welche Kosten trägt.",
      odstavce: ["Der Entleiher gebraucht die Sache nur vertragsgemäß und schützt sie vor Beschädigung, Verlust und Zerstörung.", "Der Entleiher überlässt die Sache Dritten nicht ohne Erlaubnis des Verleihers.", "Die gewöhnlichen Kosten der Erhaltung trägt der Entleiher. Größere Reparaturen zeigt er dem Verleiher unverzüglich an."],
    },
    {
      nadpis: "Schlussbestimmungen",
      odstavce: ["Im Übrigen gelten die Vorschriften über die Leihe (§§ 598 ff. BGB).", "Änderungen bedürfen der Textform. Der Vertrag wird zweifach ausgefertigt; jede Partei erhält ein Exemplar."],
    },
  ],
};
