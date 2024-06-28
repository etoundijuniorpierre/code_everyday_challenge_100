var three = document.querySelector(".three");
var h3 = document.querySelector("h3");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var point = document.querySelector(".point");
var clockNum = document.querySelector(".clockNum");
var container = document.querySelector(".container");
var input = document.querySelector("input[type='time']")

var interval = 0;
var upmin = 0;
var upheure = 0;

function round() {
    document.addEventListener("DOMContentLoaded", () => {


        setInterval(() => {
            three.style.transform = `translate(-50%, 50%) rotate(${interval}deg) translate(50%, -50%)`;
            interval = (interval + 5) % 360;

            if (interval === 0) {
                upmin++;
                if (upmin > 60) {
                    upmin = 0;
                    upheure++;
                }

                const hours = 12 + upheure;
                const minutes = upmin < 10 ? `0${upmin}` : upmin;
                input.value = `${hours}:${minutes}`;
            }
        }, 800)
    })
}



h3.addEventListener("click", () => {
    if (h3.style.background === "black") {
        h3.style.background = "white";
        h3.style.color = "black";
        h3.innerText = "Light Mode";
        one.style.color = "black";
        two.style.color = "black";
        point.style.color = "black";
        clockNum.style.color = "black";
        container.style.background = "white";
    } else {
        h3.style.background = "black";
        h3.style.color = "white";
        h3.innerText = "Dark Mode";
        one.style.color = "white";
        two.style.color = "white";
        point.style.color = "white";
        clockNum.style.color = "white";
        container.style.background = "black";
    }


});





round();