let plan1 = {
    name: "Professional",
    price: 48,
    space: 100,
    transfer: 1000,
    pages: 10
};

plan1.dicount = [6, 7, 8];

document.write("The cost of " + plan1.name + " package is $" + plan1.price + " per month." + "<br>");
document.write("You have a discount percent is: " + plan1.dicount[1]);

