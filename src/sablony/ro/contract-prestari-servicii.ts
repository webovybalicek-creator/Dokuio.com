/** Contract de antrepriză (lucrări și servicii cu un meseriaș) – România (Codul civil, antrepriza). Beneficiarul verifică lucrarea la recepție și semnalează viciile. */
import type { Sablona } from '../typy';
import { sumaInLitere } from './numere';
import { COD_CIVIL, SFAT_IDENTITATE, SUBSOL } from './surse';

export const contractAntrepriza: Sablona = {
  kod: 'RO-ANTREPRIZA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Contract de antrepriză', podnadpis: 'pentru executarea unei lucrări, conform Codului civil',
  souborPdf: 'contract-prestari-servicii', paticka: SUBSOL('RO-ANTREPRIZA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'beneficiar', vpravo: 'antreprenor (executant)' },
  slovo: { n: 'contract', g: 'contractului', a: 'contractul', l: 'contract' },
  coDal: ['Tipăriți contractul în două exemplare și semnați-le pe amândouă.', 'La recepție verificați lucrarea și comunicați imediat în scris viciile constatate.', 'Avansul și plata finală faceți-le în cont, pe bază de factură.'],
  kontrola: [
    'Descrieți lucrarea cât mai exact – volumul, materialele, cine le cumpără și până când trebuie terminată.',
    'La recepție beneficiarul verifică lucrarea și semnalează viciile aparente; altfel se poate considera că a acceptat lucrarea (Codul civil, antrepriza).',
    'Stabiliți un preț fix sau o modalitate clară de calcul; lucrările suplimentare stabiliți-le în scris.',
    'Pentru construcții și lucrări mari la clădire se aplică reguli speciale și pot fi necesare autorizații.',
    SFAT_IDENTITATE,
  ],
  zdroje: [COD_CIVIL],
  kroky: [
    { id: 'parti', nazev: 'Beneficiarul și antreprenorul', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Beneficiar – nume și prenume', placeholder: 'de ex. Ana Dumitrescu', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Domiciliul beneficiarului', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Antreprenor – nume sau denumire (PFA, SRL)', placeholder: 'de ex. Zugrăveli Ionescu PFA', sirka: 40 },
      { id: 'k_cui', typ: 'text', popis: 'CUI / CIF antreprenor', sirka: 12, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Sediul antreprenorului', sirka: 46 },
    ] },
    { id: 'lucrare', nazev: 'Lucrarea, prețul și termenul', pole: [
      { id: 'descriere', typ: 'textarea', popis: 'Descrierea lucrării', placeholder: 'de ex. zugrăvirea pereților și tavanelor într-un apartament de 60 m², în două straturi, culoare albă', sirka: 64 },
      { id: 'loc_lucrare', typ: 'text', popis: 'Locul executării', sirka: 46 },
      { id: 'materiale', typ: 'volba', popis: 'Materialele le cumpără', moznosti: [ { hodnota: 'antreprenor', popis: 'antreprenorul (incluse în preț)' }, { hodnota: 'beneficiar', popis: 'beneficiarul' } ] },
      { id: 'cena', typ: 'castka', popis: 'Prețul total (lei)', sirka: 12, polovina: true },
      { id: 'avans', typ: 'castka', popis: 'Avans (lei, opțional)', sirka: 12, polovina: true },
      { id: 'inceput', typ: 'datum', popis: 'Începerea lucrărilor', sirka: 14, polovina: true },
      { id: 'termen', typ: 'datum', popis: 'Termenul de finalizare', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Locul semnării', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_litere: (d) => sumaInLitere(d.cena) },
  clanky: [
    { nadpis: 'Părțile', odstavce: ['**Beneficiar:** {{p_jmeno}}, domiciliat în {{p_adresa}}', '**Antreprenor:** {{k_jmeno}}, CUI {{k_cui}}, cu sediul în {{k_adresa}}'] },
    { nadpis: 'Obiectul contractului', odstavce: ['Antreprenorul se obligă să execute următoarea lucrare: {{descriere}}.', 'Locul executării: {{loc_lucrare}}.', { volba: 'materiale', uvodVzor: 'Materialele (bifați o variantă):', moznosti: { antreprenor: 'Materialele le procură antreprenorul și sunt incluse în prețul convenit.', beneficiar: 'Materialele le procură beneficiarul pe cheltuiala sa și le predă la timp antreprenorului.' } }] },
    { nadpis: 'Termenul', odstavce: ['Antreprenorul începe lucrările la data de {{inceput}} și le finalizează cel târziu la data de {{termen}}.', 'Dacă antreprenorul nu finalizează lucrarea la termen, beneficiarul îi poate acorda un termen suplimentar rezonabil, după expirarea căruia poate rezolvi contractul și cere despăgubiri.'] },
    { nadpis: 'Prețul și plata', odstavce: ['Prețul convenit pentru întreaga lucrare este de **{{cena}}** (în litere: {{cena_litere}}).', 'Beneficiarul plătește un avans de {{avans}} la semnarea contractului, iar restul în 8 zile de la recepția lucrării fără vicii.', 'Lucrările suplimentare, neincluse în prezentul contract, se execută și se plătesc numai pe baza unui acord scris prealabil.'] },
    { nadpis: 'Recepția și viciile', odstavce: ['Beneficiarul verifică lucrarea la recepție și comunică de îndată, în scris, antreprenorului viciile constatate.', 'Antreprenorul remediază viciile pe cheltuiala sa într-un termen rezonabil. Răspunderea antreprenorului pentru vicii este reglementată de Codul civil.'] },
    { nadpis: 'Dispoziții finale', odstavce: ['Pentru tot ce nu este reglementat se aplică dispozițiile Codului civil.', 'Contractul a fost încheiat în două exemplare originale, câte unul pentru fiecare parte.'] },
  ],
};
