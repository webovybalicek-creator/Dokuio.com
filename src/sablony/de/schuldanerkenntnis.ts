/**
 * Schuldanerkenntnis – Deutschland. § 781 BGB (Schriftform), § 212 Abs. 1 Nr. 1 BGB (Neubeginn der Verjährung).
 * Optional Ratenzahlung mit Tilgungsplan. Keine Vertragsstrafen.
 */
import type { Sablona } from '../typy';
import { betragInWorten } from './zahlen';
import { naDatum, pripominkySplatek } from '../terminy';
import { darlehensvertrag } from './darlehensvertrag';
import { BGB_781, BGB_212, TIPP_IDENTITAET } from './quellen';

export const schuldanerkenntnis: Sablona = {
  kod: 'DE-SCHULDANERKENNTNIS',
  verze: '1.1',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-19',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Schuldanerkenntnis',
  podnadpis: 'nach § 781 des Bürgerlichen Gesetzbuchs (BGB)',
  souborPdf: 'schuldanerkenntnis',
  paticka: 'Kostenlos erstellt · Vorlage DE-SCHULDANERKENNTNIS v1.1 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Schuldner/in', vpravo: 'Gläubiger/in (Einverständnis mit Raten)' },
  slovo: { n: 'Schuldanerkenntnis', g: 'Schuldanerkenntnisses', a: 'Schuldanerkenntnis', l: 'Schuldanerkenntnis' },
  prilohy: (d) => (d.splaceni === 'splatky' ? (darlehensvertrag.prilohy?.(d) ?? []).map((t) => ({ ...t, poznamka: 'Der Plan folgt den vereinbarten Raten; bei Widersprüchen gilt der Text des Schuldanerkenntnisses.' })) : []),
  pripominky: (d) => [
    ...(d.splaceni === 'splatky' ? pripominkySplatek(d, 'Rate', '€', { celkem: (n) => `insgesamt ${n} Raten`, posledni: 'letzte' }) : []),
    ...(d.splaceni === 'naraz' && naDatum(d.zaplatit_do) ? [{ nazev: 'Schuld fällig', datum: String(d.zaplatit_do) }] : []),
  ],
  coDal: [
    'Zweimal ausdrucken. Die Unterschrift der Schuldnerin/des Schuldners ist zwingend – ohne sie gilt das Anerkenntnis nicht.',
    'Das Original mit der Unterschrift behält die Gläubigerin/der Gläubiger.',
    'Barzahlungen quittieren lassen, Überweisungen sind über den Kontoauszug belegt.',
  ],
  kontrola: [
    'Das Schuldanerkenntnis muss schriftlich erteilt werden ([§ 781 BGB](https://www.gesetze-im-internet.de/bgb/__781.html)) – eigenhändige Unterschrift der Schuldnerin/des Schuldners.',
    'Grund und Höhe der Schuld konkret angeben (aus welchem Vertrag oder Ereignis, von welchem Tag).',
    'Mit dem Anerkenntnis beginnt die Verjährung neu ([§ 212 BGB](https://www.gesetze-im-internet.de/bgb/__212.html)).',
    'Kein Druck und keine Drohungen – ein erzwungenes Anerkenntnis kann angefochten werden.',
    TIPP_IDENTITAET,
  ],
  zdroje: [BGB_781, BGB_212],
  kroky: [
    {
      id: 'parteien',
      nazev: 'Schuldner/in und Gläubiger/in',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Schuldner/in – Vor- und Nachname', napoveda: 'Wer schuldet und die Schuld anerkennt.', sirka: 34 },
        { id: 'p_narozeni', typ: 'datum', popis: 'Geburtsdatum', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Anschrift', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Gläubiger/in – Vor- und Nachname', sirka: 34, autocomplete: 'name' },
        { id: 'k_narozeni', typ: 'datum', popis: 'Geburtsdatum', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Anschrift', sirka: 46 },
      ],
    },
    {
      id: 'schuld',
      nazev: 'Schuld',
      pole: [
        { id: 'castka', typ: 'castka', popis: 'Höhe der Schuld (€)', napoveda: 'Der heute noch offene Betrag. Die Worte ergänzen wir.', sirka: 14, polovina: true },
        { id: 'duvod_popis', typ: 'text', popis: 'Grund der Schuld', placeholder: 'z. B. Darlehen laut Darlehensvertrag vom 3. 3. 2026', sirka: 56 },
      ],
    },
    {
      id: 'zahlung',
      nazev: 'Zahlung',
      pole: [
        {
          id: 'splaceni',
          typ: 'volba',
          popis: 'Wie wird gezahlt?',
          moznosti: [
            { hodnota: 'naraz', popis: 'Auf einmal bis zu einem Datum' },
            { hodnota: 'splatky', popis: 'In Monatsraten' },
          ],
        },
        { id: 'zaplatit_do', typ: 'datum', popis: 'Zahlen bis', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'naraz' } },
        { id: 'splatka', typ: 'castka', popis: 'Monatsrate (€)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'splatka_den', typ: 'cislo', popis: 'Tag im Monat', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'prvni_splatka', typ: 'datum', popis: 'Monat der ersten Rate', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'splaceni', je: 'splatky' } },
        { id: 'ucet', typ: 'text', popis: 'IBAN Gläubiger/in', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Ort', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: { castka_slovy: (d) => betragInWorten(d.castka) },
  clanky: [
    {
      nadpis: 'Beteiligte',
      vysvetleni: 'Wer schuldet und wem.',
      odstavce: [
        '**Schuldner/in:** {{p_jmeno}}, geboren am {{p_narozeni}}, wohnhaft {{p_adresa}}',
        '**Gläubiger/in:** {{k_jmeno}}, geboren am {{k_narozeni}}, wohnhaft {{k_adresa}}',
      ],
    },
    {
      nadpis: 'Anerkenntnis',
      vysvetleni: 'Grund und Höhe der Schuld.',
      odstavce: [
        'Ich erkenne hiermit an, der Gläubigerin/dem Gläubiger den Betrag von **{{castka}}** (in Worten: {{castka_slovy}}) zu schulden.',
        'Grund der Schuld: {{duvod_popis}}.',
      ],
    },
    {
      nadpis: 'Zahlung',
      vysvetleni: 'Bis wann oder in welchen Raten gezahlt wird.',
      odstavce: [
        {
          volba: 'splaceni',
          uvodVzor: 'Zahlungsweise (eine Möglichkeit ankreuzen):',
          moznosti: {
            naraz: 'Ich verpflichte mich, den Betrag bis zum {{zaplatit_do}} zu zahlen.',
            splatky: 'Ich verpflichte mich, den Betrag in Monatsraten von {{splatka}} zu zahlen, fällig jeweils am {{splatka_den}}. eines Monats, beginnend mit dem Monat der ersten Rate laut Tilgungsplan. Die letzte Rate kann niedriger sein. Gerate ich mit zwei aufeinanderfolgenden Raten in Verzug, wird der gesamte Restbetrag sofort fällig.',
          },
        },
        'Zahlungen erfolgen auf das Konto IBAN {{ucet}} oder bar gegen Quittung. Eine vorzeitige Zahlung ist jederzeit möglich.',
      ],
    },
  ],
};
