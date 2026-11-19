/**
 * Widerruf eines Fernabsatzvertrags (Online-Kauf) – Deutschland.
 * Inhalt nach dem Muster-Widerrufsformular (Anlage 2 zu Art. 246a § 1 EGBGB), § 355 BGB (14 Tage), § 357 BGB (Rückzahlung binnen 14 Tagen).
 */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { BGB_355, BGB_357, EGBGB_WIDERRUF } from './quellen';

export const widerruf: Sablona = {
  kod: 'DE-WIDERRUF',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Widerruf',
  podnadpis: 'eines im Fernabsatz geschlossenen Vertrags (§ 355 BGB, Muster-Widerrufsformular)',
  souborPdf: 'widerruf',
  paticka: 'Kostenlos erstellt · Vorlage DE-WIDERRUF v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Verbraucher/in', vpravo: 'Erhalten für den Händler (bei persönlicher Abgabe)' },
  slovo: { n: 'Widerruf', g: 'Widerrufs', a: 'Widerruf', l: 'Widerruf' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const od = naDatum(d.datum);
    return od ? [{ nazev: 'Händler muss Geld zurückzahlen (Richtwert)', datum: isoDatum(pridejDny(od, 14)), popis: 'Spätestens 14 Tage nach Eingang des Widerrufs; der Händler darf warten, bis die Ware zurück ist oder Sie den Versand nachweisen.' }] : [];
  },
  coDal: [
    'Widerruf per E-Mail, über das Formular oder die Widerrufsfunktion im Shop oder per Post senden – Nachweis aufheben.',
    'Ware spätestens 14 Tage nach dem Widerruf zurücksenden.',
    'Der Händler erstattet alle Zahlungen einschließlich der Standard-Versandkosten binnen 14 Tagen.',
  ],
  kontrola: [
    'Die Frist beträgt 14 Tage ab Erhalt der Ware (bei Dienstleistungen ab Vertragsschluss). Es genügt, den Widerruf rechtzeitig abzusenden.',
    'Seit 19. Juni 2026 müssen Online-Shops einen Widerrufsbutton anbieten ([§ 356a BGB](https://www.gesetze-im-internet.de/bgb/__356a.html)). Ein Widerruf per Brief oder E-Mail mit diesem Formular bleibt wirksam.',
    'Das Widerrufsrecht gilt nur bei Käufen von Unternehmen im Fernabsatz (Online-Shop, Telefon) oder außerhalb von Geschäftsräumen – nicht im Laden und nicht zwischen Privatpersonen.',
    'Ausnahmen: z. B. maßgefertigte Waren, schnell verderbliche Waren, entsiegelte Hygieneartikel, entsiegelte Datenträger, Reisen und Veranstaltungen mit festem Termin.',
    'Rücksendekosten tragen Sie nur, wenn der Händler Sie vorher darüber informiert hat.',
    'Fehlte die Widerrufsbelehrung, verlängert sich die Frist auf bis zu 12 Monate und 14 Tage.',
  ],
  zdroje: [BGB_355, BGB_357, EGBGB_WIDERRUF],
  kroky: [
    {
      id: 'haendler',
      nazev: 'Händler',
      popis: 'Die Angaben stehen im Impressum oder in der Widerrufsbelehrung des Shops.',
      pole: [
        { id: 'pr_nazev', typ: 'text', popis: 'Händler (Firmenname)', placeholder: 'z. B. Muster Versand GmbH', sirka: 34 },
        { id: 'pr_adresa', typ: 'text', popis: 'Anschrift oder E-Mail für den Widerruf', sirka: 46 },
      ],
    },
    {
      id: 'kauf',
      nazev: 'Kauf',
      pole: [
        { id: 'zbozi', typ: 'textarea', popis: 'Ware oder Dienstleistung', placeholder: 'z. B. Kopfhörer Sony WH-1000XM5, schwarz', sirka: 64 },
        { id: 'objednavka', typ: 'text', popis: 'Bestellnummer', sirka: 18, polovina: true },
        { id: 'objednano', typ: 'datum', popis: 'Bestellt am', sirka: 14, polovina: true },
        { id: 'prevzato', typ: 'datum', popis: 'Erhalten am', napoveda: 'Ab diesem Tag laufen 14 Tage.', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'sie',
      nazev: 'Ihre Angaben',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Vor- und Nachname', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Anschrift', sirka: 46 },
        { id: 'ucet', typ: 'text', popis: 'IBAN für die Erstattung (optional)', napoveda: 'Ohne Angabe erstattet der Händler über das ursprüngliche Zahlungsmittel.', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Ort', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  clanky: [
    { nadpis: 'An', odstavce: ['{{pr_nazev}}, {{pr_adresa}}'] },
    {
      nadpis: 'Widerruf',
      vysvetleni: 'Text nach dem gesetzlichen Muster-Widerrufsformular. Eine Begründung ist nicht nötig.',
      odstavce: [
        'Hiermit widerrufe ich den von mir abgeschlossenen Vertrag über den Kauf der folgenden Waren / die Erbringung der folgenden Dienstleistung: {{zbozi}}',
        'Bestellt am {{objednano}} / erhalten am {{prevzato}} · Bestellnummer: {{objednavka}}',
        'Bitte erstatten Sie den Betrag auf das Konto IBAN {{ucet}}.',
      ],
    },
    { nadpis: 'Verbraucher/in', odstavce: ['{{p_jmeno}}, {{p_adresa}}'] },
  ],
};
