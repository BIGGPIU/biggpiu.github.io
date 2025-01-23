
const xvalues = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
const yvalues = ['1500', '1500', '1500', '1500', '1581', '1673', '1712', '1712', '1712', '1765', '1744', '1707']
const plabels = ["1st","2nd","3rd","Did Not Place"]
const placements = [12,0,1,0]
const wins = ['22', '22', '22', '22', '25', '29', '33', '33', '33', '36', '38', '39']
const losses = ['4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '5', '6']
const wlabels = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

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
