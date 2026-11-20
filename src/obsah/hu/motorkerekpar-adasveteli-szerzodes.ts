import type { StrankaDokumentu } from '../typy';
import { preloz } from '../../sablony/motorka';
import auto from './gepjarmu-adasveteli-szerzodes';
import { motorkerekparAdasvetel as sablona, NAHRADY } from '../../sablony/hu/motorkerekpar-adasveteli-szerzodes';

/** Stejný ověřený obsah jako stránka auta; liší se texty pro motorku. */
const L = preloz(auto.landing, NAHRADY);

const stranka: StrankaDokumentu = {
  ...auto,
  sablona,
  nazev: "Motorkerékpár adásvételi szerződés",
  nazevA: "motorkerékpár adásvételi szerződést",
  katalog: { ...auto.katalog, popis: "Motor, robogó vagy quad eladása magánszemélyek között.", ilustrace: 'motorka', slova: ["motor eladás", "motorkerékpár", "robogó", "segédmotoros kerékpár", "quad", "motor adásvételi"] },
  landing: {
    ...L,
    title: "Motorkerékpár adásvételi szerződés {rok} – ingyenes PDF minta",
    description: "Ingyenes adásvételi szerződés motorra, robogóra vagy quadra: alvázszám, km-állás, hibák, két tanú, vételár betűvel, átírás 15 napon belül. PDF és Word.",
    perex: "Motorkerékpár, robogó, segédmotoros kerékpár vagy quad eladásához magánszemélyek között – két tanúval, ahogy az átíráshoz kell.",
    hodiSe: ["motort, robogót vagy quadot ad el vagy vesz magánszemélytől", "a jármű forgalomba van helyezve, van forgalmi engedélye", "írásban akarja rögzíteni az árat, az állapotot és az átadást"],
    nehodiSe: ["kereskedőtől vásárol – neki saját szerződése van", "a motor lízingelt vagy hitelfedezet"],
    faq: [
      {"q": "Más a szerződés motorra, mint autóra?", "a": "Jogilag nem – mindkettő gépjármű adásvételi szerződés. Gyakorlati különbség: az alvázszám a vázba van beütve, a tartozékokat (dobozok, kipufogó) érdemes beleírni."},
      {"q": "Kellenek tanúk?", "a": "Az átíráshoz teljes bizonyító erejű magánokirat kell: két tanú aláírása nevükkel és lakcímükkel, vagy ügyvédi ellenjegyzés."},
      ...(L.faq ?? []).slice(-1),
    ],
  },
  vytvorit: { ...auto.vytvorit, title: "Motorkerékpár adásvételi szerződés kitöltése online – ingyen PDF", description: "Adásvételi szerződés motorra, robogóra vagy quadra online, két tanúval és vételárral betűvel. Ingyenes PDF vagy Word." },
};

export default stranka;
