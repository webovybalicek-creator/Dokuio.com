/** Procura per l’Ufficio cantonale della circolazione – cambiamento di detentore, immatricolazione, deposito delle targhe (art. 32 segg. CO). */
import type { Sablona } from '../typy';
import { CO_32, ASA, CH_IMMATRICOLAZIONE, CONSIGLIO_IDENTITA, piede } from './fonti';

export const procuraCircolazione: Sablona = {
  kod: 'CHIT-PROCURA-CIRCOLAZIONE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Procura', podnadpis: 'da presentare all’Ufficio cantonale della circolazione (art. 32 segg. CO)',
  souborPdf: 'procura-ufficio-della-circolazione', paticka: piede('CHIT-PROCURA-CIRCOLAZIONE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Il mandante / la mandante', vpravo: 'Il mandatario / la mandataria' },
  slovo: { n: 'procura', g: 'della procura', a: 'la procura', l: 'nella procura' },
  cislovatClanky: false, cislovatOdstavce: false,
  pripominky: (d) => (typeof d.platnost_do === 'string' && d.platnost_do ? [{ nazev: 'Scade la procura per l’Ufficio della circolazione', datum: d.platnost_do }] : []),
  prevzit: {
    kod: 'CHIT-VENDITA-AUTO',
    nazev: 'il contratto di compravendita',
    mapuj: (d) => ({ ukon: 'umschreibung', z_jmeno: d.k_jmeno, z_narozeni: d.k_narozeni, z_adresa: d.k_adresa, znacka: d.znacka, vin: d.vin, spz: d.spz, misto: d.misto }),
  },
  coDal: [
    'Stampate la procura e firmatela a mano.',
    'Il mandatario porta: questa procura, il proprio passaporto o carta d’identità, una copia del vostro documento d’identità e la licenza di circolazione.',
    'Per un’immatricolazione serve inoltre l’attestato d’assicurazione elettronico della vostra assicurazione di responsabilità civile; per una messa fuori circolazione, le targhe.',
  ],
  kontrola: [
    `Molti Uffici della circolazione hanno un proprio modulo di procura – consultate prima il sito del vostro Cantone ([asa.ch](${ASA.url})).`,
    'Riprendete esattamente il numero di telaio e il numero di matricola dalla licenza di circolazione.',
    'Per immatricolare serve un attestato d’assicurazione valido – l’assicurazione lo trasmette di solito direttamente per via elettronica.',
    CONSIGLIO_IDENTITA,
  ],
  zdroje: [CO_32, ASA, CH_IMMATRICOLAZIONE],
  kroky: [
    { id: 'personen', nazev: 'Chi dà procura a chi', pole: [
      { id: 'z_jmeno', typ: 'text', popis: 'Mandante – nome e cognome', napoveda: 'La persona che è o diventa detentrice del veicolo.', placeholder: 'p. es. Laura Rezzonico', sirka: 34, autocomplete: 'name' },
      { id: 'z_narozeni', typ: 'datum', popis: 'Data di nascita', sirka: 14, polovina: true },
      { id: 'z_adresa', typ: 'text', popis: 'Indirizzo (domicilio)', placeholder: 'p. es. Viale Stazione 5, 6500 Bellinzona', sirka: 46 },
      { id: 'm_jmeno', typ: 'text', popis: 'Mandatario – nome e cognome', placeholder: 'p. es. Paolo Rezzonico', sirka: 34 },
      { id: 'm_narozeni', typ: 'datum', popis: 'Data di nascita', sirka: 14, polovina: true },
      { id: 'm_adresa', typ: 'text', popis: 'Indirizzo', sirka: 46 },
    ] },
    { id: 'fahrzeug', nazev: 'Veicolo e pratica', pole: [
      { id: 'ukon', typ: 'volba', popis: 'Cosa bisogna fare?', moznosti: [ { hodnota: 'umschreibung', popis: 'Cambiamento di detentore (immatricolazione di un veicolo acquistato)' }, { hodnota: 'zulassung', popis: 'Immatricolazione di un veicolo' }, { hodnota: 'abmeldung', popis: 'Messa fuori circolazione e deposito delle targhe' } ] },
      { id: 'znacka', typ: 'text', popis: 'Marca e tipo', placeholder: 'p. es. Fiat Tipo', sirka: 32 },
      { id: 'vin', typ: 'vin', popis: 'Numero di telaio (VIN)', napoveda: 'Campo 23 della licenza di circolazione.', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Targhe (se esistenti)', placeholder: 'p. es. TI 12345', sirka: 12, polovina: true },
      { id: 'platnost_do', typ: 'datum', popis: 'Valida fino al (facoltativo)', sirka: 14, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Luogo', sirka: 18, polovina: true, vychozi: { obecZ: 'z_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [{ nadpis: 'Procura', odstavce: [
    'Il/La sottoscritto/a **{{z_jmeno}}**, nato/a il {{z_narozeni}}, domiciliato/a in {{z_adresa}},',
    'conferisce con la presente procura a **{{m_jmeno}}**, nato/a il {{m_narozeni}}, domiciliato/a in {{m_adresa}},',
    { volba: 'ukon', uvod: 'per rappresentarmi presso l’Ufficio della circolazione per', uvodVzor: 'per rappresentarmi presso l’Ufficio della circolazione per (barrate):', moznosti: { umschreibung: 'il cambiamento di detentore (immatricolazione a mio nome di un veicolo acquistato)', zulassung: 'l’immatricolazione del veicolo', abmeldung: 'la messa fuori circolazione del veicolo e il deposito delle targhe' } },
    'del veicolo marca e tipo {{znacka}}, numero di telaio {{vin}}, targhe {{spz}}, compresa la consegna e la ricezione di dichiarazioni, della licenza di circolazione e delle targhe.',
    'La procura è valida fino al {{platnost_do}}, altrimenti fino all’espletamento della pratica o fino a revoca.',
  ] }],
};
