/** Accordo di risoluzione consensuale del contratto di locazione – Svizzera italiana. La locazione può essere estinta per accordo senza forma (art. 115 CO); lo scritto serve da prova. */
import type { Sablona } from '../typy';
import { cislo, isoDatum, naDatum, pridejDny } from '../terminy';
import { CO, piede } from './fonti';

export const risoluzioneLocazione: Sablona = {
  kod: 'CHIT-FINE-LOCAZIONE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Accordo di risoluzione del contratto di locazione', podnadpis: 'fine della locazione di comune accordo (art. 115 CO)',
  souborPdf: 'accordo-risoluzione-locazione', paticka: piede('CHIT-FINE-LOCAZIONE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Il locatore / la locatrice', vpravo: 'Il conduttore / la conduttrice' },
  slovo: { n: 'accordo', g: 'dell’accordo', a: 'l’accordo', l: 'nell’accordo' },
  pripominky: (d) => {
    const out: { nazev: string; datum: string }[] = [];
    if (typeof d.konec_dne === 'string' && d.konec_dne) out.push({ nazev: 'Fine della locazione', datum: d.konec_dne });
    const resa = naDatum(d.odevzdani);
    if (resa) {
      out.push({ nazev: 'Riconsegna dell’abitazione e verbale', datum: isoDatum(resa) });
      const giorni = Math.round(cislo(d.jistota_dni));
      if (giorni > 0) out.push({ nazev: 'Restituzione del deposito di garanzia', datum: isoDatum(pridejDny(resa, giorni)) });
    }
    return out;
  },
  coDal: [
    'Stampate due esemplari; entrambe le parti firmano entrambi.',
    'Alla riconsegna redigete un verbale con le letture dei contatori.',
    'Il conduttore disdice elettricità e gas se sono a suo nome.',
    'Tenete d’occhio la data di restituzione della garanzia e il conteggio delle spese accessorie.',
  ],
  kontrola: [
    'Una locazione può essere estinta per accordo senza forma (art. 115 CO) – lo scritto permette tuttavia di provarlo.',
    'Tutti i locatori e tutti i conduttori devono firmare.',
    'Indicate una data di fine precisa e la data di riconsegna.',
    'Regolate quando viene liberato il deposito di garanzia e come sono conteggiate le spese accessorie.',
    'L’accordo sostituisce la disdetta, con i suoi termini e preavvisi.',
  ],
  zdroje: [CO],
  kroky: [
    { id: 'strany', nazev: 'Parti e abitazione', pole: [
      { id: 'p_jmeno', typ: 'text', popis: 'Locatore – nome', placeholder: 'p. es. Marco Bernasconi', sirka: 34, autocomplete: 'name' },
      { id: 'p_adresa', typ: 'text', popis: 'Indirizzo del locatore', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
      { id: 'k_jmeno', typ: 'text', popis: 'Conduttore – nome', napoveda: 'Se ci sono più conduttori, tutti.', placeholder: 'p. es. Laura Rezzonico', sirka: 34 },
      { id: 'k_narozeni', typ: 'datum', popis: 'Data di nascita del conduttore', sirka: 14, polovina: true },
      { id: 'byt', typ: 'text', popis: 'Abitazione (indirizzo, posizione)', placeholder: 'p. es. Via Lugano 7, 6500 Bellinzona, 2° piano', sirka: 46 },
      { id: 'smlouva_datum', typ: 'datum', popis: 'Data del contratto di locazione', sirka: 14, polovina: true },
    ] },
    { id: 'konec', nazev: 'Fine della locazione', pole: [
      { id: 'konec_dne', typ: 'datum', popis: 'La locazione termina il', napoveda: 'Ultimo giorno della locazione. La pigione è dovuta fino a questa data.', sirka: 14, polovina: true },
      { id: 'odevzdani', typ: 'datum', popis: 'Riconsegna dell’abitazione al più tardi il', napoveda: 'Quando il conduttore restituisce le chiavi.', sirka: 14, polovina: true },
      { id: 'jistota', typ: 'volba', popis: 'Deposito di garanzia', moznosti: [ { hodnota: 'odevzdani', popis: 'Restituzione entro un termine fissato dopo la riconsegna' }, { hodnota: 'vyuctovani', popis: 'Restituzione dopo il conteggio delle spese accessorie' }, { hodnota: 'zadna', popis: 'Non è stata prestata alcuna garanzia' } ] },
      { id: 'jistota_dni', typ: 'cislo', popis: 'Restituzione entro (giorni)', placeholder: '30', sirka: 4, polovina: true, zobrazitKdyz: { pole: 'jistota', je: 'odevzdani' } },
      { id: 'ucet', typ: 'text', popis: 'IBAN del conduttore per la garanzia', placeholder: 'CH…', sirka: 30, zobrazitKdyz: { pole: 'jistota', je: ['odevzdani', 'vyuctovani'] } },
      { id: 'dalsi', typ: 'textarea', popis: 'Altri accordi (facoltativo)', placeholder: 'p. es. il conduttore ritinteggia le pareti prima della riconsegna', sirka: 64 },
      { id: 'misto', typ: 'text', popis: 'Luogo', sirka: 18, polovina: true, vychozi: { obecZ: 'p_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  clanky: [
    { nadpis: 'Parti', odstavce: ['**Locatore / locatrice:** {{p_jmeno}}, {{p_adresa}}', '**Conduttore / conduttrice:** {{k_jmeno}}, nato/a il {{k_narozeni}}'] },
    { nadpis: 'Fine della locazione', vysvetleni: 'Quando termina la locazione e quando viene riconsegnata l’abitazione.', odstavce: [
      'Le parti convengono che la locazione dell’abitazione {{byt}}, secondo il contratto di locazione del {{smlouva_datum}}, termina il {{konec_dne}}.',
      'Il conduttore riconsegna l’abitazione con tutte le chiavi al più tardi il {{odevzdani}}, nello stato in cui l’ha ricevuta, riservata l’usura risultante da un uso conforme al contratto. Alla riconsegna viene redatto un verbale.',
      'La pigione e gli acconti sono dovuti fino alla fine della locazione. Le spese accessorie sono conteggiate per il periodo di conteggio usuale.',
    ] },
    { nadpis: 'Garanzia e altri accordi', odstavce: [
      { volba: 'jistota', uvodVzor: 'Deposito di garanzia (barrate):', moznosti: {
        odevzdani: 'Il locatore restituisce la garanzia con gli interessi entro {{jistota_dni}} giorni dalla riconsegna, sul conto IBAN {{ucet}}; può compensare i crediti aperti derivanti dalla locazione.',
        vyuctovani: 'Il locatore restituisce la garanzia con gli interessi dopo il conteggio delle spese accessorie dell’ultimo periodo, sul conto IBAN {{ucet}}; può compensare i crediti aperti derivanti dalla locazione.',
        zadna: 'Il conduttore non ha prestato alcun deposito di garanzia.',
      } },
      'Altri accordi: {{dalsi}}',
      'L’accordo è redatto in due esemplari; ciascuna parte ne riceve uno. Esso prende effetto con la firma di entrambe le parti.',
    ] },
  ],
};
