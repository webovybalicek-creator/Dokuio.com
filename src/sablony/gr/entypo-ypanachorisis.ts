/**
 * Έντυπο υπαναχώρησης από σύμβαση από απόσταση ή εκτός εμπορικού καταστήματος – Ελλάδα (ν. 2251/1994, άρθρα 3ε επ.).
 * 14 ημέρες χωρίς αιτιολογία· ο έμπορος επιστρέφει τις πληρωμές, μαζί με την τυπική αποστολή, εντός 14 ημερών.
 */
import type { Sablona } from '../typy';
import { YPANACHORISI, YPOSELIDO } from './pigi';

export const entypoYpanachorisis: Sablona = {
  kod: 'GR-YPANACHORISI', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'gr', jazyk: 'el',
  nazev: 'Έντυπο υπαναχώρησης', podnadpis: 'δήλωση υπαναχώρησης από σύμβαση που συνάφθηκε από απόσταση (ν. 2251/1994)',
  souborPdf: 'entypo-ypanachorisis', paticka: YPOSELIDO('GR-YPANACHORISI'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'ο καταναλωτής', vpravo: 'παρελήφθη (έμπορος, προαιρετικά)' },
  cislovatClanky: false,
  slovo: { n: 'έντυπο', g: 'εντύπου', a: 'έντυπο', l: 'έντυπο' },
  coDal: ['Στείλτε το έντυπο με email ή συστημένη επιστολή πριν λήξουν οι 14 ημέρες και κρατήστε απόδειξη της αποστολής.', 'Επιστρέψτε το προϊόν εντός 14 ημερών από την υπαναχώρηση.'],
  kontrola: [
    'Σε σύμβαση από απόσταση (online, τηλεφωνικά) ή εκτός καταστήματος ο καταναλωτής μπορεί να υπαναχωρήσει εντός 14 ημερών χωρίς αιτιολογία (ν. 2251/1994).',
    'Για προϊόντα η προθεσμία αρχίζει από την ημέρα που παραλάβατε το προϊόν.',
    'Αρκεί να στείλετε τη δήλωση πριν λήξει η προθεσμία.',
    'Ο έμπορος επιστρέφει όλες τις πληρωμές, και τα έξοδα τυπικής αποστολής, εντός 14 ημερών από την ενημέρωσή του.',
    'Τα άμεσα έξοδα επιστροφής βαρύνουν συνήθως τον καταναλωτή, αν ο έμπορος τον είχε ενημερώσει.',
  ],
  zdroje: [YPANACHORISI],
  kroky: [{ id: 'stoixeia', nazev: 'Η υπαναχώρηση', pole: [
    { id: 'k_jmeno', typ: 'text', popis: 'Ο έμπορος', placeholder: 'π.χ. η επωνυμία του ηλεκτρονικού καταστήματος', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Διεύθυνση ή email του εμπόρου', sirka: 46 },
    { id: 'zbozi', typ: 'textarea', popis: 'Προϊόν ή υπηρεσία', placeholder: 'π.χ. χειμερινό μπουφάν, μέγεθος M', sirka: 64 },
    { id: 'objednavka', typ: 'text', popis: 'Αριθμός παραγγελίας', sirka: 20, polovina: true },
    { id: 'objednano', typ: 'datum', popis: 'Ημερομηνία παραγγελίας', sirka: 14, polovina: true },
    { id: 'prevzato', typ: 'datum', popis: 'Ημερομηνία παραλαβής', sirka: 14, polovina: true },
    { id: 'p_jmeno', typ: 'text', popis: 'Το ονοματεπώνυμό σας', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Η διεύθυνσή σας', sirka: 46 },
    { id: 'iban', typ: 'text', popis: 'IBAN για την επιστροφή χρημάτων (προαιρετικά)', placeholder: 'GR16 …', sirka: 34 },
    { id: 'misto', typ: 'text', popis: 'Τόπος', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Ημερομηνία', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Υπαναχώρηση', odstavce: [
    '**Προς:** {{k_jmeno}}, {{k_adresa}}',
    'Με το παρόν σας γνωστοποιώ ότι υπαναχωρώ από τη σύμβαση που συνήψα για την αγορά των εξής αγαθών ή την παροχή της εξής υπηρεσίας: {{zbozi}}.',
    'Αριθμός παραγγελίας: {{objednavka}}. Παραγγέλθηκε στις {{objednano}}, παραλήφθηκε στις {{prevzato}}.',
    '**Καταναλωτής:** {{p_jmeno}}, {{p_adresa}}',
    'Παρακαλώ να επιστρέψετε τις πληρωμές στον λογαριασμό με IBAN {{iban}}.',
  ] }],
};
