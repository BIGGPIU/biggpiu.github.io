var loadme = document.getElementsByClassName("rhythmgametier")
window.onscroll = function() {show()};
let i = 0
let x = 100
console.log(loadme)

function show () {
    if (document.documentElement.scrollTop > x) {
        loadme[i].setAttribute("class","rhythmgametier show")
        i++ 
        x += 220
    }
}