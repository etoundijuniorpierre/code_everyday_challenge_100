var twitter = document.getElementById("twitter")

var youtube = document.querySelector(".youtubeBox span")

var facebook = document.querySelector(".facebookBox span")

var spTwitter = 1;
var spFacebook = 1;
var spYoutube = 1;


window.addEventListener('DOMContentLoaded', function () {
    setInterval(() => {

if (spTwitter <= 12000) {
            spTwitter = spTwitter + 190
            twitter.innerHTML = spTwitter-161
           
}

if (spFacebook <= 5000) {
            spFacebook = spFacebook + 75
            youtube.innerHTML = spFacebook-26          
           
}

if (spYoutube <= 7500) {
            spYoutube = spYoutube + 155  
            facebook.innerHTML = spYoutube - 96
           
}
    }, 10);
});