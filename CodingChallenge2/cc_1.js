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

//commit 4
const billsSet1 = [275, 40, 430];
const billsSet2 = [125, 555, 44];

const tips= [];

billsSet1.forEach(function(i){
    const tipAmount = calcTip(i);
    tips.push(tipAmount);
});

console.log("Data set 2");
billsSet2.forEach(function(i){
    const tipAmount = calcTip(i);
    tips.push(tipAmount);
});

const totalsBillSet1 = [];
billsSet1.forEach(function(billAmount){
    const tipAmount = calcTip(billAmount);
    totalsBillSet1.push(billAmount + tipAmount);
});

const totalsBillSet2 = [];
billsSet2.forEach(function(billAmount){
    const tipAmount = calcTip(billAmount);
    totalsBillSet2.push(billAmount + tipAmount);
});

console.log(totalsBillSet1);
console.log(totalsBillSet1);
console.log(tips);
