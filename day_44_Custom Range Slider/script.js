const range = document.getElementById('myRange');

range.addEventListener('input', () => {
    const value = range.value;
    const label = document.getElementById('label');

console.log(value)
    // Mettre à jour la valeur affichée dans le label
    label.innerHTML = value;
});
