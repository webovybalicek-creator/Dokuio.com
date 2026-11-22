/**
 * Υπεύθυνη δήλωση συναίνεσης γονέα για ταξίδι ανηλίκου στο εξωτερικό – Ελλάδα. Όταν ο ανήλικος ταξιδεύει χωρίς τον έναν ή και τους
 * δύο γονείς, ο γονέας που δεν τον συνοδεύει δίνει υπεύθυνη δήλωση με βεβαίωση του γνησίου της υπογραφής (mfa.gr).
 */
import type { Sablona } from '../typy';
import { ANILIKOS, YPEUTHYNI, YPOSELIDO } from './pigi';

export const synainesiTaxidiou: Sablona = {
  kod: 'GR-TAXIDI-ANILIKOU', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'gr', jazyk: 'el',
  nazev: 'Υπεύθυνη δήλωση συναίνεσης για ταξίδι ανηλίκου', podnadpis: 'συναίνεση γονέα για ταξίδι του παιδιού στο εξωτερικό, με βεβαίωση του γνησίου της υπογραφής',
  souborPdf: 'synainesi-taxidiou-anilikou', paticka: YPOSELIDO('GR-TAXIDI-ANILIKOU'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'ο γονέας (δηλών)', vpravo: 'ο δεύτερος γονέας (αν υπογράφει κι αυτός)' },
  cislovatClanky: false,
  slovo: { n: 'δήλωση', g: 'δήλωσης', a: 'δήλωση', l: 'δήλωση' },
  podpisNaZarizeni: false,
  podpisPoznamka: 'Η υπογραφή του γονέα πρέπει να βεβαιωθεί (ΚΕΠ, αστυνομία ή προξενείο) ή η δήλωση να εκδοθεί ψηφιακά μέσω gov.gr. Γι’ αυτό δεν υπογράφεται στην οθόνη – εκτυπώστε τη και υπογράψτε τη μπροστά στον υπάλληλο.',
  coDal: ['Υπογράψτε τη δήλωση σε ΚΕΠ, αστυνομικό τμήμα ή ελληνικό προξενείο για βεβαίωση του γνησίου της υπογραφής – ή εκδώστε την ψηφιακά μέσω gov.gr (e-dilosi).', 'Ο συνοδός έχει μαζί τη δήλωση και το διαβατήριο ή την ταυτότητα του παιδιού στον έλεγχο διαβατηρίων.', 'Ελέγξτε και τις απαιτήσεις της χώρας προορισμού και της αεροπορικής εταιρείας.'],
  kontrola: [
    'Όταν ο ανήλικος ταξιδεύει στο εξωτερικό χωρίς τον έναν ή και τους δύο γονείς, χρειάζεται υπεύθυνη δήλωση συναίνεσης του γονέα που δεν τον συνοδεύει, με βεβαίωση του γνησίου της υπογραφής (Υπουργείο Εξωτερικών).',
    'Αν ο ανήλικος ταξιδεύει με άλλο ενήλικο (παππού, προπονητή, καθηγητή), τη συναίνεση δίνουν και οι δύο γονείς.',
    'Υπογραφή χωρίς βεβαίωση του γνησίου δεν αρκεί στον έλεγχο – η ψηφιακή δήλωση μέσω gov.gr έχει την ίδια ισχύ.',
    'Γράψτε με ακρίβεια την περίοδο, τις χώρες και τα στοιχεία του συνοδού.',
  ],
  zdroje: [ANILIKOS, YPEUTHYNI],
  kroky: [
    { id: 'goneas', nazev: 'Ο γονέας και το παιδί', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Γονέας – ονοματεπώνυμο', sirka: 34, autocomplete: 'name' },
      { id: 'p_adt', typ: 'text', popis: 'Αριθμός ταυτότητας γονέα', sirka: 12, polovina: true },
      { id: 'p_afm', typ: 'text', popis: 'ΑΦΜ γονέα', sirka: 12, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Διεύθυνση κατοικίας', sirka: 46 },
      { id: 'd_jmeno', typ: 'text', popis: 'Παιδί – ονοματεπώνυμο', sirka: 34 },
      { id: 'd_narozeni', typ: 'datum', popis: 'Ημερομηνία γέννησης παιδιού', sirka: 14, polovina: true },
      { id: 'd_dokument', typ: 'text', popis: 'Διαβατήριο / ταυτότητα παιδιού αρ.', sirka: 14, polovina: true },
    ] },
    { id: 'taxidi', nazev: 'Το ταξίδι', pole: [
      { id: 'synodos', typ: 'volba', popis: 'Το παιδί ταξιδεύει', moznosti: [ { hodnota: 'goneas', popis: 'με τον άλλο γονέα' }, { hodnota: 'prosopo', popis: 'με άλλο ενήλικο πρόσωπο' } ] },
      { id: 's_jmeno', typ: 'text', popis: 'Συνοδός – ονοματεπώνυμο', sirka: 34 },
      { id: 's_dokument', typ: 'text', popis: 'Ταυτότητα / διαβατήριο συνοδού αρ.', sirka: 20 },
      { id: 'chores', typ: 'text', popis: 'Χώρα/ες', placeholder: 'π.χ. Ιταλία', sirka: 40 },
      { id: 'skopos', typ: 'text', popis: 'Σκοπός του ταξιδιού', placeholder: 'π.χ. διακοπές', sirka: 34 },
      { id: 'apo', typ: 'datum', popis: 'Από', sirka: 14, polovina: true },
      { id: 'eos', typ: 'datum', popis: 'Έως', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Τόπος', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Ημερομηνία', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Υπεύθυνη δήλωση συναίνεσης', odstavce: [
    'Ο/Η **{{p_jmeno}}**, με αριθμό ταυτότητας {{p_adt}}, ΑΦΜ {{p_afm}}, κάτοικος {{p_adresa}}, ως γονέας του ανηλίκου',
    '**{{d_jmeno}}**, γεννηθέντος/είσας στις {{d_narozeni}}, με διαβατήριο ή ταυτότητα αρ. {{d_dokument}},',
    { volba: 'synodos', uvodVzor: 'Συνοδός (σημειώστε μία επιλογή):', moznosti: { goneas: 'δηλώνω με ατομική μου ευθύνη ότι συναινώ να ταξιδέψει το παιδί στο εξωτερικό συνοδευόμενο από τον άλλο γονέα {{s_jmeno}}, με έγγραφο αρ. {{s_dokument}},', prosopo: 'δηλώνω με ατομική μου ευθύνη ότι συναινώ να ταξιδέψει το παιδί στο εξωτερικό συνοδευόμενο από τον/την {{s_jmeno}}, με έγγραφο αρ. {{s_dokument}}, στον/στην οποίο/α εμπιστεύομαι τη φροντίδα του παιδιού κατά τη διάρκεια του ταξιδιού,' } },
    'για την περίοδο {{apo}} – {{eos}}, προς {{chores}}, με σκοπό {{skopos}}.',
    'Γνωρίζω τις κυρώσεις της παρ. 6 του άρθρου 22 του ν. 1599/1986 για ψευδή δήλωση. Η υπογραφή μου βεβαιώνεται από αρμόδια αρχή.',
  ] }],
};
