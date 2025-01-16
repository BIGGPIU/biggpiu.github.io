

var limit = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)
let progressbar = document.getElementById("progress-bar-progress")
let progress = 0

console.log(limit)

document.addEventListener("scroll",() => {
    progress = scrollY
    console.log(progress)
    x = Math.min(((progress / limit) * 100),100) 
    console.log(x)
    progressbar.setAttribute("style","width:"+x+"%;")
})