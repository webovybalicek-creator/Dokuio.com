/**
 * Kündigung des Mietvertrags durch den Mieter – Schweiz. Schriftform (Art. 266l OR), Frist drei Monate auf einen
 * ortsüblichen bzw. vertraglichen Termin (Art. 266c OR). Familienwohnung: beide Ehegatten unterschreiben (Art. 266m OR).
 */
import type { Sablona } from '../typy';
import { naDatum, isoDatum, pridejDny } from '../terminy';
import { kuendigungMietvertrag as de } from '../de/kuendigung-mietvertrag';
import { schweiz, paticka } from './schweiz';
import { OR_MIETE, OR_266C, CH_MIETE } from './quellen';

export const kuendigungMietvertragCH: Sablona = schweiz({
  ...de,
  kod: 'CH-KUENDIGUNG-MIETE',
  podnadpis: 'Kündigung durch den Mieter nach Art. 266c OR',
  paticka: paticka('CH-KUENDIGUNG-MIETE'),
  pripominky: (d) => {
    const t = naDatum(d.termin);
    return t ? [{ nazev: 'Mietende', datum: isoDatum(t) }, { nazev: 'Wohnungsabgabe vereinbaren', datum: isoDatum(pridejDny(t, -14)) }] : [];
  },
  coDal: [
    'Eigenhändig unterschreiben und eingeschrieben senden – massgebend ist der Empfang beim Vermieter vor Beginn der Frist.',
    'Bei einer Familienwohnung müssen beide Ehegatten bzw. eingetragenen Partner unterschreiben.',
    'Abgabetermin vereinbaren, Wohnung reinigen und Abnahmeprotokoll erstellen.',
  ],
  kontrola: [
    'Kündigung schriftlich mit eigenhändiger Unterschrift (Art. 266l OR).',
    'Frist mindestens drei Monate auf einen im Vertrag genannten oder ortsüblichen Termin (Art. 266c OR). Prüfen Sie Ihren Mietvertrag.',
    'Familienwohnung: Unterschrift beider Ehegatten nötig (Art. 266m OR).',
    'Ausserterminlicher Auszug: Mit einem zumutbaren, zahlungsfähigen Nachmieter werden Sie von den Pflichten befreit (Art. 264 OR).',
  ],
  zdroje: [OR_MIETE, OR_266C, CH_MIETE],
  kroky: de.kroky.map((k) =>
    k.id === 'miete'
      ? { ...k, pole: [k.pole[0], k.pole[1], { id: 'termin', typ: 'datum', popis: 'Kündigungstermin (Mietende)', napoveda: 'Termin laut Vertrag oder ortsüblich, mindestens drei Monate nach Empfang.', sirka: 14, polovina: true }, ...k.pole.slice(2).map((p) => (p.id === 'iban' ? { ...p, placeholder: 'CH00 0000 0000 0000 0000 0' } : p))] }
      : k,
  ),
  clanky: [
    de.clanky[0],
    {
      nadpis: 'Kündigung des Mietvertrags',
      odstavce: [
        'Hiermit kündige ich, {{m_name}} (Kontakt: {{m_kontakt}}), den Mietvertrag vom {{vertrag_datum}} über die Wohnung {{wohnung}} unter Einhaltung der dreimonatigen Kündigungsfrist auf den {{termin}}, eventualiter auf den nächstmöglichen Termin.',
        'Bitte bestätigen Sie mir den Empfang dieser Kündigung schriftlich und nennen Sie mir einen Termin für die Wohnungsabgabe.',
        'Die Mietkaution bitte ich nach der Abgabe freizugeben bzw. auf das Konto IBAN {{iban}} zu überweisen.',
      ],
    },
  ],
});
