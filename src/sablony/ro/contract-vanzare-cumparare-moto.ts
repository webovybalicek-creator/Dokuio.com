/** Contract de vânzare-cumpărare motocicletă – România. Același text verificat ca la autovehicul (formular Model 2026 ITL 054). */
import type { Sablona } from '../typy';
import { contractVanzareAuto as a } from './contract-vanzare-cumparare-auto';
import { naMotorku, type Nahrady } from '../motorka';

export const NAHRADY: Nahrady = [
  [/Dacia Logan/g, 'Yamaha MT-07'],
  [/parbriz fisurat, aerul condiționat nu funcționează/g, 'lanț uzat, zgârieturi pe rezervor'],
  [/de ex\. 154320/g, 'de ex. 24300'],
  [/de ex\. 45000/g, 'de ex. 28000'],
  [/radiați mașina/g, 'radiați motocicleta'],
  [/Mașina nu trebuie/g, 'Motocicleta nu trebuie'],
  [/sub parbriz/g, 'pe cadru'],
];

export const contractVanzareMoto: Sablona = naMotorku(a, {
  kod: 'RO-MOTO',
  nazev: 'Contract de vânzare-cumpărare motocicletă',
  souborPdf: 'contract-vanzare-cumparare-moto',
  paticka: a.paticka!.replace('RO-AUTO', 'RO-MOTO'),
  nahrady: NAHRADY,
  vin: 'Pe motocicletă este de regulă ștanțat pe cadru, lângă furcă.',
  tip: 'Treceți echipamentele și modificările (genți, protecții, eșapament) și verificați dacă modificările care necesită omologare sunt înscrise în certificatul de înmatriculare.',
});
