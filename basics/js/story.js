let adjective = prompt("Type a adjective ?");
let sentence = "<h2>There was a " + adjective + " ";
let noun = prompt("Type a noun ?");
sentence += noun + " , who wants to ";
let verb = prompt("Type a verb ?");

sentence += verb + " programing world !" + "</h2>"

document.write(sentence);