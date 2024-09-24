var navbar = document.querySelector(".navbar")




function getScrollPercentage() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    return scrollPercentage;
}


window.addEventListener("scroll", () => {
var scroll = window.scrollY;
 if(scroll > 11) {
    navbar.style.height="6%"
    navbar.style.color="black"
    navbar.style.background="white"
    navbar.style.transition = " 0.5s ease-in-out";
 }
 if(scroll < 11){
    navbar.style.height="8%"
    navbar.style.color="white"
    navbar.style.background="black"
     navbar.style.transition = " 0.5s ease-in-out";
 }

});