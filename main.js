//import { get } from "https";

// Write your JavaScript here
//calculate change from sale and customer cash received
function calculate() {
    //multiply by 100, turn it all to pennies and work around that   
        var sale = document.getElementById("amount-due").value*100;
        var customer = document.getElementById("amount-received").value*100;
        var subTotal = (customer - sale);
        var totalChange = document.getElementById("amount-received").value - document.getElementById("amount-due").value;
        document.getElementById("total").innerHTML = totalChange;

        //change in dollars
        var change$ = Math.floor((subTotal)/100);
        document.getElementById("dollars-output").innerHTML = change$;
    
        //change in quarters
        var changeQ = Math.floor(((subTotal)-(change$*100))/25);
        document.getElementById("quarters-output").innerHTML = changeQ;
    
        //change in dimes
        var changeD = Math.floor(((subTotal)-(change$*100)-(changeQ*25))/10);
        document.getElementById("dimes-output").innerHTML = changeD;
    
        //change in nickles
        var changeN = Math.floor(((subTotal)-(change$*100)-(changeQ*25)-(changeD*10))/5);
        document.getElementById("nickels-output").innerHTML = changeN;
    
        //change in pennies
        var changeP = Math.ceil(((subTotal)-(change$*100)-(changeQ*25)-(changeD*10)-(changeN*5))/1);
        document.getElementById("pennies-output").innerHTML = changeP;
        
        //Display dollars in different bills ie($20, $10, $5...)
        var dollars = {};
        var total$ = Math.floor((subTotal)/100);
        
        dollars.$20 = Math.floor(total$/20);
        dollars.$10 = Math.floor((total$-(dollars.$20*20))/10);
        dollars.$5 = Math.floor((total$-(dollars.$20*20)-(dollars.$10*10))/5)
        dollars.$1 = Math.ceil((total$-(dollars.$20*20)-(dollars.$10*10)-(dollars.$5*5))/1)

        var output = '';
        for (var x in dollars) {
        output += x + ': ' + dollars[x]+'; ';
        }

        document.getElementById("different-bills").innerHTML = output;
}

