import sys, json; sys.path.insert(0,'/home/claude/skripty/prek')
import gen
from gen import w
gen.ZEME['lv']={'en':('Latvia','Latvian'),'uk':('Латвія','латвійським')}
EG={'en':'e.g. ','uk':'напр. '}
PRE='piem., '
COMMON={
 'en':{'misto':'Place','datum':'Date','datum_podpisu':'Date of signing','p_ik':'Personal code','k_ik':'Personal code','v_ik':'Personal code','z_ik':'Personal code','n_ik':'Personal code','d_ik':'Child’s personal code','p_adresa':'Address','k_adresa':'Address','v_adresa':'Address','z_adresa':'Address','n_adresa':'Address','iban':'IBAN'},
 'uk':{'misto':'Місце','datum':'Дата','datum_podpisu':'Дата підписання','p_ik':'Персональний код','k_ik':'Персональний код','v_ik':'Персональний код','z_ik':'Персональний код','n_ik':'Персональний код','d_ik':'Персональний код дитини','p_adresa':'Адреса','k_adresa':'Адреса','v_adresa':'Адреса','z_adresa':'Адреса','n_adresa':'Адреса','iban':'IBAN'}}
def ph(j, orig, over):
    if over is not None: return over
    if orig is None: return None
    return EG[j]+orig[len(PRE):] if orig.startswith(PRE) else orig
def T(slug, j, d):
    o=json.load(open(f'/home/claude/skripty/dump/out/lv-{slug}.json'))
    pole={}
    for k in o['kroky']:
        for p in k['pole']:
            v=d['pole'].get(p['id'], COMMON[j].get(p['id']))
            assert v is not None, (slug,j,'pole',p['id'])
            if isinstance(v,str): v=(v,)
            popis=v[0]; nap=v[1] if len(v)>1 else None; mz=v[2] if len(v)>2 else None; phov=v[3] if len(v)>3 else None
            e={'popis':popis}
            if p['nap']:
                assert nap, (slug,j,'nap',p['id']); e['napoveda']=nap
            x=ph(j,p['ph'],phov)
            if x: e['placeholder']=x
            if p['mz']:
                assert mz and sorted(mz)==sorted(p['mz']), (slug,j,'mz',p['id']); e['moznosti']=mz
            pole[p['id']]=e
    kroky={}
    for k in o['kroky']:
        v=d['kroky'][k['id']]
        if isinstance(v,str): v=(v,)
        e={'nazev':v[0]}
        if k['popis']: e['popis']=v[1]
        kroky[k['id']]=e
    vys=d.get('vys') or ['']*len(o['clanky'])
    cl=[]
    for (nad,ods),oc in zip(d['clanky'],o['clanky']):
        cl.append({'nadpis':nad,'odstavce':ods})
    L=dict(description=d['desc'],perex=d['perex'],obsahPopis=d['obsahPopis'],obsah=d['obsah'],online=d['online'],hodiSe=d['hodi'],nehodiSe=d['nehodi'],po=d['po'],faq=d['faq'],zakony=d['zakony'])
    if 'title' in d: L['title']=d['title']
    pr=dict(slovo=d['slovo'],kroky=kroky,pole=pole,vysvetleni=vys,coDal=d['coDal'],kontrola=d['kontrola'])
    if 'prip' in d: pr['pripominky']=d['prip']
    if 'ppozn' in d: pr['podpisPoznamka']=d['ppozn']
    if 'prevzit' in d: pr['prevzit']=d['prevzit']
    dok=dict(nazev=d['dnazev'],podnadpis=d['dpod'],podpisy={'vlevo':d['podpisy'][0],'vpravo':d['podpisy'][1]},clanky=cl)
    w('lv',j,slug,None,None,dict(nazev=d['nazev'],nazevA=d['nazevA'],katalog={'popis':d['popis'],'slova':d['slova']},landing=L,pruvodce=pr,dokument=dok))
def S(n,g=None,a=None,l=None): return {'n':n,'g':g or n,'a':a or n,'l':l or n}
