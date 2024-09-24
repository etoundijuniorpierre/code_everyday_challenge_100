


async function pokemon_list() {

    const colours = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };

    const mainContainer = document.querySelector(".main");
    mainContainer.innerHTML = '';

    try {
     
        for (let i = 1; i <= 60; i++){

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);

        const data = await response.json();
        console.log(`API Response for page :`, data);

        const pokemon = data.results;

            // const title = [data.name];

            const pokeContainer = document.createElement('div');
            pokeContainer.classList.add('poke-container');

            const imgContainer = document.createElement('div');
            imgContainer.classList.add('imgContainer');

            const h2 = document.createElement('h2');
            h2.textContent = data.species.name;
            console.log(data.species.name)

            const h4 = document.createElement('h4');
            h4.textContent = "type: "+data.types[0].type.name;
            console.log(data.types[0].type.name)
            searchKey = data.types[0].type.name;
            if (colours.hasOwnProperty(searchKey)) {
                pokeContainer.style.background = colours[searchKey]; 
              } else {
                pokeContainer.style.background = "#fff"; 
              }

            const img = document.createElement('img');
            img.src=data.sprites.front_shiny;
            console.log(data.sprites.back_default)

            const p = document.createElement('p');
            p.textContent='#'+data.id;
            if(data.id <= 10){
                p.textContent='#00'+data.id;
            }else{
                p.textContent='#0'+data.id;
            }
            console.log(data.id)

            imgContainer.appendChild(img);
            pokeContainer.appendChild(imgContainer);
            pokeContainer.appendChild(p);
            pokeContainer.appendChild(h2);
            pokeContainer.appendChild(h4);
            mainContainer.appendChild(pokeContainer);


        


    }
    } catch (err) {
        console.error('Error fetching the pokeBox:', err);
    }
}
pokemon_list()







