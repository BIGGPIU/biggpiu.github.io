def createHTML(username,elo,wins,losses,rank,best):
    string = f"""

<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:title" content="BMHS Competitive" /> 
    <meta property="og:description" content="Bishop Mcnamara Esports League"/>  
    <meta property="og:url" content="https://biggpiu.github.io/compete" /> 
    <meta property="og:image" content="https://raw.githubusercontent.com/BIGGPIU/biggpiu.github.io/main/data/competitive.png" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="icon" type="image/x-icon" href="../data/cicon.png">
    <link rel="stylesheet" href="../index.css">
    <link rel="stylesheet" href="../user.css">
    <title>BMHS Competitive</title>
</head>

<html>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script> 
    <header class="fade-in"><a href="../">BMHS Competitive</a></header>
    <div class="user-container font-montserrat">
        <div class="username-header">
            <div id="username">{username}</div>
            <div id="ELO">{elo} ELO</div>
            <div id="rank">{rank}</div>
            <div id="WL">{wins} Wins {losses} Losses</div>
            <div id="bestplacement">Best placement: {best}</div>
        </div>
        <div class="elo-overtime">
            <div class="graph-header">ELO over time </div>
            <canvas id="myChart" style="width:100%; height:300px;"></canvas> 
        </div>
        <div class="placements">
            <div class="graph-header">Placement breakdown</div>
            <canvas id="myChartpie" style="width:100%; height:500px;"></canvas>

        </div>
        <div class="WLovertime">
            <div class="graph-header">W/L Overtime</div>
            <canvas id="myChartLine" style="width:100%; height:300px;"></canvas>

        </div>
    </div>
    <script src="info.js"></script>
</html>
"""
    return string


def createJS(elohistory,winhistory,losshistory,first,second,third,dnp):
    empty1 = []
    empty2 = []
    empty3 = []
    elohistory = str(elohistory)
    elohistory = elohistory.split(",")
    winhistory = str(winhistory)
    winhistory = winhistory.split(",")
    losshistory = str(losshistory)
    losshistory = losshistory.split(",")
    for i in elohistory:
        empty1.append(" ")
    for i in winhistory:
        empty2.append(" ")
    
    string = ""
    string += f"""
const xvalues = {empty1}
const yvalues = {elohistory}
const plabels = ["1st","2nd","3rd","Did Not Place"]
const placements = [{first},{second},{third},{dnp}]
const wins = {winhistory}
const losses = {losshistory}
const wlabels = {empty2}
"""
    print (string)

    string += """
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
"""
    return string