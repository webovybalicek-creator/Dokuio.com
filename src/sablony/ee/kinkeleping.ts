/**
 * Kinkeleping – Eesti (VÕS 259 jj). Täidetud kinkeleping kehtib ka vorminõudeta (VÕS 261 lg 2); kinkija võib jämeda tänamatuse
 * korral taganeda (VÕS 267–268). Kingitus füüsiliselt isikult füüsilisele isikule ei ole reeglina tulumaksuga maksustatav (EMTA).
 */
import type { Sablona } from '../typy';
import { summaSonadega } from './arvud';
import { VOS, KINGITUS, NOU_ISIK, JALUS } from './allikad';

export const kinkeleping: Sablona = {
  kod: 'EE-KINK', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Kinkeleping', podnadpis: 'rahasumma või vallasasja kinkimine koos üleandmisega (võlaõigusseaduse § 259 jj)',
  souborPdf: 'kinkeleping', paticka: JALUS('EE-KINK'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'kinkija', vpravo: 'kingisaaja' },
  slovo: { n: 'leping', g: 'lepingu', a: 'lepingut', l: 'lepingus' },
  coDal: ['Andke asi üle või kandke raha üle selgitusega „kingitus lepingu alusel“.', 'Kumbki pool hoiab alles ühe allkirjastatud eksemplari.'],
  kontrola: [
    'Kingitus, mis antakse kohe üle, kehtib ka ilma kirjaliku vormita (VÕS § 261 lg 2); leping on siiski hea tõend kingituse ja selle väärtuse kohta.',
    'Kinnisasja kinkimiseks on vaja notariaalselt tõestatud lepingut; sõiduki puhul vormistatakse lisaks omanikuvahetus Transpordiametis.',
    `Füüsiliselt isikult füüsilisele isikule tehtud kingitus ei ole reeglina tulumaksuga maksustatav ([Maksu- ja Tolliamet](${KINGITUS.url})). Kinkemaksu Eestis ei ole.`,
    'Kinkija võib lepingust taganeda näiteks kingisaaja jämeda tänamatuse korral (VÕS § 267–268).',
    NOU_ISIK,
  ],
  zdroje: [VOS, KINGITUS],
  kroky: [
    { id: 'pooled', nazev: 'Kinkija ja kingisaaja', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Kinkija – ees- ja perekonnanimi', placeholder: 'nt Mari Tamm', sirka: 34, autocomplete: 'name' },
      { id: 'p_ik', typ: 'text', popis: 'Isikukood', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Aadress', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Kingisaaja – ees- ja perekonnanimi', placeholder: 'nt Liisa Tamm', sirka: 34 },
      { id: 'k_ik', typ: 'text', popis: 'Isikukood', sirka: 14, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Aadress', sirka: 46 },
    ] },
    { id: 'kingitus', nazev: 'Kingitus', pole: [
      { id: 'liik', typ: 'volba', popis: 'Mida kingitakse', moznosti: [ { hodnota: 'raha', popis: 'rahasumma' }, { hodnota: 'asi', popis: 'vallasasi' } ] },
      { id: 'castka', typ: 'castka', popis: 'Summa (eurot)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'liik', je: 'raha' } },
      { id: 'asi', typ: 'textarea', popis: 'Asja kirjeldus', placeholder: 'nt sülearvuti Lenovo ThinkPad, seerianumber …', sirka: 56, zobrazitKdyz: { pole: 'liik', je: 'asi' } },
      { id: 'vaartus', typ: 'castka', popis: 'Asja väärtus (eurot)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'liik', je: 'asi' } },
      { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_sonadega: (d) => summaSonadega(d.castka), vaartus_sonadega: (d) => summaSonadega(d.vaartus) },
  clanky: [
    { nadpis: 'Pooled', odstavce: ['**Kinkija:** {{p_jmeno}}, isikukood {{p_ik}}, aadress {{p_adresa}}', '**Kingisaaja:** {{k_jmeno}}, isikukood {{k_ik}}, aadress {{k_adresa}}'] },
    { nadpis: 'Kingituse ese', odstavce: [{ volba: 'liik', uvodVzor: 'Kingitus (märkige üks variant):', moznosti: { raha: 'Kinkija kingib kingisaajale **{{castka}}** (sõnadega: {{castka_sonadega}}), mille ta kannab üle pangakontole või annab üle lepingu allkirjastamisel.', asi: 'Kinkija kingib kingisaajale järgmise vallasasja: {{asi}}, väärtusega {{vaartus}} (sõnadega: {{vaartus_sonadega}}), mille ta annab üle lepingu allkirjastamisel.' } }, 'Kingisaaja võtab kingituse vastu ja kinnitab, et sai selle kätte.'] },
    { nadpis: 'Lõppsätted', odstavce: ['Lepingus reguleerimata küsimustes kohaldatakse võlaõigusseaduse kinkelepingu sätteid.', 'Leping on koostatud kahes samaväärses eksemplaris.'] },
  ],
};
