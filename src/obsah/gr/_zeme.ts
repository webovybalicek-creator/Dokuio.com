import type { Zeme } from '../typy';

/**
 * Ελλάδα. Τα υποδείγματα ελέγχθηκαν στις 22. 11. 2026 με βάση τον Αστικό Κώδικα, το gov.gr (ψηφιακή μεταβίβαση οχήματος),
 * την ΑΑΔΕ, τον ν. 1703/1987, τον ν. 2251/1994, το π.δ. 62/2025 και τον ν. 1599/1986 (βλ. src/sablony/gr/pigi.ts).
 */
export const zeme: Zeme = {
  kod: 'gr',
  nazev: 'Ελλάδα',
  nazevEn: 'Greece',
  jazyk: 'el',
  hreflang: 'el-GR',
  casovaZona: 'Europe/Athens',
  aktivni: true,
  poradi: 12,
  kategorie: { auto: 'Αυτοκίνητα', chrimata: 'Χρήματα και δωρεές', katoikia: 'Κατοικία και μίσθωση', agores: 'Αγορές και έγγραφα', ypiresies: 'Τεχνίτες και υπηρεσίες', ergasia: 'Εργασία', oikogeneia: 'Οικογένεια και ταξίδια' },
  skupiny: {
    auto: [
      { slug: 'symvasi-polisis-aftokinitou', popis: 'Πώληση μεταχειρισμένου αυτοκινήτου μεταξύ ιδιωτών.' },
      { slug: 'protokollo-paradosis-oximatos', popis: 'Χιλιόμετρα, ζημιές, κλειδιά και ώρα παράδοσης.' },
      { slug: 'exousiodotisi', popis: 'Όταν κάποιος άλλος κάνει τις διαδικασίες.' },
      { slug: 'apodeixi-eispraxis', popis: 'Απόδειξη πληρωμής σε μετρητά.' },
      { slug: 'symvasi-polisis-motosykletas', popis: 'Μοτοσικλέτα, σκούτερ ή γουρούνα.' },
    ],
    chrimata: [
      { slug: 'symvasi-daneiou', popis: 'Δάνειο σε φίλο ή συγγενή, και σε δόσεις.' },
      { slug: 'apodeixi-eispraxis', popis: 'Απόδειξη για χρήματα που εισπράξατε.' },
      { slug: 'anagnorisi-chreous', popis: 'Ο οφειλέτης αναγνωρίζει γραπτώς το χρέος.' },
      { slug: 'symvasi-doreas', popis: 'Δωρεά χρημάτων ή πράγματος με παράδοση.' },
      { slug: 'ochlisi-pliromis', popis: 'Όχληση στον οφειλέτη με προθεσμία πληρωμής.' },
      { slug: 'symfonia-doseon', popis: 'Η οφειλή σε μηνιαίες δόσεις.' },
    ],
    katoikia: [
      { slug: 'misthotirio-katoikias', popis: 'Ενοικίαση διαμερίσματος με εγγύηση.' },
      { slug: 'protokollo-paradosis-katoikias', popis: 'Μετρητές, κλειδιά και κατάσταση του σπιτιού.' },
      { slug: 'katangelia-misthosis', popis: 'Ο μισθωτής λύνει τη μίσθωση.' },
      { slug: 'symfonia-lysis-misthosis', popis: 'Λήξη της μίσθωσης με κοινή συμφωνία.' },
      { slug: 'symvasi-ypomisthosis', popis: 'Δωμάτιο ή όλο το σπίτι από τον μισθωτή.' },
    ],
    agores: [
      { slug: 'symvasi-polisis', popis: 'Πώληση μεταχειρισμένου πράγματος μέσω αγγελίας.' },
      { slug: 'entypo-ypanachorisis', popis: 'Επιστροφή αγοράς online σε 14 ημέρες.' },
      { slug: 'axiosi-eggyisis', popis: 'Ελαττωματικό προϊόν, νόμιμη εγγύηση 2 ετών.' },
      { slug: 'exousiodotisi', popis: 'Όταν κάποιος άλλος κάνει κάτι για εσάς.' },
      { slug: 'katangelia-symvasis', popis: 'Κινητή, internet, ασφάλεια, γυμναστήριο.' },
      { slug: 'symvasi-chrisidaneiou', popis: 'Δωρεάν δανεισμός πράγματος.' },
      { slug: 'ypeythyni-dilosi', popis: 'Υπεύθυνη δήλωση προς υπηρεσία ή τράπεζα.' },
    ],
    ypiresies: [
      { slug: 'symvasi-ergou', popis: 'Τεχνίτης, επισκευή, ανακαίνιση.' },
      { slug: 'ochlisi-pliromis', popis: 'Όταν ο πελάτης δεν πληρώνει.' },
    ],
    ergasia: [{ slug: 'paraitisi-ergazomenou', popis: 'Παραίτηση από την εργασία.' }],
    oikogeneia: [{ slug: 'synainesi-taxidiou-anilikou', popis: 'Το παιδί ταξιδεύει χωρίς τον έναν ή τους δύο γονείς.' }],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'polisi-aftokinitou',
      nazev: 'Πώληση αυτοκινήτου',
      popis: 'Συμφωνητικό πώλησης, πρωτόκολλο παράδοσης και απόδειξη είσπραξης.',
      ilustrace: 'auto',
      dokumenty: ['symvasi-polisis-aftokinitou', 'protokollo-paradosis-oximatos', 'apodeixi-eispraxis'],
      title: 'Πώληση αυτοκινήτου – όλα τα έγγραφα σε ένα PDF, δωρεάν',
      description: 'Όλα για την πώληση μεταχειρισμένου αυτοκινήτου: συμφωνητικό, πρωτόκολλο με την ώρα παράδοσης και απόδειξη. Δωρεάν υπόδειγμα, PDF και Word.',
      perex: 'Συμπληρώστε το συμφωνητικό και τα υπόλοιπα έγγραφα μεταφέρουν τα στοιχεία. Μετά κατεβάστε τα πάντα μαζί, σε ένα PDF.',
    },
  ],
  rozcestnik: {
    nadpis: 'Δεν ξέρετε ποιο έγγραφο χρειάζεστε;',
    span: 'Επιλέξτε την περίσταση και θα σας δείξουμε τι χρειάζεται.',
    situace: [
      {
        nazev: 'Το αυτοκίνητο',
        ilustrace: 'auto',
        moznosti: [
          { text: 'Πουλάω ή αγοράζω μεταχειρισμένο αυτοκίνητο', dokumenty: ['symvasi-polisis-aftokinitou', 'protokollo-paradosis-oximatos'], balicek: 'polisi-aftokinitou', tip: 'Η μεταβίβαση γίνεται ψηφιακά στο gov.gr.' },
          { text: 'Δανείζω το αυτοκίνητό μου', dokumenty: ['protokollo-paradosis-oximatos', 'symvasi-chrisidaneiou'] },
          { text: 'Πουλάω μοτοσικλέτα ή σκούτερ', dokumenty: ['symvasi-polisis-motosykletas', 'protokollo-paradosis-oximatos'] },
        ],
      },
      {
        nazev: 'Χρήματα',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Δανείζω χρήματα', dokumenty: ['symvasi-daneiou', 'apodeixi-eispraxis'] },
          { text: 'Δίνω ή παίρνω χρήματα σε μετρητά', dokumenty: ['apodeixi-eispraxis'], tip: 'Προς επιχειρήσεις, από 500 € μόνο ηλεκτρονικά.' },
          { text: 'Κάποιος μου χρωστά χρήματα', dokumenty: ['ochlisi-pliromis', 'anagnorisi-chreous', 'symfonia-doseon'], tip: 'Η αναγνώριση του χρέους διακόπτει την παραγραφή.' },
          { text: 'Δωρίζω χρήματα ή πράγμα', dokumenty: ['symvasi-doreas'], tip: 'Στην Α΄ κατηγορία 0 % φόρος έως 800.000 €, μέσω τράπεζας.' },
        ],
      },
      {
        nazev: 'Κατοικία',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Νοικιάζω σπίτι ή διαμέρισμα', dokumenty: ['misthotirio-katoikias', 'protokollo-paradosis-katoikias'], tip: 'Η μίσθωση δηλώνεται στην ΑΑΔΕ.' },
          { text: 'Θέλω να λήξει η μίσθωση', dokumenty: ['katangelia-misthosis', 'symfonia-lysis-misthosis'], tip: 'Με συμφωνία είναι πιο γρήγορο και ασφαλές.' },
          { text: 'Υπενοικιάζω δωμάτιο ή το σπίτι', dokumenty: ['symvasi-ypomisthosis'], tip: 'Με έγγραφη συναίνεση του εκμισθωτή.' },
        ],
      },
      {
        nazev: 'Αγορές και έγγραφα',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Θέλω να επιστρέψω αγορά online', dokumenty: ['entypo-ypanachorisis'], tip: '14 ημέρες από την παραλαβή.' },
          { text: 'Το προϊόν έχει ελάττωμα', dokumenty: ['axiosi-eggyisis'], tip: 'Ο πωλητής ευθύνεται 2 έτη από την παράδοση.' },
          { text: 'Πουλάω μεταχειρισμένο πράγμα', dokumenty: ['symvasi-polisis'] },
          { text: 'Κάποιος πρέπει να κάνει κάτι για εμένα', dokumenty: ['exousiodotisi'] },
          { text: 'Κλείνω συνδρομή, ασφάλεια ή γυμναστήριο', dokumenty: ['katangelia-symvasis'] },
          { text: 'Δανείζω ένα πράγμα σε φίλο', dokumenty: ['symvasi-chrisidaneiou'] },
        ],
      },
      {
        nazev: 'Εργασία, τεχνίτες και οικογένεια',
        ilustrace: 'plnamoc',
        moznosti: [
          { text: 'Αναθέτω εργασίες σε τεχνίτη', dokumenty: ['symvasi-ergou'] },
          { text: 'Παραιτούμαι από την εργασία', dokumenty: ['paraitisi-ergazomenou'], tip: 'Ο εργοδότης το δηλώνει στο ΕΡΓΑΝΗ.' },
          { text: 'Το παιδί ταξιδεύει χωρίς εμένα', dokumenty: ['synainesi-taxidiou-anilikou'], tip: 'Με θεώρηση του γνησίου της υπογραφής.' },
          { text: 'Χρειάζομαι υπεύθυνη δήλωση', dokumenty: ['ypeythyni-dilosi'] },
        ],
      },
    ],
  },
  hub: {
    title: 'Δωρεάν υποδείγματα συμβάσεων σε PDF – συμπλήρωση online',
    description: 'Δωρεάν υποδείγματα συμβάσεων κατά το ελληνικό δίκαιο: πώληση αυτοκινήτου, δάνειο, δωρεά, μισθωτήριο, εξουσιοδότηση, υπεύθυνη δήλωση. Online, σε PDF ή Word.',
    stitek: 'Ελλάδα',
    stitekSpan: 'συμβάσεις κατά το ελληνικό δίκαιο',
    h1: 'Υποδείγματα συμβάσεων',
    h1Span: 'Συμπληρώστε online σε λίγα λεπτά ή κατεβάστε το κενό υπόδειγμα. Και σε Word, χωρίς εγγραφή.',
    hledaniNadpis: 'Ποια σύμβαση χρειάζεστε;',
    hledaniSpan: 'Αναζητήστε με βάση την περίσταση, όχι τα άρθρα του νόμου.',
    ogPopis: 'Κατά το ελληνικό δίκαιο. Συμπληρώστε online.',
  },
};
