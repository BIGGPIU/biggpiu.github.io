var amnt = document.getElementById("hosted")
var x = 0
var hold = amnt.innerHTML.split(" ")
hold.splice(3,1)
console.log(hold)


setInterval(raise,25)


function raise () {
    if (x != 210) {
        hold.splice(3,0,x)
        amnt.innerHTML = hold.join(" ")
        hold.splice(3,1)
        x++ 
        console.log(x)  
    }
}