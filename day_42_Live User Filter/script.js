const numb = 30;
const profiles = [];
const names = [];

async function profil_list() {
    try {
        for (let i = 1; i <= numb; i++) {
            const response = await fetch(`https://randomuser.me/api/?page=${i}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(`API Response for page ${i}:`, data);

            const infosShows = data.results[0];
            profiles.push(infosShows);
            createProfile(infosShows);
        }
    } catch (err) {
        console.error('Error fetching the images:', err);
    }
}

profil_list();

function createProfile(infos) {
    const box2 = document.querySelector('.box2');

    const profileDiv = document.createElement('div');
    profileDiv.classList.add('box-profil');

    const img = document.createElement('img');
    img.src = infos.picture.large;

    const infosDiv = document.createElement('div');
    infosDiv.classList.add('infos');

    const h3 = document.createElement('h3');
    let first = infos.name.first;
    let last = infos.name.last;
    let nom = `${first} ${last}`;
    // names.push(nom);  
    // console.log(names);
    h3.textContent = nom;

    const p = document.createElement('p');
    let city = infos.location.city;
    let country = infos.location.country;
    p.textContent = `${city}, ${country}`;

    infosDiv.appendChild(h3);
    infosDiv.appendChild(p);

    profileDiv.appendChild(img);
    profileDiv.appendChild(infosDiv);

    box2.appendChild(profileDiv);
}


document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input");

    input.addEventListener("keyup", (event) => {
        if (event.key === 'Enter') {
            const searchTerm = input.value.toLowerCase();

            const filteredProfiles = profiles.filter(e => {
                const fullName = `${e.name.first} ${e.name.last}`.toLowerCase();
                return fullName.includes(searchTerm);
            });

            const box2 = document.querySelector('.box2');
            box2.innerHTML = '';

            filteredProfiles.forEach(createProfile);
        }
    });
});
