/** Darbuotojo pareiškimas nutraukti darbo sutartį – Lietuva (Darbo kodekso 55 str.: raštu, įspėjus ne vėliau kaip prieš 20 kalendorinių dienų; atšaukti per 3 darbo dienas). */
import type { Sablona } from '../typy';
import { pridejDny, pridejPracovniDny, naDatum, isoDatum } from '../terminy';
import { DK, PORASTE } from './saltiniai';

export const darboNutraukimas: Sablona = {
  kod: 'LT-DARBO-NUTRAUKIMAS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'lt', jazyk: 'lt',
  nazev: 'Pareiškimas dėl darbo sutarties nutraukimo', podnadpis: 'darbo sutarties nutraukimas darbuotojo iniciatyva (Darbo kodekso 55 straipsnis)',
  souborPdf: 'pareiskimas-del-darbo-sutarties-nutraukimo', paticka: PORASTE('LT-DARBO-NUTRAUKIMAS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'darbuotojas', vpravo: 'gavo (darbdavys, data)' },
  cislovatClanky: false,
  slovo: { n: 'pareiškimas', g: 'pareiškimo', a: 'pareiškimą', l: 'pareiškime' },
  pripominky: (d) => {
    const pateikta = naDatum(d.datum);
    const out = typeof d.pedeja === 'string' && d.pedeja ? [{ nazev: 'Paskutinė darbo diena', datum: d.pedeja, popis: 'Patikrinkite galutinį atsiskaitymą ir kompensaciją už nepanaudotas atostogas.' }] : [];
    if (pateikta) {
      out.unshift({ nazev: 'Įspėjimo termino pabaiga (20 kalendorinių dienų)', datum: isoDatum(pridejDny(pateikta, 20)), popis: 'Jei pareiškimas pateikiamas šią dieną.' });
      out.unshift({ nazev: 'Paskutinė diena atšaukti pareiškimą (3 darbo dienos)', datum: isoDatum(pridejPracovniDny(pateikta, 3, 'lt')), popis: 'Vėliau atšaukti galima tik darbdaviui sutikus.' });
    }
    return out;
  },
  coDal: ['Įteikite pareiškimą darbdaviui ir paprašykite savo egzemplioriuje patvirtinti gavimą arba siųskite jį el. paštu, pasirašę kvalifikuotu elektroniniu parašu.', 'Darbdavys ne vėliau kaip paskutinę darbo dieną įformina darbo sutarties pabaigą.', 'Patikrinkite galutinį atsiskaitymą: darbo užmokestį ir kompensaciją už nepanaudotas kasmetines atostogas.'],
  kontrola: [
    `Darbuotojas gali nutraukti neterminuotą ar terminuotą darbo sutartį rašytiniu pareiškimu, įspėjęs darbdavį ne vėliau kaip prieš 20 kalendorinių dienų ([Darbo kodekso 55 str.](${DK.url})).`,
    'Pareiškimą galima atšaukti ne vėliau kaip per tris darbo dienas nuo jo padavimo; vėliau – tik darbdaviui sutikus.',
    'Darbo sutartis baigiasi pasibaigus įspėjimo terminui. Susitarę su darbdaviu, galite sutartį nutraukti ir anksčiau – tada geriau rašyti šalių susitarimą.',
    'Dėl svarbių priežasčių (pvz., liga, kai darbdavys nemoka darbo užmokesčio) Darbo kodekso 56 straipsnis numato trumpesnį įspėjimą ir išeitinę išmoką – šis pavyzdys tam neskirtas.',
  ],
  zdroje: [DK],
  kroky: [{ id: 'duomenys', nazev: 'Darbuotojas ir darbdavys', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Darbuotojas – vardas, pavardė', sirka: 34, autocomplete: 'name' },
    { id: 'p_ik', typ: 'text', popis: 'Asmens kodas', sirka: 14, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Adresas', sirka: 46 },
    { id: 'amats', typ: 'text', popis: 'Pareigos', sirka: 30 },
    { id: 'k_jmeno', typ: 'text', popis: 'Darbdavys', placeholder: 'pvz., UAB „Pavyzdys“', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Darbdavio adresas', sirka: 46 },
    { id: 'ligums', typ: 'datum', popis: 'Darbo sutartis sudaryta', sirka: 14, polovina: true },
    { id: 'pedeja', typ: 'datum', popis: 'Paskutinė darbo diena', napoveda: 'Ne anksčiau kaip po 20 kalendorinių dienų nuo pareiškimo pateikimo, jei nesusitarta kitaip.', sirka: 14, polovina: true },
    { id: 'misto', typ: 'text', popis: 'Vieta', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Pareiškimas dėl darbo sutarties nutraukimo', odstavce: [
    '**Darbuotojas:** {{p_jmeno}}, asmens kodas {{p_ik}}, {{p_adresa}}, pareigos {{amats}}',
    '**Darbdavys:** {{k_jmeno}}, {{k_adresa}}',
    'Vadovaudamasis Lietuvos Respublikos darbo kodekso 55 straipsnio 1 dalimi, prašau nutraukti {{ligums}} sudarytą darbo sutartį.',
    'Mano paskutinė darbo diena – {{pedeja}}.',
    'Prašau išmokėti galutinį atsiskaitymą, įskaitant kompensaciją už nepanaudotas kasmetines atostogas.',
  ] }],
};
