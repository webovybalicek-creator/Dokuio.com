"""Doplní do článků titulní fotku (frontmatter foto) a jednu fotku v textu (před 3. nadpis H2)."""
import re, glob, os, sys
sys.path.insert(0, '/home/claude/dokuio.com')
FOTKY_TS = open('/home/claude/dokuio.com/src/lib/fotky.ts', encoding='utf-8').read()
IDS = dict(re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS) and [(k, (i)) for k, i, a in re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS)])
AUTOR = {k: a for k, i, a in re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS)}
ALT = {}
for k, body in re.findall(r"  '([a-z-]+)': \[(.*?)\],\n", FOTKY_TS):
    ALT[k] = re.findall(r"'([^']*)'", body)

PLAN = {'lt/naudoto-automobilio-pardavimas': ('auto-predani', 'dokumenty'),
 'lt/naudoto-automobilio-pirkimas': ('auto-ojetina', 'auto-palubka'),
 'lt/savininko-pasikeitimas-regitroje': ('dokumenty', 'auto-klice'),
 'lt/bauda-po-automobilio-pardavimo': ('auto-tachometr', 'dokumenty'),
 'lt/motociklo-pardavimas': ('auto-jizda', 'auto-klice'),
 'lt/automobilio-pardavimas-dalimis': ('auto-predani', 'kalkulacka'),
 'lt/automobilio-dovanojimas-seimoje': ('dar', 'auto-klice'),
 'lt/paskola-draugui': ('penize', 'podpis'),
 'lt/skolininkas-nemoka': ('psani', 'kalkulacka'),
 'lt/skolos-pripazinimas-ir-senatis': ('podpis', 'dokumenty'),
 'lt/pinigu-dovanojimas-seimoje': ('dar', 'penize'),
 'lt/buto-nuomojimas': ('klice-byt', 'podpis'),
 'lt/buto-isnuomojimas': ('klice-dvere', 'podani-ruky'),
 'lt/subnuoma': ('klice-byt', 'podani-ruky'),
 'lt/nuomos-pabaiga-ir-uzstatas': ('stehovani', 'krabice'),
 'lt/nuomos-nutraukimas-susitarimu': ('krabice', 'podani-ruky'),
 'lt/sutarties-atsisakymas-14-dienu': ('nakup-online', 'balik'),
 'lt/preke-su-trukumu': ('rozbity-telefon', 'oprava'),
 'lt/pardavejas-atmeta-pretenzija': ('oprava', 'psani'),
 'lt/pardavimas-pagal-skelbima': ('podani-ruky', 'penize'),
 'lt/daikto-paskolinimas-draugui': ('podani-ruky', 'balik'),
 'lt/sutartis-su-meistru': ('oprava', 'ucty'),
 'lt/isejimas-is-darbo': ('psani', 'podpis'),
 'lt/vaikas-keliauja-be-tevu': ('dite-cesta', 'pas'),
 'lt/igaliojimas-kada-notaras': ('podpis', 'dokumenty')}
JAZ = {'cz': 0, 'sk': 1, 'pl': 2, 'de': 3, 'at': 3, 'ch': 3, 'hu': 4, 'hr': 5, 'si': 6, 'ro': 7, 'bg': 8, 'gr': 9, 'ee': 10, 'lv': 11, 'lt': 12}
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


for cesta in sorted(glob.glob('/home/claude/dokuio.com/src/content/poradna/lt/*.md')):
    klic = '/'.join(cesta[:-3].split('/')[-2:])
    if klic in PLAN:
        zpracuj(cesta, *PLAN[klic], klic.split('/')[0])
    else:
        print('BEZ FOTKY', klic)
print('hotovo')
