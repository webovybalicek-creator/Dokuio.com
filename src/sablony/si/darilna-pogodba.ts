/**
 * Darilna pogodba za denar ali premičnino z izročitvijo – Slovenija (OZ). ZDDD: obdarjenec prvega dednega reda (zakonec,
 * otroci, starši) je davka oproščen; premičnine pod 5.000 € niso obdavčene; sicer napoved FURS v 15 dneh (FURS, 21. 11. 2026).
 */
import type { Sablona } from '../typy';
import { znesekZBesedo } from './stevila';
import { OZ, FURS_DARILO, NASVET_IDENTITETA, NOGA } from './viri';

export const darilnaPogodba: Sablona = {
  kod: 'SI-DARILO', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Darilna pogodba', podnadpis: 'za denar ali premično stvar z izročitvijo',
  souborPdf: 'darilna-pogodba', paticka: NOGA('SI-DARILO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'darovalec', vpravo: 'obdarjenec' },
  slovo: { n: 'pogodba', g: 'pogodbe', a: 'pogodbo', l: 'pogodbi' },
  coDal: ['Denar nakažite na račun z navedbo „darilo po pogodbi z dne …”.', 'Če darilo ni oproščeno in presega 5.000 €, mora obdarjenec v 15 dneh vložiti napoved za odmero davka pri FURS.'],
  kontrola: [
    'Obdarjenec prvega dednega reda (zakonec, otroci in drugi potomci) je davka na darila oproščen ([FURS](https://fu.gov.si/zivljenjski_dogodki_prebivalci/prejel_sem_darilo)).',
    'Darilo, ki zajema le premičnine (tudi denar) v skupni vrednosti pod 5.000 €, ni obdavčeno; nad tem zneskom mora obdarjenec, ki ni oproščen, v 15 dneh vložiti napoved.',
    'Ta obrazec je za darilo z izročitvijo. Za nepremičnine je potrebna pogodba z overjenim podpisom za vpis v zemljiško knjigo – obrnite se na notarja.',
    'Darilo vozila: z darilno pogodbo nato uredite spremembo lastništva v 15 dneh.',
    NASVET_IDENTITETA,
  ],
  zdroje: [OZ, FURS_DARILO],
  kroky: [
    { id: 'stranki', nazev: 'Darovalec in obdarjenec', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Darovalec – ime in priimek', placeholder: 'npr. Janez Novak', sirka: 34, autocomplete: 'name' },
      { id: 'p_davcna', typ: 'text', popis: 'Davčna številka', sirka: 12, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Obdarjenec – ime in priimek', placeholder: 'npr. Ana Novak', sirka: 34 },
      { id: 'k_davcna', typ: 'text', popis: 'Davčna številka', sirka: 12, polovina: true },
      { id: 'k_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
      { id: 'sorodstvo', typ: 'text', popis: 'Sorodstveno razmerje', placeholder: 'npr. oče in hči', sirka: 30 },
    ] },
    { id: 'darilo', nazev: 'Darilo', pole: [
      { id: 'vrsta', typ: 'volba', popis: 'Kaj se podarja', moznosti: [ { hodnota: 'denar', popis: 'denarni znesek' }, { hodnota: 'stvar', popis: 'premična stvar (npr. vozilo)' } ] },
      { id: 'castka', typ: 'castka', popis: 'Znesek (€)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'vrsta', je: 'denar' } },
      { id: 'stvar', typ: 'textarea', popis: 'Opis stvari', placeholder: 'npr. osebni avtomobil Renault Clio, VIN …, reg. oznaka …', sirka: 64, zobrazitKdyz: { pole: 'vrsta', je: 'stvar' } },
      { id: 'vrednost', typ: 'castka', popis: 'Ocenjena vrednost stvari (€)', sirka: 12, polovina: true, zobrazitKdyz: { pole: 'vrsta', je: 'stvar' } },
      { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { castka_z_besedo: (d) => znesekZBesedo(d.castka) },
  clanky: [
    { nadpis: 'Pogodbeni stranki', odstavce: ['**Darovalec:** {{p_jmeno}}, davčna številka {{p_davcna}}, naslov {{p_adresa}}', '**Obdarjenec:** {{k_jmeno}}, davčna številka {{k_davcna}}, naslov {{k_adresa}}', 'Sorodstveno razmerje: {{sorodstvo}}.'] },
    { nadpis: 'Predmet darila', odstavce: [{ volba: 'vrsta', uvodVzor: 'Darilo (označite eno možnost):', moznosti: { denar: 'Darovalec podarja obdarjencu denarni znesek **{{castka}}** (z besedo: {{castka_z_besedo}}), ki ga izroči ob podpisu te pogodbe ali nakaže na račun obdarjenca.', stvar: 'Darovalec podarja obdarjencu naslednjo stvar: {{stvar}}, v ocenjeni vrednosti {{vrednost}}, ki mu jo izroči ob podpisu te pogodbe.' } }, 'Obdarjenec darilo sprejema.'] },
    { nadpis: 'Davki in stroški', odstavce: ['Morebitni davek na darila in stroške prenosa nosi obdarjenec.', 'Za vse, kar ni urejeno s to pogodbo, se uporablja Obligacijski zakonik. Pogodba je sestavljena v dveh enakih izvodih.'] },
  ],
};
