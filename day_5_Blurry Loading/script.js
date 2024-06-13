var body = document.body;
var span = document.querySelector("span");
var image = document.querySelector(".image");
var img = document.querySelector("img");
var sp = 1;
var compt = 100;
window.addEventListener('DOMContentLoaded', function () {
    setInterval(() => {

        if (sp < compt) {
            sp = sp + 1
            span.innerHTML = sp + "%"
        }
    }, 20);
});




