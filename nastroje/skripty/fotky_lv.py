"""Doplní do článků titulní fotku (frontmatter foto) a jednu fotku v textu (před 3. nadpis H2)."""
import re, glob, os, sys
sys.path.insert(0, '/home/claude/dokuio.com')
FOTKY_TS = open('/home/claude/dokuio.com/src/lib/fotky.ts', encoding='utf-8').read()
IDS = dict(re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS) and [(k, (i)) for k, i, a in re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS)])
AUTOR = {k: a for k, i, a in re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS)}
ALT = {}
for k, body in re.findall(r"  '([a-z-]+)': \[(.*?)\],\n", FOTKY_TS):
    ALT[k] = re.findall(r"'([^']*)'", body)

PLAN = {'lv/lietota-auto-pardosana': ('auto-predani', 'dokumenty'),
 'lv/lietota-auto-pirksana': ('auto-ojetina', 'auto-palubka'),
 'lv/ipasnieka-maina-e-csdd': ('dokumenty', 'auto-klice'),
 'lv/sods-pec-auto-pardosanas': ('auto-tachometr', 'dokumenty'),
 'lv/motocikla-pardosana': ('auto-jizda', 'auto-klice'),
 'lv/auto-pardosana-uz-nomaksu': ('auto-predani', 'kalkulacka'),
 'lv/auto-davinasana': ('dar', 'auto-klice'),
 'lv/aizdevums-draugam': ('penize', 'podpis'),
 'lv/paradnieks-nemaksa': ('psani', 'kalkulacka'),
 'lv/parada-atzisana-un-noilgums': ('podpis', 'dokumenty'),
 'lv/naudas-davinajums-gimene': ('dar', 'penize'),
 'lv/dzivokla-iresana': ('klice-byt', 'podpis'),
 'lv/dzivokla-izireshana': ('klice-dvere', 'podani-ruky'),
 'lv/apakssire': ('klice-byt', 'podani-ruky'),
 'lv/drosibas-nauda-un-ires-beigas': ('stehovani', 'krabice'),
 'lv/ires-izbeigsana-vienojoties': ('krabice', 'podani-ruky'),
 'lv/atteikums-14-dienas': ('balik', 'nakup-online'),
 'lv/prece-ar-defektu': ('rozbity-telefon', 'psani'),
 'lv/pardevejs-atsaka-pretenziju': ('oprava', 'psani'),
 'lv/pardosana-pec-sludinajuma': ('nakup-online', 'penize'),
 'lv/lietas-aizdosana-draugam': ('podani-ruky', 'krabice'),
 'lv/ligums-ar-meistaru': ('oprava', 'podpis'),
 'lv/darbinieka-uzteikums': ('psani', 'dokumenty'),
 'lv/berns-celo-bez-vecakiem': ('dite-cesta', 'pas'),
 'lv/pilnvara-kad-notars': ('podpis', 'dokumenty')}
JAZ = {'cz': 0, 'sk': 1, 'pl': 2, 'de': 3, 'at': 3, 'ch': 3, 'hu': 4, 'hr': 5, 'si': 6, 'ro': 7, 'bg': 8, 'gr': 9, 'ee': 10, 'lv': 11}
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


for cesta in sorted(glob.glob('/home/claude/dokuio.com/src/content/poradna/lv/*.md')):
    klic = '/'.join(cesta[:-3].split('/')[-2:])
    if klic in PLAN:
        zpracuj(cesta, *PLAN[klic], klic.split('/')[0])
    else:
        print('BEZ FOTKY', klic)
print('hotovo')
