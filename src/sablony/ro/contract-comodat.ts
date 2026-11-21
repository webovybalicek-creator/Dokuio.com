/** Contract de comodat – România (Codul civil, împrumutul de folosință): folosința gratuită a unui bun și restituirea aceluiași bun. */
import type { Sablona } from '../typy';
import { COD_CIVIL, SFAT_IDENTITATE, SUBSOL } from './surse';

export const contractComodat: Sablona = {
  kod: 'RO-COMODAT', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Contract de comodat', podnadpis: 'împrumut de folosință gratuit, conform Codului civil',
  souborPdf: 'contract-comodat', paticka: SUBSOL('RO-COMODAT'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'comodant', vpravo: 'comodatar' },
  slovo: { n: 'contract', g: 'contractului', a: 'contractul', l: 'contract' },
  coDal: ['La predare fotografiați bunul și notați starea lui.', 'La restituire comparați starea cu cea din contract.'],
  kontrola: [
    'Comodatul este gratuit – dacă se plătește o sumă pentru folosință, este o închiriere.',
    'Treceți valoarea bunului: ușurează înțelegerea privind despăgubirea dacă bunul se deteriorează sau se pierde.',
    'Comodatarul folosește bunul numai potrivit destinației convenite și nu îl poate da altuia fără acordul comodantului (Codul civil).',
    'Pentru o mașină completați și procesul-verbal de predare-primire cu kilometrajul și ora.',
    SFAT_IDENTITATE,
  ],
  zdroje: [COD_CIVIL],
  kroky: [
    { id: 'parti', nazev: 'Comodantul și comodatarul', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Comodant (dă bunul) – nume și prenume', placeholder: 'de ex. Andrei Popescu', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Domiciliul', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Comodatar (primește bunul) – nume și prenume', placeholder: 'de ex. Mihai Stan', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Domiciliul', sirka: 46 },
    ] },
    { id: 'bun', nazev: 'Bunul și restituirea', pole: [
      { id: 'bun', typ: 'textarea', popis: 'Bunul', placeholder: 'de ex. remorcă, cort pentru 4 persoane, bormașină Bosch', sirka: 64 },
      { id: 'stare', typ: 'text', popis: 'Starea la predare', placeholder: 'de ex. fără defecte, zgârietură pe capac', sirka: 56 },
      { id: 'valoare', typ: 'castka', popis: 'Valoarea bunului (lei)', sirka: 12, polovina: true },
      { id: 'scop', typ: 'text', popis: 'Scopul folosinței', placeholder: 'de ex. concediu la mare', sirka: 46 },
      { id: 'restituire', typ: 'datum', popis: 'Restituire cel târziu la', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Părțile', odstavce: ['**Comodant:** {{p_jmeno}}, domiciliat în {{p_adresa}}', '**Comodatar:** {{k_jmeno}}, domiciliat în {{k_adresa}}'] },
    { nadpis: 'Obiectul comodatului', odstavce: ['Comodantul predă comodatarului spre folosință gratuită următorul bun: {{bun}}.', 'Starea la predare: {{stare}}. Părțile evaluează bunul la {{valoare}}.'] },
    { nadpis: 'Folosința', odstavce: ['Comodatarul folosește bunul numai în scopul: {{scop}}, cu prudență și potrivit naturii lui.', 'Comodatarul nu poate da bunul în folosință altei persoane fără acordul scris al comodantului. Cheltuielile obișnuite de folosință sunt suportate de comodatar.'] },
    { nadpis: 'Restituirea', odstavce: ['Comodatarul restituie bunul cel târziu la data de {{restituire}}, în starea în care l-a primit, ținând seama de uzura normală.', 'Dacă bunul se deteriorează sau se pierde din culpa comodatarului, acesta despăgubește comodantul.'] },
    { nadpis: 'Dispoziții finale', odstavce: ['Pentru tot ce nu este reglementat se aplică dispozițiile Codului civil. Contractul a fost încheiat în două exemplare originale.'] },
  ],
};
