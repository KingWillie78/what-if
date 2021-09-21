const prompt = require("prompt-sync")();

const question = prompt("Put a number in: ");
const number = Number(question);

if (number % 3 === 0 && number % 5 === 0) {
	console.log("fizzbuzz ");
}
else if (number % 3 === 0) {
	console.log("fizz");
}
else if (number % 5 === 0) {
	console.log("buzz");
}
else {
	console.log("Error");
}