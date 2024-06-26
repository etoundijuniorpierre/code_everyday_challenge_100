var left = document.querySelector(".fa-arrow-left");
var right = document.querySelector(".fa-arrow-right");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img = ['image1.png', 'image2.png', 'image3.png', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg', 'image13.jpg'];
var currentIndex = 0; 

img1.src = `./images/${img[currentIndex]}`;
img2.src = `./images/${img[currentIndex]}`;

function updateImages() {
    setInterval(() => {
        currentIndex++;
        if (currentIndex >= img.length) {
            currentIndex = 0;
        }
        img1.src = `./images/${img[currentIndex]}`;
        img2.src = `./images/${img[currentIndex]}`;
    }, 2000); 
}

updateImages();


