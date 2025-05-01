// Virtual Vending Machine
// Using JavaScript variables and conditionals

// Step 1: Define variables
let userMoney = 1.00; // User's money
let item = "soda";
let price = 2.00;

// Step 2: Use a conditional statment
if (userMoney >= price) {
    // some code here
    let change = userMoney - price;
    console.log("You bought " + item + " for $" + price + ".");
    console.log("Your change is $" + change + ".");
} else {
    // some other code here
    console.log("Insufficient funds. Please add more money.");
}