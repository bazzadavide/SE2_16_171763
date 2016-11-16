var array = [];
var table = document.getElementById("table")

function addRow(){
    // Insert a Row in the table
    var row = table.insertRow(0);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    // Add some text to the new cells:
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    
}

function takeElement{
    for(int i=0; i<table.lenght; i++){
        var x = table.rows[i].cells;
        array[i][0] = x[0].innerHTML;
        array[i][1] = x[1].innerHTML;
        console.log(array[i][0]);
    }
     aaaa  
}
