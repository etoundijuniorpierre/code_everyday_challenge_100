
    var boxes = document.querySelectorAll(".box");

    boxes.forEach(function (box) {
        // Select the icons within the current box
        var croix = box.querySelector(".fa-circle-xmark");
        var check = box.querySelector(".fa-chevron-down");

        // Add click event to the 'check' icon
        check.addEventListener('click', function (event) {
            box.querySelector(".boxOne").style.display="none";
            box.querySelector(".boxTwo").style.display="block";
            box.classList.add("active");
        });

        // Add click event to the 'croix' icon
        croix.addEventListener('click', function (event) {
            box.querySelector(".boxOne").style.display="block";
            box.querySelector(".boxTwo").style.display="none";
            box.classList.remove("active");
        });
    });

