import sys; sys.path.insert(0,'/home/claude/skripty')
from clanek import clanek
F='https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it'
CO=('Codice delle obbligazioni (CO, RS 220) – Fedlex',F)
LEF=('Legge sull’esecuzione e sul fallimento (LEF) – Fedlex','https://www.fedlex.admin.ch/eli/cc/11/529_488_529/it')
LCA=('Legge sul contratto d’assicurazione (LCA) – Fedlex','https://www.fedlex.admin.ch/eli/cc/24/719_735_717/it')
IMM=('Immatricolare un veicolo (ch.ch)','https://www.ch.ch/it/imposta-circolazione')
COLL=('Esame dei veicoli a motore – collaudo (ch.ch)','https://www.ch.ch/it/esame-dei-veicoli-a-motore--collaudo-')
ASA=('Uffici della circolazione dei Cantoni (asa.ch)','https://asa.ch/it/servizi-della-circolazione/indirizzi/')
ESEC=('Esecuzioni: precetto esecutivo, opposizione, pignoramento (ch.ch)','https://www.ch.ch/it/esecuzioni')
DON=('Imposta sulle donazioni (ch.ch)','https://www.ch.ch/it/deduzione-di-donazioni')
LOC=('Contratto di locazione e contratto d’affitto (ch.ch)','https://www.ch.ch/it/abitazioni/locazione/contratto-di-locazione-e-contratto-d-affitto')
DIF=('Rumore, difetti e affitti (ch.ch)','https://www.ch.ch/it/abitazioni/locazione/rumore--difetti-e-affitti')
RES=('Restituire o sostituire merci acquistate (ch.ch)','https://www.ch.ch/it/sicurezza-e-diritto/restituire-o-sostituire-merci-acquistate')
DIS=('Licenziamento o disdetta (ch.ch)','https://www.ch.ch/it/lavoro/disoccupazione--disdetta--licenziamento/licenziamento-o-disdetta')
PROVA=('Periodo di prova (ch.ch)','https://www.ch.ch/it/lavoro/contratti--certificati--periodo-di-prova/periodo-di-prova')
SECO=('FAQ sulla disdetta del rapporto di lavoro (SECO)','https://www.seco.admin.ch/it/faq-disdetta')
DISOC=('Disoccupazione (ch.ch)','https://www.ch.ch/it/disoccupazione')
CASSA=('Assicurazione malattie – cambiare e disdire (ch.ch)','https://www.ch.ch/it/assicurazione-malattie')
ELCOM=('Domande frequenti sulle tariffe elettriche (ElCom)','https://www.elcom.admin.ch/it/faq-tariffe-elettriche')
OMB=('When can I turn to ombudscom? (UFCOM, in inglese)','https://www.bakom.admin.ch/en/when-can-i-turn-to-ombudscom')
DFAE=('Viaggiare con dei bambini (DFAE)','https://www.eda.admin.ch/it/viaggiare-con-dei-bambini')
UFG=('Rapimento internazionale di minori (UFG)','https://www.bj.admin.ch/it/rapimento-internazionale-di-minori')
CC360=('Mandato precauzionale, art. 360 CC – Fedlex','https://www.fedlex.admin.ch/eli/cc/24/233_245_233/it#art_360')
SECOA=('A chi rivolgersi? Acquisti online (SECO)','https://www.seco.admin.ch/it/a-chi-rivolgersi')
def c(slug, title, nazev, desc, perex, kat, tema, dok, slova, zdroje, faq, telo):
    if len(title)>70 or not 70<=len(desc)<=170:
        print('DELKA', slug, len(title), len(desc)); return
    clanek('ch-it', slug, dict(title=title, nazev=nazev, description=desc, perex=perex, kategorie=kat, tema=tema, dokumenty=dok, slova=slova, zdroje=zdroje, faq=faq), telo, datum='2026-11-22')
