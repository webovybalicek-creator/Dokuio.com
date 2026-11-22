/** Töötaja avaldus töölepingu ülesütlemiseks – Eesti. Etteteatamine vähemalt 30 kalendripäeva (TLS § 98), vorm § 95. */
import type { Sablona } from '../typy';
import { pridejDny, naDatum, isoDatum } from '../terminy';
import { TLS, JALUS } from './allikad';

export const toolepinguUlesutlemine: Sablona = {
  kod: 'EE-TOOLEPING-ULESUTLEMINE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ee', jazyk: 'et',
  nazev: 'Töölepingu ülesütlemise avaldus', podnadpis: 'töötaja korraline ülesütlemine (töölepingu seaduse § 98)',
  souborPdf: 'toolepingu-ulesutlemine', paticka: JALUS('EE-TOOLEPING-ULESUTLEMINE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'töötaja', vpravo: 'kätte saanud (tööandja, kuupäev)' },
  cislovatClanky: false,
  slovo: { n: 'avaldus', g: 'avalduse', a: 'avaldust', l: 'avalduses' },
  pripominky: (d) => {
    const ant = naDatum(d.datum);
    const out = typeof d.viimane === 'string' && d.viimane ? [{ nazev: 'Viimane tööpäev', datum: d.viimane, popis: 'Kontrollige lõpparvet ja kasutamata puhkuse hüvitist.' }] : [];
    if (ant) out.unshift({ nazev: 'Varaseim lõppemise päev (30 kalendripäeva)', datum: isoDatum(pridejDny(ant, 30)), popis: 'Kui avaldus antakse üle sel päeval.' });
    return out;
  },
  coDal: ['Andke avaldus tööandjale üle ja paluge tal kätte saamist teie eksemplaril kinnitada, või saatke see digiallkirjastatult e-postiga.', 'Tööandja kannab töötamise lõppemise töötamise registrisse.', 'Kontrollige lõpparvet: töötasu ja kasutamata põhipuhkuse hüvitis.'],
  kontrola: [
    `Tähtajatu töölepingu võib töötaja üles öelda põhjust esitamata, teatades sellest ette vähemalt 30 kalendripäeva ([TLS § 98](${TLS.url})).`,
    `Ülesütlemine peab olema kirjalikku taasesitamist võimaldavas vormis, nt allkirjastatud paber või e-kiri ([TLS § 95](${TLS.url})).`,
    'Tööandjaga võib kokku leppida ka varasema lõppemise – sel juhul kirjutage avaldusse kokkulepitud kuupäev.',
    'Tähtajalise töölepingu saab töötaja üldjuhul üles öelda ainult erakorraliselt mõjuval põhjusel; vajadusel leppige lõpetamine tööandjaga kokku.',
  ],
  zdroje: [TLS],
  kroky: [{ id: 'andmed', nazev: 'Töötaja ja tööandja', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Töötaja – ees- ja perekonnanimi', sirka: 34, autocomplete: 'name' },
    { id: 'p_ik', typ: 'text', popis: 'Isikukood', sirka: 14, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Aadress', sirka: 46 },
    { id: 'pozice', typ: 'text', popis: 'Ametikoht', sirka: 30 },
    { id: 'k_jmeno', typ: 'text', popis: 'Tööandja', placeholder: 'nt Näidis OÜ', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Tööandja aadress', sirka: 46 },
    { id: 'leping', typ: 'datum', popis: 'Tööleping sõlmiti', sirka: 14, polovina: true },
    { id: 'viimane', typ: 'datum', popis: 'Viimane tööpäev', napoveda: 'Vähemalt 30 kalendripäeva pärast avalduse üleandmist, kui ei ole kokku lepitud teisiti.', sirka: 14, polovina: true },
    { id: 'misto', typ: 'text', popis: 'Koht', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Kuupäev', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Avaldus töölepingu ülesütlemiseks', odstavce: [
    '**Töötaja:** {{p_jmeno}}, isikukood {{p_ik}}, {{p_adresa}}, ametikoht {{pozice}}',
    '**Tööandja:** {{k_jmeno}}, {{k_adresa}}',
    'Ütlen üles {{leping}} sõlmitud töölepingu töölepingu seaduse § 98 alusel.',
    'Minu viimane tööpäev on {{viimane}}.',
    'Palun maksta lõpparve, sealhulgas kasutamata puhkuse hüvitis, ning kanda töötamise lõppemine töötamise registrisse.',
  ] }],
};
