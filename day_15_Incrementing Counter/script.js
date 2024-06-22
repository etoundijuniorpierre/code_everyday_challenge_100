var twitter = document.getElementById("twitter")

var youtube = document.querySelector(".youtubeBox span")

var facebook = document.querySelector(".facebookBox span")

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");

var spTwitter = 1;
var spFacebook = 1;
var spYoutube = 1;

function rand() {
    var rand = Math.floor(Math.random() * 21) + 1;

    return rand
}


window.addEventListener('DOMContentLoaded', function () {
    setInterval(() => {

if (spTwitter <= 12000) {
            spTwitter = spTwitter + 140
            twitter.innerHTML = spTwitter-41
           img1.src=`/images/image${rand()}.jpg`
        }

if (spFacebook <= 5000) {
            spFacebook = spFacebook + 95
            youtube.innerHTML = spFacebook-36    
           img2.src=`/images/image${rand()}.jpg`
        }

if (spYoutube <= 7500) {
            spYoutube = spYoutube + 105  
            facebook.innerHTML = spYoutube-61
           img3.src=`/images/image${rand()}.jpg`
        }
    }, 100);
});