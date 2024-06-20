var navBar = document.querySelector(".navBar");
var span = document.querySelector("span");
var ul = document.querySelector("ul")
var li = document.querySelectorAll("li")
var bar_One = document.getElementById("bar_One")
var bar_Two = document.getElementById("bar_Two")
var crox = document.querySelector(".crox")


var navstate = false;

function close() {
    navBar.classList.add("active");
    navBar.classList.remove("active_2");
    bar_One.classList.add("active");
    bar_Two.classList.add("active");
    crox.classList.add("active");
    bar_One.classList.remove("active_2");
    bar_Two.classList.remove("active_2");
    ul.style.position = "absolute";
    ul.classList.add("active");
    ul.classList.remove("active_2");
    li.forEach(list => {
        list.classList.add("active");
        list.classList.remove("active_2");
    });

    navstate = true;
}

function open() {
    if (navstate) {
        navBar.classList.remove("active");
        navBar.classList.add("active_2");
        bar_One.classList.remove("active");
        bar_Two.classList.remove("active");
        crox.classList.remove("active");
        bar_One.classList.add("active_2");
        bar_Two.classList.add("active_2");
        ul.style.position = "relative";
        ul.classList.remove("active");
        ul.classList.add("active_2");
        li.forEach(list => {
        list.classList.remove("active");
        list.classList.add("active_2");
        });
        navstate = false;
    } else {
        close()
    }
}

crox.addEventListener("click", open)