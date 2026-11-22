/**
 * Ametlikud allikad Eesti näidiste jaoks. Kontrollitud 22. 11. 2026:
 * Võlaõigusseadus (VÕS) – müügileping (208 jj), müüja vastutus 2 aastat, tarbija puhul eeldus 1 aasta; kinkeleping (259), täidetud
 * kinkeleping kehtib ka vorminõudeta (261 lg 2), taganemine (267–268); laenuleping (396 jj); kasutuslaenuleping (389 jj); üürileping
 * (271 jj) – tähtajatu üürilepingu korraline ülesütlemine vähemalt 3 kuud ette (312 lg 1), eluruumi tagatisraha hoiustatakse
 * krediidiasutuses (308); töövõtuleping (635 jj); viivis (113). Tsiviilseadustiku üldosa seadus (TsÜS) – tehingust tuleneva nõude
 * aegumine 3 aastat, tahtliku rikkumise korral 10 aastat (146), aegumise katkemine nõude tunnustamisega (158). Töölepingu seadus –
 * ülesütlemine kirjalikku taasesitamist võimaldavas vormis (95), töötaja etteteatamine vähemalt 30 kalendripäeva (98). Sõidukid
 * (Transpordiamet): registriandmete muudatus 5 tööpäeva jooksul, omanikuvahetus e-teeninduses (müüja alustab, ostja kinnitab);
 * kui omandaja ei esita taotlust 5 tööpäeva jooksul, kustutatakse sõiduk ajutiselt registrist. Mootorsõidukimaks (MSMS § 10 lg 2):
 * võõrandamisel jääb jooksva aasta maks endisele omanikule. Kingitus füüsiliselt isikult füüsilisele isikule ei ole reeglina
 * tulumaksuga maksustatav (EMTA). Lapse reis: ühise hooldusõiguse korral on teise vanema nõusolek reeglina vajalik ka ajutiseks
 * reisiks (e-justice, Eesti).
 */
export const VOS = { nazev: 'Võlaõigusseadus (Riigi Teataja)', url: 'https://www.riigiteataja.ee/akt/111072026158?leiaKehtiv' };
export const TSUS = { nazev: 'Tsiviilseadustiku üldosa seadus (Riigi Teataja)', url: 'https://www.riigiteataja.ee/akt/106122010012?leiaKehtiv' };
export const TLS = { nazev: 'Töölepingu seadus (Riigi Teataja)', url: 'https://www.riigiteataja.ee/akt/106072023108?leiaKehtiv' };
export const OMANIK = { nazev: 'Registriandmete muutmine ja omanikuvahetus (Transpordiamet)', url: 'https://transpordiamet.ee/en/vehicle-ship-airplane/vehicle/amending-register-data' };
export const MSM = { nazev: 'Mootorsõidukimaks sõiduki võõrandamisel (Maksu- ja Tolliamet)', url: 'https://www.emta.ee/eraklient/maksud-ja-tasumine/muud-maksud/mootorsoidukimaks/soiduki-voorandamine' };
export const KINGITUS = { nazev: 'Kingitused ja tulumaks (Maksu- ja Tolliamet)', url: 'https://emta.ee/node/354' };
export const TAGANEMINE = { nazev: '14-päevane taganemisõigus (Your Europe)', url: 'https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_et.htm' };
export const GARANTII = { nazev: 'Kaupade 2-aastane seaduslik garantii (Your Europe)', url: 'https://europa.eu/youreurope/citizens/consumers/shopping/guarantees/index_et.htm' };
export const LAPS = { nazev: 'Seaduslik lastega välismaale suundumine – Eesti (e-justice)', url: 'https://e-justice.europa.eu/topics/family-matters-inheritance/moving-settling-abroad-children/ee_et' };

export const NOU_ISIK = 'Kontrollige teise poole isikut tõendavat dokumenti ja kirjutage nimi ning isikukood täpselt nii, nagu dokumendis on.';
export const NOU_SULARAHA = 'Lugege raha allkirjastamisel üle; suuremad summad tasuge pangaülekandega – pangatehing on parim tõend.';
export const JALUS = (kod: string) =>
  `Tasuta näidis · mall ${kod} v1.0 · täitmiseks mõeldud näidis, mitte õigusnõustamine · sisu eest vastutavad pooled`;
