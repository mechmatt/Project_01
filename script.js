// array with each element as a unique piece of advice
// function to draw random number
// print array element at position of random number

// on document.ready, execute my function


var adviceArray = [
	"Piece of advice #001",
	"Piece of advice #002",
	"Piece of advice #003",
	"Piece of advice #004",
	"Piece of advice #005"
	];

var randPos = Math.floor(adviceArray.length*Math.random());

console.log(adviceArray[randPos]);

var text = adviceArray[randPos];
document.getElementById("text").innerHTML = text;