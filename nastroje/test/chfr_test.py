import asyncio, re
from playwright.async_api import async_playwright
H='http://localhost:4321'
DOCS='ch-fr/attestation-sur-l-honneur ch-fr/autorisation-voyage-mineur ch-fr/avis-des-defauts ch-fr/contrat-d-entreprise ch-fr/contrat-de-bail-appartement ch-fr/contrat-de-donation ch-fr/contrat-de-pret-a-usage ch-fr/contrat-de-pret ch-fr/contrat-de-sous-location ch-fr/contrat-de-vente-entre-particuliers ch-fr/contrat-de-vente-moto ch-fr/contrat-de-vente-voiture ch-fr/convention-paiement-echelonne ch-fr/convention-resiliation-bail ch-fr/etat-des-lieux ch-fr/lettre-de-demission ch-fr/lettre-de-resiliation ch-fr/mise-en-demeure ch-fr/proces-verbal-remise-vehicule ch-fr/procuration-service-des-automobiles ch-fr/procuration ch-fr/quittance ch-fr/reconnaissance-de-dette ch-fr/resiliation-bail ch-fr/revocation-contrat-demarchage'.split()
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
            for sel,val in [('[name=cena]','9500'),('[name=castka]','6000'),('[name=splatka]','500'),('[name=splatka_den]','25'),('[name=prvni_splatka]','2026-12-01'),('[name=miete]','1450'),('[name=kaution]','4350'),('[name=betrag]','850'),('[name=preis]','1800'),('[name=najemne]','900'),('[name=cena]','2500000'),('[name=castka]','1250000'),('[name=najemnina]','650'),('[name=varscina]','1300'),('[name=obrok]','100'),('[name=vrednost]','12500'),('[name=najamnina]','650'),('[name=jamcevina]','1300'),('[name=chirie]','2500'),('[name=garantie]','5000'),('[name=rata]','1000'),('[name=valoare]','12500'),('[name=naem]','650'),('[name=depozit]','1300'),('[name=vnoska]','250'),('[name=najemne]','650'),('[name=kauce]','1300'),('[name=egguisi]','1300'),('[name=dosi]','250'),('[name=axia]','800'),('[name=hodnota]','600'),('[name=zaloha]','300'),('[name=tagatis]','1300'),('[name=osamakse]','250'),('[name=vaartus]','800'),('[name=ettemaks]','300'),('[name=ires_maksa]','650'),('[name=drosibas_nauda]','1300'),('[name=maksajums]','250'),('[name=vertiba]','800'),('[name=avanss]','300'),('[name=maksa]','400')]:
                await pg.evaluate('([s,v])=>{const e=document.querySelector(s); if(e){e.value=v; e.dispatchEvent(new Event("input",{bubbles:true})); e.dispatchEvent(new Event("change",{bubbles:true}));}}',[sel,val])
            await pg.wait_for_timeout(300)
            txt=await pg.inner_text('[data-nahled]')
            await pg.click(f'[data-skok="{n-1}"]')
            for typ in ['pdf','docx']:
                async with pg.expect_download() as dl: await pg.click(f'[data-krok="{n-1}"] [data-stahnout={typ}]')
                f=await dl.value; await f.save_as(f'/tmp/fr/fr_{d.replace('/','_')}.{typ}')
            bad=[w for w in ['undefined','NaN','{{','[['] if w in txt]
            m=re.findall(r'(?:slovy|slovom|słownie|Worten|azaz|slovima|z besedo|în litere|словом|ολογράφως|sõnadega|vārdiem|en lettres|in words): [^)]*', txt)
            print(f'{d:52} kroky={n} {bad} {m[:1]}')
        print('ERRS', errs); await b.close()
asyncio.run(main())
