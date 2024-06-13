var bug = document.querySelector(".bug")
var crox = document.querySelector(".crox")
var bnt = document.querySelector(".bnt");
var containt = document.querySelector(".containt")
var home = document.getElementById("home")
var about =  document.getElementById("about")
var contact = document.getElementById("contact")


bug.addEventListener('click', () => {
    clicks();
});

function clicks(){
    bnt.classList.remove("active_2")
    bnt.classList.add("active")

    containt.classList.remove("active_2")
    containt.classList.add("active")

    home.classList.add("enter")
    about.classList.add("enter")
    contact.classList.add("enter")
}

crox.addEventListener('click', () => {
    clicks_2();
});

function clicks_2(){
    bnt.classList.remove("active")
    bnt.classList.add("active_2")

    containt.classList.remove("active")
    containt.classList.add("active_2")

    home.classList.remove("enter")
    about.classList.remove("enter")
    contact.classList.remove("enter")
 
}