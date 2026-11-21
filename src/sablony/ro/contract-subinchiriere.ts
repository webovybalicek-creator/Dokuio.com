/** Contract de subînchiriere – România (Codul civil, locațiunea). Subînchirierea este posibilă dacă nu a fost interzisă prin contract; acordul scris al proprietarului previne litigiile. */
import type { Sablona } from '../typy';
import { sumaInLitere } from './numere';
import { COD_CIVIL, ANAF_CHIRII, SFAT_IDENTITATE, SUBSOL } from './surse';

export const contractSubinchiriere: Sablona = {
  kod: 'RO-SUBINCHIRIERE', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Contract de subînchiriere', podnadpis: 'subînchirierea unei camere sau a locuinței, cu acordul proprietarului',
  souborPdf: 'contract-subinchiriere', paticka: SUBSOL('RO-SUBINCHIRIERE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'chiriaș (sublocator)', vpravo: 'subchiriaș' },
  slovo: { n: 'contract', g: 'contractului', a: 'contractul', l: 'contract' },
  coDal: ['Atașați acordul scris al proprietarului.', 'La mutare semnați procesul-verbal de predare-primire.'],
  kontrola: [
    'Verificați contractul principal: dacă interzice subînchirierea, nu subînchiriați. Chiar dacă nu o interzice, cereți acordul scris al proprietarului.',
    'Subînchirierea nu poate dura mai mult decât închirierea principală.',
    'Venitul din subînchiriere este venit din cedarea folosinței bunurilor – contractul se înregistrează la ANAF în 30 de zile.',
    SFAT_IDENTITATE,
  ],
  zdroje: [COD_CIVIL, ANAF_CHIRII],
  kroky: [
    { id: 'parti', nazev: 'Părțile', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Chiriaș (subînchiriază) – nume și prenume', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Domiciliul', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Subchiriaș – nume și prenume', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Domiciliul actual al subchiriașului', sirka: 46 },
      { id: 'proprietar', typ: 'text', popis: 'Proprietarul care și-a dat acordul', sirka: 34 },
    ] },
    { id: 'obiect', nazev: 'Locuința, durata și plata', pole: [
      { id: 'locuinta', typ: 'text', popis: 'Adresa locuinței', sirka: 46 },
      { id: 'parte', typ: 'volba', popis: 'Se subînchiriază', moznosti: [ { hodnota: 'camera', popis: 'o cameră, cu folosința bucătăriei și a băii' }, { hodnota: 'intreaga', popis: 'întreaga locuință' } ] },
      { id: 'camera', typ: 'text', popis: 'Care cameră', placeholder: 'de ex. camera mică spre curte, 12 m²', sirka: 46, zobrazitKdyz: { pole: 'parte', je: 'camera' } },
      { id: 'de_la', typ: 'datum', popis: 'Subînchiriere de la', sirka: 14, polovina: true },
      { id: 'pana_la', typ: 'datum', popis: 'Subînchiriere până la', sirka: 14, polovina: true },
      { id: 'castka', typ: 'castka', popis: 'Suma lunară cu utilități (lei)', sirka: 12, polovina: true },
      { id: 'garantie', typ: 'castka', popis: 'Garanția (lei)', sirka: 12, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN pentru plată', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_litere: (d) => sumaInLitere(d.castka), garantie_litere: (d) => sumaInLitere(d.garantie) },
  clanky: [
    { nadpis: 'Părțile', odstavce: ['**Chiriaș (sublocator):** {{p_jmeno}}, domiciliat în {{p_adresa}}', '**Subchiriaș:** {{k_jmeno}}, domiciliat în {{k_adresa}}'] },
    { nadpis: 'Obiectul subînchirierii', odstavce: [{ volba: 'parte', uvodVzor: 'Obiectul (bifați o variantă):', moznosti: { camera: 'Chiriașul subînchiriază camera ({{camera}}) din locuința situată la adresa {{locuinta}}, cu folosința în comun a bucătăriei, a băii și a holului.', intreaga: 'Chiriașul subînchiriază întreaga locuință situată la adresa {{locuinta}}.' } }, 'Chiriașul declară că proprietarul {{proprietar}} și-a dat acordul scris pentru subînchiriere.'] },
    { nadpis: 'Durata', odstavce: ['Subînchirierea se încheie pentru perioada {{de_la}} – {{pana_la}}.', 'Subînchirierea încetează în orice caz odată cu încetarea contractului de închiriere dintre chiriaș și proprietar.'] },
    { nadpis: 'Plata și garanția', odstavce: ['Subchiriașul plătește lunar **{{castka}}** (în litere: {{castka_litere}}), inclusiv utilitățile, cel târziu până în ziua de 5 a lunii, în contul IBAN {{iban}}.', 'La semnare subchiriașul plătește o garanție de {{garantie}} (în litere: {{garantie_litere}}), care se restituie în 30 de zile de la predare, reținându-se datoriile sau pagubele.'] },
    { nadpis: 'Obligațiile subchiriașului', odstavce: ['Subchiriașul folosește locuința cu prudență, respectă regulamentul blocului și nu o subînchiriază mai departe și nu face transformări.'] },
    { nadpis: 'Denunțarea', odstavce: ['Oricare parte poate denunța subînchirierea prin notificare scrisă, cu un preaviz de 30 de zile. La eliberare subchiriașul restituie toate cheile.'] },
    { nadpis: 'Dispoziții finale', odstavce: ['Pentru tot ce nu este reglementat se aplică dispozițiile Codului civil. Contractul a fost încheiat în două exemplare originale.'] },
  ],
};
