/**
 * Mängelanzeige / Reklamation beim Händler – Deutschland (Verbrauchsgüterkauf).
 * § 437 BGB (Rechte), § 439 BGB (Nacherfüllung: Wahl Reparatur oder Ersatz), § 438 BGB (2 Jahre), § 477 BGB (Beweislastumkehr 1 Jahr).
 * Kein gesetzliches Bearbeitungsziel wie in CZ – daher angemessene Frist setzen.
 */
import type { Sablona } from '../typy';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { formatDatum } from '../dokument';
import { BGB_437, BGB_438, BGB_439, BGB_477 } from './quellen';

export const maengelanzeige: Sablona = {
  kod: 'DE-MAENGEL',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Mängelanzeige',
  podnadpis: 'Geltendmachung von Gewährleistungsrechten nach §§ 437 ff. BGB',
  souborPdf: 'maengelanzeige',
  paticka: 'Kostenlos erstellt · Vorlage DE-MAENGEL v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum',
  podpisy: { vlevo: 'Käufer/in', vpravo: 'Erhalten für den Händler (Datum, Unterschrift)' },
  slovo: { n: 'Mängelanzeige', g: 'Mängelanzeige', a: 'Mängelanzeige', l: 'Mängelanzeige' },
  cislovatClanky: false,
  cislovatOdstavce: false,
  pripominky: (d) => {
    const od = naDatum(d.datum);
    const tage = Number(d.lhuta) || 14;
    return od ? [{ nazev: 'Frist zur Nacherfüllung läuft ab', datum: isoDatum(pridejDny(od, tage)), popis: 'Ohne Reparatur oder Ersatz bis dahin können Sie zurücktreten oder den Preis mindern.' }] : [];
  },
  coDal: [
    'Mängelanzeige mit Kaufbeleg im Laden abgeben oder per E-Mail/Einschreiben an den Online-Händler senden – Nachweis aufheben.',
    'Ware auf Verlangen zur Prüfung bereitstellen; die Kosten der Nacherfüllung trägt der Händler.',
    'Läuft die Frist ohne Ergebnis ab, können Sie vom Vertrag zurücktreten oder den Preis mindern. Hilfe gibt die Verbraucherzentrale.',
  ],
  kontrola: [
    'Mängelrechte bestehen zwei Jahre ab Übergabe ([§ 438 BGB](https://www.gesetze-im-internet.de/bgb/__438.html)); bei gebrauchten Sachen kann der Händler sie auf ein Jahr verkürzen.',
    'Zeigt sich der Mangel innerhalb eines Jahres, wird vermutet, dass er schon bei Übergabe da war ([§ 477 BGB](https://www.gesetze-im-internet.de/bgb/__477.html)).',
    'Zuerst steht Ihnen Nacherfüllung zu – Reparatur oder neue Ware nach Ihrer Wahl ([§ 439 BGB](https://www.gesetze-im-internet.de/bgb/__439.html)). Rücktritt oder Minderung meist erst, wenn sie scheitert.',
    'Gewährleistung gilt gegenüber dem Händler, nicht dem Hersteller. Eine Herstellergarantie ist freiwillig und kommt zusätzlich.',
    'Mangel konkret beschreiben und fotografieren, Kaufbeleg aufbewahren (auch Kontoauszug oder Bestellbestätigung).',
  ],
  zdroje: [BGB_437, BGB_438, BGB_439, BGB_477],
  kroky: [
    {
      id: 'haendler',
      nazev: 'Händler',
      pole: [
        { id: 'pr_nazev', typ: 'text', popis: 'Händler (Firmenname)', sirka: 34 },
        { id: 'pr_adresa', typ: 'text', popis: 'Anschrift', sirka: 46 },
      ],
    },
    {
      id: 'ware',
      nazev: 'Ware und Mangel',
      pole: [
        { id: 'zbozi', typ: 'text', popis: 'Ware', placeholder: 'z. B. Waschmaschine Bosch WAN28264, Seriennr. FD9803', sirka: 46 },
        { id: 'doklad', typ: 'text', popis: 'Rechnungs- oder Bestellnummer', sirka: 18, polovina: true },
        { id: 'koupeno', typ: 'datum', popis: 'Gekauft / erhalten am', sirka: 14, polovina: true },
        { id: 'vada', typ: 'textarea', popis: 'Beschreibung des Mangels', placeholder: 'z. B. bleibt beim Schleudern mit Fehler E18 stehen', sirka: 64 },
        { id: 'projevila', typ: 'datum', popis: 'Mangel bemerkt am', sirka: 14, polovina: true },
      ],
    },
    {
      id: 'forderung',
      nazev: 'Was Sie verlangen',
      pole: [
        {
          id: 'pozadavek',
          typ: 'volba',
          popis: 'Nacherfüllung',
          moznosti: [
            { hodnota: 'oprava', popis: 'Reparatur' },
            { hodnota: 'vymena', popis: 'Lieferung einer neuen, mangelfreien Sache' },
          ],
        },
        { id: 'lhuta', typ: 'cislo', popis: 'Frist in Tagen', napoveda: 'Üblich und angemessen sind meist 14 Tage.', placeholder: '14', sirka: 4, polovina: true },
        { id: 'p_jmeno', typ: 'text', popis: 'Ihr Vor- und Nachname', sirka: 34, autocomplete: 'name' },
        { id: 'p_adresa', typ: 'text', popis: 'Ihre Anschrift', sirka: 46 },
        { id: 'p_kontakt', typ: 'text', popis: 'E-Mail oder Telefon', sirka: 30 },
        { id: 'misto', typ: 'text', popis: 'Ort', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],
  odvozene: {
    frist_bis: (d) => {
      const od = naDatum(d.datum);
      if (!od) return '';
      return formatDatum(isoDatum(pridejDny(od, Number(d.lhuta) || 14)));
    },
  },
  clanky: [
    { nadpis: 'An', odstavce: ['{{pr_nazev}}, {{pr_adresa}}'] },
    {
      nadpis: 'Mängelanzeige',
      vysvetleni: 'Was mangelhaft ist und was Sie verlangen.',
      odstavce: [
        'Am {{koupeno}} habe ich bei Ihnen folgende Ware gekauft: {{zbozi}} (Beleg-Nr. {{doklad}}).',
        'Die Ware ist mangelhaft: {{vada}} Den Mangel habe ich am {{projevila}} bemerkt.',
        {
          volba: 'pozadavek',
          uvod: 'Ich verlange gemäß § 439 BGB Nacherfüllung durch',
          uvodVzor: 'Ich verlange gemäß § 439 BGB Nacherfüllung durch (ankreuzen):',
          moznosti: { oprava: 'Beseitigung des Mangels (Reparatur).', vymena: 'Lieferung einer mangelfreien Sache.' },
        },
        'Hierfür setze ich Ihnen eine Frist bis zum {{frist_bis}}. Nach erfolglosem Fristablauf behalte ich mir vor, vom Vertrag zurückzutreten oder den Kaufpreis zu mindern sowie Schadensersatz zu verlangen.',
        'Bitte bestätigen Sie mir den Eingang dieser Mängelanzeige.',
      ],
    },
    { nadpis: 'Käufer/in', odstavce: ['{{p_jmeno}}, {{p_adresa}}, Kontakt: {{p_kontakt}}'] },
  ],
};
