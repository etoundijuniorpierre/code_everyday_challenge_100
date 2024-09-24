const ul = document.querySelectorAll("ul");
const li = document.querySelectorAll("li");
const box = document.querySelector(".box-img img");

box.src = "img/img1.jpg"; 
li[0].style.color = "blue"; 

li.forEach((e, index) => {
    e.addEventListener("click", () => {
        document.getElementById("first").style.color="red"


        li.forEach((event) => {
            event.style.color = ""; 
        });

        switch(index) {
            case 0:
                box.src = "img/img1.jpg";
                break;
            case 1:
                box.src = "img/img3.jpg";
                break;
            case 2:
                box.src = "img/img4.jpg";
                break;
            case 3:
                box.src = "img/img2.jpg";
                break;
            default:
                break;
        }

        e.style.color ='blue';
    });
});
