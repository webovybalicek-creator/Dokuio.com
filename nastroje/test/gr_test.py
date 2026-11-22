import asyncio, re
from playwright.async_api import async_playwright
H='http://localhost:4321'
DOCS='gr/anagnorisi-chreous gr/apodeixi-eispraxis gr/axiosi-eggyisis gr/entypo-ypanachorisis gr/exousiodotisi gr/katangelia-misthosis gr/katangelia-symvasis gr/misthotirio-katoikias gr/ochlisi-pliromis gr/paraitisi-ergazomenou gr/protokollo-paradosis-katoikias gr/protokollo-paradosis-oximatos gr/symfonia-doseon gr/symfonia-lysis-misthosis gr/symvasi-chrisidaneiou gr/symvasi-daneiou gr/symvasi-doreas gr/symvasi-ergou gr/symvasi-polisis gr/symvasi-polisis-aftokinitou gr/symvasi-polisis-motosykletas gr/symvasi-ypomisthosis gr/synainesi-taxidiou-anilikou gr/ypeythyni-dilosi gr/en/anagnorisi-chreous gr/uk/anagnorisi-chreous gr/en/apodeixi-eispraxis gr/uk/apodeixi-eispraxis gr/en/axiosi-eggyisis gr/uk/axiosi-eggyisis gr/en/entypo-ypanachorisis gr/uk/entypo-ypanachorisis gr/en/exousiodotisi gr/uk/exousiodotisi gr/en/katangelia-misthosis gr/uk/katangelia-misthosis gr/en/katangelia-symvasis gr/uk/katangelia-symvasis gr/en/misthotirio-katoikias gr/uk/misthotirio-katoikias gr/en/ochlisi-pliromis gr/uk/ochlisi-pliromis gr/en/paraitisi-ergazomenou gr/uk/paraitisi-ergazomenou gr/en/protokollo-paradosis-katoikias gr/uk/protokollo-paradosis-katoikias gr/en/protokollo-paradosis-oximatos gr/uk/protokollo-paradosis-oximatos gr/en/symfonia-doseon gr/uk/symfonia-doseon gr/en/symfonia-lysis-misthosis gr/uk/symfonia-lysis-misthosis gr/en/symvasi-chrisidaneiou gr/uk/symvasi-chrisidaneiou gr/en/symvasi-daneiou gr/uk/symvasi-daneiou gr/en/symvasi-doreas gr/uk/symvasi-doreas gr/en/symvasi-ergou gr/uk/symvasi-ergou gr/en/symvasi-polisis gr/uk/symvasi-polisis gr/en/symvasi-polisis-aftokinitou gr/uk/symvasi-polisis-aftokinitou gr/en/symvasi-polisis-motosykletas gr/uk/symvasi-polisis-motosykletas gr/en/symvasi-ypomisthosis gr/uk/symvasi-ypomisthosis gr/en/synainesi-taxidiou-anilikou gr/uk/synainesi-taxidiou-anilikou gr/en/ypeythyni-dilosi gr/uk/ypeythyni-dilosi'.split()
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
            for sel,val in [('[name=cena]','2500000'),('[name=castka]','1250000'),('[name=najemnina]','650'),('[name=varscina]','1300'),('[name=obrok]','100'),('[name=vrednost]','12500'),('[name=najamnina]','650'),('[name=jamcevina]','1300'),('[name=chirie]','2500'),('[name=garantie]','5000'),('[name=rata]','1000'),('[name=valoare]','12500'),('[name=naem]','650'),('[name=depozit]','1300'),('[name=vnoska]','250'),('[name=najemne]','650'),('[name=kauce]','1300'),('[name=egguisi]','1300'),('[name=dosi]','250'),('[name=axia]','800'),('[name=hodnota]','600'),('[name=zaloha]','300')]:
                await pg.evaluate('([s,v])=>{const e=document.querySelector(s); if(e){e.value=v; e.dispatchEvent(new Event("input",{bubbles:true})); e.dispatchEvent(new Event("change",{bubbles:true}));}}',[sel,val])
            await pg.wait_for_timeout(300)
            txt=await pg.inner_text('[data-nahled]')
            await pg.click(f'[data-skok="{n-1}"]')
            for typ in ['pdf','docx']:
                async with pg.expect_download() as dl: await pg.click(f'[data-krok="{n-1}"] [data-stahnout={typ}]')
                f=await dl.value; await f.save_as(f'/tmp/nv_{d.replace('/','_')}.{typ}')
            bad=[w for w in ['undefined','NaN','{{','[['] if w in txt]
            m=re.findall(r'(?:slovy|slovom|słownie|Worten|azaz|slovima|z besedo|în litere|словом|ολογράφως): [^)]*', txt)
            print(f'{d:40} kroky={n} {bad} {m[:1]}')
        print('ERRS', errs); await b.close()
asyncio.run(main())
