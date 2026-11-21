/**
 * Contract de închiriere a locuinței – România (Codul civil, locațiunea, închirierea locuințelor). Proprietarul care obține venituri
 * din chirii înregistrează contractul la ANAF în cel mult 30 de zile (formular C168); contractul înregistrat la organul fiscal este
 * titlu executoriu pentru plata chiriei (art. 1798 Cod civil). Venitul se declară prin declarația unică.
 */
import type { Sablona } from '../typy';
import { sumaInLitere } from './numere';
import { COD_CIVIL, ANAF_CHIRII, SFAT_IDENTITATE, SUBSOL } from './surse';

export const contractInchiriere: Sablona = {
  kod: 'RO-INCHIRIERE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Contract de închiriere a locuinței', podnadpis: 'încheiat conform Codului civil, dispozițiile privind locațiunea și închirierea locuințelor',
  souborPdf: 'contract-inchiriere-locuinta', paticka: SUBSOL('RO-INCHIRIERE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'proprietar (locator)', vpravo: 'chiriaș' },
  slovo: { n: 'contract', g: 'contractului', a: 'contractul', l: 'contract' },
  coDal: [
    'La mutare semnați procesul-verbal de predare-primire a locuinței, cu indexurile contoarelor.',
    'Proprietarul: înregistrați contractul la ANAF în cel mult 30 de zile (formular C168, la ghișeu sau prin SPV) și declarați venitul din chirii în declarația unică.',
  ],
  kontrola: [
    'Proprietarul care obține venituri din chirii trebuie să înregistreze contractul la organul fiscal în cel mult 30 de zile de la încheiere, la fel și modificările ulterioare ([ANAF](https://static.anaf.ro/static/10/Galati/ven_inch_2024.pdf)).',
    'Contractul încheiat sub semnătură privată și înregistrat la organul fiscal este titlu executoriu pentru plata chiriei (art. 1798 Cod civil).',
    'Cuantumul garanției nu este limitat de lege – stabiliți-l în contract, împreună cu termenul de restituire.',
    'Treceți persoanele care vor locui împreună cu chiriașul și regulile privind animalele și subînchirierea.',
    SFAT_IDENTITATE,
  ],
  zdroje: [COD_CIVIL, ANAF_CHIRII],
  kroky: [
    { id: 'parti', nazev: 'Proprietarul și chiriașul', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Proprietar (locator) – nume și prenume', placeholder: 'de ex. Andrei Popescu', sirka: 34, autocomplete: 'name' },
      { id: 'p_cnp', typ: 'text', popis: 'CNP proprietar', sirka: 15, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Domiciliul proprietarului', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Chiriaș – nume și prenume', placeholder: 'de ex. Maria Ionescu', sirka: 34 },
      { id: 'k_cnp', typ: 'text', popis: 'CNP chiriaș', sirka: 15, polovina: true },
      { id: 'persoane', typ: 'text', popis: 'Alte persoane care vor locui', placeholder: 'de ex. Luca Ionescu (fiu)', sirka: 56 },
    ] },
    { id: 'locuinta', nazev: 'Locuința și durata', pole: [
      { id: 'adresa_locuinta', typ: 'text', popis: 'Adresa locuinței', placeholder: 'de ex. Str. Florilor nr. 20, ap. 5, București', sirka: 46 },
      { id: 'carte_funciara', typ: 'text', popis: 'Nr. cărții funciare / nr. cadastral', placeholder: 'de ex. CF 123456', napoveda: 'Se găsește în extrasul de carte funciară sau în actul de proprietate.', sirka: 22 },
      { id: 'suprafata', typ: 'cislo', popis: 'Suprafața utilă', jednotka: 'm²', sirka: 8, polovina: true },
      { id: 'dotari', typ: 'text', popis: 'Dotări', placeholder: 'de ex. bucătărie mobilată, mașină de spălat, pat', sirka: 56 },
      { id: 'durata', typ: 'volba', popis: 'Durata', moznosti: [ { hodnota: 'determinata', popis: 'pe durată determinată' }, { hodnota: 'nedeterminata', popis: 'pe durată nedeterminată' } ] },
      { id: 'de_la', typ: 'datum', popis: 'Începutul închirierii', sirka: 14, polovina: true },
      { id: 'pana_la', typ: 'datum', popis: 'Sfârșitul închirierii', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'durata', je: 'determinata' } },
    ] },
    { id: 'plati', nazev: 'Chiria, utilitățile și garanția', pole: [
      { id: 'chirie', typ: 'castka', popis: 'Chiria lunară (lei)', sirka: 12, polovina: true },
      { id: 'zi', typ: 'cislo', popis: 'Plata până în ziua … a lunii', placeholder: 'de ex. 5', sirka: 4, polovina: true },
      { id: 'utilitati', typ: 'text', popis: 'Utilități plătite de chiriaș', placeholder: 'de ex. energie electrică, gaz, apă, întreținere, internet', sirka: 56 },
      { id: 'garantie', typ: 'castka', popis: 'Garanția (lei)', sirka: 12, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN proprietar', placeholder: 'RO49 AAAA 1B31 0075 9384 0000', sirka: 30 },
      { id: 'preaviz', typ: 'cislo', popis: 'Preavizul chiriașului', placeholder: 'de ex. 60', jednotka: 'zile', sirka: 6, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { chirie_litere: (d) => sumaInLitere(d.chirie), garantie_litere: (d) => sumaInLitere(d.garantie) },
  clanky: [
    { nadpis: 'Părțile', odstavce: ['**Proprietar (locator):** {{p_jmeno}}, CNP {{p_cnp}}, domiciliat în {{p_adresa}}', '**Chiriaș:** {{k_jmeno}}, CNP {{k_cnp}}', 'Împreună cu chiriașul vor locui următoarele persoane: {{persoane}}.'] },
    { nadpis: 'Obiectul contractului', odstavce: ['Proprietarul închiriază locuința situată la adresa {{adresa_locuinta}}, înscrisă în {{carte_funciara}}, cu o suprafață utilă de {{suprafata}} m², cu următoarele dotări: {{dotari}}.', 'Starea locuinței și indexurile contoarelor la predare se consemnează în procesul-verbal de predare-primire, care este anexă la prezentul contract.'] },
    { nadpis: 'Durata', odstavce: [{ volba: 'durata', uvodVzor: 'Durata (bifați o variantă):', moznosti: { determinata: 'Contractul se încheie pe durată determinată, de la {{de_la}} până la {{pana_la}}.', nedeterminata: 'Contractul se încheie pe durată nedeterminată, începând cu {{de_la}}.' } }] },
    { nadpis: 'Chiria și utilitățile', odstavce: ['Chiria lunară este de **{{chirie}}** (în litere: {{chirie_litere}}) și se plătește până în ziua de {{zi}} a fiecărei luni, în contul IBAN {{iban}}.', 'Pe lângă chirie, chiriașul plătește: {{utilitati}}.'] },
    { nadpis: 'Garanția', odstavce: ['La semnare chiriașul plătește o garanție de {{garantie}} (în litere: {{garantie_litere}}).', 'Proprietarul restituie garanția în 30 de zile de la eliberarea și predarea locuinței, reținând numai sumele datorate și contravaloarea pagubelor constatate în procesul-verbal de predare.'] },
    { nadpis: 'Obligațiile părților', odstavce: ['Chiriașul folosește locuința cu prudență și diligență, plătește la timp chiria și utilitățile și nu face transformări și nu subînchiriază locuința fără acordul scris al proprietarului.', 'Proprietarul predă locuința în stare corespunzătoare de folosință și suportă reparațiile necesare care nu sunt cauzate de folosința chiriașului.'] },
    { nadpis: 'Încetarea contractului', odstavce: ['Chiriașul poate denunța contractul prin notificare scrisă, cu un preaviz de {{preaviz}} zile.', 'Proprietarul poate denunța sau rezilia contractul numai în condițiile și cu preavizul prevăzute de Codul civil pentru închirierea locuințelor.'] },
    { nadpis: 'Dispoziții finale', odstavce: ['Proprietarul va înregistra contractul la organul fiscal competent în termenul prevăzut de lege. Pentru tot ce nu este reglementat se aplică dispozițiile Codului civil.', 'Contractul a fost încheiat în două exemplare originale, câte unul pentru fiecare parte.'] },
  ],
};
