import asyncio, re
from playwright.async_api import async_playwright
H='http://localhost:4321'
DOCS='lv/aizdevuma-ligums lv/apakssires-ligums lv/apliecinajums lv/atteikuma-veidlapa lv/auto-nodosanas-akts lv/auto-pirkuma-ligums lv/darba-liguma-uzteikums lv/davinajuma-ligums lv/dzivokla-nodosanas-akts lv/ires-liguma-uzteikums lv/ires-ligums lv/liguma-uzteikums lv/maksajuma-pieprasijums lv/motocikla-pirkuma-ligums lv/naudas-sanemsanas-kvits lv/parada-atzisana lv/patapinajuma-ligums lv/pilnvara lv/pirkuma-ligums lv/pretenzija lv/uznemuma-ligums lv/vecaka-piekrisana-berna-celojumam lv/vienosanas-par-ires-izbeigsanu lv/vienosanas-par-parada-atmaksu lv/en/aizdevuma-ligums lv/uk/aizdevuma-ligums lv/en/apakssires-ligums lv/uk/apakssires-ligums lv/en/apliecinajums lv/uk/apliecinajums lv/en/atteikuma-veidlapa lv/uk/atteikuma-veidlapa lv/en/auto-nodosanas-akts lv/uk/auto-nodosanas-akts lv/en/auto-pirkuma-ligums lv/uk/auto-pirkuma-ligums lv/en/darba-liguma-uzteikums lv/uk/darba-liguma-uzteikums lv/en/davinajuma-ligums lv/uk/davinajuma-ligums lv/en/dzivokla-nodosanas-akts lv/uk/dzivokla-nodosanas-akts lv/en/ires-liguma-uzteikums lv/uk/ires-liguma-uzteikums lv/en/ires-ligums lv/uk/ires-ligums lv/en/liguma-uzteikums lv/uk/liguma-uzteikums lv/en/maksajuma-pieprasijums lv/uk/maksajuma-pieprasijums lv/en/motocikla-pirkuma-ligums lv/uk/motocikla-pirkuma-ligums lv/en/naudas-sanemsanas-kvits lv/uk/naudas-sanemsanas-kvits lv/en/parada-atzisana lv/uk/parada-atzisana lv/en/patapinajuma-ligums lv/uk/patapinajuma-ligums lv/en/pilnvara lv/uk/pilnvara lv/en/pirkuma-ligums lv/uk/pirkuma-ligums lv/en/pretenzija lv/uk/pretenzija lv/en/uznemuma-ligums lv/uk/uznemuma-ligums lv/en/vecaka-piekrisana-berna-celojumam lv/uk/vecaka-piekrisana-berna-celojumam lv/en/vienosanas-par-ires-izbeigsanu lv/uk/vienosanas-par-ires-izbeigsanu lv/en/vienosanas-par-parada-atmaksu lv/uk/vienosanas-par-parada-atmaksu'.split()
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
            for sel,val in [('[name=cena]','2500000'),('[name=castka]','1250000'),('[name=najemnina]','650'),('[name=varscina]','1300'),('[name=obrok]','100'),('[name=vrednost]','12500'),('[name=najamnina]','650'),('[name=jamcevina]','1300'),('[name=chirie]','2500'),('[name=garantie]','5000'),('[name=rata]','1000'),('[name=valoare]','12500'),('[name=naem]','650'),('[name=depozit]','1300'),('[name=vnoska]','250'),('[name=najemne]','650'),('[name=kauce]','1300'),('[name=egguisi]','1300'),('[name=dosi]','250'),('[name=axia]','800'),('[name=hodnota]','600'),('[name=zaloha]','300'),('[name=tagatis]','1300'),('[name=osamakse]','250'),('[name=vaartus]','800'),('[name=ettemaks]','300'),('[name=ires_maksa]','650'),('[name=drosibas_nauda]','1300'),('[name=maksajums]','250'),('[name=vertiba]','800'),('[name=avanss]','300'),('[name=maksa]','400')]:
                await pg.evaluate('([s,v])=>{const e=document.querySelector(s); if(e){e.value=v; e.dispatchEvent(new Event("input",{bubbles:true})); e.dispatchEvent(new Event("change",{bubbles:true}));}}',[sel,val])
            await pg.wait_for_timeout(300)
            txt=await pg.inner_text('[data-nahled]')
            await pg.click(f'[data-skok="{n-1}"]')
            for typ in ['pdf','docx']:
                async with pg.expect_download() as dl: await pg.click(f'[data-krok="{n-1}"] [data-stahnout={typ}]')
                f=await dl.value; await f.save_as(f'/tmp/lv_{d.replace('/','_')}.{typ}')
            bad=[w for w in ['undefined','NaN','{{','[['] if w in txt]
            m=re.findall(r'(?:slovy|slovom|słownie|Worten|azaz|slovima|z besedo|în litere|словом|ολογράφως|sõnadega|vārdiem|in words): [^)]*', txt)
            print(f'{d:40} kroky={n} {bad} {m[:1]}')
        print('ERRS', errs); await b.close()
asyncio.run(main())
