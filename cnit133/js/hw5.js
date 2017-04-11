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
}