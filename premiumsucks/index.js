let windows = document.getElementById("windows")
let mac = document.getElementById("mac")
let linux = document.getElementById("linux")
let android = document.getElementById("android")
let windows2 = document.getElementById("reveal-2")
let windows3 = document.getElementById("reveal-3")
let mac2 = document.getElementById("reveal-2m")
let getend = document.getElementsByClassName("reveal-end")
let mac3 = document.getElementById("reveal-3m")
let path = []

for (let i = 0; i < getend.length; i++) {
    getend[i].addEventListener("click", () => {
        let get4 = document.getElementById("end")
        get4.setAttribute("style","")
        get4.scrollIntoView()
    })
}


android.addEventListener("click", () => {
    let fucked = document.getElementById("android-cunts-fucked")
    fucked.setAttribute("class","android-cunts-fucked-animate")
    fucked.setAttribute("style","")
    
})


mac.addEventListener("click", () => {
    path = ["macinstructions","macinstructions2","macinstructions3"]
    let get = document.getElementById(path[0])
    get.setAttribute("style","")
    get.scrollIntoView()
})

mac2.addEventListener("click",() => {
    let get2 = document.getElementById(path[1])
    get2.setAttribute("style",'')
    get2.scrollIntoView()
})

mac3.addEventListener("click", () => {
    let get3 = document.getElementById(path[2])
    get3.setAttribute("style","")
    get3.scrollIntoView()
})

windows.addEventListener("click", () => {
    path = ["windowsinstructions","windowsinstructions2","windowsinstructions3"]
    let get = document.getElementById(path[0])
    get.setAttribute("style","")
    get.scrollIntoView()
    
    
})

windows2.addEventListener("click", () => {
    let get2 = document.getElementById(path[1])
    get2.setAttribute("style","")
    get2.scrollIntoView()  
})


windows3.addEventListener("click", () => {
    let get3 = document.getElementById(path[2])
    get3.setAttribute("style","")
    get3.scrollIntoView()
})

// getend.addEventListener("click", () => {
//     let get4 = document.getElementById("end")
//     get4.setAttribute("style","")
//     get4.scrollIntoView()
// })