var multiply = prompt("Enter a number to show its multiplication table.");
var mult = multiply;
var leength = prompt("Enter a length of multiplication table.");
var len = leength;

for (var index = 1; index <= len; index++) {
    document.write(mult + " x " + index + " = " + mult * index + "<br>");  
}