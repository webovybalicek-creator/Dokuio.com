/** Acord de plată eșalonată a datoriei – România (Codul civil). Recunoașterea datoriei și graficul de rate; recunoașterea întrerupe prescripția. */
import type { Sablona } from '../typy';
import { sumaInLitere } from './numere';
import { COD_CIVIL, SFAT_IDENTITATE, SUBSOL } from './surse';

export const acordPlataEsalonata: Sablona = {
  kod: 'RO-ESALONARE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Acord de plată eșalonată a datoriei', podnadpis: 'recunoașterea datoriei și graficul de plată în rate',
  souborPdf: 'acord-plata-esalonata', paticka: SUBSOL('RO-ESALONARE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'creditor', vpravo: 'debitor' },
  slovo: { n: 'acord', g: 'acordului', a: 'acordul', l: 'acord' },
  coDal: ['Tipăriți acordul în două exemplare și semnați-le pe amândouă.', 'Salvați datele ratelor în calendar.', 'Păstrați dovezile plăților.'],
  kontrola: [
    'Prin acord debitorul recunoaște datoria – recunoașterea întrerupe prescripția și termenul începe să curgă din nou (art. 2537 Cod civil).',
    'Stabiliți ce se întâmplă la întârzierea unei rate (de ex. scadența întregului rest).',
    'Pentru sume mari, un acord autentificat la notar poate fi titlu executoriu.',
    SFAT_IDENTITATE,
  ],
  zdroje: [COD_CIVIL],
  kroky: [
    { id: 'parti', nazev: 'Creditorul și debitorul', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Creditor – nume și prenume sau denumire', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Domiciliul creditorului', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Debitor – nume și prenume', sirka: 34 },
      { id: 'k_cnp', typ: 'text', popis: 'CNP debitor', sirka: 15, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Domiciliul debitorului', sirka: 46 },
    ] },
    { id: 'datorie', nazev: 'Datoria și ratele', pole: [
      { id: 'castka', typ: 'castka', popis: 'Datoria totală (lei)', sirka: 12, polovina: true },
      { id: 'temei', typ: 'text', popis: 'Temeiul datoriei', placeholder: 'de ex. prețul neachitat al vehiculului conform contractului din 01.06.2026', sirka: 56 },
      { id: 'rata', typ: 'castka', popis: 'Rata lunară (lei)', sirka: 12, polovina: true },
      { id: 'numar', typ: 'cislo', popis: 'Numărul de rate', sirka: 6, polovina: true },
      { id: 'zi', typ: 'cislo', popis: 'Rata scade în ziua … a lunii', placeholder: 'de ex. 15', sirka: 6, polovina: true },
      { id: 'prima', typ: 'datum', popis: 'Prima rată', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN creditor', placeholder: 'RO49 AAAA 1B31 0075 9384 0000', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_litere: (d) => sumaInLitere(d.castka), rata_litere: (d) => sumaInLitere(d.rata) },
  clanky: [
    { nadpis: 'Părțile', odstavce: ['**Creditor:** {{p_jmeno}}, domiciliat în {{p_adresa}}', '**Debitor:** {{k_jmeno}}, CNP {{k_cnp}}, domiciliat în {{k_adresa}}'] },
    { nadpis: 'Recunoașterea datoriei', odstavce: ['Debitorul recunoaște că la data semnării prezentului acord datorează creditorului **{{castka}}** (în litere: {{castka_litere}}), cu titlu de: {{temei}}.'] },
    { nadpis: 'Plata în rate', odstavce: ['Creditorul este de acord ca debitorul să achite datoria în {{numar}} rate lunare de **{{rata}}** (în litere: {{rata_litere}}), ultima rată fiind egală cu restul datoriei.', 'Prima rată scade la data de {{prima}}, iar fiecare rată următoare în ziua de {{zi}} a lunii. Ratele se plătesc în contul creditorului IBAN {{iban}}.', 'Debitorul poate achita datoria sau o parte din ea și înainte de termen.'] },
    { nadpis: 'Întârzierea', odstavce: ['Dacă debitorul întârzie plata a două rate, creditorul poate cere, prin notificare scrisă, plata imediată a întregului rest al datoriei, împreună cu dobânda legală penalizatoare de la data întârzierii.'] },
    { nadpis: 'Dispoziții finale', odstavce: ['Pentru tot ce nu este reglementat se aplică dispozițiile Codului civil. Acordul a fost încheiat în două exemplare originale.'] },
  ],
};
