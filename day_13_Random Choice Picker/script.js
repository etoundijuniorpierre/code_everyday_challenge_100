var box = document.querySelector(".box");
var input = document.querySelector("input");
var boxChild = box.querySelectorAll(".boxChild")

function create() {
    var saisie = document.createElement("div");
    saisie.classList.add("boxChild");
    return saisie;
}

var saisie = create();

function sais(event) {
    if (event.key !== "," && event.key !== "Backspace" && event.key !== "Enter") {
        saisie.innerText += event.key;
        box.appendChild(saisie);
    }

    if (event.key === ",") {
        saisie = create();
    }

    if (event.key === "Backspace") {
        saisie.innerText = saisie.innerText.slice(0, -1);
        if (saisie.innerText === "" && input.value === "") {
            saisie.remove()

        }
    }
    if (event.key === "Enter") {
        input.value = "";

        var children = Array.from(box.querySelectorAll(".boxChild"));

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function getRandomIndex(max) {
            return Math.floor(Math.random() * max);
        }

        function change() {
            var indexArray = Array.from(children.keys());

            var intervalId = setInterval(() => {

                var randomIndex = getRandomIndex(indexArray.length);
                var currentIndex = indexArray[randomIndex];

                children[currentIndex].style.backgroundColor = getRandomColor();

                indexArray.splice(randomIndex, 1);

                setTimeout(() => {
                    children[currentIndex].style.backgroundColor = "";
                }, 300);

                if (indexArray.length === 0) {
                    clearInterval(intervalId);

                    const index = getRandomIndex(children.length);
                    children[index].style.backgroundColor = getRandomColor();
                }
            }, 400);
        }

        change();
    }
}
input.addEventListener("keyup", sais);

