function tellTime(){
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    var aam;

    if (now.getHours >= 12) {
        aam = " pm";
    } else {
        aam = " am";
    }

    alert("Time: " + theHr + ":" + theMin + aam);
}

tellTime();
