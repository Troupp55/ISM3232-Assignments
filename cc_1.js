var tipPercent;
var billAmount = 100;
var totalCost;

const bills = [275, 40, 430, 1000];
const tips = [];
const totalCosts = [];

function calcTip(billAmount){
    tipPercent = (billAmount > 50 && billAmount < 300) ? 0.15 : 0.2;
    var tipAmount = billAmount * tipPercent; // Corrected this line
    return tipAmount;
}
const realTipAmount = calcTip(billAmount);
totalCost = billAmount + realTipAmount;
console.log("The bill is: $", billAmount);
console.log("The tip is: $" + realTipAmount.toFixed(2));
console.log("The total cost is: $", totalCost);

bills.forEach(function(bill) {
    const tipAmount = calcTip(bill);
    tips.push(tipAmount);
    totalCosts.push(billAmount + tipAmount);
});
console.log();
bills.forEach(function(bill, index) {
    console.log("The bill is: $" + bill);
    console.log("The tip is: $" + tips[index].toFixed(2));
    console.log("The total cost is: $" + totalCosts[index].toFixed(2));
    console.log();
});