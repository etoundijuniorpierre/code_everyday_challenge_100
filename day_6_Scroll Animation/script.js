var box1 = document.querySelector(".box1")
var box2 = document.querySelector(".box2")
var box3 = document.querySelector(".box3")

var box4 = document.querySelector(".box4")
var box5 = document.querySelector(".box5")
var box6 = document.querySelector(".box6")
var box7 = document.querySelector(".box7")
var box8 = document.querySelector(".box8")
var box9 = document.querySelector(".box9")
var box10 = document.querySelector(".box10")
var box11 = document.querySelector(".box11")
var box12 = document.querySelector(".box12")




box1.addEventListener('click', () => {
  clicks()
});

function clicks() {
   box2.style.transform="scale(1.5)"
   box2.style.marginBottom="50px"
   box2.style.marginTop="30px"
   
   box3.style.transform="none"
   box3.style.marginBottom="0px"
   box3.style.marginTop="0px"

   box1.style.transform="none"
   box1.style.marginBottom="0px"
   box1.style.marginTop="0px"
}

box2.addEventListener('click', () => {
  clicks1()
});

function clicks1() {
   box3.style.transform="scale(1.5)"
   box3.style.marginBottom="50px"
   box3.style.marginTop="30px"
   
   box1.style.transform="none"
   box1.style.marginBottom="0px"
   box1.style.marginTop="0px"

   box2.style.transform="none"
   box2.style.marginBottom="0px"
   box2.style.marginTop="0px"
}

box3.addEventListener('click', () => {
  clicks2()
});

function clicks2() {
   box1.style.transform="scale(1.5)"
   box1.style.marginBottom="50px"
   box1.style.marginTop="30px"
   
   box3.style.transform="none"
   box3.style.marginBottom="0px"
   box3.style.marginTop="0px"

   box2.style.transform="none"
   box2.style.marginBottom="0px"
   box2.style.marginTop="0px"
}







var containt = document.querySelector(".container")

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
    

    } else {
        box4.style.opacity = "0";
        containt.style.background="#dd9786";
    }

    if (scrollPercent > shold5) {
        box5.style.transform = "translateX(0)";
        box5.style.opacity = "1";
        box5.style.animation = "fade-animation-name3 0.5s linear";
        containt.style.background="#34568B";
    } else {
        box5.style.transform = "translateX(-500px)";
        box5.style.opacity = "0";
        box5.style.animation = "fade-animation-name4 0.5s linear";
    }

    if (scrollPercent > shold6) {
        box6.style.transform = "translateX(0)";
        box6.style.opacity = "1";
        box6.style.animation = "fade-animation-name1 0.5s linear";
        containt.style.background="#6B5B95";
    } else {
        box6.style.transform = "translateX(500px)";
        box6.style.opacity = "0";
        box6.style.animation = "fade-animation-name2 0.5s linear";
    }

    if (scrollPercent > shold7) {
        box7.style.transform = "translateX(0)";
        box7.style.opacity = "1";

    } else {

        box7.style.opacity = "0";

    }

    if (scrollPercent > shold8) {
        box8.style.transform = "translateX(0)";
        box8.style.opacity = "1";
        box8.style.animation = "fade-animation-name1 0.5s linear";
        containt.style.background="#92A8D1";
         
    } else {
        box8.style.transform = "translateX(500px)";
        box8.style.opacity = "0";
        box8.style.animation = "fade-animation-name2 0.5s linear";
    }


    if (scrollPercent > shold9) {
        box9.style.transform = "translateX(0)";
        box9.style.opacity = "1";
        box9.style.animation = "fade-animation-name3 0.5s linear";
        containt.style.background="#55B4B0";
    } else {
        box9.style.transform = "translateX(-500px)";
        box9.style.opacity = "0";
        box9.style.animation = "fade-animation-name4 0.5s linear";
    }

    if (scrollPercent > shold10) {
        box10.style.transform = "translateX(0)";
        box10.style.opacity = "1";

    } else {

        box10.style.opacity = "0";

    }

    if (scrollPercent > shold11) {
        box11.style.transform = "translateX(0)";
        box11.style.opacity = "1";
        box11.style.animation = "fade-animation-name3 0.5s linear";
        containt.style.background=" #98B4D4";

    } else {
        box11.style.transform = "translateX(-500px)";
        box11.style.opacity = "0";
        box11.style.animation = "fade-animation-name4 0.5s linear";
    }

    if (scrollPercent >= shold12) {
        box12.style.transform = "translateX(0px)";
        box12.style.opacity = "1";
        box12.style.animation = "fade-animation-name1 0.5s linear";
        containt.style.background="#5B5EA6";
    } else {
        box12.style.transform = "translateX(500px)";
        box12.style.opacity = "0";
        box12.style.animation = "fade-animation-name2 0.5s linear";
    }

});