/** Kokkulepe üürilepingu lõpetamiseks – Eesti. Pooled võivad lepingu lõpetada igal ajal kokkuleppel, ka tähtajalise lepingu. */
import type { Sablona } from '../typy';
import { VOS, JALUS } from './allikad';

export const uurLopetamine: Sablona = {
  kod: 'EE-UUR-LOPETAMINE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Kokkulepe üürilepingu lõpetamiseks', podnadpis: 'eluruumi üürilepingu lõpetamine poolte kokkuleppel',
  souborPdf: 'uurilepingu-lopetamise-kokkulepe', paticka: JALUS('EE-UUR-LOPETAMINE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'üürileandja', vpravo: 'üürnik' },
  slovo: { n: 'kokkulepe', g: 'kokkuleppe', a: 'kokkulepet', l: 'kokkuleppes' },
  pripominky: (d) => [
    ...(typeof d.lopp === 'string' && d.lopp ? [{ nazev: 'Üürilepingu lõppemine', datum: d.lopp }] : []),
    ...(typeof d.tagastamine === 'string' && d.tagastamine ? [{ nazev: 'Eluruumi tagastamine ja üleandmise akt', datum: d.tagastamine }] : []),
  ],
  coDal: ['Allkirjastage kokkulepe kahes eksemplaris või digitaalselt.', 'Eluruumi tagastamisel koostage akt arvestite näitudega.'],
  kontrola: [
    'Kokkuleppel saab üürilepingu lõpetada igal ajal – ka tähtajalise lepingu ja ilma etteteatamistähtajata.',
    'Kokkuleppe allkirjastavad kõik üürileandjad ja kõik üürnikud.',
    'Kirjutage kindel lõppemise ja eluruumi tagastamise kuupäev.',
    'Leppige kokku, millal ja kuidas tagastatakse tagatisraha ning kuidas tasutakse viimase perioodi kõrvalkulud.',
  ],
  zdroje: [VOS],
  kroky: [
    { id: 'pooled', nazev: 'Pooled ja eluruum', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Üürileandja – ees- ja perekonnanimi', sirka: 34 },
      { id: 'p_adresa', typ: 'text', popis: 'Üürileandja aadress', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Üürnik – ees- ja perekonnanimi', napoveda: 'Kui üürnikke on mitu, kirjutage kõik.', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Üürniku isikukood', sirka: 14, polovina: true },
      { id: 'byt', typ: 'text', popis: 'Eluruumi aadress', sirka: 46 },
      { id: 'lepingu_kuupaev', typ: 'datum', popis: 'Üürilepingu kuupäev', sirka: 14, polovina: true },
    ] },
    { id: 'lopetamine', nazev: 'Lõpetamine', pole: [
      { id: 'lopp', typ: 'datum', popis: 'Üürileping lõpeb', napoveda: 'Üüri viimane päev. Selle päevani tasutakse üüri.', sirka: 14, polovina: true },
      { id: 'tagastamine', typ: 'datum', popis: 'Eluruumi tagastamine hiljemalt', sirka: 14, polovina: true },
      { id: 'tagatis', typ: 'volba', popis: 'Tagatisraha', moznosti: [ { hodnota: 'paevad', popis: 'tagastatakse kindla päevade arvu jooksul' }, { hodnota: 'arveldus', popis: 'tagastatakse pärast kõrvalkulude arveldust' }, { hodnota: 'puudub', popis: 'tagatist ei makstud' } ] },
      { id: 'tagatis_paevad', typ: 'cislo', popis: 'Tagastamine (päeva jooksul)', placeholder: 'nt 30', sirka: 6, polovina: true, zobrazitKdyz: { pole: 'tagatis', je: 'paevad' } },
      { id: 'konto', typ: 'text', popis: 'Üürniku IBAN tagatise jaoks', placeholder: 'EE38 …', sirka: 30 },
      { id: 'muu', typ: 'textarea', popis: 'Muud kokkulepped (soovi korral)', placeholder: 'nt üürnik värvib seinad enne tagastamist', sirka: 56 },
      { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Pooled', odstavce: ['**Üürileandja:** {{p_jmeno}}, aadress {{p_adresa}}', '**Üürnik:** {{k_jmeno}}, isikukood {{k_ik}}'] },
    { nadpis: 'Üürilepingu lõpetamine', vysvetleni: 'Millal üür lõpeb ja millal eluruum tagastatakse.', odstavce: ['Pooled lepivad kokku, et eluruumi aadressil {{byt}} üürileping, mis sõlmiti {{lepingu_kuupaev}}, lõpeb {{lopp}}.', 'Üürnik tagastab eluruumi koos kõigi võtmetega hiljemalt {{tagastamine}} samas seisukorras, arvestades tavapärast kulumist. Tagastamisel koostatakse akt.', 'Üüri ja kõrvalkulud tasutakse lepingu lõppemiseni. Kummalgi poolel ei ole lõpetamise eest muid nõudeid.'] },
    { nadpis: 'Tagatisraha ja muud kokkulepped', odstavce: [{ volba: 'tagatis', uvodVzor: 'Tagatisraha (märkige üks variant):', moznosti: { paevad: 'Üürileandja tagastab tagatisraha {{tagatis_paevad}} päeva jooksul eluruumi tagastamisest kontole IBAN {{konto}}; ta võib tasaarvestada üürilepingust tulenevad põhjendatud nõuded.', arveldus: 'Üürileandja tagastab tagatisraha pärast viimase perioodi kõrvalkulude arveldust kontole IBAN {{konto}}; ta võib tasaarvestada üürilepingust tulenevad põhjendatud nõuded.', puudub: 'Üürnik ei maksnud tagatisraha.' } }, 'Muud kokkulepped: {{muu}}', 'Kokkulepe on koostatud kahes samaväärses eksemplaris ja jõustub mõlema poole allkirjastamisel.'] },
  ],
};
