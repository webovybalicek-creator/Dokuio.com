import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'odigos',
  nazev: 'Οδηγός',
  title: 'Οδηγός – πώληση αυτοκινήτου, δάνειο, μίσθωση και αγορές',
  description: 'Οδηγοί βήμα προς βήμα: πώληση και μεταβίβαση αυτοκινήτου, δάνειο μεταξύ φίλων, δωρεά, μίσθωση κατοικίας, επιστροφή αγοράς και εγγύηση. Με δωρεάν υποδείγματα.',
  h1: 'Οδηγός',
  h1Span: 'Οδηγοί βήμα προς βήμα για καθημερινές περιστάσεις. Χωρίς δύσκολη νομική γλώσσα, με βάση την ισχύουσα νομοθεσία.',
  kategorie: [
    {
      slug: 'auto',
      nazev: 'Αυτοκίνητα',
      popis: 'Πώληση και αγορά μεταχειρισμένου, ψηφιακή μεταβίβαση.',
      ilustrace: 'auto',
      temata: [
        { slug: 'polisi-aftokinitou', nazev: 'Πώληση αυτοκινήτου', popis: 'Συμφωνητικό, πληρωμή και παράδοση.' },
        { slug: 'agora-aftokinitou', nazev: 'Αγορά μεταχειρισμένου', popis: 'Τι να ελέγξετε πριν πληρώσετε.' },
        { slug: 'metavivasi', nazev: 'Μεταβίβαση', popis: 'Ψηφιακά στο gov.gr, προϋποθέσεις.' },
      ],
    },
    {
      slug: 'chrimata',
      nazev: 'Χρήματα και δωρεές',
      popis: 'Δάνειο μεταξύ φίλων, αναγνώριση χρέους, παραγραφή, δωρεά.',
      ilustrace: 'penize',
      temata: [
        { slug: 'daneio', nazev: 'Το δάνειο', popis: 'Πώς να δανείσετε χρήματα και να τα πάρετε πίσω.' },
        { slug: 'ofeiles', nazev: 'Οφειλές', popis: 'Όχληση, αναγνώριση, δόσεις, παραγραφή.' },
        { slug: 'dorea', nazev: 'Η δωρεά', popis: 'Τύπος και φόρος δωρεάς.' },
      ],
    },
    {
      slug: 'katoikia',
      nazev: 'Κατοικία και μίσθωση',
      popis: 'Μίσθωση κατοικίας, εγγύηση, λύση και παράδοση.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'misthosi', nazev: 'Η μίσθωση', popis: 'Μισθωτήριο, εγγύηση, ΑΑΔΕ.' },
        { slug: 'telos-misthosis', nazev: 'Το τέλος της μίσθωσης', popis: 'Καταγγελία, παράδοση, εγγύηση.' },
      ],
    },
    {
      slug: 'agores',
      nazev: 'Αγορές και εγγύηση',
      popis: 'Υπαναχώρηση από αγορά online, ελαττωματικά προϊόντα, πώληση μέσω αγγελίας.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'ypanachorisi', nazev: 'Υπαναχώρηση', popis: '14 ημέρες χωρίς αιτιολογία.' },
        { slug: 'eggyisi', nazev: 'Εγγύηση', popis: 'Επισκευή, αντικατάσταση, επιστροφή χρημάτων.' },
        { slug: 'aggelia', nazev: 'Πώληση μέσω αγγελίας', popis: 'Συμφωνητικό, πληρωμή και απάτες.' },
        { slug: 'chrisidaneio', nazev: 'Δανεισμός πράγματος', popis: 'Δωρεάν χρήση και ζημιές.' },
      ],
    },
    {
      slug: 'ypiresies',
      nazev: 'Τεχνίτες και υπηρεσίες',
      popis: 'Η σύμβαση με τεχνίτη, καθυστερήσεις, ελαττώματα και πληρωμή.',
      ilustrace: 'protokol',
      temata: [{ slug: 'technites', nazev: 'Τεχνίτες', popis: 'Σύμβαση έργου, προθεσμία και ελαττώματα.' }],
    },
    {
      slug: 'ergasia',
      nazev: 'Εργασία',
      popis: 'Παραίτηση από την εργασία και ΕΡΓΑΝΗ.',
      ilustrace: 'protokol',
      temata: [{ slug: 'paraitisi', nazev: 'Παραίτηση', popis: 'Δήλωση αποχώρησης και εκκαθάριση.' }],
    },
    {
      slug: 'oikogeneia',
      nazev: 'Οικογένεια και ταξίδια',
      popis: 'Ταξίδι ανηλίκου χωρίς γονείς και υπεύθυνη δήλωση συναίνεσης.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'taxidi-anilikou', nazev: 'Ταξίδι ανηλίκου', popis: 'Συναίνεση γονέα και θεώρηση γνησίου.' }],
    },
    {
      slug: 'exousiodotisi',
      nazev: 'Εξουσιοδοτήσεις και δηλώσεις',
      popis: 'Όταν κάποιος άλλος ενεργεί για εσάς.',
      ilustrace: 'plnamoc',
      temata: [{ slug: 'exousiodotisi', nazev: 'Εξουσιοδότηση', popis: 'Θεώρηση γνησίου ή συμβολαιογράφος.' }],
    },
  ],
};
