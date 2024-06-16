var boxes = document.querySelectorAll(".box");
var audios = document.querySelectorAll("audio");

boxes.forEach(function (box, index) {
    box.addEventListener('mouseover', function (event) {
        box.classList.add("active");

        audios[index].play();

    });

    box.addEventListener('mouseout', function (event) {
        box.classList.remove("active");

        audios[index].pause();

    });
});

