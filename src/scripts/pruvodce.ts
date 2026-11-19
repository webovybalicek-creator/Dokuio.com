/**
 * Klientská logika průvodce. Vše běží v prohlížeči: údaje se nikam neodesílají,
 * rozpracovaná smlouva se pamatuje jen v localStorage tohoto prohlížeče.
 */
import type { Data, Sablona } from '../sablony/typy';
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
}

const VIN = /^[A-HJ-NPR-Z0-9]{17}$/i;

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
        ? `VIN má obvykle 17 znaků bez písmen I, O a Q (teď ${v.length}). Zkontrolujte ho – do smlouvy ho zapíšeme tak, jak je.`
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
    stavEl.textContent = `Vyplněno ${dok.vyplneno} z ${dok.celkem} údajů${dok.upraveno ? ' · text upraven' : ''}`;
    const souhrn = koren.querySelector<HTMLElement>('[data-souhrn]');
    if (souhrn) {
      const zbyva = dok.celkem - dok.vyplneno;
      souhrn.textContent =
        zbyva === 0
          ? 'Všechny údaje jsou vyplněné. Smlouva je připravená k tisku a podpisu.'
          : `Vyplněno ${dok.vyplneno} z ${dok.celkem} údajů. Zbylých ${zbyva} zůstane jako linky k doplnění rukou.`;
    }
    if (otevrenyEditor) otevriEditor(otevrenyEditor);
  };

  let naplanovano = false;
  const prekresli = () => {
    if (naplanovano) return;
    naplanovano = true;
    requestAnimationFrame(() => {
      naplanovano = false;
      vykresli();
    });
  };

  form.addEventListener('input', () => {
    nactiFormular();
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
      <textarea rows="5" aria-label="Text odstavce"></textarea>
      <p class="editor__tip">Tečky „……“ se ve smlouvě změní na linku k doplnění rukou.</p>
      <div class="editor__akce">
        <button type="button" class="btn btn--primarni btn--maly" data-ed="ulozit">Uložit</button>
        <button type="button" class="btn btn--duch btn--maly" data-ed="zrusit">Zrušit</button>
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
    if (t.closest('[data-dal]')) ukazKrok(stav.krok + 1);
    else if (t.closest('[data-zpet]')) ukazKrok(stav.krok - 1);
    else if (t.closest('[data-skok]')) ukazKrok(Number(t.closest<HTMLElement>('[data-skok]')!.dataset.skok));
    else if (t.closest('[data-smazat]')) {
      if (!confirm('Opravdu smazat všechny vyplněné údaje a úpravy textu?')) return;
      stav = { data: {}, upravy: {}, krok: 0 };
      form.reset();
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
    tl.textContent = 'Připravuji…';
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
    } catch (err) {
      console.error(err);
      alert('Soubor se nepodařilo vytvořit. Zkuste to prosím znovu, případně v jiném prohlížeči.');
    } finally {
      tl.disabled = false;
      tl.textContent = text;
    }
  });

  /* ---------------------------------------------------------- start */
  naplnFormular();
  nactiFormular();
  podminenaPole();
  kontrolaVin();
  vykresli();
  ukazKrok(stav.krok ?? 0, false);
  // Bez dat na startu nic nevyplněného nehlásit jako chybu
  if (Object.values(stav.data).every(prazdne)) stav.krok = 0;
}
