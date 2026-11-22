/** Πρωτόκολλο παράδοσης-παραλαβής οχήματος – Ελλάδα. Ώρα παράδοσης, χιλιόμετρα, κλειδιά, έγγραφα και ζημιές. */
import type { Sablona } from '../typy';
import { AK, METAVIVASI, YPOSELIDO } from './pigi';

export const protokolloOximatos: Sablona = {
  kod: 'GR-PROTOKOLLO-OXIMA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'gr', jazyk: 'el',
  nazev: 'Πρωτόκολλο παράδοσης-παραλαβής οχήματος', podnadpis: 'κατάσταση του οχήματος κατά την παράδοση και ακριβής ώρα παραλαβής',
  souborPdf: 'protokollo-paradosis-oximatos', paticka: YPOSELIDO('GR-PROTOKOLLO-OXIMA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'παρέδωσε', vpravo: 'παρέλαβε' },
  cislovatClanky: false,
  slovo: { n: 'πρωτόκολλο', g: 'πρωτοκόλλου', a: 'πρωτόκολλο', l: 'πρωτόκολλο' },
  prevzit: {
    kod: 'GR-AUTO',
    nazev: 'το συμφωνητικό πώλησης αυτοκινήτου',
    mapuj: (d) => ({ p_jmeno: d.p_jmeno, p_adresa: d.p_adresa, k_jmeno: d.k_jmeno, k_adresa: d.k_adresa, znacka: d.znacka, vin: d.vin, spz: d.spz, km: d.km, kleidia: d.kleidia, ora: d.predavane_ora, misto: d.misto, datum: d.predavane_datum }),
  },
  coDal: ['Κάθε μέρος κρατά ένα αντίτυπο.', 'Φωτογραφίστε τον πίνακα οργάνων με τα χιλιόμετρα και το όχημα από όλες τις πλευρές.'],
  kontrola: [
    'Γράψτε την ακριβή ώρα παράδοσης – μέχρι να ολοκληρωθεί η μεταβίβαση, κλήσεις και πρόστιμα μπορεί να φτάσουν στον προηγούμενο ιδιοκτήτη.',
    'Σημειώστε όλες τις ορατές ζημιές και τι παραδόθηκε (κλειδιά, άδεια κυκλοφορίας, βιβλίο σέρβις, χειμερινά ελαστικά).',
    'Ο αριθμός πλαισίου στο πρωτόκολλο πρέπει να είναι ίδιος με το συμφωνητικό και την άδεια κυκλοφορίας.',
  ],
  zdroje: [AK, METAVIVASI],
  kroky: [
    { id: 'prosopa', nazev: 'Ποιος παραδίδει και ποιος παραλαμβάνει', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Παραδίδει – ονοματεπώνυμο', placeholder: 'π.χ. Γεώργιος Παπαδόπουλος', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Διεύθυνση', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Παραλαμβάνει – ονοματεπώνυμο', placeholder: 'π.χ. Μαρία Κωνσταντίνου', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Διεύθυνση', sirka: 46 },
    ] },
    { id: 'oxima', nazev: 'Το όχημα και η κατάστασή του', pole: [
      { id: 'znacka', typ: 'text', popis: 'Μάρκα και μοντέλο', placeholder: 'π.χ. Toyota Yaris', sirka: 32 },
      { id: 'vin', typ: 'vin', popis: 'Αριθμός πλαισίου (VIN)', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Αριθμός κυκλοφορίας', sirka: 12, polovina: true },
      { id: 'km', typ: 'cislo', popis: 'Χιλιόμετρα', jednotka: 'km', sirka: 12, polovina: true },
      { id: 'kaysimo', typ: 'text', popis: 'Καύσιμο στο ρεζερβουάρ', placeholder: 'π.χ. μισό ρεζερβουάρ', sirka: 14, polovina: true },
      { id: 'kleidia', typ: 'cislo', popis: 'Αριθμός κλειδιών', sirka: 4, polovina: true },
      { id: 'eggrafa', typ: 'text', popis: 'Έγγραφα που παραδόθηκαν', placeholder: 'π.χ. άδεια κυκλοφορίας, βιβλίο σέρβις, δελτίο ΚΤΕΟ', sirka: 56 },
      { id: 'zimies', typ: 'textarea', popis: 'Ζημιές και παρατηρήσεις', placeholder: 'π.χ. γρατζουνιά στον πίσω προφυλακτήρα', sirka: 64 },
      { id: 'ora', typ: 'text', popis: 'Ώρα παράδοσης', placeholder: 'π.χ. 14:30', sirka: 8, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Τόπος', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Ημερομηνία παράδοσης', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Πρωτόκολλο', odstavce: [
    '**Παρέδωσε:** {{p_jmeno}}, {{p_adresa}}',
    '**Παρέλαβε:** {{k_jmeno}}, {{k_adresa}}',
    'Το όχημα {{znacka}}, με αριθμό πλαισίου (VIN) {{vin}} και αριθμό κυκλοφορίας {{spz}}, παραδόθηκε στις {{datum}} και ώρα **{{ora}}**.',
    'Χιλιόμετρα: {{km}} km. Καύσιμο: {{kaysimo}}. Αριθμός κλειδιών: {{kleidia}}. Έγγραφα που παραδόθηκαν: {{eggrafa}}.',
    'Ζημιές και παρατηρήσεις: {{zimies}}',
    'Από την ώρα αυτή ο παραλαβών ευθύνεται για τη χρήση του οχήματος, ιδίως για τις παραβάσεις του Κώδικα Οδικής Κυκλοφορίας.',
  ] }],
};
