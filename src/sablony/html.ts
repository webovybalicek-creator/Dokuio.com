/** HTML náhled dokumentu – stejná struktura jako PDF, styly v src/styles/dokument.css */
import type { Dokument, OdstavecDok, Radek, Usek } from './dokument';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function useky(u: Usek[]): string {
  return u
    .map((x) => {
      if (x.t === 'linka') return `<span class="dok__linka" style="--w:${x.sirka}ch" aria-label="k doplnění"></span>`;
      if (x.t === 'ctverec')
        return `<span class="dok__ctverec${x.zaskrtnuto ? ' dok__ctverec--ano' : ''}" aria-hidden="true"></span>`;
      const t = esc(x.text);
      if (x.vyplneno) return `<mark class="dok__hodnota">${t}</mark>`;
      return x.tucne ? `<strong>${t}</strong>` : t;
    })
    .join('');
}

function radek(r: Radek, cislo?: string): string {
  const cls = r.uroven ? 'dok__radek dok__radek--vycet' : 'dok__radek';
  const c = cislo !== undefined ? `<span class="dok__cislo">${cislo}</span>` : '';
  return `<p class="${cls}">${c}<span>${useky(r.useky)}</span></p>`;
}

const STITKY: Record<string, string> = {
  upraveno: 'Upraveno',
  vlastni: 'Vlastní text',
  smazano: 'Smazáno',
};

function odstavec(o: OdstavecDok, sOvladanim: boolean, sCisly: boolean): string {
  if (o.stav === 'smazano' && !sOvladanim) return '';
  const telo = o.radky.map((r, i) => radek(r, sCisly ? (i === 0 ? (o.cislo ?? '') : '') : undefined)).join('');
  if (!sOvladanim) return telo;
  const tl = (akce: string, text: string) =>
    `<button type="button" class="odst__tl" data-akce="${akce}" data-id="${o.id}">${text}</button>`;
  const ovladani =
    o.stav === 'smazano'
      ? tl('vratit', 'Vrátit')
      : o.stav === 'upraveno'
        ? tl('upravit', 'Upravit') + tl('vratit', 'Původní znění')
        : o.stav === 'vlastni'
          ? tl('upravit', 'Upravit') + tl('smazat', 'Smazat')
          : tl('upravit', 'Upravit') + tl('smazat', 'Smazat');
  const stitek = STITKY[o.stav] ? `<span class="odst__stitek">${STITKY[o.stav]}</span>` : '';
  return `<div class="odst odst--${o.stav}" data-id="${o.id}">${telo}<div class="odst__ovladani">${stitek}${ovladani}</div></div>`;
}

export function dokumentHtml(d: Dokument, moznostiUprav = false): string {
  return [
    `<div class="dok__hlava"><h2 class="dok__nazev">${esc(d.nazev)}</h2><p class="dok__pod">${esc(d.podnadpis)}</p></div>`,
    d.uvod.length ? `<p class="dok__uvod">${useky(d.uvod)}</p>` : '',
    ...d.bloky.map((b) => {
      const sCisly = b.odstavce.some((o) => o.cislo);
      return `<section class="dok__clanek"><h3>${esc(b.nadpis)}</h3>${b.odstavce
        .map((o) => odstavec(o, moznostiUprav, sCisly))
        .join('')}</section>`;
    }),
    moznostiUprav
      ? `<p class="dok__pridat"><button type="button" class="odst__tl odst__tl--pridat" data-akce="pridat">+ Přidat vlastní ustanovení</button></p>`
      : '',
    `<p class="dok__misto">V ${useky(d.misto)} dne ${useky(d.datum)}</p>`,
    `<div class="dok__podpisy"><div><span></span>${esc(d.podpisy.vlevo)}</div><div><span></span>${esc(d.podpisy.vpravo)}</div></div>`,
  ].join('');
}
