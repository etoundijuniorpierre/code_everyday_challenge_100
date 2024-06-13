var xbox = document.querySelector(".xbox")
var img = document.getElementById("img_xbox")
var ps5 = document.querySelector(".ps5")


function clicks() {

    xbox.classList.add("active")
    img.style.transform = 'none'

}


var ps5 = document.querySelector('.ps5');



xbox.addEventListener('click', function (event) {
    if (event.type === 'click') {
        clicks()
        ps5.addEventListener('mouseover', function () {
            xbox.classList.remove("active")
            xbox.style.flex = "1"
            ps5.style.flex = "4"
        });

        xbox.addEventListener('mouseover', function () {
            ps5.style.flex = "1"
            xbox.style.flex = "4"
        });

    }
});
