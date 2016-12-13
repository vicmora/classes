var year = 2017;
var saying = "is a great year";
// console.log(year + saying);
// console.log(year, saying)
var numbers = [5, 2, 100, 60, 20, "string", "five"];
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers.length);
// console.log(numbers.pop())
// console.log(numbers)
// console.log(numbers.splice(1, 2))

// var letters = ["a", "b", "c", "d", "e"]
// for (i = 0; i < letters.length; i++)
//   console.log(letters[i])

var adude = {
  firstName: "John",
  lastName: "Smith",
  activity: "surfing",
  locations: ["Santa Cruz", "Hanalei Bay", "Venice Beach"],
  broName: {name: "Trevor", location: "Tahoe"}
}

console.log(adude.firstName)

// Change the console message to read "John Smith loves surfing"
console.log(adude.firstName + " " + adude.lastName + " loves " + adude.activity)

// log "John Smith loves surfing in Venice Beach"
var sentence = adude.firstName + " " + adude.lastName + " loves " + adude.activity + " in " + adude.locations[2]
console.log(sentence)
console.log(adude.broName.location);

for(var n in numbers){
  console.log(n)
}

var myFunction = function(x, y) {
  console.log(x + y);
}

myFunction(40, 30);

const dinner = "pizza";
dinner = "salad";
console.log(dinner)