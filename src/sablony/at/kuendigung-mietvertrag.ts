/**
 * Kündigung des Mietvertrags durch den Mieter – Österreich. Schriftlich (§ 33 MRG).
 * Unbefristet: ein Monat zum Monatsletzten (falls nichts anderes vereinbart). Befristet (MRG): nach einem Jahr,
 * drei Monate zum Monatsletzten (§ 29 Abs. 2 MRG).
 */
import type { Sablona } from '../typy';
import { naDatum, isoDatum, pridejDny } from '../terminy';
import { kuendigungMietvertrag as de } from '../de/kuendigung-mietvertrag';
import { MRG, ABGB, OEGV_KUENDIGUNG_MIETER } from './quellen';
import { nahrad, MUSTER_AT } from '../nahrad';

export const kuendigungMietvertragAT: Sablona = nahrad({
  ...de,
  kod: 'AT-KUENDIGUNG-MIETE',
  verze: '1.1',
  aktualizovano: '2026-11-20',
  zeme: 'at',
  podnadpis: 'Kündigung durch den Mieter nach dem Mietrechtsgesetz (MRG)',
  paticka: 'Kostenlos erstellt · Vorlage AT-KUENDIGUNG-MIETE v1.1 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  pripominky: (d) => {
    const z = naDatum(d.datum);
    if (!z) return [];
    const monate = d.art === 'befristet' ? 3 : 1;
    const ende = new Date(z.getFullYear(), z.getMonth() + monate + 1, 0);
    return [
      { nazev: 'Mietende nach Kündigung (ca.)', datum: isoDatum(ende), popis: 'Bei Zugang am Tag der Unterschrift.' },
      { nazev: 'Wohnungsrückgabe vereinbaren', datum: isoDatum(pridejDny(ende, -14)) },
    ];
  },
  coDal: [
    'Eigenhändig unterschreiben und nachweisbar zustellen – eingeschrieben oder persönlich gegen Bestätigung.',
    'Entscheidend ist der Zugang beim Vermieter vor Beginn der Kündigungsfrist.',
    'Übergabetermin vereinbaren und ein Übergabeprotokoll erstellen.',
  ],
  kontrola: [
    'Der Mieter muss schriftlich kündigen (§ 33 MRG). E-Mail reicht nicht.',
    'Unbefristeter Vertrag: Wenn nichts anderes vereinbart ist, beträgt die Frist einen Monat zum Monatsletzten.',
    'Befristeter Vertrag: Kündigung frühestens nach Ablauf eines Jahres, mit dreimonatiger Frist zum Monatsletzten. Die Kündigung darf schon im ersten Jahr abgegeben werden, die Frist läuft aber erst danach.',
    'Alle Mieter unterschreiben.',
  ],
  zdroje: [MRG, ABGB, OEGV_KUENDIGUNG_MIETER],
  kroky: de.kroky.map((k) =>
    k.id === 'miete'
      ? { ...k, pole: [k.pole[0], k.pole[1], { id: 'art', typ: 'volba', popis: 'Der Vertrag ist', napoveda: 'Steht im Mietvertrag.', moznosti: [ { hodnota: 'unbefristet', popis: 'Unbefristet' }, { hodnota: 'befristet', popis: 'Befristet' } ] }, ...k.pole.slice(2)] }
      : k,
  ),
  clanky: [
    de.clanky[0],
    {
      nadpis: 'Kündigung des Mietvertrags',
      odstavce: [
        'Hiermit kündige ich, {{m_name}} (Kontakt: {{m_kontakt}}), den Mietvertrag vom {{vertrag_datum}} über die Wohnung {{wohnung}}.',
        { volba: 'art', uvodVzor: 'Frist (bitte ankreuzen):', moznosti: { unbefristet: 'Die Kündigung erfolgt unter Einhaltung der vereinbarten bzw. gesetzlichen Kündigungsfrist von einem Monat zum nächstmöglichen Monatsletzten.', befristet: 'Die Kündigung des befristeten Mietvertrags erfolgt gemäß § 29 Abs. 2 MRG unter Einhaltung einer dreimonatigen Kündigungsfrist zum nächstmöglichen Monatsletzten.' } },
        'Bitte bestätigen Sie mir den Erhalt und das Ende des Mietverhältnisses schriftlich und nennen Sie mir einen Termin für die Wohnungsrückgabe. Die Kaution samt Zinsen bitte ich auf das Konto IBAN {{iban}} zu überweisen.',
      ],
    },
  ],
}, MUSTER_AT);
