import sys, json, re, subprocess
sys.path.insert(0,'/home/claude/skripty/prek2'); from lib import save
def pload(z,j,slug):
    r=subprocess.run(['node','--experimental-strip-types','--no-warnings','--import','./reg.mjs','pdump.mjs',z,j,slug],cwd='/home/claude/skripty/dump',capture_output=True,text=True)
    return json.loads(r.stdout)
EN=[(r'\bused cars\b','used motorcycles'),(r'\bcars\b','motorcycles'),(r'\bCars\b','Motorcycles'),(r'\bcar\b','motorcycle'),(r'\bCar\b','Motorcycle'),(r'\bCAR\b','MOTORCYCLE')]
UK=[(r'автомобілів','мотоциклів'),(r'автомобілями','мотоциклами'),(r'автомобілем','мотоциклом'),(r'автомобілеві','мотоциклу'),(r'автомобілі\b','мотоциклі'),(r'автомобіля','мотоцикла'),(r'автомобілю','мотоциклу'),(r'автомобіль','мотоцикл'),(r'Автомобіль','Мотоцикл'),(r'Автомобіля','Мотоцикла'),
    (r'автодилера','дилера мотоциклів'),(r'(вживане|уживане) авто\b','вживаний мотоцикл'),(r'\b[Яя]ке (саме )?авто\b',lambda m:('Який ' if m.group(0)[0]=='Я' else 'який ')+(m.group(1) or '')+'мотоцикл'),
    (r'\b(разом з|разом із|із|з) авто\b',r'\1 мотоциклом'),(r'\b(на|у|в) авто\b(?= (та|і|й|\(|–|\.|,))',r'\1 мотоциклі'),(r'\bна авто\b\.?$','на мотоциклі.'),
    (r'(^|[–:;] |\. )Авто\b',r'\1Мотоцикл'),(r'(^|[–:;] |\. )авто\b',r'\1мотоцикл'),
    (r'\b(продаєте|купуєте|передайте|Передайте|перевірте|реєструє|даруєте|перереєструвати|зареєструйте|перереєстровує|знімає|отримує|прийме|продає|купує|оглянути|огляньте|продати|купити|забрати|приймає|передає|оформити|страхує|застрахувати) авто\b',r'\1 мотоцикл'),
    (r'\b(про|набув|зніміть|що|Чи|Сторони,) авто\b',r'\1 мотоцикл'),(r'\bа не авто\b','а не мотоциклу'),(r'\bавто\b','мотоцикла'),(r'обтяжене','обтяжений')]
def walk(o,f,path=''):
    if isinstance(o,str): return f(o,path)
    if isinstance(o,list): return [walk(x,f,f'{path}[{i}]') for i,x in enumerate(o)]
    if isinstance(o,dict): return {k:walk(v,f,f'{path}.{k}') for k,v in o.items()}
    return o
def conv(z,j,car,moto,patch,skip=()):
    o=pload(z,j,car); R=EN if j=='en' else UK
    ch=[]
    def f(s,p):
        if p.startswith('.sablona') or any(p.startswith(x) for x in skip): return s
        n=s
        for a,b in R: n=re.sub(a,b,n)
        if n!=s: ch.append((p,n))
        return n
    o=walk(o,f)
    def setp(o,path,v):
        ks=re.findall(r'[^.\[\]]+',path); x=o
        for k in ks[:-1]: x=x[int(k)] if k.isdigit() else x[k]
        k=ks[-1]
        if k=='+': x.append(v)
        elif k.isdigit(): x[int(k)]=v
        else: x[k]=v
    for p,v in patch.items(): setp(o,p,v)
    save(z,j,moto,o)
    return ch
if __name__=='__main__':
    z,j,car=sys.argv[1:4]
    for p,n in conv(z,j,car,'_tmp',{}): print(p,'::',n[:200])
