var container1 = document.querySelector(".container1");
var container2 = document.querySelector(".container2");

window.onload = function() {
  container1.style.opacity = "1"; 
  container2.style.opacity = "0"; 

  setTimeout(function() {
    container1.style.opacity = "0"; 
    container2.style.opacity = "1"; 
  }, 5000);
};
