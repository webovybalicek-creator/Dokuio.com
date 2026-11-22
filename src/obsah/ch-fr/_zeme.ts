import type { Zeme } from '../typy';

/**
 * Suisse romande – modèles en français selon le droit suisse (CO, LP, CC, LCA). Même contenu juridique que les modèles CH en
 * allemand, vérifié le 2026-11-22 sur Fedlex (version française) et les pages françaises de ch.ch, du DFAE, de l’OFJ, du SECO,
 * de l’ElCom et de l’OFCOM (voir src/sablony/ch-fr/sources.ts). Adresse /ch-fr/ (pas /ch/fr/ : ce chemin est réservé aux
 * versions uk/en). Les pages renvoient par hreflang aux pages allemandes correspondantes (protejsky).
 */
export const zeme: Zeme = {
  kod: 'ch-fr',
  nazev: 'Suisse',
  nazevEn: 'Switzerland (French)',
  jazyk: 'fr-CH',
  hreflang: 'fr-CH',
  casovaZona: 'Europe/Zurich',
  aktivni: true,
  poradi: 6.1,
  skupina: 'ch',
  kategorie: { auto: 'Voiture et véhicules', geld: 'Argent et donations', wohnen: 'Logement et bail', alltag: 'Vie quotidienne, achats et procurations', dienst: 'Artisans et mandats', arbeit: 'Travail', familie: 'Famille et voyages' },
  skupiny: {
    auto: [
      { slug: 'contrat-de-vente-voiture', popis: 'Vente d’une voiture d’occasion entre particuliers.' },
      { slug: 'contrat-de-vente-moto', popis: 'Vente d’une moto, d’un scooter ou d’un quad.' },
      { slug: 'proces-verbal-remise-vehicule', popis: 'Kilométrage, dommages et clés à la remise.' },
      { slug: 'procuration-service-des-automobiles', popis: 'Si quelqu’un d’autre va au service des automobiles.' },
      { slug: 'quittance', popis: 'Confirmation du paiement en espèces.' },
    ],
    geld: [
      { slug: 'contrat-de-pret', popis: 'Prêter de l’argent, aussi par mensualités.' },
      { slug: 'quittance', popis: 'Confirmation de réception d’argent liquide.' },
      { slug: 'reconnaissance-de-dette', popis: 'Confirmer une dette par écrit – utile en cas de poursuite.' },
      { slug: 'convention-paiement-echelonne', popis: 'Payer une dette par mensualités, signée par les deux.' },
      { slug: 'mise-en-demeure', popis: 'Sommation de payer avec un délai.' },
      { slug: 'contrat-de-donation', popis: 'Donner de l’argent ou une chose.' },
    ],
    wohnen: [
      { slug: 'contrat-de-bail-appartement', popis: 'Bail à loyer pour un appartement.' },
      { slug: 'etat-des-lieux', popis: 'Compteurs, défauts et clés.' },
      { slug: 'resiliation-bail', popis: 'Congé donné par le locataire.' },
      { slug: 'convention-resiliation-bail', popis: 'Fin du bail d’un commun accord.' },
      { slug: 'contrat-de-sous-location', popis: 'Sous-louer une chambre ou l’appartement.' },
      { slug: 'lettre-de-resiliation', popis: 'Électricité, internet et TV lors d’un déménagement.' },
    ],
    alltag: [
      { slug: 'contrat-de-pret-a-usage', popis: 'Prêter une chose gratuitement.' },
      { slug: 'procuration', popis: 'Pour qu’une personne règle une affaire à votre place.' },
      { slug: 'contrat-de-vente-entre-particuliers', popis: 'Vendre un objet d’occasion entre particuliers.' },
      { slug: 'avis-des-defauts', popis: 'Signaler immédiatement une marchandise défectueuse.' },
      { slug: 'revocation-contrat-demarchage', popis: 'Révoquer un achat à domicile ou par téléphone dans les 14 jours.' },
      { slug: 'attestation-sur-l-honneur', popis: 'Déclaration écrite pour l’école, la banque ou le bailleur.' },
      { slug: 'lettre-de-resiliation', popis: 'Résilier mobile, assurance, fitness ou abonnement.' },
    ],
    dienst: [
      { slug: 'contrat-d-entreprise', popis: 'Artisan, rénovation ou réparation.' },
      { slug: 'quittance', popis: 'Quittancer un acompte en espèces.' },
      { slug: 'mise-en-demeure', popis: 'Si le client ne paie pas.' },
      { slug: 'convention-paiement-echelonne', popis: 'Si le client veut payer par mensualités.' },
      { slug: 'lettre-de-resiliation', popis: 'Mettre fin à un mandat en tout temps (art. 404 CO).' },
    ],
    resiliations: [
      { slug: 'lettre-de-resiliation', popis: 'Mobile, assurance, caisse-maladie, fitness, abonnement ou mandat.' },
      { slug: 'lettre-de-demission', popis: 'Démissionner en tant qu’employé(e).' },
      { slug: 'resiliation-bail', popis: 'Résilier le bail en tant que locataire.' },
      { slug: 'revocation-contrat-demarchage', popis: 'Révoquer un achat à domicile ou par téléphone dans les 14 jours.' },
    ],
    familie: [
      { slug: 'autorisation-voyage-mineur', popis: 'L’enfant voyage à l’étranger sans ses parents ou avec un seul parent.' },
      { slug: 'procuration', popis: 'Pour qu’une personne règle une affaire à votre place.' },
      { slug: 'attestation-sur-l-honneur', popis: 'Déclaration écrite pour l’école, la banque ou le bailleur.' },
    ],
  },
  pripravujeme: [],
  balicky: [
    {
      slug: 'vente-voiture',
      nazev: 'Vente de voiture',
      popis: 'Contrat de vente, procès-verbal de remise, procuration pour le service des automobiles et quittance.',
      ilustrace: 'auto',
      dokumenty: ['contrat-de-vente-voiture', 'proces-verbal-remise-vehicule', 'procuration-service-des-automobiles', 'quittance'],
      title: 'Vente de voiture en Suisse – modèles gratuits en un seul PDF',
      description: 'Tout pour vendre une voiture d’occasion entre particuliers en Suisse : contrat de vente, procès-verbal de remise, procuration pour le SAN et quittance.',
      perex: 'Remplissez le contrat de vente – les autres documents reprennent les données. Téléchargez ensuite tout d’un coup dans un seul PDF.',
    },
    {
      slug: 'preter-de-l-argent',
      nazev: 'Prêter de l’argent',
      popis: 'Contrat de prêt avec plan de remboursement et quittance.',
      ilustrace: 'pujcka',
      dokumenty: ['contrat-de-pret', 'quittance'],
      title: 'Prêter de l’argent – modèle de contrat de prêt gratuit en PDF',
      description: 'Un prêt entre particuliers noir sur blanc : contrat de prêt selon le CO avec plan de remboursement et quittance pour l’argent remis. Gratuit, PDF et Word.',
      perex: 'Contrat de prêt avec plan de remboursement et quittance pour l’argent remis.',
    },
  ],
  rozcestnik: {
    nadpis: 'Quel document me faut-il ?',
    span: 'Choisissez votre situation – nous vous disons ce qu’il vous faut.',
    situace: [
      {
        nazev: 'Voiture',
        ilustrace: 'auto',
        moznosti: [
          { text: 'Je vends ou j’achète une voiture d’occasion', dokumenty: ['contrat-de-vente-voiture', 'proces-verbal-remise-vehicule', 'quittance'], balicek: 'vente-voiture', tip: 'Les plaques restent au vendeur ; l’acheteur immatricule la voiture avec sa propre assurance.' },
          { text: 'Je vends une moto, un scooter ou un quad', dokumenty: ['contrat-de-vente-moto', 'proces-verbal-remise-vehicule', 'quittance'] },
          { text: 'Quelqu’un d’autre va pour moi au service des automobiles', dokumenty: ['procuration-service-des-automobiles'] },
          { text: 'Je prête ma voiture', dokumenty: ['proces-verbal-remise-vehicule'] },
        ],
      },
      {
        nazev: 'Logement',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'Je loue ou je prends en location un appartement', dokumenty: ['contrat-de-bail-appartement', 'etat-des-lieux'] },
          { text: 'Je veux résilier mon bail', dokumenty: ['resiliation-bail', 'convention-resiliation-bail'], tip: 'Au moins trois mois pour un terme usuel, par écrit et signé à la main.' },
          { text: 'Je déménage et résilie électricité, internet ou TV', dokumenty: ['lettre-de-resiliation'], tip: 'Les ménages ne peuvent pas choisir leur fournisseur d’électricité – lors d’un déménagement, il suffit d’annoncer son départ.' },
          { text: 'Je sous-loue une chambre', dokumenty: ['contrat-de-sous-location'], tip: 'Avec le consentement du bailleur.' },
        ],
      },
      {
        nazev: 'Argent',
        ilustrace: 'penize',
        moznosti: [
          { text: 'Je prête de l’argent à quelqu’un', dokumenty: ['contrat-de-pret', 'quittance'], balicek: 'preter-de-l-argent' },
          { text: 'Quelqu’un me doit de l’argent et veut payer par mensualités', dokumenty: ['convention-paiement-echelonne', 'reconnaissance-de-dette'], tip: 'Avec une reconnaissance de dette signée, la mainlevée provisoire est possible dans la poursuite.' },
          { text: 'Quelqu’un ne me paie pas', dokumenty: ['mise-en-demeure'], tip: 'Intérêt moratoire de 5 % l’an dès la demeure.' },
          { text: 'Je donne de l’argent ou une chose', dokumenty: ['contrat-de-donation'], tip: 'L’impôt sur les donations relève du canton.' },
          { text: 'Je remets ou reçois de l’argent liquide', dokumenty: ['quittance'] },
        ],
      },
      {
        nazev: 'Vie quotidienne et achats',
        ilustrace: 'protokol',
        moznosti: [
          { text: 'J’ai acheté quelque chose à la porte ou par téléphone', dokumenty: ['revocation-contrat-demarchage'], tip: '14 jours, dès 100 francs. Pas de droit légal de révocation pour les achats en ligne.' },
          { text: 'La marchandise achetée est défectueuse', dokumenty: ['avis-des-defauts'], tip: 'Signalez le défaut immédiatement.' },
          { text: 'Je vends un objet d’occasion entre particuliers', dokumenty: ['contrat-de-vente-entre-particuliers'] },
          { text: 'Je prête une chose à un ami', dokumenty: ['contrat-de-pret-a-usage'] },
          { text: 'Quelqu’un doit régler une affaire pour moi', dokumenty: ['procuration'] },
          { text: 'Je veux résilier mobile, assurance, caisse-maladie, fitness ou un abonnement', dokumenty: ['lettre-de-resiliation'], tip: 'En recommandé – c’est en général la réception qui compte.' },
        ],
      },
      {
        nazev: 'Travail, artisans et famille',
        ilustrace: 'plnamoc',
        moznosti: [
          { text: 'Je confie des travaux à un artisan', dokumenty: ['contrat-d-entreprise'] },
          { text: 'Je démissionne', dokumenty: ['lettre-de-demission'], tip: 'Après le temps d’essai, 1 à 3 mois pour la fin d’un mois, selon l’année de service et le contrat.' },
          { text: 'Mon enfant voyage à l’étranger sans moi', dokumenty: ['autorisation-voyage-mineur'], tip: 'Le DFAE recommande vivement l’autorisation ; vérifiez les règles du pays de destination auprès de l’ambassade.' },
          { text: 'Il me faut une déclaration écrite', dokumenty: ['attestation-sur-l-honneur'] },
        ],
      },
    ],
  },
  hub: {
    title: 'Modèles de contrats gratuits en PDF (Suisse) – à remplir en ligne',
    description: 'Modèles de contrats gratuits selon le droit suisse (CO) : contrat de vente de voiture, contrat de prêt, reconnaissance de dette, bail, procuration et plus. PDF ou Word.',
    stitek: 'Suisse',
    stitekSpan: 'contrats selon le droit suisse',
    h1: 'Modèles de contrats',
    h1Span: 'À remplir en ligne en quelques minutes ou à télécharger vierges. Aussi en Word, sans inscription.',
    hledaniNadpis: 'De quel contrat avez-vous besoin ?',
    hledaniSpan: 'Cherchez selon votre situation, pas selon les articles de loi.',
    ogPopis: 'Selon le droit suisse. À remplir en ligne.',
  },
};
