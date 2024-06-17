

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


    paragraphElement.classList.remove('active'); // Reset animation
    setTimeout(() => {
        paragraphElement.textContent = messageJoke;
        paragraphElement.classList.add('active');
    }, 100); // Delay to reset animation
})
