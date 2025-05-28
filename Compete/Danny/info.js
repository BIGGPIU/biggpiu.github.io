
const xvalues = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
const yvalues = ['1558', '1558', '1558', '1558', '1525', '1525', '1541', '1532', '1517', '1556', '1543', '1511', '1517']
const plabels = ["1st","2nd","3rd","Did Not Place"]
const placements = [7,1,7,9]
const wins = ['4', '4', '4', '4', '4', '4', '8', '11', '11', '13', '14', '15', '16']
const losses = ['2', '2', '2', '2', '3', '3', '5', '8', '9', '10', '11', '17', '18']
const wlabels = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

new Chart("myChart", {
    type:"line",
    data: {
        labels: xvalues,
        datasets: [{
            fill:false,
            lineTension:0,
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgba(255,255,255,0.5)",
            color: "rgb(255,255,255)",
            data:yvalues,
        }]
    },
    options: {
        legend: {display: false}
    }
});

new Chart("myChartpie", {
    type:"pie",
    data: {
        labels:plabels,
        datasets: [{
            data:placements,
            backgroundColor:[
                "#FFD700",
                "#C0C0C0",
                "#CD7F32",
                "rgb(255,0,0)"
            ],
            color: "rgb(255,255,255)",
        }]
    }
});


new Chart("myChartLine", {
    type:"line",
    data: {
        labels:wlabels,
        datasets: [{
            data:wins,
            backgroundColor:"#FFD700",
            borderColor:"#FFD700",
            fill:0,
            tension:0.1,
            label:"wins",
        },
        {
            data:losses,
            backgroundColor:"rgba(255,0,0,0)",
            borderColor:"rgb(255,0,0)",
            color:"rgb(255,0,0)",
            fill:0,
            tension:0.1,
            label:"losses",
        }
    ]
    }
})
