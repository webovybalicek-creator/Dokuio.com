/**
 * Sources officielles pour la Suisse romande – Fedlex (droit fédéral, version française) et portails des autorités.
 * Vérifié le 2026-11-22 : CO (RS 220), LP (RS 281.1), CC (RS 210), LCA (RS 221.229.1), LCC (RS 221.214.1) ; ch.ch (démission,
 * période d’essai, bail, caisse-maladie, impôt sur les donations, retour des produits, immatriculation) ; DFAE (voyager avec des
 * enfants mineurs) ; OFJ (enlèvement international d’enfants) ; SECO (FAQ résiliation) ; ElCom (approvisionnement de base) ;
 * OFCOM (ombudscom). Contenu juridique identique aux modèles CH en allemand (src/sablony/ch), vérifiés le 2026-11-20.
 */
const CO_URL = 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr';
const LP_URL = 'https://www.fedlex.admin.ch/eli/cc/11/529_488_529/fr';
const LCA_URL = 'https://www.fedlex.admin.ch/eli/cc/24/719_735_717/fr';
const ancre = (art: string) => art.split(/[–\s]/)[0].replace(/^(\d+)([a-z])$/, '$1_$2');
const co = (art: string, titre: string) => ({ nazev: `Art. ${art} CO – ${titre} (Fedlex)`, url: `${CO_URL}#art_${ancre(art)}` });
/** Lien vers un article du CO dans un texte : [art. 17 CO](…) */
export const lienCO = (art: string, texte = `art. ${art} CO`) => `[${texte}](${CO_URL}#art_${ancre(art)})`;
export const lienLP = (art: string) => `[art. ${art} LP](${LP_URL}#art_${ancre(art)})`;
export const lienLCA = (art: string) => `[art. ${art} LCA](${LCA_URL}#art_${ancre(art)})`;

export const CO = { nazev: 'Code des obligations (CO, RS 220) – Fedlex', url: CO_URL };
export const CO_17 = co('17', 'Reconnaissance de dette');
export const CO_32 = co('32', 'Représentation');
export const CO_40A = co('40a–40f', 'Droit de révocation (démarchage)');
export const CO_88 = co('88', 'Quittance');
export const CO_102 = co('102', 'Demeure du débiteur');
export const CO_104 = co('104', 'Intérêt moratoire');
export const CO_135 = co('135', 'Interruption de la prescription');
export const CO_184 = co('184', 'Contrat de vente');
export const CO_197 = co('197', 'Garantie en raison des défauts de la chose');
export const CO_199 = co('199', 'Exclusion de la garantie');
export const CO_201 = co('201', 'Vérification de la chose et avis des défauts');
export const CO_205 = co('205', 'Action rédhibitoire et action en réduction du prix');
export const CO_210 = co('210', 'Prescription de la garantie');
export const CO_239 = co('239', 'Donation');
export const CO_243 = co('243', 'Promesse de donner');
export const CO_BAIL = co('253–273c', 'Bail à loyer');
export const CO_257E = co('257e', 'Sûretés fournies par le locataire');
export const CO_262 = co('262', 'Sous-location');
export const CO_266C = co('266c', 'Délai de congé pour les habitations');
export const CO_305 = co('305–311', 'Prêt à usage');
export const CO_312 = co('312', 'Prêt de consommation');
export const CO_318 = co('318', 'Remboursement du prêt');
export const CO_330A = co('330a', 'Certificat de travail');
export const CO_335 = co('335', 'Résiliation du contrat de travail');
export const CO_335B = co('335b', 'Résiliation pendant le temps d’essai');
export const CO_335C = co('335c', 'Délais de congé');
export const CO_341 = co('341', 'Interdiction de renoncer');
export const CO_363 = co('363–379', 'Contrat d’entreprise');
export const CO_367 = co('367', 'Vérification de l’ouvrage et avis des défauts');
export const CO_371 = co('371', 'Prescription des droits en raison des défauts');
export const CO_375 = co('375', 'Dépassement du devis approximatif');
export const CO_377 = co('377', 'Résiliation par le maître');
export const CO_404 = co('404', 'Révocation et répudiation du mandat');
export const LP_82 = { nazev: 'Art. 82 LP – mainlevée provisoire (Fedlex)', url: `${LP_URL}#art_82` };
export const LCA_35A = { nazev: 'Art. 35a LCA – résiliation ordinaire (Fedlex)', url: `${LCA_URL}#art_35_a` };
export const LCA_42 = { nazev: 'Art. 42 LCA – sinistre partiel et résiliation (Fedlex)', url: `${LCA_URL}#art_42` };
export const LCC_7 = { nazev: 'Art. 7 LCC – exceptions à la loi sur le crédit à la consommation (Fedlex)', url: 'https://www.fedlex.admin.ch/eli/cc/2002/593/fr#art_7' };
export const CC_360 = { nazev: 'Art. 360 CC – mandat pour cause d’inaptitude (Fedlex)', url: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/fr#art_360' };

export const CH_DEMISSION = { nazev: 'Démission et licenciement (ch.ch)', url: 'https://www.ch.ch/fr/travail/chomage--demission--licenciement/demission-et-licenciement/' };
export const CH_ESSAI = { nazev: 'Période d’essai (ch.ch)', url: 'https://www.ch.ch/fr/travail/contrats--certificat--periode-d-essai/periode-d-essai/' };
export const CH_BAIL = { nazev: 'Bail à loyer et bail à ferme (ch.ch)', url: 'https://www.ch.ch/fr/logement/location-d-un-logement/bail-a-loyer-et-bail-a-ferme/' };
export const CH_CAISSE = { nazev: 'S’affilier à une caisse-maladie, en changer, la résilier (ch.ch)', url: 'https://www.ch.ch/fr/assurances/assurance-maladie/conclure-une-assurance-maladie/' };
export const CH_DONATION = { nazev: 'L’impôt sur les donations (ch.ch)', url: 'https://www.ch.ch/fr/famille-et-partenariat/heritage/l-impot-sur-les-donations/' };
export const CH_RETOUR = { nazev: 'Retourner ou échanger des produits (ch.ch)', url: 'https://www.ch.ch/fr/securite-et-droit/retourner-ou-echanger-des-produits/' };
export const CH_IMMATRICULATION = { nazev: 'Immatriculer ou retirer de la circulation un véhicule (ch.ch)', url: 'https://www.ch.ch/fr/circulation-et-vehicules/voitures-et-autres-vehicules/immatriculer-un-vehicule/' };
export const CH_EXPERTISE = { nazev: 'Contrôle technique d’un véhicule (ch.ch)', url: 'https://www.ch.ch/fr/circulation-et-vehicules/voitures-et-autres-vehicules/controle-d-un-vehicule/' };
export const ASA = { nazev: 'Services des automobiles des cantons (asa.ch)', url: 'https://asa.ch/' };
export const DFAE_MINEURS = { nazev: 'Voyager avec des enfants mineurs (DFAE)', url: 'https://www.eda.admin.ch/fr/voyager-avec-des-enfants-mineurs' };
export const DFAE_VOYAGER = { nazev: 'Voyager – conditions d’entrée et conseils aux voyageurs (DFAE)', url: 'https://www.eda.admin.ch/fr/voyager' };
export const OFJ_ENLEVEMENT = { nazev: 'Enlèvement international d’enfants (Office fédéral de la justice)', url: 'https://www.bj.admin.ch/bj/fr/home/gesellschaft/kindesentfuehrung.html' };
export const SECO_FAQ = { nazev: 'FAQ sur la résiliation du contrat (SECO)', url: 'https://www.seco.admin.ch/fr/faq-resiliation-du-contrat' };
export const TRAVAIL_SWISS = { nazev: 'First steps after dismissal (travail.swiss, SECO)', url: 'https://www.arbeit.swiss/en/jobseekers/first-steps-after-dismissal' };
export const ELCOM = { nazev: 'Approvisionnement de base et marché libre (ElCom)', url: 'https://www.elcom.admin.ch/fr/service-universel-et-marche-libre' };
export const OMBUDSCOM = { nazev: 'Quand puis-je m’adresser à ombudscom ? (OFCOM)', url: 'https://www.bakom.admin.ch/fr/quand-puis-je-madresser-a-ombudscom' };

export const ASTUCE_IDENTITE = 'Vérifiez l’identité de l’autre partie au moyen du passeport ou de la carte d’identité et reprenez le nom et l’adresse exactement ainsi.';
export const ASTUCE_PAIEMENT = 'Pour les montants importants, préférez un virement – le relevé de compte est la meilleure preuve de paiement. En cas de paiement en espèces, faites signer une quittance.';
export const pied = (kod: string, verze = '1.0') =>
  `Modèle gratuit · modèle ${kod} v${verze} · modèle à remplir, pas un conseil juridique · les parties sont responsables du contenu`;
