
const xvalues = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
const yvalues = ['1500', '1500', '1500', '1479', '1479', '1450', '1450', '1450', '1450', '1450', '1450']
const plabels = ["1st","2nd","3rd","Did Not Place"]
const placements = [0,0,0,6]
const wins = ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13']
const losses = ['36', '36', '36', '37', '37', '38', '38', '38', '38', '38', '38']
const wlabels = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

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
