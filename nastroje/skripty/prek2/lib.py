import json, re, os, copy
ROOT='/home/claude/dokuio.com/src/preklady'
def load(z,j,slug):
    t=open(f'{ROOT}/{z}/{j}/{slug}.ts').read()
    m=re.search(r'export default (\{.*\}) satisfies', t, re.S)
    return json.loads(m.group(1)), t.split('\n')[0]
def merge(a,b):
    for k,v in b.items():
        if isinstance(v,dict) and isinstance(a.get(k),dict) and not v.get('__replace'): merge(a[k],v)
        else:
            if isinstance(v,dict): v={x:y for x,y in v.items() if x!='__replace'}
            a[k]=v
    return a
def save(z,j,slug,o,head=None):
    if slug=="_tmp": return
    h=open(f'/home/claude/skripty/dump/out/{z}-{slug}.txt').readline().split()
    o['sablona']={'kod':h[1],'verze':h[2]}
    t=o['landing'].get('title','').replace('{rok}','2026')
    if len(t)>70: print('!! TITLE',z,slug,j,len(t),t)
    if not 70<=len(o['landing']['description'])<=170: print('!! DESC',z,slug,j,len(o['landing']['description']))
    head=head or ("/** " + ('English' if j=='en' else 'Українська') + f" version of src/obsah/{z}/{slug}.ts – the original text prevails (PREKLADY.md). */")
    txt=(head+"\nimport type { PrekladDokumentu } from '../../typy';\n\nexport default " + json.dumps(o, ensure_ascii=False, indent=2) + " satisfies PrekladDokumentu;\n")
    open(f'{ROOT}/{z}/{j}/{slug}.ts','w').write(txt)
