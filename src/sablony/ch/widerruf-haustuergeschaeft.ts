/**
 * Widerruf bei Haustürgeschäften und ähnlichen Verträgen – Schweiz. Art. 40a–40f OR: 14 Tage, Leistung über 100 Franken,
 * Angebot an der Haustür/Wohnung, am Arbeitsplatz, in öffentlichen Verkehrsmitteln oder auf Strassen, an Werbefahrten
 * oder am Telefon; schriftlich oder in einer anderen Form, die den Nachweis durch Text ermöglicht (Art. 40e).
 * Für Online-Käufe gibt es in der Schweiz KEIN gesetzliches Widerrufsrecht (ch.ch) – Hinweis in den Tipps.
 */
import type { Sablona } from '../typy';
import { widerruf as de } from '../de/widerruf';
import { schweiz, paticka } from './schweiz';
import { OR_40A, CH_RUECKGABE } from './quellen';

export const widerrufHaustuerCH: Sablona = schweiz({
  ...de,
  kod: 'CH-WIDERRUF-HAUSTUER',
  nazev: 'Widerruf',
  podnadpis: 'eines Haustür- oder Telefongeschäfts (Art. 40a ff. OR)',
  souborPdf: 'widerruf-haustuergeschaeft',
  paticka: paticka('CH-WIDERRUF-HAUSTUER'),
  podpisy: { vlevo: 'Kunde/Kundin', vpravo: 'Erhalten für den Anbieter (bei persönlicher Abgabe)' },
  pripominky: () => [],
  coDal: [
    'Widerruf per Einschreiben senden oder per E-Mail mit Lesebestätigung – entscheidend ist, dass Sie ihn innert 14 Tagen abschicken und das belegen können.',
    'Bereits erhaltene Leistungen zurückgeben; der Anbieter muss bereits bezahlte Beträge zurückerstatten (Art. 40f OR).',
  ],
  kontrola: [
    'Das Widerrufsrecht gilt nur, wenn Ihnen das Angebot an der Haustür bzw. in Ihrer Wohnung, am Arbeitsplatz, in öffentlichen Verkehrsmitteln, auf der Strasse, an einer Werbefahrt oder am Telefon gemacht wurde und die Leistung mehr als 100 Franken beträgt ([Art. 40a ff. OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_40_a)).',
    'Für Online-Käufe gibt es in der Schweiz kein gesetzliches Widerrufsrecht – nur ein freiwilliges Rückgaberecht des Shops gemäss seinen AGB ([ch.ch](https://www.ch.ch/de/sicherheit-und-recht/waren-zuruckgeben-oder-umtauschen)).',
    'Kein Widerrufsrecht, wenn Sie die Verhandlungen ausdrücklich gewünscht haben oder an einem Markt- oder Messestand bestellt haben (Art. 40c OR).',
    'Die Frist beträgt 14 Tage und beginnt, sobald Sie den Vertrag abgeschlossen haben und vom Anbieter schriftlich über das Widerrufsrecht informiert wurden (Art. 40e OR).',
  ],
  zdroje: [OR_40A, CH_RUECKGABE],
  kroky: [
    {
      id: 'haendler',
      nazev: 'Anbieter',
      popis: 'Name und Adresse stehen im Vertrag oder auf der Auftragsbestätigung.',
      pole: [
        { id: 'pr_nazev', typ: 'text', popis: 'Anbieter (Firma)', placeholder: 'z. B. Muster Vertriebs AG', sirka: 34 },
        { id: 'pr_adresa', typ: 'text', popis: 'Adresse des Anbieters', sirka: 46 },
      ],
    },
    {
      id: 'kauf',
      nazev: 'Vertrag',
      pole: [
        { id: 'zbozi', typ: 'textarea', popis: 'Ware oder Dienstleistung', placeholder: 'z. B. Staubsauger Modell X, Zeitschriftenabo', sirka: 64 },
        { id: 'objednavka', typ: 'text', popis: 'Vertrags- oder Auftragsnummer', sirka: 18, polovina: true },
        { id: 'objednano', typ: 'datum', popis: 'Vertrag geschlossen am', sirka: 14, polovina: true },
        {
          id: 'kde',
          typ: 'volba',
          popis: 'Wo wurde Ihnen das Angebot gemacht?',
          moznosti: [
            { hodnota: 'haustuer', popis: 'An der Haustür / in meiner Wohnung' },
            { hodnota: 'telefon', popis: 'Am Telefon' },
            { hodnota: 'arbeitsplatz', popis: 'Am Arbeitsplatz' },
            { hodnota: 'strasse', popis: 'Auf der Strasse oder in einem öffentlichen Verkehrsmittel' },
            { hodnota: 'werbefahrt', popis: 'An einer Werbe- oder Ausflugsfahrt' },
          ],
        },
      ],
    },
    {
      id: 'sie',
      nazev: 'Ihre Angaben',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Vor- und Nachname', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Adresse', sirka: 46 },
        { id: 'ucet', typ: 'text', popis: 'IBAN für die Rückerstattung (optional)', placeholder: 'CH…', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Ort', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    { nadpis: 'An', odstavce: ['{{pr_nazev}}, {{pr_adresa}}'] },
    {
      nadpis: 'Widerruf',
      vysvetleni: 'Eine Begründung ist nicht nötig.',
      odstavce: [
        'Hiermit widerrufe ich gestützt auf Art. 40a ff. OR meinen Antrag bzw. meine Annahme des folgenden Vertrags: {{zbozi}}',
        'Vertrag vom {{objednano}} · Vertrags-/Auftragsnummer: {{objednavka}}',
        {
          volba: 'kde',
          uvod: 'Das Angebot wurde mir gemacht:',
          uvodVzor: 'Das Angebot wurde mir gemacht (ankreuzen):',
          moznosti: {
            haustuer: 'an der Haustür bzw. in meiner Wohnung.',
            telefon: 'am Telefon.',
            arbeitsplatz: 'an meinem Arbeitsplatz.',
            strasse: 'auf der Strasse bzw. in einem öffentlichen Verkehrsmittel.',
            werbefahrt: 'an einer Werbe- bzw. Ausflugsfahrt.',
          },
        },
        'Bitte erstatten Sie bereits bezahlte Beträge auf das Konto IBAN {{ucet}} zurück.',
      ],
    },
    { nadpis: 'Kunde/Kundin', odstavce: ['{{p_jmeno}}, {{p_adresa}}'] },
  ],
});
