/**
 * Posojilna pogodba med fizičnimi osebami – Slovenija (OZ). Obresti, ki za več kot 50 % presegajo predpisano mero
 * zamudnih obresti, se domnevajo za oderuške (377. člen OZ). Splošni zastaralni rok 5 let.
 */
import type { Sablona } from '../typy';
import { znesekZBesedo } from './stevila';
import { OZ, NASVET_IDENTITETA, NOGA } from './viri';

export const posojilnaPogodba: Sablona = {
  kod: 'SI-POSOJILO', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Posojilna pogodba', podnadpis: 'sklenjena po določbah Obligacijskega zakonika o posojilni pogodbi',
  souborPdf: 'posojilna-pogodba', paticka: NOGA('SI-POSOJILO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'posojilodajalec', vpravo: 'posojilojemalec' },
  slovo: { n: 'pogodba', g: 'pogodbe', a: 'pogodbo', l: 'pogodbi' },
  coDal: ['Natisnite pogodbo v dveh izvodih in oba podpišite.', 'Denar nakažite na račun z navedbo „posojilo po pogodbi z dne …”.', 'Datume obrokov shranite v koledar.'],
  kontrola: [
    'Posojilo je najbolje nakazati na račun – bančno potrdilo dokazuje, da je bil denar izročen.',
    'Če dogovorite obresti, naj ne presegajo predpisane mere zamudnih obresti za več kot 50 % – višje se domnevajo za oderuške (377. člen OZ).',
    'Določite, kaj se zgodi ob zamudi z obroki (npr. zapadlost celotnega ostanka).',
    'Splošni zastaralni rok je pet let; pisna pripoznava dolga zastaranje pretrga.',
    NASVET_IDENTITETA,
  ],
  zdroje: [OZ],
  kroky: [
    { id: 'stranki', nazev: 'Posojilodajalec in posojilojemalec', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Posojilodajalec – ime in priimek', placeholder: 'npr. Janez Novak', sirka: 34, autocomplete: 'name' },
      { id: 'p_davcna', typ: 'text', popis: 'Davčna številka', sirka: 12, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Posojilojemalec – ime in priimek', placeholder: 'npr. Maja Horvat', sirka: 34 },
      { id: 'k_davcna', typ: 'text', popis: 'Davčna številka', sirka: 12, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
    ] },
    { id: 'posojilo', nazev: 'Posojilo in vračilo', pole: [
      { id: 'castka', typ: 'castka', popis: 'Znesek posojila (€)', sirka: 12, polovina: true },
      { id: 'izrocitev', typ: 'volba', popis: 'Izročitev denarja', moznosti: [ { hodnota: 'racun', popis: 'na račun posojilojemalca' }, { hodnota: 'gotovina', popis: 'v gotovini ob podpisu' } ] },
      { id: 'k_iban', typ: 'text', popis: 'IBAN posojilojemalca', placeholder: 'SI56 0000 0000 0000 000', sirka: 30, zobrazitKdyz: { pole: 'izrocitev', je: 'racun' } },
      { id: 'vracilo', typ: 'volba', popis: 'Vračilo', moznosti: [ { hodnota: 'naenkrat', popis: 'naenkrat do določenega dne' }, { hodnota: 'obroki', popis: 'v mesečnih obrokih' } ] },
      { id: 'rok', typ: 'datum', popis: 'Vrniti najpozneje do', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'vracilo', je: 'naenkrat' } },
      { id: 'obrok', typ: 'castka', popis: 'Mesečni obrok (€)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'vracilo', je: 'obroki' } },
      { id: 'prvi', typ: 'datum', popis: 'Prvi obrok', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'vracilo', je: 'obroki' } },
      { id: 'obresti', typ: 'volba', popis: 'Obresti', moznosti: [ { hodnota: 'brez', popis: 'brez obresti' }, { hodnota: 'z', popis: 's pogodbenimi obrestmi' } ] },
      { id: 'mera', typ: 'text', popis: 'Letna obrestna mera', placeholder: 'npr. 3 %', sirka: 8, polovina: true, zobrazitKdyz: { pole: 'obresti', je: 'z' } },
      { id: 'p_iban', typ: 'text', popis: 'IBAN posojilodajalca (za vračilo)', placeholder: 'SI56 0000 0000 0000 000', sirka: 30 },
      { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_z_besedo: (d) => znesekZBesedo(d.castka) },
  clanky: [
    { nadpis: 'Pogodbeni stranki', odstavce: ['**Posojilodajalec:** {{p_jmeno}}, davčna številka {{p_davcna}}, naslov {{p_adresa}}', '**Posojilojemalec:** {{k_jmeno}}, davčna številka {{k_davcna}}, naslov {{k_adresa}}'] },
    { nadpis: 'Predmet pogodbe', odstavce: ['Posojilodajalec posoja posojilojemalcu znesek **{{castka}}** (z besedo: {{castka_z_besedo}}).', { volba: 'izrocitev', uvodVzor: 'Izročitev (označite eno možnost):', moznosti: { racun: 'Posojilodajalec bo znesek nakazal na račun posojilojemalca IBAN {{k_iban}}.', gotovina: 'Posojilojemalec je znesek prejel v gotovini ob podpisu te pogodbe, kar potrjuje s svojim podpisom.' } }] },
    { nadpis: 'Vračilo', odstavce: [{ volba: 'vracilo', uvodVzor: 'Način vračila (označite eno možnost):', moznosti: { naenkrat: 'Posojilojemalec bo posojilo vrnil v celoti najpozneje do {{rok}}.', obroki: 'Posojilojemalec bo posojilo vračal v mesečnih obrokih po {{obrok}}, prvič {{prvi}}, nato vsak mesec na isti dan, do vračila celotnega zneska.' } }, 'Vračila se nakazujejo na račun posojilodajalca IBAN {{p_iban}}. Posojilojemalec lahko posojilo vrne tudi pred rokom.', 'Če posojilojemalec zamudi s plačilom dveh obrokov, lahko posojilodajalec s pisnim obvestilom zahteva takojšnje vračilo celotnega ostanka.'] },
    { nadpis: 'Obresti', odstavce: [{ volba: 'obresti', uvodVzor: 'Obresti (označite eno možnost):', moznosti: { brez: 'Posojilo je brezobrestno.', z: 'Posojilojemalec plača pogodbene obresti po letni obrestni meri {{mera}} od neodplačane glavnice.' } }, 'V primeru zamude posojilojemalec dolguje zakonske zamudne obresti.'] },
    { nadpis: 'Končne določbe', odstavce: ['Za vse, kar ni urejeno s to pogodbo, se uporablja Obligacijski zakonik.', 'Pogodba je sestavljena v dveh enakih izvodih, po enega za vsako stranko.'] },
  ],
};
