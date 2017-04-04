function calculate() {
	var result = {};
	for(var i=5;i<=20;i+=3) {
		if(i===5) {
			result['sum_a'] = i;
			result['product_a'] = i;
		} else {
			result['sum_a'] += i;
			result['product_a'] *= i;
		}
	}

	var x = 3;
	while(x<=31) {
		if(x===3) {
			result['sum_b'] = x;
			result['product_b'] = x;
		} else {
			result['sum_b'] += x;
			result['product_b'] *= x;
		}
		x += 4;
	}

	document.getElementById('calculate_a').innerHTML = 'The sum and product of every third integer \
														from 5 to 20 is '+result['sum_a']+' and '
														+result['product_a'].toLocaleString()+'.';
												
	document.getElementById('calculate_b').innerHTML = 'The sum and product of every fourth integer \
														from 3 to 31 is '+result['sum_b']+' and '
														+result['product_b'].toLocaleString()+'.';
}

$( function() {
	$( "#draggable" ).draggable();
} );


function validateNumbers(arr) {
	for(var i=0; i<arr.length; i++) {
		if( isNaN(arr[i]) ) {
			return "invalid"
		}
	}
	return "valid";
}

function pay() {
	var frm = document.forms["formPay"];
	var hours = {};
	var rates = {};
	var arr = [];
	var name_hrs, name_rt, name_hrs_out, name_rt_out, pay, pay_out, excess_hrs;

	for(var i=1; i<=6; i++) {
		name_hrs = "in_hrs" + i.toString();
		name_rt = "in_rt" + i.toString();
		hours[name_hrs] = parseFloat(frm.elements[name_hrs].value);
		rates[name_rt] = parseFloat(frm.elements[name_rt].value);
		arr.push(hours[name_hrs]);
		arr.push(rates[name_rt]);
		name_hrs_out = "out_hrs" + i.toString();
		name_rt_out = "out_rt" + i.toString();
		pay_out = "out_pay" + i.toString();
		frm.elements[name_hrs_out].value = hours[name_hrs].toFixed(2);
		frm.elements[name_rt_out].value = rates[name_rt].toFixed(2);
		if(hours[name_hrs] > 40) {
			excess_hrs = hours[name_hrs] - 40;
			pay = 40 * rates[name_rt] + (excess_hrs * (rates[name_rt] * 1.5))
		} else {
			pay = hours[name_hrs] * rates[name_rt]
		}
		frm.elements[pay_out].value = pay.toFixed(2);
	}

	// Check that all input are integers.
	var floatStatus = validateNumbers(arr);

	if( floatStatus === "invalid" ) {
		document.getElementById("warningMessage").innerHTML = "ERROR: Please input numbers only.";
	}

}

function interest() {
	var rates = document.getElementById("int_rate");
	var r = rates.options[rates.selectedIndex].value;

	var amount, name;
	for(var n=1; n<=10; n++) {
		name = "out_"+n.toString();
		name_rate = "ir_"+n.toString();
		amount = 1000*Math.pow(1+r, n);
		document.getElementById(name).innerHTML = amount.toFixed(2);
		document.getElementById(name_rate).innerHTML = r;
	}

}

function totalAmount() {
	var frm = document.forms["formAmount"];

	var name_p, name_q, name_a, price;
	var total = 0;
	var arr = [];
	for(var i=1; i<=5; i++) {
		name_p = "prod"+i.toString();
		name_q = "qty"+i.toString();
		name_a = "amt"+i.toString();

		switch (i) {
			case 1:
				price = 2.98;
				break;
			case 2:
				price = 4.50;
				break;
			case 3:
				price = 9.98;
				break;
			case 4:
				price = 4.49;
				break;
			case 5:
				price = 6.87;
				break;
		}

		amount = frm.elements[name_q].value * price;
		frm.elements[name_a].value = amount.toFixed(2);

		total += amount;

		arr.push(frm.elements[name_q].value);
	}
	frm.elements["amt_total"].value = total.toFixed(2);

	// Check that all input are integers.
	var floatStatus = validateNumbers(arr);

	if( floatStatus === "invalid" ) {
		document.getElementById("warningMessage").innerHTML = "ERROR: Please input numbers only.";
	}
}

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

function lists() {
	var frm = $( "#formList" );
	frm.validate({ rules: { choice: { required: true, number: true, min: 1, max: 3}, },
				   messages: { choice: ' Error: Please enter 1, 2, or 3.'}
				});
	if (frm.valid()) {
		var choice = $( "#choice" ).val()
		choice = parseInt(choice);
		var title, tag, item;
		switch (choice) {
			case 1:
				title = '<h2>Unordered List</h2>';
				tag = '<ul id="lst" style="list-style-type: square;"></ul>';
				break;
			case 2:
				title = '<h2>Ordered Number List</h2>';
				tag = '<ol id="lst"></ol>';
				break;
			case 3:
				title = '<h2>Ordered Letter List</h2>';
				tag = '<ol id="lst" style="list-style-type: upper-alpha;">';
				break;
		}
		$('#outputList').empty()
		$('#outputList').append(title);
		$('#outputList').append(tag);

		for(var i=1; i<=3; i++) {
			item = '<li>List Item'+i.toString()+'</li>';
			$('#lst').append(item);
		}

	} else {
		
	}

}

function song() {

	function verse(i) {
		var day, gift;
		switch(i) {
			case 12:
				day = "twelfth";
				break;
			case 11:
				day = "eleventh";
				break;
			case 10:
				day = "tenth";
				break;
			case 9:
				day = "ninth";
				break;
			case 8:
				day = "eighth";
				break;
			case 7:
				day = "seventh";
				break;
			case 6:
				day = "sixth";
				break;
			case 5:
				day = "fifth";
				break;
			case 4:
				day = "fourth";
				break;
			case 3:
				day = "third";
				break;
			case 2:
				day = "second";
				break;
			case 1:
				day = "first";
				break;
		}

		switch(i) {
			case 12:
				gift = "12 Drummers Drumming<br>";
				break;
			case 11:
				gift = "Eleven Pipers Piping<br>";
				break;
			case 10:
				gift = "Ten Lords a Leaping<br>";
				break;
			case 9:
				gift = "Nine Ladies Dancing<br>";
				break;
			case 8:
				gift = "Eight Maids a Milking<br>";
				break;
			case 7:
				gift = "Seven Swans a Swimming<br>";
				break;
			case 6:
				gift = "Six Geese a Laying<br>";
				break;
			case 5:
				gift = "Five Golden Rings<br>";
				break;
			case 4:
				gift = "Four Calling Birds<br>";
				break;
			case 3:
				gift = "Three French Hens<br>";
				break;
			case 2:
				gift = "Two Turtle Doves<br>";
				break;
			case 1:
				gift = "and a Partridge in a Pear Tree<br>";
				break;
		}
		return [day, gift]
	}
	var text = "";
	var previous;
	for(var i=1; i<=12; i++) {
		v = verse(i);

		if(i===1) {
			previous = v[1];
			text = "On the "+v[0]+" day of Christmas<br>my true love sent to me:<br>A Partridge in a Pear Tree<br><br>";

		} else {
			previous = v[1] + previous;
			text += "On the "+v[0]+" day of Christmas<br>my true love sent to me:<br>"+previous+"<br>";
		}
	}
	document.getElementById("displaySong").innerHTML = text;

	$("#christmas").animate({height: 300}, "slow");
	$("#christmas").animate({width: 300}, "slow");
	$("#christmas").animate({height: 300}, "slow");
	$("#christmas").animate({width: 300}, "slow");
	$("#christmas").animate({height: 150, width: 150}, "slow");
}


