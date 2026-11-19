/**
 * Kaufvertrag über ein Occasionsfahrzeug – Schweiz, privat an privat. Art. 184 ff. OR;
 * Gewährleistung Art. 197 ff. OR, Wegbedingung zulässig ausser bei arglistig verschwiegenen Mängeln (Art. 199 OR),
 * sofortige Prüfung und Mängelrüge (Art. 201 OR), Verjährung 2 Jahre (Art. 210 OR).
 * Kontrollschilder gehören dem Halter und bleiben beim Verkäufer; der annullierte Fahrzeugausweis geht an den Käufer.
 * Felder wie in der deutschen Vorlage (für Übernahme in Protokoll und Vollmacht).
 */
import type { Sablona } from '../typy';
import { kaufvertragGebrauchtwagen as de } from '../de/kaufvertrag-gebrauchtwagen';
import { schweiz, betragInFranken, paticka } from './schweiz';
import { OR_184, OR_199, OR_201, OR_210, CH_FAHRZEUGAUSWEIS, ZH_FAHRZEUGWECHSEL, TIPP_IDENTITAET_CH, TIPP_BAR_CH } from './quellen';

const pole = (id: string, zmena: Record<string, unknown>) => (p: { id: string }) => (p.id === id ? { ...p, ...zmena } : p);

export const kaufvertragAutoCH: Sablona = schweiz({
  ...de,
  kod: 'CH-KAUF-AUTO',
  nazev: 'Kaufvertrag über ein Occasionsfahrzeug',
  podnadpis: 'privater Verkauf nach Art. 184 ff. Obligationenrecht (OR)',
  souborPdf: 'kaufvertrag-auto',
  paticka: paticka('CH-KAUF-AUTO'),
  coDal: [
    'Vertrag zweimal ausdrucken, beide Seiten unterschreiben beide Exemplare.',
    'Fahrzeug, Schlüssel und den annullierten Fahrzeugausweis übergeben. Die Kontrollschilder behält der Verkäufer – sie gehören zum Halter, nicht zum Auto.',
    'Verkäufer: Schilder für ein neues Fahrzeug verwenden oder beim Strassenverkehrsamt abgeben und die Versicherung informieren.',
    'Käufer: Fahrzeug mit Versicherungsnachweis und Fahrzeugausweis beim Strassenverkehrsamt seines Kantons einlösen, bevor er damit fährt.',
  ],
  kontrola: [
    'Der Verkäufer ist im Fahrzeugausweis als Halter eingetragen – oder kann belegen, dass ihm das Auto gehört (z. B. Kaufvertrag). Bei Leasing muss die Leasinggesellschaft zustimmen.',
    'Die Fahrgestellnummer im Fahrzeugausweis stimmt mit der am Fahrzeug überein.',
    'Ein Gewährleistungsausschluss ist unter Privaten üblich und zulässig, gilt aber nicht für Mängel, die der Verkäufer arglistig verschweigt ([Art. 199 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_199)). Bekannte Mängel und Unfälle ehrlich eintragen.',
    'Käufer: Das Fahrzeug sofort prüfen und Mängel umgehend melden ([Art. 201 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_201)).',
    'Die Kontrollschilder gehören dem Halter und gehen nicht mit dem Auto mit. Ohne eigene Schilder und Versicherung darf der Käufer nicht fahren.',
    'Wann eine neue Fahrzeugprüfung nötig ist, regelt der Kanton – beim Strassenverkehrsamt nachfragen ([asa.ch](https://asa.ch/)).',
    TIPP_IDENTITAET_CH,
    TIPP_BAR_CH,
  ],
  zdroje: [OR_184, OR_199, OR_201, OR_210, CH_FAHRZEUGAUSWEIS, ZH_FAHRZEUGWECHSEL],
  kroky: de.kroky.map((k) => ({
    ...k,
    popis: k.id === 'fahrzeug' ? 'Angaben aus dem Fahrzeugausweis übernehmen.' : k.popis,
    pole: k.pole
      .map(pole('p_doklad', { popis: 'Pass- oder ID-Nummer' }))
      .map(pole('k_doklad', { popis: 'Pass- oder ID-Nummer' }))
      .map(pole('p_adresa', { placeholder: 'z. B. Musterstrasse 1, 8001 Zürich' }))
      .map(pole('vin', { popis: 'Fahrgestellnummer (FIN/VIN)', napoveda: '17 Zeichen, Feld 23 im Fahrzeugausweis.' }))
      .map(pole('spz', { popis: 'Kontrollschild (beim Verkäufer)', placeholder: 'z. B. ZH 123456' }))
      .map(pole('ez', { popis: '1. Inverkehrsetzung' }))
      .map(pole('zb2', { popis: 'Stammnummer', napoveda: 'Feld 18 im Fahrzeugausweis.', placeholder: 'z. B. 123.456.789' }))
      .map(pole('hu', { popis: 'Letzte Fahrzeugprüfung (MFK)', placeholder: 'z. B. 05/2025' }))
      .map(pole('haftung', {
        popis: 'Gewährleistung',
        napoveda: 'Unter Privaten darf die Gewährleistung wegbedungen werden – nicht aber für arglistig verschwiegene Mängel.',
        moznosti: [
          { hodnota: 'aus', popis: 'Wegbedungen (üblich unter Privaten)' },
          { hodnota: 'gesetz', popis: 'Gesetzliche Gewährleistung' },
        ],
      }))
      .map(pole('cena', { popis: 'Kaufpreis (CHF)' }))
      .map(pole('ucet', { popis: 'IBAN des Verkäufers', placeholder: 'CH…' }))
      .map(pole('misto', { placeholder: 'z. B. Zürich' })),
  })),
  odvozene: { cena_slovy: (d) => betragInFranken(d.cena) },
  clanky: [
    {
      nadpis: 'Vertragsparteien',
      vysvetleni: 'Wer den Vertrag schliesst.',
      odstavce: [
        '**Verkäufer/in:** {{p_jmeno}}, geb. {{p_narozeni}}, Pass/ID-Nr. {{p_doklad}}, wohnhaft {{p_adresa}}',
        '**Käufer/in:** {{k_jmeno}}, geb. {{k_narozeni}}, Pass/ID-Nr. {{k_doklad}}, wohnhaft {{k_adresa}}',
      ],
    },
    {
      nadpis: 'Kaufgegenstand',
      vysvetleni: 'Welches Fahrzeug verkauft wird – entscheidend ist die Fahrgestellnummer.',
      odstavce: [
        'Der Verkäufer verkauft dem Käufer das Motorfahrzeug Marke/Typ {{znacka}}, Fahrgestellnummer {{vin}}, Stammnummer {{zb2}}, 1. Inverkehrsetzung {{ez}}, letzte Fahrzeugprüfung {{hu}}, bisher eingelöst mit Kontrollschild {{spz}}.',
        'Der Verkäufer versichert, dass er Eigentümer des Fahrzeugs ist und dass das Fahrzeug frei von Rechten Dritter ist, insbesondere nicht geleast, verpfändet oder unter Eigentumsvorbehalt verkauft.',
      ],
    },
    {
      nadpis: 'Zustand des Fahrzeugs',
      vysvetleni: 'Was der Verkäufer über das Fahrzeug weiss.',
      odstavce: [
        'Der Kilometerstand laut Tacho beträgt {{km}}. Nach Kenntnis des Verkäufers entspricht er der tatsächlichen Fahrleistung.',
        {
          volba: 'unfall',
          uvodVzor: 'Unfallschäden (bitte ankreuzen):',
          moznosti: {
            nein: 'Dem Verkäufer sind keine Unfallschäden bekannt.',
            ja: 'Dem Verkäufer sind folgende Unfallschäden bekannt: {{unfall_text}}',
          },
        },
        'Bekannte Mängel: {{maengel}}',
        'Der Käufer hatte Gelegenheit, das Fahrzeug zu besichtigen und Probe zu fahren.',
      ],
    },
    {
      nadpis: 'Gewährleistung',
      vysvetleni: 'Ob der Verkäufer später für Mängel einstehen muss.',
      odstavce: [
        {
          volba: 'haftung',
          uvodVzor: 'Gewährleistung (bitte ankreuzen):',
          moznosti: {
            aus: 'Das Fahrzeug wird wie besichtigt und Probe gefahren verkauft. Jede Gewährleistung für Mängel wird wegbedungen. Dies gilt nicht für Mängel, die der Verkäufer arglistig verschwiegen hat (Art. 199 OR), und nicht für in diesem Vertrag ausdrücklich zugesicherte Eigenschaften.',
            gesetz: 'Für Mängel haftet der Verkäufer nach den gesetzlichen Bestimmungen (Art. 197 ff. OR). Der Käufer prüft das Fahrzeug nach der Übergabe und meldet Mängel sofort (Art. 201 OR).',
          },
        },
      ],
    },
    {
      nadpis: 'Kaufpreis und Übergabe',
      vysvetleni: 'Wie viel, wie und wann – das Eigentum geht erst nach voller Zahlung über.',
      odstavce: [
        'Der Kaufpreis beträgt {{cena}} (in Worten: {{cena_slovy}}).',
        {
          volba: 'platba',
          uvodVzor: 'Zahlung (bitte ankreuzen):',
          moznosti: {
            bar: 'Der Kaufpreis wird bei Übergabe bar bezahlt. Der Verkäufer bestätigt mit seiner Unterschrift den Erhalt.',
            ueberweisung: 'Der Kaufpreis wird vor der Übergabe auf das Konto des Verkäufers IBAN {{ucet}} überwiesen.',
          },
        },
        'Die Übergabe erfolgt am {{datum_podpisu}} um {{predani_cas}} Uhr mit {{klice}} Schlüssel(n) und dem annullierten Fahrzeugausweis. Nutzen und Gefahr gehen mit der Übergabe auf den Käufer über.',
      ],
    },
    {
      nadpis: 'Kontrollschilder, Versicherung und Einlösung',
      vysvetleni: 'In der Schweiz bleiben die Schilder beim Verkäufer.',
      odstavce: [
        'Die Kontrollschilder bleiben beim Verkäufer. Er meldet den Verkauf seiner Motorfahrzeugversicherung und verwendet die Schilder für ein anderes Fahrzeug oder gibt sie beim Strassenverkehrsamt ab.',
        'Der Käufer löst das Fahrzeug vor der ersten Fahrt mit eigenem Versicherungsnachweis beim Strassenverkehrsamt seines Wohnkantons ein. Ab der Übergabe trägt er alle Kosten und Bussen aus dem Betrieb des Fahrzeugs.',
        'Änderungen dieses Vertrags bedürfen der Schriftform. Jede Partei erhält ein Exemplar.',
      ],
    },
  ],
});
