/** Contract de vânzare-cumpărare pentru un bun mobil folosit, între persoane fizice – România (Codul civil, vânzarea). */
import type { Sablona } from '../typy';
import { sumaInLitere } from './numere';
import { COD_CIVIL, ANAF_NUMERAR, SFAT_IDENTITATE, SFAT_NUMERAR, SUBSOL } from './surse';

export const contractVanzare: Sablona = {
  kod: 'RO-VANZARE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Contract de vânzare-cumpărare', podnadpis: 'pentru un bun mobil folosit',
  souborPdf: 'contract-vanzare-cumparare', paticka: SUBSOL('RO-VANZARE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'vânzător', vpravo: 'cumpărător' },
  slovo: { n: 'contract', g: 'contractului', a: 'contractul', l: 'contract' },
  coDal: ['Predați bunul numai după ce banii sunt la dumneavoastră.', 'Fiecare parte păstrează un exemplar.'],
  kontrola: [
    'Descrieți bunul și defectele cunoscute – pentru defectele cunoscute de cumpărător vânzătorul nu răspunde.',
    'La vânzarea prin anunț nu trimiteți datele cardului și nici codurile primite prin SMS – este cea mai frecventă înșelătorie.',
    SFAT_IDENTITATE,
    SFAT_NUMERAR,
  ],
  zdroje: [COD_CIVIL, ANAF_NUMERAR],
  kroky: [
    { id: 'parti', nazev: 'Vânzătorul și cumpărătorul', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Vânzător – nume și prenume', placeholder: 'de ex. Andrei Popescu', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Domiciliul vânzătorului', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Cumpărător – nume și prenume', placeholder: 'de ex. Maria Ionescu', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Domiciliul cumpărătorului', sirka: 46 },
    ] },
    { id: 'bun', nazev: 'Bunul și prețul', pole: [
      { id: 'bun', typ: 'textarea', popis: 'Descrierea bunului', placeholder: 'de ex. bicicletă Scott Aspect, mărimea L, seria …', sirka: 64 },
      { id: 'defecte', typ: 'text', popis: 'Defecte cunoscute', placeholder: 'de ex. zgârietură pe cadru, altfel fără defecte', sirka: 56 },
      { id: 'cena', typ: 'castka', popis: 'Prețul (lei)', sirka: 12, polovina: true },
      { id: 'plata', typ: 'volba', popis: 'Plata', moznosti: [ { hodnota: 'numerar', popis: 'în numerar, la semnare' }, { hodnota: 'cont', popis: 'în cont, înainte de predare' } ] },
      { id: 'iban', typ: 'text', popis: 'IBAN vânzător', sirka: 30, zobrazitKdyz: { pole: 'plata', je: 'cont' } },
      { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_litere: (d) => sumaInLitere(d.cena) },
  clanky: [
    { nadpis: 'Părțile', odstavce: ['**Vânzător:** {{p_jmeno}}, domiciliat în {{p_adresa}}', '**Cumpărător:** {{k_jmeno}}, domiciliat în {{k_adresa}}'] },
    { nadpis: 'Obiectul și starea', odstavce: ['Vânzătorul vinde, iar cumpărătorul cumpără următorul bun folosit: {{bun}}.', 'Defecte cunoscute: {{defecte}}. Cumpărătorul a verificat bunul și îl cumpără în această stare.'] },
    { nadpis: 'Prețul și predarea', odstavce: ['Prețul este de **{{cena}}** (în litere: {{cena_litere}}).', { volba: 'plata', uvodVzor: 'Plata (bifați o variantă):', moznosti: { numerar: 'Cumpărătorul a plătit prețul în numerar la semnare; vânzătorul confirmă primirea prin semnătură.', cont: 'Cumpărătorul va transfera prețul în contul vânzătorului IBAN {{iban}}; vânzătorul predă bunul după primirea plății.' } }, 'Dreptul de proprietate trece la cumpărător la predarea bunului, după plata integrală a prețului.'] },
    { nadpis: 'Dispoziții finale', odstavce: ['Pentru tot ce nu este reglementat se aplică dispozițiile Codului civil. Contractul a fost încheiat în două exemplare originale.'] },
  ],
};
