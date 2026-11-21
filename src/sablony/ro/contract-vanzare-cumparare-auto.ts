/**
 * Contract de vânzare-cumpărare auto între persoane fizice – România (Codul civil, vânzarea). Transferul se înregistrează pe formularul
 * tipizat „Contract de înstrăinare-dobândire a unui mijloc de transport – Model 2026 ITL 054” (Ordinul 772/966/123/2026), vizat de
 * organul fiscal local, care verifică obligațiile fiscale ale vânzătorului și ale cumpărătorului; cumpărătorul cere transcrierea în
 * 90 de zile. Prezentul contract completează formularul tipizat (preț, plată, stare, predare).
 */
import type { Sablona } from '../typy';
import { sumaInLitere } from './numere';
import { naDatum, pridejDny, isoDatum } from '../terminy';
import { COD_CIVIL, ITL054, ANAF_NUMERAR, SFAT_IDENTITATE, SFAT_NUMERAR, SUBSOL } from './surse';

export const contractVanzareAuto: Sablona = {
  kod: 'RO-AUTO',
  verze: '1.0',
  aktualizovano: '2026-11-21',
  overeno: '2026-11-21',
  zeme: 'ro',
  jazyk: 'ro',
  nazev: 'Contract de vânzare-cumpărare autovehicul',
  podnadpis: 'încheiat conform Codului civil, în completarea formularului tipizat Model 2026 ITL 054',
  souborPdf: 'contract-vanzare-cumparare-auto',
  paticka: SUBSOL('RO-AUTO'),
  mistoPodpisu: 'misto',
  datumPodpisu: 'datum_podpisu',
  podpisy: { vlevo: 'vânzător', vpravo: 'cumpărător' },
  slovo: { n: 'contract', g: 'contractului', a: 'contractul', l: 'contract' },
  coDal: [
    'Tipăriți contractul în două exemplare și semnați-le pe amândouă.',
    'Completați și formularul oficial „Contract de înstrăinare-dobândire a unui mijloc de transport – Model 2026 ITL 054” (5 exemplare) și prezentați-l la direcția de taxe locale pentru viza fiscală a vânzătorului și a cumpărătorului.',
    'Cumpărătorul cere transcrierea dreptului de proprietate la serviciul de înmatriculări în cel mult 90 de zile.',
    'Vânzătorul: radiați mașina din evidența fiscală locală și anunțați asigurătorul RCA.',
  ],
  pripominky: (d) => {
    const od = naDatum(d.datum_podpisu);
    if (!od) return [];
    return [{ nazev: 'Transcrierea dreptului de proprietate asupra vehiculului', datum: isoDatum(pridejDny(od, 90)), popis: 'Termen de 90 de zile pentru cererea de transcriere la serviciul de înmatriculări.' }];
  },
  kontrola: [
    'Vânzătorul trebuie să fie trecut ca proprietar în certificatul de înmatriculare și în cartea de identitate a vehiculului (CIV) – comparați datele cu actul de identitate.',
    'Numărul de identificare (VIN) din certificatul de înmatriculare trebuie să coincidă cu cel de pe vehicul.',
    'Pentru transcriere se folosește formularul oficial Model 2026 ITL 054 ([Ordinul 772/966/123/2026](https://alba24.ro/wp-content/uploads/2026/08/model-contract-de-instrainare-dobandire-a-unui-mijloc-de-transport.pdf)). Organul fiscal local verifică pe formular că nici vânzătorul, nici cumpărătorul nu au datorii la bugetul local – fără această verificare actul de înstrăinare este nul de drept.',
    'Cumpărătorul are 90 de zile pentru a cere transcrierea. Până atunci vânzătorul poate primi amenzile, de aceea treceți în contract data și ora predării.',
    'Mașina nu trebuie să fie în leasing sau gajată – altfel vânzătorul nu poate dispune liber de ea.',
    SFAT_IDENTITATE,
    SFAT_NUMERAR,
  ],
  zdroje: [COD_CIVIL, ITL054, ANAF_NUMERAR],

  kroky: [
    {
      id: 'parti',
      nazev: 'Vânzătorul și cumpărătorul',
      popis: 'Datele din actul de identitate. CNP-ul este necesar și pe formularul ITL 054.',
      pole: [
        { id: 'p_jmeno', typ: 'text', popis: 'Vânzător – nume și prenume', napoveda: 'Proprietarul trecut în certificatul de înmatriculare.', placeholder: 'de ex. Andrei Popescu', sirka: 34, autocomplete: 'name' },
        { id: 'p_cnp', typ: 'text', popis: 'CNP vânzător', napoveda: '13 cifre.', placeholder: 'de ex. 1850101400011', sirka: 15, polovina: true },
        { id: 'p_adresa', typ: 'text', popis: 'Domiciliul vânzătorului', placeholder: 'de ex. Str. Libertății nr. 10, București', sirka: 46 },
        { id: 'k_jmeno', typ: 'text', popis: 'Cumpărător – nume și prenume', placeholder: 'de ex. Maria Ionescu', sirka: 34 },
        { id: 'k_cnp', typ: 'text', popis: 'CNP cumpărător', placeholder: 'de ex. 2900202120022', sirka: 15, polovina: true },
        { id: 'k_adresa', typ: 'text', popis: 'Domiciliul cumpărătorului', placeholder: 'de ex. Bd. Eroilor nr. 5, Cluj-Napoca', sirka: 46 },
      ],
    },
    {
      id: 'vehicul',
      nazev: 'Vehiculul',
      popis: 'Copiați datele din certificatul de înmatriculare.',
      pole: [
        { id: 'znacka', typ: 'text', popis: 'Marca și modelul', napoveda: 'Rubricile D.1 și D.3 din certificatul de înmatriculare.', placeholder: 'de ex. Dacia Logan', sirka: 32 },
        { id: 'vin', typ: 'vin', popis: 'Număr de identificare (VIN)', napoveda: '17 caractere, rubrica E din certificatul de înmatriculare.', sirka: 24 },
        { id: 'spz', typ: 'text', popis: 'Număr de înmatriculare', placeholder: 'de ex. B 123 ABC', sirka: 12, polovina: true },
        { id: 'rok', typ: 'text', popis: 'Anul fabricației', placeholder: 'de ex. 2018', sirka: 8, polovina: true },
        { id: 'barva', typ: 'text', popis: 'Culoarea', placeholder: 'de ex. gri metalizat', sirka: 14, polovina: true },
        { id: 'km', typ: 'cislo', popis: 'Kilometraj', napoveda: 'Citiți-l în ziua semnării.', placeholder: 'de ex. 154320', jednotka: 'km', sirka: 12, polovina: true },
        {
          id: 'defecte',
          typ: 'volba',
          popis: 'Defecte cunoscute',
          napoveda: 'Spuneți deschis ce știți – pentru defectele cunoscute de cumpărător vânzătorul nu răspunde ulterior.',
          moznosti: [
            { hodnota: 'nu', popis: 'Vânzătorul nu cunoaște defecte' },
            { hodnota: 'da', popis: 'Vehiculul are defecte cunoscute' },
          ],
        },
        { id: 'defecte_opis', typ: 'textarea', popis: 'Descrierea defectelor', placeholder: 'de ex. parbriz fisurat, aerul condiționat nu funcționează', sirka: 64, zobrazitKdyz: { pole: 'defecte', je: 'da' } },
      ],
    },
    {
      id: 'pret',
      nazev: 'Prețul și plata',
      pole: [
        { id: 'cena', typ: 'castka', popis: 'Prețul (lei)', napoveda: 'Suma în litere o completăm noi.', placeholder: 'de ex. 45000', sirka: 14, polovina: true },
        {
          id: 'plata',
          typ: 'volba',
          popis: 'Modalitatea de plată',
          moznosti: [
            { hodnota: 'numerar', popis: 'În numerar, la semnare' },
            { hodnota: 'cont', popis: 'În contul vânzătorului' },
          ],
        },
        { id: 'iban', typ: 'text', popis: 'IBAN vânzător', placeholder: 'RO49 AAAA 1B31 0075 9384 0000', sirka: 30, zobrazitKdyz: { pole: 'plata', je: 'cont' } },
        { id: 'termen_plata', typ: 'datum', popis: 'Plata cel târziu la', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'plata', je: 'cont' } },
      ],
    },
    {
      id: 'predare',
      nazev: 'Predarea și semnarea',
      pole: [
        { id: 'predare_datum', typ: 'datum', popis: 'Data predării vehiculului', sirka: 14, polovina: true, vychozi: 'dnes' },
        { id: 'predare_ora', typ: 'text', popis: 'Ora predării', napoveda: 'Contează dacă ulterior sosește o amendă.', placeholder: 'de ex. 14:30', sirka: 8, polovina: true },
        { id: 'chei', typ: 'cislo', popis: 'Număr de chei', placeholder: 'de ex. 2', sirka: 4, polovina: true },
        { id: 'misto', typ: 'text', popis: 'Locul semnării', placeholder: 'de ex. București', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
        { id: 'datum_podpisu', typ: 'datum', popis: 'Data semnării', sirka: 14, polovina: true, vychozi: 'dnes' },
      ],
    },
  ],

  odvozene: { cena_litere: (d) => sumaInLitere(d.cena) },

  clanky: [
    {
      nadpis: 'Părțile contractului',
      vysvetleni: 'Cine încheie contractul. Datele trebuie să corespundă actelor de identitate.',
      odstavce: [
        '**Vânzător:** {{p_jmeno}}, CNP {{p_cnp}}, domiciliat în {{p_adresa}}',
        '**Cumpărător:** {{k_jmeno}}, CNP {{k_cnp}}, domiciliat în {{k_adresa}}',
      ],
    },
    {
      nadpis: 'Obiectul contractului',
      vysvetleni: 'Ce vehicul se vinde. Cel mai important este numărul de identificare.',
      odstavce: [
        'Vânzătorul vinde, iar cumpărătorul cumpără autovehiculul marca și modelul {{znacka}}, număr de identificare (VIN) {{vin}}, număr de înmatriculare {{spz}}, anul fabricației {{rok}}, culoarea {{barva}} (denumit în continuare „vehiculul”).',
        'Vânzătorul declară că este unicul proprietar al vehiculului și că acesta nu este grevat de drepturi ale terților, în special că nu face obiectul unui contract de leasing sau al unui gaj.',
      ],
    },
    {
      nadpis: 'Starea vehiculului',
      vysvetleni: 'Ce știe vânzătorul despre vehicul.',
      odstavce: [
        'Kilometrajul la data semnării contractului este de {{km}} km. Vânzătorului nu îi este cunoscut faptul că bordul ar fi fost înlocuit sau că kilometrajul ar fi fost modificat.',
        {
          volba: 'defecte',
          uvodVzor: 'Defecte cunoscute (bifați o variantă):',
          moznosti: {
            nu: 'Vânzătorului nu îi sunt cunoscute defecte ale vehiculului.',
            da: 'Vânzătorul l-a informat pe cumpărător despre următoarele defecte ale vehiculului: {{defecte_opis}}',
          },
        },
        'Cumpărătorul declară că a verificat vehiculul, că îi cunoaște starea și că îl cumpără în această stare.',
      ],
    },
    {
      nadpis: 'Prețul și plata',
      vysvetleni: 'Cât, cum și până când se plătește.',
      odstavce: [
        'Prețul vehiculului este de **{{cena}}** (în litere: {{cena_litere}}).',
        {
          volba: 'plata',
          uvodVzor: 'Modalitatea de plată (bifați o variantă):',
          moznosti: {
            numerar: 'Cumpărătorul a plătit prețul în numerar la semnarea prezentului contract. Prin semnătură, vânzătorul confirmă primirea întregii sume.',
            cont: 'Cumpărătorul va plăti prețul în contul vânzătorului IBAN {{iban}} cel târziu la data de {{termen_plata}}.',
          },
        },
        'Părțile convin că vânzătorul păstrează dreptul de proprietate asupra vehiculului până la plata integrală a prețului.',
      ],
    },
    {
      nadpis: 'Predarea vehiculului',
      vysvetleni: 'Când și cu ce preia cumpărătorul vehiculul.',
      odstavce: [
        'Vânzătorul predă cumpărătorului vehiculul la data de {{predare_datum}}, ora {{predare_ora}}, împreună cu {{chei}} chei, certificatul de înmatriculare, cartea de identitate a vehiculului și celelalte documente ale vehiculului.',
        'Odată cu predarea, riscul pieirii și deteriorării vehiculului trece asupra cumpărătorului. De la acest moment cumpărătorul răspunde pentru folosirea vehiculului, inclusiv pentru contravențiile rutiere.',
      ],
    },
    {
      nadpis: 'Formularul tipizat și transcrierea',
      vysvetleni: 'Ce formalități urmează și cine le face.',
      odstavce: [
        'Părțile vor completa și semna formularul tipizat „Contract de înstrăinare-dobândire a unui mijloc de transport – Model 2026 ITL 054” și îl vor prezenta organului fiscal local pentru verificarea obligațiilor fiscale ale vânzătorului și ale cumpărătorului. Prezentul contract completează formularul tipizat.',
        'Cumpărătorul va solicita transcrierea dreptului de proprietate la autoritatea competentă în cel mult 90 de zile de la dobândire și suportă cheltuielile transcrierii.',
      ],
    },
    {
      nadpis: 'Dispoziții finale',
      vysvetleni: 'Formalități.',
      odstavce: [
        'Pentru tot ce nu este reglementat prin prezentul contract se aplică dispozițiile Codului civil.',
        'Contractul a fost încheiat în două exemplare originale, câte unul pentru fiecare parte. Părțile au citit contractul, l-au înțeles și l-au semnat în semn de acord.',
      ],
    },
  ],
};
