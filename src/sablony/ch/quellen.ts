/** Amtliche Quellen Schweiz – Fedlex (Bundesrecht) und ch.ch (Behördenportal). */
const OR_URL = 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de';
const SCHKG_URL = 'https://www.fedlex.admin.ch/eli/cc/11/529_488_529/de';
const or = (art: string, titel: string) => ({ nazev: `Art. ${art} OR – ${titel} (Fedlex)`, url: `${OR_URL}#art_${art.split(/[–\s]/)[0].replace(/^(\d+)([a-z])$/, '$1_$2')}` });

export const OR = { nazev: 'Obligationenrecht (OR, SR 220) – Fedlex', url: OR_URL };
export const OR_17 = or('17', 'Schuldanerkennung');
export const OR_32 = or('32', 'Stellvertretung');
export const OR_40A = or('40a–40f', 'Widerruf bei Haustürgeschäften');
export const OR_88 = or('88', 'Quittung');
export const OR_135 = or('135', 'Unterbrechung der Verjährung');
export const OR_184 = or('184', 'Kaufvertrag');
export const OR_197 = or('197', 'Gewährleistung wegen Mängel der Kaufsache');
export const OR_199 = or('199', 'Wegbedingung der Gewährleistung');
export const OR_201 = or('201', 'Mängelrüge');
export const OR_205 = or('205', 'Wandelung und Minderung');
export const OR_210 = or('210', 'Verjährung der Gewährleistung');
export const OR_239 = or('239', 'Schenkung');
export const OR_243 = or('243', 'Schenkungsversprechen');
export const OR_312 = or('312', 'Darlehen');
export const OR_318 = or('318', 'Rückzahlung des Darlehens');
export const SCHKG_82 = { nazev: 'Art. 82 SchKG – provisorische Rechtsöffnung (Fedlex)', url: `${SCHKG_URL}#art_82` };

export const CH_RUECKGABE = { nazev: 'Waren zurückgeben oder umtauschen (ch.ch)', url: 'https://www.ch.ch/de/sicherheit-und-recht/waren-zuruckgeben-oder-umtauschen' };
export const CH_SCHENKUNGSSTEUER = { nazev: 'Schenkungssteuer (ch.ch)', url: 'https://www.ch.ch/de/schenkungssteuer' };
export const CH_FAHRZEUGAUSWEIS = { nazev: 'Fahrzeugausweis (ch.ch)', url: 'https://www.ch.ch/de/ausweise-und-dokumente/fahrzeugausweis' };
export const ASA = { nazev: 'Strassenverkehrsämter der Kantone (asa.ch)', url: 'https://asa.ch/' };
export const ZH_FAHRZEUGWECHSEL = { nazev: 'Fahrzeug wechseln – Strassenverkehrsamt Kanton Zürich', url: 'https://www.zh.ch/de/mobilitaet/fahrzeuge-kontrollschilder/fahrzeugwechsel.html' };

export const TIPP_IDENTITAET_CH =
  'Identität der anderen Seite anhand von Pass oder Identitätskarte prüfen und Namen und Adresse genau so übernehmen.';
export const TIPP_BAR_CH =
  'Grössere Beträge besser überweisen – der Kontoauszug ist der sicherste Zahlungsnachweis. Bei Barzahlung eine Quittung unterschreiben lassen.';
export const OR_MIETE = or('253–273c', 'Miete');
export const OR_257E = or('257e', 'Sicherheiten durch den Mieter');
export const OR_266C = or('266c', 'Kündigungsfrist für Wohnungen');
export const CH_MIETE = { nazev: 'Wohnung mieten (ch.ch)', url: 'https://www.ch.ch/de/wohnen/mieten/' };
