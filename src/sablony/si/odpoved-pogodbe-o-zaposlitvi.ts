/**
 * Redna odpoved pogodbe o zaposlitvi s strani delavca – Slovenija (ZDR-1). Pisna, brez navedbe razloga; odpovedni rok
 * 15 dni (do 1 leta zaposlitve) ali 30 dni, s pogodbo o zaposlitvi ali kolektivno pogodbo daljši, praviloma največ 60 dni (94. člen).
 */
import type { Sablona } from '../typy';
import { ZDR1, NOGA } from './viri';

export const odpovedPogodbeOZaposlitvi: Sablona = {
  kod: 'SI-ODPOVED-DELO', verze: '1.0', aktualizovano: '2026-11-21', overeno: '2026-11-21', zeme: 'si', jazyk: 'sl',
  nazev: 'Redna odpoved pogodbe o zaposlitvi', podnadpis: 'odpoved delavca',
  souborPdf: 'odpoved-pogodbe-o-zaposlitvi', paticka: NOGA('SI-ODPOVED-DELO'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'delavec', vpravo: 'prejel za delodajalca (datum in podpis)' },
  cislovatClanky: false,
  slovo: { n: 'odpoved', g: 'odpovedi', a: 'odpoved', l: 'odpovedi' },
  coDal: ['Odpoved vročite osebno s podpisom prejema na vašem izvodu ali jo pošljite priporočeno s povratnico.', 'Odpovedni rok začne teči naslednji dan po vročitvi.', 'Dogovorite izrabo preostalega letnega dopusta.'],
  kontrola: [
    'Delavec lahko pogodbo o zaposlitvi redno odpove brez obrazložitve razlogov, vendar mora spoštovati odpovedni rok.',
    'Minimalni odpovedni rok delavca je 15 dni pri zaposlitvi do enega leta oziroma 30 dni pri daljši zaposlitvi (94. člen ZDR-1); s pogodbo o zaposlitvi ali kolektivno pogodbo je lahko daljši, praviloma največ 60 dni.',
    'Odpoved mora biti pisna in vročena delodajalcu.',
    'Če želite oditi prej, predlagajte sporazumno prenehanje pogodbe o zaposlitvi – brez soglasja delodajalca je treba odpovedni rok odslužiti.',
    'Delavec, ki sam odpove pogodbo, praviloma nima pravice do odpravnine.',
  ],
  zdroje: [ZDR1],
  kroky: [{ id: 'podatki', nazev: 'Delavec in delodajalec', pole: [
    { id: 'p_jmeno', typ: 'text', popis: 'Delavec – ime in priimek', sirka: 34, autocomplete: 'name' },
    { id: 'p_adresa', typ: 'text', popis: 'Naslov', sirka: 46 },
    { id: 'k_jmeno', typ: 'text', popis: 'Delodajalec', placeholder: 'npr. Primer d. o. o.', sirka: 40 },
    { id: 'k_adresa', typ: 'text', popis: 'Naslov delodajalca', sirka: 46 },
    { id: 'delo', typ: 'text', popis: 'Delovno mesto', placeholder: 'npr. prodajalka', sirka: 34 },
    { id: 'pogodba_od', typ: 'datum', popis: 'Pogodba o zaposlitvi z dne', sirka: 14, polovina: true },
    { id: 'rok', typ: 'cislo', popis: 'Odpovedni rok', placeholder: 'npr. 30', jednotka: 'dni', sirka: 6, polovina: true },
    { id: 'sporazum', typ: 'volba', popis: 'Predlagati prejšnje sporazumno prenehanje?', moznosti: [ { hodnota: 'ne', popis: 'ne' }, { hodnota: 'da', popis: 'da, z določenim datumom' } ] },
    { id: 'prej', typ: 'datum', popis: 'Predlagani dan prenehanja', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'sporazum', je: 'da' } },
    { id: 'misto', typ: 'text', popis: 'Kraj', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
    { id: 'datum', typ: 'datum', popis: 'Datum', sirka: 14, polovina: true, vychozi: 'dnes' },
  ] }],
  clanky: [{ nadpis: 'Odpoved', odstavce: [
    '**Delavec:** {{p_jmeno}}, {{p_adresa}}',
    '**Delodajalec:** {{k_jmeno}}, {{k_adresa}}',
    'Na podlagi Zakona o delovnih razmerjih redno odpovedujem pogodbo o zaposlitvi z dne {{pogodba_od}} za delovno mesto {{delo}}.',
    'Odpovedni rok znaša {{rok}} dni in začne teči naslednji dan po vročitvi te odpovedi.',
    { volba: 'sporazum', uvodVzor: 'Predlog (označite eno možnost):', moznosti: { ne: 'Prosim, da mi do izteka odpovednega roka omogočite izrabo preostalega letnega dopusta oziroma izplačate nadomestilo za neizrabljeni dopust.', da: 'Predlagam, da pogodba o zaposlitvi sporazumno preneha že dne {{prej}}. Če se s tem ne strinjate, pogodba preneha z iztekom odpovednega roka.' } },
  ] }],
};
