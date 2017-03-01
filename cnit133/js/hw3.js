function validateNumbers(arr) {
	for(var i=0; i<arr.length; i++) {
		if( isNaN(arr[i]) ) {
			return "invalid"
		}
	}
	return "valid";
}

function validateRange(arr, start, end) {
	for(var i=0; i<arr.length; i++) {
		if( arr[i] < start || arr[i] > end ) {
			return "invalid"
		}
	} 
	return "valid";
}

function studentGrade() {
	document.getElementById("warningMessage").innerHTML = "";

	var frm = document.forms["formGrades"];
	var hwAvg = frm.elements["hwAvg"].value;
	var midtermScore = frm.elements["midtermScore"].value;
	var finalScore = frm.elements["finalScore"].value;
	var acr = frm.elements["acr"].value;

	hwAvg = parseInt(hwAvg);
	midtermScore = parseInt(midtermScore);
	finalScore = parseInt(finalScore);
	acr = parseInt(acr);

	var arr = [hwAvg, midtermScore, finalScore, acr];

	// Check that all input are integers.
	var integerStatus = validateNumbers(arr);

	// Check for integers between 0 and 100.
	var rangeStatus = validateRange(arr, 0, 100);

	var finalAvg = (0.5 * hwAvg) + (0.2 * midtermScore) + (0.2 * finalScore) + (0.1 * acr)
	var res;
	
	if( integerStatus === "invalid" || rangeStatus === "invalid" ) {
		res = "ERROR";
		document.getElementById("warningMessage").innerHTML = "ERROR: Please input integers between 0 and 100.";
	}
	else if( finalAvg >= 90 ) {
		res = "Student's final grade is an A!";
	}
	else if( finalAvg >= 80 ) {
		res = "Student's final grade is a B!";
	}
	else if( finalAvg >= 70 ) {
		res = "Student's final grade is a C.";
	}
	else {
		res = "Student must retake the course."
	}

	frm.elements["result"].value = res;
}

function sales() {
	var frm = document.forms["formSales"];
	var item1 = frm.elements["item1"].value;
	var item2 = frm.elements["item2"].value;
	var item3 = frm.elements["item3"].value;
	var item4 = frm.elements["item4"].value;

	item1 = parseFloat(item1);
	item2 = parseFloat(item2);
	item3 = parseFloat(item3);
	item4 = parseFloat(item4);

	var arr = [item1, item2, item3, item4];

	var floatStatus = validateNumbers(arr);

	document.getElementById("warningMessage").innerHTML = "";
	if( floatStatus === "invalid" ) {
		document.getElementById("warningMessage").innerHTML = "ERROR: Please input valid numbers.";
	}

	var totalSold1 = item1 * 239.99;
	var totalSold2 = item2 * 129.75;
	var totalSold3 = item3 * 99.95;
	var totalSold4 = item4 * 350.89;

	var totalSold = totalSold1 + totalSold2 + totalSold3 + totalSold4;
	var totalEarnings = 200 + (totalSold * .09);

	document.getElementById("numSold1").value = item1;
	document.getElementById("totalSold1").value = totalSold1.toFixed(2);
	document.getElementById("numSold2").value = item2;
	document.getElementById("totalSold2").value = totalSold2.toFixed(2);
	document.getElementById("numSold3").value = item3;
	document.getElementById("totalSold3").value = totalSold3.toFixed(2);
	document.getElementById("numSold4").value = item4;
	document.getElementById("totalSold4").value = totalSold4.toFixed(2);
	document.getElementById("totalSold").value = totalSold.toFixed(2);
	document.getElementById("totalEarnings").value = totalEarnings.toFixed(2);

}

function credit() {
	var frm = document.forms["formCredit"];
	var accNumber = frm.elements["accNumber"].value;
	var bgnBal = frm.elements["bgnBal"].value;
	var amtCharged = frm.elements["amtCharged"].value;
	var crApplied = frm.elements["crApplied"].value;
	var crLimit = frm.elements["crLimit"].value;

	accNumber = parseInt(accNumber);
	bgnBal = parseFloat(bgnBal);
	amtCharged = parseFloat(amtCharged);
	crApplied = parseFloat(crApplied);
	crLimit = parseFloat(crLimit);

	var arr = [accNumber, bgnBal, amtCharged, crApplied, crLimit];

	var status = validateNumbers(arr);

	document.getElementById("warningMessage").innerHTML = "";
	if( status === "invalid" ) {
		document.getElementById("warningMessage").innerHTML = "ERROR: Please enter valid numbers.";
	}

	var endBal = bgnBal + amtCharged - crApplied;
	var crAvailable = crLimit - endBal;

	var crSummary;
	if( crAvailable < 0 ) {
		crSummary = "Credit limit exceeded by " + Math.abs(crAvailable);
	}
	else {
		crSummary = "Credit available is " + crAvailable;
	}

	var res = "Monthly Credit Account Summary:\n" +
			"Account Number: " + accNumber + "\n" +
			"Credit Limit: " + crLimit + "\n" +
			"Beginning Balance: " + bgnBal + "\n" +
			"Amount Charged: " + amtCharged + "\n" +
			"Credits Applied: " + crApplied + "\n" +
			"Ending Balance: " + endBal + "\n" +
			crSummary;

	frm.elements["result"].value = res;
}

function palindrome() {
	var frm = document.forms["formPalindrome"];
	var intInput = frm.elements["intInput"].value;

	// Parse string to integer in order to check that it is an integer.
	var iInput = parseInt(intInput);

	// Check to confirm input is integer.
	var arr = [iInput];
	var intStatus = validateNumbers(arr);

	// Check to make sure the input is 5 digits in length.
	var lenStatus;
	if( intInput.length !== 5 ) {
		lenStatus = "invalid";
	}

	// Check to make sure the input is a palindrome.
	var intReverse = intInput.split('').reverse().join('');
	
	var palStatus;
	if( intInput !== intReverse ) {
		palStatus = "invalid";
	}

	// If any check doesn't pass, output an error message else output a success message.
	if( intStatus === "invalid" || lenStatus === "invalid" ) {
		document.getElementById("outputMessage").innerHTML = "Invalid input. Please enter a 5-digit integer.";
	}
	else if( palStatus === "invalid" ) {
		document.getElementById("outputMessage").innerHTML = "The integer is not a palindrome.";
	}
	else {
		document.getElementById("outputMessage").innerHTML = "Success! The integer is a palindrome.";
	}

}

function temperature(metric) {
	var frm = document.forms["formTemp"];
	var tempInput = frm.elements["tempInput"].value;

	// Parse string to integer in order to check that it is an integer.
	tempInput = parseFloat(tempInput);

	// Check to confirm input is integer.
	var arr = [tempInput];
	var floatStatus = validateNumbers(arr);

	var tempConverted;
	var msg;
	if( metric === "celsius" ) {
		tempConverted = (9/5 * tempInput) + 32;
		msg = tempInput + " celsius is equivalent to " + tempConverted.toFixed(0) + " fahrenheit.";
	}
	else if( metric === "fahrenheit" ) {
		tempConverted = (5/9) * (tempInput - 32);
		msg = tempInput + " fahrenheit is equivalent to " + tempConverted.toFixed(0) + " celsius.";
	}

	// If any check doesn't pass, output an error message else output a success message.
	if( floatStatus === "invalid") {
		document.getElementById("outputMessage").innerHTML = "Invalid input. Please enter a number.";
	}
	else {
		document.getElementById("outputMessage").innerHTML = msg;
	}

}

var correctAnswer, x, y;
function getNumbers() {
	x = Math.round(Math.random() * 10);
	y = Math.round(Math.random() * 10);

	var question = "What is " + x + " times " + y + "?"

	document.getElementById("question").innerHTML = question;

	correctAnswer = x * y;
}

function checkAnswer() {
	var frm = document.forms["formMult"];
	var answer = frm.elements["answer"].value;

	// Parse string to float.
	answer = parseFloat(answer);

	// Check to confirm input is a float.
	var arr = [answer];
	var floatStatus = validateNumbers(arr);

	var answerStatus;
	var msg;
	if( answer === correctAnswer ) {
		answerStatus = "valid";
		msg = "Very good! " + x + " times " + y + " is " + correctAnswer;
	}
	else {
		answerStatus = "invalid";
		msg = "Incorrect. Please try again.";
	}

	// If any check doesn't pass, output an error message else output a success message.
	if( floatStatus === "invalid") {
		document.getElementById("outputMessage").innerHTML = "Invalid input. Please enter a number.";
	}
	else if ( answerStatus === "invalid" ) {
		document.getElementById("outputMessage").innerHTML = msg;
	}
	else {
		document.getElementById("outputMessage").innerHTML = msg;
		document.getElementById("formMult").reset();
		getNumbers();
	}
}


$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$(function() {
	$(document).tooltip();
});

$(document).ready(function(){
    $("#changeButton").click(function(){
        $("#result").css({
            "color": "#FFFFFF",
            "background-color": "#000000",
            "font-weight": "bold",
            "font-size": "20px",
        });
    });
});
 
$(function() {
	$( "#dialog" ).dialog({
		autoOpen: false,
		show: {
		effect: "blind",
		duration: 100
		},

		hide: {
		effect: "fade",
		duration: 100
		}
	});

	$( "#opener" ).click(function() {
		$( "#dialog" ).dialog( "open" );
	});
});


