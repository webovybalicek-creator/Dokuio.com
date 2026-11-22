/**
 * Δωρεά χρημάτων ή κινητού πράγματος με παράδοση – Ελλάδα. Η δωρεά απαιτεί συμβολαιογραφικό έγγραφο· η δωρεά κινητού ισχύει
 * και χωρίς αυτό, αν ακολουθήσει παράδοση (ΑΚ 498). Φόρος: Α΄ κατηγορία (σύζυγος, τέκνα, εγγονοί, γονείς) 0 % έως 800.000 €
 * εφάπαξ (Κώδικας Φορολογίας Περιουσίας, άρθρο 98), χρήματα μόνο μέσω τράπεζας· δήλωση στο myPROPERTY.
 */
import type { Sablona } from '../typy';
import { posoOligrafos } from './arithmoi';
import { AK, DOREA_FOROS, DOREA_800, SYMVOULI_TAYTOTITA, YPOSELIDO } from './pigi';

export const symvasiDoreas: Sablona = {
  kod: 'GR-DOREA', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'gr', jazyk: 'el',
  nazev: 'Συμφωνητικό δωρεάς', podnadpis: 'δωρεά χρηματικού ποσού ή κινητού πράγματος με παράδοση (άρθρα 496 και 498 Αστικού Κώδικα)',
  souborPdf: 'symvasi-doreas', paticka: YPOSELIDO('GR-DOREA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'ο δωρητής', vpravo: 'ο δωρεοδόχος' },
  slovo: { n: 'συμφωνητικό', g: 'συμφωνητικού', a: 'συμφωνητικό', l: 'συμφωνητικό' },
  coDal: ['Παραδώστε το πράγμα ή μεταφέρετε τα χρήματα μέσω τράπεζας με αιτιολογία «δωρεά σύμφωνα με συμφωνητικό της …».', 'Κάθε μέρος κρατά ένα υπογεγραμμένο αντίτυπο.', 'Ο δωρεοδόχος υποβάλλει δήλωση φόρου δωρεάς στο myPROPERTY της ΑΑΔΕ.'],
  kontrola: [
    'Η δωρεά κινητού πράγματος ή χρημάτων ισχύει χωρίς συμβολαιογράφο μόνο αν ακολουθήσει παράδοση (άρθρο 498 ΑΚ). Αν δεν παραδίδετε αμέσως, χρειάζεται συμβολαιογραφικό έγγραφο.',
    'Δωρεά ακινήτου γίνεται μόνο με συμβόλαιο συμβολαιογράφου· για όχημα ακολουθεί και η μεταβίβαση στο gov.gr.',
    `Στην Α΄ κατηγορία (σύζυγος, τέκνα, εγγονοί, γονείς) ο φόρος είναι 0 % έως 800.000 € εφάπαξ, αν τα χρήματα δοθούν μέσω τράπεζας ([άρθρο 98 ΚΦΠ](${DOREA_800.url})). Στις άλλες κατηγορίες ισχύουν μικρότερα αφορολόγητα και υψηλότεροι συντελεστές.`,
    `Η δωρεά δηλώνεται στην ΑΑΔΕ (myPROPERTY) ακόμη κι όταν δεν οφείλεται φόρος ([ΑΑΔΕ](${DOREA_FOROS.url})).`,
    SYMVOULI_TAYTOTITA,
  ],
  zdroje: [AK, DOREA_FOROS, DOREA_800],
  kroky: [
    { id: 'meri', nazev: 'Δωρητής και δωρεοδόχος', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Δωρητής – ονοματεπώνυμο', placeholder: 'π.χ. Γεώργιος Παπαδόπουλος', sirka: 34, autocomplete: 'name' },
      { id: 'p_afm', typ: 'text', popis: 'ΑΦΜ', sirka: 12, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Διεύθυνση', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Δωρεοδόχος – ονοματεπώνυμο', placeholder: 'π.χ. Ελένη Παπαδοπούλου', sirka: 34 },
      { id: 'k_afm', typ: 'text', popis: 'ΑΦΜ', sirka: 12, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Διεύθυνση', sirka: 46 },
      { id: 'syggeneia', typ: 'text', popis: 'Συγγένεια', napoveda: 'Από αυτήν εξαρτάται ο φόρος δωρεάς.', placeholder: 'π.χ. πατέρας και κόρη', sirka: 30 },
    ] },
    { id: 'dorea', nazev: 'Η δωρεά', pole: [
      { id: 'eidos', typ: 'volba', popis: 'Τι δωρίζεται', moznosti: [ { hodnota: 'chrimata', popis: 'χρηματικό ποσό' }, { hodnota: 'pragma', popis: 'κινητό πράγμα' } ] },
      { id: 'castka', typ: 'castka', popis: 'Ποσό (ευρώ)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'eidos', je: 'chrimata' } },
      { id: 'pragma', typ: 'textarea', popis: 'Περιγραφή του πράγματος', placeholder: 'π.χ. φορητός υπολογιστής Lenovo ThinkPad, σειριακός αριθμός …', sirka: 64, zobrazitKdyz: { pole: 'eidos', je: 'pragma' } },
      { id: 'axia', typ: 'castka', popis: 'Αξία του πράγματος (ευρώ)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'eidos', je: 'pragma' } },
      { id: 'misto', typ: 'text', popis: 'Τόπος', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Ημερομηνία', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_oligrafos: (d) => posoOligrafos(d.castka), axia_oligrafos: (d) => posoOligrafos(d.axia) },
  clanky: [
    { nadpis: 'Συμβαλλόμενοι', odstavce: ['**Δωρητής:** {{p_jmeno}}, ΑΦΜ {{p_afm}}, κάτοικος {{p_adresa}}', '**Δωρεοδόχος:** {{k_jmeno}}, ΑΦΜ {{k_afm}}, κάτοικος {{k_adresa}}', 'Συγγένεια μεταξύ των μερών: {{syggeneia}}.'] },
    { nadpis: 'Αντικείμενο της δωρεάς', odstavce: [{ volba: 'eidos', uvodVzor: 'Η δωρεά (σημειώστε μία επιλογή):', moznosti: { chrimata: 'Ο δωρητής δωρίζει στον δωρεοδόχο το ποσό των **{{castka}}** (ολογράφως: {{castka_oligrafos}}), το οποίο του μεταφέρει σε τραπεζικό λογαριασμό ή του παραδίδει κατά την υπογραφή του παρόντος.', pragma: 'Ο δωρητής δωρίζει στον δωρεοδόχο το εξής κινητό πράγμα: {{pragma}}, αξίας {{axia}} (ολογράφως: {{axia_oligrafos}}), το οποίο του παραδίδει κατά την υπογραφή του παρόντος.' } }, 'Ο δωρεοδόχος αποδέχεται τη δωρεά και βεβαιώνει ότι παρέλαβε το δώρο.'] },
    { nadpis: 'Τύπος της δωρεάς', odstavce: ['Τα μέρη δηλώνουν ότι η δωρεά αφορά κινητό πράγμα ή χρήματα και ολοκληρώνεται με παράδοση, σύμφωνα με το άρθρο 498 του Αστικού Κώδικα. Το παρόν χρησιμεύει ως απόδειξη της δωρεάς.'] },
    { nadpis: 'Τελικές διατάξεις', odstavce: ['Τυχόν φόρος δωρεάς και τα έξοδα της δωρεάς βαρύνουν τον δωρεοδόχο.', 'Για όσα δεν ρυθμίζονται εφαρμόζονται οι διατάξεις του Αστικού Κώδικα. Συντάχθηκε σε δύο όμοια αντίτυπα.'] },
  ],
};
