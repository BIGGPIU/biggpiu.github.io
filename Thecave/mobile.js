
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

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
        sleep(12).then( () => {
          element.classList.remove('touched');
        })
    }
  });
});