/**
 * Kasutatud sõiduki ostu-müügileping eraisikute vahel – Eesti (VÕS 208 jj). Omanikuvahetus vormistatakse Transpordiameti
 * e-teeninduses (müüja alustab, ostja kinnitab) või teenindusbüroos 5 tööpäeva jooksul; jooksva aasta mootorsõidukimaks jääb
 * endisele omanikule (MSMS § 10 lg 2).
 */
import type { Sablona } from '../typy';
import { summaSonadega } from './arvud';
import { naDatum, pridejPracovniDny, isoDatum } from '../terminy';
import { VOS, OMANIK, MSM, NOU_ISIK, NOU_SULARAHA, JALUS } from './allikad';

export const soidukiLeping: Sablona = {
  kod: 'EE-AUTO', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Sõiduki ostu-müügileping', podnadpis: 'kasutatud sõiduki müük eraisikute vahel (võlaõigusseaduse § 208 jj)',
  souborPdf: 'soiduki-ostu-muugileping', paticka: JALUS('EE-AUTO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'müüja', vpravo: 'ostja' },
  slovo: { n: 'leping', g: 'lepingu', a: 'lepingut', l: 'lepingus' },
  coDal: [
    'Printige leping kahes eksemplaris ja allkirjastage mõlemad – või allkirjastage see digitaalselt.',
    'Müüja alustab omanikuvahetust Transpordiameti e-teeninduses ja ostja kinnitab selle; omanikuvahetus tuleb vormistada 5 tööpäeva jooksul.',
    'Ostja sõlmib liikluskindlustuse oma nimele enne sõiduki kasutamist.',
  ],
  pripominky: (d) => {
    const od = naDatum(d.predavane_datum);
    if (!od) return [];
    return [{ nazev: 'Omanikuvahetuse tähtaeg (5 tööpäeva)', datum: isoDatum(pridejPracovniDny(od, 5, 'ee')), popis: 'Müüja alustab ja ostja kinnitab omanikuvahetuse Transpordiameti e-teeninduses.' }];
  },
  kontrola: [
    `Registriandmete muudatus tuleb vormistada 5 tööpäeva jooksul. Kui omandaja ei esita taotlust, võib endine omanik teatada võõrandamisest ja sõiduk kustutatakse ajutiselt registrist ([Transpordiamet](${OMANIK.url})).`,
    `Jooksva aasta mootorsõidukimaks jääb müüja kanda – arvestage seda hinnas ([Maksu- ja Tolliamet](${MSM.url})).`,
    'Müüja peab olema registreerimistunnistusele kantud omanik – võrrelge andmeid tema isikut tõendava dokumendiga.',
    'Registreerimistunnistuse VIN-kood peab ühtima sõidukil oleva koodiga. Sõiduki ajalugu ja piiranguid saab kontrollida Transpordiameti päringuga „Sõiduki taustakontroll“.',
    'Kuni omanikuvahetuse vormistamiseni võivad trahvid jõuda müüjani – kirjutage üleandmise kuupäev ja kellaaeg.',
    NOU_ISIK,
    NOU_SULARAHA,
  ],
  zdroje: [VOS, OMANIK, MSM],
  kroky: [
    { id: 'pooled', nazev: 'Müüja ja ostja', popis: 'Andmed isikut tõendavast dokumendist.', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Müüja – ees- ja perekonnanimi', napoveda: 'Registreerimistunnistusele kantud omanik.', placeholder: 'nt Mari Tamm', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Müüja isikukood', placeholder: 'nt 48001010000', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Müüja aadress', placeholder: 'nt Pärnu mnt 10, 10148 Tallinn', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Ostja – ees- ja perekonnanimi', placeholder: 'nt Jaan Kask', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Ostja isikukood', placeholder: 'nt 38505050000', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Ostja aadress', placeholder: 'nt Rüütli 5, 51007 Tartu', sirka: 46 },
    ] },
    { id: 'soiduk', nazev: 'Sõiduk', popis: 'Kirjutage andmed registreerimistunnistuselt.', pole: [
      { id: 'znacka', typ: 'text', popis: 'Mark ja mudel', placeholder: 'nt Toyota Corolla', sirka: 30 },
      { id: 'vin', typ: 'vin', popis: 'VIN-kood', napoveda: '17 märki, registreerimistunnistuse väli E.', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Registreerimismärk', placeholder: 'nt 123 ABC', sirka: 12, polovina: true },
      { id: 'rok', typ: 'text', popis: 'Esmane registreerimine', placeholder: 'nt 2017', sirka: 10, polovina: true },
      { id: 'barva', typ: 'text', popis: 'Värv', placeholder: 'nt hall metallik', sirka: 18, polovina: true },
      { id: 'km', typ: 'cislo', popis: 'Läbisõit', napoveda: 'Lugege allkirjastamise päeval.', placeholder: 'nt 168400', jednotka: 'km', sirka: 10, polovina: true },
      { id: 'puudused', typ: 'volba', popis: 'Teadaolevad puudused', napoveda: 'Öelge ausalt, mida teate – puuduste eest, millest ostja teadis, müüja hiljem ei vastuta.', moznosti: [ { hodnota: 'ei', popis: 'Müüjale ei ole puudused teada' }, { hodnota: 'jah', popis: 'Sõidukil on teadaolevaid puudusi' } ] },
      { id: 'puudused_kirjeldus', typ: 'textarea', popis: 'Puuduste kirjeldus', placeholder: 'nt pragu esiklaasis, kliimaseade ei tööta', sirka: 56, zobrazitKdyz: { pole: 'puudused', je: 'jah' } },
    ] },
    { id: 'hind', nazev: 'Hind ja maksmine', pole: [
      { id: 'cena', typ: 'castka', popis: 'Hind (eurot)', napoveda: 'Summa sõnadega lisame ise.', placeholder: 'nt 7900', sirka: 12, polovina: true },
      { id: 'makse', typ: 'volba', popis: 'Maksmise viis', napoveda: 'Pangaülekanne jätab maksmise kohta tõendi.', moznosti: [ { hodnota: 'sularaha', popis: 'Sularahas allkirjastamisel' }, { hodnota: 'pank', popis: 'Müüja pangakontole' } ] },
      { id: 'iban', typ: 'text', popis: 'Müüja IBAN', placeholder: 'EE38 2200 2210 2014 5685', sirka: 30, zobrazitKdyz: { pole: 'makse', je: 'pank' } },
      { id: 'makse_tahtaeg', typ: 'datum', popis: 'Maksmise tähtaeg', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'makse', je: 'pank' } },
    ] },
    { id: 'uleandmine', nazev: 'Üleandmine', pole: [
      { id: 'predavane_datum', typ: 'datum', popis: 'Üleandmise kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
      { id: 'predavane_ora', typ: 'text', popis: 'Üleandmise kellaaeg', napoveda: 'Oluline, kui hiljem tuleb trahv.', placeholder: 'nt 14:30', sirka: 8, polovina: true },
      { id: 'votmed', typ: 'cislo', popis: 'Võtmete arv', placeholder: 'nt 2', sirka: 6, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Allkirjastamise koht', placeholder: 'nt Tallinn', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum_podpisu', typ: 'datum', popis: 'Allkirjastamise kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_sonadega: (d) => summaSonadega(d.cena) },
  clanky: [
    { nadpis: 'Pooled', vysvetleni: 'Kes lepingu sõlmivad. Andmed peavad ühtima isikut tõendavate dokumentidega.', odstavce: ['**Müüja:** {{p_jmeno}}, isikukood {{p_ik}}, aadress {{p_adresa}}', '**Ostja:** {{k_jmeno}}, isikukood {{k_ik}}, aadress {{k_adresa}}'] },
    { nadpis: 'Lepingu ese', vysvetleni: 'Milline sõiduk müüakse. Kõige olulisem on VIN-kood.', odstavce: ['Müüja müüb ja ostja ostab sõiduauto, mark ja mudel {{znacka}}, VIN-kood {{vin}}, registreerimismärk {{spz}}, esmane registreerimine {{rok}}, värv {{barva}} (edaspidi „sõiduk“).', 'Müüja kinnitab, et sõiduk kuulub talle, et see ei ole liisingus ega panditud ning et sellel ei ole muid kolmandate isikute õigusi.'] },
    { nadpis: 'Sõiduki seisukord', vysvetleni: 'Mida müüja sõidukist teab.', odstavce: ['Läbisõit allkirjastamise päeval on {{km}} km. Müüjale ei ole teada, et läbisõidumõõdikut oleks vahetatud või muudetud.', { volba: 'puudused', uvodVzor: 'Teadaolevad puudused (märkige üks variant):', moznosti: { ei: 'Müüjale ei ole sõiduki puudused teada.', jah: 'Müüja teavitas ostjat järgmistest sõiduki puudustest: {{puudused_kirjeldus}}' } }, 'Ostja kinnitab, et on sõidukiga tutvunud, teab selle seisukorda ja ostab selle olemasolevas seisukorras.'] },
    { nadpis: 'Hind ja maksmine', vysvetleni: 'Kui palju, kuidas ja millal makstakse.', odstavce: ['Sõiduki hind on **{{cena}}** (sõnadega: {{cena_sonadega}}).', { volba: 'makse', uvodVzor: 'Maksmise viis (märkige üks variant):', moznosti: { sularaha: 'Ostja tasus hinna sularahas lepingu allkirjastamisel. Müüja kinnitab oma allkirjaga, et sai kogu summa kätte.', pank: 'Ostja tasub hinna müüja pangakontole IBAN {{iban}} hiljemalt {{makse_tahtaeg}}.' } }] },
    { nadpis: 'Sõiduki üleandmine', vysvetleni: 'Millal ja millega ostja sõiduki saab.', odstavce: ['Müüja annab sõiduki ostjale üle {{predavane_datum}} kell {{predavane_ora}} koos {{votmed}} võtmega, registreerimistunnistuse ja muude sõiduki dokumentidega.', 'Üleandmisega läheb sõiduki juhusliku hävimise ja kahjustumise risk üle ostjale. Sellest hetkest vastutab ostja sõiduki kasutamise, eelkõige liikluseeskirja rikkumiste eest.'] },
    { nadpis: 'Omanikuvahetus', vysvetleni: 'Mis järgneb ja kes seda teeb.', odstavce: ['Pooled vormistavad omanikuvahetuse Transpordiameti e-teeninduses või teenindusbüroos 5 tööpäeva jooksul alates üleandmisest. Müüja algatab omanikuvahetuse ja ostja kinnitab selle.', 'Omanikuvahetuse riigilõivu ja võimaliku registreerimistasu tasub ostja, kui pooled ei ole kokku leppinud teisiti. Jooksva aasta mootorsõidukimaks jääb seaduse järgi müüja kanda. Ostja sõlmib liikluskindlustuse oma nimele.'] },
    { nadpis: 'Lõppsätted', vysvetleni: 'Formaalsused.', odstavce: ['Lepingus reguleerimata küsimustes kohaldatakse võlaõigusseaduse müügilepingu sätteid.', 'Leping on koostatud kahes samaväärses eksemplaris, millest kumbki pool sai ühe.'] },
  ],
};
