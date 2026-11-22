/**
 * Vykreslení dokumentu do PDF (pdf-lib). Běží v prohlížeči i v Node při buildu (prázdný vzor).
 * Písmo se předává jako bajty TTF, aby šla použít česká diakritika.
 */
import { PDFDocument, PDFString, rgb, type PDFFont, type PDFPage, type RGB } from 'pdf-lib';
import qrcode from 'qrcode-generator';
import fontkit from '@pdf-lib/fontkit';
import type { Dokument, Usek } from './dokument';
import { formatDatum } from './dokument';
import { verzalky } from './typy';

export interface Pisma {
  regular: ArrayBuffer | Uint8Array;
  semibold: ArrayBuffer | Uint8Array;
}

const A4: [number, number] = [595.28, 841.89];
const OKRAJ_X = 62;
const OKRAJ_NAHORE = 64;
const OKRAJ_DOLE = 72;
const SIRKA = A4[0] - 2 * OKRAJ_X;

const VEL = 10.25;
const RADEK = 15;
const ODSAZENI = 20;

const INK = rgb(6 / 255, 27 / 255, 49 / 255);
const SEDA = rgb(100 / 255, 116 / 255, 141 / 255);
const LINKA = rgb(150 / 255, 162 / 255, 180 / 255);

/**
 * Inter má kontextové alternativy pomlček (mezi číslicemi a velkými písmeny), které pdf-lib nezvládá:
 * znak se vykreslí s chybnou šířkou. Proto pomlčky nahrazujeme znaky bez alternativ.
 */
const t = (s: string) => s.replace(/-/g, '\u2010').replace(/\u2013/g, '\u2012');

type Polozka =
  | { k: 'slovo'; text: string; font: PDFFont; w: number; barva?: RGB }
  | { k: 'mezera'; w: number }
  | { k: 'linka'; w: number }
  | { k: 'ctverec'; w: number; ano: boolean };

export async function dokumentPdf(
  d: Dokument,
  pisma: Pisma,
  meta: {
    nazevSouboru?: string;
    vytvoreno?: Date;
    /** Podpisy nakreslené na zařízení (PNG) – vloží se nad podpisové linky */
    podpisy?: { vlevo?: Uint8Array | ArrayBuffer; vpravo?: Uint8Array | ArrayBuffer };
  } = {},
): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  pdf.registerFontkit(fontkit);
  const reg = await pdf.embedFont(pisma.regular, { subset: false, features: { calt: false } });
  const semi = await pdf.embedFont(pisma.semibold, { subset: false, features: { calt: false } });

  pdf.setTitle(d.nazev);
  pdf.setSubject(d.podnadpis);
  pdf.setCreator('Dokuio.com');
  pdf.setProducer('Dokuio.com');
  pdf.setLanguage(({ cs: 'cs-CZ', sk: 'sk-SK', pl: 'pl-PL', de: 'de-DE', hu: 'hu-HU', hr: 'hr-HR', sl: 'sl-SI', ro: 'ro-RO', bg: 'bg-BG', el: 'el-GR', et: 'et-EE', lv: 'lv-LV', lt: 'lt-LT' } as Record<string, string>)[d.jazyk] ?? 'cs-CZ');
  pdf.setCreationDate(meta.vytvoreno ?? new Date());

  const strany: PDFPage[] = [];
  let strana!: PDFPage;
  let y = 0;
  const novaStrana = () => {
    strana = pdf.addPage(A4);
    strany.push(strana);
    y = A4[1] - OKRAJ_NAHORE;
  };
  novaStrana();
  const zbyva = () => y - OKRAJ_DOLE;
  const zajisti = (vyska: number) => {
    if (zbyva() < vyska) novaStrana();
  };

  const mezeraW = reg.widthOfTextAtSize(' ', VEL);
  const charW = reg.widthOfTextAtSize('0', VEL);

  const naPolozky = (useky: Usek[], barva?: RGB): Polozka[] => {
    const out: Polozka[] = [];
    for (const u of useky) {
      if (u.t === 'linka') out.push({ k: 'linka', w: u.sirka * charW * 0.92 });
      else if (u.t === 'ctverec') out.push({ k: 'ctverec', w: 15, ano: u.zaskrtnuto });
      else {
        const font = u.tucne ? semi : reg;
        for (const cast of t(u.text).split(/( +)/)) {
          if (!cast) continue;
          if (/^ +$/.test(cast)) out.push({ k: 'mezera', w: mezeraW });
          else out.push({ k: 'slovo', text: cast, font, w: font.widthOfTextAtSize(cast, VEL), barva });
        }
      }
    }
    return out;
  };

  const zalom = (polozky: Polozka[], max: number): Polozka[][] => {
    const radky: Polozka[][] = [];
    let akt: Polozka[] = [];
    let w = 0;
    for (const p0 of polozky) {
      const p = p0.k === 'linka' && p0.w > max ? { ...p0, w: max } : p0;
      if (p.k === 'mezera' && akt.length === 0) continue;
      if (w + p.w > max && akt.length && p.k !== 'mezera') {
        while (akt.length && akt[akt.length - 1].k === 'mezera') akt.pop();
        radky.push(akt);
        akt = [];
        w = 0;
      }
      akt.push(p);
      w += p.w;
    }
    while (akt.length && akt[akt.length - 1].k === 'mezera') akt.pop();
    if (akt.length) radky.push(akt);
    return radky;
  };

  const kresliRadek = (polozky: Polozka[], x0: number, baseline: number) => {
    let x = x0;
    for (const p of polozky) {
      if (p.k === 'slovo') strana.drawText(p.text, { x, y: baseline, size: VEL, font: p.font, color: p.barva ?? INK });
      else if (p.k === 'linka')
        strana.drawLine({
          start: { x: x + 1, y: baseline - 2 },
          end: { x: x + p.w - 1, y: baseline - 2 },
          thickness: 0.7,
          color: LINKA,
          dashArray: [1.2, 1.8],
        });
      else if (p.k === 'ctverec') {
        const s = 7.5;
        strana.drawRectangle({ x, y: baseline - 0.5, width: s, height: s, borderColor: INK, borderWidth: 0.7 });
        if (p.ano) {
          strana.drawLine({ start: { x: x + 1.6, y: baseline + 3.2 }, end: { x: x + 3.2, y: baseline + 1.2 }, thickness: 0.9, color: INK });
          strana.drawLine({ start: { x: x + 3.2, y: baseline + 1.2 }, end: { x: x + 6, y: baseline + 5.8 }, thickness: 0.9, color: INK });
        }
      }
      x += p.w;
    }
  };

  /** Odstavec s předsazeným číslem; vrací nic, posouvá y */
  const odstavec = (useky: Usek[], odsazeni: number, cislo?: string, barva?: RGB) => {
    const radky = zalom(naPolozky(useky, barva), SIRKA - odsazeni);
    radky.forEach((r, i) => {
      zajisti(RADEK);
      const baseline = y - VEL;
      if (i === 0 && cislo) strana.drawText(cislo, { x: OKRAJ_X, y: baseline, size: VEL, font: reg, color: SEDA });
      kresliRadek(r, OKRAJ_X + odsazeni, baseline);
      y -= RADEK;
    });
  };

  const naStred = (text: string, font: PDFFont, size0: number, color = INK) => {
    // dlouhý nadpis (např. bulharský) se zmenší, aby nepřetekl okraje stránky
    const size = Math.min(size0, (size0 * SIRKA) / font.widthOfTextAtSize(text, size0));
    const w = font.widthOfTextAtSize(text, size);
    strana.drawText(text, { x: (A4[0] - w) / 2, y: y - size, size, font, color });
    y -= size * 1.35;
  };

  // Hlava dokumentu
  naStred(t(verzalky(d.nazev)), semi, 17);
  if (d.nazev2) naStred(t(verzalky(d.nazev2)), reg, 11, SEDA);
  y -= 2;
  for (const r of zalom(naPolozky([{ t: 'text', text: d.podnadpis2 ? `${d.podnadpis} / ${d.podnadpis2}` : d.podnadpis }]), SIRKA - 60)) {
    const w = r.reduce((a, p) => a + p.w, 0);
    const baseline = y - 8.5;
    let x = (A4[0] - w) / 2;
    for (const p of r) {
      if (p.k === 'slovo') strana.drawText(p.text, { x, y: baseline, size: 8.5, font: reg, color: SEDA });
      x += (p.w * 8.5) / VEL;
    }
    y -= 12;
  }
  y -= 18;

  if (d.uvod.length) {
    odstavec(d.uvod, 0);
    y -= 6;
  }

  for (const b of d.bloky) {
    zajisti(RADEK * 3 + 20);
    y -= 10;
    strana.drawText(t(b.nadpis), { x: OKRAJ_X, y: y - 10.5, size: 10.5, font: semi, color: INK });
    y -= 22;
    const sCisly = b.odstavce.some((o) => o.cislo);
    for (const o of b.odstavce) {
      if (o.stav === 'smazano') continue;
      o.radky.forEach((r, i) => {
        const barva = r.preklad ? SEDA : undefined;
        if (r.preklad && i > 0 && !o.radky[i - 1].preklad) y -= 2;
        if (r.uroven === 1) odstavec(r.useky, ODSAZENI + 4, undefined, barva);
        else odstavec(r.useky, sCisly ? ODSAZENI : 0, i === 0 ? o.cislo : undefined, barva);
      });
      y -= 3;
    }
  }

  // Místo, datum a podpisy drží pohromadě
  zajisti(130);
  y -= 18;
  odstavec([...(d.mistoDne[0] ? [{ t: 'text' as const, text: `${d.mistoDne[0]} ` }] : []), ...d.misto, { t: 'text', text: `${d.mistoDne[1].startsWith(',') ? '' : ' '}${d.mistoDne[1]} ` }, ...d.datum], 0);
  y -= 58;
  const sloupec = 190;
  const x2 = OKRAJ_X + SIRKA - sloupec;
  for (const [x, popis, obrazek] of [
    [OKRAJ_X, d.podpisy.vlevo, meta.podpisy?.vlevo],
    [x2, d.podpisy.vpravo, meta.podpisy?.vpravo],
  ] as const) {
    if (obrazek) {
      const img = await pdf.embedPng(obrazek);
      const vyska = 46;
      const sirka = Math.min(sloupec, (img.width / img.height) * vyska);
      strana.drawImage(img, { x: x + (sloupec - sirka) / 2, y: y + 2, width: sirka, height: vyska });
    }
    strana.drawLine({ start: { x, y }, end: { x: x + sloupec, y }, thickness: 0.7, color: INK });
    const w = reg.widthOfTextAtSize(popis, 9);
    strana.drawText(popis, { x: x + (sloupec - w) / 2, y: y - 13, size: 9, font: reg, color: SEDA });
  }

  // Přílohy (tabulky) – každá od nové strany
  for (const tab of d.prilohy) {
    novaStrana();
    strana.drawText(t(tab.nadpis), { x: OKRAJ_X, y: y - 12, size: 12, font: semi, color: INK });
    y -= 26;
    if (tab.popis) {
      odstavec([{ t: 'text', text: tab.popis }], 0, undefined, SEDA);
      y -= 6;
    }
    const sl = tab.hlavicka.length;
    const sirkaSl = SIRKA / sl;
    const radekTab = (bunky: string[], font: PDFFont, barva: RGB) => {
      zajisti(18);
      bunky.forEach((b, i) => {
        const text = t(b);
        const w = font.widthOfTextAtSize(text, 9);
        const x = tab.vpravo?.includes(i) ? OKRAJ_X + sirkaSl * (i + 1) - w - 4 : OKRAJ_X + sirkaSl * i + 4;
        strana.drawText(text, { x, y: y - 11, size: 9, font, color: barva });
      });
      y -= 16;
      strana.drawLine({ start: { x: OKRAJ_X, y: y + 1 }, end: { x: OKRAJ_X + SIRKA, y: y + 1 }, thickness: 0.4, color: rgb(0.9, 0.93, 0.96) });
    };
    radekTab(tab.hlavicka, semi, SEDA);
    for (const r of tab.radky) radekTab(r, reg, INK);
    if (tab.poznamka) {
      y -= 8;
      odstavec([{ t: 'text', text: tab.poznamka }], 0, undefined, SEDA);
    }
  }

  // Patička na každé straně: logo + odkaz dokuio.com, text šablony, číslo strany
  const vyt = meta.vytvoreno ?? new Date();
  const datum = formatDatum(`${vyt.getFullYear()}-${String(vyt.getMonth() + 1).padStart(2, '0')}-${String(vyt.getDate()).padStart(2, '0')}`, d.jazyk);
  const LOGO = [
    { d: 'M14 6h16l-6 36H8z', c: rgb(83 / 255, 58 / 255, 253 / 255) },
    { d: 'M24 6h12l-6 36H18z', c: rgb(155 / 255, 92 / 255, 255 / 255) },
    { d: 'M34 6h8l-6 36h-8z', c: rgb(255 / 255, 95 / 255, 162 / 255) },
  ];
  const URL_WEBU = 'dokuio.com';
  // QR kód ověření šablony na poslední straně (vpravo v patičce)
  const QR = 30;
  const qr = qrcode(0, 'L');
  qr.addData(d.overeni);
  qr.make();
  strany.forEach((s, i) => {
    const posledni = i === strany.length - 1;
    const xQr = A4[0] - OKRAJ_X - QR;
    s.drawLine({ start: { x: OKRAJ_X, y: 50 }, end: { x: posledni ? xQr - 8 : A4[0] - OKRAJ_X, y: 50 }, thickness: 0.5, color: rgb(0.9, 0.93, 0.96) });
    if (posledni) {
      const n = qr.getModuleCount();
      const m = QR / n;
      for (let r = 0; r < n; r++)
        for (let c = 0; c < n; c++)
          if (qr.isDark(r, c)) s.drawRectangle({ x: xQr + c * m, y: 28 + QR - (r + 1) * m, width: m + 0.02, height: m + 0.02, color: INK });
      const odkazQr = pdf.context.register(
        pdf.context.obj({
          Type: 'Annot',
          Subtype: 'Link',
          Rect: [xQr, 28, xQr + QR, 28 + QR],
          Border: [0, 0, 0],
          A: { Type: 'Action', S: 'URI', URI: PDFString.of(d.overeni) },
        }),
      );
      s.node.addAnnot(odkazQr);
    }
    // logo 12 × 12 pt (SVG 48 × 48, osa y dolů od horního rohu)
    const vel = 12;
    for (const tvar of LOGO) s.drawSvgPath(tvar.d, { x: OKRAJ_X, y: 34 + vel - 2.5, scale: vel / 48, color: tvar.c });
    const xUrl = OKRAJ_X + vel + 3;
    s.drawText(URL_WEBU, { x: xUrl, y: 34, size: 8, font: semi, color: INK });
    const wUrl = semi.widthOfTextAtSize(URL_WEBU, 8);
    // klikací odkaz přes logo i adresu
    const odkaz = pdf.context.register(
      pdf.context.obj({
        Type: 'Annot',
        Subtype: 'Link',
        Rect: [OKRAJ_X, 31, xUrl + wUrl, 34 + vel],
        Border: [0, 0, 0],
        A: { Type: 'Action', S: 'URI', URI: PDFString.of('https://dokuio.com') },
      }),
    );
    s.node.addAnnot(odkaz);
    const cislo = `${i + 1} / ${strany.length}`;
    // patička: když se nevejde na řádek, zalomí se na dva (po úsecích „ · “)
    const xText = xUrl + wUrl + 8;
    const pravyOkraj = A4[0] - OKRAJ_X - (posledni ? QR + 8 : 0);
    const sirka = pravyOkraj - reg.widthOfTextAtSize(cislo, 7) - 12 - xText;
    const useky = t(`${d.paticka} · ${datum}`).split(' · ');
    const radky: string[] = [];
    let r = '';
    for (const u of useky) {
      const zk = r ? `${r} · ${u}` : u;
      if (r && reg.widthOfTextAtSize(zk, 6.5) > sirka) {
        radky.push(r);
        r = u;
      } else r = zk;
    }
    if (r) radky.push(r);
    const yPrvni = radky.length > 1 ? 38.5 : 34.5;
    radky.slice(0, 2).forEach((radek, j) =>
      s.drawText(radek, { x: xText, y: yPrvni - j * 8, size: 6.5, font: reg, color: SEDA }),
    );
    s.drawText(cislo, { x: pravyOkraj - reg.widthOfTextAtSize(cislo, 7), y: 34, size: 7, font: reg, color: SEDA });
  });

  return pdf.save();
}
