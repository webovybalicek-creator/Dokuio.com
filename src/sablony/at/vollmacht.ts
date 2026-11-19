/** Vollmacht (allgemein) – Österreich. §§ 1002 ff. ABGB. Abgeleitet von der deutschen Vorlage. */
import type { Sablona } from '../typy';
import { vollmacht as de } from '../de/vollmacht';
import { TIPP_IDENTITAET } from '../de/quellen';
import { ABGB } from './quellen';

export const vollmachtAT: Sablona = {
  ...de,
  kod: 'AT-VOLLMACHT',
  zeme: 'at',
  podnadpis: 'nach §§ 1002 ff. des Allgemeinen bürgerlichen Gesetzbuchs (ABGB)',
  paticka: de.paticka.replace('DE-VOLLMACHT', 'AT-VOLLMACHT'),
  kontrola: [
    'Umfang konkret beschreiben – was genau darf die Person tun. Zu allgemeine Vollmachten werden oft abgelehnt.',
    'Für Liegenschaften, Banken, Gerichte oder Behörden gelten oft besondere Formen (Beglaubigung, eigene Formulare). Vorher nachfragen.',
    'Eine Vorsorgevollmacht (für Krankheit oder Alter) ist etwas anderes und wird vor Notar, Anwalt oder Erwachsenenschutzverein errichtet.',
    TIPP_IDENTITAET,
  ],
  zdroje: [ABGB],
  kroky: de.kroky.map((k) => ({ ...k, pole: k.pole.map((p) => (p.id === 'rozsah' ? { ...p, placeholder: 'z. B. Abholung eines an mich adressierten RSa-Briefs in der Postfiliale 1010 Wien' } : p)) })),
};
