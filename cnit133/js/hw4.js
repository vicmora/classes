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

calculate();