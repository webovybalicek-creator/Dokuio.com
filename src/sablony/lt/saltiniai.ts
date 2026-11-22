/**
 * Oficialūs šaltiniai Lietuvos pavyzdžiams. Patikrinta 2026-11-22:
 * Civilinis kodeksas – fizinių asmenų sandoriai virš 1 500 € rašytine forma, išskyrus įvykdomus sudarymo metu (1.73);
 * bendrasis ieškinio senaties terminas 10 metų, 5 metai palūkanoms ir periodinėms išmokoms (1.125), prievolės pripažinimas
 * nutraukia senatį (1.130); palūkanos už pavėluotą piniginę prievolę 5 % metinių, tarp verslininkų 6 % (6.210);
 * dovanojimas virš 1 500 € raštu, nekilnojamojo daikto ir virš 14 500 € – notarine forma (6.469); fizinių asmenų paskola virš 600 €
 * raštu (6.871); subnuoma tik su rašytiniu nuomotojo sutikimu (6.490, 6.595); nuomininkas gali nutraukti gyvenamosios patalpos
 * nuomą raštu įspėjęs prieš mėnesį (6.609). Darbo kodeksas – darbuotojo rašytinis pareiškimas, įspėjimas prieš 20 kalendorinių
 * dienų, atšaukti per 3 darbo dienas (55); švenčių dienos (123). Regitra: pirkėjas įgijimą deklaruoja per 5 darbo dienas nuo
 * sandorio, pardavėjas patvirtina per 5 darbo dienas nuo pirkėjo deklaracijos; be galiojančio SDK neįmanoma deklaruoti ir
 * registruoti; dalyvauti eisme – registruoti per 10 kalendorinių dienų nuo deklaravimo, kitaip išregistruojama. Grynaisiais
 * pinigais pagal sandorį ne daugiau kaip 5 000 € (Atsiskaitymų grynaisiais pinigais ribojimo įstatymas, 4 str.). GPM:
 * dovanos iš sutuoktinio, vaikų, tėvų, senelių, brolių, seserų, vaikaičių neapmokestinamos; iš kitų asmenų – 2 500 € per metus
 * (VMI). Vaiko kelionė: laikinai išvykti be kito iš tėvų sutikimo galima (e-justice, Lietuva); vaikui, keliaujančiam be tėvų už
 * Šengeno erdvės, reikia notaro patvirtinto tėvų sutikimo (Notarų rūmai, LRT).
 */
export const CK = { nazev: 'Lietuvos Respublikos civilinis kodeksas (e-TAR)', url: 'https://www.e-tar.lt/portal/lt/legalAct/TAR.8A39C83848CB/asr' };
export const DK = { nazev: 'Lietuvos Respublikos darbo kodeksas (e-TAR)', url: 'https://www.e-tar.lt/portal/lt/legalAct/f6d686707e7011e6b969d7ae07280e89/asr' };
export const REGITRA = {
  nazev: 'Pirkau Lietuvoje registruotą transporto priemonę (Regitra)',
  url: 'https://www.regitra.lt/en/services/vehicle-registration/i-have-purchased-a-vehicle/i-have-purchased-in-lithuania-previously-registered-in-lithuania/',
};
export const GRYNIEJI = { nazev: 'Atsiskaitymų grynaisiais pinigais ribojimo įstatymas (e-seimas)', url: 'https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/4a6af840f87111ecbfe9c72e552dd5bd' };
export const DOVANA = { nazev: 'Gyventojų pajamų mokesčio įstatymo pakeitimai nuo 2026-01-01 (VMI)', url: 'https://www.vmi.lt/evmi/documents/20142/391071/Mokes%C4%8Di%C5%B3+%C4%AFstatymo+pakeitimai+nuo+2026-01-01.pdf' };
export const ATSISAKYMAS = { nazev: '14 dienų teisė atsisakyti sutarties (Your Europe)', url: 'https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_lt.htm' };
export const GARANTIJA = { nazev: '2 metų teisinė prekių garantija (Your Europe)', url: 'https://europa.eu/youreurope/citizens/consumers/shopping/guarantees/index_lt.htm' };
export const VAIKAS = { nazev: 'Teisėtas persikėlimas į užsienį su vaikais – Lietuva (e-justice)', url: 'https://e-justice.europa.eu/topics/family-matters-inheritance/moving-settling-abroad-children/lt_lt' };
export const NOTARAS = {
  nazev: 'Vaikų kelionės į užsienį: kada reikalingas notaro patvirtintas tėvų sutikimas (LRT)',
  url: 'https://www.lrt.lt/naujienos/laisvalaikis/13/3089238/vaiku-keliones-i-uzsieni-kada-reikalingas-notaro-patvirtintas-tevu-sutikimas',
};

export const PAD_ASMUO = 'Patikrinkite kitos šalies asmens tapatybės dokumentą ir įrašykite vardą, pavardę ir asmens kodą tiksliai taip, kaip nurodyta dokumente.';
export const PAD_GRYNIEJI = 'Pasirašydami perskaičiuokite pinigus; didesnes sumas mokėkite banko pavedimu – tai geriausias įrodymas. Grynaisiais pagal vieną sandorį galima atsiskaityti ne daugiau kaip 5 000 €.';
export const PORASTE = (kod: string) =>
  `Nemokamas pavyzdys · pavyzdys ${kod} v1.0 · pildomas pavyzdys, o ne teisinė konsultacija · už turinį atsako šalys`;
