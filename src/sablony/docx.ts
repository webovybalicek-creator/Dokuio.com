/**
 * Export dokumentu do Wordu (DOCX). Uživatel si v něm může upravit úplně cokoli.
 * Linky k doplnění jsou tečky, zaškrtávací pole znak ☐ / ☒.
 */
import {
  AlignmentType,
  Document,
  Footer,
  Packer,
  Paragraph,
  TabStopType,
  TextRun,
  ImageRun,
  ExternalHyperlink,
  type ParagraphChild,
} from 'docx';
import type { Dokument, Usek } from './dokument';

const PISMO = 'Calibri';
const VEL = 21; // půlbody → 10,5 pt
const ODSAZENI = 360; // twipy (0,25")

function behy(useky: Usek[]): ParagraphChild[] {
  return useky.map((u) => {
    if (u.t === 'linka') return new TextRun({ text: '.'.repeat(Math.max(8, Math.round(u.sirka * 1.6))), color: '8A96A8' });
    if (u.t === 'ctverec') return new TextRun({ text: u.zaskrtnuto ? '☒ ' : '☐ ' });
    return new TextRun({ text: u.text, bold: u.tucne });
  });
}

export async function dokumentDocx(
  d: Dokument,
  podpisy: { vlevo?: Uint8Array; vpravo?: Uint8Array } = {},
  logo?: Uint8Array,
): Promise<Blob> {
  const deti: Paragraph[] = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
      children: [new TextRun({ text: d.nazev.toUpperCase(), bold: true, size: 32 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 360 },
      children: [new TextRun({ text: d.podnadpis, size: 17, color: '64748D' })],
    }),
  ];

  if (d.uvod.length) deti.push(new Paragraph({ children: behy(d.uvod), spacing: { after: 160 } }));

  for (const b of d.bloky) {
    deti.push(
      new Paragraph({
        keepNext: true,
        spacing: { before: 240, after: 100 },
        children: [new TextRun({ text: b.nadpis, bold: true, size: 22 })],
      }),
    );
    const sCisly = b.odstavce.some((o) => o.cislo);
    for (const o of b.odstavce) {
      if (o.stav === 'smazano') continue;
      o.radky.forEach((r, i) => {
        const vycet = r.uroven === 1;
        const cislo = i === 0 && o.cislo ? o.cislo : '';
        deti.push(
          new Paragraph({
            spacing: { after: vycet ? 40 : 80, line: 276 },
            indent: vycet
              ? { left: ODSAZENI * 2 }
              : sCisly
                ? { left: ODSAZENI, hanging: ODSAZENI }
                : undefined,
            tabStops: sCisly && !vycet ? [{ type: TabStopType.LEFT, position: ODSAZENI }] : undefined,
            children: [
              ...(sCisly && !vycet ? [new TextRun({ text: `${cislo}\t`, color: '64748D' })] : []),
              ...behy(r.useky),
            ],
          }),
        );
      });
    }
  }

  deti.push(
    new Paragraph({
      spacing: { before: 480, after: podpisy.vlevo || podpisy.vpravo ? 240 : 960 },
      children: [new TextRun('V '), ...behy(d.misto), new TextRun(' dne '), ...behy(d.datum)],
    }),
    ...(podpisy.vlevo || podpisy.vpravo
      ? [
          new Paragraph({
            tabStops: [{ type: TabStopType.LEFT, position: 6000 }],
            children: [
              ...(podpisy.vlevo
                ? [new ImageRun({ type: 'png', data: podpisy.vlevo, transformation: { width: 180, height: 60 } })]
                : []),
              new TextRun('\t'),
              ...(podpisy.vpravo
                ? [new ImageRun({ type: 'png', data: podpisy.vpravo, transformation: { width: 180, height: 60 } })]
                : []),
            ],
          }),
        ]
      : []),
    new Paragraph({
      tabStops: [{ type: TabStopType.RIGHT, position: 9000 }],
      children: [new TextRun('………………………………………\t………………………………………')],
    }),
    new Paragraph({
      tabStops: [{ type: TabStopType.CENTER, position: 1500 }, { type: TabStopType.CENTER, position: 7500 }],
      children: [new TextRun({ text: `\t${d.podpisy.vlevo}\t${d.podpisy.vpravo}`, color: '64748D', size: 18 })],
    }),
  );

  const doc = new Document({
    creator: 'Dokuio.com',
    title: d.nazev,
    description: d.podnadpis,
    styles: { default: { document: { run: { font: PISMO, size: VEL } } } },
    sections: [
      {
        properties: { page: { margin: { top: 1134, bottom: 1134, left: 1247, right: 1247 } } },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                children: [
                  ...(logo ? [new ImageRun({ type: 'png', data: logo, transformation: { width: 12, height: 12 } })] : []),
                  new TextRun({ text: ' ' }),
                  new ExternalHyperlink({
                    link: 'https://dokuio.com',
                    children: [new TextRun({ text: 'dokuio.com', bold: true, size: 16, color: '061B31' })],
                  }),
                  new TextRun({ text: `  ·  ${d.paticka}`, size: 13, color: '64748D' }),
                ],
              }),
            ],
          }),
        },
        children: deti,
      },
    ],
  });
  return Packer.toBlob(doc);
}

/** Varianta pro build (Node) – vrací bajty */
export async function dokumentDocxBajty(d: Dokument, logo?: Uint8Array): Promise<Uint8Array> {
  const blob = await dokumentDocx(d, {}, logo);
  return new Uint8Array(await blob.arrayBuffer());
}
