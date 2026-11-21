/** Proces-verbal de predare-primire a vehiculului – România. Ora predării, kilometraj, chei, documente și deteriorări. */
import type { Sablona } from '../typy';
import { COD_CIVIL, ITL054, SUBSOL } from './surse';

export const procesVerbalVehicul: Sablona = {
  kod: 'RO-PV-VEHICUL', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'ro', jazyk: 'ro',
  nazev: 'Proces-verbal de predare-primire a vehiculului', podnadpis: 'starea vehiculului la predare și ora exactă a preluării',
  souborPdf: 'proces-verbal-predare-vehicul', paticka: SUBSOL('RO-PV-VEHICUL'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'a predat', vpravo: 'a primit' },
  cislovatClanky: false,
  slovo: { n: 'proces-verbal', g: 'procesului-verbal', a: 'procesul-verbal', l: 'proces-verbal' },
  coDal: ['Fiecare parte păstrează un exemplar.', 'Fotografiați bordul cu kilometrajul și vehiculul din toate părțile.'],
  kontrola: [
    'Treceți ora exactă a predării – până la transcriere, amenzile pot ajunge la fostul proprietar.',
    'Notați toate deteriorările vizibile și ce s-a predat (chei, certificat de înmatriculare, CIV, carnet de service, anvelope de iarnă).',
    'Numărul de identificare din proces-verbal trebuie să fie același ca în contract și în certificatul de înmatriculare.',
  ],
  zdroje: [COD_CIVIL, ITL054],
  kroky: [
    { id: 'persoane', nazev: 'Cine predă și cine primește', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Predă – nume și prenume', placeholder: 'de ex. Andrei Popescu', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Domiciliul', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Primește – nume și prenume', placeholder: 'de ex. Maria Ionescu', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Domiciliul', sirka: 46 },
    ] },
    { id: 'vehicul', nazev: 'Vehiculul și starea lui', pole: [
      { id: 'znacka', typ: 'text', popis: 'Marca și modelul', placeholder: 'de ex. Dacia Logan', sirka: 32 },
      { id: 'vin', typ: 'vin', popis: 'Număr de identificare (VIN)', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Număr de înmatriculare', sirka: 12, polovina: true },
      { id: 'km', typ: 'cislo', popis: 'Kilometraj', jednotka: 'km', sirka: 12, polovina: true },
      { id: 'combustibil', typ: 'text', popis: 'Combustibil în rezervor', placeholder: 'de ex. jumătate', sirka: 14, polovina: true },
      { id: 'chei', typ: 'cislo', popis: 'Număr de chei', sirka: 4, polovina: true },
      { id: 'documente', typ: 'text', popis: 'Documente predate', placeholder: 'de ex. certificat de înmatriculare, CIV, carnet de service', sirka: 56 },
      { id: 'deteriorari', typ: 'textarea', popis: 'Deteriorări și observații', placeholder: 'de ex. zgârietură pe bara spate', sirka: 64 },
      { id: 'ora', typ: 'text', popis: 'Ora predării', placeholder: 'de ex. 14:30', sirka: 8, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Locul', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data predării', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Proces-verbal', odstavce: [
    '**A predat:** {{p_jmeno}}, {{p_adresa}}',
    '**A primit:** {{k_jmeno}}, {{k_adresa}}',
    'Vehiculul {{znacka}}, număr de identificare {{vin}}, număr de înmatriculare {{spz}}, a fost predat la data de {{datum}}, ora **{{ora}}**.',
    'Kilometraj: {{km}} km. Combustibil: {{combustibil}}. Număr de chei: {{chei}}. Documente predate: {{documente}}.',
    'Deteriorări și observații: {{deteriorari}}',
    'De la ora menționată, cel care a primit vehiculul răspunde pentru folosirea acestuia, inclusiv pentru contravențiile rutiere.',
  ] }],
};
