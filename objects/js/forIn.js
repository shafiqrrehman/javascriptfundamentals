function myFunc() {
    let obj = {
        fName: "John",
        lName: "Doe",
        age: 24
    };

    let text = "";
    let x;
    for(x in obj){
        text += obj[x] + " ";
    }

    document.getElementById('demo').innerHTML = text;
}