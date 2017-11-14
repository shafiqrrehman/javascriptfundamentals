let plan1 = {
    name: "Professional",
    price: 48,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMoth: [6, 7, 11],
    calcAnnual: function(percentIfDis){
        let bestPrice = plan1.price;
        let now = new Date();
        let thisMon = now.getDate();
        for (var i = 0; i < plan1.discountMoth.length; i++) {
            if (plan1.discountMoth == thisMon) {
                bestPrice = plan1.price * percentIfDis;
                break;
            }
            return bestPrice * 12;
        }
    }
};

let annualPrice = plan1.calcAnnual(.85);

document.write("The customer annual price is: " + annualPrice);