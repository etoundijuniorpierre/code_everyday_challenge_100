let flouer = 20; 

const img = document.querySelector("img");
const passW = document.querySelector("input[type='password']");

img.style.filter = `blur(${flouer}px)`; 
let val = []; 

passW.addEventListener("input", (even) => {
    const char = even.data; 
    let tallPassW = passW.value.length; 
    console.log(tallPassW);

    if (even.inputType === 'insertText' && char !== null) { 
        val.push(char); 
        if (/[0-9]/.test(char)) {
            flouer -= (tallPassW / 3); 
            console.log(flouer);
        } else if (/[A-Z]/.test(char)) {
            flouer -= (tallPassW / 4); 
            console.log(flouer);
        } else if (/[a-z]/.test(char)) {
            flouer -= (tallPassW / 5); 
            console.log(flouer);
        } else {
            flouer -= (tallPassW / 2); 
            console.log(flouer);
        }
    } else if (even.inputType === 'deleteContentBackward') { 
        const lastChar = val.pop(); 
        if (/[0-9]/.test(lastChar)) {
            flouer += (tallPassW / 3); 
            console.log(flouer);
        } else if (/[A-Z]/.test(lastChar)) {
            flouer += (tallPassW / 4); 
            console.log(flouer);
        } else if (/[a-z]/.test(lastChar)) {
            flouer += (tallPassW / 5); 
            console.log(flouer);
        } else {
            flouer += (tallPassW / 2); 
            console.log(flouer);
        }
    }

    if (tallPassW === 0) { 
        flouer = 20; 
    }

    img.style.filter = `blur(${Math.max(flouer, 0)}px)`;
});
