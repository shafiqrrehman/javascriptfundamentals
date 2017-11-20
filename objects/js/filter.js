const names = ["jhone","Bob","Alic","Mike", "Jord"];
let filterStr = "";
function GetSearchedValue(){
filterStr = document.getElementById("search").value;

const answer =  names.filter(function(value, index){
if(value == filterStr){
return value;
}
});
document.getElementById("value").innerHTML = answer;
}