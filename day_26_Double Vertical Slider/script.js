var currentIndex = 0;
var images = document.querySelectorAll('.boximg img');
var texts = document.querySelectorAll('.boxtext .txt');
var btnUp = document.querySelector('.btn.haut');
var btnDown = document.querySelector('.btn.bas');
var totalItems = images.length;

// Function to update the displayed image and text
function updateDisplay() {
    images.forEach((img, index) => {
        img.style.transform = `translateY(-${(index - currentIndex) * 100}%)`;
    });
    texts.forEach((txt, index) => {
        txt.style.transform = `translateY(${(index - currentIndex) * 100}%)`;
    });
}

// Initial display
updateDisplay();

// Add event listeners for buttons
btnUp.addEventListener('click', function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    updateDisplay();
});

btnDown.addEventListener('click', function() {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    updateDisplay();
});
