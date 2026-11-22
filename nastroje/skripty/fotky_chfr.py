"""Doplní do článků titulní fotku (frontmatter foto) a jednu fotku v textu (před 3. nadpis H2)."""
import re, glob, os, sys
sys.path.insert(0, '/home/claude/dokuio.com')
FOTKY_TS = open('/home/claude/dokuio.com/src/lib/fotky.ts', encoding='utf-8').read()
IDS = dict(re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS) and [(k, (i)) for k, i, a in re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS)])
AUTOR = {k: a for k, i, a in re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS)}
ALT = {}
for k, body in re.findall(r"  '([a-z-]+)': \[(.*?)\],\n", FOTKY_TS):
    ALT[k] = re.findall(r"'([^']*)'", body)

PLAN = {'ch-fr/vendre-sa-voiture-en-suisse': ('auto-predani', 'dokumenty'),
 'ch-fr/acheter-une-voiture-d-occasion': ('auto-ojetina', 'auto-palubka'),
 'ch-fr/plaques-et-assurance-apres-la-vente': ('auto-klice', 'dokumenty'),
 'ch-fr/amende-apres-la-vente-de-la-voiture': ('auto-tachometr', 'dokumenty'),
 'ch-fr/vendre-sa-moto': ('auto-jizda', 'auto-klice'),
 'ch-fr/preter-de-l-argent-a-un-ami': ('penize', 'podpis'),
 'ch-fr/le-debiteur-ne-paie-pas-poursuite': ('psani', 'kalkulacka'),
 'ch-fr/reconnaissance-de-dette-et-prescription': ('podpis', 'dokumenty'),
 'ch-fr/paiement-par-mensualites-entre-particuliers': ('kalkulacka', 'ucty'),
 'ch-fr/donation-d-argent-impot-cantonal': ('dar', 'penize'),
 'ch-fr/louer-son-appartement': ('klice-byt', 'podpis'),
 'ch-fr/garantie-de-loyer': ('klice-dvere', 'ucty'),
 'ch-fr/sous-location-consentement': ('klice-byt', 'podani-ruky'),
 'ch-fr/resilier-son-bail-delais-et-termes': ('stehovani', 'krabice'),
 'ch-fr/etat-des-lieux-de-sortie': ('krabice', 'klice-dvere'),
 'ch-fr/achat-en-ligne-droit-de-retour': ('nakup-online', 'balik'),
 'ch-fr/demarchage-telephonique-revocation-14-jours': ('balik', 'psani'),
 'ch-fr/garantie-produit-defectueux': ('rozbity-telefon', 'oprava'),
 'ch-fr/vente-entre-particuliers-annonce': ('podani-ruky', 'penize'),
 'ch-fr/contrat-avec-un-artisan': ('oprava', 'ucty'),
 'ch-fr/procuration-quand-suffit-elle': ('podpis', 'dokumenty'),
 'ch-fr/enfant-voyage-sans-ses-parents': ('dite-cesta', 'pas'),
 'ch-fr/preter-un-objet-a-un-ami': ('podani-ruky', 'balik'),
 'ch-fr/demissionner-delais-de-conge': ('psani', 'podpis'),
 'ch-fr/resilier-assurance-caisse-maladie-abonnement': ('psani', 'ucty')}
JAZ = {'cz': 0, 'sk': 1, 'pl': 2, 'de': 3, 'at': 3, 'ch': 3, 'hu': 4, 'hr': 5, 'si': 6, 'ro': 7, 'bg': 8, 'gr': 9, 'ee': 10, 'lv': 11, 'lt': 12, 'ch-fr': 13}
CAP = {'pl': 'Fot.'}


def figure(klic, zeme):
    i = IDS[klic]
    alt = ALT[klic][JAZ[zeme]]
    if zeme == 'ch':
        alt = alt.replace('ß', 'ss')
    src = f'https://images.unsplash.com/photo-{i}?auto=format&fit=crop&q=70'
    srcset = ', '.join(f'{src}&w={w}&h={round(w*9/16)} {w}w' for w in (480, 800, 1200))
    return (f'<figure class="clanek__foto"><img src="{src}&w=1200&h=675" srcset="{srcset}" '
            f'sizes="(max-width: 960px) 100vw, 720px" width="1200" height="675" alt="{alt}" loading="lazy" />'
            f'</figure>')


def zpracuj(cesta, titulni, vtextu, zeme):
    s = open(cesta, encoding='utf-8').read()
    fm_end = s.index('\n---', 4)
    fm, body = s[:fm_end], s[fm_end:]
    fm = re.sub(r'\nfoto: .*', '', fm) + f"\nfoto: '{titulni}'"
    body = re.sub(r'\n<figure class="clanek__foto">.*?</figure>\n', '\n', body, flags=re.S)
    h2 = [m.start() for m in re.finditer(r'\n## ', body)]
    if vtextu and len(h2) >= 3:
        body = body[:h2[2]] + '\n\n' + figure(vtextu, zeme) + '\n' + body[h2[2]:]
    open(cesta, 'w', encoding='utf-8').write(fm + body)


for cesta in sorted(glob.glob('/home/claude/dokuio.com/src/content/poradna/ch-fr/*.md')):
    klic = '/'.join(cesta[:-3].split('/')[-2:])
    if klic in PLAN:
        zpracuj(cesta, *PLAN[klic], klic.split('/')[0])
    else:
        print('BEZ FOTKY', klic)
print('hotovo')
