function part1() {
	var frm = document.forms['numForm'];
	var n = parseFloat(frm.elements['inNum'].value);
	var outInt = Math.round(n);
	var outSqRoot = Math.round(Math.sqrt(n));
	var outTen = Math.floor(n*10+0.5) / 10;
	var outHund = Math.floor(n*100+0.5) / 100;
	var outThou = Math.floor(n*1000+0.5) / 1000;

	var res = 'Number entered: '+n+'\n'
			+'Nearest integer: '+outInt+'\n'
			+'Square root rounded: '+outSqRoot+'\n'
			+'Rounded to nearest tenths: '+outTen+'\n'
			+'Rounded to nearest hundredths: '+outHund+'\n'
			+'Rounded to nearest thousandths: '+outThou;

	if(isNaN(n)) {
		res = 'ERROR: Please enter a number.'
	};
	document.getElementById('results').innerHTML = res;
};

function part2() {
	var frm = document.forms['frm'];
	var inText = frm.elements['inText'].value;
	var searchChar = frm.elements['searchChar'].value.toLowerCase();
	var count = 0;
	var res;

	for(var i=0;i<inText.length;i++) {
		if(searchChar === inText.charAt(i).toLowerCase()) {
			count += 1;
		};
	};

	if(count === 0) {
		var newWindow = window.open('', 'ventana', 'top=1,left=1,width=300,height=100');
		var t = 'Search character, '+searchChar+', not found in string!';
		newWindow.focus();
		newWindow.document.write(t);
		newWindow.document.close();
	} else{
		res = 'Number of occurences of search character: '+count;
		document.getElementById('results').innerHTML = res;
	}
};

function part3a() {
	var now = new Date();
	var html = 'Date and time using .toString():<br>'
				+now.toString()+'<br><br>'
				+'Using .toLocaleString():<br>'
				+now.toLocaleString()+'<br><br>'
				+'Using .toUTCString():<br>'
				+now.toUTCString()+'<br><br>'
				+'Hours difference between PDT and UTC:<br>'
				+(now.getTimezoneOffset() / 60)+'<br><br>'
				+'Hours difference between EDT and UTC<br>'
				+(now.getTimezoneOffset() / 60 - 3);

	document.getElementById('datetime').innerHTML = html;
};

function part3b() {
	var frm = document.forms['frm'];
	var inNumber = frm.elements['inNumber'].value;
	var numberSplit = inNumber.split(')');

	frm.elements['outArea'].value = numberSplit[0]+')';
	frm.elements['outNumber'].value = numberSplit[1];
};

function part4() {
	var frm = document.forms['frm'];
	var inText = frm.elements['inText'].value;
	var arr = inText.split('');
	var letter;
	var count = {};
	var text = 'Total count for each character:\n\n';

	for(var i=0;i<arr.length;i++) {
		letter = arr[i].toLowerCase();
		if(letter === ' ') {
			continue;
		} else if (!(letter in count)) {
			count[letter] = 1;
		} else {
			count[letter] += 1;
		}
	}

	for(key in count) {
		text += key+': '+count[key]+'\n';
	}

	frm.elements['results'].value = text;
};

$(document).ready(function(){
  $('#phone').mask('(000) 000-0000');
});