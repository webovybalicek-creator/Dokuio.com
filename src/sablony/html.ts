/** HTML náhled dokumentu – stejná struktura jako PDF, styly v src/styles/dokument.css */
import type { Dokument, OdstavecDok, Radek, Usek } from './dokument';
import { texty, type Texty } from '../i18n';

type TD = Texty['dokument'];

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function useky(u: Usek[], T: TD): string {
  return u
    .map((x) => {
      const ref = x.pole ? ` data-jdi="${x.pole}"` : '';
      if (x.t === 'linka') return `<span class="dok__linka" style="--w:${x.sirka}ch" aria-label="${T.kDoplneni}"${ref}></span>`;
      if (x.t === 'ctverec')
        return `<span class="dok__ctverec${x.zaskrtnuto ? ' dok__ctverec--ano' : ''}" aria-hidden="true"${ref}></span>`;
      const t = esc(x.text);
      if (x.vyplneno) return `<mark class="dok__hodnota"${ref}>${t}</mark>`;
      return x.tucne ? `<strong>${t}</strong>` : t;
    })
    .join('');
}

function radek(r: Radek, T: TD, cislo?: string): string {
  const cls = r.uroven ? 'dok__radek dok__radek--vycet' : 'dok__radek';
  const c = cislo !== undefined ? `<span class="dok__cislo">${cislo}</span>` : '';
  return `<p class="${cls}">${c}<span>${useky(r.useky, T)}</span></p>`;
}


function odstavec(o: OdstavecDok, sOvladanim: boolean, sCisly: boolean, T: TD): string {
  const STITKY: Record<string, string> = { upraveno: T.upraveno, vlastni: T.vlastni, smazano: T.smazano };
  if (o.stav === 'smazano' && !sOvladanim) return '';
  const telo = o.radky.map((r, i) => radek(r, T, sCisly ? (i === 0 ? (o.cislo ?? '') : '') : undefined)).join('');
  if (!sOvladanim) return telo;
  const tl = (akce: string, text: string) =>
    `<button type="button" class="odst__tl" data-akce="${akce}" data-id="${o.id}">${text}</button>`;
  const ovladani =
    o.stav === 'smazano'
      ? tl('vratit', T.vratit)
      : o.stav === 'upraveno'
        ? tl('upravit', T.upravit) + tl('vratit', T.puvodni)
        : o.stav === 'vlastni'
          ? tl('upravit', T.upravit) + tl('smazat', T.smazat)
          : tl('upravit', T.upravit) + tl('smazat', T.smazat);
  const stitek = STITKY[o.stav] ? `<span class="odst__stitek">${STITKY[o.stav]}</span>` : '';
  return `<div class="odst odst--${o.stav}" data-id="${o.id}">${telo}<div class="odst__ovladani">${stitek}${ovladani}</div></div>`;
}

export function dokumentHtml(d: Dokument, moznostiUprav = false): string {
  const T = texty(d.jazyk).dokument;
  return [
    `<div class="dok__hlava"><h2 class="dok__nazev">${esc(d.nazev)}</h2><p class="dok__pod">${esc(d.podnadpis)}</p></div>`,
    d.uvod.length ? `<p class="dok__uvod">${useky(d.uvod, T)}</p>` : '',
    ...d.bloky.map((b) => {
      const sCisly = b.odstavce.some((o) => o.cislo);
      const vysv =
        moznostiUprav && b.vysvetleni
          ? `<details class="dok__vysvetleni"><summary>${T.coToZnamena}</summary><p>${esc(b.vysvetleni)}</p></details>`
          : '';
      return `<section class="dok__clanek"><h3>${esc(b.nadpis)}</h3>${vysv}${b.odstavce
        .map((o) => odstavec(o, moznostiUprav, sCisly, T))
        .join('')}</section>`;
    }),
    moznostiUprav
      ? `<p class="dok__pridat"><button type="button" class="odst__tl odst__tl--pridat" data-akce="pridat">${T.pridat}</button></p>`
      : '',
    `<p class="dok__misto">${d.mistoDne[0]} ${useky(d.misto, T)} ${d.mistoDne[1]} ${useky(d.datum, T)}</p>`,
    `<div class="dok__podpisy"><div><span></span>${esc(d.podpisy.vlevo)}</div><div><span></span>${esc(d.podpisy.vpravo)}</div></div>`,
  ].join('');
}
