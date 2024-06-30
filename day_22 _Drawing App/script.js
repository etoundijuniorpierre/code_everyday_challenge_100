var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var moins = document.querySelector(".moins");
var plus = document.querySelector(".plus");
var valeur = document.querySelector(".valeur");
var reload = document.querySelector(".reload");
var color = document.querySelector("input[type='color']");

let isMouseDown = false;
let brushSize = parseInt(valeur.textContent);

var x, y;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 85;

context.fillStyle = 'rgb(255, 255, 255)';
context.fillRect(0, 0, canvas.width, canvas.height);

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

canvas.addEventListener('mousemove', (e) => {
   x = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
  y = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
});

canvas.addEventListener('mousedown', () => isMouseDown = true);
canvas.addEventListener('mouseup', () => isMouseDown = false);

moins.addEventListener('click', () => {
    brushSize = Math.max(1, brushSize - 1);
    valeur.textContent = brushSize;
});

plus.addEventListener('click', () => {
    brushSize = Math.min(50, brushSize + 1);
    valeur.textContent = brushSize;
});


reload.addEventListener("click", function () {
    location.reload();
});


function draw() {
    if (isMouseDown) {
        context.fillStyle = color.value;
        context.beginPath();
        context.arc(x, y , brushSize, degToRad(10), degToRad(360), false);
        context.fill();
    }
    requestAnimationFrame(draw);
}

draw();