/**
 * Αναγνώριση χρέους – Ελλάδα. Η σύμβαση αναγνώρισης χρέους απαιτεί έγγραφο (ΑΚ 873). Η αναγνώριση διακόπτει την
 * παραγραφή (ΑΚ 260)· γενική παραγραφή 20 έτη (249), μισθώματα, τόκοι και περιοδικές παροχές 5 έτη (250).
 */
import type { Sablona } from '../typy';
import { posoOligrafos } from './arithmoi';
import { AK, SYMVOULI_TAYTOTITA, YPOSELIDO } from './pigi';

export const anagnorisiChreous: Sablona = {
  kod: 'GR-ANAGNORISI', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'gr', jazyk: 'el',
  nazev: 'Αναγνώριση χρέους', podnadpis: 'έγγραφη αναγνώριση χρέους (άρθρο 873 Αστικού Κώδικα)',
  souborPdf: 'anagnorisi-chreous', paticka: YPOSELIDO('GR-ANAGNORISI'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'ο οφειλέτης', vpravo: 'ο δανειστής (προαιρετικά)' },
  slovo: { n: 'αναγνώριση', g: 'αναγνώρισης', a: 'αναγνώριση', l: 'αναγνώριση' },
  coDal: ['Το υπογεγραμμένο πρωτότυπο το κρατά ο δανειστής.', 'Σημειώστε την ημερομηνία πληρωμής στο ημερολόγιο.'],
  kontrola: [
    'Η αναγνώριση χρέους πρέπει να γίνει εγγράφως (άρθρο 873 ΑΚ) – χωρίς υπογραφή του οφειλέτη δεν ισχύει.',
    'Η αναγνώριση διακόπτει την παραγραφή (άρθρο 260 ΑΚ): από την επόμενη ημέρα αρχίζει νέα παραγραφή.',
    'Γράψτε ακριβώς από πού προέρχεται το χρέος (δάνειο, τίμημα, μίσθωμα) και το ποσό.',
    'Για μισθώματα, τόκους και άλλες περιοδικές παροχές η παραγραφή είναι 5 έτη (άρθρο 250 ΑΚ), αλλιώς γενικά 20 έτη (άρθρο 249 ΑΚ).',
    SYMVOULI_TAYTOTITA,
  ],
  zdroje: [AK],
  kroky: [
    { id: 'meri', nazev: 'Οφειλέτης και δανειστής', pole: [
      { id: 'k_jmeno', typ: 'text', popis: 'Οφειλέτης – ονοματεπώνυμο', placeholder: 'π.χ. Μαρία Κωνσταντίνου', sirka: 34, autocomplete: 'name' },
      { id: 'k_afm', typ: 'text', popis: 'ΑΦΜ', sirka: 12, polovina: true },
      { id: 'k_adt', typ: 'text', popis: 'Αριθμός ταυτότητας', sirka: 12, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Διεύθυνση', sirka: 46 },
      { id: 'p_jmeno', typ: 'text', popis: 'Δανειστής – ονοματεπώνυμο', placeholder: 'π.χ. Γεώργιος Παπαδόπουλος', sirka: 34 },
      { id: 'p_adresa', typ: 'text', popis: 'Διεύθυνση', sirka: 46 },
    ] },
    { id: 'chreos', nazev: 'Το χρέος', pole: [
      { id: 'castka', typ: 'castka', popis: 'Ποσό χρέους (ευρώ)', sirka: 12, polovina: true },
      { id: 'aitia', typ: 'text', popis: 'Από πού προέρχεται το χρέος', placeholder: 'π.χ. δάνειο της 10/03/2025', sirka: 56 },
      { id: 'plirimi', typ: 'volba', popis: 'Πληρωμή', moznosti: [ { hodnota: 'efapax', popis: 'εφάπαξ, έως ορισμένη ημερομηνία' }, { hodnota: 'doseis', popis: 'σε μηνιαίες δόσεις' } ] },
      { id: 'lixi', typ: 'datum', popis: 'Πληρωμή έως', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'plirimi', je: 'efapax' } },
      { id: 'dosi', typ: 'castka', popis: 'Μηνιαία δόση (ευρώ)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'plirimi', je: 'doseis' } },
      { id: 'proti', typ: 'datum', popis: 'Πρώτη δόση', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'plirimi', je: 'doseis' } },
      { id: 'iban', typ: 'text', popis: 'IBAN δανειστή', placeholder: 'GR16 0110 1250 0000 0001 2300 695', sirka: 34 },
      { id: 'misto', typ: 'text', popis: 'Τόπος', sirka: 18, polovina: true, vychozi: { obecZ: 'k_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Ημερομηνία', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_oligrafos: (d) => posoOligrafos(d.castka) },
  clanky: [
    { nadpis: 'Συμβαλλόμενοι', odstavce: ['**Οφειλέτης:** {{k_jmeno}}, ΑΦΜ {{k_afm}}, αριθμός ταυτότητας {{k_adt}}, κάτοικος {{k_adresa}}', '**Δανειστής:** {{p_jmeno}}, κάτοικος {{p_adresa}}'] },
    { nadpis: 'Αναγνώριση', odstavce: ['Ο οφειλέτης αναγνωρίζει ότι οφείλει στον δανειστή το ποσό των **{{castka}}** (ολογράφως: {{castka_oligrafos}}), που προέρχεται από: {{aitia}}.', 'Ο οφειλέτης δηλώνει ότι το χρέος υφίσταται κατά το ύψος και την αιτία του και ότι δεν έχει αντιρρήσεις ή ενστάσεις κατά αυτού.'] },
    { nadpis: 'Εξόφληση', odstavce: [{ volba: 'plirimi', uvodVzor: 'Τρόπος εξόφλησης (σημειώστε μία επιλογή):', moznosti: { efapax: 'Ο οφειλέτης θα εξοφλήσει ολόκληρο το ποσό το αργότερο έως {{lixi}}.', doseis: 'Ο οφειλέτης θα εξοφλεί το χρέος σε μηνιαίες δόσεις των {{dosi}}, η πρώτη στις {{proti}} και κάθε επόμενη την ίδια ημέρα κάθε μήνα.' } }, 'Οι πληρωμές γίνονται στον λογαριασμό του δανειστή με IBAN {{iban}}. Αν ο οφειλέτης καθυστερήσει δύο δόσεις, ολόκληρο το υπόλοιπο καθίσταται αμέσως απαιτητό.'] },
    { nadpis: 'Τελικές διατάξεις', odstavce: ['Η αναγνώριση γίνεται σύμφωνα με το άρθρο 873 του Αστικού Κώδικα.', 'Συντάχθηκε σε δύο αντίτυπα, από τα οποία ο δανειστής έλαβε το πρωτότυπο.'] },
  ],
};
