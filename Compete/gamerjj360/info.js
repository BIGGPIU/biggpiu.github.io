
const xvalues = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
const yvalues = ['1469', '1469', '1474', '1395', '1395', '1395', '1380', '1380', '1380']
const plabels = ["1st","2nd","3rd","Did Not Place"]
const placements = [0,0,7,12]
const wins = ['0', '0', '1', '1', '1', '1', '1', '1', '1']
const losses = ['1', '1', '2', '10', '10', '10', '12', '12', '12']
const wlabels = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

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
