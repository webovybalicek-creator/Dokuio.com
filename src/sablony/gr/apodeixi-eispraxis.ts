/** Απόδειξη είσπραξης χρημάτων – Ελλάδα. Ποιος εισέπραξε, από ποιον, πόσα και για ποιο λόγο (ΑΚ – ο οφειλέτης δικαιούται απόδειξη). */
import type { Sablona } from '../typy';
import { posoOligrafos } from './arithmoi';
import { AK, METRITA, SYMVOULI_METRITA, YPOSELIDO } from './pigi';

export const apodeixiEispraxis: Sablona = {
  kod: 'GR-APODEIXI', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'gr', jazyk: 'el',
  nazev: 'Απόδειξη είσπραξης χρημάτων', podnadpis: 'βεβαίωση πληρωμής σε μετρητά μεταξύ ιδιωτών',
  souborPdf: 'apodeixi-eispraxis', paticka: YPOSELIDO('GR-APODEIXI'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'ο εισπράξας', vpravo: 'ο καταβαλών (προαιρετικά)' },
  cislovatClanky: false,
  slovo: { n: 'απόδειξη', g: 'απόδειξης', a: 'απόδειξη', l: 'απόδειξη' },
  coDal: ['Την απόδειξη την κρατά όποιος πλήρωσε – με αυτήν αποδεικνύει την πληρωμή.', 'Αν η πληρωμή αφορά όχημα ή πράγμα, η απόδειξη ας παραπέμπει στο συμφωνητικό.'],
  kontrola: [
    'Όποιος πληρώνει δικαιούται να λάβει απόδειξη (άρθρο 419 ΑΚ).',
    'Γράψτε για ποιο λόγο πληρώνετε (τίμημα, δάνειο, εγγύηση, προκαταβολή), ώστε να είναι σαφές τι εξοφλήθηκε.',
    SYMVOULI_METRITA,
  ],
  zdroje: [AK, METRITA],
  kroky: [{ id: 'stoixeia', nazev: 'Η πληρωμή', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Εισπράττων – ονοματεπώνυμο', placeholder: 'π.χ. Γεώργιος Παπαδόπουλος', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Διεύθυνση εισπράττοντος', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Καταβάλλων – ονοματεπώνυμο', placeholder: 'π.χ. Μαρία Κωνσταντίνου', sirka: 34 },
    { id: 'k_adresa', typ: 'text', popis: 'Διεύθυνση καταβάλλοντος', sirka: 46 },
    { id: 'castka', typ: 'castka', popis: 'Ποσό (ευρώ)', sirka: 12, polovina: true },
    { id: 'aitia', typ: 'text', popis: 'Αιτία πληρωμής', placeholder: 'π.χ. τίμημα αυτοκινήτου σύμφωνα με το συμφωνητικό της 22/11/2026', sirka: 56 },
    { id: 'misto', typ: 'text', popis: 'Τόπος', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Ημερομηνία', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  odvozene: { castka_oligrafos: (d) => posoOligrafos(d.castka) },
  clanky: [{ nadpis: 'Απόδειξη', odstavce: [
    'Ο/Η κάτωθι υπογεγραμμένος/η **{{p_jmeno}}**, κάτοικος {{p_adresa}}, βεβαιώνω ότι εισέπραξα από τον/την {{k_jmeno}}, κάτοικο {{k_adresa}}, το ποσό των **{{castka}}** (ολογράφως: {{castka_oligrafos}}) σε μετρητά.',
    'Αιτία πληρωμής: {{aitia}}.',
  ] }],
};
