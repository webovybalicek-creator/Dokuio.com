/** Plan de paiement (annexe) et rappels d’échéances en français, montants en CHF. */
import type { Data, Pripominka, Tabulka } from '../typy';
import { cislo, isoDatum, pripominkySplatek, souhrnSplatek, splatky } from '../terminy';
import { formatCislo, formatDatum } from '../dokument';

export const chf = (n: number) => `${formatCislo(String(n))} CHF`;
const montant = (d: Data) => cislo(String(d.castka ?? '').replace(/[\s'’]/g, ''));

/** Annexe 1 · Plan de paiement – mensualités selon splatka / splatka_den / prvni_splatka */
export function planPaiement(d: Data, note = 'En cas de contradiction, le texte du document fait foi.'): Tabulka[] {
  const s = splatky(d);
  if (!s.length) return [];
  const jour = Math.round(cislo(d.splatka_den));
  return [
    {
      nadpis: 'Annexe 1 · Plan de paiement',
      popis: `Au total ${chf(montant(d))} en ${s.length} mensualités, échéance le ${jour} de chaque mois.`,
      souhrn: souhrnSplatek(s, chf(montant(d)), d),
      hlavicka: ['Mensualité', 'Échéance', 'Montant', 'Solde dû'],
      radky: s.map((x) => [`${x.poradi}.`, formatDatum(isoDatum(x.datum), 'fr-CH'), chf(x.castka), chf(x.zbyva)]),
      vpravo: [2, 3],
      poznamka: note,
    },
  ];
}

export const rappelsMensualites = (d: Data, nom = 'Mensualité'): Pripominka[] =>
  pripominkySplatek(d, nom, 'CHF', { celkem: (n) => `${n} mensualités au total`, posledni: 'dernière' });
