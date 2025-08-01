// variables
const valueToConvert = document.querySelector("#valueToConvert");
const fromUnit = document.querySelector("#fromUnit");
const toUnit = document.querySelector("#toUnit");
const convert = document.querySelector("#convert");
const answer = document.querySelector(".answer");

//eventlisteners
convert.addEventListener("click", handleConvert);
valueToConvert.addEventListener("change", checkForm);
fromUnit.addEventListener("change", checkForm);
toUnit.addEventListener("change", checkForm);

//functions
function checkForm() {
    if(valueToConvert.value && fromUnit.value && toUnit.value){
        convert.removeAttribute("disabled");
    }
    else {
        convert.setAttribute("disabled", true);
    }
}
function handleConvert(e) {
    e.preventDefault();

    const convertedValue = convertValue(valueToConvert.value, fromUnit.value, toUnit.value);
    
    answer.textContent = `${valueToConvert.value} ${fromUnit.value} is ${convertedValue} ${toUnit.value}`;
}

function convertValue(valueToConvert, fromUnit, toUnit) {

    let baseValue = 0;  // make baseValue be celsius
    let answer = 0;
    let value = parseInt(valueToConvert);

    switch(fromUnit) {
        case "Fahrenheit":
            baseValue = (value - 32) * (5/9);
            break;
        case "Celsius":
            baseValue = value;
            break;
        case "Kelvin":
            baseValue = value - 273.15;
            break;
        default:
            baseValue = null;
    }

    switch(toUnit) {
        case "Fahrenheit":
            answer = (baseValue * (9/5)) + 32;
            break;
        case "Celsius":
            answer = baseValue;
            break;
        case "Kelvin":
            answer = baseValue + 273.15;
            break;
        default:
            answer = null;
    }

    return answer;
}