"""Doplní do článků titulní fotku (frontmatter foto) a jednu fotku v textu (před 3. nadpis H2)."""
import re, glob, os, sys
sys.path.insert(0, '/home/claude/dokuio.com')
FOTKY_TS = open('/home/claude/dokuio.com/src/lib/fotky.ts', encoding='utf-8').read()
IDS = dict(re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS) and [(k, (i)) for k, i, a in re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS)])
AUTOR = {k: a for k, i, a in re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS)}
ALT = {}
for k, body in re.findall(r"  '([a-z-]+)': \[(.*?)\],\n", FOTKY_TS):
    ALT[k] = re.findall(r"'([^']*)'", body)

PLAN = {'bg/prodazhba-na-upotrebyavana-kola': ('auto-predani', 'dokumenty'),
 'bg/pokupka-na-upotrebyavana-kola': ('auto-ojetina', 'auto-palubka'),
 'bg/registratsiya-na-kola-sled-pokupka': ('dokumenty', 'auto-klice'),
 'bg/globa-sled-prodazhba-na-kola': ('auto-tachometr', 'dokumenty'),
 'bg/prodazhba-na-motor': ('auto-jizda', 'auto-klice'),
 'bg/prodazhba-na-kola-na-vnoski': ('auto-predani', 'kalkulacka'),
 'bg/darenie-na-kola': ('dar', 'auto-klice'),
 'bg/zaem-na-priyatel': ('penize', 'podpis'),
 'bg/dalzhnikat-ne-plashta': ('psani', 'kalkulacka'),
 'bg/priznavane-na-dalg-i-davnost': ('podpis', 'dokumenty'),
 'bg/darenie-na-pari-v-semeystvoto': ('dar', 'penize'),
 'bg/naem-na-apartament': ('klice-byt', 'podpis'),
 'bg/kak-da-otdadem-apartament-pod-naem': ('klice-dvere', 'podani-ruky'),
 'bg/prenaemane-na-staya': ('klice-byt', 'podani-ruky'),
 'bg/prekratyavane-na-naem-i-depozit': ('stehovani', 'krabice'),
 'bg/prekratyavane-na-naem-po-vzaimno-saglasie': ('krabice', 'podani-ruky'),
 'bg/otkaz-ot-onlayn-pokupka-14-dni': ('balik', 'nakup-online'),
 'bg/reklamatsiya-na-stoka-garantsiya': ('rozbity-telefon', 'psani'),
 'bg/otkazana-reklamatsiya': ('oprava', 'psani'),
 'bg/prodazhba-chrez-obyava': ('nakup-online', 'penize'),
 'bg/zaem-na-vesht-na-priyatel': ('podani-ruky', 'krabice'),
 'bg/dogovor-s-mayster': ('oprava', 'podpis'),
 'bg/napuskane-na-rabota-predizvestie': ('psani', 'dokumenty'),
 'bg/patuvane-na-dete-bez-roditeli': ('dite-cesta', 'pas'),
 'bg/palnomoshtno-koga-notarius': ('podpis', 'dokumenty')}
JAZ = {'cz': 0, 'sk': 1, 'pl': 2, 'de': 3, 'at': 3, 'ch': 3, 'hu': 4, 'hr': 5, 'si': 6, 'ro': 7, 'bg': 8}
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


for cesta in sorted(glob.glob('/home/claude/dokuio.com/src/content/poradna/bg/*.md')):
    klic = '/'.join(cesta[:-3].split('/')[-2:])
    if klic in PLAN:
        zpracuj(cesta, *PLAN[klic], klic.split('/')[0])
    else:
        print('BEZ FOTKY', klic)
print('hotovo')
