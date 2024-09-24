const container = document.querySelector(".insect-container");
const input = document.querySelector("input");
const first_box = document.querySelector(".first-box");
const second_box = document.querySelector(".second-box");
const box_img = document.querySelectorAll(".box-img");
const game_box = document.querySelector(".game-box");
const var_score = document.querySelector("#score span");
let score = 0
let numb = 0;

let imgSrc = "";

input.addEventListener("click", () => {
    displayName_and_upDiv(first_box, second_box);
});


box_img.forEach(e => {
    e.addEventListener("click", () => {
        console.log(`You clicked on`);
        displayName_and_upDiv(second_box, game_box);

        let img = e.querySelector("img");
        imgSrc = img.src;
        console.log(imgSrc);
    });
});




function displayName_and_upDiv(elem1, elem2) {
    elem1.style.animation = "translt2 1s ease-in-out forwards";

    setTimeout(() => {
        elem1.style.display = "none";
        elem2.style.display = "block";
        elem2.style.animation = "translt1 1s ease-in-out forwards";
        game_begin()

    }, 600);


}

function game_begin() {
    if (getComputedStyle(game_box).display === "block") {
        setTimeout(() => {
            console.log("good");
            // createImg_for_add(container, imgSrc);
            // timer();
            timer();
            setInterval(() => {
                createImg_for_add(container, imgSrc);
            }, 380);

        }, 1200);
    }
}


function random_function(containername, elem) {
    const containerRect = containername.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const X = Math.floor(Math.random() * containerWidth);
    const Y = Math.floor(Math.random() * containerHeight);

    const Z = Math.floor(Math.random() * 300) + 60; 

    elem.style.left = `${X}px`;
    elem.style.top = `${Y}px`;
    elem.style.transform = `rotate(${Z}deg)`;
}


function createImg_for_add(containername, sourceImg) {
    const image = document.createElement('img');
    image.classList.add("img-random-position");
    image.src = sourceImg;
    image.style.position = 'absolute';

    random_function(containername, image);
    containername.appendChild(image);

    image.addEventListener("click", () => {
        console.log("Image clicked, removing...");
        image.style.animation="scale 0.1s ease-in-out forwards"
        

        setTimeout(()=>{
            image.remove();
        }, 200)
        
        score++;  
        var_score.textContent = score; 

        if(score>=20){
            console.log(score)
            let msg = document.querySelector(".msg")
            msg.style.opacity="1"
            msg.style.animation="translt 1s ease-in-out forwards"
        }
    });
}



// function update_Score() {
//     let nombre_img_add = container.childElementCount;  
//     score.textContent = nombre_img_add;  
// }

// function click_decup_img(originalImage, containername) {
//     const clone = originalImage.cloneNode(true);

//     random_function(containername, clone);
//     containername.appendChild(clone);

//     clone.addEventListener("click", () => {
//         console.log("Duplicate clicked, duplicating again...");
//         click_decup_img(clone, containername);
//         numb++
//         score.textContent = numb
//     });

// }


const time = document.querySelector("#time span")

function timer() {
    let sec = 0;
    let min = 0;

    let interval = setInterval(() => {
        sec++;

        if (sec === 60) {
            sec = 0;
            min++;
        }

        let formattedMin = min < 10 ? `0${min}` : min;
        let formattedSec = sec < 10 ? `0${sec}` : sec;

        time.textContent = `${formattedMin}:${formattedSec}`;
    }, 1000);
}

// function decompte_score(){
//     let numb = 0;

//     numb++
//     score.textContent=numb
// }
