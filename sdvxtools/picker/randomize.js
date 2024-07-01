var allclass = document.getElementsByClassName("songimage");
let hasit = []

for (let i = 0; i < allclass.length; i++) {
    allclass[i].setAttribute("id","gone")
}



console.log(allclass);

function restart() {
    for (let i = 0; i < allclass.length; i++) {
        allclass[i].setAttribute("id","gone")
    }
}

function randomizecharts() {
    restart()
    var amntofcharts = document.getElementById("amount")
    var hold = amntofcharts.value; // get the value inside the input box
    hasit = []
    GetRandomNumbers(hold)
}


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




