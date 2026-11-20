/** Odeslání vytvořeného PDF na e-mail přes /odeslat-email.php (jednorázově, server nic neukládá). */
import { texty } from '../i18n';

export interface EmailMeta {
  /** Jazyk e-mailu (jazyk země) */
  jazyk: string;
  /** Jazyk hlášek formuláře, když se liší (jazyková verze uk/en) */
  jazykUi?: string;
  zeme: string;
  nazev: string;
  soubor: string;
}

let aktivni: Promise<boolean> | undefined;
/** Je odesílání na serveru nastavené? (bez nastavení SMTP se formulář vůbec neukáže) */
const jeAktivni = () =>
  (aktivni ??= fetch('/odeslat-email.php?stav=1')
    .then((r) => (r.ok ? r.json() : { aktivni: false }))
    .then((j) => !!j.aktivni)
    .catch(() => false));

export function napojEmail(box: HTMLElement, ziskejPdf: () => Promise<Blob>, meta: EmailMeta, poOdeslani?: () => void) {
  const T = texty(meta.jazykUi ?? meta.jazyk).email;
  box.hidden = true;
  jeAktivni().then((ok) => (box.hidden = !ok));
  const vstup = box.querySelector<HTMLInputElement>('[data-email-adresa]')!;
  const tl = box.querySelector<HTMLButtonElement>('[data-email-odeslat]')!;
  const zprava = box.querySelector<HTMLElement>('[data-email-zprava]')!;
  const ukaz = (t: string, ok: boolean) => {
    zprava.textContent = t;
    zprava.dataset.stav = ok ? 'ok' : 'chyba';
    zprava.hidden = false;
  };
  try {
    vstup.value = localStorage.getItem('dokuio:email') ?? '';
  } catch {}

  const odeslat = async () => {
    const adresa = vstup.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(adresa)) {
      ukaz(T.neplatny, false);
      vstup.focus();
      return;
    }
    tl.disabled = true;
    const puvodni = tl.textContent;
    tl.textContent = T.odesilam;
    zprava.hidden = true;
    try {
      const fd = new FormData();
      fd.append('email', adresa);
      fd.append('web', box.querySelector<HTMLInputElement>('[data-email-past]')!.value);
      fd.append('jazyk', meta.jazyk);
      fd.append('zeme', meta.zeme);
      fd.append('nazev', meta.nazev);
      fd.append('soubor', meta.soubor);
      fd.append('pdf', await ziskejPdf(), `${meta.soubor}.pdf`);
      const r = await fetch('/odeslat-email.php', { method: 'POST', body: fd });
      if (r.ok) {
        ukaz(T.hotovo(adresa), true);
        try {
          localStorage.setItem('dokuio:email', adresa);
        } catch {}
        poOdeslani?.();
        window.dispatchEvent(new CustomEvent('dokuio:stazeno', { detail: { typ: 'email' } }));
      } else ukaz(r.status === 429 ? T.limit : r.status === 400 ? T.neplatny : T.chyba, false);
    } catch (err) {
      console.error(err);
      ukaz(T.chyba, false);
    } finally {
      tl.disabled = false;
      tl.textContent = puvodni;
    }
  };
  tl.addEventListener('click', odeslat);
  vstup.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      odeslat();
    }
  });
}
