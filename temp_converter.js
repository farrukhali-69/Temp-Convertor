

let textbox = document.getElementById("textbox");
let tofahrenheit = document.getElementById("tofahrenheit");
let tocelcius = document.getElementById("tocelcius");
let result = document.getElementById("result");
let temp;

function convert(){
    temp = Number(textbox.value);

    if(tofahrenheit.checked){
        temp = textbox.value * 9/5 +32;
        result.textContent = (temp).toFixed(1) + "°F"
    }
    else if(tocelcius.checked){
        temp = (textbox.value -32) * 5/9;
        result.textContent = (temp).toFixed(1) + "°C"
    }
    else{
        result.textContent("Please select a unit.");
    }
}