import sys; sys.path.insert(0,'/home/claude/skripty')
from clanek import clanek
F='https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr'
CO=('Code des obligations (CO, RS 220) – Fedlex',F)
LP=('Loi sur la poursuite pour dettes et la faillite (LP) – Fedlex','https://www.fedlex.admin.ch/eli/cc/11/529_488_529/fr')
LCA=('Loi sur le contrat d’assurance (LCA) – Fedlex','https://www.fedlex.admin.ch/eli/cc/24/719_735_717/fr')
IMM=('Immatriculer ou retirer de la circulation un véhicule (ch.ch)','https://www.ch.ch/fr/circulation-et-vehicules/voitures-et-autres-vehicules/immatriculer-un-vehicule/')
EXP=('Contrôle technique d’un véhicule (ch.ch)','https://www.ch.ch/fr/circulation-et-vehicules/voitures-et-autres-vehicules/controle-d-un-vehicule/')
ASA=('Services des automobiles des cantons (asa.ch)','https://asa.ch/')
POUR=('Poursuites : commandement de payer, opposition, saisie (ch.ch)','https://www.ch.ch/fr/impots-et-finances/dettes--poursuites-et-faillites/poursuites/')
DON=('L’impôt sur les donations (ch.ch)','https://www.ch.ch/fr/famille-et-partenariat/heritage/l-impot-sur-les-donations/')
BAIL=('Bail à loyer et bail à ferme (ch.ch)','https://www.ch.ch/fr/logement/location-d-un-logement/bail-a-loyer-et-bail-a-ferme/')
SOUS=('Conclure un contrat de bail ou de sous-location (ch.ch)','https://ch.ch/fr/location-logement-bail')
RET=('Retourner ou échanger des produits (ch.ch)','https://www.ch.ch/fr/securite-et-droit/retourner-ou-echanger-des-produits/')
DEM=('Démission et licenciement (ch.ch)','https://www.ch.ch/fr/travail/chomage--demission--licenciement/demission-et-licenciement/')
ESSAI=('Période d’essai (ch.ch)','https://www.ch.ch/fr/travail/contrats--certificat--periode-d-essai/periode-d-essai/')
SECO=('FAQ sur la résiliation du contrat (SECO)','https://www.seco.admin.ch/fr/faq-resiliation-du-contrat')
CHOM=('Comment et où s’inscrire au chômage (ch.ch)','https://www.ch.ch/fr/chomage-droits-obligations/')
CAISSE=('S’affilier à une caisse-maladie, en changer, la résilier (ch.ch)','https://www.ch.ch/fr/assurances/assurance-maladie/conclure-une-assurance-maladie/')
ELCOM=('Approvisionnement de base et marché libre (ElCom)','https://www.elcom.admin.ch/fr/service-universel-et-marche-libre')
OMB=('Quand puis-je m’adresser à ombudscom ? (OFCOM)','https://www.bakom.admin.ch/fr/quand-puis-je-madresser-a-ombudscom')
DFAE=('Voyager avec des enfants mineurs (DFAE)','https://www.eda.admin.ch/fr/voyager-avec-des-enfants-mineurs')
OFJ=('Enlèvement international d’enfants (OFJ)','https://www.bj.admin.ch/bj/fr/home/gesellschaft/kindesentfuehrung.html')
CC360=('Mandat pour cause d’inaptitude, art. 360 CC – Fedlex','https://www.fedlex.admin.ch/eli/cc/24/233_245_233/fr#art_360')
def c(slug, title, nazev, desc, perex, kat, tema, dok, slova, zdroje, faq, telo):
    if len(title)>70 or not 70<=len(desc)<=170:
        print('DELKA', slug, len(title), len(desc)); return
    clanek('ch-fr', slug, dict(title=title, nazev=nazev, description=desc, perex=perex, kategorie=kat, tema=tema, dokumenty=dok, slova=slova, zdroje=zdroje, faq=faq), telo, datum='2026-11-22')
