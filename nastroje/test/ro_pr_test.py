import asyncio, re
from playwright.async_api import async_playwright
H='http://localhost:4321'
DOCS='ro/en/acord-incetare-inchiriere ro/en/acord-plata-esalonata ro/en/chitanta-primire-bani ro/en/contract-comodat ro/en/contract-donatie ro/en/contract-imprumut ro/en/contract-inchiriere-locuinta ro/en/contract-prestari-servicii ro/en/contract-subinchiriere ro/en/contract-vanzare-cumparare ro/en/contract-vanzare-cumparare-auto ro/en/contract-vanzare-cumparare-moto ro/en/declaratie-acord-calatorie-minor ro/en/declaratie-pe-proprie-raspundere ro/en/demisie ro/en/denuntare-contract-inchiriere ro/en/formular-retragere ro/en/notificare-plata ro/en/notificare-reziliere-contract ro/en/proces-verbal-predare-locuinta ro/en/proces-verbal-predare-vehicul ro/en/procura ro/en/reclamatie-produs-neconform ro/en/recunoastere-datorie ro/uk/acord-incetare-inchiriere ro/uk/acord-plata-esalonata ro/uk/chitanta-primire-bani ro/uk/contract-comodat ro/uk/contract-donatie ro/uk/contract-imprumut ro/uk/contract-inchiriere-locuinta ro/uk/contract-prestari-servicii ro/uk/contract-subinchiriere ro/uk/contract-vanzare-cumparare ro/uk/contract-vanzare-cumparare-auto ro/uk/contract-vanzare-cumparare-moto ro/uk/declaratie-acord-calatorie-minor ro/uk/declaratie-pe-proprie-raspundere ro/uk/demisie ro/uk/denuntare-contract-inchiriere ro/uk/formular-retragere ro/uk/notificare-plata ro/uk/notificare-reziliere-contract ro/uk/proces-verbal-predare-locuinta ro/uk/proces-verbal-predare-vehicul ro/uk/procura ro/uk/reclamatie-produs-neconform ro/uk/recunoastere-datorie'.split()
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
            for sel,val in [('[name=cena]','2500000'),('[name=castka]','1250000'),('[name=najemnina]','650'),('[name=varscina]','1300'),('[name=obrok]','100'),('[name=vrednost]','12500'),('[name=najamnina]','650'),('[name=jamcevina]','1300'),('[name=chirie]','2500'),('[name=garantie]','5000'),('[name=rata]','1000'),('[name=valoare]','12500')]:
                await pg.evaluate('([s,v])=>{const e=document.querySelector(s); if(e){e.value=v; e.dispatchEvent(new Event("input",{bubbles:true})); e.dispatchEvent(new Event("change",{bubbles:true}));}}',[sel,val])
            await pg.wait_for_timeout(300)
            txt=await pg.inner_text('[data-nahled]')
            await pg.click(f'[data-skok="{n-1}"]')
            for typ in ['pdf','docx']:
                async with pg.expect_download() as dl: await pg.click(f'[data-krok="{n-1}"] [data-stahnout={typ}]')
                f=await dl.value; await f.save_as(f'/tmp/nv_{d.replace('/','_')}.{typ}')
            bad=[w for w in ['undefined','NaN','{{','[['] if w in txt]
            m=re.findall(r'(?:slovy|slovom|słownie|Worten|azaz|slovima|z besedo|în litere|in words|словами): [^)]*', txt)
            print(f'{d:40} kroky={n} {bad} {m[:1]}')
        print('ERRS', errs); await b.close()
asyncio.run(main())
