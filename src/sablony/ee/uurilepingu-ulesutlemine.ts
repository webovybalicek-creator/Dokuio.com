/** Üürilepingu ülesütlemine üürniku poolt – Eesti. Tähtajatu leping: vähemalt 3 kuud ette (VÕS 312 lg 1); tähtajaline: ainult erakorraliselt mõjuval põhjusel (VÕS 313). */
import type { Sablona } from '../typy';
import { VOS, JALUS } from './allikad';

export const uurUlesutlemine: Sablona = {
  kod: 'EE-UUR-ULESUTLEMINE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Üürilepingu ülesütlemise avaldus', podnadpis: 'üürniku avaldus eluruumi üürilepingu lõpetamiseks',
  souborPdf: 'uurilepingu-ulesutlemine', paticka: JALUS('EE-UUR-ULESUTLEMINE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'üürnik', vpravo: 'kätte saanud (üürileandja, soovi korral)' },
  cislovatClanky: false,
  slovo: { n: 'avaldus', g: 'avalduse', a: 'avaldust', l: 'avalduses' },
  coDal: ['Saatke avaldus kirjalikku taasesitamist võimaldavas vormis (nt digiallkirjastatult e-postiga või tähtkirjaga).', 'Leppige kokku võtmete üleandmise päev ja koostage üleandmise akt.', 'Teatage arvestite näidud ja lõpetage oma nimel olevad lepingud (elekter, internet).'],
  kontrola: [
    `Tähtajatu üürilepingu võib üürnik korraliselt üles öelda, teatades sellest vähemalt kolm kuud ette ([VÕS § 312](${VOS.url})).`,
    'Tähtajalist lepingut korraliselt üles öelda ei saa – ainult erakorraliselt mõjuval põhjusel või kokkuleppel üürileandjaga.',
    'Tagatist ei saa automaatselt viimase kuu üüriga tasaarvestada – leppige see kirjalikult kokku.',
    'Kiirem ja turvalisem lahendus on sageli kokkulepe üürilepingu lõpetamiseks.',
  ],
  zdroje: [VOS],
  kroky: [{ id: 'andmed', nazev: 'Ülesütlemine', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Üürileandja – ees- ja perekonnanimi', sirka: 34 },
    { id: 'p_adresa', typ: 'text', popis: 'Üürileandja aadress', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Üürnik – ees- ja perekonnanimi', sirka: 34, autocomplete: 'name' },
    { id: 'byt', typ: 'text', popis: 'Eluruumi aadress', sirka: 46 },
    { id: 'lepingu_kuupaev', typ: 'datum', popis: 'Üürilepingu kuupäev', sirka: 14, polovina: true },
    { id: 'alus', typ: 'volba', popis: 'Ülesütlemise alus', moznosti: [ { hodnota: 'korraline', popis: 'tähtajatu lepingu korraline ülesütlemine (3 kuud ette)' }, { hodnota: 'erakorraline', popis: 'erakorraline ülesütlemine mõjuval põhjusel' } ] },
    { id: 'pohjus', typ: 'textarea', popis: 'Mõjuv põhjus', placeholder: 'nt eluruum on tervisele ohtlik ja puudust ei kõrvaldatud', sirka: 56, zobrazitKdyz: { pole: 'alus', je: 'erakorraline' } },
    { id: 'lopp', typ: 'datum', popis: 'Leping lõpeb', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'IBAN tagatise tagastamiseks', placeholder: 'EE38 …', sirka: 30 },
    { id: 'k_adresa', typ: 'text', popis: 'Üürniku kontaktaadress', sirka: 46 },
    { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true },
    { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Üürilepingu ülesütlemine', odstavce: [
    '**Kellele:** {{p_jmeno}}, {{p_adresa}}',
    'Ütlen üles eluruumi üürilepingu aadressil {{byt}}, mis on sõlmitud {{lepingu_kuupaev}}.',
    { volba: 'alus', uvodVzor: 'Ülesütlemise alus (märkige üks variant):', moznosti: { korraline: 'Ütlen tähtajatu üürilepingu korraliselt üles, järgides kolmekuulist etteteatamistähtaega.', erakorraline: 'Ütlen üürilepingu erakorraliselt üles mõjuval põhjusel: {{pohjus}}' } },
    'Leping lõpeb {{lopp}}. Tagastan eluruumi ja võtmed selleks päevaks ning teen ettepaneku koostada üleandmise akt.',
    'Palun tagastage tagatisraha, arvates maha põhjendatud nõuded, kontole IBAN {{iban}}.',
    '**Üürnik:** {{k_jmeno}}, {{k_adresa}}',
  ] }],
};
