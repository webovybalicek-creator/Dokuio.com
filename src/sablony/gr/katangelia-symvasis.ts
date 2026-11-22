/** Καταγγελία σύμβασης παροχής υπηρεσιών – Ελλάδα (κινητή, internet, ασφάλεια, γυμναστήριο, συνδρομή). Προθεσμίες κατά τη σύμβαση· ΑΚ. */
import type { Sablona } from '../typy';
import { AK, YPOSELIDO } from './pigi';

export const katangeliaSymvasis: Sablona = {
  kod: 'GR-KATANGELIA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'gr', jazyk: 'el',
  nazev: 'Καταγγελία σύμβασης', podnadpis: 'λύση σύμβασης παροχής υπηρεσίας ή συνδρομής',
  souborPdf: 'katangelia-symvasis', paticka: YPOSELIDO('GR-KATANGELIA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'ο πελάτης', vpravo: 'παρέλαβε (πάροχος, προαιρετικά)' },
  cislovatClanky: false,
  slovo: { n: 'καταγγελία', g: 'καταγγελίας', a: 'καταγγελία', l: 'καταγγελία' },
  coDal: ['Στείλτε την καταγγελία με συστημένη επιστολή με απόδειξη παραλαβής ή στο e-mail που ορίζουν οι γενικοί όροι.', 'Ζητήστε έγγραφη επιβεβαίωση της λύσης και της ημερομηνίας της.'],
  kontrola: [
    'Ελέγξτε στη σύμβαση ή στους γενικούς όρους την προθεσμία καταγγελίας και τον τρόπο (εγγράφως, e-mail, λογαριασμός πελάτη).',
    'Σε συμβάσεις με ελάχιστη διάρκεια (π.χ. κινητή για 24 μήνες) η πρόωρη λύση μπορεί να συνεπάγεται τέλος – το ποσό αναγράφεται στη σύμβαση.',
    'Γράψτε τον αριθμό σύμβασης ή τον κωδικό πελάτη.',
    'Αν ο πάροχος άλλαξε μονομερώς τους όρους εις βάρος σας, συνήθως μπορείτε να καταγγείλετε χωρίς τέλος – επικαλεστείτε το.',
  ],
  zdroje: [AK],
  kroky: [{ id: 'stoixeia', nazev: 'Η καταγγελία', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Πελάτης – ονοματεπώνυμο', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Διεύθυνση', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Πάροχος της υπηρεσίας', placeholder: 'π.χ. εταιρεία κινητής, ασφαλιστική, γυμναστήριο', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Διεύθυνση παρόχου', sirka: 46 },
    { id: 'ypiresia', typ: 'text', popis: 'Η υπηρεσία', placeholder: 'π.χ. συμβόλαιο κινητής, internet, συνδρομή γυμναστηρίου', sirka: 40 },
    { id: 'arithmos', typ: 'text', popis: 'Αριθμός σύμβασης / κωδικός πελάτη', sirka: 24, polovina: true },
    { id: 'pote', typ: 'volba', popis: 'Καταγγέλλω τη σύμβαση', moznosti: [ { hodnota: 'prothesmia', popis: 'με την προθεσμία της σύμβασης (το συντομότερο δυνατό)' }, { hodnota: 'imerominia', popis: 'από ορισμένη ημερομηνία' } ] },
    { id: 'imerominia_lysis', typ: 'datum', popis: 'Ημερομηνία λύσης', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'pote', je: 'imerominia' } },
    { id: 'misto', typ: 'text', popis: 'Τόπος', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Ημερομηνία', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Καταγγελία', odstavce: [
    '**Πελάτης:** {{p_jmeno}}, {{p_adresa}}',
    '**Πάροχος:** {{k_jmeno}}, {{k_adresa}}',
    { volba: 'pote', uvodVzor: 'Λύση (σημειώστε μία επιλογή):', moznosti: { prothesmia: 'Με την παρούσα καταγγέλλω τη σύμβαση για την υπηρεσία {{ypiresia}}, αριθμός {{arithmos}}, τηρώντας την προθεσμία καταγγελίας της σύμβασης, δηλαδή από την ενωρίτερη δυνατή ημερομηνία.', imerominia: 'Με την παρούσα καταγγέλλω τη σύμβαση για την υπηρεσία {{ypiresia}}, αριθμός {{arithmos}}, από {{imerominia_lysis}}.' } },
    'Παρακαλώ να μου επιβεβαιώσετε εγγράφως την παραλαβή της καταγγελίας και την ημερομηνία λύσης της σύμβασης και να μη χρεώσετε υπηρεσίες μετά από αυτήν.',
  ] }],
};
