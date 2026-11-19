export const SITE = {
  nazev: 'Dokuio',
  domena: 'dokuio.com',
  url: 'https://dokuio.com',
  email: 'info@dokuio.com',
  /**
   * Dokud je false, všechny stránky mají noindex a robots.txt blokuje roboty.
   * Přepnout na true při spuštění webu.
   */
  indexovat: true,
  /** Google Analytics 4 – ID měření (G-XXXXXXX). Prázdné = žádná analytika ani cookie lišta. Načte se jen po souhlasu. */
  ga: 'G-DKDXRKV5TB',
  /** Provozovatel webu */
  provozovatel: {
    nazev: 'Vladimír Fischer',
    ico: '03051820',
    sidlo: 'Nerudova 765/10, 251 01 Říčany',
  },
};

/** Země, jejich jazyky a hreflang: src/obsah/<kod>/_zeme.ts (načítá src/obsah/index.ts) */

/**
 * Dobrovolná podpora provozu (okno po stažení smlouvy).
 * stripe: Payment Link (30 Kč / 1 € / 1 $, Apple Pay, Google Pay, karta). Ostrý režim (účet Stripe „Dokuio“).
 * iban: když je vyplněný, okno nabídne i QR platbu (CZ, formát SPAYD).
 */
export const PODPORA = {
  stripe: 'https://buy.stripe.com/7sY9AM2Ux08f1Mn4Lr48000',
  /** Volby v okně: počet kafí (30 Kč / 1 € za kus) → Payment Link s pevným množstvím. `stripe` výše = „Jiná částka“ (1–99 ks). */
  castky: [
    { kusy: 1, url: 'https://buy.stripe.com/7sY9AM2Ux08f1Mn4Lr48000' },
    { kusy: 3, url: 'https://buy.stripe.com/8x23co9iVg7d8aL3Hn48001', doporucene: true },
    { kusy: 5, url: 'https://buy.stripe.com/eVq8wI52F8EL3Uv7XD48002' },
    { kusy: 10, url: 'https://buy.stripe.com/14A28k1Qtf39fDdgu948003' },
  ],
  iban: 'CZ6220100000002401876889',
  prijemce: 'Dokuio',
  castkaKc: 30,
  /** Kolik dní po zavření okno znovu neukazovat */
  pauzaDni: 30,
};
