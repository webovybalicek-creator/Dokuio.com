import asyncio, re
from playwright.async_api import async_playwright
H='http://localhost:4321'
DOCS='at/en/aufloesung-mietvertrag at/uk/aufloesung-mietvertrag at/en/kaufvertrag-motorrad at/uk/kaufvertrag-motorrad at/en/leihvertrag at/uk/leihvertrag at/en/untermietvertrag at/uk/untermietvertrag ch/en/aufhebungsvereinbarung-mietvertrag ch/uk/aufhebungsvereinbarung-mietvertrag ch/en/kaufvertrag-motorrad ch/uk/kaufvertrag-motorrad ch/en/leihvertrag ch/uk/leihvertrag ch/en/untermietvertrag ch/uk/untermietvertrag cz/en/smlouva-o-vypujcce cz/uk/smlouva-o-vypujcce de/en/kaufvertrag-motorrad de/uk/kaufvertrag-motorrad de/en/leihvertrag de/uk/leihvertrag de/en/mietaufhebungsvertrag de/uk/mietaufhebungsvertrag de/en/untermietvertrag de/uk/untermietvertrag de/en/wohnungsgeberbestaetigung de/uk/wohnungsgeberbestaetigung hu/en/alberleti-szerzodes hu/uk/alberleti-szerzodes hu/en/berleti-szerzodes-megszuntetese-kozos-megegyezessel hu/uk/berleti-szerzodes-megszuntetese-kozos-megegyezessel hu/en/haszonkolcson-szerzodes hu/uk/haszonkolcson-szerzodes hu/en/motorkerekpar-adasveteli-szerzodes hu/uk/motorkerekpar-adasveteli-szerzodes pl/en/porozumienie-rozwiazanie-umowy-najmu pl/uk/porozumienie-rozwiazanie-umowy-najmu pl/en/umowa-kupna-sprzedazy-motocykla pl/uk/umowa-kupna-sprzedazy-motocykla pl/en/umowa-podnajmu pl/uk/umowa-podnajmu pl/en/umowa-uzyczenia pl/uk/umowa-uzyczenia sk/en/dohoda-o-skonceni-najmu sk/uk/dohoda-o-skonceni-najmu sk/en/kupna-zmluva-motorka sk/uk/kupna-zmluva-motorka sk/en/suhlas-s-trvalym-pobytom sk/uk/suhlas-s-trvalym-pobytom sk/en/zmluva-o-podnajme sk/uk/zmluva-o-podnajme sk/en/zmluva-o-vypozicke sk/uk/zmluva-o-vypozicke'.split()
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
            for sel,val in [('[name=cena]','2500000'),('[name=castka]','1250000'),('[name=najemnina]','650'),('[name=varscina]','1300'),('[name=obrok]','100'),('[name=vrednost]','12500'),('[name=najamnina]','650'),('[name=jamcevina]','1300'),('[name=chirie]','2500'),('[name=garantie]','5000'),('[name=rata]','1000'),('[name=valoare]','12500'),('[name=naem]','650'),('[name=depozit]','1300'),('[name=vnoska]','250'),('[name=najemne]','650'),('[name=kauce]','1300')]:
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
