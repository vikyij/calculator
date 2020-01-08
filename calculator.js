let total = 0;
let buffer = "0";
let operator;
const screen = document.querySelector("#screen");

// function to call a function on the click of any button
// and collect the innertext of that button
function init() {
    document
    .querySelector(".buttons")
    .addEventListener("click", function(e) {
        buttonClick(e.target.innerText);
    })
}

init();

//function to check if button clicked is a number or symbol
function buttonClick(strValue) {
    if(isNaN(parseInt(strValue))) {
        handleSymbols(strValue);
    }
    else{
        handleNumber(strValue);
    }
    screen.innerText = buffer;
}

//function to handle numbers by first storing numbers in buffer
function handleNumber(strValue) {
    if(buffer ==="0") {
        buffer = strValue;
    }
    else {
        buffer += strValue;
    }
}

//function to handle symbols
function handleSymbols(strValue) {
    switch(strValue) {
        case "C" :
            buffer = "0";
            total = 0;
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            handleMaths(strValue);
            break;
        case "←":
            if(buffer.length === "1") {
                buffer = "0";
                return;
            }
            else {
                buffer = buffer.substring(0, buffer.length-1);
            }
            break;
        case "=":
            if(operator === "null") {
                //we need an operator before we can perform maths
                return;
            }
            mainOperation(parseInt(buffer));
            operator = null;
            //buffer = +total;
            total = 0;
            break;
    }
    
}

//function to assign value in buffer to total
function handleMaths(strValue) {
    if(buffer ==="0") {
        return;
    }

    const intBuffer = parseInt(buffer);
    if(total === 0) {
        total = intBuffer;
    }
    else {
        mainOperation(intBuffer);
    }
    operator = strValue;
    buffer = "0";
}

//function to perform maths
function mainOperation(intBuffer) {
    if(operator === "+") {
        total += intBuffer;
    }
    else if(operator === "-") {
        total -= intBuffer;
    }
    else if(operator === "×") {
        total *= intBuffer;
    }
    else if(operator === "÷") {
        total /= intBuffer;
    }
}
