import sys; sys.path.insert(0,'/home/claude/skripty')
from chit_zdroje import *
V='contratto-di-compravendita-auto'; PV='verbale-di-consegna-veicolo'; Q='quietanza'; PR='procura-ufficio-della-circolazione'

c('vendere-l-auto-in-svizzera','Vendere l’auto in Svizzera: contratto, targhe e pagamento','Vendere l’auto',
 'Come vendere un’auto d’occasione tra privati in Svizzera: contratto di compravendita, pagamento sicuro, ora della consegna, targhe e assicurazione. Con un modello gratis.',
 'Un contratto con il numero di telaio, il denaro prima delle chiavi, un verbale con l’ora – e le targhe restano a voi. Ecco l’ordine che evita brutte sorprese.',
 'auto','vendere-auto',[V,PV,Q],
 ['vendere l’auto','vendita auto tra privati','contratto di compravendita auto','targhe vendita auto','pagamento vendita auto'],[CO,IMM,COLL],
 [('Serve un contratto scritto per vendere un’auto?','La legge non lo richiede, ma un contratto scritto prova il prezzo, lo stato dichiarato, l’esclusione della garanzia e il momento della consegna. È la vostra migliore protezione.'),
  ('Cosa faccio delle targhe dopo la vendita?','Le tenete voi. Potete usarle per un altro veicolo o depositarle presso l’Ufficio della circolazione; informate anche la vostra assicurazione.'),
  ('Devo far collaudare l’auto prima della vendita?','Non è obbligatorio per vendere. Un collaudo recente rassicura però l’acquirente; è il Cantone a stabilire quando serve un nuovo collaudo.')],
'''
In Svizzera la vendita di un’auto tra privati si conclude di solito in un solo incontro: contratto, pagamento, chiavi. Due regole valgono sempre: **mettere tutto per iscritto** e **tenere le targhe**.

## 1. Prima dell’annuncio

Preparate la **licenza di circolazione**, tutte le chiavi, il libretto di manutenzione e l’ultimo rapporto di collaudo. Controllate che il numero di telaio della licenza (campo 23) corrisponda a quello sul veicolo. Se l’auto è in leasing serve il consenso della società di leasing.

## 2. Il contratto

Indicate entrambe le parti con il documento d’identità, la marca, il **numero di telaio**, il **numero di matricola**, i chilometri e i **difetti noti**. Tra privati l’esclusione della garanzia è usuale, ma non copre un difetto che avete dissimulato con dolo (art. 199 CO): meglio essere onesti e precisi.

## 3. Il pagamento

La soluzione più sicura è un **bonifico accreditato prima della consegna delle chiavi**. In contanti contate il denaro davanti all’acquirente e firmate una quietanza. Diffidate delle «prove di pagamento» inviate per messaggio.

## 4. La consegna e l’ora

Redigete un **verbale di consegna** con data, **ora**, chilometri, chiavi e danni visibili. Se qualche giorno dopo arriva una multa, l’ora dimostra chi aveva il veicolo.

## 5. Targhe e assicurazione

Le **targhe restano al detentore**, non all’auto. Smontatele, usatele per un altro veicolo o depositatele, e annunciate la vendita all’assicurazione. L’acquirente immatricola l’auto a suo nome con il proprio attestato d’assicurazione prima di circolare.

## In breve

Contratto con il numero di telaio, denaro prima delle chiavi, verbale con l’ora, targhe smontate e assicurazione informata – tutto lo stesso giorno.
''')

c('comprare-un-auto-d-occasione','Comprare un’auto d’occasione: cosa verificare prima di pagare','Comprare un’occasione',
 'Comprare un’auto d’occasione da un privato in Svizzera: licenza di circolazione, numero di telaio, collaudo, difetti, pagamento e immatricolazione. Lista di controllo.',
 'Prima di pagare: il venditore è il detentore, il numero di telaio corrisponde, quando è stato fatto l’ultimo collaudo? Poi contratto scritto e immatricolazione a vostro nome.',
 'auto','comprare-occasione',[V,PV],
 ['comprare auto d’occasione','verificare auto usata','numero di telaio','collaudo auto','immatricolazione auto'],[CO,IMM,COLL],
 [('Ho una garanzia se compro da un privato?','Spesso no: tra privati la garanzia è di solito esclusa. L’esclusione non copre però i difetti dissimulati con dolo (art. 199 CO).'),
  ('Posso circolare con le targhe del venditore?','No. Le targhe restano al venditore. Dovete immatricolare l’auto a vostro nome con la vostra assicurazione prima della prima corsa.'),
  ('Cosa faccio se scopro un difetto dopo l’acquisto?','Segnalatelo subito per iscritto al venditore (art. 201 CO). Se la garanzia è esclusa avete diritti solo per difetti dissimulati con dolo o per qualità promesse.')],
'''
Un’auto comprata da un privato si vende quasi sempre **senza garanzia**. Ciò che non controllate prima di pagare diventa un vostro problema.

## 1. Venditore e documenti

Il venditore deve essere iscritto come **detentore** nella licenza di circolazione o dimostrare che l’auto è sua. Confrontate il nome con il suo documento d’identità. Un’auto in leasing non può essere venduta senza il consenso della società di leasing.

## 2. Numero di telaio e chilometri

Il **numero di telaio** della licenza (campo 23) deve corrispondere a quello punzonato sul veicolo. Chilometri coerenti con il libretto di manutenzione e i rapporti di collaudo sono un buon segnale.

## 3. Collaudo e stato

Chiedete la data dell’**ultimo collaudo** e il rapporto. Un collaudo recente non garantisce l’assenza di difetti, ma riduce le sorprese. Fate una prova su strada e, se possibile, fate controllare l’auto da un’officina o da un club automobilistico.

## 4. Contratto e pagamento

Fate scrivere nel contratto i difetti noti, gli incidenti e le qualità promesse (p. es. «cinghia di distribuzione sostituita»). Pagate con un bonifico o contro quietanza, e solo quando avete in mano chiavi e licenza.

## 5. Immatricolazione

Le targhe restano al venditore. Prima di circolare chiedete l’**attestato d’assicurazione** alla vostra compagnia e immatricolate l’auto presso l’Ufficio della circolazione del vostro Cantone con la licenza del detentore precedente.

## In breve

Detentore giusto, numero di telaio identico, collaudo chiaro, difetti scritti nel contratto, pagamento tracciabile – poi assicurazione e immatricolazione.
''')

c('targhe-e-assicurazione-dopo-la-vendita','Targhe e assicurazione dopo la vendita dell’auto in Svizzera','Targhe e immatricolazione',
 'Dopo la vendita dell’auto in Svizzera le targhe restano al venditore: deposito, uso per un altro veicolo, assicurazione e immatricolazione da parte dell’acquirente.',
 'In Svizzera le targhe non seguono l’auto ma il detentore. Il venditore le smonta, l’acquirente si presenta all’Ufficio della circolazione con la propria assicurazione.',
 'auto','ufficio-circolazione',[V,PR,PV],
 ['targhe dopo la vendita','deposito targhe','immatricolazione auto acquistata','assicurazione vendita auto','ufficio della circolazione'],[IMM,ASA,CO],
 [('Posso lasciare le targhe all’acquirente per qualche giorno?','È sconsigliato: restate detentori e l’assicurazione resta la vostra. Le multe e i danni causati con le vostre targhe ricadrebbero su di voi.'),
  ('Cosa serve all’acquirente per immatricolare?','Un attestato d’assicurazione valido, che l’assicurazione trasmette di solito per via elettronica, la licenza di circolazione del detentore precedente e un documento d’identità.'),
  ('Qualcun altro può andare all’Ufficio della circolazione per me?','Sì, con una procura scritta e i documenti necessari. Molti Cantoni hanno un proprio modulo di procura.')],
'''
In molti Paesi le targhe restano sull’auto. **In Svizzera no**: appartengono al detentore. Questo cambia il modo di vendere.

## 1. Il venditore tiene le targhe

Al momento della consegna smontate le targhe. Potete:

- usarle per un altro veicolo (anche targhe intercambiabili),
- **depositarle** presso l’Ufficio della circolazione, che sospende l’immatricolazione.

Annunciate la vendita alla vostra **assicurazione di responsabilità civile**: il premio può essere ridotto o rimborsato.

## 2. L’acquirente immatricola a suo nome

Prima della prima corsa l’acquirente chiede un **attestato d’assicurazione** alla sua compagnia. Con la licenza di circolazione del venditore e il documento d’identità si presenta all’Ufficio della circolazione del suo Cantone e riceve nuove targhe e una nuova licenza.

## 3. Se non potete andare di persona

Una persona di fiducia può sbrigare la pratica con una **procura scritta**, il proprio documento d’identità, una copia del vostro e la licenza di circolazione. Verificate prima sul sito del vostro Cantone se esiste un modulo specifico.

## 4. Collaudo

Il Cantone decide se dopo il cambio di detentore serve un nuovo collaudo. Informatevi in anticipo per non avere sorprese all’immatricolazione.

## In breve

Targhe al venditore, assicurazione informata, acquirente con il proprio attestato all’Ufficio della circolazione – e una procura se qualcuno va al posto vostro.
''')

c('multa-dopo-la-vendita-dell-auto','Multa dopo la vendita dell’auto: come proteggersi','Multa dopo la vendita',
 'Una multa arriva dopo la vendita dell’auto? Con il verbale di consegna con data e ora dimostrate che il veicolo non era più da voi. Consigli pratici e modello gratuito.',
 'Le multe arrivano spesso settimane dopo l’infrazione. L’ora esatta della consegna, annotata in un verbale firmato, è la prova che non guidavate più voi.',
 'auto','vendere-auto',[PV,V],
 ['multa dopo la vendita','verbale di consegna auto','ora della consegna','infrazione dopo la vendita','prova consegna veicolo'],[CO,IMM],
 [('Perché le targhe sono così importanti?','Le multe sono legate alle targhe. Se le targhe restano a voi e non le lasciate all’acquirente, nessuna nuova infrazione può essere commessa con esse.'),
  ('Cosa faccio se ricevo comunque una multa?','Rispondete all’autorità indicando la vendita e allegando una copia del contratto e del verbale con data e ora della consegna.'),
  ('Basta il contratto di compravendita?','Il contratto prova la vendita; il verbale con l’ora prova il momento esatto in cui l’acquirente ha preso il veicolo. Insieme sono la prova più solida.')],
'''
Avete venduto l’auto venerdì e un mese dopo arriva una multa per eccesso di velocità di sabato? Senza prova del **momento della consegna** è difficile difendersi.

## 1. Tenete le targhe

In Svizzera le targhe restano al venditore. Se le smontate alla consegna, con il vostro numero non possono più essere commesse infrazioni. È la protezione più semplice.

## 2. Annotate l’ora esatta

Nel **verbale di consegna** scrivete data e **ora**, chilometri, livello del serbatoio e numero di chiavi. Fate firmare entrambe le parti e tenete un esemplare ciascuno. Fotografate il contachilometri con l’ora visibile sul telefono.

## 3. Contratto e verbale insieme

Il contratto di compravendita prova chi ha comprato e a quale prezzo. Il verbale prova **quando** il veicolo è passato di mano. Conservate entrambi almeno fino alla scadenza dei termini per le infrazioni.

## 4. Se arriva una multa

Rispondete per iscritto all’autorità che l’ha emessa: indicate nome e indirizzo dell’acquirente, data e ora della consegna e allegate le copie. Non pagate una multa che non vi riguarda.

## 5. Durante un prestito

Lo stesso vale se prestate l’auto: un verbale con l’ora al momento della consegna e della restituzione chiarisce chi guidava.

## In breve

Targhe smontate, verbale firmato con l’ora, copie conservate – e in caso di multa una risposta scritta con le prove.
''')

c('vendere-la-moto','Vendere la moto: contratto, accessori e modifiche','Vendere la moto',
 'Vendere una moto o uno scooter tra privati in Svizzera: contratto, numero di telaio sul telaio, accessori, modifiche iscritte nella licenza e targhe. Modello gratis.',
 'Per una moto contano anche gli accessori e le modifiche: valigie, scarico, paramotore. Mettete tutto nel contratto e verificate la licenza di circolazione.',
 'auto','vendere-auto',['contratto-di-compravendita-moto',PV,Q],
 ['vendere la moto','vendita moto tra privati','contratto vendita scooter','scarico omologato','accessori moto vendita'],[CO,IMM,COLL],
 [('Dove si trova il numero di telaio della moto?','Di solito è punzonato sul telaio vicino al cannotto dello sterzo; figura anche al campo 23 della licenza di circolazione.'),
  ('Le targhe della moto passano all’acquirente?','No, anche per le moto le targhe restano al detentore. L’acquirente immatricola la moto a suo nome.'),
  ('Uno scarico modificato è un problema?','Se non è iscritto nella licenza di circolazione la moto può essere respinta al collaudo. Indicatelo onestamente nel contratto.')],
'''
La vendita di una moto segue le stesse regole dell’auto – contratto, pagamento, verbale, targhe al venditore – con un punto in più: **accessori e modifiche**.

## 1. Accessori

Valigie, bauletto, telo, secondo treno di pneumatici, casco: fanno parte della vendita solo se sono **scritti nel contratto**. Elencateli per evitare discussioni al momento della consegna.

## 2. Modifiche

Scarichi, specchietti, manubri o indicatori di direzione non originali possono richiedere un’**omologazione** e un’iscrizione nella licenza di circolazione. Verificate insieme all’acquirente cosa figura nella licenza e indicate nel contratto ciò che non è iscritto.

## 3. Numero di telaio

Sulla moto il numero di telaio è di solito punzonato sul **telaio vicino al cannotto dello sterzo**. Confrontatelo con il campo 23 della licenza di circolazione.

## 4. Prova e pagamento

Una prova su strada solo con un documento d’identità lasciato in pegno e con assicurazione valida. Pagamento con bonifico prima della consegna o in contanti contro quietanza.

## 5. Targhe e collaudo

Le targhe restano a voi. Il collaudo periodico delle moto avviene a intervalli più lunghi che per le auto; il Cantone stabilisce quando serve un nuovo esame.

## In breve

Accessori elencati, modifiche verificate, numero di telaio confrontato, pagamento tracciabile e targhe smontate.
''')

c('prestare-denaro-a-un-amico','Prestare denaro a un amico: contratto, interessi e restituzione','Prestare denaro',
 'Prestare denaro a un amico o a un parente in Svizzera: contratto scritto, interessi, restituzione in una volta o a rate, cosa succede se non paga. Con un modello gratis.',
 'Un prestito tra amici funziona meglio con un contratto: importo, data di restituzione o rate, interessi sì o no. Firmato, vale anche come riconoscimento di debito.',
 'denaro','prestito',['contratto-di-prestito',Q,'riconoscimento-di-debito'],
 ['prestare denaro a un amico','contratto di prestito tra privati','interessi prestito privato','restituzione prestito','prestito a rate'],[CO,LEF],
 [('Il prestito tra privati deve essere scritto?','No, ma un contratto scritto è l’unica prova sicura dell’importo e della data di restituzione.'),
  ('Cosa succede se non è fissata una data di restituzione?','Il prestito va restituito entro sei settimane dalla prima richiesta (art. 318 CO).'),
  ('Posso chiedere interessi a un amico?','Sì, se li pattuite. Senza accordo tra privati non sono dovuti interessi. Restate su un tasso ragionevole.')],
'''
Prestare denaro a un amico è un gesto di fiducia. Un **contratto scritto** non la tradisce: la protegge, perché evita malintesi su quanto e quando restituire.

## 1. Cosa scrivere

Nomi e indirizzi, **importo** (anche in lettere), modo di consegna e **data di restituzione** o piano a rate. Indicate anche se sono dovuti interessi.

## 2. Consegnare il denaro in modo dimostrabile

Il bonifico è la prova migliore. Se consegnate contanti, fatevi firmare una quietanza o confermate la consegna nel contratto.

## 3. Interessi

Tra privati gli interessi sono dovuti **solo se pattuiti**. Se li volete, fissate un tasso ragionevole; gli interessi usurari sono vietati e alcuni Cantoni fissano tassi massimi.

## 4. Restituzione

In una volta entro una data o a **rate mensili** con un piano allegato. Senza data fissata, il mutuatario deve restituire entro sei settimane dalla prima richiesta (art. 318 CO).

## 5. Se non restituisce

Mandate prima un sollecito scritto con un termine. Il contratto firmato dal mutuatario vale come **riconoscimento di debito**: in un’esecuzione permette di chiedere il rigetto provvisorio dell’opposizione (art. 82 LEF).

## In breve

Importo, data o rate e interessi nero su bianco, denaro con bonifico, e il contratto firmato come prova in caso di problemi.
''')

c('il-debitore-non-paga-esecuzione','Il debitore non paga: diffida ed esecuzione in Svizzera','Debitore che non paga',
 'Cosa fare se qualcuno non vi paga in Svizzera: diffida con termine, interesse moratorio del 5 %, domanda d’esecuzione, opposizione e rigetto. Passo per passo.',
 'Prima una diffida scritta con un termine, poi la domanda d’esecuzione all’Ufficio esecuzioni. Con un riconoscimento di debito firmato l’opposizione si supera più facilmente.',
 'denaro','debiti',['diffida-di-pagamento','riconoscimento-di-debito','accordo-pagamento-rateale'],
 ['debitore non paga','diffida di pagamento','domanda d’esecuzione','precetto esecutivo','rigetto dell’opposizione','interesse moratorio'],[CO,LEF,ESEC],
 [('Quanto interesse moratorio posso chiedere?','Il 5 % all’anno sui debiti pecuniari dalla mora (art. 104 CO).'),
  ('Dove si avvia un’esecuzione?','All’Ufficio esecuzioni del domicilio del debitore, con una domanda d’esecuzione.'),
  ('Cosa succede se il debitore fa opposizione?','L’esecuzione si ferma. Con un riconoscimento di debito firmato potete chiedere al giudice il rigetto provvisorio dell’opposizione (art. 82 LEF).')],
'''
Una fattura scaduta, un prestito non restituito: in Svizzera la strada per farsi pagare è chiara e passa per l’**esecuzione**.

## 1. La diffida

Spedite per raccomandata una **diffida di pagamento** con l’importo, la causa e un termine di 7–14 giorni. Se non era stato pattuito un giorno di scadenza preciso, è la diffida a mettere in mora il debitore (art. 102 CO). Dalla mora decorre l’**interesse del 5 %** all’anno (art. 104 CO).

## 2. La domanda d’esecuzione

Se il termine passa senza pagamento, presentate una **domanda d’esecuzione** all’Ufficio esecuzioni del domicilio del debitore. L’ufficio gli notifica un **precetto esecutivo**.

## 3. L’opposizione

Il debitore può fare **opposizione** entro 10 giorni, senza motivarla. L’esecuzione si ferma. Se avete un **riconoscimento di debito** firmato o un contratto firmato dal debitore, potete chiedere al giudice il **rigetto provvisorio** dell’opposizione (art. 82 LEF); altrimenti serve una causa ordinaria.

## 4. Il pignoramento

Senza opposizione o dopo il rigetto, chiedete la continuazione dell’esecuzione: l’ufficio procede al pignoramento.

## 5. Un accordo resta possibile

Se il debitore vuole pagare ma non tutto subito, un **accordo di pagamento rateale** con riconoscimento di debito vi protegge e può evitare l’esecuzione.

## In breve

Diffida con termine, domanda all’Ufficio esecuzioni, rigetto dell’opposizione con il riconoscimento di debito – o un piano rateale firmato.
''')

c('riconoscimento-di-debito-e-prescrizione','Riconoscimento di debito e prescrizione: quando un debito si prescrive','Prescrizione dei debiti',
 'Quando si prescrive un debito in Svizzera e come il riconoscimento di debito interrompe la prescrizione. Termini di 10 e 5 anni e consigli pratici.',
 'La maggior parte dei crediti si prescrive in 10 anni, molti in 5. Un riconoscimento di debito firmato interrompe la prescrizione e fa ricominciare il termine.',
 'denaro','debiti',['riconoscimento-di-debito','accordo-pagamento-rateale','diffida-di-pagamento'],
 ['prescrizione debito','riconoscimento di debito','interruzione della prescrizione','debito prescritto','termine di prescrizione svizzera'],[CO,LEF],
 [('In quanto tempo si prescrive un debito?','Di regola in 10 anni (art. 127 CO); pigioni, interessi e altre prestazioni periodiche in 5 anni (art. 128 CO).'),
  ('Il riconoscimento di debito interrompe la prescrizione?','Sì. Con il riconoscimento la prescrizione è interrotta e ricomincia a decorrere un nuovo termine (art. 135 CO).'),
  ('Un debito prescritto si può ancora riscuotere?','Il debitore può opporre la prescrizione. Se paga volontariamente, non può però chiedere la restituzione.')],
'''
Un credito non dura per sempre. Dopo un certo tempo il debitore può opporre la **prescrizione** e rifiutare di pagare. Il riconoscimento di debito è lo strumento più semplice per evitarlo.

## 1. I termini

- **10 anni** è il termine generale (art. 127 CO), p. es. per un prestito.
- **5 anni** per pigioni, interessi e altre prestazioni periodiche, nonché per alcuni crediti come quelli degli artigiani e del commercio al minuto (art. 128 CO).

Il termine decorre dall’esigibilità del credito.

## 2. Interrompere la prescrizione

Secondo l’art. 135 CO la prescrizione è interrotta in particolare quando il debitore **riconosce il debito**, paga interessi o acconti, oppure quando il creditore avvia un’esecuzione o un’azione. Dopo l’interruzione **ricomincia un nuovo termine**.

## 3. Il riconoscimento scritto

Un riconoscimento di debito firmato indica l’importo, la causa e la scadenza. Oltre a interrompere la prescrizione, in un’esecuzione permette di chiedere il **rigetto provvisorio dell’opposizione** (art. 82 LEF).

## 4. Consigli pratici

Annotate quando un credito diventa esigibile e verificate i termini ogni anno. Se il debitore propone rate, fate firmare un accordo con riconoscimento: ogni rata pagata è inoltre un nuovo atto interruttivo.

## In breve

10 o 5 anni secondo il credito, interruzione con riconoscimento, acconto o esecuzione – e un riconoscimento firmato come prova più forte.
''')

c('pagamento-a-rate-tra-privati','Pagare un debito a rate: accordo e piano di pagamento','Pagamento a rate',
 'Come mettere per iscritto un pagamento a rate tra privati in Svizzera: riconoscimento di debito, piano, interessi, clausola di decadenza e legge sul credito al consumo.',
 'Il debitore vuole pagare, ma non tutto subito. Un accordo firmato da entrambi fissa le rate, il riconoscimento di debito e cosa succede in caso di ritardo.',
 'denaro','debiti',['accordo-pagamento-rateale','riconoscimento-di-debito',Q],
 ['pagamento a rate','accordo di pagamento rateale','piano di pagamento','clausola di decadenza','rateizzazione debito'],[CO,LEF],
 [('Cosa significa clausola di decadenza?','Se il debitore non paga una rata (o due, secondo l’accordo), tutto il saldo diventa subito esigibile.'),
  ('Il creditore può comunque avviare un’esecuzione?','Finché le rate sono pagate vi rinuncia. In caso di mora può avviarla e, con il riconoscimento firmato, chiedere il rigetto provvisorio dell’opposizione.'),
  ('Si applica la legge sul credito al consumo?','Non tra privati. Le rate senza interessi né spese non sono soggette alla legge (art. 7 LCCo).')],
'''
Un accordo di pagamento rateale conviene a entrambi: il creditore riceve il denaro senza esecuzione, il debitore paga ciò che può. Funziona se è **chiaro e firmato da tutti e due**.

## 1. Il debito

Scrivete l’**importo ancora dovuto** il giorno della firma e la **causa** (contratto, fattura, evento con data). Con un **riconoscimento di debito** il debitore conferma il debito senza condizioni (art. 17 CO).

## 2. Le rate

Importo della rata, giorno del mese, mese della prima rata e conto del creditore. Un **piano allegato** mostra ogni scadenza e il saldo residuo. Rate realistiche valgono più di rate ambiziose.

## 3. Interessi

Facoltativi. Tra privati spesso non se ne pattuiscono. Se li prevedete, devono restare ragionevoli. Un’impresa che concede dilazioni con interessi o spese deve rispettare la legge sul credito al consumo.

## 4. Clausola di decadenza

Stabilisce quando tutto il saldo diventa esigibile: dal ritardo di una rata, dopo un termine di tolleranza di 14 giorni o dal ritardo di due rate. Dalla mora decorre l’interesse moratorio (art. 104 CO).

## 5. Durante e dopo

Pagate con bonifico indicando «rata 3/10». Per i contanti fatevi sempre rilasciare una quietanza. Dopo l’ultima rata il debitore può chiedere una conferma che il debito è estinto.

## In breve

Debito riconosciuto, rate con piano, interessi chiari, clausola di decadenza – e la firma di entrambi.
''')

c('donare-denaro-imposta-cantonale','Donare denaro ai figli: forma e imposta sulle donazioni','Donare denaro',
 'Donare denaro o una cosa in Svizzera: quando basta la donazione manuale, quando serve lo scritto, chi paga l’imposta cantonale sulle donazioni e chi ne è esente.',
 'La donazione manuale è valida senza forma, la promessa di donare va scritta. L’imposta sulle donazioni è cantonale e di regola coniugi e figli ne sono esenti.',
 'denaro','donazione',['contratto-di-donazione',Q],
 ['donare denaro ai figli','imposta sulle donazioni','donazione manuale','contratto di donazione','donazione tra vivi'],[CO,DON],
 [('Serve un contratto per una donazione?','Per una donazione consegnata subito no. Solo la promessa di donare in futuro deve essere scritta (art. 243 CO). Lo scritto resta utile come prova.'),
  ('Chi paga l’imposta sulle donazioni?','Chi riceve la donazione. Di regola coniugi, partner registrati e discendenti ne sono esentati; per i dettagli decide il Cantone.'),
  ('Per un immobile vale lo stesso?','No. La donazione di un fondo richiede sempre un atto pubblico.')],
'''
Aiutare un figlio a comprare casa, regalare un’auto a un nipote: in Svizzera la donazione è semplice, ma conviene conoscere **forma** e **imposta**.

## 1. Donazione manuale

Se consegnate subito il denaro o la cosa, la donazione è valida **senza alcuna forma** (art. 242 CO). Un contratto scritto serve comunque da prova, per esempio verso l’amministrazione fiscale o gli altri eredi.

## 2. Promessa di donare

Se promettete di donare **in futuro**, la promessa deve essere **scritta** (art. 243 CO). Per i fondi serve sempre un atto pubblico.

## 3. Imposta sulle donazioni

L’imposta è **cantonale** e la paga chi riceve. Di regola i **coniugi**, i **partner registrati** e i **discendenti** (figli e nipoti) ne sono esentati. Per importi elevati rivolgetevi all’ufficio cantonale delle contribuzioni del domicilio del donante.

## 4. Revoca

Il donante può revocare la donazione solo nei casi previsti dalla legge, per esempio in caso di grave reato del donatario nei suoi confronti (art. 249 CO).

## 5. Consigli pratici

Versate il denaro con bonifico e la causale «donazione». Indicate nel contratto il grado di parentela: è importante per l’imposta. Per una cosa indicate i difetti noti.

## In breve

Consegna subito: nessuna forma; promessa: per iscritto; fondi: atto pubblico. Imposta cantonale, di regola senza imposta tra genitori e figli.
''')
print('ok1')
