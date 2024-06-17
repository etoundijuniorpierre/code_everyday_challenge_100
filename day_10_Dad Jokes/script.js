

var bouton = document.querySelector("button")

bouton.addEventListener("click", async () => {

    const reponse = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    });

    const jsondata = await reponse.json();
    const paragraphElement = document.querySelector('p');
    const messageJoke = jsondata.joke;
    paragraphElement.textContent = messageJoke;
})
