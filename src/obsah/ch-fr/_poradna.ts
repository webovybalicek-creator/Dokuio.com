import type { Poradna } from '../typy';

export const poradna: Poradna = {
  slug: 'conseils',
  nazev: 'Conseils',
  title: 'Conseils (Suisse) – vente de voiture, prêt, poursuite, bail',
  description: 'Guides pratiques selon le droit suisse : vendre une voiture, prêter de l’argent, récupérer une dette, résilier un bail, signaler un défaut. Avec des modèles gratuits.',
  h1: 'Conseils',
  h1Span: 'Des guides pas à pas pour les situations du quotidien. Sans jargon juridique, selon le droit suisse.',
  kategorie: [
    {
      slug: 'auto',
      nazev: 'Voiture et véhicules',
      popis: 'Vendre et acheter une occasion, service des automobiles.',
      ilustrace: 'auto',
      temata: [
        { slug: 'vendre-voiture', nazev: 'Vendre sa voiture', popis: 'Vendre entre particuliers sans rien oublier.' },
        { slug: 'acheter-occasion', nazev: 'Acheter une occasion', popis: 'Ce qu’il faut vérifier avant de payer.' },
        { slug: 'service-des-automobiles', nazev: 'Service des automobiles', popis: 'Immatriculation, plaques, procuration.' },
      ],
    },
    {
      slug: 'geld',
      nazev: 'Argent et dettes',
      popis: 'Prêt entre particuliers, reconnaissance de dette, poursuite, donations.',
      ilustrace: 'penize',
      temata: [
        { slug: 'pret', nazev: 'Prêt entre particuliers', popis: 'Prêter de l’argent pour qu’il revienne.' },
        { slug: 'dettes', nazev: 'Dettes et poursuite', popis: 'Reconnaissance de dette, mainlevée, prescription.' },
        { slug: 'donation', nazev: 'Donation', popis: 'Forme et impôt cantonal sur les donations.' },
      ],
    },
    {
      slug: 'achats',
      nazev: 'Achats et réclamations',
      popis: 'Retour, avis des défauts, vente entre particuliers, artisans.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'retour', nazev: 'Retour et révocation', popis: 'Ce qui vaut en ligne, à domicile et par téléphone.' },
        { slug: 'garantie', nazev: 'Garantie', popis: 'Avis immédiat, délais et droits.' },
        { slug: 'vente-particuliers', nazev: 'Vente entre particuliers', popis: 'Annonce, contrat de vente, arnaques.' },
        { slug: 'artisans', nazev: 'Artisans', popis: 'Contrat d’entreprise, prix, réception.' },
      ],
    },
    {
      slug: 'quotidien',
      nazev: 'Démarches et procurations',
      popis: 'Quand quelqu’un d’autre agit pour vous.',
      ilustrace: 'plnamoc',
      temata: [
        { slug: 'procuration', nazev: 'Procuration', popis: 'Quand une simple procuration suffit.' },
        { slug: 'enfants', nazev: 'Enfants en voyage', popis: 'Autorisation pour un voyage à l’étranger.' },
        { slug: 'pret-a-usage', nazev: 'Prêter une chose', popis: 'Prêt à usage, restitution.' },
      ],
    },
    {
      slug: 'logement',
      nazev: 'Logement et bail',
      popis: 'Louer un appartement, garantie de loyer, résiliation et état des lieux.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'bail', nazev: 'Contrat de bail', popis: 'Loyer, frais accessoires, garantie.' },
        { slug: 'resiliation', nazev: 'Résiliation et départ', popis: 'Termes, locataire de remplacement, état des lieux.' },
      ],
    },
    {
      slug: 'travail',
      nazev: 'Travail et contrats',
      popis: 'Démission, résiliation d’abonnements et d’assurances.',
      ilustrace: 'protokol',
      temata: [
        { slug: 'demission', nazev: 'Démission', popis: 'Délais, temps d’essai et chômage.' },
        { slug: 'resilier-contrat', nazev: 'Résilier un contrat', popis: 'Assurance, caisse-maladie, mobile, fitness.' },
      ],
    },
  ],
};
