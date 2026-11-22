import asyncio, re
from playwright.async_api import async_playwright
H='http://localhost:4321'
DOCS=['cz/smlouva-o-vypujcce','sk/zmluva-o-vypozicke','pl/umowa-uzyczenia','de/leihvertrag','at/leihvertrag','ch/leihvertrag','hu/haszonkolcson-szerzodes']
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome')
        ctx = await b.new_context(viewport={'width':1280,'height':900}, accept_downloads=True)
        pg = await ctx.new_page(); errs=[]; pg.on('pageerror', lambda e: errs.append(str(e)))
        for d in DOCS:
            await pg.goto(f'{H}/{d}/vytvorit/')
            n=await pg.locator('[data-skok]').count()
            await pg.wait_for_selector('[data-nahled] .dok__nazev', timeout=5000)
            # vyplnit částku, pokud je
            for sel,val in [('[name=cena]','2500000'),('[name=castka]','1250000'),('[name=berleti_dij]','180000')]:
                await pg.evaluate('([s,v])=>{const e=document.querySelector(s); if(e){e.value=v; e.dispatchEvent(new Event("input",{bubbles:true})); e.dispatchEvent(new Event("change",{bubbles:true}));}}',[sel,val])
            await pg.wait_for_timeout(300)
            txt=await pg.inner_text('[data-nahled]')
            await pg.click(f'[data-skok="{n-1}"]')
            for typ in ['pdf','docx']:
                async with pg.expect_download() as dl: await pg.click(f'[data-krok="{n-1}"] [data-stahnout={typ}]')
                f=await dl.value; await f.save_as(f'/tmp/nv_{d.replace('/','_')}.{typ}')
            bad=[w for w in ['undefined','NaN','{{'] if w in txt]
            m=re.findall(r'(?:slovy|slovom|słownie|Worten|azaz): [^)]*', txt)
            print(f'{d:40} kroky={n} {bad} {m[:1]}')
        print('ERRS', errs); await b.close()
asyncio.run(main())
