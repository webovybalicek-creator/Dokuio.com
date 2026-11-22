import sys; sys.path.insert(0,'/home/claude/skripty/prek2')
from moto import conv, pload
VIN={'en':' On a motorcycle it is usually stamped into the frame at the steering head.','uk':' На мотоциклі його зазвичай вибито на рамі біля рульової колонки.'}
ACC_DE={'en':'Write accessories and modifications (cases, crash bars, exhaust) into the agreement. Modified parts need a general type approval (ABE), a parts certificate with entry in the papers or an EC type approval – otherwise the operating licence may lapse.',
 'uk':'Впишіть у договір аксесуари й переробки (кофри, захисні дуги, вихлоп). Змінені деталі потребують загального дозволу (ABE), експертного висновку з внесенням у документи або типового схвалення ЄС – інакше дозвіл на експлуатацію може втратити силу.'}
ACC_AT={'en':'Write accessories and modifications (cases, crash bars, exhaust) into the agreement and check that modifications requiring approval are entered in the papers.',
 'uk':'Впишіть у договір аксесуари й переробки (кофри, захисні дуги, вихлоп) і перевірте, чи переробки, що потребують дозволу, внесено в документи.'}
ACC_CH={'en':'Write accessories and modifications (cases, crash bars, exhaust) into the agreement and check that changes requiring approval are entered in the vehicle registration document (Fahrzeugausweis).',
 'uk':'Впишіть у договір аксесуари й переробки (кофри, захисні дуги, вихлоп) і перевірте, чи зміни, що потребують дозволу, внесено у свідоцтво про реєстрацію (Fahrzeugausweis).'}
ACC_PL={'en':'Write additional equipment (cases, crash bars, exhaust) into the agreement. Also check that the motorcycle has a valid roadworthiness test.',
 'uk':'Додаткове обладнання (кофри, захисні дуги, вихлоп) впишіть у договір. Перевірте також, чи має мотоцикл чинний техогляд.'}
ACC_HU={'en':'Write accessories and modifications (cases, crash bar, exhaust) into the agreement and check that modifications requiring approval are entered in the documents.',
 'uk':'Впишіть у договір аксесуари й переробки (кофри, захисну дугу, вихлоп) і перевірте, чи переробки, що потребують дозволу, внесено в документи.'}
ACC_SK={'en':'Write equipment and accessories (cases, crash bars, exhaust) into the agreement. Modifications that change technical parameters (e.g. a different exhaust) must be approved and entered in the documents.',
 'uk':'Обладнання й аксесуари (кофри, захисні дуги, вихлоп) впишіть у договір. Зміни, що змінюють технічні параметри (напр. інший вихлоп), мають бути схвалені й внесені в документи.'}
def Q(*a): return [{'q':x,'a':y} for x,y in a]
def run(z,car,moto,j,L,slova,popis,defkey,defph,cena,acc,extra={}):
    o=pload(z,j,car); P=o['pruvodce']['pole']
    priv=o['landing']['faq'][-1]
    p={'katalog.slova':slova,'katalog.popis':popis,
       'pruvodce.pole.znacka.placeholder':('e.g. ' if j=='en' else 'напр. ')+'Honda CB500F',
       'pruvodce.pole.vin.napoveda':P['vin']['napoveda']+VIN[j],
       f'pruvodce.pole.{defkey}.placeholder':defph,
       'pruvodce.pole.cena.placeholder':('e.g. ' if j=='en' else 'напр. ')+cena,
       'pruvodce.kontrola.+':acc[j]}
    for k,v in L.items(): p['landing.'+k]=v
    p['landing.faq']=Q(*L['faq'])+[priv]
    p.update(extra)
    ch=conv(z,j,car,moto,p,skip=('.landing.faq','.landing.title','.landing.description','.landing.perex','.landing.hodiSe','.landing.nehodiSe','.katalog'))
    return ch
