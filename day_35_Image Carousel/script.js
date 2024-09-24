const boxsContainer = document.querySelector(".boxs-container");
const boxs = document.querySelectorAll(".box");  
const prevButton = document.getElementById("box-arrow-prev");
const nextButton = document.getElementById("box-arrow-next");

const autoplayInterval = 3000; 
let autoplay;

function nextbox() {
  const boxWidth = boxs[0].clientWidth;  
  boxsContainer.scrollLeft += boxWidth; 


  if (boxsContainer.scrollLeft >= boxsContainer.scrollWidth - boxsContainer.clientWidth) {
    boxsContainer.scrollLeft = 0;
  }
}

function prevbox() {
  const boxWidth = boxs[0].clientWidth; 
  boxsContainer.scrollLeft -= boxWidth;  

 
  if (boxsContainer.scrollLeft < 0) {
    boxsContainer.scrollLeft = boxsContainer.scrollWidth - boxsContainer.clientWidth;
  }
}

function startAutoplay() {
  autoplay = setInterval(nextbox, autoplayInterval);
}

function stopAutoplay() {
  clearInterval(autoplay);
}

nextButton.addEventListener("click", () => {
  stopAutoplay(); 
  nextbox();
});

prevButton.addEventListener("click", () => {
  stopAutoplay(); 
  prevbox();
});

startAutoplay();
