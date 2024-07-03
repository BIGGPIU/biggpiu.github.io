var allclass = document.getElementsByClassName("songimage");
let hasit = []

for (let i = 0; i < allclass.length; i++) {
    allclass[i].setAttribute("id","gone")
}



console.log(allclass);

function restart() {
    hasit = []
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




