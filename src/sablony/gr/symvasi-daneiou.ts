/**
 * Σύμβαση δανείου χρημάτων μεταξύ ιδιωτών – Ελλάδα (ΑΚ 806 επ.). Ο ΑΚ δεν απαιτεί τύπο· η γραπτή σύμβαση και η μεταφορά
 * μέσω τράπεζας αποδεικνύουν το δάνειο. Δάνεια μεταξύ ιδιωτών υπόκεινται σε ψηφιακό τέλος 3,6 %.
 * Παραγραφή 20 ετών (249), τόκοι 5 έτη (250).
 */
import type { Sablona } from '../typy';
import { posoOligrafos } from './arithmoi';
import { AK, SYMVOULI_TAYTOTITA, YPOSELIDO } from './pigi';

export const symvasiDaneiou: Sablona = {
  kod: 'GR-DANEIO', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'gr', jazyk: 'el',
  nazev: 'Σύμβαση δανείου', podnadpis: 'δάνειο χρημάτων μεταξύ ιδιωτών (άρθρα 806 επ. Αστικού Κώδικα)',
  souborPdf: 'symvasi-daneiou', paticka: YPOSELIDO('GR-DANEIO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'ο δανειστής', vpravo: 'ο οφειλέτης' },
  slovo: { n: 'σύμβαση', g: 'σύμβασης', a: 'σύμβαση', l: 'σύμβαση' },
  coDal: ['Εκτυπώστε τη σύμβαση σε δύο αντίτυπα και υπογράψτε και τα δύο.', 'Μεταφέρετε τα χρήματα μέσω τράπεζας με αιτιολογία «δάνειο σύμφωνα με σύμβαση της …».', 'Σημειώστε τις ημερομηνίες των δόσεων στο ημερολόγιο.'],
  kontrola: [
    'Μεταφέρετε το δάνειο μέσω τράπεζας – το αποδεικτικό δείχνει ότι τα χρήματα δόθηκαν και χρησιμεύει και φορολογικά για την κάλυψη τεκμηρίων.',
    'Τα δάνεια μεταξύ ιδιωτών υπόκεινται σε ψηφιακό τέλος 3,6 % (αντικατέστησε το χαρτόσημο) – ελέγξτε τη δήλωσή του στην ΑΑΔΕ.',
    'Αν συμφωνείτε τόκο, γράψτε τον ρητά· ο συμβατικός τόκος δεν μπορεί να υπερβαίνει το ανώτατο επιτρεπτό όριο.',
    'Συμφωνήστε τι γίνεται με καθυστέρηση δόσεων (π.χ. καταγγελία και απαίτηση ολόκληρου του υπολοίπου).',
    'Η αξίωση επιστροφής παραγράφεται σε 20 έτη (άρθρο 249 ΑΚ), οι τόκοι σε 5 έτη (άρθρο 250 ΑΚ)· η αναγνώριση του χρέους διακόπτει την παραγραφή.',
    SYMVOULI_TAYTOTITA,
  ],
  zdroje: [AK],
  kroky: [
    { id: 'meri', nazev: 'Δανειστής και οφειλέτης', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Δανειστής – ονοματεπώνυμο', placeholder: 'π.χ. Γεώργιος Παπαδόπουλος', sirka: 34, autocomplete: 'name' },
      { id: 'p_afm', typ: 'text', popis: 'ΑΦΜ', sirka: 12, polovina: true },
      { id: 'p_adt', typ: 'text', popis: 'Αριθμός ταυτότητας', sirka: 12, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Διεύθυνση', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Οφειλέτης – ονοματεπώνυμο', placeholder: 'π.χ. Μαρία Κωνσταντίνου', sirka: 34 },
      { id: 'k_afm', typ: 'text', popis: 'ΑΦΜ', sirka: 12, polovina: true },
      { id: 'k_adt', typ: 'text', popis: 'Αριθμός ταυτότητας', sirka: 12, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Διεύθυνση', sirka: 46 },
    ] },
    { id: 'daneio', nazev: 'Το δάνειο και η επιστροφή', pole: [
      { id: 'castka', typ: 'castka', popis: 'Ποσό δανείου (ευρώ)', sirka: 12, polovina: true },
      { id: 'paradosi', typ: 'volba', popis: 'Καταβολή των χρημάτων', moznosti: [ { hodnota: 'trapeza', popis: 'σε τραπεζικό λογαριασμό του οφειλέτη' }, { hodnota: 'metrita', popis: 'σε μετρητά, κατά την υπογραφή' } ] },
      { id: 'k_iban', typ: 'text', popis: 'IBAN οφειλέτη', placeholder: 'GR16 0110 1250 0000 0001 2300 695', sirka: 34, zobrazitKdyz: { pole: 'paradosi', je: 'trapeza' } },
      { id: 'epistrofi', typ: 'volba', popis: 'Επιστροφή', moznosti: [ { hodnota: 'efapax', popis: 'εφάπαξ, έως ορισμένη ημερομηνία' }, { hodnota: 'doseis', popis: 'σε μηνιαίες δόσεις' } ] },
      { id: 'lixi', typ: 'datum', popis: 'Επιστροφή έως', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'epistrofi', je: 'efapax' } },
      { id: 'dosi', typ: 'castka', popis: 'Μηνιαία δόση (ευρώ)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'epistrofi', je: 'doseis' } },
      { id: 'proti', typ: 'datum', popis: 'Πρώτη δόση', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'epistrofi', je: 'doseis' } },
      { id: 'tokos', typ: 'volba', popis: 'Τόκος', moznosti: [ { hodnota: 'atoko', popis: 'άτοκο' }, { hodnota: 'entoko', popis: 'με συμβατικό τόκο' } ] },
      { id: 'epitokio', typ: 'text', popis: 'Ετήσιο επιτόκιο', placeholder: 'π.χ. 3 %', sirka: 8, polovina: true, zobrazitKdyz: { pole: 'tokos', je: 'entoko' } },
      { id: 'p_iban', typ: 'text', popis: 'IBAN δανειστή (για την επιστροφή)', placeholder: 'GR16 0110 1250 0000 0001 2300 695', sirka: 34 },
      { id: 'misto', typ: 'text', popis: 'Τόπος', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Ημερομηνία', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_oligrafos: (d) => posoOligrafos(d.castka) },
  clanky: [
    { nadpis: 'Συμβαλλόμενοι', odstavce: ['**Δανειστής:** {{p_jmeno}}, ΑΦΜ {{p_afm}}, αριθμός ταυτότητας {{p_adt}}, κάτοικος {{p_adresa}}', '**Οφειλέτης:** {{k_jmeno}}, ΑΦΜ {{k_afm}}, αριθμός ταυτότητας {{k_adt}}, κάτοικος {{k_adresa}}'] },
    { nadpis: 'Αντικείμενο', odstavce: ['Ο δανειστής μεταβιβάζει στην κυριότητα του οφειλέτη το ποσό των **{{castka}}** (ολογράφως: {{castka_oligrafos}}) και ο οφειλέτης υποχρεούται να επιστρέψει ίσο ποσό.', { volba: 'paradosi', uvodVzor: 'Καταβολή (σημειώστε μία επιλογή):', moznosti: { trapeza: 'Ο δανειστής θα μεταφέρει το ποσό στον τραπεζικό λογαριασμό του οφειλέτη με IBAN {{k_iban}}.', metrita: 'Ο οφειλέτης έλαβε το ποσό σε μετρητά κατά την υπογραφή του παρόντος, πράγμα που βεβαιώνει με την υπογραφή του.' } }] },
    { nadpis: 'Επιστροφή', odstavce: [{ volba: 'epistrofi', uvodVzor: 'Τρόπος επιστροφής (σημειώστε μία επιλογή):', moznosti: { efapax: 'Ο οφειλέτης θα επιστρέψει ολόκληρο το ποσό το αργότερο έως {{lixi}}.', doseis: 'Ο οφειλέτης θα επιστρέφει το ποσό σε μηνιαίες δόσεις των {{dosi}}, η πρώτη στις {{proti}} και κάθε επόμενη την ίδια ημέρα κάθε μήνα μέχρι την πλήρη εξόφληση.' } }, 'Οι πληρωμές γίνονται στον λογαριασμό του δανειστή με IBAN {{p_iban}}. Ο οφειλέτης μπορεί να εξοφλήσει και πρόωρα.', 'Αν ο οφειλέτης καθυστερήσει δύο δόσεις, ο δανειστής μπορεί με έγγραφη δήλωση να καταγγείλει τη σύμβαση και να απαιτήσει ολόκληρο το υπόλοιπο.'] },
    { nadpis: 'Τόκος', odstavce: [{ volba: 'tokos', uvodVzor: 'Τόκος (σημειώστε μία επιλογή):', moznosti: { 'atoko': 'Το δάνειο είναι άτοκο.', entoko: 'Ο οφειλέτης οφείλει συμβατικό τόκο {{epitokio}} ετησίως επί του ανεξόφλητου υπολοίπου.' } }, 'Σε περίπτωση υπερημερίας ο οφειλέτης οφείλει τόκο υπερημερίας.'] },
    { nadpis: 'Τελικές διατάξεις', odstavce: ['Για όσα δεν ρυθμίζονται στο παρόν εφαρμόζονται οι διατάξεις του Αστικού Κώδικα για το δάνειο.', 'Η σύμβαση συντάχθηκε σε δύο όμοια αντίτυπα, από τα οποία κάθε συμβαλλόμενος έλαβε από ένα.'] },
  ],
};
