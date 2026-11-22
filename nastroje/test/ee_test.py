import asyncio, re
from playwright.async_api import async_playwright
H='http://localhost:4321'
DOCS='ee/alluurileping ee/eluruumi-uleandmise-akt ee/kasutuslaenuleping ee/kinkeleping ee/kinnitus ee/laenuleping ee/lepingu-ulesutlemine ee/maksegraafiku-kokkulepe ee/maksenoue ee/mootorratta-ostu-muugileping ee/nousolek-lapse-reisimiseks ee/ostu-muugileping ee/pretensioon ee/raha-vastuvotmise-kviitung ee/soiduki-ostu-muugileping ee/soiduki-uleandmise-akt ee/taganemisavaldus ee/toolepingu-ulesutlemine ee/toovotuleping ee/uurileping ee/uurilepingu-lopetamise-kokkulepe ee/uurilepingu-ulesutlemine ee/volatunnistus ee/volikiri ee/en/alluurileping ee/uk/alluurileping ee/en/eluruumi-uleandmise-akt ee/uk/eluruumi-uleandmise-akt ee/en/kasutuslaenuleping ee/uk/kasutuslaenuleping ee/en/kinkeleping ee/uk/kinkeleping ee/en/kinnitus ee/uk/kinnitus ee/en/laenuleping ee/uk/laenuleping ee/en/lepingu-ulesutlemine ee/uk/lepingu-ulesutlemine ee/en/maksegraafiku-kokkulepe ee/uk/maksegraafiku-kokkulepe ee/en/maksenoue ee/uk/maksenoue ee/en/mootorratta-ostu-muugileping ee/uk/mootorratta-ostu-muugileping ee/en/nousolek-lapse-reisimiseks ee/uk/nousolek-lapse-reisimiseks ee/en/ostu-muugileping ee/uk/ostu-muugileping ee/en/pretensioon ee/uk/pretensioon ee/en/raha-vastuvotmise-kviitung ee/uk/raha-vastuvotmise-kviitung ee/en/soiduki-ostu-muugileping ee/uk/soiduki-ostu-muugileping ee/en/soiduki-uleandmise-akt ee/uk/soiduki-uleandmise-akt ee/en/taganemisavaldus ee/uk/taganemisavaldus ee/en/toolepingu-ulesutlemine ee/uk/toolepingu-ulesutlemine ee/en/toovotuleping ee/uk/toovotuleping ee/en/uurileping ee/uk/uurileping ee/en/uurilepingu-lopetamise-kokkulepe ee/uk/uurilepingu-lopetamise-kokkulepe ee/en/uurilepingu-ulesutlemine ee/uk/uurilepingu-ulesutlemine ee/en/volatunnistus ee/uk/volatunnistus ee/en/volikiri ee/uk/volikiri'.split()
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
            for sel,val in [('[name=cena]','2500000'),('[name=castka]','1250000'),('[name=najemnina]','650'),('[name=varscina]','1300'),('[name=obrok]','100'),('[name=vrednost]','12500'),('[name=najamnina]','650'),('[name=jamcevina]','1300'),('[name=chirie]','2500'),('[name=garantie]','5000'),('[name=rata]','1000'),('[name=valoare]','12500'),('[name=naem]','650'),('[name=depozit]','1300'),('[name=vnoska]','250'),('[name=najemne]','650'),('[name=kauce]','1300'),('[name=egguisi]','1300'),('[name=dosi]','250'),('[name=axia]','800'),('[name=hodnota]','600'),('[name=zaloha]','300'),('[name=tagatis]','1300'),('[name=osamakse]','250'),('[name=vaartus]','800'),('[name=ettemaks]','300')]:
                await pg.evaluate('([s,v])=>{const e=document.querySelector(s); if(e){e.value=v; e.dispatchEvent(new Event("input",{bubbles:true})); e.dispatchEvent(new Event("change",{bubbles:true}));}}',[sel,val])
            await pg.wait_for_timeout(300)
            txt=await pg.inner_text('[data-nahled]')
            await pg.click(f'[data-skok="{n-1}"]')
            for typ in ['pdf','docx']:
                async with pg.expect_download() as dl: await pg.click(f'[data-krok="{n-1}"] [data-stahnout={typ}]')
                f=await dl.value; await f.save_as(f'/tmp/ee_{d.replace('/','_')}.{typ}')
            bad=[w for w in ['undefined','NaN','{{','[['] if w in txt]
            m=re.findall(r'(?:slovy|slovom|słownie|Worten|azaz|slovima|z besedo|în litere|словом|ολογράφως|sõnadega|in words): [^)]*', txt)
            print(f'{d:40} kroky={n} {bad} {m[:1]}')
        print('ERRS', errs); await b.close()
asyncio.run(main())
