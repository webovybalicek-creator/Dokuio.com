/** Allüürileping – Eesti. Üürnik annab eluruumi või selle osa allüürile üürileandja nõusolekul. */
import type { Sablona } from '../typy';
import { summaSonadega } from './arvud';
import { VOS, NOU_ISIK, JALUS } from './allikad';

export const alluurileping: Sablona = {
  kod: 'EE-ALLUUR', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Allüürileping', podnadpis: 'eluruumi või toa allüürile andmine üürileandja nõusolekul',
  souborPdf: 'alluurileping', paticka: JALUS('EE-ALLUUR'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'üürnik (allüürileandja)', vpravo: 'allüürnik' },
  slovo: { n: 'leping', g: 'lepingu', a: 'lepingut', l: 'lepingus' },
  coDal: ['Allkirjastage leping kahes eksemplaris või digitaalselt.', 'Lisage koopia üürileandja nõusolekust.'],
  kontrola: [
    'Eluruumi allüürile andmiseks on vaja üürileandja nõusolekut – küsige see kirjalikult. Näidis eeldab, et nõusolek on olemas.',
    'Üürnik vastutab üürileandja ees ka allüürniku tegevuse eest.',
    'Allüür ei saa kesta kauem kui teie enda üürileping.',
    'Allüürist saadud tulu deklareeritakse tuludeklaratsioonis.',
    NOU_ISIK,
  ],
  zdroje: [VOS],
  kroky: [
    { id: 'pooled', nazev: 'Üürnik ja allüürnik', popis: 'Üürnik annab allüürnikule toa või kogu eluruumi.', pole: [
      { id: 'n_jmeno', typ: 'text', popis: 'Üürnik – ees- ja perekonnanimi', sirka: 34, autocomplete: 'name' },
      { id: 'n_ik', typ: 'text', popis: 'Üürniku isikukood', sirka: 14, polovina: true },
      { id: 'n_adresa', typ: 'text', popis: 'Üürniku aadress', sirka: 46 },
      { id: 'p_jmeno', typ: 'text', popis: 'Allüürnik – ees- ja perekonnanimi', sirka: 34 },
      { id: 'p_ik', typ: 'text', popis: 'Allüürniku isikukood', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Allüürniku praegune aadress', sirka: 46 },
    ] },
    { id: 'eluruum', nazev: 'Eluruum ja nõusolek', pole: [
      { id: 'byt', typ: 'text', popis: 'Eluruumi aadress', sirka: 46 },
      { id: 'ulatus', typ: 'volba', popis: 'Ulatus', moznosti: [ { hodnota: 'osa', popis: 'osa eluruumist (tuba)' }, { hodnota: 'kogu', popis: 'kogu eluruum' } ] },
      { id: 'osa_kirjeldus', typ: 'text', popis: 'Milline osa', placeholder: 'nt 14 m² tuba, köök ja vannituba ühiskasutuses', sirka: 56, zobrazitKdyz: { pole: 'ulatus', je: 'osa' } },
      { id: 'uurileandja', typ: 'text', popis: 'Üürileandja (omanik)', napoveda: 'Kes andis allüürile nõusoleku.', sirka: 34 },
      { id: 'nousolek', typ: 'datum', popis: 'Nõusoleku kuupäev', napoveda: 'Lisage nõusolek lepingule.', sirka: 14, polovina: true },
    ] },
    { id: 'tingimused', nazev: 'Kestus ja maksed', pole: [
      { id: 'od', typ: 'datum', popis: 'Allüür alates', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'Allüür kuni', sirka: 14, polovina: true },
      { id: 'najemne', typ: 'castka', popis: 'Kuuüür (eurot)', napoveda: 'Koos kõrvalkuludega, kui ei lepi kokku teisiti.', sirka: 12, polovina: true },
      { id: 'paev', typ: 'cislo', popis: 'Tasuda kuu … kuupäevaks', placeholder: 'nt 5', sirka: 6, polovina: true },
      { id: 'tagatis', typ: 'castka', popis: 'Tagatisraha (eurot, soovi korral)', sirka: 12, polovina: true },
      { id: 'konto', typ: 'text', popis: 'Üürniku IBAN', placeholder: 'EE38 …', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { najemne_sonadega: (d) => summaSonadega(d.najemne) },
  clanky: [
    { nadpis: 'Pooled', odstavce: ['**Üürnik (allüürileandja):** {{n_jmeno}}, isikukood {{n_ik}}, aadress {{n_adresa}}', '**Allüürnik:** {{p_jmeno}}, isikukood {{p_ik}}, aadress {{p_adresa}}'] },
    { nadpis: 'Lepingu ese', vysvetleni: 'Mis antakse allüürile ja kelle nõusolekul.', odstavce: [{ volba: 'ulatus', uvodVzor: 'Ulatus (märkige üks variant):', moznosti: { osa: 'Üürnik annab allüürnikule allüürile osa eluruumist aadressil {{byt}}: {{osa_kirjeldus}}.', kogu: 'Üürnik annab allüürnikule allüürile kogu eluruumi aadressil {{byt}}.' } }, 'Üürileandja {{uurileandja}} andis allüüriks nõusoleku {{nousolek}}; nõusolek on lepingule lisatud.', 'Allüür lõpeb hiljemalt üürniku üürilepingu lõppemisel.'] },
    { nadpis: 'Kestus ja ülesütlemine', odstavce: ['Allüür algab {{od}} ja lõpeb {{do}}.', 'Lepingu lõppemisel tagastab allüürnik eluruumi samas seisukorras, arvestades tavapärast kulumist.'] },
    { nadpis: 'Maksed', odstavce: ['Allüürnik maksab kuuüüri **{{najemne}}** (sõnadega: {{najemne_sonadega}}) koos kõrvalkuludega iga kuu {{paev}}. kuupäevaks kontole IBAN {{konto}}.', 'Allüürnik maksis tagatisraha {{tagatis}}, mis tagastatakse 30 päeva jooksul eluruumi tagastamisest, arvates maha võimalikud võlad.'] },
    { nadpis: 'Lõppsätted', odstavce: ['Allüürnik järgib maja kodukorda ega anna eluruumi kolmandatele isikutele.', 'Muudatused kirjalikku taasesitamist võimaldavas vormis. Leping on koostatud kahes samaväärses eksemplaris.'] },
  ],
};
