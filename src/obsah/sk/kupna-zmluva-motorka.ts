import type { StrankaDokumentu } from '../typy';
import { preloz } from '../../sablony/motorka';
import auto from './kupna-zmluva-auto';
import { kupnaZmluvaMotorka as sablona, NAHRADY } from '../../sablony/sk/kupna-zmluva-motorka';

/** Stejný ověřený obsah jako stránka auta; liší se texty pro motorku. */
const L = preloz(auto.landing, [...NAHRADY, [/predaju auta/g, 'predaju motorky']]);

const stranka: StrankaDokumentu = {
  ...auto,
  sablona,
  nazev: "Kúpna zmluva na motorku",
  nazevA: "kúpnu zmluvu na motorku",
  katalog: { ...auto.katalog, popis: "Predaj motocykla, skútra alebo štvorkolky.", ilustrace: 'motorka', slova: ["motocykel", "skúter", "moped", "štvorkolka", "predaj motorky", "kúpa motorky"] },
  landing: {
    ...L,
    title: "Kúpna zmluva na motorku {rok} – vzor PDF zadarmo",
    description: "Kúpna zmluva na motorku, skúter alebo štvorkolku zadarmo podľa slovenského práva: VIN, stav km, vady, platba, zmena držby. PDF aj Word.",
    perex: "Na predaj motocykla, skútra, mopedu alebo štvorkolky medzi súkromnými osobami. Vyplňte online, alebo stiahnite prázdny vzor.",
    hodiSe: ["predávate alebo kupujete motorku, skúter, moped či štvorkolku od súkromnej osoby", "vozidlo je evidované a má osvedčenie o evidencii", "chcete mať písomne cenu, stav a odovzdanie"],
    nehodiSe: ["kupujete od autobazáru alebo predajcu – má vlastnú zmluvu", "ide o motorku bez evidencie (napr. pitbike) – použite kúpnu zmluvu na vec", "motorka je na lízing alebo úver"],
    faq: [
      {"q": "Je zmluva na motorku iná ako na auto?", "a": "Právne nie – obe sú kúpnou zmluvou na motorové vozidlo. Líšia sa praktické veci: VIN je vyrazený na ráme a výbavu (kufre, výfuk) sa oplatí zapísať."},
      {"q": "Hodí sa aj na skúter alebo moped?", "a": "Áno, na každé vozidlo s osvedčením o evidencii. Na pitbike alebo detskú motorku bez evidencie použite kúpnu zmluvu na vec."},
      ...(L.faq ?? []).slice(-1),
    ],
  },
  vytvorit: { ...auto.vytvorit, title: "Vyplniť kúpnu zmluvu na motorku online – PDF zadarmo", description: "Sprievodca kúpnou zmluvou na motorku, skúter alebo štvorkolku podľa slovenského práva. PDF alebo Word zadarmo." },
};

export default stranka;
