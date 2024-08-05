const elements = document.querySelectorAll('.he');
var checked = false

elements.forEach((element) => {
  // Add touchstart event listener
  element.addEventListener('touchend', () => {
    if (checked == false) {
        checked = true
        element.classList.add('touched');
    }
    else {
        checked = false
        element.classList.remove('touched');
    }
  });
});