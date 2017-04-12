function part1a() {
	var frm = document.forms["inputForm"];
	var nm = frm.elements["nm"].value;
	var color = frm.elements["color"].value;
	var sports = [];
    $('input[type="checkbox"]:checked').each(function() {
      sports.push($(this).val());
    });
    var loc = frm.elements["loc"].value;
    var message;
    var sMessage;

    if(nm === "") {
    	message = "Please enter a name.";
    } else if(color === "") {
    	message = "Please select a color.";
    } else if(sports.length === 0) {
    	message = "Please select at least one sports option.";
    } else if(loc === "") {
    	message = "Please select a location.";
    } else {
    	if(sports.length === 1) {
    		sMessage = "Your favorite sport is "+sports[0]+".<br>";
    	}
    	else {
    		sMessage = "Your favorite sports are "+sports.slice(0,-1).join(", ")+
    				   " and "+sports[sports.length - 1]+".<br>";
    	}

    	message = "Thank you "+nm.toLocaleString()+"!<br>\
    			  We now know that your favorite color is "+color+".<br>"+sMessage+
    			  "Your current location is "+loc+"!<br>";
    }
    document.getElementById("message").innerHTML = message;
};

function part1b() {
    var e = document.getElementById('engines');
    var engine = e.options[e.selectedIndex].text;

    if(engine === 'Google') {
        window.open('https://www.google.com');       
    } else if(engine === 'Bing') {
        window.open('https://www.bing.com');
    } else if(engine === 'Yahoo!') {
        window.open('https://www.yahoo.com');
    }

    var s = document.getElementById('sites');
    var site = s.options[s.selectedIndex].text;

    if(site === 'Reddit') {
        window.open('https://www.reddit.com');       
    } else if(site === 'DataTau') {
        window.open('http://www.datatau.com');
    } else if(site === 'Hacker News') {
        window.open('https://news.ycombinator.com/');
    }
};

function part2() {
    var frm = document.forms['stateForm'];
    var inState = frm.elements['inState'].value.toLowerCase();    

    var data = {
                'al': ['Alabama', 'Montgomery', 4779736],
                'alabama': ['Alabama', 'Montgomery', 4779736],
                'ak': ['Alaska', 'Juneau', 710231],
                'alaska': ['Alaska', 'Juneau', 710231],
                'az': ['Arizona', 'Phoenix', 6392017],
                'arizona': ['Arizona', 'Phoenix', 6392017],
                'ar': ['Arkansas', 'Little Rock', 2915918],
                'arkansas': ['Alabama', 'Montgomery', 4779736],
                'ca': ['California', 'Sacramento', 37253956],
                'california': ['California', 'Sacramento', 37253956],
                'co': ['Colorado', 'Denver', 5029196],
                'colorado': ['Colorado', 'Denver', 5029196],
                 }
    if(!(inState in data)) {
        frm.elements['outStateName'].value = 'ERROR: Invalid input.';
        frm.elements['outStateCapital'].value = 'ERROR: Invalid input.';
        frm.elements['outPopulation'].value = 'ERROR: Invalid input.';
    } else {
        frm.elements['outStateName'].value = data[inState][0];
        frm.elements['outStateCapital'].value = data[inState][1];
        frm.elements['outPopulation'].value = data[inState][2];
    }

};

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

function part3() {
    var frm = document.forms['salesForm'];
    var inSales = parseFloat(frm.elements['inSales'].value);
    var outTwo = parseInt(document.getElementById('outTwo').innerHTML);
    var outThree = parseInt(document.getElementById('outThree').innerHTML);
    var outFour = parseInt(document.getElementById('outFour').innerHTML);
    var outFive = parseInt(document.getElementById('outFive').innerHTML);
    var outSix = parseInt(document.getElementById('outSix').innerHTML);
    var outSeven = parseInt(document.getElementById('outSeven').innerHTML);
    var outEight = parseInt(document.getElementById('outEight').innerHTML);
    var outNine = parseInt(document.getElementById('outNine').innerHTML);
    var outTen = parseInt(document.getElementById('outTen').innerHTML);
    var salary = 200 + (inSales * .09);

    var arr = [outTwo, outThree, outFour, outFive, outSix,
               outSeven, outEight, outNine, outTen];

    if(salary >= 200 && salary < 300) {
        arr[0] += 1;
        document.getElementById('outTwo').innerHTML = arr[0];
    } else if( salary >= 300 && salary < 400) {
        arr[1] += 1;
        document.getElementById('outThree').innerHTML = arr[1];
    } else if( salary >= 400 && salary < 500) {
        arr[2] += 1;
        document.getElementById('outFour').innerHTML = arr[2];
    } else if( salary >= 500 && salary < 600) {
        arr[3] += 1;
        document.getElementById('outFive').innerHTML = arr[3];
    } else if( salary >= 600 && salary < 700) {
        arr[4] += 1;
        document.getElementById('outSix').innerHTML = arr[4];
    } else if( salary >= 700 && salary < 800) {
        arr[5] += 1;
        document.getElementById('outSeven').innerHTML = arr[5];
    } else if( salary >= 800 && salary < 900) {
        arr[6] += 1;
        document.getElementById('outEight').innerHTML = arr[6];
    } else if( salary >= 900 && salary < 1000) {
        arr[7] += 1;
        document.getElementById('outNine').innerHTML = arr[7];
    } else if( salary >= 1000 ) {
        arr[8] += 1;
        document.getElementById('outTen').innerHTML = arr[8];
    }
};


var numbersArr = [];
var unique = [];
function part4() {
    var frm = document.forms['numberForm'];
    var inNumber = parseFloat(frm.elements['inNumber'].value);
    var msg;

    if(!(inNumber >= 10 && inNumber <= 100)) {
        msg = 'ERROR: Please enter a number between 10 and 100';
    } else {
        if(unique.indexOf(inNumber) === -1) {
            unique.push(inNumber);
        }
        numbersArr.push(inNumber);

        msg = 'Count: '+numbersArr.length+'\n\n'
              +'Unique numbers entered: '+unique.join(', ')+'\n\n'
              +'Numbers entered: '+numbersArr.join(', ');
    }

    document.getElementById('results').innerHTML = msg;

};