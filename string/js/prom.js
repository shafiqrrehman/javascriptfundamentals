var usr = prompt("Enter your username?");
let usrName = usr;

for (var i = 0; i < usrName.length; i++) {
    if (usrName.indexOf(",") != -1 || usrName.indexOf(".") != -1 || usrName.indexOf("@") != -1 || usrName.indexOf("!") != -1) {
        alert("Enter valid username.");
        break;
    }
}