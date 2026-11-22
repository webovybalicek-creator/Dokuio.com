import asyncio, re
from playwright.async_api import async_playwright
H='http://localhost:4321'
DOCS=' hr/en/izjava-o-priznanju-duga hr/en/izjava hr/en/jednostrani-raskid-ugovora hr/en/kupoprodajni-ugovor-automobil hr/en/kupoprodajni-ugovor-motocikl hr/en/kupoprodajni-ugovor hr/en/opomena-pred-tuzbu hr/en/otkaz-ugovora-o-najmu hr/en/otkaz-ugovora-o-radu hr/en/otkaz-ugovora hr/en/potvrda-o-primitku-novca hr/en/primopredajni-zapisnik-stana hr/en/primopredajni-zapisnik-vozila hr/en/punomoc hr/en/reklamacija hr/en/sporazum-o-obrocnoj-otplati hr/en/sporazumni-raskid-ugovora-o-najmu hr/en/suglasnost-za-putovanje-djeteta hr/en/ugovor-o-darovanju hr/en/ugovor-o-djelu hr/en/ugovor-o-najmu-stana hr/en/ugovor-o-podnajmu hr/en/ugovor-o-posudbi hr/en/ugovor-o-zajmu hr/uk/izjava-o-priznanju-duga hr/uk/izjava hr/uk/jednostrani-raskid-ugovora hr/uk/kupoprodajni-ugovor-automobil hr/uk/kupoprodajni-ugovor-motocikl hr/uk/kupoprodajni-ugovor hr/uk/opomena-pred-tuzbu hr/uk/otkaz-ugovora-o-najmu hr/uk/otkaz-ugovora-o-radu hr/uk/otkaz-ugovora hr/uk/potvrda-o-primitku-novca hr/uk/primopredajni-zapisnik-stana hr/uk/primopredajni-zapisnik-vozila hr/uk/punomoc hr/uk/reklamacija hr/uk/sporazum-o-obrocnoj-otplati hr/uk/sporazumni-raskid-ugovora-o-najmu hr/uk/suglasnost-za-putovanje-djeteta hr/uk/ugovor-o-darovanju hr/uk/ugovor-o-djelu hr/uk/ugovor-o-najmu-stana hr/uk/ugovor-o-podnajmu hr/uk/ugovor-o-posudbi hr/uk/ugovor-o-zajmu si/en/darilna-pogodba si/en/dogovor-o-obrocnem-odplacilu si/en/izjava si/en/kupoprodajna-pogodba-avto si/en/kupoprodajna-pogodba-motor si/en/kupoprodajna-pogodba si/en/najemna-pogodba-stanovanje si/en/odpoved-najemne-pogodbe si/en/odpoved-pogodbe-o-zaposlitvi si/en/odpoved-pogodbe si/en/odstop-od-pogodbe si/en/opomin-pred-tozbo si/en/podjemna-pogodba si/en/podnajemna-pogodba si/en/pogodba-o-posodbi si/en/pooblastilo si/en/posojilna-pogodba si/en/potrdilo-o-prejemu-denarja si/en/pripoznava-dolga si/en/reklamacija si/en/soglasje-za-potovanje-otroka si/en/sporazumna-razveza-najemne-pogodbe si/en/zapisnik-o-izrocitvi-vozila si/en/zapisnik-o-predaji-stanovanja si/uk/darilna-pogodba si/uk/dogovor-o-obrocnem-odplacilu si/uk/izjava si/uk/kupoprodajna-pogodba-avto si/uk/kupoprodajna-pogodba-motor si/uk/kupoprodajna-pogodba si/uk/najemna-pogodba-stanovanje si/uk/odpoved-najemne-pogodbe si/uk/odpoved-pogodbe-o-zaposlitvi si/uk/odpoved-pogodbe si/uk/odstop-od-pogodbe si/uk/opomin-pred-tozbo si/uk/podjemna-pogodba si/uk/podnajemna-pogodba si/uk/pogodba-o-posodbi si/uk/pooblastilo si/uk/posojilna-pogodba si/uk/potrdilo-o-prejemu-denarja si/uk/pripoznava-dolga si/uk/reklamacija si/uk/soglasje-za-potovanje-otroka si/uk/sporazumna-razveza-najemne-pogodbe si/uk/zapisnik-o-izrocitvi-vozila si/uk/zapisnik-o-predaji-stanovanja'.split()
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome')
        ctx = await b.new_context(viewport={'width':1280,'height':900}, accept_downloads=True)
        pg = await ctx.new_page(); errs=[]; pg.on('pageerror', lambda e: errs.append(str(e)))
        for d in DOCS:
            await pg.goto(f'{H}/{d}/vytvorit/')
            n=await pg.locator('[data-skok]').count()
            await pg.wait_for_selector('[data-nahled] .dok__nazev', timeout=15000)
            # vyplnit částku, pokud je
            for sel,val in [('[name=cena]','2500000'),('[name=castka]','1250000'),('[name=najemnina]','650'),('[name=varscina]','1300'),('[name=obrok]','100'),('[name=vrednost]','12500'),('[name=najamnina]','650'),('[name=jamcevina]','1300')]:
                await pg.evaluate('([s,v])=>{const e=document.querySelector(s); if(e){e.value=v; e.dispatchEvent(new Event("input",{bubbles:true})); e.dispatchEvent(new Event("change",{bubbles:true}));}}',[sel,val])
            await pg.wait_for_timeout(300)
            txt=await pg.inner_text('[data-nahled]')
            await pg.click(f'[data-skok="{n-1}"]')
            for typ in ['pdf','docx']:
                async with pg.expect_download() as dl: await pg.click(f'[data-krok="{n-1}"] [data-stahnout={typ}]')
                f=await dl.value; await f.save_as(f'/tmp/nv_{d.replace('/','_')}.{typ}')
            bad=[w for w in ['undefined','NaN','{{'] if w in txt]
            m=re.findall(r'(?:slovy|slovom|słownie|Worten|azaz|slovima|z besedo): [^)]*', txt)
            print(f'{d:40} kroky={n} {bad} {m[:1]}')
        print('ERRS', errs); await b.close()
asyncio.run(main())
