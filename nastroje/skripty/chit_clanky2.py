import sys; sys.path.insert(0,'/home/claude/skripty')
from chit_zdroje import *
L='contratto-di-locazione-appartamento'; VA='verbale-di-consegna-appartamento'; DL='disdetta-contratto-di-locazione'; RL='accordo-risoluzione-locazione'; SUB='contratto-di-sublocazione'; Q='quietanza'

c('affittare-il-proprio-appartamento','Affittare il proprio appartamento: contratto, pigione e spese','Affittare un appartamento',
 'Affittare un appartamento a un privato in Svizzera: contratto di locazione, pigione netta, spese accessorie elencate, deposito di garanzia, verbale di consegna.',
 'Un buon contratto elenca le spese accessorie una per una, fissa la garanzia su un conto bloccato e i termini di disdetta. Alla consegna, un verbale firmato.',
 'abitare','locazione',[L,VA],
 ['affittare appartamento','contratto di locazione','pigione netta','spese accessorie','deposito di garanzia','locatore privato'],[CO,LOC],
 [('Il contratto di locazione deve essere scritto?','Di solito è concluso per iscritto, anche se la legge non lo impone sempre. Lo scritto evita controversie su pigione, spese e termini.'),
  ('Quali spese accessorie posso chiedere?','Solo quelle elencate una per una nel contratto. Se non sono menzionate, sono comprese nella pigione (art. 257a CO).'),
  ('Serve il modulo ufficiale per la pigione iniziale?','In alcuni Cantoni sì (art. 270 cpv. 2 CO). Informatevi presso l’autorità cantonale di conciliazione.')],
'''
Affittare un appartamento a un privato è semplice se il contratto è **chiaro su soldi e termini**. Ecco i punti che contano.

## 1. Ente locato

Indirizzo, piano, numero di **locali** (secondo l’uso svizzero, p. es. 3,5), superficie, cantina o posteggio. L’arredamento si descrive meglio nel **verbale di consegna**.

## 2. Pigione e spese accessorie

Distinguete la **pigione netta** dall’**acconto per le spese accessorie**. Il conduttore paga solo le spese **elencate una per una** nel contratto (art. 257a CO): riscaldamento, acqua calda, custode, pulizia delle parti comuni. Le altre sono comprese nella pigione. Il locatore allestisce un conteggio annuale.

## 3. Deposito di garanzia

Al massimo **tre pigioni mensili**, su un conto bloccato **a nome del conduttore** (art. 257e CO). Non va tenuto in contanti dal locatore.

## 4. Disdetta

Almeno **tre mesi** per un termine usuale o pattuito (art. 266c CO). Il conduttore disdice per iscritto; il locatore deve usare il **modulo ufficiale** approvato dal Cantone.

## 5. Modulo ufficiale e notifica

In alcuni Cantoni la pigione iniziale va comunicata con il modulo ufficiale. Il conduttore si annuncia al **controllo abitanti** del Comune entro 14 giorni.

## In breve

Spese elencate, garanzia su conto bloccato, tre mesi di disdetta, verbale alla consegna – e il modulo ufficiale dove il Cantone lo prevede.
''')

c('deposito-di-garanzia','Deposito di garanzia: importo, conto bloccato e restituzione','Deposito di garanzia',
 'Tutto sul deposito di garanzia per un appartamento in Svizzera: al massimo tre pigioni, conto bloccato a nome del conduttore, restituzione dopo la riconsegna.',
 'Al massimo tre pigioni, su un conto bloccato a nome del conduttore. La banca la libera solo con il consenso di entrambi o in base a una decisione.',
 'abitare','locazione',[L,VA,RL],
 ['deposito di garanzia','garanzia affitto','conto di garanzia','restituzione garanzia','cauzione affitto svizzera'],[CO,LOC],
 [('Quanto può chiedere il locatore?','Al massimo tre pigioni mensili per un’abitazione (art. 257e CO).'),
  ('Il locatore può tenere la garanzia in contanti?','No. Deve essere depositata presso una banca su un conto di risparmio o un deposito a nome del conduttore.'),
  ('Quando viene restituita la garanzia?','Con il consenso di entrambe le parti, in base a una decisione o se il locatore non fa valere pretese entro un anno dalla fine della locazione (art. 257e cpv. 3 CO).')],
'''
Il deposito di garanzia protegge il locatore da pigioni non pagate e danni. La legge però **lo limita e lo blinda** a favore del conduttore.

## 1. Quanto

Per un’abitazione al massimo **tre pigioni mensili** (art. 257e CO). Conta la pigione netta più gli acconti, secondo l’uso; indicate l’importo esatto nel contratto.

## 2. Dove

Su un **conto di risparmio o un deposito bancario a nome del conduttore**. Il locatore non può tenerla in tasca né sul proprio conto. In alternativa esistono garanzie tramite assicurazione, se il locatore le accetta.

## 3. Restituzione

La banca libera la garanzia solo:

- con il **consenso di entrambe le parti**,
- in base a un **precetto esecutivo non contestato** o a una **sentenza** passata in giudicato,
- oppure se il locatore **non fa valere alcuna pretesa entro un anno** dalla fine della locazione.

## 4. Alla riconsegna

Un **verbale di riconsegna** firmato è decisivo: mostra quali difetti esistono e chi ne risponde. Il conduttore non risponde dell’usura normale. Il locatore deve avvisare subito i difetti (art. 267a CO).

## 5. Interessi

Gli interessi del conto spettano al conduttore e restano sul conto fino alla restituzione.

## In breve

Massimo tre pigioni, conto a nome del conduttore, restituzione con il consenso di entrambi o dopo un anno senza pretese.
''')

c('sublocazione-consenso','Sublocare una camera o l’appartamento: cosa dice la legge','Sublocazione',
 'Sublocazione in Svizzera: consenso del locatore, motivi per rifiutarlo, pigione non abusiva, durata e responsabilità del conduttore principale. Con un modello gratis.',
 'Si può sublocare con il consenso del locatore, che può rifiutarlo solo in tre casi. Il conduttore principale resta responsabile verso il locatore.',
 'abitare','locazione',[SUB,L],
 ['sublocazione','sublocare camera','consenso del locatore','subaffitto appartamento','coinquilino'],[CO,LOC],
 [('Il locatore può vietare la sublocazione?','Può rifiutare il consenso solo se non gli comunicate le condizioni, se queste sono abusive rispetto alla locazione principale o se gli causano un pregiudizio essenziale (art. 262 CO).'),
  ('Posso guadagnare con la sublocazione?','Una pigione nettamente superiore a quella che pagate può essere abusiva e giustificare il rifiuto. Un supplemento per mobili o servizi deve essere giustificato.'),
  ('Chi risponde dei danni del subconduttore?','Voi, verso il locatore, se il subconduttore usa la cosa diversamente da quanto è permesso a voi.')],
'''
Una camera libera, un semestre all’estero: la **sublocazione** è una soluzione comune. Per farla bene servono il **consenso del locatore** e un contratto chiaro.

## 1. Il consenso

Il conduttore può sublocare tutta o parte dell’abitazione **con il consenso del locatore** (art. 262 CO). Chiedetelo per iscritto indicando il subconduttore, la parte sublocata, la pigione e la durata.

## 2. Quando il locatore può rifiutare

Solo in tre casi:

- rifiutate di comunicargli le **condizioni** della sublocazione,
- le condizioni sono **abusive** rispetto alla locazione principale,
- la sublocazione gli causa un **pregiudizio essenziale**.

Altri motivi non bastano.

## 3. Pigione

Restate vicini alla pigione effettiva. Un supplemento per l’arredamento è ammesso se giustificato; un guadagno sproporzionato no.

## 4. Durata e fine

La sublocazione termina **al più tardi con la locazione principale**. Fissate durata e termine di disdetta nel contratto di sublocazione.

## 5. Responsabilità

Il conduttore principale resta responsabile verso il locatore. Redigete un **verbale di consegna** all’entrata e chiedete una garanzia al subconduttore.

## In breve

Consenso scritto del locatore, condizioni comunicate, pigione non abusiva, fine al più tardi con la locazione principale.
''')

c('disdire-la-locazione-termini','Disdire la locazione: tre mesi, termini e partenza anticipata','Disdire la locazione',
 'Come disdire un contratto di locazione in Svizzera: forma scritta, preavviso di tre mesi per un termine, abitazione familiare, nuovo conduttore e accordo di risoluzione.',
 'Per iscritto, firmata a mano, ricevuta dal locatore prima dell’inizio del termine di tre mesi. Se volete partire prima: nuovo conduttore o accordo.',
 'abitare','disdetta',[DL,RL,VA],
 ['disdire la locazione','disdetta affitto','termine di disdetta tre mesi','nuovo conduttore','partenza anticipata appartamento'],[CO,LOC],
 [('Basta un’e-mail per disdire?','No. La disdetta deve essere scritta e firmata a mano (art. 266l CO). Speditela per raccomandata.'),
  ('Quando deve arrivare la lettera?','Prima dell’inizio del termine di tre mesi: conta la ricezione da parte del locatore, non la data d’invio.'),
  ('Cosa succede se parto fuori termine?','Restate debitori della pigione fino al prossimo termine, a meno che proponiate un nuovo conduttore solvibile e accettabile (art. 264 CO).')],
'''
La disdetta di un’abitazione ha **regole precise di forma e di tempo**. Un errore può costare mesi di pigione.

## 1. Forma

La disdetta deve essere **scritta** e **firmata a mano** (art. 266l CO). Per un’**abitazione familiare** firmano entrambi i coniugi o partner registrati (art. 266m CO). Speditela per **raccomandata**.

## 2. Termine

Almeno **tre mesi** per un termine previsto dal contratto o usuale nel luogo (art. 266c CO). La lettera deve **arrivare** al locatore prima dell’inizio del termine. Controllate i termini nel vostro contratto: spesso sono la fine di ogni mese tranne dicembre.

## 3. Partenza anticipata

Se volete andarvene prima:

- proponete un **nuovo conduttore** solvibile e disposto a riprendere la locazione alle stesse condizioni: siete liberati dai vostri obblighi (art. 264 CO);
- oppure concordate con il locatore un **accordo di risoluzione** con una data precisa.

## 4. Riconsegna

Fissate una data per la **riconsegna**, pulite l’abitazione e redigete un verbale con le letture dei contatori. Chiedete la liberazione del deposito di garanzia.

## In breve

Lettera firmata, raccomandata, tre mesi per un termine, entrambi i coniugi per l’abitazione familiare – o nuovo conduttore e accordo per partire prima.
''')

c('riconsegna-dell-appartamento','Riconsegna dell’appartamento: difetti, usura normale e garanzia','Riconsegna dell’appartamento',
 'Come prepararsi alla riconsegna di un appartamento in Svizzera: verbale, usura normale, difetti da avvisare subito e deposito di garanzia.',
 'Alla riconsegna il locatore deve verificare lo stato e avvisare subito i difetti. Il conduttore non risponde dell’usura normale. Un verbale firmato evita le discussioni.',
 'abitare','disdetta',[VA,RL,DL],
 ['riconsegna appartamento','verbale di riconsegna','usura normale','difetti fine locazione','restituzione deposito'],[CO,DIF],
 [('Il conduttore deve ritinteggiare?','Non per l’usura normale dovuta all’uso conforme. Risponde invece dei danni che vanno oltre, p. es. buchi o macchie insolite.'),
  ('Entro quando il locatore deve segnalare i difetti?','Subito dopo la riconsegna. Se tarda, perde i suoi diritti, salvo per i difetti occulti (art. 267a CO).'),
  ('Cosa faccio se scopro difetti dopo l’entrata?','Notificateli per iscritto al locatore il prima possibile; secondo ch.ch di solito entro 10–30 giorni, a seconda del contratto.')],
'''
La riconsegna decide spesso le sorti del **deposito di garanzia**. Prepararla bene evita discussioni.

## 1. Prima della data

Riparate i **piccoli difetti** che si eliminano con semplici lavori di pulizia o manutenzione (art. 259 CO): lampadine, guarnizioni, pomelli. Pulite a fondo l’abitazione, la cantina e il balcone.

## 2. Usura normale

Il conduttore **non risponde dell’usura** risultante da un uso conforme al contratto: pareti un po’ ingrigite dopo anni, pavimenti consumati nei punti di passaggio. Risponde invece dei **danni** che vanno oltre.

## 3. Il verbale

Percorrete l’abitazione insieme, locale per locale. Annotate i **contatori**, i difetti con la loro posizione, le **chiavi** consegnate e gli accordi su chi ripara cosa. Firmate entrambi e tenete una copia.

## 4. Avviso dei difetti

Il locatore deve **verificare** lo stato alla riconsegna e **avvisare immediatamente** il conduttore dei difetti di cui questi risponde; altrimenti perde i suoi diritti, salvo per i difetti occulti (art. 267a CO).

## 5. Garanzia

Dopo la riconsegna la garanzia viene liberata con il consenso di entrambi. Se il locatore non fa valere pretese entro un anno, il conduttore può chiederne la restituzione alla banca.

## In breve

Piccoli lavori fatti, pulizia, verbale firmato con contatori e chiavi, difetti avvisati subito – poi liberazione della garanzia.
''')

c('acquisto-online-diritto-di-restituzione','Acquisto online in Svizzera: c’è un diritto di restituzione?','Restituzione di un acquisto online',
 'In Svizzera non esiste un diritto legale di revoca per gli acquisti online: cosa vale, cosa prevedono i negozi, garanzia per i difetti e dove rivolgersi.',
 'Per gli acquisti online la legge svizzera non prevede un diritto di revoca di 14 giorni. Conta ciò che concede il negozio nelle condizioni generali.',
 'acquisti','restituzione',['avviso-dei-difetti','revoca-contratto-vendita-a-domicilio'],
 ['acquisto online restituzione','diritto di revoca online svizzera','reso acquisto internet','condizioni generali negozio online','garanzia acquisto online'],[CO,RES,SECOA],
 [('Ho 14 giorni per restituire un acquisto online?','Non per legge. Molti negozi concedono volontariamente un diritto di restituzione; verificate le loro condizioni generali.'),
  ('E se la merce è difettosa?','Si applica la garanzia per i difetti: segnalate subito il difetto per iscritto (art. 201 CO).'),
  ('A chi posso rivolgermi in caso di problemi?','La SECO indica servizi di mediazione per il commercio elettronico e le associazioni dei consumatori; in Ticino c’è l’ACSI.')],
'''
Chi è abituato alle regole dell’UE resta sorpreso: **in Svizzera non esiste un diritto legale di revoca** per gli acquisti online.

## 1. Cosa vale per legge

Il diritto di revoca di 14 giorni (art. 40a segg. CO) riguarda solo i contratti conclusi **a domicilio, sul posto di lavoro, per strada, durante una gita pubblicitaria o per telefono**. Gli acquisti su un sito internet non ne fanno parte.

## 2. Cosa concedono i negozi

Molti negozi offrono **volontariamente** un diritto di restituzione o di cambio, spesso di 14 o 30 giorni. Valgono le **condizioni generali**: termini, stato della merce, chi paga la spedizione. Per i prodotti per l’igiene e quelli scontati la sostituzione è spesso rifiutata.

## 3. Se il prodotto è difettoso

La **garanzia per i difetti** vale anche online. Segnalate il difetto **subito** dopo averlo scoperto (art. 201 CO). Molti commercianti limitano la garanzia alla riparazione o alla sostituzione nelle loro condizioni.

## 4. Prima di comprare

Leggete le condizioni di restituzione, conservate la conferma d’ordine e fate screenshot delle condizioni al momento dell’acquisto. Se volete essere sicuri, fatevi confermare per iscritto il diritto di restituzione.

## 5. Se non vi accordate

La SECO indica servizi di mediazione per il commercio elettronico; le associazioni dei consumatori possono consigliarvi.

## In breve

Online nessun diritto di revoca per legge, ma garanzia per i difetti e condizioni del negozio da leggere prima.
''')

c('vendita-telefonica-revoca-14-giorni','Vendita a domicilio o per telefono: revocare entro 14 giorni','Revoca entro 14 giorni',
 'Contratto concluso alla porta, per telefono o per strada in Svizzera: diritto di revoca di 14 giorni da 100 franchi, eccezioni, forma e restituzione delle prestazioni.',
 'Vi hanno venduto qualcosa al telefono o alla porta? Per prestazioni oltre 100 franchi potete revocare entro 14 giorni, senza motivazione, per iscritto.',
 'acquisti','restituzione',['revoca-contratto-vendita-a-domicilio'],
 ['revoca vendita telefonica','vendita porta a porta','diritto di revoca 14 giorni','annullare contratto telefono','art. 40a CO'],[CO,RES],
 [('Da quando decorre il termine?','Dal momento in cui avete concluso il contratto e siete stati informati per iscritto del diritto di revoca (art. 40e CO).'),
  ('Devo motivare la revoca?','No. Basta comunicarla entro il termine, per iscritto o in un’altra forma che ne permetta la prova.'),
  ('Quando non c’è diritto di revoca?','Se avete chiesto voi le trattative, se avete ordinato a una bancarella di mercato o di fiera o se la prestazione non supera 100 franchi (art. 40c CO).')],
'''
Un abbonamento venduto al telefono, un aspirapolvere alla porta: in questi casi la legge vi dà un **diritto di revoca di 14 giorni** (art. 40a segg. CO).

## 1. Quando vale

Se l’offerta vi è stata fatta:

- a domicilio o alla porta,
- sul posto di lavoro,
- sui mezzi pubblici o per strada,
- durante una gita pubblicitaria,
- **per telefono** o con un mezzo simile.

E se la prestazione supera **100 franchi**.

## 2. Quando non vale

Se avete **chiesto voi** le trattative, se avete ordinato a una **bancarella di mercato o di fiera** (art. 40c CO) o per gli acquisti **online**, per i quali la legge svizzera non prevede un diritto di revoca.

## 3. Il termine

**14 giorni**. Decorre da quando avete concluso il contratto e il fornitore vi ha informati **per iscritto** del diritto di revoca (art. 40e CO). È sufficiente **spedire** la revoca entro l’ultimo giorno.

## 4. La forma

Per iscritto o in un’altra forma che permetta la prova per testo, p. es. e-mail. Meglio una **raccomandata**. Non serve alcuna motivazione.

## 5. Dopo la revoca

Le prestazioni ricevute vanno restituite; il fornitore rimborsa gli importi pagati (art. 40f CO).

## In breve

Alla porta o al telefono, oltre 100 franchi: 14 giorni per revocare, per iscritto, senza giustificazioni.
''')

c('prodotto-difettoso-garanzia','Prodotto difettoso: garanzia, avviso immediato e diritti','Garanzia per difetti',
 'Prodotto difettoso in Svizzera: avviso immediato dei difetti, redibizione o riduzione del prezzo, riparazione secondo le condizioni, prescrizione di due anni.',
 'Segnalate il difetto subito per iscritto. Per legge potete annullare la vendita o ridurre il prezzo; la riparazione dipende da garanzia e condizioni generali.',
 'acquisti','garanzia',['avviso-dei-difetti'],
 ['prodotto difettoso','garanzia per difetti','avviso dei difetti','riduzione del prezzo','azione redibitoria','prescrizione garanzia'],[CO,RES],
 [('Quanto dura la garanzia?','Due anni dalla consegna; per una cosa d’occasione il commerciante può ridurla a un anno (art. 210 CO).'),
  ('Ho diritto alla riparazione?','Per legge potete annullare la vendita o ridurre il prezzo (art. 205 CO). La riparazione è dovuta se prevista dalla garanzia o dalle condizioni generali.'),
  ('Cosa succede se segnalo il difetto troppo tardi?','La merce si considera accettata e perdete i diritti per quel difetto (art. 201 CO).')],
'''
Uno smartphone che si spegne, una lavatrice che si blocca: la **garanzia per i difetti** vi protegge, ma solo se agite **in fretta e per iscritto**.

## 1. Avviso immediato

Verificate la merce dopo la consegna e **segnalate subito** i difetti che scoprite (art. 201 CO). Se aspettate troppo, la merce si considera accettata. Per i difetti che appaiono più tardi, avvisate appena li scoprite.

## 2. I diritti di legge

- **Annullare la vendita** (azione redibitoria) restituendo la merce contro rimborso del prezzo,
- **ridurre il prezzo** in proporzione al difetto,
- per una cosa fungibile, chiedere una **cosa senza difetti** (art. 205–206 CO).

La **riparazione** non è un diritto di legge: spesso la prevedono la garanzia del produttore o le condizioni generali.

## 3. Condizioni generali

Molti commercianti limitano la garanzia alla riparazione o alla sostituzione. Leggete le condizioni di garanzia prima di scrivere.

## 4. Prescrizione

I diritti si prescrivono in **due anni** dalla consegna; per una cosa d’occasione il commerciante può ridurre il termine a un anno (art. 210 CO).

## 5. Come procedere

Lettera o e-mail con descrizione del difetto, data dell’acquisto e della scoperta, richiesta concreta e termine di risposta. Allegate foto e scontrino.

## In breve

Avviso subito, richiesta chiara, termine di risposta – e due anni di tempo dalla consegna.
''')

c('vendita-tra-privati-annuncio','Vendere un oggetto con un annuncio: contratto, pagamento e truffe','Vendita con annuncio',
 'Vendere un oggetto d’occasione con un annuncio in Svizzera: contratto tra privati, esclusione della garanzia, pagamento sicuro e come riconoscere le truffe più comuni.',
 'Descrivete l’oggetto e i difetti, consegnate solo dopo aver ricevuto il denaro e diffidate dei link di pagamento. Un contratto breve evita discussioni.',
 'acquisti','vendita-privati',['contratto-di-compravendita-tra-privati',Q],
 ['vendita con annuncio','vendere oggetto usato','contratto tra privati','truffa annuncio','pagamento sicuro privato'],[CO],
 [('Posso escludere la garanzia?','Sì, tra privati è usuale. Non vale però per i difetti che dissimulate con dolo (art. 199 CO).'),
  ('Come riconosco una truffa?','Diffidate di chi paga «troppo», manda link per «ricevere» il denaro o chiede di spedire prima del pagamento.'),
  ('Serve un contratto per una bici o un telefono?','Non è obbligatorio, ma per oggetti di valore un contratto breve con descrizione e difetti noti protegge entrambi.')],
'''
Bici, telefono, divano: vendere con un annuncio è comodo, ma attira anche i truffatori. Alcune regole semplici bastano.

## 1. Descrizione onesta

Marca, modello, **numero di serie**, accessori e **difetti noti**. Tra privati l’esclusione della garanzia è usuale, ma non copre un difetto dissimulato con dolo (art. 199 CO).

## 2. Pagamento

- **Contanti** alla consegna, contati davanti all’acquirente, con una quietanza.
- **Bonifico** solo se l’importo è visibile sul vostro conto **prima** della consegna.

Non consegnate mai per una «conferma di pagamento» inviata per e-mail o messaggio.

## 3. Le truffe più comuni

- l’acquirente paga «per errore» di più e chiede la restituzione della differenza,
- un **link** per «ricevere» il denaro che chiede i dati della carta,
- la richiesta di spedire tramite un corriere «già pagato».

## 4. Il contratto

Per oggetti di valore un contratto breve indica le parti, l’oggetto, i difetti, il prezzo e la garanzia. Entrambi firmano due esemplari.

## 5. Consegna

L’acquirente verifica l’oggetto alla consegna e segnala subito i difetti (art. 201 CO). Dopo la firma, la proprietà passa con pagamento e consegna.

## In breve

Descrizione precisa, denaro prima dell’oggetto, niente link sospetti, contratto per gli oggetti di valore.
''')

c('contratto-con-un-artigiano','Lavori con un artigiano: contratto d’appalto, prezzo e collaudo','Contratto con un artigiano',
 'Affidare lavori a un artigiano in Svizzera: contratto d’appalto, prezzo fisso o preventivo approssimativo, acconto, collaudo, avviso dei difetti e prescrizione.',
 'Descrivete l’opera, scegliete tra prezzo fisso e preventivo, verificate l’opera al collaudo e riservate subito i difetti. Così evitate le sorprese.',
 'acquisti','artigiani',['contratto-d-appalto',Q,'diffida-di-pagamento'],
 ['contratto con artigiano','contratto d’appalto','preventivo approssimativo','prezzo fisso lavori','collaudo opera','difetti lavori'],[CO],
 [('Cosa cambia tra prezzo fisso e preventivo approssimativo?','Con il prezzo fisso l’appaltatore non può chiedere di più (art. 373 CO). Con il preventivo, se il costo lo supera eccessivamente, potete recedere (art. 375 CO).'),
  ('Entro quando devo segnalare un difetto?','Subito dopo la verifica dell’opera; per un’opera immobiliare entro 60 giorni (art. 367 CO).'),
  ('Quanto durano i diritti per i difetti?','2 anni dal collaudo, 5 anni per un’opera immobiliare (art. 371 CO).')],
'''
Tinteggiare il soggiorno, rifare le piastrelle, riparare il tetto: con un artigiano concludete un **contratto d’appalto** (art. 363 segg. CO). L’appaltatore deve un’**opera finita e senza difetti**, non solo ore di lavoro.

## 1. Descrivere l’opera

Estensione, materiali, misure, luogo. Allegate l’**offerta**. Più è preciso, meno discussioni sui «lavori supplementari».

## 2. Il prezzo

- **Prezzo fisso**: l’appaltatore non può chiedere di più anche se lavora di più (art. 373 CO).
- **Preventivo approssimativo**: se il costo lo supera in modo eccessivo senza vostra colpa, potete recedere dal contratto (art. 375 CO).

Concordate per iscritto ogni lavoro supplementare con il suo prezzo.

## 3. Termini e acconto

Fissate inizio e ultimazione. Un acconto è usuale per i materiali; pagate con bonifico o contro quietanza.

## 4. Collaudo

Dopo la consegna **verificate l’opera** e **segnalate subito** i difetti; per un’opera immobiliare entro **60 giorni** (art. 367 CO). Se accettate l’opera senza riserve, perdete i diritti per i difetti riconoscibili (art. 370 CO). Un verbale di collaudo con i difetti e i termini di eliminazione è la soluzione migliore.

## 5. Prescrizione

2 anni dal collaudo, **5 anni** per un’opera immobiliare (art. 371 CO).

## In breve

Opera descritta, prezzo chiaro, supplementi per iscritto, verifica e riserva dei difetti al collaudo.
''')

c('procura-quando-basta','Procura semplice: quando basta e quando serve di più','Procura',
 'Quando basta una procura semplice in Svizzera e quando servono forme particolari: posta, Ufficio della circolazione, banca, fondi, mandato precauzionale.',
 'Per ritirare una raccomandata o sbrigare una pratica basta spesso una procura scritta e precisa. Per banche, fondi o la propria incapacità servono altre forme.',
 'quotidiano','procura',['procura','procura-ufficio-della-circolazione'],
 ['procura semplice','procura posta','procura ritiro raccomandata','procura banca','mandato precauzionale'],[CO,CC360],
 [('La procura deve essere autenticata?','Per una procura semplice no. Per fondi, società o certe autorità può servire un’autenticazione o un modulo particolare.'),
  ('Una procura generale è accettata?','Spesso no. Una procura concreta con la faccenda descritta precisamente è accettata più facilmente.'),
  ('Cosa serve per il caso della mia incapacità?','Un mandato precauzionale (art. 360 segg. CC), da redigere a mano o con atto pubblico.')],
'''
Una procura permette a un’altra persona di **agire in vostro nome** (art. 32 segg. CO). Nella vita quotidiana una procura semplice basta spesso – se è **precisa**.

## 1. Cosa scrivere

Chi dà la procura, a chi, **per cosa esattamente** e fino a quando. «Ritirare la raccomandata n. … all’ufficio postale di Lugano 1» funziona meglio di «rappresentarmi in tutte le faccende».

## 2. Dove basta

- ritiro di lettere e pacchi alla posta,
- pratiche presso l’**Ufficio della circolazione** (alcuni Cantoni hanno un proprio modulo),
- iscrizione a scuola, ritiro di documenti, consegna di chiavi.

Il mandatario presenta l’**originale** con il proprio documento d’identità.

## 3. Dove serve di più

- **Banche**: di solito vogliono il proprio modulo.
- **Fondi e società**: spesso firma autenticata o atto pubblico.
- **Autorità**: informatevi prima sulla forma richiesta.

## 4. La propria incapacità

Per il caso in cui non siate più capaci di discernimento serve un **mandato precauzionale** (art. 360 segg. CC), redatto interamente a mano o con atto pubblico. Una procura ordinaria non lo sostituisce.

## 5. Revoca

Potete revocare la procura in ogni momento. Chiedete la restituzione dell’originale.

## In breve

Procura scritta e concreta per le pratiche quotidiane; moduli o autenticazione per banche e fondi; mandato precauzionale per l’incapacità.
''')

c('figlio-in-viaggio-senza-genitori','Figlio in viaggio senza i genitori: l’autorizzazione raccomandata','Bambini in viaggio',
 'Il figlio viaggia all’estero con un solo genitore, con i nonni o da solo: dichiarazione di consenso raccomandata dal DFAE, contenuto, autenticazione e regole dei Paesi.',
 'Il DFAE raccomanda vivamente una dichiarazione di consenso quando un minorenne viaggia con un solo genitore o senza i genitori. Alcuni Paesi la esigono.',
 'quotidiano','bambini',['autorizzazione-viaggio-minorenne'],
 ['figlio viaggio senza genitori','autorizzazione di viaggio minorenne','dichiarazione di consenso','minorenne viaggia da solo','viaggio con un solo genitore'],[DFAE,UFG],
 [('L’autorizzazione è obbligatoria in Svizzera?','No, ma alcuni Paesi la esigono all’entrata o all’uscita. Il DFAE la raccomanda vivamente.'),
  ('Bisogna autenticare la firma?','Solo se il Paese di destinazione lo esige o per maggiore sicurezza. Il Comune di domicilio o un notaio possono autenticarla.'),
  ('Vale anche per un trasferimento all’estero?','No. Un trasferimento del luogo di dimora del figlio richiede, con l’autorità parentale congiunta, la decisione di entrambi i genitori.')],
'''
Vacanze con la nonna, campo estivo, viaggio con un solo genitore: secondo il **DFAE** in questi casi si raccomanda vivamente una **dichiarazione di consenso** dei genitori.

## 1. Perché serve

Ogni Paese ha le sue regole di entrata e di soggiorno per i minorenni. Alcune autorità controllano alla frontiera o all’aeroporto che il figlio viaggi con il consenso di chi ha l’autorità parentale.

## 2. Cosa scrivere

- nome, data di nascita e documento d’identità dei **genitori** e del **figlio**,
- l’**accompagnatore** (o «da solo» con accompagnamento della compagnia aerea),
- **destinazione**, Paesi di transito, **date** e luogo di soggiorno,
- **motivo del viaggio**,
- **numeri di telefono** con prefisso +41.

## 3. Chi firma

Il genitore o i genitori titolari dell’autorità parentale che **non accompagnano** il figlio. Firmate a mano.

## 4. Autenticazione

Se il Paese lo esige o per maggiore sicurezza, fate **autenticare la firma** presso il Comune di domicilio o un notaio. Alcuni Paesi hanno un proprio modulo: usate quello.

## 5. Prima di partire

Verificate le condizioni d’entrata presso l’ambasciata o il consolato e i consigli di viaggio del DFAE. Il figlio porta l’originale e il proprio passaporto o carta d’identità.

## In breve

Dichiarazione firmata dal genitore assente, dati completi, telefoni raggiungibili – e un controllo delle regole del Paese di destinazione.
''')

c('prestare-un-oggetto-a-un-amico','Prestare un oggetto a un amico: comodato e restituzione','Prestare una cosa',
 'Prestare gratuitamente un rimorchio, un attrezzo o del materiale in Svizzera: contratto di comodato, uso pattuito, spese di manutenzione, restituzione e responsabilità.',
 'Nel comodato prestate una cosa gratis. Fissate stato, uso e data di restituzione: senza durata né uso, potete chiederla indietro in ogni momento.',
 'quotidiano','comodato',['contratto-di-comodato'],
 ['prestare un oggetto','contratto di comodato','prestito gratuito','prestare il rimorchio','restituzione oggetto prestato'],[CO],
 [('Quando posso chiedere indietro la cosa?','Alla data pattuita o quando l’uso è compiuto. Senza durata né uso determinati, in ogni momento (art. 310 CO).'),
  ('Chi paga la benzina o la pulizia?','Il comodatario sopporta le spese ordinarie di manutenzione (art. 307 CO).'),
  ('E se la cosa si rompe?','Il comodatario risponde dei danni causati da un uso contrario al contratto; se cede la cosa a terzi risponde anche del caso fortuito (art. 306 CO).')],
'''
Prestare il rimorchio al vicino o la tenda a un amico è un favore. Un **contratto di comodato** (art. 305 segg. CO) evita che diventi una lite.

## 1. Comodato o locazione?

Nel comodato l’uso è **gratuito** e il comodatario restituisce **la stessa cosa**. Se chiedete un compenso, si tratta di una locazione.

## 2. Descrivere la cosa

Fabbricante, modello, numero di serie, accessori e **stato alla consegna**. Una foto con la data aiuta. Indicate anche un valore approssimativo, utile in caso di perdita.

## 3. Uso e durata

Scrivete per **cosa** viene usata la cosa e **fino a quando**. Senza durata né uso determinati, il comodante può chiederla indietro in ogni momento (art. 310 CO). Può farlo anche prima del termine se il comodatario la usa in modo contrario al contratto o se lui stesso ne ha un bisogno urgente e imprevisto (art. 309 CO).

## 4. Spese e responsabilità

Il comodatario sopporta le **spese ordinarie** di manutenzione (art. 307 CO). Non può cedere la cosa a terzi senza permesso; se lo fa, risponde anche del caso fortuito (art. 306 CO).

## 5. Restituzione

Esaminate la cosa insieme alla restituzione e confermate lo stato per iscritto.

## In breve

Gratis, descritta, con uso e data di restituzione – e un controllo insieme alla fine.
''')

c('dimettersi-termini-di-disdetta','Dimettersi in Svizzera: termini, tempo di prova e disoccupazione','Dimettersi',
 'Come dimettersi in Svizzera: forma, termini di disdetta secondo l’anno di servizio, tempo di prova, attestato di lavoro, vacanze e conseguenze per la disoccupazione.',
 'Nel tempo di prova 7 giorni, poi da 1 a 3 mesi per la fine di un mese. Conta la ricezione da parte del datore di lavoro. Senza nuovo impiego: attenzione alla disoccupazione.',
 'lavoro','dimissioni',['lettera-di-dimissioni'],
 ['dimettersi','lettera di dimissioni','termine di disdetta lavoro','tempo di prova','attestato di lavoro','disoccupazione dimissioni'],[CO,DIS,PROVA,SECO,DISOC],
 [('Quali sono i termini di disdetta?','Nel tempo di prova 7 giorni. Poi, salvo altro accordo scritto: 1 mese nel 1° anno, 2 mesi dal 2° al 9° anno, 3 mesi dal 10° anno, per la fine di un mese (art. 335c CO).'),
  ('Devo motivare le dimissioni?','No. Se il datore di lavoro lo chiede dovete però indicarne il motivo per iscritto.'),
  ('Posso dimettermi durante una malattia?','Sì. I periodi di protezione proteggono solo da un licenziamento da parte del datore di lavoro.')],
'''
Avete trovato un nuovo posto o volete cambiare? Le dimissioni sono semplici, ma **termine e ricezione** contano.

## 1. Forma

La legge non richiede una forma particolare, ma **contratto, CCL o CNL** possono prevedere quella scritta. In ogni caso la lettera firmata è la prova più semplice. Consegnatela di persona con conferma di ricezione o per raccomandata.

## 2. Termini

- **Tempo di prova**: 7 giorni (art. 335b CO). Il tempo di prova dura un mese, salvo accordo scritto fino a tre mesi.
- **Dopo**: 1 mese nel 1° anno di servizio, 2 mesi dal 2° al 9°, 3 mesi dal 10°, **per la fine di un mese** (art. 335c CO), salvo altro accordo scritto.

Il termine decorre dalla **ricezione** da parte del datore di lavoro. Spedite qualche giorno prima della fine del mese.

## 3. Prima di partire

Chiedete l’**attestato di lavoro** (art. 330a CO) e un conteggio delle **vacanze** e delle ore straordinarie. Una partenza anticipata è possibile solo con il consenso del datore di lavoro: mettetela per iscritto.

## 4. Disoccupazione

Senza nuovo impiego, le dimissioni possono comportare una **sospensione temporanea** delle indennità. Iscrivetevi all’**URC** il prima possibile, già durante il termine di disdetta.

## In breve

Lettera firmata, termine giusto per la fine del mese, attestato di lavoro richiesto – e iscrizione all’URC se non avete ancora un nuovo posto.
''')

c('disdire-assicurazione-cassa-malati-abbonamento','Disdire un’assicurazione, la cassa malati o un abbonamento','Disdire un contratto',
 'Come disdire un’assicurazione, la cassa malati, il cellulare, il fitness o un mandato in Svizzera: termini, forma, art. 35a LCA, 30 novembre e mandato revocabile.',
 'Assicurazioni dopo tre anni con tre mesi di preavviso, cassa malati di base entro il 30 novembre, mandati in ogni tempo. Il resto dipende dalle condizioni generali.',
 'lavoro','disdire-contratto',['lettera-di-disdetta'],
 ['disdire assicurazione','disdetta cassa malati','disdire abbonamento','disdire cellulare','revoca mandato','art. 35a LCA'],[LCA,CO,CASSA,ELCOM,OMB],
 [('Quando posso disdire un’assicurazione?','Per la fine del terzo anno o di ciascun anno successivo, con tre mesi di preavviso (art. 35a LCA). Il contratto può prevedere termini più brevi.'),
  ('Entro quando devo disdire la cassa malati?','Per l’assicurazione di base la lettera deve pervenire alla cassa entro il 30 novembre per cambiare alla fine dell’anno.'),
  ('Posso porre fine a un mandato in ogni momento?','Sì, un mandato può essere revocato in ogni tempo; in tempo inopportuno bisogna risarcire il danno (art. 404 CO).')],
'''
Ogni contratto ha le sue regole di disdetta. Alcune sono fissate dalla legge, molte dalle **condizioni generali**. Una lettera chiara con il numero di contratto evita la maggior parte dei problemi.

## 1. Assicurazioni

Ogni contratto può essere disdetto per la **fine del terzo anno** o di ciascun anno successivo, con **tre mesi** di preavviso, per iscritto o in una forma che consenta la prova per testo (art. 35a LCA). Dopo un **sinistro parziale** potete recedere al più tardi al pagamento dell’indennità (art. 42 LCA).

## 2. Cassa malati

Per l’**assicurazione di base** la lettera deve **pervenire** alla cassa entro il **30 novembre** per cambiare alla fine dell’anno. Le assicurazioni complementari hanno termini propri secondo il contratto.

## 3. Cellulare, internet, TV

Termini e durata minima sono fissati dalle condizioni generali. In caso di controversia può aiutare l’organo di conciliazione **ombudscom**. Se mantenete il numero, chiedete prima al nuovo operatore come avviene la portabilità.

## 4. Elettricità

Le economie domestiche sono nel **servizio universale** e non scelgono il fornitore. In caso di trasloco basta annunciare la partenza al gestore di rete e annotare la lettura del contatore.

## 5. Mandati, fitness, abbonamenti

Un **mandato** (pulizie, consulenza, fiduciaria) può essere revocato in ogni tempo (art. 404 CO). Per fitness e abbonamenti valgono durata e rinnovo automatico del contratto: disdite in tempo.

## In breve

Numero di contratto, termine giusto, raccomandata o canale previsto – e pagamenti interrotti solo dopo il conteggio finale.
''')
print('ok2')
