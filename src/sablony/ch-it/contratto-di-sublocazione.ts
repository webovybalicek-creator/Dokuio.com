/** Contratto di sublocazione di una camera o di un’abitazione – Svizzera italiana (art. 262 CO: consenso del locatore; rifiuto solo per i motivi legali). */
import type { Sablona } from '../typy';
import { importoInLettere } from './numeri';
import { CO_262, CONSIGLIO_IDENTITA, linkCO, piede } from './fonti';

export const sublocazione: Sablona = {
  kod: 'CHIT-SUBLOCAZIONE', verze: '1.0', aktualizovano: '2026-11-22', overeno: '2026-11-22', zeme: 'ch-it', jazyk: 'it-CH',
  nazev: 'Contratto di sublocazione', podnadpis: 'per una camera o un’abitazione (art. 262 CO)',
  souborPdf: 'contratto-di-sublocazione', paticka: piede('CHIT-SUBLOCAZIONE'),
  mistoPodpisu: 'misto', datumPodpisu: 'datum',
  podpisy: { vlevo: 'Il conduttore principale (sublocatore)', vpravo: 'Il subconduttore' },
  slovo: { n: 'contratto', g: 'del contratto', a: 'il contratto', l: 'nel contratto' },
  pripominky: (d) => [
    ...(typeof d.od === 'string' && d.od ? [{ nazev: 'Inizio della sublocazione', datum: d.od }] : []),
    ...(d.doba === 'urcita' && typeof d.do === 'string' && d.do ? [{ nazev: 'Fine della sublocazione', datum: d.do }] : []),
  ],
  coDal: ['Stampate due esemplari; entrambe le parti firmano entrambi.', 'Allegate una copia del consenso del locatore.', 'Redigete un verbale di consegna all’entrata.'],
  kontrola: [
    `Potete sublocare solo con il consenso del locatore (${linkCO('262')}).`,
    'Il locatore può rifiutare il consenso solo se vi rifiutate di comunicargli le condizioni, se queste sono abusive rispetto alla locazione principale o se la sublocazione gli causa inconvenienti rilevanti.',
    'Rispondete verso il locatore se il subconduttore usa la cosa diversamente da quanto è permesso a voi.',
    'La sublocazione termina al più tardi con la locazione principale.',
    CONSIGLIO_IDENTITA,
  ],
  zdroje: [CO_262],
  kroky: [
    { id: 'strany', nazev: 'Conduttore principale e subconduttore', popis: 'Il conduttore principale cede una camera o l’abitazione al subconduttore.', pole: [
      { id: 'n_jmeno', typ: 'text', popis: 'Conduttore principale – nome', placeholder: 'p. es. Marco Bernasconi', sirka: 34, autocomplete: 'name' },
      { id: 'n_narozeni', typ: 'datum', popis: 'Data di nascita', sirka: 14, polovina: true },
      { id: 'n_adresa', typ: 'text', popis: 'Indirizzo del conduttore principale', placeholder: 'p. es. Via Nassa 12, 6900 Lugano', sirka: 46 },
      { id: 'p_jmeno', typ: 'text', popis: 'Subconduttore – nome', placeholder: 'p. es. Sara Galli', sirka: 34 },
      { id: 'p_narozeni', typ: 'datum', popis: 'Data di nascita', sirka: 14, polovina: true },
      { id: 'p_adresa', typ: 'text', popis: 'Indirizzo attuale del subconduttore', sirka: 46 },
    ] },
    { id: 'byt', nazev: 'Abitazione e consenso', pole: [
      { id: 'byt', typ: 'text', popis: 'Abitazione (indirizzo, posizione)', placeholder: 'p. es. Via Nassa 12, 6900 Lugano, 3° piano', sirka: 46 },
      { id: 'rozsah', typ: 'volba', popis: 'Estensione', moznosti: [ { hodnota: 'cast', popis: 'Parte dell’abitazione (camera)' }, { hodnota: 'cely', popis: 'Abitazione intera' } ] },
      { id: 'cast_popis', typ: 'text', popis: 'Quale parte', placeholder: 'p. es. camera di 14 m² con uso comune di cucina e bagno', sirka: 56, zobrazitKdyz: { pole: 'rozsah', je: 'cast' } },
      { id: 'pronajimatel', typ: 'text', popis: 'Locatore (proprietario o amministrazione)', napoveda: 'Chi ha autorizzato la sublocazione.', sirka: 34 },
      { id: 'souhlas_datum', typ: 'datum', popis: 'Data del consenso', napoveda: 'Allegate il consenso.', sirka: 14, polovina: true },
    ] },
    { id: 'platby', nazev: 'Durata e pagamenti', pole: [
      { id: 'od', typ: 'datum', popis: 'Sublocazione dal', sirka: 14, polovina: true },
      { id: 'doba', typ: 'volba', popis: 'Durata', moznosti: [ { hodnota: 'urcita', popis: 'Determinata' }, { hodnota: 'neurcita', popis: 'Indeterminata' } ] },
      { id: 'do', typ: 'datum', popis: 'Sublocazione fino al', sirka: 14, polovina: true, zobrazitKdyz: { pole: 'doba', je: 'urcita' } },
      { id: 'najemne', typ: 'castka', popis: 'Pigione mensile (CHF)', napoveda: 'Spese accessorie comprese, salvo accordo contrario.', sirka: 14, polovina: true },
      { id: 'splatnost', typ: 'cislo', popis: 'Pagabile entro il (giorno del mese)', placeholder: '1', sirka: 4, polovina: true },
      { id: 'kauce', typ: 'castka', popis: 'Garanzia (CHF, facoltativo)', sirka: 14, polovina: true },
      { id: 'ucet', typ: 'text', popis: 'IBAN del conduttore principale', placeholder: 'CH…', sirka: 30 },
      { id: 'vypoved', typ: 'cislo', popis: 'Termine di disdetta (mesi)', placeholder: '1', sirka: 4, polovina: true },
      { id: 'misto', typ: 'text', popis: 'Luogo', sirka: 18, polovina: true, vychozi: { obecZ: 'n_adresa' } },
      { id: 'datum', typ: 'datum', popis: 'Data', sirka: 14, polovina: true, vychozi: 'dnes' },
    ] },
  ],
  odvozene: { najemne_slovy: (d) => importoInLettere(d.najemne) },
  clanky: [
    { nadpis: 'Parti', odstavce: [
      '**Conduttore principale:** {{n_jmeno}}, nato/a il {{n_narozeni}}, {{n_adresa}} (di seguito «conduttore principale»)',
      '**Subconduttore:** {{p_jmeno}}, nato/a il {{p_narozeni}}, finora domiciliato/a in {{p_adresa}} (di seguito «subconduttore»)',
    ] },
    { nadpis: 'Oggetto della sublocazione', vysvetleni: 'Cosa viene sublocato e su quale consenso si basa.', odstavce: [
      { volba: 'rozsah', uvodVzor: 'Estensione (barrate):', moznosti: { cast: 'Il conduttore principale loca al subconduttore una parte dell’abitazione {{byt}}: {{cast_popis}}.', cely: 'Il conduttore principale loca al subconduttore l’intera abitazione {{byt}}.' } },
      'Il locatore {{pronajimatel}} ha acconsentito alla sublocazione il {{souhlas_datum}}; il consenso è allegato al presente contratto.',
      'La sublocazione termina al più tardi con la locazione principale.',
    ] },
    { nadpis: 'Durata e disdetta', odstavce: [
      { volba: 'doba', uvodVzor: 'Durata (barrate):', moznosti: { urcita: 'La sublocazione inizia il {{od}} e termina il {{do}}.', neurcita: 'La sublocazione inizia il {{od}} ed è conclusa per una durata indeterminata.' } },
      'Può essere disdetta con un preavviso di {{vypoved}} mesi per la fine di un mese, riservate le disposizioni legali imperative.',
      'Alla fine il subconduttore restituisce i locali nello stato in cui li ha ricevuti, riservata l’usura risultante da un uso conforme al contratto.',
    ] },
    { nadpis: 'Pigione e garanzia', odstavce: [
      'Il subconduttore paga mensilmente {{najemne}} (in lettere: {{najemne_slovy}}), spese accessorie comprese, entro il giorno {{splatnost}} di ogni mese sul conto IBAN {{ucet}}.',
      'Il subconduttore presta una garanzia di {{kauce}}. Essa è conteggiata e restituita dopo la fine e la riconsegna dei locali.',
    ] },
    { nadpis: 'Disposizioni finali', odstavce: [
      'Il subconduttore rispetta il regolamento della casa e non cede i locali ad altre persone.',
      'Ogni modifica richiede la forma scritta. Il contratto è redatto in due esemplari.',
    ] },
  ],
};
