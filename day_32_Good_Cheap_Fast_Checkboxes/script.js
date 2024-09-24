var checkbox = document.querySelectorAll('.container input')

var check = 0; 



checkbox.forEach(e => {
    e.addEventListener('change', () => {
      const checkedcheckbox = Array.from(checkbox).filter(e => e.checked);
        console.log(checkedcheckbox); 
      if (checkedcheckbox.length > 2) {

        checkedcheckbox[checkedcheckbox.length - 1].checked = false;
      }
      else {
        checkbox.checked = true; 
      }
    });
  });