var leftArray = [];
var rightArray = [];
var leftInput;
var rightInput;
var table = document.getElementById("table");

function addRow(element1, element2){
    // Insert a Row in the table
    var rowLength = table.rows.length;
    var row = table.insertRow(rowLength);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    // Add some text to the new cells:
    cell1.innerHTML = element1;
    cell2.innerHTML = element2;
}

function takeElementFromTable(){
    var Ftable = document.getElementById("table");
    var rowLength = Ftable.rows.length;
    for (i = 1; i < rowLength; i++){
        //gets cells of current row
        var oCells = table.rows[i].cells;
        //gets amount of cells of current row
        var cellLength = oCells.length;
        //loops through each cell in current row
        for(var j = 0; j < cellLength; j++){
            console.log("i: "+i+" j: "+j);
            if(j==0)leftArray[i]=oCells.item(j).innerHTML;
            if(j==1)rightArray[i]=(parseInt(oCells.item(j).innerHTML));
        }
        console.log(leftArray[i]);
        console.log(rightArray[i]);
    }
}

function takeElementFromInputTable(){
    var Ftable = document.getElementById("inputTable");
    console.log("Son dentro takeElementFromInputTable")
    leftInput = document.getElementById('1').value;
    rightInput = document.getElementById('2').value;
}

function addElementToTable(){
    takeElementFromInputTable();
    takeElementFromTable();
    var Ftable = document.getElementById("table");
    var rowLength = Ftable.rows.length;
    console.log("RowLength: "+rowLength);
    console.log("LeftInput: "+leftInput);
    console.log("RightInput: "+rightInput);
    console.log("LeftArray[1]: "+leftArray[1]);
    var mark=0;
    for(i=1;i<rowLength;i++){
        console.log("Sono nel ciclo i: "+i);
            if(leftArray[i]==leftInput){
                rightArray[i] = rightArray[i]+parseInt(rightInput);
                mark = 1;
                cancelAndRedo(leftArray[i],rightArray[i],i);
            }
            
        }
    if(mark==0) addRow(leftInput,rightInput);
}

function cancelAndRedo(element1,element2,point){
    table.deleteRow(point);
    var row = table.insertRow(point);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    // Add some text to the new cells:
    cell1.innerHTML = element1;
    cell2.innerHTML = element2;
    
}
INGEGNERIA DEL SOFTWARE 2

-Empathy design:

Empatizzare con chi? Con chi deve creare il prodotto(esempio se un sistema per macchine con gli ingegneri) oppure con gli utenti
Approccio 1: si va a parlare con chi crea il prodotto fisico per collaborare e capire come creare un sistema adatto al prodotto
Approccio 2: si parla con gli utenti finali e con chi ci dovrà interagire cercando di capire le loro problematiche e ciò che 
	     desiderano e cosa gli può aiutare
5 Fasi fondamentali: Empathize -> Define -> Ideate -> Prototype -> Test
Empathize: Per empatizzare bisogna essere come bambini, chiedere essere curiosi per ogni singolo aspetto, ogni piccola cosa conta, trovare i casi estremi
	   chiaramente aiuta non poco, bisogna osserva e annotare in base a 3 domande: Cosa, come e perchè?
Define: importante ruolo di questa fase è la selezione del Point of View
Ideate: fase di BrainStorming dove tutte le idee vengono discusse su un tavolo, bisogna scegliere per votazione, selezionare 1-2 idee per categoria
Prototype: fase di sviluppo effettiva
Test: dare in mano al prodotto a chi dovrà utilizzarlo e ottenere feedback su cosa va e cosa no

-Processi di Sviluppo
Un processo di sviluppo è un set di regole per lo sviluppo software che regolano per quali fasi o sotto quali regole deve passare un team
per lo sviluppo della propria applicazione

Il processo più base è il waterfall che presenta le seguenti fasi: 
Feasibility: uno studio di fattibilità nel quale si sviluppa un documento che valuta la possibilità o meno di sviluppo del progetto e se esso convenga
Requirements: studio su quale qualità deve avere il progetto, quali sono richieste e quali no, cosa dovrà fare ogni funzione
	      È possibile che avvenga uno scontro fra idee sopratutto quando a definirle è il cliente non informatico. Per semplificare questi problemi prima 
	      si ascolta le richieste del cliente e poi una volta finite si discute sui punti dubbi e su cosa ha la priorità. 
Desing: definire l'archittetura di sistema, specificare i moduli e le interazioni fra essi. Il risultato -> Documento delle Specifiche di Design
Coding&Testing: sviluppo effettivo, test dei singoli moduli e di code review: due criteri: Verification(segue i requisiti?) Validation(è adeguato al cliente?)
		infine si mettono i moduli assieme e si vede come funziona il tutto
Deliver, Deployment and Maintenance: deliver dopo beta testing, deployment fase in cui i componenti vengono messi su architteture fisiche, maintenance mantenimento del software

Il waterfall tuttavia è molto disciplinato per questo si preferisce tecniche iterative e incrementali
Incrementale: Ogni nuova build avanza il software ad un nuovo stadio con nuove funzionalità
Iterativo: si segue un iter ciclico di fasi
Tecniche Agile:
1. Dare sempre al cliente una versione test da provare su cui avere responso
2. Le richieste del progetto possono variare più facilmente durante lo sviluppo
3. Rilasci di build brevi
4. Trovare il punto d'accordo fra uomo d'affari e sviluppatori 
5. Motivare i singoli individui e fidarsi di loro
6. Sviluppare conversazioni faccia a faccia per raccogliere informazioni
7. working software è l'unita di misura per calcolare i progressi
8. Mantenere la pace fra i collaboratori, serve collaborazione
9. Eccellenza tecnica e ottimo design sono parole d'ordine
10. Semplicità, arte di minimizzare il lavoro non fatto
11. Ogni team si deve saper organizzare in base a come è abituato a lavorare
12. Ad intervalli il team si ferma e riflette su come migliorare
Questi principi si vanno a riflettere su quella che è l'Extreme Programming


-Processo di Sviluppo KANBAN
Scopo: limitare il work in progress, meno si ha nelle singole fasi, meno saranno i problemi con i prototipi
Ogni team si crea la propria tabella, non ne esiste un singolo modo di organizzare i jab
3 regole fondamentali:  flusso di lavoro deve essere visivo
			il lavoro deve essere limitato
			il lead time(tempo di attraversamento o tempo di risposta) deve essere misurato
Oltre questi 3 punti il resto è lasciato alla libertà del team o dell'ingegnere software
Come si sceglie il limite? 
-Se è troppo basso alcune persone rimangono ferme nella produzione e ha una pessima produttività
-Se è troppo alto alcune task rimangono fermi e si avrà un pessimo lead time
Il limite va settato in base al caso, seguendo la filosofia di non tenerlo troppo basso per bloccare la produzione ma neanche troppo alto per 
non creare problemi troppo grandi e quindi avere un tempo di risposta al cliente troppo lento


-Processo di Sviluppo SCRUM
Ogni feature è divisa in user story che contiene la richiesta, la formalizzazione della richiesta, come effettuare testing,
l'importanza e il tempo stimato per lo sviluppo
Il Product Backlog è l'insieme delle user story. Viene preferito il backlog al requirement docs poiché quest'ultimo troppo formale master-slave based
3 figure fondamentali: Team di sviluppo, Fattori esterni(clienti) e Scrum Master che tiene i rapporti fra i due
Questo processo di sviluppo è basato sugli sprint ovvero tempi di sviluppo ben definiti(da 2 settimane a 2 mesi al quale si identifca un output 
di tutto ciò)
6 fasi fondamentali:
1. Backlog Refinement: sviluppo del backlog e delle user story, ognuna ha un costo in tempo e va notificato al cliente. 
   Questa attività dura il 15% dello sprint. La stima del tempo per ogni user story usa numeri della sequenza di fibonacci.
2. Sprint Planning: dura 2 ore per ogni settimana di sprint, si parte con il backlog e si scelgono le user story più importanti in numero massimo
   dipendente dalla durata dello sprint. Lo sprint goal è cosa verrà prodotto alla fine dello sprint
3. Sprint: sviluppo delle user story che devono rispettare le proprie specifiche
4. Daily Scrum: 15 minuti in cui si risponde su cosa ho fatto ieri, cosa farò oggi, quali impedimenti mi hanno ostacolato.
4.1 Release Burndown Chart: grafico che confronta la velocità pensata a inizio Scrum con quella reale. Vengono accettate solo storie complete.
    Quelle non complete vengono non contate per lo sprint in se e tornano nel backlog sul quale si andrà a discutere con il product owner
5. Sprint Review: viene mostrato ciò che si è mostrato durante lo sprint
6. Sprint Retrospective: autoanalisi cosa va bene, cosa va male, come si migliora, cosa ha creato impedimenti
Person_days * focus_factor=estimated_velocity Formula per definire la velocità con cui si sviluppano le user story
focus_factor= actual_velocity / person_days Formula per il focus factor. La velocità attuale è riferita all'ultimo sprint
Il test team è fuori dallo scrum team, per individuare bug più velocemente
NON si cambiano gli obbiettivi dello sprint, NON lo si allunga e NON si perde la deadline
Per scrivere del buon codice si utilizza il test driven development: si sviluppa un test automated poi si scrive un codice che lo superi e lo si
implementa nel progetto
Post porre i test può essere grave, parecchio grave, si rischia di non trovare più l'errore


-Fase di Testing
Prima si trovano i bug ed errori meglio è: se un problema viene rilevato più in là nello sviluppo può compromettere lo stesso
I test cases sono semplicemente un insieme di valori di input nei quali fare un test, chiaramente è importante trovare i casi limite
Un buon test case è quello che ha buone probabilità di trovare un errore
Metodi di Test-Case
Black box testing = test senza guardare dentro il codice
White box testing = test che va fatto controllando il codice man mano(ad esempio scegliendo input che portano il codice a casi particolari)
Unit Testing: ogni funzione va testata singolarmente
Integration Testing: aggregazione di altre funzioni testate e si attua il test complessivo
Validation: test per vedere se sono stati raggiunti gli obbiettivi
Scopo e Condizioni di Test: Funzionale, Stressante per un software, Sicuro, Usabile, Affidabile
A/B test permette di vedere differenze direttamente sulle web pages in modo da verificare quale design sia il migliore
Nota importante va sulla scelta dei test case: 
Per Black Box va il Equivalence Partitioning ovvero una suddivisione in classi dei test case
Altra scelta dei test case può essere su esclusivamente i casi limite poichè sono quelli che possono mettere in crisi il sistema

-Test Planning
3 Documenti:
Test Plan: Contiene la strategia da adottare con i test, la durata e criteri di test finito
Tests: collezione dei script e manuali dei test
Test Report: quello che è successo quando è stato eseguito il test, una copia per ogni SPR(software problem report) mostrrando la sua soluzione,
	     una lista su i SPR non risolti e quali vecchi test sono stati eseguiti per valutare la loro efficienza anche dopo modifiche
Per entrare in fase di testing il software deve:
-Essere completo(raggiunto un obbiettivo di sviluppo)
-Il test plan deve essere approvato
-I test script devono essere stati approvati
-I test script devono essere stati eseguiti almeno una volta
-I source code sono sotto controllo di configurazione
-Procedure SPR pronte
-I criteri del essere completo devono essere definiti
Formal Validation:
-I test eseguiti via informal validation devono essere ri eseguiti
-SPR vengono sviluppati per ogni fail test
-Per ogni bug fixato l'SPR identifica in quali sono stati modificati per questo fix
-Assicurarsi di aver modificato solo moduli modificabili
Exit Criteria:
-Tutti gli script sono stati eseguiti
-Tutti gli SPR sono stati risolti
-Tutte le modifiche a causa dell'SPR sono state testati
-Tutti i documenti sono stati aggiornati in base alle modifiche effettuate nei test
-Test report approvato


Formal Validation:
-I test eseguiti via informal validation devono essere ri eseguiti
-SPR vengono sviluppati per ogni fail test
-Per ogni bug fixato l'SPR identifica in quali sono stati modificati per questo fix
-Assicurarsi di aver modificato solo moduli modificabili
Exit Criteria:
-Tutti gli script sono stati eseguiti
-Tutti gli SPR sono stati risolti
-Tutte le modifiche a causa dell'SPR sono state testati
-Tutti i documenti sono stati aggiornati in base alle modifiche effettuate nei test
-Test report approvato

-White Box Testing
Coverage del codice:
-Function coverage, è stata chiamata ogni funzione?
-Statement coverage: son stati chiamate tutte le rige del codice?
-Branch coverage: ad esempio per un if, è stato chiamato sia la versione true che false?
-Condition coverage: controllo di tutte le espressioni booleane
-Loop Coverage: è testato 0, 1 e +1 volte?
-Path Coverage: quanti path hai seguito nello sviluppo del codice
MC/DC(modified condition/decision coverage)
-ogni punto di entrata ed uscita del software è stato chiamato
-ogni decisione prende tutte le strade possibili
-ogni condizione in una decisione prende tutte le strade possibili



-Come valutare un Software
Qualità del software:
Correttezza se soddisfa i requisiti iniziali
Affidabilità: quanto gli user possono affidarsi ad un software senza che crei errori/dia problemi
Robustezza: Anche in casi estremi il software funziona egregiamente
Performance: velocità nello svolgere il proprio compito
Usability: quanto user friendly è
Reusability: quanto può essere riciclato per un nuovo software
Generability: quanto è in grado di risolvere problemi più generali di quello che la richiesta ha specificato
	      poter far fronte a recquisiti che si evolvono
Portability: su quante piattaforme può girare
Maintanability: quanto è facile da mantenere
Evolvability: quanto facilmente si può evolvere

Altro fattore importante è che il codice deve essere del buon codice, aiuta molto una manuntenzione futura del software
Deve essere elegante e semplice in caso necessiti interventi
Usare nomi rappresentativi per variabili e funzioni
Non mettere effetti secondari speciali non voluti
Non mischiare le funzioni, tenerle più brevi possibili
Usare i commenti
Nascondere bene informazioni importanti
Per una fase di code review è sempre buona norma interpellare qualcun'altro 

-MVC Model-View-Controller
Model: gestisce la logica
View: la vista che avrà l'utente del software
Controller: cattura in input ciò che mette l'utente nel view e lo passa al model


1-create GitHub project
    a.Remember to add a .gitignore and set it “Node”
2-clone GitHub project
    -git clone <project link>
3-create an Heroku server
    -heroku create
4-crate the branches for test and development
    -git branch test
    -git push origin test
    -git branch dev
    -git push origin dev
5-create your Node.js app
    -git checkout dev
    -npm init
    -create your app
    -npm install <lib> --save
    -add "start": "node index.js" to the script section of package.json
    -git add .
    -git commit –am “message”
6-finish dev and test
    -git push origin dev
    -git checkout test
    -git merge dev
    -git push origin test
    -git checkout master
    -git merge test
    -git push origin master
7-deploy your application
    -git push heroku master
    -heroku ps:scale web=1
8-open your app
    -heroku open
9-check logs
    -heroku logs –tail
10-add Procfile
    -git checkout dev
    -add your Procfile
    -git add Procfile
    -git commit –m “message”
    -git push origin dev
    -git checkout test
    -git merge dev
11-test your application work correctly
    -heroku local web
12-if it works correctly proceed, otherwise go back in dev
    -git push origin test
    -git checkout master
    -git merge test
    -git push origin master
13-deploy your application
    -git push heroku master
