import sys, json; sys.path.insert(0,'/home/claude/skripty/prek')
import gen
from gen import w
gen.ZEME.update({'de':{'en':('Germany','German'),'uk':('Німеччина','німецьким')},'at':{'en':('Austria','Austrian'),'uk':('Австрія','австрійським')},
 'ch':{'en':('Switzerland','Swiss'),'uk':('Швейцарія','швейцарським')},'cz':{'en':('Czech Republic','Czech'),'uk':('Чехія','чеським')},
 'sk':{'en':('Slovakia','Slovak'),'uk':('Словаччина','словацьким')},'pl':{'en':('Poland','Polish'),'uk':('Польща','польським')},'hu':{'en':('Hungary','Hungarian'),'uk':('Угорщина','угорським')}})
EG={'en':'e.g. ','uk':'напр. '}
PRE={'de':'z. B. ','at':'z. B. ','ch':'z. B. ','pl':'np. ','hu':'pl. ','sk':'napr. ','cz':'např. '}
def ph(z,j, orig, over):
    if over is not None: return over
    if orig is None: return None
    p=PRE[z]
    return EG[j]+orig[len(p):] if orig.startswith(p) else orig
def T(z, slug, j, d):
    o=json.load(open(f'/home/claude/skripty/dump/out/{z}-{slug}.json'))
    pole={}
    for k in o['kroky']:
        for p in k['pole']:
            v=d['pole'].get(p['id'])
            assert v is not None, (z,slug,j,'pole',p['id'])
            if isinstance(v,str): v=(v,)
            popis=v[0]; nap=v[1] if len(v)>1 else None; mz=v[2] if len(v)>2 else None; phov=v[3] if len(v)>3 else None
            e={'popis':popis}
            if p['nap']:
                assert nap, (slug,j,'nap',p['id']); e['napoveda']=nap
            x=ph(z,j,p['ph'],phov)
            if x: e['placeholder']=x
            if p['mz']:
                assert mz and sorted(mz)==sorted(p['mz']), (slug,j,'mz',p['id']); e['moznosti']=mz
            pole[p['id']]=e
    kroky={}
    for k in o['kroky']:
        v=d['kroky'][k['id']]
        if isinstance(v,str): v=(v,)
        e={'nazev':v[0]}
        if k['popis']: assert len(v)>1,(slug,'krok',k['id']); e['popis']=v[1]
        kroky[k['id']]=e
    assert len(d['clanky'])==len(o['clanky']), (slug,j,'clanky',len(d['clanky']),len(o['clanky']))
    vys=d.get('vys') or ['']*len(o['clanky'])
    assert len(vys)==len(o['clanky']), (slug,j,'vys')
    for (nad,ods),oc in zip(d['clanky'],o['clanky']):
        assert len(ods)==len(oc['o']), (slug,j,'odstavce',nad,len(ods),len(oc['o']))
    cl=[{'nadpis':nad,'odstavce':ods} for nad,ods in d['clanky']]
    assert len(d['coDal'])==o['coDal'], (slug,j,'coDal')
    assert len(d['kontrola'])==len(o['kontrola']), (slug,j,'kontrola',len(d['kontrola']),len(o['kontrola']))
    L=dict(description=d['desc'],perex=d['perex'],obsahPopis=d['obsahPopis'],obsah=d['obsah'],online=d['online'],hodiSe=d['hodi'],nehodiSe=d['nehodi'],po=d['po'],faq=d['faq'],zakony=d['zakony'])
    if 'title' in d: L['title']=d['title']
    pr=dict(slovo=d['slovo'],kroky=kroky,pole=pole,vysvetleni=vys,coDal=d['coDal'],kontrola=d['kontrola'])
    for a,b in (('prip','pripominky'),('ppozn','podpisPoznamka'),('prevzit','prevzit')):
        if a in d: pr[b]=d[a]
    dok=dict(nazev=d['dnazev'],podnadpis=d['dpod'],podpisy={'vlevo':d['podpisy'][0],'vpravo':d['podpisy'][1]},clanky=cl)
    if 'uvod' in d: dok['uvod']=d['uvod']
    w(z,j,slug,None,None,dict(nazev=d['nazev'],nazevA=d['nazevA'],katalog={'popis':d['popis'],'slova':d['slova']},landing=L,pruvodce=pr,dokument=dok))
def S(n,g=None,a=None,l=None): return {'n':n,'g':g or n,'a':a or n,'l':l or n}
