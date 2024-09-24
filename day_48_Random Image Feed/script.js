async function img_list() {
    const mainContainer = document.querySelector(".container");
    mainContainer.innerHTML = ''; 
    const query = 'dogs';
    const clientId = 'JBSmyIEAqjy6RQzY8WIG0EyF4_OcIboT-B3mw11VcvA';
    let rand = Math.floor(Math.random() * 10) + 1;
    try {
        for (let i = 1; i <= rand; i++) {
      
        
            const response = await fetch(`https://api.unsplash.com/search/photos?page=${rand}&query=${query}&client_id=${clientId}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(`API Response for page ${i}:`, data);

            const imgShows = data.results; 

            imgShows.forEach((imgShow) => {
                const div = document.createElement('div');
                div.classList.add("img");

                const img = document.createElement("img");
                img.src = imgShow.urls.small; 

                div.appendChild(img);
                mainContainer.appendChild(div);
            });
        }
    } catch (err) {
        console.error('Error fetching the images:', err);
    }
}

img_list();

location.city
location.country
