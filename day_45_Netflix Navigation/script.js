const menu2 = document.querySelector("#menu2")
const menu = document.querySelector("#menu")
const menu1 = document.querySelector("#menu1")


const span1 = document.querySelector(".span1")
span1.addEventListener("click", () => {


    span2.style.opacity='1'; 
    span1.style.opacity= "0"
    menu2.style.transform= 'translate(0%, 0)'
    menu2.style.transition= 'transform 1.2s cubic-bezier(0.77, 0.2, 0.05, 1)'

    menu.style.transform= 'translate(14%, 0)'
    menu.style.transition= 'transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1)'

    menu1.style.transform= 'translate(7%, 0)'
    menu1.style.transition= 'transform 0.9s cubic-bezier(0.77, 0.2, 0.05, 1)'
})

const span2 = document.querySelector(".span2")
span2.addEventListener("click", () => {

     
    menu2.style.transform= 'translate(-100%, 0)'
    menu2.style.transition= 'transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1)'

    menu.style.transform= 'translate(-100%, 0)'
    menu.style.transition= 'transform 1.5s cubic-bezier(0.77, 0.2, 0.05, 1)'

    menu1.style.transform= 'translate(-100%, 0)'
    menu1.style.transition= 'transform 1s cubic-bezier(0.77, 0.2, 0.05, 1)';


    setTimeout(function() {
        span1.style.opacity= "1";
        span2.style.opacity="0"
      }, 800);

    
});