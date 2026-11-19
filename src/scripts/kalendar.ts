/** Připomínky do kalendáře jako soubor .ics (iCalendar, RFC 5545). Celodenní události s upozorněním den předem. */
import type { Pripominka } from '../sablony/typy';

const esc = (t: string) => t.replace(/\\/g, '\\\\').replace(/;/g, '\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
const den = (iso: string) => iso.replace(/-/g, '');
const dalsiDen = (iso: string) => {
  const [r, m, d] = iso.split('-').map(Number);
  const x = new Date(r, m - 1, d + 1);
  return `${x.getFullYear()}${String(x.getMonth() + 1).padStart(2, '0')}${String(x.getDate()).padStart(2, '0')}`;
};
/** Řádky delší než 75 oktetů se zalamují (zjednodušeně po znacích) */
const zalom = (radek: string) => radek.match(/.{1,70}/g)!.join('\r\n ');

export function pripominkyIcs(seznam: Pripominka[], meta: { nazevDokumentu: string; url: string }): string {
  const ted = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
  const udalosti = seznam.map((p, i) => {
    const denMesice = Number(p.datum.slice(8, 10));
    // Den 29.–31. v kratším měsíci → poslední den měsíce
    const dny = denMesice > 28 ? Array.from({ length: denMesice - 27 }, (_, k) => 28 + k).join(',') + ';BYSETPOS=-1' : String(denMesice);
    return [
      'BEGIN:VEVENT',
      `UID:${ted}-${i}-${Math.random().toString(36).slice(2)}@dokuio.com`,
      `DTSTAMP:${ted}`,
      `DTSTART;VALUE=DATE:${den(p.datum)}`,
      `DTEND;VALUE=DATE:${dalsiDen(p.datum)}`,
      ...(p.mesicne && p.mesicne > 1 ? [`RRULE:FREQ=MONTHLY;BYMONTHDAY=${dny};COUNT=${p.mesicne}`] : []),
      zalom(`SUMMARY:${esc(p.nazev)}`),
      zalom(`DESCRIPTION:${esc(`${p.popis ? `${p.popis}\n` : ''}${meta.nazevDokumentu} – ${meta.url}`)}`),
      'TRANSP:TRANSPARENT',
      'BEGIN:VALARM',
      'ACTION:DISPLAY',
      zalom(`DESCRIPTION:${esc(p.nazev)}`),
      'TRIGGER:-PT15H',
      'END:VALARM',
      'END:VEVENT',
    ].join('\r\n');
  });
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Dokuio//Pripominky//CS', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', ...udalosti, 'END:VCALENDAR', ''].join('\r\n');
}
