// selecting all sections with class of section
var img = document.querySelectorAll(".images");
var par = document.getElementsByTagName('p');

// Foreach section when clicked
img.forEach((images) => {
    images.addEventListener("click", () => {
        img.forEach((images) => {
            images.classList.remove("active");

        });
        images.classList.add("active");
        
    });
});


