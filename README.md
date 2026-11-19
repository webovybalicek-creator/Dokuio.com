# Dokuio.com

Online generátor smluv a dokumentů do PDF. Uživatel odpoví na pár otázek a stáhne si hotovou smlouvu podle práva své země. Začínáme Českem (`/cz/`), další země přibudou jako vlastní sekce `/{kód-země}/`.

Statický web postavený na [Astro](https://astro.build), stejně jako najdikadernictvi.cz.

## Vývoj

```bash
npm install
npm run dev      # lokální náhled
npm run build    # sestavení do složky dist/
```

Vyžaduje Node.js 22.12+ (deploy běží na Node.js 24).

## Deploy

Každý push do větve `main` web sestaví a přes FTPS nahraje na hosting Exon (`.github/workflows/deploy.yml`). Nahrávají se jen změněné soubory (ZIP + jednorázový rozbalovač `deploy/deploy.php`).

Potřebné GitHub secrets (*Settings → Secrets and variables → Actions → Secrets*):

- `FTP_SERVER` – `ftp.next01.exon.io`
- `FTP_USERNAME` – `dokuio@dokuio.com`
- `FTP_PASSWORD`

FTP účet vede přímo do webové složky domény (`/home2/qaecbeyn/dokuio.com`).

## Stav

Web je ve vývoji: `noindex` + `robots.txt` blokují indexaci, dokud se v `src/lib/config.ts` nepřepne `indexovat: true`.
