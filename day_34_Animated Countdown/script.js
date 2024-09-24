
var number = document.querySelector(".number p");
var count = 1; 

window.addEventListener('load', function() {

    anime()
        setInterval(function() {
        if (count >= 4) {
            document.querySelector(".container2").style.display="none"
          document.querySelector(".container1").style.display="block"
        } else {
          anime();
          number.textContent = count;
          count++;
        }
      }, 2600);
  });

  document.querySelector("input").addEventListener("click", () => {
    location.reload();
  });
  
  function anime() {
    setTimeout(function() {
        number.style.animation ="swag1 1s";
    }, 800);

    setTimeout(function() {
        number.style.opacity="1"
    }, 850);

    setTimeout(function() {
        number.style.animation ="swag 1s";
    }, 1400);

    setTimeout(function() {
        number.style.animation ="swag2 1s";
    }, 1500);

    setTimeout(function() {
        number.style.opacity="0"
    }, 2500);
  }