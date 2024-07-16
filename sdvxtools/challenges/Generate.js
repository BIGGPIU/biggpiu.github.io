var thecode = document.getElementById("challengecode")
var generate = document.querySelector("#generate")

generate.addEventListener("click", function() {
    var temp1 = document.getElementById("17")
    var temp2 = document.getElementById("18")
    var temp3 = document.getElementById("19")
    var temp4 = document.getElementById("20")
    var VF = document.getElementById("VF")
    let listofnums = {};
    let a = false; let b = false; let c = false; let d = false;
    if (temp1.checked === true) {
        a = (Math.floor(Math.random() * 893))
    }
    if (temp2.checked === true) {
        b = Math.floor(Math.random() * 693)
    }
    if (temp3.checked === true) {
        c = Math.floor(Math.random() * 174)
    }
    if (temp4.checked === true) {
        d = Math.floor(Math.random() * 23)
    }
    listofnums.a17 = a
    listofnums.a18 = b
    listofnums.a19 = c
    listofnums.a20 = d
    answer = Generatechallengecode(listofnums,VF.value)
    thecode.innerHTML = answer
});


function Generatechallengecode(list,vf) {
    let choose = Object.keys(list)
    console.log(choose)
    console.log(list)
    while (true) {
        hold = Math.floor(Math.random() * 4)
        console.log(hold)
        if (list[choose[hold]] != false) {
            chosen = choose[hold]
            break
        } 
    }
    let part = Math.round(equation(Number(chosen.substr(1,2)),Number(vf)))
    part += genrandomness()
    let answer = (chosen.substr(1,2)+"-"+list[chosen]+"-"+part)
    return answer
}

function genrandomness() {
    let answer = Math.floor(Math.random()*10000)
    answer -= 5000
    return answer
}

function equation(D,V) {
    let answer = 1000000 - (D * 10000 - (V ** 3 * 15 + 20000))
    return answer
}