/**
 * Contract de împrumut (de consumație) între persoane fizice – România (Codul civil, împrumutul de consumație). Dobânda se stabilește
 * prin act scris (art. 6 OG 13/2011); între persoane care nu sunt profesioniști dobânda convențională nu poate depăși dobânda legală
 * cu mai mult de 50 % pe an (art. 5). Prescripția generală 3 ani (art. 2517 Cod civil).
 */
import type { Sablona } from '../typy';
import { sumaInLitere } from './numere';
import { COD_CIVIL, OG13, SFAT_IDENTITATE, SUBSOL } from './surse';

export const contractImprumut: Sablona = {
  kod: 'RO-IMPRUMUT', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Contract de împrumut', podnadpis: 'împrumut de bani între persoane fizice, conform Codului civil',
  souborPdf: 'contract-imprumut', paticka: SUBSOL('RO-IMPRUMUT'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'împrumutător', vpravo: 'împrumutat' },
  slovo: { n: 'contract', g: 'contractului', a: 'contractul', l: 'contract' },
  coDal: ['Tipăriți contractul în două exemplare și semnați-le pe amândouă.', 'Transferați banii în cont cu mențiunea „împrumut conform contractului din …”.', 'Salvați datele ratelor în calendar.'],
  kontrola: [
    'Cel mai bine transferați împrumutul în cont – extrasul bancar dovedește că banii au fost predați.',
    'Dobânda trebuie stabilită în scris; între persoane fizice care nu sunt profesioniști nu poate depăși dobânda legală cu mai mult de 50 % pe an (OG nr. 13/2011).',
    'Stabiliți ce se întâmplă la întârzierea ratelor (de ex. scadența întregului rest).',
    'Termenul general de prescripție este de 3 ani (art. 2517 Cod civil). Un contract autentificat la notar este titlu executoriu – la neplată nu mai este nevoie de proces.',
    SFAT_IDENTITATE,
  ],
  zdroje: [COD_CIVIL, OG13],
  kroky: [
    { id: 'parti', nazev: 'Împrumutătorul și împrumutatul', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Împrumutător – nume și prenume', placeholder: 'de ex. Andrei Popescu', sirka: 34, autocomplete: 'name' },
      { id: 'p_cnp', typ: 'text', popis: 'CNP', sirka: 15, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Domiciliul', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Împrumutat – nume și prenume', placeholder: 'de ex. Maria Ionescu', sirka: 34 },
      { id: 'k_cnp', typ: 'text', popis: 'CNP', sirka: 15, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Domiciliul', sirka: 46 },
    ] },
    { id: 'imprumut', nazev: 'Împrumutul și restituirea', pole: [
      { id: 'castka', typ: 'castka', popis: 'Suma împrumutată (lei)', sirka: 12, polovina: true },
      { id: 'remitere', typ: 'volba', popis: 'Predarea banilor', moznosti: [ { hodnota: 'cont', popis: 'în contul împrumutatului' }, { hodnota: 'numerar', popis: 'în numerar, la semnare' } ] },
      { id: 'k_iban', typ: 'text', popis: 'IBAN împrumutat', placeholder: 'RO49 AAAA 1B31 0075 9384 0000', sirka: 30, zobrazitKdyz: { pole: 'remitere', je: 'cont' } },
      { id: 'restituire', typ: 'volba', popis: 'Restituirea', moznosti: [ { hodnota: 'integral', popis: 'integral, până la o dată' }, { hodnota: 'rate', popis: 'în rate lunare' } ] },
      { id: 'termen', typ: 'datum', popis: 'Restituire cel târziu la', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'restituire', je: 'integral' } },
      { id: 'rata', typ: 'castka', popis: 'Rata lunară (lei)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'restituire', je: 'rate' } },
      { id: 'prima', typ: 'datum', popis: 'Prima rată', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'restituire', je: 'rate' } },
      { id: 'dobanda', typ: 'volba', popis: 'Dobânda', moznosti: [ { hodnota: 'fara', popis: 'fără dobândă' }, { hodnota: 'cu', popis: 'cu dobândă convențională' } ] },
      { id: 'rata_dobanzii', typ: 'text', popis: 'Dobânda anuală', placeholder: 'de ex. 5 %', sirka: 8, polovina: true, zobrazitKdyz: { pole: 'dobanda', je: 'cu' } },
      { id: 'p_iban', typ: 'text', popis: 'IBAN împrumutător (pentru restituire)', placeholder: 'RO49 AAAA 1B31 0075 9384 0000', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_litere: (d) => sumaInLitere(d.castka) },
  clanky: [
    { nadpis: 'Părțile', odstavce: ['**Împrumutător:** {{p_jmeno}}, CNP {{p_cnp}}, domiciliat în {{p_adresa}}', '**Împrumutat:** {{k_jmeno}}, CNP {{k_cnp}}, domiciliat în {{k_adresa}}'] },
    { nadpis: 'Obiectul contractului', odstavce: ['Împrumutătorul dă cu împrumut împrumutatului suma de **{{castka}}** (în litere: {{castka_litere}}), iar împrumutatul se obligă să restituie aceeași sumă.', { volba: 'remitere', uvodVzor: 'Predarea (bifați o variantă):', moznosti: { cont: 'Împrumutătorul va transfera suma în contul împrumutatului IBAN {{k_iban}}.', numerar: 'Împrumutatul a primit suma în numerar la semnarea prezentului contract, ceea ce confirmă prin semnătură.' } }] },
    { nadpis: 'Restituirea', odstavce: [{ volba: 'restituire', uvodVzor: 'Modalitatea de restituire (bifați o variantă):', moznosti: { integral: 'Împrumutatul va restitui integral suma cel târziu la data de {{termen}}.', rate: 'Împrumutatul va restitui suma în rate lunare de {{rata}}, prima la data de {{prima}}, apoi în fiecare lună în aceeași zi, până la restituirea întregii sume.' } }, 'Plățile se fac în contul împrumutătorului IBAN {{p_iban}}. Împrumutatul poate restitui suma și înainte de termen.', 'Dacă împrumutatul întârzie plata a două rate, împrumutătorul poate cere, prin notificare scrisă, restituirea imediată a întregului rest.'] },
    { nadpis: 'Dobânda', odstavce: [{ volba: 'dobanda', uvodVzor: 'Dobânda (bifați o variantă):', moznosti: { fara: 'Împrumutul este fără dobândă.', cu: 'Împrumutatul plătește o dobândă convențională de {{rata_dobanzii}} pe an, calculată la soldul neachitat.' } }, 'În caz de întârziere, împrumutatul datorează dobânda legală penalizatoare.'] },
    { nadpis: 'Dispoziții finale', odstavce: ['Pentru tot ce nu este reglementat se aplică dispozițiile Codului civil și ale OG nr. 13/2011.', 'Contractul a fost încheiat în două exemplare originale, câte unul pentru fiecare parte.'] },
  ],
};
