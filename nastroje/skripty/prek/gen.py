import json, os
ROOT='/home/claude/dokuio.com/src/preklady'
ZEME={'hr':{'en':('Croatia','Croatian'),'uk':('Хорватія','хорватським')},'si':{'en':('Slovenia','Slovenian'),'uk':('Словенія','словенським')},'ro':{'en':('Romania','Romanian'),'uk':('Румунія','румунським')},'bg':{'en':('Bulgaria','Bulgarian'),'uk':('Болгарія','болгарським')}}
K3={'en':[{'nazev':'Fill in the details','popis':'Skip what you don’t know – a line will be left to fill in by hand.'},{'nazev':'Check the text','popis':'You can edit every paragraph.'},{'nazev':'Download and sign','popis':'Bilingual PDF or Word, free.'}],
    'uk':[{'nazev':'Заповніть дані','popis':'Те, чого не знаєте, пропустіть – залишиться рядок для заповнення від руки.'},{'nazev':'Перевірте текст','popis':'Кожен абзац можна відредагувати.'},{'nazev':'Завантажте й підпишіть','popis':'Двомовний PDF або Word безкоштовно.'}]}
PRIV={'en':{'q':'Do you store my details?','a':'No. The document is created directly in your browser and the details are not sent to a server.'},
      'uk':{'q':'Чи зберігаєте ви мої дані?','a':'Ні. Документ створюється безпосередньо у вашому браузері, дані не надсилаються на сервер.'}}
SOUV={'en':'More documents, also free.','uk':'Інші документи, також безкоштовно.'}
POD={'en':'Free · bilingual PDF and Word · takes a few minutes','uk':'Безкоштовно · двомовний PDF і Word · кілька хвилин'}
def P(*a): return [{'nazev':x,'popis':y} for x,y in a]
def F(*a): return [{'q':x,'a':y} for x,y in a]
def w(z, j, slug, kod, verze, d):
    h=open(f'/home/claude/skripty/dump/out/{z}-{slug}.txt').readline().split()
    kod, verze = h[1], h[2]
    zn, adj = ZEME[z][j]
    L = d['landing']
    L.setdefault('kroky', K3[j])
    L.setdefault('souvisejiciPopis', SOUV[j])
    for k in ('obsah','po'):
        if L[k] and isinstance(L[k][0], tuple): L[k]=P(*L[k])
    L['faq'] = F(*L['faq']) + ([PRIV[j]] if L.pop('priv', True) else [])
    if 'title' not in L:
        L['title'] = f"{d['nazev']} {zn} {{rok}} – " + ('free PDF template' if j=='en' else 'зразок PDF безкоштовно')
    t=L['title'].replace('{rok}','2026')
    if len(t)>70: print('!! TITLE', slug, j, len(t), t)
    if not 70<=len(L['description'])<=170: print('!! DESC', slug, j, len(L['description']))
    v = d.setdefault('vytvorit', {})
    if j=='en':
        v.setdefault('title', f"Fill in {d['nazevA']} online – {zn}, free PDF")
        v.setdefault('description', f"Step-by-step guide in English for {d['nazevA']} under {adj} law. Bilingual PDF or Word with the original text, free of charge.")
    else:
        v.setdefault('title', f"Заповніть {d['nazevA']} онлайн – {zn}, PDF безкоштовно")
        v.setdefault('description', f"Покроковий помічник українською: {d['nazevA']} за {adj} правом. Двомовний PDF або Word з оригінальним текстом, безкоштовно.")
    v.setdefault('podnadpis', POD[j])
    o = {'sablona':{'kod':kod,'verze':verze}, 'nazev':d['nazev'], 'nazevA':d['nazevA'], 'katalog':d['katalog'], 'landing':L, 'vytvorit':v, 'pruvodce':d['pruvodce'], 'dokument':d['dokument']}
    if 'volby' in d: o['dokument']['volby']=d['volby']
    os.makedirs(f'{ROOT}/{z}/{j}', exist_ok=True)
    txt = ("/** " + ('English' if j=='en' else 'Українська') + f" version of src/obsah/{z}/{slug}.ts – the original text prevails (PREKLADY.md). */\n"
           "import type { PrekladDokumentu } from '../../typy';\n\nexport default " + json.dumps(o, ensure_ascii=False, indent=2) + " satisfies PrekladDokumentu;\n")
    open(f'{ROOT}/{z}/{j}/{slug}.ts','w').write(txt)
