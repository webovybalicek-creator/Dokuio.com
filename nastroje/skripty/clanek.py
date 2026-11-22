import json, os
def clanek(zeme, slug, fm, telo, datum='2026-11-20'):
    out = ['---']
    for k in ['title','nazev','description','perex','kategorie','tema']:
        out.append(f'{k}: {json.dumps(fm[k], ensure_ascii=False)}')
    out.append('dokumenty: ' + json.dumps(fm['dokumenty'], ensure_ascii=False))
    out.append(f"datum: '{datum}'")
    out.append('slova: ' + json.dumps(fm['slova'], ensure_ascii=False))
    out.append('zdroje:')
    for n,u in fm['zdroje']:
        out.append(f'  - nazev: {json.dumps(n, ensure_ascii=False)}\n    url: {u}')
    out.append('faq:')
    for q,a in fm['faq']:
        out.append(f'  - q: {json.dumps(q, ensure_ascii=False)}\n    a: {json.dumps(a, ensure_ascii=False)}')
    out.append('---\n')
    assert len(fm['title'])<=70, (slug, len(fm['title']))
    assert 70<=len(fm['description'])<=170, (slug, len(fm['description']))
    open(f'/home/claude/dokuio.com/src/content/poradna/{zeme}/{slug}.md','w').write('\n'.join(out)+telo.strip()+'\n')
