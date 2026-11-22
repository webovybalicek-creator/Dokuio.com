import asyncio
from playwright.async_api import async_playwright
H='http://localhost:4321'
DOCS={'sk':['najomna-zmluva-byt','preberaci-protokol-bytu','vypoved-z-najmu'],'pl':['umowa-najmu-mieszkania','protokol-zdawczo-odbiorczy-mieszkania','wypowiedzenie-umowy-najmu'],
 'de':['mietvertrag-wohnung','uebergabeprotokoll-wohnung','kuendigung-mietvertrag'],'at':['mietvertrag-wohnung','uebergabeprotokoll-wohnung','kuendigung-mietvertrag'],'ch':['mietvertrag-wohnung','uebergabeprotokoll-wohnung','kuendigung-mietvertrag']}
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome')
        ctx = await b.new_context(viewport={'width':1280,'height':900}, accept_downloads=True)
        pg = await ctx.new_page(); errs=[]; pg.on('pageerror', lambda e: errs.append(str(e)))
        for z,ds in DOCS.items():
            for d in ds:
                await pg.goto(f'{H}/{z}/{d}/vytvorit/')
                n=await pg.locator('[data-skok]').count()
                await pg.wait_for_selector('[data-nahled] .dok__nazev', timeout=5000)
                txt=await pg.inner_text('[data-nahled]')
                await pg.click(f'[data-skok="{n-1}"]')
                for typ in ['pdf','docx']:
                    async with pg.expect_download() as dl: await pg.click(f'[data-krok="{n-1}"] [data-stahnout={typ}]')
                    f=await dl.value; await f.save_as(f'/tmp/najem_{z}_{d}.{typ}')
                bad=[w for w in ['undefined','NaN','{{'] if w in txt]
                print(f'{z}/{d:40} kroky={n} ok {bad} {"ß" in txt and z=="ch"}')
        print('ERRS', errs); await b.close()
asyncio.run(main())
