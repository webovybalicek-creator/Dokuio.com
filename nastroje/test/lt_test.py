import asyncio, re
from playwright.async_api import async_playwright
H='http://localhost:4321'
DOCS='lt/automobilio-perdavimo-aktas lt/automobilio-pirkimo-pardavimo-sutartis lt/buto-nuomos-sutartis lt/buto-perdavimo-aktas lt/deklaracija lt/dovanojimo-sutartis lt/igaliojimas lt/motociklo-pirkimo-pardavimo-sutartis lt/panaudos-sutartis lt/pareiskimas-del-darbo-sutarties-nutraukimo lt/paskolos-sutartis lt/pinigu-gavimo-pakvitavimas lt/pirkimo-pardavimo-sutartis lt/pranesimas-apie-nuomos-nutraukima lt/pranesimas-apie-sutarties-nutraukima lt/pretenzija lt/raginimas-sumoketi lt/rangos-sutartis lt/skolos-pripazinimas lt/subnuomos-sutartis lt/susitarimas-del-skolos-grazinimo lt/susitarimas-nutraukti-nuoma lt/sutarties-atsisakymo-forma lt/tevu-sutikimas-del-vaiko-keliones'.split()
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
                f=await dl.value; await f.save_as(f'/tmp/lt_{d.replace('/','_')}.{typ}')
            bad=[w for w in ['undefined','NaN','{{','[['] if w in txt]
            m=re.findall(r'(?:slovy|slovom|słownie|Worten|azaz|slovima|z besedo|în litere|словом|ολογράφως|sõnadega|vārdiem|žodžiais|in words): [^)]*', txt)
            print(f'{d:40} kroky={n} {bad} {m[:1]}')
        print('ERRS', errs); await b.close()
asyncio.run(main())
