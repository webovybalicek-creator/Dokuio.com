/**
 * Δήλωση ελαττώματος προϊόντος (νόμιμη εγγύηση) – Ελλάδα (ΑΚ 534 επ., όπως ισχύουν μετά την ενσωμάτωση της Οδηγίας 2019/771).
 * Ο πωλητής ευθύνεται για έλλειψη συμμόρφωσης που εμφανίζεται εντός 2 ετών από την παράδοση· επισκευή ή αντικατάσταση
 * εντός εύλογου χρόνου, διαφορετικά μείωση τιμής ή υπαναχώρηση.
 */
import type { Sablona } from '../typy';
import { posoOligrafos } from './arithmoi';
import { AK, EGGYISI, YPOSELIDO } from './pigi';

export const axiosiEggyisis: Sablona = {
  kod: 'GR-EGGYISI', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'gr', jazyk: 'el',
  nazev: 'Δήλωση ελαττώματος προϊόντος', podnadpis: 'άσκηση δικαιωμάτων από τη νόμιμη εγγύηση (άρθρα 534 επ. Αστικού Κώδικα)',
  souborPdf: 'axiosi-eggyisis', paticka: YPOSELIDO('GR-EGGYISI'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'ο αγοραστής', vpravo: 'παρελήφθη (πωλητής, προαιρετικά)' },
  cislovatClanky: false,
  slovo: { n: 'δήλωση', g: 'δήλωσης', a: 'δήλωση', l: 'δήλωση' },
  coDal: ['Παραδώστε τη δήλωση στο κατάστημα ή στείλτε την με email ή συστημένη επιστολή· κρατήστε αντίγραφο.', 'Επισυνάψτε την απόδειξη αγοράς και φωτογραφίες του ελαττώματος.', 'Ζητήστε γραπτή βεβαίωση παραλαβής του προϊόντος.'],
  kontrola: [
    `Ο πωλητής ευθύνεται για ελαττώματα που εμφανίζονται εντός 2 ετών από την παράδοση ([Your Europe](${EGGYISI.url})).`,
    'Για ελάττωμα που εμφανίζεται εντός του πρώτου έτους τεκμαίρεται ότι υπήρχε ήδη κατά την παράδοση – ο πωλητής πρέπει να αποδείξει το αντίθετο.',
    'Πρώτα δικαιούστε επισκευή ή αντικατάσταση· αν δεν γίνει σε εύλογο χρόνο, μείωση της τιμής ή υπαναχώρηση.',
    'Η εμπορική εγγύηση του κατασκευαστή είναι επιπλέον – δεν αντικαθιστά τη νόμιμη εγγύηση του πωλητή.',
  ],
  zdroje: [AK, EGGYISI],
  kroky: [{ id: 'stoixeia', nazev: 'Το ελάττωμα', pole: [
    { id: 'k_jmeno', typ: 'text', popis: 'Πωλητής (κατάστημα)', placeholder: 'π.χ. η επωνυμία του καταστήματος', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Διεύθυνση ή email του πωλητή', sirka: 46 },
    { id: 'zbozi', typ: 'text', popis: 'Προϊόν', placeholder: 'π.χ. πλυντήριο Bosch Serie 4', sirka: 46 },
    { id: 'koupeno', typ: 'datum', popis: 'Ημερομηνία αγοράς', sirka: 14, polovina: true },
    { id: 'doklad', typ: 'text', popis: 'Αριθμός απόδειξης', sirka: 16, polovina: true },
    { id: 'cena', typ: 'castka', popis: 'Τιμή (ευρώ)', sirka: 12, polovina: true },
    { id: 'vada', typ: 'textarea', popis: 'Περιγραφή του ελαττώματος', placeholder: 'π.χ. δεν ξεκινά η φυγοκέντρηση, εμφανίζεται ο κωδικός E18', sirka: 64 },
    { id: 'zjisteno', typ: 'datum', popis: 'Ημερομηνία που εμφανίστηκε', sirka: 14, polovina: true },
    { id: 'naroky', typ: 'volba', popis: 'Τι ζητάτε', moznosti: [ { hodnota: 'oprava', popis: 'επισκευή' }, { hodnota: 'vymena', popis: 'αντικατάσταση' }, { hodnota: 'sleva', popis: 'μείωση της τιμής' }, { hodnota: 'odstoupeni', popis: 'υπαναχώρηση και επιστροφή χρημάτων' } ] },
    { id: 'p_jmeno', typ: 'text', popis: 'Το ονοματεπώνυμό σας', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Η διεύθυνσή σας', sirka: 46 },
    { id: 'misto', typ: 'text', popis: 'Τόπος', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Ημερομηνία', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { cena_oligrafos: (d) => posoOligrafos(d.cena) },
  clanky: [{ nadpis: 'Δήλωση ελαττώματος', odstavce: [
    '**Προς:** {{k_jmeno}}, {{k_adresa}}',
    'Στις {{koupeno}} αγόρασα από εσάς το προϊόν {{zbozi}} με τιμή {{cena}} (απόδειξη αρ. {{doklad}}).',
    'Στις {{zjisteno}} εμφανίστηκε το εξής ελάττωμα: {{vada}}',
    { volba: 'naroky', uvodVzor: 'Σύμφωνα με τα άρθρα 534 επ. του Αστικού Κώδικα ζητώ (σημειώστε μία επιλογή):', moznosti: { oprava: 'Σύμφωνα με τα άρθρα 534 επ. του Αστικού Κώδικα ζητώ τη δωρεάν επισκευή του προϊόντος.', vymena: 'Σύμφωνα με τα άρθρα 534 επ. του Αστικού Κώδικα ζητώ την αντικατάσταση του προϊόντος με καινούργιο, χωρίς ελαττώματα.', sleva: 'Σύμφωνα με τα άρθρα 534 επ. του Αστικού Κώδικα ζητώ εύλογη μείωση της τιμής.', odstoupeni: 'Σύμφωνα με τα άρθρα 534 επ. του Αστικού Κώδικα υπαναχωρώ από τη σύμβαση και ζητώ την επιστροφή ολόκληρης της τιμής.' } },
    'Παρακαλώ να με ενημερώσετε εγγράφως για τον τρόπο αποκατάστασης εντός εύλογου χρόνου.',
    '**Αγοραστής:** {{p_jmeno}}, {{p_adresa}}',
  ] }],
};
