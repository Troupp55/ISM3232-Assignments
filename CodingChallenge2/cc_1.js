var tip;
var billAmount = 275;
var totalCost;

tip = (billAmount > 50 && billAmount < 300) ? 0.15 : 0.2;
console.log("Tip percent is: ", tip);

//commit 3
function calcTip(billAmount){
    tipPercent = (billAmount > 50 && billAmount < 300) ? 0.15 : 0.2;
    var tipAmount = billAmount * tipPercent; // Corrected this line
    return tipAmount;
}

const testTip = calcTip(billAmount);
console.log("Tip amount is: $", testTip);

//commit 2
totalCost = testTip + billAmount;
console.log("The bill amount was, ", billAmount, "the tip was, $", testTip, "The total cost was, $",totalCost);

