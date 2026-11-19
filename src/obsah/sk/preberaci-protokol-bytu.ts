import type { StrankaDokumentu } from '../typy';
import { preberaciProtokolBytu as sablona } from '../../sablony/sk/preberaci-protokol-bytu';

const stranka: StrankaDokumentu = {
  sablona,
  nazev: 'Preberací protokol k bytu',
  nazevA: 'preberací protokol k bytu',
  katalog: { popis: 'Merače, vady a kľúče pri odovzdaní bytu.', kategorie: 'byvanie', ilustrace: 'protokol', slova: ['preberací protokol', 'odovzdanie bytu', 'merače', 'kľúče', 'nájom', 'sťahovanie'] },
  souvisejici: 'byvanie',
  landing: {
    title: 'Preberací protokol k bytu {rok} – vzor zadarmo',
    description: 'Preberací protokol pri odovzdaní bytu: stavy meračov, vady, vybavenie, kľúče. Na začiatku aj pri skončení nájmu. PDF aj Word zadarmo.',
    perex: 'Hlavný dôkaz pri spore o zábezpeku. Zapíšte stav bytu, merače a kľúče pri nasťahovaní aj pri odchode.',
    obsahPopis: 'Záznam o odovzdaní a prevzatí bytu.',
    obsah: [
      { nazev: 'Strany a byt', popis: 'Kto odovzdáva a preberá.' },
      { nazev: 'Merače', popis: 'Elektrina, plyn, voda, teplo.' },
      { nazev: 'Stav, vybavenie, kľúče', popis: 'Vady a dohoda o ich odstránení.' },
    ],
    kroky: [
      { nazev: 'Prejdite byt', popis: 'Miestnosť po miestnosti.' },
      { nazev: 'Zapíšte a odfoťte', popis: 'Merače a vady.' },
      { nazev: 'Podpíšte', popis: 'Každý si nechá výtlačok.' },
    ],
    online: ['Predvyplnenie z nájomnej zmluvy', 'Podpis na obrazovke', 'Stiahnutie v PDF aj vo Worde'],
    hodiSe: ['nasťahovanie do prenajatého bytu', 'odovzdanie bytu pri skončení nájmu'],
    nehodiSe: ['predaj bytu – tam sa rieši aj kataster'],
    poNadpis: 'Po podpise.',
    po: [{ nazev: 'Fotky', popis: 'Uschovajte ich spolu s protokolom.' }, { nazev: 'Energie', popis: 'Stavy meračov nahláste dodávateľom.' }],
    faq: [
      { q: 'Je preberací protokol povinný?', a: 'Zákon ho nevyžaduje, ale bez neho sa pri skončení nájmu ťažko dokazuje, aký bol byt na začiatku.' },
      { q: 'Ukladáte moje údaje?', a: 'Nie. Protokol vzniká priamo vo vašom prehliadači.' },
    ],
    zakony: 'Vzor vychádza z ustanovení o nájme bytu (§ 685 a nasl. Občianskeho zákonníka).',
    souvisejiciPopis: 'Ďalšie dokumenty k bývaniu, tiež zadarmo.',
  },
  vytvorit: {
    title: 'Vyplniť preberací protokol k bytu online – PDF zadarmo',
    description: 'Preberací protokol k bytu so stavmi meračov a vadami. PDF alebo Word zadarmo.',
    podnadpis: 'Zadarmo · výsledok v PDF aj vo Worde · zaberie asi 3 minúty',
  },
};

export default stranka;
