/** Prázdné vzory PDF a DOCX generované při buildu (statické soubory s pevnou URL) */
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { Sablona } from '../sablony/typy';
import { sestavDokument } from '../sablony/dokument';
import { dokumentPdf } from '../sablony/pdf';
import { dokumentDocxBajty } from '../sablony/docx';

export async function vzorPdf(s: Sablona): Promise<Response> {
  const pisma = {
    regular: await readFile(join(process.cwd(), 'public/fonts/InterTight-Regular.ttf')),
    semibold: await readFile(join(process.cwd(), 'public/fonts/InterTight-SemiBold.ttf')),
  };
  const bajty = await dokumentPdf(sestavDokument(s, {}), pisma, { vytvoreno: new Date(s.aktualizovano) });
  return new Response(bajty, { headers: { 'Content-Type': 'application/pdf' } });
}

export async function vzorDocx(s: Sablona): Promise<Response> {
  const bajty = await dokumentDocxBajty(sestavDokument(s, {}));
  return new Response(bajty, {
    headers: { 'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
  });
}
