/**
 * Mängelrüge beim Kauf – Schweiz. Prüfung und sofortige Rüge (Art. 201 OR); Wandelung oder Minderung (Art. 205 OR),
 * Ersatzlieferung bei Gattungsware (Art. 206 OR). Ein gesetzliches Recht auf Reparatur besteht nur, wenn vereinbart
 * (Garantie/AGB). Verjährung 2 Jahre ab Ablieferung (Art. 210 OR), bei gebrauchten Sachen gegenüber Konsumenten auf 1 Jahr verkürzbar.
 */
import type { Sablona } from '../typy';
import { maengelanzeige as de } from '../de/maengelanzeige';
import { naDatum, isoDatum, pridejDny } from '../terminy';
import { schweiz, paticka } from './schweiz';
import { OR_197, OR_201, OR_205, OR_210, CH_RUECKGABE } from './quellen';

export const maengelruegeCH: Sablona = schweiz({
  ...de,
  kod: 'CH-MAENGELRUEGE',
  nazev: 'Mängelrüge',
  podnadpis: 'Geltendmachung der Gewährleistung nach Art. 197 ff. OR',
  souborPdf: 'maengelruege',
  paticka: paticka('CH-MAENGELRUEGE'),
  slovo: { n: 'Mängelrüge', g: 'Mängelrüge', a: 'Mängelrüge', l: 'Mängelrüge' },
  pripominky: (d) => {
    const od = naDatum(d.datum);
    const tage = Number(d.lhuta) || 14;
    return od ? [{ nazev: 'Antwort des Verkäufers fällig', datum: isoDatum(pridejDny(od, tage)), popis: 'Ohne Lösung bis dahin: Beratung bei einer Konsumentenorganisation oder Schlichtungsbehörde.' }] : [];
  },
  coDal: [
    'Mängelrüge sofort nach Entdeckung des Mangels senden – per Einschreiben oder E-Mail – und den Nachweis aufheben.',
    'Ware für die Prüfung bereithalten und den Mangel mit Fotos dokumentieren.',
    'Ohne Einigung helfen Konsumentenorganisationen oder die Schlichtungsbehörde am Wohnort.',
  ],
  kontrola: [
    'Mängel müssen sofort nach Entdeckung gerügt werden, sonst gilt die Ware als genehmigt ([Art. 201 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_201)).',
    'Gesetzlich können Sie den Kauf rückgängig machen (Wandelung) oder den Preis mindern; bei Serienware auch Ersatz verlangen ([Art. 205 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_205)). Ein Recht auf Reparatur haben Sie nur, wenn es vereinbart ist – oft in den AGB oder der Garantie.',
    'Ansprüche verjähren zwei Jahre nach der Ablieferung; bei gebrauchten Sachen kann der Händler die Frist auf ein Jahr verkürzen ([Art. 210 OR](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_210)).',
    'Viele Händler beschränken die Gewährleistung in den AGB auf Reparatur oder Ersatz – Garantiebedingungen prüfen.',
    'Mangel konkret beschreiben und fotografieren, Quittung aufbewahren (auch Kontoauszug oder Bestellbestätigung).',
  ],
  zdroje: [OR_197, OR_201, OR_205, OR_210, CH_RUECKGABE],
  kroky: de.kroky.map((k) =>
    k.id === 'forderung'
      ? {
          ...k,
          pole: k.pole.map((p) =>
            p.id === 'pozadavek'
              ? {
                  ...p,
                  popis: 'Was verlangen Sie?',
                  moznosti: [
                    { hodnota: 'oprava', popis: 'Reparatur (gemäss Garantie oder AGB)' },
                    { hodnota: 'vymena', popis: 'Ersatz durch eine mangelfreie Sache' },
                    { hodnota: 'minderung', popis: 'Preisminderung' },
                    { hodnota: 'wandelung', popis: 'Rückgängigmachung des Kaufs (Wandelung)' },
                  ],
                }
              : p.id === 'lhuta'
                ? { ...p, popis: 'Frist für eine Antwort in Tagen' }
                : p,
          ),
        }
      : k,
  ),
  clanky: [
    { nadpis: 'An', odstavce: ['{{pr_nazev}}, {{pr_adresa}}'] },
    {
      nadpis: 'Mängelrüge',
      vysvetleni: 'Was mangelhaft ist und was Sie verlangen.',
      odstavce: [
        'Am {{koupeno}} habe ich bei Ihnen folgende Ware gekauft: {{zbozi}} (Beleg-Nr. {{doklad}}).',
        'Die Ware ist mangelhaft: {{vada}} Den Mangel habe ich am {{projevila}} entdeckt und rüge ihn hiermit gemäss Art. 201 OR.',
        {
          volba: 'pozadavek',
          uvod: 'Ich verlange',
          uvodVzor: 'Ich verlange (ankreuzen):',
          moznosti: {
            oprava: 'die Beseitigung des Mangels (Reparatur) gemäss Garantie bzw. Ihren Bedingungen.',
            vymena: 'die Lieferung einer mangelfreien Sache (Art. 206 OR).',
            minderung: 'eine angemessene Minderung des Kaufpreises (Art. 205 OR).',
            wandelung: 'die Rückgängigmachung des Kaufs gegen Rückgabe der Ware und Rückerstattung des Kaufpreises (Art. 205 OR).',
          },
        },
        'Bitte teilen Sie mir bis zum {{frist_bis}} mit, wie Sie die Angelegenheit erledigen. Weitere Ansprüche bleiben vorbehalten.',
        'Bitte bestätigen Sie mir den Eingang dieser Mängelrüge.',
      ],
    },
    { nadpis: 'Käufer/in', odstavce: ['{{p_jmeno}}, {{p_adresa}}, Kontakt: {{p_kontakt}}'] },
  ],
});
