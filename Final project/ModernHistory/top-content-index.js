let dropdowngetter = document.getElementById("dropdown-container")
let dropdownmenustuff = document.getElementById("dropdown-menu-divider")
let parent = document.querySelector("body");
let rotateRadian = Math.asin(parent.clientHeight / (Math.sqrt(parent.clientWidth ** 2 + parent.clientHeight ** 2)));
let rotateDegree = Math.round(rotateRadian * (180 / Math.PI));
let fade_in = document.getElementsByClassName("navbar-link")
let dropdown_menu = document.getElementById("dropdown-menu")
let dropdown_menu_opener = document.getElementById("dropdown-container")
let dropdown_close = document.getElementById("dropdown-close")
let dropdown1 = document.getElementById("dropdown-cover")
let sfill = document.getElementById("sfill")
let arrow = document.getElementById("close-arrow")
let html = document.getElementsByTagName("html")[0]
let x = 0.6

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

dropdownmenustuff.setAttribute("style","rotate:-"+rotateDegree+"deg;")

for (let i = 0; i < fade_in.length; i++) {
    fade_in[i].setAttribute("style","animation-delay:"+x+"s;")
    x+=.2;
}

dropdown_menu_opener.addEventListener("click",() => {
    dropdown_menu.setAttribute("style","display:block;")
    html.setAttribute("style","overflow-y:hidden")
})

dropdown_close.addEventListener("click",() => {
    x = 0
    for (let i = 0; i < fade_in.length; i++) {
        fade_in[i].setAttribute("style","animation-delay:"+x+"s;animation-name:slide-in-left-close;")
    }
    
    dropdown1.setAttribute("style","animation-name:sfill-close")
    sfill.setAttribute("style","animation-name:sfill-close")
    arrow.setAttribute("style","animation-name:arrow-fill-close;animation-delay:0s;")
    dropdown_menu.setAttribute("style","animation-name:hide;animation-delay:1.5s;display:block;")
    sleep(2000).then( () => {
        dropdown_menu.setAttribute("style","display:none;")
        dropdown1.setAttribute("style","")
        sfill.setAttribute("style","")
        arrow.setAttribute("style","")
        html.setAttribute("style","")
        x=0.6
        for (let i = 0; i < fade_in.length; i++) {
            fade_in[i].setAttribute("style","animation-delay:"+x+"s;")
            x+=.2
        }
    })
})

