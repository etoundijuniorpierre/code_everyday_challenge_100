var PassWord = document.getElementById("PassWord")
var Email = document.getElementById("Email")
var containt = document.querySelector(".containt")
var formulaire = document.querySelector(".formulaire")

var pass = document.querySelectorAll(".pass")
var mail = document.querySelectorAll(".mail")


containt.addEventListener('click', function (event) {
    if (event.target === PassWord) {
        pass.forEach(label => {
            const text = label.textContent;
            label.textContent = '';

            for (let i = 0; i < text.length; i++) {
                const activeSpan = document.createElement('span');
                activeSpan.textContent = text[i];
                activeSpan.classList.add('active');
                activeSpan.classList.remove('active2');
                activeSpan.style.animationDelay = `${i * 0.1}s`;
                label.appendChild(activeSpan);
            }
        }
        );

        mail.forEach(label => {
            const text = label.textContent;
            label.textContent = '';

            for (let i = 0; i < text.length; i++) {
                const activeSpan = document.createElement('span');
                activeSpan.textContent = text[i];
                activeSpan.classList.remove('active');
                activeSpan.classList.add('active2');
                activeSpan.style.animationDelay = `${i * 0.1}s`;
                label.appendChild(activeSpan);
            }
        });

    } else if (event.target === Email) {
        mail.forEach(label => {
            const text = label.textContent;
            label.textContent = '';

            for (let i = 0; i < text.length; i++) {
                const activeSpan = document.createElement('span');
                activeSpan.textContent = text[i];
                activeSpan.classList.add('active');
                activeSpan.classList.remove('active2');
                activeSpan.style.animationDelay = `${i * 0.1}s`;
                label.appendChild(activeSpan);
            }
        });

        pass.forEach(label => {
            const text = label.textContent;
            label.textContent = '';

            for (let i = 0; i < text.length; i++) {
                const activeSpan = document.createElement('span');
                activeSpan.textContent = text[i];
                activeSpan.classList.remove('active');
                activeSpan.classList.add('active2');
                activeSpan.style.animationDelay = `${i * 0.1}s`;
                label.appendChild(activeSpan);
            }
        });

    } else {

        mail.forEach(label => {
            const text = label.textContent;
            label.textContent = '';

            for (let i = 0; i < text.length; i++) {
                const activeSpan = document.createElement('span');
                activeSpan.textContent = text[i];
                activeSpan.classList.remove('active');
                activeSpan.classList.add('active2');
                activeSpan.style.animationDelay = `${i * 0.1}s`;
                label.appendChild(activeSpan);
            }
        });

        pass.forEach(label => {
            const text = label.textContent;
            label.textContent = '';

            for (let i = 0; i < text.length; i++) {
                const activeSpan = document.createElement('span');
                activeSpan.textContent = text[i];
                activeSpan.classList.remove('active');
                activeSpan.classList.add('active2');
                activeSpan.style.animationDelay = `${i * 0.1}s`;
                label.appendChild(activeSpan);
            }
        });


    }
});

