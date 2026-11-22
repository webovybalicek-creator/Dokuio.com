/**
 * Σύμβαση υπομίσθωσης κατοικίας ή δωματίου – Ελλάδα (ΑΚ 574 επ.). Το υπόδειγμα προϋποθέτει έγγραφη συναίνεση του εκμισθωτή·
 * ο μισθωτής εξακολουθεί να ευθύνεται έναντι του εκμισθωτή. Η υπομίσθωση δηλώνεται στην ΑΑΔΕ από τον υπεκμισθωτή.
 */
import type { Sablona } from '../typy';
import { posoOligrafos } from './arithmoi';
import { AK, MISTHOSI_AADE, SYMVOULI_TAYTOTITA, YPOSELIDO } from './pigi';

export const symvasiYpomisthosis: Sablona = {
  kod: 'GR-YPOMISTHOSI', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'gr', jazyk: 'el',
  nazev: 'Σύμβαση υπομίσθωσης', podnadpis: 'υπομίσθωση κατοικίας ή δωματίου με συναίνεση του εκμισθωτή (άρθρα 574 επ. Αστικού Κώδικα)',
  souborPdf: 'symvasi-ypomisthosis', paticka: YPOSELIDO('GR-YPOMISTHOSI'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'ο μισθωτής (υπεκμισθωτής)', vpravo: 'ο υπομισθωτής' },
  slovo: { n: 'σύμβαση', g: 'σύμβασης', a: 'σύμβαση', l: 'σύμβαση' },
  coDal: ['Εκτυπώστε τη σύμβαση σε δύο αντίτυπα και υπογράψτε και τα δύο.', 'Επισυνάψτε αντίγραφο της έγγραφης συναίνεσης του εκμισθωτή.', 'Ο υπεκμισθωτής υποβάλλει δήλωση στοιχείων μίσθωσης στην ΑΑΔΕ έως το τέλος του επόμενου μήνα.'],
  kontrola: [
    'Ελέγξτε το δικό σας μισθωτήριο: τα περισσότερα απαγορεύουν την υπομίσθωση χωρίς έγγραφη συναίνεση του εκμισθωτή. Το υπόδειγμα προϋποθέτει ότι την έχετε.',
    'Ο μισθωτής εξακολουθεί να ευθύνεται έναντι του εκμισθωτή για το μίσθωμα και για τις ζημιές που προκαλεί ο υπομισθωτής.',
    'Η υπομίσθωση δεν μπορεί να διαρκέσει περισσότερο από τη δική σας μίσθωση.',
    `Και ο υπεκμισθωτής υποβάλλει δήλωση στοιχείων μίσθωσης στην ΑΑΔΕ ([ΑΑΔΕ](${MISTHOSI_AADE.url})).`,
    SYMVOULI_TAYTOTITA,
  ],
  zdroje: [AK, MISTHOSI_AADE],
  kroky: [
    { id: 'meri', nazev: 'Μισθωτής και υπομισθωτής', popis: 'Ο μισθωτής παραχωρεί στον υπομισθωτή δωμάτιο ή ολόκληρη την κατοικία.', pole: [
      { id: 'n_jmeno', typ: 'text', popis: 'Μισθωτής – ονοματεπώνυμο', sirka: 34, autocomplete: 'name' },
      { id: 'n_afm', typ: 'text', popis: 'ΑΦΜ μισθωτή', sirka: 12, polovina: true },
      { id: 'n_adresa', typ: 'text', popis: 'Διεύθυνση μισθωτή', sirka: 46 },
      { id: 'p_jmeno', typ: 'text', popis: 'Υπομισθωτής – ονοματεπώνυμο', sirka: 34 },
      { id: 'p_afm', typ: 'text', popis: 'ΑΦΜ υπομισθωτή', sirka: 12, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Σημερινή διεύθυνση υπομισθωτή', sirka: 46 },
    ] },
    { id: 'misthio', nazev: 'Κατοικία και συναίνεση', pole: [
      { id: 'byt', typ: 'text', popis: 'Διεύθυνση της κατοικίας', sirka: 56 },
      { id: 'rozsah', typ: 'volba', popis: 'Έκταση', moznosti: [ { hodnota: 'cast', popis: 'μέρος της κατοικίας (δωμάτιο)' }, { hodnota: 'cely', popis: 'ολόκληρη η κατοικία' } ] },
      { id: 'cast_popis', typ: 'text', popis: 'Ποιο μέρος', placeholder: 'π.χ. δωμάτιο 14 τ.μ. με κοινή χρήση κουζίνας και μπάνιου', sirka: 56, zobrazitKdyz: { pole: 'rozsah', je: 'cast' } },
      { id: 'pronajimatel', typ: 'text', popis: 'Εκμισθωτής (ιδιοκτήτης)', napoveda: 'Ποιος συναίνεσε στην υπομίσθωση.', sirka: 34 },
      { id: 'souhlas_datum', typ: 'datum', popis: 'Ημερομηνία της συναίνεσης', napoveda: 'Επισυνάψτε τη συναίνεση στη σύμβαση.', sirka: 14, polovina: true },
    ] },
    { id: 'oroi', nazev: 'Διάρκεια και πληρωμές', pole: [
      { id: 'od', typ: 'datum', popis: 'Υπομίσθωση από', sirka: 14, polovina: true },
      { id: 'do', typ: 'datum', popis: 'Υπομίσθωση έως', sirka: 14, polovina: true },
      { id: 'najemne', typ: 'castka', popis: 'Μηνιαίο μίσθωμα (ευρώ)', napoveda: 'Με τα κοινόχρηστα, αν δεν συμφωνήσετε διαφορετικά.', sirka: 12, polovina: true },
      { id: 'den', typ: 'cislo', popis: 'Πληρωμή έως την … ημέρα του μήνα', placeholder: 'π.χ. 5', sirka: 4, polovina: true },
      { id: 'kauce', typ: 'castka', popis: 'Εγγύηση (ευρώ, προαιρετικά)', sirka: 12, polovina: true },
      { id: 'ucet', typ: 'text', popis: 'IBAN μισθωτή', placeholder: 'GR16 …', sirka: 34 },
      { id: 'vypoved', typ: 'cislo', popis: 'Προειδοποίηση καταγγελίας (μήνες)', placeholder: 'π.χ. 1', sirka: 4, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Τόπος', sirka: 18, polovina: true, vychozi: { obecZ: 'n_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Ημερομηνία', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { najemne_oligrafos: (d) => posoOligrafos(d.najemne) },
  clanky: [
    { nadpis: 'Συμβαλλόμενοι', odstavce: ['**Μισθωτής (υπεκμισθωτής):** {{n_jmeno}}, ΑΦΜ {{n_afm}}, κάτοικος {{n_adresa}}', '**Υπομισθωτής:** {{p_jmeno}}, ΑΦΜ {{p_afm}}, κάτοικος {{p_adresa}}'] },
    { nadpis: 'Αντικείμενο', vysvetleni: 'Τι υπομισθώνεται και με ποια συναίνεση.', odstavce: [{ volba: 'rozsah', uvodVzor: 'Έκταση (σημειώστε μία επιλογή):', moznosti: { cast: 'Ο μισθωτής υπεκμισθώνει στον υπομισθωτή μέρος της κατοικίας επί της οδού {{byt}}: {{cast_popis}}.', cely: 'Ο μισθωτής υπεκμισθώνει στον υπομισθωτή ολόκληρη την κατοικία επί της οδού {{byt}}.' } }, 'Ο εκμισθωτής {{pronajimatel}} συναίνεσε εγγράφως στην υπομίσθωση στις {{souhlas_datum}}· η συναίνεση επισυνάπτεται στην παρούσα.', 'Η υπομίσθωση λήγει το αργότερο με τη λήξη της μίσθωσης του μισθωτή.'] },
    { nadpis: 'Διάρκεια και καταγγελία', odstavce: ['Η υπομίσθωση αρχίζει στις {{od}} και λήγει στις {{do}}.', 'Κάθε μέρος μπορεί να καταγγείλει την υπομίσθωση με προειδοποίηση {{vypoved}} μηνών, εκτός αν ο νόμος ορίζει διαφορετικά.', 'Κατά τη λήξη ο υπομισθωτής αποδίδει το μίσθιο στην κατάσταση που το παρέλαβε, με την επιφύλαξη της συνήθους φθοράς.'] },
    { nadpis: 'Πληρωμές', odstavce: ['Ο υπομισθωτής καταβάλλει μηνιαίο μίσθωμα **{{najemne}}** (ολογράφως: {{najemne_oligrafos}}) μαζί με τα κοινόχρηστα, έως την {{den}}η ημέρα κάθε μήνα, στον λογαριασμό με IBAN {{ucet}}.', 'Ο υπομισθωτής κατέβαλε εγγύηση {{kauce}}, η οποία επιστρέφεται εντός 30 ημερών από την απόδοση, αφού αφαιρεθούν τυχόν οφειλές.'] },
    { nadpis: 'Τελικές διατάξεις', odstavce: ['Ο υπομισθωτής τηρεί τον κανονισμό της πολυκατοικίας και δεν παραχωρεί το μίσθιο σε τρίτους.', 'Τροποποιήσεις μόνο εγγράφως. Η σύμβαση συντάχθηκε σε δύο όμοια αντίτυπα.'] },
  ],
};
