/** Πρωτόκολλο παράδοσης-παραλαβής κατοικίας – Ελλάδα. Μετρητές, κλειδιά, εξοπλισμός και κατάσταση κατά την έναρξη ή τη λήξη της μίσθωσης. */
import type { Sablona } from '../typy';
import { AK, MISTHOSI_AADE, YPOSELIDO } from './pigi';

export const protokolloKatoikias: Sablona = {
  kod: 'GR-PROTOKOLLO-KATOIKIA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'gr', jazyk: 'el',
  nazev: 'Πρωτόκολλο παράδοσης-παραλαβής κατοικίας', podnadpis: 'κατάσταση του μισθίου, μετρητές και κλειδιά',
  souborPdf: 'protokollo-paradosis-katoikias', paticka: YPOSELIDO('GR-PROTOKOLLO-KATOIKIA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'ο εκμισθωτής', vpravo: 'ο μισθωτής' },
  cislovatClanky: false,
  slovo: { n: 'πρωτόκολλο', g: 'πρωτοκόλλου', a: 'πρωτόκολλο', l: 'πρωτόκολλο' },
  prevzit: {
    kod: 'GR-MISTHOSI',
    nazev: 'το μισθωτήριο κατοικίας',
    mapuj: (d) => ({ p_jmeno: d.p_jmeno, k_jmeno: d.k_jmeno, byt: d.byt, misto: d.misto }),
  },
  coDal: ['Κάθε μέρος κρατά ένα αντίτυπο.', 'Φωτογραφίστε τους μετρητές και κάθε δωμάτιο.', 'Μεταφέρετε τους λογαριασμούς ρεύματος και νερού σύμφωνα με τις ενδείξεις.'],
  kontrola: [
    'Γράψτε τις ενδείξεις όλων των μετρητών (ρεύμα, νερό, φυσικό αέριο) την ημέρα της παράδοσης.',
    'Καταγράψτε υπάρχουσες ζημιές και τον εξοπλισμό – θα χρησιμεύσει στη λήξη για την επιστροφή της εγγύησης.',
    'Οι αξιώσεις του εκμισθωτή για βλάβες παραγράφονται σε 6 μήνες από την απόδοση του μισθίου.',
  ],
  zdroje: [AK, MISTHOSI_AADE],
  kroky: [
    { id: 'prosopa', nazev: 'Μέρη και κατοικία', pole: [
      { id: 'druh', typ: 'volba', popis: 'Πότε συντάσσεται', moznosti: [ { hodnota: 'zacatek', popis: 'κατά την έναρξη της μίσθωσης (παράδοση στον μισθωτή)' }, { hodnota: 'konec', popis: 'κατά τη λήξη (απόδοση στον εκμισθωτή)' } ] },
      { id: 'p_jmeno', typ: 'text', popis: 'Εκμισθωτής – ονοματεπώνυμο', sirka: 34, autocomplete: 'name' },
      { id: 'k_jmeno', typ: 'text', popis: 'Μισθωτής – ονοματεπώνυμο', sirka: 34 },
      { id: 'byt', typ: 'text', popis: 'Διεύθυνση της κατοικίας', sirka: 56 },
    ] },
    { id: 'katastasi', nazev: 'Μετρητές, κλειδιά, κατάσταση', pole: [
      { id: 'elektrina', typ: 'text', popis: 'Μετρητής ρεύματος', placeholder: 'π.χ. 012345 kWh', sirka: 16, polovina: true },
      { id: 'voda', typ: 'text', popis: 'Μετρητής νερού', placeholder: 'π.χ. 234,5 m³', sirka: 16, polovina: true },
      { id: 'plyn', typ: 'text', popis: 'Μετρητής φυσικού αερίου', sirka: 16, polovina: true },
      { id: 'klice', typ: 'text', popis: 'Κλειδιά', placeholder: 'π.χ. 2 της εισόδου, 1 του γραμματοκιβωτίου', sirka: 30, polovina: true },
      { id: 'vybaveni', typ: 'textarea', popis: 'Εξοπλισμός', placeholder: 'π.χ. ψυγείο, κουζίνα, πλυντήριο, κλιματιστικό στο υπνοδωμάτιο', sirka: 64 },
      { id: 'zavady', typ: 'textarea', popis: 'Ζημιές και παρατηρήσεις', placeholder: 'π.χ. λεκές στον τοίχο του σαλονιού', sirka: 64 },
      { id: 'misto', typ: 'text', popis: 'Τόπος', sirka: 18, polovina: true },
      { id: 'datum', typ: 'datum', popis: 'Ημερομηνία', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Πρωτόκολλο', odstavce: [
    '**Εκμισθωτής:** {{p_jmeno}} · **Μισθωτής:** {{k_jmeno}}',
    { volba: 'druh', uvodVzor: 'Το πρωτόκολλο συντάσσεται (σημειώστε μία επιλογή):', moznosti: { zacatek: 'Ο εκμισθωτής παραδίδει και ο μισθωτής παραλαμβάνει την κατοικία επί της οδού {{byt}}.', konec: 'Ο μισθωτής αποδίδει και ο εκμισθωτής παραλαμβάνει την κατοικία επί της οδού {{byt}}.' } },
    'Ενδείξεις μετρητών – ρεύμα: {{elektrina}}, νερό: {{voda}}, φυσικό αέριο: {{plyn}}.',
    'Κλειδιά που παραδόθηκαν: {{klice}}.',
    'Εξοπλισμός: {{vybaveni}}',
    'Ζημιές και παρατηρήσεις: {{zavady}}',
    'Τα μέρη επιβεβαιώνουν ότι η κατάσταση της κατοικίας αντιστοιχεί στα παραπάνω.',
  ] }],
};
