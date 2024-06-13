var bar = document.querySelector(".search")
var loup = document.querySelector(".search-icon")
var input = document.getElementById("input")

loup.addEventListener('click', () => {
    bar.classList.toggle('active');
    loup.classList.toggle("active");

    if (loup.classList.contains("active")) {
        input.placeholder = "search...";; // Add class to show placeholder
    } else {
        input.placeholder = " ";; // Remove class to hide placeholder
    }
});