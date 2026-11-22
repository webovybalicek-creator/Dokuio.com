/** Συμφωνητικό πώλησης κινητού πράγματος μεταξύ ιδιωτών – Ελλάδα (ΑΚ 513 επ., 534 επ.). Για μεταχειρισμένα πράγματα από αγγελία. */
import type { Sablona } from '../typy';
import { posoOligrafos } from './arithmoi';
import { AK, METRITA, SYMVOULI_TAYTOTITA, SYMVOULI_METRITA, YPOSELIDO } from './pigi';

export const symvasiPolisis: Sablona = {
  kod: 'GR-POLISI', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'gr', jazyk: 'el',
  nazev: 'Συμφωνητικό πώλησης', podnadpis: 'πώληση κινητού πράγματος μεταξύ ιδιωτών (άρθρα 513 επ. Αστικού Κώδικα)',
  souborPdf: 'symvasi-polisis', paticka: YPOSELIDO('GR-POLISI'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'ο πωλητής', vpravo: 'ο αγοραστής' },
  slovo: { n: 'συμφωνητικό', g: 'συμφωνητικού', a: 'συμφωνητικό', l: 'συμφωνητικό' },
  coDal: ['Εκτυπώστε το συμφωνητικό σε δύο αντίτυπα και υπογράψτε και τα δύο.', 'Παραδώστε το πράγμα μαζί με τα παρελκόμενα και τα έγγραφα.'],
  kontrola: [
    'Περιγράψτε το πράγμα με ακρίβεια (μάρκα, μοντέλο, σειριακός αριθμός, παρελκόμενα).',
    'Γράψτε όλα τα γνωστά ελαττώματα – για ελαττώματα που γνώριζε ο αγοραστής κατά την αγορά, ο πωλητής δεν ευθύνεται (άρθρο 537 ΑΚ).',
    'Ο πωλητής ευθύνεται για πραγματικά ελαττώματα και για συνομολογημένες ιδιότητες· συμφωνία που αποκλείει την ευθύνη είναι άκυρη, αν ο πωλητής απέκρυψε δολίως το ελάττωμα.',
    SYMVOULI_TAYTOTITA,
    SYMVOULI_METRITA,
  ],
  zdroje: [AK, METRITA],
  kroky: [
    { id: 'meri', nazev: 'Πωλητής και αγοραστής', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Πωλητής – ονοματεπώνυμο', placeholder: 'π.χ. Γεώργιος Παπαδόπουλος', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Διεύθυνση πωλητή', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Αγοραστής – ονοματεπώνυμο', placeholder: 'π.χ. Μαρία Κωνσταντίνου', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Διεύθυνση αγοραστή', sirka: 46 },
    ] },
    { id: 'pragma', nazev: 'Το πράγμα και η τιμή', pole: [
      { id: 'vec', typ: 'textarea', popis: 'Περιγραφή του πράγματος', placeholder: 'π.χ. ηλεκτρικό ποδήλατο Cube Kathmandu, σειριακός αριθμός WCU123456, με φορτιστή', sirka: 64 },
      { id: 'stav', typ: 'text', popis: 'Κατάσταση και γνωστά ελαττώματα', placeholder: 'π.χ. μεταχειρισμένο, γρατζουνιά στον σκελετό', sirka: 56 },
      { id: 'cena', typ: 'castka', popis: 'Τιμή (ευρώ)', sirka: 12, polovina: true },
      { id: 'plirimi', typ: 'volba', popis: 'Πληρωμή', moznosti: [ { hodnota: 'metrita', popis: 'σε μετρητά, κατά την υπογραφή' }, { hodnota: 'trapeza', popis: 'με τραπεζική μεταφορά' } ] },
      { id: 'iban', typ: 'text', popis: 'IBAN πωλητή', placeholder: 'GR16 0110 1250 0000 0001 2300 695', sirka: 34, zobrazitKdyz: { pole: 'plirimi', je: 'trapeza' } },
      { id: 'misto', typ: 'text', popis: 'Τόπος', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Ημερομηνία', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { cena_oligrafos: (d) => posoOligrafos(d.cena) },
  clanky: [
    { nadpis: 'Συμβαλλόμενοι', odstavce: ['**Πωλητής:** {{p_jmeno}}, κάτοικος {{p_adresa}}', '**Αγοραστής:** {{k_jmeno}}, κάτοικος {{k_adresa}}'] },
    { nadpis: 'Αντικείμενο', odstavce: ['Ο πωλητής πωλεί και ο αγοραστής αγοράζει το εξής πράγμα: {{vec}}.', 'Κατάσταση και γνωστά ελαττώματα: {{stav}}. Ο αγοραστής εξέτασε το πράγμα και το αγοράζει στην κατάσταση που βρίσκεται.', 'Ο πωλητής δηλώνει ότι είναι κύριος του πράγματος και ότι αυτό είναι ελεύθερο από δικαιώματα τρίτων.'] },
    { nadpis: 'Τίμημα', odstavce: ['Το τίμημα ανέρχεται σε **{{cena}}** (ολογράφως: {{cena_oligrafos}}).', { volba: 'plirimi', uvodVzor: 'Πληρωμή (σημειώστε μία επιλογή):', moznosti: { metrita: 'Ο αγοραστής κατέβαλε το τίμημα σε μετρητά κατά την υπογραφή· ο πωλητής βεβαιώνει την είσπραξη με την υπογραφή του.', trapeza: 'Ο αγοραστής θα μεταφέρει το τίμημα στον λογαριασμό του πωλητή με IBAN {{iban}}. Το πράγμα παραδίδεται μετά την πίστωση του ποσού.' } }] },
    { nadpis: 'Παράδοση και τελικές διατάξεις', odstavce: ['Με την παράδοση ο αγοραστής γίνεται κύριος του πράγματος και ο κίνδυνος περνά σε αυτόν.', 'Για όσα δεν ρυθμίζονται εφαρμόζονται οι διατάξεις του Αστικού Κώδικα για την πώληση. Συντάχθηκε σε δύο όμοια αντίτυπα.'] },
  ],
};
