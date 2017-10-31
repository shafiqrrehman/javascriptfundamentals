var usr = prompt("Enter your password?");

var check = usr.charCodeAt(0);
var chk = usr.slice(1);
var flag = false;
let checkString = false;
if (usr.length < 6) {
    alert("Password should be atleast 6 character !");
} else if (check >= 48 && check <= 57) {
    alert("Invalid Password!. Please write correct one.");
} else {
    for (var i = 0; i < usr.length; i++) {
        const convertedValue = usr[i].charCodeAt(0);
        if (convertedValue >= 48 && convertedValue <= 57) {
            flag = true;
            document.write("You have successfully logged in.");
            break;
        } else if((convertedValue >= 65 && convertedValue <= 90) || (convertedValue >= 97 && convertedValue <= 122)){
            checkString = true;
        }
    }
}

if (flag == false || checkString == false) {
    document.write("Your password ahould be contain letters and numbers");
}

