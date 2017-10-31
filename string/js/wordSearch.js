var str = "The quick brown fox jumps the over the lazy dog.";
var low = str.toLowerCase();

document.write("String: " + str + "<br>");

let counter = 0;
for (var i = 0; i < str.length; i++) {
    if (low.slice(i, i + 3) === "the") {
        counter++;
    }
}
document.write(`There are ${counter} occurances of word 'the' `);
