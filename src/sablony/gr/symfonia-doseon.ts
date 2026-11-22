/** Συμφωνία εξόφλησης οφειλής σε δόσεις – Ελλάδα. Έγγραφη αναγνώριση της οφειλής (ΑΚ 873) με πρόγραμμα δόσεων· η αναγνώριση διακόπτει την παραγραφή (ΑΚ 260). */
import type { Sablona } from '../typy';
import { posoOligrafos } from './arithmoi';
import { AK, SYMVOULI_TAYTOTITA, YPOSELIDO } from './pigi';

export const symfoniaDoseon: Sablona = {
  kod: 'GR-DOSEIS', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'gr', jazyk: 'el',
  nazev: 'Συμφωνία εξόφλησης οφειλής σε δόσεις', podnadpis: 'αναγνώριση της οφειλής και πρόγραμμα αποπληρωμής',
  souborPdf: 'symfonia-doseon', paticka: YPOSELIDO('GR-DOSEIS'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'ο δανειστής', vpravo: 'ο οφειλέτης' },
  slovo: { n: 'συμφωνία', g: 'συμφωνίας', a: 'συμφωνία', l: 'συμφωνία' },
  coDal: ['Εκτυπώστε τη συμφωνία σε δύο αντίτυπα και υπογράψτε και τα δύο.', 'Σημειώστε τις ημερομηνίες των δόσεων στο ημερολόγιο.', 'Κρατήστε τα αποδεικτικά των πληρωμών.'],
  kontrola: [
    'Με τη συμφωνία ο οφειλέτης αναγνωρίζει την οφειλή· η αναγνώριση διακόπτει την παραγραφή και αυτή αρχίζει από την αρχή (άρθρα 260–270 ΑΚ).',
    'Ορίστε τι γίνεται αν καθυστερήσει μια δόση (π.χ. ληξιπρόθεσμο ολόκληρου του υπολοίπου).',
    'Πληρώνετε μέσω τράπεζας – τα αποδεικτικά μεταφοράς αποδεικνύουν κάθε δόση.',
    SYMVOULI_TAYTOTITA,
  ],
  zdroje: [AK],
  kroky: [
    { id: 'meri', nazev: 'Δανειστής και οφειλέτης', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Δανειστής – ονοματεπώνυμο ή επωνυμία', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Διεύθυνση δανειστή', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Οφειλέτης – ονοματεπώνυμο', sirka: 34 },
      { id: 'k_adt', typ: 'text', popis: 'Αριθμός ταυτότητας οφειλέτη', sirka: 12, polovina: true },
      { id: 'k_afm', typ: 'text', popis: 'ΑΦΜ οφειλέτη', sirka: 12, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Διεύθυνση οφειλέτη', sirka: 46 },
    ] },
    { id: 'doseis', nazev: 'Η οφειλή και οι δόσεις', pole: [
      { id: 'castka', typ: 'castka', popis: 'Συνολική οφειλή (ευρώ)', sirka: 12, polovina: true },
      { id: 'aitia', typ: 'text', popis: 'Αιτία της οφειλής', placeholder: 'π.χ. ανεξόφλητο τίμημα αυτοκινήτου σύμφωνα με τη σύμβαση της 01/06/2026', sirka: 56 },
      { id: 'dosi', typ: 'castka', popis: 'Μηνιαία δόση (ευρώ)', sirka: 12, polovina: true },
      { id: 'plithos', typ: 'cislo', popis: 'Αριθμός δόσεων', sirka: 6, polovina: true },
      { id: 'imera', typ: 'cislo', popis: 'Η δόση καταβάλλεται έως την … του μήνα', placeholder: 'π.χ. 15', sirka: 6, polovina: true },
      { id: 'proti', typ: 'datum', popis: 'Πρώτη δόση', sirka: 14, polovina: true },
      { id: 'iban', typ: 'text', popis: 'IBAN δανειστή', placeholder: 'GR16 …', sirka: 34 },
      { id: 'misto', typ: 'text', popis: 'Τόπος', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Ημερομηνία', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_oligrafos: (d) => posoOligrafos(d.castka), dosi_oligrafos: (d) => posoOligrafos(d.dosi) },
  clanky: [
    { nadpis: 'Συμβαλλόμενοι', odstavce: ['**Δανειστής:** {{p_jmeno}}, {{p_adresa}}', '**Οφειλέτης:** {{k_jmeno}}, αριθμός ταυτότητας {{k_adt}}, ΑΦΜ {{k_afm}}, κάτοικος {{k_adresa}}'] },
    { nadpis: 'Αναγνώριση της οφειλής', odstavce: ['Ο οφειλέτης αναγνωρίζει ότι κατά την ημέρα υπογραφής της παρούσας οφείλει στον δανειστή **{{castka}}** (ολογράφως: {{castka_oligrafos}}), από την εξής αιτία: {{aitia}}.'] },
    { nadpis: 'Εξόφληση σε δόσεις', odstavce: ['Ο δανειστής συμφωνεί ο οφειλέτης να εξοφλήσει την οφειλή σε {{plithos}} μηνιαίες δόσεις των **{{dosi}}** (ολογράφως: {{dosi_oligrafos}})· η τελευταία δόση ισούται με το υπόλοιπο της οφειλής.', 'Η πρώτη δόση καταβάλλεται στις {{proti}} και κάθε επόμενη έως την {{imera}}η ημέρα κάθε μήνα, στον λογαριασμό του δανειστή με IBAN {{iban}}.', 'Ο οφειλέτης μπορεί να εξοφλήσει την οφειλή ή μέρος της και πρόωρα.'] },
    { nadpis: 'Καθυστέρηση', odstavce: ['Αν ο οφειλέτης καθυστερήσει δύο δόσεις, ο δανειστής μπορεί με έγγραφη ειδοποίηση να ζητήσει αμέσως ολόκληρο το υπόλοιπο, με τους νόμιμους τόκους υπερημερίας.'] },
    { nadpis: 'Τελικές διατάξεις', odstavce: ['Για όσα δεν ρυθμίζονται εφαρμόζονται οι διατάξεις του Αστικού Κώδικα. Η συμφωνία συντάχθηκε σε δύο όμοια αντίτυπα.'] },
  ],
};
