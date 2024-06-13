
var box4 = document.querySelector(".box4")
var box5 = document.querySelector(".box5")
var box6 = document.querySelector(".box6")
var box7 = document.querySelector(".box7")
var box8 = document.querySelector(".box8")
var box9 = document.querySelector(".box9")
var box10 = document.querySelector(".box10")
var box11 = document.querySelector(".box11")
var box12 = document.querySelector(".box12")

var shold4 = 20;
var shold5 = 30;
var shold6 = 40;
var shold7 = 50;
var shold8 = 60;
var shold9 = 70;
var shold10 = 80;
var shold11 = 90;
var shold12 = 100;

function getScrollPercentage() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    return scrollPercentage;
}

// Event listener to track scrolling and log the scroll percentage
window.addEventListener('scroll', () => {
    const scrollPercent = getScrollPercentage();

    if (scrollPercent > shold4) {
        box4.style.transform = "translateX(0)";
        box4.style.opacity = "1";
        box4.style.animation = "fade-animation-name1 0.5s linear";
    } else {
        box4.style.opacity = "0";
        box4.style.animation = "fade-animation-name2 0.5s linear";
    } 

    if (scrollPercent > shold5) {
        box5.style.transform = "translateX(0)";
        box5.style.opacity = "1";
        box5.style.animation = "fade-animation-name3 0.5s linear";
    } else {
        box5.style.transform = "translateX(-500px)";
        box5.style.opacity = "0";
        box5.style.animation = "fade-animation-name4 0.5s linear";
    }

    if (scrollPercent > shold6) {
        box6.style.transform = "translateX(0)";
        box6.style.opacity = "1";
        box6.style.animation = "fade-animation-name1 0.5s linear";
    } else {
        box6.style.transform = "translateX(500px)";
        box6.style.opacity = "0";
        box6.style.animation = "fade-animation-name2 0.5s linear";
    }

    if (scrollPercent > shold7) {
        box7.style.transform = "translateX(0)";
        box7.style.opacity = "1";
        box7.style.animation = "fade-animation-name3 0.5s linear";
    } else {
        box7.style.transform = "translateX(-500px)";
        box7.style.opacity = "0";
        box7.style.animation = "fade-animation-name4 0.5s linear";
    }

    if (scrollPercent > shold8) {
        box8.style.transform = "translateX(0)";
        box8.style.opacity = "1";
        box8.style.animation = "fade-animation-name1 0.5s linear";
    } else {
        box8.style.transform = "translateX(500px)";
        box8.style.opacity = "0";
        box8.style.animation = "fade-animation-name2 0.5s linear";
    }


    if (scrollPercent > shold9) {
        box9.style.transform = "translateX(0)";
        box9.style.opacity = "1";
        box9.style.animation = "fade-animation-name3 0.5s linear";
    } else {
        box9.style.transform = "translateX(-500px)";
        box9.style.opacity = "0";
        box9.style.animation = "fade-animation-name4 0.5s linear";
    }

    if (scrollPercent > shold10) {
        box10.style.transform = "translateX(0)";
        box10.style.opacity = "1";
        box10.style.animation = "fade-animation-name1 0.5s linear";
    } else {
        box10.style.transform = "translateX(500px)";
        box10.style.opacity = "0";
        box10.style.animation = "fade-animation-name2 0.5s linear";
    }

    if (scrollPercent > shold11) {
        box11.style.transform = "translateX(0)";
        box11.style.opacity = "1";
        box11.style.animation = "fade-animation-name3 0.5s linear";

    } else {
        box11.style.transform = "translateX(-500px)";
        box11.style.opacity = "0";
        box11.style.animation = "fade-animation-name4 0.5s linear";
    }

    if (scrollPercent >= shold12) {
        box12.style.transform = "translateX(0px)";
        box12.style.opacity = "1";
        box12.style.animation = "fade-animation-name1 0.5s linear";
    } else {
        box12.style.transform = "translateX(500px)";
        box12.style.opacity = "0";
        box12.style.animation = "fade-animation-name2 0.5s linear";
    }

});