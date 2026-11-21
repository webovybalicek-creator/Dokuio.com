/**
 * Contract de donație – dar manual (bunuri mobile corporale, inclusiv bani, de până la 25.000 lei, cu predarea bunului) – România.
 * Codul civil art. 1011: donația se încheie prin înscris autentic sub sancțiunea nulității absolute; darul manual face excepție.
 * Sumele primite de la rude sunt operațiuni de donație/dar manual neimpozabile (ANAF, 12. 3. 2025).
 */
import type { Sablona } from '../typy';
import { sumaInLitere } from './numere';
import { COD_CIVIL, ANAF_DONATII, SFAT_IDENTITATE, SUBSOL } from './surse';

export const contractDonatie: Sablona = {
  kod: 'RO-DONATIE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Contract de donație (dar manual)', podnadpis: 'pentru bani sau bunuri mobile de până la 25.000 lei, cu predarea bunului',
  souborPdf: 'contract-donatie', paticka: SUBSOL('RO-DONATIE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'donator', vpravo: 'donatar' },
  slovo: { n: 'contract', g: 'contractului', a: 'contractul', l: 'contract' },
  coDal: ['Predați bunul sau transferați banii în cont cu mențiunea „donație conform contractului din …”.', 'Fiecare parte păstrează un exemplar semnat.'],
  kontrola: [
    'Donația se încheie, ca regulă, prin înscris autentic la notar – altfel este nulă. Excepție face darul manual: bunuri mobile corporale (inclusiv bani) de până la 25.000 lei, valabil prin acordul părților și predarea bunului (art. 1011 Cod civil).',
    'Peste 25.000 lei, pentru imobile sau pentru o donație fără predare imediată mergeți la notar – acest model nu este potrivit.',
    'Sumele primite de la rude sunt, potrivit ANAF, donații sau daruri manuale și se încadrează la venituri neimpozabile ([ANAF](https://static.anaf.ro/static/3/Anaf/20250312115842_com%20281%20precizari%20anaf.pdf)).',
    'Donația unui vehicul: transferul se înregistrează tot pe formularul tipizat Model 2026 ITL 054, cu viza fiscală.',
    SFAT_IDENTITATE,
  ],
  zdroje: [COD_CIVIL, ANAF_DONATII],
  kroky: [
    { id: 'parti', nazev: 'Donatorul și donatarul', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Donator – nume și prenume', placeholder: 'de ex. Andrei Popescu', sirka: 34, autocomplete: 'name' },
      { id: 'p_cnp', typ: 'text', popis: 'CNP', sirka: 15, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Domiciliul', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Donatar – nume și prenume', placeholder: 'de ex. Ana Popescu', sirka: 34 },
      { id: 'k_cnp', typ: 'text', popis: 'CNP', sirka: 15, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Domiciliul', sirka: 46 },
      { id: 'rudenie', typ: 'text', popis: 'Relația dintre părți', placeholder: 'de ex. tată și fiică', sirka: 30 },
    ] },
    { id: 'dar', nazev: 'Darul', pole: [
      { id: 'tip', typ: 'volba', popis: 'Ce se donează', moznosti: [ { hodnota: 'bani', popis: 'o sumă de bani' }, { hodnota: 'bun', popis: 'un bun mobil' } ] },
      { id: 'castka', typ: 'castka', popis: 'Suma (lei)', napoveda: 'Cel mult 25.000 lei pentru darul manual.', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'tip', je: 'bani' } },
      { id: 'bun', typ: 'textarea', popis: 'Descrierea bunului', placeholder: 'de ex. laptop Lenovo ThinkPad, serie …', sirka: 64, zobrazitKdyz: { pole: 'tip', je: 'bun' } },
      { id: 'valoare', typ: 'castka', popis: 'Valoarea estimată a bunului (lei)', napoveda: 'Cel mult 25.000 lei pentru darul manual.', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'tip', je: 'bun' } },
      { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_litere: (d) => sumaInLitere(d.castka), valoare_litere: (d) => sumaInLitere(d.valoare) },
  clanky: [
    { nadpis: 'Părțile', odstavce: ['**Donator:** {{p_jmeno}}, CNP {{p_cnp}}, domiciliat în {{p_adresa}}', '**Donatar:** {{k_jmeno}}, CNP {{k_cnp}}, domiciliat în {{k_adresa}}', 'Relația dintre părți: {{rudenie}}.'] },
    { nadpis: 'Obiectul donației', odstavce: [{ volba: 'tip', uvodVzor: 'Darul (bifați o variantă):', moznosti: { bani: 'Donatorul donează donatarului suma de **{{castka}}** (în litere: {{castka_litere}}), pe care i-o remite la semnarea prezentului contract sau o transferă în contul donatarului.', bun: 'Donatorul donează donatarului următorul bun mobil: {{bun}}, evaluat de părți la {{valoare}} (în litere: {{valoare_litere}}), pe care i-l predă la semnarea prezentului contract.' } }, 'Donatarul acceptă donația și confirmă primirea darului.'] },
    { nadpis: 'Forma donației', odstavce: ['Părțile declară că donația are ca obiect bunuri mobile corporale cu o valoare de cel mult 25.000 lei și constituie un dar manual, încheiat valabil prin acordul lor și prin predarea bunului, potrivit art. 1011 alin. (4) din Codul civil. Prezentul înscris servește ca dovadă a donației.'] },
    { nadpis: 'Dispoziții finale', odstavce: ['Eventualele cheltuieli legate de donație sunt suportate de donatar.', 'Pentru tot ce nu este reglementat se aplică dispozițiile Codului civil. Contractul a fost încheiat în două exemplare originale.'] },
  ],
};
