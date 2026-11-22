"""Doplní do článků titulní fotku (frontmatter foto) a jednu fotku v textu (před 3. nadpis H2)."""
import re, glob, os, sys
sys.path.insert(0, '/home/claude/dokuio.com')
FOTKY_TS = open('/home/claude/dokuio.com/src/lib/fotky.ts', encoding='utf-8').read()
IDS = dict(re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS) and [(k, (i)) for k, i, a in re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS)])
AUTOR = {k: a for k, i, a in re.findall(r"'?([a-z-]+)'?: \{ id: '([0-9a-f-]+)', autor: '([^']+)' \}", FOTKY_TS)}
ALT = {}
for k, body in re.findall(r"  '([a-z-]+)': \[(.*?)\],\n", FOTKY_TS):
    ALT[k] = re.findall(r"'([^']*)'", body)

PLAN = {'ch-it/vendere-l-auto-in-svizzera': ('auto-predani', 'dokumenty'),
 'ch-it/comprare-un-auto-d-occasione': ('auto-ojetina', 'auto-palubka'),
 'ch-it/targhe-e-assicurazione-dopo-la-vendita': ('auto-klice', 'dokumenty'),
 'ch-it/multa-dopo-la-vendita-dell-auto': ('auto-tachometr', 'dokumenty'),
 'ch-it/vendere-la-moto': ('auto-jizda', 'auto-klice'),
 'ch-it/prestare-denaro-a-un-amico': ('penize', 'podpis'),
 'ch-it/il-debitore-non-paga-esecuzione': ('psani', 'kalkulacka'),
 'ch-it/riconoscimento-di-debito-e-prescrizione': ('podpis', 'dokumenty'),
 'ch-it/pagamento-a-rate-tra-privati': ('kalkulacka', 'ucty'),
 'ch-it/donare-denaro-imposta-cantonale': ('dar', 'penize'),
 'ch-it/affittare-il-proprio-appartamento': ('klice-byt', 'podpis'),
 'ch-it/deposito-di-garanzia': ('klice-dvere', 'ucty'),
 'ch-it/sublocazione-consenso': ('klice-byt', 'podani-ruky'),
 'ch-it/disdire-la-locazione-termini': ('stehovani', 'krabice'),
 'ch-it/riconsegna-dell-appartamento': ('krabice', 'klice-dvere'),
 'ch-it/acquisto-online-diritto-di-restituzione': ('nakup-online', 'balik'),
 'ch-it/vendita-telefonica-revoca-14-giorni': ('balik', 'psani'),
 'ch-it/prodotto-difettoso-garanzia': ('rozbity-telefon', 'oprava'),
 'ch-it/vendita-tra-privati-annuncio': ('podani-ruky', 'penize'),
 'ch-it/contratto-con-un-artigiano': ('oprava', 'ucty'),
 'ch-it/procura-quando-basta': ('podpis', 'dokumenty'),
 'ch-it/figlio-in-viaggio-senza-genitori': ('dite-cesta', 'pas'),
 'ch-it/prestare-un-oggetto-a-un-amico': ('podani-ruky', 'balik'),
 'ch-it/dimettersi-termini-di-disdetta': ('psani', 'podpis'),
 'ch-it/disdire-assicurazione-cassa-malati-abbonamento': ('psani', 'ucty')}
JAZ = {'cz': 0, 'sk': 1, 'pl': 2, 'de': 3, 'at': 3, 'ch': 3, 'hu': 4, 'hr': 5, 'si': 6, 'ro': 7, 'bg': 8, 'gr': 9, 'ee': 10, 'lv': 11, 'lt': 12, 'ch-fr': 13, 'ch-it': 14}
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


for cesta in sorted(glob.glob('/home/claude/dokuio.com/src/content/poradna/ch-it/*.md')):
    klic = '/'.join(cesta[:-3].split('/')[-2:])
    if klic in PLAN:
        zpracuj(cesta, *PLAN[klic], klic.split('/')[0])
    else:
        print('BEZ FOTKY', klic)
print('hotovo')
