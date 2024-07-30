var Left = document.querySelector("#L")
var Down = document.querySelector("#D")
var Up = document.querySelector("#U")
var Right = document.querySelector("#R")
var Check = document.querySelector("#submit")
var vid = document.getElementById("source")
var body = document.getElementById("background")
var queue = []

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

Left.addEventListener("click",function() {
    queue.push("L")
})
Down.addEventListener("click",function() {
    queue.push("D")
})
Up.addEventListener("click",function() {
    queue.push("U")
})
Right.addEventListener("click",function() {
    queue.push("R")
})
// ["D","U","R","U","D","U","L","U","D","U","R","U","D","U","L","U","R","U","L","R","D","L"]
Check.addEventListener("click",function() {
    console.log(queue)
    console.log(JSON.stringify(queue) == JSON.stringify([]))
    if (JSON.stringify(queue) == JSON.stringify(["D","U","R","U","D","U","L","U","D","U","R","U","D","U","L","U","R","U","L","R","D","L"])) {
        vid.volume = 0.3
        vid.play()
        body.setAttribute("class","showmeplz") //125000
        sleep(125000).then(() => {
            body.setAttribute("class","hidemeplz")
        })
    }
    queue = []
})
