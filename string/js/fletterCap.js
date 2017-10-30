var cityToCheck = prompt("Enter your cleanest city?");
var firstChar = cityToCheck.slice(0, 1);
firstChar = firstChar.toUpperCase();

var otherChar = cityToCheck.slice(1);
otherChar = otherChar.toLowerCase();

var cappedLetter = firstChar + otherChar;
document.write(cappedLetter);