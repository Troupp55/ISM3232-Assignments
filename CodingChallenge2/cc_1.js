var tip;
var billAmount = 275;
var totalCost;

tip = (billAmount > 50 && billAmount < 300) ? 0.15 : 0.2;
console.log("Tip percent is: ", tip);

//This function takes the billAmount as the parameter and then calculates the tip amount 
function calcTip(billAmount){
    tipPercent = (billAmount > 50 && billAmount < 300) ? 0.15 : 0.2;
    var tipAmount = billAmount * tipPercent; // Corrected this line
    return tipAmount;
}

// Test the calcTip function with a bill value of 275
const testTip = calcTip(billAmount);
console.log("Tip amount is: $", testTip);

// Calculate total cost
totalCost = testTip + billAmount;

// Output the bill amount, tip, and total cost
console.log("The bill amount was, ", billAmount, "the tip was, $", testTip, "The total cost was, $",totalCost);

//Test data arrays
const billsSet1 = [275, 40, 430];
const billsSet2 = [125, 555, 44];

const tips= [];

// Populate tips array with the results of calling calcTip for each bill value in billsSet1
billsSet1.forEach(function(i){
    const tipAmount = calcTip(i);
    tips.push(tipAmount);
});

// Populate tips array with the results of calling calcTip for each bill value in billsSet1
console.log("Data set 2");
billsSet2.forEach(function(i){
    const tipAmount = calcTip(i);
    tips.push(tipAmount);
});

// Populate totals array with the sum of each bill and its respective tip in billsSet1
const totalsBillSet1 = [];
billsSet1.forEach(function(billAmount){
    const tipAmount = calcTip(billAmount);
    totalsBillSet1.push(billAmount + tipAmount);
});

// Populate totals array with the sum of each bill and its respective tip in billsSet2
const totalsBillSet2 = [];
billsSet2.forEach(function(billAmount){
    const tipAmount = calcTip(billAmount);
    totalsBillSet2.push(billAmount + tipAmount);
});

//Log the results to the console 
console.log(totalsBillSet1);
console.log(totalsBillSet1);
console.log(tips);
