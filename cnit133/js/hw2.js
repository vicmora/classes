function calculate() {
	var frm = document.forms["inputForm"];
	var first = frm.elements["first"].value;
	var second = frm.elements["second"].value;
	var third = frm.elements["third"].value;

	first = parseInt(first);
	second = parseInt(second);
	third = parseInt(third);

	sum = first + second + third;
	avg = (first + second + third) / 3;
	product = first * second * third;
	min = Math.min(first, second, third);
	max = Math.max(first, second, third);

	frm.elements["result"].value = ("Sum: " + sum + "\n" +
									"Average: " + avg + "\n" +
									"Product: " + product + "\n" +
									"Min: " + min + "\n" +
									"Max: " + max + "\n");
}


function counter() {
	var frm = document.forms["inputForm"];
	var first = frm.elements["first"].value;
	var second = frm.elements["second"].value;
	var third = frm.elements["third"].value;
	var fourth = frm.elements["fourth"].value;
	var fifth = frm.elements["fifth"].value;

	first = parseInt(first);
	second = parseInt(second);
	third = parseInt(third);
	fourth = parseInt(fourth);
	fifth = parseInt(fifth);

	var arr = [first, second, third, fourth, fifth];
	var pos = 0;
	var neg = 0;
	var zero = 0;

	for(var i=0; i<arr.length; i++) {
		if(arr[i] > 0) {
			pos += 1;
		} else if(arr[i] < 0) {
			neg += 1;
		}
		else {
			zero += 1;
		}
	}

	frm.elements["result"].value = ("Number of positives: " + pos + "\n" +
									"Number of negatives: " + neg + "\n" +
									"Number of zeroes: " + zero);
}

function showTable() {
	$("#hiddenTable").show();
}

$(document).ready(function(){
    $("button").click(function(){
        $("#res").fadeTo("slow", 0.15);
    });
});