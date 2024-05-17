var tip;
var billAmount = 100;
var totalCost;

tip = (billAmount > 50 && billAmount < 300) ? 0.15 : 0.2;
console.log("Tip percent is: ", tip);


function calcTip(billAmount){
    tipPercent = (billAmount > 50 && billAmount < 300) ? 0.15 : 0.2;
    var tipAmount = billAmount * tipPercent; // Corrected this line
    return tipAmount;
}

const testTip = calcTip(billAmount);
console.log("Tip amount is: $", testTip);