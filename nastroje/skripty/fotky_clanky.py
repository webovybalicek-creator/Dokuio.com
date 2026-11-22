"""Doplní do článků titulní fotku (frontmatter foto) a jednu fotku v textu (před 3. nadpis H2)."""
import re, glob, os, sys
sys.path.insert(0, '/home/claude/dokuio.com')
FOTKY_TS = open('/home/claude/dokuio.com/src/lib/fotky.ts', encoding='utf-8').read()
IDS = dict(re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS) and [(k, (i)) for k, i, a in re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS)])
AUTOR = {k: a for k, i, a in re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS)}
ALT = {}
for k, body in re.findall(r"  '([a-z-]+)': \[(.*?)\],\n", FOTKY_TS):
    ALT[k] = re.findall(r"'([^']*)'", body)

PLAN = {
 'si/prodaja-avtomobila': ('auto-predani', 'dokumenty'),
 'si/nakup-rabljenega-avtomobila': ('auto-ojetina', 'auto-palubka'),
 'si/prepis-vozila': ('dokumenty', 'auto-klice'),
 'si/kazen-po-prodaji-avta': ('auto-tachometr', 'dokumenty'),
 'si/prodaja-motorja': ('auto-jizda', 'auto-klice'),
 'si/prodaja-avta-na-obroke': ('auto-predani', 'kalkulacka'),
 'si/darilo-avtomobila': ('dar', 'auto-klice'),
 'si/posojilo-prijatelju': ('penize', 'podpis'),
 'si/dolznik-ne-placa': ('psani', 'kalkulacka'),
 'si/pripoznava-dolga-in-zastaranje': ('podpis', 'dokumenty'),
 'si/darilo-v-druzini': ('dar', 'penize'),
 'si/najem-stanovanja': ('klice-byt', 'podpis'),
 'si/kako-oddati-stanovanje': ('klice-dvere', 'podani-ruky'),
 'si/podnajem': ('klice-byt', 'podani-ruky'),
 'si/odpoved-najema-in-varscina': ('stehovani', 'krabice'),
 'si/sporazumna-razveza-najema': ('krabice', 'podani-ruky'),
 'si/vracilo-blaga-kupljenega-na-spletu': ('balik', 'nakup-online'),
 'si/reklamacija-neskladnega-blaga': ('rozbity-telefon', 'psani'),
 'si/zavrnjena-reklamacija': ('oprava', 'psani'),
 'si/prodaja-prek-oglasa': ('nakup-online', 'penize'),
 'si/posodba-stvari-prijatelju': ('podani-ruky', 'krabice'),
 'si/pogodba-z-mojstrom': ('oprava', 'podpis'),
 'si/odpoved-v-sluzbi-odpovedni-rok': ('psani', 'dokumenty'),
 'si/potovanje-otroka-brez-starsev': ('dite-cesta', 'pas'),
 'si/pooblastilo-kdaj-overitev': ('podpis', 'dokumenty'),
}
JAZ = {'cz': 0, 'sk': 1, 'pl': 2, 'de': 3, 'at': 3, 'ch': 3, 'hu': 4, 'hr': 5, 'si': 6}
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


for cesta in sorted(glob.glob('/home/claude/dokuio.com/src/content/poradna/*/*.md')):
    klic = '/'.join(cesta[:-3].split('/')[-2:])
    if klic in PLAN:
        zpracuj(cesta, *PLAN[klic], klic.split('/')[0])
    else:
        print('BEZ FOTKY', klic)
print('hotovo')
