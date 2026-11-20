/**
 * Kündigung eines Vertrags durch Konsument/innen – Österreich (Brief an das Unternehmen).
 * Handy/Internet: Kündigungsfrist für Verbraucher höchstens ein Monat, Mindestvertragsdauer höchstens 24 Monate (TKG 2021, RTR).
 * Strom/Gas: Kündigung mit zwei Wochen Frist, Bindungsfristen beachten (konsumentenfragen.at).
 * Versicherung: Verträge über drei Jahre zum Ende des dritten Jahres, danach jährlich, ein Monat Frist (konsumentenfragen.at).
 * Wiederkehrende Leistungen über ein Jahr: zum Ablauf des ersten Jahres, danach jedes halben Jahres, zwei Monate Frist (§ 15 KSchG).
 * Sonst gilt, was im Vertrag bzw. in den AGB steht – deshalb im Brief „zum nächstmöglichen Termin“.
 * Bei jeder Textänderung `verze` und `aktualizovano` erhöhen.
 */
import type { Sablona, Pripominka } from '../typy';
import { naDatum, isoDatum, pridejDny } from '../terminy';
import { KSCHG, VERSVG, KF_VERTRAGSENDE, KF_VERSICHERUNG, KF_STROMWECHSEL, KF_TELEKOM, RTR_VERTRAEGE } from './quellen';

export const kuendigungVertragAT: Sablona = {
  kod: 'AT-KUENDIGUNG-VERTRAG',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'at',
  jazyk: 'de',
  nazev: 'Kündigung',
  podnadpis: 'Kündigung eines Vertrags durch die Kundin bzw. den Kunden',
  souborPdf: 'kuendigung-vertrag',
  paticka: 'Kostenlos erstellt · Vorlage AT-KUENDIGUNG-VERTRAG v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'ort',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Kundin / Kunde', vpravo: 'Empfang bestätigt (bei persönlicher Abgabe)' },
  slovo: { n: 'Kündigung', g: 'Kündigung', a: 'Kündigung', l: 'Kündigung' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const z = naDatum(d.datum);
    const out: Pripominka[] = [];
    if (z) out.push({ nazev: 'Kündigungsbestätigung prüfen', datum: isoDatum(pridejDny(z, 21)), popis: 'Keine Bestätigung erhalten? Beim Unternehmen nachfragen und den Zustellnachweis bereithalten.' });
    if (d.termin === 'datum' && naDatum(d.zum)) out.push({ nazev: 'Vertragsende laut Kündigung', datum: String(d.zum), popis: 'Prüfen, ob keine Abbuchungen mehr erfolgen.' });
    return out;
  },
  coDal: [
    'Eigenhändig unterschreiben. Mehr als die Schriftform darf von Konsument/innen nicht verlangt werden.',
    'Nachweisbar zustellen: eingeschrieben, über das Kündigungsformular des Unternehmens oder persönlich gegen Bestätigung.',
    'Entscheidend ist, wann die Kündigung beim Unternehmen einlangt – nicht das Absendedatum. Rechtzeitig abschicken.',
    'Aufgabeschein und Kündigungsbestätigung aufbewahren und die nächsten Abbuchungen kontrollieren.',
  ],
  kontrola: [
    'Kundennummer, Vertrags- bzw. Polizzennummer und Ihren Namen genau wie auf der Rechnung oder Polizze angeben – sonst kann die Kündigung nicht zugeordnet werden.',
    'Frist und Termin stehen im Vertrag bzw. in den AGB. Die Kündigung muss vor Fristbeginn beim Unternehmen eingelangt sein; das Risiko, dass sie nicht ankommt, tragen Sie ([konsumentenfragen.at](https://www.konsumentenfragen.at/konsumentenfragen/Rund_um_den_Vertrag/Nach_dem_Kauf/Vertragsende.html)).',
    'Handy und Internet: Für Verbraucher/innen beträgt die Kündigungsfrist höchstens einen Monat, die Mindestvertragsdauer höchstens 24 Monate. Wer vorher aussteigt, zahlt meist die Grundentgelte bis zum Ende der Mindestvertragsdauer ([RTR](https://www.rtr.at/TKP/was_wir_tun/telekommunikation/konsumentenservice/information/informationen_fuer_konsumenten/TKKS_Vertraege.de.html)).',
    'Strom und Gas: Kündigung mit zwei Wochen Frist möglich, vereinbarte Bindungsfristen gelten aber. Beim Lieferantenwechsel kündigt meist der neue Lieferant für Sie (mit Vollmacht) – dann brauchen Sie diesen Brief nicht ([konsumentenfragen.at](https://www.konsumentenfragen.at/konsumentenfragen/Aktuelles/Konsumentenfragen/So-wechseln-Sie-den-Stromlieferanten.html)).',
    'Versicherung: in der Regel zum Ablauf des Versicherungsjahres laut Bedingungen. Verträge mit mehr als drei Jahren Laufzeit können Verbraucher/innen zum Ende des dritten Jahres und danach jährlich mit einem Monat Frist kündigen. Die Kfz-Haftpflicht verlängert sich, wenn nicht einen Monat vor Ablauf gekündigt wird.',
    'Fitnessstudio, Abo, Dienstleistung: Bei Verträgen über wiederkehrende Leistungen mit mehr als einem Jahr Laufzeit können Verbraucher/innen zum Ablauf des ersten Jahres und danach jedes halben Jahres mit zwei Monaten Frist kündigen (§ 15 KSchG). Sonst gelten Frist und Termin laut AGB.',
    'Fristlos („aus wichtigem Grund“) nur bei schwerwiegender Pflichtverletzung des Unternehmens – den Grund konkret beschreiben. Im Zweifel hilft die Konsumentenberatung der Arbeiterkammer oder des VKI.',
  ],
  zdroje: [KSCHG, VERSVG, KF_VERTRAGSENDE, KF_VERSICHERUNG, KF_STROMWECHSEL, KF_TELEKOM, RTR_VERTRAEGE],

  kroky: [
    {
      id: 'kunde',
      nazev: 'Ihre Daten',
      popis: 'Wer den Vertrag abgeschlossen hat – so, wie es auf Rechnung oder Polizze steht.',
      pole: [
        { id: 'k_name', typ: 'text', popis: 'Vor- und Nachname', napoveda: 'Name der Vertragspartnerin bzw. des Vertragspartners.', placeholder: 'z. B. Maria Huber', sirka: 34, autocomplete: 'name' },
        { id: 'k_geburt', typ: 'datum', popis: 'Geburtsdatum (optional)', napoveda: 'Hilft dem Unternehmen, Sie eindeutig zu finden – vor allem bei Versicherungen.', sirka: 14, polovina: true },
        { id: 'k_adresse', typ: 'text', popis: 'Anschrift', napoveda: 'Die Anschrift, die das Unternehmen von Ihnen gespeichert hat.', placeholder: 'z. B. Mariahilfer Straße 12/5, 1060 Wien', sirka: 46, autocomplete: 'street-address' },
        { id: 'k_kontakt', typ: 'text', popis: 'Telefon oder E-Mail (optional)', napoveda: 'Für Rückfragen und die Kündigungsbestätigung.', placeholder: 'z. B. maria.huber@email.at', sirka: 30 },
      ],
    },
    {
      id: 'vertrag',
      nazev: 'Unternehmen und Vertrag',
      popis: 'Die Daten finden Sie auf der Rechnung, der Polizze oder im Kundenkonto.',
      pole: [
        { id: 'u_name', typ: 'text', popis: 'Unternehmen', napoveda: 'Name des Anbieters bzw. der Versicherung, wie auf der Rechnung.', placeholder: 'z. B. Muster Telekom GmbH', sirka: 34 },
        { id: 'u_adresse', typ: 'text', popis: 'Anschrift des Unternehmens', napoveda: 'Die Adresse für Kündigungen steht oft in den AGB oder im Impressum.', placeholder: 'z. B. Postfach 100, 1010 Wien', sirka: 46 },
        {
          id: 'art',
          typ: 'volba',
          popis: 'Was kündigen Sie?',
          napoveda: 'Je nach Vertrag gelten andere Fristen – die Tipps unten erklären sie.',
          moznosti: [
            { hodnota: 'handy', popis: 'Handy, Internet oder Festnetz' },
            { hodnota: 'versicherung', popis: 'Versicherung' },
            { hodnota: 'energie', popis: 'Strom oder Gas' },
            { hodnota: 'fitness', popis: 'Fitnessstudio oder Mitgliedschaft' },
            { hodnota: 'abo', popis: 'Abo oder Dienstleistung (Zeitung, Streaming …)' },
            { hodnota: 'sonstiges', popis: 'Sonstiger Vertrag' },
          ],
        },
        { id: 'vertrag_bez', typ: 'text', popis: 'Bezeichnung des Vertrags oder Tarifs', napoveda: 'Damit klar ist, welcher Vertrag gemeint ist – z. B. Tarifname oder Art der Versicherung.', placeholder: 'z. B. Tarif „Mobil L“', sirka: 34 },
        { id: 'vertragsnr', typ: 'text', popis: 'Kunden-, Vertrags- oder Polizzennummer', napoveda: 'Die wichtigste Angabe – damit wird die Kündigung Ihrem Vertrag zugeordnet.', placeholder: 'z. B. 123456789', sirka: 20, polovina: true },
        { id: 'rufnummer', typ: 'text', popis: 'Rufnummer bzw. Anschluss', napoveda: 'Bei Handy- und Internetverträgen die betroffene Nummer.', placeholder: 'z. B. 0660 1234567', sirka: 18, polovina: true, zobrazitKdyz: { pole: 'art', je: 'handy' } },
        { id: 'zaehlpunkt', typ: 'text', popis: 'Zählpunktnummer (optional)', napoveda: 'Steht auf der Strom- bzw. Gasrechnung und beginnt mit „AT“.', placeholder: 'z. B. AT0010000000000000001000000000000', sirka: 36, zobrazitKdyz: { pole: 'art', je: 'energie' } },
      ],
    },
    {
      id: 'kuendigung',
      nazev: 'Kündigung',
      pole: [
        {
          id: 'termin',
          typ: 'volba',
          popis: 'Wann soll der Vertrag enden?',
          napoveda: 'Am sichersten ist „zum nächstmöglichen Termin“ – dann gilt die Kündigung auch, wenn Sie sich bei der Frist verrechnet haben.',
          moznosti: [
            { hodnota: 'naechst', popis: 'Zum nächstmöglichen Termin' },
            { hodnota: 'datum', popis: 'Zu einem bestimmten Datum' },
            { hodnota: 'ausserordentlich', popis: 'Fristlos aus wichtigem Grund' },
          ],
        },
        { id: 'zum', typ: 'datum', popis: 'Vertragsende zum', napoveda: 'Das Datum, das sich aus Frist und Termin laut Vertrag ergibt.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'termin', je: 'datum' } },
        { id: 'grund', typ: 'textarea', popis: 'Wichtiger Grund', napoveda: 'Konkret beschreiben: was, seit wann, ob Sie das Unternehmen schon aufgefordert haben.', placeholder: 'z. B. Der Internetanschluss funktioniert seit 3. 9. trotz mehrfacher Störungsmeldung nicht.', sirka: 60, zobrazitKdyz: { pole: 'termin', je: 'ausserordentlich' } },
        {
          id: 'wuensche',
          typ: 'vice',
          popis: 'Was soll das Unternehmen außerdem tun?',
          napoveda: 'Die Bestätigung ist Ihr Nachweis. Ein Guthaben kann nur überwiesen werden, wenn Sie ein Konto angeben.',
          moznosti: [
            { hodnota: 'bestaetigung', popis: 'Kündigung und Vertragsende schriftlich bestätigen' },
            { hodnota: 'lastschrift', popis: 'Einzugsermächtigung (SEPA-Lastschrift) mit Vertragsende beenden' },
            { hodnota: 'guthaben', popis: 'Allfälliges Guthaben bzw. Prämie zurückzahlen' },
          ],
        },
        { id: 'iban', typ: 'text', popis: 'IBAN für die Rückzahlung', napoveda: 'Ihr Konto für ein allfälliges Guthaben.', placeholder: 'AT00 0000 0000 0000 0000', sirka: 30, zobrazitKdyz: { pole: 'wuensche', je: 'guthaben' } },
        { id: 'ort', typ: 'text', popis: 'Ort', napoveda: 'Wir übernehmen den Ort aus Ihrer Anschrift.', placeholder: 'z. B. Wien', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresse' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heutiges Datum vorausgefüllt.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Absender/in',
      vysvetleni: 'Wer kündigt – so, wie es im Vertrag steht.',
      odstavce: ['{{k_name}}, geb. {{k_geburt}}, {{k_adresse}}, Kontakt: {{k_kontakt}}'],
    },
    {
      nadpis: 'An',
      vysvetleni: 'Das Unternehmen, das die Kündigung erhalten muss.',
      odstavce: ['{{u_name}}, {{u_adresse}}'],
    },
    {
      nadpis: 'Kündigung',
      vysvetleni: 'Welcher Vertrag endet und wann. „Zum nächstmöglichen Termin“ schützt vor Rechenfehlern bei der Frist.',
      odstavce: [
        'Sehr geehrte Damen und Herren,',
        {
          volba: 'art',
          uvodVzor: 'Vertrag (bitte ankreuzen):',
          moznosti: {
            handy: 'hiermit kündige ich meinen Vertrag über Telekommunikationsdienste (Handy, Internet bzw. Festnetz) {{vertrag_bez}}, Kundennummer {{vertragsnr}}, Rufnummer bzw. Anschluss {{rufnummer}}.',
            versicherung: 'hiermit kündige ich meinen Versicherungsvertrag {{vertrag_bez}}, Polizzennummer {{vertragsnr}}.',
            energie: 'hiermit kündige ich meinen Energieliefervertrag (Strom bzw. Gas) {{vertrag_bez}}, Kundennummer {{vertragsnr}}, Zählpunktnummer {{zaehlpunkt}}.',
            fitness: 'hiermit kündige ich meine Mitgliedschaft {{vertrag_bez}}, Mitglieds- bzw. Vertragsnummer {{vertragsnr}}.',
            abo: 'hiermit kündige ich mein Abonnement bzw. meinen Dienstleistungsvertrag {{vertrag_bez}}, Kunden- bzw. Vertragsnummer {{vertragsnr}}.',
            sonstiges: 'hiermit kündige ich den Vertrag {{vertrag_bez}}, Vertragsnummer {{vertragsnr}}.',
          },
        },
        {
          volba: 'termin',
          uvodVzor: 'Vertragsende (bitte ankreuzen):',
          moznosti: {
            naechst: 'Die Kündigung erfolgt fristgerecht zum nächstmöglichen Termin.',
            datum: 'Die Kündigung erfolgt zum {{zum}}, sollte dieser Termin nicht möglich sein, zum nächstmöglichen Termin.',
            ausserordentlich: 'Die Kündigung erfolgt aus wichtigem Grund mit sofortiger Wirkung, hilfsweise fristgerecht zum nächstmöglichen Termin. Grund: {{grund}}',
          },
        },
      ],
    },
    {
      nadpis: 'Weitere Anliegen',
      vysvetleni: 'Bestätigung, Abbuchungen und Guthaben – damit nach dem Vertragsende nichts offen bleibt.',
      odstavce: [
        {
          vice: 'wuensche',
          uvod: 'Ich ersuche Sie außerdem um:',
          moznosti: {
            bestaetigung: 'eine schriftliche Bestätigung des Erhalts dieser Kündigung und des Vertragsendes',
            lastschrift: 'die Beendigung der Einzugsermächtigung (SEPA-Lastschriftmandat) mit Vertragsende',
            guthaben: 'die Rückzahlung eines allfälligen Guthabens bzw. nicht verbrauchter Prämie auf das Konto IBAN {{iban}}',
          },
        },
        'Mit freundlichen Grüßen',
      ],
    },
  ],
};
