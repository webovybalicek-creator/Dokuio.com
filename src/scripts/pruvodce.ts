/**
 * Klientská logika průvodce. Vše běží v prohlížeči: údaje se nikam neodesílají,
 * rozpracovaná smlouva se pamatuje jen v localStorage tohoto prohlížeče.
 */
import type { Data, Sablona } from '../sablony/typy';
import { texty } from '../i18n';
import {
  poleAktivni,
  prazdne,
  radkyNaText,
  sestavDokument,
  vsechnaPole,
  type Dokument,
  type Upravy,
} from '../sablony/dokument';
import { dokumentHtml } from '../sablony/html';

interface Stav {
  data: Data;
  upravy: Upravy;
  krok: number;
  /** Pole, která uživatel sám změnil – těm už nepřepisujeme výchozí hodnotu */
  rucne?: string[];
}

const VIN = /^[A-HJ-NPR-Z0-9]{17}$/i;

const dnes = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

/** „Nerudova 12, 251 01 Říčany“ → „Říčany“; „Praha 4 – Chodov“ → „Praha 4“ */
export function obecZAdresy(adresa: string): string {
  const a = adresa.trim().replace(/\s+/g, ' ');
  if (!a) return '';
  const psc = /\d{3} ?\d{2},? ([^,\d][^,]*)/.exec(a);
  let obec = psc?.[1] ?? '';
  if (!obec) {
    // bez PSČ: poslední část bez čísla („Hlavní 5, Říčany“), výjimkou jsou pražské obvody
    const casti = a.split(',').map((x) => x.trim());
    if (casti.length < 2) return '';
    obec = casti.filter((x) => !/\d/.test(x) || /^Praha \d{1,2}$/.test(x)).pop() ?? '';
  }
  return obec.split(/ [-–] /)[0].trim();
}

const omezitPohyb = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function spustPruvodce(s: Sablona) {
  const koren = document.querySelector<HTMLElement>('[data-pruvodce]');
  if (!koren) return;
  const form = koren.querySelector<HTMLFormElement>('form')!;
  const nahled = koren.querySelector<HTMLElement>('[data-nahled]')!;
  const stavEl = koren.querySelector<HTMLElement>('[data-stav]')!;
  const kroky = [...koren.querySelectorAll<HTMLFieldSetElement>('fieldset[data-krok]')];
  const navTl = [...koren.querySelectorAll<HTMLButtonElement>('[data-skok]')];
  const pole = vsechnaPole(s);
  const klic = `dokuio:${s.kod}:${s.verze}`;
  const TX = texty(s.jazyk);
  const T = TX.pruvodce;
  const w = s.slovo ?? TX.slovo;

  let stav: Stav = { data: {}, upravy: {}, krok: 0 };
  try {
    const ulozeno = localStorage.getItem(klic);
    if (ulozeno) stav = { ...stav, ...JSON.parse(ulozeno) };
  } catch {
    /* prohlížeč bez úložiště – průvodce funguje i tak */
  }
  const uloz = () => {
    try {
      localStorage.setItem(klic, JSON.stringify(stav));
    } catch {
      /* ignorovat */
    }
  };

  /* ---------------------------------------------------------- formulář ↔ data */
  const naplnFormular = () => {
    for (const [id, v] of Object.entries(stav.data)) {
      const prvky = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(`[name="${id}"]`);
      prvky.forEach((el) => {
        if (el instanceof HTMLInputElement && (el.type === 'radio' || el.type === 'checkbox')) {
          el.checked = Array.isArray(v) ? v.includes(el.value) : v === el.value;
        } else el.value = typeof v === 'string' ? v : '';
      });
    }
  };

  const nactiFormular = () => {
    const data: Data = {};
    for (const p of pole.values()) {
      if (p.typ === 'vice') {
        data[p.id] = [...form.querySelectorAll<HTMLInputElement>(`[name="${p.id}"]:checked`)].map((x) => x.value);
      } else if (p.typ === 'volba') {
        data[p.id] = form.querySelector<HTMLInputElement>(`[name="${p.id}"]:checked`)?.value ?? '';
      } else {
        data[p.id] = form.querySelector<HTMLInputElement>(`[name="${p.id}"]`)?.value ?? '';
      }
    }
    stav.data = data;
  };

  const podminenaPole = () => {
    koren.querySelectorAll<HTMLElement>('[data-kdyz]').forEach((el) => {
      const p = pole.get(el.dataset.pole!);
      if (p) el.hidden = !poleAktivni(p, stav.data);
    });
  };

  const kontrolaVin = () => {
    koren.querySelectorAll<HTMLInputElement>('.vstup--vin').forEach((el) => {
      const var_ = el.closest('.pole')!.querySelector<HTMLElement>('.pole__varovani')!;
      const v = el.value.replace(/\s/g, '');
      const spatne = v.length > 0 && !VIN.test(v);
      var_.hidden = !spatne;
      var_.textContent = spatne
        ? T.vin(v.length)
        : '';
    });
  };

  /* ---------------------------------------------------------- náhled */
  let dok: Dokument;
  let otevrenyEditor: string | null = null;

  const vykresli = () => {
    dok = sestavDokument(s, stav.data, stav.upravy);
    // „Co to znamená?“ nechat otevřené i po překreslení
    const otevrene = [...nahled.querySelectorAll('details.dok__vysvetleni')].map((d) => (d as HTMLDetailsElement).open);
    nahled.innerHTML = dokumentHtml(dok, true);
    nahled.querySelectorAll<HTMLDetailsElement>('details.dok__vysvetleni').forEach((d, i) => (d.open = !!otevrene[i]));
    stavEl.textContent = T.stav(dok.vyplneno, dok.celkem, dok.upraveno);
    if (listaStav) listaStav.textContent = `${dok.vyplneno}/${dok.celkem}`;
    vykresliChybi();
    const souhrn = koren.querySelector<HTMLElement>('[data-souhrn]');
    if (souhrn) {
      const zbyva = dok.celkem - dok.vyplneno;
      souhrn.textContent =
        zbyva === 0
          ? T.vseVyplneno
          : T.zbyva(dok.vyplneno, dok.celkem, zbyva);
    }
    if (otevrenyEditor) otevriEditor(otevrenyEditor);
  };

  /* ---------------------------------------------------------- kontrola před stažením */
  const chybiEl = koren.querySelector<HTMLElement>('[data-chybi]');
  const listaStav = koren.querySelector<HTMLElement>('[data-lista-stav]');
  const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

  function vykresliChybi() {
    if (!chybiEl) return;
    let pocet = 0;
    const skupiny = s.kroky
      .map((k, i) => {
        const polozky = k.pole
          .filter((p) => poleAktivni(p, stav.data))
          .flatMap((p) => {
            const v = stav.data[p.id];
            if (prazdne(v)) return [{ p, text: p.popis }];
            if (p.typ === 'vin' && !VIN.test(String(v).replace(/\s/g, ''))) return [{ p, text: `${p.popis} – zkontrolujte`, chyba: true }];
            return [];
          });
        pocet += polozky.length;
        if (!polozky.length) return '';
        const tl = polozky
          .map(
            (x) =>
              `<li><button type="button" class="chybi__tl${'chyba' in x ? ' chybi__tl--chyba' : ''}" data-jdi="${x.p.id}">${esc(x.text)}</button></li>`,
          )
          .join('');
        return `<div class="chybi__skupina"><p class="chybi__krok">${i + 1}. ${esc(k.nazev)}</p><ul>${tl}</ul></div>`;
      })
      .join('');
    chybiEl.hidden = pocet === 0;
    chybiEl.innerHTML = pocet
      ? `<p class="chybi__nadpis">${T.chybiNadpis(pocet)}</p>
         <p class="chybi__popis">${T.chybiPopis(w)}</p>
         ${skupiny}`
      : '';
  }

  /** Přejde na krok s daným polem, posune se k němu a krátce ho zvýrazní */
  function jdiNaPole(id: string) {
    let p = pole.get(id);
    // skryté podmíněné pole → přejít na otázku, která ho zobrazuje
    if (p && !poleAktivni(p, stav.data) && p.zobrazitKdyz) p = pole.get(p.zobrazitKdyz.pole) ?? p;
    if (!p) return;
    const i = s.kroky.findIndex((k) => k.pole.some((x) => x.id === p!.id));
    if (i < 0) return;
    zavriNahled(false);
    ukazKrok(i, false);
    const el = koren.querySelector<HTMLElement>(`.pole[data-pole="${p.id}"]`);
    if (!el) return;
    el.scrollIntoView({ block: 'center', behavior: omezitPohyb() ? 'auto' : 'smooth' });
    el.querySelector<HTMLElement>('input, textarea')?.focus({ preventScroll: true });
    el.classList.remove('pole--zvyraznit');
    void el.offsetWidth;
    el.classList.add('pole--zvyraznit');
  }

  /* ---------------------------------------------------------- náhled na mobilu (spodní panel) */
  const listaTl = koren.querySelector<HTMLButtonElement>('[data-nahled-otevrit]');
  const zavritTl = koren.querySelector<HTMLButtonElement>('[data-nahled-zavrit]');
  function otevriNahled() {
    koren.classList.add('pruvodce--nahled');
    document.documentElement.classList.add('bez-posunu');
    listaTl?.setAttribute('aria-expanded', 'true');
    zavritTl?.focus({ preventScroll: true });
  }
  function zavriNahled(vratitFokus = true) {
    if (!koren.classList.contains('pruvodce--nahled')) return;
    koren.classList.remove('pruvodce--nahled');
    document.documentElement.classList.remove('bez-posunu');
    listaTl?.setAttribute('aria-expanded', 'false');
    if (vratitFokus) listaTl?.focus({ preventScroll: true });
  }
  listaTl?.addEventListener('click', otevriNahled);
  zavritTl?.addEventListener('click', () => zavriNahled());
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') zavriNahled();
  });
  // Lišta jen když je průvodce na obrazovce
  if (listaTl && 'IntersectionObserver' in window) {
    new IntersectionObserver(([z]) => listaTl.classList.toggle('nahled-lista--videt', z.isIntersecting), {
      rootMargin: '0px 0px -40% 0px',
    }).observe(koren.querySelector('.pruvodce__formular')!);
  }

  let naplanovano = false;
  const prekresli = () => {
    if (naplanovano) return;
    naplanovano = true;
    requestAnimationFrame(() => {
      naplanovano = false;
      vykresli();
    });
  };

  /* ---------------------------------------------------------- chytré výchozí hodnoty */
  const aplikujVychozi = () => {
    const rucne = new Set(stav.rucne ?? []);
    for (const p of pole.values()) {
      if (!p.vychozi || rucne.has(p.id)) continue;
      const v = p.vychozi === 'dnes' ? dnes() : obecZAdresy(String(stav.data[p.vychozi.obecZ] ?? ''));
      if (stav.data[p.id] === v) continue;
      stav.data[p.id] = v;
      const el = form.querySelector<HTMLInputElement>(`[name="${p.id}"]`);
      if (el) el.value = v;
    }
  };

  form.addEventListener('input', (e) => {
    const jmeno = (e.target as HTMLInputElement).name;
    if (jmeno && pole.get(jmeno)?.vychozi && !stav.rucne?.includes(jmeno)) stav.rucne = [...(stav.rucne ?? []), jmeno];
    nactiFormular();
    aplikujVychozi();
    podminenaPole();
    uloz();
    prekresli();
  });
  form.addEventListener('focusout', (e) => {
    if ((e.target as HTMLElement).classList.contains('vstup--vin')) kontrolaVin();
  });

  /* ---------------------------------------------------------- úpravy textu */
  const najdiOdstavec = (id: string) => dok.bloky.flatMap((b) => b.odstavce).find((o) => o.id === id);

  function otevriEditor(id: string) {
    const el = nahled.querySelector<HTMLElement>(`.odst[data-id="${id}"]`);
    const novy = id === 'novy';
    const cil = novy ? nahled.querySelector<HTMLElement>('.dok__pridat') : el;
    if (!cil) return;
    otevrenyEditor = id;
    const vlastniIdx = id.startsWith('v') ? Number(id.slice(1)) : -1;
    const vychozi = novy
      ? ''
      : vlastniIdx >= 0
        ? (stav.upravy.vlastni?.[vlastniIdx] ?? '')
        : (stav.upravy.text?.[id] ?? radkyNaText(najdiOdstavec(id)?.radky ?? []));
    const editor = document.createElement('div');
    editor.className = 'editor';
    editor.innerHTML = `
      <textarea rows="5" aria-label="${TX.dokument.upravit}"></textarea>
      <p class="editor__tip">${T.editorTip(w)}</p>
      <div class="editor__akce">
        <button type="button" class="btn btn--primarni btn--maly" data-ed="ulozit">${T.ulozit}</button>
        <button type="button" class="btn btn--duch btn--maly" data-ed="zrusit">${T.zrusit}</button>
      </div>`;
    const ta = editor.querySelector('textarea')!;
    ta.value = vychozi;
    cil.replaceWith(editor);
    ta.focus();
    ta.setSelectionRange(ta.value.length, ta.value.length);
    editor.addEventListener('click', (e) => {
      const akce = (e.target as HTMLElement).closest<HTMLElement>('[data-ed]')?.dataset.ed;
      if (!akce) return;
      if (akce === 'ulozit') {
        const text = ta.value.trim();
        if (novy) {
          if (text) stav.upravy.vlastni = [...(stav.upravy.vlastni ?? []), text];
        } else if (vlastniIdx >= 0) {
          const v = [...(stav.upravy.vlastni ?? [])];
          if (text) v[vlastniIdx] = text;
          else v.splice(vlastniIdx, 1);
          stav.upravy.vlastni = v;
        } else {
          stav.upravy.text = { ...stav.upravy.text, [id]: text };
          if (!text) stav.upravy.smazane = [...new Set([...(stav.upravy.smazane ?? []), id])];
        }
        uloz();
      }
      otevrenyEditor = null;
      vykresli();
    });
  }

  nahled.addEventListener('click', (e) => {
    const tl = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-akce]');
    if (!tl) return;
    const id = tl.dataset.id ?? '';
    const u = stav.upravy;
    switch (tl.dataset.akce) {
      case 'upravit':
        otevriEditor(id);
        return;
      case 'pridat':
        otevriEditor('novy');
        return;
      case 'smazat':
        if (id.startsWith('v')) {
          const v = [...(u.vlastni ?? [])];
          v.splice(Number(id.slice(1)), 1);
          u.vlastni = v;
        } else u.smazane = [...new Set([...(u.smazane ?? []), id])];
        break;
      case 'vratit': {
        u.smazane = (u.smazane ?? []).filter((x) => x !== id);
        if (u.text) {
          const { [id]: _, ...zbytek } = u.text;
          u.text = zbytek;
        }
        break;
      }
    }
    uloz();
    vykresli();
  });

  /* ---------------------------------------------------------- kroky */
  const ukazKrok = (i: number, posun = true) => {
    stav.krok = Math.max(0, Math.min(i, kroky.length - 1));
    kroky.forEach((k, j) => {
      k.hidden = j !== stav.krok;
      if (j === stav.krok) {
        k.classList.remove('krok--vstup');
        void k.offsetWidth; // restart animace
        k.classList.add('krok--vstup');
      }
    });
    navTl.forEach((b, j) => {
      if (j === stav.krok) b.setAttribute('aria-current', 'step');
      else b.removeAttribute('aria-current');
      b.classList.toggle('hotovo', j < stav.krok);
    });
    uloz();
    if (posun) {
      const top = koren.getBoundingClientRect().top + window.scrollY - 16;
      if (window.scrollY > top) window.scrollTo({ top });
      kroky[stav.krok].querySelector<HTMLElement>('input, textarea, button')?.focus({ preventScroll: true });
    }
  };

  koren.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const jdi = t.closest<HTMLElement>('[data-jdi]');
    if (jdi && !t.closest('.editor')) jdiNaPole(jdi.dataset.jdi!);
    else if (t.closest('[data-dal]')) ukazKrok(stav.krok + 1);
    else if (t.closest('[data-zpet]')) ukazKrok(stav.krok - 1);
    else if (t.closest('[data-skok]')) ukazKrok(Number(t.closest<HTMLElement>('[data-skok]')!.dataset.skok));
    else if (t.closest('[data-smazat]')) {
      if (!confirm(T.potvrditSmazani)) return;
      stav = { data: {}, upravy: {}, krok: 0 };
      form.reset();
      aplikujVychozi();
      try {
        localStorage.removeItem(klic);
      } catch {
        /* ignorovat */
      }
      podminenaPole();
      vykresli();
      ukazKrok(0);
    }
  });

  /* ---------------------------------------------------------- podpis na zařízení */
  // Podpisy drží jen paměť stránky (ne localStorage) – jsou to osobní údaje.
  const podpisy: { vlevo?: Uint8Array; vpravo?: Uint8Array } = {};
  koren.querySelectorAll<HTMLCanvasElement>('canvas[data-podpis]').forEach((cv) => {
    const strana = cv.dataset.podpis as 'vlevo' | 'vpravo';
    const ctx = cv.getContext('2d')!;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#0b1f5c';
    let kreslim = false;
    let posledni: { x: number; y: number; w: number } | null = null;
    const bod = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      return { x: ((e.clientX - r.left) / r.width) * cv.width, y: ((e.clientY - r.top) / r.height) * cv.height };
    };
    const ulozPodpis = () =>
      cv.toBlob(async (b) => {
        if (b) podpisy[strana] = new Uint8Array(await b.arrayBuffer());
      }, 'image/png');
    cv.addEventListener('pointerdown', (e) => {
      kreslim = true;
      cv.setPointerCapture(e.pointerId);
      const p = bod(e);
      posledni = { ...p, w: 4 };
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = ctx.strokeStyle;
      ctx.fill();
    });
    cv.addEventListener('pointermove', (e) => {
      if (!kreslim || !posledni) return;
      const p = bod(e);
      const vzd = Math.hypot(p.x - posledni.x, p.y - posledni.y);
      // rychlejší tah = tenčí čára, jako u pera
      const tlak = e.pressure && e.pointerType === 'pen' ? e.pressure : 0.5;
      const w = Math.max(1.6, Math.min(5, 6 - vzd / 6) * (0.6 + tlak * 0.8));
      ctx.lineWidth = (posledni.w + w) / 2;
      ctx.beginPath();
      ctx.moveTo(posledni.x, posledni.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      posledni = { ...p, w };
    });
    const konec = () => {
      if (!kreslim) return;
      kreslim = false;
      posledni = null;
      ulozPodpis();
    };
    cv.addEventListener('pointerup', konec);
    cv.addEventListener('pointercancel', konec);
    koren.querySelector(`[data-podpis-smazat="${strana}"]`)?.addEventListener('click', () => {
      ctx.clearRect(0, 0, cv.width, cv.height);
      delete podpisy[strana];
    });
  });

  /* ---------------------------------------------------------- stažení */
  const stahni = (blob: Blob, nazev: string) => {
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), { href: url, download: nazev });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10_000);
  };

  document.addEventListener('click', async (e) => {
    const tl = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-stahnout]');
    if (!tl || tl.disabled) return;
    const typ = tl.dataset.stahnout;
    const text = tl.textContent;
    tl.disabled = true;
    tl.textContent = T.pripravuji;
    try {
      const d = sestavDokument(s, stav.data, stav.upravy);
      if (typ === 'pdf') {
        const [{ dokumentPdf }, regular, semibold] = await Promise.all([
          import('../sablony/pdf'),
          fetch('/fonts/InterTight-Regular.ttf').then((r) => r.arrayBuffer()),
          fetch('/fonts/InterTight-SemiBold.ttf').then((r) => r.arrayBuffer()),
        ]);
        const bajty = await dokumentPdf(d, { regular, semibold }, { podpisy });
        stahni(new Blob([bajty], { type: 'application/pdf' }), `${s.souborPdf}.pdf`);
      } else {
        const [{ dokumentDocx }, logo] = await Promise.all([
          import('../sablony/docx'),
          fetch('/fonts/logo-znacka.png')
            .then((r) => r.arrayBuffer())
            .then((b) => new Uint8Array(b))
            .catch(() => undefined),
        ]);
        stahni(await dokumentDocx(d, podpisy, logo), `${s.souborPdf}.docx`);
      }
      koren.querySelector<HTMLElement>('[data-co-dal]')!.hidden = false;
      window.dispatchEvent(new CustomEvent('dokuio:stazeno', { detail: { typ } }));
    } catch (err) {
      console.error(err);
      alert(T.chybaSouboru);
    } finally {
      tl.disabled = false;
      tl.textContent = text;
    }
  });

  /* ---------------------------------------------------------- převzetí údajů z jiné šablony */
  const prevzitEl = koren.querySelector<HTMLElement>('[data-prevzit]');
  if (s.prevzit && prevzitEl) {
    const odmitnutoKlic = `dokuio:prevzit-ne:${s.kod}`;
    let zdroj: Data | null = null;
    try {
      if (!localStorage.getItem(odmitnutoKlic)) {
        const klicZdroje = Object.keys(localStorage)
          .filter((k) => k.startsWith(`dokuio:${s.prevzit!.kod}:`))
          .sort()
          .pop();
        if (klicZdroje) zdroj = JSON.parse(localStorage.getItem(klicZdroje)!).data ?? null;
      }
    } catch {
      zdroj = null;
    }
    const nove = zdroj ? s.prevzit.mapuj(zdroj) : {};
    const maCoPrevzit = Object.values(nove).some((v) => !prazdne(v));
    const uzVyplneno = Object.entries(stav.data).some(([k, v]) => !pole.get(k)?.vychozi && !prazdne(v));
    if (maCoPrevzit && !uzVyplneno) {
      prevzitEl.hidden = false;
      prevzitEl.addEventListener('click', (e) => {
        const t = e.target as HTMLElement;
        if (t.closest('[data-prevzit-ano]')) {
          const rucne = new Set(stav.rucne ?? []);
          for (const [k, v] of Object.entries(nove)) {
            if (prazdne(v) || !pole.has(k)) continue;
            stav.data[k] = v;
            if (pole.get(k)!.vychozi) rucne.add(k);
          }
          stav.rucne = [...rucne];
          naplnFormular();
          aplikujVychozi();
          podminenaPole();
          kontrolaVin();
          uloz();
          vykresli();
          prevzitEl.hidden = true;
        } else if (t.closest('[data-prevzit-ne]')) {
          prevzitEl.hidden = true;
          try {
            localStorage.setItem(odmitnutoKlic, '1');
          } catch {
            /* ignorovat */
          }
        }
      });
    }
  }

  /* ---------------------------------------------------------- start */
  naplnFormular();
  nactiFormular();
  aplikujVychozi();
  uloz();
  podminenaPole();
  kontrolaVin();
  vykresli();
  ukazKrok(stav.krok ?? 0, false);
  // Bez dat na startu nic nevyplněného nehlásit jako chybu
  if (Object.values(stav.data).every(prazdne)) stav.krok = 0;
}
