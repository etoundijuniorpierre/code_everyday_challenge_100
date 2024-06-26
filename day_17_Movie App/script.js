async function movie_list(searchQuery = '', choix = []) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWQzM2JmZmIxMzZkZmJjYjYyYmJlM2U1Y2MyN2YwNCIsIm5iZiI6MTcxOTMxODU4OC40ODEwMzMsInN1YiI6IjY2N2E3ZTcwOTkyMGVjYWZhYTU3NDA1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BGX9Fk1i9sfQE-PtevLbT-_ZInwJbVBSJ6R-9mEKpEc'
        }
    };

    const mainContainer = document.querySelector(".main");
    mainContainer.innerHTML = '';

    try {
        for (let i = 1; i <= 40; i++) {
            const response = await fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${i}`, options);
            const data = await response.json();

            console.log(`API Response for page ${i}:`, data);

            const tvShows = data.results;
            if (!tvShows || tvShows.length === 0) {
                console.log('No TV shows found on page', i);
                continue;
            }

            tvShows.forEach(show => {
                const title = show.name.toLowerCase();
                const genres = show.genre_ids;

                if (searchQuery && !title.includes(searchQuery.toLowerCase())) {
                    return;
                }
                if (choix.length > 0 && !choix.some(genreId => genres.includes(genreId))) {
                    return;
                }

                const imageUrl = `https://image.tmdb.org/t/p/original${show.poster_path}`;
                const vote = Math.round(show.vote_average * 10) / 10;
                const view = show.overview;

                const showContainer = document.createElement('div');
                showContainer.classList.add('show-container');

                const textContainer = document.createElement('div');
                textContainer.classList.add('text-container');

                const textHover = document.createElement('div');
                textHover.classList.add('text-hover');
                textHover.textContent = view.trim() ? view : "No summary available";

                const p = document.createElement('p');
                p.textContent = vote;
                p.style.color = vote < 5 ? "red" : "orange";

                const h3 = document.createElement('h3');
                h3.textContent = show.name;

                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = show.name;

                showContainer.appendChild(img);
                textContainer.appendChild(h3);
                textContainer.appendChild(p);
                showContainer.appendChild(textContainer);
                showContainer.appendChild(textHover);
                mainContainer.appendChild(showContainer);

                showContainer.addEventListener("mouseenter", () => {
                    textHover.classList.add("active");
                    textHover.classList.remove("active2");
                });

                showContainer.addEventListener("mouseleave", () => {
                    textHover.classList.remove("active");
                    textHover.classList.add("active2");
                });
            });
        }
    } catch (err) {
        console.error('Error fetching the TV shows:', err);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input");

    input.addEventListener("keyup", (event) => {
        if (event.key === 'Enter') {
            movie_list(input.value);
        }
    });

    document.querySelectorAll(".nav a").forEach((choix, index) => {
        choix.addEventListener("click", () => {
            switch (index) {
                case 1:
                    movie_list('', [99]);
                    break;
                case 2:
                    movie_list('', [80] && [9648]);
                    break;
                case 3:
                    movie_list('', [16]);
                    break;
                default:
                    movie_list();
            }
        });
    });

    movie_list();
});






