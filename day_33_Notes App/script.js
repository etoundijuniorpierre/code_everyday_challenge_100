var button = document.querySelector("button")

button.addEventListener('click', () => {
    adds()

})

function adds() {
    var container = document.querySelector(".container")
    const textarea = document.createElement('textarea');
    textarea.name = 'txts';
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('notes');
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('btn');
    const editBtn = document.createElement('p');
    editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
    editBtn.classList.add("p1")
    const deleteBtn = document.createElement('p');
    deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    deleteBtn.classList.add("p2")

    container.appendChild(noteDiv);
    noteDiv.appendChild(textarea);
    noteDiv.appendChild(buttonDiv);
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    const notes = document.querySelectorAll(".notes");

    notes.forEach(note => {
        const editIcon = note.querySelector(".fa-pen-to-square");
        if (editIcon) {
            editIcon.addEventListener('click', () => {
                const textarea = note.querySelector('textarea');

                if (textarea) {
                    if (textarea.value.length > 0) {
                        textarea.disabled = !textarea.disabled;
                        textarea.style.fontSize = textarea.disabled ? "15px" : "20px";
                        textarea.style.background = "blanc";
                    }
                }
            });
        }
    });


    deleteBtn.addEventListener('click', () => {
        noteDiv.remove();
        console.log("Box delete");
    });

}