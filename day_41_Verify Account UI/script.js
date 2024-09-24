document.addEventListener('DOMContentLoaded', () => {

    const firstInput = document.querySelector('input[type="number"]');
    
    if (firstInput) {
 
        firstInput.focus();
    }


    const boxes = document.querySelectorAll("input[type='number']");
    
    boxes.forEach((e) => {
        e.addEventListener('input', function () {
  
            if (this.value.length > 1) {
                this.value = this.value.slice(0, 1);
            }
        });
    });
});
