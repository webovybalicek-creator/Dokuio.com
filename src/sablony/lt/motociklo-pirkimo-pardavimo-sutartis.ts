/** Motociklo pirkimo–pardavimo sutartis – Lietuva. Tas pats patikrintas tekstas kaip automobiliui; deklaravimas Regitroje. */
import type { Sablona } from '../typy';
import { autoSutartis as a } from './automobilio-pirkimo-pardavimo-sutartis';
import { naMotorku, type Nahrady } from '../motorka';

export const NAHRADY: Nahrady = [
  [/parduoda, o pirkėjas perka lengvąjį automobilį, markė ir modelis/g, 'parduoda, o pirkėjas perka motociklą, markė ir modelis'],
  [/Toyota Corolla/g, 'Yamaha MT-07'],
  [/įskilęs priekinis stiklas, neveikia kondicionierius/g, 'nusidėvėjusi grandinė, įbrėžimai ant degalų bako'],
  [/pvz\., 168400/g, 'pvz., 21500'],
  [/pvz\., 7900/g, 'pvz., 5400'],
];

export const motociklasSutartis: Sablona = naMotorku(a, {
  kod: 'LT-MOTO',
  nazev: 'Motociklo pirkimo–pardavimo sutartis',
  souborPdf: 'motociklo-pirkimo-pardavimo-sutartis',
  paticka: a.paticka.replace('LT-AUTO', 'LT-MOTO'),
  nahrady: NAHRADY,
  clanky: true,
  vin: 'Motociklo jis paprastai įkaltas rėme prie vairo.',
  tip: 'Įrašykite į sutartį įrangą ir pakeitimus (kofrus, apsaugas, duslintuvą) ir patikrinkite, ar įregistruoti pakeitimai, kuriems reikia leidimo.',
});
