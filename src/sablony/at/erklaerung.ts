/** Erklärung – Österreich. Allgemeine private Erklärung; keine besondere Form vorgeschrieben. */
import type { Sablona } from '../typy';
import { erklaerung as de } from '../de/erklaerung';
import { nahrad } from '../nahrad';
import { ABGB } from './quellen';

export const erklaerungAT: Sablona = {
  ...nahrad(de, [
    ['DE-ERKLAERUNG', 'AT-ERKLAERUNG'],
    ['Dies ist keine eidesstattliche Versicherung. Verlangt eine Behörde oder ein Gericht eine Versicherung an Eides statt, nutzen Sie deren Formular.', 'Verlangt eine Behörde oder ein Gericht eine bestimmte Form (z. B. eine Erklärung vor der Behörde), nutzen Sie deren Formular.'],
    ['z. B. Lindenstraße 5, 10115 Berlin', 'z. B. Mariahilfer Straße 10, 1060 Wien'],
    ['Lindenstraße 5 in Berlin', 'Mariahilfer Straße 10 in Wien'],
    ['z. B. Berlin', 'z. B. Wien'],
    ['unterschreiben Sie erst vor dem Notar.', 'unterschreiben Sie erst vor dem Notar oder beim Bezirksgericht.'],
  ]),
  zeme: 'at',
  zdroje: [ABGB],
};
