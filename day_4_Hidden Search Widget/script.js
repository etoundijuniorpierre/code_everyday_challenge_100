var bar = document.querySelector(".search")
var loup = document.querySelector(".search-icon")
var input = document.getElementById("input")
var container = document.querySelector(".container")

loup.addEventListener('click', () => {
    bar.classList.toggle('active');
    loup.classList.toggle("active");
    container.classList.toggle("active");

    if (loup.classList.contains("active")) {
        input.placeholder = "search...";; // Add class to show placeholder

    } else {
        input.placeholder = " ";; // Remove class to hide placeholder

    }
});