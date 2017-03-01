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