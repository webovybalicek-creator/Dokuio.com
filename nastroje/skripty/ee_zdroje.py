import sys; sys.path.insert(0,'/home/claude/skripty')
from clanek import clanek
VOS=('Võlaõigusseadus (Riigi Teataja)','https://www.riigiteataja.ee/akt/111072026158?leiaKehtiv')
TSUS=('Tsiviilseadustiku üldosa seadus (Riigi Teataja)','https://www.riigiteataja.ee/akt/106122010012?leiaKehtiv')
TLS=('Töölepingu seadus (Riigi Teataja)','https://www.riigiteataja.ee/akt/106072023108?leiaKehtiv')
OMANIK=('Registriandmete muutmine ja omanikuvahetus (Transpordiamet)','https://transpordiamet.ee/en/vehicle-ship-airplane/vehicle/amending-register-data')
MSM=('Mootorsõidukimaks sõiduki võõrandamisel (Maksu- ja Tolliamet)','https://www.emta.ee/eraklient/maksud-ja-tasumine/muud-maksud/mootorsoidukimaks/soiduki-voorandamine')
KING=('Kingitused ja tulumaks (Maksu- ja Tolliamet)','https://emta.ee/node/354')
TAG=('14-päevane taganemisõigus (Your Europe)','https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_et.htm')
GAR=('Kaupade 2-aastane seaduslik garantii (Your Europe)','https://europa.eu/youreurope/citizens/consumers/shopping/guarantees/index_et.htm')
LAPS=('Seaduslik lastega välismaale suundumine – Eesti (e-justice)','https://e-justice.europa.eu/topics/family-matters-inheritance/moving-settling-abroad-children/ee_et')
def c(slug, title, nazev, desc, perex, kat, tema, dok, slova, zdroje, faq, telo):
    clanek('ee', slug, dict(title=title, nazev=nazev, description=desc, perex=perex, kategorie=kat, tema=tema, dokumenty=dok, slova=slova, zdroje=zdroje, faq=faq), telo)
