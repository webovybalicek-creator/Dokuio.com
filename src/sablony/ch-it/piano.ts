/** Piano di pagamento (allegato) e promemoria delle rate in italiano, importi in CHF. */
import type { Data, Pripominka, Tabulka } from '../typy';
import { cislo, isoDatum, pripominkySplatek, souhrnSplatek, splatky } from '../terminy';
import { formatCislo, formatDatum } from '../dokument';

export const chf = (n: number) => `${formatCislo(String(n))} CHF`;
const importo = (d: Data) => cislo(String(d.castka ?? '').replace(/[\s'’]/g, ''));

/** Allegato 1 · Piano di pagamento – rate mensili secondo splatka / splatka_den / prvni_splatka */
export function pianoPagamento(d: Data, nota = 'In caso di contraddizione fa fede il testo del documento.'): Tabulka[] {
  const s = splatky(d);
  if (!s.length) return [];
  const giorno = Math.round(cislo(d.splatka_den));
  return [
    {
      nadpis: 'Allegato 1 · Piano di pagamento',
      popis: `In totale ${chf(importo(d))} in ${s.length} rate mensili, scadenza il giorno ${giorno} di ogni mese.`,
      souhrn: souhrnSplatek(s, chf(importo(d)), d),
      hlavicka: ['Rata', 'Scadenza', 'Importo', 'Saldo dovuto'],
      radky: s.map((x) => [`${x.poradi}.`, formatDatum(isoDatum(x.datum), 'it-CH'), chf(x.castka), chf(x.zbyva)]),
      vpravo: [2, 3],
      poznamka: nota,
    },
  ];
}

export const promemoriaRate = (d: Data, nome = 'Rata'): Pripominka[] =>
  pripominkySplatek(d, nome, 'CHF', { celkem: (n) => `${n} rate in totale`, posledni: 'ultima' });
