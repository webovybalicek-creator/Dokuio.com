import sys, json; sys.path.insert(0,'/home/claude/skripty/prek')
import gen
from gen import w
gen.ZEME['gr']={'en':('Greece','Greek'),'uk':('Греція','грецьким')}
EG={'en':'e.g. ','uk':'напр. '}
PRE='π.χ. '
COMMON={
 'en':{'misto':'Place','datum':'Date','datum_podpisu':'Date of signing','p_adt':'Identity card no.','k_adt':'Identity card no.','v_adt':'Identity card no.','p_afm':'Tax number (AFM)','k_afm':'Tax number (AFM)','v_afm':'Tax number (AFM)','p_adresa':'Address','k_adresa':'Address','v_adresa':'Address','iban':'IBAN'},
 'uk':{'misto':'Місце','datum':'Дата','datum_podpisu':'Дата підписання','p_adt':'Посвідчення особи №','k_adt':'Посвідчення особи №','v_adt':'Посвідчення особи №','p_afm':'Податковий номер (AFM)','k_afm':'Податковий номер (AFM)','v_afm':'Податковий номер (AFM)','p_adresa':'Адреса','k_adresa':'Адреса','v_adresa':'Адреса','iban':'IBAN'}}
def ph(j, orig, over):
    if over is not None: return over
    if orig is None: return None
    return EG[j]+orig[len(PRE):] if orig.startswith(PRE) else orig
def T(slug, j, d):
    o=json.load(open(f'/home/claude/skripty/dump/out/gr-{slug}.json'))
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
    w('gr',j,slug,None,None,dict(nazev=d['nazev'],nazevA=d['nazevA'],katalog={'popis':d['popis'],'slova':d['slova']},landing=L,pruvodce=pr,dokument=dok))
def S(n,g=None,a=None,l=None): return {'n':n,'g':g or n,'a':a or n,'l':l or n}
