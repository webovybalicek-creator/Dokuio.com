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
export const OR_102 = or('102', 'Verzug des Schuldners');
export const OR_104 = or('104', 'Verzugszins');
export const OR_363 = or('363–379', 'Werkvertrag');
export const OR_367 = or('367', 'Prüfung des Werkes und Mängelrüge');
export const OR_371 = or('371', 'Verjährung der Mängelansprüche');
export const OR_375 = or('375', 'Überschreitung des Kostenansatzes');

/* Kündigungen, Arbeit, Raten, Reisen mit Kindern (geprüft 2026-11-20) */
const VVG_URL = 'https://www.fedlex.admin.ch/eli/cc/24/719_735_717/de';
export const VVG = { nazev: 'Versicherungsvertragsgesetz (VVG, SR 221.229.1) – Fedlex', url: VVG_URL };
export const VVG_35A = { nazev: 'Art. 35a VVG – ordentliche Kündigung (Fedlex)', url: `${VVG_URL}#art_35_a` };
export const VVG_42 = { nazev: 'Art. 42 VVG – Teilschaden und Kündigung (Fedlex)', url: `${VVG_URL}#art_42` };
export const OR_404 = or('404', 'Widerruf und Kündigung des Auftrags');
export const OR_377 = or('377', 'Rücktritt des Bestellers beim Werkvertrag');
export const OR_330A = or('330a', 'Arbeitszeugnis');
export const OR_335 = or('335', 'Kündigung des Arbeitsverhältnisses');
export const OR_335B = or('335b', 'Kündigung während der Probezeit');
export const OR_335C = or('335c', 'Kündigungsfristen');
export const OR_341 = or('341', 'Unverzichtbarkeit');
export const CH_KUENDIGUNG_ARBEIT = { nazev: 'Kündigung Arbeitsvertrag (ch.ch)', url: 'https://www.ch.ch/de/arbeit/kundigung-arbeitsvertrag/' };
export const CH_PROBEZEIT = { nazev: 'Probezeit (ch.ch)', url: 'https://www.ch.ch/de/arbeit/probezeit/' };
export const SECO_KUENDIGUNG = { nazev: 'FAQ zu Kündigung (SECO)', url: 'https://www.seco.admin.ch/de/faq-kuendigung' };
export const SECO_ZEUGNIS = { nazev: 'FAQ zu Arbeitszeugnis (SECO)', url: 'https://www.seco.admin.ch/de/faq-arbeitszeugnis' };
export const ARBEIT_SWISS = { nazev: 'Erste Schritte nach einer Kündigung (arbeit.swiss, SECO)', url: 'https://www.arbeit.swiss/en/jobseekers/first-steps-after-dismissal' };
export const CH_KRANKENKASSE = { nazev: 'Krankenkasse wechseln oder kündigen (ch.ch)', url: 'https://www.ch.ch/de/gesundheit/krankenkasse/krankenkasse-abschliessen--wechseln-oder-kundigen/' };
export const ELCOM_GRUNDVERSORGUNG = { nazev: 'Grundversorgung und freier Markt (ElCom)', url: 'https://www.elcom.admin.ch/de/grundversorgung-und-freier-markt' };
export const BAKOM_OMBUDSCOM = { nazev: 'Wann kann ich mich an die ombudscom wenden? (BAKOM)', url: 'https://www.bakom.admin.ch/de/wann-kann-ich-mich-an-die-ombudscom-wenden' };
export const ZH_KKG = { nazev: 'Merkblatt Konsumkreditgesetz (Kanton Zürich)', url: 'https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/wirtschaft-arbeit/gewerbe-betriebsbewilligungen/konsumkredit/merkblatt_bundesgesetz_%C3%BCber_den_konsumkredit_kkg.pdf' };
export const EDA_MINDERJAEHRIGE = { nazev: 'Reisen mit Minderjährigen (EDA)', url: 'https://www.eda.admin.ch/de/reisen-mit-minderjaehrigen' };
export const EDA_REISEINFO = { nazev: 'Reisedokumente, Visum und Einreise (EDA)', url: 'https://www.eda.admin.ch/de/reiseinformationen' };
export const EDA_REISEHINWEISE = { nazev: 'Reisen ins Ausland – Reisehinweise nach Land (EDA)', url: 'https://www.eda.admin.ch/de/reisen-ins-ausland' };
export const BJ_KINDESENTFUEHRUNG = { nazev: 'Internationale Kindesentführungen (Bundesamt für Justiz)', url: 'https://www.bj.admin.ch/bj/de/home/gesellschaft/kindesentfuehrung.html' };
export const OR_305 = or('305–311', 'Gebrauchsleihe');
