var h1 = document.querySelector("h1"); 
var boxNote = document.querySelector(".boxNote");

h1.addEventListener("click", () => {
    var newh1 = document.createElement("h1");
    newh1.textContent = "Message...";
    boxNote.appendChild(newh1);

     setTimeout(() => {
        setTimeout(() => {
	   if (boxNote.hasChildNodes())
            boxNote.firstChild.remove()
            boxNote.lastChild.remove()
   }, 400);
            
   }, 2200);
});
