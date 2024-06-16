var boxes = document.querySelectorAll(".box");
var audios = document.querySelectorAll("audio");


boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        boxes.forEach((box, index) => {
            audios[index].pause();
        });
        audios[index].play();
    });
});