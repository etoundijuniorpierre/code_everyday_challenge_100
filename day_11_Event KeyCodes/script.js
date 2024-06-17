var key = document.querySelector(".Key")
var keyCode = document.querySelector(".Keycode")
var code = document.querySelector(".Code")

var boxOne = document.querySelector(".boxOne")
var boxTwo = document.querySelector(".boxTwo")

function myFunction(event) {
    boxOne.style.opacity = "0";
    boxOne.style.zIndex = "1";
    boxTwo.style.opacity = "1"

    let value1 = event.code;
    let value2 = event.key;
    let value = event.keyCode;

    key.textContent = value2.toUpperCase();
    code.textContent = value1;
    keyCode.textContent = value;

}

document.addEventListener("keypress", myFunction);