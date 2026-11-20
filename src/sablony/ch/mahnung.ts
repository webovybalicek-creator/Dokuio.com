/**
 * Mahnung – Schweiz. Art. 102 OR (Verzug durch Mahnung nach Fälligkeit; ohne Mahnung bei Verfalltag),
 * Art. 104 OR (Verzugszins 5 % pro Jahr). Danach Betreibung nach SchKG.
 */
import type { Sablona } from '../typy';
import { mahnung as de } from '../de/mahnung';
import { nahrad } from '../nahrad';
import { schweiz, betragInFranken, paticka } from './schweiz';
import { OR_102, OR_104 } from './quellen';

const z = nahrad(de, [
  ['Zahlungsaufforderung nach §§ 286, 288 des Bürgerlichen Gesetzbuchs (BGB)', 'Zahlungsaufforderung nach Art. 102 und 104 Obligationenrecht (OR)'],
  ['Mit Zugang dieser Mahnung befinden Sie sich in Verzug, sofern Verzug nicht bereits eingetreten ist. Ich behalte mir vor, Verzugszinsen in gesetzlicher Höhe (§ 288 BGB) sowie weiteren Verzugsschaden geltend zu machen.', 'Mit dieser Mahnung befinden Sie sich in Verzug, sofern Verzug nicht bereits eingetreten ist. Ich mache den gesetzlichen Verzugszins von 5 % pro Jahr geltend (Art. 104 OR).'],
  ['das gerichtliche Mahnverfahren einleiten oder Klage erheben', 'die Betreibung einleiten'],
  ['Offener Betrag (€)', 'Offener Betrag (CHF)'],
  ['DE12 3456 7890 1234 5678 90', 'CH12 3456 7890 1234 5678 9'],
  ['z. B. Lindenstraße 5, 10115 Berlin', 'z. B. Bahnhofstrasse 10, 8001 Zürich'],
  ['z. B. Hauptstraße 1, 80331 München', 'z. B. Marktgasse 1, 3011 Bern'],
  ['z. B. Berlin', 'z. B. Zürich'],
]);

export const mahnungCH: Sablona = schweiz({
  ...z,
  kod: 'CH-MAHNUNG',
  paticka: paticka('CH-MAHNUNG').replace('für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen', 'für den Inhalt ist der Absender verantwortlich'),
  kroky: z.kroky.map((k) => ({ ...k, pole: k.pole.filter((p) => p.id !== 'p_typ') })),
  clanky: z.clanky.map((c) => ({ ...c, odstavce: c.odstavce.filter((o) => !(typeof o === 'object' && 'volba' in o && o.volba === 'p_typ')) })),
  odvozene: { betrag_worte: (d) => betragInFranken(d.betrag) },
  pripominky: (d) => (typeof d.zahlen_bis === 'string' && d.zahlen_bis ? [{ nazev: 'Zahlungsfrist aus der Mahnung endet', datum: d.zahlen_bis, popis: 'Zahlungseingang prüfen. Danach ggf. Betreibungsbegehren beim Betreibungsamt.' }] : []),
  coDal: [
    'Unterschreiben und eingeschrieben versenden – so können Sie den Zugang beweisen.',
    'Eine Kopie und den Postbeleg aufbewahren.',
    'Zahlt die Gegenseite nicht, können Sie beim Betreibungsamt am Wohnsitz der Schuldnerin/des Schuldners die Betreibung einleiten.',
  ],
  kontrola: [
    'Die Mahnung setzt die Schuldnerin/den Schuldner erst nach Fälligkeit in Verzug ([Art. 102 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_102)). War ein bestimmter Verfalltag vereinbart, tritt Verzug ohne Mahnung ein.',
    'Verzugszins für Geldschulden: 5 % pro Jahr, auch wenn ein tieferer Vertragszins vereinbart war ([Art. 104 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_104)).',
    'Forderung genau bezeichnen: Rechnungsnummer oder Vertrag, Datum, Betrag.',
    'Eingeschrieben versenden – im Streit müssen Sie den Zugang nachweisen.',
    'Nur mit rechtlich zulässigen Schritten drohen (Betreibung) – keine Bloßstellung oder sonstigen Druck.',
  ],
  zdroje: [OR_102, OR_104],
});
