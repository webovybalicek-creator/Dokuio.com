/**
 * Kaufvertrag über ein gebrauchtes Kraftfahrzeug – Deutschland, privat an privat. §§ 433 ff. BGB;
 * Haftungsausschluss nach § 444 BGB (nicht bei Arglist und Beschaffenheitsangaben); Veräußerungsanzeige nach § 15 FZV.
 * Bei jeder Textänderung `verze` und `aktualizovano` erhöhen.
 */
import type { Sablona } from '../typy';
import { betragInWorten } from './zahlen';
import { BGB, BGB_444, FZV_15, VVG, TIPP_IDENTITAET, TIPP_BAR } from './quellen';

export const kaufvertragGebrauchtwagen: Sablona = {
  kod: 'DE-KAUF-AUTO',
  verze: '1.0',
  aktualizovano: '2026-11-19',
  overeno: '2026-11-19',
  zeme: 'de',
  jazyk: 'de',
  nazev: 'Kaufvertrag über ein gebrauchtes Kraftfahrzeug',
  podnadpis: 'privater Verkauf nach §§ 433 ff. Bürgerliches Gesetzbuch (BGB)',
  souborPdf: 'kaufvertrag-gebrauchtwagen',
  paticka: 'Kostenlos erstellt · Vorlage DE-KAUF-AUTO v1.0 · Vorlage zum Ausfüllen, keine Rechtsberatung · für den Inhalt sind die Parteien verantwortlich, anwaltliche Prüfung empfohlen',
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'Verkäufer/in', vpravo: 'Käufer/in' },
  slovo: { n: 'Kaufvertrag', g: 'Kaufvertrags', a: 'Kaufvertrag', l: 'Kaufvertrag' },
  coDal: [
    'Vertrag zweimal ausdrucken, beide Seiten unterschreiben beide Exemplare.',
    'Fahrzeug, Schlüssel und Zulassungsbescheinigung Teil I und II gegen Empfangsbestätigung übergeben.',
    'Verkäufer: Verkauf unverzüglich der Zulassungsbehörde (Veräußerungsanzeige) und der Kfz-Versicherung melden.',
    'Käufer: Fahrzeug auf sich zulassen und versichern.',
  ],
  kontrola: [
    'Der Verkäufer steht in der Zulassungsbescheinigung Teil II (Fahrzeugbrief) – oder kann den Erwerb nachweisen.',
    'Die FIN in den Papieren stimmt mit der am Fahrzeug überein.',
    'Ein Haftungsausschluss gilt nicht für Mängel, die der Verkäufer arglistig verschweigt, und nicht für ausdrücklich vereinbarte Eigenschaften wie „unfallfrei“ ([§ 444 BGB](https://www.gesetze-im-internet.de/bgb/__444.html)). Bekannte Mängel und Unfälle daher ehrlich eintragen.',
    'Verkäufer: Veräußerung unverzüglich der Zulassungsbehörde mitteilen, mit Name und Anschrift des Käufers ([§ 15 FZV](https://www.gesetze-im-internet.de/fzv_2023/__15.html)).',
    TIPP_IDENTITAET,
    TIPP_BAR,
  ],
  zdroje: [BGB, BGB_444, FZV_15, VVG],

  kroky: [
    {
      id: 'parteien',
      nazev: 'Verkäufer und Käufer',
      popis: 'Angaben des Käufers kennen Sie vielleicht noch nicht – leer lassen, dann bleiben Linien zum Ausfüllen.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Verkäufer/in – Vor- und Nachname', placeholder: 'z. B. Max Mustermann', sirka: 34, autocomplete: 'name' },
        { id: 'p_narozeni', typ: 'datum', popis: 'Geburtsdatum', sirka: 14, polovina: true },
        { id: 'p_doklad', typ: 'text', popis: 'Ausweisnummer', sirka: 14, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Anschrift', placeholder: 'z. B. Musterstraße 1, 10115 Berlin', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Käufer/in – Vor- und Nachname', sirka: 34 },
        { id: 'k_narozeni', typ: 'datum', popis: 'Geburtsdatum', sirka: 14, polovina: true },
        { id: 'k_doklad', typ: 'text', popis: 'Ausweisnummer', sirka: 14, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Anschrift', sirka: 46 },
      ],
    },
    {
      id: 'fahrzeug',
      nazev: 'Fahrzeug',
      popis: 'Angaben aus der Zulassungsbescheinigung Teil I übernehmen.',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Hersteller und Typ', placeholder: 'z. B. VW Golf', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'Fahrzeug-Identifizierungsnummer (FIN)', napoveda: '17 Zeichen, Feld E im Fahrzeugschein.', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Amtliches Kennzeichen', placeholder: 'z. B. B-AB 1234', sirka: 12, polovina: true },
        { id: 'ez', typ: 'datum', popis: 'Erstzulassung', sirka: 14, polovina: true },
        { id: 'zb2', typ: 'text', popis: 'Nr. Zulassungsbescheinigung Teil II', sirka: 14, polovina: true },
        { id: 'hu', typ: 'text', popis: 'Nächste Hauptuntersuchung (HU)', placeholder: 'z. B. 06/2027', sirka: 10, polovina: true },
        { id: 'km', typ: 'cislo', popis: 'Kilometerstand laut Tacho', jednotka: 'km', sirka: 12, polovina: true },
      ],
    },
    {
      id: 'zustand',
      nazev: 'Zustand und Haftung',
      pole: [
        {
          id: 'unfall',
          typ: 'volba',
          popis: 'Unfallschäden',
          moznosti: [
            { hodnota: 'nein', popis: 'Keine Unfallschäden bekannt' },
            { hodnota: 'ja', popis: 'Folgende Unfallschäden sind bekannt' },
          ],
        },
        { id: 'unfall_text', typ: 'textarea', popis: 'Unfallschäden', sirka: 64, zobrazitKdyz: { pole: 'unfall', je: 'ja' } },
        { id: 'maengel', typ: 'textarea', popis: 'Bekannte Mängel (optional)', napoveda: 'Alles eintragen, was Sie wissen – verschwiegene Mängel heben den Haftungsausschluss auf.', placeholder: 'z. B. Klimaanlage ohne Funktion', sirka: 64 },
        {
          id: 'haftung',
          typ: 'volba',
          popis: 'Sachmängelhaftung',
          napoveda: 'Unter Privatleuten darf die Haftung für Mängel ausgeschlossen werden – nicht aber bei Arglist und vereinbarten Eigenschaften.',
          moznosti: [
            { hodnota: 'aus', popis: 'Ausgeschlossen (üblich unter Privatleuten)' },
            { hodnota: 'gesetz', popis: 'Gesetzliche Sachmängelhaftung' },
          ],
        },
        { id: 'klice', typ: 'cislo', popis: 'Anzahl Schlüssel', sirka: 4, polovina: true },
      ],
    },
    {
      id: 'preis',
      nazev: 'Preis und Übergabe',
      pole: [
        { id: 'cena', typ: 'castka', popis: 'Kaufpreis (€)', napoveda: 'Den Betrag in Worten ergänzen wir.', placeholder: 'z. B. 9500', sirka: 14, polovina: true },
        {
          id: 'platba',
          typ: 'volba',
          popis: 'Zahlung',
          moznosti: [
            { hodnota: 'bar', popis: 'Bar bei Übergabe' },
            { hodnota: 'ueberweisung', popis: 'Überweisung vor Übergabe' },
          ],
        },
        { id: 'ucet', typ: 'text', popis: 'IBAN des Verkäufers', sirka: 30, zobrazitKdyz: { pole: 'platba', je: 'ueberweisung' } },
        { id: 'predani_cas', typ: 'text', popis: 'Uhrzeit der Übergabe', placeholder: 'z. B. 14:30', sirka: 8, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Ort', placeholder: 'z. B. Berlin', sirka: 18, polovina: true },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: { cena_slovy: (d) => betragInWorten(d.cena) },

  clanky: [
    {
      nadpis: 'Vertragsparteien',
      vysvetleni: 'Wer den Vertrag schließt.',
      odstavce: [
        '**Verkäufer/in:** {{p_jmeno}}, geb. {{p_narozeni}}, Ausweis-Nr. {{p_doklad}}, wohnhaft {{p_adresa}}',
        '**Käufer/in:** {{k_jmeno}}, geb. {{k_narozeni}}, Ausweis-Nr. {{k_doklad}}, wohnhaft {{k_adresa}}',
      ],
    },
    {
      nadpis: 'Kaufgegenstand',
      vysvetleni: 'Welches Fahrzeug verkauft wird – entscheidend ist die FIN.',
      odstavce: [
        'Der Verkäufer verkauft dem Käufer das Kraftfahrzeug Hersteller/Typ {{znacka}}, FIN {{vin}}, amtliches Kennzeichen {{spz}}, Erstzulassung {{ez}}, Zulassungsbescheinigung Teil II Nr. {{zb2}}, nächste HU {{hu}}.',
        'Der Verkäufer versichert, dass er Eigentümer des Fahrzeugs ist, das Fahrzeug frei von Rechten Dritter ist und nicht geleast oder sicherungsübereignet ist.',
      ],
    },
    {
      nadpis: 'Zustand des Fahrzeugs',
      vysvetleni: 'Was der Verkäufer über das Fahrzeug weiß.',
      odstavce: [
        'Der Kilometerstand laut Tacho beträgt {{km}}. Nach Kenntnis des Verkäufers entspricht er der tatsächlichen Laufleistung.',
        {
          volba: 'unfall',
          uvodVzor: 'Unfallschäden (bitte ankreuzen):',
          moznosti: {
            nein: 'Dem Verkäufer sind keine Unfallschäden bekannt.',
            ja: 'Dem Verkäufer sind folgende Unfallschäden bekannt: {{unfall_text}}',
          },
        },
        'Bekannte Mängel: {{maengel}}',
      ],
    },
    {
      nadpis: 'Sachmängelhaftung',
      vysvetleni: 'Ob der Verkäufer später für Mängel einstehen muss.',
      odstavce: [
        {
          volba: 'haftung',
          uvodVzor: 'Haftung (bitte ankreuzen):',
          moznosti: {
            aus: 'Das Fahrzeug wird unter Ausschluss der Sachmängelhaftung verkauft. Dieser Ausschluss gilt nicht für arglistig verschwiegene Mängel, für die in diesem Vertrag vereinbarten Beschaffenheiten sowie für Schäden aus der Verletzung von Leben, Körper oder Gesundheit und für sonstige Schäden, die auf grober Fahrlässigkeit oder Vorsatz des Verkäufers beruhen.',
            gesetz: 'Für Sachmängel haftet der Verkäufer nach den gesetzlichen Vorschriften.',
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
            bar: 'Der Kaufpreis wird bei Übergabe in bar gezahlt. Der Verkäufer bestätigt mit seiner Unterschrift den Erhalt.',
            ueberweisung: 'Der Kaufpreis wird vor der Übergabe auf das Konto des Verkäufers IBAN {{ucet}} überwiesen.',
          },
        },
        'Das Fahrzeug bleibt bis zur vollständigen Zahlung des Kaufpreises Eigentum des Verkäufers.',
        'Die Übergabe erfolgt am {{datum_podpisu}} um {{predani_cas}} Uhr mit {{klice}} Schlüssel(n) sowie der Zulassungsbescheinigung Teil I und Teil II.',
      ],
    },
    {
      nadpis: 'Ummeldung und Versicherung',
      vysvetleni: 'Wer was bei Behörde und Versicherung erledigt.',
      odstavce: [
        'Der Käufer verpflichtet sich, das Fahrzeug unverzüglich auf sich umzumelden. Der Verkäufer zeigt die Veräußerung unverzüglich der Zulassungsbehörde und seinem Kfz-Versicherer an.',
        'Ab der Übergabe trägt der Käufer die Gefahr und haftet für alle mit dem Betrieb des Fahrzeugs verbundenen Kosten und Bußgelder.',
        'Änderungen dieses Vertrags bedürfen der Schriftform. Jede Partei erhält eine Ausfertigung.',
      ],
    },
  ],
};
