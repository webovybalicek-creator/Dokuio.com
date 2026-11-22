/**
 * Εξώδικη όχληση για πληρωμή – Ελλάδα. Με την όχληση ο οφειλέτης καθίσταται υπερήμερος (ΑΚ 340) και οφείλει τόκους υπερημερίας
 * (ΑΚ 345). Η επίδοση μέσω δικαστικού επιμελητή αποδεικνύει την παραλαβή.
 */
import type { Sablona } from '../typy';
import { posoOligrafos } from './arithmoi';
import { AK, YPOSELIDO } from './pigi';

export const ochlisiPliromis: Sablona = {
  kod: 'GR-OCHLISI', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'gr', jazyk: 'el',
  nazev: 'Εξώδικη όχληση για πληρωμή', podnadpis: 'πρόσκληση προς τον οφειλέτη να εξοφλήσει την οφειλή του',
  souborPdf: 'ochlisi-pliromis', paticka: YPOSELIDO('GR-OCHLISI'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'ο δανειστής', vpravo: '' },
  cislovatClanky: false,
  slovo: { n: 'όχληση', g: 'όχλησης', a: 'όχληση', l: 'όχληση' },
  coDal: ['Στείλτε την όχληση με συστημένη επιστολή με απόδειξη παραλαβής ή επιδώστε την μέσω δικαστικού επιμελητή.', 'Κρατήστε αντίγραφο και την απόδειξη αποστολής ή επίδοσης.', 'Αν ο οφειλέτης δεν πληρώσει, μπορείτε να ζητήσετε διαταγή πληρωμής, αν η απαίτηση αποδεικνύεται με έγγραφο.'],
  kontrola: [
    'Με την όχληση ο οφειλέτης γίνεται υπερήμερος (άρθρο 340 ΑΚ) και από τότε οφείλει τόκους υπερημερίας (άρθρο 345 ΑΚ). Αν η ημέρα πληρωμής είχε ήδη οριστεί, υπερημερία επέρχεται και χωρίς όχληση.',
    'Γράψτε ακριβώς από πού προέρχεται η απαίτηση (σύμβαση, τιμολόγιο, δάνειο) και το ποσό.',
    'Δώστε εύλογη προθεσμία πληρωμής, συνήθως 7–15 ημέρες.',
    'Η επίδοση μέσω δικαστικού επιμελητή αποδεικνύει με βεβαιότητα την παραλαβή· η συστημένη επιστολή με απόδειξη παραλαβής είναι φθηνότερη εναλλακτική.',
  ],
  zdroje: [AK],
  kroky: [{ id: 'stoixeia', nazev: 'Η όχληση', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Δανειστής – ονοματεπώνυμο', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Διεύθυνση δανειστή', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Οφειλέτης – ονοματεπώνυμο ή επωνυμία', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Διεύθυνση οφειλέτη', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Οφειλόμενο ποσό (ευρώ)', sirka: 12, polovina: true },
    { id: 'splatnost', typ: 'datum', popis: 'Ληξιπρόθεσμο από', sirka: 14, polovina: true },
    { id: 'aitia', typ: 'text', popis: 'Αιτία της οφειλής', placeholder: 'π.χ. αμοιβή για εργασίες ανακαίνισης σύμφωνα με τη σύμβαση της 01/09/2026', sirka: 56 },
    { id: 'lhuta', typ: 'datum', popis: 'Προθεσμία πληρωμής έως', sirka: 14, polovina: true },
    { id: 'iban', typ: 'text', popis: 'IBAN δανειστή', placeholder: 'GR16 …', sirka: 34 },
    { id: 'misto', typ: 'text', popis: 'Τόπος', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Ημερομηνία', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_oligrafos: (d) => posoOligrafos(d.castka) },
  clanky: [{ nadpis: 'Εξώδικη όχληση', odstavce: [
    '**Του:** {{p_jmeno}}, κατοίκου {{p_adresa}}',
    '**Προς:** {{k_jmeno}}, {{k_adresa}}',
    'Μου οφείλετε το ποσό των **{{castka}}** (ολογράφως: {{castka_oligrafos}}), που προέρχεται από: {{aitia}}. Η οφειλή είναι ληξιπρόθεσμη από {{splatnost}} και παραμένει ανεξόφλητη.',
    'Σας καλώ να καταβάλετε το ποσό το αργότερο έως {{lhuta}} στον λογαριασμό μου με IBAN {{iban}}.',
    'Σε αντίθετη περίπτωση θα προχωρήσω στη δικαστική επιδίωξη της απαίτησής μου, με επιπλέον τόκους υπερημερίας και δικαστικά έξοδα σε βάρος σας. Επιφυλάσσομαι για κάθε νόμιμο δικαίωμά μου.',
  ] }],
};
