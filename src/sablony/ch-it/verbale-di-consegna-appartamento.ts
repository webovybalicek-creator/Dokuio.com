/** Verbale di consegna e di riconsegna di un’abitazione – Svizzera italiana. Alla restituzione il locatore deve verificare lo stato e avvisare immediatamente i difetti (art. 267a CO). */
import type { Sablona } from '../typy';
import { CO_LOCAZIONE, piede } from './fonti';

export const verbaleAbitazione: Sablona = {
  kod: 'CHIT-VERBALE-ABITAZIONE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Verbale di consegna dell’abitazione', podnadpis: 'consegna e riconsegna di un’abitazione locata',
  souborPdf: 'verbale-di-consegna-appartamento', paticka: piede('CHIT-VERBALE-ABITAZIONE'),
  mistoPodpisu: 'ort', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Il locatore / la locatrice', vpravo: 'Il conduttore / la conduttrice' },
  slovo: { n: 'verbale', g: 'del verbale', a: 'il verbale', l: 'nel verbale' },
  cislovatClanky: false,
  prevzit: {
    kod: 'CHIT-LOCAZIONE',
    nazev: 'il contratto di locazione',
    mapuj: (d) => ({ v_name: d.v_name, m_name: d.m_name, objekt: [d.objekt, d.lage].filter(Boolean).join(', '), ausstattung: d.ausstattung, datum: d.uebergabe, vertrag_datum: d.datum, anlass: 'einzug' }),
  },
  coDal: ['Percorrete l’abitazione insieme, locale per locale, e completate a mano ciò che manca.', 'Fotografate i contatori e i difetti.', 'Firmate due esemplari.'],
  kontrola: [
    'Annotate tutti i contatori (elettricità, gas, acqua, riscaldamento) con il loro numero.',
    'Descrivete i difetti con precisione, p. es. «crepa nelle piastrelle accanto alla vasca».',
    'Provate gli apparecchi, l’acqua, il riscaldamento, le finestre e le serrature.',
    'Contate le chiavi (abitazione, stabile, cantina, bucalettere).',
    'Alla riconsegna il locatore deve avvisare immediatamente e per iscritto i difetti; altrimenti perde i suoi diritti, salvo per i difetti occulti (art. 267a CO).',
  ],
  zdroje: [CO_LOCAZIONE],
  kroky: [
    { id: 'basis', nazev: 'Chi, dove e perché', popis: 'Contratto di locazione già compilato? Riprendiamo i dati.', pole: [
      { id: 'v_name', typ: 'text', popis: 'Locatore – nome', placeholder: 'p. es. Marco Bernasconi', sirka: 34, autocomplete: 'name' },
      { id: 'm_name', typ: 'text', popis: 'Conduttore – nome', placeholder: 'p. es. Laura Rezzonico', sirka: 34 },
      { id: 'objekt', typ: 'text', popis: 'Abitazione (indirizzo e posizione)', napoveda: 'Come nel contratto di locazione.', placeholder: 'p. es. Via Lugano 7, 6500 Bellinzona, 2° piano a sinistra', sirka: 46 },
      { id: 'anlass', typ: 'volba', popis: 'Occasione', moznosti: [ { hodnota: 'einzug', popis: 'Consegna al conduttore (entrata)' }, { hodnota: 'auszug', popis: 'Riconsegna al locatore (uscita)' } ] },
      { id: 'vertrag_datum', typ: 'datum', popis: 'Data del contratto di locazione', napoveda: 'Il verbale fa parte del contratto.', sirka: 14, polovina: true },
    ] },
    { id: 'zaehler', nazev: 'Letture dei contatori', popis: 'Leggete e fotografate. Lasciate vuoto se non c’è contatore.', pole: [
      { id: 'z_strom', typ: 'text', popis: 'Elettricità (kWh)', placeholder: 'p. es. 12 345', sirka: 12, polovina: true },
      { id: 'z_gas', typ: 'text', popis: 'Gas (m³)', placeholder: 'p. es. 4 321', sirka: 12, polovina: true },
      { id: 'z_kalt', typ: 'text', popis: 'Acqua fredda (m³)', placeholder: 'p. es. 123,4', sirka: 12, polovina: true },
      { id: 'z_warm', typ: 'text', popis: 'Acqua calda (m³)', placeholder: 'p. es. 56,7', sirka: 12, polovina: true },
      { id: 'z_heizung', typ: 'text', popis: 'Riscaldamento / ripartitori di spese', placeholder: 'p. es. soggiorno 123, camera 87', sirka: 30 },
    ] },
    { id: 'zustand', nazev: 'Stato', pole: [
      { id: 'zustand', typ: 'volba', popis: 'Stato dell’abitazione', napoveda: 'Pareti, pavimenti, finestre, apparecchi.', moznosti: [ { hodnota: 'ok', popis: 'Senza difetti, usura normale' }, { hodnota: 'maengel', popis: 'Con i seguenti difetti' } ] },
      { id: 'maengel', typ: 'textarea', popis: 'Difetti', napoveda: 'Locale e difetto preciso.', placeholder: 'p. es. cucina – graffi sul piano di lavoro', sirka: 64, zobrazitKdyz: { pole: 'zustand', je: 'maengel' } },
      { id: 'ausstattung', typ: 'textarea', popis: 'Arredamento e stato', placeholder: 'p. es. frigorifero – funziona', sirka: 64 },
      { id: 'schluessel', typ: 'text', popis: 'Chiavi', napoveda: 'Numero e uso.', placeholder: 'p. es. 3× abitazione, 2× stabile, 1× cantina', sirka: 46 },
      { id: 'vereinbarung', typ: 'textarea', popis: 'Accordi (facoltativo)', napoveda: 'Chi ripara cosa ed entro quando.', placeholder: 'p. es. il locatore ripara il rubinetto entro il 30.11.', sirka: 64 },
      { id: 'ort', typ: 'text', popis: 'Luogo', placeholder: 'p. es. Bellinzona', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Parti e abitazione', odstavce: [
      '**Locatore / locatrice:** {{v_name}} · **Conduttore / conduttrice:** {{m_name}}',
      'Abitazione: {{objekt}}, secondo il contratto di locazione del {{vertrag_datum}}.',
      { volba: 'anlass', uvodVzor: 'Occasione (barrate):', moznosti: { einzug: 'Il locatore consegna l’abitazione al conduttore.', auszug: 'Il conduttore riconsegna l’abitazione al locatore.' } },
    ] },
    { nadpis: 'Letture dei contatori', odstavce: ['Elettricità: {{z_strom}} kWh · Gas: {{z_gas}} m³ · Acqua fredda: {{z_kalt}} m³ · Acqua calda: {{z_warm}} m³ · Riscaldamento: {{z_heizung}}'] },
    { nadpis: 'Stato, arredamento e chiavi', odstavce: [
      { volba: 'zustand', uvodVzor: 'Stato (barrate):', moznosti: { ok: 'L’abitazione è senza difetti, tenuto conto di un’usura normale.', maengel: 'L’abitazione presenta i seguenti difetti: {{maengel}}' } },
      'Arredamento: {{ausstattung}}',
      'Chiavi consegnate: {{schluessel}}',
      'Accordi: {{vereinbarung}}',
      'Con la loro firma le parti confermano di aver visitato l’abitazione e che il suo stato corrisponde al presente verbale.',
    ] },
  ],
};
