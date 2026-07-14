let pin = "5437";
let balance = 1000;
let incorrect_attempts = 0;
let isLocked = false;

while (isLocked === false) {
    let choice = prompt(
        "ATM Menu:\n" +
        "1. Check Balance\n" +
        "2. Deposit\n" +
        "3. Withdraw\n" +
        "4. Change PIN\n" +
        "5. Exit\n\n" +
        "Choose an option (1-5):"
    );

    if (choice === "5") {
        console.log("Good_bye");
        break; 
    }

    let enteredPin = prompt("Please enter your PIN:");
    
    if (enteredPin !== pin) {
        incorrect_attempts = incorrect_attempts + 1;
        console.log("Incorrect PIN");
        
        if (incorrect_attempts >= 3) {
            isLocked = true;
            console.log("Too many wrong attempts. \n\nAccount has locked.");
        }
        continue;
    } else {
        incorrect_attempts = 0;
    }

    if (choice === "1") {
        console.log("Your balance is: " + balance);

    } else if (choice === "2") {
        let amount = Number(prompt("Enter deposit amount:"));
        
        if (amount > 0) {
            balance = balance + amount;
            console.log("Deposit successful \n\nNew balance: " + balance);
        } else {
            console.log("Invalid amount. \n\nMust be greater than 0.");
        }

    } else if (choice === "3") {
        let amount = Number(prompt("Enter withdrawal amount:"));
        
        if (amount > balance) {
            console.log("Insufficient funds. \n\nYou only have: " + balance);
        } else if (amount <= 0) {
            console.log("Invalid amount.");
        } else {
            balance = balance - amount;
            console.log("Withdrawal successful \n\nNew balance: " + balance);
        }

    } else if (choice === "4") {
        let newPin = prompt("Enter a new 4-digit PIN:");
        
        if (newPin.length === 4) {
            pin = newPin;
            console.log("PIN changed successfully");
        } else {
            console.log("Error: PIN must be exactly 4 digits.");
        }
    } else {
        console.log("Invalid choice. \n\nPlease select from 1 to 5.");
    }
}