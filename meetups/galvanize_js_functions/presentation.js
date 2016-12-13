// function sayHello(name) {
// //   var x = name;
// //   alert('hello ' + x);
//   var result = 'hello ' + name;
//   return result;
// }

// var greeting = sayHello('Victor');
// console.log(greeting);

function addTwo(num1, num2) {
  return num1 + num2;
}

// console.log(addTwo(1, 2));

var arr = [5, 7, 9, 4, 5, 6];
var result = 0;

function avg6(arr) {
  for(var i=0; i<=4; i+=2){
    var sum = addTwo(arr[i], arr[i+1]);
    result += sum;
  };
  var average = result / 6;
  console.log(average);
};

avg6(arr);


function sayHello() {
  console.log('hello');
}

sayHello();

var sayHello2 = function() {
  console.log('hello');
};

sayHello2();

function addTwo(){
  var i = 1;
}
console.log(i);