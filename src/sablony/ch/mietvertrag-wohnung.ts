/**
 * Mietvertrag für Wohnräume – Schweiz. Art. 253 ff. OR. Kaution höchstens drei Monatszinse, auf Sperrkonto
 * auf den Namen des Mieters (Art. 257e OR). Nebenkosten nur, wenn besonders vereinbart (Art. 257a OR).
 * Kündigung schriftlich (Art. 266l OR), drei Monate auf einen ortsüblichen Termin (Art. 266c OR);
 * Vermieter kündigt mit amtlichem Formular. In einigen Kantonen Formularpflicht für den Anfangsmietzins (Art. 270 Abs. 2 OR).
 */
import type { Sablona } from '../typy';
import { mietvertragWohnung as de } from '../de/mietvertrag-wohnung';
import { schweiz, betragInFranken, paticka } from './schweiz';
import { OR_MIETE, OR_257E, OR_266C, CH_MIETE, TIPP_IDENTITAET_CH } from './quellen';

export const mietvertragWohnungCH: Sablona = schweiz({
  ...de,
  kod: 'CH-MIETVERTRAG',
  verze: '1.1',
  aktualizovano: '2026-11-20',
  nazev: 'Mietvertrag für Wohnräume',
  podnadpis: 'nach Art. 253 ff. Obligationenrecht (OR)',
  paticka: paticka('CH-MIETVERTRAG', '1.1'),
  coDal: [
    'Zwei Exemplare ausdrucken, beide Seiten unterschreiben beide.',
    'Bei der Übergabe ein Übergabeprotokoll erstellen – Mängel, die nicht im Protokoll stehen, kann der Mieter in den ersten Tagen noch schriftlich melden.',
    'Kaution auf ein Mietkautionskonto (Sperrkonto) auf den Namen des Mieters einzahlen.',
    'Mieter: innert 14 Tagen bei der Einwohnerkontrolle der Gemeinde anmelden.',
  ],
  kontrola: [
    TIPP_IDENTITAET_CH,
    'Die Kaution darf höchstens drei Monatsmietzinse betragen und muss auf ein Sperrkonto auf den Namen des Mieters (Art. 257e OR).',
    'Nebenkosten muss der Mieter nur zahlen, wenn sie im Vertrag einzeln aufgeführt sind (Art. 257a OR). Alles andere ist im Mietzins enthalten.',
    'In einigen Kantonen muss der Anfangsmietzins auf dem amtlichen Formular mitgeteilt werden (Art. 270 Abs. 2 OR) – fragen Sie bei der kantonalen Schlichtungsbehörde nach.',
    'Kündigungsfrist für Wohnungen: mindestens drei Monate auf einen ortsüblichen Termin (Art. 266c OR). Der Vermieter muss mit dem amtlichen Formular kündigen.',
    'Wer ohne Einhaltung der Frist ausziehen will, kann einen zumutbaren Nachmieter vorschlagen (Art. 264 OR).',
  ],
  zdroje: [OR_MIETE, OR_257E, OR_266C, CH_MIETE],
  kroky: de.kroky.map((k) =>
    k.id === 'zahlung'
      ? {
          ...k,
          pole: k.pole
            .filter((p) => !['verzicht', 'verzicht_jahre'].includes(p.id))
            .flatMap((p) =>
              p.id === 'miete'
                ? [{ ...p, popis: 'Nettomietzins (CHF monatlich)', napoveda: 'Mietzins ohne Nebenkosten.' }]
                : p.id === 'nebenkosten'
                  ? [{ ...p, popis: 'Nebenkosten-Akonto (CHF monatlich)', napoveda: 'Nur für im Vertrag aufgeführte Nebenkosten.' }]
                  : p.id === 'heizkosten'
                    ? [{ id: 'nk_liste', typ: 'text' as const, popis: 'Welche Nebenkosten', napoveda: 'Einzeln aufzählen, sonst sind sie im Mietzins enthalten.', placeholder: 'z. B. Heizung, Warmwasser, Treppenhausreinigung, Hauswart', sirka: 64 }]
                    : p.id === 'faellig'
                      ? [{ ...p, popis: 'Fällig bis (Tag im Monat)', napoveda: 'Üblich: im Voraus bis zum letzten Tag des Vormonats oder 1. des Monats.', placeholder: 'z. B. 1' }, { id: 'termine', typ: 'text' as const, popis: 'Kündigungstermine', napoveda: 'Ortsübliche Termine, z. B. Ende jedes Monats ausser Dezember.', placeholder: 'z. B. Ende jedes Monats ausser Dezember', sirka: 46 }]
                      : p.id === 'kaution'
                        ? [{ ...p, popis: 'Kaution (CHF)', napoveda: 'Höchstens drei Monatsmietzinse.' }]
                        : p.id === 'iban'
                          ? [{ ...p, placeholder: 'CH00 0000 0000 0000 0000 0' }]
                          : [p],
            ),
        }
      : k,
  ),
  odvozene: { miete_worte: (d) => betragInFranken(d.miete), kaution_worte: (d) => betragInFranken(d.kaution) },
  podpisy: { vlevo: 'Vermieter/in', vpravo: 'Mieter/in' },
  clanky: [
    de.clanky[0],
    de.clanky[1],
    { nadpis: 'Mietdauer', odstavce: ['Das Mietverhältnis beginnt am {{beginn}} und läuft auf unbestimmte Zeit. Die Übergabe der Wohnung erfolgt am {{uebergabe}}.'] },
    {
      nadpis: 'Mietzins und Nebenkosten',
      odstavce: [
        'Der monatliche Nettomietzins beträgt {{miete}} (in Worten: {{miete_worte}}).',
        'Zusätzlich zahlt der Mieter ein monatliches Akonto von {{nebenkosten}} für folgende Nebenkosten: {{nk_liste}}. Der Vermieter rechnet jährlich ab. Nicht aufgeführte Nebenkosten sind im Mietzins enthalten (Art. 257a OR).',
        'Mietzins und Akonto sind monatlich im Voraus bis zum {{faellig}}. des Monats auf das Konto IBAN {{iban}} zu bezahlen.',
      ],
    },
    {
      nadpis: 'Sicherheitsleistung',
      odstavce: [
        'Der Mieter leistet eine Sicherheit von {{kaution}} (in Worten: {{kaution_worte}}).',
        'Die Sicherheit wird bei einer Bank auf einem Sparkonto oder Depot auf den Namen des Mieters hinterlegt (Art. 257e OR). Die Bank darf sie nur mit Zustimmung beider Parteien oder gestützt auf einen rechtskräftigen Entscheid herausgeben.',
      ],
    },
    {
      nadpis: 'Gebrauch der Wohnung',
      odstavce: [
        'Der Mieter benutzt die Wohnung sorgfältig und meldet Mängel umgehend. Erneuerungen und Änderungen bedürfen der schriftlichen Zustimmung des Vermieters.',
        'Kleine Mängel, die durch gewöhnlichen Unterhalt behoben werden können, beseitigt der Mieter auf eigene Kosten (Art. 259 OR).',
        'Die Untervermietung bedarf der Zustimmung des Vermieters, die er nur aus den Gründen von Art. 262 OR verweigern darf.',
        { volba: 'tiere', uvodVzor: 'Haustiere (bitte ankreuzen):', moznosti: { erlaubt: 'Die Haltung üblicher Haustiere ist gestattet, soweit Mitbewohner nicht gestört und die Wohnung nicht beschädigt wird.', zustimmung: 'Die Haltung von Hunden und Katzen bedarf der Zustimmung des Vermieters. Kleintiere sind erlaubt.' } },
      ],
    },
    {
      nadpis: 'Kündigung und Rückgabe',
      odstavce: [
        'Jede Partei kann den Vertrag unter Einhaltung einer Frist von drei Monaten auf folgende Termine kündigen: {{termine}} (Art. 266c OR). Die Kündigung bedarf der Schriftform; der Vermieter kündigt mit dem amtlich genehmigten Formular (Art. 266l OR).',
        'Bei Mietende gibt der Mieter die Wohnung gereinigt und mit allen Schlüsseln zurück. Für Abnützung bei vertragsgemässem Gebrauch haftet er nicht.',
      ],
    },
    {
      nadpis: 'Schlussbestimmungen',
      odstavce: [
        'Im Übrigen gelten die Bestimmungen des Obligationenrechts (Art. 253 ff. OR).',
        'Änderungen bedürfen der Schriftform. Der Vertrag wird zweifach ausgefertigt; jede Partei erhält ein Exemplar.',
      ],
    },
  ],
});
