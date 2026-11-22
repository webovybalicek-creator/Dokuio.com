/**
 * Υπεύθυνη δήλωση – Ελλάδα (άρθρο 8 ν. 1599/1986). Η ψευδής δήλωση τιμωρείται (άρθρο 22 παρ. 6). Για υποβολή σε δημόσια υπηρεσία
 * απαιτείται βεβαίωση του γνησίου της υπογραφής (ΚΕΠ, αστυνομία) ή ψηφιακή έκδοση μέσω gov.gr (e-dilosi).
 */
import type { Sablona } from '../typy';
import { YPEUTHYNI, YPOSELIDO } from './pigi';

export const ypeythyniDilosi: Sablona = {
  kod: 'GR-YPEUTHYNI', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'gr', jazyk: 'el',
  nazev: 'Υπεύθυνη δήλωση', podnadpis: 'σύμφωνα με το άρθρο 8 του ν. 1599/1986',
  souborPdf: 'ypeythyni-dilosi', paticka: YPOSELIDO('GR-YPEUTHYNI'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'ο/η δηλών/ούσα', vpravo: 'βεβαίωση γνησίου υπογραφής (αν απαιτείται)' },
  cislovatClanky: false,
  slovo: { n: 'δήλωση', g: 'δήλωσης', a: 'δήλωση', l: 'δήλωση' },
  coDal: ['Αν η δήλωση υποβάλλεται σε δημόσια υπηρεσία, υπογράψτε τη μπροστά σε υπάλληλο ΚΕΠ ή αστυνομίας για βεβαίωση του γνησίου της υπογραφής.', 'Εναλλακτικά εκδώστε την ίδια δήλωση ψηφιακά μέσω gov.gr (e-dilosi) με τους κωδικούς Taxisnet.'],
  kontrola: [
    'Δηλώστε μόνο αληθή στοιχεία – η ψευδής υπεύθυνη δήλωση τιμωρείται με φυλάκιση (άρθρο 22 παρ. 6 ν. 1599/1986).',
    'Γράψτε σε ποια αρχή ή υπηρεσία απευθύνεται η δήλωση.',
    'Για δημόσια υπηρεσία χρειάζεται βεβαίωση του γνησίου της υπογραφής ή ψηφιακή έκδοση μέσω gov.gr· οι ιδιώτες (π.χ. τράπεζα) μπορεί να έχουν δικό τους έντυπο.',
  ],
  zdroje: [YPEUTHYNI],
  kroky: [{ id: 'stoixeia', nazev: 'Η δήλωση', pole: [
    { id: 'pros', typ: 'text', popis: 'Προς (αρχή ή υπηρεσία)', placeholder: 'π.χ. Δήμο Αθηναίων – Τμήμα Δημοτολογίου', sirka: 46 },
    { id: 'p_jmeno', typ: 'text', popis: 'Ονοματεπώνυμο', sirka: 34, autocomplete: 'name' },
    { id: 'p_otec', typ: 'text', popis: 'Όνομα πατέρα', sirka: 20, polovina: true },
    { id: 'p_matka', typ: 'text', popis: 'Όνομα μητέρας', sirka: 20, polovina: true },
    { id: 'p_narozeni', typ: 'datum', popis: 'Ημερομηνία γέννησης', sirka: 14, polovina: true },
    { id: 'p_misto_narozeni', typ: 'text', popis: 'Τόπος γέννησης', sirka: 20, polovina: true },
    { id: 'p_adt', typ: 'text', popis: 'Αριθμός δελτίου ταυτότητας', sirka: 12, polovina: true },
    { id: 'p_afm', typ: 'text', popis: 'ΑΦΜ', sirka: 12, polovina: true },
    { id: 'p_adresa', typ: 'text', popis: 'Διεύθυνση κατοικίας', sirka: 46 },
    { id: 'keimeno', typ: 'textarea', popis: 'Κείμενο της δήλωσης', placeholder: 'π.χ. δεν έχω λάβει την ίδια ενίσχυση από άλλο φορέα', sirka: 64 },
    { id: 'misto', typ: 'text', popis: 'Τόπος', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Ημερομηνία', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Υπεύθυνη δήλωση', odstavce: [
    '**Προς:** {{pros}}',
    'Ο/Η **{{p_jmeno}}**, του {{p_otec}} και της {{p_matka}}, γεννηθείς/είσα στις {{p_narozeni}} στον/στην {{p_misto_narozeni}}, με αριθμό δελτίου ταυτότητας {{p_adt}}, ΑΦΜ {{p_afm}}, κάτοικος {{p_adresa}},',
    'με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις που προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του ν. 1599/1986, δηλώνω ότι: {{keimeno}}.',
  ] }],
};
