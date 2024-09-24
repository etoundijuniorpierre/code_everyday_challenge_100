const list = document.querySelectorAll("ul li")
const btn = document.querySelector('button')
const avis = document.querySelector("h3 span")

const humeur = ["Unhappy", "Neutral", "Satisfied"]

list.forEach((e) => {
    e.addEventListener("click", () => {
        list.forEach((item) => item.classList.remove('active'));
        e.classList.add('active');
        if (e === list[0]) {
            affich(humeur[0])
        }

        if (e === list[1]) {
            affich(humeur[1])
        }

        if (e === list[2]) {
            affich(humeur[2])
        }
    });
});

btn.addEventListener("click", () => {
    document.querySelector(".container-box1").style.display = "none"
    document.querySelector(".container-box2").style.display = "block"
})

function affich(val) {
        avis.textContent = val
}
