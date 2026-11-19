export const SITE = {
  nazev: 'Dokuio',
  domena: 'dokuio.com',
  url: 'https://dokuio.com',
  email: 'info@dokuio.com',
  /**
   * Dokud je false, všechny stránky mají noindex a robots.txt blokuje roboty.
   * Přepnout na true při spuštění webu.
   */
  indexovat: false,
  /** Provozovatel webu */
  provozovatel: {
    nazev: 'Vladimír Fischer',
    ico: '03051820',
    sidlo: 'Nerudova 765/10, 251 01 Říčany',
  },
};

/**
 * Země (jurisdikce). Šablony smluv se liší podle práva dané země, ne jen jazykem,
 * proto má každá země vlastní sekci /{kod}/. Začínáme Českem.
 */
export const ZEME = [
  { kod: 'cz', nazev: 'Česko', nazevEn: 'Czechia', jazyk: 'cs', aktivni: true, casovaZona: 'Europe/Prague' },
  { kod: 'sk', nazev: 'Slovensko', nazevEn: 'Slovakia', jazyk: 'sk', aktivni: true, casovaZona: 'Europe/Bratislava' },
] as const;

/**
 * Dobrovolná podpora provozu (okno po stažení smlouvy).
 * stripe: Payment Link (30 Kč / 1 € / 1 $, Apple Pay, Google Pay, karta). Ostrý režim (účet Stripe „Dokuio“).
 * iban: když je vyplněný, okno nabídne i QR platbu (CZ, formát SPAYD).
 */
export const PODPORA = {
  stripe: 'https://buy.stripe.com/7sY9AM2Ux08f1Mn4Lr48000',
  iban: '',
  prijemce: 'Dokuio',
  castkaKc: 30,
  /** Kolik dní po zavření okno znovu neukazovat */
  pauzaDni: 30,
};

/** Vstupní stránky zemí jsou jazykové verze téhož rozcestníku → hreflang */
export const HREFLANG_HUBY = [
  { hreflang: 'x-default', href: '/' },
  { hreflang: 'en', href: '/' },
  { hreflang: 'cs-CZ', href: '/cz/' },
  { hreflang: 'sk-SK', href: '/sk/' },
];
