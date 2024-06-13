var body = document.body;
var span = document.querySelector("span");
var image = document.querySelector(".image");
var img = document.querySelector("img");

var sp = 1;
var compt = 100;
var btn = document.querySelector(".btn")
var input = document.querySelector("input")


window.addEventListener('DOMContentLoaded', function () {
    setInterval(() => {

        if (sp < compt) {
            sp = sp + 1
            span.innerHTML = sp + "%"
            if(sp==compt) {
                btn.style.display = "block";
            }
        }
    }, 20);
});


btn.addEventListener('click', () => {
    clicks();
});

function clicks() {
    input.style.transform= "scale(0.9)";
    input.style.border= "2px solid rgb(68, 79, 228)";
    input.style.boxShadow= "0px";
    input.style.color= "rgb(135, 141, 222)";
    location.reload()
    
} 