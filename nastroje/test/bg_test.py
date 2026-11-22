import asyncio, re
from playwright.async_api import async_playwright
H='http://localhost:4321'
DOCS='bg/deklaratsiya-saglasie-patuvane-dete bg/deklaratsiya bg/dogovor-pokupko-prodazhba-avtomobil bg/dogovor-pokupko-prodazhba-motor bg/dogovor-pokupko-prodazhba bg/dogovor-za-darenie bg/dogovor-za-izrabotka bg/dogovor-za-naem-zhilishte bg/dogovor-za-prenaemane bg/dogovor-za-zaem-za-polzvane bg/dogovor-za-zaem bg/formulyar-otkaz-ot-dogovor bg/palnomoshtno bg/pokana-za-plashtane bg/predizvestie-napuskane-rabota bg/predizvestie-prekratyavane-dogovor bg/predizvestie-prekratyavane-naem bg/priemo-predavatelen-protokol-avtomobil bg/priemo-predavatelen-protokol-zhilishte bg/priznavane-na-dalg bg/razpiska-poluchavane-pari bg/reklamatsiya bg/sporazumenie-prekratyavane-naem bg/sporazumenie-razsrochvane-dalg'.split()
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
            for sel,val in [('[name=cena]','2500000'),('[name=castka]','1250000'),('[name=najemnina]','650'),('[name=varscina]','1300'),('[name=obrok]','100'),('[name=vrednost]','12500'),('[name=najamnina]','650'),('[name=jamcevina]','1300'),('[name=chirie]','2500'),('[name=garantie]','5000'),('[name=rata]','1000'),('[name=valoare]','12500'),('[name=naem]','650'),('[name=depozit]','1300'),('[name=vnoska]','250')]:
                await pg.evaluate('([s,v])=>{const e=document.querySelector(s); if(e){e.value=v; e.dispatchEvent(new Event("input",{bubbles:true})); e.dispatchEvent(new Event("change",{bubbles:true}));}}',[sel,val])
            await pg.wait_for_timeout(300)
            txt=await pg.inner_text('[data-nahled]')
            await pg.click(f'[data-skok="{n-1}"]')
            for typ in ['pdf','docx']:
                async with pg.expect_download() as dl: await pg.click(f'[data-krok="{n-1}"] [data-stahnout={typ}]')
                f=await dl.value; await f.save_as(f'/tmp/nv_{d.replace('/','_')}.{typ}')
            bad=[w for w in ['undefined','NaN','{{','[['] if w in txt]
            m=re.findall(r'(?:slovy|slovom|słownie|Worten|azaz|slovima|z besedo|în litere|словом): [^)]*', txt)
            print(f'{d:40} kroky={n} {bad} {m[:1]}')
        print('ERRS', errs); await b.close()
asyncio.run(main())
