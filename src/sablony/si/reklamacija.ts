/**
 * Obvestilo o neskladnosti blaga (reklamacija) – Slovenija (ZVPot-1). Potrošnik obvesti prodajalca v dveh mesecih od dneva, ko je
 * ugotovil neskladnost, in jo natančno opiše (84. člen); najprej zahteva brezplačno vzpostavitev skladnosti v razumnem roku do 30 dni.
 */
import type { Sablona } from '../typy';
import { ZVPOT, OZ, NOGA } from './viri';

export const reklamacija: Sablona = {
  kod: 'SI-REKLAMACIJA', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Obvestilo o neskladnosti blaga', podnadpis: 'reklamacija in zahtevek za vzpostavitev skladnosti',
  souborPdf: 'reklamacija', paticka: NOGA('SI-REKLAMACIJA'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'potrošnik', vpravo: 'prejel (prodajalec, datum)' },
  slovo: { n: 'obvestilo', g: 'obvestila', a: 'obvestilo', l: 'obvestilu' },
  coDal: ['Obvestilo izročite osebno in zahtevajte potrdilo o prejemu ali ga pošljite priporočeno.', 'Priložite račun ali drug dokaz o nakupu.'],
  kontrola: [
    'O neskladnosti obvestite prodajalca v dveh mesecih od dneva, ko ste jo ugotovili, in jo natančno opišite (84. člen ZVPot-1).',
    'Prodajalec odgovarja za neskladnost, ki se pokaže v dveh letih od dobave blaga.',
    'Najprej lahko zahtevate brezplačno popravilo ali zamenjavo v razumnem roku, ki ni daljši od 30 dni; znižanje kupnine ali odstop pridejo v poštev, če to ne uspe.',
    'Če se neskladnost pokaže v 30 dneh od dobave, imate pravico blago zavrniti.',
  ],
  zdroje: [ZVPOT, OZ],
  kroky: [
    { id: 'stranki', nazev: 'Potrošnik in prodajalec', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Ime in priimek', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
      { id: 'p_tel', typ: 'text', popis: 'Telefon ali e-pošta', sirka: 30 },
      { id: 'k_jmeno', typ: 'text', popis: 'Prodajalec', placeholder: 'npr. ime trgovine', sirka: 40 },
      { id: 'k_adresa', typ: 'text', popis: 'Naslov prodajalca', sirka: 46 },
    ] },
    { id: 'blago', nazev: 'Blago in neskladnost', pole: [
      { id: 'blago', typ: 'text', popis: 'Blago', placeholder: 'npr. pralni stroj Bosch, model …', sirka: 56 },
      { id: 'kupljeno', typ: 'datum', popis: 'Kupljeno dne', sirka: 14, polovina: true },
      { id: 'racun', typ: 'text', popis: 'Številka računa', sirka: 20, polovina: true },
      { id: 'ugotovljeno', typ: 'datum', popis: 'Neskladnost ugotovljena dne', sirka: 14, polovina: true },
      { id: 'opis', typ: 'textarea', popis: 'Natančen opis neskladnosti', placeholder: 'npr. stroj med centrifugo ustavi in prikaže napako E18', sirka: 64 },
      { id: 'zahtevek', typ: 'volba', popis: 'Zahtevam', moznosti: [ { hodnota: 'popravilo', popis: 'brezplačno popravilo' }, { hodnota: 'zamenjava', popis: 'zamenjavo z novim blagom' }, { hodnota: 'znizanje', popis: 'znižanje kupnine' }, { hodnota: 'odstop', popis: 'odstop od pogodbe in vračilo kupnine' } ] },
      { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Potrošnik in prodajalec', odstavce: ['**Potrošnik:** {{p_jmeno}}, {{p_adresa}}, {{p_tel}}', '**Prodajalec:** {{k_jmeno}}, {{k_adresa}}'] },
    { nadpis: 'Obvestilo o neskladnosti', odstavce: ['Dne {{kupljeno}} sem pri vas kupil/a: {{blago}}, račun št. {{racun}}.', 'Dne {{ugotovljeno}} sem ugotovil/a naslednjo neskladnost: {{opis}}', { volba: 'zahtevek', uvodVzor: 'Zahtevek (označite eno možnost):', moznosti: { popravilo: 'Zahtevam brezplačno vzpostavitev skladnosti s popravilom v razumnem roku, ki ni daljši od 30 dni.', zamenjava: 'Zahtevam brezplačno zamenjavo z blagom brez neskladnosti v razumnem roku, ki ni daljši od 30 dni.', znizanje: 'Zahtevam sorazmerno znižanje kupnine.', odstop: 'Odstopam od pogodbe in zahtevam vračilo kupnine.' } }, 'Prilagam kopijo računa. Prosim za pisni odgovor.'] },
  ],
};
