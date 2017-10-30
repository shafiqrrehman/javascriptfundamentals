var str = prompt("Enter your string?");
var numChars = str.length;

for (var index = 0; index < numChars; index++) {
    if (str.slice(index, index + 2) == "  ") {
        alert("There is two spaces.");
        break;
    } 
}

document.write("Double space not found");