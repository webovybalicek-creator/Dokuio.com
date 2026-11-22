/** Vallasasja ostu-müügileping eraisikute vahel – Eesti (VÕS 208 jj). */
import type { Sablona } from '../typy';
import { summaSonadega } from './arvud';
import { VOS, NOU_ISIK, NOU_SULARAHA, JALUS } from './allikad';

export const ostuMuugileping: Sablona = {
  kod: 'EE-MUUK', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Ostu-müügileping', podnadpis: 'vallasasja müük eraisikute vahel (võlaõigusseaduse § 208 jj)',
  souborPdf: 'ostu-muugileping', paticka: JALUS('EE-MUUK'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'müüja', vpravo: 'ostja' },
  slovo: { n: 'leping', g: 'lepingu', a: 'lepingut', l: 'lepingus' },
  coDal: ['Printige leping kahes eksemplaris ja allkirjastage mõlemad.', 'Andke asi üle koos tarvikute ja dokumentidega.'],
  kontrola: [
    'Kirjeldage asja täpselt (mark, mudel, seerianumber, tarvikud).',
    'Kirjutage üles kõik teadaolevad puudused – puuduse eest, millest ostja lepingu sõlmimisel teadis, müüja ei vastuta.',
    'Müüja vastutab asja lepingutingimustele mittevastavuse eest; vastutuse välistamine ei kehti, kui müüja puuduse pahauskselt varjas.',
    NOU_ISIK,
    NOU_SULARAHA,
  ],
  zdroje: [VOS],
  kroky: [
    { id: 'pooled', nazev: 'Müüja ja ostja', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Müüja – ees- ja perekonnanimi', placeholder: 'nt Mari Tamm', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Müüja aadress', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Ostja – ees- ja perekonnanimi', placeholder: 'nt Jaan Kask', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Ostja aadress', sirka: 46 },
    ] },
    { id: 'asi', nazev: 'Asi ja hind', pole: [
      { id: 'vec', typ: 'textarea', popis: 'Asja kirjeldus', placeholder: 'nt elektrijalgratas Cube Kathmandu, seerianumber WCU123456, koos laadijaga', sirka: 64 },
      { id: 'seisukord', typ: 'text', popis: 'Seisukord ja teadaolevad puudused', placeholder: 'nt kasutatud, kriimustus raamil', sirka: 56 },
      { id: 'cena', typ: 'castka', popis: 'Hind (eurot)', sirka: 12, polovina: true },
      { id: 'makse', typ: 'volba', popis: 'Maksmine', moznosti: [ { hodnota: 'sularaha', popis: 'sularahas allkirjastamisel' }, { hodnota: 'pank', popis: 'pangaülekandega' } ] },
      { id: 'iban', typ: 'text', popis: 'Müüja IBAN', placeholder: 'EE38 2200 2210 2014 5685', sirka: 30, zobrazitKdyz: { pole: 'makse', je: 'pank' } },
      { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_sonadega: (d) => summaSonadega(d.cena) },
  clanky: [
    { nadpis: 'Pooled', odstavce: ['**Müüja:** {{p_jmeno}}, aadress {{p_adresa}}', '**Ostja:** {{k_jmeno}}, aadress {{k_adresa}}'] },
    { nadpis: 'Lepingu ese', odstavce: ['Müüja müüb ja ostja ostab järgmise asja: {{vec}}.', 'Seisukord ja teadaolevad puudused: {{seisukord}}. Ostja on asjaga tutvunud ja ostab selle olemasolevas seisukorras.', 'Müüja kinnitab, et asi kuulub talle ja sellel ei ole kolmandate isikute õigusi.'] },
    { nadpis: 'Hind', odstavce: ['Hind on **{{cena}}** (sõnadega: {{cena_sonadega}}).', { volba: 'makse', uvodVzor: 'Maksmine (märkige üks variant):', moznosti: { sularaha: 'Ostja tasus hinna sularahas allkirjastamisel; müüja kinnitab raha kättesaamist oma allkirjaga.', pank: 'Ostja kannab hinna müüja kontole IBAN {{iban}}. Asi antakse üle pärast summa laekumist.' } }] },
    { nadpis: 'Üleandmine ja lõppsätted', odstavce: ['Üleandmisega saab ostja asja omanikuks ja asja juhusliku hävimise risk läheb üle temale.', 'Lepingus reguleerimata küsimustes kohaldatakse võlaõigusseaduse müügilepingu sätteid. Leping on koostatud kahes samaväärses eksemplaris.'] },
  ],
};
