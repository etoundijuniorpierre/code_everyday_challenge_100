var img = document.querySelector('img'); 
var num = document.querySelector("h2 span");
var heart = document.querySelector(".heart");

var increm = 0;
img.addEventListener("dblclick", (e) => {
    increm++;
    num.innerHTML = increm;
    num.style.color = "blue";

    var rect = img.getBoundingClientRect();
    var x = e.clientX - rect.left/3;
    var y = e.clientY - rect.top/3;

    heart.style.left = x - 20 +'px';
    heart.style.top = y + 20 +'px';
    heart.style.animation = "none"; // reset the animation
    void heart.offsetWidth; // trigger reflow to restart the animation
    heart.style.animation = "animation 1s ease-in";
});
