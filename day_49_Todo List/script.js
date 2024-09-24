var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');
var todos = JSON.parse(localStorage.getItem("todos")) || []; // Récupérer les tâches depuis le localStorage

// Charger les tâches existantes au démarrage
window.onload = function() {
    todos.forEach(todo => {
        createParagraph(todo);
    });

    // console.log(todos[1])
    // for(let i =0; i<todos.lenght; i++){
    //     createParagraph(todos[i]);
    // }
}




// Écouter la touche "Entrée" pour ajouter une tâche
inputField.addEventListener("keyup", (e) => {
    if (e.key === 'Enter') {
        action();
    }
});

// Fonction principale pour ajouter une tâche
function action() {
    if (inputField.value != "") {
        var todoText = inputField.value;
        todos.push(todoText);
        localStorage.setItem("todos", JSON.stringify(todos));
        createParagraph(todoText);  // Appeler la fonction de création
        inputField.value = "";  // Vider l'input après l'ajout
    }
}

// Fonction pour créer un paragraphe avec le texte donné
function createParagraph(todoText) {
    var paragraph = document.createElement('p');
    paragraph.innerText = todoText;
    paragraph.classList.add('paragraphe_style');
    toDoContainer.appendChild(paragraph);

    // Événements pour barrer ou supprimer la tâche
    paragraph.addEventListener("mousedown", function(e) {
        if (e.button === 0) { // Clic gauche pour barrer
            paragraph.classList.toggle("paragraph_click");
        } else if (e.button === 2) { // Clic droit pour supprimer
            toDoContainer.removeChild(paragraph);
            removeTodo(todoText);
        }
    });

    // Empêcher le menu contextuel par défaut
    paragraph.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });
}

// Fonction pour supprimer une tâche du localStorage
function removeTodo(todoText) {
    todos = todos.filter(todo => todo !== todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
}
