var usr = prompt("Enter your word?");
let usrN = usr.slice(0, 1);
let upr = usrN.toUpperCase();

let other = usr.slice(1);
let lower = other.toLowerCase();

const full = upr + lower;

document.write("User input: " + usr + "<br>");
document.write("Uppercase: " + full);