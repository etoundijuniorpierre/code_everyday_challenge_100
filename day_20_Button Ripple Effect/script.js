var container = document.querySelector(".container");
var ripple = document.querySelector(".ripple");

container.addEventListener("click", (e) => {
    var rect = container.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    var newRipple = ripple.cloneNode(true);
    newRipple.classList.add("active");
    newRipple.style.left = x + "px";
    newRipple.style.top = y + "px";

    container.appendChild(newRipple);

});
