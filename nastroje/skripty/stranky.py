"""Generuje src/obsah/<zeme>/<slug>.ts ze slovníků. Použití: from stranky import zapis"""
import json, os
ROOT='/home/claude/dokuio.com/src'
def zapis(zeme, slug, sablona_import, sablona_nazev, nazev, nazevA, katalog, souvisejici, landing, vytvorit):
    p=f'{ROOT}/obsah/{zeme}/{slug}.ts'
    s=f"""import type {{ StrankaDokumentu }} from '../typy';
import {{ {sablona_nazev} as sablona }} from '../../sablony/{zeme}/{sablona_import}';

const stranka: StrankaDokumentu = {{
  sablona,
  nazev: {json.dumps(nazev, ensure_ascii=False)},
  nazevA: {json.dumps(nazevA, ensure_ascii=False)},
  katalog: {json.dumps(katalog, ensure_ascii=False, indent=2)},
  souvisejici: {json.dumps(souvisejici)},
  landing: {json.dumps(landing, ensure_ascii=False, indent=2)},
  vytvorit: {json.dumps(vytvorit, ensure_ascii=False, indent=2)},
}};

export default stranka;
"""
    open(p,'w').write(s)
    print('ok',p)
def L(title, description, perex, obsahPopis, obsah, kroky, online, hodiSe, nehodiSe, po, faq, zakony, souv='Weitere Dokumente, ebenfalls kostenlos.'):
    P=lambda xs:[{'nazev':a,'popis':b} for a,b in xs]
    return dict(title=title, description=description, perex=perex, obsahPopis=obsahPopis, obsah=P(obsah), kroky=P(kroky), online=online, hodiSe=hodiSe, nehodiSe=nehodiSe, po=P(po), faq=[{'q':q,'a':a} for q,a in faq], zakony=zakony, souvisejiciPopis=souv)
