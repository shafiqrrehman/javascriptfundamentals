var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurssday", "Friday", "Saturday"];
var now = new Date();
var thedays = now.getDay();
var theFullDays = days[thedays];

var dat = now.getDate();
var year = now.getFullYear();

let currentHours = now.getHours();
let currentMint = now.getMinutes();
let currentSecond = now.getSeconds();
let currentMonth = now.getMonth();

document.write(currentHours + " : " + currentMint + " : " + currentSecond + " : " + theFullDays + " / " + dat + " / " + currentMonth + " / " + year);
