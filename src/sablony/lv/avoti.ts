/**
 * Oficiālie avoti Latvijas paraugiem. Pārbaudīts 22. 11. 2026:
 * Civillikums – pirkums (2002. un turpm. p.), dāvinājums (1912. un turpm. p.), aizdevums (1934. un turpm. p.), patapinājums
 * (1947. un turpm. p.), uzņēmuma līgums (2212. un turpm. p.), pilnvarojums (2289. un turpm. p.); likumiskie procenti 6 % gadā (1765);
 * vispārējais noilgums 10 gadi (1895), atgādinājums parādniekam un prasījuma atzīšana pārtrauc noilgumu (1905, 1906).
 * Dzīvojamo telpu īres likums – līgums un apakšīres līgums rakstveidā (6, 7), slēdz uz noteiktu termiņu (9), drošības nauda ne vairāk
 * kā divu mēnešu īres maksa, atdodama ne vēlāk kā atbrīvošanas dienā (12), iemitināšana (14), īrnieka atkāpšanās, rakstveidā brīdinot
 * vismaz mēnesi iepriekš (20, 27), zemesgrāmatā nenostiprināts līgums izbeidzas pēc īpašuma maiņas (28), nostiprināšana (35).
 * Darba likums – darbinieka uzteikums rakstveidā vienu mēnesi iepriekš (100). Patērētāju tiesību aizsardzības likums – gada laikā
 * atklāta neatbilstība pastāvēja piegādes brīdī (13), prasījums 2 gadu laikā, iesniedz 2 mēnešu laikā pēc atklāšanas (27).
 * CSDD: pircējs e-CSDD izdara atzīmi, pārdevējs to apstiprina 5 dienu laikā, īpašuma tiesības pāriet ar apstiprinājumu; pircējs
 * reģistrē īpašnieka maiņu 5 dienu laikā, ja piedalīsies ceļu satiksmē. Īpašnieka maiņu nereģistrē, ja nav samaksāts transportlīdzekļa
 * ekspluatācijas nodoklis par kārtējo gadu (TEN likums, VID). Dāvanas no laulātā un radiniekiem līdz 3. pakāpei neapliek ar IIN, no
 * citām personām – līdz 1425 eiro gadā (likuma „Par iedzīvotāju ienākuma nodokli” 9. p. 35. punkts). Bērna ceļojums: pagaidu
 * izceļošanai otra vecāka piekrišana nav vajadzīga (e-justice, Latvija); bērnam, kas ārpus Šengenas zonas ceļo cita pavadībā vai viens,
 * vajadzīga vismaz viena vecāka notariāli apliecināta pilnvara vai piekrišana (Valsts robežsardze, LV portāls).
 */
export const CL = { nazev: 'Civillikums (likumi.lv)', url: 'https://likumi.lv/ta/id/225418-civillikums' };
export const DL = { nazev: 'Darba likums (likumi.lv)', url: 'https://likumi.lv/ta/id/26019-darba-likums' };
export const DZTIL = { nazev: 'Dzīvojamo telpu īres likums (likumi.lv)', url: 'https://likumi.lv/ta/id/322216-dzivojamo-telpu-ires-likums' };
export const PTAL = { nazev: 'Patērētāju tiesību aizsardzības likums (likumi.lv)', url: 'https://likumi.lv/ta/id/23309-pateretaju-tiesibu-aizsardzibas-likums' };
export const CSDD = { nazev: 'Īpašnieka maiņa e-CSDD (Ceļu satiksmes drošības direkcija)', url: 'https://csdd.lv/en/change-of-owner/electronic-change-of-owner-in-e-csdd' };
export const TEN = { nazev: 'Transportlīdzekļa ekspluatācijas nodokļa un uzņēmumu vieglo transportlīdzekļu nodokļa likums (likumi.lv)', url: 'https://likumi.lv/ta/id/223536' };
export const DAVANA = { nazev: 'Dāvinājums un iedzīvotāju ienākuma nodoklis (LV portāls)', url: 'https://lvportals.lv/skaidrojumi/375314-davinajums-vai-naudas-parskaitijums-virs-1425-eiro-kados-gadijumos-sanemejam-jamaksa-nodoklis-2025' };
export const ATTEIKUMS = { nazev: '14 dienu atteikuma tiesības (Your Europe)', url: 'https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_lv.htm' };
export const GARANTIJA = { nazev: 'Preču 2 gadu likumiskā garantija (Your Europe)', url: 'https://europa.eu/youreurope/citizens/consumers/shopping/guarantees/index_lv.htm' };
export const BERNS = { nazev: 'Likumīga pārcelšanās uz ārvalstīm ar bērniem – Latvija (e-justice)', url: 'https://e-justice.europa.eu/topics/family-matters-inheritance/moving-settling-abroad-children/lv_lv' };
export const ROBEZA = { nazev: 'Kādi dokumenti nepieciešami bērnam, izbraucot no valsts (LV portāls)', url: 'https://lvportals.lv/skaidrojumi/352918-kadi-dokumenti-nepieciesami-bernam-izbraucot-no-valsts-2023' };

export const PAD_PERSONA = 'Pārbaudiet otras puses personu apliecinošo dokumentu un ierakstiet vārdu, uzvārdu un personas kodu tieši tā, kā tie norādīti dokumentā.';
export const PAD_SKAIDRA = 'Parakstot pārskaitiet naudu; lielākas summas maksājiet ar bankas pārskaitījumu – bankas maksājums ir labākais pierādījums.';
export const KAJENE = (kod: string) =>
  `Bezmaksas paraugs · paraugs ${kod} v1.0 · aizpildāms paraugs, nevis juridiska konsultācija · par saturu atbild puses`;
