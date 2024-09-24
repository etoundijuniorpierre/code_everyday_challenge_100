var copyBtn = document.querySelector('.fa-copy');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const submit = document.querySelector('input[type="button"]');
const input = document.querySelector('#length');
const txt = document.querySelector("h1");

console.log(input.value);

let checkedValues = [];

function change(event) {
    if (event.target.checked) {
        checkedValues.push(event.target.value);
    } else {
        checkedValues = checkedValues.filter(value => value !== event.target.value);
    }
    const valuesString = checkedValues.join('');
    console.log(valuesString);

    return valuesString;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', change);
});

submit.addEventListener('click', () => {
    getPassword()
})

function getPassword() {
    var chars = checkedValues.join('')

    var passwordLength = input.value;
    var password = "";


    //générer le mot de passe
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)

        password += chars.substring(randomNumber, randomNumber + 1)

        // afficher le mot de passe

        txt.textContent = password;

        //changer le style du button copier

        copyBtn.style.background = "#6c757d"
        copyBtn.style.color = "#fff"
    }

}


function copyMdp() {
    var password = txt.textContent;
    console.log("ok")
    if (password.length > 0) {

        navigator.clipboard.writeText(password);
        copyBtn.style.background = "blue";
        copyBtn.style.color = "red";

        alert("Mot de passe copié !");

    } else {
        alert("Veuillez générer un mot de passe avant de copier.");
    }
}


copyBtn.addEventListener('click', copyMdp);

