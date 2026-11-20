/** Erklärung – Schweiz. Allgemeine private Erklärung; keine besondere Form vorgeschrieben. */
import type { Sablona } from '../typy';
import { erklaerung as de } from '../de/erklaerung';
import { nahrad } from '../nahrad';
import { schweiz, paticka } from './schweiz';
import { OR } from './quellen';

export const erklaerungCH: Sablona = schweiz({
  ...nahrad(de, [
    ['Dies ist keine eidesstattliche Versicherung. Verlangt eine Behörde oder ein Gericht eine Versicherung an Eides statt, nutzen Sie deren Formular.', 'Verlangt eine Behörde oder ein Gericht eine bestimmte Form, nutzen Sie deren Formular.'],
    ['z. B. Lindenstraße 5, 10115 Berlin', 'z. B. Bahnhofstrasse 10, 8001 Zürich'],
    ['Lindenstraße 5 in Berlin', 'Bahnhofstrasse 10 in Zürich'],
    ['z. B. Berlin', 'z. B. Zürich'],
  ]),
  kod: 'CH-ERKLAERUNG',
  paticka: paticka('CH-ERKLAERUNG').replace('für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen', 'für die Richtigkeit ist die erklärende Person verantwortlich'),
  zdroje: [OR],
});
