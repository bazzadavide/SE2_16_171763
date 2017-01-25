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
