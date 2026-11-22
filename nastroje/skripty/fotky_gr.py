"""Doplní do článků titulní fotku (frontmatter foto) a jednu fotku v textu (před 3. nadpis H2)."""
import re, glob, os, sys
sys.path.insert(0, '/home/claude/dokuio.com')
FOTKY_TS = open('/home/claude/dokuio.com/src/lib/fotky.ts', encoding='utf-8').read()
IDS = dict(re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS) and [(k, (i)) for k, i, a in re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS)])
AUTOR = {k: a for k, i, a in re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS)}
ALT = {}
for k, body in re.findall(r"  '([a-z-]+)': \[(.*?)\],\n", FOTKY_TS):
    ALT[k] = re.findall(r"'([^']*)'", body)

PLAN = {'gr/polisi-metacheirismenou-aftokinitou': ('auto-predani', 'dokumenty'),
 'gr/agora-metacheirismenou-aftokinitou': ('auto-ojetina', 'auto-palubka'),
 'gr/psifiaki-metavivasi-oximatos': ('dokumenty', 'auto-klice'),
 'gr/klisi-meta-tin-polisi-aftokinitou': ('auto-tachometr', 'dokumenty'),
 'gr/polisi-motosykletas': ('auto-jizda', 'auto-klice'),
 'gr/polisi-aftokinitou-me-doseis': ('auto-predani', 'kalkulacka'),
 'gr/dorea-aftokinitou': ('dar', 'auto-klice'),
 'gr/daneio-se-filo': ('penize', 'podpis'),
 'gr/o-ofeiletis-den-plironei': ('psani', 'kalkulacka'),
 'gr/anagnorisi-chreous-kai-paragrafi': ('podpis', 'dokumenty'),
 'gr/dorea-chrimaton-stin-oikogeneia': ('dar', 'penize'),
 'gr/misthosi-diamerismatos': ('klice-byt', 'podpis'),
 'gr/pos-na-nikiasete-diamerisma': ('klice-dvere', 'podani-ruky'),
 'gr/ypomisthosi-domatiou': ('klice-byt', 'podani-ruky'),
 'gr/lixi-misthosis-kai-eggyisi': ('stehovani', 'krabice'),
 'gr/lysi-misthosis-me-symfonia': ('krabice', 'podani-ruky'),
 'gr/ypanachorisi-apo-online-agora-14-imeres': ('balik', 'nakup-online'),
 'gr/elattomatiko-proion-eggyisi': ('rozbity-telefon', 'psani'),
 'gr/aporripsi-eggyisis': ('oprava', 'psani'),
 'gr/polisi-meso-aggelias': ('nakup-online', 'penize'),
 'gr/daneismos-pragmatos-se-filo': ('podani-ruky', 'krabice'),
 'gr/symvasi-me-techniti': ('oprava', 'podpis'),
 'gr/paraitisi-apo-ergasia': ('psani', 'dokumenty'),
 'gr/taxidi-anilikou-choris-goneis': ('dite-cesta', 'pas'),
 'gr/exousiodotisi-pote-chreiazetai-theorisi': ('podpis', 'dokumenty')}
JAZ = {'cz': 0, 'sk': 1, 'pl': 2, 'de': 3, 'at': 3, 'ch': 3, 'hu': 4, 'hr': 5, 'si': 6, 'ro': 7, 'bg': 8, 'gr': 9}
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


for cesta in sorted(glob.glob('/home/claude/dokuio.com/src/content/poradna/gr/*.md')):
    klic = '/'.join(cesta[:-3].split('/')[-2:])
    if klic in PLAN:
        zpracuj(cesta, *PLAN[klic], klic.split('/')[0])
    else:
        print('BEZ FOTKY', klic)
print('hotovo')
