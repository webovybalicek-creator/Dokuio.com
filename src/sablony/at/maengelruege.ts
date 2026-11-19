/**
 * Mängelrüge / Gewährleistung beim Unternehmer – Österreich. Verbrauchergewährleistungsgesetz (VGG): 2 Jahre Gewährleistungsfrist,
 * Vermutung der Mangelhaftigkeit im ersten Jahr (§ 11 VGG), Verjährung 3 Monate nach Ablauf (§ 28 VGG); Wahl Verbesserung oder Austausch.
 */
import type { Sablona } from '../typy';
import { maengelanzeige as de } from '../de/maengelanzeige';
import { ABGB, WKO_VGG } from './quellen';

export const maengelruegeAT: Sablona = {
  ...de,
  kod: 'AT-MAENGEL',
  zeme: 'at',
  nazev: 'Mängelrüge',
  podnadpis: 'Geltendmachung der Gewährleistung nach dem Verbrauchergewährleistungsgesetz (VGG)',
  souborPdf: 'maengelruege',
  paticka: de.paticka.replace('DE-MAENGEL', 'AT-MAENGEL'),
  slovo: { n: 'Mängelrüge', g: 'Mängelrüge', a: 'Mängelrüge', l: 'Mängelrüge' },
  coDal: [
    'Mängelrüge mit Kaufbeleg im Geschäft abgeben oder per E-Mail/Einschreiben an den Online-Händler senden – Nachweis aufheben.',
    'Klappt Verbesserung oder Austausch nicht, können Sie Preisminderung oder Vertragsauflösung verlangen.',
    'Wichtig: Die Rechte verjähren drei Monate nach Ablauf der zweijährigen Gewährleistungsfrist – bei Streit rechtzeitig klagen. Hilfe gibt die Arbeiterkammer.',
  ],
  kontrola: [
    'Die Gewährleistungsfrist beträgt zwei Jahre ab Übergabe; bei gebrauchten Sachen kann sie auf ein Jahr verkürzt sein.',
    'Zeigt sich der Mangel innerhalb eines Jahres, wird vermutet, dass er schon bei Übergabe vorhanden war ([WKO](https://www.wko.at/gewerberecht/vgg-uebersicht-gewaehrleistung-warenkauf-ab-2022)).',
    'Zuerst Verbesserung (Reparatur) oder Austausch nach Ihrer Wahl; Preisminderung oder Auflösung erst, wenn das nicht klappt oder unzumutbar ist.',
    'Gewährleistung gilt gegenüber dem Händler. Eine Herstellergarantie ist freiwillig und kommt zusätzlich.',
    'Mangel konkret beschreiben und fotografieren, Kaufbeleg aufbewahren.',
  ],
  zdroje: [WKO_VGG, ABGB],
  clanky: de.clanky.map((c) =>
    c.nadpis === 'Mängelanzeige'
      ? {
          ...c,
          nadpis: 'Mängelrüge',
          odstavce: c.odstavce.map((o) =>
            typeof o === 'object' && 'volba' in o
              ? { ...o, uvod: 'Ich mache Gewährleistung geltend und verlange', uvodVzor: 'Ich mache Gewährleistung geltend und verlange (ankreuzen):', moznosti: { oprava: 'die Verbesserung (Reparatur).', vymena: 'den Austausch gegen eine mangelfreie Sache.' } }
              : typeof o === 'string'
                ? o.replace('vom Vertrag zurückzutreten oder den Kaufpreis zu mindern sowie Schadensersatz zu verlangen', 'Preisminderung oder die Auflösung des Vertrags zu verlangen').replace('Mängelanzeige', 'Mängelrüge')
                : o,
          ),
        }
      : c,
  ),
};
