var xbox = document.querySelector(".xbox");
var ps5 = document.querySelector(".ps5");
var img_ps5 = document.getElementById("img_ps5");
var img_xbox = document.getElementById("img_xbox");
var p_ps5 = document.getElementById("p_ps5")
var p_xbox = document.getElementById("p_xbox")
var input_xbox = document.getElementById("input_xbox")
var input_ps5 = document.getElementById("input_ps5")

const colorMax = 255;

function color() {
  const r = Math.floor(Math.random() * (255 - 10));
  const g = Math.floor(Math.random() * (255 - 20));
  const b = Math.floor(Math.random() * (255 - 30));
  return `rgb(${r}, ${g}, ${b})`;
}

function color2() {
  const r = Math.floor(Math.random() * (255 - 10));
  const g = Math.floor(Math.random() * (255 - 20));
  const b = Math.floor(Math.random() * (255 - 30));
  return `${r}, ${g}, ${b}, 0.9`;
}

function clicks() {
    xbox.classList.add("active");
    img_xbox.style.transform = 'none';
}

xbox.addEventListener('click', function (event) {
    if (event.type === 'click') {
        clicks();
        ps5.addEventListener('mouseover', function () {
            xbox.classList.remove("active");
            xbox.style.flex = "1";
            ps5.style.flex = "4";
            ps5.style.backgroundColor = color();
            ps5.style.backgroundImage = `linear-gradient(to bottom, ${color()}, rgba(${color2()}))`;
            img_ps5.style.filter="opacity(0.8)";
            p_ps5.style.color = color()
            input_ps5.style.border = `2px solid ${color()}`
        });

        xbox.addEventListener('mouseover', function () {
            ps5.style.flex = "1";
            xbox.style.flex = "4";
            xbox.style.backgroundColor = color();
            xbox.style.backgroundImage = `linear-gradient(to bottom, ${color()}, rgba(${color2()}))`;
            img_xbox.style.filter="opacity(0.8)";
            p_xbox.style.color = color()
            input_xbox.style.border = `2px solid ${color()}`
        });
    }
});

