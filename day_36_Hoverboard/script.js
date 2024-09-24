const box = document.querySelectorAll(".box");


function color() {
    const r = Math.floor(Math.random() * 255); 
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

box.forEach(event => {
    col(event); 
});

function col(e) {
    e.addEventListener("mouseover", () => {
        setInterval(() => {
            e.style.background = color(); 
        }, 200)

    });    
}
