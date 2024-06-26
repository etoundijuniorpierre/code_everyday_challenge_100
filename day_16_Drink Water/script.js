var water = document.querySelector('.waterContainer');
var one = document.querySelectorAll('.box.One span');
var two = document.querySelectorAll('.box.Two span');
var txt = document.querySelector('.txt');
var h2 = document.querySelector("h2");
var h1 = document.querySelector("h1");
var h3 = document.querySelector("h3");
var p = document.querySelector(".smallContainer p");
var box1 = document.querySelector(".box.One")
var box2 = document.querySelector(".box.Two")
var container = document.querySelector(".container")

var marg1 = 40;
var marg2 = 200;
var text1 = 1.75;
var text2 = 0.75;

function work() {
    one.forEach((span) => {
        span.addEventListener('click', spanClick1);
    });

    two.forEach((span) => {
        span.addEventListener('click', spanClick2);
    });
}

work();


function spanClick1(event) {
    var span = event.target;
    var pourc1 = 12.5;

    if (box1.children[0] === span) {
        box1.children[0].classList.add("filled");
        water.style.background = `linear-gradient(to top, #87ceeb ${pourc1}%, white ${pourc1}%)`;
        container.style.background = `linear-gradient(to top, #87ceeb ${pourc1}%, white ${pourc1}%)`;
        txt.style.marginBottom = `${marg1}px`;
        h2.innerHTML = `${text1}L`;
    }
    if (box1.children[1] === span) {
        box1.children[0].classList.add("filled");
        box1.children[1].classList.add("filled");
        water.style.background = `linear-gradient(to top, #87ceeb ${pourc1 * 2}%, white ${pourc1 * 2}%)`;
        container.style.background = `linear-gradient(to top, #87ceeb ${pourc1 * 2}%, white ${pourc1 * 2}%)`;
        marg1 += 40;
        txt.style.marginBottom = `${marg1}px`;
        text1 -= 0.25;
        h2.innerHTML = `${text1}L`;
    }
    if (box1.children[2] === span) {
        box1.children[0].classList.add("filled");
        box1.children[1].classList.add("filled");
        box1.children[2].classList.add("filled");
        water.style.background = `linear-gradient(to top, #87ceeb ${pourc1 * 3}%, white ${pourc1 * 3}%)`;
        container.style.background = `linear-gradient(to top, #87ceeb ${pourc1 * 3}%, white ${pourc1 * 3}%)`;
        marg1 += 40;
        txt.style.marginBottom = `${marg1}px`;
        text1 -= 0.25;
        h2.innerHTML = `${text1}L`;
    }
    if (box1.children[3] === span) {
        box1.children[0].classList.add("filled");
        box1.children[1].classList.add("filled");
        box1.children[2].classList.add("filled");
        box1.children[3].classList.add("filled");
        water.style.background = `linear-gradient(to top, #87ceeb ${pourc1 * 4}%, white ${pourc1 * 4}%)`;
        container.style.background = `linear-gradient(to top, #87ceeb ${pourc1 * 4}%, white ${pourc1 * 4}%)`;
        marg1 += 40;
        txt.style.marginBottom = `${marg1}px`;
        text1 -= 0.25;
        h2.innerHTML = `${text1}L`;
    }
}

function spanClick2(event) {
    var span = event.target;
    var pourc2 = 62.5;

    if (box2.children[0] === span) {
        box2.children[0].classList.add("filled");
        box1.children[0].classList.add("filled");
        box1.children[1].classList.add("filled");
        box1.children[2].classList.add("filled");
        box1.children[3].classList.add("filled");
        water.style.background = `linear-gradient(to top, #87ceeb ${pourc2}%, white ${pourc2}%)`;
        container.style.background = `linear-gradient(to top, #87ceeb ${pourc2}%, white ${pourc2}%)`;
        txt.style.marginBottom = `${marg2}px`;
        h2.innerHTML = `${text2}L`;
    }
    if (box2.children[1] === span) {
        box2.children[0].classList.add("filled");
        box2.children[1].classList.add("filled");
        pourc2 = 75;
        water.style.background = `linear-gradient(to top, #87ceeb ${pourc2}%, white ${pourc2}%)`;
        container.style.background = `linear-gradient(to top, #87ceeb ${pourc2}%, white ${pourc2}%)`;
        marg2 += 40;
        txt.style.marginBottom = `${marg2}px`;
        text2 -= 0.25;
        h2.innerHTML = `${text2}L`;
    }
    if (box2.children[2] === span) {
        box2.children[0].classList.add("filled");
        box2.children[1].classList.add("filled");
        box2.children[2].classList.add("filled");
        pourc2 = 87.5;
        water.style.background = `linear-gradient(to top, #87ceeb ${pourc2}%, white ${pourc2}%)`;
        container.style.background = `linear-gradient(to top, #87ceeb ${pourc2}%, white ${pourc2}%)`;
        marg2 += 40;
        txt.style.marginBottom = `${marg2}px`;
        text2 -= 0.25;
        h2.innerHTML = `${text2}L`;
    }
    if (box2.children[3] === span) {
        box2.children[0].classList.add("filled");
        box2.children[1].classList.add("filled");
        box2.children[2].classList.add("filled");
        box2.children[3].classList.add("filled");
        box1.children[0].classList.add("filled");
        box1.children[1].classList.add("filled");
        box1.children[2].classList.add("filled");
        box1.children[3].classList.add("filled");
        pourc2 = 100;
        water.style.background = `linear-gradient(to top, #87ceeb ${pourc2}%, white ${pourc2}%)`;
        container.style.background = `linear-gradient(to top, #87ceeb ${pourc2}%, white ${pourc2}%)`;
        marg2 += 40;
        txt.style.marginBottom = `${marg2}px`;
        text2 -= 0.25;
        h2.innerHTML = `${text2}L`;
        txt.style.display = "none";
        document.querySelector(".centag").innerHTML = "100%";
        document.querySelector(".centag").style.fontSize = "30px";
        document.querySelector(".centag").style.color = "white";
        h1.style.color="white";
        h2.style.color="white";
        h3.style.color="white";
        p.style.color="white";
        one.style.color="white";
    }
}

