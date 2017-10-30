var cityToCheck = prompt("Enter your cleanest city?");
cityToCheck = cityToCheck.toLowerCase();

var cleanestCities = ["lahore", "islamabad", "multan", "karachi", "quetta"];
for (var index = 0; index <= 4; index++) {
    if (cityToCheck === cleanestCities[index]) {
        document.write(cityToCheck + " is cleanest city in your country!");
    }
}