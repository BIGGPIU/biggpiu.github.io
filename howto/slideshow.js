myslides = document.getElementsByClassName("Myslides");
let i = 0;
let watermark = 1;

for (let i = 0; i < myslides.length;i++) {
    myslides[i].setAttribute("style","display:none;")
}

myslides[0].setAttribute("style","display:block;")

console.log(myslides)


function plusdivs() {
    i++ 
    myslides[i].setAttribute("style","display:block;")
    myslides[i-1].setAttribute("style","display:none;")
    
}


function minusdivs() {
    myslides[i-1].setAttribute("style","display:block;")
    myslides[i].setAttribute("style","display:none;")
    i = i - 1
}

document.onkeydown() = function checkkey(key) {
    switch (key.code) {
        case 37:
            minusdivs()
            break;
        case 39:
            plusdivs()
            break;
    }
}