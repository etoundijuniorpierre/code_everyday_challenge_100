var img = document.querySelector(".boxContainer img");
var containers = document.querySelectorAll(".boxContainer");
var draggedElement = document.querySelector("img");

document.addEventListener("DOMContentLoaded", function () {
    img.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text/plain", event.target.id);

    });

    containers.forEach(container => {
        container.addEventListener("dragenter", function (event) {
            event.preventDefault();
            if (event.target.classList.contains("boxContainer")) {
                event.target.style.border = "3px dotted white";
                event.target.style.background = "black";
            }
        });

        container.addEventListener("dragover", function (event) {
            event.preventDefault();
  
        });

        container.addEventListener("dragleave", function (event) {
            if (event.target.classList.contains("boxContainer")) {
                event.target.style.border = "1px solid #ccc";
                event.target.style.background = "";
            }
        });

        container.addEventListener("drop", function (event) {
            event.preventDefault();

            if (event.target.classList.contains("boxContainer")) {
                event.target.style.border = "1px solid #ccc";
                event.target.appendChild(draggedElement);
                event.target.style.background = "";
            }
        });
    });
});









