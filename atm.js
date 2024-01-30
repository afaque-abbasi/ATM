/*
Name: Afaque Ahmed Abbasi
Roll No: PIAIC227902
City: Karachi
Batch: 51
*/
import inquirer from "inquirer";
const userInput = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Enter User Id"
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your Pin"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select Your Account Type"
    },
    {
        type: "list",
        name: "TransactionType",
        choices: ["Fast Cash", "Cash Withdraw", "Balance Inquiry"],
        message: "Select Your Transaction"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Amount You want to withdraw",
        when(userInput) {
            return (userInput.TransactionType === 'Cash Withdraw');
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 10000, 20000, 25000],
        message: "Select Amount you want to Withdraw",
        when(userInput) {
            return (userInput.TransactionType === 'Fast Cash');
        }
    }
]);
// Making variable for storing user input data
const userID = userInput.userID;
const userPin = userInput.userPin;
const enteredAmount = userInput.amount;
if ((userID && userPin) && userInput.transactionType == "Balance Inquiry") {
    const userBalace = Math.floor(Math.random() * 100000);
    console.log(`Your Current balance is Rs ${userBalace}\n`);
}
else if (userID && userPin) {
    const userBalace2 = Math.floor(Math.random() * 100000);
    if (userBalace2 > enteredAmount) {
        console.log(`Your account has been debited With Rs ${enteredAmount}and your remaining balance is ${userBalace2 - enteredAmount}`);
    }
    else {
        console.log(`\n Unsufficient Balance`);
    }
}
