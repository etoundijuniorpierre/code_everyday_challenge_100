var h1 = document.querySelector("h1");
var input = document.querySelector("input");

var text = "We Love Programming!";

// var count = 0;


function active() {
        h1.textContent = "";
        for (let i = 0; i < text.length; i++) {
            const activeSpan = document.createElement('span');
            console.log(text[i])
            
            if(text[i]==' ') {
                activeSpan.innerHTML = `<span>&nbsp;</span>`;
            }else{
                activeSpan.textContent = text[i];
            }
            console.log(activeSpan.innerText)
            const delay = 1 / (parseFloat(input.value));
            activeSpan.style.animationDelay = `${i * delay}s`;
            h1.appendChild(activeSpan);
            // count = i;
            // console.log(count);
        }
}

// function deletespans() {
//     const allSpans = document.querySelectorAll('span');
//     allSpans.forEach(span => span.remove()); 
// }

input.addEventListener('input', active);

active();

