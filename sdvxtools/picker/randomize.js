var allclass = document.getElementsByClassName("songimage");
var allbuttons = document.querySelectorAll('#banme')
var tiebreakerinitbutton = document.querySelector("#tiebreaker")
var troll = document.querySelector(".clickme")
var trolltext = document.getElementsByClassName("clickmetext")[0]
let clicks = 0

console.log(troll)

let hasit = []

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

for (let i = 0; i < allclass.length; i++) {
    allclass[i].setAttribute("id","gone")
};

for (let i = 0; i<allbuttons.length;i++) {
    allbuttons[i].addEventListener("click", function() {
        if (this.innerHTML == "BANNED") {
            this.setAttribute("class","hidden")
            sleep(1000).then(() => {
                this.setAttribute("id","banme")
                this.setAttribute("class","")
                this.innerHTML = "Ban me?"
            })
        }
        else if (this.innerHTML == "Ban me?") {
            this.setAttribute("class","banned")
            this.setAttribute("id","")
            this.innerHTML = "BANNED"
        }
    });
};

tiebreakerinitbutton.addEventListener("click", function() {
    let getme = document.getElementsByClassName("supercooltiebreakerthing")[0]
    getme.setAttribute("id","summon")
    tiebreakergetrandomcharts()
})

troll.addEventListener("click", function() {
    let bitched = document.getElementsByClassName("hehe")[0]
    if (clicks === 0) {
        bitched.setAttribute("id","nuhuh")
        trolltext.innerHTML = "Nice Try"
        clicks++
    }
    else if (clicks === 1) {
        bitched.setAttribute("id","nope")
        trolltext.innerHTML = "Dont you have anything better to do"
        clicks++
    }
    else if (clicks === 2) {
        bitched.setAttribute("id","nope2")
        trolltext.innerHTML = "This is why you're stuck at 17VF"
        clicks++
    }
    else if (clicks === 3) {
        bitched.setAttribute("id","nope3")
        trolltext.innerHTML = "You should just reload the page at this point"
        clicks++
    }
    else if (clicks === 4) {
        bitched.setAttribute("id","nope4")
        trolltext.innerHTML = "Are you a masochist"
        clicks++
    }
    else if (clicks === 5) {
        bitched.setAttribute("id","nope5")
        trolltext.innerHTML = "ok this time it'll work surely"
        clicks++
    }
    else if (clicks === 6) {
        bitched.setAttribute("id","nope6")
        trolltext.innerHTML = "please give up"
        clicks++
    }
    else if (clicks === 7) {
        bitched.setAttribute("id","nope7")
        trolltext.innerHTML = "Your addiction to this is unhealthy"
        clicks++
    }
    else if (clicks === 8) {
        bitched.setAttribute("id","nope8")
        trolltext.innerHTML = "Alright... I'll let you close this window"
        clicks++
    }
    else if (clicks === 9) {
        bitched.setAttribute("id","nope9")
        bitched.setAttribute("href","https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        trolltext.innerHTML = "Idiot"
        clicks++
    }
    else if (clicks === 10) {
        bitched.setAttribute("id","nope10")
        bitched.setAttribute("href","")
        trolltext.innerHTML = "Here, let me reload the page for you since YOU ARENT ABLE TO APPARENTLY"
        clicks++
    }
    else if (clicks === 11) {
        bitched.setAttribute("id","nope10")
        bitched.setAttribute("href","")
        trolltext.innerHTML = "How the fuck"
    }
})

console.log(allclass);

function restart() {
    hasit = []
    for (let i = 0; i<allbuttons.length; i++) {
        allbuttons[i].setAttribute("id","banme")
        allbuttons[i].setAttribute("class","")
        allbuttons[i].innerHTML = "Ban me?"
    }
    for (let i = 0; i < allclass.length; i++) {
        allclass[i].setAttribute("id","gone")
    }
}

function randomizecharts() {
    restart()
    var amntofcharts = document.getElementById("amount")
    var hold = amntofcharts.value; // get the value inside the input box
    var temp1 = document.getElementById("17")
    var temp2 = document.getElementById("18")
    var temp3 = document.getElementById("19")
    var temp4 = document.getElementById("20")
    var box17 = false
    var box18 = false
    var box19 = false
    var box20 = false
    if (temp1.checked === true) {
        box17 = true
    }
    if (temp2.checked === true) {
        box18 = true
    }
    if (temp3.checked === true) {
        box19 = true
    }
    if (temp4.checked === true) {
        box20 = true
    }

    GetRandomNumbersFromDIFF(box17,box18,box19,box20,hold)
 
    // GetRandomNumbers(hold)
}


function GetRandomNumbersFromDIFF(a,b,c,d,amnt) { // a is seventeen b is eighteen you can guess the rest, you should input them as "TRUE, FALSE, TRUE, TRUE"
    var allpossiblerandom = [];
    if (a === true) {
        allpossiblerandom = allpossiblerandom.concat(document.getElementById("container17").children) // get the children of 17
    };
    if (b === true) {
        allpossiblerandom = allpossiblerandom.concat(document.getElementById("container18").children) // get the children of 18
    };
    if (c === true) {
        allpossiblerandom = allpossiblerandom.concat(document.getElementById("container19").children) // get the children of 19
    };
    if (d === true) {
        allpossiblerandom = allpossiblerandom.concat(document.getElementById("container20").children) // get the children of 20
    };
    console.log(allpossiblerandom)
    //console.log(total)
    //console.log(allpossible)
    var endlist = []
    console.log(allpossiblerandom[0])
    console.log(allpossiblerandom.length)
    for (let i = 0; i<allpossiblerandom.length;i++){
        var hold2 = allpossiblerandom[i].length
        for (let x = 0; x<hold2; x++){
            endlist.push(allpossiblerandom[i][x])
        }
    }

    let total = endlist.length;
    console.log(endlist)

    for (let i = 0; i<amnt; i++) {
        while (true) {
            var randomint = Math.floor(Math.random() * total);
            if (hasit.includes(randomint)) {
            }
            else {
                hasit.push(randomint)
                endlist[randomint].setAttribute("id","")
                break
            };
        };
    };
};


function GetRandomNumbers(GETamnt) {
    let totalcharts = allclass.length;
    for (let i = 0; i<GETamnt;i++) {
        console.log(hasit)
        while (true) {
            var randomint = Math.floor(Math.random() * totalcharts);
            if (hasit.includes(randomint)) {
            }
            else {
                hasit.push(randomint)
                allclass[randomint].setAttribute("id","")
                console.log(hasit)
                console.log(randomint)
                break
            };
        };
    };
};

function tiebreakergetrandomcharts() {
    let allpossiblerandom = [];
    let endlist = [];
    let luckyfew = [];
    var temp1 = document.getElementById("17")
    var temp2 = document.getElementById("18")
    var temp3 = document.getElementById("19")
    var temp4 = document.getElementById("20")
    if (temp1.checked === true) {
        allpossiblerandom = allpossiblerandom.concat(document.getElementById("container17").children) // get the children of 17
    };
    if (temp2.checked === true) {
        allpossiblerandom = allpossiblerandom.concat(document.getElementById("container18").children) // get the children of 18
    };
    if (temp3.checked === true) {
        allpossiblerandom = allpossiblerandom.concat(document.getElementById("container19").children) // get the children of 19
    };
    if (temp4.checked === true) {
        allpossiblerandom = allpossiblerandom.concat(document.getElementById("container20").children) // get the children of 20
    };

    for (let i = 0; i<allpossiblerandom.length;i++){
        var hold2 = allpossiblerandom[i].length
        for (let x = 0; x<hold2; x++){
            endlist.push(allpossiblerandom[i][x])
        }
    }
    let total = endlist.length;
    console.log(endlist)

    for (let i = 0; i<10; i++) {
        while (true) {
            var randomint = Math.floor(Math.random() * total);
            if (hasit.includes(randomint)) {
            }
            else {
                hasit.push(randomint)
                luckyfew.push(endlist[randomint])
                break
            };
        };
    };

    var temp = document.getElementsByClassName("tiebreakercontainer")[0]
    
    luckyfew[1].setAttribute('id','')
    luckyfew[1].setAttribute('class','penis')
    temp.appendChild(luckyfew[1])
};