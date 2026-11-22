/** Verbale di consegna di un veicolo – Svizzera italiana. L’acquirente verifica il veicolo alla presa in consegna e segnala subito i difetti (art. 201 CO). */
import type { Sablona } from '../typy';
import { CO_184, CO_201, CH_IMMATRICOLAZIONE, CONSIGLIO_IDENTITA, linkCO, piede } from './fonti';

export const verbaleVeicolo: Sablona = {
  kod: 'CHIT-VERBALE-VEICOLO', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Verbale di consegna', podnadpis: 'consegna e presa in consegna di un veicolo a motore',
  souborPdf: 'verbale-di-consegna-veicolo', paticka: piede('CHIT-VERBALE-VEICOLO'),
  mistoPodpisu: 'misto', datumPodpisu: 'predani_datum',
  podpisy: { vlevo: 'Chi consegna', vpravo: 'Chi riceve' },
  slovo: { n: 'verbale', g: 'del verbale', a: 'il verbale', l: 'nel verbale' },
  cislovatClanky: false,
  prevzit: {
    kod: 'CHIT-VENDITA-AUTO',
    nazev: 'il contratto di compravendita',
    mapuj: (d) => ({ duvod: 'koupe', smlouva_datum: d.datum_podpisu, p_jmeno: d.p_jmeno, p_adresa: d.p_adresa, k_jmeno: d.k_jmeno, k_adresa: d.k_adresa, znacka: d.znacka, vin: d.vin, spz: d.spz, km: d.km, klice: d.klice, predani_datum: d.datum_podpisu, predani_cas: d.predani_cas, misto: d.misto }),
  },
  coDal: [
    'Stampate due esemplari; entrambe le parti firmano entrambi.',
    'Fotografate il veicolo da tutti i lati e il contachilometri – conservate le foto.',
    'In caso di vendita: smontate le targhe e tenetele o depositatele, e informate l’assicurazione.',
  ],
  kontrola: [
    'Leggete insieme il chilometraggio e il livello del serbatoio e annotateli con precisione.',
    'Descrivete i danni in modo concreto (punto, dimensione) e fotografateli con la data.',
    'L’ora della consegna è utile in caso di multa o incidente: mostra chi aveva il veicolo in quale momento.',
    `L’acquirente verifica il veicolo alla presa in consegna e segnala immediatamente i difetti (${linkCO('201')}).`,
    'Confrontate il numero di telaio della licenza di circolazione con quello del veicolo.',
    CONSIGLIO_IDENTITA,
  ],
  zdroje: [CO_184, CO_201, CH_IMMATRICOLAZIONE],
  kroky: [
    { id: 'parteien', nazev: 'Persone e motivo', pole: [
      { id: 'duvod', typ: 'volba', popis: 'Perché viene consegnato il veicolo?', moznosti: [ { hodnota: 'koupe', popis: 'Vendita (contratto di compravendita)' }, { hodnota: 'zapujcka', popis: 'Prestito del veicolo' }, { hodnota: 'vraceni', popis: 'Restituzione di un veicolo prestato' } ] },
      { id: 'smlouva_datum', typ: 'datum', popis: 'Data del contratto di compravendita', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'duvod', je: 'koupe' } },
      { id: 'p_jmeno', typ: 'text', popis: 'Chi consegna – nome e cognome', placeholder: 'p. es. Marco Bernasconi', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Indirizzo', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Chi riceve – nome e cognome', placeholder: 'p. es. Laura Rezzonico', sirka: 34 },
      { id: 'k_adresa', typ: 'text', popis: 'Indirizzo', sirka: 46 },
    ] },
    { id: 'fahrzeug', nazev: 'Veicolo e stato', pole: [
      { id: 'znacka', typ: 'text', popis: 'Marca e tipo', placeholder: 'p. es. Fiat Tipo SW', sirka: 32 },
      { id: 'vin', typ: 'vin', popis: 'Numero di telaio (VIN)', napoveda: 'Campo 23 della licenza di circolazione.', sirka: 24 },
      { id: 'spz', typ: 'text', popis: 'Targhe', placeholder: 'p. es. TI 123456', sirka: 12, polovina: true },
      { id: 'km', typ: 'cislo', popis: 'Chilometraggio', jednotka: 'km', sirka: 12, polovina: true },
      { id: 'palivo', typ: 'volba', popis: 'Livello del serbatoio', moznosti: [ { hodnota: 'rezerva', popis: 'Riserva' }, { hodnota: 'ctvrt', popis: '1/4' }, { hodnota: 'pul', popis: '1/2' }, { hodnota: 'tri', popis: '3/4' }, { hodnota: 'plna', popis: 'Pieno' } ] },
      { id: 'poskozeni', typ: 'volba', popis: 'Danni', moznosti: [ { hodnota: 'bez', popis: 'Nessun danno visibile' }, { hodnota: 's', popis: 'Il veicolo presenta danni' } ] },
      { id: 'poskozeni_popis', typ: 'textarea', popis: 'Descrizione dei danni', placeholder: 'p. es. graffio sul paraurti posteriore sinistro', sirka: 64, zobrazitKdyz: { pole: 'poskozeni', je: 's' } },
    ] },
    { id: 'zubehoer', nazev: 'Chiavi, documenti, accessori', pole: [
      { id: 'klice', typ: 'cislo', popis: 'Numero di chiavi', sirka: 4, polovina: true },
      { id: 'doklady', typ: 'vice', popis: 'Documenti consegnati', moznosti: [ { hodnota: 'zb1', popis: 'Licenza di circolazione' }, { hodnota: 'hu', popis: 'Rapporto dell’ultimo collaudo' }, { hodnota: 'servis', popis: 'Libretto di manutenzione' }, { hodnota: 'navod', popis: 'Istruzioni per l’uso' } ] },
      { id: 'vybava', typ: 'vice', popis: 'Accessori', moznosti: [ { hodnota: 'verbandskasten', popis: 'Cassetta di pronto soccorso' }, { hodnota: 'warndreieck', popis: 'Triangolo di panna' }, { hodnota: 'weste', popis: 'Giubbotto di sicurezza' }, { hodnota: 'reserverad', popis: 'Ruota di scorta o kit di riparazione' }, { hodnota: 'wagenheber', popis: 'Cric e chiave per ruote' }, { hodnota: 'reifen', popis: 'Secondo treno di pneumatici' } ] },
      { id: 'vybava_jine', typ: 'text', popis: 'Altri oggetti', placeholder: 'p. es. barre portatutto', sirka: 40 },
    ] },
    { id: 'uebergabe', nazev: 'Consegna', pole: [
      { id: 'predani_datum', typ: 'datum', popis: 'Data della consegna', sirka: 14, polovina: true, vychozi: 'dnes' },
      { id: 'predani_cas', typ: 'text', popis: 'Ora', placeholder: 'p. es. 14.30', sirka: 8, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Luogo', placeholder: 'p. es. Lugano', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'poznamky', typ: 'textarea', popis: 'Osservazioni', placeholder: 'p. es. le gomme invernali verranno ritirate entro fine mese', sirka: 64 },
    ] },
  ],
  clanky: [
    { nadpis: 'Persone', vysvetleni: 'Chi consegna e chi riceve.', odstavce: ['**Chi consegna:** {{p_jmeno}}, domiciliato/a in {{p_adresa}}', '**Chi riceve:** {{k_jmeno}}, domiciliato/a in {{k_adresa}}'] },
    { nadpis: 'Veicolo', vysvetleni: 'Quale veicolo e perché.', odstavce: [
      'Marca e tipo {{znacka}}, numero di telaio {{vin}}, targhe finora {{spz}} (di seguito «veicolo»).',
      { volba: 'duvod', uvodVzor: 'Motivo della consegna (barrate):', moznosti: { koupe: 'Il veicolo è consegnato in esecuzione del contratto di compravendita del {{smlouva_datum}}.', zapujcka: 'Il veicolo è messo a disposizione per un uso temporaneo.', vraceni: 'Il veicolo prestato in precedenza è restituito.' } },
    ] },
    { nadpis: 'Stato alla consegna', vysvetleni: 'Stato esatto al momento della consegna.', odstavce: [
      'Chilometraggio alla consegna: {{km}}.',
      { volba: 'palivo', uvod: 'Livello del serbatoio:', uvodVzor: 'Livello del serbatoio (barrate):', moznosti: { rezerva: 'riserva.', ctvrt: 'circa 1/4.', pul: 'circa 1/2.', tri: 'circa 3/4.', plna: 'pieno.' } },
      { volba: 'poskozeni', uvodVzor: 'Danni (barrate):', moznosti: { bez: 'Alla consegna il veicolo non presenta danni visibili.', s: 'Alla consegna il veicolo presenta i seguenti danni: {{poskozeni_popis}}' } },
    ] },
    { nadpis: 'Chiavi, documenti e accessori consegnati', odstavce: [
      'Numero di chiavi consegnate: {{klice}}.',
      { vice: 'doklady', uvod: 'Documenti consegnati:', moznosti: { zb1: 'licenza di circolazione', hu: 'rapporto dell’ultimo collaudo', servis: 'libretto di manutenzione', navod: 'istruzioni per l’uso' } },
      { vice: 'vybava', uvod: 'Accessori consegnati:', moznosti: { verbandskasten: 'cassetta di pronto soccorso', warndreieck: 'triangolo di panna', weste: 'giubbotto di sicurezza', reserverad: 'ruota di scorta o kit di riparazione', wagenheber: 'cric e chiave per ruote', reifen: 'secondo treno di pneumatici' }, dalsi: 'altri oggetti: {{vybava_jine}}' },
    ] },
    { nadpis: 'Presa in consegna', vysvetleni: 'Conferma del momento esatto della consegna.', odstavce: [
      'Il veicolo è stato consegnato il {{predani_datum}} alle ore {{predani_cas}}.',
      'Chi riceve conferma di aver ricevuto il veicolo, con le chiavi, i documenti e gli accessori indicati, nello stato descritto.',
      'Osservazioni: {{poznamky}}',
      'Il verbale è redatto in due esemplari; ciascuna parte ne riceve uno.',
    ] },
  ],
};
