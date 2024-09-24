function go() {
    const correctAnswers = {
        language: "JavaScript",
        one_piece: "Luffy",
        player: "C.Ronaldo",
        ldc: "Real Madrid"
    };

    let score = 0;
    let indexBox = 0;

    const boxes = document.querySelectorAll(".box");
    const span = document.querySelector(".cinq h2 span");

    function showNextQuestion() {
        boxes[indexBox].style.display = "none";
        indexBox++;
        if (indexBox < boxes.length - 1) {
            boxes[indexBox].style.display = "block";
        } else {
            span.textContent = score+" / "+4;
            boxes[indexBox].style.display = "block";
        }
    }

    document.querySelectorAll(".submit").forEach(e => {
        e.addEventListener("click", () => {
            const questionBox = boxes[indexBox];
            const answer = questionBox.querySelector("input[type='radio']:checked");

            if (correctAnswers[answer.name] === answer.value) {
                score++;
            }

            showNextQuestion();
        });
    });

    document.getElementById("reload").addEventListener("click", () => {
        location.reload();
    });
};

go();
