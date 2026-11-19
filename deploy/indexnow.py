#!/usr/bin/env python3
"""Ohlášení změněných stránek vyhledávačům přes IndexNow (Bing, Seznam, Yandex, Naver…).

Použití:
  indexnow.py zmenene.txt   – stránky ze seznamu změněných souborů z deploye
  indexnow.py --sitemap     – všechny adresy ze sitemap.xml (týdenní běh)
Google IndexNow nepoužívá – ten si sitemapu čte sám (je přidaná v Search Console).
"""
import json, os, re, sys, urllib.request, glob

HOST = os.environ.get('SITE_HOST', 'dokuio.com')
klic = next((os.path.basename(p)[:-4] for p in glob.glob('public/*.txt') if re.fullmatch(r'[0-9a-f]{32}', os.path.basename(p)[:-4])), None)
if not klic:
    sys.exit('Chybí soubor s IndexNow klíčem v public/')

def ze_zmen(soubor):
    urls = []
    for r in open(soubor, encoding='utf-8'):
        r = r.strip()
        if not r.endswith('index.html') or r.startswith(('og/', '_')):
            continue
        try:
            if 'noindex' in open(os.path.join('dist', r), encoding='utf-8', errors='ignore').read(4000):
                continue
        except OSError:
            pass
        cesta = '/' + r[: -len('index.html')]
        urls.append(f'https://{HOST}{cesta}')
    return urls

def ze_sitemap():
    xml = urllib.request.urlopen(f'https://{HOST}/sitemap.xml', timeout=30).read().decode()
    return re.findall(r'<loc>([^<]+)</loc>', xml)

urls = ze_sitemap() if sys.argv[1:] == ['--sitemap'] else ze_zmen(sys.argv[1])
urls = sorted(set(urls))[:10000]
if not urls:
    print('IndexNow: žádné změněné stránky.')
    sys.exit(0)
data = json.dumps({'host': HOST, 'key': klic, 'keyLocation': f'https://{HOST}/{klic}.txt', 'urlList': urls}).encode()
for cil in ('https://api.indexnow.org/indexnow', 'https://search.seznam.cz/indexnow'):
    try:
        req = urllib.request.Request(cil, data=data, headers={'Content-Type': 'application/json; charset=utf-8'})
        with urllib.request.urlopen(req, timeout=30) as o:
            print(f'IndexNow {cil}: {o.status}, {len(urls)} adres')
    except Exception as e:  # neblokovat deploy
        print(f'::warning::IndexNow {cil}: {e}')
