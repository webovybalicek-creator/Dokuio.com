/**
 * Mietvertrag Wohnung – Österreich. ABGB §§ 1090 ff. und Mietrechtsgesetz (MRG, Voll- oder Teilanwendung).
 * Befristung bei privatem Vermieter mindestens drei Jahre (§ 29 MRG); Mieter kann nach einem Jahr mit drei Monaten
 * zum Monatsletzten kündigen. Kaution verzinslich anzulegen (§ 16b MRG). Wertsicherung nach MieWeG (ab 2026).
 * Richtwert-/Kategoriemietzins-Grenzen im Vollanwendungsbereich: Hinweis in der Kontrolle.
 */
import type { Sablona } from '../typy';
import { mietvertragWohnung as de } from '../de/mietvertrag-wohnung';
import { naDatum, isoDatum } from '../terminy';
import { ABGB, MRG, OEGV_MIETE } from './quellen';
import { nahrad, MUSTER_AT } from '../nahrad';

export const mietvertragWohnungAT: Sablona = nahrad({
  ...de,
  kod: 'AT-MIETVERTRAG',
  verze: '1.1',
  aktualizovano: '2026-11-20',
  zeme: 'at',
  nazev: 'Mietvertrag über eine Wohnung',
  podnadpis: 'nach §§ 1090 ff. ABGB und dem Mietrechtsgesetz (MRG)',
  paticka: 'Kostenlos erstellt · Vorlage AT-MIETVERTRAG v1.1 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  pripominky: (d) => {
    const out = de.pripominky ? de.pripominky(d) : [];
    const ende = d.dauer === 'befristet' ? naDatum(d.ende) : undefined;
    if (ende) out.push({ nazev: 'Ende des befristeten Mietvertrags', datum: isoDatum(ende) });
    return out;
  },
  coDal: [
    'Zwei Exemplare ausdrucken, beide Seiten unterschreiben beide.',
    'Bei der Übergabe ein Übergabeprotokoll mit Zählerständen und Fotos erstellen.',
    'Mieter: innerhalb von drei Tagen nach Einzug den Hauptwohnsitz am Meldeamt anmelden; der Vermieter unterschreibt den Meldezettel.',
    'Vermieter: die Kaution fruchtbringend und getrennt anlegen (z. B. Sparbuch oder Kautionskonto).',
  ],
  kontrola: [
    'Klären Sie, ob das Mietrechtsgesetz voll gilt (z. B. Altbau vor 1945): Dann ist der Mietzins gesetzlich begrenzt (Richtwert- oder Kategoriemietzins). Im Teil- oder Nichtanwendungsbereich ist der Mietzins frei vereinbar.',
    'Ein befristeter Mietvertrag muss schriftlich sein und mindestens drei Jahre dauern (privater Vermieter), sonst gilt er als unbefristet (§ 29 MRG).',
    'Der Mieter kann einen befristeten Vertrag nach einem Jahr mit dreimonatiger Frist zum Monatsletzten kündigen – das lässt sich nicht ausschließen.',
    'Die Kaution ist gesetzlich nicht gedeckelt; üblich sind bis zu drei Bruttomonatsmieten. Der Vermieter muss sie verzinst anlegen und nach Ende samt Zinsen zurückzahlen (§ 16b MRG).',
    'Wertsicherung: seit 2026 begrenzt das Mieten-Wertsicherungsgesetz die jährlichen Erhöhungen (Anpassung einmal jährlich zum 1. April).',
    'Die Vertragsgebühr für Wohnungsmietverträge ist abgeschafft.',
  ],
  zdroje: [ABGB, MRG, OEGV_MIETE],
  kroky: de.kroky.map((k) =>
    k.id === 'zahlung'
      ? {
          ...k,
          nazev: 'Mietdauer, Mietzins und Kaution',
          pole: [
            { id: 'dauer', typ: 'volba', popis: 'Mietdauer', napoveda: 'Befristet: mindestens drei Jahre.', moznosti: [ { hodnota: 'unbefristet', popis: 'Unbefristet' }, { hodnota: 'befristet', popis: 'Befristet (mind. 3 Jahre)' } ] },
            ...k.pole.filter((p) => !['verzicht', 'verzicht_jahre', 'heizkosten', 'faellig'].includes(p.id)).flatMap((p) =>
              p.id === 'beginn'
                ? [p, { id: 'ende', typ: 'datum' as const, popis: 'Mietende', napoveda: 'Mindestens drei Jahre nach Beginn.', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'dauer', je: 'befristet' } }]
                : p.id === 'miete'
                  ? [{ ...p, popis: 'Hauptmietzins (€ monatlich, netto)', napoveda: 'Ohne Betriebskosten und Umsatzsteuer.' }]
                  : p.id === 'nebenkosten'
                    ? [{ ...p, popis: 'Betriebskosten-Akonto (€ monatlich)', napoveda: 'Betriebskosten und Abgaben, jährlich abgerechnet.' }, { id: 'faellig', typ: 'cislo' as const, popis: 'Fällig bis (Tag im Monat)', napoveda: 'Üblich: bis zum 5. des Monats im Voraus.', placeholder: 'z. B. 5', sirka: 4, polovina: true }]
                    : p.id === 'kaution'
                      ? [{ ...p, napoveda: 'Üblich bis zu drei Bruttomonatsmieten.' }]
                      : [p],
            ),
          ],
        }
      : k,
  ),
  clanky: [
    de.clanky[0],
    de.clanky[1],
    {
      nadpis: 'Mietdauer',
      odstavce: [
        { volba: 'dauer', uvodVzor: 'Mietdauer (bitte ankreuzen):', moznosti: { unbefristet: 'Das Mietverhältnis beginnt am {{beginn}} und wird auf unbestimmte Zeit geschlossen.', befristet: 'Das Mietverhältnis beginnt am {{beginn}} und endet am {{ende}}, ohne dass es einer Kündigung bedarf (§ 29 Abs. 1 Z 3 MRG).' } },
        'Die Übergabe der Wohnung erfolgt am {{uebergabe}}. Ist der Vertrag befristet, kann der Mieter ihn nach Ablauf eines Jahres unter Einhaltung einer dreimonatigen Kündigungsfrist zum Monatsletzten schriftlich kündigen.',
      ],
    },
    {
      nadpis: 'Mietzins und Betriebskosten',
      odstavce: [
        'Der monatliche Hauptmietzins beträgt {{miete}} (in Worten: {{miete_worte}}), zuzüglich der gesetzlichen Umsatzsteuer, soweit diese anfällt.',
        'Daneben zahlt der Mieter ein monatliches Akonto auf die Betriebskosten und öffentlichen Abgaben von {{nebenkosten}}, das jährlich abgerechnet wird.',
        'Der Mietzins samt Akonto ist monatlich im Voraus bis zum {{faellig}}. des Monats auf das Konto IBAN {{iban}} zu zahlen.',
        'Der Hauptmietzins ist wertgesichert gemäß § 1 Abs. 2 Mieten-Wertsicherungsgesetz (MieWeG) und gegebenenfalls § 1 Abs. 3 MieWeG.',
      ],
    },
    {
      nadpis: 'Kaution',
      odstavce: [
        'Der Mieter leistet bei Übergabe eine Kaution von {{kaution}} (in Worten: {{kaution_worte}}).',
        'Der Vermieter legt die Kaution fruchtbringend und getrennt von seinem Vermögen an und zahlt sie nach Ende des Mietverhältnisses samt Zinsen zurück, soweit keine berechtigten Forderungen aus dem Mietverhältnis bestehen (§ 16b MRG).',
      ],
    },
    {
      nadpis: 'Nutzung der Wohnung',
      odstavce: [
        'Der Mieter behandelt die Wohnung pfleglich und meldet ernste Schäden unverzüglich. Wesentliche Veränderungen bedürfen der Zustimmung des Vermieters.',
        'Die gänzliche Weitergabe der Wohnung an Dritte (Untermiete) bedarf der Zustimmung des Vermieters.',
        { volba: 'tiere', uvodVzor: 'Haustiere (bitte ankreuzen):', moznosti: { erlaubt: 'Die Haltung üblicher Haustiere ist gestattet, soweit Mitbewohner nicht beeinträchtigt und die Wohnung nicht beschädigt wird.', zustimmung: 'Die Haltung von Hunden und Katzen bedarf der Zustimmung des Vermieters. Kleintiere in Käfigen und Aquarien sind erlaubt.' } },
      ],
    },
    {
      nadpis: 'Kündigung und Rückgabe',
      odstavce: [
        'Ein unbefristeter Vertrag kann vom Mieter schriftlich unter Einhaltung einer Kündigungsfrist von einem Monat zum Monatsletzten gekündigt werden. Der Vermieter kann nur aus den im MRG genannten wichtigen Gründen gerichtlich kündigen.',
        'Bei Ende des Mietverhältnisses gibt der Mieter die Wohnung geräumt, in dem Zustand, in dem er sie übernommen hat (abzüglich gewöhnlicher Abnützung), mit allen Schlüsseln zurück.',
      ],
    },
    {
      nadpis: 'Schlussbestimmungen',
      odstavce: [
        'Im Übrigen gelten die Bestimmungen des ABGB und, soweit anwendbar, des Mietrechtsgesetzes.',
        'Änderungen bedürfen der Schriftform. Der Vertrag wird zweifach ausgefertigt; jede Partei erhält ein Exemplar.',
      ],
    },
  ],
}, MUSTER_AT);
