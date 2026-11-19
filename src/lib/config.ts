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
  { kod: 'cz', nazev: 'Česko', nazevEn: 'Czechia', jazyk: 'cs', vlajka: '🇨🇿', aktivni: true },
] as const;
