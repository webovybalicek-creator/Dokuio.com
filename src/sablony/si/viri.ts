/**
 * Uradni viri za slovenske obrazce. Preverjeno 21. 11. 2026 (Uradni list, gov.si, FURS, PISRS):
 * Zakon o motornih vozilih – spremembo lastništva je treba v 15 dneh prijaviti registracijski organizaciji; organizacija
 * ugotovi identiteto strank ali se šteje za ugotovljeno z overitvijo podpisa (MzI, 6. 2. 2024); MzI svetuje, naj prodajalec
 * vozila z dokumenti ne preda pred prepisom. Notarska tarifa: overitev podpisa na listini o prenosu lastništva motornega
 * vozila največ 10 €. OZ: splošni zastaralni rok 5 let (346. člen), pripoznava dolga pretrga zastaranje; obresti, ki za več
 * kot 50 % presegajo predpisano mero zamudnih obresti, se domnevajo za oderuške (377. člen). ZDDD: prvi dedni red oproščen,
 * premičnine pod 5.000 € niso obdavčene, napoved v 15 dneh. SZ-1: odpovedni rok najmanj 90 dni. ZVPot-1: odstop 14 dni,
 * vračilo plačil najpozneje v 14 dneh, obvestilo o neskladnosti v dveh mesecih od odkritja. ZDR-1 94. člen: delavčev
 * odpovedni rok 15 dni (do 1 leta) ali 30 dni, s pogodbo največ 60 dni.
 */
export const OZ = { nazev: 'Obligacijski zakonik (Uradni list RS, št. 83/01 in spremembe)', url: 'https://www.uradni-list.si/glasilo-uradni-list-rs/vsebina/2001-01-4287' };
export const SZ1 = { nazev: 'Stanovanjski zakon (SZ-1, Uradni list RS, št. 69/03 in spremembe)', url: 'https://www.uradni-list.si/glasilo-uradni-list-rs/vsebina/2003-01-3312' };
export const ZVPOT = { nazev: 'Zakon o varstvu potrošnikov (ZVPot-1, Uradni list RS, št. 130/22)', url: 'https://www.uradni-list.si/glasilo-uradni-list-rs/vsebina/2022-01-3083' };
export const OBR_ODSTOP = { nazev: 'Obrazec z informacijami o pravici do odstopa od pogodbe (Uradni list RS, št. 139/22)', url: 'https://www.uradni-list.si/files/RS_-2022-139-03419-OB~P001-0000.PDF' };
export const MZI_PRENOS = { nazev: 'Pri prodaji vozila je treba urediti tudi prenos lastništva (Ministrstvo za infrastrukturo, gov.si)', url: 'https://www.gov.si/novice/2024-02-06-pri-prodaji-vozila-je-treba-urediti-tudi-prenos-lastnistva-novemu-lastniku/' };
export const TI_RABLJENO = { nazev: 'Nakup rabljenega vozila: kaj mora vedeti potrošnik (Tržni inšpektorat, gov.si)', url: 'https://www.gov.si/novice/2026-01-20-nakup-rabljenega-vozila-kaj-mora-vedeti-potrosnik/' };
export const FURS_DARILO = { nazev: 'Prejel sem darilo – davek na dediščine in darila (FURS)', url: 'https://fu.gov.si/zivljenjski_dogodki_prebivalci/prejel_sem_darilo' };
export const FURS_NAJEM = { nazev: 'Oddajam sobo, stanovanje, hišo v najem (FURS)', url: 'https://www.fu.gov.si/zivljenjski_dogodki_prebivalci/oddajam_sobo_stanovanje_hiso_garazo_v_najem/' };
export const NOTARSKA_TARIFA = { nazev: 'Notarska tarifa – overitev podpisa (Uradni list RS, št. 59/19)', url: 'https://www.uradni-list.si/files/RS_-2019-059-02624-OB~P001-0000.PDF' };
export const ZDR1 = { nazev: 'Zakon o delovnih razmerjih (ZDR-1) – odpovedni roki, 94. člen', url: 'https://pisrs.si/api/datoteke/integracije/355729653' };

export const NASVET_IDENTITETA = 'Preverite istovetnost druge stranke po osebni izkaznici in ime ter davčno številko prepišite točno tako, kot sta v listini.';
export const NASVET_GOTOVINA = 'Gotovino preštejte ob podpisu; večje zneske raje plačajte na račun – bančno potrdilo je najboljši dokaz.';
export const NOGA = (kod: string) =>
  `Pripravljeno brezplačno · predloga ${kod} v1.0 · obrazec za izpolnjevanje, ni pravni nasvet · za vsebino odgovarjata stranki, priporočamo pregled pri odvetniku`;
export const EU_MLADOLETNI = { nazev: 'Potne listine za mladoletne osebe, ki potujejo v EU (Your Europe)', url: 'https://europa.eu/youreurope/citizens/travel/entry-exit/travel-documents-minors/index_sl.htm' };
export const EJUSTICE_OTROK = { nazev: 'Selitev otroka v tujino – Slovenija (portal e-pravosodje)', url: 'https://e-justice.europa.eu/topics/family-matters-inheritance/moving-settling-abroad-children/si_sl' };
