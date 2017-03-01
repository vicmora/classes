function valIntegers(arr) { 
	for(var i; i<=arr.length; i++) {
		if( isNaN(i) ) {
			window.alert("Please enter integers.")
		}
	}
}

function studentGrade() {
	var frm = document.forms["formGrades"];
	var hwAvg = frm.elements["hwAvg"].value;
	var midtermScore = frm.elements["midtermScore"].value;
	var finalScore = frm.elements["finalScore"].value;
	var acr = frm.elements["acr"].value;

	hwAvg = parseInt(hwAvg);
	midtermScore = parseInt(midtermScore);
	finalScore = parseInt(finalScore);
	acr = parseInt(acr);

	// Check for valid input (integers)
	var arr = [hwAvg, midtermScore, finalScore, acr];
	valIntegers(arr);

	var finalAvg = (0.5 * hwAvg) + (0.2 * midtermScore) + (0.2 * finalScore) + (0.1 * acr)

	var res;
	if( finalAvg >= 90 ) {
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

	frm.elements["result"].value = (res);
	}

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});