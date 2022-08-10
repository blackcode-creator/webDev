var accountnumber,
	correct_pass = (/^[0-9]{4}$/),
	passTry = 3,
	currentBalance = 35000;
	
// Input a accountnumber
function atmMachineUsername() {
	accountnumber = prompt("Account Number");
	if (accountnumber == "234890" && accountnumber !== null) {
		atmMachinePassword();
	} else {
		alert("please enter the valid account")
	}
}
// Input a valid password
function atmMachinePassword() {
	var pswEntry = parseInt(prompt("Account Number: " + accountnumber + ", enter your 4 digit PIN" + " \n login at "+ Date().slice(16,21)));
	checkPassword(pswEntry);
}
// Verify Password meets requirements
function checkPassword(userInput) {
    if (correct_pass.test(userInput)){
        selectAccountType();
    } else {
        while (!(correct_pass.test(userInput))) {
            if (passTry === 1) {
				alert("Incorrect PIN.");
            	alert("Maximum tries exceeded! Your account has been locked. Contact your bank for support."); 
                exit();
                break;
            } else {
				passTry -= 1;
				alert("Incorrect PIN. Please try again.");
				alert("You have " + passTry + " chance/s to try");
            	atmMachinePassword();
			}
        }
    }
}
// Select Which account type to use
function selectAccountType() {
    var accountType = parseInt(prompt("Select account \n 1. Savings Account \n 2. Personal Account \n 3. Family Account"));
	if (accountType !== "" && accountType !== null && !isNaN(accountType)) {
		selectFunction();
	} else {
		alert("Please make a valid selection");
		selectAccountType();
	}
}
// Select what the user wishes to do
function selectFunction() {
	var atmFunctions = parseInt(prompt("Hello customer" + accountnumber + ", what can we do for you today? \n 1. Inquiry \n 2. Withdrawal \n 3. Deposit \n 4. Exit"));
	if (atmFunctions !== "" && atmFunctions !== null && !isNaN(atmFunctions)) {
		switch (atmFunctions) {
			case 1:
				inquiry();
				break;
			case 2:
				withdrawal();
				break;
			case 3:
				deposit();
				break;
			case 4:
				exit();
				break;
			default:
				alert("Please make a valid selection");
				selectFunction();
		}
	} else {
		alert("Please make a valid selection");
		selectFunction();
	}
}
// Inquiry
function inquiry() {
	alert("Your current balance is $" + currentBalance);
	toContinue();
}
// Deposit
function deposit() {
	var depositAmount = parseInt(prompt("How much do you want to deposit?"));
	if (depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) {
		currentBalance += depositAmount;
		alert("You have successfully deposited $" + depositAmount + "\n" + "You now have $" + currentBalance);
		toContinue();
	} else {
		alert("Error: please enter a number!");
		deposit();
	}
}
// Withdrawal
function withdrawal() {
	var withdrawalAmount = parseInt(prompt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is $1000"));
	if (withdrawalAmount !== "" && withdrawalAmount !== null && !isNaN(withdrawalAmount)) {
		if (withdrawalAmount >= 1000) {
			if (withdrawalAmount <= currentBalance) {
				currentBalance -= withdrawalAmount;
				alert("Transaction successful!");
				alert("Ref: QMNCDG5674959 amount withdrawal: "+ withdrawalAmount);
				alert("Your remaining balance is $" + currentBalance);
				toContinue();
			} else {
				alert("You do not have sufficient funds!");
				withdrawal();
			}
		} else {
			alert("You must withdraw at least $1000");
			withdrawal();
		}
	} else {
		alert("Error: please enter a number!");
		withdrawal();
	}
}	
// Does the user wish to continue using the ATM
function toContinue(){
    var yesOrNo = parseInt(prompt("Do you want to perform another transaction? \n 1. Yes \n 2. No"));
	if (yesOrNo !== "" && yesOrNo !== null) {
    	if (yesOrNo === 2){
			exit();
    	}
		else {
			selectAccountType(); 
    	}
	} else {
		alert("Please make a valid selection");
		toContinue();
	}
}
// Exit the ATM
function exit() {
	alert("Thank you for your loyalty" + "\n logout at " + Date().slice(16,21));
		// To simulate a real ATM, get ready for next user
		// atmMachineUsername();
}
