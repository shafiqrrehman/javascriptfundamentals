var a = ["cake", "apple pie", "cookie", "chips", "patties"];

var usr = prompt("Welcome to ABC Bakery!! What do you want to order sir/madam ?");
var check = usr.slice(0);
check = check.toLowerCase();

let flag = false;

for (var index = 0; index <= a.length; index++) {
    if (check == a[index]) {
        document.write(a[index] + " is available in index " + index + " in our Bakery.");
        flag = true;
        break;
    }
}

if (flag == false) {
    document.write("We are sorry. " + usr + " is not available in our Bakery.");
}