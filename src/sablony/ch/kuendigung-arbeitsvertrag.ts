/**
 * Kündigung des Arbeitsvertrags durch den Arbeitnehmer – Schweiz.
 * Geprüft 2026-11-20 (Fedlex OR, ch.ch, SECO):
 *  - Keine gesetzliche Form; schriftlich nur, wenn Vertrag, GAV oder NAV es verlangen. Wirksam mit Empfang (ch.ch, SECO).
 *  - Probezeit: erster Monat, sieben Tage Frist; vertraglich max. drei Monate (Art. 335b OR). Kündigung muss bis zum
 *    letzten Tag der Probezeit eintreffen (ch.ch).
 *  - Nach der Probezeit: 1 Monat im 1. Dienstjahr, 2 Monate im 2.–9., 3 Monate ab dem 10., je auf Ende eines Monats (Art. 335c OR).
 *  - Begründung nur auf Verlangen, schriftlich (Art. 335 Abs. 2 OR). Arbeitszeugnis jederzeit (Art. 330a OR).
 *  - Sperrfristen schützen nur bei Kündigung durch den Arbeitgeber (SECO, ch.ch).
 *  - Selbstkündigung ohne neue Stelle kann zur Einstellung der Arbeitslosenentschädigung führen (arbeit.swiss).
 * Alternative: einvernehmliche Auflösung (Aufhebungsvereinbarung) – hier nur als Vorschlag im Brief.
 */
import type { Sablona, Pripominka } from '../typy';
import { naDatum, isoDatum, pridejDny } from '../terminy';
import { schweiz, paticka } from './schweiz';
import { OR_335, OR_335B, OR_335C, OR_330A, OR_341, CH_KUENDIGUNG_ARBEIT, CH_PROBEZEIT, SECO_KUENDIGUNG, ARBEIT_SWISS } from './quellen';

export const kuendigungArbeitsvertragCH: Sablona = schweiz({
  kod: 'CH-KUENDIGUNG-ARBEIT',
  verze: '1.0',
  aktualizovano: '2026-11-20',
  overeno: '2026-11-20',
  zeme: 'ch',
  jazyk: 'de-CH',
  nazev: 'Kündigung des Arbeitsvertrags',
  podnadpis: 'Kündigung durch den Arbeitnehmer nach Art. 335 ff. Obligationenrecht (OR)',
  souborPdf: 'kuendigung-arbeitsvertrag',
  paticka: paticka('CH-KUENDIGUNG-ARBEIT'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Arbeitnehmer/in', vpravo: 'Empfang bestätigt (Arbeitgeber, Datum)' },
  slovo: { n: 'Kündigung', g: 'Kündigung', a: 'Kündigung', l: 'Kündigung' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const out: Pripominka[] = [];
    const ende = naDatum(d.ende);
    if (ende) {
      out.push({ nazev: 'Letzter Arbeitstag / Ende Arbeitsverhältnis', datum: isoDatum(ende) });
      out.push({ nazev: 'Arbeitszeugnis und Lohnabrechnung prüfen', datum: isoDatum(pridejDny(ende, 14)), popis: 'Arbeitszeugnis erhalten? Schlussabrechnung mit Ferien- und Überstundensaldo kontrollieren.' });
    }
    return out;
  },
  coDal: [
    'Eigenhändig unterschreiben. Persönlich übergeben und den Empfang auf Ihrer Kopie bestätigen lassen – oder per Einschreiben senden.',
    'Die Kündigung wirkt erst, wenn sie beim Arbeitgeber eintrifft. Ein Einschreiben gilt in der Regel erst als zugestellt, wenn es abgeholt werden kann – senden Sie es einige Tage vor Monatsende.',
    'Restferien und Überstunden mit der vorgesetzten Person besprechen und schriftlich festhalten.',
    'Haben Sie noch keine neue Stelle, melden Sie sich so früh wie möglich beim RAV – nicht erst am letzten Arbeitstag.',
  ],
  kontrola: [
    'Form: Das Gesetz verlangt keine bestimmte Form. Steht im Arbeitsvertrag, im GAV oder im NAV „schriftlich“, muss die Kündigung schriftlich sein. Schriftlich ist ohnehin besser beweisbar ([ch.ch](https://www.ch.ch/de/arbeit/kundigung-arbeitsvertrag/)).',
    'Probezeit: Sie dauert ohne andere Abrede einen Monat, höchstens drei Monate. Die Kündigungsfrist beträgt sieben Tage; die Kündigung muss spätestens am letzten Tag der Probezeit eintreffen ([Art. 335b OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_335_b), [ch.ch](https://www.ch.ch/de/arbeit/probezeit/)).',
    'Nach der Probezeit gelten ohne andere schriftliche Abrede: im 1. Dienstjahr ein Monat, im 2. bis 9. Dienstjahr zwei Monate, ab dem 10. Dienstjahr drei Monate – jeweils auf das Ende eines Monats ([Art. 335c OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_335_c)). Prüfen Sie Arbeitsvertrag und GAV.',
    'Beispiel von ch.ch: Kündigung am 13. Juni mit einem Monat Frist → Ende am 31. Juli. Die Frist zählt ab Empfang beim Arbeitgeber.',
    'Eine Begründung ist nicht nötig. Verlangt der Arbeitgeber sie, müssen Sie sie schriftlich geben (Art. 335 Abs. 2 OR).',
    'Arbeitnehmende können auch während Krankheit oder Unfall kündigen; die Sperrfristen schützen nur vor einer Kündigung durch den Arbeitgeber ([SECO](https://www.seco.admin.ch/de/faq-kuendigung)).',
    'Ohne neue Stelle kann eine eigene Kündigung dazu führen, dass die Arbeitslosenentschädigung vorübergehend eingestellt wird ([arbeit.swiss](https://www.arbeit.swiss/en/jobseekers/first-steps-after-dismissal)).',
    'Früher gehen? Das geht nur mit Zustimmung des Arbeitgebers (Aufhebungsvereinbarung). Diese schriftlich festhalten und genau lesen – auf zwingende Ansprüche aus dem Gesetz können Sie während des Arbeitsverhältnisses und einen Monat danach nicht verzichten (Art. 341 OR).',
  ],
  zdroje: [OR_335, OR_335B, OR_335C, OR_330A, OR_341, CH_KUENDIGUNG_ARBEIT, CH_PROBEZEIT, SECO_KUENDIGUNG, ARBEIT_SWISS],

  kroky: [
    {
      id: 'arbeitnehmer',
      nazev: 'Ihre Angaben',
      popis: 'Sie kündigen als Arbeitnehmerin oder Arbeitnehmer.',
      pole: [
        { id: 'an_jmeno', typ: 'text', popis: 'Vor- und Nachname', napoveda: 'Wie im Arbeitsvertrag.', placeholder: 'z. B. Anna Muster', sirka: 34, autocomplete: 'name' },
        { id: 'an_adresa', typ: 'text', popis: 'Adresse', napoveda: 'Ihre aktuelle Wohnadresse.', placeholder: 'z. B. Bahnhofstrasse 12, 8001 Zürich', sirka: 46, autocomplete: 'street-address' },
        { id: 'an_funkce', typ: 'text', popis: 'Funktion / Stelle (optional)', napoveda: 'Hilft bei grossen Arbeitgebern bei der Zuordnung.', placeholder: 'z. B. Sachbearbeiterin Buchhaltung', sirka: 34 },
        { id: 'an_cislo', typ: 'text', popis: 'Personalnummer (optional)', napoveda: 'Steht oft auf der Lohnabrechnung.', placeholder: 'z. B. 104523', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'arbeitgeber',
      nazev: 'Arbeitgeber',
      pole: [
        { id: 'ag_nazev', typ: 'text', popis: 'Arbeitgeber (Firma)', napoveda: 'Name laut Arbeitsvertrag.', placeholder: 'z. B. Muster Treuhand AG', sirka: 34 },
        { id: 'ag_osoba', typ: 'text', popis: 'Zuhanden von (optional)', napoveda: 'Vorgesetzte Person oder Personalabteilung.', placeholder: 'z. B. Frau Petra Beispiel, HR', sirka: 34 },
        { id: 'ag_adresa', typ: 'text', popis: 'Adresse des Arbeitgebers', napoveda: 'Geschäftsadresse, an die Sie die Kündigung senden.', placeholder: 'z. B. Industriestrasse 5, 3000 Bern', sirka: 46 },
        { id: 'vertrag_datum', typ: 'datum', popis: 'Arbeitsvertrag vom bzw. Stellenantritt (optional)', napoveda: 'Aus dem Arbeitsvertrag. Daraus ergibt sich das Dienstjahr und damit die Frist.', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'kuendigung',
      nazev: 'Kündigung',
      pole: [
        {
          id: 'art',
          typ: 'volba',
          popis: 'Wann kündigen Sie?',
          napoveda: 'In der Probezeit gilt ohne andere Abrede eine Frist von sieben Tagen. Danach 1 bis 3 Monate auf Monatsende, je nach Dienstjahr und Vertrag.',
          moznosti: [
            { hodnota: 'probezeit', popis: 'Während der Probezeit' },
            { hodnota: 'ordentlich', popis: 'Nach der Probezeit (ordentliche Kündigung)' },
            { hodnota: 'aufhebung', popis: 'Ordentlich – mit Vorschlag, früher im Einvernehmen zu gehen' },
          ],
        },
        { id: 'ende', typ: 'datum', popis: 'Ende des Arbeitsverhältnisses', napoveda: 'Nach der Probezeit in der Regel ein Monatsende: 1. Dienstjahr 1 Monat, 2.–9. Dienstjahr 2 Monate, ab 10. Dienstjahr 3 Monate – sofern Vertrag oder GAV nichts anderes sagen.', sirka: 14, polovina: true },
        { id: 'wunsch_ende', typ: 'datum', popis: 'Gewünschter früherer Austritt', napoveda: 'Nur gültig, wenn der Arbeitgeber schriftlich zustimmt.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'art', je: 'aufhebung' } },
        {
          id: 'bitten',
          typ: 'vice',
          popis: 'Was möchten Sie zusätzlich? (optional)',
          napoveda: 'Das Arbeitszeugnis können Sie jederzeit verlangen. Eine Empfangsbestätigung schützt Sie, falls die Frist umstritten ist.',
          moznosti: [
            { hodnota: 'bestaetigung', popis: 'Schriftliche Bestätigung von Empfang und Enddatum' },
            { hodnota: 'zeugnis', popis: 'Arbeitszeugnis (Art. 330a OR)' },
            { hodnota: 'ferien', popis: 'Aufstellung von Restferien und Überstunden' },
            { hodnota: 'dank', popis: 'Dank für die Zusammenarbeit' },
          ],
        },
        { id: 'misto', typ: 'text', popis: 'Ort', napoveda: 'Wir übernehmen den Ort aus Ihrer Adresse.', placeholder: 'z. B. Zürich', sirka: 18, polovina: true, vychozi: { obecZ: 'an_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', napoveda: 'Heute vorausgefüllt. Massgebend für die Frist ist aber der Empfang beim Arbeitgeber.', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  clanky: [
    {
      nadpis: 'Absender',
      vysvetleni: 'Wer kündigt.',
      odstavce: ['{{an_jmeno}}, {{an_adresa}}'],
    },
    {
      nadpis: 'An',
      vysvetleni: 'Der Arbeitgeber laut Arbeitsvertrag.',
      odstavce: ['{{ag_nazev}}, z. H. {{ag_osoba}}, {{ag_adresa}}'],
    },
    {
      nadpis: 'Kündigung des Arbeitsverhältnisses',
      vysvetleni: 'Die eigentliche Kündigung. Eine Begründung braucht es nicht.',
      odstavce: [
        'Sehr geehrte Damen und Herren',
        {
          volba: 'art',
          uvodVzor: 'Variante (eine ankreuzen):',
          moznosti: {
            probezeit: 'Hiermit kündige ich, {{an_jmeno}} ({{an_funkce}}, Personalnummer {{an_cislo}}), mein Arbeitsverhältnis gemäss Arbeitsvertrag vom {{vertrag_datum}} während der Probezeit unter Einhaltung der Kündigungsfrist auf den {{ende}}, eventualiter auf den nächstmöglichen Termin.',
            ordentlich: 'Hiermit kündige ich, {{an_jmeno}} ({{an_funkce}}, Personalnummer {{an_cislo}}), mein Arbeitsverhältnis gemäss Arbeitsvertrag vom {{vertrag_datum}} unter Einhaltung der vertraglichen bzw. gesetzlichen Kündigungsfrist auf den {{ende}}, eventualiter auf den nächstmöglichen Termin.',
            aufhebung: 'Hiermit kündige ich, {{an_jmeno}} ({{an_funkce}}, Personalnummer {{an_cislo}}), mein Arbeitsverhältnis gemäss Arbeitsvertrag vom {{vertrag_datum}} unter Einhaltung der vertraglichen bzw. gesetzlichen Kündigungsfrist auf den {{ende}}, eventualiter auf den nächstmöglichen Termin. Gleichzeitig schlage ich vor, das Arbeitsverhältnis im gegenseitigen Einvernehmen bereits per {{wunsch_ende}} aufzulösen. Ohne Ihre schriftliche Zustimmung gilt die ordentliche Kündigung.',
          },
        },
        {
          vice: 'bitten',
          uvod: 'Zudem bitte ich Sie um:',
          moznosti: {
            bestaetigung: 'eine schriftliche Bestätigung des Empfangs dieser Kündigung und des Enddatums',
            zeugnis: 'ein Arbeitszeugnis über Art und Dauer des Arbeitsverhältnisses sowie über meine Leistungen und mein Verhalten (Art. 330a OR)',
            ferien: 'eine Aufstellung meiner Restferien und Überstunden und einen Vorschlag, wie diese bis zum Austritt bezogen oder abgegolten werden',
            dank: 'Verständnis für meinen Entscheid. Ich danke Ihnen für die gute Zusammenarbeit und das entgegengebrachte Vertrauen',
          },
        },
        'Freundliche Grüsse',
      ],
    },
  ],
});
