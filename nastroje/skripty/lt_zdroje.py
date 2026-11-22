import sys; sys.path.insert(0,'/home/claude/skripty')
from clanek import clanek
CK=('Lietuvos Respublikos civilinis kodeksas (e-TAR)','https://www.e-tar.lt/portal/lt/legalAct/TAR.8A39C83848CB/asr')
DK=('Lietuvos Respublikos darbo kodeksas (e-TAR)','https://www.e-tar.lt/portal/lt/legalAct/f6d686707e7011e6b969d7ae07280e89/asr')
REG=('Pirkau Lietuvoje registruotą transporto priemonę (Regitra)','https://www.regitra.lt/en/services/vehicle-registration/i-have-purchased-a-vehicle/i-have-purchased-in-lithuania-previously-registered-in-lithuania/')
GRYN=('Atsiskaitymų grynaisiais pinigais ribojimo įstatymas (e-seimas)','https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/4a6af840f87111ecbfe9c72e552dd5bd')
DOV=('Gyventojų pajamų mokesčio įstatymo pakeitimai nuo 2026-01-01 (VMI)','https://www.vmi.lt/evmi/documents/20142/391071/Mokes%C4%8Di%C5%B3+%C4%AFstatymo+pakeitimai+nuo+2026-01-01.pdf')
ATS=('14 dienų teisė atsisakyti sutarties (Your Europe)','https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_lt.htm')
GAR=('2 metų teisinė prekių garantija (Your Europe)','https://europa.eu/youreurope/citizens/consumers/shopping/guarantees/index_lt.htm')
VAIK=('Teisėtas persikėlimas į užsienį su vaikais – Lietuva (e-justice)','https://e-justice.europa.eu/topics/family-matters-inheritance/moving-settling-abroad-children/lt_lt')
NOT=('Vaikų kelionės į užsienį: kada reikalingas notaro patvirtintas tėvų sutikimas (LRT)','https://www.lrt.lt/naujienos/laisvalaikis/13/3089238/vaiku-keliones-i-uzsieni-kada-reikalingas-notaro-patvirtintas-tevu-sutikimas')
def c(slug, title, nazev, desc, perex, kat, tema, dok, slova, zdroje, faq, telo):
    clanek('lt', slug, dict(title=title, nazev=nazev, description=desc, perex=perex, kategorie=kat, tema=tema, dokumenty=dok, slova=slova, zdroje=zdroje, faq=faq), telo)
